let DB, CACHE;

const NO_REWRTE = new Set(
		"js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest".split(
			"|",
		),
	),
	https = "https:",
	CDN_JSD = "jsd",
	SLASH = "-",
	H = "H",
	MAXAGE = 9e8,
	Int = Number.parseInt,
	logerr = (...args) => console.error(...args),
	cdnStore = (mode) => DB.transaction([CDN_JSD], mode).objectStore(CDN_JSD),
	split = (i) => i.split(">"),
	JSD = split("{cdn.jsd}"),
	JSD_HOST_PREFIX = new Map(
		JSD.map((i) => {
			const p = i.indexOf("/");
			return p > 0 ? [i.slice(0, p), i.slice(p + 1)] : [i, ""];
		}),
	),
	NPM = `//${JSD[0]}/`,
	JSD_LI = [],
	rank = (li) => {
		const [ok, err, cost] = li;
		// 原理：得分随着失败次数和耗时增加而变大，随着成功次数增加而变小。
		li[3] = ((err + 1) * (cost + 1)) / (ok + 1);
	},
	{ host: HOST } = location,
	init = async () => {
		[CACHE, DB] = await Promise.all([
			caches.open(1),
			new Promise((resolve, reject) =>
				Object.assign(indexedDB.open(H, 1), {
					onupgradeneeded: (event) => {
						const db = event.target.result;
						if (!db.objectStoreNames.contains(CDN_JSD)) {
							db.createObjectStore(CDN_JSD, {
								keyPath: H,
							}).createIndex(H, H, { unique: true });
						}
					},
					onsuccess: (event) => resolve(event.target.result),
					onerror: (event) => reject(event.target.error),
				}),
			),
		]);
		const store = cdnStore("readonly");
		JSD_LI.splice(
			0,
			JSD_LI.length,
			...(await Promise.all(
				JSD.map(
					(prefix) =>
						new Promise((resolve) => {
							const query = store.get(prefix),
								push = (
									// ok err cost rank
									i = [0, 0, 0, 0],
								) => {
									resolve([...i, prefix]);
								};
							query.onsuccess = (e) => {
								const record = e.target.result;
								if (record) {
									const { i } = record;
									rank(i);
									push(i);
								} else {
									push();
								}
							};
							query.onerror = (err) => {
								logerr(err);
								push();
							};
						}),
				),
			)),
		);
	},
	_get = async (now, cache_req, url, res, maxage) => {
		if ([200, 204].includes(res.status)) {
			const content_type = res.headers.get("content-type");
			for (const prefix of ["video/", "audio/"]) {
				if (content_type?.startsWith(prefix)) {
					return res;
				}
			}
			if (!maxage) {
				const cache = res.headers.get("cache-control");
				if (cache && cache !== "no-cache") {
					maxage = /max-age=(\d+)/.exec(cache);
					if (maxage) {
						maxage = +maxage[1];
					}
				}
			}
			const rc = new Response(res.clone().body, res);
			if (maxage > 0) {
				rc.headers.set(SLASH, (now + maxage).toString(36));
			}
			// 始终缓存，这样网络故障也可以返回之前的版本
			await CACHE.put(cache_req, rc);
		} else if (res.status > 0) {
			throw res;
		}
		return res;
	},
	get = async (now, req, url) => {
		// 如果在chrome的控制台手动停止serviceWorker，再次刷新不会触发activate事件，所以在这里确保CACHE存在
		if (!CACHE) {
			await init();
		}
		const cache_req = req,
			prefix = JSD_HOST_PREFIX.get(url.host);

		if (prefix !== undefined) {
			let { pathname } = url,
				is_jsd = JSD_LI.length;
			if (prefix) {
				const prefix_len = prefix.length + 1;
				if (pathname.slice(1, prefix_len) == prefix) {
					pathname = pathname.slice(prefix_len);
				} else {
					is_jsd = 0;
				}
			}
			if (is_jsd) {
				const protocol = url.protocol + "//",
					jsd_li = JSD_LI.toSorted((a, b) => a[3] - b[3]),
					ctrl_li = [];

				return new Promise((resolve, reject) => {
					const doFetch = async () => {
							const li = jsd_li.shift(),
								prefix = li[4],
								id = ctrl_li.length,
								ctrl = new AbortController();

							ctrl_li.push(ctrl);
							url = new URL(protocol + prefix + pathname);
							req = new Request(url, { method: req.method });
							const start = new Date();
							try {
								li[3] += 2e3; // 避免启动时候, 一个域名下的请求过多
								resolve(
									await _get(
										now,
										cache_req,
										url,
										await fetch(req, { signal: ctrl.signal }),
										MAXAGE,
									),
								);
								// ok err cost rank
								++li[0];
								is_jsd = 0;
								clearTimeout(timer);
								for (let i = ctrl_li.length; i-- > 0; ) {
									if (i != id) {
										ctrl_li[i].abort();
									}
								}
							} catch (err) {
								if (is_jsd) {
									++li[1];
									logerr(url + "", err);
									if (jsd_li.length) {
										doFetch();
									} else {
										reject(err);
									}
								}
							} finally {
								li[2] += new Date() - start;
								rank(li);
								cdnStore("readwrite").put({
									H: prefix,
									i: li.slice(0, 3),
								});
							}
						},
						timer = setInterval(() => {
							if (jsd_li.length) {
								doFetch();
							} else {
								clearInterval(timer);
							}
						}, 2e3);

					doFetch();
				});
			}
		}

		const is_woff2 = url.pathname.endsWith(".woff2");
		if (req.mode == "no-cors" && !is_woff2) {
			req = new Request(url, { method: req.method });
		}

		let retry = 0;
		while (true) {
			try {
				return await _get(
					now,
					cache_req,
					url,
					await fetch(req),
					is_woff2 ? MAXAGE : 0,
				);
			} catch (err) {
				logerr(retry, url + "", err);
				if (++retry > 9) {
					throw err;
				}
			}
		}
	},
	cacheGet = (cache_req, cache_url) =>
		caches.match(cache_req).then((res) => {
			const now = Int(new Date() / 1e3),
				go = async () => {
					try {
						return await get(now, cache_req, cache_url);
					} catch (err) {
						logerr(cache_url + "", err);
						throw err;
					}
				};

			if (res) {
				const expire = res.headers.get(SLASH); // expire not exist for no-cors ( opaque type )

				if (expire && Int(expire, 36) > now) {
					return res;
				}

				return new Promise((resolve) => {
					// 如果3秒没加载完，就返回缓存
					const timer = setTimeout(() => {
						resolve(res);
					}, 3e3);
					go().then(
						(r) => {
							clearTimeout(timer);
							resolve(r);
						},
						() => resolve(res),
					);
				});
			}
			return go();
		});

Object.entries({
	install: (event) => event.waitUntil(self.skipWaiting()),
	activate: (event) => event.waitUntil(clients.claim()),
	push: (e) => {
		e.waitUntil(self.registration.showNotification(...e.data.json()));
	},
	notificationclick: (e) => {
		e.notification.close();
		e.waitUntil(clients.openWindow(e.notification.data.url));
	},
	fetch: (event) => {
		let req = event.request;
		const { method } = req;

		if (!["GET", "OPTIONS"].includes(method)) {
			return;
		}

		const url = new URL(req.url),
			{ pathname, protocol } = url;

		if (!protocol.startsWith("http")) {
			return;
		}

		if (url.host == HOST) {
			if (pathname == "/_") {
				event.respondWith(
					(async () => {
						const cdn_v = split("{cdn.v}"),
							fStr = async (url) =>
								(await cacheGet(new Request(url), new URL(url))).text(),
							fJson = async (url) => JSON.parse(await fStr(url)),
							retryFetch = async (suffix) => {
								const genUrl = (host) => `${https}//${host}/${suffix}`;
								for (const host of cdn_v) {
									const url = genUrl(host);
									try {
										return await (
											await get(0, new Request(url), new URL(url))
										).text();
									} catch {}
								}
								for (const host of cdn_v) {
									try {
										return await fStr(genUrl(host));
									} catch {}
								}
							},
							pkg_md = "{pkg.md}",
							at = "@",
							org_i = "@{pkg.i}/",
							site = "site",
							mdv = retryFetch(pkg_md),
							[sitev, _18x, _18x_v] = split(await retryFetch(org_i + site)),
							pkg_site = site + at + sitev,
							pkg_18x = _18x + at + _18x_v,
							_V = `${NPM}${pkg_md}`,
							https_npm = https + NPM,
							npm_i = `${https_npm}${org_i}${pkg_site}/-`,
							js = ".js",
							site_js = fStr(npm_i + js),
							jstrLi = (li) => li.map((i) => JSON.stringify(i)),
							js_css = await Promise.all([
								fStr(https_npm + pkg_18x + "/_.css"),
								fStr(npm_i + ".css"),
								...split(await mdv).map((ver, pos) =>
									fJson(https + _V + at + ver + "/" + "PB"[pos] + js),
								),
							]),
							B = jstrLi(js_css.pop()),
							[reset_css, site_css, P] = jstrLi(js_css);

						// for prefetch
						await site_js;

						return new Response(
							`const _P=${P},_V='${_V}',_I='${NPM}${org_i}';(()=>{const D=document,N=(t,o)=>D.head.appendChild(Object.assign(D.createElement(t),o)),C=(...l)=>l.map(t=>N("style",{innerHTML:t})),S=o=>N("script",o),M=t=>S({type:'module',innerHTML:t});D.body.style="background:var(--svgWait) 50% 50%/7em no-repeat;height:100dvh";S({type:'importmap',innerHTML:'{"imports":{"x/":"${NPM}${pkg_18x}/","i/":"${NPM}${org_i}"}}'});S({innerHTML:${B[1]}});M(${B[2]});M('import "i/${pkg_site}/-.js"');C(${reset_css},${site_css},${B[0]})})()`,
							{
								headers: { "Content-Type": "text/javascript" },
							},
						);
					})(),
				);
				return;
			}
			// 单页面
			if (!NO_REWRTE.has(pathname.split(".").pop())) {
				req = new Request("/", {
					method,
				});
			}
		}

		event.respondWith(cacheGet(req, url));
	},
}).forEach(([key, func]) => addEventListener(key, func));

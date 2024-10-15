const F = {
		fetch: (event) => {
			const key = "respondWith"
			event[key](
				new Promise((resolve, reject) => {
					P.then(() => {
						event[key] = (r) => {
							resolve(r || fetch(event.request))
						}
						F.fetch(event)
					}, reject)
				}),
			)
		},
	},
	P = (async () => {
		const X = "{conf.x}"
		const verp = X.lastIndexOf("@")
		const npmmirror_pkg =
			verp > 0 ? X.slice(0, verp) + "/" + X.slice(verp + 1) : X + "/latest"
		// const CDN_LI = ["//127.0.0.1:7775/x/"],
		const CDN_LI = [
				"registry.npmmirror.com/" + npmmirror_pkg + "/files",
				"unpkg.com/" + X,
				...[
					"cdn.jsdmirror.cn",
					"cdn.jsdelivr.net",
					"jsd.cdn.noisework.cn",
					"fastly.jsdelivr.net",
					// 'x/': '//cdn.jsdelivr.net/npm/18x/'
				].map((i) => i + "/npm/" + X),
			].map((i) => "//" + i + "/"),
			[S, Jsd] = await Promise.all(
				["S", "Jsd", "webpush"]
					.map(async (i) => {
						i = i + ".js"
						for (const prefix of CDN_LI) {
							let url = prefix + i,
								r = fetch(url)
							try {
								r = await r
								if (r.status == 200) {
									return eval(await r.text())
								}
							} catch (e) {
								console.error(url, e)
							}
						}
					})
					.slice(0, 2),
			)

		S(
			[
				// high availability cdn mirror for jsdelivr
				Jsd,
			],
			"{conf.v}",
			CDN_LI[0],
		)
		return clients.claim()
	})()

for (const i of "notificationclick push".split(" ")) {
	F[i] = async (event) => {
		const key = "waitUntil"
		event[key](
			new Promise((resolve) => {
				P.then(() => {
					event[key] = resolve
					F[i](event)
				})
			}),
		)
	}
	addEventListener(i, (event) => F[i](event))
}

Object.entries({
	install: (event) => event.waitUntil(self.skipWaiting()),
	activate: (event) => event.waitUntil(P),
	fetch: (event) => F.fetch(event),
}).forEach(([key, func]) => addEventListener(key, func))

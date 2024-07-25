const P = (async () => {
	const X = "{conf.x}"
	const verp = X.lastIndexOf("@")
	const npmmirror_pkg =
		verp > 0 ? X.slice(0, verp) + "/" + X.slice(verp + 1) : X + "/latest"
	// const CDN_LI = ["//127.0.0.1:7775/x/"],
	const CDN_LI = [
			"registry.npmmirror.com/" + npmmirror_pkg + "/files",
			"unpkg.com/" + X,
			...[
				"cdn.jsdmirror.com",
				"cdn.jsdelivr.net",
				"jsd.cdn.noisework.cn",
				"fastly.jsdelivr.net",
				// 'x/': '//cdn.jsdelivr.net/npm/18x/'
			].map((i) => i + "/npm/" + X),
		].map((i) => "//" + i + "/"),
		[S, Jsd] = await Promise.all(
			["S", "Jsd", "webpush"].map(async (i) => {
				i = i + ".js"
				for (const prefix of CDN_LI) {
					const url = prefix + i,
						r = await fetch(url)
					if (r.status == 200) {
						try {
							return eval(await r.text())
						} catch (e) {
							console.error(url, e)
						}
					}
				}
			}),
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

const F = {
	install: (event) => event.waitUntil(self.skipWaiting()),
	activate: (event) => event.waitUntil(P),
	fetch: (event) => {
		const key = "respondWith"
		event[key](
			(async () => {
				await P
				return new Promise((resolve) => {
					let response
					event[key] = (r) => {
						response = r
					}
					F.fetch(event)
					resolve(response || fetch(event.request))
				})
			})(),
		)
	},
}

"notificationclick push".split(" ").forEach((i) => {
	F[i] = async (event) => {
		const key = "waitUntil"
		event[key](
			(async () => {
				await P
				return new Promise((resolve) => {
					event[key] = resolve
					F[i](event)
				})
			})(),
		)
	}
})

for (const i in F) {
	addEventListener(i, F[i])
}

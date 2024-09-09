import "x/i-h.js"
import { init } from "x/lang.js"
import xBox from "x/xBox.js"
import { fTxt } from "x/f.js"
import { User } from "x/user.js"

const D = document
const New = (tag) => D.createElement(tag)

const post = (url, body) => {
	const opt = {
		method: "POST",
		credentials: "include",
	}
	if (body) opt.body = body
	return fTxt(_API + url, opt)
}

init()

if (__CONF__ == "ol") {
	;(async () => {
		// console.log(JSON.stringify((await _S.pushManager.getSubscription()).toJSON()))
		const {
			expirationTime,
			endpoint,
			keys: { auth, p256dh },
		} = (
			(await _S.pushManager.getSubscription()) ||
			(await _S.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey: Uint8Array.from(
					// use ~/i18n/srv/sh/vapid.coffee gen
					atob(
						"BGlANgfxympo2q3zEKUiJT6UhdMmWy4idvsQvbjtaPE1LoxDqo7vFbgesdLpub1H5njPXPgXvg6cWG8JkpY1qG4",
					),
					(c) => c.charCodeAt(0),
				),
			}))
		).toJSON()

		if (localStorage.SA != auth) {
			await post(
				"webpush",
				JSON.stringify([endpoint, auth, p256dh, D.documentElement.lang]),
			)
			localStorage.SA = auth
		}
	})()
}

const MAILSUB = "mailsub"

Object.assign(window, {
	webpush: async () => {
		if ("granted" != (await Notification.requestPermission())) {
			console.log("TODO 如何手动启用通知")
		} else {
			const b = xBox(),
				i_h = New("i-h")
			i_h.innerText = "webpushed"
			b.prepend(i_h)
		}
	},
	mailsub: async () => {
		let { account } = localStorage
		const b = xBox(),
			i_h = New("i-h"),
			p = New("p"),
			_post = async (opt) => {
				await post(MAILSUB, opt)
				i_h.style = "display:flex;flex-direction:column;align-items:center"
				i_h.innerText = MAILSUB
				p.style = "text-align:center;margin-bottom:0"
				p.innerText = account
				p.after(i_h)
			}

		p.style =
			"background:var(--svgWait) 0 0 / cover no-repeat;height:100px;width:100px;margin:64px auto"

		if (User() && account?.includes("@")) {
			b.prepend(p)
			_post()
		} else {
			i_h.innerText = "mail"
			b.prepend(i_h)
			const form = i_h.children[0]
			form.onsubmit = (e) => {
				i_h.innerText = MAILSUB
				e.preventDefault()
				i_h.remove()
				b.prepend(p)
				account = form.getElementsByTagName("input")[0].value
				_post(JSON.stringify([account, D.documentElement.lang]))
			}
		}
	},
})

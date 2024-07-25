const _tree = (li, stack) => {
	let [depth, nowli] = stack.at(-1)

	while (li.length) {
		const [d, o] = li.shift()
		if (d == depth) {
			nowli.push(o)
		} else if (d > depth) {
			const t = [o],
				len = nowli.length - 1
			nowli[len] = [nowli[len], t]
			stack.push([d, t])
			_tree(li, stack)
			;[depth, nowli] = stack.at(-1)
		} else {
			while (d < depth) {
				stack.pop()
				;[depth, nowli] = stack.at(-1)
			}
			nowli.push(o)
			return
		}
	}
}

const tree = (li) => {
	const root = []
	_tree(li, [[0, root]])
	return root
}

const strLi = (s) => {
	const r = [],
		stack = []
	for (let i of s.split("\n")) {
		i = i.trimEnd()
		if (i) {
			const t = i.trimStart(),
				indent = i.length - t.length

			if (stack.length == 0) {
				stack.push(indent)
			} else if (indent > stack.at(-1)) {
				stack.push(indent)
			} else {
				while (indent < stack.at(-1)) {
					stack.pop()
				}
			}
			r.push([stack.length - 1, t])
		}
	}
	return r
}

const extract = (url, txt) => {
	let title,
		in_head,
		pos = 0

	const li = txt.split("\n")

	for (const i of li) {
		++pos
		if (["---", "+++"].includes(i)) {
			in_head = !in_head
		}
		if (in_head) {
			continue
		}
		if (i.startsWith("#")) {
			const p = i.indexOf(" ")
			if (p > 0) {
				title = i.slice(p + 1)
				break
			}
		}
	}

	if (!title) {
		return
	}
	if (
		// has more
		li.slice(pos).join("\n").trim() ? 1 : 0
	) {
		const pos = url.lastIndexOf(".")
		if (~pos) {
			url = url.slice(0, pos)
		}
		if (url.endsWith("/README")) {
			url = url.slice(0, -7)
		}
		return [title, url]
	}
	return title
}

export const gen = (url, lang_li, file, gen_arg) => {
	url = url + "/"
	let toc
	const fp = lang_li[0] + "/" + url + "TOC"
	try {
		toc = readStr(fp)
	} catch (e) {
		console.error(e)
		return
	}
	toc = strLi(toc)
	if (toc.length > 0) {
		if (!url.startsWith("/")) {
			url = `/${url}`
		}

		for (const lang of lang_li) {
			const toc_li = [],
				dir = `${lang}${url}`
			for (const [indent, fp] of toc) {
				let txt
				try {
					txt = readStr(dir + fp)
				} catch (e) {
					console.error(e)
					continue
				}
				txt = extract(url + fp, txt)
				if (txt) {
					toc_li.push([indent, txt])
				}
			}
			let val
			try {
				val = tree(toc_li.slice(), 0, [])
			} catch (e) {
				for (const i of toc_li) {
					console.error(JSON.stringify(i))
				}
				console.error("\n" + fp + "\n", e)
				return
			}
			file.push([dir + "_.json", JSON.stringify(val)])
			if (gen_arg) gen_arg(lang, toc_li)
		}
	}
}

export default (nav, lang_li) => {
	const file = []
	for (const { use, url, i18n, menu } of nav) {
		if (use == "Doc") {
			let arg
			const p = menu.indexOf(" ")
			if (~p) {
				arg = menu.slice(p + 1).trim()
			}
			if (arg) {
				const arg_title_li = {}
				for (let i of arg.split(",")) {
					i = i.trim()
					gen(`/${i}`, lang_li, file, (lang, toc_li) => {
						if (!Array.isArray(toc_li[0])) {
							return
						}
						let title = toc_li[0][1]
						if (Array.isArray(title)) {
							// "i18 : 命令行 markdown & yml 翻译工具" # no more
							// ["i18n.site : 多语言纯静态网站(文档)框架","/doc/i18n.site"] # has more
							title = title[0]
						}
						if (!arg_title_li[lang]) {
							arg_title_li[lang] = []
						}
						arg_title_li[lang].push(title)
					})
				}
				for (const lang in arg_title_li) {
					file.push([
						lang + "/" + url + "/_.json",
						JSON.stringify(arg_title_li[lang]),
					])
				}
			} else {
				gen(url, lang_li, file)
			}
		}
	}
	return { file }
}

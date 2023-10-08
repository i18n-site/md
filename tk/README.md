# I18N.SITE · Serhetsiz Resminamalar<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

[133 dürli dile](https://github.com/i18n-site/node/blob/main/lang/src/index.js) awtomatiki terjime etmegi goldaýan statiki sahypa generatory I18N.SITE.

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Käbir adamlar soramak isläp bilerler, indi brauzerlerde içerki terjime funksiýalary bar, web sahypasyny halkaralaşdyrmak zerur dälmi?

**Diňe tutuş sahypany halkaralaşdyrmak arkaly köp dilli saýtda doly tekstli gözleg we gözleg motory optimizasiýasyny goldap boljakdygyny** aýtmak isleýärin.

## Tutorial

## Funksiýa Giriş

### Markdown Formatyny Saklaň

### Terjimäni Üýtgediň

Terjimäni üýtgedeniňizden soň, keş keşini täzelemek üçin `./i18n.sh` täzeden işlemeli.

### Terjime Bellikleri

Terjime düşündirişleri, &quot; ` ```rust` &quot; ýaly dillerden soň dili görkezmeli.

Häzirki wagtda pos, c, cpp, java, js, kofe, piton we baş üçin düşündiriş terjimesini goldaýar.

Has köp dilde düşündirişler üçin terjime goldawyny goşmak üçin [tran_md / src / comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) redaktirläň.

### Proksi Sazlaň

Aşakdaky gurşaw üýtgeýjilerini bellemek, Google Translate API jaňlaryna proksi arkaly geçmäge mümkinçilik berýär.

```bash
export https_proxy=http://127.0.0.1:7890


```

### Üýtgeýän Ornaşdyrmak

```
test: 测试变量<br 0>嵌入
```

### Keş Boş

```bash
rm -rf .i18n/.cache


```

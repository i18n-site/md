# Plantilla Blog Rehegua

`i18n/conf.yml` `use: Blog` apytégui heꞌise ojepuruha plantilla blog rehegua ojejapo hag̃ua.

Pe archivo `markdown` blog kuatiahaipyre rehegua oikotevẽ omohenda meta marandu.

Marandu meta rehegua oĩvaꞌerã vore ñepyrũme, oñepyrũva `---` gui ha opa `---` Marandu ñembohekorã formato mbytépe haꞌehína `YAML` .

Peteĩ archivo demostración ñemboheko haꞌehína kóicha:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ohechauka contenido resumen, ojehechaukátava página índice blog-pe.

Oipytyvõvo `YMAL` '. | `Ñe’ẽjoajuha, ikatu rehai ñembohysýi heta línea rehegua.

Pe yvyra directorio ñemboheko oĩva blog akatúape haꞌehína avei `TOC` vore (ehecha pe kapítulo ohasavaꞌekue umi artíkulo ojeꞌevaꞌekue `TOC` -pe añoite ojehechaukáta blog página web-pe).

Umi artíkulo ndorekóiva meta marandu ndojehechái va’erã blog página web-pe, ha katu ikatu ojekuaa yvyra directorio-pe oĩva akatúape.

## Marandu Haihára Rehegua

Haihára marandu ikatu ojehai meta marandu artíkulope, haꞌeháicha:

```yml
author: marlowe
```

Upéi emohenda `author.yml` ñe’ẽ ypykue ryru’ípe ha emoĩ haihára marandu, ha’eháicha :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ha `title` ha’e opavave opcional. Noñemohendapáiramo `name` , ojeporúta pe clave réra (ko’ápe `marlowe` ) `name` ramo.

Ehecha proyecto demostración [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ha [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artículo Pinnado Rehegua

Tekotevẽramo emoĩ pe artíkulo yvate gotyo, emongu’e `i18n.site` ha emohenda umi `xxx.yml` vore oĩva `.i18n/data/blog` guype, ha emoambue aravo’i peteĩ papapy negativo-pe (heta papapy negativo oñemboheko tuichavéva guive michĩvéva peve).
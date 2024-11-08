# Awoṣe Bulọọgi

`i18n/conf.yml` ninu `use: Blog` tumọ si lilo awoṣe bulọọgi fun ṣiṣe.

Faili `markdown` ti ifiweranṣẹ bulọọgi nilo lati tunto alaye meta.

Alaye Meta gbọdọ wa ni ibẹrẹ faili naa, bẹrẹ pẹlu `---` ati ipari pẹlu `---` Ọna kika ti alaye iṣeto ni aarin jẹ `YAML` .

Iṣeto ti faili demo jẹ bi atẹle:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` tọkasi akopọ akoonu, eyiti yoo han lori oju-iwe atọka bulọọgi.

Pẹlu iranlọwọ ti `YMAL` ' | `Syntax, o le kọ awọn akopọ laini pupọ.

Iṣeto ti igi liana ni apa ọtun ti bulọọgi naa tun jẹ awọn faili `TOC` (wo ipin `TOC` tẹlẹ).

Awọn nkan ti ko ni alaye meta ninu kii yoo han loju oju-iwe bulọọgi, ṣugbọn o le han ninu igi liana ni apa ọtun.

## Alaye Onkowe

Alaye onkọwe le kọ sinu alaye meta ti nkan naa, gẹgẹbi:

```yml
author: marlowe
```

Lẹhinna ṣatunkọ `author.yml` ninu itọsọna ede orisun ati ṣafikun alaye onkọwe, bii :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ati `title` jẹ iyan. Ti `name` ko ba ṣeto, orukọ bọtini (nibi `marlowe` ) yoo ṣee lo bi `name` .

Wo iṣẹ akanṣe demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ati [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Nkan Ti a Pin

Ti o ba nilo lati pin nkan naa si oke, jọwọ ṣiṣẹ `i18n.site` ki o ṣatunkọ awọn faili `xxx.yml` ni isalẹ `.i18n/data/blog` , ki o yi akoko akoko pada si nọmba odi (awọn nọmba odi pupọ yoo jẹ lẹsẹsẹ lati tobi si kere julọ).
# Unka Biloogii

`use: Blog` keessaa `i18n/conf.yml` jechuun unkaa biloogii agarsiisaaf fayyadamuu jechuudha.

Faayilli `markdown` barreeffama biloogii odeeffannoo meetaa qindeessuu qaba.

Odeeffannoon meetaa jalqaba faayilii irratti ta'uu qaba, `---` irraa eegalee `---` Akkaataan odeeffannoo qindeessaa gidduu jiru `YAML` dha.

Qindaa'inni faayilii demoo akka armaan gadiitti:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` gabaabduu qabiyyee agarsiisa, kunis fuula indeeksii biloogii irratti ni mul'ata.

Gargaarsa `YMAL` ' tiin. | `Galmee, gabaabduu sarara hedduu barreessuu dandeessa.

Qindaa'inni muka galmee gama mirgaa biloogichaa irrattis faayilii `TOC` dha (barruulee `TOC` keessatti tarreeffaman qofatu indeksii fuula jalqabaa biloogii keessatti mul'ata).

Barreeffamoonni odeeffannoo meetaa hin qabne fuula jalqabaa biloogii irratti hin mul'atan, garuu muka galmee mirgaa irratti mul'achuu danda'u.

## Odeeffannoo Barreessaa

Odeeffannoon barreessaa odeeffannoo meetaa barreeffamichaa keessatti barreeffamuu danda’a, kanneen akka:

```yml
author: marlowe
```

Sana booda galmee afaan madda keessatti `author.yml` gulaaliitii odeeffannoo barreessaa dabali, kan akka :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` fi `title` hundi filannoodha. Yoo `name` hin saagamin, maqaan furtuu (asitti `marlowe` ) akka `name` tti fayyadama.

Pirojektii demoo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) fi [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) ilaali

## Barreeffama Pinned

Yoo barruu gara gubbaatti pin gochuu barbaadde, maaloo `i18n.site` fiigi fi faayilii `xxx.yml` `.i18n/data/blog` gadii gulaali, fi chaappaa yeroo gara lakkoofsa negaatiiviitti jijjiiri (lakkoofsi negaatiivii hedduun guddaa irraa gara xiqqaatti ni saagama).
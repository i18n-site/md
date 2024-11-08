# Samfurin Blog

`i18n/conf.yml` daga cikin `use: Blog` yana nufin amfani da samfurin blog don nunawa.

Fayil ɗin `markdown` na gidan yanar gizon yana buƙatar saita bayanan meta.

Bayanan Meta dole ne ya kasance a farkon fayil ɗin, farawa da `---` kuma yana ƙarewa tare da `---` Tsarin bayanan sanyi a tsakiya shine `YAML` .

Tsarin fayil ɗin demo shine kamar haka:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` yana nuna taƙaitaccen abun ciki, wanda za'a nuna akan shafin fihirisar bulogi.

Tare da taimakon `YMAL` ' | `Syntax, za ku iya rubuta taƙaitaccen layukan da yawa.

Tsarin bishiyar kundin adireshi a gefen dama na blog ɗin shima `TOC` ne (duba babin da ya gabata kawai labarin da aka jera a cikin `TOC` zai bayyana a cikin fihirisar gidan yanar gizon blog.

Labaran da ba su ƙunshi bayanan meta ba ba za su bayyana a shafin gidan yanar gizon ba, amma suna iya bayyana a cikin bishiyar jagorar da ke hannun dama.

## Bayanin Marubuci

Ana iya rubuta bayanan marubuci a cikin bayanan meta na labarin, kamar:

```yml
author: marlowe
```

Sannan a gyara `author.yml` a cikin littafin tushen harshe kuma ƙara bayanin marubuci, kamar :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` da `title` duk na zaɓi ne. Idan `name` ba a saita ba, za a yi amfani da sunan maɓalli (a nan `marlowe` ) azaman `name` .

Duba aikin demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) da [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Labarin Da Aka Liƙa

Idan kana buƙatar saka labarin zuwa sama, da fatan za a gudanar da `i18n.site` kuma gyara fayilolin `xxx.yml` da ke ƙasa `.i18n/data/blog` , kuma canza tambarin lokaci zuwa lambar mara kyau (za a daidaita lambobi mara kyau da yawa daga mafi girma zuwa ƙarami).
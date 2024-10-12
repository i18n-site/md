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

Tare da taimakon `YMAL` '|`Syntax, za ku iya rubuta taƙaitaccen layukan da yawa.

Tsarin bishiyar kundin adireshi a gefen dama na blog ɗin shima `TOC` ne (duba babin da ya gabata kawai labarin da aka jera a cikin `TOC` zai bayyana a cikin fihirisar gidan yanar gizon blog.

Labaran da ba su ƙunshi bayanan meta ba ba za su bayyana a shafin gidan yanar gizon ba, amma suna iya bayyana a cikin bishiyar jagorar da ke hannun dama.

Idan kana buƙatar saka labarin zuwa sama, da fatan za a gudanar da `i18n.site` sannan ka gyara fayilolin `xxx.yml` da ke ƙasa `.i18n/data/blog` , kuma canza tambarin lokaci zuwa lambar mara kyau (za a jera lambobi mara kyau da yawa daga ƙarami zuwa babba a cikakkiyar ƙimar).
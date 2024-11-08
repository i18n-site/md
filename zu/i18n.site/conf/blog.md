# Isifanekiso Sebhulogi

`i18n/conf.yml` koku `use: Blog` kusho ukusebenzisa isifanekiso sebhulogi ukuze unikele.

Ifayela elingu `markdown` lokuthunyelwe kwebhulogi lidinga ukulungisa ulwazi lwe-meta.

Imininingwane ye-Meta kufanele ibe ekuqaleni kwefayela, iqale ngo `---` futhi igcine ngo- `---` Ifomethi yolwazi lokumisa phakathi nendawo ithi `YAML` .

Ukucushwa kwefayela ledemo kungokulandelayo:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ikhombisa isifinyezo sokuqukethwe, esizovezwa ekhasini lenkomba yebhulogi.

Ngosizo luka- `YMAL` ' | `I-syntax, ungabhala izifinyezo zemigqa eminingi.

Ukucushwa kwesihlahla somkhombandlela ohlangothini lwesokudla lwebhulogi nakho kungamafayela `TOC` (bona isahluko sangaphambilini kuphela izindatshana ezisohlwini olu `TOC` ezizovela kunkomba yekhasi eliyisiqalo lebhulogi.

Izihloko ezingaqukethe ukwaziswa kwe-meta ngeke zivele ekhasini eliyisiqalo lebhulogi, kodwa zingavela esihlahleni sohla lwemibhalo kwesokudla.

## Ulwazi Lombhali

Ulwazi lombhali lungabhalwa kumininingwane yemetha ye-athikili, njengokuthi:

```yml
author: marlowe
```

Bese uhlela `author.yml` ohlwini lwemibhalo lolimi oluwumthombo bese wengeza imininingwane yombhali, njengokuthi :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` kanye no `title` zonke azikhethele. Uma `name` angasethiwe, igama elingukhiye (lapha `marlowe` ) lizosetshenziswa njengo- `name` .

Bona iphrojekthi yedemo engu [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) - [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Isihloko Esiphiniwe

Uma udinga ukuphina isiqephu sendatshana phezulu, sicela usebenzise `i18n.site` bese uhlela amafayela `xxx.yml` ngezansi kuka `.i18n/data/blog` , futhi ushintshe isitembu sesikhathi sibe inombolo enegethivu (izinombolo ezinegethivu eziningi zizohlungwa kusukela kwenkulu kuye kwencane kunazo zonke).
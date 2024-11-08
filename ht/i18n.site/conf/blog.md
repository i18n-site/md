# Modèl Blog

`i18n/conf.yml` sou `use: Blog` vle di itilize modèl blog la pou rann.

Fichye `markdown` nan pòs blog la bezwen konfigirasyon meta enfòmasyon.

Meta enfòmasyon yo dwe nan kòmansman fichye a, kòmanse ak `---` epi fini ak `---` Fòma enfòmasyon konfigirasyon an nan mitan an se `YAML` .

Konfigirasyon yon fichye Demo se jan sa a:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` endike rezime kontni an, ki pral parèt sou paj endèks blog la.

Avèk èd `YMAL` ' | `Sentaks, ou ka ekri rezime milti-liy.

Konfigirasyon pyebwa anyè a sou bò dwat blog la tou se `TOC` fichye (gade chapit anvan an Se sèlman atik ki nan lis `TOC` ap parèt nan endèks paj dakèy blog la).

Atik ki pa genyen meta enfòmasyon p ap parèt sou paj dakèy blog la, men yo ka parèt nan pye bwa anyè ki sou bò dwat la.

## Enfòmasyon Otè

Enfòmasyon otè yo ka ekri nan meta enfòmasyon atik la, tankou:

```yml
author: marlowe
```

Lè sa a, modifye `author.yml` nan anyè lang sous la epi ajoute enfòmasyon otè, tankou :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ak `title` yo tout opsyonèl. Si `name` pa mete, yo pral itilize non kle a (isit la `marlowe` ) kòm `name` .

Gade pwojè demonstrasyon [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ak [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Atik Kole

Si ou bezwen mete atik la sou tèt, tanpri kouri `i18n.site` epi edite `xxx.yml` fichye ki anba a `.i18n/data/blog` , epi chanje timestamp la nan yon nimewo negatif (plizyè nimewo negatif yo pral klase soti nan pi gwo a pi piti).
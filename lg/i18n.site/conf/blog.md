# Ekifaananyi Kya Blog

`i18n/conf.yml` ku `use: Blog` kitegeeza okukozesa ekifaananyi kya blog okukola rendering.

Fayiro ya `markdown` eya blog post yeetaaga okutegeka amawulire aga meta.

Amawulire ga meta galina okuba ku ntandikwa ya fayiro, nga gatandikira ku `---` ne gakoma ne `---` Enkola y'amawulire g'okusengeka wakati eri `YAML` .

Ensengeka ya fayiro ya demo eri bweti:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` eraga mu bufunze ebirimu, ebijja okulagibwa ku lupapula lwa blog index.

Nga tuyambibwako `YMAL` '. | `Syntax, osobola okuwandiika ebifunze ebirina ennyiriri nnyingi.

Ensengeka y’omuti gwa dayirekita ku ludda olwa ddyo olwa blog nayo ya fayiro `TOC` (laba essuula emabega Ebiwandiiko byokka ebiwandiikiddwa mu `TOC` bye bijja okulabika mu index y’olupapula lwa blog.

Ebiwandiiko ebitaliimu mawulire ga meta tebijja kulabika ku mukutu gwa blog, naye bisobola okulabika mu muti gwa dayirekita ku ddyo.

## Ebikwata Ku Muwandiisi

Amawulire g’omuwandiisi gasobola okuwandiikibwa mu mawulire aga meta ag’ekiwandiiko, gamba nga:

```yml
author: marlowe
```

Oluvannyuma longoosa `author.yml` mu dayirekita y'olulimi ensibuko era osseeko ebikwata ku muwandiisi, gamba nga :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ne `title` byonna bya kwesalirawo. Singa `name` teteekebwawo, erinnya ly’ekisumuluzo (wano `marlowe` ) lijja kukozesebwa nga `name` .

Laba pulojekiti ya demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ne [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Ekiwandiiko Ekissiddwako Ppini

Bw’oba weetaaga okusibira ekiwandiiko waggulu, nsaba odduke `i18n.site` era olongoose fayiro `xxx.yml` wansi wa `.i18n/data/blog` , era okyuse timestamp okudda ku namba negativu (ennamba negativu eziwera zijja kusunsulwa okuva ku nnene okutuuka ku ntono).
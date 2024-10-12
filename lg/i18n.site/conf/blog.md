# Ekifaananyi Kya Blog

`i18n/conf.yml` ku `use: Blog` kitegeeza okukozesa ekifaananyi kya blog okukola rendering.

Fayiro ya `markdown` eya blog post yeetaaga okutegeka amawulire aga meta.

Amawulire ga meta galina okuba ku ntandikwa ya fayiro, nga gatandikira ku `---` ne gakoma ne `---` Enkola y'amawulire g'okusengeka wakati eri `YAML` .

Fayiro ya demo etegekebwa bweti:

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

Nga tuyambibwako `YMAL` '.|`Syntax, osobola okuwandiika ebifunze ebirina ennyiriri nnyingi.

Ensengeka y’omuti gwa dayirekita ku ludda olwa ddyo olwa blog nayo ya fayiro `TOC` (laba essuula emabega Ebiwandiiko byokka ebiwandiikiddwa mu `TOC` bye bijja okulabika mu index y’olupapula lwa blog.

Ebiwandiiko ebitaliimu mawulire ga meta tebijja kulabika ku mukutu gwa blog, naye bisobola okulabika mu muti gwa dayirekita ku ddyo.

Bw’oba weetaaga okusibira ekiwandiiko waggulu, nsaba odduke `i18n.site` era olongoose fayiro `xxx.yml` wansi wa `.i18n/data/blog` , era okyuse timestamp okudda ku namba negativu (ennamba eziwera negativu zijja kusunsulwa okuva ku ntono okudda ku nnene mu muwendo omutuufu).
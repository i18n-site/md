# Plantilla De Blog

`i18n/conf.yml` 1manta `use: Blog` niyta munan plantilla blogta llamk'achiyta ruwanapaq.

Blog qillqap `markdown` willañiqinqa meta willayta wakichinan tiyan.

Meta willakuyqa willañiqip qallariyninpi kanan tiyan, `---` kaqwan qallarispa `---` kaqwan tukukun.Chawpipi wakichiy willaypa rikch'ayninqa `YAML` .

Huk rikuchiy willañiqip wakichiyninqa kayhinam:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` nisqapiqa willakuypa resumennintam qawachin, chaymi blog nisqapa indisnin p'anqapi qawachikunqa.

`YMAL` ' nisqap yanapayninwan. | `Sintaxis, achka chiruyuq resumenkunata qillqayta atinki.

Blogpa paña larunpi directorio sachapa ruwayninpas `TOC` willañiqikunam (qaway ñawpaq rakita `TOC` nisqapi qillqasqa qillqakunallam blogpa qallariy p'anqanpi rikurinqa).

Mana meta willayta hap'iq qillqakunaqa manam blog qallariy p'anqapi rikurinqachu, ichataq paña kaqpi directorio sach'api rikhurinman.

## Qillqaqpa Willakuynin

Qillqaqpa willakuyninqa qillqasqapa meta willakuyninpim qillqasqa kanman, ahinataq:

```yml
author: marlowe
```

Chaymanta pukyu simi qillqana mayt'upi `author.yml` llamk'apuy, qillqaq willayta yapay, ahinataq :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` y `title` llapanku munasqalla kanku. `name` mana churasqa kaptinqa, llave suti (kaypi `marlowe` ) `name` hina llamk'achisqa kanqa.

Qaway demo proyecto [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) hinaspa [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pinchasqa Qillqasqa

Sichus qillqasqata pataman pintanayki tiyan, ama hina kaspa `i18n.site` purichiy hinaspa `.i18n/data/blog` urapi `xxx.yml` willañiqikunata llamk'achiy, pacha sellotataq mana allin yupayman tikray (achka mana allin yupaykunam aswan hatunmanta aswan huch'uykama t'aqasqa kanqa).
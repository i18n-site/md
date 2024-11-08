# Itemplate Yeblog

`i18n/conf.yml` ngaphandle kwe `use: Blog` ithetha ukusebenzisa itemplate yeblogi yokunikezelwa.

Ifayile `markdown` yeposti yebhlog idinga ukuqwalasela ulwazi lwemeta.

Ulwazi lweMeta kufuneka lube ekuqaleni kwefayile, ukuqala ngo `---` kunye nokuphela kwe `---` Ifomathi yolwazi loqwalaselo oluphakathi luyi `YAML` .

Uqwalaselo lwefayile yedemo lulolu hlobo lulandelayo:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ibonisa isishwankathelo somxholo, esiza kuboniswa kwiphepha lesalathisi seblogi.

Ngoncedo luka `YMAL` ' | `Isintaksi, ungabhala izishwankathelo zemigca emininzi.

Uqwalaselo lomthi wolawulo kwicala lasekunene lebhlog kwakhona ziifayile `TOC` (bona isahluko sangaphambili kuphela ngamanqaku adweliswe kwi `TOC` aya kuvela kwisalathiso sephepha lasekhaya lebhlog.

Amanqaku angenalo ulwazi lwemeta akayi kuvela kwiphepha lasekhaya leblogi, kodwa anokuvela kulawulo lomthi osekunene.

## Ulwazi Lombhali

Ulwazi lombhali lunokubhalwa kwimeta yolwazi lwenqaku, njenge:

```yml
author: marlowe
```

Emva koko uhlele `author.yml` kuluhlu lolwimi lwentsusa kwaye wongeze ulwazi lombhali, olunje :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` kunye `title` zonke azikhethi. Ukuba `name` ayimiselwanga, igama eliphambili (apha `marlowe` ) liya kusetyenziswa njenge `name` .

Jonga iprojekthi yedemo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) kunye ne [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Inqaku Eliphiniweyo

Ukuba ufuna ukuqhobosha inqaku phezulu, nceda sebenzisa `i18n.site` kwaye uhlele iifayile `xxx.yml` ngezantsi `.i18n/data/blog` , kwaye utshintshe isitampu sexesha kwinani elithabathayo (amanani amaninzi athabathayo azakuhlelwa ukusuka kwenkulu ukuya kwelincinci).
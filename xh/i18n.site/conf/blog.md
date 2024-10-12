# Itemplate Yeblogi

`i18n/conf.yml` ngaphandle kwe `use: Blog` ithetha ukusebenzisa itemplate yeblogi yokunikezelwa.

Ifayile engu `markdown` yeposti yebhlog idinga ukuqwalasela ulwazi lwemeta.

Ulwazi lweMeta kufuneka lube ekuqaleni kwefayile, ukuqala ngo `---` kunye nokuphela kwe `---` Ifomathi yolwazi loqwalaselo oluphakathi luyi `YAML` .

Ifayile yedemo iqwalaselwe ngolu hlobo lulandelayo:

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

Ngoncedo luka `YMAL` '|`Isintaksi, ungabhala izishwankathelo zemigca emininzi.

Uqwalaselo lomthi wolawulo kwicala lasekunene lebhlog kwakhona ziifayile `TOC` (bona isahluko sangaphambili kuphela ngamanqaku adweliswe kwi `TOC` aya kuvela kwisalathiso sephepha lasekhaya lebhlog.

Amanqaku angenalo ulwazi lwemeta akayi kuvela kwiphepha lasekhaya leblogi, kodwa angavela kulawulo lomthi osekunene.

Ukuba ufuna ukuqhobosha inqaku phezulu, nceda sebenzisa `i18n.site` kwaye uhlele iifayile `xxx.yml` ngaphantsi ko `.i18n/data/blog` , kwaye utshintshe isitampu sexesha sibe linani elithabathayo (amanani amaninzi athabathayo azakuhlelwa ukusuka kwelincinci ukuya kumakhulu kwixabiso elipheleleyo).
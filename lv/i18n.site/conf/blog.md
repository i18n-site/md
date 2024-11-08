# Emuāra Veidne

`i18n/conf.yml` no `use: Blog` nozīmē emuāra veidnes izmantošanu renderēšanai.

Emuāra ziņas failam `markdown` ir jākonfigurē metainformācija.

Meta informācijai jābūt faila sākumā, sākot ar `---` un beidzot ar `---` Konfigurācijas informācijas formāts vidū ir `YAML` .

Demonstrācijas faila konfigurācija ir šāda:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` norāda satura kopsavilkumu, kas tiks parādīts emuāra rādītāja lapā.

Ar `YMAL` palīdzību | `Sintakse, jūs varat rakstīt vairāku rindiņu kopsavilkumus.

Emuāra labajā pusē esošā direktoriju koka konfigurācija ir arī `TOC` faili (skatiet iepriekšējo nodaļu Bloga sākumlapas rādītājā tiks parādīti tikai raksti, kas uzskaitīti `TOC` ).

Raksti, kas nesatur meta informāciju, neparādīsies emuāra sākumlapā, bet var parādīties direktoriju kokā labajā pusē.

## Autora Informācija

Autora informāciju var ierakstīt raksta metainformācijā, piemēram:

```yml
author: marlowe
```

Pēc tam rediģējiet `author.yml` avota valodas direktorijā un pievienojiet informāciju par autoru, piemēram :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` un `title` nav obligāti. Ja `name` nav iestatīts, atslēgas nosaukums (šeit `marlowe` ) tiks izmantots kā `name` .

Skatiet demonstrācijas projektu [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) un [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Piesprausts Raksts

Ja jums ir jāpiesprauž raksts augšpusē, lūdzu, palaidiet `i18n.site` un rediģējiet `xxx.yml` failus zem `.i18n/data/blog` un mainiet laikspiedolu uz negatīvu skaitli (vairāki negatīvie skaitļi tiks sakārtoti no lielākā uz mazāko).
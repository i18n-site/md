# Emuāra Veidne

`i18n/conf.yml` no `use: Blog` nozīmē emuāra veidnes izmantošanu renderēšanai.

Emuāra ziņas failam `markdown` ir jākonfigurē metainformācija.

Meta informācijai jābūt faila sākumā, sākot ar `---` un beidzot ar `---` Konfigurācijas informācijas formāts vidū ir `YAML` .

Demonstrācijas fails ir konfigurēts šādi:

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

Ar `YMAL` palīdzību|`Sintakse, jūs varat rakstīt vairāku rindiņu kopsavilkumus.

Emuāra labajā pusē esošā direktoriju koka konfigurācija ir arī `TOC` faili (skatiet iepriekšējo nodaļu Bloga sākumlapas rādītājā tiks parādīti tikai raksti, kas uzskaitīti `TOC` ).

Raksti, kas nesatur meta informāciju, neparādīsies emuāra sākumlapā, bet var parādīties direktoriju kokā labajā pusē.

Ja jums ir jāpiesprauž raksts augšpusē, lūdzu, palaidiet `i18n.site` un rediģējiet `xxx.yml` failus zem `.i18n/data/blog` un mainiet laikspiedolu uz negatīvu skaitli (vairāki negatīvie skaitļi tiks sakārtoti no maziem uz lieliem absolūtā vērtībā).
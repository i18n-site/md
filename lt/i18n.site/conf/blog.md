# Tinklaraščio Šablonas

`i18n/conf.yml` iš `use: Blog` reiškia, kad atvaizdavimui naudojamas tinklaraščio šablonas.

Tinklaraščio įrašo faile `markdown` reikia sukonfigūruoti meta informaciją.

Meta informacija turi būti failo pradžioje, pradedant `---` ir baigiant `---` Konfigūracijos informacijos formatas viduryje yra `YAML` .

Demonstracinio failo konfigūracija yra tokia:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` nurodo turinio santrauką, kuri bus rodoma tinklaraščio rodyklės puslapyje.

Su `YMAL` pagalba | „Sintaksė, galite rašyti kelių eilučių santraukas.

Dešinėje tinklaraščio pusėje esančio katalogų medžio konfigūracija taip pat yra `TOC` failų (žr. ankstesnį skyrių Tinklaraščio pagrindinio puslapio rodyklėje bus rodomi tik straipsniai, išvardyti `TOC` ).

Straipsniai, kuriuose nėra meta informacijos, nebus rodomi tinklaraščio pagrindiniame puslapyje, bet gali būti rodomi katalogų medyje dešinėje.

## Autoriaus Informacija

Informacija apie autorių gali būti įrašyta straipsnio metainformacijoje, pavyzdžiui:

```yml
author: marlowe
```

Tada redaguokite `author.yml` šaltinio kalbos kataloge ir pridėkite informaciją apie autorių, pvz. :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ir `title` yra neprivalomi. Jei `name` nenustatytas, rakto pavadinimas (čia `marlowe` ) bus naudojamas kaip `name` .

Žiūrėkite [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ir [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) demonstracinius projektus

## Prisegtas Straipsnis

Jei reikia prisegti straipsnį viršuje, paleiskite `i18n.site` ir redaguokite `xxx.yml` failus žemiau `.i18n/data/blog` ir pakeiskite laiko žymą į neigiamą skaičių (keli neigiami skaičiai bus rūšiuojami nuo didžiausio iki mažiausio).
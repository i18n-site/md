# Predloga Bloga

`i18n/conf.yml` od `use: Blog` pomeni uporabo predloge spletnega dnevnika za upodabljanje.

Datoteka `markdown` objave v spletnem dnevniku mora konfigurirati meta informacije.

Meta informacije morajo biti na začetku datoteke, začenši z `---` in končati z `---` Format konfiguracijskih informacij na sredini je `YAML` .

Demo datoteka je konfigurirana na naslednji način:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` označuje povzetek vsebine, ki bo prikazan na indeksni strani bloga.

S pomočjo `YMAL` '|`Sintaksa, lahko pišete večvrstične povzetke.

Konfiguracija drevesa imenikov na desni strani bloga je prav tako `TOC` datotek (glejte prejšnje poglavje). V indeksu domače strani bloga bodo prikazani samo članki, navedeni v `TOC` .

Članki, ki ne vsebujejo metainformacij, ne bodo prikazani na domači strani bloga, lahko pa se prikažejo v drevesu imenikov na desni.

Če morate članek pripeti na vrh, zaženite `i18n.site` in uredite `xxx.yml` datoteki pod `.i18n/data/blog` ter spremenite časovni žig na negativno število (več negativnih števil bo razvrščenih od majhnih do velikih v absolutni vrednosti).
# Blogimalli

`i18n/conf.yml` määrittää `use: Blog` käytön renderöinnissä.

Blogin artikkelin `markdown`-tiedoston on sisällettävä metatiedot.

Metatiedot on sijoitettava tiedoston alkuun, `---` merkillä aloittaen ja `---` merkillä päättyen. Keskiosan asetustiedot ovat `YAML`-muodossa.

Yhden esimerkkiedostuksen konfiguraatio on seuraava:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` merkitsee sisällön tiivistelmän, joka näytetään blogin indeksisivulla.

`YMAL` ':n avulla|`syntaksin avulla voit kirjoittaa monirivisiä yhteenvetoja.

Blogin oikeassa laidassa olevan sisällysluettelon konfiguraatio on `TOC`-tiedosto (katso edellinen luku). Vain `TOC`-tiedostossa luetellut artikkelit näkyvät blogin etusivun indeksissä.

Artikkelit, joissa ei ole metatietoja, eivät näy blogin etusivulla, mutta ne voivat olla näkyvissä oikeassa laidassa olevassa sisällysluettelossa.

Jos haluat asettaa artikkelin etusijalle, suorita `i18n.site` ja muokkaa `.i18n/data/blog`-kansiossa olevaa `xxx.yml`-tiedostoa muuttamalla aikaleima negatiiviseksi luvuksi (useat negatiiviset luvut järjestetään absoluuttisen arvon mukaan pienimmästä suurimpaan).
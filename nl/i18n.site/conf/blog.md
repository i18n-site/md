# Blogsjabloon

`i18n/conf.yml` met `use: Blog` betekent dat de blogsjabloon wordt gebruikt voor weergave.

Het `markdown`-bestand van een blogpost moet metadata instellen.

De metadata moet aan het begin van het bestand staan, ingeleid door `---` en afgesloten door `---`. De indeling van de configuratie-informatie ertussen is `YAML`.

Een voorbeeldbestand is als volgt geconfigureerd:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` geeft een samenvatting van de inhoud weer, die wordt getoond op de blogindexpagina.

Met behulp van `YMAL` '|`Syntaxis kunt u meerdere-lijns samenvattingen schrijven.

De configuratie van de rechterkolom met de directorystructuur van de blog is ook een `TOC`-bestand (zie vorig hoofdstuk). Alleen artikelen die in de `TOC` vermeld staan, verschijnen in de index van de bloghomepage.

Artikelen zonder meta-informatie worden niet weergegeven op de blogstartpagina, maar kunnen wel in de rechterkolom met de directorystructuur verschijnen.

Wilt u een artikel bovenaan plaatsen, voer dan `i18n.site` uit en bewerk de `xxx.yml`-bestanden onder `.i18n/data/blog`, en verander de tijdstempel in een negatief getal (meerdere negatieve getallen worden gesorteerd op absolute waarde van klein naar groot).
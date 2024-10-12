# Faq

## Käännöksen rivien lisääminen tai poistaminen voi aiheuttaa sekavaa käännöstä

Muista, **käännöksen rivimäärän on vastattava alkuperäisen tekstin rivejä**.

Tämä tarkoittaa, että käsitellessäsi käännöstä manuaalisesti, **älä lisää tai poista käännöksen rivejä**, muuten käännöksen ja alkuperäisen tekstin välinen mappaus häiriintyy.

Jos lisäät tai poistat rivin vahingossa ja aiheutat sekavaa, palauta käännös muokkauksen edelliseen versioon, suorita `i18` uudelleen ja tallenna oikea mappaus välimuistiin.

Käännöksen ja alkuperäisen tekstin välinen mappaus on sidottu tokeniin. Luo uusi token [i18n.site/token](//i18n.site/token), poista `.i18h/hash` ja käännä uudelleen sekavan mappauksen poistamiseksi (mutta tämä aiheuttaa kaikki manuaaliset käännöksen muutokset menettämisen).

## `YAML`: Miten välttää linkin `HTML` muuntaminen `Markdown` muotoon

`YAML`-arvoja käsitellään käännöksessä `Markdown`-muodossa.

Viimeksi mainittuna, joskus `HTML` → `Markdown` muunnos ei ole haluttu, esimerkiksi `<a href="/">Home</a>` muunnetaan `[Home](/)`.

Lisää `a`-elementtiin mikä tahansa muu kuin `href`-attribuutti, kuten `<a class="A" href="/">Home</a>`, jotta vältät tämän muunnoksen.

## `./i18n/hash`-kansiossa olevat tiedostoristiriidat

Poista ristiriitaiset tiedostot ja suorita `i18` uudelleen.
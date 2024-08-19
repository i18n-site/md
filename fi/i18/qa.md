# Kuinka kysymykset

## Käännöksen rivien lisääminen tai poistaminen voi aiheuttaa sekavaa käännöstä

Muista, **käännöksen rivimäärän on vastattava alkuperäisen tekstin rivejä**.

Tämä tarkoittaa, että käsitellessäsi käännöstä manuaalisesti, **älä lisää tai poista käännöksen rivejä**, muuten käännöksen ja alkuperäisen tekstin välinen mappaus häiriintyy.

Jos lisäät tai poistat rivin vahingossa ja aiheutat sekavaa, palauta käännös muokkauksen edelliseen versioon, suorita `i18`-käännös uudelleen ja tallenna oikea mappaus välimuistiin.

Käännöksen ja alkuperäisen tekstin välinen mappaus on sidottu tunnukseen. Luo uusi tunnus [i18n.site/token](//i18n.site/token), poista `.i18h/hash` ja käännä uudelleen sekavan mappauksen poistamiseksi (mutta tämä aiheuttaa kaikkien manuaalisten käännöksen muutosten menettämisen).

## `YAML`: Miten välttää linkin `HTML`:n muuntaminen `Markdown`:ksi

`YAML`:n arvoja käsitellään käännöksessä `Markdown`:na.

Viimeksi mainittuna, joskus `HTML` → `Markdown`:n muunnos ei ole haluttua, esimerkiksi `<a href="/">Home</a>` muunnetaan `[Home](/)`.

Lisää `a`-tunnisteeseen mikä tahansa muu kuin `href`-ominaisuus, kuten `<a class="A" href="/">Home</a>`, välttääksesi tämän muunnoksen.

## `./i18n/hash`-kansiossa olevat tiedostoristiriidat

Poista ristiriitaiset tiedostot ja suorita `i18`-käännös uudelleen.
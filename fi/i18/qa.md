# Yleinen Ongelma

## Käännöksen Rivien Lisääminen Tai Poistaminen, Mikä Aiheuttaa Sekaannusta Käännöksessä

Muista, **että käännöksen rivien lukumäärän on vastattava alkuperäisen tekstin rivejä** .

Toisin sanoen, kun säädät käännöstä manuaalisesti, **älä lisää tai poista käännöksen rivejä** , muuten käännöksen ja alkuperäisen tekstin välinen kartoitussuhde häiriintyy.

Jos lisäät tai poistat rivin vahingossa ja aiheutat sekaannusta, palauta käännös ennen muutosta tehtyyn versioon, suorita käännös `i18` ja tallenna oikea kartoitus välimuistiin.

Käännöksen ja alkuperäisen tekstin välinen kartoitus on sidottu tunnukseen Luo uusi merkki [i18n.site/token](//i18n.site/token) `.i18h/hash` ja käännä uudelleen hämmentävän merkinnän poistamiseksi (mutta tämä aiheuttaa kaikkien käännöksen manuaalisten säätöjen menettämisen).

## `YAML` : `HTML` `Markdown`

Arvoa `YAML` käsitellään käännöksessä `MarkDown` .

Joskus `HTML` → `MarkDown` n muuntaminen ei ole sitä, mitä haluamme, esimerkiksi `<a href="/">Home</a>` muunnetaan muotoon `[Home](/)` .

Lisää mikä tahansa muu attribuutti kuin `href` `a` , kuten `<a class="A" href="/">Home</a>` , jotta tämä tulos vältetään.

## `./I18n/Hash` Seuraavat Tiedostot Ovat Ristiriidassa

Poista ristiriitaiset tiedostot ja suorita käännös uudelleen `i18`

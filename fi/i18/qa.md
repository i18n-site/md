# Faq

## Käännöksen Rivien Lisääminen Tai Poistaminen, Mikä Aiheuttaa Sekaannusta Käännöksessä

> [!WARN]
> Muista, **että käännöksen rivien lukumäärän on vastattava alkuperäisen tekstin rivejä** .
> Toisin sanoen, kun säädät käännöstä manuaalisesti, **älä lisää tai poista käännöksen rivejä** , muuten käännöksen ja alkuperäisen tekstin välinen kartoitussuhde häiriintyy.

Jos lisäät tai poistat rivin vahingossa aiheuttaen sekaannusta, palauta käännös siihen versioon ennen muokkausta, suorita `i18` käännös uudelleen ja tallenna oikea kartoitus välimuistiin.

Käännöksen ja alkuperäisen tekstin välinen kartoitus on sidottu tunnukseen Luo uusi tunnus [i18n.site/token](//i18n.site/token) poista `.i18h/hash` ja käännä uudelleen hämmentävän merkinnän poistamiseksi (mutta tämä aiheuttaa kaikkien käännöksen manuaalisten säätöjen menettämisen).

## `YAML` : Välttää Linkin `HTML` Muuntaminen `Markdown` Ksi

Arvoa `YAML` käsitellään käännöksessä `MarkDown` nä.

Joskus muunnos arvosta `HTML` → `MarkDown` ei ole sitä, mitä haluamme, esimerkiksi `<a href="/">Home</a>` muunnetaan arvoksi `[Home](/)` .

Jos lisäät `a` -tunnisteeseen minkä tahansa muun attribuutin kuin `href` , kuten `<a class="A" href="/">Home</a>` , voit välttää tämän muunnoksen.

## `./i18n/hash` Tiedostoristiriitaa Alla

Poista ristiriitaiset tiedostot ja suorita käännös `i18` uudelleen.
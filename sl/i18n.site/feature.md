# Značilnosti Izdelka

## `i18` Integriranih Prevodov

Program ima vgrajen prevod `i18` , glejte [➔ `i18` dokument](/i18) za posebno uporabo.

## Samodejno Ujemanje Jezika Brskalnika

Privzeti jezik spletnega mesta se bo samodejno ujemal z jezikom brskalnika.

Ko uporabnik ročno preklopi med jeziki, bo uporabnikova izbira shranjena.

Sorodna [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Prilagoditev Mobilnega Terminala

Popolna izkušnja branja je tudi na mobilnem telefonu.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Visoka razpoložljivost sprednjega dela

`i18n.site` bo `npmjs.com` objavil vsebino spletnega mesta s pomočjo [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) in drugih `CDN` vsebin, naloženih na `npm` .

Na tej podlagi so bili dodani zrcalni viri iz celinske Kitajske, da bi kitajskim uporabnikom omogočili stabilen dostop in dosegli **visoko razpoložljivost na sprednji strani** .

Načelo je: prestrezi zahteve z [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , poskusi znova z neuspešnimi zahtevami na drugih `CDN` in prilagodljivo omogoči najhitreje odzivno izvorno mesto kot privzeti vir nalaganja.

Sorodna [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Enostranska Aplikacija, Izjemno Hitro Nalaganje

Spletna stran sprejme enostransko aplikacijsko arhitekturo, brez osveževanja pri preklapljanju strani in izjemno hitrim nalaganjem.

## Optimizirano Za Bralno Izkušnjo

### Dobro Oblikovan Slog

> Lepota preprostosti je odlično interpretirana v spletnem dizajnu te spletne strani.
> Opušča odvečno okrasje in podaja vsebino v najčistejši obliki.
> Kot lepa pesem, čeprav je kratka, se dotakne src ljudi.

<p style="text-align:right">── I18N.SITE Avtor</p>

[➔ Kliknite tukaj za ogled seznama stilov](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Zgornja slika prikazuje večjezičnost `RSS` z uporabo `i18n.site` [inoreader.com](//inoreader.com)

### Nalaganje Spletnih Pisav, Podpora Za Kitajščino

Na spletni strani so privzeto omogočene [dvoosne spremenljive pravokotne pisave Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) in druge spletne pisave za poenotenje bralne izkušnje uporabnikov na različnih platformah.

Hkrati so pisave za izboljšanje hitrosti nalaganja razrezane glede na statistiko pogostosti besed.

Sorodna [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Zgornja Navigacija Je Samodejno Skrita

Pomaknite se navzdol in zgornja navigacija se bo samodejno skrila.

Pomaknite se navzgor in znova se bo prikazala skrita navigacija.

Ko se miška ne premika, bo zbledela.

V zgornjem desnem kotu navigacijske vrstice je gumb za celozaslonski način, da ustvarite izjemno izkušnjo branja dokumentov.

### Sinhronizirano Označevanje Orisa Trenutnega Poglavja

Ko se pomikate po vsebini na desni, bo obris na levi hkrati osvetlil poglavje, ki ga trenutno berete.

## Kul Podrobnosti

### Učinki Miške

Z miško se pomaknite nad gumb na desni strani zgornje navigacije, da si ogledate odlične posebne učinke.

### `404` Mali Duh

Na strani `404` je ljubek majhen lebdeči duhec, čigar oči se premikajo z miško, [➔ Kliknite tukaj za ogled](/404) ,

## Odprta Koda

[Koda je odprtokodna](/i18n.site/c/src) . Če vas zanima sodelovanje pri razvoju, se predstavite na [poštnem seznamu](//groups.google.com/u/2/g/i18n-site) .

Obstaja veliko majhnih zahtev, ki so pomembne, a ne nujne. Razvojna ekipa bo dodelila praktične naloge na podlagi tehnologij, v katerih ste dobri, in med dodeljevanjem zahtev izboljšala razvojne dokumente.
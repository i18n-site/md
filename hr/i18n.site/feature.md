# Značajka Proizvoda

## Integrirano `I18` Prijevod

Program ima ugrađeni prijevod `i18` , pogledajte [➔ `i18`](/i18) za specifičnu upotrebu.

## Automatski Podudaranje Jezika Preglednika

Zadani jezik web stranice automatski će odgovarati jeziku preglednika.

Nakon što korisnik ručno promijeni jezik, korisnikov će izbor biti zapamćen.

Povezani kod : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Prilagodba Mobilnog Terminala

Tu je i savršeno iskustvo čitanja na mobilnom telefonu.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Visoka dostupnost front-enda

`i18n.site` Prema `CDN` postavkama, sadržaj stranice bit će objavljen na `npmjs.com` , uz [jsdelivr.com](//jsdelivr.com) višestrukih [unpkg.com](//unpkg.com) sadržaja učitanih na `npm` .

Na temelju toga dodani su zrcalni izvori iz kontinentalne Kine kako bi se kineskim korisnicima omogućio stabilan pristup i postigla **visoka dostupnost front-enda** .

Princip je: presretnite zahtjev uz pomoć [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , ako zahtjev ne uspije, pokušajte ga ponovno na drugom `CDN` i adaptivno omogućite izvornu stanicu koja najbrže odgovara kao zadani izvor učitavanja.

Povezani kod : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Aplikacija Na Jednoj Stranici, Izuzetno Brzo Učitavanje

Web-mjesto usvaja arhitekturu aplikacije s jednom stranom, bez osvježavanja prilikom prebacivanja stranica i iznimno brzog učitavanja.

## Optimizirano Za Iskustvo Čitanja

### Dobro Dizajniran Stil

> Ljepota jednostavnosti savršeno je interpretirana u web dizajnu ove web stranice.
> Odustaje od nepotrebnog ukrašavanja i predstavlja sadržaj u njegovom najčišćem obliku.
> Kao lijepa pjesma, iako je kratka, ona dira ljudska srca.

<p style="text-align:right">── I18N.SITE Autor</p>

[➔ Kliknite ovdje da vidite popis stilova](/i18n.site/md/styl) .

### Učitajte Online Fontove, Podržavajte Kineski

Prema zadanim postavkama, [Alimama dvoosni varijabilni pravokutni fontovi](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) i drugi mrežni fontovi omogućeni su na web stranici kako bi se ujedinilo iskustvo čitanja korisnika na različitim platformama.

U isto vrijeme, kako bi se poboljšala brzina učitavanja, fontovi su izrezani prema statistici učestalosti riječi.

Povezani kod : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Gornja Navigacija Automatski Skrivena

Pomaknite se prema dolje i gornja navigacija će se automatski sakriti.

Pomaknite se prema gore i skrivena navigacija će se ponovno pojaviti.

Nestat će kada se miš ne miče.

U gornjem desnom kutu navigacijske trake nalazi se gumb za prikaz preko cijelog zaslona za stvaranje impresivnog iskustva čitanja dokumenata.

### Sinkronizirano Isticanje Nacrta Trenutnog Poglavlja

Prilikom pomicanja sadržaja s desne strane, obris s lijeve strane istovremeno će istaknuti poglavlje koje se trenutno čita.

## Cool Detalji

### Efekti Miša

Zadržite pokazivač miša iznad gumba na desnoj strani gornje navigacije da biste vidjeli cool specijalne efekte.

### `404` Mali Duh

`404` Na stranici je slatki mali lebdeći duh, čije će se oči pomicati pomoću miša, [➔ Kliknite ovdje za pregled](/404) ,

## Kod Otvorenog Koda

[Kod je otvorenog koda](/i18n.site/src) Ako ste zainteresirani za sudjelovanje u razvoju, molimo vas da se predstavite na [mailing listi](//groups.google.com/u/2/g/i18n-site) .

Postoji mnogo malih zahtjeva koji su važni, ali ne i hitni, dodijelit će zadatke u praksi u skladu s tehnologijom u kojoj ste dobri i poboljšati razvojne dokumente dok dodjeljujete zahtjeve.


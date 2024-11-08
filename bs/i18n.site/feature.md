# Karakteristike Proizvoda

## Integrirano `i18` Prijevoda

Program ima ugrađen `i18` prijevod, pogledajte [➔ `i18` dokument](/i18) za konkretnu upotrebu.

## Automatski Uskladi Jezik Pretraživača

Zadani jezik web stranice automatski će odgovarati jeziku pretraživača.

Nakon što korisnik ručno promijeni jezik, korisnikov izbor će biti zapamćen.

Povezani kod : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Adaptacija Mobilnog Terminala

Tu je i savršeno iskustvo čitanja na mobilnom telefonu.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Visoka dostupnost front-enda

`i18n.site` će standardno objaviti sadržaj stranice na `npmjs.com` , uz pomoć [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) i drugih `CDN` sadržaja učitanih na `npm` !

Na osnovu toga, dodani su izvori ogledala iz kontinentalne Kine kako bi se kineskim korisnicima omogućio stabilan pristup i postizanje **visoke dostupnosti front-enda** .

Princip je: presretnite zahtjeve sa [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , pokušajte ponovo neuspjele zahtjeve na drugim `CDN` i adaptivno omogućite izvorno mjesto s najbržim odgovorom kao zadani izvor učitavanja.

Povezani kod : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Aplikacija Na Jednoj Stranici, Izuzetno Brzo Učitavanje

Web stranica usvaja arhitekturu aplikacije na jednoj stranici, bez osvježavanja pri prebacivanju stranica i izuzetno brzog učitavanja.

## Optimizirano Za Iskustvo Čitanja

### Dobro Dizajniran Stil

> Ljepota jednostavnosti savršeno je interpretirana u web dizajnu ove web stranice.
> Napušta suvišnu dekoraciju i predstavlja sadržaj u svom najčistijem obliku.
> Kao prelepa pesma, iako je kratka, dirne ljudska srca.

<p style="text-align:right">── I18N.SITE</p>

[➔ Kliknite ovdje da vidite listu stilova](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Slika iznad prikazuje višejezičnost `RSS` koristeći [inoreader.com](//inoreader.com) `i18n.site` .

### Učitajte Online Fontove, Podržavajte Kineski

Po defaultu [, pravokutni fontovi s dvije ose](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) i drugi online fontovi su omogućeni na web stranici kako bi se ujedinilo iskustvo čitanja korisnika na različitim platformama.

Istovremeno, kako bi se poboljšala brzina učitavanja, fontovi se režu prema statistici učestalosti riječi.

Povezani kod : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Gornja Navigacija Je Automatski Skrivena

Pomaknite se prema dolje i gornja navigacija će se automatski sakriti.

Pomaknite se prema gore i ponovo će se pojaviti skrivena navigacija.

Nestaće kada se miš ne pomera.

U gornjem desnom kutu navigacijske trake nalazi se dugme za cijeli ekran za stvaranje impresivnog iskustva čitanja dokumenata.

### Sinhronizirano Isticanje Okvira Trenutnog Poglavlja

Prilikom pomicanja sadržaja s desne strane, obris na lijevoj strani će istovremeno istaknuti poglavlje koje se trenutno čita.

## Cool Detalji

### Efekti Miša

Zadržite pokazivač miša preko dugmeta na desnoj strani gornje navigacije da vidite cool specijalne efekte.

### `404` Mali Duh

Na stranici `404` nalazi se slatki mali lebdeći duh, čije će se oči pomicati mišem, [➔ Kliknite ovdje za pregled](/404) ,

## Kod Otvorenog Koda

[Kod je otvorenog koda](/i18n.site/c/src) . Ako ste zainteresovani za učešće u razvoju, predstavite se na [mailing listi](//groups.google.com/u/2/g/i18n-site) .

Postoji mnogo malih zahtjeva koji su važni, ali nisu hitni. Razvojni tim će dodijeliti praktične zadatke na osnovu tehnologija u kojima ste dobri i poboljšati razvojnu dokumentaciju dok dodjeljuje zahtjeve.
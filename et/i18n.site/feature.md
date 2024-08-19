# Toote Omadused

## Integreeritud `i18` Tõlget

Programmil on sisseehitatud `i18` tõlge, konkreetse kasutuse kohta vaadake [➔ `i18` dokumenti](/i18) .

## Sobitage Automaatselt Brauseri Keel

Veebisaidi vaikekeel ühtib automaatselt brauseri keelega.

Pärast seda, kui kasutaja on keelt käsitsi vahetanud, jäetakse kasutaja valik meelde.

Seotud kood : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Mobiilterminali Kohandamine

Täiuslik lugemiskogemus on ka mobiiltelefonis.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Esiotsa kõrge kättesaadavus

`i18n.site` avaldab saidi sisu vaikimisi `npmjs.com` , [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) ja muud `CDN` laaditud sisu `npm` .

Selle põhjal lisati Mandri-Hiina peegelallikad, et Hiina kasutajatel oleks stabiilne juurdepääs ja **kõrge esiotsa kättesaadavus** .

Põhimõte on järgmine: peatage päringud [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) ga, proovige ebaõnnestunud päringuid teistel `CDN` uuesti ja lubage adaptiivselt kõige kiiremini reageeriv lähtekoht vaikelaadimisallikana.

Seotud kood : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Üheleheline Rakendus, Ülikiire Laadimine

Veebisait võtab kasutusele ühelehelise rakendusearhitektuuri, lehtede vahetamisel ei värskendata ja laaditakse ülikiire.

## Optimeeritud Lugemiskogemuse Jaoks

### Hästi Kujundatud Stiil

> Lihtsuse ilu on selle veebisaidi veebikujunduses suurepäraselt tõlgendatud.
> See loobub tarbetutest kaunistustest ja esitab sisu selle kõige puhtamal kujul.
> Nagu ilus luuletus, kuigi see on lühike, puudutab see inimeste südameid.

<p style="text-align:right">── I18N.SITE</p>

[➔ Klõpsa siia, et näha stiilide loendit](/i18n.site/md/styl) .

### Laadige Veebifonte, Toetage Hiina Keelt

Vaikimisi on veebisaidil lubatud [Alimama kaheteljelised ristkülikukujulised fondid](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) muud võrgufondid, et ühtlustada kasutajate lugemiskogemust erinevatel platvormidel.

Samal ajal jagatakse laadimiskiiruse parandamiseks fonte sõnade sageduse statistika järgi.

Seotud kood : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Ülemine Navigeerimine Peidetakse Automaatselt

Kerige alla ja ülemine navigeerimine peidetakse automaatselt.

Kerige üles ja peidetud navigeerimine kuvatakse uuesti.

See tuhmub, kui hiir ei liigu.

Navigeerimisriba paremas ülanurgas on täisekraani nupp, et luua kõikehõlmav dokumentide lugemiskogemus.

### Praeguse Peatüki Sünkroniseeritud Kontuuri Esiletõstmine

Parempoolset sisu kerimisel tõstab vasakpoolne kontuur samal ajal esile parajasti loetava peatüki.

## Lahedad Detailid

### Hiire Efektid

Lahedate eriefektide nägemiseks hõljutage kursorit ülemise navigeerimispaneeli paremas servas oleva nupu kohal.

### `404` Väike Kummitus

`404` lehel on väike armas hõljuv kummitus, kelle silmad liiguvad koos hiirega, [➔ Vaatamiseks klõpsake siin](/404) ,

## Kood Avatud Lähtekoodiga

[Kood on avatud lähtekoodiga](/i18n.site/src) Kui olete huvitatud arenduses osalemisest, tutvustage end [meililistis](//groups.google.com/u/2/g/i18n-site) .

On palju väikeseid nõudeid, mis on olulised, kuid mitte kiireloomulised. Arendusmeeskond määrab praktikaülesanded vastavalt teie oskustele ja täiustab nõuete määramisel arendusdokumente.
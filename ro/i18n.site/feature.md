# Caracteristicile Produsului

## `i18` Traduceri Integrate

Programul are încorporat `i18` traducere, vă rugăm să consultați [➔ `i18` document](/i18) pentru utilizare specifică.

## Potriviți Automat Limba Browserului

Limba implicită a site-ului web se va potrivi automat cu limba browserului.

După ce utilizatorul schimbă manual limbile, alegerea utilizatorului va fi reținută.

Cod înrudit : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Adaptarea Terminalelor Mobile

Există, de asemenea, o experiență de lectură perfectă pe telefonul mobil.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Disponibilitate ridicată front-end

`i18n.site` va publica conținutul site-ului la `npmjs.com` în mod implicit, cu ajutorul [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) și alte `CDN` conținuturi încărcate pe `npm` .

Pe această bază, au fost adăugate surse oglindă din China continentală pentru a permite utilizatorilor chinezi să aibă acces stabil și să obțină **o disponibilitate front-end ridicată** .

Principiul este: interceptarea cererilor cu [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , reîncercarea cererilor eșuate pe alte `CDN` și activarea adaptivă a site-ului de origine cu cel mai rapid răspuns ca sursă implicită de încărcare.

Cod înrudit : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Aplicație Pe O Singură Pagină, Încărcare Extrem De Rapidă

Site-ul web adoptă o arhitectură de aplicație cu o singură pagină, fără reîmprospătare la schimbarea paginilor și încărcare extrem de rapidă.

## Optimizat Pentru Experiența De Lectură

### Stil Bine Conceput

> Frumusețea simplității este interpretată perfect în designul web al acestui site web.
> Renunță la decorul de prisos și prezintă conținutul în forma sa cea mai pură.
> Ca o poezie frumoasă, deși este scurtă, atinge inimile oamenilor.

<p style="text-align:right">── I18N.SITE</p>

[➔ Faceți clic aici pentru a vedea o listă de stiluri](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Imaginea de mai sus arată `RSS` în mai multe limbi folosind [inoreader.com](//inoreader.com) `i18n.site` .

### Încarcă Fonturi Online, Acceptă Limba Chineză

În mod implicit [, fonturile dreptunghiulare variabile cu două axe Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) alte fonturi online sunt activate pe pagina web pentru a unifica experiența de citire a utilizatorilor pe diferite platforme.

În același timp, pentru a îmbunătăți viteza de încărcare, fonturile sunt tăiate în funcție de statisticile frecvenței cuvintelor.

Cod înrudit : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Navigarea De Sus Este Ascunsă Automat

Derulați în jos și navigarea de sus se va ascunde automat.

Derulați în sus și navigarea ascunsă va apărea din nou.

Se va estompa când mouse-ul nu se mișcă.

Există un buton pentru ecran complet în colțul din dreapta sus al barei de navigare pentru a crea o experiență captivantă de citire a documentelor.

### Evidențierea Schiță Sincronizată a Capitolului Curent

Când derulați conținutul din dreapta, conturul din stânga va evidenția simultan capitolul citit în prezent.

## Detalii Cool

### Efecte De Mouse

Treceți mouse-ul peste butonul din partea dreaptă a navigației de sus pentru a vedea efecte speciale.

### `404` Fantomă Mică

Există o fantomă drăguță plutitoare pe pagina `404` , ai cărei ochi se vor mișca cu mouse-ul, [➔ Faceți clic aici pentru a vizualiza](/404) ,

## Cod Open Source

[Codul este open source](/i18n.site/c/src) Dacă sunteți interesat să participați la dezvoltare, vă rugăm să vă prezentați pe [lista de corespondență](//groups.google.com/u/2/g/i18n-site) .

Există multe cerințe mici care sunt importante, dar nu urgente. Echipa de dezvoltare va atribui sarcini practice pe baza tehnologiilor la care sunteți bun și va îmbunătăți documentele de dezvoltare în timp ce atribuie cerințele.
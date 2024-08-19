# Caracteristici ale produsului

## Traduceri integrate `i18`

Programul integrează traducerile `i18`; pentru utilizare detaliată, consultați [➔ documentul `i18`](/i18).

## Potrivire automată a limbajului browserului

Limba implicită a site-ului se va potrivi automat cu limba browserului.

După ce utilizatorul schimbă limba manual, alegerea acestuia va fi reținută.

Cod relevant: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptare pentru dispozitive mobile

Experiență de lectură perfectă și pe dispozitive mobile.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Disponibilitate ridicată a front-end-ului

`i18n.site` va publica conținutul site-ului la `npmjs.com` în mod implicit, prin intermediul [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) și altor `CDN` care încarcă conținut pe `npm`.

Pe baza acestui lucru, s-au adăugat surse de oglinzi în China continentală, permițând utilizatorilor chinezi un acces stabil, realizând astfel **disponibilitatea ridicată a front-end-ului**.

Principiul este: interceptarea cererilor prin intermediul [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API), reîncercarea cererilor eșuate pe alte `CDN`, și activarea adaptivă a celei mai rapide surse de origine pentru încărcarea implicită.

Cod relevant: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Aplicație pe o singură pagină, încărcare extrem de rapidă

Site-ul web folosește o arhitectură de aplicație pe o singură pagină, fără refresh-uri și cu încărcare extrem de rapidă.

## Optimizat pentru experiența de lectură

### Stiluri bine concepute

> Frumusețea simplității este perfect interpretată în designul web al acestui site.
> Abordează o formă pură, fără ornamente inutile, pentru a prezenta conținutul.
> Ca o poezie scurtă și frumoasă, care atinge inimile.

<p style="text-align:right">── Autorul I18N.SITE</p>

[➔ Faceți clic aici pentru a vedea o privire de ansamblu asupra stilurilor](/i18n.site/md/styl).

### Încărcare de fonturi online, suport pentru limba chineză

Pagina web utilizează în mod implicit fonturi online precum [Alimama Double Axis Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) și [MiSans](https://hyperos.mi.com/font/zh/download/), oferind o experiență de lectură unificată pentru utilizatorii de pe diferite platforme.

În același timp, pentru a îmbunătăți viteza de încărcare, fonturile sunt fragmentate pe baza frecvenței cuvintelor.

Cod relevant: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Bara de navigare de sus se ascunde automat

La derularea în jos, bara de navigare de sus se va ascunde automat.

La derularea în sus, bara de navigare ascunsă va reapărea.

Când mouse-ul nu se mișcă, bara de navigare va dispărea treptat.

În colțul din dreapta sus al barei de navigare se află un buton pentru ecran complet, oferind o experiență imersivă de lectură a documentelor.

### Evidențierea automată a capitolului curent în schiță

Când derulați conținutul din dreapta, schița din stânga va evidenția automat capitolul curent citit.

## Detalii cool

### Efecte cool pentru mouse

Plasați mouse-ul deasupra butonului din partea dreaptă a barei de navigare de sus pentru a vedea efecte cool.

### Fantomă mică pe pagina `404`

Pagina `404` are o fantomă mică și drăguță care plutește, ochii ei urmând mișcarea mouse-ului, [➔ Faceți clic aici pentru a vedea](/404)

## Cod open source

[Codul este open source](/i18n.site/src); dacă sunteți interesat să contribuiți la dezvoltare, vă rugăm să vă prezentați pe [lista de corespondență](//groups.google.com/u/2/g/i18n-site).

Există multe cerințe mici, dar importante și neurgente; echipa de dezvoltare va aloca sarcini de antrenament în funcție de tehnologiile în care excelați și va îmbunătăți documentele de dezvoltare în timp ce atribuie cerințele.
# Caracteristici ale produsului

## Traduceri integrate `i18`

Programul integrează traduceri `i18`; pentru utilizare detaliată, consultați [➔ documentul `i18`](/i18).

## Potrivire automată a limbii browserului

Limba implicită a site-ului se va potrivi automat cu limba browserului.

După ce utilizatorul schimbă manual limba, alegerea acestuia va fi reținută.

Cod relevant: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptare pentru dispozitive mobile

Experiență de lectură perfectă și pe dispozitive mobile.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Disponibilitate ridicată a front-end-ului

`i18n.site` va publica conținutul site-ului la `npmjs.com` în mod implicit, folosind [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) și alte multiple `CDN` care încarcă conținut pe `npm`.

Pe baza acestui lucru, s-au adăugat surse de oglinzi în China continentală, permițând utilizatorilor chinezi un acces stabil și realizând **disponibilitatea ridicată a front-end-ului**.

Principiul este: interceptarea cererilor prin intermediul unui [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API), reîncercarea cererilor eșuate pe alte `CDN`, și activarea adaptivă a celei mai rapide surse de origine pentru încărcare implicită.

Cod relevant: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Aplicație pe o singură pagină, încărcare extrem de rapidă

Site-ul web utilizează o arhitectură de aplicație pe o singură pagină, fără reîmprospătare și cu încărcare extrem de rapidă.

## Optimizat pentru experiența de lectură

### Stiluri bine concepute

> Frumusețea simplității este perfect interpretată în designul web al acestui site.
> Abordează decorurile inutile și prezintă conținutul în forma sa cea mai pură.
> Ca o poezie frumoasă, deși scurtă, care îți atinge inima.

<p style="text-align:right">── Autorul I18N.SITE</p>

[➔ Faceți clic aici pentru a vedea o privire de ansamblu asupra stilurilor](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

Imaginea de mai sus ilustrează un abonament `RSS` în mai multe limbi la `i18n.site` folosind [inoreader.com](//inoreader.com).

### Încărcare de fonturi online, suport pentru chineză

În mod implicit, site-ul web utilizează fonturi online precum [Alimama Double Axis Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) și [MiSans](https://hyperos.mi.com/font/zh/download/), oferind o experiență de lectură unificată pentru utilizatorii de pe diferite platforme.

În același timp, pentru a îmbunătăți viteza de încărcare, fonturile sunt fragmentate pe baza frecvenței cuvintelor.

Cod relevant: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Navigare de sus ascunsă automat

La derularea în jos, navigarea de sus se ascunde automat.

La derularea în sus, navigarea ascunsă reapare.

Când mouse-ul nu se mișcă, navigarea se estompează.

În colțul din dreapta sus al barei de navigare se află un buton pentru ecran complet, oferind o experiență imersivă de lectură a documentelor.

### Evidențierea automată a capitolului curent în schiță

Când derulați conținutul din dreapta, schița din stânga evidențiază automat capitolul curent citit.

## Detalii cool

### Efecte de mouse

Plasați mouse-ul deasupra butonului din partea dreaptă a navigării de sus pentru a vedea efecte speciale.

### Chițibușorul din `404`

Pagina `404` conține un chițibușor drăguț care plouă, ochii săi urmând mișcarea mouse-ului, [➔ Faceți clic aici pentru a vedea](/404)

## Cod sursă deschis

[CODUL ESTE DESCHIS](/i18n.site/src); dacă sunteți interesat să contribuiți la dezvoltare, vă rugăm să vă prezentați pe [lista de corespondență](//groups.google.com/u/2/g/i18n-site).

Există multe cerințe mici, dar importante și neurgente. Echipa de dezvoltare va aloca sarcini practice în funcție de tehnologiile în care excelați și va îmbunătăți documentele de dezvoltare în timp ce atribuie cerințele.
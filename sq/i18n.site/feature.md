# Karakteristikat E Produktit

## `i18` Përkthime Të Integruara

Programi ka përkthim të integruar `i18` , ju lutemi shihni [➔ `i18` dokument](/i18) për përdorim specifik.

## Përputhet Automatikisht Me Gjuhën E Shfletuesit

Gjuha e paracaktuar e faqes së internetit do të përputhet automatikisht me gjuhën e shfletuesit.

Pasi përdoruesi të ndërrojë gjuhët me dorë, zgjedhja e përdoruesit do të mbahet mend.

Kodi i [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Përshtatja E Terminalit Celular

Ekziston edhe një përvojë e përsosur leximi në celular.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Disponueshmëri e lartë në pjesën e përparme

`i18n.site` do të publikojë përmbajtjen e faqes në `npmjs.com` si parazgjedhje, me ndihmën [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) dhe `CDN` përmbajtjeve të tjera të ngarkuara në `npm` .

Mbi këtë bazë, u shtuan burime pasqyre nga Kina kontinentale për të lejuar përdoruesit kinezë të kenë akses të qëndrueshëm dhe të arrijnë **disponueshmëri të lartë të pjesës së përparme** .

Parimi është: përgjoni kërkesat me [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , provoni përsëri kërkesat e dështuara në `CDN` të tjera dhe aktivizoni në mënyrë adaptive sitin e origjinës që përgjigjet më shpejt si burimi i ngarkimit të paracaktuar.

Kodi i [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Aplikim Me Një Faqe, Ngarkim Jashtëzakonisht I Shpejtë

Faqja e internetit miraton një arkitekturë aplikacioni me një faqe, pa rifreskim gjatë ndërrimit të faqeve dhe ngarkim jashtëzakonisht të shpejtë.

## Optimizuar Për Përvojën E Leximit

### Stili I Dizajnuar Mirë

> Bukuria e thjeshtësisë interpretohet në mënyrë të përsosur në dizajnin e uebit të kësaj faqe interneti.
> Ajo braktis dekorimin e panevojshëm dhe paraqet përmbajtjen në formën e saj më të pastër.
> Si një poezi e bukur, edhe pse e shkurtër, prek zemrat e njerëzve.

<p style="text-align:right">I18N.SITE Autor</p>

[➔ Klikoni këtu për të parë një listë të stileve](/i18n.site/md/styl) .

### Ngarkoni Fontet Në Internet, Mbështesni Gjuhën Kineze

Si parazgjedhje, [shkronjat drejtkëndore të ndryshueshme me dy boshte](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/)

Në të njëjtën kohë, për të përmirësuar shpejtësinë e ngarkimit, shkronjat priten sipas statistikave të frekuencës së fjalëve.

Kodi i [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Navigimi Në Krye Fshihet Automatikisht

Lëvizni poshtë dhe navigimi i sipërm do të fshihet automatikisht.

Lëvizni lart dhe lundrimi i fshehur do të shfaqet përsëri.

Ajo do të zbehet kur miu nuk është duke lëvizur.

Ekziston një buton me ekran të plotë në këndin e sipërm djathtas të shiritit të navigimit për të krijuar një përvojë gjithëpërfshirëse të leximit të dokumentit.

### Theksimi I Sinkronizuar I Konturit Të Kapitullit Aktual

Kur lëvizni përmbajtjen në të djathtë, skica në të majtë do të nxjerrë në pah njëkohësisht kapitullin që lexohet aktualisht.

## Detaje Të Lezetshme

### Efektet E Miut

Zhvendosni miun mbi butonin në anën e djathtë të navigimit të sipërm për të parë efekte speciale fantastike.

### `404` Fantazmë E Vogël

Ekziston një fantazmë e lezetshme lundruese në faqen `404` , sytë e të cilit do të lëvizin me miun, [➔ Klikoni këtu për të parë](/404) ,

## Kodi Me Burim Të Hapur

[Kodi është me kod të hapur](/i18n.site/src) Nëse jeni të interesuar të merrni pjesë në zhvillim, ju lutemi prezantoni veten në [listën e postimeve](//groups.google.com/u/2/g/i18n-site) .

Ka shumë kërkesa të vogla që janë të rëndësishme, por jo urgjente.
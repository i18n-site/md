# Արտադրանքի Առանձնահատկությունը

## Ինտեգրված `I18`

Ծրագիրն ունի `i18` թարգմանություն, տես [➔ `i18`](/i18) ՝ հատուկ օգտագործման համար:

## Ավտոմատ Կերպով Համընկնել Դիտարկիչի Լեզվին

Կայքի լռելյայն լեզուն ավտոմատ կերպով կհամապատասխանի դիտարկիչի լեզվին:

Այն բանից հետո, երբ օգտատերը ձեռքով փոխում է լեզուն, օգտատիրոջ ընտրությունը կհիշվի:

Առնչվող կոդ : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Բջջային Տերմինալի Հարմարեցում

Բջջային հեռախոսով կա նաև կատարյալ ընթերցանություն:

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Առջևի բարձր հասանելիություն

`i18n.site` , կայքի բովանդակությունը կհրապարակվի `npmjs.com` , [unpkg.com](//unpkg.com) և մի քանի `CDN` բովանդակության [jsdelivr.com](//jsdelivr.com) `npm` .

Այս հիման վրա ավելացվել են մայրցամաքային Չինաստանի հայելային աղբյուրներ՝ թույլ տալու չինացի օգտատերերին կայուն մուտք ունենալ և հասնել **առջևի բարձր հասանելիության** :

Սկզբունքն է՝ ընդհատել հարցումը [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) -ի օգնությամբ, եթե հարցումը ձախողվի, նորից փորձեք այն այլ `CDN` -ում և հարմարեցված կերպով միացրեք ամենաարագ արձագանքող սկզբնական կայանը՝ որպես լռելյայն բեռնման աղբյուր:

Առնչվող կոդ : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Մեկ Էջի Հավելված, Չափազանց Արագ Բեռնում

Կայքն ընդունում է մեկ էջի կիրառական ճարտարապետություն՝ առանց թարմացման էջերը փոխելու ժամանակ և չափազանց արագ բեռնման:

## Օպտիմիզացված Է Ընթերցանության Փորձի Համար

### Լավ Մշակված Ոճ

> Պարզության գեղեցկությունը հիանալի կերպով մեկնաբանվում է այս կայքի վեբ դիզայնում:
> Այն հրաժարվում է ավելորդ հարդարանքից և բովանդակությունը ներկայացնում իր մաքուր տեսքով։
> Ինչպես գեղեցիկ բանաստեղծություն, թեև այն կարճ է, բայց հուզում է մարդկանց սրտերը։

<p style="text-align:right">I18N.SITE Հեղինակ</p>

[➔ Սեղմեք այստեղ՝ ոճերի ցանկը տեսնելու համար](/i18n.site/md/styl) :

### Ներբեռնեք Առցանց Տառատեսակներ, Աջակցեք Չինարենին

Լռելյայնորեն, [Alimama-ի երկու առանցքի փոփոխական ուղղանկյուն տառատեսակները](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/)

Միևնույն ժամանակ, բեռնման արագությունը բարելավելու համար տառատեսակները կտրատվում են ըստ բառի հաճախականության վիճակագրության:

Առնչվող կոդ : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Վերևի Նավիգացիան Ինքնաբերաբար Թաքնված Է

Ոլորեք ներքև և վերևի նավարկությունն ինքնաբերաբար կթաքցվի:

Ոլորեք վերև և թաքնված նավարկությունը նորից կհայտնվի:

Այն կթուլանա, երբ մկնիկը չի շարժվում:

Նավիգացիոն գծի վերին աջ անկյունում կա լիաէկրան կոճակ՝ փաստաթղթերի ընթերցման սուզվող փորձ ստեղծելու համար:

### Ընթացիկ Գլխի Համաժամանակյա Ուրվագծային Ընդգծում

Բովանդակությունը աջ կողմում ոլորելիս ձախ կողմի ուրվագիծը միաժամանակ ընդգծում է ընթացիկ ընթերցվող գլուխը:

## Զով Մանրամասներ

### Մկնիկի Էֆեկտներ

Սկավառեք ձեր մկնիկը վերևի նավիգացիայի աջ կողմում գտնվող կոճակի վրա՝ հիանալի հատուկ էֆեկտներ տեսնելու համար:

### `404` Ուրվականը

`404` կա մի գեղեցիկ լողացող ուրվական, որի աչքերը կշարժվեն մկնիկի օգնությամբ, [➔ Սեղմեք այստեղ՝ դիտելու համար](/404) ,

## Կոդ Բաց Կոդով

[Կոդը բաց կոդով է](/i18n.site/src) [:](//groups.google.com/u/2/g/i18n-site)

Կան շատ փոքր պահանջներ, որոնք կարևոր են, բայց ոչ հրատապ: Մշակողների թիմը գործնական առաջադրանքներ կհանձնի այն տեխնոլոգիաների հիման վրա, որոնցում դուք լավ եք տիրապետում, և կբարելավի զարգացման փաստաթղթերը` պահանջները հանձնարարելիս:


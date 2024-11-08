# Карактеристике Производа

## Интегрисано `i18` Превода

Програм има уграђен `i18` превод, погледајте [➔ `i18` документ](/i18) за конкретну употребу.

## Аутоматски Усклади Језик Прегледача

Подразумевани језик веб локације ће се аутоматски подударати са језиком претраживача.

Након што корисник ручно промени језик, његов избор ће бити запамћен.

Повезани код : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Адаптација Мобилног Терминала

Ту је и савршено искуство читања на мобилном телефону.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Висока доступност фронт-енда

`i18n.site` ће подразумевано објавити садржај сајта на `npmjs.com` , уз помоћ [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) и других `CDN` садржаја учитаних на `npm` !

На основу тога, додани су извори огледала из континенталне Кине како би се кинеским корисницима омогућио стабилан приступ и постизање **високе доступности фронт-енда** .

Принцип је: пресретните захтеве са [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , покушајте поново неуспеле захтеве на другим `CDN` и адаптивно омогућите изворни сајт који најбрже реагује као подразумевани извор учитавања.

Повезани код : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Апликација На Једној Страници, Изузетно Брзо Учитавање

Веб локација усваја архитектуру апликације са једном страницом, без освежавања приликом промене страница и изузетно брзог учитавања.

## Оптимизовано За Искуство Читања

### Добро Дизајниран Стил

> Лепота једноставности савршено се тумачи у веб дизајну ове веб странице.
> Напушта сувишну декорацију и представља садржај у свом најчистијем облику.
> Као лепа песма, иако је кратка, дирне људска срца.

<p style="text-align:right">── I18N.SITE</p>

[➔ Кликните овде да видите листу стилова](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Слика изнад `i18n.site` вишејезичност `RSS` користећи претплату [inoreader.com](//inoreader.com) .

### Учитајте Фонтове На Мрежи, Подржавајте Кинески

Подразумевано [, правоугаони фонтови са две осе, Алимама](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) други фонтови на мрежи су омогућени на веб страници како би се ујединило искуство читања корисника на различитим платформама.

Истовремено, да би се побољшала брзина учитавања, фонтови се режу према статистици учесталости речи.

Повезани код : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Горња Навигација Је Аутоматски Скривена

Померите се надоле и горња навигација ће се аутоматски сакрити.

Померите се нагоре и поново ће се појавити скривена навигација.

Избледеће када се миш не помера.

У горњем десном углу траке за навигацију налази се дугме преко целог екрана за стварање импресивног искуства читања докумената.

### Синхронизовано Истицање Оквира Тренутног Поглавља

Приликом померања садржаја са десне стране, обрис са леве стране ће истовремено истаћи поглавље које се тренутно чита.

## Цоол Детаљи

### Ефекти Миша

Пређите мишем преко дугмета на десној страни горње навигације да бисте видели сјајне специјалне ефекте.

### `404` Мали Дух

На страници `404` налази се слатки мали лебдећи дух, чије ће се очи померати мишем, [➔ Кликните овде да видите](/404) ,

## Код Отвореног Кода

[Код је отвореног кода](/i18n.site/c/src) . Ако сте заинтересовани да учествујете у развоју, молимо вас да се представите на [мејлинг листи](//groups.google.com/u/2/g/i18n-site) .

Постоји много малих захтева који су важни, али нису хитни. Тим за развој ће доделити практичне задатке на основу технологија у којима сте добри, и побољшаће развојну документацију док додељује захтеве.
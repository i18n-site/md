# Өнімнің Ерекшеліктері

## `i18` Аударма Біріктірілген

Бағдарламада кірістірілген `i18` аудармасы бар, нақты пайдалану үшін [➔ `i18` құжатты](/i18) қараңыз.

## Браузер Тілін Автоматты Түрде Сәйкестендіру

Веб-сайттың әдепкі тілі браузер тіліне автоматты түрде сәйкес келеді.

Пайдаланушы тілдерді қолмен ауыстырғаннан кейін пайдаланушының таңдауы есте қалады.

Қатысты код [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Мобильді Терминалды Бейімдеу

Сондай-ақ ұялы телефонда тамаша оқу тәжірибесі бар.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Фронттың жоғары қолжетімділігі

`i18n.site` `npmjs.com` бойынша сайт мазмұнын , [jsdelivr.com](//jsdelivr.com) көмегімен [unpkg.com](//unpkg.com) `npm` ке жүктелген басқа `CDN` мазмұнды жариялайды.

Осы негізде қытайлық пайдаланушыларға тұрақты қол жеткізуге және **алдыңғы қатардың жоғары қолжетімділігіне** қол жеткізу үшін материктік Қытайдан айна көздері қосылды.

Принцип: [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) саны бар сұрауларды тоқтату, басқа `CDN` лерде сәтсіз сұрауларды қайталау және әдепкі жүктеу көзі ретінде ең жылдам жауап беретін бастапқы торапты бейімдеу арқылы қосу.

Қатысты код [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Бір Беттік Қолданба, Өте Жылдам Жүктеу

Веб-сайт бір беттік қолданба архитектурасын қабылдайды, беттерді ауыстырған кезде жаңартылмайды және өте жылдам жүктеледі.

## Оқу Тәжірибесі Үшін Оңтайландырылған

### Жақсы Жобаланған Стиль

> Қарапайымдылықтың сұлулығы осы веб-сайттың веб-дизайнында тамаша түсіндіріледі.
> Ол артық безендіруден бас тартып, мазмұнды ең таза түрінде ұсынады.
> Әдемі өлең сияқты қысқа болса да, адамның жүрегін елжіретеді.

<p style="text-align:right">── Автор I18N.SITE</p>

[➔ Стильдер тізімін көру үшін осы жерді басыңыз](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Жоғарыдағы сурет [inoreader.com](//inoreader.com) жазылымын қолданатын көп тілді `i18n.site` `RSS` .

### Онлайн Қаріптерді Жүктеңіз, Қытай Тілін Қолдаңыз

Әдепкі бойынша [, әртүрлі платформалардағы пайдаланушылардың оқу тәжірибесін біріктіру үшін Алимама қос осьті айнымалы тікбұрышты](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) қаріптер, [MiSans](https://hyperos.mi.com/font/zh/download/) және басқа онлайн қаріптер қосылған.

Сонымен қатар, жүктеу жылдамдығын жақсарту үшін қаріптер сөз жиілігі статистикасына сәйкес кесіледі.

Қатысты код [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Жоғарғы Навигация Автоматты Түрде Жасырылады

Төмен жылжыңыз және жоғарғы шарлау автоматты түрде жасырылады.

Жоғары жылжыңыз және жасырын шарлау қайтадан пайда болады.

Тінтуір қозғалмаған кезде ол өшеді.

Құжатты оқудың иммерсивті тәжірибесін жасау үшін шарлау тақтасының жоғарғы оң жақ бұрышында толық экран түймесі бар.

### Ағымдағы Тараудың Синхрондалған Контурын Бөлектеу

Мазмұнды оң жақта жылжытқанда, сол жақтағы контур бір уақытта ағымдағы оқылатын тарауды бөлектейді.

## Тамаша Бөлшектер

### Тінтуір Әсерлері

Керемет арнайы әсерлерді көру үшін тінтуірді жоғарғы шарлаудың оң жағындағы түйменің үстіне апарыңыз.

### `404` Кішкентай Елес

`404` бетінде көздері тінтуірмен қозғалатын сүйкімді кішкентай қалқымалы елес бар, [➔ Көру үшін осы жерді басыңыз](/404) ,

## Ашық Бастапқы Код

[Код ашық бастапқы болып табылады](/i18n.site/c/src) . Егер сіз әзірлеуге қатысқыңыз келсе, өзіңізді [пошталық тізіммен](//groups.google.com/u/2/g/i18n-site) таныстырыңыз.

Маңызды, бірақ шұғыл емес көптеген кішігірім талаптар бар. Әзірлеу тобы сіз жақсы білетін технологиялар негізінде тәжірибелік тапсырмалар береді және талаптарды тағайындау кезінде әзірлеу құжаттарын жақсартады.
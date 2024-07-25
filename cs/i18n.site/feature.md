# Vlastnost Produktu

## `I18` Překlad

Program má `i18` překlad, viz [➔ `i18`](/i18) pro konkrétní použití.

## Automaticky Odpovídat Jazyku Prohlížeče

Výchozí jazyk webových stránek bude automaticky odpovídat jazyku prohlížeče.

Poté, co uživatel přepne jazyky ručně, volba uživatele bude zapamatována.

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) kód :

## Adaptace Mobilního Terminálu

Perfektní zážitek ze čtení je i na mobilním telefonu.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end vysoká dostupnost

`i18n.site` `CDN` výchozím `npm` bude obsah webu publikován na `npmjs.com` , s [unpkg.com](//unpkg.com) [jsdelivr.com](//jsdelivr.com)

Na tomto základě byly přidány zrcadlové zdroje z pevninské Číny, aby čínským uživatelům umožnily stabilní přístup a dosažení **vysoké dostupnosti front-endu** .

Princip je: zachyťte požadavek pomocí [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , pokud požadavek selže, zkuste to znovu na jiném `CDN` a adaptivně povolte nejrychleji reagující původní stanici jako výchozí zdroj načítání.

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) kód :

## Jednostránková Aplikace, Extrémně Rychlé Načítání

Web využívá jednostránkovou aplikační architekturu bez obnovování při přepínání stránek a extrémně rychlého načítání.

## Optimalizováno Pro Zážitek Ze Čtení

### Dobře Navržený Styl

> Krása jednoduchosti je dokonale interpretována ve webovém designu tohoto webu.
> Opouští zbytečnou dekoraci a předkládá obsah v jeho nejčistší podobě.
> Jako krásná báseň, i když je krátká, dotýká se lidských srdcí.

<p style="text-align:right">── I18N.SITE</p>

[➔ Kliknutím sem zobrazíte seznam stylů](/i18n.site/md/styl) .

### Načtěte Online Písma, Podporujte Čínštinu

Ve výchozím nastavení jsou na webové stránce povolena [dvouosá variabilní obdélníková písma Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) a další online písma, aby se sjednotil zážitek ze čtení uživatelů na různých platformách.

Současně, aby se zlepšila rychlost načítání, jsou písma rozdělena na plátky podle statistik frekvence slov.

[github.com/i18n-site/font](https://github.com/i18n-site/font) kód :

### Horní Navigace Se Automaticky Skryje

Přejděte dolů a horní navigace se automaticky skryje.

Přejděte nahoru a znovu se zobrazí skrytá navigace.

Zhasne, když se myš nepohybuje.

V pravém horním rohu navigačního panelu se nachází tlačítko na celou obrazovku, které vám umožní pohlcující zážitek ze čtení dokumentů.

### Synchronizované Zvýraznění Obrysu Aktuální Kapitoly

Při posouvání obsahu vpravo bude obrys vlevo současně zvýraznit právě čtenou kapitolu.

## Cool Detaily

### Efekty Myši

Umístěte kurzor myši na tlačítko na pravé straně horní navigace, abyste viděli skvělé speciální efekty.

### Malý `404`

Na `404` je roztomilý malý plovoucí duch, jeho oči se budou pohybovat pomocí myši, [➔ Kliknutím sem zobrazíte](/404) ,

## Kód Open Source

[Kód je open source](/i18n.site/src) Pokud máte zájem podílet se na vývoji, představte se prosím v [mailing listu](//groups.google.com/u/2/g/i18n-site) .

Existuje mnoho malých požadavků, které jsou důležité, ale ne naléhavé. Vývojový tým zadá cvičné úkoly podle technologie, ve které jste dobří, a při zadávání požadavků vylepší vývojové dokumenty.


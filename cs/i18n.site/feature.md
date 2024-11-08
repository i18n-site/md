# Vlastnosti Produktu

## `i18` Integrovaných Překladů

Program má vestavěný `i18` překlad, konkrétní použití naleznete [v ➔ `i18` dokumentu](/i18) .

## Automaticky Odpovídat Jazyku Prohlížeče

Výchozí jazyk webových stránek bude automaticky odpovídat jazyku prohlížeče.

Poté, co uživatel ručně přepne jazyky, uživatelská volba bude zapamatována.

Související [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Adaptace Mobilního Terminálu

Perfektní zážitek ze čtení je i na mobilním telefonu.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end vysoká dostupnost

`i18n.site` publikuje obsah webu ve výchozím nastavení na `npmjs.com` s pomocí [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) a dalších `CDN` obsahu načtených na `npm` .

Na tomto základě byly přidány zrcadlové zdroje z pevninské Číny, aby čínským uživatelům umožnily stabilní přístup a dosažení **vysoké dostupnosti front-endu** .

Princip je následující: zachytit požadavky s [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , opakovat neúspěšné požadavky na jiné `CDN` a adaptivně povolit nejrychleji reagující původní web jako výchozí zdroj načítání.

Související [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Jednostránková Aplikace, Extrémně Rychlé Načítání

Web využívá jednostránkovou aplikační architekturu bez obnovování při přepínání stránek a extrémně rychlého načítání.

## Optimalizováno Pro Zážitek Ze Čtení

### Dobře Navržený Styl

> Krása jednoduchosti je dokonale interpretována ve webovém designu tohoto webu.
> Opouští nadbytečnou dekoraci a předkládá obsah v jeho nejčistší podobě.
> Jako krásná báseň, i když je krátká, dotýká se lidských srdcí.

<p style="text-align:right">── I18N.SITE</p>

[➔ Kliknutím sem zobrazíte seznam stylů](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Obrázek výše ukazuje vícejazyčné `RSS` pomocí [inoreader.com](//inoreader.com) `i18n.site` .

### Načtěte Online Písma, Podporujte Čínštinu

Ve výchozím nastavení jsou na webové stránce povolena [dvouosá variabilní obdélníková písma Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) a další online písma, aby se sjednotil zážitek ze čtení uživatelů na různých platformách.

Současně, aby se zlepšila rychlost načítání, jsou písma rozdělena na plátky podle statistik frekvence slov.

Související [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Horní Navigace Se Automaticky Skryje

Přejděte dolů a horní navigace se automaticky skryje.

Přejděte nahoru a znovu se zobrazí skrytá navigace.

Zhasne, když se myš nepohybuje.

V pravém horním rohu navigačního panelu se nachází tlačítko na celou obrazovku, které vám umožní pohlcující zážitek ze čtení dokumentů.

### Synchronizované Zvýraznění Obrysu Aktuální Kapitoly

Při posouvání obsahu vpravo obrys vlevo současně zvýrazní aktuálně čtenou kapitolu.

## Cool Detaily

### Efekty Myši

Umístěte kurzor myši na tlačítko na pravé straně horní navigace, abyste viděli skvělé speciální efekty.

### `404` Malý Duch

Na stránce `404` je roztomilý malý plovoucí duch, jehož oči se budou pohybovat myší, [➔ Kliknutím sem zobrazíte](/404) ,

## Kód Open Source

[Kód je open source](/i18n.site/c/src) Pokud máte zájem podílet se na vývoji, představte se prosím v [mailing listu](//groups.google.com/u/2/g/i18n-site) .

Existuje mnoho malých požadavků, které jsou důležité, ale ne naléhavé. Vývojový tým zadá praktické úkoly na základě technologií, ve kterých jste dobří, a při zadávání požadavků vylepší vývojové dokumenty.
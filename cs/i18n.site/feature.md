# Vlastnosti produktu

## Integrované překlady `i18`

Program obsahuje vestavěný překlad `i18`. Podrobnosti naleznete v [➔ dokumentu `i18`](/i18).

## Automatická shoda s jazykem prohlížeče

Výchozí jazyk webových stránek se automaticky přizpůsobí jazyku vašeho prohlížeče.

Po ruční změně jazyka uživatelem bude volba uživatele zapamatována.

Relevantní kód: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptace pro mobilní zařízení

Na mobilních zařízeních poskytuje stejně dokonalý čtenářský zážitek.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Vysoká dostupnost front-endu

`i18n.site` publikuje obsah webu ve výchozím nastavení na `npmjs.com` s pomocí [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) a dalších více `CDN` obsahu načtených na `npm` .

Na tomto základě byly přidány zrcadlové zdroje pro Čínu, což umožňuje čínským uživatelům stabilní přístup a zajišťuje **vysokou dostupnost front-endu**.

Princip je následující: zachytit požadavky s [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , opakovat neúspěšné požadavky na jiné `CDN` a adaptivně povolit nejrychleji reagující původní web jako výchozí zdroj načítání.

Relevantní kód: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Jednostránková aplikace, okamžité načítání

Web využívá architekturu jednostránkové aplikace, což zajišťuje okamžité načítání bez nutnosti obnovování stránky.

## Optimalizováno pro čtenářský zážitek

### Pečlivě navržený styl

> Elegantní jednoduchost je v designu tohoto webu dokonalá.
> Web se zbavuje zbytečných dekorací a představuje obsah v jeho nejčistší podobě.
> Jako krátká, ale dojemná báseň, která oslovuje srdce.

<p style="text-align:right">── Autor I18N.SITE</p>

[➔ Klikněte zde pro přehled stylů](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

Obrázek výše ukazuje vícejazyčné `RSS` pomocí [inoreader.com](//inoreader.com) `i18n.site` .

### Načítání online písem, podpora čínštiny

Výchozí písmo webových stránek zahrnuje [Alimama Double Axial Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) a další online písmo, aby zajistilo jednotný čtenářský zážitek napříč různými platformami.

Za účelem zvýšení rychlosti načítání jsou písmo rozdělena na části podle frekvence výskytu slov.

Relevantní kód: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatické skrývání horní navigace

Při posouvání dolů se horní navigace automaticky skryje.

Při posouvání nahoru se skrytá navigace znovu zobrazí.

Při nečinnosti myši se navigace postupně zhasne.

V pravém horním rohu navigačního panelu je tlačítko pro zobrazení na celou obrazovku, které umožňuje ponořit se do čtení dokumentů.

### Synchronizované zvýraznění aktuální kapitoly v obsahu

Při posouvání pravého obsahu se levý obsah zvýrazní, aby odpovídal aktuální kapitole.

## Obrané detaily

### Speciální efekty myši

Při umístění myši na tlačítko v pravé části horní navigace se objeví efekty.

### Malý duch na `404` stránce

Na `404` stránce je roztomilý plovoucí duch, který sleduje pohyb myši. [➔ Klikněte zde pro zobrazení](/404)

## Kód je open source

[Kód je open source](/i18n.site/src). Pokud máte zájem o účast na vývoji, představte se prosím v [mailing listu](//groups.google.com/u/2/g/i18n-site).

Existuje mnoho menších, ale důležitých požadavků. Vývojový tým přidělí úkoly na základě vašich technických dovedností a zároveň vylepšuje vývojovou dokumentaci.
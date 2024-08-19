# Vlastnosti Produktu

## Integrované překlady `i18`

Program obsahuje vestavěné překlady `i18`. Podrobnosti naleznete v [➔ dokumentu `i18`](/i18).

## Automatická shoda s jazykem prohlížeče

Výchozí jazyk webových stránek se automaticky přizpůsobí jazyku vašeho prohlížeče.

Po ruční změně jazyka uživatelem bude volba uživatele zapamatována.

Relevantní kód: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptace pro mobilní zařízení

Na mobilních zařízeních poskytuje stejně dokonalý čtenářský zážitek.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Vysoká dostupnost front-endu

`i18n.site` automaticky publikuje obsah webu na `npmjs.com`, využívajíc [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) a další `CDN` pro načítání obsahu z `npm`.

Na tomto základě byly přidány zrcadlové zdroje pro pevninskou Čínu, aby čínským uživatelům zajistily stabilní přístup a umožnily dosáhnout **vysoké dostupnosti front-endu**.

Princip je následující: pomocí [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) zachytit požadavky, opakovat neúspěšné požadavky na jiných `CDN` a automaticky povolit nejrychleji reagující zdroj jako výchozí pro načítání.

Relevantní kód: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Jednostránková aplikace, okamžité načítání

Web využívá architekturu jednostránkové aplikace, což umožňuje okamžité načítání bez nutnosti obnovování stránky.

## Optimalizováno pro čtenářský zážitek

### Pečlivě navržený styl

> Krása jednoduchosti je v designu těchto webových stránek dokonalá.
> Opouští zbytečné dekorace a prezentuje obsah v jeho nejčistší formě.
> Jako krátká, ale dojemná báseň, která oslovuje srdce.

<p style="text-align:right">── Autor I18N.SITE</p>

[➔ Klikněte zde pro přehled stylů](/i18n.site/md/styl).

### Načítání online písem, podpora čínštiny

Výchozí nastavení webových stránek zahrnuje [阿里妈妈双轴可变方圆体](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) a další online písma, která zajišťují jednotný čtenářský zážitek napříč různými platformami.

Současně pro zrychlení načítání jsou písma rozdělena podle frekvence výskytu znaků.

Relevantní kód: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatické skrývání horní navigace

Při posouvání dolů se horní navigace automaticky skryje.

Při posouvání nahoru se skrytá navigace znovu zobrazí.

Při nečinnosti myši dojde k postupnému zhasínání.

V pravém horním rohu navigačního panelu je tlačítko pro zobrazení na celou obrazovku, které poskytuje ponořený čtenářský zážitek.

### Synchronizované zvýraznění aktuální kapitoly v obsahu

Při posouvání pravého obsahu se levý obsah zvýrazní, aby odpovídal aktuální kapitole.

## Moderní detaily

### Speciální efekty myši

Při umístění myši na tlačítko v pravé části horní navigace uvidíte efektní speciální efekty.

### Malý duch na `404` stránce

Na `404` stránce je roztomilý plovoucí duch, který sleduje pohyb myši, [➔ klikněte zde pro zobrazení](/404)

## Kód open source

[Kód je open source](/i18n.site/src). Pokud máte zájem o účast na vývoji, přihlaste se prosím v [mailing listu](//groups.google.com/u/2/g/i18n-site).

Existuje mnoho menších, ale důležitých požadavků. Vývojový tým vám podle vašich technických dovedností přidělí cvičné úkoly a zároveň bude vylepšovat vývojovou dokumentaci.
# Verzia Projektu

Ako príklad si vezmite demo projekt:

`en/demo2/v` je aktuálne číslo verzie projektu, ktoré sa zobrazí napravo od názvu projektu v obryse bočného panela.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Tu je `en/` kód jazyka zodpovedajúci zdrojovému jazyku prekladu nakonfigurovanému `.i18n/conf.yml` .

Ak váš zdrojový jazyk nie je angličtina, potom by mal byť súbor `v` umiestnený v adresári projektu vášho zdrojového jazyka.

Schopnosť prehliadať historické verzie dokumentov je vo vývoji.

Odporúča sa upravovať číslo verzie dokumentu až po vydaní veľkých aktualizácií (napríklad `v1` , `v2` ), aby ste sa vyhli príliš veľkému počtu čísel verzií, ktoré by spôsobovali neporiadok na stránkach indexovaných vyhľadávacími nástrojmi.

## Použite Prázdne Súbory `v` Na Rozdelenie Indexov Súborov Rôznych Projektov

V demo projekte môžete okrem `en/demo2/v` vidieť aj to, že v adresároch `en/blog` a `en/demo1` sú prázdne `v` súbory.

Prázdna `v` sa v obryse bočného panela nezobrazí, ale pokiaľ existuje súbor `v` , pre súbory v adresári a podadresároch sa vygeneruje nezávislý index.

Rozdelením indexov rôznych projektov sa môžete vyhnúť pomalému prístupu spôsobenému načítaním indexu všetkých súborov na celej lokalite naraz.

Napríklad indexový súbor zodpovedajúci `blog` v demo projekte je [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
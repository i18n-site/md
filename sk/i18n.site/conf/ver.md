# Verzia Projektu

Ako príklad si vezmite demo projekt:

`en/demo2/v` je číslo aktuálnej verzie projektu, ktoré sa zobrazí napravo od názvu projektu v obryse bočného panela.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` je kód jazyka zodpovedajúci `.i18n/conf.yml` zdrojovému jazyku prekladu.

Ak váš zdrojový jazyk nie je angličtina, potom by mal byť súbor `v` umiestnený v adresári projektu vášho zdrojového jazyka. 

Schopnosť prehliadať historické verzie dokumentov je vo vývoji.

Odporúča sa upravovať číslo verzie dokumentu len pri vydávaní veľkých aktualizácií (napríklad `v1` , `v2` ), aby ste predišli preplneniu stránok indexovaných vyhľadávacími nástrojmi v dôsledku príliš veľkého počtu čísel verzií.

## Použite `v` Súbory Na Rozdelenie Indexov Súborov Pre Rôzne Projekty

V demo projekte môžete okrem `en/demo2/v` vidieť aj to, že obsah adresárov `en/blog` a `en/demo1` je prázdny `v` súbory.

Prázdne `v` sa v obryse bočného panela nezobrazí, ale pokiaľ súbor `v` existuje, pre súbory v adresári a podadresároch sa vygeneruje nezávislý index.

Rozdelením indexov rôznych projektov sa môžete vyhnúť pomalému prístupu spôsobenému načítaním indexu všetkých súborov na celej lokalite naraz.

Napríklad v demo projekte : [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) indexový súbor `blog`


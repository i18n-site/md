# Verze Projektu

Vezměte si ukázkový projekt jako příklad:

`en/demo2/v` je aktuální číslo verze projektu, které se zobrazí napravo od názvu projektu v obrysu postranního panelu.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Zde `en/` je kód jazyka odpovídající zdrojovému jazyku překladu nakonfigurovanému `.i18n/conf.yml` .

Pokud váš zdrojový jazyk není angličtina, pak by měl být soubor `v` umístěn v adresáři projektu vašeho zdrojového jazyka.

Schopnost procházet historické verze dokumentů je ve vývoji.

Doporučuje se upravovat číslo verze dokumentu pouze při vydání hlavních aktualizací (například `v1` , `v2` ), aby příliš mnoho čísel verzí nezpůsobovalo nepořádek na stránkách indexovaných vyhledávači.

## Použijte Prázdné Soubory `v` K Rozdělení Indexů Souborů Různých Projektů

V demo projektu můžete kromě `en/demo2/v` také vidět, že v adresářích `en/blog` a `en/demo1` jsou prázdné `v` soubory.

Prázdná `v` se v obrysu postranního panelu nezobrazí, ale pokud existuje soubor `v` , bude pro soubory v adresáři a podadresářích generován nezávislý index.

Rozdělením indexů různých projektů se můžete vyhnout pomalému přístupu způsobenému načítáním indexu všech souborů na celém webu najednou.

Například indexový soubor odpovídající `blog` v demo projektu je [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
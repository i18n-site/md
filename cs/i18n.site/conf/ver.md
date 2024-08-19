# Verze projektu

Vezměte si ukázkový projekt jako příklad:

`en/demo2/v` je aktuální verze projektu, která se zobrazí napravo od názvu projektu v postranním panelu.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Zde `en/` je kód jazyka odpovídající zdrojovému jazyku překladu v `.i18n/conf.yml`.

Pokud váš zdrojový jazyk není angličtina, soubor `v` by měl být umístěn v adresáři vašeho zdrojového jazyka.

Funkce pro procházení historických verzí dokumentů je v vývoji.

Doporučuje se upravovat číslo verze dokumentu pouze při vydání významných aktualizací (např. `v1`, `v2`), aby se předešlo chaosu v indexech vyhledávačů způsobenému příliš velkým počtem verzí.

## Použijte prázdné soubory `v` k rozdělení indexů různých projektů

V ukázkovém projektu můžete kromě `en/demo2/v` také vidět, že v adresářích `en/blog` a `en/demo1` jsou prázdné soubory `v`.

Prázdné `v` se ne zobrazí v postranním panelu, ale pokud existuje soubor `v`, bude vytvořen nezávislý index pro soubory v daném adresáři a podadresářích.

Rozdělením indexů různých projektů se vyhnete zpomalení přístupu způsobenému načítáním všech souborů na webu najednou.

Například indexový soubor odpovídající `blog` v ukázkovém projektu je [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)
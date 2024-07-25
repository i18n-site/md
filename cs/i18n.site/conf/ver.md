# Verze Projektu

Vezměte si ukázkový projekt jako příklad:

`en/demo2/v` je aktuální číslo verze projektu, které se zobrazí napravo od názvu projektu v obrysu postranního panelu.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` je kód jazyka odpovídající `.i18n/conf.yml` nakonfigurovanému zdrojovému jazyku překladu.

Pokud váš zdrojový jazyk není angličtina, pak by měl být soubor `v` umístěn v adresáři projektu vašeho zdrojového jazyka. 

Schopnost procházet historické verze dokumentů je ve vývoji.

Doporučuje se upravovat číslo verze dokumentu pouze při vydávání velkých aktualizací (jako např `v1` , `v2` ), aby nedošlo k zahlcení stránek indexovaných vyhledávači kvůli příliš velkému počtu čísel verzí.

## Použijte `v` Soubory K Rozdělení Indexů Souborů Pro Různé Projekty

V demo projektu můžete kromě `en/demo2/v` také vidět, že obsah adresářů `en/blog` a `en/demo1` je prázdný `v` soubory.

Prázdné `v` se v obrysu postranního panelu nezobrazí, ale dokud soubor `v` existuje, bude pro soubory v adresáři a podadresářích generován nezávislý index.

Rozdělením indexů různých projektů se můžete vyhnout pomalému přístupu způsobenému načítáním indexu všech souborů na celém webu najednou.

Například v demo projektu : odpovídající indexový [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`


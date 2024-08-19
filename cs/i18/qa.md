# Časté otázky

## Přidávání nebo mazání řádků překladu může vést k záměně v překladu

Pamatujte, **řádky překladu musí odpovídat původním řádkům textu**.

Tedy při ruční úpravě překladu **neaddinujte a neodstraňujte žádné řádky**, jinak dojde k narušení mapovacího vztahu mezi překladem a originálem.

Pokud náhodou přidáte nebo odstraníte řádek a způsobíte záměnu, vraťte prosím překlad do verze před úpravou, spusťte znovu `i18` a obnovte správné mapování.

Mapping mezi překladem a originálem je vázán na token. Vytvořte nový token na [i18n.site/token](//i18n.site/token), smažte `.i18h/hash` a přeložte znovu, čímž vymažete záměnné mapování (ale ztratíte všechny ruční úpravy překladu).

## `YAML`: Jak se vyhnout konverzi odkazů `HTML` na `Markdown`

Hodnoty v `YAML` jsou považovány za `Markdown` pro překlad.

Někdy konverze z `HTML` na `Markdown` není požadovaná, například `<a href="/">Home</a>` se převede na `[Home](/)`.

Přidáním jakéhokoli atributu k značce `a` kromě `href`, například `<a class="A" href="/">Home</a>`, se vyhnete této konverzi.

## Konflikty souborů v `./i18n/hash`

Odstraňte konfliktní soubory a znovu spusťte překlad `i18`.
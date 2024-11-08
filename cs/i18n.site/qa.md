# Faq

## Náhodně Smazáno `.i18n/v` , Což Způsobilo Selhání Publikování Balíčku `npm`

Historická verze vydaná balíčkem `npm` je uložena v `.i18n/v/ol/v.hash` .

Pokud omylem smažete `.i18n/v/ol` balíček `npm` nebude uvolněn.

V tuto chvíli nejprve najděte číslo verze poslední vydané verze vašeho projektu v [npmjs.com](//npmjs.com) například `0.1.9` .

Poté se podívejte na `bash` níže a vytvořte soubor.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Všimněte si, že oprava tímto způsobem ztratí historii souborů, takže nebude možné postupně aktualizovat další vydání a veškerý obsah bude znovu zabalen a nahrán jednou.
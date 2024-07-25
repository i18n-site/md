# Společný Problém

## Náhodně Smazáno `.i18n/V` Což Způsobilo Selhání Publikování Balíčku `Npm`

Historická verze vydání `npm` balíčku je uložena v `.i18n/v/ol/v.hash`

Pokud omylem smažete `.i18n/v/ol` `npm` balíček nebude zveřejněn.

V tuto chvíli nejprve vyhledejte číslo verze poslední vydané verze vašeho projektu [npmjs.com](//npmjs.com) například `0.1.9`

Pak se podívejte na `bash` Vytvořit níže.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Všimněte si, že oprava tímto způsobem ztratí historii souborů, takže nebude možné postupně aktualizovat další vydání a veškerý obsah bude znovu zabalen a nahrán jednou.


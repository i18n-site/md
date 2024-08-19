# Časté otázky

## Náhodně jsem smazal `.i18n/v`, což způsobilo, že balíček `npm` se nedá publikovat

V `.i18n/v/ol/v.hash` je uložena historie verzí publikovaných balíčků `npm`.

Pokud náhodně smažete `.i18n/v/ol`, balíček `npm` se nebude moci publikovat.

V takovém případě nejprve najděte číslo verze poslední publikované verze vašeho projektu na [npmjs.com](//npmjs.com), například `0.1.9`.

Poté se odkazujte na následující `bash` a vytvořte soubor.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Veďte na paměti, že oprava tímto způsobem způsobí ztrátu historie souborů, což znamená, že při dalším vydání nebude možné provést inkrementální aktualizaci a celý obsah bude znovu zabalen a nahrán jednorázově.
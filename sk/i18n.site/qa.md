# Bežný Problém

## Náhodne `Npm` `.i18n/V`

Historická verzia `npm` vydania balíka je uložená v `.i18n/v/ol/v.hash`

Ak omylom vymažete `.i18n/v/ol` `npm` balík nebude zverejnený.

V tejto chvíli najskôr nájdite číslo verzie poslednej verzie vášho projektu, napríklad [npmjs.com](//npmjs.com) `0.1.9`

Potom si pozrite `bash` Vytvoriť nižšie.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Upozorňujeme, že opravou týmto spôsobom sa stratí história súborov, čo znemožní postupnú aktualizáciu ďalšieho vydania a všetok obsah sa raz zabalí a nahrá.


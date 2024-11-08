# Faq

## Náhodne Vymazané `.i18n/v` , Čo Spôsobilo, Že Balík `npm` Sa Nepodarilo Publikovať

Historická verzia vydaná balíkom `npm` je uložená v `.i18n/v/ol/v.hash` .

Ak omylom vymažete `.i18n/v/ol` balík `npm` nebude uvoľnený.

Teraz najskôr nájdite číslo verzie poslednej verzie vášho projektu v [npmjs.com](//npmjs.com) napríklad `0.1.9` .

Potom podľa `bash` nižšie vytvorte súbor.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Upozorňujeme, že opravou týmto spôsobom sa stratí história súborov, čo znemožní postupnú aktualizáciu ďalšieho vydania a všetok obsah sa raz zabalí a nahrá.
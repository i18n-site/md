# Bežný Problém

## Pridávanie Alebo Odstraňovanie Riadkov Prekladu, Čo Má Za Následok Zmätok v Preklade

Pamätajte, **že počet riadkov v preklade musí zodpovedať riadkom v pôvodnom texte** .

To znamená, že pri manuálnej úprave prekladu **nepridávajte ani neodstraňujte riadky prekladu** , inak bude vzťah mapovania medzi prekladom a pôvodným textom narušený.

Ak náhodou pridáte alebo odstránite riadok, čo spôsobí zmätok, obnovte preklad na verziu pred úpravou, spustite preklad `i18` a znova uložte správne mapovanie do vyrovnávacej pamäte.

Mapovanie medzi prekladom a pôvodným textom je naviazané na token Vytvorte nový token v [i18n.site/token](//i18n.site/token) , odstráňte `.i18h/hash` a znova preložte, aby ste odstránili mätúce mapovanie (to však spôsobí stratu všetkých manuálnych úprav prekladu).

## `YAML` : Zabrániť Konverzii `HTML` Odkazu Na `Markdown`

Hodnota `YAML` bude pri preklade považovaná za `MarkDown` .

Niekedy konverzia `HTML` → `MarkDown` nie je to, čo chceme, ako napríklad konverzia `<a href="/">Home</a>` na `[Home](/)` .

Ak sa chcete vyhnúť tejto konverzii, pridajte do značky `a` akýkoľvek iný atribút ako `href` , napríklad `<a class="A" href="/">Home</a>` .

## `./I18n/Hash` Nasledujúce Súbory Sú v Konflikte

Odstráňte konfliktné súbory a znova spustite `i18` Translate.

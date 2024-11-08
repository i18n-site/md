# Faq

## Pridávanie Alebo Odstraňovanie Riadkov Prekladu, Čo Má Za Následok Zmätok v Preklade

> [!WARN]
> Pamätajte, **že počet riadkov v preklade musí zodpovedať riadkom v pôvodnom texte** .
> To znamená, že pri manuálnej úprave prekladu **nepridávajte ani neodstraňujte riadky prekladu** , inak bude vzťah mapovania medzi prekladom a pôvodným textom narušený.

Ak náhodou pridáte alebo odstránite riadok, čo spôsobí zmätok, obnovte preklad na verziu pred úpravou, znova spustite preklad `i18` a znova uložte správne mapovanie do vyrovnávacej pamäte.

Mapovanie medzi prekladom a pôvodným textom je naviazané na token Vytvorte nový token v [i18n.site/token](//i18n.site/token) odstráňte `.i18h/hash` a znova preložte, aby ste vymazali mätúce mapovanie (to však spôsobí stratu všetkých manuálnych úprav prekladu).

## `YAML` Ako : Vyhnúť Konverzii Odkazu `HTML` Na `Markdown`

Hodnota `YAML` sa pri preklade považuje za `MarkDown` .

Niekedy konverzia z `HTML` → `MarkDown` nie je taká, akú chceme, napríklad `<a href="/">Home</a>` sa prevedie na `[Home](/)` .

Pridaním akéhokoľvek iného atribútu ako `href` k značke `a` , napríklad `<a class="A" href="/">Home</a>` , sa môžete vyhnúť tejto konverzii.

## `./i18n/hash` Konfliktov Súborov Nižšie

Odstráňte konfliktné súbory a znova spustite preklad `i18` .
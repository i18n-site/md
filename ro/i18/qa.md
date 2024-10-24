# Faq

## Adăugarea Sau Ștergerea Liniilor Din Traducere, Rezultând Confuzie În Traducere

> [!WARN]
> Rețineți că **numărul de rânduri din traducere trebuie să corespundă cu rândurile din textul original** .
> Adică, atunci când ajustați manual traducerea, **nu adăugați sau ștergeți linii ale traducerii** , altfel relația de mapare dintre traducere și textul original va fi dezordonată.

Dacă adăugați sau ștergeți din greșeală o linie, provocând confuzie, vă rugăm să restaurați traducerea la versiunea înainte de modificare, executați din nou traducerea `i18` și memorați din nou maparea corectă.

Maparea dintre traducere și textul original este legată de simbol Creați un nou token în [i18n.site/token](//i18n.site/token) ștergeți `.i18h/hash` și traduceți din nou pentru a șterge maparea confuză (dar acest lucru va duce la pierderea tuturor ajustărilor manuale ale traducerii).

## `YAML` : Cum Să Evitați Ca Linkul `HTML` Să Fie Convertit În `Markdown`

O valoare de `YAML` este tratată ca `MarkDown` pentru traducere.

Uneori, conversia de la `HTML` → `MarkDown` nu este ceea ce ne dorim, cum ar fi `<a href="/">Home</a>` fiind convertit în `[Home](/)` .

Adăugarea oricărui alt atribut decât `href` la eticheta `a` , cum ar fi `<a class="A" href="/">Home</a>` , poate evita această conversie.

## `./i18n/hash` Conflicte De Fișiere Mai Jos

Ștergeți fișierele aflate în conflict și executați din nou traducerea `i18` .
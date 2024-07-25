# Problemă Comună

## Adăugarea Sau Ștergerea Liniilor Din Traducere, Rezultând Confuzie În Traducere

Rețineți că **numărul de rânduri din traducere trebuie să corespundă cu rândurile din textul original** .

Adică, atunci când ajustați manual traducerea, **nu adăugați sau ștergeți linii ale traducerii** , altfel relația de mapare dintre traducere și textul original va fi dezordonată.

Dacă adăugați sau ștergeți din greșeală o linie, provocând confuzie, vă rugăm să restaurați traducerea la versiunea înainte de modificare, să rulați `i18` traducerea și să memorați din nou maparea corectă.

Maparea dintre traducere și textul original este legată de simbol Creați un nou token în [i18n.site/token](//i18n.site/token) ștergeți `.i18h/hash` și traduceți din nou pentru a șterge maparea confuză (dar acest lucru va duce la pierderea tuturor ajustărilor manuale ale traducerii).

## `YAML` : Să Preveniți `HTML` Linkului Să Fie Convertit În `Markdown`

Valoarea lui `YAML` va fi tratată ca `MarkDown` pentru traducere.

Uneori, conversia lui `HTML` → `MarkDown` nu este ceea ce ne dorim, cum ar fi convertirea `<a href="/">Home</a>` în `[Home](/)` .

Adăugați orice alt atribut decât `href` la eticheta `a` , cum ar fi `<a class="A" href="/">Home</a>` , pentru a evita această conversie.

## `./I18n/Hash` Următoarele Fișiere Sunt În Conflict

Ștergeți fișierele aflate în conflict și rulați din nou `i18`

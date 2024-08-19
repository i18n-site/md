# Frecvente întrebări

## Adăugarea sau ștergerea de rânduri din traducere, ceea ce duce la o traducere dezordonată

Rețineți că **numărul de rânduri din traducere trebuie să fie identic cu cel al textului original**

Adică, atunci când ajustați manual traducerea, **nu adăugați sau ștergeți rânduri din traducere**, altfel relația de mapare dintre traducere și textul original va fi perturbată.

Dacă accidental adăugați sau ștergeți un rând, provocând o dezordine, restaurați traducerea la versiunea anterioară a modificării și rulați din nou comanda `i18` pentru a reîncărca maparea corectă.

MParea dintre traducere și textul original este legată de token. Creați un token nou la [i18n.site/token](//i18n.site/token), ștergeți `.i18h/hash` și traduceți din nou pentru a șterge maparea dezordonată (dar acest lucru va duce la pierderea tuturor ajustărilor manuale ale traducerii).

## `YAML`: Cum să evitați conversia linkurilor `HTML` în `Markdown`

Valoarea `YAML` este considerată pentru traducere ca `Markdown`.

Uneori, conversia de la `HTML` la `Markdown` nu este dorită, cum ar fi `<a href="/">Home</a>` devenind `[Home](/)`.

Pentru a evita această conversie, adăugați orice alt atribut decât `href` la eticheta `a`, cum ar fi `<a class="A" href="/">Home</a>`.

## Conflicte de fișiere în directorul `./i18n/hash`

Ștergeți fișierele în conflict și rulați din nou comanda `i18` pentru traducere.
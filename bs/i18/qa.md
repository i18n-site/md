# Zajednički Problem

## Dodavanje Ili Brisanje Redova Prijevoda, Što Dovodi Do Zabune U Prijevodu

Zapamtite, **broj redova u prijevodu mora odgovarati redovima u originalnom tekstu** .

Odnosno, kada ručno podešavate prevod, **nemojte dodavati ili brisati redove prevoda** , inače će odnos mapiranja između prevoda i originalnog teksta biti poremećen.

Ako slučajno dodate ili izbrišete red, što uzrokuje zabunu, vratite prijevod na verziju prije izmjene, pokrenite prijevod `i18` i ponovo keširajte ispravno mapiranje.

Preslikavanje između prijevoda i originalnog teksta vezano je za token. Kreirajte novi token u [i18n.site/token](//i18n.site/token) izbrišite `.i18h/hash`

## `YAML` : Spriječiti Da Se `HTML` Linka Pretvori U `Markdown`

Vrijednost `YAML` će se tretirati kao `MarkDown` za prijevod.

Ponekad konverzija `HTML` → `MarkDown` nije ono što želimo, kao što je pretvaranje `<a href="/">Home</a>` u `[Home](/)` .

Dodajte bilo koji atribut osim `href` u `a` , kao što je `<a class="A" href="/">Home</a>` , da biste izbjegli ovu konverziju.

## Sljedeći Fajlovi `./I18n/Hash` U Sukobu

Izbrišite konfliktne datoteke i ponovo pokrenite Prevedi `i18`

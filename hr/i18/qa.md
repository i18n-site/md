# Čest Problem

## Dodavanje Ili Brisanje Redaka Prijevoda, Što Dovodi Do Zabune U Prijevodu

Zapamtite, **broj redaka u prijevodu mora odgovarati broju redaka u izvornom tekstu** .

Odnosno, kada ručno prilagođavate prijevod, **nemojte dodavati niti brisati retke prijevoda** , inače će odnos preslikavanja između prijevoda i izvornog teksta biti poremećen.

Ako slučajno dodate ili izbrišete redak, uzrokujući zabunu, vratite prijevod na verziju prije izmjene, `i18` pokrenite prijevod i ponovno predmemorirajte ispravno mapiranje.

Preslikavanje između prijevoda i izvornog teksta vezano je za token. Stvorite novi token u [i18n.site/token](//i18n.site/token) `.i18h/hash` i ponovno prevedite da biste izbrisali zbunjujuće preslikavanje (ali to će uzrokovati gubitak svih ručnih prilagodbi prijevoda).

## `YAML` : Spriječiti Da Se `HTML` Veze Pretvori U `Markdown`

Vrijednost `YAML` će se tretirati kao `MarkDown` za prijevod.

Ponekad pretvorba `HTML` → `MarkDown` nije ono što želimo, na primjer pretvaranje `<a href="/">Home</a>` u `[Home](/)` .

Dodajte bilo koji atribut osim `href` u oznaku `a` , kao što je `<a class="A" href="/">Home</a>` , da biste izbjegli ovu konverziju.

## `./I18n/Hash` Sljedeće Datoteke Su U Sukobu

Izbrišite sukobljene datoteke i ponovno pokrenite `i18`

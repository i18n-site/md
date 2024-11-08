# Faq

## Dodavanje Ili Brisanje Redaka Prijevoda, Što Dovodi Do Zabune U Prijevodu

> [!WARN]
> Zapamtite, **broj redaka u prijevodu mora odgovarati broju redaka u izvornom tekstu** .
> Odnosno, kada ručno prilagođavate prijevod, **nemojte dodavati niti brisati retke prijevoda** , inače će odnos preslikavanja između prijevoda i izvornog teksta biti poremećen.

Ako slučajno dodate ili izbrišete redak, uzrokujući zabunu, vratite prijevod na verziju prije izmjene, ponovno pokrenite `i18` prijevod i ponovno predmemorirajte ispravno mapiranje.

Preslikavanje između prijevoda i izvornog teksta vezano je za token. Stvorite novi token u [i18n.site/token](//i18n.site/token) izbrišite `.i18h/hash` i ponovno prevedite da biste izbrisali zbunjujuće preslikavanje (ali to će uzrokovati gubitak svih ručnih prilagodbi prijevoda).

## `YAML` : Kako Izbjeći Pretvaranje Veze `HTML` U `Markdown`

Vrijednost `YAML` tretira se kao `MarkDown` za prijevod.

Ponekad pretvorba iz `HTML` → `MarkDown` nije ono što želimo, kao što je `<a href="/">Home</a>` pretvoreno u `[Home](/)` .

Dodavanje bilo kojeg atributa osim `href` oznaci `a` , kao što je `<a class="A" href="/">Home</a>` , može izbjeći ovu konverziju.

## `./i18n/hash` Sukoba Datoteka Ispod

Izbrišite sukobljene datoteke i ponovno pokrenite `i18` prijevod.
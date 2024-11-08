# Faq

## Dodavanje Ili Brisanje Redova Prijevoda, Što Dovodi Do Zabune U Prijevodu

> [!WARN]
> Zapamtite, **broj redova u prijevodu mora odgovarati redovima u originalnom tekstu** .
> Odnosno, kada ručno podešavate prevod, **nemojte dodavati ili brisati redove prevoda** , inače će odnos mapiranja između prevoda i originalnog teksta biti poremećen.

Ako slučajno dodate ili izbrišete liniju, što uzrokuje zabunu, vratite prijevod na verziju prije modifikacije, pokrenite `i18` prijevod ponovo i ponovo keširajte ispravno mapiranje.

Preslikavanje između prijevoda i originalnog teksta je vezano za token Kreirajte novi token u [i18n.site/token](//i18n.site/token) izbrišite `.i18h/hash` i prevedite ponovo da biste očistili zbunjujuće mapiranje (ali to će uzrokovati gubitak svih ručnih prilagođavanja prijevoda).

## `YAML` Kako Izbjeći Pretvaranje : `HTML` U `Markdown`

Vrijednost `YAML` se tretira kao `MarkDown` za prijevod.

Ponekad konverzija iz `HTML` → `MarkDown` nije ono što želimo, kao što je `<a href="/">Home</a>` pretvaranje u `[Home](/)` .

Dodavanje bilo kojeg drugog atributa osim `href` oznaci `a` , kao što je `<a class="A" href="/">Home</a>` , može izbjeći ovu konverziju.

## `./i18n/hash` Sukoba Datoteka Ispod

Izbrišite konfliktne fajlove i ponovo pokrenite `i18` prevod.
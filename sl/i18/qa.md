# Pogosta Vprašanja

## Dodajanje Ali Brisanje Vrstic Prevoda, Kar Povzroči Zmedo v Prevodu

> [!WARN]
> Ne pozabite, **da mora število vrstic v prevodu ustrezati vrsticam v izvirnem besedilu** .
> To pomeni, da pri ročnem prilagajanju prevoda **ne dodajajte ali brišite vrstic prevoda** , sicer bo razmerje preslikave med prevodom in izvirnim besedilom neurejeno.

Če pomotoma dodate ali izbrišete vrstico, kar povzroči zmedo, obnovite prevod na različico pred spremembo, znova zaženite prevod `i18` in znova predpomnite pravilno preslikavo.

Preslikava med prevodom in izvirnim besedilom je vezana na žeton. Ustvarite nov žeton v [i18n.site/token](//i18n.site/token) izbrišite `.i18h/hash` in znova prevedite, da počistite zmedeno preslikavo (vendar bodo s tem izgubljene vse ročne prilagoditve prevoda).

## `YAML` : Kako Se Izogniti Pretvorbi Povezave `HTML` v `Markdown`

Vrednost `YAML` se za prevod obravnava kot `MarkDown` .

Včasih pretvorba iz `HTML` → `MarkDown` ni tisto, kar želimo, na primer `<a href="/">Home</a>` se pretvori v `[Home](/)` .

Če oznaki `a` dodate kateri koli atribut razen `href` , na primer `<a class="A" href="/">Home</a>` , se lahko izognete tej pretvorbi.

## `./i18n/hash` Konfliktov Datotek Spodaj

Izbrišite sporne datoteke in znova zaženite `i18` prevod.
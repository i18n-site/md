# Pogosta Težava

## Dodajanje Ali Brisanje Vrstic Prevoda, Kar Povzroči Zmedo v Prevodu

Ne pozabite, **da mora število vrstic v prevodu ustrezati vrsticam v izvirnem besedilu** .

To pomeni, da pri ročnem prilagajanju prevoda **ne dodajajte ali brišite vrstic prevoda** , sicer bo razmerje preslikave med prevodom in izvirnim besedilom neurejeno.

Če pomotoma dodate ali izbrišete vrstico, kar povzroči zmedo, obnovite prevod na različico pred spremembo, `i18` zaženite prevod in ponovno predpomnite pravilno preslikavo.

Preslikava med prevodom in izvirnim besedilom je vezana na žeton. Ustvarite nov žeton v [i18n.site/token](//i18n.site/token) in znova prevedite `.i18h/hash` da počistite zmedeno preslikavo (vendar bodo s tem izgubljene vse ročne prilagoditve prevoda).

## `YAML` : Preprečiti Pretvorbo `HTML` Povezave v `Markdown`

Vrednost `YAML` bo za prevod obravnavana kot `MarkDown` .

Včasih pretvorba `HTML` → `MarkDown` ni tisto, kar želimo, na primer pretvorba `<a href="/">Home</a>` v `[Home](/)` .

Dodajte kateri koli atribut razen `href` oznaki `a` , na primer `<a class="A" href="/">Home</a>` , da se izognete tej pretvorbi.

## `./I18n/Hash` Naslednje Datoteke So v Konfliktu

Izbrišite nasprotujoče si datoteke in znova zaženite Prevajalnik `i18`

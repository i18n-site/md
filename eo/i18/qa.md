# Oftaj Demandoj

## Aldono Aŭ Forigo De Linioj De La Traduko, Rezultigante Konfuzon en La Traduko

> [!WARN]
> Memoru, **la nombro da linioj en la traduko devas respondi al la linioj en la originala teksto** .
> Tio estas, dum mane alĝustigante la tradukon, **ne aldonu aŭ forigu liniojn de la traduko** , alie la mapa rilato inter la traduko kaj la originala teksto estos malorda.

Se vi hazarde aldonas aŭ forigas linion, kaŭzante konfuzon, bonvolu restarigi la tradukon al la versio antaŭ modifo, rulu `i18` tradukon denove, kaj rememoru la ĝustan mapadon.

La mapado inter la traduko kaj la originala teksto estas ligita al la ĵetono Kreu novan ĵetonon en [i18n.site/token](//i18n.site/token) forigu `.i18h/hash` , kaj traduku denove por forigi la konfuzan mapadon (sed ĉi tio kaŭzos ĉiujn manajn ĝustigojn al la traduko).

## `YAML` : Kiel Eviti Ke Ligilo `HTML` Estu Konvertita Al `Markdown`

Valoro de `YAML` estas traktata kiel `MarkDown` por tradukado.

Kelkfoje la konvertiĝo de `HTML` → `MarkDown` ne estas tio, kion ni volas, kiel ekzemple `<a href="/">Home</a>` konvertita al `[Home](/)` .

Aldonante ajnan atributon krom `href` al la `a` etikedo, kiel ekzemple `<a class="A" href="/">Home</a>` , povas eviti ĉi tiun konvertiĝon.

## `./i18n/hash` Dosierkonfliktoj Malsupre

Forigu la konfliktajn dosierojn kaj reruligu `i18` tradukon.
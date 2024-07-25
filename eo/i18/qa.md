# Komuna Problemo

## Aldono Aŭ Forigo De Linioj De La Traduko, Rezultigante Konfuzon en La Traduko

Memoru, **la nombro da linioj en la traduko devas respondi al la linioj en la originala teksto** .

Tio estas, dum mane alĝustigante la tradukon, **ne aldonu aŭ forigu liniojn de la traduko** , alie la mapa rilato inter la traduko kaj la originala teksto estos malorda.

Se vi hazarde aldonas aŭ forigas linion, kaŭzante konfuzon, bonvolu restarigi la tradukon al la versio antaŭ la modifo, rulu la tradukon `i18` kaj rememoru la ĝustan mapadon.

La mapado inter la traduko kaj la originala teksto estas ligita al la ĵetono Kreu novan ĵetonon en [i18n.site/token](//i18n.site/token) forigu `.i18h/hash` kaj traduku denove por forigi la konfuzan mapadon (sed ĉi tio kaŭzos ĉiujn manajn ĝustigojn al la traduko).

## `YAML` Eviti : `HTML` De La Ligo Estu Konvertita Al `Markdown`

La valoro de `YAML` estos traktita kiel `MarkDown` por tradukado.

Kelkfoje la konvertiĝo de `HTML` → `MarkDown` ne estas tio, kion ni volas, kiel `<a href="/">Home</a>` esti konvertita al `[Home](/)` .

Aldonu ajnan atributon krom `href` al la `a` , kiel `<a class="A" href="/">Home</a>` , por eviti ĉi tiun konvertiĝon.

## `./I18n/Hash` La Sekvaj Dosieroj Konfliktas

Forigu la konfliktajn dosierojn kaj `i18` Traduku.

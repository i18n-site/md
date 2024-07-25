# Instalu Kaj Uzu

## Vindozo Unue Instalu git bash

windows Sistemo, bonvolu [klaki ĉi tie por elŝuti kaj instali `git bash`](https://git-scm.com/download/win)

Rulu postajn operaciojn en `git bash`

## Instali

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Agordi Tradukan Ĵetonon

Vizitu [i18n.site/token](//i18n.site/token) por kopii ĵetonon

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Kreu `~/.config/i18n.site.yml` algluu la kopiitan enhavon en ĝin, la enhavo estas jena:

```
token: YOUR_API_TOKEN
```

Krome, vi devas [i18n.site/payBill](//i18n.site/payBill) kreditkarton por pago (ne necesas reŝargo, la retejo aŭtomate deprenos kotizojn laŭ uzado, [vidu la hejmpaĝon por prezoj](/#price) ).

## Uzi

### Demoprojekto

Bonvolu raporti al la demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) projekto por lerni la agordon de tradukado `i18`

Uzantoj en Ĉinio povas kloni [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Post klonado, eniru la dosierujon kaj `i18` por kompletigi la tradukon.

### Dosierujo Strukturo

La ŝablona magazena dosierujo-strukturo estas jena

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` dosierujo enhavas la tradukitajn demo-dosierojn, kiuj estas nur ekzemplo kaj povas esti forigitaj.

### Kuru Tradukon

Enigu la dosierujon kaj `i18` por traduki.

### Aldonu Dosierojn Al La Deponejo

Krom tradukado, la programo ankaŭ generos la sekvajn dosierojn, bonvolu aldoni ilin al la deponejo.

```
.i18n/hash
.i18n/cache/.gitignore
```

Inter : , la enhavo de `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ĉi tio signifas ignori ĉiujn dosierojn en la `.i18n/cache/` (krom `.i18n/cache/.gitignore` ).

Se via versio-kontrola programaro ne estas `git` bonvolu ignori ĝin laŭ ĉi tiu agordo.

## Agorda Dosiero

`.i18n/conf.yml` estas la agorda dosiero de la `i18` tradukilo

La enhavo estas jena:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Font & Lingvo Traduka Lingvo

En la agorda dosiero, la subuloj de `fromTo`

`en` estas la fontlingvo, `zh ja ko de fr` estas la cellingvo de tradukado.

Lingvokodo vidu [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ekzemple, se vi volas traduki la ĉinan en la anglan, reverku ĉi tiun linion `zh: en`

Se vi volas traduki al ĉiuj subtenataj lingvoj, bonvolu lasi malplenan post `:` ekzemple

```
i18n:
  fromTo:
    en:
```

### Ignori Dosieron

Defaŭlte, ĉiuj dosieroj komencantaj per `.md` kaj `.yml` en la fontlingva dosierujo estos tradukitaj.

Se vi volas ignori iujn dosierojn kaj ne traduki ilin (kiel nefinitajn malnetojn), vi povas uzi la `ignore` agordon.

[globset](https://docs.rs/globset/latest/globset/#syntax) sintakson similan al `.gitignore` `ignore`

Ekzemple, en la ĉi-supra agorda `_* ` signifas, ke dosieroj komenciĝantaj per `_` ne estos tradukitaj.

## Reguloj Pri Tradukado

### Tradukredaktistoj Ne Devus Aldoni Aŭ Forigi Liniojn

La traduko estas redaktebla. Modifi la originalan tekston kaj maŝintraduku ĝin denove, la manaj modifoj al la traduko ne estos anstataŭitaj (se ĉi tiu alineo de la originala teksto ne estas modifita).

Sed bonvolu noti, ke la linioj de la traduko kaj la originala teksto devas respondi unu al unu. Tio estas, ne aldonu aŭ forviŝu liniojn dum kompilado de la traduko. Alie, ĝi kaŭzos konfuzon en la tradukredakta kaŝmemoro.

Se io misfunkcias, bonvolu raporti al [la Oftaj Demandoj por solvoj.](/i18/qa#H1)

### `YAML` Traduku

La komandlinia ilo trovos ĉiujn dosierojn finiĝantajn per `.yml` en la fontlingva dosierujo kaj tradukos ilin.

* Notu, ke la dosiernomo sufikso devas esti `.yml` (ne `.yaml` ).

La ilo tradukas nur la vortarajn valorojn en `.yml` ne la vortarajn ŝlosilojn.

ekzemple `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

estos tradukita kiel `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

La traduko de `YAML` ankaŭ povas esti modifita mane (sed ne aldonu aŭ forigu klavojn aŭ liniojn en la traduko).

Surbaze de `YAML` Tradukado, vi povas facile konstrui internaciajn solvojn por diversaj programlingvoj.

## Altnivela Uzado

### Traduka Subdosierujo

Dum vi `.i18n/conf.yml` (ne necesas komenci de demo-projekta ŝablono ĉiufoje), `i18` funkcios bone.

La komandlinia ilo trovos `.i18n/conf.yml` agordon en ĉiuj subdosierujoj kaj tradukos ĝin.

Projektoj kiuj uzas la arkitekturon [monorepo](//monorepo.tools) povas dividi lingvajn dosierojn en subdosierujojn.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Propra Instala Dosierujo

Ĝi estos instalita al `/usr/local/bin`

`/usr/local/bin` ne havas skribpermeson ĝi estos instalita al `~/.bin` .

Agordu `TO` Vi povas difini la instalan dosierujon, ekzemple :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

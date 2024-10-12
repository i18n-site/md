# Instalu Kaj Uzu

## Vindozo Unue Instalu git bash

windows , bonvolu [klaki ĉi tie por elŝuti kaj instali `git bash` unue](https://git-scm.com/download/win) .

Rulu postajn operaciojn en `git bash` .

## Instali

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Agordi Tradukan Ĵetonon

[i18n.site/token](//i18n.site/token) Alklaku por kopii ĵetonon

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Kreu `~/.config/i18n.site.yml` , algluu la kopiitan enhavon en ĝin, la enhavo estas jena:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , vi devas ligi kreditkarton por pago (ne necesas reŝargo, la retejo aŭtomate deprenos kotizojn laŭ uzado, [vidu la hejmpaĝon por prezoj](/#price) ).

## Uzi

### Demoprojekto

Bonvolu raporti al la demo-projekto [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) lerni la agordon de `i18` traduko.

Uzantoj en Ĉinio povas kloni [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Post klonado, enigu la dosierujon kaj rulu `i18` por kompletigi la tradukon.

### Dosierujo-Strukturo

La ŝablona magazena dosierujo-strukturo estas jena

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

La tradukitaj demo-dosieroj en la dosierujo `en` estas nur ekzemplo kaj povas esti forigitaj.

### Kuru Tradukon

Enigu la dosierujon kaj rulu `i18` por traduki.

Krom la traduko, la programo ankaŭ generos la `.i18n/data` dosierujon, bonvolu aldoni ĝin al la deponejo.

Post tradukado de la nova dosiero, nova datumdosiero estos generita en ĉi tiu dosierujo Memoru aldoni `git add .` .

## Agorda Dosiero

`.i18n/conf.yml` estas la agorda dosiero de la `i18` komandlinia tradukilo

La enhavo estas jena:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Font-Lingvo Traduka &

En la agorda dosiero, la subulo de `fromTo` :

`en` estas la fontlingvo, `zh ja ko de fr` estas la cellingvo de la traduko.

Lingvokodo vidu [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ekzemple, se vi volas traduki la ĉinan en la anglan, reverku ĉi tiun linion `zh: en` .

Se vi volas traduki al ĉiuj subtenataj lingvoj, bonvolu lasi malplenan post `:` . ekzemple

```
i18n:
  fromTo:
    en:
```

Vi povas agordi malsamajn `fromTo` por malsamaj subdosierujoj / Demonstro estas skribita jene :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

En ĉi tiu agorda tabelo, la fontlingvo de katalogo `blog` traduko estas `zh` , kaj la fontlingvo de katalogo `blog/your_file_name.md` traduko estas `ja` .

### Ignori Dosieron

Defaŭlte, ĉiuj dosieroj komencantaj per `.md` kaj `.yml` en la fontlingva dosierujo estos tradukitaj.

Se vi volas ignori iujn dosierojn kaj ne traduki ilin (kiel nefinitajn malnetojn), vi povas agordi ĝin per la kampo `ignore` .

`ignore` uzas la [globset](https://docs.rs/globset/latest/globset/#syntax) sintakson kiel la `.gitignore` dosiero.

Ekzemple, `_* ` en la supra agorda dosiero signifas, ke dosieroj komencante per `_` ne estos tradukitaj.

## Reguloj Pri Tradukado

### Tradukredaktistoj Ne Devus Aldoni Aŭ Forigi Liniojn

La traduko estas redaktebla. Modifi la originalan tekston kaj maŝintraduku ĝin denove, la manaj modifoj al la traduko ne estos anstataŭitaj (se ĉi tiu alineo de la originala teksto ne estas modifita).

Sed bonvolu noti, ke la linioj de la traduko kaj la originala teksto devas respondi unu al unu. Tio estas, ne aldonu aŭ forviŝu liniojn dum kompilado de la traduko. Alie, ĝi kaŭzos konfuzon en la tradukredakta kaŝmemoro.

Se io misfunkcias, bonvolu raporti al [la Oftaj Demandoj por solvoj.](/i18/qa#H1)

### `YAML` Tradukoj

La komandlinia ilo trovos ĉiujn dosierojn finiĝantajn per `.yml` en la fontlingva dosierujo kaj tradukos ilin.

* Notu, ke la dosiernomo sufikso devas esti `.yml` (ne `.yaml` ).

La ilo tradukas nur la vortarajn valorojn en `.yml` , ne la vortarajn ŝlosilojn.

Ekzemple `i18n/en/i18n.yml`

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

Surbaze de `YAML` traduko, vi povas facile konstrui internaciajn solvojn por diversaj programlingvoj.

## Altnivela Uzado

### Traduka Subdosierujo

Tiel longe kiel `.i18n/conf.yml` estas kreita (ne necesas komenci de demo-projekta ŝablono ĉiufoje), `i18` funkcios bone.

La komandlinia ilo trovos `.i18n/conf.yml` agordojn en ĉiuj subdosierujoj kaj tradukos ilin.

Projektoj kiuj uzas la arkitekturon [monorepo](//monorepo.tools) povas dividi lingvajn dosierojn en subdosierujojn.

![](https://p.3ti.site/1719910016.avif)

### Propra Instala Dosierujo

Ĝi estos instalita al `/usr/local/bin` defaŭlte.

Se `/usr/local/bin` ne havas skribpermeson ĝi estos instalita al `~/.bin` .

Agordi mediovariablon `TO` povas difini la instalan dosierujon, ekzemple :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
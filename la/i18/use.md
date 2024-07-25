# Install Et Usu

## windows Primum Install git Vercundus

windows [`git bash`](https://git-scm.com/download/win)

Currite operationes subsequentes in `git bash`

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurare Translatione Indicium

Visita [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Fac `~/.config/i18n.site.yml` crustulum contentum in eo expressum, contentum hoc modo:

```
token: YOUR_API_TOKEN
```

Praeterea, opus est [i18n.site/payBill](//i18n.site/payBill) scidula pro solutione ligare (nulla recharge requiratur, website statim feodis deducendis iuxta consuetudinem, [paginam pro pricing vide](/#price) ).

## Usus

### Demo Project

Quaeso `i18` ad demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Users in Sinis clone possunt [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Post exquisitis, inire indicem et curre `i18`

### Directory Structure

Exemplum CELLA Directory structuram talis est

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

In `en`

### Currite Translation

Ingredere indicem et curre `i18`

### Add Files in Conditorio

Praeter translationem, programma etiam sequentia tabularia generabit, eas repositorio adde.

```
.i18n/hash
.i18n/cache/.gitignore
```

Inter : contentum est `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Hoc significat omnia documenta ignorare in `.i18n/cache/` (exceptis `.i18n/cache/.gitignore` ).

Si programmatis versionis tuae non est `git` secundum hanc configurationem illud ignorare placet.

## Configurationis File

`.i18n/conf.yml` `i18`

Contentum talis est:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Source Language &

In schemate de configuratione, de subordinatis `fromTo`

`en` est lingua, `zh ja ko de fr` est scopo translationis lingua.

Language code see [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Exempli gratia, si Sinenses in Anglicum interpretari vis, hanc lineam rescribe `zh: en`

Si vis ad omnes linguas fautores interpretari, blank post relinquas `:` exempli gratia

```
i18n:
  fromTo:
    en:
```

### Ignorare File

Defalta omnia documenta `.md` et `.yml` in fonte linguarum directorium transferentur.

Si certas tabulas ignorare vis nec eas transferre (ut schematis imperfecti), in configuratione `ignore` uti potes.

[globset](https://docs.rs/globset/latest/globset/#syntax) syntaxi similis `.gitignore` `ignore`

Exempli gratia, in file configuratione `_` `_* `

## Translatione Praecepta

### Translationes Editores Addere Vel Delere Lineas Non Debent

Versio est editabilis. Textum originalem et machinae iterum transferre, modificationes manuales ad translationem non erunt overscripta (si haec paragraphus textus originalis non mutatus est).

Sed nota quod lineae translationis et textus originalis uni respondere debent. Hoc est, lineas cum translatione componendis non addere vel delere. Alioquin confusionem facient in translatione thesauri edendi.

Si aliquid errat, [FAQ solutiones referre placet.](/i18/qa#H1)

### `Yaml`

Instrumentum mandatum lineae omnes tabulas cum `.yml` desinentes invenies in fonte documenti linguae documenti et eas transferre.

* Nota nomen tabella suffixo `.yaml` debere `.yml`

Instrumentum tantum translates valores dictionarii in `.yml` non claves dictionarii .

exempli gratia `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

erit interpretari `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Translatio `YAML` etiam manually mutari potest (sed claves vel lineas in translatione non adde vel delere).

Fundatur `YAML` Translatione, solutiones internationales facile poteris aedificare pro variis programmatibus linguarum.

## Provectus Usus

### Translation Subdirectory

`i18` creas `.i18n/conf.yml`

Instrumentum mandatum lineae `.i18n/conf.yml` in omnibus subdirectoriis reperiet et eam transferet.

Projecta quae architectura utuntur [monorepo](//monorepo.tools) fasciculos linguae in subdirectorias scindere potest.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### More Institutionem Presul

`/usr/local/bin` ad defaltam.

`/usr/local/bin` non habet licentiam scribendam, instituetur ad `~/.bin` .

Pone variabiles ambitus `TO` Institutionem directorium definire potes, exempli gratia :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

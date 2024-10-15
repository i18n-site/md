# Install Ac Usu

## Fenestras Primum Install git Vercundus

windows [`git bash`](https://git-scm.com/download/win)

Curre operationes sequentes in `git bash` .

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurare Translatione Indicium

Visita [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Parte `~/.config/i18n.site.yml` , contentum in illud expressum crustulum, contentum hoc modo est:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , opus est ut scidula pro solutione ligare (nihil recharge requiratur, website statim feodis deducendis secundum consuetudinem, [protocollum ad pricing videbimus](/#price) ).

## Usus

### Demo Project

`i18` , ad demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Users in Sinis clone possunt [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Postquam exquisita est, inire indicem et curre `i18` ad translationem perficiendam.

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

Documenta demo translata in `en` directorio exemplum tantum sunt et deleri possunt.

### Currere Translation

Intrant indicem et currunt `i18` ad transferendum.

Praeter translationem, programma etiam `.i18n/data` folder in generabit, illud repositorium adde.

Post novum fasciculum translato, nova notitia lima in hoc `git add . ` generabitur.

## Configurationis File

`.i18n/conf.yml` est fasciculus configurationis `i18` mandati lineam instrumenti translationis

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

In configuration file, subordinatum `fromTo` :

`en` fons lingua, `zh ja ko de fr` lingua translationis est scopo.

Language code see [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Exempli gratia, si Sinica Latine interpretari vis, hanc lineam rescribe `zh: en` .

Si interpretari vis omnibus linguis fultis, blank post `:` relinquere placet. exempli gratia

```
i18n:
  fromTo:
    en:
```

Differentia `fromTo` pro diversis subdirectoriis configurari : /

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

In hac schemate configuratione, fons lingua presul `blog` translatio est `zh` et fons lingua directorium `blog/your_file_name.md` translatio est `ja` .

### Ignorare File

Defalta omnia documenta incipientes ab `.md` et `.yml` in fonte linguarum directorium transferentur.

Si certas tabulas ignorare vis nec eas transferre (ut schematis inperfecti), figura agri `ignore` uti potes.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) syntaxi qua `.gitignore` utitur.

Exempli gratia, `_* ` in schemate de configuratione supra significat tabulas ab `_` incipientes interpretari non posse.

## Translatione Praecepta

### Translationes Editores Addere Vel Delere Lineas Non Debent

Versio est editabilis. Textum originalem et machinae iterum transferre, modificationes manuales ad translationem non erunt overscripta (si haec paragraphus textus originalis non mutatus est).

Sed nota quod lineae translationis et textus originalis uni respondere debent. Hoc est, lineas cum translatione componendis non addere vel delere. Alioquin confusionem facient in translatione edendi thesaurum.

Si aliquid errat, [FAQ solutiones referre placet.](/i18/qa#H1)

### `YAML` Translations

Instrumentum mandatum lineae omnes tabulas desinentes in `.yml` invenies in directorio fontis linguae documenti et eas transferre.

* Nota nomen suffixi `.yml` (non `.yaml` ) esse debere.

Instrumentum tantum valores dictionarii in `.yml` vertit, non claves dictionarii.

Exempli gratia `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ut interpretari `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Interpretatio `YAML` etiam manually mutari potest (sed claves vel lineas in translatione non adde vel delere).

Ex translatione `YAML` , solutiones internationales pro variis programmandis linguis facile aedificare potes.

## Provectus Usus

### Translation Subdirectory

Quamdiu `.i18n/conf.yml` creatur (non opus est ut satus a demo project template omni tempore), `i18` bene operabitur.

Instrumentum mandatum lineae `.i18n/conf.yml` configurationes in omnibus subdirectorias invenies et transferendas.

Projecta quae architectura utuntur [monorepo](//monorepo.tools) fasciculos linguae in subdirectorias scindere potest.

![](https://p.3ti.site/1719910016.avif)

### More Institutionem Presul

Constituetur ad `/usr/local/bin` per defaltam.

Si `/usr/local/bin` non habet licentiam scribendam, instituatur ad `~/.bin` .

Ponere ambitus variabilis `TO` definire potest directorium institutionis, exempli gratia :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
# Install Ac Usu

## windows Primum Install git Vercundus

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

Praeterea, debes fidem card in solutione ligare [i18n.site/payBill](//i18n.site/payBill) Nullum recharge opus est, website statim feodis deducet secundum consuetudinem, [vide paginam pro pricing](/#price) ).

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

### Currite Translation

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

`en` fons lingua, `zh ja ko de fr` lingua translationis scopo est.

Language code see [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Exempli gratia, si Sinica Latine interpretari vis, hanc lineam rescribe `zh: en` .

Si interpretari vis omnibus linguis fultis, blank post `:` relinquere placet. exempli gratia

```
i18n:
  fromTo:
    en:
```

Pro : subdirectoriis `fromTo` diversa configurare potes /

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

In hac tabula configuratione, fons linguae catalogi `blog` translationis `zh` est, et fons linguae catalogi `blog/your_file_name.md` translationis `ja` est.

### Multilingual Imagines/Nexiones

Cum URLs in picturis et nexus in `replace:` et `MarkDown` (et `src` et `href` infixae `HTML` attributa) in `.i18n/conf.yml` cum hac praepositione configurantur, fons linguae in Domicilio restituetur ex codice [linguae](/i18/LANG_CODE) translationis. [codice album](/i18/LANG_CODE) ).

Exempli gratia, conformatio tua talis est:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

Dictionarium est `replace: ` , clavis est praepositio domicilii reponenda, et valor regulae subrogativae.

Significatio regulae `ko de uk>ru zh-TW>zh >en` superius reponendae est quod `ko de` utitur imagine linguae propriae, `zh-TW` et `zh` imagine `zh` , `uk` imagine `ru` , aliarumque linguarum (ut `ja` ) utatur pictura. de `en` per defaltam.

Exempli gratia, `fr` origo `MarkDown` talis est :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Fasciculus Anglicus translatus et genitus ( `en` ) fasciculus talis est :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Hic, `/en/` in codice fonte linguae latinae reponuntur cum `/zh/` in lingua scopo.

`/` :

> [!TIP]
> Si `- /` in `url:` configuratur, viae relativae tantum pares erunt, sed URLs ab initio cum `//` non aequabitur.
>
> Si quidam nexus nominis domain nomen reponi volunt et quidam reponi nolunt, praefixis diversis uti potes ut `[x](//x.com/en/)` et `[x](https://x.com/en/)` distinguere.

### Ignorare File

Defalta omnia documenta incipientes ab `.md` et `.yml` in fonte linguarum directorium transferentur.

Si certas tabulas ignorare vis nec eas transferre (ut incohatae potiones), eam cum agro `ignore` configurare potes.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) syntaxi qua `.gitignore` utitur.

Exempli gratia, `_* ` in schemate de configuratione supra significat tabulas ab `_` incipientes interpretari non posse.

## Translatione Praecepta

### Translationes Editores Addere Vel Delere Lineas Non Debent

Versio est editabilis. Textum originalem et machinae illud iterum mutare, modificationes manuales ad translationem non erunt overscripta (si haec paragraphus textus originalis non mutatus est).

> [!WARN]
> Inter lineas translationis et textus originalis unus-adaequare debet esse correspondentia. Hoc est, lineas cum translatione componendis non addere vel delere. Alioquin confusionem facient in translatione thesauri edendi.

Si aliquid errat, [FAQ solutiones referre placet.](/i18/qa#H1)

### `YAML` Translations

Instrumentum mandatum lineae omnes tabulas desinentes in `.yml` invenies in indice fonti linguarum fasciculi et eas transferendas.

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
# Instal·Lar I Utilitzar

## windows Primer Instal·La git bash

windows Sistema, feu [clic aquí per descarregar i instal·lar `git bash` primer](https://git-scm.com/download/win) .

Executeu les operacions posteriors a `git bash` .

## Instal·Lar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configura El Testimoni De Traducció

Visita [i18n.site/token](//i18n.site/token) Fes clic per copiar el testimoni

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Creeu `~/.config/i18n.site.yml` , enganxeu-hi el contingut copiat, el contingut és el següent:

```
token: YOUR_API_TOKEN
```

A més, cal [vincular](/#price) una targeta de crèdit de pagament a [i18n.site/payBill](//i18n.site/payBill)

## Utilitzar

### Projecte De Demostració

Consulteu el projecte de demostració [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) conèixer la configuració de la traducció `i18` .

Els usuaris a la Xina poden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Després de la clonació, introduïu el directori i executeu `i18` per completar la traducció.

### Estructura De Directoris

L'estructura del directori del magatzem de plantilles és la següent

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Els fitxers de demostració traduïts al directori `en` són només un exemple i es poden suprimir.

### Executeu La Traducció

Introduïu el directori i executeu `i18` per traduir.

A més de la traducció, el programa també generarà la carpeta `.i18n/data` , si us plau, afegiu-la al repositori.

Després de traduir el nou fitxer, es generarà un nou fitxer de dades en aquest directori. Recordeu afegir `git add . ` .

## Fitxer De Configuració

`.i18n/conf.yml` és el fitxer de configuració de l'eina de traducció de la línia d'ordres `i18`

El contingut és el següent:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### & De La Traducció

Al fitxer de configuració, la subordinada de `fromTo` :

`en` és l'idioma d'origen, `zh ja ko de fr` és l'idioma de destinació de la traducció.

Codi d'idioma vegeu [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Per exemple, si voleu traduir el xinès a l'anglès, torneu a escriure aquesta línia `zh: en` .

Si voleu traduir a tots els idiomes admesos, deixeu-lo en blanc després de `:` . per exemple

```
i18n:
  fromTo:
    en:
```

Podeu configurar `fromTo` diferent per a diferents subdirectoris / S'escriu una demostració :

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

En aquesta taula de configuració, l'idioma font de la traducció del catàleg `blog` és `zh` i l'idioma font de la traducció del catàleg `blog/your_file_name.md` és `ja` .

### Imatges/Enllaços Multilingües

Quan els URL de les imatges i els enllaços a `replace:` i `MarkDown` (i els atributs `src` i `href` de l'incrustat `HTML` ) es configuren en `.i18n/conf.yml` amb aquest prefix, el codi d'idioma font a l'URL se substituirà pel codi d'idioma de la traducció ( [idioma). llista de codis](/i18/LANG_CODE) ).

Per exemple, la vostra configuració és la següent:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` és un diccionari, la clau és el prefix de l'URL que cal substituir i el valor és la regla de substitució.

El significat de substituir la regla `ko de uk>ru zh-TW>zh >en` anterior és que `ko de` utilitza la imatge del seu propi codi d'idioma, `zh-TW` i `zh` utilitzen la imatge de `zh` , `uk` utilitza la imatge de `ru` i altres idiomes (com ara `ja` ) utilitzen la imatge de `en` per defecte.

Per exemple, el fitxer font francès ( `fr` ) de `MarkDown` és el següent :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

El fitxer anglès ( `en` ) traduït i generat és el següent :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Aquí, `/en/` del codi de l'idioma font se substitueixen per `/zh/` a l'idioma de destinació.

Nota : Hi ha d'haver `/` abans i després del codi d'idioma del text substituït a l'URL.

> [!TIP]
> Si es configura `- /` a `url:` , només es coincidiran els camins relatius, però els URL que comencen per `//` no es faran coincidir.
>
> Si alguns enllaços d'un nom de domini volen ser substituïts i alguns no volen ser substituïts, podeu utilitzar diferents prefixos com `[x](//x.com/en/)` i `[x](https://x.com/en/)` per distingir-los.

### Ignora El Fitxer

De manera predeterminada, es traduiran tots els fitxers que comencen per `.md` i `.yml` al directori de l'idioma font.

Si voleu ignorar determinats fitxers i no traduir-los (com ara esborranys inacabats), podeu configurar-lo amb el camp `ignore` .

`ignore` utilitza la [globset](https://docs.rs/globset/latest/globset/#syntax) sintaxi que el fitxer `.gitignore` .

Per exemple, `_* ` al fitxer de configuració anterior significa que els fitxers que comencen per `_` no es traduiran.

## Normes De Traducció

### Els Editors De Traducció No Haurien D'afegir Ni Suprimir Línies

La traducció és editable. Modifiqueu el text original i torneu a traduir-lo automàticament, les modificacions manuals a la traducció no seran sobreescrites (si aquest paràgraf del text original no s'ha modificat).

> [!WARN]
> Hi ha d'haver una correspondència un a un entre les línies de la traducció i el text original. És a dir, no afegiu ni suprimiu línies en compilar la traducció. En cas contrari, provocarà confusió a la memòria cau d'edició de traduccions.

Si alguna cosa va malament, consulteu [les PMF per obtenir solucions.](/i18/qa#H1)

### `YAML` Traduccions

L'eina de línia d'ordres trobarà tots els fitxers que acaben amb `.yml` al directori de fitxers de l'idioma font i els traduirà.

* Tingueu en compte que el sufix del nom del fitxer ha de ser `.yml` (no `.yaml` ).

L'eina només tradueix els valors del diccionari en `.yml` , no les claus del diccionari.

Per exemple `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

es traduirà com a `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

La traducció de `YAML` també es pot modificar manualment (però no afegiu ni suprimiu claus o línies a la traducció).

Basat en la traducció `YAML` , podeu crear fàcilment solucions internacionals per a diversos llenguatges de programació.

## Ús Avançat

### Subdirectori De Traducció

Mentre es creï `.i18n/conf.yml` (no cal començar des de la plantilla de projecte de demostració cada vegada), `i18` funcionarà bé.

L'eina de línia d'ordres trobarà `.i18n/conf.yml` configuracions a tots els subdirectoris i les traduirà.

Els projectes que utilitzen l'arquitectura [monorepo](//monorepo.tools) poden dividir fitxers d'idioma en subdirectoris.

![](https://p.3ti.site/1719910016.avif)

### Directori D'instal·Lació Personalitzat

S'instal·larà a `/usr/local/bin` per defecte.

Si `/usr/local/bin` no té permís d'escriptura, s'instal·larà a `~/.bin` .

L'establiment de la variable d'entorn `TO` pot definir el directori d'instal·lació, per exemple :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
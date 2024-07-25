# Instal·Lar I Utilitzar

## windows Primer Instal·La git bash

windows Sistema, [feu clic aquí per descarregar-lo i instal·lar-lo `git bash`](https://git-scm.com/download/win) .

Executeu les operacions posteriors a `git bash`

## Instal·Lar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configura El Testimoni De Traducció

Visita [i18n.site/token](//i18n.site/token) Fes clic per copiar el testimoni

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Crea `~/.config/i18n.site.yml` enganxeu-hi el contingut copiat, el contingut és el següent:

```
token: YOUR_API_TOKEN
```

A més, cal [i18n.site/payBill](//i18n.site/payBill) una targeta de crèdit per al pagament (no cal recàrrega, el lloc web deduirà automàticament les tarifes segons l'ús, [consulteu la pàgina d'inici per veure els preus](/#price) ).

## Utilitzar

### Projecte De Demostració

Consulteu el projecte de [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) per conèixer la configuració de la traducció `i18`

Els usuaris a la Xina poden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Després de la clonació, introduïu el directori i `i18` per completar la traducció.

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

El directori `en` conté els fitxers de demostració traduïts, que són només un exemple i es poden suprimir.

### Executeu La Traducció

Entra al directori i `i18` per traduir.

### Afegiu Fitxers Al Repositori

A més de la traducció, el programa també generarà els fitxers següents, si us plau, afegiu-los al repositori.

```
.i18n/hash
.i18n/cache/.gitignore
```

Entre ells : el contingut de `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Això vol dir ignorar tots els fitxers del `.i18n/cache/` (excepte `.i18n/cache/.gitignore` ).

Si el vostre programari de control de versions no ho `git` , ignoreu-lo segons aquesta configuració.

## Fitxer De Configuració

`.i18n/conf.yml` el fitxer de configuració de l'eina de traducció de la línia `i18`

El contingut és el següent:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Idioma & La Traducció

Al fitxer de configuració, els subordinats de `fromTo`

`en` és la llengua d'origen, `zh ja ko de fr` és la llengua d'arribada de la traducció.

Codi d'idioma veure [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Per exemple, si voleu traduir el xinès a l'anglès, torneu a escriure aquesta línia `zh: en`

Si voleu traduir a tots els idiomes compatibles, deixeu-ho en blanc després de `:` per exemple

```
i18n:
  fromTo:
    en:
```

### Ignora El Fitxer

Per defecte, es traduiran tots els fitxers que comencen per `.md` i `.yml` al directori de l'idioma font.

Si voleu ignorar determinats fitxers i no traduir-los (com ara esborranys inacabats), podeu utilitzar la configuració del camp `ignore`

`ignore` Utilitza una sintaxi semblant a `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Per exemple, al fitxer de configuració anterior `_* ` que els fitxers que comencen per `_` no es traduiran.

## Normes De Traducció

### Els Editors De Traducció No Haurien D'afegir Ni Suprimir Línies

La traducció és editable. Modifiqueu el text original i torneu a traduir-lo automàticament, les modificacions manuals a la traducció no seran sobreescrites (si aquest paràgraf del text original no s'ha modificat).

Però tingueu en compte que les línies de la traducció i el text original han de correspondre una a una. És a dir, no afegiu ni suprimiu línies en compilar la traducció. En cas contrari, provocarà confusió a la memòria cau d'edició de traduccions.

Si alguna cosa va malament, consulteu [les PMF per obtenir solucions.](/i18/qa#H1)

### `Yaml`

L'eina de línia d'ordres trobarà tots els fitxers que acaben amb `.yml` al directori de fitxers de l'idioma font i els traduirà.

* Tingueu en compte que el sufix del nom del fitxer ha de ser `.yml` (no `.yaml` ).

L'eina només tradueix els valors del diccionari en `.yml` no les claus del diccionari.

per exemple `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

es traduirà com a `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

La traducció de `YAML` també es pot modificar manualment (però no afegiu ni suprimiu claus ni línies a la traducció).

Basat en `YAML` traducció, podeu crear fàcilment solucions internacionals per a diversos llenguatges de programació.

## Ús Avançat

### Subdirectori De Traducció

Sempre que `.i18n/conf.yml` (no cal començar des de la plantilla de projecte de demostració cada vegada), `i18` funcionarà bé.

L'eina de línia d'ordres trobarà `.i18n/conf.yml` configuració a tots els subdirectoris i la traduirà.

Els projectes que utilitzen l'arquitectura [monorepo](//monorepo.tools) poden dividir els fitxers d'idioma en subdirectoris.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Directori D'instal·Lació Personalitzat

`/usr/local/bin` per defecte.

`/usr/local/bin` no té permís d'escriptura, s'instal·larà a `~/.bin` .

Establir variables d'entorn `TO` Podeu definir el directori d'instal·lació, per exemple :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

# .i18n/conf.yml

`i18n.site` El fitxer de configuració és `.i18n/conf.yml` .

Excepte `ignore:` i `i18n:` [`i18`](/i18) , el fitxer de configuració és el següent:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Entre ells, l'element de configuració `ext:` de `upload` significa que només es carregaran `.md` quan es publiqui.

## Navegació Superior nav

Opcions de `nav:` , corresponents al menú de navegació a la part superior de la pàgina d'inici.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre ells, `i18n: home` correspon a `en/i18n.yml`中`home: Home` .

`en/i18n.yml` es traduirà a diversos idiomes, com ara `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Un cop finalitzada la traducció, podeu modificar el valor de `yml` a la traducció, però no afegiu ni suprimiu la clau de traducció `yml` .

### `use: Toc` Plantilla D'un Sol Fitxer (Amb Esquema)

`nav` Configurant :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` utilitzar la representació `Toc` , que representa una única plantilla `Markdown` .

`TOC` és l'abreviatura de `Table of Contents` . Quan es representa aquesta plantilla, el contorn d'aquest fitxer `Markdown` es mostrarà a la barra lateral.

`url:` la ruta del fitxer de `Markdown` ( `/` correspon al directori arrel `/README.md` , aquest nom de fitxer requereix un prefix en majúscula i un sufix en minúscula).

### `use: Md` Plantilla De Fitxer Únic (Sense Esquema)

`Md` plantilla és la mateixa que `Toc` , totes dues s'utilitzen per representar un únic fitxer `Markdown` . Tanmateix `Md` la plantilla no mostra el contorn a la barra lateral.

Podeu modificar `use: Toc` a la configuració anterior a `use: Md` , tornar a executar `i18n.site` al directori `md` i, a continuació, visitar l'URL de vista prèvia del desenvolupament per observar els canvis a la pàgina d'inici.

### Càrrega Per Defecte Sense Camí De Configuració

Si el prefix del camí d'accés a un camí determinat no està configurat a `nav:` el fitxer `MarkDown` corresponent al camí es carregarà per defecte i es representarà amb la plantilla `Md` .

Per exemple, si visiteu `/test` i `nav:` està configurat sense aquest camí, i l'idioma de la pàgina és l'anglès (codi `en` ), la plantilla es carregarà `/en/test.md` i es representarà amb `Md` de manera predeterminada.

`/en/test.md` aquest fitxer no existeix, es mostrarà la pàgina `404` predeterminada.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Plantilla De Fitxers Múltiples

Al fitxer de configuració:

```
  - i18n: blog
    use: Doc
```

Indica l'ús de `Doc` per a la representació de la plantilla.

`Doc` plantilla admet la integració de múltiples `MarkDown` per generar esbossos de documents per a projectes únics o múltiples.

#### Projecte Únic (Diversos Fitxers)

`blog` a l'anterior és el mode de projecte únic de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Quan l'URL Està Buit, El Valor Predeterminat És i18n

Si no escriviu `url` `url` al valor de `i18n` Aquesta regla també té efecte per a altres plantilles.

El mètode d'escriptura anterior és equivalent a tenir `url: blog` i el seu fitxer corresponent és `en/blog/TOC` .

#### Múltiples Projectes

`.i18n/conf.yml` La configuració en `i18n:doc` és el mode multiprojecte.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aquí `menu: NB demo1,demo2` significa utilitzar `NB` per representar el menú desplegable.

`NB` , és l'abreviatura de `Name Breif` , que indica que el menú desplegable pot mostrar el nom i l'eslògan del projecte.

`NB` seguit del paràmetre `demo1,demo2` que se li passa.
Nota : ** No hi hauria d'haver espais ** abans i després de la coma `,` `demo1,demo2`

Per als paràmetres anteriors, el fitxer d'índex del directori corresponent és:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Índex De Continguts

Executarà el connector `js` `.i18n/hook/after.tran/TOC.js` al magatzem de demostració per llegir el fitxer d'índex del directori `doc` corresponent a la configuració `i18n.site` la plantilla `TOC` per generar `json` de l'esquema del directori.

Si utilitzeu `doc` plantilla, heu de tenir aquest connector.

Si inicialitzeu el projecte `i18n.site` des d'una carpeta buida, recordeu de copiar `.i18n` del projecte de demostració al vostre directori.

La `Doc` representarà l'esquema de la taula de continguts en funció del `json` generat.

##### Explicació Detallada Del Contingut

`en/blog/TOC` El contingut és el següent :

```
README.md

news/README.md
  news/begin.md
```

##### Utilitzeu El Sagnat Per Indicar Nivells

A dalt `en/blog/TOC` `README.md` de la primera línia correspon al `i18n.site` de la imatge següent, que és el nom del projecte.

Les dues línies següents són com es mostra a la captura de pantalla següent.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` correspon a `News` ,
`news/begin.md` correspon a `Our Product is Online !`

`TOC` El fitxer està sagnat per indicar la relació jeràrquica de l'esquema i admet el sagnat de diversos nivells.

##### El Nivell Principal Només Escriu El Títol, No El Contingut.

Quan hi ha diversos nivells de sagnat, el nivell principal només escriu el títol i no el contingut. En cas contrari, la tipografia es desordenarà.

##### Projecte README.md 

`README.md` del projecte, per exemple, podeu escriure contingut en `en/demo2/README.md` .

Tingueu en compte que el contingut d'aquest fitxer no mostra un esquema de la taula de continguts, per la qual cosa es recomana limitar la longitud i escriure una breu introducció.

###### Eslògan Del Projecte

Com podeu veure `Deme Two` a sota del menú desplegable i el nom del projecte del catàleg, hi ha `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: correspon a la primera línia `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projecte `README.md` El contingut després dels primers dos punts `:` del títol del primer nivell es considerarà com l'eslògan del projecte.

Usuaris de la Xina, Japó i Corea, tingueu en compte que heu d'utilitzar dos punts de mitja amplada en lloc de dos punts d'amplada completa `:`

##### Com Moure El TOC a Granel?

El fitxer s'ha de col·locar al directori de l'idioma d'origen `TOC`

Per exemple, si l'idioma d'origen és `zh/blog/TOC` xinès, llavors `TOC`

Si es modifica l'idioma d'origen, haureu de moure `TOC` per lots en un idioma determinat del projecte a un altre idioma.

Podeu consultar les ordres següents:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Si us plau, modifiqueu `en/` i `zh/` a l'ordre anterior al vostre codi d'idioma.



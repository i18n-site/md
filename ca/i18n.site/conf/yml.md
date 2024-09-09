# .i18n/conf.yml

El perfil de `i18n.site` és `.i18n/conf.yml` .

Excepte els paràmetres de [`i18`](/i18) , `ignore:` i `i18n:` , el fitxer de configuració és el següent:

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
addon:
  - i18n.addon/toc
```

Entre ells, un element de configuració `upload` a `ext:` significa que només se'n carregaran `.md` quan es publiquin.

## Navegació Superior nav

`nav:` opcions de configuració, corresponents al menú de navegació a la part superior de la pàgina d'inici.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre ells, `i18n: home` correspon a `home: Home` en `en/i18n.yml` .

`en/i18n.yml` es traduirà a diversos idiomes, com ara `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Un cop finalitzada la traducció, podeu modificar el valor de traducció `yml` , però no afegiu ni suprimiu la clau de traducció `yml` .

### `use: Toc` , Plantilla De Fitxer Únic (Amb Esquema)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa renderització mitjançant una plantilla `Toc` , que és renderitzar una plantilla `Markdown` única.

`TOC` és l'abreviatura d' `Table of Contents` Quan es mostri aquesta plantilla, el contorn d'aquest fitxer `Markdown` es mostrarà a la barra lateral.

`url:` representa la ruta del fitxer d' `Markdown` ( `/` correspon al directori arrel `/README.md` , aquest nom de fitxer requereix un prefix en majúscula i un sufix en minúscula).

### `use: Md` , Plantilla De Fitxer Únic (Sense Esquema)

La plantilla `Md` i la plantilla `Toc` són iguals i totes dues s'utilitzen per representar un únic fitxer `Markdown` . Però la plantilla `Md` no mostra el contorn a la barra lateral.

Podeu modificar `use: Toc` a la configuració anterior a `use: Md` , tornar a executar `i18n.site` al directori `md` i, a continuació, visitar l'URL de previsualització del desenvolupament per observar els canvis a la pàgina d'inici.

### Càrrega Per Defecte Sense Camí De Configuració

Si s'accedeix a un camí determinat i el seu prefix de camí no està configurat en `nav:` , el fitxer `MarkDown` corresponent al camí es carregarà per defecte i es representarà mitjançant la plantilla `Md` .

Per exemple, si s'accedeix a `/test` i es configura `nav:` sense aquest camí, i l'idioma de la pàgina és l'anglès (codi `en` ), `/en/test.md` es carregarà per defecte i es representarà amb la plantilla `Md` .

Si `/en/test.md` aquest fitxer no existeix, es mostrarà la pàgina `404` per defecte.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Plantilla De Diversos Fitxers

Al fitxer de configuració:

```
  - i18n: blog
    use: Doc
```

Indica l'ús de `Doc` per a la representació de la plantilla.

La plantilla `Doc` admet la integració de múltiples `MarkDown` per generar esbossos de documents per a projectes únics o múltiples.

#### Projecte Únic (Diversos Fitxers)

`blog` anterior és el mode d'un sol element d' `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Quan l'URL Està Buit, El Valor Predeterminat És i18n

Si no s'escriu `url` , `url` per defecte és el valor de `i18n` Aquesta regla també té efecte per a altres plantilles.

El mètode d'escriptura anterior és equivalent a `url: blog` i el seu fitxer corresponent és `en/blog/TOC` .

#### Múltiples Projectes

La configuració de `i18n:doc` sobre `.i18n/conf.yml` és el mode multiprojecte.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aquí, `menu: NB demo1,demo2` , significa utilitzar la plantilla `NB` per representar el menú desplegable.

`NB` , que és l'abreviatura d' `Name Breif` , significa que el menú desplegable pot mostrar el nom i l'eslògan del projecte.

`NB` va seguit del paràmetre `demo1,demo2` que se li passa.
Nota : ** No hi hauria d'haver espais ** abans i després de la coma `,` a `demo1,demo2` .

Per als paràmetres anteriors, el fitxer d'índex del directori corresponent és:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Índex De Continguts

`i18n.site` executarà `js` connector `.i18n/hook/after.tran/TOC.js` al magatzem de demostració per llegir el fitxer d'índex `doc` directoris corresponent a la configuració `TOC` plantilles per generar l'esquema de `json` directoris.

Si utilitzeu `doc` plantilla, heu de tenir aquest connector.

Si inicialitzeu el projecte `i18n.site` des d'una carpeta buida, recordeu de copiar el projecte de demostració `.i18n` al vostre directori.

La plantilla `Doc` representarà l'esquema de la taula de continguts en funció de l' `json` generat.

##### Explicació Detallada Del Contingut

`en/blog/TOC` contingut és el següent :

```
README.md

news/README.md
  news/begin.md
```

##### Utilitzeu El Sagnat Per Indicar Nivells

`README.md` de la primera fila de `en/blog/TOC` de dalt correspon al `i18n.site` de la imatge següent, que és el nom del projecte.

Les dues línies següents són com es mostra a la captura de pantalla següent.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` correspon a `News` ,
`news/begin.md` correspon a `Our Product is Online !`

Els fitxers `TOC` estan sagnats per indicar la relació jeràrquica de l'esquema, admeten el sagnat de diversos nivells i els comentaris de línia que comencen per `#` .

##### El Nivell Principal Només Escriu El Títol, No El Contingut.

Quan hi ha diversos nivells de sagnat, el nivell principal només escriu el títol i no el contingut. En cas contrari, la tipografia s'esfondrarà.

##### Projecte README.md

El contingut es pot escriure a l'element `README.md` , com ara `en/demo2/README.md` .

Tingueu en compte que el contingut d'aquest fitxer no mostra un esquema de la taula de continguts, per la qual cosa es recomana limitar la longitud i escriure una breu introducció.

###### Eslògan Del Projecte

Podeu veure que `Deme Two` té l'etiqueta del projecte a sota del menú desplegable i el nom `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Això correspon a la primera fila `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

El contingut després dels primers dos punts `:` del títol de primer nivell del projecte `README.md` es considerarà com l'eslògan del projecte.

Usuaris de la Xina, el Japó i Corea, tingueu en compte que hauríeu d'utilitzar dos punts `:` de mitja amplada en comptes de dos punts d'amplada completa.

##### Com Moure El TOC a Granel?

`TOC` fitxers s'han de col·locar al directori de l'idioma font.

Per exemple, si l'idioma d'origen és el xinès, el `TOC` de dalt és `zh/blog/TOC` .

Si es modifica l'idioma d'origen, haureu de moure per lots els fitxers `TOC` d'un idioma determinat del projecte a un altre idioma.

Podeu consultar les ordres següents:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Si us plau, modifiqueu `en/` i `zh/` a l'ordre anterior al vostre codi d'idioma.
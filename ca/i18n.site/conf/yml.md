# .i18n/conf.yml

El fitxer de configuració per `i18n.site` és `.i18n/conf.yml` i el contingut és el següent :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Entre ells, un element de configuració de `upload` a `ext:` significa que només se'n carregaran `.md` quan es publiquin.

## Navegació Superior nav

`nav:` opcions de configuració, corresponents al menú de navegació a la part superior de la pàgina d'inici.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre ells, `i18n: home` correspon a `home: Home` en `en/i18n.yml` (on `en` és l'idioma d'origen de la traducció del projecte).

El contingut `en/i18n.yml` és el text que es mostra al menú de navegació, que es traduirà segons `fromTo` a la configuració, per exemple, traduït a `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Un cop finalitzada la traducció, podeu modificar el valor de traducció `yml` , però no afegiu ni suprimiu la clau de traducció `yml` .

### `use: Toc` , Plantilla De Fitxer Únic Amb Esquema

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa renderització mitjançant una plantilla `Toc` , que és renderitzar una plantilla `Markdown` única.

`TOC` és l'abreviatura d' `Table of Contents` Quan es mostri aquesta plantilla, el contorn d'aquest fitxer `Markdown` es mostrarà a la barra lateral.

`url:` representa la ruta del fitxer d' `Markdown` ( `/` correspon al directori arrel `/README.md` , aquest nom de fitxer requereix un prefix en majúscula i un sufix en minúscula).

### `use: Md` , Plantilla De Fitxer Únic Sense Esquema

La plantilla `Md` i la plantilla `Toc` són iguals i totes dues s'utilitzen per representar un únic fitxer `Markdown` . Però la plantilla `Md` no mostra el contorn a la barra lateral.

Podeu modificar `use: Toc` a la configuració anterior a `use: Md` , tornar a executar `i18n.site` al directori `md` i, a continuació, visitar l'URL de previsualització del desenvolupament per observar els canvis a la pàgina d'inici.

### `use: Blog` Plantilles De Bloc

La plantilla del bloc mostra una llista d'articles (títols i resums) per ordre de temps de publicació.

[→ Feu clic aquí per conèixer la configuració específica](/i18n.site/conf/blog)

### `use: Doc` , Plantilla De Document De Diversos Fitxers

Al fitxer de configuració:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica l'ús de `Doc` per a la representació de la plantilla.

La plantilla `Doc` admet la integració de múltiples `MarkDown` per generar esbossos de documents per a projectes únics o múltiples.

#### Múltiples Projectes I Diversos Fitxers

La configuració de `.i18n/conf.yml` en `i18n:doc` és el mode de representació multiprojecte de fitxers múltiples.

Aquí, `menu: NB demo1,demo2` , significa utilitzar la plantilla `NB` per representar el menú desplegable.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , que és l'abreviatura d' `Name Breif` , significa que el menú desplegable pot mostrar el nom i l'eslògan del projecte.

`NB` va seguit del paràmetre `demo1,demo2` que se li passa.

Nota : ** No hi hauria d'haver espais ** abans i després de la coma `,` a `demo1,demo2` .

Per als paràmetres anteriors, el fitxer d'índex del directori corresponent és:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Un Sol Projecte Múltiples Fitxers

Si només teniu un projecte, podeu configurar-lo de la següent manera.

```
  - i18n: xxx
    use: Doc
```

##### Quan l'URL Està Buit, El Valor Predeterminat És i18n

Si no s'escriu `url` , `url` per defecte és el valor de `i18n` Aquesta regla també té efecte per a altres plantilles.

El mètode d'escriptura anterior és equivalent a `url: xxx` i el seu fitxer corresponent és `en/xxx/TOC` .

#### TOC Índex De Continguts

`i18n.site` executarà `js` connector `.i18n/hook/after.tran/TOC.js` al magatzem de demostració per llegir el fitxer d'índex de `TOC` directoris corresponent a la configuració de `doc` plantilles per generar l'esquema de `json` directoris.

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

Quan hi ha diversos nivells de sagnat, el nivell principal només escriu el títol i no el contingut. En cas contrari, la tipografia es desordenarà.

##### Projecte README.md

El contingut es pot escriure a l'element `README.md` , com ara `en/demo2/README.md` .

Tingueu en compte que el contingut d'aquest fitxer no mostra un esquema de la taula de continguts, per la qual cosa es recomana limitar la longitud i escriure una breu introducció.

###### Eslògan Del Projecte

Podeu veure que `Deme Two` té l'etiqueta del projecte a sota del menú desplegable i el nom del `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Això correspon a la primera fila de `en/demo2/README.md` :

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

### Càrrega Per Defecte Sense Camí De Configuració

Quan s'accedeix a un camí determinat, si el prefix del camí no està configurat a `nav:` , el fitxer `MarkDown` corresponent al camí es carregarà per defecte i es representarà mitjançant la plantilla `Md` .

Per exemple, si s'accedeix a `/test` i es configura `nav:` sense el prefix d'aquest camí, i l'idioma de navegació actual és l'anglès (codi `en` ), `/en/test.md` es carregarà per defecte i es representarà mitjançant la plantilla `Md` .

Si `/en/test.md` aquest fitxer no existeix, es mostrarà la pàgina `404` per defecte.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
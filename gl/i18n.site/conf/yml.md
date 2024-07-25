# .i18n/conf.yml

`i18n.site` O ficheiro de configuración é `.i18n/conf.yml` .

Excepto `ignore:` e `i18n:` [`i18`](/i18) , o ficheiro de configuración é o seguinte:

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

Entre eles, o elemento de configuración `ext:` de `upload` significa que só se cargarán `.md` ao publicar.

## Navegación Superior nav

`nav:` Opcións de configuración, correspondentes ao menú de navegación na parte superior da páxina de inicio.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre eles `i18n: home` corresponde a `en/i18n.yml`中`home: Home` .

`en/i18n.yml` será traducido a varios idiomas, como `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Despois de completar a tradución, pode modificar o valor de `yml` na tradución, pero non engadir nin eliminar a clave da tradución `yml` .

### `use: Toc` Modelo De Ficheiro Único (Con Esquema)

`nav` Configurando :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` usar o renderizado `Toc` , que é renderizar un único modelo `Markdown` .

`TOC` é a abreviatura de `Table of Contents` . Cando este modelo se renderiza, o esquema deste ficheiro `Markdown` aparecerá na barra lateral.

`url:` representa a ruta do ficheiro de `Markdown` ( `/` corresponde ao directorio raíz `/README.md` , este nome de ficheiro require un prefixo en maiúscula e un sufixo en minúscula).

### `use: Md` Modelo De Ficheiro Único (Sen Esquema)

`Md` modelo é o mesmo que `Toc` , ambos úsanse para renderizar un único ficheiro `Markdown` . Non obstante `Md` o modelo non mostra o contorno na barra lateral.

Podes modificar `use: Toc` na configuración anterior a `use: Md` , executar `i18n.site` no directorio `md` de novo e despois visitar o URL de vista previa do desenvolvemento para observar os cambios na páxina de inicio.

### Carga Predeterminada Sen Ruta De Configuración

Se o prefixo de ruta dun determinado camiño ao que se accede non está configurado en `nav:` o ficheiro `MarkDown` correspondente ao camiño cargarase de forma predeterminada e representarase mediante o modelo `Md` .

Por exemplo, se visitas `/test` e `nav:` está configurado sen este camiño e o idioma da páxina é o inglés (código `en` ), o modelo cargarase `/en/test.md` e representarase mediante `Md` por defecto.

Se `/en/test.md` este ficheiro non existe, amosarase a `404` páxina predeterminada.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modelo De Arquivos Múltiples

No ficheiro de configuración:

```
  - i18n: blog
    use: Doc
```

Indica o uso de `Doc` para a representación de modelos.

`Doc` modelo admite a integración de varios `MarkDown` para xerar esquemas de documentos para un ou varios proxectos.

#### Proxecto Único (Múltiples Ficheiros)

`blog` no anterior é o modo de proxecto único de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Cando O url Está Baleiro, O Valor Predeterminado É i18n

Se non escribes `url` o valor `url` é de `i18n` . Esta regra tamén se aplica para outros modelos.

O método de escritura anterior equivale a ter `url: blog` e o seu ficheiro correspondente é `en/blog/TOC` .

#### Múltiples Proxectos

`.i18n/conf.yml` A configuración en `i18n:doc` é o modo multiproxecto.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aquí `menu: NB demo1,demo2` significa usar `NB` para renderizar o menú despregable.

`NB` , é a abreviatura de `Name Breif` , que indica que o menú despregable pode mostrar o nome e o slogan do proxecto.

`NB` vai seguido do parámetro `demo1,demo2` que se lle pasou.
Teña en conta que non debe haber espazos ** antes `demo1,demo2` despois da coma `,` in : **

Para os parámetros anteriores, o ficheiro de índice do directorio correspondente é:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Índice De Contidos TOC

Executará o complemento `js` `.i18n/hook/after.tran/TOC.js` no almacén de demostración para ler o ficheiro `i18n.site` índice do directorio `doc` correspondente á configuración do modelo `TOC` para xerar `json` do esquema do directorio.

Se usas o modelo `doc` , debes ter este complemento.

Se inicializas o proxecto `i18n.site` desde un cartafol baleiro, recorda copiar `.i18n` no proxecto de demostración no teu directorio.

`Doc` O modelo representará o esquema do índice baseado no `json` xerado.

##### Explicación Detallada Do Contido

`en/blog/TOC` O contido é o seguinte :

```
README.md

news/README.md
  news/begin.md
```

##### Use Sangría Para Indicar Niveis

Arriba `en/blog/TOC` `README.md` da primeira liña corresponde ao `i18n.site` da imaxe de abaixo, que é o nome do proxecto.

As seguintes dúas liñas son como se mostra na captura de pantalla a continuación.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News` ,
`news/begin.md` corresponde a `Our Product is Online !`

`TOC` O ficheiro está sangría para indicar a relación xerárquica do esquema e admite sangría de varios niveis.

##### O Nivel Dos Pais Só Escribe O Título, Non O Contido.

Cando hai varios niveis de sangría, o nivel principal só escribe o título e non o contido. En caso contrario, a tipografía desordenarase.

##### Proxecto README.md 

`README.md` do proxecto, por exemplo, pode escribir contido en `en/demo2/README.md` .

Teña en conta que o contido deste ficheiro non mostra un esquema do índice, polo que se recomenda limitar a lonxitude e escribir unha pequena introdución.

###### Lema Do Proxecto

Como podes ver `Deme Two` debaixo do menú despregable e do nome `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: corresponde á primeira liña `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` O contido despois dos primeiros dous `:` no título de primeiro nivel considerarase como o slogan do proxecto.

Usuarios de China, Xapón e Corea, ten en conta que debes usar dous puntos de ancho medio en lugar de dous puntos de ancho completo `:`

##### Como Mover TOC a Granel?

`TOC` O ficheiro debe colocarse no directorio da lingua de orixe.

Por exemplo, se o idioma de orixe é `TOC` chinés, entón é `zh/blog/TOC` .

Se se modifica o idioma de orixe, debes mover `TOC` nun determinado idioma do proxecto a outro idioma.

Podes consultar os seguintes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` e `zh/` no comando anterior ao seu código de idioma.



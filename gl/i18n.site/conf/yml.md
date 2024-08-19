# .i18n/conf.yml

O perfil de `i18n.site` é `.i18n/conf.yml` .

Excepto para os axustes de [`i18`](/i18) , `ignore:` e `i18n:` , o ficheiro de configuración é o seguinte:

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

Entre eles, `upload` a `ext:` elemento de configuración significa que só se cargarán `.md` ao publicar.

## Navegación Superior nav

`nav:` opcións de configuración, correspondentes ao menú de navegación na parte superior da páxina de inicio.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre eles, `i18n: home` corresponde a `home: Home` en `en/i18n.yml` .

`en/i18n.yml` traducirase a varios idiomas, como `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Despois de completar a tradución, pode modificar o valor da tradución `yml` , pero non engadir nin eliminar a clave da tradución `yml` .

### `use: Toc` , Modelo De Ficheiro Único (Con Esquema)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa renderizar usando un modelo `Toc` , que é renderizar un único modelo `Markdown` .

`TOC` é a abreviatura de `Table of Contents` Cando este modelo estea representado, o esquema deste ficheiro `Markdown` amosarase na barra lateral.

`url:` representa a ruta do ficheiro `Markdown` ( `/` corresponde ao directorio raíz `/README.md` , este nome de ficheiro require un prefixo en maiúscula e un sufixo en minúscula).

### `use: Md` , Modelo De Ficheiro Único (Sen Esquema)

O modelo `Md` e o modelo `Toc` son iguais e ambos úsanse para renderizar un único ficheiro `Markdown` . Pero o modelo `Md` non mostra o contorno na barra lateral.

Pode modificar `use: Toc` na configuración anterior a `use: Md` , executar `i18n.site` no directorio `md` de novo e, a continuación, visitar o URL de vista previa do desenvolvemento para observar os cambios na páxina de inicio.

### Carga Predeterminada Sen Ruta De Configuración

Se se accede a un determinado camiño e o seu prefixo non está configurado en `nav:` , o ficheiro `MarkDown` correspondente ao camiño cargarase de forma predeterminada e representarase mediante o modelo `Md` .

Por exemplo, se se accede `/test` e se configura `nav:` sen este camiño e o idioma da páxina é o inglés (código `en` ), `/en/test.md` cargarase de forma predeterminada e representarase mediante o modelo `Md` .

Se `/en/test.md` este ficheiro non existe, amosarase a páxina `404` predeterminada.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modelo De Varios Ficheiros

No ficheiro de configuración:

```
  - i18n: blog
    use: Doc
```

Indica o uso de `Doc` para a representación do modelo.

O modelo `Doc` admite a integración de varios `MarkDown` para xerar esquemas de documentos para un ou varios proxectos.

#### Proxecto Único (Múltiples Ficheiros)

`blog` anterior é o modo de elemento único de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Cando O url Está Baleiro, O Valor Predeterminado É i18n

Se non se escribe `url` , o valor predeterminado de `url` é `i18n` Esta regra tamén ten efecto para outros modelos.

O método de escritura anterior equivale a `url: blog` e o ficheiro correspondente é `en/blog/TOC` .

#### Múltiples Proxectos

A configuración de `i18n:doc` de `.i18n/conf.yml` é o modo multiproxecto.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aquí, `menu: NB demo1,demo2` , significa usar o modelo `NB` para renderizar o menú despregable.

`NB` , que é a abreviatura de `Name Breif` , significa que o menú despregable pode mostrar o nome e o slogan do proxecto.

`NB` vai seguido do parámetro `demo1,demo2` que se lle pasa.
Nota : ** Non debería haber espazos ** antes e despois da coma `,` en `demo1,demo2` .

O ficheiro de índice do directorio correspondente para os parámetros anteriores é:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Índice De Índices TOC

`i18n.site` executará `js` complemento `.i18n/hook/after.tran/TOC.js` no almacén de demostración para ler o ficheiro de índice `doc` directorios correspondente á configuración de `TOC` modelos para xerar o esquema de directorio `json` .

Se usas `doc` modelo, debes ter este complemento.

Se inicializas o proxecto `i18n.site` desde un cartafol baleiro, recorda copiar o proxecto de demostración `.i18n` no teu directorio.

O modelo `Doc` representará o esquema do índice baseándose no `json` xerado.

##### Explicación Detallada Do Contido

`en/blog/TOC` contido é o seguinte :

```
README.md

news/README.md
  news/begin.md
```

##### Usa Sangría Para Indicar Niveis

`README.md` da primeira fila de `en/blog/TOC` anterior corresponde ao `i18n.site` da imaxe de abaixo, que é o nome do proxecto.

As seguintes dúas liñas son como se mostra na captura de pantalla a continuación.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News` ,
`news/begin.md` corresponde a `Our Product is Online !`

Os ficheiros `TOC` están sangrados para indicar a relación xerárquica do esquema e admitir sangría de varios niveis.

##### O Nivel Dos Pais Só Escribe O Título, Non O Contido.

Cando hai varios niveis de sangría, o nivel principal só escribe o título e non o contido. En caso contrario, a tipografía desordenarase.

##### Proxecto README.md

O contido pódese escribir no elemento `README.md` , como `en/demo2/README.md` .

Teña en conta que o contido deste ficheiro non mostra un esquema do índice, polo que se recomenda limitar a lonxitude e escribir unha pequena introdución.

###### Lema Do Proxecto

Podes ver que `Deme Two` ten o seu lema `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Isto corresponde á primeira fila `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

O contido despois dos primeiros dous puntos `:` do título de primeiro nivel do proxecto `README.md` considerarase como o slogan do proxecto.

Os usuarios de China, Xapón e Corea, teñan en conta que deben usar dous puntos de ancho medio `:` en lugar de dous puntos de ancho completo.

##### Como Mover TOC a Granel?

`TOC` ficheiros deben colocarse no directorio da lingua de orixe.

Por exemplo, se o idioma de orixe é o chinés, entón `TOC` anterior é `zh/blog/TOC` .

Se se modifica o idioma de orixe, cómpre mover os ficheiros `TOC` dun determinado idioma do proxecto a outro idioma por lotes.

Podes consultar os seguintes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifica `en/` e `zh/` no comando anterior ao teu código de idioma.
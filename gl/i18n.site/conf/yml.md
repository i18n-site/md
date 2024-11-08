# .i18n/conf.yml

O ficheiro de configuración para `i18n.site` é `.i18n/conf.yml` e o contido é o seguinte :

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

Entre eles, `upload` a `ext:` elemento de configuración significa que só se cargarán `.md` ao publicar.

## Navegación Superior nav

`nav:` opcións de configuración, correspondentes ao menú de navegación na parte superior da páxina de inicio.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre eles, `i18n: home` corresponde a `home: Home` en `en/i18n.yml` (onde `en` é a lingua de orixe da tradución do proxecto).

O contido `en/i18n.yml` é o texto que se mostra no menú de navegación, que se traducirá segundo `fromTo` na configuración, por exemplo, traducido a `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Despois de completar a tradución, pode modificar o valor da tradución `yml` , pero non engadir nin eliminar a clave da tradución `yml` .

### 0 Modelo De Documento `use: Toc` Con Esquema

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa renderizar usando un modelo `Toc` , que é renderizar un único modelo `Markdown` .

`TOC` é a abreviatura de `Table of Contents` Cando este modelo sexa representado, o esquema deste ficheiro `Markdown` amosarase na barra lateral.

`url:` representa a ruta do ficheiro `Markdown` ( `/` corresponde ao directorio raíz `/README.md` , este nome de ficheiro require un prefixo en maiúscula e un sufixo en minúscula).

### 0 Modelo De Documento `use: Md` Sen Esquema

O modelo `Md` e o modelo `Toc` son iguais e ambos úsanse para renderizar un único ficheiro `Markdown` . Pero o modelo `Md` non mostra o contorno na barra lateral.

Pode modificar `use: Toc` na configuración anterior a `use: Md` , executar `i18n.site` no directorio `md` de novo e, a continuación, visitar o URL de vista previa do desenvolvemento para observar os cambios na páxina de inicio.

### `use: Blog` Modelos De Blog

O modelo do blog mostra unha lista de artigos (títulos e resumos) por orde de tempo de publicación.

[→ Fai clic aquí para coñecer a configuración específica](/i18n.site/conf/blog)

### 0 Modelos De Documentos De Arquivos `use: Doc`

No ficheiro de configuración:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica o uso de `Doc` para a representación do modelo.

O modelo `Doc` admite a integración de varios `MarkDown` para xerar esquemas de documentos para un ou varios proxectos.

#### Varios Proxectos E Varios Ficheiros

A configuración de `.i18n/conf.yml` en `i18n:doc` é o modo de renderización de varios ficheiros multiproxecto.

Aquí, `menu: NB demo1,demo2` , significa usar o modelo `NB` para renderizar o menú despregable.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , que é a abreviatura de `Name Breif` , significa que o menú despregable pode mostrar o nome e o slogan do proxecto.

`NB` vai seguido do parámetro `demo1,demo2` que se lle pasa.

Nota : ** Non debería haber espazos ** antes e despois da coma `,` en `demo1,demo2` .

O ficheiro de índice do directorio correspondente para os parámetros anteriores é:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Proxecto Único Varios Ficheiros

Se só tes un proxecto, podes configuralo do seguinte xeito.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Un único proxecto con varios ficheiros non admite a configuración de `url` como ruta raíz `/`
> Se __conf.yml → nav:__ Non se configura ningunha ruta raíz, ao acceder á páxina de inicio do sitio web, volverase a escribir automaticamente no primeiro URL baixo a configuración `nav:` .
> Este deseño é para distinguir mellor os documentos do proxecto, blogs e outros contidos a través de directorios.
> Recoméndase utilizar un único ficheiro e unha única páxina como páxina de inicio.

> [!TIP]
> Se non se escribe `url` , o valor predeterminado de `url` é `i18n` Esta regra tamén ten efecto para outros modelos.

#### Índice De Contidos TOC

Se o modelo `use: Doc` está activado na configuración, active o complemento `i18n.addon/toc` en `.i18n/conf.yml` A configuración é a seguinte :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` instalará e executará automaticamente este complemento, lerá `TOC` o ficheiro de índice do directorio e xerará `json` o esquema do directorio.

Se se trata dun único proxecto con varios ficheiros, o directorio raíz `TOC` é o directorio correspondente a `url:` no directorio da lingua de orixe. Por exemplo, se o idioma de orixe é chinés: o ficheiro correspondente a `url: flashduty` é `zh/flashduty/TOC` .

Se se trata de varios proxectos e varios ficheiros, non hai que configurar `url:` O directorio raíz de `TOC` é o directorio correspondente ao valor de `i18n` .

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

Os ficheiros `TOC` están sangrados para indicar a relación xerárquica do esquema, admiten sangría de varios niveis e comentarios de liña que comezan por `# ` .

##### O Nivel Dos Pais Só Escribe O Título, Non O Contido.

Cando hai varios niveis de sangría, o nivel principal só escribe o título e non o contido. En caso contrario, a tipografía desordenarase.

##### Proxecto README.md

O contido pódese escribir no elemento `README.md` , como `en/demo2/README.md` .

Teña en conta que o contido deste ficheiro non mostra un esquema do índice, polo que se recomenda limitar a lonxitude e escribir unha pequena introdución.

###### Lema Do Proxecto

Podes ver que `Deme Two` ten o seu lema `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Isto corresponde á primeira fila de `en/demo2/README.md` :

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

### Carga Predeterminada Sen Ruta De Configuración

Para un determinado camiño ao que se accede, se o prefixo da ruta non está configurado en `nav:` , o ficheiro `MarkDown` correspondente ao camiño cargarase de forma predeterminada e representarase usando o modelo `Md` .

Por exemplo, se se accede `/test` e se configura `nav:` sen o prefixo desta ruta e o idioma de navegación actual é o inglés (código `en` ), cargarase `/en/test.md` por defecto e representarase mediante o modelo `Md` .

Se `/en/test.md` este ficheiro non existe, amosarase a páxina `404` predeterminada.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
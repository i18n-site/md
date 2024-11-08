# Instalar E Usar

## windows Primeiro Instala git bash

windows Sistema, fai [clic aquí para descargar e instalar `git bash` primeiro](https://git-scm.com/download/win) .

Executa as operacións posteriores en `git bash` .

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurar O Token De Tradución

Visita [i18n.site/token](//i18n.site/token) Fai clic para copiar o token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Crea `~/.config/i18n.site.yml` , pega o contido copiado nel, o contido é o seguinte:

```
token: YOUR_API_TOKEN
```

Ademais, cómpre [vincular](/#price) unha tarxeta de crédito de pago en [i18n.site/payBill](//i18n.site/payBill)

## Usar

### Proxecto De Demostración

Consulte o proxecto de [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) para coñecer a configuración da tradución `i18` .

Os usuarios en China poden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Despois da clonación, introduza o directorio e execute `i18` para completar a tradución.

### Estrutura Do Directorio

A estrutura do directorio do almacén de modelos é a seguinte

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Os ficheiros de demostración traducidos no directorio `en` son só un exemplo e pódense eliminar.

### Executar Tradución

Introduce o directorio e executa `i18` para traducir.

Ademais da tradución, o programa tamén xerará o cartafol `.i18n/data` , engádeo ao repositorio.

Despois de traducir o novo ficheiro, xerarase un novo ficheiro de datos neste directorio Lembra engadir `git add . ` .

## Ficheiro De Configuración

`.i18n/conf.yml` é o ficheiro de configuración da ferramenta de tradución da liña de comandos `i18`

O contido é o seguinte:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Idioma De Orixe &

No ficheiro de configuración, o subordinado de `fromTo` :

`en` é a lingua de orixe, `zh ja ko de fr` é a lingua de destino da tradución.

Código de idioma ver [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Por exemplo, se queres traducir o chinés ao inglés, reescribe esta liña `zh: en` .

Se queres traducir a todos os idiomas admitidos, deixa en branco despois de `:` . por exemplo

```
i18n:
  fromTo:
    en:
```

Podes configurar `fromTo` diferente para diferentes subdirectorios / Unha demostración está escrita como segue :

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

Nesta táboa de configuración, a lingua de orixe da tradución do catálogo `blog` é `zh` e a lingua de orixe da tradución do catálogo `blog/your_file_name.md` é `ja` .

### Imaxes/Enlaces Multilingües

Cando os URL das imaxes e as ligazóns en `replace:` e `MarkDown` (e os atributos `src` e `href` do `HTML` incrustado) están configurados en `.i18n/conf.yml` con este prefixo, o código da lingua fonte no URL substituirase polo código da lingua da tradución ( [idioma lista de códigos](/i18/LANG_CODE) ).

Por exemplo, a súa configuración é a seguinte:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` é un dicionario, a clave é o prefixo do URL que se vai substituír e o valor é a regra de substitución.

O significado de substituír a regra `ko de uk>ru zh-TW>zh >en` anterior é que `ko de` usa a imaxe do seu propio código de idioma, `zh-TW` e `zh` usan a imaxe de `zh` , `uk` usa a imaxe de `ru` e outras linguas (como `ja` ) usan a imaxe de `en` por defecto.

Por exemplo, o ficheiro fonte francés ( `fr` ) de `MarkDown` é o seguinte :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

O ficheiro traducido e xerado en inglés ( `en` ) é o seguinte :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Aquí, `/en/` no código da lingua fonte substitúense por `/zh/` na lingua de destino.

Nota : Debe haber `/` antes e despois do código de idioma do texto substituído no URL.

> [!TIP]
> Se se configura `- /` en `url:` , só coincidirán os camiños relativos, pero os URL que comezan por `//` non coincidirán.
>
> Se algunhas ligazóns dun nome de dominio queren ser substituídas e algunhas non queren ser substituídas, pode utilizar diferentes prefixos como `[x](//x.com/en/)` e `[x](https://x.com/en/)` para distinguilos.

### Ignorar O Ficheiro

De xeito predeterminado, todos os ficheiros que comezan por `.md` e `.yml` no directorio da lingua de orixe serán traducidos.

Se queres ignorar determinados ficheiros e non traducilos (como borradores sen rematar), podes configuralo co campo `ignore` .

`ignore` usa a [globset](https://docs.rs/globset/latest/globset/#syntax) sintaxe que o ficheiro `.gitignore` .

Por exemplo, `_* ` no ficheiro de configuración anterior significa que os ficheiros que comezan por `_` non se traducirán.

## Regras De Tradución

### Os Editores De Tradución Non Deben Engadir Ou Eliminar Liñas

A tradución é editable. Modifique o texto orixinal e tradúceo de novo, as modificacións manuais da tradución non se sobrescribirán (se este parágrafo do texto orixinal non foi modificado).

> [!WARN]
> Debe haber unha correspondencia un a un entre as liñas da tradución e o texto orixinal. É dicir, non engadir ou eliminar liñas ao compilar a tradución. En caso contrario, causará confusión na caché de edición da tradución.

Se algo sae mal, consulta [as preguntas frecuentes para obter solucións.](/i18/qa#H1)

### `YAML` Traducións

A ferramenta de liña de comandos atopará todos os ficheiros rematados en `.yml` no directorio de ficheiros da lingua de orixe e traduciráos.

* Teña en conta que o sufixo do nome do ficheiro debe ser `.yml` (non `.yaml` ).

A ferramenta só traduce os valores do dicionario en `.yml` , non as claves do dicionario.

Por exemplo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

traducirase como `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

A tradución de `YAML` tamén se pode modificar manualmente (pero non engadas nin borres claves ou liñas na tradución).

Baseado na tradución `YAML` , pode facilmente crear solucións internacionais para varias linguaxes de programación.

## Uso Avanzado

### Subdirectorio De Tradución

Mentres se cree `.i18n/conf.yml` (non é necesario comezar a partir do modelo de proxecto de demostración cada vez), `i18` funcionará ben.

A ferramenta de liña de comandos atopará `.i18n/conf.yml` configuracións en todos os subdirectorios e traducirase.

Os proxectos que usan a arquitectura [monorepo](//monorepo.tools) poden dividir ficheiros de idiomas en subdirectorios.

![](https://p.3ti.site/1719910016.avif)

### Directorio De Instalación Personalizado

Instalarase a `/usr/local/bin` por defecto.

Se `/usr/local/bin` non ten permiso de escritura instalarase en `~/.bin` .

Establecer a variable de ambiente `TO` pode definir o directorio de instalación, por exemplo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
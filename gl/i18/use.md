# Instalar E Usar

## windows Primeiro Instala git bash

windows Sistema, [fai clic aquí para descargar e instalar primeiro `git bash`](https://git-scm.com/download/win)

Executa operacións posteriores en `git bash`

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurar O Token De Tradución

Visita [i18n.site/token](//i18n.site/token) Fai clic para copiar o token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Crear `~/.config/i18n.site.yml` pega o contido copiado nel, o contido é o seguinte:

```
token: YOUR_API_TOKEN
```

Ademais, cómpre [i18n.site/payBill](//i18n.site/payBill) unha tarxeta de crédito para o pago (non é necesaria ningunha recarga, o sitio web deducirá as taxas automaticamente segundo o uso, [consulte a páxina de inicio para coñecer os prezos](/#price) ).

## Usar

### Proxecto De Demostración

Consulte o proxecto de [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) para coñecer a configuración da tradución `i18`

Os usuarios en China poden clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Despois da clonación, ingrese no directorio e `i18` para completar a tradución.

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

O directorio `en` contén os ficheiros de demostración traducidos, que son só un exemplo e pódense eliminar.

### Executar Tradución

Entra no directorio e `i18` para traducir.

### Engadir Ficheiros Ao Repositorio

Ademais da tradución, o programa tamén xerará os seguintes ficheiros, engádeos ao repositorio.

```
.i18n/hash
.i18n/cache/.gitignore
```

Entre : , o contido de `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Isto significa ignorar todos `.i18n/cache/.gitignore` ficheiros do directorio `.i18n/cache/`

Se o teu software de control de versións non o é `git` ignórao segundo esta configuración.

## Ficheiro De Configuración

`.i18n/conf.yml` o ficheiro de configuración da ferramenta de tradución da liña `i18`

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

No ficheiro de configuración, os subordinados de `fromTo`

`en` é a lingua de orixe, `zh ja ko de fr` é a lingua de destino da tradución.

Código de idioma ver [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Por exemplo, se queres traducir o chinés ao inglés, reescribe esta liña `zh: en`

Se queres traducir a todos os idiomas admitidos, deixa en branco despois de `:` por exemplo

```
i18n:
  fromTo:
    en:
```

### Ignorar O Ficheiro

De xeito predeterminado, todos os ficheiros que comezan por `.md` e `.yml` no directorio da lingua de orixe serán traducidos.

Se queres ignorar certos ficheiros e non traducilos (como borradores sen rematar), podes usar o campo de configuración `ignore`

`ignore` Usa unha sintaxe similar a `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Por exemplo, no ficheiro de configuración anterior `_* ` que os ficheiros que comezan por `_` non se traducirán.

## Regras De Tradución

### Os Editores De Tradución Non Deben Engadir Ou Eliminar Liñas

A tradución é editable. Modifique o texto orixinal e tradúceo de novo, as modificacións manuais da tradución non se sobrescribirán (se este parágrafo do texto orixinal non foi modificado).

Pero teña en conta que as liñas da tradución e do texto orixinal deben corresponder unha a unha. É dicir, non engadir ou eliminar liñas ao compilar a tradución. En caso contrario, causará confusión na caché de edición da tradución.

Se algo sae mal, consulta [as preguntas frecuentes para obter solucións.](/i18/qa#H1)

### `YAML` Traducir

A ferramenta de liña de comandos atopará todos os ficheiros que rematen en `.yml` no directorio de ficheiros da lingua de orixe e traduciraos.

* Teña en conta que o sufixo do nome do ficheiro debe ser `.yml` (non `.yaml` ).

A ferramenta só traduce os valores do dicionario en `.yml` non as claves do dicionario.

por exemplo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

será traducido como `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Tamén se pode modificar manualmente a tradución de `YAML`

Baseado en `YAML` Translation, podes crear facilmente solucións internacionais para varias linguaxes de programación.

## Uso Avanzado

### Subdirectorio De Tradución

Sempre que `.i18n/conf.yml` (non é necesario comezar a partir do modelo de proxecto de demostración cada vez), `i18` funcionará ben.

A ferramenta de liña de comandos atopará a configuración `.i18n/conf.yml` en todos os subdirectorios e traducirase.

Os proxectos que usan a arquitectura [monorepo](//monorepo.tools) poden dividir ficheiros de idiomas en subdirectorios.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Directorio De Instalación Personalizado

Instalarase en `/usr/local/bin`

Se `/usr/local/bin` ten permiso de escritura, instalarase en `~/.bin` .

Establecer variables de ambiente `TO` Pode definir o directorio de instalación, por exemplo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

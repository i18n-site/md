# ¡Instalar &

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token De Configuración

`i18n.site` tiene una herramienta de traducción `i18` incorporada. Haga [clic aquí para consultar el documento `i18` para configurar el token de acceso](/i18/use) .

## Proyecto De Demostración

Comencemos con un proyecto de demostración para aprender a usar `i18n.site` .

Primero clonamos el repositorio de demostración y ejecutamos el comando de la siguiente manera:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Los usuarios de China continental pueden:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

El nombre del directorio del clon base del código `demo.i18n.site` debe ser `md` para facilitar la vista previa local con `docker` .

### Traducir

Primero, ingrese al directorio `md` y ejecute `i18n.site` , lo que traducirá `en` a `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Después de la ejecución, se generarán archivos de traducción y caché. Recuerde agregarlos al repositorio en el `git add . ` `md` .

### Vista Previa Local

Instale e inicie `docker` ( `MAC` usuario recomienda usar [orbstack](https://orbstack.dev) Como tiempo de ejecución para `docker` ).

Luego, ingrese al directorio `docker` y ejecute `./up.sh` , y luego visite [https://127.0.0.1](https://127.0.0.1) para obtener una vista previa local.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
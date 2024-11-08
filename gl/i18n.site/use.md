# Vista Previa &

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token De Configuración

`i18n.site` ten unha ferramenta de tradución integrada `i18` Faga [clic aquí para consultar o documento `i18` para configurar o token de acceso](/i18/use) .

## Proxecto De Demostración

Comecemos cun proxecto de demostración para aprender a usar `i18n.site` .

Primeiro clonamos o repositorio de demostración e executamos o comando do seguinte xeito:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Os usuarios na China continental poden:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

O nome do directorio do clon de base de código `demo.i18n.site` debe ser `md` para facilitar a vista previa local con `docker` .

### Traducir

Primeiro, introduza o directorio `md` e executa `i18n.site` , que traducirá `en` en `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Despois de executar, xeraranse ficheiros de tradución e caché. Lembra engadilos ao repositorio no `git add . ` `md` .

### Vista Previa Local

Instale e inicie `docker` ( `MAC` usuario recomenda usar [orbstack](https://orbstack.dev) como tempo de execución para `docker` ).

A continuación, introduza o directorio `docker` e execute `./up.sh` e, a continuación, visite [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
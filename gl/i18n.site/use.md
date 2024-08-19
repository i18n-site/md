# Instalar &

## Token De Configuración

`i18n.site` ten unha ferramenta de tradución integrada `i18` Faga [clic aquí para consultar o documento `i18` para configurar o token de acceso](/i18/use) .

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

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

Despois de executar, xeraranse ficheiros de tradución e caché. Lembra `git add . ` ao repositorio no directorio `md` .

### Vista Previa Local

Instale e inicie `docker` ( `MAC` usuario recomenda usar [orbstack](https://orbstack.dev) como tempo de execución para `docker` ).

A continuación, introduza o directorio `docker` e execute `./up.sh` e, a continuación, visite [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publicar Contido

`i18n.site` adopta unha arquitectura [de aplicación dunha soa páxina](https://developer.mozilla.org/docs/Glossary/SPA) , e a páxina de entrada do sitio web e o contido do sitio web implícanse de forma independente.

Despois de executar a tradución anterior, xeraranse os directorios `htm` e `v` no directorio `md/out/dev` .

Aquí, `dev` significa que está construído en base ao ficheiro de configuración `.i18n/htm/dev.yml` .

`dev` directorio :

O directorio `htm` é a páxina de entrada do sitio web.

O directorio `v` contén contido do sitio web con números de versión.

A vista previa local non se preocupa polo número de versión e copiará todos os ficheiros no directorio `out/dev/v/0.1.0` .

Para o lanzamento oficial, os ficheiros modificados copiaranse no directorio do novo número de versión.

#### Use -c Para Especificar O Ficheiro De Configuración

Diferentes ficheiros de configuración crearán os directorios correspondentes no directorio `out` .

Por exemplo, `.i18n/htm/ol.yml` creará o directorio `out/ol` .

`dev.yml` e `ol.yml` son as configuracións predeterminadas.

`dev` é a abreviatura de `development` , que indica o ambiente de desenvolvemento, usado para a vista previa local, e tamén é o ficheiro de configuración predeterminado.
`ol` é a abreviatura de `online` , que indica o contorno en liña, que se usa para a versión oficial. Tamén é o ficheiro de configuración predeterminado cando se usan os parámetros da liña de comandos `-n` a `npm` para liberar.

Tamén pode crear outros ficheiros de configuración. Use `--htm_conf` na liña de comandos para especificar o nome do ficheiro de configuración a usar.

por exemplo:
```
i18n.site --htm_conf yourConfig --save
```

Aquí `--save` representa o número de versión da actualización.

#### <a rel=id href="#npm" id="npm"></a> Publicar contido en npmjs.com

A solución [predeterminada](/i18n.site/feature#ha) recomendada é publicar contido en [npmjs.com](//npmjs.com)

##### npm login & Liberación

Instala `nodejs` , inicia sesión con `npm login` .

Edita `md/.i18n/htm/ol.yml` e cambia `i18n.site` en `v: //unpkg.com/i18n.site` polo teu propio nome de paquete `npm` .

Só tes que usar o nome do paquete desocupado en [npmjs.com](//npmjs.com)

Ao publicar baseado no paquete `npm` , **asegúrese de usar `//unpkg.com/` para** o prefixo de `v:` O valor `i18n.site` optimizou especialmente o tempo de caché de `/.v` baixo esta ruta do prefixo para conseguir a visualización oportuna das novas versións.

Executa `i18n.site --npm` ou `i18n.site -n` no directorio `md` para traducir e publicar.

Se utilizas un ambiente de integración continua para publicar, non hai que instalar `nodejs` Só tes que copiar os permisos de publicación e de inicio de sesión `~/.npmrc` no ambiente.

Se modificas o nome do paquete de `v:` en `ol.yml` , **asegúrate de eliminar primeiro `.i18n/v/ol`** e despois publicalo.

##### Servidor Proxy Publicado Por npm

Se os usuarios da China continental atopan problemas de rede e non poden publicar paquetes `npm` , poden configurar a variable de ambiente `https_proxy` para configurar o servidor proxy.

Asumindo que o porto do teu servidor proxy é `7890` , podes escribir:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contido Autoaloxado

Se queres autoaloxar o contido, primeiro edita `md/.i18n/htm/ol.yml` e cambia `v: //unpkg.com/i18n.site` polo prefixo do teu URL, como `v: //i18n-v.xxx.com` .

Introduza o directorio `md` e executa

```
i18n.site --htm_conf ol --save
```

ou abreviatura

```
i18n.site -c ol -s
```

A continuación, configure o contido no directorio `md/out/ol/v` coa ruta do prefixo URL definida en `v:` .

Finalmente, **configure o tempo de caché do camiño que remata en `/.v` a `1s`** , se non, non se poderá acceder inmediatamente ao contido recén publicado.

O tempo de caché para outras rutas pódese establecer nun ano ou máis para reducir as solicitudes innecesarias.

##### Aloxamento De Contido en s3

Para aloxar contido, ademais de usar `CDN` teu propio servidor, outra opción común é usar `S3` + .

Podes usar [rclone](https://rclone.org) para iniciar sesión no servidor `S3` , despois consultar e modificar o seguinte script, e só copiar os cambios incrementais a `S3` para cada versión.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Lembra configurar `CDN` para que o tempo de caché do camiño que remata en `/.v` sexa `1s` , se non, non se poderá acceder inmediatamente ao contido recén publicado.

### Publicar Sitio Web

O sitio web pódese implementar en calquera lugar [github page](https://pages.github.com) e [cloudflare page](https://pages.cloudflare.com) son boas opcións.

Dado que o sitio web usa unha arquitectura [de aplicación dunha soa páxina](https://developer.mozilla.org/docs/Glossary/SPA) , recorda reescribir as rutas URL que non conteñan `. ` a `index.html` .

A páxina de entrada do sitio web só debe ser implementada unha vez e non é necesario volver implementar a páxina de entrada do sitio web para as actualizacións de contido posteriores.

#### Implementar Na Páxina github

Primeiro [fai clic github para crear unha organización](https://github.com/account/organizations/new?plan=free) . O seguinte nome da organización é `i18n-demo` como exemplo.

A continuación, cree o almacén `i18n-demo.github.io` nesta organización (substitúe `i18n-demo` polo nome da organización que creaches):

![](https://p.3ti.site/1721098657.avif)

Ao publicar o contido do artigo anterior, xerouse `out/ol/htm` Introduza este directorio e executa :

```
ln -s index.html 404.html
```


Dado que `github page` non admite a reescritura de rutas de URL, úsase `404.html` no seu lugar.

A continuación, execute o seguinte comando no directorio `htm` (lembra substituír `i18n-demo/i18n-demo.github.io.git` polo seu propio enderezo de almacén) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Despois de presionar o código, agarde a que a implementación de `github page` se execute correctamente (como se mostra a continuación) antes de poder acceder a el.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para a páxina de demostración, consulte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implantar Na Páxina De cloudflare

En [cloudflare page](//pages.cloudflare.com) con `github page` , ofrece reescritura de camiños e é máis amigable para a China continental e é máis accesible.

O despregamento de `cloudflare page` adoita basearse no despregamento de `github page` anterior.

Crea un proxecto e vincula o almacén `i18n-demo.github.io` anterior.

O proceso móstrase na seguinte figura:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Fai clic en `Add Account` para conceder acceso á organización `i18n-demo` .

Se ataches o almacén doutra organización, é posible que teñas que facer clic en `Add Account` dúas veces para autorizar dúas veces antes de que se mostre a nova organización.

![](https://p.3ti.site/1721118306.avif)

A continuación, seleccione o almacén `i18n-demo.github.io` , prema en `Begin setup` e use os valores predeterminados para os pasos seguintes.

![](https://p.3ti.site/1721118490.avif)

Despois de vincular por primeira vez, cómpre esperar uns minutos antes de poder acceder a el.

Despois da implantación, pode vincular un nome de dominio personalizado.

![](https://p.3ti.site/1721119459.avif)

Despois de vincular o nome de dominio personalizado, vaia ao nome de dominio para configurar a reescritura do camiño da aplicación dunha soa páxina, como se mostra a continuación:

![](https://p.3ti.site/1721119320.avif)

As regras da imaxe de arriba son as seguintes. Substitúe `i18n.site` na primeira liña de abaixo polo nome de dominio que vinculas.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Ademais, configura as regras da caché, como se mostra a continuación, e establece a duración da caché nun mes.

![](https://p.3ti.site/1721125111.avif)

Cambia o nome de dominio que coincide no segundo paso da imaxe superior polo nome de dominio que vinculaches.

#### Optimización Da Implantación De Sitios Web Na China Continental

Se queres obter un mellor rendemento de accesibilidade no contorno de rede da China continental, primeiro [rexistra un nome de dominio](//beian.aliyun.com) .

A continuación, utiliza o almacenamento `CDN` + o seguinte contido `out/ol/htm` .

Podes usar a informática de borde para reescribir o camiño para adaptalo ás aplicacións dunha soa páxina. Por exemplo, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) pódese configurar así:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
![](https://p.3ti.site/1721121273.avif)

Dado que `CNAME` rexistro `MX` e o rexistro `CNAME` non poden `A` , se quere recibir correos electrónicos de nomes de dominio ao mesmo tempo, debe cooperar co script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Ademais, debido a que as tarifas de tráfico no exterior dos provedores de nubes na China continental son relativamente caras, se queres optimizar os custos, podes usar [a resolución xeográfica gratuíta de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) e o nome de dominio personalizado de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (como se mostra a continuación). desvío de tráfico──Tráfico na China continental Baidu Cloud `CDN` , o tráfico internacional vai cloudflare .

![](https://p.3ti.site/1721119788.avif)

Estas solucións de optimización de implantación son máis complexas e serán introducidas en capítulos separados no futuro.

#### Redirección Xenérica De Nomes De Dominio

Se usas `i18n.site` para xerar un sitio web como o teu sitio web principal, normalmente necesitas configurar a redirección pan-dominio, é dicir, redirixir o acceso a `*.xxx.com` (incluíndo `www.xxx.com` ) a `xxx.com` .

Este requisito pódese conseguir coa axuda de Alibaba Cloud `CDN` `EdgeScript` ( [documento en inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documento chinés](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Engade o nome de dominio en [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) e sinala o nome de dominio `*.xxx.com` a `CNAME` en Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Por exemplo, a configuración de redirección de nomes pan-dominio de `*.i18n.site` na imaxe superior é a seguinte:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Implementar Con nginx

Engade unha configuración similar á seguinte no parágrafo `server` de nginx Por favor, cambie `/root/i18n/md/out/ol/htm` á ruta do seu propio proxecto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Estrutura Do Directorio

#### `public`

Ficheiros estáticos do sitio web, como `favicon.ico` , `robots.txt` , etc.

Os ficheiros de iconas aquí pódense xerar con [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Baixo o directorio `.i18n` están os ficheiros de configuración, caché de tradución, etc. de `i18n.site` Consulte o seguinte capítulo ["Configuración"](/i18n.site/conf) para obter máis información.

#### `en`

Directorio da lingua de orixe, correspondente ao ficheiro de configuración `en` de `fromTo` en `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Consulte a configuración da tradución [i18](/i18/use)
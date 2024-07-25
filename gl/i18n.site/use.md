# Instalar &

## Token De Configuración

A ferramenta de tradución `i18` está incrustada `i18n.site` [prema aquí para consultar o documento `i18` para configurar o token de acceso](/i18/use) .

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proxecto De Demostración

Comecemos cun proxecto de demostración e aprendemos a usar `i18n.site`

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

O nome do directorio do clon do código base debe ser `md` para facilitar a vista previa local con `docker` `demo.i18n.site`

### Traducir

Primeiro, introduza o `md` e executa `i18n.site` , que traducirá `en` a `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Despois de executar, xeraranse `git add . ` ficheiros de tradución e de caché `md`

### Vista Previa Local

`docker` `MAC` [orbstack](https://orbstack.dev) `docker`

A continuación, `./up.sh` [https://127.0.0.1](https://127.0.0.1) directorio `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publicar Contido

`i18n.site` Adopta unha arquitectura [de aplicación dunha soa páxina](https://developer.mozilla.org/docs/Glossary/SPA) , e a páxina de entrada do sitio web e o contido do sitio web implícanse de forma independente.

Despois de executar a tradución anterior, xeraranse os directorios `htm` e `v` no directorio `md/out/dev`

Aquí, `dev` indica que está construído en base ao ficheiro `.i18n/htm/dev.yml` .

En : `dev`

`htm` o directorio está a páxina de entrada do sitio web.

`v` O directorio contén o contido do sitio web co número de versión.

A vista previa local copiará todos os ficheiros no directorio `out/dev/v/0.1.0` , independentemente do número de versión.

Para o lanzamento oficial, os ficheiros modificados copiaranse no directorio do novo número de versión.

#### Use -c Para Especificar O Ficheiro De Configuración

Diferentes ficheiros de configuración crearán os directorios correspondentes no directorio `out`

Por exemplo `.i18n/htm/ol.yml` creará un directorio `out/ol` .

`dev.yml` e `ol.yml` son as configuracións predeterminadas.

`dev` é a abreviatura de `development` , que representa o ambiente de desenvolvemento, úsase para a vista previa local e tamén é o ficheiro de configuración predeterminado.
`ol` a abreviatura de `online` , que representa o contorno en liña, úsase para a versión oficial e tamén é o ficheiro de configuración predeterminado cando se publica en `npm` usando o parámetro de liña de comandos `-n` .

Tamén pode crear outros ficheiros de configuración Use `--htm_conf` na liña de comandos para especificar o nome do ficheiro de configuración.

por exemplo:
```
i18n.site --htm_conf yourConfig --save
```

`--save` indica o número de versión da actualización.

#### <a rel=id href="#npm" id="npm"></a> Publicar contido en npmjs.com

A solución [predeterminada](/i18n.site/feature#ha) recomendada é publicar contido en [npmjs.com](//npmjs.com)

##### npm login & Liberación

Instala `nodejs` usa `npm login` para iniciar sesión.

¡Edita `md/.i18n/htm/ol.yml` cambia `i18n.site` en `v: //unpkg.com/i18n.site` polo teu propio `npm` nome do paquete.

Só tes que usar o nome do paquete desocupado en [npmjs.com](//npmjs.com)

Cando publiques en base ao paquete `npm` , **asegúrate de usar `//unpkg.com/`** como prefixo do valor `v:` O tempo da caché `i18n.site` baixo este camiño do prefixo `/.v` foi especialmente optimizado para permitir a visualización oportuna das novas versións.

Executa `i18n.site --npm` ou `i18n.site -n` no directorio `md` para traducir e publicar.

Se usas un ambiente de integración continua para publicar, non hai necesidade de instalalo `nodejs` Só tes que copiar o permiso de inicio de sesión `~/.npmrc` no ambiente.

Se modificas o nome do paquete en `v:` `ol.yml` , **asegúrate de eliminar `.i18n/v/ol` primeiro** e despois publicalo.

##### Servidor Proxy Publicado Por npm

Se os usuarios da China continental atopan problemas de rede e non poden publicar o paquete `npm` , poden configurar a variable de ambiente `https_proxy` para configurar o servidor proxy.

Asumindo que o porto do teu servidor proxy é `7890` podes escribir:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contido Autoaloxado

Se queres auto-aloxar o contido, primeiro `md/.i18n/htm/ol.yml` e cambia `v: //unpkg.com/i18n.site` ao teu prefixo de URL, como `v: //i18n-v.xxx.com` .

Introduza o directorio `md`

```
i18n.site --htm_conf ol --save
```

ou abreviatura

```
i18n.site -c ol -s
```

A continuación, configure o contido do directorio `md/out/ol/v` coa ruta do prefixo URL definida en `v:` .

Por último, **configura o tempo de caché da ruta que `/.v` en `1s`** , se non, non se poderá acceder inmediatamente ao contido recén publicado.

O tempo de caché para outras rutas pódese establecer nun ano ou máis para reducir as solicitudes innecesarias.

##### Aloxamento De Contido en s3

Para aloxar contidos, ademais de usar `CDN` teu propio servidor, outra opción común é usar `S3` +

Podes usar o servidor [rclone](https://rclone.org) Iniciar sesión `S3` consultar e modificar o script a continuación e copiar só os cambios incrementais en `S3` cada vez que publiques.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Lembra configurar `CDN` para que o tempo de caché do camiño que remata en `/.v` sexa `1s` , se non, non poderás acceder inmediatamente ao contido recén publicado.

### Publicar Sitio Web

O sitio web pódese implementar en calquera lugar [github page](https://pages.github.com) e [cloudflare page](https://pages.cloudflare.com) son boas opcións.

Dado que o sitio web adopta a arquitectura [dunha aplicación dunha soa páxina](https://developer.mozilla.org/docs/Glossary/SPA) , recorda reescribir a ruta do URL que non `. ` a `index.html` .

A páxina de entrada do sitio web só debe ser implementada unha vez e non é necesario volver implementar a páxina de entrada do sitio web para as actualizacións de contido posteriores.

#### Implementar Na Páxina github

Primeiro [fai clic github para crear unha organización](https://github.com/account/organizations/new?plan=free) `i18n-demo`

A continuación, crea un almacén baixo esta `i18n-demo.github.io` (substitúe `i18n-demo` polo nome da organización que creaches):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ao publicar o contido no artigo anterior, foi xerado `out/ol/htm` Introduza este directorio e executa :

```
ln -s index.html 404.html
```


`github page` non admite a reescritura de rutas de URL, polo que se usa `404.html` .

A continuación, executa o seguinte comando no directorio `htm` (lembra substituír `i18n-demo/i18n-demo.github.io.git` polo teu propio enderezo de almacén) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Despois de presionar o código, agarde a `github page` se execute correctamente (como se mostra a continuación) e poderá acceder a el.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para a páxina de demostración, consulte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implantar Na Páxina De cloudflare

[cloudflare page](//pages.cloudflare.com) En comparación con `github page` , ofrece reescritura de camiños e é máis accesible para a China continental.

`cloudflare page` O despregamento baséase normalmente no despregamento de `github page` anterior.

Crea un proxecto e enlaza o almacén anterior `i18n-demo.github.io`

O proceso móstrase na seguinte figura:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`Add Account` clic para conceder acceso á `i18n-demo` .

Se ataches o almacén doutra organización, é posible que teñas que `Add Account` clic dúas veces para autorizalo dúas veces antes de que se mostre a nova organización.

<img alt="" src="https://p.3ti.site/1721118306.avif">

A continuación `i18n-demo.github.io` seleccione Almacén, prema en `Begin setup` e use os valores predeterminados para os pasos seguintes.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Despois de vincular por primeira vez, cómpre esperar uns minutos antes de poder acceder a el.

Despois da implantación, pode vincular un nome de dominio personalizado.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Despois de vincular o nome de dominio personalizado, vaia ao nome de dominio para configurar a reescritura do camiño da aplicación dunha soa páxina, como se mostra a continuación:

<img alt="" src="https://p.3ti.site/1721119320.avif">

As regras da imaxe de arriba son `i18n.site` seguintes.

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

<img alt="" src="https://p.3ti.site/1721125111.avif">

Cambia o nome de dominio que coincide no segundo paso da imaxe superior polo nome de dominio que vinculaches.

#### Optimización Da Implantación De Sitios Web Na China Continental

Se queres obter un mellor rendemento de accesibilidade no contorno de rede da China continental, primeiro [rexistra un nome de dominio](//beian.aliyun.com) .

`out/ol/htm` continuación, utiliza o almacenamento `CDN` obxectos dos vendedores na China continental +

Podes usar a informática de borde para reescribir o camiño para adaptalo a aplicacións dunha soa páxina, como [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

Debido a `MX` `CNAME` rexistros e `CNAME` rexistros non poden coexistir, se desexa recibir correos electrónicos de nomes `A` dominio ao mesmo tempo, debe cooperar co script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Ademais, debido a que as tarifas de tráfico no exterior dos provedores de nubes na China continental son relativamente caras, se queres optimizar os custos, podes usar [a resolución xeográfica gratuíta de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) e o nome de dominio personalizado de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (como se mostra a continuación). Desvío de tráfico──Enrutamento de tráfico na China continental Baidu Cloud `CDN` o tráfico internacional ascende cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Estas solucións de optimización de implantación son máis complexas e serán introducidas en capítulos separados no futuro.

#### Redirección Xenérica De Nomes De Dominio

Se usas `i18n.site` para xerar un sitio web como o teu sitio web principal, normalmente necesitas configurar a redirección de dominio pan-dominio, é dicir, redirixir o acceso a `*.xxx.com` (incluíndo `www.xxx.com` ) a `xxx.com` .

Este requisito pódese conseguir coa axuda do `EdgeScript` de Alibaba Cloud `CDN` [documento en inglés](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documento chinés](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Engade un nome de dominio en [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) e apunta `*.xxx.com` nome de dominio a Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Por exemplo, a configuración de redirección de `*.i18n.site` de dominio pan da imaxe superior é a seguinte:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Implementar Con nginx

Engade unha configuración similar á seguinte no `server` nginx onde `/root/i18n/md/out/ol/htm` cámbiaa pola ruta do teu propio proxecto `out/ol/htm` :

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

#### Público

Ficheiros estáticos do sitio web, como `favicon.ico` `robots.txt` , etc.

Os ficheiros de iconas aquí pódense xerar con [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` o directorio están os ficheiros de configuración de `i18n.site` , a caché de tradución, etc. Consulte o seguinte capítulo ["Configuración"](/i18n.site/conf) para máis detalles.

#### Gl

Directorio da lingua de orixe, correspondente `.i18n/conf.yml` `fromTo` `en` no ficheiro de configuración

```yaml
i18n:
  fromTo:
    en: zh
```

Consulte a configuración da tradución [i18](/i18/use)


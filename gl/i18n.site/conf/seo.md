# Optimización De Buscadores (Seo)

## Principio

`i18n.site` adopta unha arquitectura de páxina única non actualizada Para facilitar a indexación da busca, xerarase unha páxina estática separada e `sitemap.xml` para que os rastrexadores poidan rastrexar.

Cando o rastrexador do motor de busca utiliza `User-Agent` da solicitude de acceso, a solicitude redirixirase á páxina estática a través de `302` .

Nas páxinas estáticas, use `link` para indicar ligazóns a diferentes versións lingüísticas desta páxina, como :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Configuración Local De nginx

Tome o ficheiro de configuración `.i18n/htm/main.yml` no proxecto de demostración como exemplo

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Primeiro modifica o valor de `host:` anterior para o teu nome de dominio, como `xxx.com` .

Entón, `i18n.site -n` , xerarase a páxina estática no directorio `out/main/htm` .

Por suposto, tamén pode activar outros ficheiros de configuración, como facer referencia primeiro á configuración de `main` para crear `.i18n/htm/dist.package.json` e `.i18n/htm/dist.yml` .

A continuación, executa `i18n.site -n -c dist` para que a páxina estática se xere a `out/dist/htm` .

`nginx` pódese establecer facendo referencia á configuración a continuación.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Non garde en caché os scripts dos traballadores do servidor durante moito tempo
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Establece tempos de caché máis longos para outros recursos estáticos
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Establece que ficheiro estático utiliza o rastrexador como entrada da páxina de inicio
location = / {
  # Se $botLang non está baleiro, significa o acceso do rastrexador e a redirección segundo a ruta do idioma establecido
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Configuración da aplicación dunha soa páxina
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configure O Almacenamento De Obxectos Para Cargar Ficheiros Estáticos

Os ficheiros estáticos pódense xerar localmente, pero un enfoque máis común é cargalos ao almacenamento de obxectos.

Modifica `out` configurado anteriormente para :

```
out:
  - s3
```

A continuación, edita `~/.config/i18n.site.yml` e engade a seguinte configuración :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Na configuración, cambie `i18n.site` ao valor de `host:` en `.i18n/htm/main.yml` , pódense configurar varios almacéns de obxectos en `s3` e o campo `region` é opcional (moitos almacéns de obxectos non precisan configurar este campo).

A continuación, executa `i18n.site -n` para volver publicar o proxecto.

Se modificaches `~/.config/i18n.site.yml` e queres volver cargar, utiliza o seguinte comando no directorio raíz do proxecto para limpar a caché de carga :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Configuración De cloudflare

Nome de dominio aloxado en [cloudflare](//www.cloudflare.com)

### Regras De Conversión

Engade as regras de conversión como se mostra a continuación:

![](//p.3ti.site/1725436822.avif)

O código de regra é o seguinte, modifica o código "i18n.site" ao teu nome de dominio:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regras De Almacenamento en Caché

Engade regras de caché do seguinte xeito:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Regras De Redirección

Establece as regras de redirección do seguinte xeito, modifica o código "i18n.site" ao teu nome de dominio

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` Seleccione a redirección dinámica, modifique `/en` na ruta de redirección `concat("/en",http.request.uri.path,".htm")` ao idioma predeterminado que desexa que inclúan os motores de busca.

## Configuración Intelligent Cloud De Baidu

Se precisas ofrecer servizos á China continental, podes usar [Baidu Smart Cloud](//cloud.baidu.com) .

Os datos cárganse no Almacenamento de obxectos de Baidu e engádense á rede de distribución de contidos de Baidu.

A continuación, cree o script no [servizo EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) do seguinte xeito

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // As cabeceiras de resposta pódense configurar para depurar a saída, como out.XXX = 'MSG';
})
```

Fai clic en `Debug` e despois en Publicar en toda a rede.

![](//p.3ti.site/1725437754.avif)

## Uso Avanzado: Distribúe O Tráfico en Función Da Resolución Rexional

Se queres ofrecer servizos na China continental e tamén queres `cloudflare` tráfico internacional gratuíto, podes usar `DNS` con resolución rexional.

Por exemplo, [Huawei DNS](https://www.huaweicloud.com) ofrece análise rexional gratuíta, coa que o tráfico da China continental pode pasar por Baidu Smart Cloud e o tráfico internacional pode pasar por `cloudflare` .

Hai moitas trampas na configuración de `cloudflare` Aquí tes algúns puntos a ter en conta :

### O Nome De Dominio Está Aloxado Noutro `DNS` , Como Usar `cloudflare`

Primeiro ligue un nome de dominio arbitrario a `cloudflare` , e despois use `SSL/TLS` → nome de dominio personalizado para asociar o nome de dominio principal a este nome de dominio.

![](https://p.3ti.site/1725438658.avif)

### Non Se Pode Acceder `cloudflare R2` a Través Dun Nome De Dominio Personalizado

Dado que non se pode acceder ao almacenamento de obxectos `cloudflare` `R2` mediante un nome de dominio personalizado, é necesario utilizar un almacenamento de obxectos de terceiros para colocar ficheiros estáticos.

[backblaze.com](https://www.backblaze.com) tomamos como exemplo como unir obxectos de terceiros para almacenalos en `cloudflare` .

Crea un depósito en `backblaze.com` , carga calquera ficheiro, fai clic para buscar o ficheiro e obtén o nome de dominio de `Friendly URL` , que é `f003.backblazeb2.com` aquí.

![](//p.3ti.site/1725440783.avif)

Cambia o nome de dominio de `CNAME` a `f003.backblazeb2.com` en `cloudflare` e activa o proxy.

![](//p.3ti.site/1725440896.avif)

Modificar `cloudflare` de `SSL` → modo de cifrado, configurado en `Full`

![](//p.3ti.site/1725438572.avif)

Engade a regra de conversión como se mostra a continuación, colócaa primeiro (a primeira ten a prioridade máis baixa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` selecciona dinámico e modifica `your_bucketname` en `concat("/file/your_bucketname",http.request.uri.path)` ao teu nome de balde.

Ademais, na regra de conversión `cloudflare` anterior, `index.html` cámbiase a `file/your_bucketname/index.html` e outras configuracións seguen sendo as mesmas.

![](//p.3ti.site/1725441384.avif)
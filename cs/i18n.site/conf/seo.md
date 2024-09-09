# Optimalizace pro vyhledávače (SEO)

## Principy

`i18n.site` využívá architekturu jedné stránky bez obnovy, aby usnadnil indexaci vyhledávačů, a generuje samostatné statické stránky a `sitemap.xml` pro爬tery.

Pokud `User-Agent` přístupového požadavku je爬虫 vyhledávače, požadavek bude přesměrován na statickou stránku pomocí `302`.

Na statických stránkách použijte `link` k označení odkazů na různé jazykové verze této stránky, například:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfigurace nahrávání statických souborů do úložiště objektů

Statické soubory mohou být generovány lokálně, ale běžnější je jejich nahrání do úložiště objektů.

Vezměte konfigurační soubor `.i18n/htm/ol.yml` v demo projektu jako příklad

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Nejprve upravte hodnotu `host:` výše na název vaší domény, například `i18n.site`.

Poté upravte `~/.config/i18n.site.yml` a přidejte následující konfiguraci:

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

V konfiguraci změňte `i18n.site` na hodnotu `host:` v `.i18n/htm/ol.yml`, pod `s3` můžete konfigurovat více úložišť objektů a pole `region` je volitelné (mnoho úložišť objektů toto pole nemusí nastavovat).

Poté spusťte `i18n.site -n` a znovu publikujte projekt.

Pokud jste upravili `~/.config/i18n.site.yml` a chcete znovu nahrát, použijte prosím následující příkaz v kořenovém adresáři projektu k vymazání mezipaměti pro nahrávání:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Konfigurace Cloudflare

Doména hostovaná na [Cloudflare](//www.cloudflare.com).

### Převodní pravidla

Přidejte převodní pravidla, jak je uvedeno níže:

![](//p.3ti.site/1725436822.avif)

Kód pravidla je následující, upravte prosím kód "i18n.site" na název vaší domény:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Pravidla pro ukládání do mezipaměti

Přidejte pravidla pro ukládání do mezipaměti následovně:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Pravidla pro přesměrování

Nastavte pravidla pro přesměrování následovně, upravte prosím kód "i18n.site" na název vaší domény:

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

`URL redirect` vyberte dynamické přesměrování, upravte prosím `/en` v cestě přesměrování `concat("/en", http.request.uri.path, ".htm")` na výchozí jazyk, který mají vyhledávače indexovat.

## Konfigurace Baidu Smart Cloud

Pokud potřebujete poskytovat služby pro pevninskou Čínu, můžete využít [Baidu Smart Cloud](//cloud.baidu.com).

Data jsou nahrána do Baidu Object Storage a vázána na Baidu Content Distribution Network.

Poté vytvořte skript ve [EdgeJS službě](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

Klikněte na `Debug` a poté na Publikovat v celé síti.

![](//p.3ti.site/1725437754.avif)

## Pokročilé použití: Distribuce provozu na základě regionálního rozlišení

Pokud chcete poskytovat služby v pevninské Číně a zároveň využívat bezplatný mezinárodní provoz `Cloudflare`, můžete použít `DNS` s regionálním rozlišením.

Například [Huawei Cloud DNS](https://www.huaweicloud.com) poskytuje bezplatnou regionální analýzu, pomocí které může provoz v pevninské Číně procházet přes Baidu Smart Cloud a mezinárodní provoz přes `Cloudflare`.

V konfiguraci `Cloudflare` je mnoho úskalí. Zde je několik bodů, které je třeba vzít v úvahu:

### Jak používat `Cloudflare`, pokud je doména hostována na jiném `DNS`:

Nejprve připojte libovolnou doménu k `Cloudflare`, a poté pomocí `SSL/TLS` → vlastní doména přiřaďte hlavní doménu k této doméně.

![](https://p.3ti.site/1725438658.avif)

### `Cloudflare R2` nelze přístupit pomocí vlastní domény

Protože `R2` `Cloudflare` neumožňuje přístup pomocí vlastní domény, je třeba použít úložiště objektů třetí strany pro umístění statických souborů.

Zde bereme `cloudflare` příklad [backblaze.com](https://www.backblaze.com)

Vytvořte kbelík na `backblaze.com`, nahrajte libovolný soubor, procházejte soubor a získejte doménu `Friendly URL`, zde `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Změňte doménu `CNAME` na `f003.backblazeb2.com` na `Cloudflare` a povolte proxy.

![](//p.3ti.site/1725440896.avif)

Upravte `Cloudflare` `SSL` → režim šifrování na `Full`

![](//p.3ti.site/1725438572.avif)

Přidejte převodní pravidlo, jak je uvedeno níže, a umístěte ho jako první (první má nejnižší prioritu):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` vyberte dynamické a upravte `your_bucketname` v `concat("/file/your_bucketname", http.request.uri.path)` na název vašeho kbelíku.

Kromě toho ve výše uvedeném převodním pravidlu `Cloudflare` změňte `index.html` na `file/your_bucketname/index.html` a další konfigurace zůstávají beze změny.

![](//p.3ti.site/1725441384.avif)
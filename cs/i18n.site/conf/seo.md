# Optimalizace Pro Vyhledávače (Seo)

## Princip

`i18n.site` používá neaktualizovanou architekturu jedné stránky Aby se usnadnilo indexování vyhledávání, bude pro prohledávače vygenerována samostatná statická stránka a `sitemap.xml` .

Když prohledávač vyhledávače použije `User-Agent` v požadavku na přístup, požadavek bude přesměrován na statickou stránku pomocí `302` .

Na statických stránkách použijte `link` k označení odkazů na různé jazykové verze této stránky, například :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Nakonfigurujte Úložiště Objektů Pro Nahrávání Statických Souborů

Statické soubory lze generovat lokálně, ale běžnějším přístupem je jejich nahrání do úložiště objektů.

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

Nejprve prosím upravte hodnotu `host:` výše na název vaší domény, například `i18n.site` .

Poté upravte `~/.config/i18n.site.yml` a přidejte následující konfiguraci :

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

V konfiguraci změňte `i18n.site` na hodnotu `host:` v `.i18n/htm/ol.yml` , více úložišť objektů lze konfigurovat pod `s3` a pole `region` je volitelné (mnoho úložišť objektů toto pole nemusí nastavovat).

Poté spusťte `i18n.site -n` a znovu publikujte projekt.

Pokud jste upravili `~/.config/i18n.site.yml` a chcete znovu nahrát, použijte prosím následující příkaz v kořenovém adresáři projektu k vymazání mezipaměti pro nahrávání :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Konfigurace cloudflare

Název domény hostovaný na [cloudflare](//www.cloudflare.com)

### Pravidla Konverze

Přidejte pravidla převodu, jak je uvedeno níže:

![](//p.3ti.site/1725436822.avif)

Kód pravidla je následující, upravte prosím kód „i18n.site“ na název vaší domény:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Pravidla Ukládání Do Mezipaměti

Přidejte pravidla mezipaměti následovně:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Pravidla Přesměrování

Nastavte pravidla přesměrování následovně, upravte prosím kód „i18n.site“ na název vaší domény

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

`URL redirect` Vyberte dynamické přesměrování, upravte prosím `/en` v cestě přesměrování `concat("/en",http.request.uri.path,".htm")` na výchozí jazyk, který mají vyhledávače zahrnout.

## Konfigurace Inteligentního Cloudu Baidu

Pokud potřebujete poskytovat služby pevninské Číně, můžete využít [Baidu Smart Cloud](//cloud.baidu.com) .

Data jsou nahrána do Baidu Object Storage a vázána na Baidu Content Distribution Network.

Poté vytvořte skript ve [službě EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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

## Pokročilé Použití: Distribuce Provozu Na Základě Regionálního Rozlišení

Pokud chcete poskytovat služby v pevninské Číně a chcete také `cloudflare` bezplatný mezinárodní provoz, můžete použít `DNS` s regionálním rozlišením.

Například [Huawei DNS](https://www.huaweicloud.com) poskytuje bezplatnou regionální analýzu, se kterou může čínský provoz procházet přes Baidu Smart Cloud a mezinárodní provoz může procházet `cloudflare` .

V konfiguraci `cloudflare` je mnoho úskalí. Zde je několik bodů, které je třeba poznamenat :

### Název Domény Je Hostován v Jiné `DNS` , Jak Používat `cloudflare`

Nejprve svažte libovolný název domény na `cloudflare` a poté použijte `SSL/TLS` → vlastní název domény k přiřazení hlavního názvu domény k tomuto názvu domény.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Nelze Získat Prostřednictvím Vlastního Názvu Domény

Protože k `cloudflare` úložišti objektů `R2` nelze přistupovat pomocí přizpůsobeného názvu domény, je třeba k umístění statických souborů použít úložiště objektů třetí strany.

Zde bereme jako příklad [backblaze.com](https://www.backblaze.com) jak svázat objekty třetích stran a uložit je na `cloudflare` .

Vytvořte kbelík na `backblaze.com` , nahrajte libovolný soubor, kliknutím soubor procházejte a získejte název domény `Friendly URL` , což je zde `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Změňte název domény z `CNAME` na `f003.backblazeb2.com` na `cloudflare` a povolte proxy.

![](//p.3ti.site/1725440896.avif)

Upravte `cloudflare` z `SSL` → režim šifrování, nastavte na `Full`

![](//p.3ti.site/1725438572.avif)

Přidejte pravidlo převodu, jak je uvedeno níže, umístěte ho jako první (první má nejnižší prioritu):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` vyberte dynamické a upravte `your_bucketname` v `concat("/file/your_bucketname",http.request.uri.path)` na název vašeho segmentu.

Navíc ve výše uvedeném pravidle převodu `cloudflare` se `index.html` změní na `file/your_bucketname/index.html` a ostatní konfigurace zůstávají stejné.

![](//p.3ti.site/1725441384.avif)
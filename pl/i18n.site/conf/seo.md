# Optymalizacja pod wyszukiwarki (SEO)

## Zasady

`i18n.site` korzysta z architektury jednej strony bez odświeżania. Aby ułatwić indeksowanie przez wyszukiwarki, generuje oddzielne strony statyczne oraz `sitemap.xml`, które mogą być przeszukiwane przez roboty indeksujące.

W przypadku, gdy `User-Agent` żądania jest robotem wyszukiwarki, żądanie zostanie przekierowane na stronę statyczną za pomocą `302`.

Na stronach statycznych użyj `link`, aby wskazać linki do różnych wersji językowych tej strony, na przykład:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfiguracja przesyłania plików statycznych do magazynu obiektów

Pliki statyczne mogą być generowane lokalnie, ale bardziej powszechną praktyką jest ich przesyłanie do magazynu obiektów.

Jako przykład rozważ plik konfiguracyjny `.i18n/htm/ol.yml` z projektu demonstracyjnego

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

Najpierw zmodyfikuj wartość `host:` na swoją domenę, na przykład `i18n.site`.

Następnie edytuj `~/.config/i18n.site.yml`, dodając następującą konfigurację:

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

W konfiguracji zmień `i18n.site` na wartość `host:` z `.i18n/htm/ol.yml`, pod `s3` możesz skonfigurować kilka magazynów obiektów, a pole `region` jest opcjonalne (wiele magazynów obiektów nie wymaga ustawienia tego pola).

Następnie uruchom `i18n.site -n`, aby ponownie opublikować projekt.

Jeśli zmodyfikowałeś `~/.config/i18n.site.yml` i chcesz go ponownie wysłać, użyj poniższego polecenia w głównym katalogu projektu, aby wyczyścić pamięć podręczną wysyłania:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Konfiguracja Cloudflare

Domena hostowana w [cloudflare](//www.cloudflare.com).

### Zasady konwersji

Dodaj reguły konwersji, jak pokazano na rysunku:

![](//p.3ti.site/1725436822.avif)

Kod reguły jest następujący, zmodyfikuj kod "i18n.site" na swoją nazwę domeny:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Reguły buforowania

Dodaj reguły buforowania w następujący sposób:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Reguły przekierowań

Ustaw reguły przekierowań w następujący sposób, zmodyfikuj kod "i18n.site" na swoją nazwę domeny:

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

`URL redirect` wybierz przekierowanie dynamiczne. Zmień ścieżkę przekierowania `concat("/en", http.request.uri.path, ".htm")`, aby zastąpić `/en` domyślnym językiem, który chcesz, aby wyszukiwarki zaindeksowały.

## Konfiguracja Inteligentnej Chmury Baidu

Jeśli chcesz świadczyć usługi na terenie Chin kontynentalnych, możesz użyć [Baidu Smart Cloud](//cloud.baidu.com).

Dane są przesyłane do Baidu Object Storage i łączone z siecią dystrybucji treści Baidu.

Następnie utwórz skrypt w [usłudze EdgeJS Edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) w następujący sposób:

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

Kliknij `Debug` , a następnie kliknij Publikuj w całej sieci.

![](//p.3ti.site/1725437754.avif)

## Zaawansowane użycie: Dystrybucja ruchu na podstawie analizy regionalnej

Jeśli chcesz świadczyć usługi na terenie Chin kontynentalnych oraz korzystać z bezpłatnego ruchu międzynarodowego z `cloudflare`, możesz użyć `DNS` z analizą regionalną.

Na przykład [Huawei Cloud DNS](https://www.huaweicloud.com) oferuje bezpłatną analizę regionalną, która umożliwia dystrybucję ruchu z Chin kontynentalnych przez Baidu Smart Cloud, a ruch międzynarodowy przez `cloudflare`.

Konfiguracja `cloudflare` wiąże się z wieloma pułapkami. Oto kilka punktów, na które warto zwrócić uwagę:

### Domena hostowana w innym `DNS`, jak używać `cloudflare`

Najpierw powiąż dowolną nazwę domeny z `cloudflare`, a następnie za pomocą `SSL/TLS` → niestandardowej nazwy domeny skojarz główną nazwę domeny z tą nazwą domeny.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` nie można uzyskać dostępu za pomocą niestandardowej nazwy domeny

Ponieważ `cloudflare` pamięć obiektowa `R2` nie umożliwia dostępu za pomocą niestandardowej nazwy domeny, do przechowywania plików statycznych należy użyć magazynu obiektów innej firmy.

Tutaj, jako przykład, użyj [backblaze.com](https://www.backblaze.com), aby zademonstrować, jak powiązać magazyn obiektów innej firmy z `cloudflare`.

Utwórz segment w `backblaze.com`, prześlij dowolny plik, kliknij, aby przeglądać plik i uzyskaj nazwę domeny `Friendly URL`, czyli tutaj `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Zmień nazwę domeny z `CNAME` na `f003.backblazeb2.com` w `cloudflare` i włącz serwer proxy.

![](//p.3ti.site/1725440896.avif)

Zmień `cloudflare` w `SSL` → tryb szyfrowania na `Full`

![](//p.3ti.site/1725438572.avif)

Dodaj regułę konwersji jak pokazano poniżej, umieść ją na pierwszym miejscu (pierwsza ma najniższy priorytet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` wybierz dynamiczne i zmodyfikuj `your_bucketname` w `concat("/file/your_bucketname", http.request.uri.path)` na nazwę swojego konta magazynu.

Ponadto, w powyższej regule przekierowania `cloudflare`, zmień `index.html` na `file/your_bucketname/index.html`, a inne ustawienia pozostaw bez zmian.

![](//p.3ti.site/1725441384.avif)
# Optymalizacja Wyszukiwarek (Seo)

## Zasada

`i18n.site` przyjmuje architekturę pojedynczej strony bez odświeżania. Aby ułatwić indeksowanie wyszukiwania, zostaną wygenerowane oddzielne strony statyczne i `sitemap.xml` , które będą mogły być indeksowane przez roboty indeksujące.

Gdy robot wyszukiwarki użyje `User-Agent` w żądaniu dostępu, żądanie zostanie przekierowane na stronę statyczną za pośrednictwem `302` .

Na stronach statycznych użyj `link` , aby wskazać linki do różnych wersji językowych tej strony, np :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokalna Konfiguracja nginx

Jako przykład weź plik konfiguracyjny `.i18n/htm/main.yml` z projektu demonstracyjnego

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

Najpierw zmodyfikuj powyższą wartość `host:` w nazwie domeny, np. `xxx.com` .

Następnie `i18n.site -n` strona statyczna zostanie wygenerowana w katalogu `out/main/htm` .

Oczywiście możesz także włączyć inne pliki konfiguracyjne, na przykład najpierw odwołując się do konfiguracji `main` aby utworzyć `.i18n/htm/dist.package.json` i `.i18n/htm/dist.yml` .

Następnie uruchom `i18n.site -n -c dist` , aby strona statyczna została wygenerowana na `out/dist/htm` .

`nginx` można ustawić, korzystając z poniższej konfiguracji.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Nie buforuj skryptów roboczych serwera zbyt długo
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Ustaw dłuższe czasy pamięci podręcznej dla innych zasobów statycznych
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Ustaw plik statyczny, którego robot będzie używać jako wpisu na stronie głównej
location = / {
  # Jeśli $botLang nie jest pusty, oznacza to dostęp robota i przekierowanie zgodnie z ustawioną ścieżką językową
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfiguracja aplikacji na jednej stronie
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Skonfiguruj Pamięć Obiektową Do Przesyłania Plików Statycznych

Pliki statyczne można generować lokalnie, ale bardziej powszechnym podejściem jest przesłanie ich do magazynu obiektowego.

Zmodyfikuj `out` skonfigurowane powyżej na :

```
out:
  - s3
```

Następnie edytuj `~/.config/i18n.site.yml` i dodaj następującą konfigurację :

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

W konfiguracji zmień `i18n.site` na wartość `host:` w `.i18n/htm/main.yml` , pod `s3` można skonfigurować wiele magazynów obiektów, a pole `region` jest opcjonalne (wiele magazynów obiektów nie musi ustawiać tego pola).

Następnie uruchom `i18n.site -n` , aby ponownie opublikować projekt.

Jeśli zmodyfikowałeś `~/.config/i18n.site.yml` i chcesz przesłać ponownie, użyj następującego polecenia w katalogu głównym projektu, aby wyczyścić pamięć podręczną przesyłania :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Konfiguracja cloudflare

Nazwa domeny hostowana w [cloudflare](//www.cloudflare.com)

### Zasady Konwersji

Dodaj reguły konwersji, jak pokazano poniżej:

![](//p.3ti.site/1725436822.avif)

Kod reguły jest następujący. Zmodyfikuj kod „i18n.site” w nazwie swojej domeny:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Reguły Buforowania

Dodaj reguły pamięci podręcznej w następujący sposób:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Reguły Przekierowań

Ustaw reguły przekierowania w następujący sposób, zmodyfikuj kod "i18n.site" na nazwę swojej domeny

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

`URL redirect` Wybierz przekierowanie dynamiczne. Zmodyfikuj `/en` w ścieżce przekierowania `concat("/en",http.request.uri.path,".htm")` na domyślny język, który chcesz uwzględnić w wyszukiwarkach.

## Inteligentna Konfiguracja Chmury Baidu

Jeśli chcesz świadczyć usługi do Chin kontynentalnych, możesz skorzystać z [Baidu Smart Cloud](//cloud.baidu.com) .

Dane są przesyłane do Baidu Object Storage i łączone z siecią dystrybucji treści Baidu.

Następnie utwórz skrypt w [usłudze EdgeJS Edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) w następujący sposób

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
  // Nagłówki odpowiedzi można ustawić jako dane wyjściowe debugowania, np. out.XXX = 'MSG';
})
```

Kliknij `Debug` , a następnie kliknij Publikuj w całej sieci.

![](//p.3ti.site/1725437754.avif)

## Zaawansowane Użycie: Dystrybuuj Ruch W Oparciu O Rozdzielczość Regionalną

Jeśli chcesz świadczyć usługi w Chinach kontynentalnych i jednocześnie chcesz mieć `cloudflare` bezpłatnego ruchu międzynarodowego, możesz użyć `DNS` z rozdzielczością regionalną.

Na przykład [Huawei Cloud DNS](https://www.huaweicloud.com) zapewnia bezpłatną analizę regionalną, dzięki której ruch z Chin kontynentalnych może przechodzić przez Baidu Smart Cloud, a ruch międzynarodowy może przechodzić przez `cloudflare` .

Konfiguracja `cloudflare` wiąże się z wieloma pułapkami. Oto kilka punktów, na które warto zwrócić uwagę :

### Nazwa Domeny Jest Hostowana W Innym `DNS` , Jak Używać `cloudflare`

Najpierw powiąż dowolną nazwę domeny z `cloudflare` , a następnie użyj `SSL/TLS` → niestandardowej nazwy domeny, aby powiązać główną nazwę domeny z tą nazwą domeny.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Nie Można Uzyskać Dostępu Za Pośrednictwem Niestandardowej Nazwy Domeny

Ponieważ do `cloudflare` pamięci obiektowej `R2` nie można uzyskać dostępu za pomocą dostosowanej nazwy domeny, do umieszczania plików statycznych należy użyć pamięci obiektowej innej firmy.

Tutaj bierzemy [backblaze.com](https://www.backblaze.com) jako przykład, aby zademonstrować, jak powiązać obiekty innych firm, które mają być przechowywane w `cloudflare` .

Utwórz segment w `backblaze.com` , prześlij dowolny plik, kliknij, aby przeglądać plik i uzyskaj nazwę domeny `Friendly URL` , czyli tutaj `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Zmień nazwę domeny z `CNAME` na `f003.backblazeb2.com` przy `cloudflare` i włącz serwer proxy.

![](//p.3ti.site/1725440896.avif)

Zmodyfikuj `cloudflare` z `SSL` → tryb szyfrowania, ustaw na `Full`

![](//p.3ti.site/1725438572.avif)

Dodaj regułę konwersji jak pokazano poniżej, umieść ją na pierwszym miejscu (pierwsza ma najniższy priorytet):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` wybierz dynamiczny i zmodyfikuj `your_bucketname` w `concat("/file/your_bucketname",http.request.uri.path)` do nazwy swojego wiadra.

Ponadto w powyższej regule konwersji `cloudflare` , `index.html` zostaje zmienione na `file/your_bucketname/index.html` , a inne konfiguracje pozostają takie same.

![](//p.3ti.site/1725441384.avif)
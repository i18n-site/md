# Instalacja & Wdrożenie

## Konfiguracja tokena

`i18n.site` zawiera wbudowane narzędzie do tłumaczenia `i18`. Proszę najpierw [kliknąć tutaj, aby zapoznać się z dokumentacją `i18` i skonfigurować token dostępu](/i18/use).

## Instalacja

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projekt demonstracyjny

Zacznijmy od projektu demonstracyjnego, aby nauczyć się, jak używać `i18n.site`.

Najpierw sklonujmy repozytorium demonstracyjne, wykonując polecenie:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Użytkownicy w Chinach kontynentalnych mogą:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Nazwa katalogu sklonowanego kodu z `demo.i18n.site` musi wynosić `md`, aby ułatwić lokalny podgląd za pomocą `docker`.

### Tłumaczenie

Najpierw przejdź do katalogu `md` i uruchom `i18n.site`, co przetłumaczy `en` na `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po uruchomieniu zostaną wygenerowane pliki tłumaczeń i pamięci podręcznej. Pamiętaj o dodaniu `git add .` do repozytorium w katalogu `md`.

### Lokalny podgląd

Zainstaluj i uruchom `docker` (użytkownicy `MAC` zalecają użycie [orbstack](https://orbstack.dev) jako środowiska wykonawczego dla `docker`).

Następnie przejdź do katalogu `docker` i uruchom `./up.sh`, a następnie odwiedź [https://127.0.0.1](https://127.0.0.1), aby wyświetlić podgląd lokalny.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publikowanie treści

`i18n.site` korzysta z architektury [aplikacji jednostronicowej](https://developer.mozilla.org/docs/Glossary/SPA), gdzie strona wejściowa i zawartość strony są wdrażane niezależnie.

Po uruchomieniu tłumaczenia w katalogu `md/out/dev` zostaną wygenerowane katalogi `htm` i `v`.

Tutaj `dev` oznacza, że jest zbudowany na podstawie pliku konfiguracyjnego `.i18n/htm/dev.yml`.

Katalog `dev` zawiera:

Katalog `htm` zawiera stronę wejściową witryny.

Katalog `v` zawiera zawartość strony z numerami wersji.

Podgląd lokalny nie bierze pod uwagę numeru wersji i skopiuje wszystkie pliki do katalogu `out/dev/v/0.1.0`.

W przypadku oficjalnej wersji zmienione pliki zostaną skopiowane do katalogu z nowym numerem wersji.

#### Użyj Opcji -C, Aby Określić Plik Konfiguracyjny

Różne pliki konfiguracyjne utworzą odpowiednie katalogi w katalogu `out`.

Na przykład `.i18n/htm/ol.yml` utworzy katalog `out/ol`.

`dev.yml` i `ol.yml` to domyślne konfiguracje.

`dev` to skrót od `development`, oznaczający środowisko deweloperskie, używane do lokalnego podglądu, a także domyślny plik konfiguracyjny.
`ol` to skrót od `online`, oznaczający środowisko online, używane do oficjalnej wersji. Jest to także domyślny plik konfiguracyjny, gdy do wydania używane są parametry wiersza poleceń `-n` do `npm`.

Możesz także utworzyć inne pliki konfiguracyjne. W wierszu poleceń użyj `--htm_conf`, aby określić nazwę pliku konfiguracyjnego, którego chcesz użyć:

Na przykład:
```
i18n.site --htm_conf yourConfig --save
```

Tutaj `--save` oznacza aktualizację numeru wersji.

#### <a rel=id href="#npm" id="npm"></a> Publikowanie treści na npmjs.com

Publikowanie treści na [npmjs.com](//npmjs.com) jest zalecanym domyślnym rozwiązaniem (patrz [Wysoka dostępność frontonu](/i18n.site/feature#ha)).

##### npm login & Publikowanie

Zainstaluj `nodejs` i zaloguj się za pomocą `npm login`.

Edytuj `md/.i18n/htm/ol.yml`, zmieniając `i18n.site` w `v: //unpkg.com/i18n.site` na swoją własną nazwę pakietu `npm`.

Możesz użyć dostępnej nazwy pakietu na [npmjs.com](//npmjs.com). Nazwa domeny witryny jako nazwa pakietu jest dobrym wyborem.

Podczas publikowania na podstawie pakietu `npm`, wartość przedrostka `v:` musi **zawsze zaczynać się od `//unpkg.com/`**. `i18n.site` zoptymalizował czas pamięci podręcznej dla ścieżki `/.v` pod tą ścieżką prefiksu, aby umożliwić natychmiastowe przeglądanie nowych wydań.

W katalogu `md` uruchom `i18n.site --npm` lub `i18n.site -n`, aby przetłumaczyć i opublikować.

Jeśli używasz środowiska ciągłej integracji do publikowania, nie musisz instalować `nodejs`. Wystarczy skopiować uprawnienia zalogowania i publikowania z `~/.npmrc` do środowiska.

Jeśli zmienisz nazwę pakietu `v:` w `ol.yml`, **upewnij się, że najpierw usuniesz `.i18n/v/ol`**, a następnie opublikuj.

##### Serwer proxy dla publikacji npm

Użytkownicy w Chinach kontynentalnych mogą napotkać problemy z siecią, które uniemożliwiają publikowanie pakietów `npm`. Można skonfigurować serwer proxy za pomocą zmiennej środowiskowej `https_proxy`.

Zakładając, że port serwera proxy to `7890`, można napisać:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Treści hostowane samodzielnie

Jeśli chcesz hostować treści samodzielnie, najpierw edytuj `md/.i18n/htm/ol.yml`, zmieniając `v: //unpkg.com/i18n.site` na prefiks adresu URL, na przykład `v: //i18n-v.xxx.com`.

Wejdź do katalogu `md` i uruchom:

```
i18n.site --htm_conf ol --save
```

Lub skrót:

```
i18n.site -c ol -s
```

Następnie skonfiguruj zawartość katalogu `md/out/ol/v` na ścieżkę prefiksu adresu URL ustawioną w `v`.

Na koniec **skonfiguruj czas pamięci podręcznej ścieżki kończącej się na `/.v` do `1s`**, w przeciwnym razie nie będzie można natychmiastowo uzyskać dostępu do nowo wydanej zawartości.

Czas pamięci podręcznej dla innych ścieżek można ustawić na rok lub dłużej, aby ograniczyć niepotrzebne żądania.

##### Hostowanie treści na S3

Hostowanie treści samodzielnie, oprócz korzystania z własnego serwera, popularną opcją jest użycie `S3` + `CDN`.

Możesz użyć [rclone](https://rclone.org), aby zalogować się do serwera `S3`, a następnie odwołać się do poniższego skryptu i zmodyfikować go, aby skopiować tylko zmiany przyrostowe do `S3` dla każdej wersji.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Pamiętaj o skonfigurowaniu `CDN`, aby czas pamięci podręcznej ścieżki kończącej się na `/.v` wynosił `1s`, w przeciwnym razie nie będzie można natychmiastowo uzyskać dostępu do nowo wydanej zawartości.

### Publikowanie strony internetowej

Stronę można wdrożyć w dowolnym miejscu, [github page](https://pages.github.com) i [cloudflare page](https://pages.cloudflare.com) to dobre wybory.

Ponieważ strona korzysta z architektury [aplikacji jednostronicowej](https://developer.mozilla.org/docs/Glossary/SPA), pamiętaj o przepisaniu ścieżek URL niezawierających `. ` do `index.html`.

Stronę wejścia serwisu WWW wystarczy wdrożyć tylko raz i nie ma potrzeby ponownego wdrażania strony wejścia serwisu WWW w celu kolejnych aktualizacji zawartości.

#### Wdrożenie na stronie github

Najpierw [kliknij tutaj, aby utworzyć organizację w github](https://github.com/account/organizations/new?plan=free). Następnie nazwa organizacji to `i18n-demo` jako przykład.

Następnie utwórz magazyn `i18n-demo.github.io` w ramach tej organizacji (zastąp `i18n-demo` utworzoną nazwą organizacji):

![](https://p.3ti.site/1721098657.avif)

Podczas publikowania treści w poprzednim artykule wygenerowano `out/ol/htm`. Proszę wejść do tego katalogu i uruchomić:

```
ln -s index.html 404.html
```


Ponieważ `github page` nie obsługuje przepisywania ścieżki URL, zamiast niej używana jest `404.html`.

Następnie uruchom następującą komendę w katalogu `htm` (pamiętaj o zastąpieniu `i18n-demo/i18n-demo.github.io.git` własnym adresem magazynu):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Po naciśnięciu kodu poczekaj, aż wdrożenie `github page` zakończy się pomyślnie (jak pokazano poniżej), zanim będziesz mógł uzyskać do niego dostęp.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Aby zobaczyć stronę demonstracyjną, zobacz:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Wdrożenie na stronie cloudflare

[cloudflare page](//pages.cloudflare.com) w porównaniu z `github page` zapewnia przepisywanie ścieżek i jest bardziej przyjazny dla Chin kontynentalnych, co jest bardziej dostępne.

Wdrożenie `cloudflare page` jest zwykle oparte na wdrożeniu `github page` powyżej.

Utwórz projekt i powiąż magazyn `i18n-demo.github.io` powyżej.

Proces pokazano na poniższym rysunku:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknij `Add Account`, aby przyznać dostęp do organizacji `i18n-demo`.

Jeśli powiązałeś magazyn innej organizacji, konieczne może być dwukrotne kliknięcie `Add Account` w celu dwukrotnej autoryzacji, zanim zostanie wyświetlona nowa organizacja.

![](https://p.3ti.site/1721118306.avif)

Następnie wybierz magazyn `i18n-demo.github.io`, następnie kliknij `Begin setup` i w kolejnych krokach korzystaj z wartości domyślnych.

![](https://p.3ti.site/1721118490.avif)

Po pierwszym powiązaniu musisz poczekać kilka minut, zanim będziesz mógł uzyskać do niego dostęp.

Po wdrożeniu możesz powiązać niestandardową nazwę domeny.

![](https://p.3ti.site/1721119459.avif)

Po powiązaniu niestandardowej nazwy domeny przejdź do nazwy domeny, aby skonfigurować przepisywanie ścieżki aplikacji jednostronicowej, jak pokazano poniżej:

![](https://p.3ti.site/1721119320.avif)

Zasady na powyższym obrazku są następujące. Zastąp `i18n.site` w pierwszym wierszu poniżej nazwą domeny, którą powiązałeś.

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

Ponadto skonfiguruj reguły pamięci podręcznej, jak pokazano poniżej, i ustaw czas trwania pamięci podręcznej na jeden miesiąc.

![](https://p.3ti.site/1721125111.avif)

Zmień nazwę domeny w drugim kroku na powyższym obrazku na nazwę domeny, którą powiązałeś.

#### Optymalizacja wdrażania stron internetowych w Chinach kontynentalnych

Jeśli chcesz uzyskać lepszą dostępność w środowisku sieciowym Chin kontynentalnych, najpierw [zarejestruj nazwę domeny](//beian.aliyun.com).

Następnie skorzystaj z obiektowej pamięci masowej dostawców usług w chmurze w Chinach kontynentalnych + `CDN` do wdrożenia zawartości w katalogu `out/ol/htm`.

Możesz użyć przetwarzania brzegowego, aby przepisać ścieżkę, aby dostosować ją do aplikacji jednostronicowych. Na przykład [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) można skonfigurować w następujący sposób:

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

Ponieważ rekord `MX` i rekord `CNAME` nie mogą współistnieć, jeśli chcesz otrzymywać wiadomości e-mail z nazwami domeny w tym samym czasie, musisz współpracować ze skryptem [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten), aby przejść z poziomu `CNAME` do rekordu `A`.

Ponadto, ze względu na wysokie koszty ruchu międzynarodowego dla dostawców chmury w Chinach kontynentalnych, aby zoptymalizować koszty, można skorzystać z [bezpłatnego rozwiązywania nazw geograficznych w Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) oraz niestandardowej nazwy domeny [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (jak na rysunku poniżej), aby rozprowadzać ruch - ruch z Chin kontynentalnych przez `CDN` Baidu, a ruch międzynarodowy przez Cloudflare.

![](https://p.3ti.site/1721119788.avif)

Te rozwiązania optymalizacji są dość skomplikowane i zostaną omówione w przyszłych rozdziałach.

#### Przekierowanie ogólnego adresu domeny

Jeśli używasz `i18n.site` do stworzenia swojej głównej strony internetowej, zazwyczaj musisz skonfigurować przekierowanie ogólnego adresu domeny, aby ruch z `*.xxx.com` (w tym `www.xxx.com`) był przekierowany na `xxx.com`.

To wymaganie można zrealizować za pomocą `EdgeScript` w Alibaba Cloud `CDN` ([dokumentacja w języku angielskim](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [dokumentacja w języku chińskim](https://help.aliyun.com/zh/cdn/developer-reference/edgescript))

Dodaj nazwę domeny w [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) i skieruj `*.xxx.com` do `CNAME` w Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

Na przykład, konfiguracja przekierowania ogólnego adresu domeny dla `*.i18n.site` wygląda następująco:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Wdrożenie za pomocą nginx

Dodaj podobną konfigurację w sekcji `server` w nginx, zmieniając `/root/i18n/md/out/ol/htm` na ścieżkę do swojego projektu `out/ol/htm`:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktura katalogów

#### `public`

Pliki statyczne strony, takie jak `favicon.ico`, `robots.txt` itp.

Ikony można wygenerować za pomocą [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

W katalogu `.i18n` znajdują się pliki konfiguracyjne, pamięć podręczna tłumaczeń itp. dla `i18n.site`. Szczegóły znajdziesz w następnym rozdziale [„Konfiguracja”](/i18n.site/conf).

#### `en`

Katalog języka źródłowego, odpowiadający `en` w `fromTo` w pliku `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Konfiguracja tłumaczeń dostępna jest [tutaj](/i18/use).
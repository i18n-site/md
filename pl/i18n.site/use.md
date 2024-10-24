# Zainstaluj i wdroż

## Instalacja

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfiguracja tokenów

`i18n.site` zawiera wbudowane narzędzie do tłumaczeń `i18`, najpierw [odwiedź dokument konfiguracji tokenów `i18`](/i18/use).

## Projekt demonstracyjny

Zacznijmy od projektu demonstracyjnego, aby nauczyć się, jak używać `i18n.site`.

Najpierw sklonuj repozytorium demonstracyjne i uruchom polecenie w następujący sposób:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Użytkownicy w Chinach kontynentalnych mogą:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Nazwa katalogu klonu kodu `demo.i18n.site` musi wynosić `md`, aby ułatwić lokalny podgląd za pomocą `docker`.

### Tłumaczenia

Najpierw przejdź do katalogu `md` i uruchom `i18n.site`, co przetłumaczy `en` na `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po uruchomieniu zostaną wygenerowane pliki tłumaczeń i pamięci podręcznej. Pamiętaj o dodaniu ich do repozytorium za pomocą `git add .` w katalogu `md`.

### Podgląd lokalny

Zainstaluj i uruchom `docker` (użytkownicy `MAC` mogą zalecić użycie [orbstack](https://orbstack.dev) jako środowiska wykonawczego dla `docker`).

Następnie przejdź do katalogu `docker` i uruchom `./up.sh`, a następnie odwiedź [https://127.0.0.1](https://127.0.0.1), aby wyświetlić podgląd lokalnie.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publikowanie treści

`i18n.site` wykorzystuje architekturę [aplikacji jednostronicowej](https://developer.mozilla.org/docs/Glossary/SPA), a strona wejściowa oraz zawartość witryny są wdrażane niezależnie.

Po uruchomieniu powyższego tłumaczenia, katalogi `htm` i `v` zostaną wygenerowane w katalogu `md/out/dev`.

Tutaj `dev` oznacza, że jest to zbudowane na podstawie pliku konfiguracyjnego `.i18n/htm/dev.yml`.

Katalog `dev`:

Katalog `htm` zawiera stronę wejściową witryny.

Katalog `v` zawiera zawartość witryny z numerami wersji.

Podgląd lokalny nie bierze pod uwagę numeru wersji i skopiuje wszystkie pliki do katalogu `out/dev/v/0.1.0`.

W przypadku wersji oficjalnej, zmienione pliki zostaną skopiowane do nowego katalogu z nowym numerem wersji.

#### Określ plik konfiguracyjny za pomocą `-c`

Różne pliki konfiguracyjne utworzą odpowiednie katalogi w katalogu `out`.

Na przykład `.i18n/htm/ol.yml` utworzy katalog `out/ol`.

`dev.yml` i `ol.yml` to domyślne konfiguracje.

`dev` to skrót od `development`, wskazujący środowisko programistyczne, używane do lokalnego podglądu, a także domyślny plik konfiguracyjny.
`ol` to skrót od `online`, wskazujący środowisko online, używane do oficjalnej wersji. Jest to także domyślny plik konfiguracyjny, gdy używane są parametry wiersza poleceń `-n` do `npm`.

Możesz także utworzyć inne pliki konfiguracyjne. Użyj `--htm_conf` w wierszu poleceń, aby określić nazwę pliku konfiguracyjnego, którego chcesz użyć:

Na przykład:
```
i18n.site --htm_conf yourConfig --save
```

Tutaj `--save` oznacza numer wersji aktualizacji.

#### <a rel=id href="#npm" id="npm"></a> Publikowanie treści na npmjs.com

Publikowanie treści w formacie [npmjs.com](//npmjs.com) jest zalecanym rozwiązaniem domyślnym (zobacz [Wysoka dostępność frontonu](/i18n.site/feature#ha)).

##### npm login i publikowanie

Zainstaluj `nodejs`, zaloguj się za pomocą `npm login`.

Edytuj plik `md/.i18n/htm/ol.yml` i zmień wartość z [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) na nazwę własnego pakietu `npm`, np. `YOUR_NPM_PACKAGE`, przy czym każda wolna nazwa pakietu na [npmjs.com](//npmjs.com) będzie odpowiednia.

Poźniej zmodyfikuj plik `md/.i18n/htm/ol.package.json`

Uruchom `i18n.site --npm` lub `i18n.site -n` w katalogu `md`, aby przetłumaczyć i opublikować.

Jeśli używasz środowiska ciągłej integracji do publikowania, nie ma potrzeby instalowania `nodejs`, po prostu skopiuj zalogowane i uprawnione `~/.npmrc` do tego środowiska.

Jeśli zmodyfikujesz nazwę pakietu `v:` w `ol.yml`, **pamiętaj, aby najpierw usunąć `.i18n/v/ol`** przed publikowaniem.

##### Serwer proxy do publikowania przez npm

Użytkownicy w Chinach kontynentalnych, którzy napotkają problemy z siecią i nie mogą opublikować pakietów `npm`, mogą skonfigurować zmienną środowiskową `https_proxy`, aby skonfigurować serwer proxy.

Zakładając, że port serwera proxy to `7890`, możesz napisać:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Treści hostowane samodzielnie

Jeśli chcesz hostować treści samodzielnie, najpierw edytuj `md/.i18n/htm/ol.yml` i zmień `v: //unpkg.com/i18n.site` na prefiks adresu URL, na przykład `v: //i18n-v.xxx.com`.

Wejdź do katalogu `md` i uruchom:

```
i18n.site --htm_conf ol --save
```

lub skrót

```
i18n.site -c ol -s
```

Następnie skonfiguruj zawartość katalogu `md/out/ol/v` na ścieżkę prefiksu adresu URL ustawioną w `v:`.

Na koniec **skonfiguruj czas pamięci podręcznej ścieżki kończącej się na `/.v` do `1s`**, w przeciwnym razie nie będzie można uzyskać natychmiastowego dostępu do nowo wydanej zawartości.

Czas pamięci podręcznej dla innych ścieżek można ustawić na rok lub dłużej, aby ograniczyć niepotrzebne żądania.

##### Hostowanie zawartości na S3

Aby hostować zawartość samodzielnie, oprócz korzystania z własnego serwera, inną popularną opcją jest użycie `S3` + `CDN`.

Możesz użyć [rclone](https://rclone.org) do zalogowania się do serwera `S3`, następnie odwołaj się do poniższego skryptu i zmodyfikuj go, aby skopiować tylko zmiany przyrostowe do `S3` dla każdej wersji.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Pamiętaj o skonfigurowaniu `CDN`, aby czas pamięci podręcznej ścieżki kończącej się na `/.v` wynosił `1s`, w przeciwnym razie nie będzie można uzyskać natychmiastowego dostępu do nowo wydanej zawartości.

### Publikowanie strony internetowej

Stronę można wdrożyć w dowolnym miejscu, [github page](https://pages.github.com) i [cloudflare page](https://pages.cloudflare.com) to dobry wybór.

Ponieważ witryna wykorzystuje architekturę [aplikacji jednostronicowej](https://developer.mozilla.org/docs/Glossary/SPA), pamiętaj o przepisaniu ścieżek URL niezawierających cyfr `. ` do `index.html`.

Strona wejściowa witryny musi być wdrożona tylko raz i nie wymaga ponownego wdrożenia w przypadku kolejnych aktualizacji zawartości.

#### Wdrożenie na stronie github

Najpierw [kliknij tutaj, aby utworzyć organizację na github](https://github.com/account/organizations/new?plan=free). Następująca nazwa organizacji to `i18n-demo` jako przykład.

Następnie utwórz magazyn `i18n-demo.github.io` w ramach tej organizacji (zastąp `i18n-demo` nazwą utworzonej organizacji):

![](https://p.3ti.site/1721098657.avif)

Podczas publikowania treści z poprzedniego artykułu wygenerowano `out/ol/htm`. Wejdź do tego katalogu i uruchom:

```
ln -s index.html 404.html
```


Ponieważ `github page` nie obsługuje przepisywania ścieżek URL, zamiast niej używana jest wartość `404.html`.

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

[cloudflare page](//pages.cloudflare.com) w porównaniu do `github page` zapewnia przepisywanie ścieżek i jest bardziej przyjazny dla Chin kontynentalnych, co czyni go lepszym wyborem.

Wdrożenie `cloudflare page` jest zwykle oparte na wdrożeniu `github page` powyżej.

Utwórz projekt i powiąż magazyn `i18n-demo.github.io` powyżej.

Proces pokazano na poniższym rysunku:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknij `Add Account`, aby przyznać dostęp do organizacji `i18n-demo`.

Jeśli powiązałeś magazyn innej organizacji, może być konieczne dwukrotne kliknięcie `Add Account`, aby dwukrotnie autoryzować, zanim zostanie wyświetlona nowa organizacja.

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
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ponadto skonfiguruj reguły pamięci podręcznej, jak pokazano poniżej, i ustaw czas trwania pamięci podręcznej na jeden miesiąc.

![](https://p.3ti.site/1721125111.avif)

Zmień nazwę domeny w drugim kroku na powyższym obrazku na nazwę domeny, którą powiązałeś.

#### Optymalizacja wdrażania stron internetowych w Chinach kontynentalnych

Jeśli chcesz uzyskać lepszą dostępność w środowisku sieciowym Chin kontynentalnych, najpierw [zarejestruj nazwę domeny](//beian.aliyun.com).

Następnie skorzystaj z obiektowej pamięci masowej dostawców usług w chmurze w Chinach kontynentalnych + `CDN`, aby wdrożyć następującą zawartość `out/ol/htm`.

Możesz użyć przetwarzania brzegowego, aby przepisać ścieżki, aby dostosować je do aplikacji jednostronicowych. Na przykład [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) można skonfigurować w następujący sposób:

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

Ponadto, ze względu na wysokie koszty ruchu międzynarodowego dla dostawców chmury w Chinach kontynentalnych, aby zoptymalizować koszty, można skorzystać z [bezpłatnej analizy regionalnej Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) oraz niestandardowej nazwy domeny [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (jak na poniższym rysunku), aby realizować rozdział ruchu ── ruch z Chin kontynentalnych przez Baidu Cloud `CDN`, a ruch międzynarodowy przez Cloudflare.

![](https://p.3ti.site/1721119788.avif)

Te rozwiązania do optymalizacji są dość skomplikowane i zostaną omówione w osobnych rozdziałach w przyszłości.

#### Przekierowanie dla domen ogólnych

Jeśli korzystasz z `i18n.site` do stworzenia głównej strony internetowej, zazwyczaj musisz skonfigurować przekierowanie dla domen ogólnych, aby ruch z `*.xxx.com` (w tym `www.xxx.com`) był przekierowany na `xxx.com`.

To wymaganie można zrealizować za pomocą `EdgeScript` w Alibaba Cloud `CDN` ([dokumentacja w języku angielskim](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [dokumentacja w języku chińskim](https://help.aliyun.com/zh/cdn/developer-reference/edgescript))

Dodaj nazwę domeny w [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) i ustaw `CNAME` dla domeny `*.xxx.com` w Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

Na przykład, konfiguracja przekierowania dla domen ogólnych `*.i18n.site` wygląda następująco:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
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

Pliki statyczne strony internetowej, takie jak `favicon.ico`, `robots.txt` itp.

Ikony można wygenerować za pomocą [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

W katalogu `.i18n` znajdują się pliki konfiguracyjne, pamięć podręczna tłumaczeń itp. dla `i18n.site`. Szczegóły znajdziesz w następnym rozdziale [„Konfiguracja”](/i18n.site/conf).

#### `en`

Katalog języka źródłowego, odpowiadający `en` w `fromTo` w pliku konfiguracyjnym `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Proszę zapoznać się z konfiguracją tłumaczenia [i18](/i18/use).
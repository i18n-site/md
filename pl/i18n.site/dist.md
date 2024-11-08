# Wdrożenie I Online

`i18n.site` przyjmuje architekturę [aplikacji jednostronicowej](https://developer.mozilla.org/docs/Glossary/SPA) , a strona wejściowa witryny i zawartość witryny są wdrażane niezależnie.

Po uruchomieniu powyższego tłumaczenia katalogi `htm` i `v` zostaną wygenerowane w katalogu `md/out/dev` .

Tutaj `dev` oznacza, że jest zbudowany w oparciu o plik konfiguracyjny `.i18n/htm/dev.yml` .

`dev` katalog :

Katalog `htm` to strona wejściowa witryny internetowej.

Katalog `v` zawiera zawartość strony internetowej wraz z numerami wersji.

Podgląd lokalny nie przejmuje się numerem wersji i skopiuje wszystkie pliki do katalogu `out/dev/v/0.1.0` .

W przypadku oficjalnej wersji zmienione pliki zostaną skopiowane do katalogu z nowym numerem wersji.

## Określ Plik Konfiguracyjny Z Wartością `-c`

Różne pliki konfiguracyjne utworzą odpowiednie katalogi w katalogu `out` .

Na przykład `.i18n/htm/main.yml` utworzy katalog `out/main` .

`dev.yml` i `main.yml` to konfiguracje domyślne.

`dev` to skrót od `development` , wskazujący środowisko programistyczne, używane do lokalnego podglądu, a także domyślny plik konfiguracyjny.
`ol` to skrót od `online` , wskazujący środowisko online, które jest używane w oficjalnej wersji. Jest to także domyślny plik konfiguracyjny, gdy do wydania używane są parametry wiersza poleceń `-n` do `npm` .

Możesz także utworzyć inne pliki konfiguracyjne. Użyj `--htm_conf` w wierszu poleceń, aby określić nazwę pliku konfiguracyjnego, którego chcesz użyć:

Na przykład:
```
i18n.site --htm_conf dist --save
```

Tutaj `--save` oznacza numer wersji wersji aktualizacji.

## <a rel=id href="#npm" id="npm"></a> Publikuj treści na npmjs.com

Publikowanie treści w formacie [npmjs.com](//npmjs.com) jest zalecanym rozwiązaniem domyślnym (zobacz [Wysoka dostępność frontonu](/i18n.site/feature#ha) ).

### Zaloguj Się & npm

Zainstaluj `nodejs` , zaloguj się za pomocą `npm login` .

Edytuj `md/.i18n/htm/main.yml` i zmień wartość z [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` jako własną nazwę pakietu `npm` [npmjs.com](//npmjs.com) będzie każda niezajęta nazwa pakietu.

Następnie zmodyfikuj `md/.i18n/htm/main.package.json`

Uruchom `i18n.site --npm` lub `i18n.site -n` w katalogu `md` , aby przetłumaczyć i opublikować.

Jeśli do publikowania używasz środowiska ciągłej integracji, nie ma potrzeby instalowania `nodejs` Wystarczy skopiować uprawnienia zalogowania i publikowania `~/.npmrc` do środowiska.

Jeśli zmodyfikujesz nazwę pakietu `v:` na `main.yml` , **pamiętaj, aby najpierw usunąć `.i18n/v/main`** , a następnie opublikować.

#### Serwer Proxy Opublikowany Przez npm

Jeśli użytkownicy w Chinach kontynentalnych napotkają problemy z siecią i nie mogą opublikować `npm` pakietów, mogą ustawić zmienną środowiskową `https_proxy` aby skonfigurować serwer proxy.

Zakładając, że port serwera proxy to `7890` , możesz napisać:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Treści Hostowane Samodzielnie

Jeśli chcesz samodzielnie hostować treść, najpierw edytuj `md/.i18n/htm/main.yml` i zmień `v: //unpkg.com/i18n.site` na prefiks adresu URL, na przykład `v: //i18n-v.xxx.com` .

Wejdź do katalogu `md` i uruchom

```
i18n.site --htm_conf ol --save
```

lub skrót

```
i18n.site -c ol -s
```

Następnie skonfiguruj zawartość katalogu `md/out/main/v` na ścieżkę prefiksu adresu URL ustawioną w `v:` .

Na koniec **skonfiguruj czas pamięci podręcznej ścieżki kończącej się na `/.v` do `1s`** , w przeciwnym razie nie będzie można uzyskać natychmiastowego dostępu do nowo wydanej zawartości.

Czas pamięci podręcznej dla innych ścieżek można ustawić na rok lub dłużej, aby ograniczyć niepotrzebne żądania.

## Hostuj Zawartość W s3

Aby samodzielnie hostować zawartość, oprócz korzystania z własnego serwera, inną popularną opcją `CDN` użycie `S3` + .

Możesz użyć [rclone](https://rclone.org) aby zalogować się do serwera `S3` , następnie odwołaj się do poniższego skryptu i zmodyfikuj go, a następnie skopiuj tylko zmiany przyrostowe do `S3` dla każdej wersji.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Pamiętaj o skonfigurowaniu `CDN` , aby czas pamięci podręcznej ścieżki kończącej się na `/.v` wynosił `1s` , w przeciwnym razie nie będzie można uzyskać natychmiastowego dostępu do nowo wydanej zawartości.

## Opublikować Stronę Internetową

Witrynę można wdrożyć w dowolnym miejscu, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) to dobry wybór.

Ponieważ witryna wykorzystuje architekturę [aplikacji jednostronicowej](https://developer.mozilla.org/docs/Glossary/SPA) , pamiętaj o przepisaniu ścieżek URL niezawierających cyfr `. ` do `index.html` .

Stronę wejścia serwisu WWW wystarczy wdrożyć tylko raz i nie ma potrzeby ponownego wdrażania strony wejścia serwisu WWW w celu kolejnych aktualizacji zawartości.

### Wdróż Na Stronie github

Najpierw [kliknij tutaj github aby utworzyć organizację](https://github.com/account/organizations/new?plan=free) . Następująca nazwa organizacji to `i18n-demo` jako przykład.

Następnie utwórz magazyn `i18n-demo.github.io` w ramach tej organizacji (zastąp `i18n-demo` utworzoną nazwą organizacji):

![](https://p.3ti.site/1721098657.avif)

Podczas publikowania treści z poprzedniego artykułu wygenerowano `out/main/htm` Proszę wejść do tego katalogu i uruchomić :

```
ln -s index.html 404.html
```


Ponieważ `github page` nie obsługuje przepisywania ścieżki URL, zamiast niej używana jest wartość `404.html` .

Następnie uruchom następującą komendę w katalogu `htm` (pamiętaj o zastąpieniu `i18n-demo/i18n-demo.github.io.git` własnym adresem magazynu) :

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

### Wdróż Na Stronie cloudflare

[cloudflare page](//pages.cloudflare.com) W porównaniu z `github page` zapewnia przepisywanie ścieżek i jest bardziej przyjazny dla Chin kontynentalnych i jest bardziej dostępny.

Wdrożenie `cloudflare page` jest zwykle oparte na wdrożeniu `github page` powyżej.

Utwórz projekt i powiąż magazyn `i18n-demo.github.io` powyżej.

Proces pokazano na poniższym rysunku:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknij `Add Account` aby przyznać dostęp do organizacji `i18n-demo` .

Jeśli powiązałeś magazyn innej organizacji, konieczne może być dwukrotne kliknięcie `Add Account` w celu dwukrotnej autoryzacji, zanim zostanie wyświetlona nowa organizacja.

![](https://p.3ti.site/1721118306.avif)

Następnie wybierz magazyn `i18n-demo.github.io` , następnie kliknij `Begin setup` i w kolejnych krokach korzystaj z wartości domyślnych.

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

### Optymalizacja Wdrażania Stron Internetowych W Chinach Kontynentalnych

Jeśli chcesz uzyskać lepszą dostępność w środowisku sieciowym Chin kontynentalnych, najpierw [zarejestruj nazwę domeny](//beian.aliyun.com) .

Następnie skorzystaj z obiektowej pamięci masowej dostawców usług w chmurze w Chinach kontynentalnych + `CDN` Wdróż następującą zawartość `out/main/htm` .

Możesz użyć przetwarzania brzegowego, aby przepisać ścieżkę, aby dostosować ją do aplikacji jednostronicowych. Na przykład [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) można skonfigurować w następujący sposób:

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
  // Możesz ustawić nagłówek odpowiedzi, aby debugować dane wyjściowe, na przykład out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Ponieważ rekord `MX` i rekord `CNAME` nie mogą współistnieć, jeśli chcesz otrzymywać wiadomości e-mail z nazwami domeny w tym samym czasie, musisz współpracować ze skryptem [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) , aby przejść z poziomu `CNAME` do rekordu `A` .

Ponadto, ponieważ opłaty za ruch zagraniczny dostawców usług chmurowych w Chinach kontynentalnych są stosunkowo drogie, jeśli chcesz zoptymalizować koszty, możesz skorzystać [z bezpłatnej rozdzielczości geograficznej Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i niestandardowej nazwy domeny [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (jak pokazano poniżej). przekierowanie ruchu──Routing ruchu w Chinach kontynentalnych Baidu Cloud `CDN` , ruch międzynarodowy kosztuje cloudflare .

![](https://p.3ti.site/1721119788.avif)

Te rozwiązania optymalizacji wdrażania są bardziej złożone i zostaną omówione w przyszłości w osobnych rozdziałach.

### Ogólne Przekierowanie Nazwy Domeny

Jeśli używasz `i18n.site` do wygenerowania witryny jako swojej głównej witryny, zwykle musisz skonfigurować przekierowanie pan-domenowe, czyli przekierować dostęp do `*.xxx.com` (w tym `www.xxx.com` ) do `xxx.com` .

Wymaganie to można spełnić za pomocą Alibaba Cloud `CDN` `EdgeScript` ( [dokument angielski](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokument chiński](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Dodaj nazwę domeny w [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) i wskaż nazwę domeny `*.xxx.com` `CNAME` w Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Na przykład konfiguracja przekierowania nazw domenowych o wartości `*.i18n.site` na powyższym obrazku wygląda następująco:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Wdróż Za Pomocą nginx

Proszę dodać konfigurację podobną do poniższej w akapicie `server` nginx Proszę zmienić `/root/i18n/md/out/main/htm` na ścieżkę własnego projektu `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Na Podstawie `github action` Ciągłej Integracji

Aby skonfigurować `github action` , możesz skorzystać z poniższych informacji:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Jak widać w konfiguracji, ten przepływ pracy jest wyzwalany podczas wypychania do gałęzi `main` i gałęzi `dist` .

Przepływ pracy użyje pliku konfiguracyjnego odpowiadającego nazwie oddziału do opublikowania dokumentu. Tutaj odpowiednio `.i18n/htm/main.yml` i `.i18n/htm/dist.yml` zostaną użyte jako konfiguracja publikowania.

Zalecamy następujące najlepsze praktyki dotyczące procesu udostępniania dokumentów:

Kiedy zmiany zostaną przesłane do gałęzi `main` , dokument zostanie uruchomiony w celu zbudowania i wdrożenia na stacji podglądu (stacja podglądu jest dostępna [github page](//pages.github.com) ).

Po potwierdzeniu, że dokument jest poprawny w witrynie podglądu, kod zostanie scalony i przesłany do gałęzi `dist` , a oficjalna kompilacja i wdrożenie zostaną uruchomione online.

Oczywiście wdrożenie powyższego procesu wymaga napisania większej liczby konfiguracji.

Możesz odwołać się do rzeczywistego projektu [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) aby uzyskać skrypty przepływu pracy.

`secrets.I18N_SITE_TOKEN` i `secrets.NPM_TOKEN` w konfiguracji wymagają skonfigurowania tajnych zmiennych w bazie kodu.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` to token publikowania pakietu `npm` w konfiguracji. Odwiedź [npmjs.com](//npmjs.com) i utwórz token z uprawnieniami do publikowania (jak pokazano poniżej).

![](//p.3ti.site/1730969906.avif)


## Struktura Katalogów

### `public`

Pliki statyczne strony internetowej, takie jak `favicon.ico` , `robots.txt` itp.

Pliki ikon tutaj można wygenerować za pomocą [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

W katalogu `.i18n` znajdują się pliki konfiguracyjne, pamięć podręczna tłumaczeń itp. `i18n.site` Szczegóły znajdziesz w następnym rozdziale [„Konfiguracja”](/i18n.site/conf) .

### `en`

Katalog języka źródłowego, odpowiadający plikowi konfiguracyjnemu `en` z `fromTo` w `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Proszę zapoznać się z konfiguracją tłumaczenia [i18](/i18/use)
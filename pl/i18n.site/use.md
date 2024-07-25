# Zainstaluj &

## Token Konfiguracji

`i18n.site` Narzędzie do tłumaczenia `i18` jest wbudowane. [Kliknij tutaj, aby zapoznać się z dokumentem `i18` i skonfigurować token dostępu](/i18/use) .

## Zainstalować

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projekt Demonstracyjny

Zacznijmy od projektu demonstracyjnego i nauczmy się korzystać `i18n.site` .

Najpierw klonujemy repozytorium demonstracyjne i uruchamiamy polecenie w następujący sposób:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Użytkownicy w Chinach kontynentalnych mogą:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Nazwa katalogu podstawowego klonu kodu musi być `md` `demo.i18n.site` aby umożliwić lokalny podgląd za pomocą `docker` .

### Tłumaczyć

Najpierw wejdź do katalogu `md` i uruchom `i18n.site` , co przetłumaczy `en` na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po uruchomieniu zostaną wygenerowane pliki tłumaczeń i pamięci podręcznej. Pamiętaj o dodaniu ich do repozytorium `git add . ` w katalogu `md` .

### Podgląd Lokalny

Zainstaluj i uruchom `docker` ( `MAC` zalecają używanie [orbstack](https://orbstack.dev) jako środowiska uruchomieniowego `docker` ).

Następnie wejdź do katalogu `docker` i uruchom `./up.sh` , a następnie odwiedź [https://127.0.0.1](https://127.0.0.1) , aby wyświetlić podgląd lokalnie.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Treść Postu

`i18n.site` Przyjmuje architekturę [aplikacji jednostronicowej](https://developer.mozilla.org/docs/Glossary/SPA) , a strona wejściowa witryny i zawartość witryny są wdrażane niezależnie.

Po uruchomieniu powyższego tłumaczenia, w katalogu `md/out/dev` zostaną wygenerowane katalogi `htm` i `v` .

Tutaj `dev` wskazuje, że jest zbudowany w oparciu o plik `.i18n/htm/dev.yml` .

`dev` Pod treścią :

`htm` Pod katalogiem znajduje się strona wejściowa witryny.

`v` Katalog zawiera zawartość strony wraz z numerem wersji.

Lokalny podgląd skopiuje wszystkie pliki do katalogu `out/dev/v/0.1.0` , niezależnie od numeru wersji.

W przypadku oficjalnej wersji zmienione pliki zostaną skopiowane do katalogu z nowym numerem wersji.

#### Użyj Opcji -C, Aby Określić Plik Konfiguracyjny

Różne pliki konfiguracyjne utworzą odpowiednie katalogi w katalogu `out` .

Na przykład `.i18n/htm/ol.yml` utworzy katalog `out/ol` .

`dev.yml` i `ol.yml` to konfiguracje domyślne.

`dev` to skrót od `development` , który reprezentuje środowisko programistyczne, jest używany do lokalnego podglądu i jest także domyślnym plikiem konfiguracyjnym.
`ol` to skrót od `online` , który reprezentuje środowisko online, jest używany w oficjalnych wydaniach i jest także domyślnym plikiem konfiguracyjnym podczas publikowania w `npm` przy użyciu parametru wiersza poleceń `-n` .

Możesz także utworzyć inne pliki konfiguracyjne. Użyj `--htm_conf` w wierszu poleceń, aby określić nazwę pliku konfiguracyjnego:

Na przykład:
```
i18n.site --htm_conf yourConfig --save
```

Tutaj `--save` wskazuje numer wersji aktualizacji.

#### <a rel=id href="#npm" id="npm"></a> Publikuj treści na npmjs.com

Publikowanie treści w formacie [npmjs.com](//npmjs.com) jest zalecanym rozwiązaniem domyślnym (zobacz [Wysoka dostępność frontonu](/i18n.site/feature#ha) ).

##### npm login & Uwolnienie

Zainstaluj `nodejs` użyj `npm login` , aby się zalogować.

Edytuj `md/.i18n/htm/ol.yml` zmień `i18n.site` w `v: //unpkg.com/i18n.site` na własne `npm` nazwa pakietu.

Po prostu użyj nazwy wolnego pakietu w domenie [npmjs.com](//npmjs.com) . Używanie nazwy domeny witryny jako nazwy pakietu jest dobrym wyborem.

Podczas publikowania w oparciu o pakiet `npm` , **pamiętaj o użyciu `//unpkg.com/`** jako przedrostka wartości `v:` . Czas pamięci podręcznej `i18n.site` pod tą ścieżką przedrostka `/.v` został specjalnie zoptymalizowany, aby umożliwić terminowe przeglądanie nowych wydań.

Aby przetłumaczyć i opublikować, uruchom `i18n.site --npm` lub `i18n.site -n` w katalogu `md`

Jeśli do publikowania używasz środowiska ciągłej integracji, nie ma potrzeby jego instalowania `nodejs` Po prostu skopiuj zalogowane i opublikowane uprawnienia `~/.npmrc` do środowiska.

Jeśli zmodyfikujesz nazwę pakietu w `v:` in `ol.yml` , **pamiętaj, aby najpierw usunąć `.i18n/v/ol`** , a następnie opublikować go.

##### Serwer Proxy Opublikowany Przez npm

Jeśli użytkownicy w Chinach kontynentalnych napotkają problemy z siecią i nie będą mogli opublikować pakietu `npm` , mogą ustawić zmienną środowiskową `https_proxy` , aby skonfigurować serwer proxy.

Zakładając, że port Twojego serwera proxy to `7890` możesz napisać:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Treści Hostowane Samodzielnie

Jeśli chcesz samodzielnie hostować treść, najpierw edytuj `md/.i18n/htm/ol.yml` i zmień `v: //unpkg.com/i18n.site` na prefiks adresu URL, np. `v: //i18n-v.xxx.com` .

Wejdź do katalogu `md` i uruchom

```
i18n.site --htm_conf ol --save
```

lub skrót

```
i18n.site -c ol -s
```

Następnie skonfiguruj zawartość katalogu `md/out/ol/v` na ścieżkę z prefiksem adresu URL ustawioną w `v:` .

Na koniec **skonfiguruj czas pamięci podręcznej ścieżki kończącej się na `/.v` na `1s`** , w przeciwnym razie nie będzie można uzyskać natychmiastowego dostępu do nowo wydanej zawartości.

Czas pamięci podręcznej dla innych ścieżek można ustawić na rok lub dłużej, aby ograniczyć niepotrzebne żądania.

##### Hostuj Zawartość W s3

Aby samodzielnie hostować zawartość, oprócz korzystania z własnego serwera, inną popularną opcją jest `CDN` `S3` +

Możesz użyć serwera [rclone](https://rclone.org) Login `S3` , a następnie zapoznać się z poniższym skryptem i zmodyfikować go, a przy każdej publikacji kopiować tylko przyrostowe zmiany do `S3` .

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Pamiętaj o skonfigurowaniu `CDN` aby czas pamięci podręcznej ścieżki kończącej się na `/.v` wynosił `1s` , w przeciwnym razie nie będziesz mógł natychmiast uzyskać dostępu do nowo wydanej zawartości.

### Opublikować Stronę Internetową

Witrynę można wdrożyć w dowolnym miejscu [github page](https://pages.github.com) a [cloudflare page](https://pages.cloudflare.com) to dobry wybór.

Ponieważ witryna przyjmuje architekturę [aplikacji jednostronicowej](https://developer.mozilla.org/docs/Glossary/SPA) , pamiętaj o przepisaniu ścieżki URL niezawierającej `. ` na `index.html` .

Stronę wejścia serwisu WWW wystarczy wdrożyć tylko raz i nie ma potrzeby ponownego wdrażania strony wejścia serwisu WWW w celu kolejnych aktualizacji zawartości.

#### Wdróż Na Stronie github

Najpierw [kliknij tutaj github aby utworzyć organizację](https://github.com/account/organizations/new?plan=free) . Poniższa nazwa organizacji to `i18n-demo` .

Następnie utwórz magazyn w ramach tej organizacji `i18n-demo.github.io` (Zastąp `i18n-demo` nazwą utworzonej organizacji):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Podczas publikowania treści z poprzedniego artykułu została ona wygenerowana `out/ol/htm` Proszę wejść do tego katalogu i uruchomić :

```
ln -s index.html 404.html
```


Ponieważ `github page` nie obsługuje przepisywania ścieżki URL, dlatego zamiast tego używany jest `404.html` .

Następnie uruchom następującą komendę w katalogu `htm` (pamiętaj o zastąpieniu `i18n-demo/i18n-demo.github.io.git` własnym adresem magazynu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Po naciśnięciu kodu poczekaj, aż wdrożenie `github page` zakończy się pomyślnie (jak pokazano poniżej), a następnie uzyskasz do niego dostęp.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Aby zobaczyć stronę demonstracyjną, zobacz:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Wdróż Na Stronie cloudflare

[cloudflare page](//pages.cloudflare.com) W porównaniu z `github page` zapewnia przepisywanie ścieżek i jest bardziej przyjazny dla Chin kontynentalnych i jest bardziej dostępny.

`cloudflare page` Wdrożenie zwykle opiera się na wdrożeniu `github page` powyżej.

Utwórz projekt i powiąż powyższy magazyn `i18n-demo.github.io`

Proces pokazano na poniższym rysunku:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Kliknij `Add Account` , aby przyznać dostęp do `i18n-demo` .

Jeśli powiązałeś magazyn innej organizacji, konieczne może być dwukrotne kliknięcie `Add Account` w celu dwukrotnej autoryzacji, zanim zostanie wyświetlona nowa organizacja.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Następnie wybierz `i18n-demo.github.io` Magazyn, następnie kliknij `Begin setup` i w kolejnych krokach użyj wartości domyślnych.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Po pierwszym powiązaniu musisz poczekać kilka minut, zanim będziesz mógł uzyskać do niego dostęp.

Po wdrożeniu możesz powiązać niestandardową nazwę domeny.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Po powiązaniu niestandardowej nazwy domeny przejdź do nazwy domeny, aby skonfigurować przepisywanie ścieżki aplikacji jednostronicowej, jak pokazano poniżej:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Zasady na powyższym obrazku są następujące. Proszę zastąpić `i18n.site` w pierwszym wierszu poniżej nazwą domeny powiązaną z Tobą.

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

<img alt="" src="https://p.3ti.site/1721125111.avif">

Zmień nazwę domeny w drugim kroku na powyższym obrazku na nazwę domeny, którą powiązałeś.

#### Optymalizacja Wdrażania Stron Internetowych W Chinach Kontynentalnych

Jeśli chcesz uzyskać lepszą dostępność w środowisku sieciowym Chin kontynentalnych, najpierw [zarejestruj nazwę domeny](//beian.aliyun.com) .

Następnie skorzystaj z obiektowej pamięci masowej dostawców usług w chmurze w `CDN` `out/ol/htm` +

Możesz użyć przetwarzania brzegowego, aby przepisać ścieżkę w celu dostosowania do aplikacji jednostronicowych, takich jak [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Można to skonfigurować w następujący sposób:

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

Ponieważ rekordy `MX` i `CNAME` rekordy nie mogą współistnieć, jeśli chcesz otrzymywać wiadomości e-mail z nazwami domen w tym samym czasie, musisz współpracować ze skryptem [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) , aby spłaszczyć `CNAME` w `A` record.

Ponadto, ponieważ opłaty za ruch zagraniczny dostawców usług chmurowych w Chinach kontynentalnych są stosunkowo drogie, jeśli chcesz zoptymalizować koszty, możesz skorzystać z [bezpłatnej rozdzielczości geograficznej Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) i niestandardowej nazwy domeny [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (jak pokazano poniżej). przekierowanie ruchu──Ruch w Chinach kontynentalnych Baidu Cloud `CDN` ruch międzynarodowy kosztuje cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Te rozwiązania optymalizacji wdrażania są bardziej złożone i zostaną omówione w przyszłości w osobnych rozdziałach.

#### Ogólne Przekierowanie Nazwy Domeny

Jeśli używasz `i18n.site` do generowania strony internetowej jako swojej głównej strony internetowej, zazwyczaj musisz skonfigurować przekierowanie w całej domenie, czyli przekierowanie `*.xxx.com` (w tym `www.xxx.com` ) dostępu do `xxx.com` .

Wymaganie to można spełnić za pomocą `EdgeScript` Alibaba `CDN` ( [dokument angielski](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokument chiński](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Dodaj nazwę domeny w [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) i wskaż `*.xxx.com` domeny na `CNAME` Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Na przykład konfiguracja przekierowania nazwy domeny `*.i18n.site` na powyższym obrazku wygląda następująco:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Wdróż Za Pomocą nginx

Proszę dodać konfigurację podobną do poniższej w `server` nginx gdzie `/root/i18n/md/out/ol/htm` zmień ją na ścieżkę własnego projektu `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktura Katalogów

#### Publiczny

Pliki statyczne strony internetowej, takie jak `favicon.ico` `robots.txt` itp.

Pliki ikon tutaj można wygenerować za pomocą [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` W katalogu znajdują się pliki konfiguracyjne `i18n.site` , pamięć podręczna tłumaczeń, itp. Szczegóły znajdziesz w następnym rozdziale [„Konfiguracja”](/i18n.site/conf) .

#### Pl

Katalog języka źródłowego, `.i18n/conf.yml` `fromTo` `en` w pliku konfiguracyjnym

```yaml
i18n:
  fromTo:
    en: zh
```

Proszę zapoznać się z konfiguracją tłumaczenia [i18](/i18/use)


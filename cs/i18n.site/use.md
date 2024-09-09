# Nainstalujte a nasadte

## Konfigurace přístupového tokenu

`i18n.site` obsahuje vestavěný nástroj pro překlad `i18`, prosím [klikněte zde pro dokument `i18` o konfiguraci přístupového tokenu](/i18/use).

## Instalace

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo projekt

Počněme s demo projektem, abychom se naučili používat `i18n.site`.

Nejprve naklonujeme demo úložiště a spusťeme následující příkaz:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Uživatelé v Číně mohou:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Název adresáře klonu kódu `demo.i18n.site` musí být `md`, aby se usnadnil místní náhled s `docker`.

### Překlad

Nejprve přejděte do adresáře `md` a spusťte `i18n.site`, což přeloží `en` do `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po spuštění se vygenerují překladové a mezipaměťové soubory, nezapomeňte je přidat do úložiště v adresáři `md` pomocí `git add .`.

### Místní náhled

Nainstalujte a spusťte `docker` ( `MAC` uživatel doporučuje použít [orbstack](https://orbstack.dev) jako runtime pro `docker` ).

Poté přejděte do adresáře `docker` a spusťte `./up.sh`, následně navštivte [https://127.0.0.1](https://127.0.0.1) pro místní náhled.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publikování obsahu

`i18n.site` používá architekturu [jednostránkové aplikace](https://developer.mozilla.org/docs/Glossary/SPA), vstupní stránka webu a obsah webu jsou nasazeny nezávisle.

Po spuštění překladu se pod adresářem `md/out/dev` vygenerují adresáře `htm` a `v`.

Zde `dev` znamená, že je vytvořen na základě konfiguračního souboru `.i18n/htm/dev.yml`.

Adresář `dev`:

Adresář `htm` obsahuje vstupní stránku webu.

Adresář `v` obsahuje obsah webu s verzemi.

Při místním náhledu se nestaráme o verze a všechny soubory se zkopírují do adresáře `out/dev/v/0.1.0`.

Při oficiálním vydání se změněné soubory zkopírují do nového adresáře s verzí.

#### Použitím -c zadejte konfigurační soubor

Různé konfigurační soubory vytvoří odpovídající adresáře v adresáři `out`.

Například `.i18n/htm/ol.yml` vytvoří adresář `out/ol`.

`dev.yml` a `ol.yml` jsou výchozí konfigurace.

`dev` je zkratka pro `development`, což znamená vývojové prostředí, používané pro místní náhled a je také výchozím konfiguračním souborem.
`ol` je zkratka pro `online`, což znamená online prostředí, používané pro oficiální vydání. Je to také výchozí konfigurační soubor při použití příkazového řádkového parametru `-n` pro publikování do `npm`.

Můžete také vytvořit další konfigurační soubory. Použitím `--htm_conf` na příkazovém řádku můžete zadejt název konfiguračního souboru, který se má použít:

například:
```
i18n.site --htm_conf yourConfig --save
```

Zde `--save` znamená aktualizace verze vydání.

#### <a rel=id href="#npm" id="npm"></a> Publikování obsahu na npmjs.com

Publikování obsahu na [npmjs.com](//npmjs.com) je doporučeným výchozím řešením (viz [Front-end High Availability](/i18n.site/feature#ha)).

##### npm login &

Nainstalujte `nodejs` a přihlaste se pomocí `npm login`.

Upravte `md/.i18n/htm/ol.yml` a změňte `i18n.site` v `v: //unpkg.com/i18n.site` na svůj vlastní název balíčku `npm`.

Stačí použít název neobsazeného balíčku na [npmjs.com](//npmjs.com). Použití domény jako názvu balíčku je dobrým výběrem.

Při publikování na základě balíčku `npm` **použijte `//unpkg.com/` jako předponu hodnoty `v:`**. Balíček `i18n.site` optimalizoval čas mezipaměti `/.v` pod touto cestou předpony, aby bylo dosaženo včasného zobrazení nových vydání.

Spusťte `i18n.site --npm` nebo `i18n.site -n` v adresáři `md` pro překlad a publikování.

Pokud používáte kontinuální integrační prostředí pro publikování, není potřeba instalovat `nodejs`. Stačí zkopírovat přihlášená a publikační oprávnění `~/.npmrc` do tohoto prostředí.

Pokud změníte název balíčku `v:` v `ol.yml`, **nejprve odstraňte `.i18n/v/ol`** a poté je publikujte.

##### Proxy server pro publikování npm

Uživatelé v Číně mohou narazit na problémy se sítí a nemoci publikovat balíčky `npm`. Mohou nastavit proměnnou prostředí `https_proxy` pro konfiguraci serveru proxy.

Předpokládejme, že port vašeho proxy serveru je `7890`. Můžete to napsat takto:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Vlastní hostování obsahu

Pokud chcete obsah hostovat sami, nejprve upravte `md/.i18n/htm/ol.yml` a změňte `v: //unpkg.com/i18n.site` na předponu adresy URL, například `v: //i18n-v.xxx.com`.

Přejděte do adresáře `md` a spusťte

```
i18n.site --htm_conf ol --save
```

nebo zkratka

```
i18n.site -c ol -s
```

Poté nakonfigurujte obsah v adresáři `md/out/ol/v` na cestu předpony URL nastavenou v `v:`.

Nakonec **nakonfigurujte čas mezipaměti cesty končící na `/.v` na `1s`**, jinak nebude nově vydaný obsah okamžitě přístupný.

Čas mezipaměti pro ostatní cesty lze nastavit na jeden rok nebo více, aby se snížily zbytečné požadavky.

##### Hostování obsahu na S3

Pro vlastní hostování obsahu je kromě použití vlastního serveru `CDN` běžnou možností použití `S3` +

Můžete použít [rclone](https://rclone.org) k přihlášení k serveru `S3`, poté si prostudujte a upravte následující skript a zkopírovat pouze přírůstkové změny do `S3` pro každé vydání.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nezapomeňte nakonfigurovat `CDN`, aby čas mezipaměti cesty končící na `/.v` byl `1s`, jinak nebude možné okamžitě přistupovat k nově vydanému obsahu.

### Publikování webu

Web lze nasadit kdekoli, [github page](https://pages.github.com) a [cloudflare page](https://pages.cloudflare.com) jsou dobrá volba.

Protože web používá architekturu [jednostránkové aplikace](https://developer.mozilla.org/docs/Glossary/SPA), nezapomeňte přepsat cesty URL, které neobsahují `.`, až `index.html`.

Vstupní stránka webu stačí nasadit jednou a není třeba znovu nasadit vstupní stránku webu pro následné aktualizace obsahu.

#### Nasazení na stránku github

Nejprve [klikněte zde pro vytvoření organizace na github](https://github.com/account/organizations/new?plan=free). Následující název organizace je `i18n-demo` jako příklad.

Poté vytvořte sklad `i18n-demo.github.io` pod touto organizací (nahraďte prosím `i18n-demo` názvem organizace, který jste vytvořili):

![](https://p.3ti.site/1721098657.avif)

Při publikování obsahu v předchozím článku bylo vygenerováno `out/ol/htm`, přejděte do tohoto adresáře a spusťte:

```
ln -s index.html 404.html
```


Protože `github page` nepodporuje přepisování cest URL, použije se místo toho `404.html`.

Poté spusťte následující příkaz v adresáři `htm` (nahraďte prosím `i18n-demo/i18n-demo.github.io.git` svou vlastní adresou skladu):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Po vložení kódu počkejte, až se nasazení `github page` úspěšně spustí (jak je uvedeno níže), než k němu budete mít přístup.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pro demo stránku se podívejte na:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Nasazení na stránku cloudflare

Ve srovnání s [cloudflare page](//pages.cloudflare.com) poskytuje `github page` přepisování cest a je přátelská k uživatelům v Číně a lépe dostupná.

Nasazení `cloudflare page` je obvykle založeno na nasazení `github page` výše.

Vytvořte projekt a svažte sklad `i18n-demo.github.io` výše.

Proces je znázorněn na obrázku níže:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknutím na `Add Account` udělíte přístup organizaci `i18n-demo`.

Pokud jste svázali sklad jiné organizace, možná budete muset dvakrát kliknout `Add Account`, abyste autorizovali dvakrát, než se nová organizace zobrazí.

![](https://p.3ti.site/1721118306.avif)

Dále vyberte sklad `i18n-demo.github.io`, poté klikněte na `Begin setup` a pro další kroky použijte výchozí hodnoty.

![](https://p.3ti.site/1721118490.avif)

Po prvním připojení musíte počkat několik minut, než k němu budete mít přístup.

Po nasazení můžete svázat vlastní název domény.

![](https://p.3ti.site/1721119459.avif)

Po navázání vlastního názvu domény přejděte na název domény a nakonfigurujte přepisování cesty jednostránkové aplikace, jak je znázorněno níže:

![](https://p.3ti.site/1721119320.avif)

Pravidla na výše uvedeném obrázku jsou následující, prosím nahraďte `i18n.site` v prvním řádku níže názvem domény, kterou jste svázali.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Kromě toho nakonfigurujte pravidla mezipaměti, jak je uvedeno níže, a nastavte dobu trvání mezipaměti na jeden měsíc.

![](https://p.3ti.site/1721125111.avif)

Změňte prosím shodu názvu domény ve druhém kroku na obrázku výše na název domény, který jste svázali.

#### Optimalizace nasazení webu v Číně

Pokud chcete dosáhnout lepší dostupnosti v síťovém prostředí v Číně, [zaregistrujte si nejprve název domény](//beian.aliyun.com).

Poté použijte úložiště objektů cloudových prodejců v Číně + nasadte následující obsah `CDN` `out/ol/htm`.

Pomocí edge computingu můžete přepsat cestu, aby se přizpůsobila jednostránkovým aplikacím, například [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) lze nakonfigurovat takto:

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

Protože záznam `MX` a záznam `CNAME` nemohou koexistovat, pokud chcete dostávat e-maily s názvy domén současně, musíte spolupracovat se [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) na úrovni `CNAME` do záznamu `A`.

Navíc, protože zahraniční poplatky za provoz cloudových prodejců v Číně jsou poměrně drahé, chcete-li optimalizovat náklady, můžete k dosažení cíle použít [bezplatné geografické DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) a vlastní název domény [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ! (jak je uvedeno níže). odklon dopravy ── Provozní doprava v Číně Baidu Cloud `CDN`, mezinárodní doprava jde cloudflare.

![](https://p.3ti.site/1721119788.avif)

Tato řešení optimalizace nasazení jsou složitější a budou představena v samostatných kapitolách v budoucnu.

#### Přesměrování obecného názvu domény

Pokud používáte `i18n.site` pro generování hlavního webu, obvykle je nutné nakonfigurovat přesměrování celé domény, tedy přesměrování přístupu na `*.xxx.com` (včetně `www.xxx.com`) na `xxx.com`.

Tohoto požadavku lze dosáhnout pomocí Alibaba Cloud `CDN` `EdgeScript` ( [anglický dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [čínský dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Přidejte doménu v [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a nastavte doménu `*.xxx.com` tak, aby ukazovala na `CNAME`阿里云 `CDN`.

![](https://p.3ti.site/1721122000.avif)

Například, konfigurace přesměrování obecné domény `*.i18n.site` je následující:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deployujte pomocí nginx

Přidejte následující konfiguraci do sekce `server` v nginxu, přičemž `/root/i18n/md/out/ol/htm` změňte na cestu k vašemu projektu `out/ol/htm`:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktura adresářů

#### `public`

Statické soubory webu, jako jsou `favicon.ico`, `robots.txt` atd.

Icony mohou být vygenerovány pomocí [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

V adresáři `.i18n` se nacházejí konfigurační soubory a překladové缓存 pro `i18n.site`. Podrobnosti naleznete v další kapitole [“Konfigurace”](/i18n.site/conf).

#### `en`

Adresář pro zdrojový jazyk, odpovídající `en` v konfiguračním souboru `.i18n/conf.yml` v sekci `fromTo`

```yaml
i18n:
  fromTo:
    en: zh
```

Konfiguraci překladu naleznete v [i18](/i18/use).
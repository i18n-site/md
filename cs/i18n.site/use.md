# Nainstalujte &

## Konfigurační Token

`i18n.site` Nástroj pro překlad `i18` je zabudován, [klikněte sem, abyste nastavili přístupový token v dokumentu `i18`](/i18/use) .

## Nainstalujte

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekt

Začněme s demo projektem a naučme se používat `i18n.site`

Nejprve naklonujeme demo úložiště a spustíme příkaz následovně:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Uživatelé v pevninské Číně mohou:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Název adresáře základního klonu kódu musí být `md` pro usnadnění místního náhledu pomocí `docker` `demo.i18n.site`

### Přeložit

Nejprve zadejte adresář `md` a spusťte `i18n.site` , což přeloží `en` na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po spuštění se vygenerují soubory překladu a mezipaměti, nezapomeňte je přidat do úložiště `git add . ` v adresáři `md`

### Místní Náhled

Nainstalujte a spusťte `docker` ( `MAC` doporučují používat [orbstack](https://orbstack.dev) jako runtime `docker` ).

Poté zadejte adresář `docker` a spusťte `./up.sh` a poté navštivte [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Obsah Příspěvku

`i18n.site` architekturu [jednostránkové aplikace](https://developer.mozilla.org/docs/Glossary/SPA) a vstupní stránka webu a obsah webu jsou nasazeny nezávisle.

Po spuštění výše uvedeného překladu se v adresáři `md/out/dev` vygenerují adresáře `htm` a `v` .

Zde `dev` označuje, že je vytvořen na základě `.i18n/htm/dev.yml` souboru.

Pod : `dev`

Pod adresářem `htm` vstupní stránka webu.

`v` Adresář obsahuje obsah webu s číslem verze.

Místní náhled zkopíruje všechny soubory do `out/dev/v/0.1.0` bez ohledu na číslo verze.

Pro oficiální vydání budou změněné soubory zkopírovány do nového adresáře s číslem verze.

#### Pomocí -c Zadejte Konfigurační Soubor

Různé konfigurační soubory vytvoří odpovídající adresáře v adresáři `out`

Například `.i18n/htm/ol.yml` vytvoří adresář `out/ol` .

`dev.yml` a `ol.yml` jsou výchozí konfigurace.

`dev` je zkratka `development` , která představuje vývojové prostředí, používá se pro místní náhled a je také výchozím konfiguračním souborem.
`ol` je zkratka `online` , která představuje online prostředí, používá se pro oficiální vydání a je také výchozím konfiguračním souborem při publikování do `npm` pomocí parametru příkazového řádku `-n` .

Můžete také vytvořit další konfigurační soubory pro zadání názvu konfiguračního `--htm_conf` na příkazovém řádku:

například:
```
i18n.site --htm_conf yourConfig --save
```

`--save` je uvedeno číslo verze vydání aktualizace.

#### <a rel=id href="#npm" id="npm"></a> Publikujte obsah na npmjs.com

Publikování obsahu do [npmjs.com](//npmjs.com) je doporučeným výchozím řešením (viz [Front-end Vysoká dostupnost](/i18n.site/feature#ha) ).

##### npm login &

Nainstalujte `nodejs` pro přihlášení použijte `npm login` .

Edit `md/.i18n/htm/ol.yml` změňte `i18n.site` v `v: //unpkg.com/i18n.site` na vlastní `npm` název balíčku.

Stačí použít název neobsazeného balíčku na [npmjs.com](//npmjs.com)

Při publikování na základě balíčku `npm` **nezapomeňte použít `//unpkg.com/`** jako předponu hodnoty `v:` . Čas mezipaměti `i18n.site` pod touto cestou předpony `/.v` byl speciálně optimalizován, aby umožňoval včasné prohlížení nových vydání.

Pro překlad a publikování spusťte `i18n.site --npm` nebo `i18n.site -n` v adresáři `md`

Pokud k publikování používáte kontinuální integrační prostředí, není potřeba jej instalovat `nodejs` Stačí zkopírovat přihlášené a publikované oprávnění `~/.npmrc` do prostředí.

Pokud změníte název balíčku v `v:` `ol.yml` , **nezapomeňte nejprve smazat `.i18n/v/ol`** a poté jej publikovat.

##### Proxy Server Publikoval npm

Pokud uživatelé v pevninské Číně narazí na problémy se sítí a nemohou publikovat balíček `npm` , mohou nastavit proměnnou prostředí `https_proxy` pro konfiguraci serveru proxy.

Za předpokladu, že port vašeho proxy serveru je `7890` můžete napsat:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Vlastní Hostovaný Obsah

Pokud chcete obsah hostovat sami, nejprve `md/.i18n/htm/ol.yml` a změňte `v: //unpkg.com/i18n.site` na předponu adresy URL, například `v: //i18n-v.xxx.com` .

Vstupte do adresáře `md` a spusťte

```
i18n.site --htm_conf ol --save
```

nebo zkratka

```
i18n.site -c ol -s
```

Poté nakonfigurujte obsah v `md/out/ol/v` na cestu předpony URL nastavenou v `v:` .

Nakonec **nakonfigurujte čas mezipaměti cesty končící `1s` `/.v`**

Čas mezipaměti pro ostatní cesty lze nastavit na jeden rok nebo více, aby se snížily zbytečné požadavky.

##### Hostovat Obsah Na s3

Pro vlastní hostování obsahu je kromě použití vlastního serveru + běžnou `CDN` použití `S3`

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nezapomeňte nakonfigurovat `CDN` aby čas mezipaměti cesty končící znakem `/.v` byl `1s` , jinak nebudete moci okamžitě přistupovat k nově vydanému obsahu.

### Zveřejnit Webové Stránky

Web lze nasadit kdekoli, [github page](https://pages.github.com) a [cloudflare page](https://pages.cloudflare.com) jsou dobrá volba.

Protože web přebírá architekturu [jednostránkové aplikace](https://developer.mozilla.org/docs/Glossary/SPA) , `index.html` přepsat cestu URL, která neobsahuje `. `

Vstupní stránku webu stačí nasadit jednou a není třeba znovu nasazovat vstupní stránku webu pro následné aktualizace obsahu.

#### Nasadit Na Stránku github

Nejprve [klikněte sem github vytvořte organizaci](https://github.com/account/organizations/new?plan=free) Následující název organizace je `i18n-demo`

Poté vytvořte sklad pod touto `i18n-demo.github.io` (nahraďte prosím `i18n-demo` názvem organizace, který jste vytvořili):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Při publikování obsahu v předchozím článku byl vygenerován `out/ol/htm` Zadejte tento adresář a spusťte :

```
ln -s index.html 404.html
```


Protože `github page` nepodporuje přepisování cesty URL, místo toho se používá `404.html` .

Poté spusťte následující příkaz v adresáři `htm` (nezapomeňte nahradit `i18n-demo/i18n-demo.github.io.git` svou vlastní adresou skladu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Po vložení kódu počkejte, až se úspěšně spustí nasazení `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pro demo stránku se podívejte na:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Nasadit Na Stránce cloudflare

Ve srovnání [cloudflare page](//pages.cloudflare.com) `github page` poskytuje přepisování cest a je přátelštější k pevninské Číně a je doporučeno používat.

`cloudflare page` Nasazení je obvykle založeno na nasazení `github page` výše.

Vytvořte projekt a svažte výše uvedený `i18n-demo.github.io` .

Proces je znázorněn na obrázku níže:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Prosím klikněte na `Add Account` abyste udělili přístup `i18n-demo` .

Pokud jste svázali sklad jiné organizace, budete možná muset dvakrát kliknout na `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Dále vyberte `i18n-demo.github.io` Warehouse, klikněte na `Begin setup` a pro další kroky použijte výchozí hodnoty.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Po prvním připojení musíte počkat několik minut, než k němu budete mít přístup.

Po nasazení můžete svázat vlastní název domény.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Po navázání vlastního názvu domény přejděte na název domény a nakonfigurujte přepisování cesty jednostránkové aplikace, jak je znázorněno níže:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Pravidla na obrázku výše jsou následující, prosím nahraďte `i18n.site`

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

Kromě toho nakonfigurujte pravidla mezipaměti, jak je uvedeno níže, a nastavte dobu trvání mezipaměti na jeden měsíc.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Změňte prosím shodu názvu domény ve druhém kroku na obrázku výše na název domény, který jste svázali.

#### Optimalizace Nasazení Webových Stránek v Pevninské Číně

Chcete-li dosáhnout lepší dostupnosti v síťovém prostředí pevninské Číny, [zaregistrujte si nejprve název domény](//beian.aliyun.com) .

Pak použijte úložiště `out/ol/htm` cloudových prodejců v pevninské `CDN` +

Edge computing můžete použít k přepsání cesty, aby se přizpůsobila jednostránkovým aplikacím, jako je [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`CNAME` `MX` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `A`

Navíc, protože zahraniční poplatky za provoz cloudových prodejců v pevninské Číně jsou poměrně drahé, chcete-li optimalizovat náklady, můžete k dosažení cíle použít [bezplatné geografické DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) a vlastní název domény [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ! (jak je uvedeno níže). odklon dopravy──Provoz v pevninské Číně Baidu Cloud `CDN` mezinárodní doprava jde cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Tato řešení optimalizace nasazení jsou složitější a budou představena v samostatných kapitolách v budoucnu.

#### Přesměrování Obecného Názvu Domény

`*.xxx.com` `www.xxx.com` `i18n.site` `xxx.com`

Tohoto požadavku lze dosáhnout pomocí Alibaba Cloud `CDN` s `EdgeScript` ( [anglický dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [čínský dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) !

Přidejte název domény do [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a nasměrujte `*.xxx.com` domény na `CNAME` Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Například konfigurace přesměrování názvu domény `*.i18n.site` na obrázku výše je následující:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Nasazení S nginx

Přidejte konfiguraci podobnou následujícímu v `server` nginx kde `/root/i18n/md/out/ol/htm` ji změňte na cestu svého vlastního projektu `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktura Adresáře

#### Veřejnost

Statické soubory webové stránky, jako je `favicon.ico` `robots.txt` atd.

Soubory ikon zde mohou být generovány pomocí [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Pod `.i18n` jsou konfigurační soubory `i18n.site` , překladová mezipaměť atd. Podrobnosti naleznete v další kapitole ["Konfigurace"](/i18n.site/conf) .

#### en

Adresář zdrojového jazyka, `.i18n/conf.yml` `fromTo` `en` v konfiguračním souboru

```yaml
i18n:
  fromTo:
    en: zh
```

Podívejte se prosím na konfiguraci překladu [i18](/i18/use)


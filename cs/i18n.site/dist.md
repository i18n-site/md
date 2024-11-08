# Nasazení a Online

`i18n.site` přijímá architekturu [jednostránkové aplikace](https://developer.mozilla.org/docs/Glossary/SPA) a vstupní stránka webu a obsah webu jsou nasazeny nezávisle.

Po spuštění výše uvedeného překladu se pod adresářem `md/out/dev` vygenerují adresáře `htm` a `v` .

Zde `dev` znamená, že je vytvořen na základě konfiguračního souboru `.i18n/htm/dev.yml` .

`dev` adresář :

Adresář `htm` je vstupní stránka webu.

Adresář `v` obsahuje obsah webových stránek s čísly verzí.

Místní náhled se nestará o číslo verze a zkopíruje všechny soubory do adresáře `out/dev/v/0.1.0` .

Pro oficiální vydání budou změněné soubory zkopírovány do nového adresáře s číslem verze.

## Zadejte Konfigurační Soubor S `-c`

Různé konfigurační soubory vytvoří odpovídající adresáře v adresáři `out` .

Například `.i18n/htm/main.yml` vytvoří adresář `out/main` .

`dev.yml` a `main.yml` jsou výchozí konfigurace.

`dev` je zkratka `development` , která označuje vývojové prostředí, používané pro místní náhled a je také výchozím konfiguračním souborem.
`ol` je zkratka `online` označující online prostředí, které se používá pro oficiální vydání. Je to také výchozí konfigurační soubor při použití parametrů příkazového řádku `-n` až `npm` k vydání.

Můžete také vytvořit další konfigurační soubory Pomocí `--htm_conf` na příkazovém řádku zadejte název konfiguračního souboru, který se má použít:

například:
```
i18n.site --htm_conf dist --save
```

Zde `--save` představuje číslo verze vydání aktualizace.

## <a rel=id href="#npm" id="npm"></a> Publikujte obsah na npmjs.com

Publikování obsahu do [npmjs.com](//npmjs.com) je doporučeným výchozím řešením (viz [Front-end Vysoká dostupnost](/i18n.site/feature#ha) ).

### Přihlásit Se & npm

Nainstalujte `nodejs` , přihlaste se pomocí `npm login` .

Upravte `md/.i18n/htm/main.yml` a změňte hodnotu [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) svůj vlastní název balíčku `npm` .

Poté upravte `md/.i18n/htm/main.package.json`

Spusťte `i18n.site --npm` nebo `i18n.site -n` v adresáři `md` pro překlad a publikování.

Pokud k publikování používáte kontinuální integrační prostředí, není potřeba instalovat `nodejs` Stačí zkopírovat přihlášená a publikační oprávnění `~/.npmrc` do prostředí.

Pokud změníte název balíčku `v:` v `main.yml` , **nezapomeňte nejprve odstranit `.i18n/v/main`** a poté je publikovat.

#### Proxy Server Publikoval npm

Pokud uživatelé v pevninské Číně narazí na problémy se sítí a nemohou publikovat `npm` balíčků, mohou nastavit proměnnou prostředí `https_proxy` pro konfiguraci serveru proxy.

Za předpokladu, že port vašeho proxy serveru je `7890` , můžete napsat:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Vlastní Hostovaný Obsah

Pokud chcete obsah hostovat sami, nejprve upravte `md/.i18n/htm/main.yml` a změňte `v: //unpkg.com/i18n.site` na předponu adresy URL, například `v: //i18n-v.xxx.com` .

Zadejte adresář `md` a spusťte

```
i18n.site --htm_conf ol --save
```

nebo zkratka

```
i18n.site -c ol -s
```

Poté nakonfigurujte obsah v adresáři `md/out/main/v` na cestu předpony URL nastavenou v `v:` .

Nakonec **nakonfigurujte čas mezipaměti cesty končící na `/.v` až `1s`** , jinak nebude nově vydaný obsah okamžitě přístupný.

Čas mezipaměti pro ostatní cesty lze nastavit na jeden rok nebo více, aby se snížily zbytečné požadavky.

## Hostovat Obsah Na s3

Pro vlastní hostování obsahu je kromě použití vlastního serveru `CDN` běžnou možností použití `S3` +

Můžete použít [rclone](https://rclone.org) k přihlášení k serveru `S3` , poté si prostudovat a upravit následující skript a zkopírovat pouze přírůstkové změny do `S3` pro každé vydání.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Nezapomeňte nakonfigurovat `CDN` tak, aby čas mezipaměti cesty končící na `/.v` byl `1s` , jinak nebude možné okamžitě přistupovat k nově vydanému obsahu.

## Zveřejnit Webové Stránky

Web lze nasadit kdekoli, [github page](https://pages.github.com) a [cloudflare page](https://pages.cloudflare.com) jsou dobrá volba.

Protože web používá architekturu [jednostránkové aplikace](https://developer.mozilla.org/docs/Glossary/SPA) , nezapomeňte přepsat cesty URL, které neobsahují `. ` až `index.html` .

Vstupní stránku webu stačí nasadit jednou a není třeba znovu nasazovat vstupní stránku webu pro následné aktualizace obsahu.

### Nasadit Na Stránku github

Nejprve [klikněte github a vytvořte organizaci](https://github.com/account/organizations/new?plan=free) Následující název organizace je `i18n-demo` jako příklad.

Poté vytvořte sklad `i18n-demo.github.io` pod touto organizací (nahraďte prosím `i18n-demo` názvem organizace, který jste vytvořili):

![](https://p.3ti.site/1721098657.avif)

Při publikování obsahu v předchozím článku bylo vygenerováno `out/main/htm` , zadejte tento adresář a spusťte :

```
ln -s index.html 404.html
```


Protože `github page` nepodporuje přepisování cesty URL, použije se místo toho `404.html` .

Poté spusťte následující příkaz v adresáři `htm` (nezapomeňte nahradit `i18n-demo/i18n-demo.github.io.git` svou vlastní adresou skladu) :

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

### Nasadit Na Stránce cloudflare

Ve [cloudflare page](//pages.cloudflare.com) s `github page` poskytuje přepisování cest a je přátelštější k pevninské Číně a je lépe dostupný.

Nasazení `cloudflare page` je obvykle založeno na nasazení `github page` výše.

Vytvořte projekt a svažte sklad `i18n-demo.github.io` výše.

Proces je znázorněn na obrázku níže:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknutím na `Add Account` udělíte přístup organizaci `i18n-demo` .

Pokud jste svázali sklad jiné organizace, možná budete muset dvakrát kliknout na `Add Account` , abyste autorizovali dvakrát, než se nová organizace zobrazí.

![](https://p.3ti.site/1721118306.avif)

Dále vyberte sklad `i18n-demo.github.io` , poté klikněte na `Begin setup` a pro další kroky použijte výchozí hodnoty.

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

### Optimalizace Nasazení Webových Stránek v Pevninské Číně

Chcete-li dosáhnout lepší dostupnosti v síťovém prostředí pevninské Číny, [zaregistrujte si nejprve název domény](//beian.aliyun.com) .

Poté použijte úložiště objektů cloudových `out/main/htm` v pevninské Číně + Nasaďte následující obsah `CDN` .

Pomocí edge computingu můžete přepsat cestu, aby se přizpůsobila jednostránkovým aplikacím, například [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) lze nakonfigurovat takto:

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
  // Záhlaví odpovědí lze nastavit pro ladění výstupu, například out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Protože záznam `MX` a záznam `CNAME` nemohou koexistovat, pokud chcete dostávat e-maily s názvy domén současně, musíte spolupracovat se [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) na úrovni `CNAME` do záznamu `A` .

Navíc, protože zahraniční poplatky za provoz cloudových prodejců v pevninské Číně jsou poměrně drahé, chcete-li optimalizovat náklady, můžete k dosažení cíle použít [bezplatné geografické DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) a vlastní název domény [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ! (jak je uvedeno níže). odklonění dopravy──Směrování dopravy v pevninské Číně Baidu Cloud `CDN` , mezinárodní provoz jde cloudflare .

![](https://p.3ti.site/1721119788.avif)

Tato řešení optimalizace nasazení jsou složitější a budou představena v samostatných kapitolách v budoucnu.

### Přesměrování Obecného Názvu Domény

Pokud pro generování webu jako hlavního webu používáte `i18n.site` , musíte obvykle nakonfigurovat přesměrování celé domény, tedy přesměrování přístupu na `*.xxx.com` (včetně `www.xxx.com` ) na `xxx.com` .

Tohoto požadavku lze dosáhnout pomocí Alibaba Cloud `CDN` `EdgeScript` ( [anglický dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [čínský dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Přidejte název domény v [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a zadejte název domény `*.xxx.com` `CNAME` v Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Například konfigurace přesměrování názvu pan-domény `*.i18n.site` na obrázku výše je následující:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Nasazení S nginx

Přidejte konfiguraci podobnou následující v odstavci `server` v nginx Změňte prosím `/root/i18n/md/out/main/htm` na cestu vašeho vlastního projektu `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Na Základě `github action` Spojité Integrace

Chcete-li nakonfigurovat `github action` , můžete se podívat na následující:

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

Jak je vidět v konfiguraci, tento pracovní postup se spouští při pushování do větve `main` a větve `dist` .

Pracovní postup použije k publikování dokumentu konfigurační soubor odpovídající názvu větve. Zde se jako konfigurace publikování použije `.i18n/htm/main.yml` a `.i18n/htm/dist.yml` .

Pro proces uvolňování dokumentů doporučujeme následující doporučené postupy:

Když jsou změny přeneseny do větve `main` , spustí se sestavení dokumentu a jeho nasazení do stanice náhledu (stanice náhledu je k dispozici [github page](//pages.github.com) ).

Po potvrzení správnosti dokumentu na webu náhledu bude kód sloučen a odeslán do větve `dist` a oficiální sestavení a nasazení budou online.

Implementace výše uvedeného procesu samozřejmě vyžaduje napsat více konfigurací.

Pro skriptování pracovního postupu se můžete obrátit na skutečný projekt [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` a `secrets.NPM_TOKEN` v konfiguraci vyžadují konfiguraci tajných proměnných v základně kódu.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` je token publikování balíčku `npm` v konfiguraci Navštivte [npmjs.com](//npmjs.com) a vytvořte token s oprávněním k publikování (jak je uvedeno níže).

![](//p.3ti.site/1730969906.avif)


## Adresářová Struktura

### `public`

Statické soubory webu, například `favicon.ico` , `robots.txt` atd.

Soubory ikon zde mohou být generovány pomocí [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

V adresáři `.i18n` jsou konfigurační soubory, překladová mezipaměť atd. z `i18n.site` Podrobnosti viz další kapitola ["Konfigurace"](/i18n.site/conf) .

### `en`

Adresář zdrojového jazyka, odpovídající konfiguračnímu souboru `en` z `fromTo` v `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Podívejte se prosím na konfiguraci překladu [i18](/i18/use)
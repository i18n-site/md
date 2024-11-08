# Nasadenie a Online

`i18n.site` využíva architektúru [jednostránkovej aplikácie](https://developer.mozilla.org/docs/Glossary/SPA) a vstupná stránka webovej lokality a obsah webovej lokality sú nasadené nezávisle.

Po spustení vyššie uvedeného prekladu sa pod adresárom `md/out/dev` vygenerujú adresáre `htm` a `v` .

Tu `dev` znamená, že je zostavený na základe konfiguračného súboru `.i18n/htm/dev.yml` .

`dev` adresár :

Adresár `htm` je vstupná stránka webu.

Adresár `v` obsahuje obsah webových stránok s číslami verzií.

Lokálny náhľad sa nestará o číslo verzie a skopíruje všetky súbory do adresára `out/dev/v/0.1.0` .

Pri oficiálnom vydaní budú zmenené súbory skopírované do nového adresára s číslom verzie.

## Zadajte Konfiguračný Súbor S `-c`

Rôzne konfiguračné súbory vytvoria zodpovedajúce adresáre v adresári `out` .

Napríklad `.i18n/htm/main.yml` vytvorí adresár `out/main` .

`dev.yml` a `main.yml` sú predvolené konfigurácie.

`dev` je skratka `development` , označujúca vývojové prostredie, ktoré sa používa na lokálny náhľad a je tiež predvoleným konfiguračným súborom.
`ol` je skratka `online` označujúca online prostredie, ktoré sa používa na oficiálne vydanie. Je to tiež predvolený konfiguračný súbor pri použití parametrov príkazového riadka `-n` až `npm` na uvoľnenie.

Môžete tiež vytvoriť ďalšie konfiguračné súbory Použite `--htm_conf` v príkazovom riadku na určenie názvu konfiguračného súboru, ktorý sa má použiť:

napríklad:
```
i18n.site --htm_conf dist --save
```

Tu `--save` predstavuje číslo verzie vydania aktualizácie.

## <a rel=id href="#npm" id="npm"></a> Zverejnite obsah na npmjs.com

Publikovanie obsahu do [npmjs.com](//npmjs.com) je odporúčaným predvoleným riešením (pozrite si [časť Vysoká dostupnosť rozhrania](/i18n.site/feature#ha) ).

### npm &

Nainštalujte `nodejs` , prihláste sa pomocou `npm login` .

Upravte `md/.i18n/htm/main.yml` a zmeňte hodnotu [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` ako svoj vlastný názov `npm` balíka na [npmjs.com](//npmjs.com)

Potom upravte `md/.i18n/htm/main.package.json`

Ak chcete preložiť a publikovať, spustite `i18n.site --npm` alebo `i18n.site -n` v adresári `md` .

Ak na publikovanie používate prostredie kontinuálnej integrácie, nie je potrebné inštalovať `nodejs` Stačí skopírovať prihlásené a publikované oprávnenia `~/.npmrc` do prostredia.

Ak zmeníte názov balíka `v:` v `main.yml` , **nezabudnite najskôr odstrániť `.i18n/v/main`** a potom ho publikovať.

#### Proxy Server Zverejnil npm

Ak používatelia v pevninskej Číne narazia na problémy so sieťou a nedokážu zverejniť `npm` balíkov, môžu nastaviť premennú prostredia `https_proxy` na konfiguráciu proxy servera.

Za predpokladu, že port vášho proxy servera je `7890` , môžete napísať:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Vlastne Hostený Obsah

Ak chcete obsah hostiť sami, najprv upravte `md/.i18n/htm/main.yml` a zmeňte `v: //unpkg.com/i18n.site` na predponu adresy URL, napríklad `v: //i18n-v.xxx.com` .

Zadajte adresár `md` a spustite

```
i18n.site --htm_conf ol --save
```

alebo skratka

```
i18n.site -c ol -s
```

Potom nakonfigurujte obsah v adresári `md/out/main/v` na cestu predpony URL nastavenú v `v:` .

Nakoniec **nakonfigurujte čas vyrovnávacej pamäte cesty končiacej na `/.v` až `1s`** , inak nebude možné okamžite pristupovať k novo vydanému obsahu.

Čas vyrovnávacej pamäte pre iné cesty možno nastaviť na jeden rok alebo viac, aby sa znížili zbytočné požiadavky.

## Hostite Obsah Na s3

Na vlastné hosťovanie obsahu je okrem použitia vlastného servera ďalšou `CDN` možnosťou použiť `S3` +

Môžete použiť [rclone](https://rclone.org) na prihlásenie na server `S3` , potom si pozrieť a upraviť nasledujúci skript a skopírovať iba prírastkové zmeny do `S3` pre každé vydanie.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Nezabudnite nakonfigurovať `CDN` tak, aby čas vyrovnávacej pamäte cesty končiacej na `/.v` bol `1s` , inak nebude možné okamžite pristupovať k novo vydanému obsahu.

## Zverejniť Webovú Stránku

Webová stránka môže byť nasadená kdekoľvek, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) sú dobré voľby.

Pretože webová lokalita používa architektúru [jednostránkovej aplikácie](https://developer.mozilla.org/docs/Glossary/SPA) , nezabudnite prepísať cesty URL, ktoré neobsahujú `. ` až `index.html` .

Vstupnú stránku webovej lokality je potrebné nasadiť iba raz a nie je potrebné ju znova nasadzovať pre následné aktualizácie obsahu.

### Nasaďte Na Stránku github

Najprv [kliknite sem github ak chcete vytvoriť organizáciu](https://github.com/account/organizations/new?plan=free) . Nasledujúci názov organizácie je `i18n-demo` ako príklad.

Potom vytvorte sklad `i18n-demo.github.io` v rámci tejto organizácie (nahraďte `i18n-demo` názvom organizácie, ktorý ste vytvorili):

![](https://p.3ti.site/1721098657.avif)

Pri publikovaní obsahu v predchádzajúcom článku sa vygenerovalo `out/main/htm` Zadajte tento adresár a spustite :

```
ln -s index.html 404.html
```


Pretože `github page` nepodporuje prepisovanie cesty URL, použije sa namiesto toho `404.html` .

Potom spustite nasledujúci príkaz v adresári `htm` (nezabudnite nahradiť `i18n-demo/i18n-demo.github.io.git` vlastnou adresou skladu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Po zatlačení kódu počkajte, kým nasadenie `github page` úspešne prebehne (ako je uvedené nižšie), až potom k nemu budete mať prístup.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pre demo stránku si pozrite:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Nasadenie Na Stránke cloudflare

[cloudflare page](//pages.cloudflare.com) V porovnaní s `github page` poskytuje prepisovanie cesty a je priateľskejší k pevninskej Číne a odporúča sa používať.

Nasadenie `cloudflare page` je zvyčajne založené na nasadení `github page` vyššie.

Vytvorte projekt a zviažte sklad `i18n-demo.github.io` vyššie.

Proces je znázornený na obrázku nižšie:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kliknutím na `Add Account` udelíte prístup organizácii `i18n-demo` .

Ak ste zviazali sklad inej organizácie, možno budete musieť dvakrát kliknúť na `Add Account` , aby ste autorizovali dvakrát, kým sa zobrazí nová organizácia.

![](https://p.3ti.site/1721118306.avif)

Ďalej vyberte sklad `i18n-demo.github.io` , potom kliknite na `Begin setup` a pre ďalšie kroky použite predvolené hodnoty.

![](https://p.3ti.site/1721118490.avif)

Po prvom viazaní musíte počkať niekoľko minút, kým k nemu budete mať prístup.

Po nasadení môžete naviazať vlastný názov domény.

![](https://p.3ti.site/1721119459.avif)

Po naviazaní vlastného názvu domény prejdite na názov domény a nakonfigurujte prepisovanie cesty jednostránkovej aplikácie, ako je uvedené nižšie:

![](https://p.3ti.site/1721119320.avif)

Pravidlá na obrázku vyššie sú nasledovné, prosím nahraďte `i18n.site` v prvom riadku nižšie názvom domény, ktorú ste viazali.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Okrem toho nakonfigurujte pravidlá vyrovnávacej pamäte, ako je uvedené nižšie, a nastavte trvanie vyrovnávacej pamäte na jeden mesiac.

![](https://p.3ti.site/1721125111.avif)

Zmeňte zhodu názvu domény v druhom kroku na obrázku vyššie na názov domény, ktorý ste viazali.

### Optimalizácia Nasadenia Webových Stránok v Pevninskej Číne

Ak chcete dosiahnuť lepšiu dostupnosť v sieťovom prostredí pevninskej Číny, najskôr [si zaregistrujte názov domény](//beian.aliyun.com) .

Potom použite úložisko objektov cloudových predajcov v Číne + Nasaďte nasledujúci obsah `CDN` `out/main/htm`

Edge computing môžete použiť na prepísanie cesty, aby sa prispôsobila jednostránkovým aplikáciám, napríklad [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) je možné nakonfigurovať takto:

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
  // Hlavičky odpovedí možno nastaviť na ladenie výstupu, ako napríklad out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Pretože záznam `MX` a záznam `CNAME` nemôžu koexistovať, ak chcete dostávať e-maily s názvom domény súčasne, musíte spolupracovať so [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) na úrovni `CNAME` do záznamu `A` .

Okrem toho, pretože poplatky za prevádzku cloudových predajcov v pevninskej Číne v zahraničí sú relatívne drahé, ak chcete optimalizovať náklady, môžete na dosiahnutie tohto cieľa použiť [bezplatné geografické rozlíšenie a vlastný názov domény DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ! presmerovanie dopravy──Smerovanie dopravy v pevninskej Číne Baidu Cloud `CDN` , medzinárodná doprava ide cloudflare .

![](https://p.3ti.site/1721119788.avif)

Tieto riešenia optimalizácie nasadenia sú komplexnejšie a budú predstavené v samostatných kapitolách v budúcnosti.

### Všeobecné Presmerovanie Názvu Domény

Ak na vygenerovanie webovej lokality ako hlavnej webovej lokality používate `i18n.site` , zvyčajne musíte nakonfigurovať presmerovanie celej domény, teda presmerovanie prístupu na `*.xxx.com` (vrátane `www.xxx.com` ) na `xxx.com` .

Túto požiadavku je možné dosiahnuť pomocou Alibaba Cloud `CDN` `EdgeScript` ( [anglický dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [čínsky dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Pridajte názov domény v [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a uveďte názov domény `*.xxx.com` `CNAME` v Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Napríklad konfigurácia presmerovania názvu domény `*.i18n.site` na obrázku vyššie je nasledovná:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Nasadiť Pomocou nginx

Pridajte konfiguráciu podobnú nasledujúcej v odseku `server` v nginx Zmeňte `/root/i18n/md/out/main/htm` na cestu svojho vlastného projektu `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Na Základe `github action` Nepretržitej Integrácie

Ak chcete nakonfigurovať `github action` , môžete použiť nasledujúce informácie:

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

Ako je možné vidieť v konfigurácii, tento pracovný postup sa spúšťa pri tlačení do vetvy `main` a vetvy `dist` .

Pracovný postup použije na publikovanie dokumentu konfiguračný súbor zodpovedajúci názvu pobočky. Tu sa ako konfigurácia publikovania použije `.i18n/htm/main.yml` a `.i18n/htm/dist.yml` .

Pre proces uvoľnenia dokumentu odporúčame nasledujúce osvedčené postupy:

Keď sa zmeny presunú do vetvy `main` , spustí sa zostavenie dokumentu a jeho nasadenie do stanice náhľadu (stanica náhľadu je k dispozícii [github page](//pages.github.com) ).

Po potvrdení správnosti dokumentu na stránke náhľadu sa kód zlúči a odošle do vetvy `dist` a oficiálna zostava a nasadenie budú online.

Samozrejme, implementácia vyššie uvedeného procesu vyžaduje napísanie viacerých konfigurácií.

Skriptovanie pracovného toku si môžete pozrieť v aktuálnom projekte [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` a `secrets.NPM_TOKEN` v konfigurácii vyžadujú, aby ste nakonfigurovali tajné premenné v kódovej báze.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` je token publikovania balíka `npm` v konfigurácii Navštívte [npmjs.com](//npmjs.com) a vytvorte token s povoleniami na publikovanie (ako je uvedené nižšie).

![](//p.3ti.site/1730969906.avif)


## Adresárová Štruktúra

### `public`

Statické súbory webovej stránky, ako napríklad `favicon.ico` , `robots.txt` , atď.

Súbory ikon tu môžu byť generované pomocou [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

V adresári `.i18n` sú konfiguračné súbory, prekladová vyrovnávacia pamäť atď. z `i18n.site` Podrobnosti nájdete v ďalšej kapitole [„Konfigurácia“](/i18n.site/conf) .

### `en`

Adresár zdrojového jazyka, ktorý zodpovedá konfiguračnému súboru `en` z `fromTo` v `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Pozrite si prosím konfiguráciu prekladu [i18](/i18/use)
# Nainštalujte &

## Konfiguračný Token

`i18n.site` Nástroj na preklad `i18` je vložený, [kliknite sem a pozrite si dokument `i18` na konfiguráciu prístupového tokenu](/i18/use) .

## Inštalácia

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekt

Začnime s demo projektom a naučme sa používať `i18n.site`

Najprv naklonujeme demo úložisko a spustíme príkaz takto:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Používatelia v pevninskej Číne môžu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` adresára základného klonu kódu musí byť `md` na uľahčenie lokálneho náhľadu pomocou `docker` .

### Preložiť

Najprv zadajte `md` a spustite príkaz `i18n.site` , ktorý preloží `en` do `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po spustení sa vygenerujú súbory prekladu a vyrovnávacej pamäte, nezabudnite ich pridať do úložiska `git add . ` v adresári `md`

### Lokálny Náhľad

Nainštalujte a spustite `docker` ( `MAC` odporúčajú používať [orbstack](https://orbstack.dev) ako runtime `docker` ).

Potom zadajte adresár `docker` a spustite `./up.sh` a potom navštívte [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Uverejnite Obsah

`i18n.site` architektúru [jednostránkovej aplikácie](https://developer.mozilla.org/docs/Glossary/SPA) a vstupná stránka webovej lokality a obsah webovej lokality sú nasadené nezávisle.

Po spustení vyššie uvedeného prekladu sa v adresári `md/out/dev` vygenerujú adresáre `htm` a `v` .

Tu `dev` označuje, že je zostavený na základe `.i18n/htm/dev.yml` súboru.

Pod : `dev`

Pod adresárom je vstupná stránka webu `htm`

`v` Adresár obsahuje obsah webovej stránky s číslom verzie.

Lokálny náhľad skopíruje všetky súbory do `out/dev/v/0.1.0` bez ohľadu na číslo verzie.

Pri oficiálnom vydaní budú zmenené súbory skopírované do nového adresára s číslom verzie.

#### Pomocou -c Zadajte Konfiguračný Súbor

Rôzne konfiguračné súbory vytvoria zodpovedajúce adresáre v adresári `out`

Napríklad `.i18n/htm/ol.yml` vytvorí `out/ol` adresár.

`dev.yml` a `ol.yml` sú predvolené konfigurácie.

`dev` je skratka `development` , ktorá predstavuje vývojové prostredie, používa sa pre lokálny náhľad a je tiež predvoleným konfiguračným súborom.
`ol` je skratka `online` , ktorá predstavuje online prostredie, používa sa na oficiálne vydanie a je tiež predvoleným konfiguračným súborom pri publikovaní do `npm` pomocou parametra príkazového riadka `-n` .

Na zadanie názvu konfiguračného súboru `--htm_conf` v príkazovom riadku vytvoriť aj iné konfiguračné súbory:

napríklad:
```
i18n.site --htm_conf yourConfig --save
```

`--save` je uvedené číslo verzie vydania aktualizácie.

#### <a rel=id href="#npm" id="npm"></a> Zverejnite obsah na npmjs.com

Publikovanie obsahu do [npmjs.com](//npmjs.com) je odporúčaným predvoleným riešením (pozrite si [časť Vysoká dostupnosť rozhrania](/i18n.site/feature#ha) ).

##### npm login &

Nainštalujte `nodejs` na prihlásenie použite `npm login` .

Upravte `md/.i18n/htm/ol.yml` zmeňte `i18n.site` v `v: //unpkg.com/i18n.site` na svoje vlastné `npm` názov balíka.

Stačí použiť názov neobsadeného balíka na [npmjs.com](//npmjs.com)

Pri publikovaní na základe balíka `npm` **nezabudnite použiť `//unpkg.com/`** ako predponu hodnoty `v:` . Čas vyrovnávacej pamäte `i18n.site` pod touto cestou predpony `/.v` bol špeciálne optimalizovaný, aby umožnil včasné prezeranie nových vydaní.

Ak chcete preložiť a publikovať, spustite `i18n.site --npm` alebo `i18n.site -n` v adresári `md`

Ak na publikovanie používate prostredie nepretržitej integrácie, nie je potrebné ho inštalovať `nodejs` Stačí skopírovať prihlásené a zverejnené povolenie `~/.npmrc` do prostredia.

Ak zmeníte názov balíka v `v:` `ol.yml` , **nezabudnite najprv odstrániť `.i18n/v/ol`** a potom ho publikovať.

##### Proxy Server Zverejnil npm

Ak používatelia v pevninskej Číne narazia na problémy so sieťou a nedokážu zverejniť balík `npm` , môžu nastaviť premennú prostredia `https_proxy` na konfiguráciu servera proxy.

Za predpokladu, že port vášho proxy servera je `7890` môžete napísať:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Vlastne Hostený Obsah

Ak chcete obsah hostiť sami, najprv `md/.i18n/htm/ol.yml` a zmeňte `v: //unpkg.com/i18n.site` na predponu adresy URL, napríklad `v: //i18n-v.xxx.com` .

Zadajte `md` a spustite

```
i18n.site --htm_conf ol --save
```

alebo skratka

```
i18n.site -c ol -s
```

Potom nakonfigurujte obsah v `md/out/ol/v` na cestu predpony URL nastavenú v `v:` .

Nakoniec **nakonfigurujte čas vyrovnávacej pamäte cesty končiacej `1s` `/.v`**

Čas vyrovnávacej pamäte pre iné cesty možno nastaviť na jeden rok alebo viac, aby sa znížili zbytočné požiadavky.

##### Hostite Obsah Na s3

`CDN` chcete obsah hostiť sami, okrem použitia vlastného servera je + bežnou možnosťou použiť `S3`

Môžete `S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nezabudnite nakonfigurovať `CDN` aby čas vyrovnávacej pamäte cesty končiacej na `/.v` bol `1s` , inak nebudete môcť okamžite pristupovať k novo vydanému obsahu.

### Zverejniť Webovú Stránku

Webová stránka môže byť nasadená kdekoľvek [github page](https://pages.github.com) a [cloudflare page](https://pages.cloudflare.com) sú dobré voľby.

Pretože web používa architektúru [jednostránkovej aplikácie](https://developer.mozilla.org/docs/Glossary/SPA) , `index.html` prepísať cestu URL, ktorá neobsahuje `. `

Vstupnú stránku webovej lokality je potrebné nasadiť iba raz a nie je potrebné ju znova nasadzovať pre následné aktualizácie obsahu.

#### Nasaďte Na Stránku github

Najprv [kliknite sem github aby ste vytvorili organizáciu](https://github.com/account/organizations/new?plan=free) . Nasledujúci názov je `i18n-demo`

Potom vytvorte sklad pod touto `i18n-demo.github.io` (nahraďte `i18n-demo` názvom organizácie, ktorú ste vytvorili):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Pri publikovaní obsahu v predchádzajúcom článku bol vygenerovaný `out/ol/htm` zadajte tento adresár a spustite :

```
ln -s index.html 404.html
```


Pretože `github page` nepodporuje prepisovanie adresy URL, namiesto toho sa používa `404.html` .

Potom spustite nasledujúci príkaz v `htm` (nezabudnite nahradiť `i18n-demo/i18n-demo.github.io.git` vlastnou adresou skladu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Po zatlačení kódu počkajte, kým sa úspešne spustí nasadenie `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pre demo stránku si pozrite:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Nasadenie Na Stránke cloudflare

V porovnaní `github page` [cloudflare page](//pages.cloudflare.com)

`cloudflare page` Nasadenie je zvyčajne založené na nasadení `github page` vyššie.

Vytvorte projekt a zviažte vyššie uvedený sklad `i18n-demo.github.io`

Proces je znázornený na obrázku nižšie:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Ak chcete udeliť prístup `i18n-demo` organizácii, kliknite na `Add Account`

Ak ste zviazali sklad inej organizácie, možno budete musieť dvakrát kliknúť `Add Account` aby ste ho autorizovali, kým sa nová organizácia zobrazí.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ďalej vyberte `i18n-demo.github.io` Sklad, kliknite na tlačidlo `Begin setup` a pre ďalšie kroky použite predvolené hodnoty.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Po prvom viazaní musíte počkať niekoľko minút, kým k nemu budete mať prístup.

Po nasadení môžete naviazať vlastný názov domény.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Po naviazaní vlastného názvu domény prejdite na názov domény a nakonfigurujte prepisovanie cesty jednostránkovej aplikácie, ako je uvedené nižšie:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Pravidlá na obrázku vyššie sú nasledovné, prosím `i18n.site` v prvom riadku nižšie priradeným názvom domény.

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

Okrem toho nakonfigurujte pravidlá vyrovnávacej pamäte, ako je uvedené nižšie, a nastavte trvanie vyrovnávacej pamäte na jeden mesiac.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Zmeňte zhodu názvu domény v druhom kroku na obrázku vyššie na názov domény, ktorý ste viazali.

#### Optimalizácia Nasadenia Webových Stránok v Pevninskej Číne

Ak chcete dosiahnuť lepšiu dostupnosť v sieťovom prostredí pevninskej Číny, najskôr [si zaregistrujte názov domény](//beian.aliyun.com) .

`out/ol/htm` použite úložisko objektov cloudových predajcov v `CDN` +

Edge computing môžete použiť na prepísanie cesty, aby sa prispôsobila jednostránkovým aplikáciám, ako je napríklad [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Pretože záznamy `MX` a `CNAME` záznamov nemôžu koexistovať, ak chcete súčasne dostávať e-maily s názvom domény, musíte spolupracovať so [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) na vyrovnanie `CNAME` do `A` záznam.

Okrem toho, pretože poplatky za prevádzku cloudových predajcov v pevninskej Číne v zahraničí sú relatívne drahé, ak chcete optimalizovať náklady, môžete na dosiahnutie tohto cieľa použiť [bezplatné geografické rozlíšenie a vlastný názov domény DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ! odklon dopravy──Premávka v pevninskej Číne Baidu Cloud `CDN` medzinárodná doprava ide cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Tieto riešenia optimalizácie nasadenia sú komplexnejšie a budú predstavené v samostatných kapitolách v budúcnosti.

#### Všeobecné Presmerovanie Názvu Domény

`www.xxx.com` na vygenerovanie `xxx.com` `*.xxx.com` používate `i18n.site`

Túto požiadavku je možné dosiahnuť pomocou `EdgeScript` ( [anglický dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [čínsky dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) `CDN`

Pridajte názov domény do [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a nasmerujte `*.xxx.com` domény na `CNAME` Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Napríklad konfigurácia presmerovania `*.i18n.site` domény na obrázku vyššie je nasledovná:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Nasadiť Pomocou nginx

Pridajte konfiguráciu podobnú nasledujúcej v `server` nginx kde `/root/i18n/md/out/ol/htm` ju zmeňte na cestu svojho vlastného projektu `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Adresárová Štruktúra

#### Verejnosti

Statické súbory webovej stránky, ako napríklad `favicon.ico` `robots.txt` atď.

Súbory ikon tu môžu byť generované pomocou [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

V `.i18n` sú konfiguračné súbory `i18n.site` , prekladová vyrovnávacia pamäť atď. Podrobnosti nájdete v nasledujúcej kapitole ["Konfigurácia"](/i18n.site/conf) .

#### en

Adresár zdrojového jazyka, `.i18n/conf.yml` `fromTo` `en` v konfiguračnom súbore

```yaml
i18n:
  fromTo:
    en: zh
```

Pozrite si prosím konfiguráciu prekladu [i18](/i18/use)


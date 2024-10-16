# Installeer & Deploy

## Configuratie van het token

`i18n.site` bevat een ingebouwde `i18` vertaalmiddelen. Klik [hier](/i18/use) om naar het document van `i18` te verwijzen voor de configuratie van het toegangstoken.

## Installatie

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demonstratieproject

Laten we beginnen met een demonstratieproject om te leren hoe je `i18n.site` kunt gebruiken.

We klonen eerst de demonstratiewinkel en voeren de volgende opdracht uit:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gebruikers in China kunnen:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

De naam van de directory voor het klonen van de `demo.i18n.site` repository moet `md` zijn, om lokale preview met `docker` mogelijk te maken.

### Vertaling

Ga eerst naar de map `md` en voer `i18n.site` uit, wat `en` naar `zh` vertaalt.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Na het uitvoeren worden de vertaal- en cachebestanden gegenereerd. Vergeet niet om deze toe te voegen aan de repository met `git add .` in de map `md`.

### Lokale preview

Installeer en start `docker` (aanbevolen voor `MAC`-gebruikers: gebruik [orbstack](https://orbstack.dev) als runtime voor `docker`).

Ga vervolgens naar de map `docker` en voer `./up.sh` uit, en bezoek vervolgens lokaal [https://127.0.0.1](https://127.0.0.1) voor de preview.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Content publiceren

`i18n.site` maakt gebruik van een [single-page applicatie](https://developer.mozilla.org/docs/Glossary/SPA) architectuur, waarbij de toegangspagina van de website en de inhoud van de website onafhankelijk worden geïmplementeerd.

Na het uitvoeren van de vertaling worden de mappen `htm` en `v` gegenereerd onder `md/out/dev`.

Hier betekent `dev` dat het is gebouwd op basis van het configuratiebestand `.i18n/htm/dev.yml`.

`dev` map:

In de `htm` directory bevindt zich de toegangspagina van de website.

In de map `v` bevindt zich de inhoud van de website met versienummers.

Voor lokale preview hoeft u zich geen zorgen te maken over het versienummer; alle bestanden worden gekopieerd naar de map `out/dev/v/0.1.0`.

Bij een officiële release worden de gewijzigde bestanden gekopieerd naar de nieuwe versienummerdirectory.

#### Gebruik -c Om Het Configuratiebestand Op Te Geven

Verschillende configuratiebestanden zullen overeenkomstige mappen maken in de `out` map.

Bijvoorbeeld, `.i18n/htm/ol.yml` maakt de map `out/ol` aan.

`dev.yml` en `ol.yml` zijn de standaardconfiguraties.

`dev` is de afkorting van `development`, wat de ontwikkelomgeving aangeeft, wordt gebruikt voor lokale preview en is ook het standaardconfiguratiebestand.
`ol` is de afkorting van `online`, wat de live omgeving aangeeft, wordt gebruikt voor officiële release en is ook het standaardconfiguratiebestand bij het publiceren met de opdrachtregelparameter `-n` naar `npm`.

U kunt ook andere configuratiebestanden maken. Gebruik `--htm_conf` op de opdrachtregel om het naam van het configuratiebestand op te geven dat u wilt gebruiken:

Bijvoorbeeld:
```
i18n.site --htm_conf yourConfig --save
```

Hier staat `--save` voor het bijwerken van het versienummer van de release.

#### <a rel=id href="#npm" id="npm"></a> Content publiceren op npmjs.com

Het publiceren van content naar [npmjs.com](//npmjs.com) is de aanbevolen standaardoplossing (zie [High Availability Frontend](/i18n.site/feature#ha)).

##### npm login & Publiceren

Installeer `nodejs` en log in met `npm login`.

Bewerk `md/.i18n/htm/ol.yml` en wijzig `i18n.site` in `v: //unpkg.com/i18n.site` naar uw eigen `npm`-pakketnaam.

Gebruik gewoon de beschikbare pakketnaam op [npmjs.com](//npmjs.com). Het gebruik van de website-domeinnaam als pakketnaam is een goed idee.

Wanneer u publiceert op basis van een `npm`-pakket, gebruik dan **zeker** `//unpkg.com/` als voorvoegsel voor de `v:`-waarde. `i18n.site` heeft de cache-tijd van `/.v` onder dit pad speciaal geoptimaliseerd om tijdige weergave van nieuwe releases te waarborgen.

Voer `i18n.site --npm` of `i18n.site -n` uit in de map `md` om te vertalen en te publiceren.

Gebruikt u een CI-omgeving voor publicatie, dan hoeft u `nodejs` niet te installeren. Kopieer in plaats daarvan de ingelogde en met publicatierechten uit `~/.npmrc` naar de omgeving.

Als u de pakketnaam van `v:` in `ol.yml` wijzigt, **verwijder dan eerst `.i18n/v/ol`** en publiceer deze vervolgens.

##### npm Publicatie Proxyserver

Als gebruikers op het Chinese vasteland netwerkproblemen ondervinden en geen `npm`-pakketten kunnen publiceren, kunnen ze de omgevingsvariabele `https_proxy` instellen om de proxyserver in te stellen.

Als je proxyserverpoort `7890` is, kun je het volgende schrijven:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Zelfgehoste inhoud

Als je de inhoud zelf wilt hosten, bewerk dan eerst `md/.i18n/htm/ol.yml` en wijzig `v: //unpkg.com/i18n.site` in je eigen URL-voorvoegsel, bijvoorbeeld `v: //i18n-v.xxx.com`.

Ga naar de map `md` en voer uit

```
i18n.site --htm_conf ol --save
```

of afkorting

```
i18n.site -c ol -s
```

Configureer vervolgens de inhoud in de map `md/out/ol/v` met het URL-voorvoegsel dat je hebt ingesteld in `v:`.

**Configureer ten slotte de cache-tijd van het pad dat eindigt op `/.v` op `1s`**; anders is de nieuw vrijgegeven inhoud niet onmiddellijk toegankelijk.

De cache-tijd voor andere paden kan worden ingesteld op één jaar of langer om onnodige verzoeken te verminderen.

##### Inhoud hosten op S3

Bij het zelfhosten van inhoud, naast het gebruik van je eigen server, is het gebruik van `S3` + `CDN` een andere veelvoorkomende keuze.

Gebruik [rclone](https://rclone.org) om in te loggen op de `S3` server en raadpleeg het volgende script om het te wijzigen. Kopieer alleen de incrementele wijzigingen naar `S3` bij elke release.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Vergeet niet om `CDN` zo te configureren dat de cache-tijd van het pad dat eindigt op `/.v` `1s` is, anders is de nieuw vrijgegeven inhoud niet onmiddellijk toegankelijk.

### Website publiceren

De website kan overal worden geïmplementeerd, zoals [GitHub Pages](https://pages.github.com) en [Cloudflare Pages](https://pages.cloudflare.com).

Omdat de website een [single-page applicatie](https://developer.mozilla.org/docs/Glossary/SPA) architectuur gebruikt, moet je ervoor zorgen dat je URL-paden zonder `. ` naar `index.html` herschrijft.

De toegangspagina van de website hoeft slechts een keer te worden geïmplementeerd en hoeft niet opnieuw te worden geïmplementeerd bij volgende inhoudsupdates.

#### Implementeren op GitHub Pages

[Klik hier](https://github.com/account/organizations/new?plan=free) om een organisatie aan te maken op GitHub. Gebruik `i18n-demo` als voorbeeld.

Maak vervolgens een repository `i18n-demo.github.io` onder deze organisatie (vervang `i18n-demo` door de naam van de organisatie die je hebt aangemaakt):

![](https://p.3ti.site/1721098657.avif)

Bij het publiceren van de inhoud in het vorige artikel is `out/ol/htm` gegenereerd. Ga naar deze map en voer uit:

```
ln -s index.html 404.html
```


Omdat `github page` het herschrijven van URL-paden niet ondersteunt, wordt `404.html` gebruikt als alternatief.

Voer vervolgens het volgende commando uit in de map `htm` (vervang `i18n-demo/i18n-demo.github.io.git` door je eigen repository-adres):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nadat u de code heeft gepusht, wacht u tot de deployment van `github page` succesvol is voltooid (zie hieronder), voordat u toegang krijgt.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Voor de demopagina zie:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implementeren op Cloudflare Pages

[cloudflare page](//pages.cloudflare.com) biedt, in tegenstelling tot `github page`, padherschrijving en een vriendelijker bereikbaarheid voor het Chinese vasteland, en wordt aanbevolen.

De inzet van `cloudflare page` is doorgaans gebaseerd op de inzet van `github page` hierboven.

Maak een project aan en bind het `i18n-demo.github.io` repository hierboven.

Het proces wordt weergegeven in de onderstaande afbeelding:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klik op `Add Account` om toegang te verlenen tot de organisatie `i18n-demo`.

Als je het repository van een andere organisatie hebt gebonden, moet je mogelijk twee keer op `Add Account` klikken om twee keer te autoriseren voordat de nieuwe organisatie wordt weergegeven.

![](https://p.3ti.site/1721118306.avif)

Selecteer vervolgens het repository `i18n-demo.github.io` en klik vervolgens op `Begin setup`. Gebruik de standaardwaarden voor de volgende stappen.

![](https://p.3ti.site/1721118490.avif)

Nadat je voor de eerste keer verbinding hebt gemaakt, moet je een paar minuten wachten voordat je er toegang toe krijgt.

Na de implementatie kun je een aangepaste domeinnaam koppelen.

![](https://p.3ti.site/1721119459.avif)

Nadat je de aangepaste domeinnaam hebt gekoppeld, ga je naar de domeinnaam om het padherschrijven van de single-page applicatie te configureren, zoals hieronder weergegeven:

![](https://p.3ti.site/1721119320.avif)

De regels in de bovenstaande afbeelding zijn als volgt. Vervang `i18n.site` in de eerste regel hieronder door de domeinnaam die je hebt gekoppeld.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Configureer bovendien de cache-regels, zoals hieronder weergegeven, en stel de cacheduur in op één maand.

![](https://p.3ti.site/1721125111.avif)

Wijzig de domeinnaam die overeenkomt met de tweede stap in de afbeelding hierboven naar de domeinnaam die je hebt gekoppeld.

#### Optimalisatie van website-implementatie voor China

Als je betere toegankelijkheidsprestaties wilt verkrijgen in de netwerkomgeving van China, [registreer dan eerst je domeinnaam](//beian.aliyun.com).

Gebruik dan de objectopslag van Chinese cloudleveranciers + `CDN` om de inhoud van `out/ol/htm` te implementeren.

Gebruik edge computing om het pad te herschrijven om het aan te passen aan single-page applicaties. [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kan bijvoorbeeld als volgt worden geconfigureerd:

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

Omdat `MX`- en `CNAME`-records niet naast elkaar kunnen bestaan, moet je, als je tegelijkertijd e-mails over domeinnamen wilt ontvangen, samenwerken met het [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) -script om het `CNAME`-record naar een `A`-record te herschrijven.

Omdat de kosten voor buitenlands verkeer van Chinese cloudleveranciers relatief hoog zijn, kun je bovendien [de gratis geografische resolutie van Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's aangepaste domeinnaam (zoals hieronder weergegeven) gebruiken om de kosten te optimaliseren door verkeersverdeling ── verkeer op het vasteland van China via Baidu Cloud `CDN`, internationaal verkeer via Cloudflare.

![](https://p.3ti.site/1721119788.avif)

Dit soort implementatieoptimalisaties zijn complexer en zullen in de toekomst in afzonderlijke hoofdstukken worden besproken.

#### Generieke domeinnaamomleiding

Als je `i18n.site` gebruikt om een website als je hoofdwebsite te genereren, moet je doorgaans een omleiding instellen voor meerdere domeinen, dat wil zeggen omleiding van `*.xxx.com` (inclusief `www.xxx.com`) naar `xxx.com`.

Dit vereiste kan worden gerealiseerd met behulp van Alibaba Cloud `CDN` `EdgeScript` ( [Engels document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinees document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Voeg de domeinnaam toe in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) en wijzig de domeinnaam `*.xxx.com` naar de `CNAME` van Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

De configuratie voor de pan-domeinnaam `*.i18n.site` in de afbeelding hierboven is bijvoorbeeld als volgt:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Implementeren met nginx

Voeg een configuratie toe die lijkt op de volgende in de `server`-paragraaf van nginx. Verander `/root/i18n/md/out/ol/htm` in het pad van je eigen project `out/ol/htm`:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directorystructuur

#### `public`

Statische bestanden van de website, zoals `favicon.ico`, `robots.txt`, etc.

De pictogrambestanden hier kunnen worden gegenereerd met [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

In de map `.i18n` bevinden zich de configuratiebestanden en vertaalcache van `i18n.site`. Zie het volgende hoofdstuk ["Configuratie"](/i18n.site/conf) voor meer details.

#### `en`

De bronntaalmap corresponds met `en` in de `fromTo`-configuratie van het `.i18n/conf.yml`-bestand

```yaml
i18n:
  fromTo:
    en: zh
```

Raadpleeg de vertaalconfiguratie [i18](/i18/use).
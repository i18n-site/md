# Installeer & deployen

## Toegangstoken configureren

`i18n.site` bevat een ingebouwde `i18` vertaalmachine. Klik [hier](/i18/use) om naar het `i18` document te verwijzen voor de configuratie van het toegangstoken.

## Installeren

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoproject

Laten we beginnen met een demoproject om te leren hoe `i18n.site` te gebruiken.

We klonen eerst de demo-repository en voeren de volgende opdracht uit:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gebruikers in China kunnen:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

De naam van de map waarin de code van `demo.i18n.site` wordt gekloond, moet `md` zijn om lokale preview met `docker` mogelijk te maken.

### Vertalen

Ga naar de map `md` en voer `i18n.site` uit, wat `en` naar `zh` vertaalt.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Na het uitvoeren worden de vertaal- en cachebestanden gegenereerd. Voeg deze toe aan de repository in de map `md` met `git add .`.

### Lokaal voorbeeld

Installeer en start `docker` ( `MAC` gebruiker raadt aan om [orbstack](https://orbstack.dev) te gebruiken als runtime voor `docker` ).

Ga naar de map `docker` en voer `./up.sh` uit, en bezoek vervolgens lokaal [https://127.0.0.1](https://127.0.0.1) voor een voorbeeld.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Plaats inhoud

`i18n.site` maakt gebruik van een [single-page applicatie](https://developer.mozilla.org/docs/Glossary/SPA) architectuur, waarbij de toegangspagina van de website en de inhoud onafhankelijk worden geïmplementeerd.

Na het uitvoeren van de vertaling worden de mappen `htm` en `v` gegenereerd onder `md/out/dev`.

Hier betekent `dev` dat het is gebouwd op basis van het `.i18n/htm/dev.yml` configuratiebestand.

`dev` map:

In de `htm` map bevindt zich de toegangspagina van de website.

In de map `v` bevindt zich de inhoud met versienummers.

Voor lokale preview hoeft u zich geen zorgen te maken over het versienummer; alle bestanden worden gekopieerd naar de map `out/dev/v/0.1.0`.

Bij een officiële release worden de gewijzigde bestanden gekopieerd naar de nieuwe versienummerdirectory.

#### Gebruik -c Om Het Configuratiebestand Op Te Geven

Verschillende configuratiebestanden zullen overeenkomstige mappen maken in de `out` map.

Bijvoorbeeld, `.i18n/htm/ol.yml` maakt de map `out/ol` aan.

`dev.yml` en `ol.yml` zijn de standaardconfiguraties.

`dev` is de afkorting van `development`, wat de ontwikkelomgeving aangeeft, wordt gebruikt voor lokale preview en is het standaardconfiguratiebestand.
`ol` is de afkorting van `online`, wat de online omgeving aangeeft, wordt gebruikt voor officiële release en is ook het standaardconfiguratiebestand bij het gebruik van de opdrachtregelparameter `-n` voor het publiceren naar `npm`.

U kunt ook andere configuratiebestanden maken. Gebruik `--htm_conf` op de opdrachtregel om de naam van het configuratiebestand op te geven dat u wilt gebruiken:

Bijvoorbeeld:
```
i18n.site --htm_conf yourConfig --save
```

Hier staat `--save` voor het bijwerken van het versienummer van de release.

#### <a rel=id href="#npm" id="npm"></a> Publiceer inhoud op npmjs.com

Het publiceren van inhoud naar [npmjs.com](//npmjs.com) is de aanbevolen standaardoplossing (zie [Front-end hoge beschikbaarheid](/i18n.site/feature#ha)).

##### npm login & Publiceren

Installeer `nodejs` en log in met `npm login`.

Bewerk `md/.i18n/htm/ol.yml` en verander `i18n.site` in `v: //unpkg.com/i18n.site` naar uw eigen `npm` pakketnaam.

Gebruik gewoon de beschikbare pakketnaam op [npmjs.com](//npmjs.com). Het gebruik van de domeinnaam van de website als pakketnaam is een goede keuze.

Wanneer u publiceert op basis van pakket `npm` , **zorg er dan voor dat u `//unpkg.com/` gebruikt voor** het voorvoegsel van de waarde `v:` `i18n.site` heeft speciaal de cachetijd van `/.v` onder dit voorvoegselpad geoptimaliseerd om tijdige weergave van nieuwe releases te bereiken.

Voer `i18n.site --npm` of `i18n.site -n` uit in de map `md` om te vertalen en te publiceren.

Als u een continue integratieomgeving gebruikt om te publiceren, hoeft u `nodejs` niet te installeren. Kopieer gewoon de ingelogde en publicatierechten `~/.npmrc` naar de omgeving.

Als u de pakketnaam van `v:` in `ol.yml` wijzigt, **verwijder dan eerst `.i18n/v/ol`** en publiceer deze vervolgens.

##### npm-publicatie proxyserver

Als gebruikers op het vasteland van China netwerkproblemen tegenkomen en geen `npm` pakketten kunnen publiceren, kunnen ze de omgevingsvariabele `https_proxy` instellen om de proxyserver te configureren.

Als uw proxyserverpoort `7890` is, kunt u dit zo schrijven:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Zelfgehoste inhoud

Als u de inhoud zelf wilt hosten, bewerkt u eerst `md/.i18n/htm/ol.yml` en wijzig `v: //unpkg.com/i18n.site` in uw URL-voorvoegsel, bijvoorbeeld `v: //i18n-v.xxx.com`.

Ga naar de map `md` en voer uit:

```
i18n.site --htm_conf ol --save
```

of afkorting

```
i18n.site -c ol -s
```

Configureer vervolgens de inhoud in de map `md/out/ol/v` met het URL-voorvoegsel dat is ingesteld in `v:`.

**Configureer de cachetijd van het pad dat eindigt op `/.v` op `1s`**. Anders is de nieuw vrijgegeven inhoud niet onmiddellijk toegankelijk.

De cachetijd voor andere paden kan worden ingesteld op één jaar of langer om onnodige verzoeken te verminderen.

##### Host inhoud naar S3

Bij het zelf hosten van inhoud, naast het gebruik van uw eigen server, is het gebruik van `S3` + `CDN` een andere veelvoorkomende keuze.

U kunt [rclone](https://rclone.org) gebruiken om in te loggen op de `S3` server, en het volgende script raadplegen en wijzigen, om alleen de incrementele wijzigingen naar `S3` te kopiëren bij elke release.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Vergeet niet om `CDN` zo te configureren dat de cachetijd van het pad dat eindigt op `/.v` `1s` is, anders is de nieuw vrijgegeven inhoud niet onmiddellijk toegankelijk.

### Website publiceren

De website kan elders worden geïmplementeerd; [github page](https://pages.github.com) en [cloudflare page](https://pages.cloudflare.com) zijn goede keuzes.

Omdat de website een [single-page applicatie](https://developer.mozilla.org/docs/Glossary/SPA) architectuur gebruikt, moet u ervoor zorgen dat u URL-paden zonder `. ` naar `index.html` herschrijft.

De website-invoerpagina hoeft slechts eenmaal te worden geïmplementeerd en hoeft niet opnieuw te worden geïmplementeerd bij latere inhoudsupdates.

#### Implementeren op GitHub Page

[Klik hier](https://github.com/account/organizations/new?plan=free) om een organisatie aan te maken op GitHub. Gebruik `i18n-demo` als voorbeeld.

Maak vervolgens een repository `i18n-demo.github.io` onder deze organisatie (vervang `i18n-demo` door de naam van de organisatie die u hebt aangemaakt)

![](https://p.3ti.site/1721098657.avif)

Bij het publiceren van de inhoud in het vorige artikel is `out/ol/htm` gegenereerd. Ga naar deze map en voer uit:

```
ln -s index.html 404.html
```


Omdat `github page` het herschrijven van URL-paden niet ondersteunt, wordt in plaats daarvan `404.html` gebruikt.

Voer vervolgens het volgende commando uit in de map `htm` (vervang `i18n-demo/i18n-demo.github.io.git` door uw eigen repository-adres):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nadat u de code heeft gepusht, wacht u tot de implementatie van `github page` succesvol is uitgevoerd (zoals hieronder weergegeven) voordat u er toegang toe krijgt.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Voor een demopagina, zie:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implementeren op Cloudflare Page

[cloudflare page](//pages.cloudflare.com) met `github page` biedt het padherschrijving, is het vriendelijker voor het vasteland van China en is het beter toegankelijk.

De inzet van `cloudflare page` is doorgaans gebaseerd op de inzet van `github page` hierboven.

Maak een project aan en bind het `i18n-demo.github.io` repository hierboven.

Het proces wordt weergegeven in de onderstaande afbeelding:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klik op `Add Account` om toegang te verlenen tot de organisatie `i18n-demo`.

Als u het repository van een andere organisatie hebt gebonden, moet u mogelijk twee keer op `Add Account` klikken om twee keer te autoriseren voordat de nieuwe organisatie wordt weergegeven.

![](https://p.3ti.site/1721118306.avif)

Selecteer vervolgens het repository `i18n-demo.github.io` en klik vervolgens op `Begin setup`. Gebruik de standaardwaarden voor de volgende stappen.

![](https://p.3ti.site/1721118490.avif)

Nadat u voor de eerste keer verbinding heeft gemaakt, moet u een paar minuten wachten voordat u er toegang toe krijgt.

Na de implementatie kunt u een aangepaste domeinnaam koppelen.

![](https://p.3ti.site/1721119459.avif)

Nadat u de aangepaste domeinnaam hebt gekoppeld, gaat u naar de domeinnaam om het padherschrijven van de single-page applicatie te configureren, zoals hieronder weergegeven:

![](https://p.3ti.site/1721119320.avif)

In de afbeelding hierboven zijn de regels als volgt. Vervang `i18n.site` in de eerste regel hieronder door de domeinnaam die u hebt gekoppeld.

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

Configureer bovendien de cacheregels, zoals hieronder weergegeven, en stel de cacheduur in op één maand.

![](https://p.3ti.site/1721125111.avif)

Wijzig de domeinnaam die overeenkomt met de tweede stap in de afbeelding hierboven naar de domeinnaam die u hebt gekoppeld.

#### Optimalisatie van website-implementatie op het Chinese vasteland

Als u betere toegankelijkheidsprestaties wilt verkrijgen in de netwerkomgeving van het Chinese vasteland, [registreer dan eerst een domeinnaam](//beian.aliyun.com).

Gebruik dan de objectopslag van cloudleveranciers op het Chinese vasteland + `CDN` om de inhoud onder `out/ol/htm` te implementeren.

U kunt edge computing gebruiken om het pad te herschrijven om het aan te passen aan single-page applicaties. [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kan bijvoorbeeld als volgt worden geconfigureerd:

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

Omdat `MX`- en `CNAME`-records niet naast elkaar kunnen bestaan, moet u, als u tegelijkertijd e-mails over domeinnamen wilt ontvangen, samenwerken met het [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) -script om `CNAME`-records naar `A`-records te herschrijven.

Omdat de kosten voor buitenlands verkeer van cloudleveranciers op het Chinese vasteland relatief hoog zijn, kunt u bovendien [de gratis geografische resolutie van Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's aangepaste domeinnaam (zoals hierboven weergegeven) gebruiken om de kosten te optimaliseren door verkeersafleiding ── verkeer op het Chinese vasteland via Baidu Cloud `CDN`, internationaal verkeer via Cloudflare.

![](https://p.3ti.site/1721119788.avif)

Dit soort implementatieoptimalisaties zijn complexer en zullen in de toekomst in afzonderlijke hoofdstukken worden besproken.

#### Generieke domeinnaalomleiding

Als u `i18n.site` gebruikt om een website als uw hoofdwebsite te genereren, moet u doorgaans een omleiding configureren voor meerdere domeinen, dat wil zeggen omleidingen van `*.xxx.com` (inclusief `www.xxx.com`) naar `xxx.com`.

Deze vereiste kan worden bereikt met behulp van Alibaba Cloud `CDN` `EdgeScript` ( [Engels document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinees document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Voeg de domeinnaam toe in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) Wijs de domeinnaam `*.xxx.com` tot `CNAME` aan in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

De configuratie voor de generieke domeinnaam `*.i18n.site` in de afbeelding hierboven is bijvoorbeeld als volgt:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Implementeren met nginx

Voeg een configuratie toe die lijkt op de volgende in de `server`-paragraaf van nginx. Verander `/root/i18n/md/out/ol/htm` naar het pad van uw eigen project `out/ol/htm`:

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

In de map `.i18n` bevinden zich de configuratiebestanden, vertaalcache, etc. van `i18n.site`. Zie het volgende hoofdstuk ["Configuratie"](/i18n.site/conf) voor meer details.

#### `en`

Brontaalmap, overeenkomend met `en` van `fromTo` op `.i18n/conf.yml` configuratiebestand

```yaml
i18n:
  fromTo:
    en: zh
```

Bekijk de vertaalconfiguratie in [i18](/i18/use).
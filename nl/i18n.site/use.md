# Installeer &

## Configuratietoken

`i18` vertaaltool is ingesloten, klik hier om het $-document te `i18n.site` [`i18` het toegangstoken te configureren](/i18/use) .

## Installeren

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoproject

Laten we beginnen met een demoproject en leren hoe we `i18n.site`

We klonen eerst de demo-repository en voeren de opdracht als volgt uit:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gebruikers op het Chinese vasteland kunnen:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

De mapnaam van de codebasiskloon moet `md` zijn om lokale preview met `docker` mogelijk te maken `demo.i18n.site`

### Vertalen

Voer eerst de map `md` in en voer `i18n.site` uit, wat `en` zal vertalen naar `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Na het uitvoeren worden vertaal- en cachebestanden gegenereerd. Vergeet niet om deze toe te voegen aan de repository `git add . ` in de map `md`

### Lokaal Voorbeeld

Installeer en start `docker` ( `MAC` raden aan om [orbstack](https://orbstack.dev) te gebruiken als runtime van `docker` ).

Voer vervolgens de map `docker` in en voer `./up.sh` uit, en bezoek vervolgens lokaal [https://127.0.0.1](https://127.0.0.1) voorbeeld.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Plaats Inhoud

Maakt gebruik van een [applicatiearchitectuur van één pagina](https://developer.mozilla.org/docs/Glossary/SPA) , en de toegangspagina van de website en `i18n.site` website-inhoud worden onafhankelijk geïmplementeerd.

Na het uitvoeren van de bovenstaande vertaling worden de mappen `htm` en `v` gegenereerd in de map `md/out/dev`

Hier geeft `dev` aan dat het is gebouwd op basis van het `.i18n/htm/dev.yml` .

`dev` Onder inhoud :

Onder de directory bevindt `htm` de toegangspagina van de website.

`v` De map bevat de website-inhoud met versienummer.

Lokale preview kopieert alle bestanden naar de map `out/dev/v/0.1.0` , ongeacht het versienummer.

Voor officiële release worden gewijzigde bestanden gekopieerd naar de nieuwe versienummerdirectory.

#### Gebruik -c Om Het Configuratiebestand Op Te Geven

Verschillende configuratiebestanden zullen overeenkomstige mappen maken onder de map `out`

`.i18n/htm/ol.yml` zal bijvoorbeeld een map `out/ol` maken.

`dev.yml` `ol.yml` zijn de standaardconfiguraties.

`dev` De afkorting van `development` , die de ontwikkelomgeving vertegenwoordigt, wordt gebruikt voor lokale preview en is ook het standaardconfiguratiebestand.
`ol` De afkorting van `online` , die de online omgeving vertegenwoordigt, wordt gebruikt voor officiële release en is ook het standaardconfiguratiebestand bij publicatie naar `npm` met behulp van de opdrachtregelparameter `-n` .

U kunt ook andere configuratiebestanden maken. Gebruik de `--htm_conf` om de naam van het configuratiebestand op te geven:

Bijvoorbeeld:
```
i18n.site --htm_conf yourConfig --save
```

Hier geeft `--save` het versienummer van de update-release aan.

#### <a rel=id href="#npm" id="npm"></a> Publiceer inhoud op npmjs.com

Het publiceren van inhoud naar [npmjs.com](//npmjs.com) is de aanbevolen standaardoplossing (zie [Front-end hoge beschikbaarheid](/i18n.site/feature#ha) ).

##### npm login & Uitgave

Installeer `nodejs` gebruik `npm login` om in te loggen.

Bewerk `md/.i18n/htm/ol.yml` verander `i18n.site` in `v: //unpkg.com/i18n.site` in uw eigen `npm` pakketnaam.

Gebruik gewoon de onbezette pakketnaam op [npmjs.com](//npmjs.com) Het gebruik van de websitedomeinnaam als pakketnaam is een goede keuze.

Wanneer u publiceert op basis van het `npm` -pakket, **zorg er dan voor dat u `//unpkg.com/`** als voorvoegsel van de `v:` -waarde gebruikt. De cachetijd `i18n.site` onder dit voorvoegselpad `/.v` is speciaal geoptimaliseerd om tijdige weergave van nieuwe releases mogelijk te maken.

Voer `i18n.site --npm` of `i18n.site -n` uit in de map `md` om te vertalen en te publiceren.

Als u een continue integratieomgeving gebruikt om te publiceren, hoeft u deze niet te installeren `nodejs` Kopieer gewoon de ingelogde en gepubliceerde toestemming `~/.npmrc` naar de omgeving.

Als u de pakketnaam in `v:` in `ol.yml` wijzigt, zorg er dan **voor dat u eerst `.i18n/v/ol` verwijdert** en deze vervolgens publiceert.

##### Proxyserver Gepubliceerd Door npm

Als gebruikers op het vasteland van China netwerkproblemen ondervinden en het `npm` -pakket niet kunnen publiceren, kunnen ze de omgevingsvariabele `https_proxy` instellen om de proxyserver te configureren.

Ervan uitgaande dat uw proxyserverpoort `7890` kunt u schrijven:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Zelf-Gehoste Inhoud

Als u de inhoud zelf wilt hosten, wijzigt `md/.i18n/htm/ol.yml` eerst `v: //unpkg.com/i18n.site` in uw URL-voorvoegsel, zoals `v: //i18n-v.xxx.com` .

Ga naar de map `md` en voer het uit

```
i18n.site --htm_conf ol --save
```

of afkorting

```
i18n.site -c ol -s
```

Configureer vervolgens de inhoud in de map `md/out/ol/v` naar het URL-voorvoegselpad dat is ingesteld in `v:` .

**Configureer ten slotte de cachetijd van het pad `/.v` eindigt op `1s`** , anders is de nieuw vrijgegeven inhoud niet onmiddellijk toegankelijk.

De cachetijd voor andere paden kan worden ingesteld op één jaar of langer om onnodige verzoeken te verminderen.

##### Host Inhoud Naar s3

Om inhoud zelf te hosten, naast het gebruik van uw eigen server, is een andere veel voorkomende optie `CDN` gebruik + `S3` .

U kunt de [rclone](https://rclone.org) Login `S3` server gebruiken, vervolgens het onderstaande script raadplegen en wijzigen en alleen incrementele wijzigingen naar `S3` kopiëren elke keer dat u publiceert.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Vergeet niet om `CDN` zodat de cachetijd van het pad dat eindigt op `/.v` `1s` is, anders heb je niet onmiddellijk toegang tot de nieuw uitgebrachte inhoud.

### Website Publiceren

De website kan overal ingezet worden [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) zijn goede keuzes.

Omdat de website de architectuur van [een applicatie met één pagina](https://developer.mozilla.org/docs/Glossary/SPA) overneemt, moet u er rekening mee houden dat u het URL-pad dat niet `. ` bevat `index.html` herschrijft.

De website-invoerpagina hoeft slechts één keer te worden geïmplementeerd en het is niet nodig om de website-invoerpagina opnieuw te implementeren voor volgende inhoudsupdates.

#### Implementeren Op Github-Pagina

[Klik eerst hier github Maak een organisatie aan](https://github.com/account/organizations/new?plan=free) . De volgende organisatienaam is `i18n-demo`

Maak vervolgens een magazijn aan onder deze `i18n-demo.github.io` (vervang `i18n-demo` door de organisatienaam die u heeft aangemaakt):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Bij het publiceren van de inhoud in het vorige artikel is deze gegenereerd `out/ol/htm` Voer deze map in en voer uit :

```
ln -s index.html 404.html
```


Omdat `github page` het herschrijven van URL-paden niet ondersteunt, wordt in plaats daarvan `404.html` gebruikt.

Voer vervolgens het volgende commando uit in de map `htm` (vergeet niet om `i18n-demo/i18n-demo.github.io.git` te vervangen door uw eigen magazijnadres) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nadat u de code hebt gepusht, wacht u tot de implementatie van `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Voor een demopagina, zie:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implementeer Op De Cloudflare-Pagina

Vergeleken [cloudflare page](//pages.cloudflare.com) `github page` biedt het padherschrijving, is het vriendelijker voor het vasteland van China en is het beter toegankelijk.

De implementatie is `cloudflare page` gebaseerd op de implementatie van `github page` hierboven.

Maak een project aan en bind het bovenstaande magazijn `i18n-demo.github.io`

Het proces wordt weergegeven in de onderstaande afbeelding:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Klik op `Add Account` om toegang te verlenen tot de `i18n-demo` .

Als u het magazijn van een andere organisatie heeft gebonden, moet u mogelijk tweemaal op `Add Account` klikken om dit tweemaal te autoriseren voordat de nieuwe organisatie wordt weergegeven.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Selecteer vervolgens `i18n-demo.github.io` Magazijn, klik vervolgens op `Begin setup` en gebruik de standaardwaarden voor de volgende stappen.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nadat u voor de eerste keer verbinding heeft gemaakt, moet u een paar minuten wachten voordat u er toegang toe krijgt.

Na de implementatie kunt u een aangepaste domeinnaam binden.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Nadat u de aangepaste domeinnaam hebt gekoppeld, gaat u naar de domeinnaam om het padherschrijven van de toepassing met één pagina te configureren, zoals hieronder weergegeven:

<img alt="" src="https://p.3ti.site/1721119320.avif">

De regels in de afbeelding hierboven zijn als volgt. Vervang `i18n.site`

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

<img alt="" src="https://p.3ti.site/1721125111.avif">

Wijzig de domeinnaam die overeenkomt met de tweede stap in de afbeelding hierboven naar de domeinnaam die u hebt gebonden.

#### Optimaliseren Van Website-Implementatie Op Het Vasteland Van China

Als u betere toegankelijkheidsprestaties wilt verkrijgen in de netwerkomgeving van het Chinese vasteland, [registreer dan eerst een domeinnaam](//beian.aliyun.com) .

Gebruik `out/ol/htm` de objectopslag van cloudleveranciers op het vasteland `CDN` China +

U kunt edge computing gebruiken om het pad te herschrijven om het aan te passen aan applicaties met één pagina, zoals [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Omdat `MX` records en `CNAME` records niet naast elkaar kunnen bestaan, moet u `CNAME` als u tegelijkertijd e-mails `A` domeinnamen wilt ontvangen, samenwerken met het [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Omdat de buitenlandse verkeerskosten van cloudleveranciers op het vasteland van China relatief duur zijn, kunt u bovendien [de gratis geografische resolutie van Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's aangepaste domeinnaam (zoals hieronder weergegeven) gebruiken als u de kosten wilt optimaliseren verkeersomleiding──Verkeer op het vasteland van China Baidu Cloud `CDN` internationaal verkeer gaat cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Deze oplossingen voor implementatieoptimalisatie zijn complexer en zullen in de toekomst in afzonderlijke hoofdstukken worden geïntroduceerd.

#### Generieke Domeinnaamomleiding

Als u `i18n.site` gebruikt om een ​​website als uw hoofdwebsite te genereren, moet u doorgaans een omleiding over meerdere domeinen configureren, dat wil zeggen dat u `*.xxx.com` (inclusief `www.xxx.com` ) toegang omleidt naar `xxx.com` .

Aan deze vereiste kan worden voldaan met behulp van Alibaba `CDN` 's `EdgeScript` ( [Engels document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinees document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Voeg een domeinnaam toe in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) en wijs `*.xxx.com` domeinnaam naar Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

De omleidingsconfiguratie `*.i18n.site` de pan-domeinnaam van de bovenstaande afbeelding is bijvoorbeeld als volgt:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Implementeren Met nginx

Voeg een configuratie toe die lijkt op de volgende in `server` nginx `/root/i18n/md/out/ol/htm` wijzig deze naar het pad van uw eigen project `out/ol/htm` :

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

#### Openbaar

Statische bestanden van de website, zoals `favicon.ico` `robots.txt` , etc.

De pictogrambestanden hier kunnen worden gegenereerd met [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Onder de map bevinden zich `i18n.site` 's configuratiebestanden, vertaalcache, enz. Zie het volgende hoofdstuk ["Configuratie"](/i18n.site/conf) voor details.

#### Nl

Brontaalmap, overeenkomend `.i18n/conf.yml` `fromTo` `en` in het configuratiebestand

```yaml
i18n:
  fromTo:
    en: zh
```

Raadpleeg de configuratie van vertaling [i18](/i18/use)


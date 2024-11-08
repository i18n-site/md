# Implementatie en Online

`i18n.site` maakt gebruik van een [applicatiearchitectuur van één pagina](https://developer.mozilla.org/docs/Glossary/SPA) , en de toegangspagina van de website en de website-inhoud worden onafhankelijk geïmplementeerd.

Na het uitvoeren van de bovenstaande vertaling worden mappen `htm` en `v` gegenereerd onder de map `md/out/dev` .

Hier betekent `dev` dat het is gebouwd op basis van het `.i18n/htm/dev.yml` configuratiebestand.

`dev` map :

De `htm` directory is de toegangspagina van de website.

De map `v` bevat website-inhoud met versienummers.

Lokale preview maakt zich niet druk om het versienummer en kopieert alle bestanden naar de map `out/dev/v/0.1.0` .

Voor officiële release worden gewijzigde bestanden gekopieerd naar de nieuwe versienummerdirectory.

## Geef Het Configuratiebestand Op Met `-c`

Verschillende configuratiebestanden zullen overeenkomstige mappen aanmaken in de map `out` .

Met `.i18n/htm/main.yml` wordt bijvoorbeeld de map `out/main` gemaakt.

`dev.yml` en `main.yml` zijn de standaardconfiguraties.

`dev` is de afkorting van `development` , die de ontwikkelomgeving aangeeft, gebruikt voor lokale preview, en is ook het standaardconfiguratiebestand.
`ol` is de afkorting van `online` , die de online omgeving aangeeft, die wordt gebruikt voor officiële release. Het is ook het standaardconfiguratiebestand bij het gebruik van opdrachtregelparameters `-n` tot `npm` om vrij te geven.

U kunt ook andere configuratiebestanden maken. Gebruik `--htm_conf` op de opdrachtregel om de naam van het configuratiebestand op te geven die u wilt gebruiken:

Bijvoorbeeld:
```
i18n.site --htm_conf dist --save
```

Hier staat `--save` voor het versienummer van de update-release.

## <a rel=id href="#npm" id="npm"></a> Publiceer inhoud op npmjs.com

Het publiceren van inhoud naar [npmjs.com](//npmjs.com) is de aanbevolen standaardoplossing (zie [Front-end hoge beschikbaarheid](/i18n.site/feature#ha) ).

### npm Inloggen & Bericht

Installeer `nodejs` , log in met `npm login` .

Bewerk `md/.i18n/htm/main.yml` en verander de waarde van [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` als uw eigen `npm` pakketnaam. Elke onbezette pakketnaam op [npmjs.com](//npmjs.com)

Wijzig dan `md/.i18n/htm/main.package.json`

Voer `i18n.site --npm` of `i18n.site -n` uit in de map `md` om te vertalen en publiceren.

Als u een continue integratieomgeving gebruikt om te publiceren, hoeft u `nodejs` niet te installeren. Kopieer gewoon de ingelogde en publicatierechten `~/.npmrc` naar de omgeving.

Als u de pakketnaam van `v:` op `main.yml` wijzigt, **zorg er dan voor dat u eerst `.i18n/v/main` verwijdert** en deze vervolgens publiceert.

#### Proxyserver Gepubliceerd Door npm

Als gebruikers op het vasteland van China netwerkproblemen tegenkomen en geen `npm` pakketten kunnen publiceren, kunnen ze de omgevingsvariabele `https_proxy` instellen om de proxyserver te configureren.

Ervan uitgaande dat uw proxyserverpoort `7890` is, kunt u schrijven:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Zelf-Gehoste Inhoud

Als u de inhoud zelf wilt hosten, bewerkt u eerst `md/.i18n/htm/main.yml` en wijzigt u `v: //unpkg.com/i18n.site` in uw URL-voorvoegsel, bijvoorbeeld `v: //i18n-v.xxx.com` .

Voer de map `md` in en voer uit

```
i18n.site --htm_conf ol --save
```

of afkorting

```
i18n.site -c ol -s
```

Configureer vervolgens de inhoud in de map `md/out/main/v` met het URL-voorvoegselpad dat is ingesteld in `v:` .

**Configureer ten slotte de cachetijd van het pad dat eindigt op `/.v` tot `1s`** , anders is de nieuw vrijgegeven inhoud niet onmiddellijk toegankelijk.

De cachetijd voor andere paden kan worden ingesteld op één jaar of langer om onnodige verzoeken te verminderen.

## Host Inhoud Naar s3

Om inhoud zelf te hosten, naast het gebruik van uw eigen server, is een andere veel voorkomende optie het gebruik `CDN` `S3` + .

U kunt [rclone](https://rclone.org) gebruiken om in te loggen op de `S3` server, vervolgens het volgende script raadplegen en wijzigen, en alleen de incrementele wijzigingen naar `S3` kopiëren voor elke release.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Vergeet niet om `CDN` zo te configureren dat de cachetijd van het pad dat eindigt op `/.v` `1s` is, anders is de nieuw vrijgegeven inhoud niet onmiddellijk toegankelijk.

## Website Publiceren

De website kan overal ingezet worden [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) zijn goede keuzes.

Omdat de website een [toepassingsarchitectuur van één pagina](https://developer.mozilla.org/docs/Glossary/SPA) gebruikt, moet u er rekening mee houden dat u URL-paden die niet `. ` tot `index.html` bevatten, moet herschrijven.

De website-invoerpagina hoeft slechts één keer te worden geïmplementeerd en het is niet nodig om de website-invoerpagina opnieuw te implementeren voor volgende inhoudsupdates.

### Implementeren Op Github-Pagina

[Klik eerst hier github om een organisatie aan te maken](https://github.com/account/organizations/new?plan=free) . De volgende organisatienaam is `i18n-demo` als voorbeeld.

Maak vervolgens magazijn `i18n-demo.github.io` aan onder deze organisatie (vervang `i18n-demo` door de organisatienaam die u heeft aangemaakt):

![](https://p.3ti.site/1721098657.avif)

Bij het publiceren van de inhoud in het vorige artikel is `out/main/htm` gegenereerd. Voer deze map in en voer uit :

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

Nadat u de code heeft gepusht, wacht u tot de implementatie van `github page` succesvol is uitgevoerd (zoals hieronder weergegeven) voordat u er toegang toe krijgt.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Voor de demopagina zie:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Implementeer Op De Cloudflare-Pagina

[cloudflare page](//pages.cloudflare.com) met `github page` biedt het padherschrijving, is het vriendelijker voor het vasteland van China en is het beter toegankelijk.

De inzet van `cloudflare page` is doorgaans gebaseerd op de inzet van `github page` hierboven.

Maak een project aan en bind het `i18n-demo.github.io` magazijn hierboven.

Het proces wordt weergegeven in de onderstaande afbeelding:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klik op `Add Account` om toegang te verlenen aan organisatie `i18n-demo` .

Als u het magazijn van een andere organisatie heeft gebonden, moet u mogelijk twee keer op `Add Account` klikken om twee keer te autoriseren voordat de nieuwe organisatie wordt weergegeven.

![](https://p.3ti.site/1721118306.avif)

Selecteer vervolgens magazijn `i18n-demo.github.io` , klik vervolgens op `Begin setup` en gebruik de standaardwaarden voor de volgende stappen.

![](https://p.3ti.site/1721118490.avif)

Nadat u voor de eerste keer verbinding heeft gemaakt, moet u een paar minuten wachten voordat u er toegang toe krijgt.

Na de implementatie kunt u een aangepaste domeinnaam binden.

![](https://p.3ti.site/1721119459.avif)

Nadat u de aangepaste domeinnaam hebt gekoppeld, gaat u naar de domeinnaam om het padherschrijven van de toepassing met één pagina te configureren, zoals hieronder weergegeven:

![](https://p.3ti.site/1721119320.avif)

De regels in de bovenstaande afbeelding zijn als volgt. Vervang `i18n.site` in de eerste regel hieronder door de domeinnaam die u hebt gebonden.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Configureer bovendien de cacheregels, zoals hieronder weergegeven, en stel de cacheduur in op één maand.

![](https://p.3ti.site/1721125111.avif)

Wijzig de domeinnaam die overeenkomt met de tweede stap in de afbeelding hierboven naar de domeinnaam die u hebt gebonden.

### Optimaliseren Van Website-Implementatie Op Het Vasteland Van China

Als u betere toegankelijkheidsprestaties wilt verkrijgen in de netwerkomgeving van het Chinese vasteland, [registreer dan eerst een domeinnaam](//beian.aliyun.com) .

Gebruik dan de objectopslag van cloudleveranciers op het vasteland van China + Implementeer de volgende inhoud `CDN` `out/main/htm`

U kunt edge computing gebruiken om het pad te herschrijven om het aan te passen aan toepassingen met één pagina. [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kan bijvoorbeeld als volgt worden geconfigureerd:

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
  // Antwoordheaders kunnen worden ingesteld om uitvoer te debuggen, zoals out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Omdat record `MX` en record `CNAME` niet naast elkaar kunnen bestaan, moet u, als u tegelijkertijd e-mails over domeinnamen wilt ontvangen, samenwerken met het [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) -script naar niveau `CNAME` in record `A` .

Omdat de buitenlandse verkeerskosten van cloudleveranciers op het vasteland van China relatief duur zijn, kunt u bovendien [de gratis geografische resolutie van Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's aangepaste domeinnaam (zoals hieronder weergegeven) gebruiken als u de kosten wilt optimaliseren verkeersomleiding──Verkeersroutering op het vasteland van China Baidu Cloud `CDN` , internationaal verkeer gaat cloudflare .

![](https://p.3ti.site/1721119788.avif)

Deze oplossingen voor implementatieoptimalisatie zijn complexer en zullen in de toekomst in afzonderlijke hoofdstukken worden geïntroduceerd.

### Generieke Domeinnaamomleiding

Als u `i18n.site` gebruikt om een website als uw hoofdwebsite te genereren, moet u doorgaans een omleiding over meerdere domeinen configureren, dat wil zeggen de toegang omleiden naar `*.xxx.com` (inclusief `www.xxx.com` ) naar `xxx.com` .

Deze vereiste kan worden bereikt met behulp van Alibaba Cloud `CDN` `EdgeScript` ( [Engels document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinees document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Voeg de domeinnaam toe in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) Wijs de domeinnaam `*.xxx.com` `CNAME` aan in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

De omleidingsconfiguratie voor de pan-domeinnaam van `*.i18n.site` in de afbeelding hierboven is bijvoorbeeld als volgt:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Implementeren Met nginx

Voeg een configuratie toe die lijkt op de volgende in paragraaf `server` van nginx Wijzig `/root/i18n/md/out/main/htm` in het pad van uw eigen project `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Gebaseerd Op `github action` Continue Integratie

U kunt het volgende raadplegen om uw `github action` te configureren:

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

Zoals te zien is in de configuratie, wordt deze workflow geactiveerd wanneer naar tak `main` en tak `dist` wordt gepusht.

De workflow gebruikt het configuratiebestand dat overeenkomt met de filiaalnaam om het document te publiceren. Hier worden respectievelijk `.i18n/htm/main.yml` en `.i18n/htm/dist.yml` gebruikt als publicatieconfiguratie.

We raden de volgende best practices aan voor het documentvrijgaveproces:

Wanneer wijzigingen naar tak `main` worden gepusht, wordt het document geactiveerd om te worden gebouwd en geïmplementeerd op het previewstation (het previewstation is beschikbaar [github page](//pages.github.com) ).

Nadat op de previewsite is bevestigd dat het document correct is, wordt de code samengevoegd en naar branch `dist` gepusht, en gaat de officiële build en implementatie online.

Voor het implementeren van het bovenstaande proces zijn uiteraard meer configuraties nodig.

U kunt verwijzen naar het daadwerkelijke project [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` en `secrets.NPM_TOKEN` in de configuratie vereisen dat u geheime variabelen in de codebasis configureert.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` is het publicatietoken van pakket `npm` in de configuratie Bezoek [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Directorystructuur

### `public`

Statische bestanden van de website, zoals `favicon.ico` , `robots.txt` , etc.

De pictogrambestanden hier kunnen worden gegenereerd met [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Onder de map `.i18n` bevinden zich de configuratiebestanden, vertaalcache, etc. van `i18n.site` Zie het volgende hoofdstuk ["Configuratie"](/i18n.site/conf) voor details.

### `en`

Brontaalmap, overeenkomend met `en` van `fromTo` op `.i18n/conf.yml` configuratiebestand

```yaml
i18n:
  fromTo:
    en: zh
```

Raadpleeg de configuratie van vertaling [i18](/i18/use)
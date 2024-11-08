# Installeren en Gebruiken

## windows Installeert Eerst git bash

windows , [klik hier om eerst `git bash` te downloaden en te installeren](https://git-scm.com/download/win) .

Voer volgende bewerkingen uit in `git bash` .

## Installeren

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Vertaaltoken Configureren

Bezoek [i18n.site/token](//i18n.site/token) Klik om token te kopiëren

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Maak `~/.config/i18n.site.yml` aan, plak de gekopieerde inhoud erin, de inhoud is als volgt:

```
token: YOUR_API_TOKEN
```

Bovendien moet u een betaalcreditcard koppelen [i18n.site/payBill](//i18n.site/payBill) opwaarderen is niet nodig, de website brengt automatisch kosten in rekening op basis van gebruik, [zie de startpagina voor prijzen](/#price) ).

## Gebruik

### Demoproject

Raadpleeg het demoproject [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) Leer de configuratie van `i18` vertaling.

Gebruikers in China kunnen klonen [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Na het klonen voert u de map in en voert u `i18` uit om de vertaling te voltooien.

### Directorystructuur

De mapstructuur van het sjabloonmagazijn is als volgt

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

De vertaalde demobestanden in de map `en` zijn slechts een voorbeeld en kunnen worden verwijderd.

### Vertaling Uitvoeren

Voer de map in en voer `i18` uit om te vertalen.

Naast de vertaling genereert het programma ook de map `.i18n/data` Voeg deze toe aan de repository.

Na het vertalen van het nieuwe bestand wordt er een nieuw gegevensbestand gegenereerd in deze map. Vergeet niet om `git add . ` toe te voegen.

## Configuratiebestand

`.i18n/conf.yml` is het configuratiebestand van de `i18` opdrachtregelvertaaltool

De inhoud is als volgt:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Brontaal &

In het configuratiebestand is de ondergeschikte van `fromTo` :

`en` is de brontaal, `zh ja ko de fr` is de doeltaal van de vertaling.

Taalcode zie [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Als u bijvoorbeeld Chinees naar het Engels wilt vertalen, herschrijft u deze regel `zh: en` .

Als u naar alle ondersteunde talen wilt vertalen, laat dan leeg na `:` . Bijvoorbeeld

```
i18n:
  fromTo:
    en:
```

U kunt verschillende `fromTo` configureren voor verschillende submappen / Een demonstratie is als volgt geschreven :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

In deze configuratietabel is de brontaal van de vertaling van catalogus `blog` `zh` en de brontaal van de vertaling van catalogus `blog/your_file_name.md` is `ja` .

### Meertalige Afbeeldingen/Links

Wanneer de URL's in de afbeeldingen en links in `replace:` en `MarkDown` (en de `src` en `href` attributen van embedded `HTML` ) met dit voorvoegsel in `.i18n/conf.yml` zijn geconfigureerd, wordt de brontaalcode in de URL vervangen door de taalcode van de vertaling ( [taal codelijst](/i18/LANG_CODE) ).

Uw configuratie is bijvoorbeeld als volgt:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` is een woordenboek, de sleutel is het URL-voorvoegsel dat moet worden vervangen en de waarde is de vervangingsregel.

De betekenis van het vervangen van regel `ko de uk>ru zh-TW>zh >en` hierboven is dat `ko de` de afbeelding van hun eigen taalcode gebruikt, `zh-TW` en `zh` de afbeelding van `zh` gebruiken, `uk` de afbeelding van `ru` gebruikt en andere talen (zoals `ja` ) de afbeelding gebruiken standaard `en` .

Het Franse ( `fr` ) bronbestand van `MarkDown` is bijvoorbeeld als volgt :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Het vertaalde en gegenereerde Engelse ( `en` ) bestand is als volgt :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Hier worden `/en/` in de brontaalcode vervangen door `/zh/` in de doeltaal.

Let op : Er moet `/` staan voor en na de taalcode van de vervangen tekst in de URL.

> [!TIP]
> Als `- /` is geconfigureerd in `url:` , worden alleen relatieve paden gematcht, maar URL's die beginnen met `//` worden niet gematcht.
>
> Als sommige links van een domeinnaam vervangen willen worden en andere niet, kunt u verschillende voorvoegsels gebruiken, zoals `[x](//x.com/en/)` en `[x](https://x.com/en/)` om ze te onderscheiden.

### Bestand Negeren

Standaard worden alle bestanden die beginnen met `.md` en `.yml` in de brontaalmap vertaald.

Als u bepaalde bestanden wilt negeren en niet wilt vertalen (zoals onvoltooide concepten), kunt u dit configureren met het veld `ignore` .

`ignore` gebruikt dezelfde [globset](https://docs.rs/globset/latest/globset/#syntax) -syntaxis als het `.gitignore` bestand.

`_* ` in het bovenstaande configuratiebestand betekent bijvoorbeeld dat bestanden die beginnen met `_` niet worden vertaald.

## Vertaalregels

### Vertaaleditors Mogen Geen Regels Toevoegen of Verwijderen

De vertaling is bewerkbaar. Pas de originele tekst aan en vertaal deze opnieuw machinaal. De handmatige wijzigingen aan de vertaling worden niet overschreven (als deze paragraaf van de originele tekst niet is gewijzigd).

> [!WARN]
> Er moet een één-op-één overeenkomst bestaan tussen de regels van de vertaling en de originele tekst. Dat wil zeggen: voeg geen regels toe of verwijder deze niet bij het samenstellen van de vertaling. Anders zal dit verwarring veroorzaken in de cache voor het bewerken van vertalingen.

Als er iets misgaat, raadpleeg dan [de FAQ voor oplossingen.](/i18/qa#H1)

### `YAML` Vertalingen

Het opdrachtregelprogramma vindt alle bestanden die eindigen op `.yml` in de bestandsmap van de brontaal en vertaalt deze.

* Houd er rekening mee dat het achtervoegsel van de bestandsnaam `.yml` moet zijn (niet `.yaml` ).

De tool vertaalt alleen de woordenboekwaarden in `.yml` , niet de woordenboeksleutels.

Bijvoorbeeld `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

wordt vertaald als `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

De vertaling van `YAML` kan ook handmatig worden gewijzigd (maar voeg geen sleutels of regels toe in de vertaling).

Op basis van `YAML` vertalingen bouwt u eenvoudig internationale oplossingen voor diverse programmeertalen.

## Geavanceerd Gebruik

### Submap Voor Vertalingen

Zolang `.i18n/conf.yml` wordt aangemaakt (het is niet nodig om elke keer vanuit het demoprojectsjabloon te beginnen), zal `i18` prima werken.

Het opdrachtregelprogramma vindt `.i18n/conf.yml` configuraties in alle submappen en vertaalt deze.

Projecten die de [monorepo](//monorepo.tools) -architectuur gebruiken, kunnen taalbestanden in submappen opsplitsen.

![](https://p.3ti.site/1719910016.avif)

### Aangepaste Installatiemap

Het wordt standaard op `/usr/local/bin` geïnstalleerd.

Als `/usr/local/bin` geen schrijfrechten heeft, wordt het geïnstalleerd op `~/.bin` .

Door omgevingsvariabele `TO` in te stellen, kan bijvoorbeeld de installatiemap worden gedefinieerd :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
# Installeren en Gebruiken

## windows Installeert Eerst git bash

windows Systeem, [klik hier om eerst te downloaden en te installeren `git bash`](https://git-scm.com/download/win)

Voer volgende bewerkingen uit in `git bash`

## Installeren

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Vertaaltoken Configureren

Bezoek [i18n.site/token](//i18n.site/token) Klik om token te kopiëren

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Maak `~/.config/i18n.site.yml` plak de gekopieerde inhoud erin, de inhoud is als volgt:

```
token: YOUR_API_TOKEN
```

Bovendien [i18n.site/payBill](//i18n.site/payBill) u voor betaling een creditcard koppelen (opwaarderen is niet nodig, de website zal automatisch kosten aftrekken op basis van gebruik, [zie de startpagina voor prijzen](/#price) ).

## Gebruik

### Demoproject

`i18` het demoproject [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

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

De map `en` bevat de vertaalde demobestanden, die slechts een voorbeeld zijn en kunnen worden verwijderd.

### Vertaling Uitvoeren

Voer de map in en voer `i18` om te vertalen.

### Voeg Bestanden Toe Aan De Repository

Naast de vertaling genereert het programma ook de volgende bestanden. Voeg deze toe aan de repository.

```
.i18n/hash
.i18n/cache/.gitignore
```

Onder hen is de inhoud : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Dit betekent dat alle bestanden in de map `.i18n/cache/` moeten worden genegeerd (behalve `.i18n/cache/.gitignore` ).

Als uw versiebeheersoftware dit niet is `git` negeer deze dan volgens deze configuratie.

## Configuratiebestand

`.i18n/conf.yml` is het configuratiebestand van de `i18` line-vertaaltool

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

In het configuratiebestand zijn de ondergeschikten van `fromTo`

`en` de brontaal, `zh ja ko de fr` is de doeltaal van de vertaling.

Taalcode zie [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Als u bijvoorbeeld Chinees naar het Engels wilt vertalen, herschrijft u deze regel `zh: en`

Als u naar alle ondersteunde talen wilt vertalen, laat dan leeg achter `:` Bijvoorbeeld

```
i18n:
  fromTo:
    en:
```

### Bestand Negeren

Standaard worden alle bestanden die beginnen `.yml` `.md` de brontaalmap vertaald.

Als u bepaalde bestanden wilt negeren en niet wilt vertalen (zoals onvoltooide concepten), kunt u de veldconfiguratie `ignore`

`ignore` Gebruikt een syntaxis die lijkt op `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

In het bovenstaande configuratiebestand betekent `_* ` bijvoorbeeld dat bestanden die beginnen met `_` niet worden vertaald.

## Vertaalregels

### Vertaaleditors Mogen Geen Regels Toevoegen of Verwijderen

De vertaling is bewerkbaar. Pas de originele tekst aan en vertaal deze opnieuw machinaal. De handmatige wijzigingen aan de vertaling worden niet overschreven (als deze paragraaf van de originele tekst niet is gewijzigd).

Maar houd er rekening mee dat de regels van de vertaling en de originele tekst één op één moeten overeenkomen. Dat wil zeggen: voeg geen regels toe of verwijder geen regels bij het samenstellen van de vertaling. Anders zal dit verwarring veroorzaken in de cache voor het bewerken van vertalingen.

Als er iets misgaat, raadpleeg dan [de FAQ voor oplossingen.](/i18/qa#H1)

### `YAML` Vertalen

Het opdrachtregelprogramma vindt alle bestanden die eindigen op `.yml` in de bestandsmap van de brontaal en vertaalt deze.

* Houd er rekening mee dat het achtervoegsel van de bestandsnaam `.yml` moet zijn (niet `.yaml` ).

De tool vertaalt alleen de woordenboekwaarden in `.yml` niet de woordenboeksleutels.

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

Op basis van `YAML` Translation kunt u eenvoudig internationale oplossingen bouwen voor verschillende programmeertalen.

## Geavanceerd Gebruik

### Submap Voor Vertalingen

Zolang je `.i18n/conf.yml` maakt (je hoeft niet elke keer vanuit de demoprojectsjabloon te beginnen), `i18` werkt prima.

Het opdrachtregelprogramma vindt de `.i18n/conf.yml` -configuratie in alle submappen en vertaalt deze.

Projecten die de [monorepo](//monorepo.tools) -architectuur gebruiken, kunnen taalbestanden in submappen opsplitsen.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Aangepaste Installatiemap

Het wordt standaard geïnstalleerd op `/usr/local/bin`

Als `/usr/local/bin` geen schrijfrechten heeft, wordt het geïnstalleerd op `~/.bin` .

Omgevingsvariabelen instellen `TO` U kunt bijvoorbeeld de installatiemap definiëren :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

# Installeren en Gebruiken

## Windows: installeer eerst Git Bash

Windows-systeem: [klik hier om eerst `git bash` te downloaden en te installeren](https://git-scm.com/download/win).

Voer de volgende acties uit in `git bash`.

## Installatie

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configureer het vertaaltoken

Bezoek [i18n.site/token](//i18n.site/token) en klik om het token te kopiëren

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Créeer `~/.config/i18n.site.yml` en plak de gekopieerde inhoud erin, zoals hieronder:

```
token: YOUR_API_TOKEN
```

Bovendien moet je op [i18n.site/payBill](//i18n.site/payBill) een betaalkaart koppelen (er is geen aanvulling nodig, de site rekent automatisch op basis van gebruik; zie de [tarieven op de homepage](/#price)).

## Gebruik

### Demonstratieproject

Raadpleeg het demonstratieproject [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) om te leren hoe je `i18` configureert voor vertaling.

Chinese gebruikers kunnen [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18) klonen

Na het klonen, ga naar de map en voer `i18` uit om de vertaling te voltooien.

### Structuur van de map

De structuur van de map van het sjabloonmagazijn is als volgt:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

In de map `en` bevinden zich vertaalde demonstratiebestanden, die slechts voorbeelden zijn en kunnen worden verwijderd.

### Voer de vertaling uit

Ga naar de map en voer `i18` uit om de vertaling te starten.

Het programma genereert naast de vertaling ook de map `.i18n/data`, voeg deze toe aan de versiebeheerder.

Na het vertalen van een nieuw bestand, wordt er een nieuw gegevensbestand gegenereerd in deze map; vergeet niet `git add .` uit te voeren.

## CONFIGURATIEBESTAND

`.i18n/conf.yml` is het configuratiebestand voor het `i18` opdrachtprompt vertaalhulpmiddel

De inhoud ziet er als volgt uit:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Bron- en doeltaal

In het configuratiebestand is `fromTo` als volgt gedefinieerd:

`en` is de brontaal, `zh ja ko de fr` zijn de doeltalen voor de vertaling.

Bekijk de taalcode op [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Als je bijvoorbeeld Chinese tekst naar Engels wilt vertalen, wijzig dan deze regel in `zh: en`.

Als je naar alle ondersteunde talen wilt vertalen, laat dan `:` leeg. Bijvoorbeeld:

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

In deze configuratie is de brontaal van de map `blog` `zh`, en de brontaal van `blog/your_file_name.md` is `ja`.

### Negeer bestanden

Standaard worden alle bestanden met de extensies `.md` en `.yml` in de brontaalmap vertaald.

Als je bepaalde bestanden wilt negeren (bijvoorbeeld onvoltooide concepten), gebruik dan het `ignore`-veld om dit in te stellen.

`ignore` gebruikt een vergelijkbare [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaxis als `.gitignore`.

Bijvoorbeeld, `_*` in het configuratiebestand betekent dat bestanden die beginnen met `_` niet worden vertaald.

## Vertaalregels

### Vertaal editors mogen geen regels toevoegen of verwijderen

De vertaling kan worden bewerkt. Als de oorspronkelijke tekst wordt aangepast en opnieuw machinaal vertaald, worden handmatige wijzigingen in de vertaling niet overschreven (tenzij de oorspronkelijke tekst is aangepast).

Let echter op: de regels van de vertaling en de oorspronkelijke tekst moeten één op één overeenkomen. Dit betekent dat er geen regels moeten worden toegevoegd of verwijderd bij het samenstellen van de vertaling, omdat dit verwarring kan veroorzaken in de vertaalcache.

Als er problemen optreden, raadpleeg dan [de oplossingen in de veelgestelde vragen](/i18/qa#H1)

### `YAML` vertalingen

Het opdrachtregelprogramma zoekt naar alle bestanden die eindigen op `.yml` in de brontaalmap en vertaalt deze.

* Houd er rekening mee dat de bestandsextensie `.yml` moet zijn (niet `.yaml`).

Het hulpmiddel vertaalt alleen de waarden van het woordenboek in `.yml`, niet de sleutels.

Bijvoorbeeld `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

wordt vertaald naar `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

De vertaling van `YAML` kan ook handmatig worden aangepast (maar voeg geen sleutels of regels toe in de vertaling).

Based on `YAML` vertalingen, kunt u eenvoudig internationalisatiesoplossingen bouwen voor verschillende programmeertalen.

## Geavanceerd gebruik

### Vertaling van submappen

Zolang `.i18n/conf.yml` is aangemaakt (het is niet nodig om elke keer vanuit het sjabloon van het demoproject te beginnen), zal `i18` normaal werken.

Het opdrachtregelprogramma zoekt naar `.i18n/conf.yml`-configuraties in alle submappen en vertaalt deze.

Projecten die de [monorepo](//monorepo.tools)-architectuur gebruiken, kunnen taalbestanden opsplitsen in submappen.

![](https://p.3ti.site/1719910016.avif)

### Aangepaste installatiemap

Standaard wordt het geïnstalleerd in `/usr/local/bin`.

Als `/usr/local/bin` geen schrijfrechten heeft, wordt het geïnstalleerd in `~/.bin`.

Door de omgevingsvariabele `TO` in te stellen, kunt u bijvoorbeeld de installatiemap definiëren:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
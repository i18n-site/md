# Installeren en Gebruiken

## Windows: installeer eerst Git Bash

Windows-systeem: [klik hier om eerst `git bash` te downloaden en te installeren](https://git-scm.com/download/win).

Voer de volgende acties uit in `git bash`.

## Installatie

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### VertaalToken configureren

Bezoek [i18n.site/token](//i18n.site/token) en klik om het token te kopiëren

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Créeer `~/.config/i18n.site.yml` en plak de gekopieerde inhoud erin, zoals hieronder:

```
token: YOUR_API_TOKEN
```

Bovendien moet je op [i18n.site/payBill](//i18n.site/payBill) een betaalkaart koppelen (er is geen aanvulling nodig, de site rekent automatisch af op basis van het gebruik, [zie de homepage voor prijzen](/#price)).

## Gebruik

### Demonstratieproject

Raadpleeg het demonstratieproject [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) om de configuratie van `i18`-vertaling te leren.

Chinese gebruikers kunnen [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18) klonen

Na het klonen, ga naar de map en voer `i18` uit om de vertaling te voltooien.

### Directorystructuur

De structuur van de sjabloonopslagmap is als volgt:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

In de `en`-map bevinden zich vertaalde demo-bestanden, dit is slechts een voorbeeld en kan worden verwijderd.

### Voer de vertaling uit

Ga naar de map en voer `i18` uit om de vertaling te starten.

Het programma genereert naast de vertaling ook de map `.i18n/data`, voeg deze toe aan de versiebeheerder.

Na het vertalen van een nieuw bestand, zal er in deze map een nieuw gegevensbestand worden gegenereerd. Vergeet niet `git add .` uit te voeren om het bestand toe te voegen.

## CONFIGURATIEBESTAND

`.i18n/conf.yml` is het configuratiebestand voor het `i18`-opdrachtpromptvertaalprogramma

De inhoud is als volgt:

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

Taalcodeoverzicht: [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Als je bijvoorbeeld Chinese tekst naar Engels wilt vertalen, wijzig dan deze regel in `zh: en`.

Als je naar alle ondersteunde talen wilt vertalen, laat dan `:` leeg. Bijvoorbeeld:

```
i18n:
  fromTo:
    en:
```

Voor verschillende submappen/bestanden kunnen verschillende `fromTo`-instellingen worden geconfigureerd. Een voorbeeld van een demonstratie is als volgt:

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

In deze configuratielijst is de brontaal voor de vertaling van de `blog`-map `zh`, en de brontaal voor de vertaling van `blog/your_file_name.md` is `ja`.

### Bestanden negeren

Standaard worden alle bestanden met de extensies `.md` en `.yml` in de brontaalmap vertaald.

Als je bepaalde bestanden wilt negeren (bijvoorbeeld onvoltooide concepten), gebruik dan het `ignore`-veld om dit in te stellen.

`ignore` gebruikt een vergelijkbare [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaxis als `.gitignore`.

Bijvoorbeeld, `_*` in het configuratiebestand betekent dat bestanden die beginnen met `_` niet worden vertaald.

## Vertaalregels

### Vertaalbewerkingen moeten geen regels toevoegen of verwijderen

De vertaling kan worden bewerkt. Als de oorspronkelijke tekst wordt aangepast en opnieuw machinaal vertaald, worden handmatige wijzigingen in de vertaling niet overschreven (tenzij de oorspronkelijke tekst is aangepast).

Let echter op: de vertaal- en oorspronkelijke tekstregels moeten één op één overeenkomen. Dit betekent dat er geen regels moeten worden toegevoegd of verwijderd bij het samenstellen van de vertaling, omdat dit verwarring kan veroorzaken in de vertaalbewerkingcache.

Als er problemen optreden, raadpleeg dan [de oplossingen in de veelgestelde vragen](/i18/qa#H1)

### `YAML`-vertaling

Het opdrachtregelprogramma zoekt naar alle `.yml`-bestanden in de brontaalmap en vertaalt deze.

* Houd er rekening mee dat de bestandsextensie `.yml` moet zijn (niet `.yaml`).

Het programma vertaalt alleen de waarden van de woordenboeken in `.yml`, niet de sleutels.

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

De vertaling van `YAML` kan ook handmatig worden aangepast (maar voeg geen sleutels of regels toe aan de vertaling).

Based on `YAML`-vertalingen kunt u eenvoudig internationale oplossingen bouwen voor verschillende programmeertalen.

## Vertaling van submappen

### Vertaalsubmappen

Indien `.i18n/conf.yml` wordt aangemaakt (het is niet nodig om telkens van het demoprojectsjabloon te beginnen), werkt `i18` probleemloos.

Het opdrachtregelprogramma vindt `.i18n/conf.yml`-configuraties in alle submappen en vertaalt deze.

Projecten die de [monorepo](//monorepo.tools)-architectuur gebruiken, kunnen taalbestanden opslaan in submappen.

![](https://p.3ti.site/1719910016.avif)

### Aangepaste installatielocatie

Standaard wordt geïnstalleerd in `/usr/local/bin`.

Indien `/usr/local/bin` geen schrijfrechten heeft, wordt het geïnstalleerd in `~/.bin`.

Door de omgevingsvariabele `TO` in te stellen, kan bijvoorbeeld de installatielocatie worden gedefinieerd:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
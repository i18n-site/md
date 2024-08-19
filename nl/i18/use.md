# Installeren en Gebruiken

## Windows: installeer eerst Git Bash

Windows-systeem: [klik hier](https://git-scm.com/download/win) om eerst `git bash` te downloaden en te installeren.

Voer de volgende acties uit in `git bash`.

## Installeren

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configureer het vertaaltoken

Bezoek [i18n.site/token](//i18n.site/token) en klik om het token te kopiëren

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Maak `~/.config/i18n.site.yml` aan, plak de gekopieerde inhoud erin. De inhoud ziet er als volgt uit:

```
token: YOUR_API_TOKEN
```

Bovendien moet je op [i18n.site/payBill](//i18n.site/payBill) een betaalkaart koppelen (er is geen aanvulling nodig, de site zal automatisch kosten in rekening brengen op basis van gebruik, [zie de homepage voor tarieven](/#price)).

## Gebruik

### Demoproject

Raadpleeg het paraatje project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) om de configuratie van `i18` vertaling te leren.

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

In de `en`-map bevinden zich vertaalde demobestanden, dit is slechts een voorbeeld en kan worden verwijderd.

### Voer de vertaling uit:

Ga naar de map en voer `i18` uit om de vertaling te starten.

### Voeg bestanden toe aan de versiebeheerder

Naast de vertaling genereert het programma ook de volgende bestanden, voeg deze toe aan de versiebeheerder.

```
.i18n/hash
.i18n/cache/.gitignore
```

Onder andere, de inhoud van `.i18n/cache/.gitignore` is als volgt:

```
**/*
!**/.gitignore
```

Dit betekent dat alle bestanden in de map `.i18n/cache/` (met uitzondering van `.i18n/cache/.gitignore`) worden genegeerd.

Als je versiebeheersoftware niet `git` is, configureer dan het negeren zoals deze.

## Configureringsbestand

`.i18n/conf.yml` is het configuratiebestand voor het `i18` opdrachtprompt vertaalhulpmiddel

De inhoud is als volgt:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Bron- en vertaaltalen

In het configuratiebestand, de onderliggende `fromTo`:

`en` is de brontaal, `zh ja ko de fr` zijn de vertaaltalen.

Bekijk de taalcode op [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Als je bijvoorbeeld Chinees naar Engels wilt vertalen, wijzig dan deze regel in `zh: en`.

Als je naar alle ondersteunde talen wilt vertalen, laat dan een spatie achter `:`. Bijvoorbeeld:

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

In deze configuratie is de brontaal van de `blog`-map `zh`, en de brontaal van `blog/your_file_name.md` is `ja`.

### Bestanden negeren

Standaard worden alle bestanden met de extensies `.md` en `.yml` in de brontaalmap vertaald.

Als je bepaalde bestanden wilt negeren en niet wilt vertalen (bijvoorbeeld onvoltooide concepten), kun je dit instellen met het `ignore`-veld.

`ignore` gebruikt dezelfde [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaxis als `.gitignore`.

Bijvoorbeeld, `_*` betekent dat alle bestanden die beginnen met `_` niet worden vertaald.

## Vertaalregels

### Vertaal editors mogen geen regels toevoegen of verwijderen

De vertaling is bewerkbaar. Als je de oorspronkelijke tekst wijzigt en opnieuw vertaalt, blijven handmatige wijzigingen in de vertaling (tenzij de oorspronkelijke tekst is gewijzigd) bewaard.

Let echter op: de vertaal- en oorspronkelijke tekstregels moeten één op één overeenkomen. Dit betekent dat je geen regels mag toevoegen of verwijderen bij het samenstellen van de vertaling, anders kan dit verwarring veroorzaken in de vertaalcache.

Als er problemen optreden, raadpleeg dan [de oplossingen in de veelgestelde vragen](/i18/qa#H1)

### `YAML` vertalingen

Het opdrachtpromptprogramma zoekt naar alle bestanden die eindigen op `.yml` in de brontaalmap en vertaalt deze.

* Houd er rekening mee dat de bestandsnaam eindigt op `.yml` (en niet op `.yaml`).

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

Op basis van `YAML` vertalingen bouwt u eenvoudig internationale oplossingen voor diverse programmeertalen.

## Geavanceerd gebruik

### Vertaling van submappen

Zolang je `.i18n/conf.yml` maakt (het is niet nodig om elke keer vanuit het demoprojectsjabloon te beginnen), zal `i18` goed werken.

Het opdrachtpromptprogramma zoekt naar `.i18n/conf.yml`-configuraties in alle submappen en vertaalt deze.

Projecten die de [monorepo](//monorepo.tools)-architectuur gebruiken, kunnen taalbestanden opsplitsen in submappen.

![](https://p.3ti.site/1719910016.avif)

### Aangepaste installatiemap

Standaard wordt het geïnstalleerd in `/usr/local/bin`.

Als `/usr/local/bin` geen schrijfrechten heeft, wordt het geïnstalleerd in `~/.bin`.

Door de omgevingsvariabele `TO` in te stellen, kun je bijvoorbeeld de installatiemap definiëren:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
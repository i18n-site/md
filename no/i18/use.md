# Installer Og Bruk

## windows Installer Først git bash

windows System, [klikk her for å laste ned og installere `git bash` først](https://git-scm.com/download/win) .

Kjør påfølgende operasjoner i `git bash` .

## Installer

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurer Oversettelsestoken

Besøk [i18n.site/token](//i18n.site/token) Klikk for å kopiere token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Opprett `~/.config/i18n.site.yml` , lim inn det kopierte innholdet, innholdet er som følger:

```
token: YOUR_API_TOKEN
```

I tillegg må [du](/#price) binde et betalingskredittkort på [i18n.site/payBill](//i18n.site/payBill)

## Bruk

### Demoprosjekt

Se demoprosjektet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) å lære konfigurasjonen av `i18` oversettelse.

Brukere i Kina kan klone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Etter kloning, gå inn i katalogen og kjør `i18` for å fullføre oversettelsen.

### Katalogstruktur

Malvarehuskatalogstrukturen er som følger

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

De oversatte demofilene i `en` katalogen er bare et eksempel og kan slettes.

### Kjør Oversettelse

Gå inn i katalogen og kjør `i18` for å oversette.

I tillegg til oversettelsen vil programmet også generere `.i18n/data` -mappen. Legg den til i depotet.

Etter å ha oversatt den nye filen, vil en ny datafil bli generert i denne katalogen. Husk å legge til `git add . ` .

## Konfigurasjonsfil

`.i18n/conf.yml` er konfigurasjonsfilen til `i18` kommandolinje-oversettelsesverktøyet

Innholdet er som følger:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Kildespråk &

I konfigurasjonsfilen, den underordnede av `fromTo` :

`en` er kildespråket, `zh ja ko de fr` er målspråket for oversettelsen.

Språkkode se [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Hvis du for eksempel vil oversette kinesisk til engelsk, skriv om denne linjen `zh: en` .

Hvis du ønsker å oversette til alle støttede språk, la stå tomt etter `:` . for eksempel

```
i18n:
  fromTo:
    en:
```

Du kan konfigurere forskjellige `fromTo` for forskjellige underkataloger / En demonstrasjon er skrevet som følger :

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

I denne konfigurasjonstabellen er kildespråket for katalog `blog` -oversettelse `zh` , og kildespråket for katalog `blog/your_file_name.md` -oversettelsen er `ja` .

### Flerspråklige Bilder/Lenker

Når URL-ene i bildene og lenkene i `replace:` og `MarkDown` (og `src` og `href` -attributtene til embedded `HTML` ) er konfigurert i `.i18n/conf.yml` med dette prefikset, vil kildespråkkoden i URL-en erstattes av språkkoden til oversettelsen ( [språk kodeliste](/i18/LANG_CODE) ).

For eksempel er konfigurasjonen din som følger:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` er en ordbok, nøkkelen er URL-prefikset som skal erstattes, og verdien er erstatningsregelen.

Betydningen med å erstatte regel `ko de uk>ru zh-TW>zh >en` ovenfor er at `ko de` bruker bildet av sin egen språkkode, `zh-TW` og `zh` bruker bildet av `zh` , `uk` bruker bildet av `ru` , og andre språk (som `ja` ) bruker bildet på `en` som standard.

For eksempel er den franske ( `fr` ) kildefilen med `MarkDown` som følger :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Den oversatte og genererte engelske ( `en` ) filen er som følger :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Her erstattes `/en/` i kildespråkkoden med `/zh/` i målspråket.

Merk : Det må være `/` før og etter språkkoden til den erstattede teksten i URL-en.

> [!TIP]
> Hvis `- /` er konfigurert i `url:` , vil bare relative stier bli matchet, men URL-er som starter med `//` vil ikke bli matchet.
>
> Hvis noen lenker til et domenenavn ønsker å bli erstattet og noen ikke ønsker å bli erstattet, kan du bruke forskjellige prefikser som `[x](//x.com/en/)` og `[x](https://x.com/en/)` for å skille dem.

### Ignorer Filen

Som standard vil alle filer som begynner med `.md` og `.yml` i kildespråkkatalogen bli oversatt.

Hvis du vil ignorere visse filer og ikke oversette dem (for eksempel uferdige utkast), kan du konfigurere det med `ignore` feltet.

`ignore` bruker samme [globset](https://docs.rs/globset/latest/globset/#syntax) -syntaks som `.gitignore` -filen.

For eksempel betyr `_* ` i konfigurasjonsfilen ovenfor at filer som starter med `_` ikke vil bli oversatt.

## Oversettelsesregler

### Oversettelsesredaktører Bør Ikke Legge Til Eller Slette Linjer

Oversettelsen er redigerbar. Endre den originale teksten og maskinoversett den igjen, manuelle modifikasjoner av oversettelsen vil ikke bli overskrevet (hvis dette avsnittet i originalteksten ikke er endret).

> [!WARN]
> Det må være en en-til-en samsvar mellom linjene i oversettelsen og originalteksten. Det vil si, ikke legg til eller slett linjer når du kompilerer oversettelsen. Ellers vil det føre til forvirring i hurtigbufferen for oversettelsesredigering.

Hvis noe går galt, vennligst se [FAQ for løsninger.](/i18/qa#H1)

### `YAML` Oversettelser

Kommandolinjeverktøyet vil finne alle filer som slutter med `.yml` i kildespråkets filkatalog og oversette dem.

* Merk at filnavnsuffikset må være `.yml` (ikke `.yaml` ).

Verktøyet oversetter bare ordbokverdiene til `.yml` , ikke ordboknøklene.

For eksempel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

vil bli oversatt til `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Oversettelsen av `YAML` kan også endres manuelt (men ikke legg til eller slett nøkler eller linjer i oversettelsen).

Basert på `YAML` oversettelse kan du enkelt bygge internasjonale løsninger for ulike programmeringsspråk.

## Avansert Bruk

### Oversettelse Underkatalog

Så lenge `.i18n/conf.yml` er opprettet (ikke nødvendig å starte fra demoprosjektmal hver gang), vil `i18` fungere fint.

Kommandolinjeverktøyet vil finne `.i18n/conf.yml` konfigurasjoner i alle underkataloger og oversette dem.

Prosjekter som bruker [monorepo](//monorepo.tools) -arkitekturen kan dele språkfiler i underkataloger.

![](https://p.3ti.site/1719910016.avif)

### Tilpasset Installasjonskatalog

Det vil bli installert til `/usr/local/bin` som standard.

Hvis `/usr/local/bin` ikke har skrivetillatelse, vil den bli installert til `~/.bin` .

Innstilling av miljøvariabel `TO` kan definere installasjonsmappen, for eksempel :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
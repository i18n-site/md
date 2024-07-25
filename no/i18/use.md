# Installer Og Bruk

## windows Installer Først git bash

windows System, [klikk her for å laste ned og installere først `git bash`](https://git-scm.com/download/win)

Kjør påfølgende operasjoner i `git bash`

## Installere

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurer Oversettelsestoken

Besøk [i18n.site/token](//i18n.site/token) Klikk for å kopiere token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Lag `~/.config/i18n.site.yml` lim inn det kopierte innholdet, innholdet er som følger:

```
token: YOUR_API_TOKEN
```

I tillegg [i18n.site/payBill](//i18n.site/payBill) du binde et kredittkort for betaling (ingen opplading kreves, nettsiden trekker automatisk gebyrer i henhold til bruk, [se hjemmesiden for priser](/#price) ).

## Bruk

### Demoprosjekt

Vennligst se demoprosjektet for å lære konfigurasjonen av `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Brukere i Kina kan klone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Etter kloning, gå inn i katalogen og `i18` for å fullføre oversettelsen.

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

`en` -katalogen inneholder de oversatte demofilene, som bare er et eksempel og kan slettes.

### Kjør Oversettelse

Gå inn i katalogen og kjør for å oversette `i18`

### Legg Til Filer I Depotet

I tillegg til oversettelse, vil programmet også generere følgende filer, vennligst legg dem til i depotet.

```
.i18n/hash
.i18n/cache/.gitignore
```

Blant dem er innholdet : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Dette betyr å ignorere alle filer i `.i18n/cache/` (unntatt `.i18n/cache/.gitignore` ).

Hvis versjonskontrollprogramvaren din ikke er `git` , vennligst ignorer den i henhold til denne konfigurasjonen.

## Konfigurasjonsfil

`.i18n/conf.yml` Det er konfigurasjonsfilen til `i18` line-oversettelsesverktøyet

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

I konfigurasjonsfilen er de underordnede til `fromTo`

`en` er kildespråket, `zh ja ko de fr` er målspråket for oversettelsen.

Språkkode se [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Hvis du for eksempel vil oversette kinesisk til engelsk, skriv om denne linjen `zh: en`

Hvis du vil oversette til alle støttede språk, la stå tomt etter `:` for eksempel

```
i18n:
  fromTo:
    en:
```

### Ignorer Filen

Som standard vil alle filer som begynner med `.md` og `.yml` i kildespråkkatalogen bli oversatt.

Hvis du vil ignorere visse filer og ikke oversette dem (for eksempel uferdige utkast), kan du bruke `ignore`

`ignore` Bruker en syntaks som ligner `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

For eksempel betyr konfigurasjonsfilen `_* ` at filer som starter med `_` ikke vil bli oversatt.

## Oversettelsesregler

### Oversettelsesredaktører Bør Ikke Legge Til Eller Slette Linjer

Oversettelsen er redigerbar. Endre den originale teksten og maskinoversett den igjen, manuelle modifikasjoner av oversettelsen vil ikke bli overskrevet (hvis dette avsnittet i originalteksten ikke er endret).

Men vær oppmerksom på at linjene i oversettelsen og originalteksten må samsvare én til én. Det vil si, ikke legg til eller slett linjer når du kompilerer oversettelsen. Ellers vil det føre til forvirring i hurtigbufferen for oversettelsesredigering.

Hvis noe går galt, vennligst se [FAQ for løsninger.](/i18/qa#H1)

### `YAML` Oversette

Kommandolinjeverktøyet vil finne alle filer som slutter med `.yml` i kildespråkets filkatalog og oversette dem.

* Merk at filnavnssuffikset må være (ikke `.yaml` ) `.yml`

Verktøyet oversetter bare ordbokverdiene `.yml` , ikke ordboknøklene.

for eksempel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

vil bli oversatt som `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Oversettelsen av `YAML` kan også endres manuelt (men ikke legg til eller slett nøkler eller linjer i oversettelsen).

Basert på `YAML` Oversettelse kan du enkelt bygge internasjonale løsninger for ulike programmeringsspråk.

## Avansert Bruk

### Oversettelse Underkatalog

Så lenge du oppretter `.i18n/conf.yml` (ikke nødvendig å starte fra demoprosjektmal hver gang), vil `i18` fungere fint.

Kommandolinjeverktøyet vil finne `.i18n/conf.yml` -konfigurasjonen i alle underkataloger og oversette den.

Prosjekter som bruker [monorepo](//monorepo.tools) -arkitekturen kan dele språkfiler i underkataloger.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Tilpasset Installasjonskatalog

Det vil bli installert til `/usr/local/bin`

Hvis `/usr/local/bin` ikke har skrivetillatelse vil den bli installert til `~/.bin` .

Sett `TO` Du kan definere installasjonsmappen, for eksempel :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

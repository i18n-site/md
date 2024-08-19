# Installer og bruk

## windows: Installer først git bash

windows-system: Vennligst [klikk her for å laste ned og installere `git bash`](https://git-scm.com/download/win) først.

Kjør påfølgende operasjoner i `git bash`.

## Installer

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurer oversettelsestoken

Besøk [i18n.site/token](//i18n.site/token) og klikk for å kopiere token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Opprett `~/.config/i18n.site.yml`, lim inn det kopierte innholdet, innholdet er som følger:

```
token: YOUR_API_TOKEN
```

I tillegg [i18n.site/payBill](//i18n.site/payBill) du binde et kredittkort for betaling (ingen opplading kreves, nettsiden trekker automatisk gebyrer i henhold til bruk, [se hjemmesiden for priser](/#price) ).

## Bruk

### Demoprosjekt

Sjekk [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) for å lære konfigurasjonen av `i18`-oversettelse.

Kinesiske brukere kan klon [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Etter kloning, gå inn i katalogen og kjør `i18` for å fullføre oversettelsen.

### Katalogstruktur

Malvarehuskatalogstrukturen er som følger:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

De oversatte demofilene i `en`-katalogen er bare eksempler og kan slettes.

### Kjør oversettelse

Gå inn i katalogen og kjør `i18` for å oversette.

### Legg til filer i versjonskontroll

I tillegg til oversettelsen, vil programmet også generere følgende filer, vennligst legg dem til i versjonskontrollen.

```
.i18n/hash
.i18n/cache/.gitignore
```

Blant dem er innholdet i `.i18n/cache/.gitignore` som følger:

```
**/*
!**/.gitignore
```

Dette betyr at alle filer i katalogen `.i18n/cache/` (unntatt `.i18n/cache/.gitignore`) ignoreres.

Hvis ditt versjonskontrollsystem ikke er `git`, vennligst ignorer dette i henhold til denne konfigurasjonen.

## Konfigurasjonsfil

`.i18n/conf.yml` er konfigurasjonsfilen for `i18`-kommandolinjeoversettelsesverktøyet

Innholdet er som følger:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Kildespråk og målspråk

I konfigurasjonsfilen, den underordnede av `fromTo`:

`en` er kildespråket, `zh ja ko de fr` er målspråkene for oversettelsen.

Språkkoder finnes på [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Hvis du for eksempel vil oversette kinesisk til engelsk, endre denne linjen `zh: en`.

Hvis du ønsker å oversette til alle støttede språk, la feltet stå tomt etter `:`. For eksempel:

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

I denne konfigurasjonstabellen er kildespråket for katalogen `blog` oversettelse `zh`, og kildespråket for `blog/your_file_name.md` oversettelse er `ja`.

### Ignorer filer

Som standard vil alle filer som starter med `.md` og `.yml` i kildespråkkatalogen bli oversatt.

Hvis du vil ignorere visse filer og ikke oversette dem (for eksempel uferdige utkast), kan du konfigurere dette med `ignore`-feltet.

`ignore` bruker samme [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaks som `.gitignore`-filen.

For eksempel betyr `_*` i konfigurasjonsfilen ovenfor at filer som starter med `_` ikke vil bli oversatt.

## Oversettelsesregler

### Oversettelsesredigerere bør ikke legge til eller slette linjer

Oversettelsen er redigerbar. Endre den originale teksten og gjenta maskinoversettelsen, manuelle endringer i oversettelsen vil ikke bli overskrevet (hvis dette avsnittet i originalteksten ikke er endret).

Men vær oppmerksom på at linjene i oversettelsen og originalteksten må samsvare én til én. Det vil si, ikke legg til eller slett linjer når du kompilere oversettelsen. Ellers vil det føre til forvirring i hurtigbufferen for oversettelsesredigering.

Hvis noe går galt, vennligst se [vanlige spørsmål og svar](/i18/qa#H1) for løsninger

### `YAML`-oversettelser

Kommandolinjeverktøyet vil finne alle filer som slutter med `.yml` i kildespråkets filkatalog og oversette dem.

* Merk at filnavnsuffikset må være `.yml` (ikke `.yaml`).

Verktøyet oversetter bare ordbokverdiene til `.yml`, ikke ordboknøklene.

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

Basert på `YAML`-oversettelse kan du enkelt bygge internasjonale løsninger for ulike programmeringsspråk.

## Oversettelse av underkataloger

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
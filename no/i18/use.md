# Installer og bruk

## Windows: Installer først Git Bash

Windows-system: [Klikk her for å laste ned og installere `git bash` først](https://git-scm.com/download/win).

Kjør påfølgende operasjoner i `git bash`.

## Installasjon

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurer oversettelsestoken

Besøk [i18n.site/token](//i18n.site/token) og klikk for å kopiere token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Opprett `~/.config/i18n.site.yml` og lim inn det kopierte innholdet, som følger:

```
token: YOUR_API_TOKEN
```

I tillegg må du på [i18n.site/payBill](//i18n.site/payBill) koble til et betalingskort (ingen opplading nødvendig, nettsiden debiterer automatisk basert på forbruk, [se prisene på startsiden](/#price)).

## Bruk

### Demoprosjekt

Se demoprosjektet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) for å lære hvordan du konfigurerer `i18`-oversettelsen.

Kina-brukere kan klone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Etter kloning, gå inn i katalogen og kjør `i18` for å fullføre oversettelsen.

### Katalogstruktur

Maldepotkatalogstrukturen er som følger:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`-katalogen inneholder oversettelsesdemonstrasjonsfiler, som er eksempler og kan slettes.

### Kjør oversettelsen

Gå inn i katalogen og kjør `i18` for å oversette.

Programmet vil også generere en `.i18n/data`-mappe, som bør legges til i versjonskontrolldepotet.

Etter å ha oversatt en ny fil, vil det bli opprettet en ny datafil i denne katalogen. Husk å bruke `git add .`.

## Konfigurasjonsfil

`.i18n/conf.yml` er konfigurasjonsfilen for `i18` kommandolinjeoversettelsesverktøyet

Innholdet er som følger:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Kildespråk & målspråk

I konfigurasjonsfilen, under `fromTo`:

`en` er kildespråket, mens `zh ja ko de fr` er målspråkene for oversettelsen.

Språkkoder finnes på [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Hvis du for eksempel vil oversette kinesisk til engelsk, skriv `zh: en`.

Hvis du vil oversette til alle støttede språk, la `:` stå tomt. For eksempel:

```
i18n:
  fromTo:
    en:
```

Du kan konfigurere forskjellige `fromTo` for forskjellige underkataloger/filer. En eksempel på hvordan dette kan skrives er som følger:

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

I denne konfigurasjonsfilen er kildespråket for oversettelse av `blog`-katalogen `zh`, mens kildespråket for oversettelse av `blog/your_file_name.md` er `ja`.

### Ignorer filer

Standard er å oversette alle `.md`- og `.yml`-filer i kildespråkkatalogen.

Hvis du vil ignorere noen filer (for eksempel uferdige utkast), kan du bruke `ignore`-feltet.

`ignore` bruker samme [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaks som `.gitignore`.

For eksempel betyr `_*` at filer som starter med `_` ikke oversettes.

## Oversettelsesregler

### Oversettelsesredigeringer bør ikke legge til eller slette linjer

Oversettelsen kan redigeres. Endre originalteksten og oversett igjen; manuelle endringer i oversettelsen vil ikke bli overskrevet (med mindre originalavsnittet er endret).

> [!WARN]
> Linjene i oversettelsen må samsvare én til én med originalteksten. Det vil si, ikke legg til eller slett linjer når du oversetter. Ellers kan det føre til forvirring i redigeringsbufferen for oversettelse.

Hvis det oppstår problemer, se [vanlige spørsmål for løsninger](/i18/qa#H1)

### `YAML`-oversettelser

Kommandolinjeverktøyet finner alle `.yml`-filer i kildespråkkatalogen og oversetter dem.

* Merk at filnavnsuffikset må være `.yml` (ikke `.yaml`).

Verktøyet oversetter bare ordbokverdiene i `.yml`, ikke ordboknøklene.

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

`YAML`-oversettelsen kan også redigeres manuelt (men ikke legg til eller slett nøkler eller linjer).

Basert på `YAML`-oversettelse kan du enkelt bygge internasjonale løsninger for ulike programmeringsspråk.

## Avansert bruk

### Oversett underkataloger

Så lenge `.i18n/conf.yml` er opprettet (det er ikke nødvendig å starte fra demomal hver gang), vil `i18` fungere som forventet.

Kommandolinjeverktøyet vil finne `.i18n/conf.yml`-konfigurasjoner i alle underkataloger og oversette dem.

Prosjekter som bruker [monorepo](//monorepo.tools)-arkitekturen kan dele språkfiler i underkataloger.

![](https://p.3ti.site/1719910016.avif)

### Tilpasset installasjonskatalog

Standard installasjonsmappe er `/usr/local/bin`.

Hvis `/usr/local/bin` ikke har skrivetillatelse, vil det bli installert til `~/.bin`.

Angi miljøvariabel `TO` for å definere installasjonsmappen, for eksempel:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
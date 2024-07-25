# Installer Og Brug

## windows Installerer Først git bash

windows System, [klik venligst her for at downloade og installere først `git bash`](https://git-scm.com/download/win)

Kør efterfølgende operationer i `git bash`

## Installere

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurer Oversættelsestoken

Besøg [i18n.site/token](//i18n.site/token) Klik for at kopiere token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Opret `~/.config/i18n.site.yml` indsæt det kopierede indhold i det, indholdet er som følger:

```
token: YOUR_API_TOKEN
```

Derudover [i18n.site/payBill](//i18n.site/payBill) du binde et kreditkort til betaling (ingen genopladning er nødvendig, hjemmesiden trækker automatisk gebyrer efter brug, [se hjemmesiden for priser](/#price) ).

## Brug

### Demo Projekt

Se venligst demoprojektet for at lære konfigurationen `i18` ​​oversættelsen [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Brugere i Kina kan klone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Efter kloning skal du gå ind i mappen og `i18` for at fuldføre oversættelsen.

### Directory Struktur

Skabelonens lagerkatalogstruktur er som følger

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Mappen `en` indeholder de oversatte demofiler, som kun er et eksempel og kan slettes.

### Kør Oversættelse

Gå ind i biblioteket og kør for at oversætte `i18`

### Tilføj Filer Til Depotet

Ud over oversættelse vil programmet også generere følgende filer, føj dem venligst til lageret.

```
.i18n/hash
.i18n/cache/.gitignore
```

Blandt dem er indholdet : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Dette betyder, at alle filer i `.i18n/cache/` -mappen skal ignoreres (undtagen `.i18n/cache/.gitignore` ).

Hvis din versionskontrolsoftware ikke er `git` , skal du ignorere den i henhold til denne konfiguration.

## Konfigurationsfil

`.i18n/conf.yml` Det er konfigurationsfilen for `i18` line-oversættelsesværktøjet

Indholdet er som følger:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Kildesprog &

I konfigurationsfilen er de underordnede af `fromTo`

`en` er kildesproget, `zh ja ko de fr` er målsproget for oversættelsen.

Sprogkode se [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

For eksempel, hvis du vil oversætte kinesisk til engelsk, skal du omskrive denne linje `zh: en`

Hvis du ønsker at oversætte til alle understøttede sprog, skal du lade stå tomt efter `:` for eksempel

```
i18n:
  fromTo:
    en:
```

### Ignorere Filen

Som standard vil alle filer, der starter med `.md` og `.yml` i kildesprogets bibliotek, blive oversat.

Hvis du vil ignorere bestemte filer og ikke oversætte dem (såsom ufærdige udkast), kan du bruge `ignore` konfiguration.

`ignore` Bruger en syntaks, der ligner `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

For eksempel betyder konfigurationsfilen ovenfor `_* ` at filer, der starter med `_` ikke vil blive oversat.

## Oversættelsesregler

### Oversættelsesredaktører Bør Ikke Tilføje Eller Slette Linjer

Oversættelsen kan redigeres. Rediger den originale tekst og maskinoversæt den igen, de manuelle ændringer af oversættelsen vil ikke blive overskrevet (hvis dette afsnit i den originale tekst ikke er blevet ændret).

Men vær opmærksom på, at linjerne i oversættelsen og den originale tekst skal svare en til en. Det vil sige, du må ikke tilføje eller slette linjer, når du kompilerer oversættelsen. Ellers vil det forårsage forvirring i oversættelsesredigeringscachen.

Hvis noget går galt, se venligst [FAQ for løsninger.](/i18/qa#H1)

### `YAML` Oversætte

Kommandolinjeværktøjet finder alle filer, der ender med `.yml` i kildesprogets filbibliotek og oversætter dem.

* Bemærk, at filnavnssuffikset skal `.yml` (ikke `.yaml` ).

Værktøjet oversætter kun ordbogsværdierne til `.yml` ikke ordbogsnøglerne.

for eksempel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

vil blive oversat som `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Oversættelsen af `YAML` kan også ændres manuelt (men du må ikke tilføje eller slette nøgler eller linjer i oversættelsen).

Baseret på `YAML` Oversættelse kan du nemt bygge internationale løsninger til forskellige programmeringssprog.

## Avanceret Brug

### Oversættelse Undermappe

Så længe du opretter `.i18n/conf.yml` (ingen grund til at starte fra demoprojektskabelon hver gang), vil `i18` fungere fint.

Kommandolinjeværktøjet finder `.i18n/conf.yml` -konfigurationen i alle undermapper og oversætter den.

Projekter, der bruger [monorepo](//monorepo.tools) -arkitekturen, kan opdele sprogfiler i undermapper.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Brugerdefineret Installationsmappe

Det vil blive installeret til `/usr/local/bin`

Hvis `/usr/local/bin` ikke har skrivetilladelse, vil den blive installeret til `~/.bin` .

Indstil `TO` Du kan definere installationsmappen, for eksempel :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

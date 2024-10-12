# Installer Og Brug

## windows Installerer Først git bash

windows System, [klik venligst her for at downloade og installere `git bash` først](https://git-scm.com/download/win) .

Kør efterfølgende operationer i `git bash` .

## Installere

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurer Oversættelsestoken

Besøg [i18n.site/token](//i18n.site/token) Klik for at kopiere token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Opret `~/.config/i18n.site.yml` , indsæt det kopierede indhold i det, indholdet er som følger:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) skal du binde et kreditkort til betaling (ingen genopladning er nødvendig, hjemmesiden trækker automatisk gebyrer efter brug, [se hjemmesiden for priser](/#price) ).

## Bruge

### Demo Projekt

Se venligst [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) for at lære konfigurationen af `i18` -oversættelsen.

Brugere i Kina kan klone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Efter kloning skal du indtaste biblioteket og køre `i18` for at fuldføre oversættelsen.

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

De oversatte demofiler i `en` mappen er blot et eksempel og kan slettes.

### Kør Oversættelse

Gå ind i mappen og kør `i18` for at oversætte.

Ud over oversættelsen vil programmet også generere mappen `.i18n/data` , føj den venligst til depotet.

Efter oversættelse af den nye fil vil der blive genereret en ny datafil i denne mappe. Husk at tilføje `git add .` .

## Konfigurationsfil

`.i18n/conf.yml` er konfigurationsfilen for oversættelsesværktøjet med `i18` kommandolinje

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

I konfigurationsfilen, den underordnede af `fromTo` :

`en` er kildesproget, `zh ja ko de fr` er målsproget for oversættelsen.

Sprogkode se [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Hvis du for eksempel vil oversætte kinesisk til engelsk, skal du omskrive denne linje `zh: en` .

Hvis du ønsker at oversætte til alle understøttede sprog, skal du lade stå tomt efter `:` . f.eks

```
i18n:
  fromTo:
    en:
```

Du kan konfigurere forskellige `fromTo` for forskellige undermapper / En demonstration er skrevet som følger :

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

I denne konfigurationstabel er kildesproget for katalog `blog` -oversættelse `zh` , og kildesproget for katalog `blog/your_file_name.md` -oversættelse er `ja` .

### Ignorere Filen

Som standard vil alle filer, der starter med `.md` og `.yml` i kildesprogsbiblioteket, blive oversat.

Hvis du vil ignorere bestemte filer og ikke oversætte dem (såsom ufærdige udkast), kan du konfigurere det med `ignore` feltet.

`ignore` bruger den samme [globset](https://docs.rs/globset/latest/globset/#syntax) -syntaks som `.gitignore` -filen.

For eksempel betyder `_* ` i ovenstående konfigurationsfil, at filer, der starter med `_` ikke vil blive oversat.

## Oversættelsesregler

### Oversættelsesredaktører Bør Ikke Tilføje Eller Slette Linjer

Oversættelsen kan redigeres. Rediger den originale tekst og maskinoversæt den igen, de manuelle ændringer af oversættelsen vil ikke blive overskrevet (hvis dette afsnit i den originale tekst ikke er blevet ændret).

Men vær opmærksom på, at linjerne i oversættelsen og den originale tekst skal svare en til en. Det vil sige, du må ikke tilføje eller slette linjer, når du kompilerer oversættelsen. Ellers vil det forårsage forvirring i oversættelsesredigeringscachen.

Hvis noget går galt, se venligst [FAQ for løsninger.](/i18/qa#H1)

### `YAML` Oversættelser

Kommandolinjeværktøjet finder alle filer, der slutter med `.yml` i kildesprogets filmappe og oversætter dem.

* Bemærk, at filnavnssuffikset skal være `.yml` (ikke `.yaml` ).

Værktøjet oversætter kun ordbogsværdierne til `.yml` , ikke ordbogsnøglerne.

For eksempel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

vil blive oversat til `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Oversættelsen af `YAML` kan også ændres manuelt (men du må ikke tilføje eller slette nøgler eller linjer i oversættelsen).

Baseret på `YAML` oversættelse kan du nemt bygge internationale løsninger til forskellige programmeringssprog.

## Avanceret Brug

### Oversættelse Undermappe

Så længe `.i18n/conf.yml` er oprettet (ingen grund til at starte fra demoprojektskabelon hver gang), vil `i18` fungere fint.

Kommandolinjeværktøjet finder `.i18n/conf.yml` konfigurationer i alle undermapper og oversætter dem.

Projekter, der bruger [monorepo](//monorepo.tools) -arkitekturen, kan opdele sprogfiler i undermapper.

![](https://p.3ti.site/1719910016.avif)

### Brugerdefineret Installationsmappe

Det vil blive installeret til `/usr/local/bin` som standard.

Hvis `/usr/local/bin` ikke har skrivetilladelse, vil den blive installeret til `~/.bin` .

Indstilling af miljøvariabel `TO` kan definere installationsmappen, for eksempel :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
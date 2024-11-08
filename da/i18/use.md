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

Derudover skal [du](/#price) binde et betalingskreditkort på [i18n.site/payBill](//i18n.site/payBill)

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

Indtast biblioteket og kør `i18` for at oversætte.

Ud over oversættelsen vil programmet også generere mappen `.i18n/data` , føj den venligst til depotet.

Efter oversættelse af den nye fil vil der blive genereret en ny datafil i denne mappe. Husk at tilføje `git add . ` .

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

### Flersprogede Billeder/Links

Når URL'erne i billederne og links i `replace:` og `MarkDown` (og `src` og `href` attributterne for embedded `HTML` ) er konfigureret i `.i18n/conf.yml` med dette præfiks, erstattes kildesprogskoden i URL'en af sprogkoden for oversættelsen ( [sprog kodeliste](/i18/LANG_CODE) ).

For eksempel er din konfiguration som følger:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` er en ordbog, nøglen er URL-præfikset, der skal erstattes, og værdien er erstatningsreglen.

Betydningen af at erstatte regel `ko de uk>ru zh-TW>zh >en` ovenfor er, at `ko de` bruger billedet af deres egen sprogkode, `zh-TW` og `zh` bruger billedet af `zh` , `uk` bruger billedet af `ru` , og andre sprog (såsom `ja` ) bruger billedet på `en` som standard.

For eksempel er den franske ( `fr` ) kildefil med `MarkDown` som følger :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Den oversatte og genererede engelske ( `en` ) fil er som følger :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Her erstattes `/en/` i kildesprogskoden med `/zh/` i målsproget.

Bemærk : Der skal være `/` før og efter sprogkoden for den erstattede tekst i URL'en.

> [!TIP]
> Hvis `- /` er konfigureret i `url:` , vil kun relative stier blive matchet, men URL'er, der starter med `//` vil ikke blive matchet.
>
> Hvis nogle links på et domænenavn ønsker at blive erstattet, og nogle ikke ønsker at blive erstattet, kan du bruge forskellige præfikser såsom `[x](//x.com/en/)` og `[x](https://x.com/en/)` til at skelne mellem dem.

### Ignorere Filen

Som standard vil alle filer, der starter med `.md` og `.yml` i kildesprogsbiblioteket, blive oversat.

Hvis du vil ignorere bestemte filer og ikke oversætte dem (såsom ufærdige udkast), kan du konfigurere det med `ignore` feltet.

`ignore` bruger den samme [globset](https://docs.rs/globset/latest/globset/#syntax) -syntaks som `.gitignore` -filen.

For eksempel betyder `_* ` i ovenstående konfigurationsfil, at filer, der starter med `_` ikke vil blive oversat.

## Oversættelsesregler

### Oversættelsesredaktører Bør Ikke Tilføje Eller Slette Linjer

Oversættelsen kan redigeres. Rediger den originale tekst og maskinoversæt den igen, de manuelle ændringer af oversættelsen vil ikke blive overskrevet (hvis dette afsnit i den originale tekst ikke er blevet ændret).

> [!WARN]
> Der skal være en en-til-en overensstemmelse mellem linjerne i oversættelsen og den originale tekst. Det vil sige, du må ikke tilføje eller slette linjer, når du kompilerer oversættelsen. Ellers vil det forårsage forvirring i oversættelsesredigeringscachen.

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
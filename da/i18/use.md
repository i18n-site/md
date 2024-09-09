# Installer og brug

## Windows: Installer først Git Bash

windows System, [klik venligst her for at downloade og installere `git bash`](https://git-scm.com/download/win) først.

Kør herefter operationer i `git bash`.

## Installere

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurer oversættelsestoken

Besøg [i18n.site/token](//i18n.site/token) og klik for at kopiere token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Opret `~/.config/i18n.site.yml` og indsæt det kopierede indhold i det, indholdet er som følger:

```
token: YOUR_API_TOKEN
```

Derudover skal du på [i18n.site/payBill](//i18n.site/payBill) binde et betalingskort (uden opkrævning, hjemmesiden debiterer automatisk efter forbrug, [se priser på forsiden](/#price)).

## Brug

### Demo Projekt

Se venligst demonstrationsprojektet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) for at lære `i18`-oversættelsens konfiguration.

Kina-brugere kan klone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Efter kloning, gå til mappen og kør `i18` for at fuldføre oversættelsen.

### Directory Struktur

Skabelonens lagermappestruktur er som følger:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`-mappen indeholder oversættelsesdemonstrationer, som er eksempler og kan slettes.

### Kør oversættelse

Gå til mappen og kør `i18` for at oversætte.

Programmet genererer udover oversættelsen også mappen `.i18n/data`, som du venligst skal tilføje til dit versionssystem.

Efter oversættelse af nye filer vil der blive oprettet nye datafiler i denne mappe. Husk at tilføje dem med `git add .`.

## Konfigurationsfil

`.i18n/conf.yml` er konfigurationsfilen for `i18`-kommandolinjeoversættelsesværktøjet

Indholdet er som følger:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Kildesprog & målsprog

I konfigurationsfilen, under `fromTo`:

`en` er kildesproget, og `zh ja ko de fr` er målsprogene for oversættelsen.

Se sprogkoder på [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Hvis du f.eks. vil oversætte kinesisk til engelsk, skal du ændre linjen til `zh: en`.

Hvis du vil oversætte til alle understøttede sprog, lad stå tomt efter `:`. F.eks.:

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

I denne konfigurationstabel er kildesproget for `blog`-mappen `zh`, og kildesproget for `blog/your_file_name.md` er `ja`.

### Ignorer filer

Som standard oversættes alle filer med `.md` og `.yml`-endelser i kildesprogets mappe.

Hvis du vil ignorere visse filer (f.eks. ufuldstændige udkast), kan du konfigurere dette med `ignore`-feltet.

`ignore` bruger en lignende [globset](https://docs.rs/globset/latest/globset/#syntax)-syntaks som `.gitignore`-filen.

For eksempel betyder `_*` i konfigurationsfilen, at filer, der starter med `_`, ikke oversættes.

## Oversættelsesregler

### Rediger oversættelser uden at tilføje eller fjerne linjer

Oversættelser kan redigeres. Hvis originalteksten ændres, vil maskinoversættelsen ikke overskrive de manuelle ændringer (medmindre originalteksten er ændret).

Men vær opmærksom på, at oversættelsens og originaltekstens linjer skal matche. Du må ikke tilføje eller fjerne linjer ved redigering af oversættelsen, da dette kan forvirre oversættelsesredigeringscachen.

Hvis der opstår problemer, se [ofte stillede spørgsmål for løsninger](/i18/qa#H1)

### `YAML` Oversættelser

Kommandolinjeværktøjet finder alle filer, der slutter med `.yml` i kildesprogets mappe og oversætter dem.

* Bemærk, at filnavnssuffikset skal være `.yml` (ikke `.yaml`).

Værktøjet oversætter kun ordbogsværdierne i `.yml`-filer, ikke ordbogsnøglerne.

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

## Oversættelse af undermapper

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
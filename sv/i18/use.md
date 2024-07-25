# Installera Och Använd

## windows Installerar Först git bash

windows System, [klicka här för att ladda ner och installera först `git bash`](https://git-scm.com/download/win)

Kör efterföljande operationer i `git bash`

## Installera

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurera Översättningstoken

Besök [i18n.site/token](//i18n.site/token) Klicka för att kopiera token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Skapa `~/.config/i18n.site.yml` klistra in det kopierade innehållet i det, innehållet är som följer:

```
token: YOUR_API_TOKEN
```

Dessutom behöver du [i18n.site/payBill](//i18n.site/payBill) ett kreditkort för betalning (ingen omladdning krävs, webbplatsen drar automatiskt av avgifter efter användning, [se hemsidan för prissättning](/#price) ).

## Använda Sig Av

### Demoprojekt

Se demoprojektet för att lära `i18` konfigurationen av översättningen [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Användare i Kina kan klona [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Efter kloning, gå in i katalogen och kör för att slutföra översättningen `i18`

### Katalogstruktur

Mallens lagerkatalogstruktur är som följer

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Katalogen `en` innehåller de översatta demofilerna, som bara är ett exempel och kan raderas.

### Kör Översättning

Gå in i katalogen och kör för att översätta `i18`

### Lägg Till Filer I Arkivet

Förutom översättning kommer programmet också att generera följande filer, lägg till dem i förvaret.

```
.i18n/hash
.i18n/cache/.gitignore
```

Bland dem är innehållet : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Detta innebär att ignorera alla filer i `.i18n/cache/` (utom `.i18n/cache/.gitignore` ).

Om din versionskontrollprogramvara inte är `git` , ignorera den enligt denna konfiguration.

## Konfigurationsfil

`.i18n/conf.yml` Det är konfigurationsfilen för `i18` line-översättningsverktyget

Innehållet är som följer:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Källspråk &

I konfigurationsfilen, underordnade av `fromTo`

`en` är källspråket, `zh ja ko de fr` är målspråket för översättningen.

Språkkod se [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Om du till exempel vill översätta kinesiska till engelska, skriv om den här raden `zh: en`

Om du vill översätta till alla språk som stöds, lämna tomt efter `:` till exempel

```
i18n:
  fromTo:
    en:
```

### Ignorera Filen

Som standard kommer alla filer som börjar med `.md` och `.yml` i källspråkskatalogen att översättas.

Om du vill ignorera vissa filer och inte översätta dem (som oavslutade utkast), kan du använda `ignore` .

`ignore` Använder en syntax som liknar `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Till exempel `_* ` konfigurationsfilen ovan att filer som börjar med `_` inte kommer att översättas.

## Översättningsregler

### Översättningsredigerare Bör Inte Lägga Till Eller Ta Bort Rader

Översättningen är redigerbar. Ändra originaltexten och maskinöversätt den igen, de manuella ändringarna av översättningen kommer inte att skrivas över (om detta stycke i originaltexten inte har ändrats).

Men observera att raderna i översättningen och originaltexten måste motsvara en till en. Det vill säga, lägg inte till eller ta bort rader när du kompilerar översättningen. Annars kommer det att orsaka förvirring i översättningsredigeringscachen.

Om något går fel, se [FAQ för lösningar.](/i18/qa#H1)

### `YAML` Översätt

Kommandoradsverktyget hittar alla filer som slutar med `.yml` i källspråkets filkatalog och översätter dem.

* Observera att filnamnssuffixet måste `.yml` (inte `.yaml` ).

Verktyget översätter bara ordboksvärdena till `.yml` inte ordboksnycklarna.

till exempel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

kommer att översättas som `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Översättningen av `YAML` kan också ändras manuellt (men lägg inte till eller ta bort nycklar eller rader i översättningen).

Baserat `YAML` översättning kan du enkelt bygga internationella lösningar för olika programmeringsspråk.

## Avancerad Användning

### Översättning Underkatalog

Så länge du skapar `.i18n/conf.yml` (du behöver inte utgå från demoprojektmall varje gång) kommer `i18` att fungera bra.

Kommandoradsverktyget hittar `.i18n/conf.yml` -konfigurationen i alla underkataloger och översätter den.

Projekt som använder [monorepo](//monorepo.tools) -arkitekturen kan dela upp språkfiler i underkataloger.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Anpassad Installationskatalog

Det kommer att installeras till `/usr/local/bin`

Om `/usr/local/bin` inte har skrivbehörighet kommer den att installeras till `~/.bin` .

Ställ in `TO` Du kan definiera installationskatalogen, till exempel :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

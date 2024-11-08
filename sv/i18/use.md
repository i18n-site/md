# Installera Och Använd

## windows Installerar Först git bash

windows System, [klicka här för att ladda ner och installera `git bash` först](https://git-scm.com/download/win) .

Kör efterföljande operationer i `git bash` .

## Installera

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurera Översättningstoken

Besök [i18n.site/token](//i18n.site/token) Klicka för att kopiera token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Skapa `~/.config/i18n.site.yml` , klistra in det kopierade innehållet i det, innehållet är som följer:

```
token: YOUR_API_TOKEN
```

Dessutom måste du binda ett [betalkort](/#price) i [i18n.site/payBill](//i18n.site/payBill)

## Använda

### Demoprojekt

Se demoprojektet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) att lära dig konfigurationen av `i18` översättning.

Användare i Kina kan klona [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Efter kloningen, gå in i katalogen och kör `i18` för att slutföra översättningen.

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

De översatta demofilerna i `en` katalogen är bara ett exempel och kan raderas.

### Kör Översättning

Gå in i katalogen och kör `i18` för att översätta.

Förutom översättningen kommer programmet också att generera mappen `.i18n/data` , lägg till den i förvaret.

Efter att ha översatt den nya filen kommer en ny datafil att genereras i denna katalog Kom ihåg att lägga till `git add . ` .

## Inställningsfil

`.i18n/conf.yml` är konfigurationsfilen för `i18` kommandoradsöversättningsverktyget

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

I konfigurationsfilen, den underordnade av `fromTo` :

`en` är källspråket, `zh ja ko de fr` är målspråket för översättningen.

Språkkod se [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Om du till exempel vill översätta kinesiska till engelska, skriv om denna rad `zh: en` .

Om du vill översätta till alla språk som stöds, lämna tomt efter `:` . till exempel

```
i18n:
  fromTo:
    en:
```

Du kan konfigurera olika `fromTo` för olika underkataloger / En demonstration skrivs som följer :

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

I den här konfigurationstabellen är källspråket för katalog `blog` -översättning `zh` och källspråket för katalog `blog/your_file_name.md` -översättning är `ja` .

### Flerspråkiga Bilder/Länkar

När webbadresserna i bilderna och länkarna i `replace:` och `MarkDown` (och attributen `src` och `href` för embedded `HTML` ) är konfigurerade i `.i18n/conf.yml` med detta prefix, kommer källspråkskoden i URL:en att ersättas med språkkoden för översättningen ( [språk kodlista](/i18/LANG_CODE) ).

Din konfiguration är till exempel följande:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` är en ordbok, nyckeln är URL-prefixet som ska ersättas och värdet är ersättningsregeln.

Meningen med att ersätta regel `ko de uk>ru zh-TW>zh >en` ovan är att `ko de` använder bilden av sin egen språkkod, `zh-TW` och `zh` använder bilden av `zh` , `uk` använder bilden av `ru` och andra språk (som `ja` ) använder bilden av `en` som standard.

Till exempel är den franska ( `fr` ) källfilen med `MarkDown` följande :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Den översatta och genererade engelska ( `en` ) filen är som följer :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Här ersätts `/en/` orna i källspråkskoden med `/zh/` i målspråket.

Obs : Det måste finnas `/` före och efter språkkoden för den ersatta texten i URL:en.

> [!TIP]
> Om `- /` är konfigurerat i `url:` kommer endast relativa sökvägar att matchas, men webbadresser som börjar med `//` kommer inte att matchas.
>
> Om några länkar i ett domännamn vill ersättas och andra inte vill ersättas, kan du använda olika prefix som `[x](//x.com/en/)` och `[x](https://x.com/en/)` för att skilja dem åt.

### Ignorera Filen

Som standard kommer alla filer som börjar med `.md` och `.yml` i källspråkskatalogen att översättas.

Om du vill ignorera vissa filer och inte översätta dem (som oavslutade utkast) kan du konfigurera det med `ignore` -fältet.

`ignore` använder samma [globset](https://docs.rs/globset/latest/globset/#syntax) -syntax som `.gitignore` -filen.

Till exempel betyder `_* ` i ovanstående konfigurationsfil att filer som börjar med `_` inte kommer att översättas.

## Översättningsregler

### Översättningsredigerare Bör Inte Lägga Till Eller Ta Bort Rader

Översättningen är redigerbar. Ändra originaltexten och maskinöversätt den igen, de manuella ändringarna av översättningen kommer inte att skrivas över (om detta stycke i originaltexten inte har ändrats).

> [!WARN]
> Det måste finnas en en-till-en-överensstämmelse mellan raderna i översättningen och originaltexten. Det vill säga, lägg inte till eller ta bort rader när du kompilerar översättningen. Annars kommer det att orsaka förvirring i översättningsredigeringscachen.

Om något går fel, se [FAQ för lösningar.](/i18/qa#H1)

### `YAML` Översättningar

Kommandoradsverktyget hittar alla filer som slutar med `.yml` i källspråkets filkatalog och översätter dem.

* Observera att filnamnssuffixet måste vara `.yml` (inte `.yaml` ).

Verktyget översätter endast ordboksvärdena till `.yml` , inte ordboksnycklarna.

Till exempel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

kommer att översättas till `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Översättningen av `YAML` kan också ändras manuellt (men lägg inte till eller ta bort nycklar eller rader i översättningen).

Baserat på `YAML` översättning kan du enkelt bygga internationella lösningar för olika programmeringsspråk.

## Avancerad Användning

### Översättning Underkatalog

Så länge som `.i18n/conf.yml` skapas (du behöver inte utgå från demoprojektmall varje gång) kommer `i18` att fungera bra.

Kommandoradsverktyget hittar `.i18n/conf.yml` konfigurationer i alla underkataloger och översätter dem.

Projekt som använder [monorepo](//monorepo.tools) -arkitekturen kan dela upp språkfiler i underkataloger.

![](https://p.3ti.site/1719910016.avif)

### Anpassad Installationskatalog

Den kommer att installeras till `/usr/local/bin` som standard.

Om `/usr/local/bin` inte har skrivbehörighet kommer den att installeras till `~/.bin` .

Inställning av miljövariabel `TO` kan definiera installationskatalogen, till exempel :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
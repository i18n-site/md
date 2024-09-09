# Installera och använd

## Windows: Installera först Git Bash

Windows-system: [Klicka här för att ladda ner och installera `git bash`](https://git-scm.com/download/win) först.

Kör efterföljande åtgärder i `git bash`.

## Installera

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurera översättnings token

Besök [i18n.site/token](//i18n.site/token) och klicka för att kopiera token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Skapa `~/.config/i18n.site.yml` och klistra in det kopierade innehållet, så här:

```
token: YOUR_API_TOKEN
```

Dessutom måste du [i18n.site/payBill](//i18n.site/payBill) binda ett betalkort (ingen påföring krävs, webbplatsen debiterar automatiskt baserat på användning, [se prislistan på startsidan](/#price)).

## Användning

### Demoprojekt

Se demonstrationsprojektet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) för att lära dig hur man konfigurerar `i18`-översättning.

Användare i Kina kan klona [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Efter att ha klonat, gå in i katalogen och kör `i18` för att slutföra översättningen.

### Katalogstruktur

Mallens katalogstruktur ser ut så här:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

I `en`-katalogen finns översättningsdemonstrationfiler, som bara är exempel och kan raderas.

### Kör översättning

Gå in i katalogen och kör `i18` för att översätta.

Förutom översättningen kommer programmet också att skapa mappen `.i18n/data`, var vänlig lägg till den i versionssystemet.

Efter att ha översatt nya filer kommer det att genereras nya datafiler i denna katalog, kom ihåg att använda `git add .` för att lägga till dem.

## Konfigurationsfil

`.i18n/conf.yml` är `i18`-kommandoradsverktygets konfigurationsfil

Innehållet ser ut så här:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Källspråk & målspråk

I konfigurationsfilen, under `fromTo`:

`en` är källspråket, `zh ja ko de fr` är målspråken för översättningen.

Språkkoder se [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Till exempel, om du vill översätta från kinesiska till engelska, ändra raden till `zh: en`.

Om du vill översätta till alla språk som stöds, lämna tomma tecken efter `:`. Till exempel:

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

I denna konfigurationstabell är källspråket för `blog`-katalogen `zh`, och källspråket för `blog/your_file_name.md` är `ja`.

### Ignorera filer

Som standard översätts alla `.md`- och `.yml`-filer i källspråkskatalogen.

om du vill ignorera vissa filer och undvika översättning (t.ex. ofärdiga utkast), kan du konfigurera detta med `ignore`-fältet.

`ignore` använder en syntax liknande `.gitignore`-filens [globset](https://docs.rs/globset/latest/globset/#syntax).

Till exempel betyder `_*` att alla filer som börjar med `_` ignoreras.

## Översättningsregler

### Redigera inte översättningar genom att lägga till eller ta bort rader

Översättningen är redigerbar. Om du ändrar originaltexten och kör maskinöversättning igen, kommer de manuella ändringarna inte att skrivas över (om originaltexten inte har ändrats).

Observera att rader i översättningen och originaltexten måste matcha exakt. Det vill säga, när du redigerar översättningen, lägg inte till eller ta bort rader. Annars kan det orsaka förvirring i översättningsredigeringscachen.

om det uppstår problem, se [vanliga frågor och lösningar](/i18/qa#H1)

### `YAML`-översättningar

Kommandoradsverktyget hittar alla `.yml`-filer i källspråkskatalogen och översätter dem.

* Observera att filnamnssuffixet måste vara `.yml` (inte `.yaml`).

Verktyget översätter endast värdena i ordboken i `.yml`-filer, inte nycklarna.

Till exempel `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

översätts till `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Översättningen av `YAML` kan också justeras manuellt (men undvik att lägga till eller ta bort nycklar eller rader i översättningen).

Baserat på `YAML`-översättning kan du enkelt bygga internationella lösningar för olika programmeringsspråk.

## Avancerad användning

### Översätt underkataloger

Så länge du skapar `.i18n/conf.yml` (du behöver inte börja med demoprojektmallen varje gång) kommer `i18` att fungera korrekt.

Kommandoradsverktyget hittar alla `.i18n/conf.yml`-konfigurationer i underkataloger och översätter dem.

Projekt som använder [monorepo](//monorepo.tools)-arkitekturen kan dela upp språkfiler i underkataloger.

![](https://p.3ti.site/1719910016.avif)

### Anpassad installationskatalog

Standard är att installera till `/usr/local/bin`.

om `/usr/local/bin` saknar skrivbehörighet, installeras det till `~/.bin`.

Du kan definiera installationskatalogen genom att sätta miljövariabeln `TO`, till exempel:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
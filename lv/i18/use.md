# Instalējiet Un Lietojiet

## windows Vispirms Instalējiet git bash

windows , lūdzu, [noklikšķiniet šeit, lai vispirms lejupielādētu un instalētu `git bash`](https://git-scm.com/download/win) .

Palaidiet nākamās darbības `git bash` .

## Instalējiet

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurēt Tulkošanas Pilnvaru

Apmeklējiet [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Izveidojiet `~/.config/i18n.site.yml` , ielīmējiet tajā nokopēto saturu, saturs ir šāds:

```
token: YOUR_API_TOKEN
```

Turklāt, lai veiktu maksājumu, ir [i18n.site/payBill](//i18n.site/payBill) kredītkarte (nav jāveic papildmaksa, vietne automātiski ieturēs maksu atbilstoši lietojumam, [cenu noteikšanu skatiet mājaslapā](/#price) ).

## Izmantot

### Demo Projekts

Lūdzu, skatiet demonstrācijas projektu [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) lai uzzinātu `i18` tulkojuma konfigurāciju.

Lietotāji Ķīnā var klonēt [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Pēc klonēšanas ievadiet direktoriju un palaidiet `i18` lai pabeigtu tulkojumu.

### Direktoriju Struktūra

Veidnes noliktavas direktorija struktūra ir šāda

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Tulkotie demonstrācijas faili direktorijā `en` ir tikai piemērs, un tos var izdzēst.

### Palaist Tulkošanu

Ievadiet direktoriju un palaidiet `i18` lai tulkotu.

### Pievienojiet Failus Krātuvei

Papildus tulkošanai programma ģenerēs arī šādus failus, lūdzu, pievienojiet tos repozitorijai.

```
.i18n/hash
.i18n/cache/.gitignore
```

Starp tiem `.i18n/cache/.gitignore` saturs ir šāds :

```
**/*
!**/.gitignore
```

Tas nozīmē, ka visi faili direktorijā `.i18n/cache/` (izņemot `.i18n/cache/.gitignore` ) tiek ignorēti.

Ja jūsu versijas kontroles programmatūra nav `git` , lūdzu, ignorējiet to saskaņā ar šo konfigurāciju.

## Konfigurācijas Fails

`.i18n/conf.yml` ir `i18` komandrindas tulkošanas rīka konfigurācijas fails

Saturs ir šāds:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Avota & Tulkošanas Valoda

Konfigurācijas failā `fromTo` pakārtotais:

`en` ir avota valoda, `zh ja ko de fr` ir tulkojuma mērķa valoda.

Valodas kods skat [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Piemēram, ja vēlaties tulkot ķīniešu valodu angļu valodā, pārrakstiet šo rindiņu `zh: en` .

Ja vēlaties tulkot visās atbalstītajās valodās, pēc `:` atstājiet lauku tukšu. piemēram

```
i18n:
  fromTo:
    en:
```

Dažādiem apakšdirektorijiem var konfigurēt `fromTo` / ir uzrakstīta šādi :

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

Šajā konfigurācijas tabulā `blog` kataloga tulkojuma avota valoda ir `zh` , bet `blog/your_file_name.md` tulkojuma avota valoda ir `ja` .

### Ignorēt Failu

Pēc noklusējuma visi faili, kas sākas ar `.md` un `.yml` avota valodas direktorijā, tiks tulkoti.

Ja vēlaties ignorēt noteiktus failus un netulkot tos (piemēram, nepabeigtos melnrakstus), varat to konfigurēt, izmantojot lauku `ignore` .

`ignore` izmanto to pašu [globset](https://docs.rs/globset/latest/globset/#syntax) kā `.gitignore` fails.

Piemēram, `_* ` iepriekš minētajā konfigurācijas failā nozīmē, ka faili, kas sākas ar `_` netiks tulkoti.

## Tulkošanas Noteikumi

### Tulkošanas Redaktoriem Nevajadzētu Pievienot Vai Dzēst Rindas

Tulkojums ir rediģējams. Pārveidojiet oriģinālo tekstu un mašīntulkojiet to vēlreiz, manuālās tulkojuma izmaiņas netiks pārrakstītas (ja šī oriģinālā teksta rindkopa nav mainīta).

Taču, lūdzu, ņemiet vērā, ka tulkojuma un oriģinālā teksta rindiņām jāatbilst vienai pret vienu. Tas ir, nepievienojiet un nedzēsiet rindas, apkopojot tulkojumu. Pretējā gadījumā tas radīs neskaidrības tulkojuma rediģēšanas kešatmiņā.

Ja kaut kas noiet greizi, lūdzu, skatiet [risinājumus FAQ.](/i18/qa#H1)

### `YAML` Tulkojumu

Komandrindas rīks avota valodas failu direktorijā atradīs visus failus, kas beidzas ar `.yml` un iztulkos tos.

* Ņemiet vērā, ka faila nosaukuma sufiksam ir jābūt `.yml` (nevis `.yaml` ).

Šis rīks tulko tikai vārdnīcas vērtības `.yml` , nevis vārdnīcas taustiņus.

Piemēram `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

tiks tulkots kā `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` tulkojumu var mainīt arī manuāli (taču nepievienojiet un nedzēsiet tulkojumā taustiņus vai rindiņas).

Balstoties uz `YAML` tulkojumu, jūs varat viegli izveidot starptautiskus risinājumus dažādām programmēšanas valodām.

## Uzlabota Lietošana

### Tulkošanas Apakšdirektorijs

Kamēr ir izveidots `.i18n/conf.yml` (nav nepieciešams katru reizi sākt no demonstrācijas projekta veidnes), `i18` darbosies labi.

Komandrindas rīks visos apakšdirektorijos atradīs `.i18n/conf.yml` konfigurācijas un pārtulkos tās.

Projekti, kas izmanto arhitektūru [monorepo](//monorepo.tools) var sadalīt valodu failus apakšdirektorijos.

![](https://p.3ti.site/1719910016.avif)

### Pielāgots Instalācijas Direktorijs

Pēc noklusējuma tas tiks instalēts uz `/usr/local/bin` .

Ja `/usr/local/bin` nav rakstīšanas atļaujas, tas tiks instalēts `~/.bin` .

Vides mainīgā `TO` iestatīšana var definēt instalācijas direktoriju, piemēram :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
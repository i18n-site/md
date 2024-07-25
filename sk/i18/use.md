# Nainštalujte a Používajte

## windows Najprv Nainštaluje git bash

windows , [najskôr si ho stiahnite a nainštalujte `git bash`](https://git-scm.com/download/win)

Spustite nasledujúce operácie v `git bash`

## Inštalácia

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Nakonfigurujte Token Prekladu

Navštívte [i18n.site/token](//i18n.site/token) Kliknutím skopírujete token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Create `~/.config/i18n.site.yml` vložte do neho skopírovaný obsah, obsah je nasledovný:

```
token: YOUR_API_TOKEN
```

Okrem toho musíte pri platbe [i18n.site/payBill](//i18n.site/payBill) kreditnú kartu (nie je potrebné dobíjanie, web si automaticky strháva poplatky podľa použitia, [ceny nájdete na domovskej stránke](/#price) ).

## Použitie

### Demo Projekt

Pozrite si ukážkový projekt [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) kde sa dozviete o konfigurácii prekladu `i18`

Používatelia v Číne môžu klonovať [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po klonovaní vstúpte do adresára a spustite `i18`

### Adresárová Štruktúra

Štruktúra adresára skladu šablón je nasledovná

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Adresár `en` obsahuje preložené ukážkové súbory, ktoré sú len príkladom a možno ich vymazať.

### Spustiť Preklad

Zadajte adresár a spustite `i18`

### Pridajte Súbory Do Úložiska

Okrem prekladu program vygeneruje aj nasledujúce súbory, pridajte ich do úložiska.

```
.i18n/hash
.i18n/cache/.gitignore
```

Medzi nimi : obsah `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

To znamená ignorovať všetky súbory v `.i18n/cache/` (okrem `.i18n/cache/.gitignore` ).

Ak váš softvér na správu verzií nie je `git` ignorujte ho podľa tejto konfigurácie.

## Konfiguračný Súbor

`.i18n/conf.yml` Je to konfiguračný súbor nástroja na preklad `i18` riadku

Obsah je nasledovný:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Zdrojový & Jazyk Prekladu

V konfiguračnom súbore sú podriadení `fromTo`

`en` je zdrojový jazyk, `zh ja ko de fr` je cieľový jazyk prekladu.

Kód jazyka pozri [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Napríklad, ak chcete preložiť čínštinu do angličtiny, prepíšte tento riadok `zh: en`

Ak chcete preložiť do všetkých podporovaných jazykov, po `:` napríklad

```
i18n:
  fromTo:
    en:
```

### Ignorovať Súbor

V predvolenom nastavení budú preložené všetky súbory začínajúce na `.md` a `.yml` v adresári zdrojového jazyka.

Ak chcete ignorovať určité súbory a neprekladať ich (napríklad nedokončené koncepty), môžete použiť konfiguráciu poľa `ignore`

`ignore` Používa syntax podobnú `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Napríklad vo vyššie uvedenom konfiguračnom súbore `_* ` znamená, že súbory začínajúce `_` nebudú preložené.

## Pravidlá Prekladu

### Editori Prekladov by Nemali Pridávať Ani Odstraňovať Riadky

Preklad je upraviteľný. Upravte pôvodný text a znova ho strojovo preložte, ručné úpravy prekladu sa neprepíšu (ak tento odsek pôvodného textu nebol upravený).

Upozorňujeme však, že riadky prekladu a pôvodného textu musia zodpovedať jednému. To znamená, že pri zostavovaní prekladu nepridávajte ani neodstraňujte riadky. V opačnom prípade to spôsobí zmätok vo vyrovnávacej pamäti na úpravu prekladu.

Ak sa niečo pokazí, [riešenia nájdete v často kladených otázkach.](/i18/qa#H1)

### `Yaml`

Nástroj príkazového riadka nájde všetky súbory končiace na `.yml` v adresári súboru zdrojového jazyka a preloží ich.

* Všimnite si, že prípona názvu súboru musí byť `.yml` (nie `.yaml` ).

Nástroj prekladá iba hodnoty slovníka v `.yml` , nie kľúče slovníka.

napríklad `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bude preložené ako `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Preklad `YAML` je možné upraviť aj manuálne (ale nepridávajte ani neodstraňujte kľúče alebo riadky v preklade).

Na základe `YAML` môžete ľahko vytvárať medzinárodné riešenia pre rôzne programovacie jazyky.

## Pokročilé Používanie

### Podadresár Prekladu

Pokiaľ vytvoríte `.i18n/conf.yml` (nie je potrebné zakaždým začať od šablóny demo projektu), `i18` bude fungovať dobre.

Nástroj príkazového riadka nájde konfiguráciu `.i18n/conf.yml` vo všetkých podadresároch a preloží ju.

Projekty, ktoré používajú architektúru [monorepo](//monorepo.tools) môžu rozdeliť jazykové súbory do podadresárov.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Vlastný Inštalačný Adresár

Štandardne sa nainštaluje do `/usr/local/bin`

Ak `/usr/local/bin` nemá oprávnenie na zápis, nainštaluje sa do `~/.bin` .

Nastavenie premenných `TO` Môžete definovať napríklad inštalačný adresár :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

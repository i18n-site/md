# Nainštalujte a Používajte

## windows Najprv Nainštaluje git bash

windows , najskôr [si stiahnite a nainštalujte `git bash`](https://git-scm.com/download/win) .

Spustite nasledujúce operácie v `git bash` .

## Inštalovať

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Nakonfigurujte Token Prekladu

Navštívte [i18n.site/token](//i18n.site/token) Kliknutím skopírujete token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Vytvorte `~/.config/i18n.site.yml` , vložte do nej skopírovaný obsah, obsah je nasledujúci:

```
token: YOUR_API_TOKEN
```

Okrem toho musíte pri platbe [i18n.site/payBill](//i18n.site/payBill) kreditnú kartu (nie je potrebné dobíjanie, web si automaticky strháva poplatky podľa použitia, [ceny nájdete na domovskej stránke](/#price) ).

## Použitie

### Demo Projekt

Pozrite si ukážkový projekt [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) kde sa dozviete o konfigurácii prekladu `i18` .

Používatelia v Číne môžu klonovať [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po klonovaní zadajte adresár a spustite `i18` na dokončenie prekladu.

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

Preložené ukážkové súbory v adresári `en` sú len príkladom a možno ich vymazať.

### Spustiť Preklad

Zadajte adresár a spustite `i18` na preklad.

Okrem prekladu program vygeneruje aj priečinok `.i18n/data` , pridajte ho prosím do úložiska.

Po preložení nového súboru sa v tomto adresári vygeneruje nový dátový súbor. Nezabudnite pridať `git add .` .

## Konfiguračný Súbor

`.i18n/conf.yml` je konfiguračný súbor nástroja na preklad príkazového riadka `i18`

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

V konfiguračnom súbore podriadený `fromTo` :

`en` je zdrojový jazyk, `zh ja ko de fr` je cieľový jazyk prekladu.

Kód jazyka pozri [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Napríklad, ak chcete preložiť čínštinu do angličtiny, prepíšte tento riadok `zh: en` .

Ak chcete prekladať do všetkých podporovaných jazykov, po `:` ponechajte prázdne. napríklad

```
i18n:
  fromTo:
    en:
```

Môžete nakonfigurovať rôzne `fromTo` pre rôzne / Ukážka je napísaná nasledovne :

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

V tejto konfiguračnej tabuľke je zdrojový jazyk prekladu katalógu `blog` `zh` a zdrojový jazyk prekladu `blog/your_file_name.md` je `ja` .

### Ignorovať Súbor

V predvolenom nastavení budú preložené všetky súbory začínajúce `.md` a `.yml` v adresári zdrojového jazyka.

Ak chcete ignorovať určité súbory a neprekladať ich (napríklad nedokončené koncepty), môžete to nakonfigurovať pomocou poľa `ignore` .

`ignore` používa [globset](https://docs.rs/globset/latest/globset/#syntax) syntax ako súbor `.gitignore` .

Napríklad `_* ` vo vyššie uvedenom konfiguračnom súbore znamená, že súbory začínajúce `_` nebudú preložené.

## Pravidlá Prekladu

### Editori Prekladov by Nemali Pridávať Ani Odstraňovať Riadky

Preklad je upraviteľný. Upravte pôvodný text a znova ho strojovo preložte, ručné úpravy prekladu sa neprepíšu (ak tento odsek pôvodného textu nebol upravený).

Upozorňujeme však, že riadky prekladu a pôvodného textu musia zodpovedať jednému. To znamená, že pri zostavovaní prekladu nepridávajte ani neodstraňujte riadky. V opačnom prípade to spôsobí zmätok vo vyrovnávacej pamäti na úpravu prekladu.

Ak sa niečo pokazí, [riešenia nájdete v často kladených otázkach.](/i18/qa#H1)

### `YAML` Prekladov

Nástroj príkazového riadka nájde všetky súbory končiace na `.yml` v adresári súboru zdrojového jazyka a preloží ich.

* Všimnite si, že prípona súboru musí byť `.yml` (nie `.yaml` ).

Nástroj prekladá iba hodnoty slovníka na `.yml` , nie kľúče slovníka.

Napríklad `i18n/en/i18n.yml`

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

Na základe prekladu `YAML` môžete jednoducho zostaviť medzinárodné riešenia pre rôzne programovacie jazyky.

## Pokročilé Používanie

### Podadresár Prekladu

Pokiaľ je vytvorená `.i18n/conf.yml` (nie je potrebné zakaždým začínať od šablóny demo projektu), `i18` bude fungovať dobre.

Nástroj príkazového riadka nájde `.i18n/conf.yml` konfigurácií vo všetkých podadresároch a preloží ich.

Projekty, ktoré používajú architektúru [monorepo](//monorepo.tools) môžu rozdeliť jazykové súbory do podadresárov.

![](https://p.3ti.site/1719910016.avif)

### Vlastný Inštalačný Adresár

Štandardne sa nainštaluje na `/usr/local/bin` .

Ak `/usr/local/bin` nemá oprávnenie na zápis, nainštaluje sa na `~/.bin` .

Nastavenie premennej prostredia `TO` môže definovať inštalačný adresár, napríklad :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
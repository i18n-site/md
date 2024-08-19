# Nainstalujte a Použijte

## windows Nejprve nainstalujte git bash

windows , nejprve [stáhněte a nainstalujte `git bash`](https://git-scm.com/download/win) .

Spusťte následující operace v `git bash` .

## Instalace

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurace překladového tokenu

[i18n.site/token](//i18n.site/token) Klikněte pro zkopírování tokenu

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Vytvořte `~/.config/i18n.site.yml` a vložte do něj zkopírovaný obsah, například:

```
token: YOUR_API_TOKEN
```

Kromě toho je třeba na [i18n.site/payBill](//i18n.site/payBill) připojit platební kartu (není nutné dobíjení, web automaticky strhne poplatky podle využití, [ceny viz domovská stránka](/#price)).

## Použití

### Demo projekt

Prostudujte si prosím ukázkový projekt [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18), abyste se dozvěděli o konfiguraci překladu `i18`.

Uživatelé v Číně mohou klonovat [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po klonování zadejte adresář a spusťte `i18` pro dokončení překladu.

### Struktura adresářů

Struktura adresářů šablony vypadá takto:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

V adresáři `en` jsou ukázkové překladové soubory, které jsou pouze příkladem a mohou být odstraněny.

### Spuštění překladu

Zadejte adresář a spusťte `i18` pro překlad.

### Přidání souborů do verze

Program kromě překladu vygeneruje také následující soubory, které přidejte prosím do verze.

```
.i18n/hash
.i18n/cache/.gitignore
```

Obsah `.i18n/cache/.gitignore` je následující:

```
**/*
!**/.gitignore
```

To znamená, že všechny soubory v adresáři `.i18n/cache/` (kromě `.i18n/cache/.gitignore`) jsou ignorovány.

Pokud váš verzovací software není `git`, konfigurujte ignorování podle této šablony.

## Konfigurační soubor

`.i18n/conf.yml` je konfigurační soubor pro překladový nástroj příkazové řádky `i18`

Obsah je následující:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Zdrojový jazyk a cílový jazyk překladu

V konfiguračním souboru pod `fromTo`:

`en` je zdrojový jazyk, `zh ja ko de fr` jsou cílové jazyky překladu.

Kódy jazyků viz [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Například, pokud chcete přeložit čínštinu do angličtiny, změňte tento řádek na `zh: en`.

Pokud chcete překládat do všech podporovaných jazyků, nechte za `:` prázdné. Například:

```
i18n:
  fromTo:
    en:
```

Můžete nakonfigurovat různé `fromTo` pro různé podadresáře : /

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

V této konfigurační tabulce je zdrojový jazyk překladu adresáře `blog` `zh`, zatímco zdrojový jazyk překladu `blog/your_file_name.md` je `ja`.

### Ignorování souborů

Výchozí nastavení překládá všechny soubory s příponami `.md` a `.yml` v adresáři zdrojového jazyka.

Pokud chcete ignorovat určité soubory a nepřekládat je (například nedokončené návrhy), můžete to konfigurovat pomocí pole `ignore`.

`ignore` používá stejnou syntax [globset](https://docs.rs/globset/latest/globset/#syntax) jako `.gitignore`.

Například, `_*` v konfiguračním souboru znamená, že soubory začínající `_` nebudou přeloženy.

## Pravidla pro překlad

### Úpravy překladu by neměly přidávat nebo mazat řádky

Překlad je upravitelný. Pokud upravíte původní text a znovu provedete strojový překlad, ruční úpravy překladu nebudou přepsány (pokud se původní text nezměnil).

Vezměte prosím na vědomí, že řádky překladu a původního textu musí být v souladu. To znamená, že při úpravě překladu nepřidávejte ani neodstraňujte řádky. Jinak dojde k záměně v mezipaměti pro úpravy překladu.

Pokud dojde k záměně, najdete řešení v [častých dotazech](/i18/qa#H1)

### Překlad `YAML`

Nástroj příkazové řádky najde všechny soubory končící `.yml` v adresáři zdrojového jazyka a přeloží je.

* Všimněte si, že přípona souboru musí být `.yml` (ne `.yaml`).

Nástroj překládá pouze hodnoty slovníku v `.yml`, nikoli klíče.

Například `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bude přeloženo jako `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Překlad `YAML` lze také ručně upravovat (ale nevyhazujte ani nepridávejte klíče nebo řádky do překladu).

Na základě překladu `YAML` můžete snadno vytvářet mezinárodní řešení pro různé programovací jazyky.

## Pokročilé použití

### Překlad podadresářů

Dokud je vytvořena `.i18n/conf.yml` (není nutné začínat od šablony demo projektu), `i18` bude fungovat správně.

Nástroj příkazové řádky najde konfigurační soubory `.i18n/conf.yml` ve všech podadresářích a přeloží je.

Projekty používající architekturu [monorepo](//monorepo.tools) mohou rozdělit jazykové soubory do podadresářů.

![](https://p.3ti.site/1719910016.avif)

### Vlastní instalační adresář

Výchozí instalační adresář je `/usr/local/bin`.

Pokud `/usr/local/bin` nemá oprávnění k zápisu, bude nainstalován do `~/.bin`.

Nastavení proměnné prostředí `TO` může definovat instalační adresář, například:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
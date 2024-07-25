# Nainstalujte a Použijte

## windows Nejprve Nainstalují git bash

windows , [nejprve si jej stáhněte a nainstalujte `git bash`](https://git-scm.com/download/win)

Spusťte následující operace v `git bash`

## Nainstalujte

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Nakonfigurujte Token Překladu

[i18n.site/token](//i18n.site/token) Kliknutím zkopírujte token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Create `~/.config/i18n.site.yml` vložte do něj zkopírovaný obsah, obsah je následující:

```
token: YOUR_API_TOKEN
```

Pro platbu je navíc potřeba [i18n.site/payBill](//i18n.site/payBill) kreditní kartu (není potřeba dobíjení, web si automaticky strhne poplatky podle využití, [ceny najdete na domovské stránce](/#price) ).

## Použití

### Demo Projekt

Informace `i18` konfiguraci překladu naleznete v demo projektu [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Uživatelé v Číně mohou klonovat [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po klonování zadejte adresář a spusťte `i18`

### Struktura Adresáře

Struktura adresáře skladu šablon je následující

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Adresář `en` obsahuje přeložené ukázkové soubory, které jsou pouze příkladem a lze je smazat.

### Spustit Překlad

Zadejte adresář a spusťte `i18`

### Přidejte Soubory Do Úložiště

Kromě překladu program vygeneruje také následující soubory, přidejte je prosím do úložiště.

```
.i18n/hash
.i18n/cache/.gitignore
```

Mezi nimi : obsah `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

To znamená ignorovat všechny soubory v `.i18n/cache/` (kromě `.i18n/cache/.gitignore` ).

Pokud váš software pro správu verzí není `git` ignorujte jej podle této konfigurace.

## Konfigurační Soubor

`.i18n/conf.yml` Je to konfigurační soubor nástroje pro překlad `i18` line

Obsah je následující:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Zdrojový & Jazyk Překladu

V konfiguračním souboru jsou podřízení `fromTo`

`en` je zdrojový jazyk, `zh ja ko de fr` je cílový jazyk překladu.

Kód jazyka viz [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pokud například chcete přeložit čínštinu do angličtiny, přepište tento řádek `zh: en`

Pokud chcete překládat do všech podporovaných jazyků, ponechte po `:` například

```
i18n:
  fromTo:
    en:
```

### Ignorovat Soubor

Ve výchozím nastavení budou přeloženy všechny soubory začínající na `.md` a `.yml` v adresáři zdrojového jazyka.

Pokud chcete ignorovat určité soubory a nepřekládat je (například nedokončené koncepty), můžete použít konfiguraci pole `ignore`

`ignore` Používá syntaxi podobnou `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Například ve výše uvedeném konfiguračním souboru `_* ` znamená, že soubory začínající na `_` nebudou přeloženy.

## Pravidla Překladu

### Editoři Překladu by Neměli Přidávat Ani Mazat Řádky

Překlad je upravitelný. Upravte původní text a znovu jej strojově přeložte, ruční úpravy překladu nebudou přepsány (pokud tento odstavec původního textu nebyl upraven).

Upozorňujeme však, že řádky překladu a původního textu musí odpovídat jedné. To znamená, že při kompilaci překladu nepřidávejte ani neodstraňujte řádky. V opačném případě to způsobí zmatek v mezipaměti pro úpravy překladu.

Pokud se něco pokazí, [řešení najdete v FAQ.](/i18/qa#H1)

### `YAML` Přeložit

Nástroj příkazového řádku najde všechny soubory končící na `.yml` v adresáři souborů zdrojového jazyka a přeloží je.

* Všimněte `.yaml` , že přípona názvu souboru musí být `.yml`

Nástroj překládá pouze hodnoty slovníku v `.yml` , nikoli klíče slovníku.

například `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bude přeloženo jako `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Překlad `YAML` lze také upravit ručně (ale nepřidávejte ani neodstraňujte klíče nebo řádky v překladu).

Na `YAML` překladu můžete snadno vytvářet mezinárodní řešení pro různé programovací jazyky.

## Pokročilé Použití

### Podadresář Překladu

Dokud vytvoříte `.i18n/conf.yml` (nemusíte pokaždé začínat od šablony demo projektu), `i18` bude fungovat dobře.

Nástroj příkazového řádku najde konfiguraci `.i18n/conf.yml` ve všech podadresářích a přeloží ji.

Projekty, které používají architekturu [monorepo](//monorepo.tools) mohou rozdělit jazykové soubory do podadresářů.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Vlastní Instalační Adresář

Ve výchozím nastavení se nainstaluje do `/usr/local/bin`

Pokud `/usr/local/bin` nemá oprávnění k zápisu, nainstaluje se do `~/.bin` .

Nastavení proměnných `TO` Můžete definovat instalační adresář, například :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

# Nainstalujte a Použijte

## windows Nejprve Nainstalují git bash

windows , [nejprve si stáhněte a nainstalujte `git bash`](https://git-scm.com/download/win) .

Spusťte následující operace v `git bash` .

## Instalovat

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Nakonfigurujte Token Překladu

[i18n.site/token](//i18n.site/token) Kliknutím zkopírujte token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Vytvořte `~/.config/i18n.site.yml` , vložte do něj zkopírovaný obsah, obsah je následující:

```
token: YOUR_API_TOKEN
```

Navíc je potřeba svázat platební kreditní kartu v [i18n.site/payBill](//i18n.site/payBill) (Není nutné dobíjení, web si automaticky strhne poplatky podle využití, [ceny najdete na domovské stránce](/#price) ).

## Použití

### Demo Projekt

Podívejte se prosím na ukázkový projekt [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) kde se dozvíte o konfiguraci překladu `i18` .

Uživatelé v Číně mohou klonovat [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po klonování zadejte adresář a spusťte `i18` pro dokončení překladu.

### Adresářová Struktura

Struktura adresáře skladu šablon je následující

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Přeložené ukázkové soubory v adresáři `en` jsou pouze příkladem a lze je smazat.

### Spustit Překlad

Zadejte adresář a spusťte `i18` pro překlad.

Kromě překladu program vygeneruje také složku `.i18n/data` , přidejte ji prosím do úložiště.

Po překladu nového souboru se v tomto adresáři vygeneruje nový datový soubor. Nezapomeňte připojit `git add . ` .

## Konfigurační Soubor

`.i18n/conf.yml` je konfigurační soubor nástroje pro překlad příkazového řádku `i18`

Obsah je následující:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Zdrojový Jazyk & Překladu

V konfiguračním souboru podřízený `fromTo` :

`en` je zdrojový jazyk, `zh ja ko de fr` je cílový jazyk překladu.

Kód jazyka viz [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pokud například chcete přeložit čínštinu do angličtiny, přepište tento řádek `zh: en` .

Pokud chcete překládat do všech podporovaných jazyků, ponechte po `:` prázdné. například

```
i18n:
  fromTo:
    en:
```

Můžete nakonfigurovat různé `fromTo` : různé podadresáře Soubory /

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

V této konfigurační tabulce je zdrojový jazyk překladu katalogu `blog` `zh` a zdrojový jazyk překladu katalogu `blog/your_file_name.md` je `ja` .

### Vícejazyčné Obrázky/Odkazy

Když jsou adresy URL v obrázcích a odkazech v `replace:` a `MarkDown` (a atributy `src` a `href` vložené `HTML` ) nakonfigurovány na `.i18n/conf.yml` s touto předponou, bude kód zdrojového jazyka v URL nahrazen kódem jazyka překladu ( [jazyk číselník](/i18/LANG_CODE) ).

Vaše konfigurace je například následující:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` je slovník, klíč je předpona adresy URL, která má být nahrazena, a hodnota je pravidlo nahrazení.

Význam nahrazení pravidla `ko de uk>ru zh-TW>zh >en` výše je, že `ko de` používá obrázek svého vlastního jazykového kódu, `zh-TW` a `zh` používají obrázek `zh` , `uk` používá obrázek `ru` a ostatní jazyky (například `ja` ) používají obrázek standardně `en` .

Například francouzský ( `fr` ) zdrojový soubor `MarkDown` je následující :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Přeložený a vygenerovaný anglický ( `en` ) soubor je následující :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Zde jsou `/en/` v kódu zdrojového jazyka nahrazeny `/zh/` v cílovém jazyce.

Poznámka : Před a za kódem jazyka nahrazovaného textu v URL musí být `/` .

> [!TIP]
> Pokud je `- /` nakonfigurována na `url:` , budou porovnávány pouze relativní cesty, ale adresy URL začínající na `//` nebudou porovnány.
>
> Pokud některé odkazy názvu domény chtějí být nahrazeny a některé nechtějí být nahrazeny, můžete k jejich rozlišení použít různé předpony, například `[x](//x.com/en/)` a `[x](https://x.com/en/)` .

### Ignorovat Soubor

Ve výchozím nastavení budou přeloženy všechny soubory začínající `.md` a `.yml` v adresáři zdrojového jazyka.

Pokud chcete ignorovat určité soubory a nepřekládat je (například nedokončené koncepty), můžete to nakonfigurovat pomocí pole `ignore` .

`ignore` používá [globset](https://docs.rs/globset/latest/globset/#syntax) syntaxi jako soubor `.gitignore` .

Například `_* ` ve výše uvedeném konfiguračním souboru znamená, že soubory začínající `_` nebudou přeloženy.

## Pravidla Překladu

### Editoři Překladu by Neměli Přidávat Ani Mazat Řádky

Překlad je upravitelný. Upravte původní text a znovu jej strojově přeložte, ruční úpravy překladu nebudou přepsány (pokud tento odstavec původního textu nebyl upraven).

> [!WARN]
> Mezi řádky překladu a původním textem musí existovat vzájemná shoda. To znamená, že při sestavování překladu nepřidávejte ani neodstraňujte řádky. V opačném případě to způsobí zmatek v mezipaměti pro úpravy překladu.

Pokud se něco pokazí, [řešení najdete v FAQ.](/i18/qa#H1)

### `YAML` Překladů

Nástroj příkazového řádku najde všechny soubory končící `.yml` v adresáři souborů zdrojového jazyka a přeloží je.

* Všimněte si, že přípona souboru musí být `.yml` (ne `.yaml` ).

Nástroj překládá pouze hodnoty slovníku v `.yml` , nikoli klíče slovníku.

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

Překlad `YAML` lze také upravit ručně (ale nepřidávejte ani neodstraňujte klíče nebo řádky v překladu).

Na základě překladu `YAML` můžete snadno vytvářet mezinárodní řešení pro různé programovací jazyky.

## Pokročilé Použití

### Podadresář Překladu

Dokud je vytvořena `.i18n/conf.yml` (není nutné pokaždé začínat od šablony demo projektu), `i18` bude fungovat dobře.

Nástroj příkazového řádku najde `.i18n/conf.yml` konfigurací ve všech podadresářích a přeloží je.

Projekty, které používají architekturu [monorepo](//monorepo.tools) , mohou rozdělit jazykové soubory do podadresářů.

![](https://p.3ti.site/1719910016.avif)

### Vlastní Instalační Adresář

Ve výchozím nastavení bude nainstalován na `/usr/local/bin` .

Pokud `/usr/local/bin` nemá oprávnění k zápisu, nainstaluje se na `~/.bin` .

Nastavení proměnné prostředí `TO` může definovat instalační adresář, například :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
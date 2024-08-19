# .i18n/conf.yml

Profil pro `i18n.site` je `.i18n/conf.yml`.

S výjimkou nastavení [`i18`](/i18) , `ignore:` a `i18n:` je konfigurační soubor následující:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Mezi nimi `upload` až `ext:` konfigurační položka znamená, že při publikování budou nahrány pouze `.md` soubory.

## Horní navigace nav

`nav:` možnosti konfigurace odpovídají navigační nabídce v horní části domovské stránky.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Mezi nimi `i18n: home` odpovídá `home: Home` v `en/i18n.yml`.

`en/i18n.yml` bude přeloženo do více jazyků, například `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po dokončení překladu můžete upravit hodnotu překladu `yml`, ale nepřidávejte ani neodstraňujte klíč překladu `yml`.

### `use: Toc`, šablona jednotlivého souboru (s obsahem rejstříku)

`nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znamená vykreslování pomocí šablony `Toc`, což je vykreslování jedné šablony `Markdown`.

`TOC` je zkratka pro `Table of Contents`. Když je tato šablona vykreslena, rejstřík tohoto souboru `Markdown` se zobrazí na postranním panelu.

`url:` představuje cestu k souboru `Markdown` (`/` odpovídá kořenovému adresáři `/README.md`, název souboru vyžaduje velká písmena předpona a malá přípona).

### `use: Md`, šablona jednotlivého souboru (bez obsahu rejstříku)

Šablona `Md` a šablona `Toc` jsou stejné a obě se používají k vykreslení jedné šablony `Markdown`. Šablona `Md` však nezobrazuje rejstřík v postranním panelu.

Můžete upravit `use: Toc` ve výše uvedené konfiguraci na `use: Md`, znovu spustit `i18n.site` v adresáři `md` a poté navštívit URL pro náhled vývoje a sledovat změny na domovské stránce.

### Výchozí načítání bez konfigurační cesty

Pokud se přistupuje k určité cestě a její předpona cesty není nakonfigurována v `nav:` , ve výchozím nastavení se načte soubor `Markdown` odpovídající cestě a vykreslí se pomocí šablony `Md`.

Pokud se například přistupuje k `/test` a `nav:` není nakonfigurována pro tuto cestu a jazykem stránky je angličtina (kód `en`), ve výchozím nastavení se načte `/en/test.md` a vykreslí se pomocí šablony `Md`.

Pokud `/en/test.md` tento soubor neexistuje, zobrazí se výchozí `404` stránka.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, vícesouborová šablona

V konfiguračním souboru:

```
  - i18n: blog
    use: Doc
```

Označuje použití `Doc` pro vykreslení šablony.

Šablona `Doc` podporuje integraci více `Markdown` pro generování rejstříku dokumentu pro jeden nebo více projektů.

#### Jeden projekt (více souborů)

`blog` výše je režim jednoho projektu `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Když Je Adresa url Prázdná, Výchozí Hodnota Je i18n

Pokud není zapsána `url`, výchozí hodnota `url` je `i18n`. Toto pravidlo platí také pro ostatní šablony.

Výše uvedená metoda zápisu je ekvivalentní `url: blog` a její odpovídající soubor je `en/blog/TOC`.

#### Více projektů

Konfigurace `i18n:doc` v `.i18n/conf.yml` je režim více projektů.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Zde `menu: NB demo1,demo2` znamená použití šablony `NB` k vykreslení rozbalovací nabídky.

`NB`, což je zkratka pro `Name Brief`, znamená, že rozbalovací nabídka může zobrazit název a slogan projektu.

`NB` následuje parametr `demo1,demo2`, který je jí předán.
Poznámka: **Před a za čárkou`,` v `demo1,demo2` by neměly být žádné mezery**.

Odpovídající soubor indexu adresáře pro výše uvedené parametry je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Index Obsahu

`i18n.site` spustí `js` modul plug-in `.i18n/hook/after.tran/TOC.js` v ukázkovém skladu, aby načetl soubor indexu `doc` adresářů odpovídající konfiguraci šablony `TOC` a vygeneroval rejstřík `json` adresářů.

Pokud používáte šablonu `doc`, musíte mít tento plug-in.

Pokud inicializujete projekt `i18n.site` z prázdné složky, nezapomeňte zkopírovat demo projekt `.i18n` do svého adresáře.

Šablona `Doc` vykreslí rejstřík obsahu na základě vygenerované hodnoty `json`.

##### Podrobné vysvětlení obsahu

`en/blog/TOC` je následující:

```
README.md

news/README.md
  news/begin.md
```

##### Použijte odsazení k označení úrovní

`README.md` v prvním řádku `en/blog/TOC` výše odpovídá `i18n.site` na obrázku níže, což je název projektu.

Následující dva řádky jsou jako na obrázku níže.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpovídá `News`,
`news/begin.md` odpovídá `Our Product is Online !`

`TOC` souborů je odsazeno, aby indikovalo hierarchický vztah rejstříku a podporovalo víceúrovňové odsazení.

##### Nadřazená úroveň píše pouze název, nikoli obsah

Pokud existuje více úrovní odsazení, nadřazená úroveň zapíše pouze název, nikoli obsah. Jinak bude typografie zkomolená.

##### Projekt README.md

Obsah lze zapsat do položky `README.md`, například `en/demo2/README.md`.

Všimněte si, že obsah tohoto souboru nezobrazuje rejstřík obsahu, proto se doporučuje omezit délku a napsat krátký úvod.

###### Slogan projektu

Můžete vidět, že `Your Project slogan` má svůj slogan projektu pod rozbalovací nabídkou a názvem projektu: `Deme Two`.

![](https://p.3ti.site/1721276842.avif)

Toto odpovídá prvnímu řádku `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Obsah za první dvojtečkou `:` v názvu první úrovně projektu `README.md` bude považován za slogan projektu.

Uživatelé z Číny, Japonska a Koreje by měli používat `:` s poloviční šířkou místo dvojtečky s plnou šířkou.

##### Jak hromadně přesunout TOC?

`TOC` souborů je třeba umístit do adresáře zdrojového jazyka.

Pokud je například zdrojovým jazykem čínština, pak `TOC` výše je `zh/blog/TOC`.

Pokud je zdrojový jazyk upraven, musíte dávkově přesunout soubory `TOC` určitého jazyka v projektu do jiného jazyka.

Můžete se obrátit na následující příkazy:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Upravte prosím `en/` a `zh/` ve výše uvedeném příkazu na kód vašeho jazyka.
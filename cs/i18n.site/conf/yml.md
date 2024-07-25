# .i18n/conf.yml

`i18n.site` Konfigurační soubor je `.i18n/conf.yml` .

Kromě nastavení `ignore:` a `i18n:` pro [`i18`](/i18) je konfigurační soubor následující:

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

Mezi nimi položka `ext:` konfigurace `upload` znamená, že při publikování bude nahráno pouze `.md` .

## Horní Navigace nav

`nav:` možnosti konfigurace, odpovídající navigační nabídce v horní části domovské stránky.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Mezi nimi, `i18n: home` odpovídá `en/i18n.yml`中`home: Home` .

`en/i18n.yml` bude přeložen do více jazyků, například `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po dokončení překladu můžete upravit hodnotu `yml` v překladu, ale nepřidávejte ani neodstraňujte klíč překladu `yml` .

### `use: Toc` Šablona Jednoho Souboru (S Obrysem)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znamená použití vykreslování `Toc` , což je vykreslení jedné šablony `Markdown` .

`TOC` je zkratka `Table of Contents` . Při vykreslení této šablony se na postranním panelu zobrazí obrys tohoto souboru `Markdown` .

`url:` představuje cestu k souboru `Markdown` ( `/` odpovídá kořenovému adresáři `/README.md` , tento název souboru vyžaduje velká předpona a malá přípona).

### `use: Md` Šablona Jednoho Souboru (Bez Obrysu)

`Md` Template je stejný jako `Toc` , oba se používají k vykreslení jednoho `Markdown` souboru. Nicméně `Md` šablona nezobrazuje obrys v postranním panelu.

`md` výše `i18n.site` konfiguraci můžete `use: Md` `use: Toc`

### Výchozí Načítání Bez Konfigurační Cesty

Pokud předpona cesty určité cesty, ke které se přistupuje, není nakonfigurována v `nav:` soubor `MarkDown` odpovídající cestě bude ve výchozím nastavení načten a vykreslen pomocí šablony `Md` .

Pokud například navštívíte `/test` a `nav:` je nakonfigurováno bez této cesty a jazyk stránky je angličtina (kód `en` ), šablona se načte `/en/test.md` a vykreslí pomocí `Md` ve výchozím nastavení.

Pokud `/en/test.md` tento soubor neexistuje, zobrazí se výchozí `404` stránka.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Vícesouborová Šablona

V konfiguračním souboru:

```
  - i18n: blog
    use: Doc
```

Označuje použití `Doc`

`Doc` podporuje integraci více `MarkDown` pro generování obrysů dokumentu pro jeden nebo více projektů.

#### Jeden Projekt (Více Souborů)

`blog` ve výše uvedeném je režim jednoho projektu `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Když Je Adresa url Prázdná, Výchozí Hodnota Je i18n

Pokud nezapíšete `url` `url` na hodnotu `i18n` . Toto pravidlo platí i pro ostatní šablony.

Výše uvedená metoda zápisu je ekvivalentní mít `url: blog` a její odpovídající soubor je `en/blog/TOC` .

#### Více Projektů

Konfigurace `i18n:doc` `.i18n/conf.yml` víceprojektový režim.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Zde znamená `menu: NB demo1,demo2` použití `NB` k vykreslení rozevírací nabídky.

`NB` , je zkratka `Name Breif` , což znamená, že rozbalovací nabídka může zobrazovat název a slogan projektu.

`NB` následuje parametr `demo1,demo2` , který je mu předán.
Všimněte si `demo1,demo2` že by neměly být žádné mezery ** před a za čárkou `,` v : **

Pro výše uvedené parametry je odpovídající soubor indexu adresáře:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Index Obsahu

`i18n.site` Spustí `js` plugin `.i18n/hook/after.tran/TOC.js` v ukázkovém skladu, aby načetl soubor indexu adresáře `doc` odpovídající konfiguraci šablony `TOC` a vygeneroval `json` obrysu adresáře.

Pokud používáte šablonu `doc` , musíte mít tento plug-in.

Pokud inicializujete projekt `i18n.site` z prázdné složky, nezapomeňte zkopírovat `.i18n` v demo projektu do svého adresáře.

`Doc` vykreslí osnovu obsahu na základě vygenerovaného `json` .

##### Podrobné Vysvětlení Obsahu

Obsah : následující `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### K Označení Úrovní Použijte Odsazení

Nad `en/blog/TOC` `README.md` v prvním řádku odpovídá `i18n.site` na obrázku níže, což je název projektu.

Následující dva řádky jsou jako na obrázku níže.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpovídá `News` ,
`news/begin.md` odpovídá `Our Product is Online !`

`TOC` Soubor je odsazen, aby naznačoval hierarchický vztah obrysu a podporuje víceúrovňové odsazení.

##### Nadřazená Úroveň Píše Pouze Název, Nikoli Obsah.

Pokud existuje více úrovní odsazení, nadřazená úroveň zapíše pouze název, nikoli obsah. Jinak bude typografie zpackaná.

##### Projekt README.md 

`README.md` projektu, například můžete napsat obsah v `en/demo2/README.md` .

Všimněte si, že obsah tohoto souboru nezobrazuje osnovu obsahu, proto se doporučuje omezit délku a napsat krátký úvod.

###### Slogan Projektu

Jak můžete vidět `Deme Two` pod rozbalovacím menu a názvem projektu je `Your Project slogan` jeho projektový slogan :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: odpovídá prvnímu řádku `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Obsah za první dvojtečkou `:` v názvu první úrovně bude považován za slogan projektu.

Uživatelé z Číny, Japonska a Koreje, prosím, vezměte na vědomí, že musíte použít dvojtečku s poloviční šířkou místo dvojtečky s plnou šířkou `:`

##### Jak Hromadně Přesunout TOC?

`TOC` Soubor musí být umístěn v adresáři zdrojového jazyka.

Například, pokud je zdrojovým jazykem čínština, `zh/blog/TOC` `TOC`

Pokud je zdrojový jazyk upraven, musíte dávkově přesunout `TOC` v určitém jazyce v projektu do jiného jazyka.

Můžete se obrátit na následující příkazy:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Upravte prosím `en/` a `zh/` ve výše uvedeném příkazu na kód vašeho jazyka.



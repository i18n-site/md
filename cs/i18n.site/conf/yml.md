# .i18n/conf.yml

Profil pro `i18n.site` je `.i18n/conf.yml`.

S výjimkou nastavení [`i18`](/i18), `ignore:` a `i18n:` je konfigurační soubor následující:

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
addon:
  - i18n.addon/toc
```

Mezi nimi `upload` až `ext:` konfigurační položka znamená, že při publikování budou nahrány pouze `.md` soubory.

## Horní Navigace nav

`nav:` konfigurační možnosti odpovídají navigační nabídce v horní části domovské stránky.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Mezi nimi `i18n: home` odpovídá `home: Home` v `en/i18n.yml`.

`en/i18n.yml` bude přeloženo do více jazyků, například `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po dokončení překladu můžete upravit hodnoty v `yml`, ale neodstraňujte ani nepřidávejte žádné klíče v `yml`.

### `use: Toc`, šablona pro jeden soubor (s obsahem)

`nav` konfigurace:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znamená, že se použije šablona `Toc` pro vykreslení, což je šablona pro jeden `Markdown` soubor.

`TOC` je zkratka pro `Table of Contents`; tato šablona při vykreslení zobrazí obsah `Markdown` souboru v postranním panelu.

`url:` představuje cestu k `Markdown` souboru (`/` odpovídá kořenovému adresáři `/README.md`, název souboru by měl mít velkou předponu a malou příponu).

### `use: Md`, šablona pro jeden soubor (bez obsahu)

Šablona `Md` je stejná jako šablona `Toc`, obě se používají k vykreslení jednoho `Markdown` souboru. Šablona `Md` však nezobrazuje obsah v postranním panelu.

Můžete změnit `use: Toc` na `use: Md` v výše uvedené konfiguraci, znovu spustit `i18n.site` v adresáři `md` a poté navštívit URL pro náhled vývoje, abyste sledovali změny na domovské stránce.

### Výchozí načítání bez konfigurační cesty

Pokud je přístupná cesta, jejíž předpona není nakonfigurována v `nav:`, výchozí načítání je soubor `Markdown` odpovídající této cestě a vykreslí se pomocí šablony `Md`.

Například, pokud je přístup `/test` a `nav:` není nakonfigurována pro tuto cestu, a jazyk stránky je angličtina (kód `en`), výchozím způsobem se načte `/en/test.md` a vykreslí se pomocí šablony `Md`.

Pokud `/en/test.md` soubor neexistuje, zobrazí se výchozí `404` stránka.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, vícesouborová šablona

V konfiguračním souboru:

```
  - i18n: blog
    use: Doc
```

Označuje použití `Doc` pro vykreslení šablony.

Šablona `Doc` podporuje integraci více `Markdown` souborů pro generování jednotlivých nebo více projektových dokumentačních osnov.

#### Jednotlivý projekt (více souborů)

`blog` výše je režim jednotlivého projektu `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Když Je Adresa url Prázdná, Výchozí Hodnota Je i18n

Pokud není zapsána `url` , `url` je výchozí hodnotou `i18n` Toto pravidlo platí také pro ostatní šablony.

Výše uvedený zápis je ekvivalentní `url: blog`, přičemž odpovídající soubor je `en/blog/TOC`.

#### Více projektů

Konfigurace `i18n:doc` v `.i18n/conf.yml` je režim více projektů.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Zde `menu: NB demo1,demo2` znamená použití šablony `NB` pro vykreslení rozbalovací nabídky.

`NB` je zkratka pro `Name Brief`, což znamená, že rozbalovací nabídka může zobrazit název a slogan projektu.

`NB` následuje parametr `demo1,demo2`.
Poznámka: ** Mezi `demo1` a `demo2` by neměly být mezery před ani za čárkou **.

Pro výše uvedené parametry je odpovídající soubor indexu adresáře:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC index obsahu

`i18n.site` spustí `js` plugin `.i18n/hook/after.tran/TOC.js` v ukázkovém repozitáři, aby načetl soubor indexu `doc` adresářů odpovídající konfiguraci šablony `TOC` a vygeneroval `json` s obsahem adresářů.

Pokud používáte šablonu `doc`, musíte mít tento plugin.

Pokud inicializujete `i18n.site` projekt z prázdné složky, nezapomeňte zkopírovat `.i18n` z ukázkového projektu do vašeho adresáře.

Šablona `Doc` vykreslí obsah osnovy na základě vygenerovaného `json`.

##### Podrobné vysvětlení obsahu

`en/blog/TOC` obsah je následující:

```
README.md

news/README.md
  news/begin.md
```

##### Použijte odsazení k označení úrovní

První řád `README.md` v `en/blog/TOC` odpovídá `i18n.site` na obrázku níže, což je název projektu.

Následující dva řádky jsou jako na obrázku níže.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpovídá `News`
`news/begin.md` odpovídá `Our Product is Online !`

`TOC` soubory indikují hierarchii obsahu pomocí odsazení, podporují víceúrovňové odsazení a komentáře začínající `#`.

##### Nadřazené úrovně zapisují pouze názvy, nikoli obsah

Pokud existuje více úrovní odsazení, nadřazené úrovně zapisují pouze názvy, nikoli obsah, aby se předešlo chaotickému formátování.

##### Projektový soubor README.md

Do `README.md` projektu, například `en/demo2/README.md`, lze zapsat obsah.

Všimněte si, že obsah tohoto souboru nezobrazuje osnovu, proto se doporučuje omezit jeho délku a napsat stručný úvod.

###### Projektový slogan

Můžete vidět, že `Deme Two` má pod rozbalovací nabídkou a katalogovým názvem projektu svůj slogan projektu: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Toto odpovídá prvnímu řádku `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Název první úrovně v `README.md` projektu za prvním dvojtečkou `:` je považován za slogan projektu.

Uživatelé z Číny, Japonska a Koreje by měli používat poloviční čárku `:` místo plné čárky.

##### Jak hromadně přesunout obsah TOC?

`TOC` soubory je třeba umístit do adresáře zdrojového jazyka.

Pokud je například zdrojovým jazykem čínština, pak `TOC` výše je `zh/blog/TOC`.

Pokud je zdrojový jazyk upraven, musíte hromadně přesunout soubory `TOC` určitého jazyka v projektu do jiného jazyka.

Můžete se odkazovat na následující příkazy:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Upravte prosím `en/` a `zh/` ve výše uvedeném příkazu na kód vašeho jazyka.
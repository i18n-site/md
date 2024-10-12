# .i18n/conf.yml

Konfigurační soubor pro `i18n.site` je `.i18n/conf.yml` a obsah je následující :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Mezi nimi `upload` až `ext:` konfigurační položka znamená, že při publikování budou nahrány pouze `.md` .

## Horní Navigace nav

`nav:` možností konfigurace, odpovídající navigační nabídce v horní části domovské stránky.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Mezi nimi `i18n: home` odpovídá `home: Home` v `en/i18n.yml` (kde `en` je zdrojový jazyk překladu projektu).

Obsah `en/i18n.yml` je text zobrazený v navigační nabídce, který bude v konfiguraci přeložen podle `fromTo` , například přeložen na `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po dokončení překladu můžete upravit hodnotu translation `yml` , ale nepřidávejte ani neodstraňujte klíč translation `yml` .

### `use: Toc` , Šablona Jednoho Souboru S Obrysem

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znamená vykreslování pomocí šablony `Toc` , což je vykreslování jedné šablony `Markdown` .

`TOC` je zkratka `Table of Contents` Když je tato šablona vykreslena, obrys tohoto souboru `Markdown` se zobrazí na postranním panelu.

`url:` představuje cestu k souboru `Markdown` ( `/` odpovídá kořenovému adresáři `/README.md` , tento název souboru vyžaduje předponu velká a malá přípona).

### `use: Md` , Šablona Jednoho Souboru Bez Obrysu

Šablona `Md` a šablona `Toc` jsou stejné a obě se používají k vykreslení jednoho souboru `Markdown` . Šablona `Md` však nezobrazuje obrys v postranním panelu.

Můžete upravit `use: Toc` ve výše uvedené konfiguraci na `use: Md` , znovu spustit `i18n.site` v adresáři `md` a poté navštívit URL pro náhled vývoje a sledovat změny na domovské stránce.

### `use: Blog` Šablon Blogu

Šablona blogu zobrazuje seznam článků (názvů a abstraktů) v pořadí podle času zveřejnění.

[→ Kliknutím sem se dozvíte o konkrétní konfiguraci](/i18n.site/conf/blog)

### `use: Doc` , Vícesouborová Šablona Dokumentu

V konfiguračním souboru:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Označuje použití `Doc` pro vykreslení šablony.

Šablona `Doc` podporuje integraci více `MarkDown` pro generování obrysů dokumentu pro jeden nebo více projektů.

#### Více Projektů a Více Souborů

Konfigurace `.i18n/conf.yml` v `i18n:doc` je režim vykreslování více projektů s více soubory.

Zde `menu: NB demo1,demo2` znamená použití šablony `NB` k vykreslení rozevírací nabídky.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , což je zkratka `Name Breif` , znamená, že rozbalovací nabídka může zobrazit název a slogan projektu.

`NB` následuje parametr `demo1,demo2` který je jí předán.

Poznámka : ** Před a za čárkou `,` v `demo1,demo2` by neměly být žádné ** .

Pro výše uvedené parametry je odpovídající soubor indexu adresáře:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jeden Projekt Více Souborů

Pokud máte pouze jeden projekt, můžete jej nakonfigurovat následovně.

```
  - i18n: xxx
    use: Doc
```

##### Když Je Adresa url Prázdná, Výchozí Hodnota Je i18n

Pokud není zapsána `url` , `url` je výchozí hodnotou `i18n` Toto pravidlo platí také pro ostatní šablony.

Výše uvedená metoda zápisu je ekvivalentní `url: xxx` a její odpovídající soubor je `en/xxx/TOC` .

#### TOC Index Obsahu

`i18n.site` spustí `js` modul plug-in `.i18n/hook/after.tran/TOC.js` v ukázkovém skladu, aby načetl soubor indexu `TOC` adresářů odpovídající konfiguraci šablony `doc` a vygeneroval obrys `json` adresářů.

Pokud používáte šablonu `doc` , musíte mít tento plug-in.

Pokud inicializujete projekt `i18n.site` z prázdné složky, nezapomeňte zkopírovat demo projekt `.i18n` do svého adresáře.

Šablona `Doc` vykreslí osnovu obsahu na základě vygenerované `json` .

##### Podrobné Vysvětlení Obsahu

`en/blog/TOC` je následující :

```
README.md

news/README.md
  news/begin.md
```

##### K Označení Úrovní Použijte Odsazení

`README.md` v prvním řádku `en/blog/TOC` výše odpovídá `i18n.site` na obrázku níže, což je název projektu.

Následující dva řádky jsou jako na obrázku níže.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpovídá `News` ,
`news/begin.md` odpovídá `Our Product is Online !`

Soubory `TOC` jsou odsazeny, aby indikovaly hierarchický vztah obrysu, podporují víceúrovňové odsazení a řádkové komentáře začínající `#` .

##### Nadřazená Úroveň Píše Pouze Název, Nikoli Obsah.

Pokud existuje více úrovní odsazení, nadřazená úroveň zapíše pouze název, nikoli obsah. Jinak bude typografie zpackaná.

##### Projekt README.md

Obsah lze zapsat do položky `README.md` , například `en/demo2/README.md` .

Všimněte si, že obsah tohoto souboru nezobrazuje osnovu obsahu, proto se doporučuje omezit délku a napsat krátký úvod.

###### Slogan Projektu

Můžete vidět `Your Project slogan` že `Deme Two` má svůj slogan projektu pod rozbalovací nabídkou a katalogovým názvem projektu : .

![](https://p.3ti.site/1721276842.avif)

To odpovídá prvnímu řádku `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Obsah za první dvojtečkou `:` v názvu první úrovně projektu `README.md` bude považován za slogan projektu.

Uživatelé z Číny, Japonska a Koreje by měli používat `:` s poloviční šířkou místo dvojtečky s plnou šířkou.

##### Jak Hromadně Přesunout TOC?

`TOC` souborů je třeba umístit do adresáře zdrojového jazyka.

Pokud je například zdrojovým jazykem čínština, pak `TOC` výše je `zh/blog/TOC` .

Pokud je zdrojový jazyk upraven, musíte dávkově přesunout soubory `TOC` určitého jazyka v projektu do jiného jazyka.

Můžete se obrátit na následující příkazy:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Upravte prosím `en/` a `zh/` ve výše uvedeném příkazu na kód vašeho jazyka.

### Výchozí Načítání Bez Konfigurační Cesty

Pro určitou zpřístupněnou cestu, pokud předpona cesty není nakonfigurována na `nav:` , bude ve výchozím nastavení načten soubor `MarkDown` odpovídající cestě a vykreslen pomocí šablony `Md` .

Pokud je například přistupováno `/test` a `nav:` je nakonfigurováno bez předpony této cesty a aktuálním jazykem procházení je angličtina (kód `en` ), `/en/test.md` se ve výchozím nastavení načte a vykreslí pomocí šablony `Md` .

Pokud `/en/test.md` tento soubor neexistuje, zobrazí se výchozí stránka `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
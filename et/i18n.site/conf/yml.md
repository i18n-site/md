# .i18n/conf.yml

Konfiguratsioonifail on `.i18n/conf.yml` `i18n.site`

Välja arvatud `ignore:` ja `i18n:` seaded [`i18`](/i18) on konfiguratsioonifail järgmine:

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

Nende hulgas tähendab `upload` `ext:` , et avaldamisel laaditakse üles ainult `.md` .

## Ülemine Navigeerimisnavigeerimine

`nav:` , mis vastavad avalehe ülaosas olevale navigeerimismenüüle.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`i18n: home` hulgas vastab `en/i18n.yml`中`home: Home` .

tõlgitakse mitmesse keelde, näiteks `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kui tõlge on lõpetatud, saate tõlkes muuta `yml` , kuid ärge lisage ega kustutage tõlkevõtit `yml`

### `use: Toc` Ühe Faili Mall (Koos Kontuuriga)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tähendab `Toc` renderdamist, mis on ühe `Markdown` malli renderdamine.

`TOC` `Table of Contents` `Markdown`

`url:` tähistab faili teed `Markdown` ( `/` vastab juurkataloogile `/README.md` , see failinimi nõuab suurtähte ja väiketähelist järelliidet).

### `use: Md` Ühe Faili Mall (Kontuurita)

`Md` on sama mis `Toc` , mõlemat kasutatakse ühe `Markdown` faili renderdamiseks. Kuid `Md` mall ei näita külgribal kontuuri.

Saate `use: Toc` ülaltoodud konfiguratsioonis `use: Md` , käivitada `i18n.site` uuesti kataloogis `md` ja seejärel külastada arenduse eelvaate URL-i, et jälgida muudatusi avalehel.

### Vaikimisi Laadimine Ilma Konfiguratsiooniteeta

Kui teatud ligipääsetava tee tee eesliide ei ole `nav:` laaditakse teele vastav `MarkDown` fail vaikimisi ja renderdatakse `Md` malli abil.

Näiteks kui külastate `/test` , ja `nav:` on konfigureeritud ilma selle teeta ja lehe keel on inglise keel (kood `en` ), laaditakse mall vaikimisi `/en/test.md` ja renderdatakse kasutades `Md` .

`/en/test.md` seda faili pole olemas, kuvatakse vaikimisi `404` lehekülg.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Mitme Faili Mall

Konfiguratsioonifailis:

```
  - i18n: blog
    use: Doc
```

Näitab `Doc` kasutamist malli renderdamiseks.

`Doc` toetab mitme `MarkDown` integreerimist ühe või mitme projekti jaoks dokumendikontuuride loomiseks.

#### Üks Projekt (Mitu Faili)

`blog` on ühe projekti režiim `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kui url on Tühi, on Selle Vaikimisi Väärtus i18n

`url` `i18n` ei kirjuta `url`

Ülaltoodud kirjutamismeetod on samaväärne `url: blog` omamisega ja sellele vastav fail on `en/blog/TOC` .

#### Mitu Projekti

`.i18n/conf.yml` konfiguratsioon `i18n:doc` mitme projekti režiim.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Siin tähendab `menu: NB demo1,demo2` `NB` kasutamist rippmenüü renderdamiseks.

`NB` on lühend `Name Breif` , mis näitab, et rippmenüüs saab kuvada projekti nime ja loosungit.

`NB` järgneb sellele edastatud parameeter `demo1,demo2` .
Pange tähele `demo1,demo2` et koma `,` ees ja järel ** tohiks olla tühikuid : **

Ülaltoodud parameetrite jaoks on vastav kataloogiindeksi fail:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Sisukorra Register

Käivitab demolaos `.i18n/hook/after.tran/TOC.js` `js` `i18n.site` et lugeda kataloogiindeksi faili `doc` vastab malli konfiguratsioonile `TOC` et genereerida kataloogi kontuuri `json` .

Kui kasutate `doc` , peab teil see pistikprogramm olema.

Kui `i18n.site` projekti tühjast kaustast, kopeerige demoprojektis olev `.i18n` oma kataloogi.

Mall renderdab sisukorra kontuuri loodud `json` `Doc`

##### Üksikasjalik Sisu Selgitus

Sisu : järgmine `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Kasutage Tasemete Märkimiseks Taanet

Ülal `en/blog/TOC` `README.md` esimesel real vastab `i18n.site` alloleval pildil, mis on projekti nimi.

Järgmised kaks rida on sellised, nagu on näidatud alloleval ekraanipildil.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` ,
vastab `Our Product is Online !` `news/begin.md`

Fail on taandega `TOC` et näidata kontuuri hierarhilist seost ja toetab mitmetasandilist taanet.

##### Vanemtasand Kirjutab Ainult Pealkirja, Mitte Sisu.

Kui taande on mitu taset, kirjutab ülemtase ainult pealkirja, mitte sisu. Vastasel juhul läheb tüpograafia sassi.

##### Projekt README.md 

projektist saate näiteks sisu kirjutada `en/demo2/README.md` `README.md`

Pange tähele, et selle faili sisu ei näita sisukorra ülevaadet, seega on soovitatav pikkust piirata ja kirjutada lühike sissejuhatus.

###### Projekti Hüüdlause

Nagu näete `Deme Two` on rippmenüü ja kataloogi projekti nime all selle projekti tunnuslause : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: vastab esimesele reale `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Sisu pärast esimest koolonit `:` esimese taseme pealkirjas käsitletakse projekti loosungina.

Hiinast, Jaapanist ja Koreast pärit kasutajad pange tähele, et täislaiuse käärsoole asemel peate kasutama poollaiust käärsoolt `:`

##### Kuidas TOC-I Hulgi Teisaldada?

Fail tuleb paigutada lähtekeele kataloogi `TOC`

Näiteks kui lähtekeel on hiina keel, siis ülal on `zh/blog/TOC` `TOC`

Kui lähtekeelt muudetakse, peate projektis teatud keeles `TOC` pakkides teisaldama teise keelde.

Võite viidata järgmistele käskudele:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Muutke ülalolevas käsus `en/` ja `zh/` oma keelekoodi.



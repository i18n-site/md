# .i18n/conf.yml

`i18n.site` profiil on `.i18n/conf.yml` .

Välja arvatud seaded [`i18`](/i18) , `ignore:` ja `i18n:` , on konfiguratsioonifail järgmine:

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

Nende hulgas tähendab `upload` kuni `ext:` konfiguratsiooniüksust, et avaldamisel laaditakse üles ainult `.md` .

## Ülemine Navigeerimisnavigeerimine

`nav:` konfiguratsioonivalikut, mis vastavad avalehe ülaosas olevale navigeerimismenüüle.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Nende hulgas vastab `i18n: home` väärtusele `home: Home` `en/i18n.yml` .

`en/i18n.yml` tõlgitakse mitmesse keelde, näiteks `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Pärast tõlke lõppu saate muuta tõlke väärtust `yml` , kuid ärge lisage ega kustutage tõlke võtit `yml` .

### `use: Toc` , Ühe Faili Mall (Koos Kontuuriga)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tähendab renderdamist malli `Toc` abil, mis on ühe `Markdown` malli renderdamine.

`TOC` on lühend `Table of Contents` st. Kui see mall renderdatakse, kuvatakse külgribal selle `Markdown` faili kontuur.

`url:` tähistab faili teed `Markdown` ( `/` vastab juurkataloogile `/README.md` , see failinimi nõuab suurtähtede eesliidet ja väiketähtede järelliidet).

### `use: Md` , Ühe Faili Mall (Kontuurita)

Mallid `Md` ja `Toc` on samad ja mõlemat kasutatakse ühe `Markdown` faili renderdamiseks. Kuid mall `Md` ei näita külgribal kontuuri.

Saate muuta ülaltoodud konfiguratsioonis `use: Toc` väärtuseks `use: Md` , käivitada `i18n.site` uuesti kataloogis `md` ja seejärel külastada arenduse eelvaate URL-i, et avalehel muudatusi jälgida.

### Vaikimisi Laadimine Ilma Konfiguratsiooniteeta

Kui pääsete juurde teatud teele ja selle tee eesliide ei ole `nav:` konfigureeritud, laaditakse vaikimisi teele vastav fail `MarkDown` ja renderdatakse malli `Md` abil.

Näiteks kui juurdepääs on `/test` ja `nav:` on konfigureeritud ilma selle teeta ning lehe keel on inglise keel (kood `en` ), laaditakse vaikimisi `/en/test.md` ja renderdatakse malli `Md` abil.

Kui `/en/test.md` seda faili ei eksisteeri, kuvatakse vaikeleht `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Mitme Faili Mall

Konfiguratsioonifailis:

```
  - i18n: blog
    use: Doc
```

Näitab `Doc` kasutamist malli renderdamiseks.

`Doc` mall toetab mitme `MarkDown` integreerimist ühe või mitme projekti jaoks dokumendikontuuride loomiseks.

#### Üks Projekt (Mitu Faili)

Ülaltoodud `blog` on ühe üksuse režiim `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kui url on Tühi, on Selle Vaikimisi Väärtus i18n

Kui `url` pole kirjutatud, on `url` vaikimisi väärtus `i18n` See reegel kehtib ka muude mallide puhul.

Ülaltoodud kirjutamismeetod on samaväärne `url: blog` ga ja sellele vastav fail on `en/blog/TOC` .

#### Mitu Projekti

Konfiguratsioon `.i18n/conf.yml` `i18n:doc` mitme projekti režiim.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Siin tähendab `menu: NB demo1,demo2` malli `NB` kasutamist rippmenüü renderdamiseks.

`NB` , mis on lühend `Name Breif` -st, tähendab, et rippmenüüs saab kuvada projekti nime ja hüüdlauset.

`NB` järgneb sellele edastatud parameeter `demo1,demo2` .
Märkus : ** Koma `,` : `demo1,demo2` ees ja järel ei tohi olla ** .

Ülaltoodud parameetrite vastav kataloogiindeksi fail on:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Sisukorra Register

`i18n.site` käivitab demolaos `js` pistikprogrammi `.i18n/hook/after.tran/TOC.js` et lugeda `doc` kataloogiindeksi faili, mis vastab malli konfiguratsioonile `TOC` , et luua `json` kataloogi ülevaade.

Kui kasutate malli `doc` , peab teil see pistikprogramm olema.

Kui lähtestate projekti `i18n.site` tühjast kaustast, ärge unustage kopeerida demoprojekt `.i18n` oma kataloogi.

`Doc` mall renderdab sisukorra kontuuri loodud `json` põhjal.

##### Üksikasjalik Sisu Selgitus

`en/blog/TOC` on järgmine :

```
README.md

news/README.md
  news/begin.md
```

##### Kasutage Tasemete Märkimiseks Taanet

`README.md` ülaltoodud `en/blog/TOC` esimeses reas vastab `i18n.site` alloleval pildil, mis on projekti nimi.

Järgmised kaks rida on sellised, nagu on näidatud alloleval ekraanipildil.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` vastab `News` ,
`news/begin.md` vastab `Our Product is Online !`

`TOC` failid on taandega, et näidata kontuuri hierarhilist seost ja toetada mitmetasandilist taanet.

##### Vanemtasand Kirjutab Ainult Pealkirja, Mitte Sisu.

Kui taande on mitu taset, kirjutab ülemtase ainult pealkirja, mitte sisu. Vastasel juhul läheb tüpograafia sassi.

##### Projekt README.md

Sisu saab kirjutada punktis `README.md` , näiteks `en/demo2/README.md` .

Pange tähele, et selle faili sisu ei näita sisukorra ülevaadet, seega on soovitatav pikkust piirata ja kirjutada lühike sissejuhatus.

###### Projekti Hüüdlause

Näete `Your Project slogan` et `Deme Two` on selle projekti tunnustekst rippmenüü ja kataloogi projekti nime all :

![](https://p.3ti.site/1721276842.avif)

See vastab `en/demo2/README.md` esimesele reale :

```
# Demo Two : Your Project slogan
```

Projekti `README.md` esimese taseme pealkirja esimese kooloni `:` järel olevat sisu loetakse projekti loosungiks.

Hiinast, Jaapanist ja Koreast pärit kasutajad pange tähele, et täislaiuse käärsoole asemel peaksite kasutama poollaiust koolonit `:` .

##### Kuidas TOC-I Hulgi Teisaldada?

`TOC` faili tuleb paigutada lähtekeele kataloogi.

Näiteks kui lähtekeel on hiina keel, siis ülaltoodud `TOC` on `zh/blog/TOC` .

Kui lähtekeelt muudetakse, peate projekti teatud keele `TOC` failid pakkides teisaldama teise keelde.

Võite viidata järgmistele käskudele:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Palun muutke ülaltoodud käsus oma keelekoodi `en/` ja `zh/` .
# .i18n/conf.yml

Konfiguratsioonifail `i18n.site` jaoks on `.i18n/conf.yml` ja sisu on järgmine :

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

Nende hulgas tähendab `upload` kuni `ext:` konfiguratsiooniüksust, et avaldamisel laaditakse üles ainult `.md` .

## Ülemine Navigeerimisnavigeerimine

`nav:` konfiguratsioonivalikut, mis vastavad avalehe ülaosas olevale navigeerimismenüüle.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Nende hulgas vastab `i18n: home` väärtusele `home: Home` `en/i18n.yml` (kus `en` on projekti tõlke lähtekeel).

`en/i18n.yml` sisu on navigeerimismenüüs kuvatav tekst, mis tõlgitakse konfiguratsioonis vastavalt `fromTo` , näiteks tõlgitakse `zh/i18n.yml` ks.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Pärast tõlke lõppu saate muuta tõlke väärtust `yml` , kuid ärge lisage ega kustutage tõlke võtit `yml` .

### `use: Toc` , Ühe Faili Mall Koos Kontuuriga

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tähendab renderdamist malli `Toc` abil, mis on ühe `Markdown` malli renderdamine.

`TOC` on lühend `Table of Contents` Kui see mall renderdatakse, kuvatakse külgribal selle `Markdown` faili kontuur.

`url:` tähistab faili teed `Markdown` ( `/` vastab juurkataloogile `/README.md` , see failinimi nõuab suurtähtede eesliidet ja väiketähtede järelliidet).

### `use: Md` , Ühe Faili Mall Ilma Kontuurita

Mallid `Md` ja `Toc` on samad ja mõlemat kasutatakse ühe `Markdown` -faili renderdamiseks. Kuid mall `Md` ei näita külgribal kontuuri.

Saate muuta ülaltoodud konfiguratsioonis `use: Toc` väärtuseks `use: Md` , käivitada `i18n.site` uuesti kataloogis `md` ja seejärel külastada arenduse eelvaate URL-i, et avalehel muudatusi jälgida.

### `use: Blog` Ajaveebi Malli

Blogimall kuvab artiklite loendi (pealkirjad ja kokkuvõtted) avaldamisaja järjekorras.

[→ Konkreetse konfiguratsiooni kohta lisateabe saamiseks klõpsake siin](/i18n.site/conf/blog)

### `use: Doc` , Mitme Failiga Dokumendimall

Konfiguratsioonifailis:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Näitab `Doc` kasutamist malli renderdamiseks.

`Doc` mall toetab mitme `MarkDown` integreerimist ühe või mitme projekti jaoks dokumendikontuuride loomiseks.

#### Mitu Projekti Ja Mitu Faili

Konfiguratsioon `.i18n/conf.yml` `i18n:doc` on mitme projektiga mitme faili renderdusrežiim.

Siin tähendab `menu: NB demo1,demo2` malli `NB` kasutamist rippmenüü renderdamiseks.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , mis on lühend `Name Breif` -st, tähendab, et rippmenüüs saab kuvada projekti nime ja hüüdlauset.

`NB` le järgneb sellele edastatud parameeter `demo1,demo2` .

Märkus : ** Koma `,` : `demo1,demo2` ees ja järel ei tohi olla ** .

Ülaltoodud parameetrite jaoks on vastav kataloogiindeksi fail:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Üks Projekt Mitu Faili

Kui teil on ainult üks projekt, saate selle konfigureerida järgmiselt.

```
  - i18n: xxx
    use: Doc
```

##### Kui url on Tühi, on Selle Vaikimisi Väärtus i18n

Kui `url` pole kirjutatud, on `url` vaikimisi väärtus `i18n` See reegel kehtib ka muude mallide puhul.

Ülaltoodud kirjutamismeetod on samaväärne `url: xxx` ja sellele vastav fail on `en/xxx/TOC` .

#### TOC Sisukorra Register

`i18n.site` käivitab demolaos `js` pistikprogrammi `.i18n/hook/after.tran/TOC.js` , et lugeda `TOC` kataloogiindeksi faili, mis vastab malli konfiguratsioonile `doc` , et luua `json` kataloogi ülevaade.

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

`TOC` failid on taandega, et näidata kontuuri hierarhilist seost, toetada mitmetasandilist taanet ja reakommentaare, mis algavad `# ` ga.

##### Vanemtasand Kirjutab Ainult Pealkirja, Mitte Sisu.

Kui taande on mitu taset, kirjutab ülemtasand ainult pealkirja, mitte sisu. Vastasel juhul läheb tüpograafia sassi.

##### Projekt README.md

Sisu saab kirjutada punktis `README.md` , näiteks `en/demo2/README.md` .

Pange tähele, et selle faili sisu ei näita sisukorra ülevaadet, seega on soovitatav pikkust piirata ja kirjutada lühike sissejuhatus.

###### Projekti Hüüdlause

Näete, et `Deme Two` on selle projekti tunnustekst rippmenüü ja kataloogi projekti nime `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

See vastab `en/demo2/README.md` esimesele reale :

```
# Demo Two : Your Project slogan
```

Projekti `README.md` esimese taseme pealkirja esimese kooloni `:` järel olevat sisu loetakse projekti loosungiks.

Hiina, Jaapani ja Korea kasutajad pange tähele, et täislaiuse käärsoole asemel peaksite kasutama poollaiust koolonit `:` .

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

### Vaikimisi Laadimine Ilma Konfiguratsiooniteeta

Teatud juurdepääsutee korral, kui tee eesliide ei ole `nav:` konfigureeritud, laaditakse vaikimisi teele vastav fail `MarkDown` ja renderdatakse malli `Md` abil.

Näiteks kui juurdepääs on `/test` ja `nav:` on konfigureeritud ilma selle tee eesliiteta ning praegune sirvimiskeel on inglise keel (kood `en` ), laaditakse vaikimisi `/en/test.md` ja renderdatakse malli `Md` abil.

Kui `/en/test.md` seda faili ei eksisteeri, kuvatakse vaikeleht `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
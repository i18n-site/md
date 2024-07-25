# .i18n/conf.yml

Skedari i konfigurimit është `.i18n/conf.yml` `i18n.site`

Përveç cilësimeve `ignore:` dhe `i18n:` [`i18`](/i18) , skedari i konfigurimit është si më poshtë:

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

Midis tyre, artikulli i konfigurimit `ext:` i `upload` do të thotë se vetëm `.md` do të ngarkohet gjatë publikimit.

## Navigimi Në Krye Të Navigimit

`nav:` e konfigurimit, që korrespondojnë me menynë e navigimit në krye të faqes kryesore.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Midis tyre `i18n: home` korrespondon me `en/i18n.yml`中`home: Home` .

`en/i18n.yml` do të përkthehet në shumë gjuhë, si p.sh. `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Pas përfundimit të përkthimit, ju mund të modifikoni vlerën `yml` përkthimit, por mos shtoni ose fshini çelësin e përkthimit `yml`

### `use: Toc` Shabllon I Vetëm I Skedarit (Me Skicë)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` do të thotë të përdorësh paraqitjen `Toc` , e cila është duke dhënë një model të vetëm `Markdown` .

`TOC` është shkurtesa e `Table of Contents` `Markdown`

`url:` përfaqëson shtegun e skedarit `Markdown` ( `/` korrespondon me direktoriumin rrënjë `/README.md` , ky emër skedari kërkon një parashtesë të madhe dhe një prapashtesë të vogël).

### `use: Md` Shabllon I Vetëm Skedari (Pa Skicë)

`Md` është i njëjtë me `Toc` , të dyja përdoren për të dhënë një skedar të vetëm `Markdown` . Megjithatë `Md` shablloni nuk e tregon skicën në shiritin anësor.

Mund ta modifikoni `use: Toc` në konfigurimin e mësipërm në `use: Md` , të ekzekutoni `i18n.site` në direktorinë `md` dhe më pas të vizitoni URL-në e shikimit të zhvillimit për të vëzhguar ndryshimet në faqen kryesore.

### Ngarkimi I Parazgjedhur Pa Shteg Konfigurimi

Nëse prefiksi i shtegut të një shtegu të caktuar që aksesohet nuk është i konfiguruar në `nav:` skedari `MarkDown` që korrespondon me shtegun do të ngarkohet si parazgjedhje dhe do të jepet duke përdorur modelin `Md` .

Për shembull, nëse vizitoni `/test` dhe `nav:` është konfiguruar pa këtë shteg, dhe gjuha e faqes është anglisht (kodi `en` ), shablloni do të ngarkohet `/en/test.md` dhe do të jepet duke përdorur `Md` si parazgjedhje.

`/en/test.md` ky skedar nuk ekziston, faqja e paracaktuar `404` do të shfaqet.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Shabllon Me Shumë Skedarë

Në skedarin e konfigurimit:

```
  - i18n: blog
    use: Doc
```

Tregon përdorimin `Doc` për paraqitjen e shabllonit.

`Doc` `MarkDown`

#### Projekt I Vetëm (Skedarë Të Shumtë)

Në `blog` më sipër është mënyra e një projekti të `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kur Url-Ja Është Bosh, Ajo Vendoset Në Vlerën E i18n

Nëse nuk shkruani `url` `url` në vlerën e `i18n` .

Metoda e mësipërme e shkrimit është e barabartë me të paturit `url: blog` dhe skedari i saj përkatës është `en/blog/TOC` .

#### Projekte Të Shumta

Konfigurimi `i18n:doc` `.i18n/conf.yml` modaliteti me shumë projekte.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Këtu, `menu: NB demo1,demo2` do të thotë të përdorni `NB` për të dhënë menynë rënëse.

`NB` është shkurtesa e `Name Breif` , që tregon se menyja rënëse mund të shfaqë emrin dhe sloganin e projektit.

`NB` pasohet nga parametri `demo1,demo2` që i kalohet.
Vini re se nuk duhet të ketë hapësira ** para `demo1,demo2` pas presjes `,` në : **

Për parametrat e mësipërm, skedari përkatës i indeksit të drejtorisë është:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeksi I Tabelës Së Përmbajtjes TOC

Do të ekzekutojë `js` shtojcën `.i18n/hook/after.tran/TOC.js` në magazinë demo për të lexuar skedarin e indeksit të drejtorisë `doc` që korrespondon me konfigurimin e shabllonit `TOC` për të gjeneruar `json` të skicës `i18n.site` drejtorisë.

Nëse përdorni shabllonin `doc` , duhet ta keni këtë shtojcë.

Nëse e nisni projektin `i18n.site` nga një dosje bosh, mos harroni të kopjoni `.i18n` në projektin demo në drejtorinë tuaj.

`Doc` do të përshkruajë tabelën e përmbajtjes bazuar në `json` e krijuar.

##### Shpjegimi I Detajuar I Përmbajtjes

Përmbajtja : si më poshtë `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Përdorni Dhëmbëzimin Për Të Treguar Nivelet

`README.md` `en/blog/TOC` `i18n.site`

Dy rreshtat e ardhshëm janë siç tregohet në pamjen e mëposhtme të ekranit.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` korrespondon `News` ,
`news/begin.md` korrespondon `Our Product is Online !`

`TOC` është futur për të treguar lidhjen hierarkike të skicës dhe mbështet dhëmbëzimin me shumë nivele.

##### Niveli Prind Shkruan Vetëm Titullin, Jo Përmbajtjen.

Kur ka shumë nivele të dhëmbëzimit, niveli prind shkruan vetëm titullin dhe jo përmbajtjen. Përndryshe, tipografia do të ngatërrohet.

##### Projekti README.md 

`README.md` projektit, për shembull, mund të shkruani përmbajtje në `en/demo2/README.md` .

Vini re se përmbajtja e këtij skedari nuk tregon një tabelë të përmbajtjes, prandaj rekomandohet të kufizoni gjatësinë dhe të shkruani një hyrje të shkurtër.

###### Slogani I Projektit

Siç mund ta shihni `Deme Two` poshtë menysë rënëse dhe emrit të projektit të katalogut, është slogani i tij `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: korrespondon me rreshtin e parë `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekti `README.md` Përmbajtja pas pikës së parë `:` në titullin e nivelit të parë do të konsiderohet si slogani i projektit.

Përdoruesit nga Kina, Japonia dhe Koreja, ju lutemi vini re se duhet të përdorni dy pika me gjysmë gjërësi në vend të dy pikave me gjerësi të plotë `:`

##### Si Të Lëvizni TOC Me Shumicë?

`TOC` duhet të vendoset në drejtorinë e gjuhës burimore.

Për shembull, nëse gjuha burimore është kineze, `TOC` më lart është `zh/blog/TOC` .

Nëse gjuha burimore është modifikuar, ju duhet të zhvendosni `TOC` në një gjuhë të caktuar në projekt në një gjuhë tjetër.

Ju mund t'i referoheni komandave të mëposhtme:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ju lutemi modifikoni `en/` dhe `zh/` në komandën e mësipërme në kodin tuaj të gjuhës.



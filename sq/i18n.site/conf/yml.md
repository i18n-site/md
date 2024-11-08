# .i18n/conf.yml

Skedari i konfigurimit për `i18n.site` është `.i18n/conf.yml` dhe përmbajtja është si më poshtë :

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

Midis tyre, `upload` deri në `ext:` artikull konfigurimi do të thotë se vetëm `.md` do të ngarkohen gjatë publikimit.

## Navigimi Në Krye Të Navigimit

`nav:` opsione konfigurimi, që korrespondojnë me menynë e navigimit në krye të faqes kryesore.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Midis tyre, `i18n: home` korrespondon me `home: Home` në `en/i18n.yml` (ku `en` është gjuha burimore e përkthimit të projektit).

Përmbajtja `en/i18n.yml` është teksti i shfaqur në menynë e lundrimit, i cili do të përkthehet sipas `fromTo` në konfigurim, për shembull, përkthehet në `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Pas përfundimit të përkthimit, mund të modifikoni vlerën e përkthimit `yml` , por mos shtoni ose fshini çelësin e përkthimit `yml` .

### `use: Toc` Modeli I Një Dokumenti Të Vetëm Me Skicë

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` do të thotë paraqitje duke përdorur një shabllon `Toc` , i cili është duke dhënë një shabllon të vetëm `Markdown` .

`TOC` është shkurtimi i `Table of Contents` Kur ky shabllon të jepet, skica e këtij skedari `Markdown` do të shfaqet në shiritin anësor.

`url:` përfaqëson shtegun e skedarit `Markdown` ( `/` korrespondon me direktorinë rrënjësore `/README.md` , ky emër skedari kërkon një parashtesë të madhe dhe një prapashtesë të vogël).

### `use: Md` Shablloni I Një Dokumenti Të Vetëm Pa Skicë

Modeli `Md` dhe shablloni `Toc` janë të njëjta dhe të dyja përdoren për të dhënë një skedar të vetëm `Markdown` . Por shablloni `Md` nuk e tregon skicën në shiritin anësor.

Mund ta modifikoni `use: Toc` në konfigurimin e mësipërm në `use: Md` , të ekzekutoni përsëri `i18n.site` në direktorinë `md` dhe më pas të vizitoni URL-në e shikimit paraprak të zhvillimit për të vëzhguar ndryshimet në faqen kryesore.

### `use: Blog` Modele Blog

Modeli i blogut shfaq një listë artikujsh (tituj dhe abstrakte) sipas kohës së publikimit.

[→ Klikoni këtu për të mësuar rreth konfigurimit specifik](/i18n.site/conf/blog)

### `use: Doc` Modele Dokumentesh Me Shumë Skedarë

Në skedarin e konfigurimit:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Tregon përdorimin e `Doc` për paraqitjen e shabllonit.

Modeli `Doc` mbështet integrimin e shumëfishtë `MarkDown` për të gjeneruar skica dokumentesh për projekte të vetme ose të shumëfishta.

#### Projekte Të Shumta Dhe Skedarë Të Shumtë

Konfigurimi i `.i18n/conf.yml` në `i18n:doc` është modaliteti i interpretimit me shumë skedarë me shumë projekte.

Këtu, `menu: NB demo1,demo2` , nënkupton përdorimin e shabllonit `NB` për të dhënë menynë rënëse.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , që është shkurtimi i `Name Breif` , do të thotë se menyja rënëse mund të shfaqë emrin dhe sloganin e projektit.

`NB` pasohet nga parametri `demo1,demo2` që i kalohet.

: ** Nuk duhet të ketë hapësira ** para dhe pas presjes `,` në `demo1,demo2` .

Skedari përkatës i indeksit të drejtorisë për parametrat e mësipërm është:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Skedarë Të Shumtë Të Një Projekti Të Vetëm

Nëse keni vetëm një projekt, mund ta konfiguroni si më poshtë.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Projekti i vetëm me shumë skedarë nuk e mbështet konfigurimin e `url` si shtegu rrënjë `/`
> Nëse __conf.yml nav:__ Asnjë shteg rrënjësor nuk është konfiguruar, kur hyni në faqen kryesore të faqes së internetit, ajo do të rishkruhet automatikisht në URL-në e parë nën konfigurimin `nav:` .
> Ky dizajn është për të dalluar më mirë dokumentet e projektit, bloget dhe përmbajtjet e tjera përmes drejtorive.
> Rekomandohet të përdorni një skedar të vetëm dhe një faqe të vetme si faqe kryesore.

> [!TIP]
> Nëse `url` nuk shkruhet, `url` vendos vlerën e `i18n` Ky rregull hyn në fuqi edhe për shabllonet e tjerë.

#### Indeksi I Tabelës Së Përmbajtjes TOC

Nëse shablloni `use: Doc` është i aktivizuar në konfigurim, ju lutemi aktivizoni shtojcën `i18n.addon/toc` në `.i18n/conf.yml` Konfigurimi është si më poshtë :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` do të instalojë dhe ekzekutojë automatikisht këtë shtojcë, do të lexojë `TOC` skedarin e indeksit të drejtorisë dhe do të gjenerojë `json` skicën e drejtorisë.

Nëse është një projekt i vetëm me shumë skedarë, direktoria rrënjësore `TOC` është drejtoria që korrespondon me `url:` në direktorinë e gjuhës burimore, për shembull, nëse gjuha burimore është kineze: skedari që korrespondon me `url: flashduty` është `zh/flashduty/TOC` .

Nëse janë projekte të shumta dhe skedarë të shumtë, nuk ka nevojë të konfiguroni `url:` Drejtoria kryesore e `TOC` është drejtoria që korrespondon me vlerën e `i18n` .

##### Shpjegimi I Detajuar I Përmbajtjes

`en/blog/TOC` Përmbajtja është si më poshtë :

```
README.md

news/README.md
  news/begin.md
```

##### Përdorni Dhëmbëzimin Për Të Treguar Nivelet

`README.md` në rreshtin e parë të `en/blog/TOC` më sipër korrespondon me `i18n.site` në foton më poshtë, që është emri i projektit.

Dy rreshtat e ardhshëm janë siç tregohet në pamjen e mëposhtme të ekranit.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` korrespondon me `News` ,
`news/begin.md` korrespondon me `Our Product is Online !`

`TOC` skedarë janë futur për të treguar lidhjen hierarkike të skicës, për të mbështetur dhëmbëzimin me shumë nivele dhe komentet e rreshtave që fillojnë me `# ` .

##### Niveli Prind Shkruan Vetëm Titullin, Jo Përmbajtjen.

Kur ka shumë nivele të dhëmbëzimit, niveli prind shkruan vetëm titullin dhe jo përmbajtjen. Përndryshe, tipografia do të ngatërrohet.

##### Projekti README.md

Përmbajtja mund të shkruhet në artikullin `README.md` , si p.sh. `en/demo2/README.md` .

Vini re se përmbajtja e këtij skedari nuk tregon një tabelë të përmbajtjes, prandaj rekomandohet të kufizoni gjatësinë dhe të shkruani një hyrje të shkurtër.

###### Slogani I Projektit

Ju mund të shihni se `Deme Two` ka etiketën e tij të `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Kjo korrespondon me rreshtin e parë prej `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Përmbajtja pas pikës së parë `:` të titullit të nivelit të parë të projektit `README.md` do të konsiderohet si slogani i projektit.

Përdoruesit nga Kina, Japonia dhe Koreja, ju lutemi vini re se duhet të përdorni dy pika me gjysmë gjerësi `:` në vend të dy pikave me gjerësi të plotë.

##### Si Të Lëvizni TOC Me Shumicë?

`TOC` skedarë duhet të vendosen në drejtorinë e gjuhës burimore.

Për shembull, nëse gjuha burimore është kineze, atëherë `TOC` më lart është `zh/blog/TOC` .

Nëse gjuha burimore është modifikuar, ju duhet të zhvendosni skedarët `TOC` të një gjuhe të caktuar në projekt në një gjuhë tjetër.

Ju mund t'i referoheni komandave të mëposhtme:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ju lutemi modifikoni `en/` dhe `zh/` në komandën e mësipërme në kodin tuaj të gjuhës.

### Ngarkimi I Parazgjedhur Pa Shteg Konfigurimi

Për një shteg të caktuar që aksesohet, nëse prefiksi i shtegut nuk është i konfiguruar në `nav:` , skedari `MarkDown` që korrespondon me shtegun do të ngarkohet si parazgjedhje dhe do të jepet duke përdorur shabllonin `Md` .

Për shembull, nëse aksesohet `/test` dhe `nav:` konfigurohet pa prefiksin e kësaj rruge, dhe gjuha aktuale e shfletimit është anglishtja (kodi `en` ), `/en/test.md` do të ngarkohet si parazgjedhje dhe do të jepet duke përdorur shabllonin `Md` .

Nëse `/en/test.md` ky skedar nuk ekziston, do të shfaqet faqja e paracaktuar `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
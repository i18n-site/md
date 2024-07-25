# .i18n/conf.yml

`i18n.site` D'Konfiguratiounsdatei ass `.i18n/conf.yml` .

Ausser `ignore:` an `i18n:` Astellunge vun [`i18`](/i18) ass d'Konfiguratiounsdatei wéi follegt:

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

Ënnert hinnen bedeit den `ext:` Konfiguratiounsartikel `.md` `upload`

## Top Navigatioun nav

`nav:` , entspriechend dem Navigatiounsmenü uewen op der Homepage

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ënnert `i18n: home` entsprécht `en/i18n.yml`中`home: Home` .

`en/i18n.yml` gëtt a verschidde Sproochen iwwersat, wéi `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nodeems d'Iwwersetzung fäerdeg ass, kënnt Dir de `yml` vun der Iwwersetzung änneren, awer net de Schlëssel vun der Iwwersetzung `yml` derbäisetzen oder läschen.

### `use: Toc` Eenzeg Datei Schabloun (Mat Kontur)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` heescht `Toc` Rendering ze benotzen, wat eng eenzeg `Markdown` Schabloun rendert.

`TOC` ass d'Ofkierzung `Markdown` `Table of Contents` .

`url:` duerstellt de Fichierwee vum `Markdown` ( `/` entsprécht dem Root-Verzeichnis `/README.md` , dësen Dateinumm erfuerdert e grousse Buschtawen an e Suffix).

### `use: Md` Eenzeg Datei Schabloun (Keng Kontur)

`Md` Schabloun ass d'selwecht wéi `Toc` , béid gi benotzt fir eng eenzeg `Markdown` Datei ze maachen. Wéi och ëmmer `Md` d'Schabloun weist net d'Kontur an der Sidebar.

Dir kënnt an der uewe genannter Konfiguratioun `use: Toc` op `use: Md` , lafen `i18n.site` am `md` Verzeichnis erëm, a besicht dann d'Entwécklungsvirschau URL fir d'Ännerungen op der Homepage ze beobachten.

### Standard Luede Ouni Configuratioun Wee

Wann de Wee Präfix vun engem bestëmmte Wee, deen zougänglech ass, net an `nav:` gëtt d `MarkDown` Datei, déi dem Wee entsprécht, par défaut gelueden a mat `Md` Schabloun gemaach.

Zum Beispill, wann Dir besicht `/test` an `nav:` ass ouni dëse Wee konfiguréiert, an d'Säitsprooch ass Englesch (Code `en` ), gëtt d'Schabloun par défaut gelueden `/en/test.md` a mat `Md`

`/en/test.md` dës Datei net existéiert, gëtt d'Standard `404` Säit ugewisen.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-Datei Schabloun

An der Konfiguratiounsdatei:

```
  - i18n: blog
    use: Doc
```

Gëtt `Doc` fir d'Schabloun ze benotzen.

`Doc` ënnerstëtzt d'Integratioun vu multiple `MarkDown` fir Dokumentkonturen fir eenzel oder méi Projeten ze generéieren.

#### Eenzelprojet (Méi Dateien)

`blog` an der uewen ass den eenzege Projet Modus vun `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Wann d'URL Eidel Ass, Setzt Se Als Standard Op De Wäert Vun i18n

Wann Dir net schreift `url` `url` op de Wäert vun `i18n` .

Déi uewe genannte Schreifmethod ass gläichwäerteg mat `url: blog` a seng entspriechend Datei ass `en/blog/TOC` .

#### Multiple Projeten

`.i18n/conf.yml` D'Konfiguratioun an `i18n:doc` ass Multi-Projet Modus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hei heescht `menu: NB demo1,demo2` `NB` benotzt fir den Dropdown-Menü ze maachen.

`NB` `Name Breif`

`NB` gëtt gefollegt vum Parameter `demo1,demo2` derbäi.
Notéiert datt et keng Plazen ** virum an nom Komma `,` `demo1,demo2` : **

Fir déi uewe genannte Parameteren ass déi entspriechend Verzeechnesindexdatei:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Inhaltsverzeechnes Index

`i18n.site` Wëllt den `js` Plugin `.i18n/hook/after.tran/TOC.js` am Demo-Lager ausféieren fir d'Verzeechnesindexdatei ze liesen `doc` entspriechend der Schablounkonfiguratioun `TOC` fir `json` vun der Verzeechneskontur ze generéieren.

Wann Dir `doc` benotzt, musst Dir dëse Plug-in hunn.

Wann Dir de `i18n.site` -Projet aus engem eidelen Dossier initialiséiert, denkt drun `.i18n` am Demo-Projet an Äre Verzeichnis ze kopéieren.

`Doc` D'Schabloun gëtt den Inhaltsverzeechnes baséiert op der generéierter `json` .

##### Detailléiert Inhalt Erklärung

Den Inhalt : wéi follegt `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Benotzt Indentatioun Fir Niveauen Unzeginn

Uewen `en/blog/TOC` `README.md` an der éischter Zeil entsprécht `i18n.site` am Bild hei drënner, wat den Numm vum Projet ass.

Déi nächst zwou Zeilen si wéi am Screenshot hei ënnen gewisen.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` ,
entsprécht `Our Product is Online !` `news/begin.md`

`TOC` D'Datei ass agedréckt fir d'hierarchesch Relatioun vum Kontur unzeweisen an ënnerstëtzt Multi-Level Indentatioun.

##### Den Elterendeel Schreift Nëmmen Den Titel, Net Den Inhalt.

Wann et e puer Niveauen vun Indentatioun sinn, schreift den Elterendeel nëmmen den Titel an net den Inhalt. Soss gëtt d'Typographie duercherneen.

##### Projet README.md 

`README.md` vum Projet, zum Beispill, kënnt Dir Inhalt an `en/demo2/README.md` schreiwen.

Bedenkt datt den Inhalt vun dësem Fichier keen Inhaltsverzeechnes weist, dofir ass et recommandéiert d'Längt ze limitéieren an eng kuerz Aféierung ze schreiwen.

###### Projet Slogan

Wéi Dir gesitt `Deme Two` Ënnert dem Dropdown-Menü an `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: entsprécht der éischter Linn `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projet `README.md` Den Inhalt nom éischte Colon `:` am Titel vum éischte Niveau gëtt als Projet Slogan ugesinn.

Benotzer aus China, Japan a Korea, notéiert w.e.g. datt Dir eng hallef Breet Colon benotze musst `:`

##### Wéi Réckelen TOC Am Bulk?

`TOC` De Fichier muss am Verzeechnes vun der Quellsprooch gesat ginn.

Zum Beispill, wann d'Quellsprooch Chinesesch ass, dann `zh/blog/TOC` `TOC`

Wann d'Quellsprooch geännert gëtt, musst Dir `TOC` an enger bestëmmter Sprooch am Projet an eng aner Sprooch batch bewegen.

Dir kënnt op déi folgend Kommandoen verweisen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ännere w.e.g. `en/` an `zh/` am uewe genannte Kommando op Äre Sproochecode.



# .i18n/conf.yml

D'Konfiguratiounsdatei fir `i18n.site` ass `.i18n/conf.yml` an den Inhalt ass wéi follegt :

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

Dorënner heescht `upload` bis `ext:` Konfiguratiounsartikel datt nëmmen `.md` eropgeluede ginn beim Verëffentlechen.

## Top Navigatioun nav

`nav:` Konfiguratiounsoptiounen, entspriechend dem Navigatiounsmenü uewen op der Homepage.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ënnert hinnen entsprécht `i18n: home` `home: Home` an `en/i18n.yml` (wou `en` d'Quellsprooch vun der Iwwersetzung vum Projet ass).

`en/i18n.yml` Inhalt ass den Text, deen am Navigatiounsmenü ugewise gëtt, deen no `fromTo` an der Konfiguratioun iwwersat gëtt, zum Beispill op `zh/i18n.yml` iwwersat.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nodeems d'Iwwersetzung ofgeschloss ass, kënnt Dir de Wäert vun der Iwwersetzung `yml` änneren, awer net de Schlëssel vun der Iwwersetzung `yml` addéieren oder läschen.

### `use: Toc` Dokument Schabloun Mat Kontur

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` heescht Rendering mat engem `Toc` Schabloun, wat eng eenzeg `Markdown` Schabloun rendert.

`TOC` ass d'Ofkierzung vun `Table of Contents` Wann dës Schabloun rendert gëtt, gëtt d'Kontur vun dëser `Markdown` Datei an der Sidebar ugewisen.

`url:` stellt de Fichierwee vun `Markdown` duer ( `/` entsprécht dem Root-Verzeichnis `/README.md` , dëse Dateinumm erfuerdert e grousse Buschtaf Präfix an e Suffix vu klenge Buschtawen).

### `use: Md` Dokument Schabloun Ouni Kontur

D' `Md` Schabloun an d' `Toc` Schabloun sinn d'selwecht a béid gi benotzt fir eng eenzeg `Markdown` Datei ze maachen. Awer d' `Md` Schabloun weist net d'Kontur an der Sidebar.

Dir kënnt `use: Toc` an der uewe genannter Konfiguratioun op `use: Md` änneren, lafen `i18n.site` am `md` Verzeichnis erëm, a besicht dann d'Entwécklungsvirschau URL fir d'Ännerungen op der Homepage ze beobachten.

### `use: Blog` Blog Schablounen

De Blog Schabloun weist eng Lëscht vun Artikelen (Titelen an Abstrakter) an der Reiefolleg vun der Verëffentlechungszäit.

[→ Klickt hei fir iwwer déi spezifesch Konfiguratioun ze léieren](/i18n.site/conf/blog)

### `use: Doc` Fichier Dokument Schablounen

An der Konfiguratiounsdatei:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Gëtt un `Doc` fir Schablounrendering ze benotzen.

`Doc` Schabloun ënnerstëtzt d'Integratioun vu Multiple `MarkDown` fir Dokumentkonturen fir eenzel oder verschidde Projeten ze generéieren.

#### Multiple Projeten a Verschidde Dateien

D'Konfiguratioun vun `.i18n/conf.yml` an `i18n:doc` ass Multi-Projet Multi-Datei Rendering Modus.

Hei, `menu: NB demo1,demo2` , heescht d' `NB` Schabloun ze benotzen fir den Dropdown-Menü ze maachen.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , wat d'Ofkierzung vun `Name Breif` ass, heescht datt den Dropdown-Menü den Numm an de Slogan vum Projet kann weisen.

`NB` gëtt gefollegt vum Parameter `demo1,demo2` deen derbäi ass.

Opgepasst : ** Et sollt keng Plazen ** virum an nom Komma `,` op `demo1,demo2` sinn.

Déi entspriechend Verzeechnesindexdatei fir déi uewe genannte Parameteren ass:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Projet Multiple Dateien

Wann Dir nëmmen ee Projet hutt, kënnt Dir et wéi follegt konfiguréieren.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Een eenzege Projet mat méi Dateien ënnerstëtzt net d'Konfiguratioun vun `url` als de Root Wee `/`
> Wann __conf.yml nav:__ Kee Root Wee konfiguréiert ass, wann Dir op d'Homepage vun der Websäit zougitt, gëtt se automatesch op déi éischt URL ënner der `nav:` Konfiguratioun iwwerschriwwen.
> Dësen Design ass fir Projetsdokumenter, Blogs an aner Inhalter duerch Verzeichnisser besser z'ënnerscheeden.
> Et ass recommandéiert eng eenzeg Datei an eng eenzeg Säit als Startsäit ze benotzen.

> [!TIP]
> Wann `url` net geschriwwe gëtt, gëtt `url` Standard op de Wäert vun `i18n` Dës Regel trëtt och a Kraaft fir aner Schablounen.

#### TOC Inhaltsverzeechnes Index

Wann Schabloun `use: Doc` an der Konfiguratioun aktivéiert ass, aktivéiert w.e.g. Plug-in `i18n.addon/toc` an `.i18n/conf.yml` D'Konfiguratioun ass wéi follegt :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` wäert dëse Plug-in automatesch installéieren an ausféieren, liest `TOC` d'Verzeechnesindexdatei, a generéiert `json` d'Verzeechneskontur.

Wann et en eenzege Projet mat méi Dateien ass, ass de Root-Verzeichnis `TOC` de Verzeechnes entsprécht `url:` am Quellsproochverzeechnes Zum Beispill, wann d'Quellsprooch Chinesesch ass: d'Datei entsprécht `url: flashduty` ass `zh/flashduty/TOC` .

Wann et e puer Projeten a méi Dateien ass `i18n` ass et net néideg fir `url:` ze konfiguréieren `TOC`

##### Detailléiert Inhalt Erklärung

`en/blog/TOC` Inhalt ass wéi follegt :

```
README.md

news/README.md
  news/begin.md
```

##### Benotzt Indentatioun Fir Niveauen Unzeginn

`README.md` an der éischter Zeil vun `en/blog/TOC` uewen entsprécht `i18n.site` am Bild hei drënner, wat de Projet Numm ass.

Déi nächst zwou Zeilen si wéi am Screenshot hei ënnen gewisen.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` entsprécht `News` ,
`news/begin.md` entsprécht `Our Product is Online !`

`TOC` Dateien ginn indentéiert fir d'hierarchesch Relatioun vum Kontur unzeweisen, Multi-Level Indentatioun z'ënnerstëtzen, a Zeilkommentarer mat `# ` unzefänken.

##### Den Elterendeel Schreift Nëmmen Den Titel, Net Den Inhalt.

Wann et e puer Niveaue vun der Indentatioun sinn, schreift den Elterendeel nëmmen den Titel an net den Inhalt. Soss gëtt d'Typographie duercherneen.

##### Projet README.md

Inhalt kann am Element `README.md` geschriwwe ginn, wéi `en/demo2/README.md` .

Bedenkt datt den Inhalt vun dësem Fichier keen Inhaltsverzeechnes weist, dofir ass et recommandéiert d'Längt ze limitéieren an eng kuerz Aféierung ze schreiwen.

###### Projet Slogan

`Your Project slogan` kënnt gesinn datt `Deme Two` seng Projetstagline ënner dem Dropdown-Menü huet an de Katalog vum Projet Numm : .

![](https://p.3ti.site/1721276842.avif)

Dëst entsprécht der éischter Zeil vun `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Den Inhalt nom éischte Colon `:` vum éischten Niveau Titel vum Projet `README.md` gëtt als Projet Slogan ugesinn.

Benotzer aus China, Japan a Korea, notéiert w.e.g. datt Dir d'Halschent-Breet Colon `:` amplaz vu Vollbreed Colon benotze sollt.

##### Wéi Réckelen TOC Am Bulk?

`TOC` Dateien mussen am Verzeechnes vun der Quellsprooch gesat ginn.

Zum Beispill, wann d'Quellsprooch Chinesesch ass, dann ass `TOC` uewen `zh/blog/TOC` .

Wann d'Quellsprooch geännert gëtt, musst Dir d' `TOC` Dateien vun enger bestëmmter Sprooch am Projet an eng aner Sprooch batch bewegen.

Dir kënnt op déi folgend Kommandoen bezéien:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ännere w.e.g. `en/` an `zh/` am uewe genannte Kommando op Äre Sproochecode.

### Standard Luede Ouni Configuratioun Wee

Fir e bestëmmte Wee deen zougänglech ass, wann de Wee Präfix net an `nav:` konfiguréiert ass, gëtt déi `MarkDown` Datei, déi dem Wee entsprécht, par défaut gelueden a mat der `Md` Schabloun gemaach ginn.

Zum Beispill, wann `/test` zougänglech ass an `nav:` ouni de Präfix vun dësem Wee konfiguréiert ass, an déi aktuell Browsersprooch Englesch ass (Code `en` ), gëtt `/en/test.md` par défaut gelueden a mat Schabloun `Md` gemaach.

Wann `/en/test.md` dës Datei net existéiert, gëtt d'Standard `404` Säit ugewisen.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
# Installéieren a Benotzen

## windows Éischt Installéiere git bash

windows System, [klickt w.e.g. hei fir als éischt erofzelueden `git bash`](https://git-scm.com/download/win)

Laf spéider Operatiounen an `git bash`

## Installéieren

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Iwwersetzung Token Konfiguréieren

Besicht [i18n.site/token](//i18n.site/token) Klickt fir Token ze kopéieren

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Erstellt `~/.config/i18n.site.yml` Paste de kopéierten Inhalt an et, den Inhalt ass wéi follegt:

```
token: YOUR_API_TOKEN
```

Zousätzlech musst Dir eng Kreditkaart fir d'Bezuelung [i18n.site/payBill](//i18n.site/payBill) (keng Opluedstatioun ass erfuerderlech, d'Websäit wäert d'Käschten automatesch no Benotzung ofsetzen, [kuckt d'Homepage fir Präisser](/#price) ).

## Benotzen

### Demo Projet

Gitt w.e.g. op den Demoprojet fir d'Konfiguratioun vun `i18` Iwwersetzung ze léieren [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Benotzer a China kënne klonen [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nom Klonen, gitt de Verzeechnes a `i18` fir d'Iwwersetzung ofzeschléissen.

### Directory Struktur

D'Schabloun Warehouse Verzeechnes Struktur ass wéi follegt

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Den `en` Verzeechnes enthält déi iwwersat Demodateien, déi nëmmen e Beispill sinn a geläscht kënne ginn.

### Run Iwwersetzung

Gitt de Verzeechnes a `i18` fir ze iwwersetzen.

### Füügt Dateien an De Repository

Zousätzlech zu der Iwwersetzung generéiert de Programm och déi folgend Dateien, füügt se w.e.g. an de Repository.

```
.i18n/hash
.i18n/cache/.gitignore
```

Ënnert hinnen ass den Inhalt : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Dëst bedeit all Dateien am `.i18n/cache/` ignoréieren (ausser `.i18n/cache/.gitignore` ).

Wann Är Versiounskontrollsoftware net ass `git` ignoréiert se w.e.g. no dëser Konfiguratioun.

## Configuratiounsdatei

`.i18n/conf.yml` Et ass d'Konfiguratiounsdatei vum `i18` Line Iwwersetzungsinstrument

Den Inhalt ass wéi follegt:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Quellsprooch &

An der Konfiguratiounsdatei sinn d'Ënneruerdnunge vun `fromTo`

`en` ass d'Quellsprooch, `zh ja ko de fr` ass d'Zilsprooch vun der Iwwersetzung.

Sproochcode gesinn [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Zum Beispill, wann Dir Chinesesch op Englesch wëllt iwwersetzen, schreift dës Linn ëm `zh: en`

Wann Dir wëllt op all ënnerstëtzt Sproochen iwwersetzen, loosst w.e.g. eidel no `:` zum Beispill

```
i18n:
  fromTo:
    en:
```

### Ignoréieren Fichier

Par défaut ginn all Dateie mat `.md` an `.yml` am Quellsproochverzeechnes iwwersat.

Wann Dir verschidde Dateien ignoréiere wëllt an se net iwwersetzen (wéi onfäerdeg Entworf), kënnt Dir d' `ignore` benotzen.

`ignore` Benotzt eng Syntax ähnlech wéi `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Zum Beispill, an der uewe genannter Konfiguratiounsdatei `_* ` datt Dateien, déi mam `_` starten, net iwwersat ginn.

## Iwwersetzung Regelen

### Iwwersetzungsredaktoren Däerfen Keng Zeilen Derbäisetzen Oder Läschen

D'Iwwersetzung ass editable. Ännert den Originaltext an iwwersetzt en nach eng Kéier, déi manuell Ännerungen un der Iwwersetzung ginn net iwwerschriwwen (wann dëse Paragraf vum Originaltext net geännert gouf).

Awer w.e.g. notéiert datt d'Linnen vun der Iwwersetzung an den Originaltext een zu engem entspriechen. Dat ass, keng Zeilen derbäisetzen oder ze läschen wann Dir d'Iwwersetzung kompiléiert. Soss wäert et Duercherneen am Iwwersetzungseditiounscache verursaachen.

Wann eppes falsch geet, kuckt w.e.g. op [d'FAQ fir Léisungen.](/i18/qa#H1)

### `Yaml`

De Kommandozeil-Tool fënnt all Dateie mat `.yml`

* Notéiert datt de Dateinumm Suffix muss `.yml` (net `.yaml` ).

D'Tool iwwersetzt nëmmen d'Wörterbuchwäerter an `.yml` net d'Wörterbuchschlësselen.

zum Beispill `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

gëtt als iwwersat `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

D'Iwwersetzung vun `YAML` kann och manuell geännert ginn (awer keng Schlësselen oder Zeilen an der Iwwersetzung addéieren oder läschen).

Baséierend op `YAML` , kënnt Dir ganz einfach international Léisunge fir verschidde Programméierungssproochen bauen.

## Fortgeschratt Benotzung

### Iwwersetzung Ënnerverzeechnes

Soulaang Dir `.i18n/conf.yml` (net néideg fir all Kéier vun der Demo-Projet Schabloun unzefänken), `i18` funktionnéiert gutt.

De Kommandozeil-Tool fënnt `.i18n/conf.yml` Konfiguratioun an all Ënnerverzeechnes an iwwersetzt se.

Projeten, déi d' [monorepo](//monorepo.tools) -Architektur benotzen, kënnen Sproochdateien an Ënnerverzeechnungen opdeelen.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Benotzerdefinéiert Installatioun Verzeechnes

Et gëtt als `/usr/local/bin` installéiert.

Wann `/usr/local/bin` keng Schreifrecht huet, gëtt se op `~/.bin` installéiert.

Ëmfeld Variablen `TO` Dir kënnt den Installatiounsverzeechnes definéieren, zum Beispill :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

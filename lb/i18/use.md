# Installéieren a Benotzen

## windows Éischt Installéiere git bash

windows System, [klickt w.e.g. hei fir d'éischt `git bash` erofzelueden an z'installéieren](https://git-scm.com/download/win) .

Laf spéider Operatiounen am `git bash` .

## Installéieren

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Iwwersetzung Token Konfiguréieren

Besicht [i18n.site/token](//i18n.site/token) Klickt fir Token ze kopéieren

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Erstellt `~/.config/i18n.site.yml` , paste de kopéierten Inhalt an et, den Inhalt ass wéi follegt:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) musst Dir eng Kreditkaart fir d'Bezuelung binden (keng Opluedstatioun ass erfuerderlech, d'Websäit wäert d'Käschten automatesch no Benotzung ofsetzen, [kuckt d'Homepage fir Präisser](/#price) ).

## Benotzen

### Demo Projet

Gitt w.e.g. op den Demoprojet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) d'Konfiguratioun vun `i18` Iwwersetzung ze léieren.

Benotzer a China kënne klonen [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Nom Klonen, gitt de Verzeechnes a lafen `i18` fir d'Iwwersetzung ofzeschléissen.

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

Déi iwwersat Demodateien am `en` Verzeichnis si just e Beispill a kënne geläscht ginn.

### Run Iwwersetzung

Gitt de Verzeechnes a lafen `i18` fir ze iwwersetzen.

Zousätzlech zu der Iwwersetzung generéiert de Programm och den `.i18n/data` Dossier, füügt et w.e.g. an de Repository.

No der Iwwersetzung `git add . ` der neier Datei gëtt eng nei Datedatei an dësem Verzeechnes generéiert.

## Configuratiounsdatei

`.i18n/conf.yml` ass d'Konfiguratiounsdatei vum `i18` Kommandozeil Iwwersetzungsinstrument

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

An der Konfiguratiounsdatei, den Ënneruerdnung vun `fromTo` :

`en` ass d'Quellsprooch, `zh ja ko de fr` ass d'Zilsprooch vun der Iwwersetzung.

Sproochcode gesinn [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Zum Beispill, wann Dir Chinesesch op Englesch wëllt iwwersetzen, schreift dës Linn `zh: en` ëm.

Wann Dir wëllt op all ënnerstëtzt Sproochen iwwersetzen, loosst w.e.g. eidel no `:` . zum Beispill

```
i18n:
  fromTo:
    en:
```

: kënnt verschidde `fromTo` fir verschidden Ënnerverzeechnungen konfiguréieren /

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

An dëser Konfiguratiounstabell ass d'Quellsprooch vum Katalog `blog` Iwwersetzung `zh` , an d'Quellsprooch vun der Katalog `blog/your_file_name.md` Iwwersetzung ass `ja` .

### Ignoréieren Fichier

Par défaut ginn all Dateie mat `.md` an `.yml` am Quellsproochverzeichnis iwwersat.

Wann Dir verschidde Dateien ignoréiere wëllt an se net iwwersetzen (wéi onfäerdeg Entworf), kënnt Dir d' `ignore` Feldkonfiguratioun benotzen.

`ignore` benotzt [globset](https://docs.rs/globset/latest/globset/#syntax) Syntax wéi d' `.gitignore` Datei.

Zum Beispill, `_* ` an der uewe genannter Konfiguratiounsdatei bedeit datt Dateien, déi mat `_` ufänken, net iwwersat ginn.

## Iwwersetzung Regelen

### Iwwersetzungsredaktoren Däerfen Keng Zeilen Derbäisetzen Oder Läschen

D'Iwwersetzung ass editable. Ännert den Originaltext an iwwersetzt en nach eng Kéier, déi manuell Ännerungen un der Iwwersetzung ginn net iwwerschriwwen (wann dëse Paragraf vum Originaltext net geännert gouf).

> [!WARN]
> D'Linnen vun der Iwwersetzung an dem Originaltext mussen een zu engem entspriechen. Dat ass, keng Zeilen derbäisetzen oder ze läschen wann Dir d'Iwwersetzung kompiléiert. Soss wäert et Duercherneen am Iwwersetzungseditiounscache verursaachen.

Wann eppes falsch geet, kuckt w.e.g. op [d'FAQ fir Léisungen.](/i18/qa#H1)

### `YAML` Iwwersetzungen

De Kommandozeil-Tool fënnt all Dateien déi mat `.yml` am Quellsproochdateierverzeechnes enden an iwwersetzen se.

* Bedenkt datt de Dateinumm Suffix muss `.yml` sinn (net `.yaml` ).

D'Tool iwwersetzt nëmmen d'Wörterbuchwäerter an `.yml` , net d'Wörterbuchschlësselen.

Zum Beispill `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

gëtt als `i18n/zh/i18n.yml` iwwersat

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

D'Iwwersetzung vun `YAML` kann och manuell geännert ginn (awer keng Schlësselen oder Zeilen an der Iwwersetzung addéieren oder läschen).

Baséierend op `YAML` Iwwersetzung, kënnt Dir ganz einfach international Léisunge fir verschidde Programméierungssproochen bauen.

## Fortgeschratt Benotzung

### Iwwersetzung Ënnerverzeechnes

Soulaang wéi `.i18n/conf.yml` erstallt gëtt (net néideg fir all Kéier vun der Demo-Projetschabloun unzefänken), funktionnéiert `i18` gutt.

De Kommandozeilinstrument fënnt `.i18n/conf.yml` Konfiguratiounen an all Ënnerverzeechnes an iwwersetzt se.

Projeten, déi d [monorepo](//monorepo.tools) Architektur benotzen, kënnen Sproochdateien an Ënnerverzeechnungen opdeelen.

![](https://p.3ti.site/1719910016.avif)

### Benotzerdefinéiert Installatioun Verzeechnes

Et gëtt als Standard op `/usr/local/bin` installéiert.

Wann `/usr/local/bin` keng Schreifrecht huet, gëtt se op `~/.bin` installéiert.

Ëmfeld Variabel `TO` astellen kann den Installatiounsverzeichnis definéieren, zum Beispill :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
# Settu Upp Og Notaðu

## windows Settu Fyrst Upp git bash

windows Kerfi, vinsamlegast [smelltu hér til að hlaða niður og setja upp fyrst `git bash`](https://git-scm.com/download/win)

Keyra síðari aðgerðir í `git bash`

## Settu Upp

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Stilla Þýðingartákn

[i18n.site/token](//i18n.site/token) Smelltu til að afrita tákn

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Búðu til `~/.config/i18n.site.yml` límdu afritaða efnið inn í það, efnið er sem hér segir:

```
token: YOUR_API_TOKEN
```

Auk þess þarf [i18n.site/payBill](//i18n.site/payBill) binda kreditkort fyrir greiðslu (engin endurhleðsla er nauðsynleg, vefsíðan mun sjálfkrafa draga gjöld eftir notkun, [sjá heimasíðuna fyrir verðlagningu](/#price) ).

## Nota

### Demo Verkefni

Vinsamlegast skoðaðu [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) til að læra stillingar þýðingar `i18`

Notendur í Kína geta klónað [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Eftir klónun, sláðu inn möppuna og `i18` til að klára þýðinguna.

### Uppbygging Skráa

Uppbygging sniðmáts vöruhúsaskrár er sem hér segir

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Skráin `en` inniheldur þýddu kynningarskrárnar, sem eru aðeins dæmi og hægt er að eyða þeim.

### Keyra Þýðingu

Sláðu inn möppuna og `i18` til að þýða.

### Bættu Skrám Við Geymsluna

Auk þýðingar mun forritið einnig búa til eftirfarandi skrár, vinsamlegast bættu þeim við geymsluna.

```
.i18n/hash
.i18n/cache/.gitignore
```

Meðal : er innihald `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Þetta þýðir að hunsa allar skrár í `.i18n/cache/` (nema `.i18n/cache/.gitignore` ).

Ef útgáfustýringarhugbúnaðurinn þinn er ekki `git` vinsamlegast hunsaðu hann samkvæmt þessari uppsetningu.

## Stillingarskrá

`.i18n/conf.yml` Það er stillingarskrá `i18` skipanalínuþýðingartólsins

Innihaldið er sem hér segir:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Upprunamál &

Í stillingarskránni eru undirmenn `fromTo`

`en` er upprunatungumálið, `zh ja ko de fr` er markmál þýðingar.

Tungumálakóði sjá [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Til dæmis, ef þú vilt þýða kínversku yfir á ensku, endurskrifaðu þessa línu `zh: en`

Ef þú vilt þýða á öll studd tungumál, vinsamlegast skildu eftir autt eftir `:` til dæmis

```
i18n:
  fromTo:
    en:
```

### Hunsa Skrá

Sjálfgefið er að allar skrár sem byrja `.md` og `.yml` í frummálsskránni verða þýddar.

Ef þú vilt hunsa ákveðnar skrár og ekki þýða þær (eins og ókláruð uppkast) geturðu notað `ignore` .

`ignore` Notar setningafræði svipað og `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Til dæmis, í uppsetningarskránni hér að ofan `_* ` að skrár sem byrja á `_` verða ekki þýddar.

## Þýðingarreglur

### Þýðingarritstjórar Ættu Ekki Að Bæta Við Eða Eyða Línum

Þýðingin er breytanleg. Breyttu upprunalega textanum og þýddu hann aftur í vél, handvirkum breytingum á þýðingunni verður ekki skrifað yfir (ef þessari málsgrein upprunalega textans hefur ekki verið breytt).

En vinsamlegast athugaðu að línur þýðingarinnar og frumtextinn verða að samsvara einni á móti einni. Það er, ekki bæta við eða eyða línum þegar þýðingin er sett saman. Annars mun það valda ruglingi í skyndiminni fyrir ritvinnslu þýðingar.

Ef eitthvað fer úrskeiðis, vinsamlegast skoðaðu [algengar spurningar fyrir lausnir.](/i18/qa#H1)

### `Yaml`

Skipanalínutólið finnur allar skrár sem enda á `.yml` í frummálsskráaskránni og þýða þær.

* Athugaðu að viðskeyti skráarnafns verður að `.yml` (ekki `.yaml` ).

Tólið þýðir aðeins orðabókargildin `.yml` , ekki orðabókarlyklana.

til dæmis `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

verður þýtt sem `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Þýðinguna á `YAML` er einnig hægt að breyta handvirkt (en ekki bæta við eða eyða lyklum eða línum í þýðingunni).

Byggt á `YAML` geturðu auðveldlega smíðað alþjóðlegar lausnir fyrir ýmis forritunarmál.

## Háþróuð Notkun

### Þýðingarundirskrá

Svo lengi sem þú býrð `i18` `.i18n/conf.yml`

Skipanalínutólið finnur `.i18n/conf.yml` stillingarnar í öllum undirmöppum og þýðir það.

Verkefni sem nota [monorepo](//monorepo.tools) -arkitektúrinn geta skipt tungumálaskrám í undirmöppur.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Sérsniðin Uppsetningarskrá

Það verður sjálfgefið uppsett á `/usr/local/bin`

Ef `/usr/local/bin` hefur ekki ritheimild verður það sett upp á `~/.bin` .

Stilltu umhverfisbreytur Þú getur til dæmis : uppsetningarskrána `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

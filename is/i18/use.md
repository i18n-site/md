# Settu Upp Og Notaðu

## windows Settu Fyrst Upp git bash

windows Kerfi, vinsamlegast [smelltu hér til að hlaða niður og setja upp `git bash`](https://git-scm.com/download/win) fyrst.

Keyra síðari aðgerðir í `git bash` .

## Settu Upp

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Stilla Þýðingartákn

[i18n.site/token](//i18n.site/token) Smelltu til að afrita tákn

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Búðu til `~/.config/i18n.site.yml` , límdu afritaða efnið inn í það, efnið er sem hér segir:

```
token: YOUR_API_TOKEN
```

Auk þess þarf [i18n.site/payBill](//i18n.site/payBill) binda kreditkort fyrir greiðslu (engin endurhleðsla er nauðsynleg, vefsíðan mun sjálfkrafa draga gjöld eftir notkun, [sjá heimasíðuna fyrir verðlagningu](/#price) ).

## Nota

### Demo Verkefni

Vinsamlegast skoðaðu [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) til að læra uppsetningu `i18` þýðingar.

Notendur í Kína geta klónað [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Eftir klónun skaltu slá inn möppuna og keyra `i18` til að klára þýðinguna.

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

Þýddu kynningarskrárnar í `en` möppunni eru bara dæmi og hægt er að eyða þeim.

### Keyra Þýðingu

Sláðu inn möppuna og keyrðu `i18` til að þýða.

### Bættu Skrám Við Geymsluna

Auk þýðingar mun forritið einnig búa til eftirfarandi skrár, vinsamlegast bættu þeim við geymsluna.

```
.i18n/hash
.i18n/cache/.gitignore
```

Meðal þeirra er innihald `.i18n/cache/.gitignore` sem hér segir :

```
**/*
!**/.gitignore
```

Þetta þýðir að allar skrár í möppu `.i18n/cache/` (nema `.i18n/cache/.gitignore` ) eru hunsaðar.

Ef útgáfustýringarhugbúnaðurinn þinn er ekki `git` , vinsamlegast hunsa hann samkvæmt þessari uppsetningu.

## Stillingarskrá

`.i18n/conf.yml` er stillingarskrá `i18` skipanalínuþýðingartólsins

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

Í stillingarskránni, undirmaður `fromTo` :

`en` er frummálið, `zh ja ko de fr` er markmál þýðingarinnar.

Tungumálakóði sjá [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Til dæmis, ef þú vilt þýða kínversku yfir á ensku, endurskrifaðu þessa línu `zh: en` .

Ef þú vilt þýða á öll studd tungumál, vinsamlegast skildu eftir autt eftir `:` . til dæmis

```
i18n:
  fromTo:
    en:
```

Þú getur stillt mismunandi `fromTo` fyrir mismunandi / Sýning er skrifuð sem hér segir :

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

Í þessari stillingartöflu er frumtungumál þýðingar vörulista `blog` `zh` og frumtungumál þýðingar `blog/your_file_name.md` er `ja` .

### Hunsa Skrá

Sjálfgefið er að allar skrár sem byrja á `.md` og `.yml` í frummálsskránni verða þýddar.

Ef þú vilt hunsa ákveðnar skrár og ekki þýða þær (eins og ókláruð uppkast) geturðu stillt það með `ignore` reitnum.

`ignore` notar sama [globset](https://docs.rs/globset/latest/globset/#syntax) og `.gitignore` skráin.

Til dæmis þýðir `_* ` í stillingarskránni hér að ofan að skrár sem byrja á `_` verða ekki þýddar.

## Þýðingarreglur

### Þýðingarritstjórar Ættu Ekki Að Bæta Við Eða Eyða Línum

Þýðingin er breytanleg. Breyttu upprunalega textanum og þýddu hann aftur í vél, handvirkum breytingum á þýðingunni verður ekki skrifað yfir (ef þessari málsgrein upprunalega textans hefur ekki verið breytt).

En vinsamlegast athugaðu að línur þýðingarinnar og frumtextinn verða að samsvara einni á móti einni. Það er, ekki bæta við eða eyða línum þegar þýðingin er sett saman. Annars mun það valda ruglingi í skyndiminni fyrir ritvinnslu þýðingar.

Ef eitthvað fer úrskeiðis, vinsamlegast skoðaðu [algengar spurningar fyrir lausnir.](/i18/qa#H1)

### `YAML` Þýðingar

Skipanalínutólið finnur allar skrár sem enda á `.yml` í frummálsskráaskránni og þýða þær.

* Athugaðu að viðskeyti skráarnafns verður að vera `.yml` (ekki `.yaml` ).

Tólið þýðir aðeins orðabókargildin í `.yml` , ekki orðabókarlyklana.

Til dæmis `i18n/en/i18n.yml`

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

Byggt á `YAML` þýðingu geturðu auðveldlega smíðað alþjóðlegar lausnir fyrir ýmis forritunarmál.

## Háþróuð Notkun

### Þýðingar Undirskrá

Svo lengi sem `.i18n/conf.yml` er búið til (ekki þarf að byrja á kynningarverkefnissniðmáti í hvert skipti), mun `i18` virka vel.

Skipanalínutólið mun finna `.i18n/conf.yml` stillingar í öllum undirmöppum og þýða þær.

Verkefni sem nota [monorepo](//monorepo.tools) -arkitektúrinn geta skipt tungumálaskrám í undirmöppur.

![](https://p.3ti.site/1719910016.avif)

### Sérsniðin Uppsetningarskrá

Það verður sjálfgefið sett upp á `/usr/local/bin` .

Ef `/usr/local/bin` hefur ekki skrifheimild verður það sett upp á `~/.bin` .

Stilling umhverfisbreytu `TO` getur skilgreint uppsetningarskrána, til dæmis :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
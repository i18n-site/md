# Projekta Versija

Kā piemēru ņemiet demonstrācijas projektu:

`en/demo2/v` ir pašreizējā projekta versijas numurs, kas sānjoslas kontūrā tiks parādīts pa labi no projekta nosaukuma.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Šeit `en/` ir valodas kods, kas atbilst tulkojuma avota valodai, ko konfigurē `.i18n/conf.yml` .

Ja jūsu avota valoda nav angļu valoda, `v` fails ir jāievieto jūsu avota valodas projekta direktorijā.

Tiek izstrādāta iespēja pārlūkot dokumentu vēsturiskās versijas.

Ir ieteicams modificēt dokumenta versijas numuru tikai tad, kad tiek izdoti lieli atjauninājumi (piemēram, `v1` , `v2` ), lai izvairītos no pārāk daudzu versiju numuru skaita, kas rada jucekli meklētājprogrammu indeksētajās lapās.

## Izmantojiet Tukšus `v` Failus, Lai Sadalītu Dažādu Projektu Failu Indeksus

Demonstrācijas projektā papildus `en/demo2/v` var redzēt, ka `en/blog` un `en/demo1` direktorijās ir tukši `v` faili.

Sānjoslas kontūrā netiks rādīts tukšs `v` , bet, kamēr ir `v` fails, direktorijā un apakšdirektorijās esošajiem failiem tiks ģenerēts neatkarīgs indekss.

Sadalot dažādu projektu indeksus, varat izvairīties no lēnas piekļuves, ko izraisa visu vietnes failu indeksa ielāde vienlaikus.

Piemēram, indeksa fails, kas atbilst `blog` demonstrācijas projektā, ir [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
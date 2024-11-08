# Verzija Projekta

Uzmimo demo projekat kao primjer:

`en/demo2/v` je broj trenutne verzije projekta, koji će biti prikazan desno od naziva projekta u okviru bočne trake.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ovdje `en/` je kod jezika koji odgovara izvornom jeziku prijevoda konfigurisanom sa `.i18n/conf.yml` .

Ako vaš izvorni jezik nije engleski, tada datoteku `v` treba staviti u direktorij projekta vašeg izvornog jezika.

Mogućnost pregleda istorijskih verzija dokumenata je u razvoju.

Preporučljivo je mijenjati broj verzije dokumenta samo kada se objave veće ispravke (kao što su `v1` , `v2` ) kako bi se izbjeglo da previše brojeva verzija uzrokuje nered na stranicama koje indeksiraju pretraživači.

## Koristite Prazne `v` Datoteke Da Podijelite Indekse Datoteka Različitih Projekata

U demo projektu, pored `en/demo2/v` , također možete vidjeti da postoje prazna `v` fajla u direktorijumima `en/blog` i `en/demo1` .

Prazan `v` neće biti prikazan u obrisu bočne trake, ali sve dok postoji datoteka `v` , nezavisni indeks će se generirati za datoteke u direktoriju i poddirektorijumima.

Podjelom indeksa različitih projekata možete izbjeći spor pristup uzrokovan učitavanjem indeksa svih datoteka na cijeloj web lokaciji odjednom.

Na primjer, indeksna datoteka koja odgovara `blog` u demo projektu [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
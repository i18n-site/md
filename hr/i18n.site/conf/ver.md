# Verzija Projekta

Uzmimo demo projekt kao primjer:

`en/demo2/v` je trenutni broj verzije projekta, koji će biti prikazan desno od naziva projekta u obrisu bočne trake.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ovdje je `en/` kod jezika koji odgovara izvornom jeziku prijevoda koji je konfigurirao `.i18n/conf.yml` .

Ako vaš izvorni jezik nije engleski, tada bi se datoteka `v` trebala smjestiti u direktorij projekta vašeg izvornog jezika.

Mogućnost pregledavanja povijesnih verzija dokumenata je u razvoju.

Preporuča se mijenjati broj verzije dokumenta samo kada se izdaju velika ažuriranja (kao što je `v1` , `v2` ) kako bi se izbjeglo da previše brojeva verzija uzrokuje nered na stranicama koje indeksiraju tražilice.

## Upotrijebite Prazne Datoteke `v` Da Biste Podijelili Indekse Datoteka Različitih Projekata

U demo projektu, osim `en/demo2/v` , također možete vidjeti da postoje prazne datoteke `v` u direktorijima `en/blog` i `en/demo1` .

Prazna `v` neće biti prikazana u obrisu bočne trake, ali sve dok postoji datoteka `v` , neovisni indeks će se generirati za datoteke u direktoriju i poddirektoriju.

Dijeljenjem indeksa različitih projekata možete izbjeći spor pristup uzrokovan učitavanjem indeksa svih datoteka na cijelom web-mjestu odjednom.

Na primjer, indeksna datoteka koja odgovara `blog` u demo projektu je [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
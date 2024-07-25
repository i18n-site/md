# Verzija Projekta

Uzmimo demo projekt kao primjer:

`en/demo2/v` je trenutni broj verzije projekta, koji će biti prikazan desno od naziva projekta u obrisu bočne trake.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` je kod jezika koji odgovara `.i18n/conf.yml` konfiguriranom izvornom jeziku prijevoda.

Ako vaš izvorni jezik nije engleski, tada se datoteka `v` treba smjestiti u direktorij projekta vašeg izvornog jezika. 

Mogućnost pregledavanja povijesnih verzija dokumenata je u razvoju.

Preporuča se mijenjati samo broj verzije dokumenta kada se izdaju velika ažuriranja (kao što su `v1` , `v2` ) kako bi se izbjeglo zatrpavanje stranica koje su indeksirale tražilice zbog previše brojeva verzija.

## Koristite Prazne `v` Datoteke Da Biste Podijelili Indekse Datoteka Za Različite Projekte

U demo projektu, osim `en/demo2/v` , također možete vidjeti da su sadržaji direktorija `en/blog` i `en/demo1` prazni `v` datoteke.

Prazan `v` neće biti prikazan u obrisu bočne trake, ali sve dok datoteka `v` postoji, neovisni indeks će se generirati za datoteke u direktoriju i poddirektoriju.

Dijeljenjem indeksa različitih projekata možete izbjeći spor pristup uzrokovan učitavanjem indeksa svih datoteka na cijelom web-mjestu odjednom.

Na primjer, u demo projektu odgovarajuća indeksna [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) : `blog`


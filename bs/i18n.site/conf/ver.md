# Verzija Projekta

Uzmimo demo projekat kao primjer:

`en/demo2/v` je trenutni broj verzije projekta, koji će biti prikazan desno od naziva projekta u okviru bočne trake.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` je kod jezika koji odgovara `.i18n/conf.yml` konfiguriranom izvornom jeziku za prijevod.

Ako vaš izvorni jezik nije engleski, onda datoteku `v` 

Mogućnost pregleda istorijskih verzija dokumenata je u razvoju.

Preporučljivo je mijenjati samo broj verzije dokumenta prilikom objavljivanja velikih ažuriranja (kao što su `v1` , `v2` ) kako bi se izbjeglo zatrpavanje stranica koje indeksiraju pretraživači zbog prevelikog broja verzija.

## Koristite `v` Datoteke Za Podjelu Indeksa Datoteka Za Različite Projekte

U demo projektu, pored `en/demo2/v` možete vidjeti i da je sadržaj direktorija `en/blog` i `en/demo1` prazan `v` datoteke.

Empty `v` neće biti prikazan u obrisu bočne trake, ali sve dok datoteka `v` postoji, generirat će se nezavisni indeks za datoteke u direktoriju i poddirektorijumima.

Podjelom indeksa različitih projekata možete izbjeći spor pristup uzrokovan učitavanjem indeksa svih datoteka na cijeloj web lokaciji odjednom.

Na primjer, u demo projektu odgovarajući indeksni [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) : `blog`


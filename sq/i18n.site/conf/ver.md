# Versioni I Projektit

Merrni si shembull projektin demo:

`en/demo2/v` është numri aktual i versionit të projektit, i cili do të shfaqet në të djathtë të emrit të projektit në skicën e shiritit anësor.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` është kodi i gjuhës që korrespondon me gjuhën e burimit të përkthimit `.i18n/conf.yml` .

Nëse gjuha juaj burimore nuk është anglishtja, atëherë skedari `v` 

Aftësia për të shfletuar versionet historike të dokumenteve është në zhvillim e sipër.

Rekomandohet të modifikoni vetëm numrin e versionit të dokumentit kur lëshoni përditësime të mëdha (si p.sh. `v1` , `v2` ) për të shmangur rrëmujën e faqeve të indeksuara nga motorët e kërkimit për shkak të shumë numrave të versioneve.

## Përdorni Skedarë `v` Për Të Ndarë Indekset E Skedarëve Për Projekte Të Ndryshme

`en/demo1` projektin `en/blog` , `v` `en/demo2/v`

Empty `v` nuk do të shfaqet në skicën e shiritit anësor, por për sa kohë që ekziston skedari `v` , do të krijohet një indeks i pavarur për skedarët në drejtori dhe nëndrejtori.

Duke ndarë indekset e projekteve të ndryshme, mund të shmangni aksesin e ngadaltë të shkaktuar nga ngarkimi i indeksit të të gjithë skedarëve në të gjithë sitin menjëherë.

Për shembull, në projektin demo skedari përkatës i `blog` është [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :


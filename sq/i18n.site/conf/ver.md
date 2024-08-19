# Versioni I Projektit

Merrni si shembull projektin demo:

`en/demo2/v` është numri aktual i versionit të projektit, i cili do të shfaqet në të djathtë të emrit të projektit në skicën e shiritit anësor.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Këtu `en/` është kodi i gjuhës që korrespondon me gjuhën burimore të përkthimit të konfiguruar nga `.i18n/conf.yml` .

Nëse gjuha juaj burimore nuk është anglishtja, atëherë skedari `v` duhet të vendoset në drejtorinë e projektit të gjuhës suaj burimore.

Aftësia për të shfletuar versionet historike të dokumenteve është në zhvillim e sipër.

Rekomandohet të modifikoni numrin e versionit të dokumentit vetëm kur lëshohen përditësime kryesore (si p.sh. `v1` , `v2` ) për të shmangur shumë numra versionesh që shkaktojnë rrëmujë në faqet e indeksuara nga motorët e kërkimit.

## Përdorni Skedarë Bosh `v` Për Të Ndarë Indekset E Skedarëve Të Projekteve Të Ndryshme

Në projektin demo, përveç `en/demo2/v` , mund të shihni gjithashtu se ka `v` skedarë bosh në drejtoritë `en/blog` dhe `en/demo1` .

Një `v` bosh nuk do të shfaqet në skicën e shiritit anësor, por për sa kohë që ka një skedar `v` , një indeks i pavarur do të gjenerohet për skedarët në drejtori dhe nëndrejtori.

Duke ndarë indekset e projekteve të ndryshme, mund të shmangni aksesin e ngadaltë të shkaktuar nga ngarkimi i indeksit të të gjithë skedarëve në të gjithë sitin menjëherë.

Për shembull, skedari i indeksit që korrespondon me `blog` në projektin demo është [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
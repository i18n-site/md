# Projekto Versija

Paimkite demonstracinį projektą kaip pavyzdį:

`en/demo2/v` yra dabartinės projekto versijos numeris, kuris bus rodomas projekto pavadinimo dešinėje šoninės juostos kontūre.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Čia `en/` yra kalbos kodas, atitinkantis vertimo šaltinio kalbą, sukonfigūruotą `.i18n/conf.yml` .

Jei jūsų šaltinio kalba nėra anglų, tada `v` failas turėtų būti patalpintas jūsų šaltinio kalbos projekto kataloge.

Galimybė naršyti istorines dokumentų versijas yra kuriama.

Rekomenduojama keisti dokumento versijos numerį tik tada, kai išleidžiami pagrindiniai naujinimai (pvz., `v1` , `v2` ), kad per daug versijų numerių nesukeltų netvarkos paieškos sistemų indeksuojamuose puslapiuose.

## Norėdami Padalinti Skirtingų Projektų Failų Indeksus, Naudokite Tuščius `v` Failus

Demonstraciniame projekte, be `en/demo2/v` , taip pat galite pamatyti, kad `en/blog` ir `en/demo1` kataloguose yra tušti `v` failai.

Šoninės juostos kontūre nebus rodomas tuščias `v` , bet kol yra `v` failas, kataloge ir pakatalogiuose esantiems failams bus sugeneruotas nepriklausomas indeksas.

Išskaidydami skirtingų projektų indeksus, galite išvengti lėtos prieigos, kurią sukelia visų failų rodyklės įkėlimas visoje svetainėje vienu metu.

Pavyzdžiui, rodyklės failas, atitinkantis `blog` demonstraciniame projekte, yra [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
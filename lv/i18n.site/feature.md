# Produkta Īpašības

## Integrēti `i18` Tulkojumi

Programmai ir iebūvēts `i18` tulkojums, lūdzu, skatiet [➔ `i18` dokumentu](/i18) par konkrētu lietojumu.

## Automātiski Saskaņot Pārlūkprogrammas Valodu

Vietnes noklusējuma valoda automātiski sakritīs ar pārlūkprogrammas valodu.

Pēc tam, kad lietotājs manuāli pārslēdz valodas, lietotāja izvēle tiks saglabāta atmiņā.

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Mobilā Termināla Pielāgošana

Ir arī lieliska lasīšanas pieredze mobilajā tālrunī.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Priekšgala augsta pieejamība

`i18n.site` pēc noklusējuma publicēs vietnes saturu `npmjs.com` , izmantojot [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) un citu `CDN` saturu, kas ielādēts `npm` .

Pamatojoties uz to, tika pievienoti spoguļu avoti no kontinentālās Ķīnas, lai nodrošinātu Ķīnas lietotājiem stabilu piekļuvi un **augstu priekšgala pieejamību** .

Princips ir šāds: pārtveriet pieprasījumus ar [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , mēģiniet atkārtoti neveiksmīgos pieprasījumus citos `CDN` un adaptīvi iespējojiet visātrāk reaģējošo izcelsmes vietni kā noklusējuma ielādes avotu.

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Vienas Lapas Lietojumprogramma, Ārkārtīgi Ātra Ielāde

Tīmekļa vietne izmanto vienas lapas lietojumprogrammu arhitektūru, bez atsvaidzināšanas, pārslēdzot lapas, un ārkārtīgi ātru ielādi.

## Optimizēta Lasīšanas Pieredzei

### Labi Izstrādāts Stils

> Vienkāršības skaistums ir lieliski interpretēts šīs vietnes tīmekļa dizainā.
> Tas atsakās no liekas dekorācijas un satur saturu tā tīrākajā formā.
> Kā skaists dzejolis, lai arī īss, tas aizkustina cilvēku sirdis.

<p style="text-align:right">I18N.SITE Autors</p>

[➔ Noklikšķiniet šeit, lai skatītu stilu sarakstu](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Augšējā attēlā ir redzama vairāku valodu `RSS` izmantojot abonementu `i18n.site` [inoreader.com](//inoreader.com)

### Ielādējiet Tiešsaistes Fontus, Atbalstiet Ķīniešu Valodu

Pēc noklusējuma tīmekļa lapā ir iespējoti [Alimama divu asu mainīgie taisnstūra](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) fonti [MiSans](https://hyperos.mi.com/font/zh/download/) citi tiešsaistes fonti, lai vienotu lietotāju lasīšanas pieredzi dažādās platformās.

Tajā pašā laikā, lai uzlabotu ielādes ātrumu, fonti tiek sadalīti atbilstoši vārdu biežuma statistikai.

[github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Augšējā Navigācija Automātiski Paslēpta

Ritiniet uz leju, un augšējā navigācija tiks automātiski paslēpta.

Ritiniet uz augšu, un slēptā navigācija atkal parādīsies.

Tas izbalēs, kad pele nekustas.

Navigācijas joslas augšējā labajā stūrī ir pilna ekrāna poga, lai radītu visaptverošu dokumentu lasīšanas pieredzi.

### Pašreizējās Nodaļas Sinhronizēta Kontūras Izcelšana

Ritinot saturu labajā pusē, kontūra kreisajā pusē vienlaikus iezīmēs pašlaik lasīto nodaļu.

## Foršas Detaļas

### Peles Efekti

Novietojiet peles kursoru virs pogas augšējās navigācijas joslas labajā pusē, lai redzētu lieliskus specefektus.

### `404` Mazs Spoks

`404` lapā ir jauks mazs, peldošs spoks, kura acis kustēsies ar peli, [➔ Noklikšķiniet šeit, lai skatītu](/404) ,

## Atvērtā Koda Kods

[Kods ir atvērtā koda](/i18n.site/c/src) Ja vēlaties piedalīties izstrādē, lūdzu, iepazīstieties ar sevi [adresātu sarakstā](//groups.google.com/u/2/g/i18n-site) .

Ir daudzas nelielas prasības, kas ir svarīgas, bet ne steidzamas. Izstrādes komanda uzdos praktiskus uzdevumus, pamatojoties uz jums labi pārvaldāmajām tehnoloģijām, un, nosakot prasības, uzlabos izstrādes dokumentus.
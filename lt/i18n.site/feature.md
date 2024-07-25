# Produkto Savybė

## Integruotas `I18`

Programoje yra `i18` vertimas, žr. [➔ `i18`](/i18) apie konkretų naudojimą.

## Automatiškai Suderinti Naršyklės Kalbą

Numatytoji svetainės kalba automatiškai atitiks naršyklės kalbą.

Naudotojui rankiniu būdu perjungus kalbas, vartotojo pasirinkimas bus prisimintas.

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) kodas :

## Mobiliojo Terminalo Pritaikymas

Taip pat yra puiki skaitymo patirtis mobiliajame telefone.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Priekinis aukštas prieinamumas

`i18n.site` numatytuosius nustatymus svetainės turinys bus paskelbtas `npmjs.com` , [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) ir kelis `CDN` turinį įkeliant `npm` !

Šiuo pagrindu buvo pridėti veidrodiniai šaltiniai iš žemyninės Kinijos, kad Kinijos naudotojai galėtų turėti stabilią prieigą ir pasiekti **aukštą priekinės dalies pasiekiamumą** .

Principas yra toks `CDN` perimkite užklausą naudodamiesi [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API)

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) kodas :

## Vieno Puslapio Aplikacija, Itin Greitas Įkėlimas

Svetainėje naudojama vieno puslapio taikomosios programos architektūra, neatnaujinama perjungiant puslapius ir labai greitai įkeliama.

## Optimizuotas Skaitymo Patirčiai

### Gerai Suprojektuotas Stilius

> Paprastumo grožis puikiai interpretuojamas šios svetainės web dizaine.
> Jame atsisakoma nereikalingų dekoracijų ir pateikiamas turinys gryniausia forma.
> Kaip gražus eilėraštis, nors ir trumpas, bet paliečia žmonių širdis.

<p style="text-align:right">I18N.SITE Autorius</p>

[➔ Spustelėkite čia, kad pamatytumėte stilių sąrašą](/i18n.site/md/styl) .

### Įkelkite Internetinius Šriftus, Palaikykite Kinų Kalbą

Pagal numatytuosius nustatymus [„Alimama“ dviejų ašių kintamieji stačiakampiai šriftai](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) kiti internetiniai šriftai yra įjungti tinklalapyje, kad suvienodintų vartotojų skaitymo patirtį įvairiose platformose.

Tuo pačiu metu, siekiant pagerinti įkėlimo greitį, šriftai supjaustomi pagal žodžių dažnio statistiką.

Susijęs kodas : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Viršutinė Navigacija Automatiškai Paslėpta

Slinkite žemyn ir viršutinė naršymo juosta bus automatiškai paslėpta.

Slinkite aukštyn ir vėl pasirodys paslėpta navigacija.

Jis išnyks, kai pelė nejuda.

Viršutiniame dešiniajame naršymo juostos kampe yra viso ekrano mygtukas, skirtas sukurti įtraukiantį dokumentų skaitymo patirtį.

### Sinchronizuotas Esamo Skyriaus Kontūro Paryškinimas

Slenkant turinį dešinėje, kontūras kairėje tuo pačiu metu paryškins šiuo metu skaitomą skyrių.

## Šaunios Detalės

### Pelės Efektai

Užveskite pelės žymeklį virš mygtuko, esančio dešinėje viršutinės naršymo juostos pusėje, kad pamatytumėte puikius specialiuosius efektus.

### `404` Vaiduoklis

Puslapyje yra mielas plaukiojantis vaiduoklis, jo akys judės kartu su pele, [➔ Spustelėkite čia, kad pamatytumėte](/404) `404`

## Atvirojo Kodo Kodas

[Kodas yra atvirojo kodo](/i18n.site/src) Jei jus domina kūrimas, prisistatykite [el](//groups.google.com/u/2/g/i18n-site) .

Yra daug nedidelių reikalavimų, kurie yra svarbūs, bet ne skubūs.


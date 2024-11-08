# Produkto Savybės

## Integruota `i18` Vertimų

Programa turi įmontuotą `i18` vertimą, žr. [➔ `i18` dokumentą,](/i18) skirtą konkrečiam naudojimui.

## Automatiškai Suderinti Naršyklės Kalbą

Numatytoji svetainės kalba automatiškai atitiks naršyklės kalbą.

Naudotojui rankiniu būdu perjungus kalbas, vartotojo pasirinkimas bus prisimintas.

Susijęs [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Mobiliojo Terminalo Pritaikymas

Taip pat yra puiki skaitymo patirtis mobiliajame telefone.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Priekinis aukštas prieinamumas

`i18n.site` pagal numatytuosius nustatymus paskelbs svetainės turinį `npmjs.com` , [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) ir kitus `CDN` turinį, įkeltą `npm` .

Šiuo pagrindu buvo pridėti veidrodiniai šaltiniai iš žemyninės Kinijos, kad Kinijos naudotojai galėtų turėti stabilią prieigą ir pasiekti **aukštą priekinės dalies pasiekiamumą** .

Principas yra toks: perimkite užklausas su [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , bandykite dar kartą nepavykusias užklausas su kitais `CDN` ir adaptyviai įgalinkite greičiausiai reaguojančią pradinę svetainę kaip numatytąjį įkėlimo šaltinį.

Susijęs [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Vieno Puslapio Programa, Itin Greitas Įkėlimas

Svetainėje naudojama vieno puslapio taikomosios programos architektūra, neatnaujinama perjungiant puslapius ir labai greitai įkeliama.

## Optimizuotas Skaitymo Patirčiai

### Gerai Suprojektuotas Stilius

> Paprastumo grožis puikiai interpretuojamas šios svetainės web dizaine.
> Jame atsisakoma nereikalingų dekoracijų ir pateikiamas turinys gryniausia forma.
> Kaip gražus eilėraštis, nors ir trumpas, bet paliečia žmonių širdis.

<p style="text-align:right">I18N.SITE Autorius</p>

[➔ Spustelėkite čia, kad pamatytumėte stilių sąrašą](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Aukščiau esančiame paveikslėlyje pavaizduota `RSS` kalba naudojant prenumeratą `i18n.site` [inoreader.com](//inoreader.com)

### Įkelkite Internetinius Šriftus, Palaikykite Kinų Kalbą

Pagal numatytuosius nustatymus „Alimama [MiSans](https://hyperos.mi.com/font/zh/download/) [dviejų ašių kintamieji stačiakampiai](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) šriftai ir kiti internetiniai šriftai yra įjungti tinklalapyje, kad suvienodintų vartotojų skaitymo patirtį įvairiose platformose.

Tuo pačiu metu, siekiant pagerinti įkėlimo greitį, šriftai supjaustomi pagal žodžių dažnio statistiką.

Susijęs [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Viršutinė Navigacija Automatiškai Paslėpta

Slinkite žemyn ir viršutinė naršymo juosta bus automatiškai paslėpta.

Slinkite aukštyn ir vėl pasirodys paslėpta navigacija.

Jis išnyks, kai pelė nejuda.

Viršutiniame dešiniajame naršymo juostos kampe yra viso ekrano mygtukas, skirtas sukurti įtraukiantį dokumentų skaitymo patirtį.

### Sinchronizuotas Esamo Skyriaus Kontūro Paryškinimas

Slenkant turinį dešinėje, kontūras kairėje tuo pačiu metu paryškins šiuo metu skaitymą skyrių.

## Šaunios Detalės

### Pelės Efektai

Užveskite pelės žymeklį virš mygtuko, esančio dešinėje viršutinės naršymo juostos pusėje, kad pamatytumėte puikius specialiuosius efektus.

### `404` Mažas Vaiduoklis

`404` puslapyje yra mielas plaukiojantis vaiduoklis, kurio akys judės su pele, [➔ Spustelėkite čia, kad pamatytumėte](/404) ,

## Kodas Atviro Kodo

[Kodas yra atvirojo kodo](/i18n.site/c/src) Jei jus domina kūrimas, prisistatykite [el](//groups.google.com/u/2/g/i18n-site) .

Yra daug nedidelių reikalavimų, kurie yra svarbūs, bet ne skubūs.
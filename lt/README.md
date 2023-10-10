<h1 style="justify-content:space-between">3Ti.Site · Mąstymas be sienų<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, kelių kalbų statinių svetainių generatorius, gali automatiškai išversti Markdown į [daugiau nei šimtą skirtingų kalbų](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Kai kurie žmonės gali paklausti, ar dabar, kai naršyklėse yra įmontuotos vertimo funkcijos, nereikia internacionalizuoti svetainės?

Noriu pasakyti, kad **tik internacionalizuodami visą svetainę galime palaikyti daugiakalbę viso teksto paiešką svetainėje ir paieškos variklio optimizavimą** .

## Įvadas

Biblija · Pradžios knyga :

> Senovėje, kai kalbos buvo viena, žmonija pastatė bokštą, siekiantį dangų, vartą į Dievo sritį, skelbiantį žmonijos galią.
>
> Dievas pareiškė: "Vyrai susivienija kaip viena gentis, bendru liežuviu, ir šis bokštas yra tik prologas. Dabar jie pasiekia savo troškimą ir nebebus baimės."
>
> Taigi Dievas nusileido, išsklaidydamas žmones į skirtingus kampelius, vartodamas skirtingas kalbas.
>
> Nuo tada žmonių bendravimas tapo sudėtingas, ginčai nesibaigia ir nebeliko bokšto, kuris liestų dangų.

Mokslinės fantastikos romane „Trys kūnai“ (tarimas kiniškai: `3Ti` ) išgalvota ateivių civilizacija, kuri bendrauja per elektromagnetines bangas, neturi kalbos barjerų ir klesti technologiškai.

Tikiuosi sukurti įrankį, kuris leis žemės žmonėms būti tarsi trijų kūnų žmonėmis, bendrauti nesirišant kalbos ir vėl suvienyti visą žmoniją.

## Pamoka

## Funkcijos Įvadas

### Laikykite Žymėjimo Formatą

### Modifikuoti Vertimą

Pakeitę vertimą, turite iš naujo paleisti `./i18n.sh` , kad atnaujintumėte talpyklą.

### Vertimo Pastabos

Vertimo komentaruose reikia nurodyti kalbą po \```, pvz. ` ```rust` .

Šiuo metu palaikomas rust, c, cpp, java, js, coffee, python ir bash komentarų vertimas.

Redaguokite [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , kad pridėtumėte komentarų vertimo į daugiau kalbų palaikymą.

### Konfigūruoti Tarpinį Serverį

Nustačius toliau nurodytus aplinkos kintamuosius, „Google“ vertėjo API iškvietimai gali vykti per tarpinį serverį.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Kintamasis Įterpimas

```
test: 测试变量<br 0>嵌入
```

### Ištuštinkite Talpyklą

```bash
rm -rf .i18n/.cache
```

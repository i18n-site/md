<h1 style="justify-content:space-between">I18N.SITE · Kalba be sienų<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, kelių kalbų statinių svetainių generatorius, gali automatiškai išversti Markdown į [daugiau nei šimtą skirtingų kalbų](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Kai kurie žmonės gali paklausti, ar dabar, kai naršyklėse yra įmontuotos vertimo funkcijos, nereikia internacionalizuoti svetainės?

Noriu pasakyti, kad **tik internacionalizuodami visą svetainę galime palaikyti daugiakalbę viso teksto paiešką svetainėje ir paieškos variklio optimizavimą** .

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

# I18N.SITE · Dokumentai Be Sienų<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE – statinis svetainių generatorius, palaikantis automatinį vertimą į [133 skirtingas kalbas](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

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
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### Kintamasis Įterpimas

```
test: 测试变量<br 0>嵌入
```

### Ištuštinkite Talpyklą

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```

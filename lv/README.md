# I18N.SITE · Valoda Bez Robežām<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, vairāku valodu statisko vietņu ģenerators, var automātiski tulkot Markdown [vairāk nekā simts dažādās valodās](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

Daži cilvēki var jautāt, vai tagad, kad pārlūkprogrammās ir iebūvētas tulkošanas funkcijas, nav nepieciešams internacionalizēt vietni?

Es gribu teikt, ka **tikai internacionalizējot visu vietni, mēs varam atbalstīt daudzvalodu vietnes pilna teksta meklēšanu un meklētājprogrammu optimizāciju** .

## Apmācība

## Funkciju Ievads

### Saglabājiet Markdown Formātu

### Pārveidot Tulkojumu

Pēc tulkojuma modificēšanas jums atkārtoti jāpalaiž `./i18n.sh` , lai atjauninātu kešatmiņu.

### Tulkošanas Piezīmes

Tulkojuma komentāros ir jānorāda valoda aiz \```, piemēram ` ```rust` .

Pašlaik tiek atbalstīta komentāru tulkošana rūsas, c, cpp, java, js, kafijas, python un bash.

Rediģējiet [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , lai pievienotu tulkošanas atbalstu komentāriem vairākās valodās.

### Konfigurēt Starpniekserveri

Tālāk norādīto vides mainīgo iestatīšana ļauj Google tulkotāja API izsaukumiem iet caur starpniekserveri.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Mainīgo Iegulšana

```
test: 测试变量<br 0>嵌入
```

### Iztukšojiet Kešatmiņu

```bash
rm -rf .i18n/.cache
```

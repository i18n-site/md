<h1 style="justify-content:space-between">3Ti.Site · Nedomājiet par robežām<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, vairāku valodu statisko vietņu ģenerators, var automātiski tulkot Markdown [vairāk nekā simts dažādās valodās](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Daži cilvēki var jautāt, vai tagad, kad pārlūkprogrammās ir iebūvētas tulkošanas funkcijas, nav nepieciešams internacionalizēt vietni?

Es gribu teikt, ka **tikai internacionalizējot visu vietni, mēs varam atbalstīt daudzvalodu vietnes pilna teksta meklēšanu un meklētājprogrammu optimizāciju** .

## Secība

"Bībele·Genesis":

> Senie cilvēki nešķīra valodas. Viņi piedzima ar lepnumu un vēlējās uzcelt augstu torni, kura virsotne sniedzas līdz debesīm.
> <blockquote><p>Dievam nepatika cilvēka augstprātība, tāpēc viņš visas dzīvās būtnes izklīdināja pa dažādām vietām, nespējot viena otru saprast.</p></blockquote>
> <blockquote><p>Kopš tā laika cilvēkiem ir bijis grūti sazināties, strīdi turpinās, un pasaulē nav Bābeles torņa.</p></blockquote>

Zinātniskās fantastikas romāns &quot;Trīsķermeņi&quot; (ķīniešu izruna: `3Ti` ) izdomāja citplanētiešu civilizāciju, kas sazinās ar elektromagnētisko viļņu palīdzību, kurai nav valodas barjeru un kas ir tehnoloģiski pārtikusi.

Ceru, ka ar šī rīka palīdzību zemes cilvēki būs kā trīsķermeņi, komunikāciju neierobežos valoda un visa cilvēce atkal būs vienota.

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

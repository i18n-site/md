<h1 style="justify-content:space-between">3Ti.Site · Pensez sans frontières<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un générateur de sites statiques, peut traduire automatiquement Markdown dans [plus d&#39;une centaine de langues différentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Certains se demanderont peut-être que, puisque tous les navigateurs ont des fonctions de traduction, est-il inutile d’internationaliser le site Web ?

Je voudrais dire que **seuls les sites Web qui génèrent des traductions statiques peuvent prendre en charge la recherche multilingue en texte intégral sur site et l&#39;optimisation des moteurs de recherche** .

## Introduction

Le roman de science-fiction « Trois corps » (prononciation chinoise : `3Ti` ) met en scène une civilisation extraterrestre qui communique par ondes électromagnétiques, n'a pas de barrières linguistiques et est technologiquement prospère.

Bible · Genèse :

> À cette époque, les voix et les paroles de tous sous les cieux ne faisaient qu’un.
>
> Ils ont construit une tour atteignant les hauteurs du ciel, touchant les portes de Dieu, unissant les cœurs et vantant leur gloire.
>
> Le Seigneur a proclamé : Lorsque les gens partagent une langue et un lignage, ils deviennent une tribu unique. La tour n'est que le début ; dans les jours à venir, il n’y a rien qu’ils ne réussiront pas.
>
> Ainsi, Il est descendu, provoquant la dispersion des gens au loin, leurs langues étant désormais inintelligibles les unes aux autres.
>
> À partir de ce moment-là, les conflits furent sans fin et le monde ne vit plus de tours touchant le ciel.

J'espère créer des outils pour que les habitants de la Terre puissent être comme des personnes à trois corps, communiquer sans être liés par le langage et que toute l'humanité puisse à nouveau être unie.

Donc, il y avait [`3Ti.Site`](//3Ti.Site) .

## Didacticiel

## Présentation De La Fonction

### Conserver Le Format Markdown

### Modifier La Traduction

Après avoir modifié la traduction, vous devez réexécuter `./i18n.sh` pour mettre à jour le cache.

### Notes De Traduction

Les commentaires de traduction doivent indiquer la langue après \```, comme ` ```rust` .

Prend actuellement en charge la traduction des commentaires pour rust, c, cpp, java, js, coffee, python et bash.

Modifiez [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) pour ajouter la prise en charge de la traduction des commentaires dans plus de langues.

### Configurer Le Proxy

La définition des variables d'environnement suivantes permet aux appels de l'API Google Translate de passer par le proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incorporation De Variables

```
test:测试变量<br 0>嵌入
```

### Vider Le Cache

```bash
rm -rf .i18n/.cache
```

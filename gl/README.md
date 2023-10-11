<h1 style="justify-content:space-between">3Ti.Site · Pensa sen fronteiras<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un xerador de sitios estáticos, pode traducir automaticamente Markdown a [máis de cen idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Algunhas persoas poden preguntar, xa que todos os navegadores teñen funcións de tradución, é innecesario internacionalizar o sitio web?

Gustaríame dicir que **só os sitios web que xeran traducións estáticas poden admitir a busca multilingüe de texto completo no sitio e a optimización dos motores de busca** .

## Introdución

A novela de ciencia ficción &quot;Three-Body&quot; (pronuncia chinesa: `3Ti` ) ficciona unha civilización alieníxena que se comunica a través de ondas electromagnéticas, non ten barreiras lingüísticas e é tecnoloxicamente próspera.

Biblia · Xénese :

> Os antigos construíron torres que chegaban ao ceo, chegaban á porta de Deus e promovían o prestixio da raza humana.
>
> O Señor dixo que as persoas forman o seu propio clan e falan a mesma lingua. Construír unha torre é só un preludio. Agora que está feito, farán todo no futuro.
>
> Entón, veu o Señor e dispersou á xente por varios lugares, sen poder entenderse.
>
> Desde entón, as disputas humanas continuaron, e xa non hai unha Torre de Babel no mundo.

Espero crear unha ferramenta que permita aos pobos da terra ser como persoas de tres corpos, comunicarse sen estar ligados pola linguaxe e unir de novo a toda a humanidade.

## Titoría

## Introdución Á Función

### Manter O Formato Markdown

### Modificar A Tradución

Despois de modificar a tradución, cómpre volver executar `./i18n.sh` para actualizar a caché.

### Notas De Tradución

Os comentarios de tradución deben indicar o idioma despois de \```, como ` ```rust` .

Actualmente admite a tradución de comentarios para rust, c, cpp, java, js, coffee, python e bash.

Edita [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) para engadir compatibilidade de tradución para comentarios en máis idiomas.

### Configurar Proxy

Establecer as seguintes variables de ambiente permite que as chamadas da API de Google Translate pasen polo proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incorporación Variable

```
test:测试变量<br 0>嵌入
```

### Baleirar A Caché

```bash
rm -rf .i18n/.cache
```

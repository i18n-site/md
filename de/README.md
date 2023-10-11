<h1 style="justify-content:space-between">3Ti.Site · Denken Sie grenzenlos<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, ein statischer Site-Generator, kann Markdown automatisch in [mehr als hundert verschiedene Sprachen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) übersetzen.

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Einige Leute fragen sich vielleicht, ob es unnötig ist, die Website zu internationalisieren, da alle Browser über Übersetzungsfunktionen verfügen.

Ich möchte sagen, dass **nur Websites, die statische Übersetzungen generieren, die mehrsprachige In-Site-Volltextsuche und Suchmaschinenoptimierung unterstützen können** .

## Einführung

Der Science-Fiction-Roman „Three-Body“ (chinesische Aussprache: `3Ti` ) fiktionalisiert eine außerirdische Zivilisation, die über elektromagnetische Wellen kommuniziert, keine Sprachbarrieren kennt und technologisch erfolgreich ist.

Bibel · Genesis :

> In dieser Zeit waren die Stimmen und Worte aller unter dem Himmel eins.
>
> Sie bauten einen himmelhohen Turm, berührten die Tore Gottes, vereinten die Herzen und prahlten mit ihrer Herrlichkeit.
>
> Der Herr verkündete: Wenn Menschen Sprache und Abstammung teilen, werden sie zu einem einzigen Stamm. Der Turm ist nur der Anfang; In den kommenden Tagen gibt es nichts, was sie nicht erreichen werden.
>
> So stieg Er herab und veranlasste die Menschen, sich weit und breit zu zerstreuen, da ihre Sprachen nun untereinander unverständlich waren.
>
> Von da an nahm der Streit kein Ende und die Welt sah keine Türme mehr, die den Himmel berührten.

Ich hoffe, Werkzeuge zu schaffen, damit die Menschen auf der Erde wie Drei-Körper-Menschen sein können, kommunizieren können, ohne an die Sprache gebunden zu sein, und die gesamte Menschheit wieder vereint werden kann.

Es gab also [`3Ti.Site`](//3Ti.Site) .

## Lernprogramm

## Funktionseinführung

### Behalten Sie Das Markdown-Format Bei

### Übersetzung Ändern

Nachdem Sie die Übersetzung geändert haben, müssen Sie `./i18n.sh` erneut ausführen, um den Cache zu aktualisieren.

### Übersetzungshinweise

Übersetzungskommentare müssen nach „“ die Sprache angeben, z. B. ` ```rust` .

Unterstützt derzeit die Kommentarübersetzung für Rust, C, CPP, Java, JS, Coffee, Python und Bash.

Bearbeiten Sie [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , um Übersetzungsunterstützung für Kommentare in weiteren Sprachen hinzuzufügen.

### Proxy Konfigurieren

Durch das Festlegen der folgenden Umgebungsvariablen können Google Translate-API-Aufrufe über den Proxy erfolgen.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Einbettung

```
test:测试变量<br 0>嵌入
```

### Leeren Sie Den Cache

```bash
rm -rf .i18n/.cache
```

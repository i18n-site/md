<h1 style="justify-content:space-between">3Ti.Site · সীমাহীন চিন্তা করুন<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, একটি স্ট্যাটিক সাইট জেনারেটর, স্বয়ংক্রিয়ভাবে মার্কডাউনকে [একশোরও বেশি ভিন্ন ভাষায়](https://github.com/i18n-site/node/blob/main/lang/src/index.js) অনুবাদ করতে পারে।

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

কিছু লোক জিজ্ঞাসা করতে পারে, যেহেতু সমস্ত ব্রাউজারে অনুবাদ ফাংশন রয়েছে, তাই ওয়েবসাইটটিকে আন্তর্জাতিকীকরণ করা কি অপ্রয়োজনীয়?

আমি বলতে চাই যে **শুধুমাত্র যে ওয়েবসাইটগুলি স্ট্যাটিক অনুবাদ তৈরি করে তারা বহুভাষিক ইন-সাইট ফুল-টেক্সট অনুসন্ধান এবং সার্চ ইঞ্জিন অপ্টিমাইজেশান সমর্থন করতে পারে৷**

## ভূমিকা

বৈজ্ঞানিক কল্পকাহিনী উপন্যাস &quot;থ্রি-বডি&quot; (চীনা উচ্চারণ: `3Ti` ) একটি এলিয়েন সভ্যতাকে কল্পনা করে যা ইলেক্ট্রোম্যাগনেটিক তরঙ্গের মাধ্যমে যোগাযোগ করে, কোন ভাষা বাধা নেই এবং প্রযুক্তিগতভাবে সমৃদ্ধ।

বাইবেল · জেনেসিস :

> তখন সারা বিশ্বের মানুষের উচ্চারণ ও ভাষা একই ছিল।
>
> একটি টাওয়ার তৈরি করুন যা আকাশ ছুঁয়েছে, ঈশ্বরের দ্বারে পৌঁছান, মানুষের হৃদয় সংগ্রহ করুন এবং আপনার খ্যাতি ছড়িয়ে দিন।
>
> প্রভু বলেছেন: একই সংস্কৃতি এবং বর্ণের লোকেরা তাদের নিজস্ব গোষ্ঠী গঠন করে। আজ একটি টাওয়ার তৈরি করা শুধুমাত্র একটি ভূমিকা, কিন্তু আমরা ভবিষ্যতে সবকিছু করব।
>
> অতঃপর তিনি এসে একে অপরকে বুঝতে না পেরে লোকদের বিভিন্ন স্থানে ছড়িয়ে দিলেন।
>
> তারপর থেকে, বিরোধ চলতে থাকে এবং পৃথিবীতে কোন ব্যাবেল টাওয়ার নেই।

আমি এমন একটি হাতিয়ার তৈরি করার আশা করি যা পৃথিবীর মানুষকে তিন দেহের মানুষের মতো হতে, ভাষার দ্বারা আবদ্ধ না হয়ে যোগাযোগ করতে এবং সমস্ত মানবজাতিকে আবার একত্রিত করতে সক্ষম করবে।

## টিউটোরিয়াল

## ফাংশন ভূমিকা

### মার্কডাউন ফরম্যাট রাখুন

### অনুবাদ পরিবর্তন করুন

অনুবাদ পরিবর্তন করার পরে, ক্যাশে আপডেট করতে আপনাকে `./i18n.sh` পুনরায় চালাতে হবে।

### অনুবাদ নোট

অনুবাদ মন্তব্যে \``` এর পরে ভাষা নির্দেশ করতে হবে, যেমন ` ```rust` ।

বর্তমানে মরিচা, সি, সিপিপি, জাভা, জেএস, কফি, পাইথন এবং ব্যাশের জন্য মন্তব্য অনুবাদ সমর্থন করে।

আরও ভাষায় মন্তব্যের জন্য অনুবাদ সমর্থন যোগ করতে [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) সম্পাদনা করুন।

### প্রক্সি কনফিগার করুন

নিম্নলিখিত এনভায়রনমেন্ট ভেরিয়েবল সেট করা Google Translate API কলগুলিকে প্রক্সির মাধ্যমে যেতে দেয়৷

```bash
export https_proxy=http://127.0.0.1:7890
```

### পরিবর্তনশীল এমবেডিং

```
test:测试变量<br 0>嵌入
```

### ক্যাশ খালি করুন

```bash
rm -rf .i18n/.cache
```

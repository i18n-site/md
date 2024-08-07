# د محصول ځانګړتیا

## یوځای شوی ژباړه `i18`

پروګرام جوړ شوی `i18` ، لطفا وګورئ [➔ د ځانګړي کارونې لپاره `i18`](/i18) .

## په اتوماتيک ډول د براوزر ژبه سره سمون خوري

د ویب پاڼې ډیفالټ ژبه به په اوتومات ډول د براوزر ژبې سره سمون ولري.

وروسته له دې چې کاروونکي په لاسي ډول ژبې بدلوي، د کارونکي انتخاب به په یاد وساتل شي.

اړوند کوډ : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## د ګرځنده ترمینل تطابق

په ګرځنده تلیفون کې د لوستلو بشپړ تجربه هم شتون لري.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> د مخکینۍ پای لوړ شتون

د ډیفالټ له مخې `i18n.site` د سایټ منځپانګه به `npmjs.com` ته خپره شي، [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) او ډیری `CDN` منځپانګې `npm` .

په دې اساس، د چین له اصلي ټاټوبي څخه د عکس سرچینې اضافه شوي ترڅو چینایي کاروونکو ته اجازه ورکړي چې باثباته لاسرسی ولري او **د لومړي پای لوړ شتون** ترلاسه کړي.

اصل دا دی: [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) غوښتنې په مرسته مداخله وکړئ، که چیرې غوښتنه ناکامه شي، په نورو `CDN` کې یې بیا هڅه وکړئ، او د ډیفالټ بارولو سرچینې په توګه د چټک غبرګون اصلي سټیشن فعال کړئ.

اړوند کوډ : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## د واحد پاڼې غوښتنلیک، خورا ګړندی بار کول

ویب پاڼه د یو واحد پاڼې غوښتنلیک جوړښت غوره کوي، پرته له دې چې د پاڼو بدلولو او خورا ګړندۍ بارولو په وخت کې ریفریش نه وي.

## د لوستلو تجربې لپاره مطلوب

### ښه ډیزاین شوی سټایل

> د سادګۍ ښکلا د دې ویب پاڼې په ډیزاین کې په بشپړه توګه تشریح شوې.
> دا غیر ضروري سینګار پریږدي او مینځپانګه په خپل خالص شکل کې وړاندې کوي.
> د ښکلي شعر په څېر، که څه هم لنډ دی، د خلکو زړونو ته لاس اچوي.

<p style="text-align:right" style=";text-align:right;direction:rtl">── لیکوال I18N.SITE</p>

[➔ د سټایلونو لیست لیدلو لپاره دلته کلیک وکړئ](/i18n.site/md/styl) .

### آنلاین فونټونه پورته کړئ، د چینایي ملاتړ وکړئ

د ډیفالټ په توګه، [د علیما دوه محور متغیر مستطیل فونټونه](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) او نور آنلاین فونټونه په ویب پاڼه کې فعال شوي ترڅو په مختلفو پلیټ فارمونو کې د کاروونکو د لوستلو تجربه متحد کړي.

په ورته وخت کې، د بارولو سرعت ښه کولو لپاره، فونټونه د کلمې فریکونسۍ احصایې سره سم ټوټه شوي.

اړوند کوډ : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### پورته نیویګیشن په اوتومات ډول پټ شوی

لاندې سکرول او پورته نیویګیشن به په اوتومات ډول پټ شي.

پورته سکرول وکړئ او پټ نیویګیشن به بیا څرګند شي.

دا به له منځه لاړ شي کله چې موږک حرکت نه کوي.

د نیویګیشن بار په پورتنۍ ښیې کونج کې د بشپړ سکرین تڼۍ شتون لري ترڅو د لاسوند لوستلو تجربه رامینځته کړي.

### د اوسني څپرکي روښانه کول همغږي شوي

کله چې ښي خوا ته مینځپانګه سکرول کول ، په ښي خوا کې خاکه به په ورته وخت کې د لوستلو اوسني څپرکی روښانه کړي.

## په زړه پوري توضیحات

### د موږک اغیزې

خپل موږک د پورتنۍ نیویګیشن په ښي اړخ کې تڼۍ باندې وګرځوئ ترڅو غوره ځانګړي تاثیرات وګورئ.

### کوچنی روح `404`

په پاڼه کې یو ښکلی کوچنی تیریږي، سترګې به یې موږک سره حرکت وکړي، ➔ `404` [لیدلو لپاره دلته کلیک وکړئ](/404) ،

## کوډ خلاص سرچینه

[کوډ خلاص سرچینه ده](/i18n.site/src) که تاسو په پراختیا کې برخه اخیستلو کې لیوالتیا لرئ، مهرباني وکړئ خپل ځان [د بریښنالیک لیست](//groups.google.com/u/2/g/i18n-site) ته معرفي کړئ.

ډیری کوچني اړتیاوې شتون لري چې مهمې دي مګر بیړنۍ ندي د پراختیا ټیم به د هغه ټیکنالوژیو پراساس لاسي دندې وټاکي چې تاسو یې ښه یاست، او د اړتیاوو د ټاکلو په وخت کې پراختیایي اسناد ښه کړي.


<h1 style="justify-content:space-between">I18N.SITE · Lugha isiyo na mipaka<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, jenereta ya tovuti tuli ya lugha nyingi, inaweza kutafsiri kiotomatiki Markdown katika [zaidi ya lugha mia tofauti](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Baadhi ya watu wanaweza kutaka kuuliza, kwa kuwa sasa vivinjari vina vitendaji vya utafsiri vilivyojengewa ndani, je, si lazima kufanya tovuti iwe ya kimataifa?

Ninataka kusema kwamba **ni kwa kuifanya tovuti nzima kuwa ya kimataifa pekee ndipo tunaweza kuauni utafutaji wa maandishi kamili wa lugha nyingi ndani ya tovuti na uboreshaji wa injini ya utafutaji** .

## Mafunzo

## Utangulizi Wa Kazi

### Weka Umbizo La Alama

### Rekebisha Tafsiri

Baada ya kurekebisha tafsiri, unahitaji kuendesha upya `./i18n.sh` ili kusasisha akiba.

### Vidokezo Vya Tafsiri

Maoni ya tafsiri yanahitaji kuashiria lugha baada ya \```, kama vile ` ```rust` .

Kwa sasa inasaidia tafsiri ya maoni kwa kutu, c, cpp, java, js, kahawa, chatu, na bash.

Badilisha [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ili kuongeza usaidizi wa tafsiri kwa maoni katika lugha zaidi.

### Sanidi Proksi

Kuweka vigezo vifuatavyo vya mazingira huruhusu simu za API ya Google Tafsiri kupitia proksi.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Upachikaji Unaobadilika

```
test: 测试变量<br 0>嵌入
```

### Futa Akiba

```bash
rm -rf .i18n/.cache
```

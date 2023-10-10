<h1 style="justify-content:space-between">3Ti.Tovuti · Mawazo yasiyo na mipaka<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, jenereta ya tovuti tuli ya lugha nyingi, inaweza kutafsiri kiotomatiki Markdown katika [zaidi ya lugha mia tofauti](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Baadhi ya watu wanaweza kutaka kuuliza, kwa kuwa sasa vivinjari vina vitendaji vya utafsiri vilivyojengewa ndani, je, si lazima kufanya tovuti iwe ya kimataifa?

Ninataka kusema kwamba **ni kwa kuifanya tovuti nzima kuwa ya kimataifa pekee ndipo tunaweza kuauni utafutaji wa maandishi kamili wa lugha nyingi ndani ya tovuti na uboreshaji wa injini ya utafutaji** .

## Mfuatano

"Biblia · Mwanzo":

> Watu wa kale hawakutofautisha lugha. Walizaliwa na kiburi na walitaka kujenga mnara mrefu na kilele kinachofika angani.
> <blockquote><p>Mungu alichukizwa na majivuno ya mwanadamu, kwa hiyo alitawanya viumbe vyote vilivyo hai katika sehemu mbalimbali, wasiweze kuelewana.</p></blockquote>
> <blockquote><p>Tangu wakati huo, imekuwa vigumu kwa wanadamu kuwasiliana, mizozo imeendelea, na hakuna Mnara wa Babeli ulimwenguni.</p></blockquote>

Riwaya ya kisayansi ya kubuni &quot;Miili Mitatu&quot; (Matamshi ya Kichina: `3Ti` ) inabuni ustaarabu ngeni ambao huwasiliana kupitia mawimbi ya sumakuumeme, hauna vizuizi vya lugha, na umestawi kiteknolojia.

Natumaini kwamba kwa msaada wa chombo hiki, watu wa dunia watakuwa kama watu wenye miili mitatu, mawasiliano hayatazuiliwa na lugha, na wanadamu wote wataunganishwa tena.

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

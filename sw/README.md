<h1 style="justify-content:space-between">3Ti.Tovuti · Fikiri Bila Mpaka<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jenereta ya tovuti tuli, inaweza kutafsiri kiotomatiki Markdown katika [zaidi ya lugha mia tofauti](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Watu wengine wanaweza kuuliza, kwa kuwa vivinjari vyote vina kazi za kutafsiri, je, si lazima kufanya tovuti iwe ya kimataifa?

Ningependa kusema kwamba **tovuti zinazozalisha tafsiri tuli pekee ndizo zinaweza kusaidia utafutaji wa maandishi kamili wa tovuti kwa lugha nyingi na uboreshaji wa injini ya utafutaji** .

## Utangulizi

Biblia · Mwanzo :

> Katika nyakati za kale, lugha zilipokuwa moja, wanadamu walijenga mnara unaofika mbinguni, mlango wa milki ya Mungu, ukitangaza uwezo wa mwanadamu.
>
> Mungu alitangaza, "Wanadamu wanaungana kama kabila moja, kwa lugha ya pamoja, na mnara huu ni utangulizi. Sasa wanatimiza matakwa yao, na hakuna hofu tena."
>
> Kwa hivyo, Mungu alishuka, akiwatawanya watu katika pembe tofauti, kutumia lugha tofauti.
>
> Tangu wakati huo na kuendelea, mawasiliano ya wanadamu yakawa magumu, mabishano yasiyoisha, na hapakuwa tena na mnara uliogusa anga.

Riwaya ya kisayansi ya kubuni &quot;Miili Mitatu&quot; (Matamshi ya Kichina: `3Ti` ) inabuni ustaarabu ngeni ambao huwasiliana kupitia mawimbi ya sumakuumeme, hauna vizuizi vya lugha, na umestawi kiteknolojia.

Ninatumaini kuunda chombo ambacho kitawawezesha watu wa dunia kuwa kama watu wenye miili mitatu, kuwasiliana bila kufungwa na lugha, na kuwaunganisha wanadamu wote tena.

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

# Sakinisha Na Utumie

## windows Kwanza Sasisha git bash

windows Mfumo, tafadhali [bofya hapa ili kupakua na kusakinisha `git bash` kwanza](https://git-scm.com/download/win) .

Endesha shughuli zinazofuata katika `git bash` .

## Sakinisha

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Sanidi Tokeni Ya Tafsiri

Tembelea [i18n.site/token](//i18n.site/token) Bofya ili kunakili tokeni

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Unda `~/.config/i18n.site.yml` , ubandike maudhui yaliyonakiliwa ndani yake, yaliyomo ni kama ifuatavyo.

```
token: YOUR_API_TOKEN
```

Kwa kuongeza [,](/#price) unahitaji kuunganisha kadi ya malipo ya malipo katika [i18n.site/payBill](//i18n.site/payBill)

## Kutumia

### Mradi Wa Onyesho

Tafadhali rejelea mradi wa [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ili kujifunza usanidi wa `i18` tafsiri.

Watumiaji nchini Uchina wanaweza kuiga [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Baada ya kuiga, ingiza saraka na uendeshe `i18` ili kukamilisha tafsiri.

### Muundo Wa Saraka

Muundo wa saraka ya ghala la kiolezo ni kama ifuatavyo

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Faili za onyesho zilizotafsiriwa katika saraka `en` ni mfano tu na zinaweza kufutwa.

### Endesha Tafsiri

Ingiza saraka na uendeshe `i18` ili kutafsiri.

Mbali na tafsiri, programu pia itazalisha folda `.i18n/data` , tafadhali iongeze kwenye hifadhi.

Baada ya kutafsiri faili mpya, faili mpya ya data itatolewa katika saraka hii Kumbuka kuambatanisha `git add . ` .

## Faili Ya Usanidi

`.i18n/conf.yml` ni faili ya usanidi ya zana `i18` ya kutafsiri ya mstari wa amri

Yaliyomo ni kama ifuatavyo:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lugha Ya Kimaumbile &

Katika faili ya usanidi, chini ya `fromTo` :

`en` ni lugha chanzi, `zh ja ko de fr` ni lugha lengwa ya tafsiri.

Msimbo wa lugha tazama [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Kwa mfano, ikiwa ungependa kutafsiri Kichina hadi Kiingereza, andika upya mstari huu `zh: en` .

Ikiwa ungependa kutafsiri kwa lugha zote zinazotumika, tafadhali acha wazi baada ya `:` . kwa mfano

```
i18n:
  fromTo:
    en:
```

Unaweza kusanidi `fromTo` tofauti kwa faili ndogo / Maonyesho yameandikwa kama ifuatavyo :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Katika jedwali hili la usanidi, lugha chanzi ya tafsiri ya katalogi `blog` ni `zh` , na lugha chanzi ya tafsiri ya katalogi `blog/your_file_name.md` ni `ja` .

### Picha/Viungo Vya Lugha Nyingi

Wakati URL zilizo katika picha na viungo katika `replace:` na `MarkDown` (na sifa `src` na `href` za iliyopachikwa `HTML` ) zinaposanidiwa katika `.i18n/conf.yml` na kiambishi awali hiki, msimbo wa lugha chanzo katika URL utabadilishwa na msimbo wa lugha ya tafsiri ( [lugha. orodha ya nambari](/i18/LANG_CODE) ).

Kwa mfano, usanidi wako ni kama ifuatavyo:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ni kamusi, ufunguo ni kiambishi awali cha URL cha kubadilishwa, na thamani ni kanuni ya uingizwaji.

Maana ya kuchukua nafasi ya kanuni `ko de uk>ru zh-TW>zh >en` hapo juu ni kwamba `ko de` anatumia picha ya msimbo wa lugha yake, `zh-TW` na `zh` anatumia picha ya `zh` , `uk` anatumia picha ya `ru` , na lugha zingine (kama vile `ja` ) anatumia picha. ya `en` kwa chaguo-msingi.

Kwa mfano, faili asili ya Kifaransa ( `fr` ) ya `MarkDown` ni kama ifuatavyo :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Faili ya Kiingereza ( `en` ) iliyotafsiriwa na kutengenezwa ni kama ifuatavyo :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Hapa, `/en/` katika msimbo wa lugha chanzi hubadilishwa na `/zh/` katika lugha lengwa.

Kumbuka : Lazima kuwe na `/` kabla na baada ya msimbo wa lugha wa maandishi yaliyobadilishwa kwenye URL.

> [!TIP]
> Ikiwa `- /` itasanidiwa katika `url:` , ni njia za jamaa pekee ndizo zitakazolingana, lakini URL zinazoanza na `//` hazitalinganishwa.
>
> Ikiwa baadhi ya viungo vya jina la kikoa vinataka kubadilishwa na vingine havitaki kubadilishwa, unaweza kutumia viambishi awali tofauti kama vile `[x](//x.com/en/)` na `[x](https://x.com/en/)` ili kuvitofautisha.

### Kupuuza Faili

Kwa chaguo-msingi, faili zote zinazoanza na `.md` na `.yml` katika saraka ya lugha chanzo zitatafsiriwa.

Ikiwa unataka kupuuza faili fulani na usizitafsiri (kama vile rasimu ambazo hazijakamilika), unaweza kuisanidi kwa uga `ignore` .

`ignore` hutumia syntax [globset](https://docs.rs/globset/latest/globset/#syntax) na faili `.gitignore` .

Kwa mfano, `_* ` katika faili ya usanidi hapo juu inamaanisha kuwa faili zinazoanza na `_` hazitatafsiriwa.

## Kanuni Za Tafsiri

### Wahariri Wa Tafsiri Hawapaswi Kuongeza Au Kufuta Mistari

Tafsiri inaweza kuhaririwa. Rekebisha maandishi asilia na uyatafsiri kwa mashine tena, marekebisho ya mwongozo kwa tafsiri hayatafutwa (ikiwa aya hii ya maandishi asilia haijarekebishwa).

> [!WARN]
> Lazima kuwe na mawasiliano ya moja kwa moja kati ya mistari ya tafsiri na maandishi asilia. Hiyo ni, usiongeze au kufuta mistari wakati wa kuandaa tafsiri. Vinginevyo, itasababisha mkanganyiko katika kashe ya uhariri wa tafsiri.

Ikiwa kitu kitaenda vibaya, tafadhali rejelea [Maswali Yanayoulizwa Mara kwa Mara kwa suluhu.](/i18/qa#H1)

### `YAML` Tafsiri

Chombo cha mstari wa amri kitapata faili zote zinazoishia na `.yml` kwenye saraka ya faili ya lugha ya chanzo na kuzitafsiri.

* Kumbuka kuwa kiambishi tamati cha jina la faili lazima kiwe `.yml` (sio `.yaml` ).

Zana hutafsiri tu thamani za kamusi katika `.yml` , si vitufe vya kamusi.

Kwa mfano `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

itatafsiriwa kama `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Tafsiri ya `YAML` pia inaweza kurekebishwa kwa mikono (lakini usiongeze au kufuta funguo au mistari katika tafsiri).

Kulingana na tafsiri `YAML` , unaweza kuunda kwa urahisi masuluhisho ya kimataifa kwa lugha mbalimbali za programu.

## Matumizi Ya Hali Ya Juu

### Orodha Ndogo Ya Tafsiri

Mradi `.i18n/conf.yml` imeundwa (hakuna haja ya kuanza kutoka kwa kiolezo cha mradi wa onyesho kila wakati), `i18` itafanya kazi vizuri.

Chombo cha mstari wa amri kitapata usanidi `.i18n/conf.yml` katika subdirectories zote na kuzitafsiri.

Miradi inayotumia usanifu wa [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Saraka Ya Usakinishaji Maalum

Itasakinishwa kwa `/usr/local/bin` kwa chaguo-msingi.

Ikiwa `/usr/local/bin` haina ruhusa ya kuandika itasakinishwa kwa `~/.bin` .

Kuweka kutofautisha kwa mazingira `TO` kunaweza kufafanua saraka ya usakinishaji, kwa mfano :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
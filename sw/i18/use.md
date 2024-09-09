# Sakinisha Na Utumie

## windows Kwanza Sasisha git bash

windows Mfumo, tafadhali [bofya hapa ili kupakua na kusakinisha `git bash`](https://git-scm.com/download/win) kwanza.

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

Kwa kuongeza, unahitaji [i18n.site/payBill](//i18n.site/payBill) kadi ya mkopo kwa malipo (hakuna recharge inahitajika, tovuti itatoa ada moja kwa moja kulingana na matumizi, [angalia ukurasa wa nyumbani kwa bei](/#price) ).

## Kutumia

### Mradi Wa Onyesho

Tafadhali rejelea mradi wa onyesho [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) kujifunza usanidi wa `i18` tafsiri.

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

Baada ya kutafsiri faili mpya, faili mpya ya data itatolewa katika saraka hii Kumbuka kuambatanisha `git add .` .

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

Unaweza kusanidi `fromTo` tofauti kwa / ndogo tofauti Maonyesho yameandikwa kama ifuatavyo : .

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

Katika jedwali hili la usanidi, lugha chanzi ya tafsiri ya katalogi `blog` ni `zh` , na lugha chanzi ya tafsiri ya `blog/your_file_name.md` ni `ja` .

### Kupuuza Faili

Kwa chaguo-msingi, faili zote zinazoanza na `.md` na `.yml` katika saraka ya lugha chanzo zitatafsiriwa.

Ikiwa unataka kupuuza faili fulani na usizitafsiri (kama vile rasimu ambazo hazijakamilika), unaweza kuisanidi kwa uga `ignore` .

`ignore` hutumia syntax [globset](https://docs.rs/globset/latest/globset/#syntax) na faili `.gitignore` .

Kwa mfano, `_* ` katika faili ya usanidi iliyo hapo juu inamaanisha kuwa faili zinazoanza na `_` hazitatafsiriwa.

## Kanuni Za Tafsiri

### Wahariri Wa Tafsiri Hawapaswi Kuongeza Au Kufuta Mistari

Tafsiri inaweza kuhaririwa. Rekebisha maandishi asilia na uyatafsiri kwa mashine tena, marekebisho ya mwongozo kwa tafsiri hayatafutwa (ikiwa aya hii ya maandishi asilia haijarekebishwa).

Lakini tafadhali kumbuka kuwa mistari ya tafsiri na maandishi asilia lazima yalingane moja hadi moja. Hiyo ni, usiongeze au kufuta mistari wakati wa kuandaa tafsiri. Vinginevyo, itasababisha mkanganyiko katika kashe ya uhariri wa tafsiri.

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
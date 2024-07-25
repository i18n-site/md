# Sakinisha Na Utumie

## windows Kwanza Sasisha git bash

windows , tafadhali [bofya hapa ili kupakua na kusakinisha kwanza `git bash`](https://git-scm.com/download/win)

Endesha shughuli zinazofuata katika `git bash`

## Sakinisha

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Sanidi Tokeni Ya Tafsiri

Tembelea [i18n.site/token](//i18n.site/token) Bofya ili kunakili tokeni

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Unda `~/.config/i18n.site.yml` bandika yaliyonakiliwa ndani yake, yaliyomo ni kama ifuatavyo.

```
token: YOUR_API_TOKEN
```

Kwa kuongeza, unahitaji [i18n.site/payBill](//i18n.site/payBill) kadi ya mkopo kwa malipo (hakuna recharge inahitajika, tovuti itatoa ada moja kwa moja kulingana na matumizi, [angalia ukurasa wa nyumbani kwa bei](/#price) ).

## Kutumia

### Mradi Wa Onyesho

Tafadhali rejelea mradi wa onyesho [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) kujifunza usanidi wa tafsiri `i18`

Watumiaji nchini Uchina wanaweza kuiga [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Baada ya kuiga, ingiza saraka na `i18` ili kukamilisha tafsiri.

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

Saraka ya `en` ina faili za onyesho zilizotafsiriwa, ambazo ni mfano tu na zinaweza kufutwa.

### Endesha Tafsiri

Ingiza saraka na uendeshe `i18`

### Ongeza Faili Kwenye Hifadhi

Mbali na tafsiri, programu pia itazalisha faili zifuatazo, tafadhali ziongeze kwenye hifadhi.

```
.i18n/hash
.i18n/cache/.gitignore
```

Miongoni mwao, `.i18n/cache/.gitignore` ni kama ifuatavyo :

```
**/*
!**/.gitignore
```

Hii inamaanisha kupuuza faili zote kwenye `.i18n/cache/` (isipokuwa `.i18n/cache/.gitignore` ).

Ikiwa programu yako ya kudhibiti toleo sio `git` tafadhali ipuuze kulingana na usanidi huu.

## Faili Ya Usanidi

`.i18n/conf.yml` Ni faili ya usanidi ya zana ya utafsiri ya mstari wa `i18`

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

Katika faili ya usanidi, wasaidizi wa `fromTo`

`en` ni lugha chanzi, `zh ja ko de fr` ni lugha lengwa ya tafsiri.

Msimbo wa lugha tazama [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Kwa mfano, ikiwa ungependa kutafsiri Kichina hadi Kiingereza, andika upya mstari huu `zh: en`

Ikiwa ungependa kutafsiri kwa lugha zote zinazotumika, tafadhali acha wazi baada ya `:` kwa mfano

```
i18n:
  fromTo:
    en:
```

### Kupuuza Faili

Kwa chaguo-msingi, faili zote zinazoanza na `.md` na `.yml` katika saraka ya lugha chanzo zitatafsiriwa.

Ikiwa unataka kupuuza faili fulani na usizitafsiri (kama vile rasimu ambazo hazijakamilika), unaweza kutumia usanidi wa uga `ignore`

`ignore` Hutumia sintaksia sawa na `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Kwa mfano, katika faili ya usanidi iliyo hapo juu `_* ` maana kwamba faili zinazoanza na `_` hazitatafsiriwa.

## Kanuni Za Tafsiri

### Wahariri Wa Tafsiri Hawapaswi Kuongeza Au Kufuta Mistari

Tafsiri inaweza kuhaririwa. Rekebisha maandishi asilia na uyatafsiri kwa mashine tena, marekebisho ya mwongozo kwa tafsiri hayatafutwa (ikiwa aya hii ya maandishi asilia haijarekebishwa).

Lakini tafadhali kumbuka kuwa mistari ya tafsiri na maandishi asilia lazima yalingane moja hadi moja. Hiyo ni, usiongeze au kufuta mistari wakati wa kuandaa tafsiri. Vinginevyo, itasababisha mkanganyiko katika kashe ya uhariri wa tafsiri.

Ikiwa kitu kitaenda vibaya, tafadhali rejelea [Maswali Yanayoulizwa Mara kwa Mara kwa suluhu.](/i18/qa#H1)

### `Yaml`

Zana ya mstari wa amri itapata faili zote zinazoishia na `.yml`

* Kumbuka kuwa kiambishi cha jina la faili lazima `.yaml` `.yml`

Zana hutafsiri tu thamani za kamusi katika `.yml` si funguo za kamusi.

kwa mfano `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

itatafsiriwa kama `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Tafsiri ya `YAML`

Kulingana na `YAML` , unaweza kwa urahisi kujenga masuluhisho ya kimataifa kwa lugha mbalimbali za programu.

## Matumizi Ya Hali Ya Juu

### Orodha Ndogo Ya Tafsiri

Muda tu ukiunda `.i18n/conf.yml` (hakuna haja ya kuanza kutoka kwa kiolezo cha mradi kila wakati), `i18` itafanya kazi vizuri.

Zana ya mstari wa amri itapata usanidi wa `.i18n/conf.yml`

Miradi inayotumia usanifu wa [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Saraka Ya Usakinishaji Maalum

Itasakinishwa kwa `/usr/local/bin`

Ikiwa `/usr/local/bin` haina ruhusa ya kuandika itasakinishwa kwa `~/.bin` .

Weka vigezo vya mazingira `TO` Unaweza kufafanua saraka ya usakinishaji, kwa mfano :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

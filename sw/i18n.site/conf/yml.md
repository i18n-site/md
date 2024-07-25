# .i18n/conf.yml

Faili ya usanidi ni `.i18n/conf.yml` `i18n.site`

Isipokuwa kwa mipangilio ya `ignore:` na `i18n:` ya [`i18`](/i18) faili ya usanidi ni kama ifuatavyo:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Miongoni mwao, kipengee `ext:` cha usanidi `.md` `upload`

## Urambazaji Wa Juu nav

`nav:` chaguzi za usanidi, zinazolingana na menyu ya kusogeza iliyo juu ya ukurasa wa nyumbani.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Miongoni mwao `i18n: home` inalingana na `en/i18n.yml`中`home: Home` .

`en/i18n.yml` itatafsiriwa katika lugha nyingi, kama vile `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Baada ya tafsiri kukamilika, unaweza kurekebisha thamani `yml` tafsiri, lakini usiongeze au kufuta ufunguo wa tafsiri `yml` .

### `use: Toc` , Kiolezo Cha Faili Moja (Na Muhtasari)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` inamaanisha kutumia `Toc` rendering, ambayo ni kutoa kiolezo kimoja cha `Markdown` .

`TOC` ni ufupisho wa `Table of Contents` . kiolezo hiki kinapotolewa, muhtasari wa faili hii ya `Markdown` utaonyeshwa kwenye upau wa kando.

`url:` inawakilisha njia ya faili ya `Markdown` ( `/` inalingana na saraka ya mizizi `/README.md` , jina la faili hili linahitaji kiambishi cha herufi kubwa na kiambishi cha herufi ndogo).

### `use: Md` , Kiolezo Cha Faili Moja (Hakuna Muhtasari)

`Md` Kiolezo ni sawa na `Toc` , zote zinatumika kutoa faili moja ya `Markdown` . Walakini `Md` kiolezo haionyeshi muhtasari kwenye upau wa kando.

Unaweza kurekebisha `use: Toc` katika usanidi ulio hapo juu hadi `use: Md` , endesha `i18n.site` katika saraka `md` tena, na kisha utembelee URL ya onyesho la usanidi ili kuona mabadiliko kwenye ukurasa wa nyumbani.

### Upakiaji Chaguo-Msingi Bila Njia Ya Usanidi

Ikiwa kiambishi awali cha njia ya njia fulani inayofikiwa hakijasanidiwa ndani `nav:` faili `MarkDown` inayolingana na njia hiyo itapakiwa kwa chaguo-msingi na kutolewa kwa kutumia `Md` template.

Kwa mfano, ukitembelea `/test` na `nav:` imesanidiwa bila njia hii, na lugha ya ukurasa ni Kiingereza (code `en` ), kiolezo kitapakiwa `/en/test.md` na kutekelezwa kwa kutumia `Md` kwa chaguo-msingi.

`/en/test.md` faili hii haipo, ukurasa wa chaguo-msingi `404` utaonyeshwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Kiolezo Cha Faili Nyingi

Katika faili ya usanidi:

```
  - i18n: blog
    use: Doc
```

Inaonyesha kutumia `Doc`

`Doc` Kiolezo kinaweza kujumuisha `MarkDown` nyingi ili kutoa muhtasari wa hati kwa miradi moja au nyingi.

#### Mradi Mmoja (Faili Nyingi)

`blog` katika hapo juu ni hali ya mradi mmoja wa `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Wakati url Ni Tupu, Inabadilika Kwa Thamani Ya i18n

Usipoandika `url` `url` kwa thamani ya `i18n` . Sheria hii pia itatumika kwa violezo vingine.

Njia ya uandishi hapo juu ni sawa na kuwa `url: blog` na faili yake inayolingana ni `en/blog/TOC` .

#### Miradi Mingi

`.i18n/conf.yml` Usanidi katika `i18n:doc` ni hali ya miradi mingi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hapa, `menu: NB demo1,demo2` ina maana ya kutumia `NB` kutoa menyu kunjuzi.

`NB` , ni ufupisho wa `Name Breif` , ikionyesha kuwa menyu kunjuzi inaweza kuonyesha jina na kauli mbiu ya mradi.

`NB` inafuatwa na kigezo `demo1,demo2` kilichopitishwa kwake.
Kumbuka kuwa kusiwe na nafasi ** kabla `demo1,demo2` baada ya koma `,` ndani : **

Kwa vigezo hapo juu, faili ya index ya saraka inayolingana ni:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jedwali La TOC La Index Ya Yaliyomo

`i18n.site` Itatumia programu jalizi ya `js` `.i18n/hook/after.tran/TOC.js` kwenye ghala la onyesho ili kusoma faili ya faharasa ya saraka `doc` inayolingana na usanidi wa kiolezo `TOC` ili kutoa `json` ya muhtasari wa saraka.

Ikiwa unatumia `doc` , lazima uwe na programu-jalizi hii.

Ukianzisha mradi wa `i18n.site` kutoka kwa folda tupu, kumbuka kunakili `.i18n` katika mradi wa onyesho kwenye saraka yako.

`Doc` Kiolezo kitatoa jedwali la muhtasari wa yaliyomo kulingana na `json` .

##### Maelezo Ya Kina Ya Yaliyomo

Yaliyomo ni kama : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Tumia Ujongezaji Kuashiria Viwango

Hapo juu `en/blog/TOC` `README.md` katika mstari wa kwanza inalingana na `i18n.site` katika picha hapa chini, ambayo ni jina la mradi.

Mistari miwili inayofuata ni kama inavyoonyeshwa kwenye picha ya skrini hapa chini.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

inalingana na `News` `news/README.md`
inalingana na `Our Product is Online !` `news/begin.md`

`TOC`

##### Kiwango Cha Mzazi Huandika Tu Mada, Sio Yaliyomo.

Wakati kuna viwango vingi vya ujongezaji, kiwango cha mzazi huandika kichwa pekee na si maudhui. Vinginevyo, uchapaji utaharibika.

##### Mradi README.md 

`README.md` ya mradi, kwa mfano, unaweza kuandika yaliyomo katika `en/demo2/README.md` .

Kumbuka kuwa yaliyomo kwenye faili hii haionyeshi jedwali la muhtasari wa yaliyomo, kwa hivyo inashauriwa kupunguza urefu na kuandika utangulizi mfupi.

###### Kauli Mbiu Ya Mradi

Kama unavyoona `Deme Two` Chini ya menyu kunjuzi na jina la mradi wa katalogi, kuna kauli mbiu ya mradi : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: inalingana na mstari wa kwanza `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Mradi `README.md` Maudhui baada ya koloni ya kwanza `:` katika mada ya kiwango cha kwanza yatazingatiwa kama kauli mbiu ya mradi.

Watumiaji kutoka Uchina, Japan na Korea, tafadhali kumbuka kuwa ni lazima utumie koloni yenye upana kamili `:`

##### Jinsi Ya Kubadili TOC Kwa MKR?

`TOC` Faili inahitaji kuwekwa kwenye saraka ya lugha chanzo.

Kwa mfano, ikiwa lugha asilia ni `zh/blog/TOC` , basi `TOC`

Ikiwa lugha chanzo imerekebishwa, unahitaji kubadilisha `TOC` katika lugha fulani katika mradi hadi lugha nyingine.

Unaweza kurejelea amri zifuatazo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Tafadhali rekebisha `en/` na `zh/` katika amri iliyo hapo juu kwa msimbo wako wa lugha.



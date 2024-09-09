# .i18n/conf.yml

Wasifu wa `i18n.site` ni `.i18n/conf.yml` .

Isipokuwa kwa mipangilio ya [`i18`](/i18) , `ignore:` na `i18n:` , faili ya usanidi ni kama ifuatavyo.

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
addon:
  - i18n.addon/toc
```

Miongoni mwao, kipengee cha usanidi `upload` hadi `ext:` kinamaanisha kuwa `.md` pekee ndizo zitapakiwa wakati wa uchapishaji.

## Urambazaji Wa Juu nav

Chaguo `nav:` za usanidi, zinazolingana na menyu ya kusogeza iliyo juu ya ukurasa wa nyumbani.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Kati yao, `i18n: home` inalingana na `home: Home` kwa `en/i18n.yml` .

`en/i18n.yml` itatafsiriwa katika lugha nyingi, kama vile `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Baada ya tafsiri kukamilika, unaweza kurekebisha thamani ya tafsiri `yml` , lakini usiongeze au kufuta ufunguo wa tafsiri `yml` .

### `use: Toc` , Kiolezo Cha Faili Moja (Na Muhtasari)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` inamaanisha kutoa kwa kutumia kiolezo `Toc` , ambacho kinaonyesha kiolezo kimoja `Markdown` .

`TOC` ni ufupisho wa `Table of Contents` Wakati kiolezo hiki kinatolewa, muhtasari wa faili hii `Markdown` utaonyeshwa kwenye upau wa kando.

`url:` inawakilisha njia ya faili ya `Markdown` ( `/` inalingana na saraka ya mizizi `/README.md` , jina hili la faili linahitaji kiambishi cha herufi kubwa na kiambishi cha herufi ndogo).

### `use: Md` , Kiolezo Cha Faili Moja (Hakuna Muhtasari)

Kiolezo `Md` na kiolezo `Toc` ni sawa na zote zinatumika kutoa faili `Markdown` moja. Lakini kiolezo `Md` hakionyeshi muhtasari kwenye upau wa kando.

Unaweza kurekebisha `use: Toc` katika usanidi ulio hapo juu hadi `use: Md` , endesha `i18n.site` kwenye saraka `md` tena, na kisha utembelee URL ya uhakiki wa usanidi ili kuona mabadiliko kwenye ukurasa wa nyumbani.

### Upakiaji Chaguo-Msingi Bila Njia Ya Usanidi

Ikiwa njia fulani inafikiwa na kiambishi awali cha njia yake hakijasanidiwa katika `nav:` , faili `MarkDown` inayolingana na njia hiyo itapakiwa kwa chaguo-msingi na kutolewa kwa kutumia kiolezo `Md` .

Kwa mfano, ikiwa `/test` imefikiwa, na `nav:` imesanidiwa bila njia hii, na lugha ya ukurasa ni Kiingereza (msimbo wa `en` ), `/en/test.md` itapakiwa kwa chaguo-msingi na kutolewa kwa kutumia kiolezo `Md` .

Ikiwa `/en/test.md` faili hii haipo, ukurasa `404` chaguo-msingi utaonyeshwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Kiolezo Cha Faili Nyingi

Katika faili ya usanidi:

```
  - i18n: blog
    use: Doc
```

Inaonyesha kutumia `Doc` kwa uwasilishaji wa kiolezo.

`Doc` template inasaidia kuunganisha nyingi `MarkDown` ili kutoa muhtasari wa hati kwa miradi moja au nyingi.

#### Mradi Mmoja (Faili Nyingi)

`blog` hapo juu ni hali ya kipengee kimoja cha `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Wakati url Ni Tupu, Inabadilika Kwa Thamani Ya i18n

Ikiwa `url` haijaandikwa, `url` hubadilika kuwa thamani ya `i18n` Sheria hii pia itatumika kwa violezo vingine.

Njia ya kuandika hapo juu ni sawa na `url: blog` , na faili yake sambamba ni `en/blog/TOC` .

#### Miradi Mingi

Usanidi wa `i18n:doc` kati ya `.i18n/conf.yml` ni hali ya miradi mingi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hapa, `menu: NB demo1,demo2` , inamaanisha kutumia kiolezo `NB` kutoa menyu kunjuzi.

`NB` , ambayo ni ufupisho wa `Name Breif` , inamaanisha kuwa menyu kunjuzi inaweza kuonyesha jina na kauli mbiu ya mradi.

`NB` inafuatwa na parameta `demo1,demo2` iliyopitishwa kwake.
Kumbuka : ** Kusiwe na nafasi ** kabla na baada ya koma `,` kwa `demo1,demo2` .

Kwa vigezo hapo juu, faili ya index ya saraka inayolingana ni:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jedwali La TOC La Index Ya Yaliyomo

`i18n.site` itatumia programu-jalizi `js` kwenye ghala la onyesho ili kusoma faili `doc` `.i18n/hook/after.tran/TOC.js` faharasa ya saraka inayolingana na usanidi wa violezo `TOC` ili kutoa muhtasari wa saraka `json` .

Ikiwa unatumia kiolezo `doc` , lazima uwe na programu-jalizi hii.

Ukianzisha mradi `i18n.site` kutoka kwa folda tupu, kumbuka kunakili mradi wa onyesho `.i18n` kwenye saraka yako.

Kiolezo cha `Doc` kitatoa jedwali la muhtasari wa yaliyomo kulingana na yaliyotolewa `json` .

##### Maelezo Ya Kina Ya Yaliyomo

`en/blog/TOC` Yaliyomo ni kama ifuatavyo :

```
README.md

news/README.md
  news/begin.md
```

##### Tumia Ujongezaji Kuashiria Viwango

`README.md` katika safu ya kwanza ya `en/blog/TOC` hapo juu inalingana na `i18n.site` kwenye picha hapa chini, ambayo ni jina la mradi.

Mistari miwili inayofuata ni kama inavyoonyeshwa kwenye picha ya skrini hapa chini.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` inalingana na `News` ,
`news/begin.md` inalingana na `Our Product is Online !`

Faili `TOC` zimewekwa ndani ili kuonyesha uhusiano wa daraja la muhtasari, kusaidia ujongezaji wa viwango vingi, na maoni ya mstari yanayoanza na `#` .

##### Kiwango Cha Mzazi Huandika Tu Mada, Sio Yaliyomo.

Wakati kuna viwango vingi vya ujongezaji, kiwango cha mzazi huandika kichwa pekee na si maudhui. Vinginevyo, uchapaji utaharibika.

##### Mradi README.md

Maudhui yanaweza kuandikwa katika kipengele `README.md` , kama vile `en/demo2/README.md` .

Kumbuka kuwa yaliyomo kwenye faili hii haionyeshi jedwali la muhtasari wa yaliyomo, kwa hivyo inashauriwa kupunguza urefu na kuandika utangulizi mfupi.

###### Kauli Mbiu Ya Mradi

Unaweza kuona kuwa `Deme Two` ina kaulimbiu ya mradi chini ya menyu kunjuzi na jina la mradi la : `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Hii inalingana na safu ya kwanza `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Yaliyomo baada ya koloni `:` ya kwanza ya mada ya kiwango cha kwanza cha mradi `README.md` yatazingatiwa kama kauli mbiu ya mradi.

Watumiaji kutoka Uchina, Japani na Korea, tafadhali kumbuka kuwa mnafaa kutumia koloni yenye upana wa `:` badala ya koloni yenye upana kamili.

##### Jinsi Ya Kubadili TOC Kwa POH?

`TOC` faili zinahitaji kuwekwa kwenye saraka ya lugha chanzo.

Kwa mfano, ikiwa lugha chanzi ni Kichina, basi `TOC` hapo juu ni `zh/blog/TOC` .

Ikiwa lugha chanzo imerekebishwa, unahitaji kuhamisha faili `TOC` za lugha fulani katika mradi hadi kwa lugha nyingine.

Unaweza kurejelea amri zifuatazo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Tafadhali rekebisha `en/` na `zh/` katika amri iliyo hapo juu kwa msimbo wa lugha yako.
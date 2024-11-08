# .i18n/conf.yml

Faili ya usanidi ya `i18n.site` ni `.i18n/conf.yml` na yaliyomo ni kama ifuatavyo :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Miongoni mwao, kipengee cha usanidi `upload` hadi `ext:` kinamaanisha kuwa `.md` pekee ndizo zitapakiwa wakati wa uchapishaji.

## Urambazaji Wa Juu nav

Chaguo `nav:` za usanidi, zinazolingana na menyu ya kusogeza iliyo juu ya ukurasa wa nyumbani.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Kati yao, `i18n: home` inalingana na `home: Home` kwa `en/i18n.yml` (ambapo `en` ndio lugha chanzi ya tafsiri ya mradi).

`en/i18n.yml` maudhui ni maandishi yaliyoonyeshwa kwenye orodha ya urambazaji, ambayo itatafsiriwa kulingana na `fromTo` katika usanidi, kwa mfano, kutafsiriwa kwa `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Baada ya tafsiri kukamilika, unaweza kurekebisha thamani ya tafsiri `yml` , lakini usiongeze au kufuta ufunguo wa tafsiri `yml` .

### `use: Toc` Cha Hati Moja Chenye Muhtasari

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` inamaanisha kutoa kwa kutumia kiolezo `Toc` , ambacho kinaonyesha kiolezo kimoja `Markdown` .

`TOC` ni ufupisho wa `Table of Contents` Wakati kiolezo hiki kinatolewa, muhtasari wa faili hii `Markdown` utaonyeshwa kwenye upau wa kando.

`url:` inawakilisha njia ya faili ya `Markdown` ( `/` inalingana na saraka ya mizizi `/README.md` , jina hili la faili linahitaji kiambishi cha herufi kubwa na kiambishi cha herufi ndogo).

### `use: Md` Cha Hati Moja Bila Muhtasari

Kiolezo `Md` na kiolezo `Toc` ni sawa na zote zinatumika kutoa faili `Markdown` moja. Lakini kiolezo `Md` hakionyeshi muhtasari kwenye upau wa kando.

Unaweza kurekebisha `use: Toc` katika usanidi ulio hapo juu hadi `use: Md` , endesha `i18n.site` kwenye saraka `md` tena, na kisha utembelee URL ya uhakiki wa usanidi ili kuona mabadiliko kwenye ukurasa wa nyumbani.

### `use: Blog` Violezo Vya Blogu

Kiolezo cha blogu kinaonyesha orodha ya makala (majina na muhtasari) kwa mpangilio wa muda wa uchapishaji.

[→ Bofya hapa ili kujifunza kuhusu usanidi maalum](/i18n.site/conf/blog)

### `use: Doc` Violezo Vya Hati Nyingi Za Faili

Katika faili ya usanidi:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Inaonyesha kutumia `Doc` kwa uwasilishaji wa kiolezo.

`Doc` template inasaidia kuunganisha nyingi `MarkDown` ili kutoa muhtasari wa hati kwa miradi moja au nyingi.

#### Miradi Mingi Na Faili Nyingi

Usanidi wa `.i18n/conf.yml` katika `i18n:doc` ni hali ya utoaji wa faili nyingi za miradi mingi.

Hapa, `menu: NB demo1,demo2` , inamaanisha kutumia kiolezo `NB` kutoa menyu kunjuzi.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , ambayo ni ufupisho wa `Name Breif` , inamaanisha kuwa menyu kunjuzi inaweza kuonyesha jina na kauli mbiu ya mradi.

`NB` inafuatwa na parameta `demo1,demo2` iliyopitishwa kwake.

Kumbuka : ** Kusiwe na nafasi ** kabla na baada ya koma `,` kwa `demo1,demo2` .

Faili inayolingana ya saraka ya vigezo hapo juu ni:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Mradi Mmoja Faili Nyingi

Ikiwa una mradi mmoja tu, unaweza kuusanidi kama ifuatavyo.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Mradi mmoja ulio na faili nyingi hauauni kusanidi `url` kama njia ya `/`
> Ikiwa __conf.yml → nav:__ Hakuna njia ya mizizi iliyosanidiwa, wakati wa kufikia ukurasa wa nyumbani wa tovuti, itaandikwa upya kiotomatiki kwa URL ya kwanza chini ya usanidi `nav:` .
> Muundo huu ni wa kutofautisha vyema hati za mradi, blogu na maudhui mengine kupitia saraka.
> Inapendekezwa kutumia faili moja na ukurasa mmoja kama ukurasa wa nyumbani.

> [!TIP]
> Ikiwa `url` haijaandikwa, `url` hubadilika kwa thamani ya `i18n` Sheria hii pia itatumika kwa violezo vingine.

#### Jedwali La TOC La Index Ya Yaliyomo

Ikiwa kiolezo `use: Doc` kimewashwa katika usanidi, tafadhali wezesha programu-jalizi `i18n.addon/toc` katika `.i18n/conf.yml` Mipangilio ni kama ifuatavyo :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` itasakinisha na kutekeleza programu-jalizi hii kiotomatiki, soma `TOC` faili ya faharasa ya saraka, na kutoa `json` muhtasari wa saraka.

Ikiwa ni mradi mmoja na faili nyingi, saraka ya mizizi `TOC` ni saraka inayolingana na `url:` katika saraka ya lugha ya chanzo Kwa mfano, ikiwa lugha ya chanzo ni Kichina: faili inayolingana na `url: flashduty` ni `zh/flashduty/TOC` .

Ikiwa ni miradi mingi na faili nyingi, hakuna haja ya kusanidi `url:` Saraka ya mizizi ya `TOC` ni saraka inayolingana na thamani ya `i18n` .

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

Faili `TOC` zimewekwa ndani ili kuonyesha uhusiano wa daraja la muhtasari, kusaidia ujongezaji wa viwango vingi, na maoni ya mstari yanayoanza na `# ` .

##### Kiwango Cha Mzazi Huandika Tu Mada, Sio Yaliyomo.

Wakati kuna viwango vingi vya ujongezaji, kiwango cha mzazi huandika kichwa pekee na si maudhui. Vinginevyo, uchapaji utaharibika.

##### Mradi README.md

Maudhui yanaweza kuandikwa katika kipengele `README.md` , kama vile `en/demo2/README.md` .

Kumbuka kuwa yaliyomo kwenye faili hii haionyeshi jedwali la muhtasari wa yaliyomo, kwa hivyo inashauriwa kupunguza urefu na kuandika utangulizi mfupi.

###### Kauli Mbiu Ya Mradi

Unaweza kuona kuwa `Deme Two` ina kaulimbiu ya mradi chini ya menyu kunjuzi na jina `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Hii inalingana na safu ya kwanza ya `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Yaliyomo baada ya koloni `:` ya kwanza ya mada ya kiwango cha kwanza ya mradi `README.md` yatazingatiwa kama kauli mbiu ya mradi.

Watumiaji kutoka Uchina, Japani na Korea, tafadhali kumbuka `:` mnafaa kutumia koloni yenye upana wa nusu badala ya koloni yenye upana kamili.

##### Jinsi Ya Kubadili TOC Kwa MKR?

`TOC` faili zinahitaji kuwekwa kwenye saraka ya lugha chanzo.

Kwa mfano, ikiwa lugha chanzi ni Kichina, basi `TOC` hapo juu ni `zh/blog/TOC` .

Ikiwa lugha chanzo imerekebishwa, unahitaji kuhamisha faili `TOC` za lugha fulani katika mradi hadi kwa lugha nyingine.

Unaweza kurejelea amri zifuatazo:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Tafadhali rekebisha `en/` na `zh/` katika amri iliyo hapo juu kwa msimbo wa lugha yako.

### Upakiaji Chaguo-Msingi Bila Njia Ya Usanidi

Kwa njia fulani inayofikiwa, ikiwa kiambishi awali cha njia hakijasanidiwa katika `nav:` , faili `MarkDown` inayolingana na njia hiyo itapakiwa kwa chaguo-msingi na kutolewa kwa kutumia kiolezo `Md` .

Kwa mfano, ikiwa `/test` imefikiwa na `nav:` kusanidiwa bila kiambishi awali cha njia hii, na lugha ya sasa ya kuvinjari ni Kiingereza (msimbo wa `en` ), `/en/test.md` itapakiwa kwa chaguo-msingi na itatolewa kwa kutumia kiolezo cha `Md` .

Ikiwa `/en/test.md` faili hii haipo, ukurasa `404` chaguo-msingi utaonyeshwa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
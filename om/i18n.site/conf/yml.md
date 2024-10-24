# .i18n/conf.yml

Faayilli qindeessaa `i18n.site` `.i18n/conf.yml` yoo ta'u qabiyyeen isaas akka armaan gadiitti :

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

Isaan keessaa wanti qindeessaa `upload` hanga `ext:` jechuun yeroo maxxansu `.md` qofatu olkaa'ama jechuudha.

## Gubbaa Navigeeshinii nav

`nav:` filannoowwan qindeessaa, sajoo navigeeshinii gubbaa fuula jalqabaa wajjin walsimu.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Isaan keessaa `i18n: home` `en/i18n.yml` keessaa `home: Home` waliin walsima (bakka `en` afaan madda hiikkaa pirojektichaati).

Qabiyyeen `en/i18n.yml` barruu sajoo navigeeshinii keessatti agarsiifamu yoo ta'u, kunis akkaataa `fromTo` qindeessaa keessatti ni hiikama, fakkeenyaaf, gara `zh/i18n.yml` hiikama.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Erga hiikni xumuramee booda, gatii hiikkaa `yml` fooyyessuu dandeessa, garuu furtuu hiikkaa `yml` hin dabalin ykn hin haqin.

### `use: Toc` , Unkaa Faayilii Tokkoo Kan Sarara Waliin

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` jechuun unkaa `Toc` fayyadamuun agarsiisuu jechuudha, kunis unkaa `Markdown` tokko agarsiisaa jira.

`TOC` gabaabduu `Table of Contents` Yeroo unkaan kun agarsiifamu, sararri faayilii `Markdown` kanaa barruu cinaa keessatti ni mul'ata.

`url:` daandii faayilii `Markdown` bakka bu'a ( `/` galmee hundee `/README.md` wajjin walsima, maqaan faayilii kun durtii qubee guddaa fi xumura qubee xiqqaa barbaada).

### `use: Md` , Unkaa Faayilii Tokkoo Kan Sarara Hin Qabne

Unkaan `Md` fi unkaan `Toc` walfakkaataa fi lamaan isaanii faayilii `Markdown` tokko agarsiisuuf fayyadamu. Garuu unkaan `Md` sarara cinaa keessatti hin agarsiisu.

Qindaa'ina armaan olii keessatti `use: Toc` gara `use: Md` tti fooyyessuu dandeessa, galmee `md` keessatti `i18n.site` irra deebitee hojjechuu dandeessa, kana booda jijjiirama fuula jalqabaa irratti ilaaluuf URL durtii guddinaa daawwachuu dandeessa.

### `use: Blog` Unkaalee Bilbilaa

Unkaan biloogii tarree barruulee (mata dureewwanii fi abstracts) tartiiba yeroo maxxansaa agarsiisa.

[→ Waa'ee qindeessaa addaa baruuf as tuqi](/i18n.site/conf/blog)

### `use: Doc` , Unkaa Galmee Faayilii Hedduu

Faayilii qindeessaa keessatti:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Unkaa agarsiisuuf `Doc` fayyadamuu agarsiisa.

unkaan `Doc` piroojektoota tokkoof ykn hedduudhaaf sarara galmee uumuuf `MarkDown` dachaa walitti makuu deeggara.

#### Pirojektoota Hedduu Fi Faayiloota Hedduu

Qindaa'inni `.i18n/conf.yml` `i18n:doc` keessatti haalata agarsiisa faayilii hedduu piroojektii hedduu ti.

Asitti, `menu: NB demo1,demo2` , jechuun unkaa `NB` fayyadamuun sajoo tarree gadi-bu'aa agarsiisuu jechuudha.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , kunis gabaabduu `Name Breif` yoo ta'u, menu gadi bu'aa maqaa fi dhaadannoo pirojektichaa agarsiisuu danda'a jechuudha.

`NB` hordofee parameetara `demo1,demo2` gara isaatti darba.

: ** `demo1,demo2` keessatti komaa `,` duraa fi booda bakki ** jiraachuu hin qabu .

Qabduu armaan oliitiif, faayilii indeeksii galmee walgitu:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Pirojektii Tokko Faayiloota Hedduu

Yoo pirojektii tokko qofa qabaatte akka armaan gadiitti qindeessuu dandeessa.

```
  - i18n: xxx
    use: Doc
```

##### Yeroo url Duwwaa Ta'u, Durtii Gatii i18n Tti Ta'A

Yoo `url` hin barreeffamne, `url` durtii gatii `i18n` Seerri kun unkaalee birootiifis hojiirra oola.

Malli barreeffamaa armaan olii `url: xxx` wajjin walqixa , faayilii isaa walgitu `en/xxx/TOC` dha .

#### Indeeksii Gabatee Qabiyyee TOC

`i18n.site` faayilii indeeksii galmee `TOC` qindeessaa unkaa `doc` wajjin walsimu dubbisuuf, sarara galmee `json` uumuuf, kuusaa agarsiisaa keessatti `js` ifteessaa `.i18n/hook/after.tran/TOC.js` raawwata.

Yoo unkaa `doc` fayyadamte, ifteessaa kana qabaachuu qabda.

Yoo piroojektii `i18n.site` galmee duwwaa irraa jalqabde, piroojektii agarsiisaa `.i18n` gara galmee keetii waraabuu yaadadhu.

Unkaan `Doc` ibsa gabatee qabiyyee `json` uumame irratti hundaa'uun ni agarsiisa.

##### Ibsa Qabiyyee Bal’aa

`en/blog/TOC` isaa akka armaan gadiitti :

```
README.md

news/README.md
  news/begin.md
```

##### Sadarkaalee Agarsiisuuf Indentation Fayyadami

`README.md` tarree jalqabaa `en/blog/TOC` olitti argamu suuraa armaan gadii keessatti `i18n.site` waliin walsima, kunis maqaa pirojektii ti.

Sararoonni lamaan itti aanan akka suuraa iskiriinii armaan gadii irratti mul'atutti.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` 1 , `News` waliin walsima.
`news/begin.md` `Our Product is Online !` wajjin walsima

Faayiloonni `TOC` hariiroo sadarkaa sarara agarsiisuuf, indentation sadarkaa hedduu deeggaruuf, fi yaada sararaa `# ` irraa jalqabuuf indented ta'u.

##### Sadarkaan Warraa Mata Duree Qofa Barreessa Malee Qabiyyee Miti.

Yeroo sadarkaan indentation dachaa ta'e, sadarkaan warraa mata duree qofa barreessa malee qabiyyee miti. Yoo kana hin taane, taayipogiraafiin ni jeeqama.

##### Pirojektii README.md

Qabiyyeen qabxii `README.md` keessatti barreeffamuu danda'a , kan akka `en/demo2/README.md` .

Qabiyyeen faayilii kanaa ibsa gabatee qabiyyee akka hin agarsiifne hubadhu, kanaaf dheerina daangeessuu fi seensa gabaabaa barreessuun ni gorfama.

###### Dhaadannoo Pirojektii

`Deme Two` sarara piroojektii isaa menu gadi bu'aa fi maqaa `Your Project slogan` sarara kataloogii jalatti akka qabu arguu dandeessa :

![](https://p.3ti.site/1721276842.avif)

Kun tarree jalqabaa `en/demo2/README.md` wajjin walsima :

```
# Demo Two : Your Project slogan
```

Qabiyyeen mata duree sadarkaa tokkoffaa pirojektii `README.md` kan tarree jalqabaa `:` booda jiru akka dhaadannoo pirojektiitti ni ilaalama.

Fayyadamtoonni Chaayinaa, Jaappaanii fi Kooriyaa irraa dhufan, maaloo hubadhaa, bal'ina guutuu osoo hin taane qubee walakkaa bal'ina `:` fayyadamuu qabdu.

##### Akkamitti TOC Jumlaan Sochoosuu Dandeenya?

Faayiloonni `TOC` galmee afaan madda keessa kaa'amuu qabu.

Fakkeenyaaf, afaan madda Chaayinaa yoo ta’e, `TOC` olitti `zh/blog/TOC` ta’a.

Yoo afaan madda fooyya'e, faayilii `TOC` afaan murtaa'e piroojektii keessa jiru gara afaan biraatti tuuta sochoosuu qabda.

Ajajoota armaan gadii ilaaluu dandeessa:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mee ajaja armaan olii keessatti `en/` fi `zh/` gara koodii afaan keetii fooyyessaa.

### Fe'iinsa Durtii Daandii Qindeessaa Malee

Daandii murtaa'aa dhaqqabamaa jiruuf, yoo durtiin daandii `nav:` keessatti hin qindaa'in, faayilii `MarkDown` daandii wajjin walsimu durtii fe'amee unkaa `Md` fayyadamuun ni agarsiifama.

Fakkeenyaaf, yoo `/test` dhaqqabame, fi `nav:` durtii daandii kanaa malee qindaa'e, fi afaan daawwannaa ammaa Ingiliffa (koodii `en` ), `/en/test.md` durtii fe'amee unkaa `Md` fayyadamuun ni agarsiifama.

Yoo `/en/test.md` faayilii kun hin jirre, fuula durtii `404` ni mul'ata.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
# .i18n/konf.yml

Faayilli qindeessaa `.i18n/conf.yml` dha `i18n.site`

Sajoo `ignore:` fi `i18n:` kan [`i18`](/i18) irraa kan hafe, faayilii qindeessaa akka armaan gadiitti:

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

Isaan keessaa wanti `ext:` qindeessaa `upload` jedhu yeroo maxxansu `.md` qofatu olkaa'ama jechuudha.

## Gubbaa Navigeeshinii nav

`nav:` qindeessaa, kan sajoo navigeeshinii fuula jalqabaa gubbaa jiruun walsimu.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Isaan keessaa, `i18n: home`中`home: Home` `en/i18n.yml` walsima.

Afaanota hedduutti ni hiikama, kan akka `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Hiikkaan `yml` xumuramee booda, gatii `yml`

### `use: Toc`

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` jechuun `Toc` rendering fayyadamuu jechuudha, kunis `Markdown` unkaa tokko agarsiisaa jira.

`TOC` `Table of Contents` `Markdown`

`url:` daandii faayilii `Markdown` ( `/` galmee hundee wajjin walsima `/README.md` , maqaan faayilii kun durtii qubee guddaa fi xumura qubee xiqqaa barbaada).

### `use: Md`

`Md` Unkaan `Toc` wajjin tokko, lamaan isaanii iyyuu faayilii `Markdown` tokko agarsiisuuf fayyadamu. Haa ta'u malee `Md` unkaan sarara cinaa keessatti hin agarsiisu.

Qindeessituu armaan olii keessatti gara `use: Md` , fiigi `i18n.site` galmee `md` keessatti ammas, kana booda jijjiirama fuula jalqabaa irratti ilaaluuf URL durtii guddinaa daawwachuu `use: Toc` .

### Fe'iinsa Durtii Daandii Qindeessaa Malee

Yoo durtiin daandii daandii murtaa'aa dhaqqabamaa jiruu `nav:` faayilii `MarkDown` daandii wajjin walsimu durtii fe'amee unkaa `Md` fayyadamuun ni agarsiifama.

`en` `/en/test.md` `nav:` `/test` `Md`

Yoo `/en/test.md` faayilii kun hin jirre, durtii `404` fuula ni mul'ata.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Unkaa Faayilii Hedduu

Faayilii qindeessaa keessatti:

```
  - i18n: blog
    use: Doc
```

Unkaa agarsiisuuf `Doc`

`Doc` pirojektoota tokkoof ykn hedduudhaaf yaada galmee uumuuf `MarkDown` hedduu walitti makuu deeggara.

#### Pirojektii Tokko (Faayilota Hedduu) .

Kan armaan olii keessatti haala pirojektii tokkoo kan `Doc` `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Yeroo url Duwwaa Ta'u, Durtii Gatii i18n Tti Ta'A

`url` `url` `i18n`

Malli barreeffamaa armaan olii `url: blog` faayilii isaa walgitu `en/blog/TOC` dha.

#### Pirojektoota Dachaa Ta’An

`.i18n/conf.yml` Qindaa'inni `i18n:doc` keessa jiru haalata pirojektii hedduudha.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Asitti, `menu: NB demo1,demo2` jechuun `NB` fayyadamuun sajoo tarree gadi-bu'aa agarsiisuu jechuudha.

`NB` `Name Breif`

`NB` `demo1,demo2`
Hubadhaa `demo1,demo2` bakki ** komaandii duraa fi boodaa `,` keessa jiraachuu hin qabu : **

Qabduu armaan oliitiif, faayilii indeeksii galmee walgitu:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeeksii Gabatee Qabiyyee TOC

`i18n.site` Faayilii indeeksii galmee `doc` qindeessaa unkaa wajjin walsimu `TOC` dubbisuuf `js` ifteessaa `.i18n/hook/after.tran/TOC.js` `json` agarsiisaa keessatti raawwata.

Yoo unkaa `doc` fayyadamte, plug-in kana qabaachuu qabda.

Yoo piroojektii `i18n.site` galmee duwwaa irraa jalqabde, `.i18n` pirojektii agarsiisaa keessa jiru gara galmee keetti waraabuu hin dagatin.

`Doc` gabatee qabiyyee `json` uumame irratti hundaa'uun ni agarsiisa.

##### Ibsa Qabiyyee Bal’aa

Qabiyyeen : akka armaan gadiitti `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Sadarkaalee Agarsiisuuf Indentation Fayyadami

Gubbaa `en/blog/TOC` Sarara jalqabaa keessatti `README.md` `i18n.site` fakkii armaan gadii irratti argamu waliin walsima, kunis maqaa pirojektii ti.

Sararoonni lamaan itti aanan akka suuraa iskiriinii armaan gadii irratti mul'atutti.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

kan jedhu `News` , wajjin wal simu `news/README.md`
`Our Product is Online !` waliin wal-sima `news/begin.md`

`TOC` Faayilli hariiroo sadarkaa sarara agarsiisuuf kan galfamee fi indentation sadarkaa hedduu deeggara.

##### Sadarkaan Warraa Mata Duree Qofa Barreessa Malee Qabiyyee Miti.

Yeroo sadarkaan indentation dachaa ta'e, sadarkaan warraa mata duree qofa barreessa malee qabiyyee miti. Yoo kana hin taane, taayipogiraafiin ni jeeqama.

##### Pirojektii README.md 

`README.md` pirojektichaa, fakkeenyaaf, qabiyyee `en/demo2/README.md` keessatti barreessuu dandeessa.

Qabiyyeen faayilii kanaa ibsa gabatee qabiyyee akka hin agarsiifne hubadhu, kanaaf dheerina daangeessuu fi seensa gabaabaa barreessuun ni gorfama.

###### Dhaadannoo Pirojektii

Akkuma `Your Project slogan` : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: sarara jalqabaa wajjin wal simu `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` Qabiyyeen mata duree sadarkaa tokkoffaa keessatti qubee jalqabaa `:` booda jiru akka dhaadannoo pirojektiitti ilaalama.

Fayyadamtoonni Chaayinaa, Jaappaan fi Kooriyaa irraa dhufan, maaloo hubadhaa, bakka garaachaa bal'ina guutuu fayyadamuu qabdu `:`

##### Akkamitti TOC Jumlaan Sochoosuu Dandeenya?

`TOC` Faayilli galmee afaan madda keessa kaa'amuu qaba.

Fakkeenyaaf, afaan madda yoo ta'e, `TOC` olitti `zh/blog/TOC` .

Yoo afaan madda fooyya'e, `TOC` afaan murtaa'e piroojektii keessatti gara afaan biraatti sochoosuu tuuta si barbaachisa.

Ajajoota armaan gadii ilaaluu dandeessa:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mee ajaja armaan olii keessatti `en/` fi `zh/` gara koodii afaan keessaniitti fooyyessa.



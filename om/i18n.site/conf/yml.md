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

filannoowwan qindeessaa `nav:` , kan sajoo navigeeshinii gubbaa fuula jalqabaa irratti argamuun walsimu.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Isaan keessaa `i18n: home` `en/i18n.yml` keessaa `home: Home` waliin walsima (bakka `en` afaan madda hiikkaa pirojektichaati).

Qabiyyeen `en/i18n.yml` barruu sajoo navigeeshinii keessatti agarsiifamu yoo ta'u, kunis akkaataa `fromTo` qindeessaa keessatti ni hiikama, fakkeenyaaf, gara `zh/i18n.yml` hiikama.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Erga hiikni xumuramee booda, gatii hiikkaa `yml` fooyyessuu dandeessa, garuu furtuu hiikkaa `yml` hin dabalin ykn hin haqin.

### `use: Toc` Galmee Tokkoo Kan Sarara Waliin

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` jechuun unkaa `Toc` fayyadamuun agarsiisuu jechuudha, kunis unkaa `Markdown` tokko agarsiisaa jira.

`TOC` gabaabduu `Table of Contents` Yeroo unkaan kun agarsiifamu, sararri faayilii `Markdown` kanaa barruu cinaa keessatti ni mul'ata.

`url:` daandii faayilii `Markdown` bakka bu'a ( `/` galmee hundee `/README.md` wajjin walsima, maqaan faayilii kun durtii qubee guddaa fi xumura qubee xiqqaa barbaada).

### `use: Md` Galmee Tokkoo Kan Sarara Hin Qabne

Unkaan `Md` fi unkaan `Toc` walfakkaataa fi lamaan isaanii faayilii `Markdown` tokko agarsiisuuf fayyadamu. Garuu unkaan `Md` sarara cinaa keessatti hin agarsiisu.

Qindaa'ina armaan olii keessatti `use: Toc` gara `use: Md` tti fooyyessuu dandeessa, galmee `md` keessatti `i18n.site` irra deebitee hojjechuu dandeessa, kana booda jijjiirama fuula jalqabaa irratti ilaaluuf URL durtii guddinaa daawwachuu dandeessa.

### `use: Blog` Unkaalee Bilbilaa

Unkaan biloogii tarree barruulee (mata dureewwanii fi abstracts) tartiiba yeroo maxxansaa agarsiisa.

[→ Waa'ee qindeessaa addaa baruuf as tuqi](/i18n.site/conf/blog)

### 0Unkaalee Galmee Faayilii `use: Doc`

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

Faayilli indeeksii galmee walgitu qajoojiiwwan armaan olii:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Pirojektii Tokko Faayiloota Hedduu

Yoo pirojektii tokko qofa qabaatte akka armaan gadiitti qindeessuu dandeessa.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Pirojektiin tokko faayilii hedduu qabu `url` akka daandii hundee `/` qindeessuu hin deeggaru
> Yoo __conf.yml → nav:__ Daandiin hundee hin qindaa'in, yeroo fuula jalqabaa marsariitichaa seentu, ofumaan gara URL jalqabaa qindeessaa `nav:` jalatti irra deebi'amee barreeffama.
> Dizaayiniin kun sanadoota pirojektii, biloogii fi qabiyyee biroo karaa daayirektarootaatiin haala gaariin adda baasuuf kan qophaa’edha.
> Faayilii tokkoo fi fuula tokko akka fuula jalqabaatti fayyadamuun ni gorfama.

> [!TIP]
> Yoo `url` hin barreeffamne, `url` durtii gatii `i18n` Seerri kun unkaalee birootiifis hojiirra oola.

#### Indeeksii Gabatee Qabiyyee TOC

Yoo unkaan `use: Doc` qindeessaa keessatti dandeessifame, maaloo ifteessaa `i18n.addon/toc` `.i18n/conf.yml` keessatti dandeessisi.Qindeessi akka armaan gadiitti :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ofumaan ifteessaa kana ni fe'a, ni raawwata, `TOC` faayilii indeeksii galmee ni dubbisa, fi `json` sarara galmee ni uuma.

Yoo pirojektii tokkicha faayilii hedduu qabu ta'e, galmeen hundee `TOC` galmee `url:` galmee afaan madda keessaa wajjin walsimu Fakkeenyaaf, yoo afaan madda Chaayinaa ta'e: faayilii `url: flashduty` wajjin walsimu `zh/flashduty/TOC` dha.

Yoo pirojektoota hedduu fi faayilii hedduu ta'e, `url:` qindeessuun hin barbaachisu.Galmee hundee `TOC` galmee gatii `i18n` wajjin walsimudha.

##### Ibsa Qabiyyee Bal’aa

`en/blog/TOC` isaa akka armaan gadiitti :

```
README.md

news/README.md
  news/begin.md
```

##### Sadarkaalee Agarsiisuuf Indentation Fayyadami

`README.md` tarree jalqabaa `en/blog/TOC` armaan olii keessatti argamu `i18n.site` suuraa armaan gadii keessatti argamu waliin walsima, kunis maqaa pirojektii ti.

Sararoonni lamaan itti aanan akka suuraa iskiriinii armaan gadii irratti mul'atutti.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` , 10 waliin walsima.
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

Fakkeenyaaf, yoo `/test` dhaqqabamee fi `nav:` durtii daandii kanaa malee qindaa'e, fi afaan daawwannaa ammaa Ingiliffa (koodii `en` ), `/en/test.md` durtii fe'amee unkaa `Md` fayyadamuun ni agarsiifama.

Yoo `/en/test.md` faayilii kun hin jirre, fuula durtii `404` ni mul'ata.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
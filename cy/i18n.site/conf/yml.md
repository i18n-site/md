# .i18n/conf.yml

Y ffeil ffurfweddu yw `.i18n/conf.yml` `i18n.site`

Ac eithrio gosodiadau `ignore:` a `i18n:` [`i18`](/i18) mae'r ffeil ffurfweddu fel a ganlyn:

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

Yn eu plith, mae `ext:` eitem ffurfweddu o `upload` yn golygu mai dim ond `.md` fydd yn cael ei uwchlwytho wrth gyhoeddi.

## Top Navigation nav

`nav:` opsiynau ffurfweddu, sy'n cyfateb i'r ddewislen llywio ar frig yr hafan.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Yn `home: Home` plith, `en/i18n.yml` `i18n: home`

yn cael ei gyfieithu i ieithoedd lluosog, megis `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ar ôl cwblhau'r cyfieithiad, gallwch addasu gwerth `yml` yn y cyfieithiad, ond peidiwch ag ychwanegu neu ddileu allwedd cyfieithu `yml` .

### `use: Toc` , Templed Ffeil Sengl (Gydag Amlinelliad)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` yn golygu defnyddio rendrad `Toc` , sef rendrad `Markdown` templed sengl.

`TOC` yw'r talfyriad o `Table of Contents` `Markdown`

`url:` yn cynrychioli llwybr ffeil `Markdown` ( `/` yn cyfateb i'r cyfeiriadur gwraidd `/README.md` , mae angen rhagddodiad priflythrennau ac ôl-ddodiad llythrennau bach).

### `use: Md` , Templed Ffeil Sengl (Dim Amlinelliad)

`Md` Mae'r templed yr un peth â `Toc` , defnyddir y ddau i wneud un ffeil `Markdown` . Fodd bynnag `Md` nid yw'r templed yn dangos yr amlinelliad yn y bar ochr.

Gallwch addasu `use: Toc` yn y ffurfweddiad uchod i `use: Md` , rhedeg `i18n.site` yn y cyfeiriadur `md` eto, ac yna ymweld â'r URL rhagolwg datblygiad i weld y newidiadau ar yr hafan.

### Llwytho Rhagosodedig Heb Lwybr Ffurfweddu

Os nad yw rhagddodiad llwybr llwybr penodol sy'n cael ei gyrchu wedi'i ffurfweddu yn `nav:` bydd y ffeil `MarkDown` sy'n cyfateb i'r llwybr yn cael ei llwytho yn ddiofyn a'i rendro gan ddefnyddio `Md` template.

Er enghraifft, os ymwelwch â `/test` , ac mae `nav:` wedi'i ffurfweddu heb y llwybr hwn, ac iaith y dudalen yw Saesneg (cod `en` ), bydd y templed yn cael ei lwytho `/en/test.md` a'i rendro gan ddefnyddio `Md` yn ddiofyn.

Os nad `/en/test.md` ffeil hon yn bodoli, bydd y dudalen `404` ragosodedig yn cael ei dangos.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Templed Aml-Ffeil

Yn y ffeil ffurfweddu:

```
  - i18n: blog
    use: Doc
```

Yn dangos defnyddio `Doc` ar gyfer rendrad templed.

`Doc` Templed yn cefnogi integreiddio `MarkDown` lluosog i gynhyrchu amlinelliadau dogfen ar gyfer prosiectau sengl neu lluosog.

#### Prosiect Sengl (Ffeiliau Lluosog)

`blog` yn yr uchod yw'r modd prosiect sengl o `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Pan Fydd url Yn Wag, Mae'n Rhagosodedig I Werth i18n

Os nad ydych yn ysgrifennu `url` , `url` i'r gwerth o `i18n` .

Mae'r dull ysgrifennu uchod yn cyfateb i gael `url: blog` a'i ffeil gyfatebol yw `en/blog/TOC` .

#### Prosiectau Lluosog

`.i18n/conf.yml` `i18n:doc`

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Yma, mae `menu: NB demo1,demo2` yn golygu defnyddio `NB` i ddangos y gwymplen.

`NB` , yw'r talfyriad o `Name Breif` , sy'n nodi y gall y gwymplen ddangos enw a slogan y prosiect.

`NB` yn cael ei ddilyn gan y paramedr `demo1,demo2` pasio iddo.
Sylwch : ** Ni ddylai fod unrhyw ** cyn ac ar ôl y coma `,` yn `demo1,demo2`

Ar gyfer y paramedrau uchod, y ffeil mynegai cyfeiriadur cyfatebol yw:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Mynegai Tabl Cynnwys TOC

`i18n.site` yn gweithredu'r `js` plugin `.i18n/hook/after.tran/TOC.js` yn y warws demo i ddarllen y ffeil mynegai cyfeiriadur `doc` sy'n cyfateb i ffurfweddiad y templed `TOC` i gynhyrchu `json` amlinelliad y cyfeiriadur.

Os ydych chi'n defnyddio templed `doc` , rhaid i chi gael yr ategyn hwn.

Os ydych yn cychwyn y prosiect `i18n.site` o ffolder wag, cofiwch gopïo'r `.i18n` yn y prosiect demo i'ch cyfeiriadur.

`Doc` y templed yn rhoi amlinelliad o'r tabl cynnwys yn seiliedig ar y `json` a gynhyrchwyd

##### Esboniad Manwl O'r Cynnwys

Mae'r cynnwys fel : ganlyn `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Defnyddio Mewnoliad I Nodi Lefelau

Uchod `en/blog/TOC` `README.md` yn y llinell gyntaf yn cyfateb i'r `i18n.site` yn y llun isod, sef enw'r prosiect.

Mae'r ddwy linell nesaf fel y dangosir yn y screenshot isod.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

yn cyfateb i `News` `news/README.md`
yn cyfateb i `Our Product is Online !` `news/begin.md`

`TOC`

##### Mae'r Lefel Rhiant Yn Ysgrifennu'r Teitl Yn Unig, Nid Y Cynnwys.

Pan fydd lefelau mewnoliad lluosog, lefel y rhiant yn unig sy'n ysgrifennu'r teitl ac nid y cynnwys. Fel arall, bydd teipograffeg yn cael ei ddrysu.

##### Prosiect README.md 

`README.md` o'r prosiect, er enghraifft, gallwch ysgrifennu cynnwys yn `en/demo2/README.md` .

Sylwch nad yw cynnwys y ffeil hon yn dangos amlinelliad tabl cynnwys, felly argymhellir cyfyngu'r hyd ac ysgrifennu cyflwyniad byr.

###### Slogan Y Prosiect

`Your Project slogan` y gwelwch : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: yn cyfateb i'r llinell gyntaf `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Prosiect `README.md` Bydd y cynnwys ar ôl y colon cyntaf `:` yn y teitl lefel gyntaf yn cael ei ystyried fel slogan y prosiect.

Defnyddwyr o Tsieina, Japan a Korea, sylwch fod yn rhaid i chi ddefnyddio colon hanner lled yn lle colon lled llawn `:`

##### Sut I Symud TOC Mewn Swmp?

`TOC` Mae angen gosod y ffeil yn y cyfeiriadur iaith ffynhonnell

Er enghraifft, os `TOC` Tsieinëeg yw'r iaith ffynhonnell, yna `zh/blog/TOC` .

Os yw'r iaith ffynhonnell yn cael ei haddasu, mae angen i chi symud `TOC` mewn un iaith benodol yn y prosiect i iaith arall.

Gallwch gyfeirio at y gorchmynion canlynol:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Addaswch `en/` a `zh/` yn y gorchymyn uchod i'ch cod iaith.



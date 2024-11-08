# .i18n/conf.yml

Y ffeil ffurfweddu ar gyfer `i18n.site` yw `.i18n/conf.yml` ac mae'r cynnwys fel a ganlyn :

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

Yn eu plith, mae eitem ffurfweddu `upload` i `ext:` yn golygu mai dim ond `.md` fydd yn cael eu huwchlwytho wrth gyhoeddi.

## Top Navigation nav

`nav:` opsiwn cyfluniad, sy'n cyfateb i'r ddewislen llywio ar frig yr hafan.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Yn eu plith, mae `i18n: home` yn cyfateb i `home: Home` mewn `en/i18n.yml` (lle mae `en` yn iaith ffynhonnell cyfieithiad y prosiect).

`en/i18n.yml` cynnwys yw'r testun a ddangosir yn y ddewislen llywio, a fydd yn cael ei gyfieithu yn ôl `fromTo` yn y ffurfweddiad, er enghraifft, wedi'i gyfieithu i `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ar ôl i'r cyfieithiad gael ei gwblhau, gallwch addasu gwerth cyfieithiad `yml` , ond peidiwch ag ychwanegu neu ddileu allwedd cyfieithu `yml` .

### 0 Templed Dogfen `use: Toc` Gydag Amlinelliad

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

Mae `use: Toc` yn golygu rendrad gan ddefnyddio templed `Toc` , sef rendrad un templed `Markdown` .

`TOC` yw'r talfyriad o `Table of Contents` Pan fydd y templed hwn wedi'i rendro, bydd amlinelliad y ffeil `Markdown` hwn yn cael ei arddangos yn y bar ochr.

Mae `url:` yn cynrychioli llwybr ffeil `Markdown` ( `/` yn cyfateb i'r cyfeiriadur gwraidd `/README.md` , mae angen rhagddodiad priflythrennau ac ôl-ddodiad llythrennau bach ar gyfer enw'r ffeil hwn).

### `use: Md` Templed Dogfen Sengl Heb Amlinelliad

Mae'r templed `Md` a'r templed `Toc` yr un peth a defnyddir y ddau i wneud un ffeil `Markdown` . Ond nid yw'r templed `Md` yn dangos yr amlinelliad yn y bar ochr.

Gallwch addasu `use: Toc` yn y ffurfweddiad uchod i `use: Md` , rhedeg `i18n.site` yn y cyfeiriadur `md` eto, ac yna ymweld â'r URL rhagolwg datblygiad i weld y newidiadau ar yr hafan.

### `use: Blog` Templedi Blog

Mae templed y blog yn dangos rhestr o erthyglau (teitlau a chrynodebau) yn nhrefn amser cyhoeddi.

[→ Cliciwch yma i ddysgu am y ffurfweddiad penodol](/i18n.site/conf/blog)

### 0 Templedi Dogfen Ffeil `use: Doc`

Yn y ffeil ffurfweddu:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Yn dangos defnyddio `Doc` ar gyfer rendrad templed.

Mae templed `Doc` yn cefnogi integreiddio lluosog `MarkDown` i gynhyrchu amlinelliadau dogfen ar gyfer prosiectau sengl neu luosog.

#### Prosiectau Lluosog a Ffeiliau Lluosog

Mae ffurfweddiad `.i18n/conf.yml` mewn `i18n:doc` yn fodd rendro aml-brosiect aml-ffeil.

Yma, `menu: NB demo1,demo2` , yn golygu defnyddio'r templed `NB` i wneud y gwymplen.

<img src="//p.3ti.site/1721275191.avif" width="320px">

Mae `NB` , sef y talfyriad o `Name Breif` , yn golygu y gall y gwymplen ddangos enw a slogan y prosiect.

Dilynir `NB` gan y paramedr `demo1,demo2` a drosglwyddir iddo.

Sylwch : ** Ni ddylai fod unrhyw fylchau ** cyn ac ar ôl y coma `,` mewn `demo1,demo2` .

Y ffeil mynegai cyfeiriadur cyfatebol ar gyfer y paramedrau uchod yw:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ffeiliau Lluosog Prosiect Sengl

Os mai dim ond un prosiect sydd gennych, gallwch ei ffurfweddu fel a ganlyn.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Nid yw prosiect sengl gyda ffeiliau lluosog yn cefnogi ffurfweddu `url` fel llwybr gwraidd `/`
> __conf.yml nad oes llwybr nav:__ wedi'i ffurfweddu, wrth gyrchu hafan y wefan, bydd yn cael ei ailysgrifennu'n awtomatig i'r URL cyntaf o dan y ffurfweddiad `nav:` .
> Bwriad y dyluniad hwn yw gwahaniaethu'n well rhwng dogfennau prosiect, blogiau a chynnwys arall trwy gyfeiriaduron.
> Argymhellir defnyddio un ffeil ac un dudalen fel tudalen gartref.

> [!TIP]
> Os nad yw `url` wedi'i ysgrifennu, mae `url` yn rhagosod i werth `i18n` Mae'r rheol hon hefyd yn dod i rym ar gyfer templedi eraill.

#### Mynegai Tabl Cynnwys TOC

Os yw templed `use: Doc` wedi'i alluogi yn y ffurfweddiad, galluogwch plug-in `i18n.addon/toc` yn `.i18n/conf.yml` Mae'r ffurfweddiad fel a ganlyn :

```yml
addon:
  - i18n.addon/toc
```

Bydd `i18n.site` yn gosod a gweithredu'r ategyn hwn yn awtomatig, yn darllen `TOC` y ffeil mynegai cyfeiriadur, ac yn cynhyrchu `json` amlinelliad y cyfeiriadur.

Os yw'n brosiect sengl gyda ffeiliau lluosog, y cyfeiriadur gwraidd `TOC` yw'r cyfeiriadur sy'n cyfateb i `url:` yn y cyfeiriadur iaith ffynhonnell Er enghraifft, os yw'r iaith ffynhonnell yn Tsieineaidd: y ffeil sy'n cyfateb i `url: flashduty` yw `zh/flashduty/TOC` .

Os yw'n brosiectau lluosog a ffeiliau lluosog, nid oes angen ffurfweddu `url:` Cyfeiriadur gwraidd `TOC` yw'r cyfeiriadur sy'n cyfateb i werth `i18n` .

##### Esboniad Manwl O'r Cynnwys

`en/blog/TOC` Mae'r cynnwys fel a ganlyn :

```
README.md

news/README.md
  news/begin.md
```

##### Defnyddio Mewnoliad I Nodi Lefelau

Mae'r `README.md` yn y rhes gyntaf o `en/blog/TOC` uchod yn cyfateb i `i18n.site` yn y llun isod, sef enw'r prosiect.

Mae'r ddwy linell nesaf fel y dangosir yn y screenshot isod.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

Mae `news/README.md` yn cyfateb i `News` ,
Mae `news/begin.md` yn cyfateb i `Our Product is Online !`

Mae ffeiliau `TOC` wedi'u mewnoli i nodi perthynas hierarchaidd yr amlinelliad, cefnogi mewnoliad aml-lefel, a sylwadau llinell sy'n dechrau ag `# ` .

##### Mae'r Lefel Rhiant Yn Ysgrifennu'r Teitl Yn Unig, Nid Y Cynnwys.

Pan fydd lefelau mewnoliad lluosog, lefel y rhiant yn unig sy'n ysgrifennu'r teitl ac nid y cynnwys. Fel arall, bydd teipograffeg yn cael ei ddrysu.

##### Prosiect README.md

Gellir ysgrifennu cynnwys yn eitem `README.md` , megis `en/demo2/README.md` .

Sylwch nad yw cynnwys y ffeil hon yn dangos amlinelliad tabl cynnwys, felly argymhellir cyfyngu'r hyd ac ysgrifennu cyflwyniad byr.

###### Slogan Y Prosiect

Gallwch weld bod gan `Deme Two` ei linell tag prosiect o dan y gwymplen ac amlinelliad catalog `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Mae hyn yn cyfateb i'r rhes gyntaf o `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Bydd y cynnwys ar ôl colon cyntaf `:` teitl lefel gyntaf prosiect `README.md` yn cael ei ystyried yn slogan y prosiect.

Defnyddwyr o Tsieina, Japan a Korea, nodwch y dylech ddefnyddio colon hanner lled `:` yn lle colon lled llawn.

##### Sut I Symud TOC Mewn Swmp?

Mae angen gosod `TOC` ffeil yng nghyfeirlyfr yr iaith ffynhonnell.

Er enghraifft, os mai Tsieinëeg yw'r iaith ffynhonnell, yna `TOC` uchod yw `zh/blog/TOC` .

Os yw'r iaith ffynhonnell yn cael ei haddasu, mae angen i chi symud y `TOC` ffeil o iaith benodol yn y prosiect i iaith arall mewn swp.

Gallwch gyfeirio at y gorchmynion canlynol:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Addaswch `en/` ac `zh/` yn y gorchymyn uchod i'ch cod iaith.

### Llwytho Rhagosodedig Heb Lwybr Ffurfweddu

Er mwyn cyrchu llwybr penodol, os nad yw rhagddodiad y llwybr wedi'i ffurfweddu yn `nav:` , bydd y ffeil `MarkDown` sy'n cyfateb i'r llwybr yn cael ei llwytho yn ddiofyn a'i rendro gan ddefnyddio'r templed `Md` .

Er enghraifft, os cyrchir `/test` ac mae `nav:` wedi'i ffurfweddu heb ragddodiad y llwybr hwn, a'r iaith bori gyfredol yw Saesneg (cod `en` ), bydd `/en/test.md` yn cael ei lwytho yn ddiofyn a'i rendro gan ddefnyddio templed `Md` .

Os nad yw `/en/test.md` y ffeil hon yn bodoli, bydd y dudalen `404` rhagosodedig yn cael ei harddangos.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
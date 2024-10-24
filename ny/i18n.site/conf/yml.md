# .i18n/conf.yml

Fayilo yosinthira `i18n.site` ndi `.i18n/conf.yml` ndipo zomwe zili ndi izi :

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

Pakati pawo, `upload` mpaka `ext:` kasinthidwe chinthu zikutanthauza kuti `.md` yekha adzakwezedwa pamene kusindikiza.

## Pamwamba Navigation nav

`nav:` zosintha, zofananira ndi menyu yolowera pamwamba pa tsamba loyambira.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pakati pawo, `i18n: home` amafanana ndi `home: Home` mwa `en/i18n.yml` (pomwe `en` ndiye chilankhulo chomasulira polojekitiyi).

`en/i18n.yml` zomwe zili ndizomwe zikuwonetsedwa muzosankha zoyendetsa, zomwe zidzamasuliridwa molingana ndi `fromTo` pakukonzekera, mwachitsanzo, kumasuliridwa ku `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kumasulira kukamalizidwa, mukhoza kusintha mtengo womasulira `yml` , koma osawonjezera kapena kuchotsa fungulo lomasulira `yml` .

### `use: Toc` , Template Ya Fayilo Imodzi Yokhala Ndi Autilaini

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` amatanthawuza kupereka pogwiritsa ntchito `Toc` template, yomwe ikupereka template imodzi ya `Markdown` .

`TOC` ndi chidule cha `Table of Contents` Pamene template iyi yaperekedwa, ndondomeko ya fayiloyi `Markdown` idzawonetsedwa pamphepete.

`url:` imayimira njira ya fayilo ya `Markdown` ( `/` ikufanana ndi chikwatu cha `/README.md` , dzina la fayiloyi limafuna chilembo chachikulu ndi mawu ocheperapo).

### `use: Md` , Template Ya Fayilo Imodzi Popanda Autilaini

The template `Md` ndi `Toc` template ndizofanana ndipo zonse zimagwiritsidwa ntchito popereka fayilo imodzi `Markdown` . Koma template `Md` sikuwonetsa autilaini mumzere wam'mbali.

Mutha kusintha `use: Toc` pamasinthidwe omwe ali pamwambawa kukhala `use: Md` , yendetsani `i18n.site` mu chikwatu cha `md` kachiwiri, ndiyeno pitani ku ulalo wowoneratu kuti muwone zosintha patsamba loyambira.

### `use: Blog` Blog Templates

Tsamba labulogu limawonetsa mndandanda wazolemba (mitu ndi zidule) potengera nthawi yofalitsidwa.

[→ Dinani apa kuti mudziwe za kasinthidwe kake](/i18n.site/conf/blog)

### `use: Doc` , Template Yamafayilo Angapo

Mu fayilo yosintha:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Imawonetsa kugwiritsa ntchito `Doc` popereka ma template.

`Doc` template imathandizira kuphatikiza angapo `MarkDown` kuti apange zolemba zama projekiti amodzi kapena angapo.

#### Ma Projekiti Angapo Ndi Mafayilo Angapo

Kukonzekera kwa `.i18n/conf.yml` mu `i18n:doc` ndi njira yoperekera mafayilo ambiri.

Apa, `menu: NB demo1,demo2` , amatanthauza kugwiritsa ntchito template `NB` kuti apereke menyu yotsitsa.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , chomwe ndi chidule cha `Name Breif` , kutanthauza kuti menyu yotsitsa ikhoza kuwonetsa dzina ndi chilolezo cha polojekitiyo.

`NB` imatsatiridwa ndi gawo `demo1,demo2` lomwe ladutsako.

`demo1,demo2` : ** `,` **

Pazigawo zomwe zili pamwambapa, fayilo yofananira yolozera ndi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ntchito Imodzi Mafayilo Angapo

Ngati muli ndi polojekiti imodzi yokha, mutha kuyikonza motere.

```
  - i18n: xxx
    use: Doc
```

##### url Ikakhala Yopanda Kanthu, Imasinthidwa Kukhala Mtengo Wa i18n

Ngati `url` sinalembedwe, `url` imasintha ku mtengo wa `i18n` Lamuloli limagwiranso ntchito pa ma templates ena.

Njira yolembera pamwambapa ndi yofanana ndi `url: xxx` , ndipo fayilo yake yofananira ndi `en/xxx/TOC` .

#### Mndandanda Wazomwe Ulipo Pa Intaneti Wa TOC

`i18n.site` itulutsa `js` plug-in `.i18n/hook/after.tran/TOC.js` m'malo osungiramo ziwonetsero kuti muwerenge fayilo ya `TOC` directory yofanana ndi kasinthidwe ka template ya `doc` kuti mupange chikwatu cha `json` .

Ngati mugwiritsa ntchito `doc` template, muyenera kukhala ndi pulagi iyi.

Ngati muyambitsa pulojekiti `i18n.site` kuchokera pafoda yopanda kanthu, kumbukirani kukopera pulojekiti yachiwonetsero `.i18n` ku bukhu lanu.

The template ya `Doc` ipereka mndandanda wazomwe zili mkati motengera zomwe zapangidwa `json` .

##### Kufotokozera Zatsatanetsatane

`en/blog/TOC` Zomwe zili ndi izi :

```
README.md

news/README.md
  news/begin.md
```

##### Gwiritsani Ntchito Indentation Kusonyeza Milingo

`README.md` pamzere woyamba wa `en/blog/TOC` pamwambapa ikugwirizana ndi `i18n.site` pachithunzichi pansipa, lomwe ndi dzina la polojekiti.

Mizere iwiri yotsatira ikuwonetsedwa pazithunzi pansipa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ikufanana ndi `News` ,
`news/begin.md` ikufanana ndi `Our Product is Online !`

Mafayilo `TOC` amalembedwa kuti asonyeze mgwirizano waulamuliro wa autilaini, kuthandizira kulowetsa kwamitundu yambiri, ndi ndemanga za mzere kuyambira `# ` .

##### Mlingo Wa Makolo Umangolemba Mutu, Osati Zomwe Zili.

Pakakhala magawo angapo a indentation, mulingo wa makolo amangolemba mutu osati zomwe zili. Apo ayi, typography idzasokonezedwa.

##### Ntchito README.md

Zomwe zili mkati zimatha kulembedwa mu chinthu `README.md` , monga `en/demo2/README.md` .

Dziwani kuti zomwe zili mufayiloyi sizikuwonetsa mndandanda wazomwe zili mkati, choncho tikulimbikitsidwa kuti muchepetse utali wake ndikulemba mawu oyamba.

###### Slogan Ya Polojekiti

Mutha kuwona `Your Project slogan` `Deme Two` ili ndi tag ya projekiti pansi pa menyu yotsikira pansi ndi dzina la polojekiti : .

![](https://p.3ti.site/1721276842.avif)

Izi zikufanana ndi mzere woyamba wa `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Zomwe zili pambuyo pa colon yoyamba `:` ya mutu woyamba wa polojekiti `README.md` zidzatengedwa ngati slogan ya polojekiti.

Ogwiritsa ntchito ochokera ku China, Japan ndi Korea, chonde dziwani kuti muyenera kugwiritsa ntchito theka-width colon `:` m'malo mogwiritsa ntchito m'mimba monse.

##### Momwe Mungasunthire TOC Zambiri?

`TOC` mafayilo ayenera kuyikidwa mu bukhu la chinenero choyambirira.

Mwachitsanzo, ngati chinenero choyambirira ndi Chitchaina, ndiye kuti `TOC` pamwamba ndi `zh/blog/TOC` .

Ngati chilankhulo choyambira chisinthidwa, muyenera kusamutsa mafayilo `TOC` a chilankhulo china mu chilankhulo kupita ku chilankhulo china.

Mutha kuloza kumalamulo awa:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Chonde sinthani `en/` ndi `zh/` m'malamulo omwe ali pamwambawa kukhala khodi yachilankhulo chanu.

### Kutsitsa Kosasinthika Popanda Njira Yosinthira

Panjira inayake yomwe ikupezeka, ngati chiwongolero cha njira sichinakhazikitsidwe mu `nav:` , fayilo ya `MarkDown` yogwirizana ndi njirayo idzakwezedwa mwachisawawa ndikuperekedwa pogwiritsa ntchito template `Md` .

Mwachitsanzo, ngati `/test` ikupezeka, ndipo `nav:` imakonzedwa popanda chiyambi cha njira iyi, ndipo chinenero chamakono chosakatula ndi Chingerezi (code `en` ), `/en/test.md` idzayikidwa mwachisawawa ndikuperekedwa pogwiritsa ntchito template `Md` .

Ngati `/en/test.md` fayilo kulibe, tsamba lokhazikika `404` liwonetsedwa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
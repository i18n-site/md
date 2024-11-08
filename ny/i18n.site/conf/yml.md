# .i18n/conf.yml

Fayilo yosinthira `i18n.site` ndi `.i18n/conf.yml` ndipo zomwe zilimo ndi izi :

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

`nav:` zosintha, zofananira ndi menyu yolowera pamwamba pa tsamba lofikira.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pakati pawo, `i18n: home` amafanana ndi `home: Home` mwa `en/i18n.yml` (pomwe `en` ndiye chilankhulo chomasulira polojekitiyi).

`en/i18n.yml` zomwe zili ndizomwe zikuwonetsedwa muzosankha zoyendetsa, zomwe zidzamasuliridwa molingana ndi `fromTo` pakukonzekera, mwachitsanzo, kumasuliridwa ku `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kumasulira kukamalizidwa, mukhoza kusintha mtengo womasulira `yml` , koma osawonjezera kapena kuchotsa fungulo lomasulira `yml` .

### `use: Toc` Document Template Yokhala Ndi Autilaini

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` amatanthawuza kupereka pogwiritsa ntchito `Toc` template, yomwe ikupereka template imodzi ya `Markdown` .

`TOC` ndi chidule cha `Table of Contents` Pamene template iyi yaperekedwa, ndondomeko ya fayiloyi `Markdown` idzawonetsedwa pamphepete.

`url:` imayimira njira ya fayilo ya `Markdown` ( `/` ikufanana ndi chikwatu cha `/README.md` , dzina la fayiloyi limafuna chilembo chachikulu ndi mawu ocheperapo).

### `use: Md` Document Template Popanda Autilaini

The template `Md` ndi `Toc` template ndizofanana ndipo zonse zimagwiritsidwa ntchito popereka fayilo imodzi `Markdown` . Koma template `Md` sikuwonetsa autilaini mumzere wam'mbali.

Mutha kusintha `use: Toc` pamasinthidwe omwe ali pamwambawa kukhala `use: Md` , yendetsani `i18n.site` mu bukhu la `md` kachiwiri, ndiyeno pitani ku ulalo wowoneratu kuti muwone zosintha patsamba loyambira.

### `use: Blog` Blog Templates

Tsamba labulogu limawonetsa mndandanda wazolemba (mitu ndi zidule) potengera nthawi yofalitsidwa.

[→ Dinani apa kuti mudziwe za kasinthidwe kake](/i18n.site/conf/blog)

### `use: Doc` Ma Templates Angapo a Fayilo

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

Fayilo yofananira ndi chikwatu chazomwe zili pamwambapa ndi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ntchito Imodzi Mafayilo Angapo

Ngati muli ndi polojekiti imodzi yokha, mutha kuyikonza motere.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Pulojekiti imodzi yokhala ndi mafayilo angapo sigwirizana ndi kukonza `url` ngati njira yoyambira `/`
> Ngati __conf.yml → nav:__ Palibe njira yokhazikitsidwa, mukafika patsamba loyambira, imalembedwanso ku ulalo woyamba pansi pa kasinthidwe ka `nav:` .
> Mapangidwe awa ndikusiyanitsa bwino zolemba zama projekiti, mabulogu ndi zinthu zina kudzera muakalozera.
> Ndikofunikira kugwiritsa ntchito fayilo imodzi ndi tsamba limodzi ngati tsamba loyambira.

> [!TIP]
> Ngati `url` sinalembedwe, `url` imasintha ku mtengo wa `i18n` Lamuloli limagwiranso ntchito pa ma templates ena.

#### Mndandanda Wazomwe Ulipo Pa Intaneti Wa TOC

Ngati template `use: Doc` yayatsidwa mu kasinthidwe, chonde yambitsani pulagi `i18n.addon/toc` mu `.i18n/conf.yml` Masinthidwe ali motere :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ingokhazikitsa ndikukhazikitsa pulagiyi, werengani `TOC` fayilo yolozera, ndikupanga `json` chikwatu.

Ngati ndi pulojekiti imodzi yokhala ndi mafayilo angapo, chikwatu cha mizu `TOC` ndi chikwatu chomwe chikugwirizana ndi `url:` mu bukhu lachiyankhulo cha gwero Mwachitsanzo, ngati chinenero choyambira ndi Chitchaina: fayilo yofanana ndi `url: flashduty` ndi `zh/flashduty/TOC` .

Ngati ndi mapulojekiti angapo ndi mafayilo angapo, palibe chifukwa chokonzekera `url:` Mizu ya `TOC` ndiyo ndondomeko yofanana ndi mtengo wa `i18n` .

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

Pakakhala magawo angapo a indentation, mulingo wa makolo amangolemba mutu osati zomwe zili. Apo ayi, typography idzasokonezeka.

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

Mutha kulozera ku malamulo awa:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Chonde sinthani `en/` ndi `zh/` m'malamulo omwe ali pamwambawa kukhala khodi yachilankhulo chanu.

### Kutsitsa Kosasinthika Popanda Njira Yosinthira

Panjira inayake yomwe ikupezeka, ngati chiwongolero cha njira sichinakhazikitsidwe mu `nav:` , fayilo ya `MarkDown` yogwirizana ndi njirayo idzakwezedwa mwachisawawa ndikuperekedwa pogwiritsa ntchito template `Md` .

Mwachitsanzo, ngati `/test` ikupezeka ndipo `nav:` imakonzedwa popanda chiyambi cha njira iyi, ndipo chinenero chofufuzira chamakono ndi Chingerezi (code `en` ), `/en/test.md` idzayikidwa mwachisawawa ndikugwiritsidwa ntchito pogwiritsa ntchito template `Md` .

Ngati `/en/test.md` fayilo kulibe, tsamba lokhazikika `404` lidzawonetsedwa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
# .i18n/conf.yml

Fayilo yosinthira ndi `.i18n/conf.yml` `i18n.site`

Kupatula pazokonda `ignore:` ndi `i18n:` za [`i18`](/i18) fayilo yosinthira ili motere:

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

Pakati pawo, chinthu chosinthira `ext:` `.md` `upload`

## Pamwamba Navigation nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Pakati pawo `i18n: home` ikufanana ndi `en/i18n.yml`中`home: Home` .

`en/i18n.yml` adzamasuliridwa m'zilankhulo zingapo, monga `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kumasulira kukamalizidwa, mutha kusintha mtengo `yml` `yml`

### `use: Toc` Template Ya Fayilo Imodzi (Yokhala Ndi Autilaini)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kumatanthauza kugwiritsa ntchito `Toc` rendering, yomwe ikupereka `Markdown` template imodzi.

`TOC` ndi chidule cha `Table of Contents` `Markdown`

`url:` ikuyimira njira yamafayilo ya `Markdown` ( `/` ikufanana ndi chikwatu cha mizu `/README.md` , dzina lafayiloli limafunikira zilembo zazikulu ndi mawu ocheperako).

### `use: Md` Template Ya Fayilo Imodzi (Palibe Autilaini)

`Md` Template ndi yofanana ndi `Toc` , zonse zimagwiritsidwa ntchito popereka `Markdown` imodzi. Komabe `Md` chithunzichi sichikuwonetsa autilaini mubar yapambali.

Mutha kusintha `use: Toc` mu kasinthidwe pamwambapa ku `use: Md` , thamangani `i18n.site` mu `md` chikwatu kachiwiri, ndiyeno pitani ku ulalo wowoneratu kuti muwone zosintha patsamba loyambira.

### Kutsitsa Kosasinthika Popanda Njira Yosinthira

Ngati chiwongolero cha njira ina yomwe ikufikiridwa sichinakonzedwe mu `nav:` fayilo `MarkDown` yofanana ndi njirayo idzakwezedwa mwachisawawa ndikuperekedwa pogwiritsa ntchito `Md` template.

Mwachitsanzo, ngati mutayendera `/test` ndipo `nav:` imakonzedwa popanda njira iyi, ndipo chinenero cha tsamba ndi Chingerezi (code `en` ), template idzayikidwa `/en/test.md` ndi kuperekedwa pogwiritsa ntchito `Md` mwachisawawa.

`/en/test.md` fayilo ilibe, tsamba lokhazikika `404` liwonetsedwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Template Yamafayilo Ambiri

Mu fayilo yosintha:

```
  - i18n: blog
    use: Doc
```

Imawonetsa kugwiritsa ntchito template `Doc`

`Doc` Template imathandizira kuphatikiza `MarkDown` angapo kuti apange zolemba zama projekiti amodzi kapena angapo.

#### Pulojekiti Imodzi (Mafayilo Angapo)

`blog` pamwambapa pali njira imodzi ya `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Ikakhala Yopanda Kanthu, Imasinthidwa Kukhala Mtengo Wa i18n

Ngati simulemba `url` `url` pamtengo wa `i18n` Lamuloli limagwiranso ntchito pazithunzi zina.

Njira yolembera pamwambapa ndi yofanana ndi kukhala `url: blog` ndipo fayilo yake yofananira ndi `en/blog/TOC` .

#### Ntchito Zambiri

`.i18n/conf.yml` Kukonzekera mu `i18n:doc` ndi ma projekiti ambiri.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Apa `menu: NB demo1,demo2` kutanthauza kugwiritsa ntchito `NB` kupereka menyu yotsitsa.

`NB` `Name Breif`

`NB` `demo1,demo2`
`demo1,demo2` : ** `,` **

Pazigawo zomwe zili pamwambapa, fayilo yofananira yolozera ndi:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Mndandanda Wazomwe Ulipo Pa Intaneti Wa TOC

`i18n.site` Apereka `js` plugin `.i18n/hook/after.tran/TOC.js` mu malo osungiramo zinthu kuti muwerenge fayilo yolozera `doc` yogwirizana ndi kasinthidwe ka template `TOC` kuti mupange `json` ya chikwatu.

Ngati mugwiritsa `doc` template, muyenera kukhala ndi pulagi iyi.

Ngati muyambitsa pulojekiti `.i18n` `i18n.site`

`Doc` `json`

##### Kufotokozera Zatsatanetsatane

Zomwe zilimo ndi : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Gwiritsani Ntchito Indentation Kusonyeza Milingo

`en/blog/TOC` `README.md` mumzere woyamba ikufanana ndi `i18n.site` ili pachithunzi pansipa, lomwe ndi dzina la polojekiti.

Mizere iwiri yotsatira ikuwonetsedwa pazithunzi pansipa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ndi `News` ,
zikugwirizana ndi `Our Product is Online !` `news/begin.md`

`TOC`

##### Mlingo Wa Makolo Umangolemba Mutu, Osati Zomwe Zili.

Pakakhala magawo angapo a indentation, mulingo wa makolo amangolemba mutu osati zomwe zili. Apo ayi, typography idzasokonezeka.

##### Ntchito README.md 

`README.md` za polojekitiyi, mwachitsanzo, mutha kulemba zomwe zili mu `en/demo2/README.md` .

Dziwani kuti zomwe zili mufayiloyi sizikuwonetsa mndandanda wazomwe zili mkati, choncho tikulimbikitsidwa kuchepetsa utali wake ndikulemba mawu oyamba.

###### Slogan Ya Polojekiti

Monga mukuwonera `Deme Two` Pansi pa menyu yotsikira pansi ndi dzina la polojekiti, pali mawu ake : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: zikufanana ndi mzere woyamba `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Ogwiritsa ntchito ochokera ku China, Japan ndi Korea, chonde dziwani kuti muyenera kugwiritsa ntchito theka la m'lifupi m'malo mwa m'mimba mwake `:`

##### Momwe Mungasunthire TOC Zambiri?

`TOC`

Mwachitsanzo, ngati chilankhulo chochokera ku China, ndiye `TOC` pamwambapa ndi `zh/blog/TOC` .

Ngati chilankhulo choyambira chisinthidwa, muyenera kusuntha `TOC` muchilankhulo china mu pulojekiti kupita kuchilankhulo china.

Mutha kulozera ku malamulo awa:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Chonde `en/` ndi `zh/` m'malamulo omwe ali pamwambapa pamakhodi anu achilankhulo.



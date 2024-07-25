# .i18n/conf.yml

Ang configuration file ay `.i18n/conf.yml` `i18n.site`

Maliban sa `ignore:` at `i18n:` na mga setting ng [`i18`](/i18) , ang configuration file ay ang mga sumusunod:

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

Kabilang sa mga ito, ang `ext:` configuration item ng `upload` ay nangangahulugan na `.md` lang ang ia-upload kapag nag-publish.

## Tuktok Nabigasyon nav

Mga opsyon sa pagsasaayos ng `nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Kabilang sa mga ito, `i18n: home` ay tumutugma sa `en/i18n.yml`中`home: Home` .

`en/i18n.yml` ay isasalin sa maraming wika, gaya ng `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Pagkatapos makumpleto ang pagsasalin, maaari mong baguhin ang halaga ng `yml` sa pagsasalin, ngunit huwag idagdag o tanggalin ang susi ng pagsasalin `yml` .

### `use: Toc` , Isang Template Ng File (Na May Balangkas)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ay nangangahulugan ng paggamit ng `Toc` rendering, na nagre-render ng isang template `Markdown` .

`TOC` ay ang abbreviation `Markdown` `Table of Contents` .

`url:` kumakatawan sa landas ng file ng `Markdown` ( `/` ay tumutugma sa root directory `/README.md` , ang pangalan ng file na ito ay nangangailangan ng isang uppercase na prefix at isang lowercase na suffix).

### `use: Md` , Isang Template Ng File (Walang Balangkas)

`Md` `Toc` `Markdown` Gayunpaman `Md` hindi ipinapakita ng template ang outline sa sidebar.

Maaari mong baguhin ang `use: Toc` sa configuration sa itaas sa `use: Md` , patakbuhin muli `i18n.site` sa `md` directory, at pagkatapos ay bisitahin ang development preview URL upang obserbahan ang mga pagbabago sa homepage.

### Default Na Paglo-Load Nang Walang Configuration Path

Kung ang prefix ng path ng isang partikular na path na ina-access ay hindi na-configure sa `nav:` ang `MarkDown` file na naaayon sa path ay ilo-load bilang default at ire-render gamit ang `Md` template.

Halimbawa, kung bibisitahin mo ang `/test` , at `nav:` ay na-configure nang wala ang path na ito, at ang wika ng pahina ay English (code `en` ), ang template ay ilo-load `/en/test.md` at ire-render gamit ang `Md` bilang default.

Kung wala ang file `/en/test.md` ito, ipapakita ang default na `404` page.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-File Na Template

Sa configuration file:

```
  - i18n: blog
    use: Doc
```

Ipinapahiwatig ang paggamit ng `Doc` para sa pag-render ng template.

Sinusuportahan ng `Doc` Template ang pagsasama ng maramihang `MarkDown` upang makabuo ng mga balangkas ng dokumento para sa isa o maramihang proyekto.

#### Isang Proyekto (Maraming Mga File)

`blog` sa itaas ay ang single-project mode ng `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kapag Walang Laman Ang Url, Nagde-Default Ito Sa Halaga Ng i18n

Kung hindi mo isusulat ang `url` , `url` sa halagang `i18n` .

Ang paraan ng pagsulat sa itaas ay katumbas ng pagkakaroon ng `url: blog` at ang katumbas na file nito ay `en/blog/TOC` .

#### Maraming Proyekto

`.i18n/conf.yml` Ang configuration sa `i18n:doc` ay multi-project mode.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Dito, ang ibig sabihin ng `menu: NB demo1,demo2` ay ang paggamit ng `NB` upang i-render ang drop-down na menu.

`NB` , ay ang abbreviation ng `Name Breif` , na nagpapahiwatig na ang drop-down na menu ay maaaring magpakita ng pangalan at slogan ng proyekto.

`NB` ay sinusundan ng parameter `demo1,demo2` na ipinasa dito.
`demo1,demo2` na dapat walang mga puwang ** bago at pagkatapos ng kuwit `,` sa : **

Para sa mga parameter sa itaas, ang kaukulang file ng index ng direktoryo ay:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Index Ng Talaan Ng Nilalaman Ng TOC

Ipapatupad ang `js` plugin `.i18n/hook/after.tran/TOC.js` sa bodega ng demo upang mabasa ang file ng index ng direktoryo `doc` naaayon sa pagsasaayos ng template `TOC` upang makabuo `json` ng balangkas `i18n.site` direktoryo.

Kung gumagamit ka ng `doc` template, dapat mayroon kang plug-in na ito.

Kung sinisimulan mo ang `i18n.site` proyekto mula sa isang walang laman na folder, tandaan na kopyahin `.i18n` sa demo na proyekto sa iyong direktoryo.

Ire-render ng `Doc` ang balangkas ng mga nilalaman batay sa nabuong `json` .

##### Detalyadong Paliwanag Ng Nilalaman

Ang nilalaman ay ang : sumusunod `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Gumamit Ng Indentation Upang Ipahiwatig Ang Mga Antas

Sa itaas `en/blog/TOC` `README.md` sa unang linya ay tumutugma sa `i18n.site` sa larawan sa ibaba, na siyang pangalan ng proyekto.

Ang susunod na dalawang linya ay tulad ng ipinapakita sa screenshot sa ibaba.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tumutugma sa `News` ,
`news/begin.md` `Our Product is Online !`

`TOC` Ang file ay naka-indent upang ipahiwatig ang hierarchical na relasyon ng outline at sumusuporta sa multi-level na indentation.

##### Ang Antas Ng Magulang Ay Nagsusulat Lamang Ng Pamagat, Hindi Ang Nilalaman.

Kapag maraming antas ng indentation, ang parent level lang ang nagsusulat ng pamagat at hindi ang content. Kung hindi, magugulo ang typography.

##### Project README.md 

`README.md` ng proyekto, halimbawa, maaari kang magsulat ng nilalaman sa `en/demo2/README.md` .

Tandaan na ang nilalaman ng file na ito ay hindi nagpapakita ng isang talaan ng mga nilalaman na balangkas, kaya inirerekomenda na limitahan ang haba at magsulat ng isang maikling panimula.

###### Slogan Ng Proyekto

`Your Project slogan` ng nakikita mo : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ay tumutugma sa unang linya `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Project `README.md` Ang nilalaman pagkatapos ng unang colon `:` sa unang antas na pamagat ay ituturing na slogan ng proyekto.

Mga user mula sa China, Japan at Korea, pakitandaan na dapat mong gamitin ang kalahating lapad na colon `:` halip na full-width na colon.

##### Paano Ilipat Ang TOC Nang Maramihan?

`TOC` Ang file ay kailangang ilagay sa direktoryo ng pinagmulang wika.

Halimbawa, kung Chinese ang source language, `TOC` nasa itaas ay `zh/blog/TOC` .

Kung binago ang pinagmulang wika, kailangan mong i-batch ang paglipat `TOC` sa isang partikular na wika sa proyekto sa ibang wika.

Maaari kang sumangguni sa mga sumusunod na utos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mangyaring baguhin ang `en/` at `zh/` sa command sa itaas sa iyong code ng wika.



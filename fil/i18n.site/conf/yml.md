# .i18n/conf.yml

Ang configuration file para sa `i18n.site` ay `.i18n/conf.yml` at ang nilalaman ay ang mga sumusunod :

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

Kabilang sa mga ito, `upload` hanggang `ext:` configuration item ay nangangahulugan na `.md` lang ang ia-upload kapag nag-publish.

## Nangungunang Nabigasyon nav

`nav:` na mga opsyon sa pagsasaayos, na naaayon sa menu ng nabigasyon sa tuktok ng home page.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Kabilang sa mga ito, `i18n: home` ay tumutugma sa `home: Home` sa `en/i18n.yml` (kung saan ang `en` ay ang pinagmulang wika ng pagsasalin ng proyekto).

`en/i18n.yml` na nilalaman ay ang tekstong ipinapakita sa menu ng nabigasyon, na isasalin ayon sa `fromTo` sa pagsasaayos, halimbawa, isinalin sa `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Pagkatapos makumpleto ang pagsasalin, maaari mong baguhin ang halaga ng pagsasalin `yml` , ngunit huwag idagdag o tanggalin ang susi ng pagsasalin `yml` .

### `use: Toc` , Isang Template Ng File Na May Balangkas

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ay nangangahulugan ng pag-render gamit ang isang `Toc` template, na nagre-render ng isang solong `Markdown` template.

`TOC` ay ang pagdadaglat ng `Table of Contents` Kapag ang template na ito ay nai-render, ang balangkas ng `Markdown` file na ito ay ipapakita sa sidebar.

`url:` ay kumakatawan sa file path ng `Markdown` ( `/` ay tumutugma sa root directory `/README.md` , ang pangalan ng file na ito ay nangangailangan ng isang uppercase na prefix at isang lowercase na suffix).

### `use: Md` , Isang Template Ng File Na Walang Balangkas

Ang `Md` na template at ang `Toc` na template ay pareho at pareho ang ginagamit upang mag-render ng isang solong `Markdown` file. Ngunit hindi ipinapakita ng `Md` template ang outline sa sidebar.

Maaari mong baguhin `use: Toc` sa configuration sa itaas sa `use: Md` , patakbuhin muli `i18n.site` sa `md` directory, at pagkatapos ay bisitahin ang development preview URL upang obserbahan ang mga pagbabago sa homepage.

### `use: Blog` Mga Template Ng Blog

Ang template ng blog ay nagpapakita ng isang listahan ng mga artikulo (mga pamagat at abstract) sa pagkakasunud-sunod ng oras ng paglalathala.

[→ Mag-click dito upang malaman ang tungkol sa partikular na configuration](/i18n.site/conf/blog)

### `use: Doc` , Multi-File Na Template Ng Dokumento

Sa configuration file:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Isinasaad ang paggamit ng `Doc` para sa pag-render ng template.

`Doc` na template ay sumusuporta sa pagsasama ng maramihang `MarkDown` upang makabuo ng mga balangkas ng dokumento para sa isa o maramihang mga proyekto.

#### Maramihang Mga Proyekto at Maramihang Mga File

Ang configuration ng `.i18n/conf.yml` sa `i18n:doc` ay multi-project multi-file rendering mode.

Dito, `menu: NB demo1,demo2` , ay nangangahulugan ng paggamit ng `NB` template upang i-render ang drop-down na menu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , na kung saan ay ang pagdadaglat ng `Name Breif` , ay nangangahulugan na ang drop-down na menu ay maaaring magpakita ng pangalan at slogan ng proyekto.

`NB` ay sinusundan ng parameter `demo1,demo2` na ipinasa dito.

Tandaan : ** Dapat walang mga puwang ** bago at pagkatapos ng kuwit `,` sa `demo1,demo2` .

Para sa mga parameter sa itaas, ang kaukulang file ng index ng direktoryo ay:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Isang Proyekto Maraming Mga File

Kung mayroon ka lamang isang proyekto, maaari mong i-configure ito bilang mga sumusunod.

```
  - i18n: xxx
    use: Doc
```

##### Kapag Walang Laman Ang Url, Nagde-Default Ito Sa Halaga Ng i18n

Kung `url` ay hindi nakasulat, `url` ang magiging default sa halaga ng `i18n` Ang panuntunang ito ay magkakabisa rin para sa iba pang mga template.

Ang paraan ng pagsulat sa itaas ay katumbas ng `url: xxx` , at ang katumbas na file nito ay `en/xxx/TOC` .

#### Index Ng Talaan Ng Nilalaman Ng TOC

`i18n.site` ay magpapatupad `js` plug-in `.i18n/hook/after.tran/TOC.js` sa demo warehouse upang basahin ang `TOC` na file ng index ng direktoryo na naaayon sa `doc` configuration ng template upang makabuo ng `json` balangkas ng direktoryo.

Kung gumagamit ka ng `doc` na template, dapat mayroon kang plug-in na ito.

Kung sinisimulan mo ang project `i18n.site` mula sa isang walang laman na folder, tandaan na kopyahin ang demo project `.i18n` sa iyong direktoryo.

Ire-render ng template `Doc` ang balangkas ng talaan ng mga nilalaman batay sa nabuong `json` .

##### Detalyadong Paliwanag Ng Nilalaman

`en/blog/TOC` nilalaman ay ang mga sumusunod :

```
README.md

news/README.md
  news/begin.md
```

##### Gumamit Ng Indentation Upang Ipahiwatig Ang Mga Antas

`README.md` sa unang hilera ng `en/blog/TOC` sa itaas ay tumutugma sa `i18n.site` sa larawan sa ibaba, na siyang pangalan ng proyekto.

Ang susunod na dalawang linya ay tulad ng ipinapakita sa screenshot sa ibaba.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ay tumutugma sa `News` ,
`news/begin.md` ay tumutugma sa `Our Product is Online !`

`TOC` file ay naka-indent upang isaad ang hierarchical na relasyon ng outline, suportahan ang multi-level na indentation, at mga komento sa linya na nagsisimula sa `#` .

##### Ang Antas Ng Magulang Ay Nagsusulat Lamang Ng Pamagat, Hindi Ang Nilalaman.

Kapag maraming antas ng indentation, ang parent level lang ang nagsusulat ng pamagat at hindi ang content. Kung hindi, magugulo ang typography.

##### Project README.md

Maaaring isulat ang nilalaman sa aytem `README.md` , tulad ng `en/demo2/README.md` .

Tandaan na ang nilalaman ng file na ito ay hindi nagpapakita ng isang talaan ng mga nilalaman na balangkas, kaya inirerekomenda na limitahan ang haba at magsulat ng isang maikling panimula.

###### Slogan Ng Proyekto

Makikita mo na ang `Deme Two` ay may tagline ng proyekto sa ibaba ng drop-down na menu at pangalan ng proyekto `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ito ay tumutugma sa unang hilera ng `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ang nilalaman pagkatapos ng unang tutuldok `:` ng unang antas na pamagat ng proyekto `README.md` ay ituturing na slogan ng proyekto.

Mga user mula sa China, Japan at Korea, pakitandaan na dapat mong gamitin ang half-width colon `:` sa halip na full-width colon.

##### Paano Ilipat Ang TOC Nang Maramihan?

`TOC` na mga file ay kailangang ilagay sa direktoryo ng pinagmulang wika.

Halimbawa, kung Chinese ang source language, ang `TOC` sa itaas ay `zh/blog/TOC` .

Kung binago ang pinagmulang wika, kailangan mong i-batch na ilipat ang `TOC` file ng isang partikular na wika sa proyekto sa ibang wika.

Maaari kang sumangguni sa mga sumusunod na utos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mangyaring baguhin `en/` at `zh/` sa command sa itaas sa iyong language code.

### Default Na Paglo-Load Nang Walang Configuration Path

Para sa isang partikular na path na ina-access, kung ang path prefix ay hindi na-configure sa `nav:` , ang `MarkDown` file na naaayon sa path ay ilo-load bilang default at ire-render gamit ang `Md` template.

Halimbawa, kung `/test` ay na-access, at `nav:` ay na-configure nang walang prefix ng path na ito, at ang kasalukuyang wika sa pagba-browse ay English (code `en` ), `/en/test.md` ay ilo-load bilang default at ire-render gamit ang template `Md` .

Kung `/en/test.md` ang file na ito ay hindi umiiral, ang default na `404` pahina ay ipapakita.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
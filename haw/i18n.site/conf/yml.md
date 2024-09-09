# .i18n/conf.yml

ʻO ka ʻaoʻao no `i18n.site` he `.i18n/conf.yml` .

Ma waho aʻe o nā hoʻonohonoho o [`i18`](/i18) , `ignore:` a me `i18n:` , penei ka faila hoʻonohonoho:

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
addon:
  - i18n.addon/toc
```

Ma waena o lākou, `upload` a `ext:` mea hoʻonohonoho hoʻonohonoho ʻo ia ka mea e hoʻouka ʻia `.md` wale nō i ka wā e paʻi ai.

## Hoʻokele nav

`nav:` nā koho hoʻonohonoho, e pili ana i ka papa kuhikuhi ma ka piko o ka ʻaoʻao home.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ma waena o lākou, pili `i18n: home` i `home: Home` i `en/i18n.yml` .

E unuhi ʻia `en/i18n.yml` i nā ʻōlelo he nui, e like me `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ma hope o ka pau ʻana o ka unuhi, hiki iā ʻoe ke hoʻololi i ka waiwai o ka unuhi `yml` , akā mai hoʻohui a holoi paha i ke kī o ka unuhi `yml` .

### `use: Toc` , Hoʻokahi Waihona Waihona (Me Ka Outline)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` o ia ho'i ka ho'ohana 'ana i ka la'ana `Toc` , 'o ia ho'i ka hana 'ana i ho'okahi `Markdown` template.

ʻO `TOC` ka pōkole o `Table of Contents` Ke hāʻawi ʻia kēia hoʻohālike, e hōʻike ʻia ka outline o kēia faila `Markdown` ma ka ʻaoʻao ʻaoʻao.

Hōʻike `url:` i ke ala faila o `Markdown` ( `/` pili i ka papa kuhikuhi kumu `/README.md` , pono kēia inoa faila i kahi prefix luna a me kahi suffix haʻahaʻa).

### `use: Md` , Hoʻokahi Waihona Waihona (ʻaʻohe Outline)

Ua like ka la'ana `Md` a me ka la'ana `Toc` a ua ho'ohana 'ia ia mau mea no ka ho'olilo 'ana i ho'okahi faila `Markdown` . Akā, ʻaʻole hōʻike ʻia ka `Md` template i ka outline ma ka ʻaoʻao ʻaoʻao.

Hiki iā ʻoe ke hoʻololi i `use: Toc` i ka hoʻonohonoho ʻana i luna i `use: Md` , holo hou i `i18n.site` i ka papa kuhikuhi `md` , a laila e kipa i ka URL no ka hoʻomohala ʻana e nānā i nā loli ma ka ʻaoʻao home.

### Hoʻouka Paʻamau Me Ke Ala Hoʻonohonoho ʻole

Inā loaʻa kekahi ala a ʻaʻole i hoʻonohonoho ʻia kona prefix ala ma `nav:` , e hoʻouka ʻia ka faila `MarkDown` e pili ana i ke ala e ka paʻamau a hāʻawi ʻia me ka hoʻohana ʻana i ka template `Md` .

No ka laʻana, inā loaʻa `/test` , a ua hoʻonohonoho ʻia `nav:` me ka ʻole o kēia ala, a ʻo ka ʻōlelo ʻaoʻao ʻo ka ʻōlelo Pelekane (code `en` ), e hoʻouka ʻia `/en/test.md` ma ke ʻano maʻamau a hoʻohana ʻia me ka hoʻohana ʻana i ka template `Md` .

Inā ʻaʻohe `/en/test.md` kēia faila, e hōʻike ʻia ka ʻaoʻao `404` paʻamau.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Hoʻopalapala Waihona Nui

Ma ka waihona hoʻonohonoho:

```
  - i18n: blog
    use: Doc
```

Hōʻike i ka hoʻohana ʻana i `Doc` no ka hoʻohālikelike ʻana.

`Doc` kākoʻo i ka hoʻohui ʻana i nā `MarkDown` he nui e hoʻopuka i nā kikoʻī palapala no nā papahana hoʻokahi a nui paha.

#### Pāhana Hoʻokahi (Faila He Nui)

`blog` ma luna ke ʻano ʻano mea hoʻokahi o `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ke Nele Ka Url, Hoʻokaʻawale Ia I Ka Waiwai O i18n

Inā ʻaʻole i kākau ʻia `url` , hoʻopaʻa ʻia `url` i ka waiwai o `i18n` Hoʻohana pū ʻia kēia lula no nā mamana ʻē aʻe.

ʻO ke ʻano kākau ma luna nei ua like ia me `url: blog` , a ʻo kāna faila e pili ana ʻo `en/blog/TOC` .

#### Mau Papahana

ʻO ka hoʻonohonoho ʻana o `i18n:doc` o `.i18n/conf.yml` he ʻano papahana multi-project.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Maʻaneʻi, `menu: NB demo1,demo2` , ʻo ia ka hoʻohana ʻana i ka template `NB` e hāʻawi i ka papa kuhikuhi iho.

`NB` , ʻo ia ka pōkole o `Name Breif` , ʻo ia ka mea hiki ke hōʻike i ka papa kuhikuhi i ka inoa a me ka slogan o ka papahana.

`NB` hahai ʻia e ka ʻāpana `demo1,demo2` i hāʻawi ʻia iā ia.
`,` `demo1,demo2` : ** **

No nā ʻāpana i luna, ʻo ka faila kuhikuhi kuhikuhi e pili ana:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Papa Kuhikuhi Kiko'ī

`i18n.site` e hoʻokō i `js` plug-in `.i18n/hook/after.tran/TOC.js` i loko o ka hale kūʻai demo e heluhelu ai i ka faila kuhikuhi kuhikuhi `doc` e pili ana i ka hoʻonohonoho hoʻohālikelike `TOC` e hana i ka papa kuhikuhi papa kuhikuhi `json` .

Inā hoʻohana ʻoe i `doc` template, pono ʻoe e loaʻa kēia plug-in.

Inā hoʻomaka ʻoe i ka papahana `i18n.site` mai kahi waihona hakahaka, e hoʻomanaʻo e kope i ka papahana demo `.i18n` i kāu papa kuhikuhi.

Na ka `Doc` template e hāʻawi i ka papa kuhikuhi o nā mea i hoʻokumu ʻia ma ka `json` i hana ʻia.

##### ʻO Ka Wehewehe Kikoʻī Kikoʻī

`en/blog/TOC` ka mea i pili :

```
README.md

news/README.md
  news/begin.md
```

##### E Hoʻohana I Ka Indentation E Hōʻike I Nā Pae

`README.md` ma ka lālani mua o `en/blog/TOC` ma luna e pili ana i `i18n.site` ma ke kiʻi ma lalo, ʻo ia ka inoa o ka papahana.

ʻO nā laina ʻelua aʻe e like me ka mea i hōʻike ʻia ma ke kiʻi ma lalo nei.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` pili me `News` ,
`news/begin.md` pili me `Our Product is Online !`

`TOC` ua hoʻokomo ʻia nā faila e hōʻike i ka pilina hierarchical o ka outline, kākoʻo i ka indentation multi-level, a me nā manaʻo laina e hoʻomaka me `#` .

##### ʻO Ke Poʻo Inoa Wale Nō Ka Pae Makua, ʻaʻole Ka ʻike.

Inā nui nā pae o ka indentation, kākau wale ka pae makua i ke poʻo inoa a ʻaʻole ka ʻike. A i ʻole, e huikau ʻia ka typography.

##### Papahana README.md

Hiki ke kākau ʻia ma ka helu `README.md` , e like me `en/demo2/README.md` .

E hoʻomanaʻo ʻaʻole hōʻike ka ʻike o kēia faila i kahi papa kuhikuhi o nā kikoʻī, no laila makemake ʻia e kaupalena i ka lōʻihi a kākau i kahi hoʻolauna pōkole.

###### Slogan Papahana

Hiki iā ʻoe ke ʻike aia `Deme Two` i kāna tagline papahana ma lalo o ka papa kuhikuhi i lalo a me ka papa inoa papa inoa `Your Project slogan` ka papahana :

![](https://p.3ti.site/1721276842.avif)

Pili keia me ka lalani mua `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

ʻO ka ʻike ma hope o ke kolamu mua `:` o ke poʻo inoa pae mua o ka papahana `README.md` e manaʻo ʻia ʻo ia ka slogan papahana.

E ʻoluʻolu e nā mea hoʻohana mai Kina, Iapana a me Korea, pono ʻoe e hoʻohana i ka ʻāpana hapa-ākea `:` ma kahi o ke kolonā piha-ākea.

##### Pehea E Hoʻoneʻe Ai I Ka TOC I Ka Nui?

Pono e waiho ʻia `TOC` faila ma ka papa kuhikuhi o ka ʻōlelo kumu.

No ka laʻana, inā he Pākē ka ʻōlelo kumu, a laila ʻo `TOC` ma luna ka `zh/blog/TOC` .

Inā hoʻololi ʻia ka ʻōlelo kumu, pono ʻoe e hoʻoneʻe i nā faila `TOC` o kekahi ʻōlelo ma ka papahana i kahi ʻōlelo ʻē aʻe.

Hiki iā ʻoe ke kuhikuhi i kēia mau kauoha:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

E ʻoluʻolu e hoʻololi i `en/` a me `zh/` ma ke kauoha i luna i kāu code ʻōlelo.
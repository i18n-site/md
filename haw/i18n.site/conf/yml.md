# .i18n/conf.yml

ʻO ka faila hoʻonohonoho `.i18n/conf.yml` `i18n.site`

Koe no `ignore:` a me `i18n:` hoʻonohonoho o [`i18`](/i18) , penei ka waihona hoʻonohonoho:

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

Ma waena o lākou, `.md` ka mea `ext:` hoʻonohonoho o `upload`

## Hoʻokele nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ma waena o lākou `i18n: home` pili me `en/i18n.yml`中`home: Home` .

e unuhi ʻia i nā ʻōlelo he nui, e like me `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ma hope o ka pau ʻana `yml` ka unuhi, hiki iā ʻoe ke hoʻololi i ka waiwai o `yml`

### `use: Toc` , Hoʻokahi Waihona Waihona

Ke hoonohonoho : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` 'o ia ho'i ka ho'ohana 'ana i `Toc` rendering, 'o ia ka hana 'ana i ho'okahi `Markdown` template.

`TOC` ʻo ia ka pōkole o `Table of Contents` `Markdown`

`url:` `Markdown` `/` `/README.md`

### `use: Md` , Ka Waihona Hoʻokahi

Ua like `Md` la'ana me `Toc` , ua ho'ohana 'ia 'elua no ka ho'olilo 'ana i ka waihona `Markdown` ho'okahi. Eia nō naʻe `Md` ʻaʻole hōʻike ka template i ka outline ma ka ʻaoʻao ʻaoʻao.

Hiki iā ʻoe ke hoʻololi i ka `use: Toc` ma ka hoʻonohonoho ʻana ma luna aʻe i `use: Md` , holo `i18n.site` ma ka papa kuhikuhi `md` , a laila e kipa i ka URL no ka hoʻomohala ʻana e nānā i nā loli ma ka ʻaoʻao home.

### Hoʻouka Paʻamau Me Ke Ala Hoʻonohonoho ʻole

Inā ʻaʻole i hoʻonohonoho ʻia ka prefix ala o kekahi ala e komo ai ma `nav:` e hoʻouka ʻia ka faila `MarkDown` e pili ana i ke ala ma ke ʻano paʻamau a hoʻohana ʻia me `Md` template.

No ka laʻana, inā ʻoe e kipa i ka `/test` , a ua hoʻonohonoho ʻia `nav:` me ka ʻole o kēia ala, a ʻo ka ʻōlelo ʻaoʻao ʻo ka ʻōlelo Pelekania (code `en` ), e hoʻouka ʻia ka template `/en/test.md` a e hoʻohana ʻia `Md` ma ke ʻano paʻamau.

`/en/test.md` ʻaʻole i loaʻa kēia faila, e hōʻike ʻia ka ʻaoʻao `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Waihona Waihona Nui

Ma ka waihona hoʻonohonoho:

```
  - i18n: blog
    use: Doc
```

Hōʻike i ka hoʻohana ʻana i ka `Doc`

`Doc` Kākoʻo ka laʻana i ka hoʻohui ʻana i `MarkDown` he nui no ka hoʻopuka ʻana i nā kikoʻī palapala no nā papahana hoʻokahi a i ʻole.

#### Pāhana Hoʻokahi (Nui Nā Faila)

i ka `blog` i luna nei ke ʻano papahana hoʻokahi o `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ke Nele Ka Url, Hoʻokaʻawale Ia I Ka Waiwai O i18n

Inā ʻaʻole ʻoe e kākau `url` , `url` i ka waiwai o `i18n` .

ʻO ke ʻano kākau ma luna nei ua like ia me ka loaʻa ʻana o `url: blog` a ʻo kāna faila pili ʻo `en/blog/TOC` .

#### Mau Papahana

`.i18n/conf.yml` `i18n:doc`

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Eia, `menu: NB demo1,demo2` o ia ho'i ka ho'ohana 'ana i `NB` e hana i ka papa kuhikuhi.

`NB` , ʻo ia ka pōkole o `Name Breif` , e hōʻike ana e hiki ke hōʻike i ka papa kuhikuhi i ka inoa a me ka slogan o ka papahana.

`NB` `demo1,demo2`
E hoʻomaopopo ʻaʻole pono e loaʻa nā hakahaka ** ma mua a ma hope `demo1,demo2` ke koma `,` ma : **

No nā ʻāpana i luna, ʻo ka faila kuhikuhi kuhikuhi e pili ana:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Papa Kuhikuhi Kiko'ī

E hoʻokō i ka `js` plugin `.i18n/hook/after.tran/TOC.js` i loko o ka hale kūʻai demo e heluhelu `i18n.site` i ka waihona kuhikuhi kuhikuhi `doc` e pili ana i ka hoʻonohonoho hoʻohālikelike `TOC` e hana i `json` o ka papa kuhikuhi.

Inā ʻoe e hoʻohana i ka `doc` template, pono ʻoe i kēia plug-in.

Inā hoʻomaka ʻoe i ka papahana `i18n.site` mai kahi waihona hakahaka, e hoʻomanaʻo e kope `.i18n` ma ka papahana demo i kāu papa kuhikuhi.

`Doc` `json`

##### ʻO Ka Wehewehe Kikoʻī Kikoʻī

Penei : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### E Hoʻohana I Ka Indentation E Hōʻike I Nā Pae

Ma luna aʻe `en/blog/TOC` `README.md` ma ka laina mua e pili ana i `i18n.site` ma ke kiʻi ma lalo, ʻo ia ka inoa o ka papahana.

ʻO nā laina ʻelua aʻe e like me ka mea i hōʻike ʻia ma ke kiʻi ma lalo nei.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

pili me `News` , `news/README.md`
pili me `Our Product is Online !` `news/begin.md`

`TOC`

##### ʻO Ke Poʻo Inoa Wale Nō Ka Pae Makua, ʻaʻole Ka ʻike.

Inā nui nā pae o ka indentation, kākau wale ka pae makua i ke poʻo inoa a ʻaʻole ka ʻike. A i ʻole, e huikau ʻia ka typography.

##### Papahana README.md 

o ka papahana, no ka laʻana, hiki iā ʻoe ke kākau `README.md` ka ʻike ma `en/demo2/README.md` .

E hoʻomanaʻo ʻaʻole hōʻike ka ʻike o kēia faila i kahi papa kuhikuhi o nā kikoʻī, no laila makemake ʻia e kaupalena i ka lōʻihi a kākau i kahi hoʻolauna pōkole.

###### Slogan Papahana

`Your Project slogan` like me kou ike ana : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

Pili : me ka laina mua `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

E ʻoluʻolu e nā mea hoʻohana mai Kina, Iapana a me Korea, pono ʻoe e hoʻohana i ke kolonā hapa-ākea `:`

##### Pehea E Hoʻoneʻe Ai I Ka TOC I Ka Nui?

Pono e waiho ʻia ka `TOC` ma ka papa kuhikuhi o ka ʻōlelo kumu.

No ka laʻana, inā ʻo ka ʻōlelo kumu ka ʻōlelo Pākē, a laila ʻo `TOC` `zh/blog/TOC` .

Inā hoʻololi ʻia ka ʻōlelo kumu, pono ʻoe e hoʻoneʻe i `TOC` ma kekahi ʻōlelo ma ka papahana i kahi ʻōlelo ʻē aʻe.

Hiki iā ʻoe ke kuhikuhi i kēia mau kauoha:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

E ʻoluʻolu e hoʻololi i ka `en/` a me `zh/` ma ke kauoha i luna i kāu code ʻōlelo.



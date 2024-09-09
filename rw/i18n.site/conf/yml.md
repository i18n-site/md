# .i18n/conf.yml

Umwirondoro wa `i18n.site` ni `.i18n/conf.yml` .

Usibye igenamiterere rya [`i18`](/i18) , `ignore:` na `i18n:` , dosiye iboneza niyi ikurikira:

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

Muri byo, ibintu `upload` kugeza kuri `ext:` iboneza bivuze ko `.md` gusa bizashyirwaho mugihe cyo gutangaza.

## Kugendagenda Hejuru nav

`nav:` iboneza ryiboneza, bihuye na menu yo kugendagenda hejuru yurupapuro rwurugo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Muri bo, `i18n: home` ihuye na `home: Home` kuri `en/i18n.yml` .

`en/i18n.yml` izahindurwa mundimi nyinshi, nka `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ubusobanuro bumaze kurangira, urashobora guhindura agaciro k'ubuhinduzi `yml` , ariko ntukongere cyangwa ngo usibe urufunguzo rw'ubuhinduzi `yml` .

### `use: Toc` , Icyitegererezo Kimwe Cya Dosiye (Hamwe Nurutonde)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bisobanura gutanga ukoresheje icyitegererezo `Toc` , gitanga icyitegererezo `Markdown` .

`TOC` ni impfunyapfunyo ya `Table of Contents` Iyo iyi shusho yatanzwe, urucacagu rwiyi dosiye `Markdown` ruzerekanwa kuruhande.

`url:` yerekana inzira ya dosiye ya `Markdown` ( `/` ihuye numuzi wububiko `/README.md` , iri zina rya dosiye risaba inyuguti nkuru ninyuguti nto).

### `use: Md` , Dosiye Imwe Yicyitegererezo (Nta Rupapuro)

Inyandikorugero `Md` hamwe nicyitegererezo `Toc` nimwe kandi byombi bikoreshwa mugutanga dosiye `Markdown` . Ariko inyandikorugero `Md` ntabwo yerekana urucacagu kuruhande.

Urashobora guhindura `use: Toc` muburyo bwavuzwe haruguru kuri `use: Md` , ukore `i18n.site` mububiko `md` , hanyuma usure URL ibanziriza iterambere kugirango urebe impinduka kurugo.

### Ubusanzwe Gupakira Nta Nzira Iboneza

Niba inzira runaka igerwaho kandi inzira yambere ibanziriza itagizwe muri `nav:` , dosiye `MarkDown` ihuye ninzira izaterwa byanze bikunze hanyuma itangwe ukoresheje inyandikorugero `Md` .

Kurugero, niba `/test` igerwaho, na `nav:` igashyirwaho idafite iyi nzira, kandi ururimi rwurupapuro nicyongereza (code `en` ), `/en/test.md` ruzaterwa nubusa kandi ruhindurwe ukoresheje icyitegererezo cya `Md` .

Niba `/en/test.md` iyi dosiye idahari, urupapuro `404` rusanzwe ruzerekanwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Inyandikorugero Nyinshi

Muri dosiye iboneza:

```
  - i18n: blog
    use: Doc
```

Yerekana gukoresha `Doc` mugushushanya.

`Doc` inyandikorugero ishyigikira guhuza `MarkDown` kugirango itange inyandiko zerekana imishinga imwe cyangwa myinshi.

#### Umushinga Umwe (Dosiye Nyinshi)

`blog` yavuzwe haruguru nuburyo bumwe-bwa buryo bwa `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Iyo url Irimo Ubusa, Isanzwe Ku Gaciro Ka i18n

Niba `url` itanditswe, `url` isanzwe ku gaciro ka `i18n` Iri tegeko naryo ritangira gukurikizwa kubindi byitegererezo.

Uburyo bwo kwandika hejuru buhwanye na `url: blog` , kandi dosiye ihuye ni `en/blog/TOC` .

#### Imishinga Myinshi

Iboneza rya `i18n:doc` kuri `.i18n/conf.yml` nuburyo bwimishinga myinshi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hano, `menu: NB demo1,demo2` , bisobanura gukoresha inyandikorugero `NB` kugirango utange menu yamanutse.

`NB` , aribwo ahinnye ya `Name Breif` , bivuze ko menu yamanutse ishobora kwerekana izina na slogan yumushinga.

`NB` ikurikirwa na parameter `demo1,demo2` yayinyujije.
: ** Ntihakagombye kubaho umwanya ** mbere na nyuma ya koma `,` muri `demo1,demo2` .

Kubipimo byavuzwe haruguru, dosiye yerekana ububiko bwa dosiye ni:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Imbonerahamwe Ya TOC Indangagaciro

`i18n.site` izakora `js` plug-in `.i18n/hook/after.tran/TOC.js` mububiko bwa demo kugirango usome dosiye `doc` yerekana ububiko bwa dosiye ihuye nibishusho `TOC` byerekana ibyerekezo `json` byububiko.

Niba ukoresha inyandikorugero `doc` , ugomba kugira iyi plug-in.

Niba utangiye umushinga `i18n.site` uhereye mububiko bwubusa, ibuka gukoporora demo umushinga `.i18n` mububiko bwawe.

Inyandikorugero `Doc` izatanga imbonerahamwe yibirimo urutonde rwakozwe `json` .

##### Ibisobanuro Birambuye

`en/blog/TOC` Ibirimo nibi bikurikira :

```
README.md

news/README.md
  news/begin.md
```

##### Koresha Indentation Kugirango Werekane Urwego

`README.md` kumurongo wambere wa `en/blog/TOC` hejuru ihuye na `i18n.site` mwishusho hepfo, nizina ryumushinga.

Imirongo ibiri ikurikira nkuko bigaragara mumashusho hepfo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ihuye na `News` ,
`news/begin.md` ihuye na `Our Product is Online !`

Amadosiye `TOC` yatanzwe kugirango yerekane isano iri hagati yurucacagu, ishyigikire urwego rwinshi, hamwe nibitekerezo bitangirira kuri `#` .

##### Urwego Rwababyeyi Rwandika Gusa Umutwe, Ntabwo Ibirimo.

Iyo hari urwego rwinshi rwo kwerekana, urwego rwababyeyi rwandika umutwe gusa ntabwo ari ibirimo. Bitabaye ibyo, imyandikire izarangirika.

##### Umushinga README.md

Ibirimo birashobora kwandikwa mu ngingo ya `README.md` , nka `en/demo2/README.md` .

Menya ko ibikubiye muri iyi dosiye biterekana imbonerahamwe yibirimo, bityo birasabwa kugabanya uburebure no kwandika intangiriro ngufi.

###### Icivugo C'umushinga

Urashobora kubona ko `Deme Two` ifite umushinga wumushinga munsi yigitonyanga cyamanutse hamwe na catalog yerekana izina ryumushinga `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ibi bihuye numurongo wambere `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Ibirimo nyuma yumurongo wambere wa `:` wurwego rwambere rwumutwe wumushinga `README.md` bizafatwa nkicyerekezo cyumushinga.

Abakoresha baturutse mubushinwa, Ubuyapani na Koreya, nyamuneka menya ko ugomba gukoresha igice cyubugari bwa colon `:` aho gukoresha ubugari bwuzuye.

##### Nigute Ushobora Kwimura TOC Kubwinshi?

`TOC` dosiye igomba gushyirwa mububiko bwururimi rwinkomoko.

Kurugero, niba ururimi rwinkomoko ari Igishinwa, noneho `TOC` hejuru ni `zh/blog/TOC` .

Niba ururimi rwinkomoko rwahinduwe, ugomba guhuza kwimura dosiye `TOC` yururimi runaka mumushinga kurundi rurimi.

Urashobora kwifashisha amategeko akurikira:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Nyamuneka hindura `en/` na `zh/` mumabwiriza yavuzwe haruguru kururimi rwawe.
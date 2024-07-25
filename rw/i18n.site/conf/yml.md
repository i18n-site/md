# .i18n / conf.yml

`i18n.site` Iboneza ni `.i18n/conf.yml` .

Usibye kuri `ignore:` na `i18n:` igenamiterere [`i18`](/i18) , dosiye iboneza niyi ikurikira:

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

Muri byo, `ext:` iboneza ryibintu `upload` ko `.md` yonyine izashyirwaho mugihe cyo gutangaza!

## Kugendagenda Hejuru nav

`nav:` Iboneza, bihuye na menu yo kugendagenda hejuru y'urugo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Muri bo, bihuye na `en/i18n.yml`中`home: Home` `i18n: home`

`en/i18n.yml` bizahindurwa mundimi nyinshi, nka `zh/i18n.yml` !

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ubusobanuro bumaze kurangira, urashobora guhindura agaciro `yml` `yml`

### , Dosiye Imwe Yerekana Icyitegererezo (Hamwe Nurutonde) `use: Toc`

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

bisobanura gukoresha `Toc` cyerekana, gitanga `Markdown` icyitegererezo kimwe `use: Toc`

`TOC` impfunyapfunyo `Markdown` `Table of Contents` .

`url:` inzira ya dosiye ya `Markdown` ( `/` ihuye nububiko bwumuzi `/README.md` , iri zina rya dosiye risaba inyuguti nkuru ninyuguti nto).

### `use: Md` Dosiye Imwe Yerekana Icyitegererezo (Nta Rupapuro)

`Md` ni kimwe na `Toc` , byombi bikoreshwa mugutanga `Markdown` imwe. Nyamara `Md` inyandikorugero ntabwo yerekana urucacagu kuruhande.

Urashobora `use: Toc` muburyo bwavuzwe haruguru kugirango `use: Md` , ukore `i18n.site` muri `md` diregiteri yongeye, hanyuma usure URL yo kureba imbere kugirango urebe impinduka kurugo.

### Ubusanzwe Gupakira Nta Nzira Iboneza

Niba inzira ibanziriza inzira runaka igerwaho itagizwe muri `nav:` `MarkDown` Idosiye ijyanye n'inzira izaterwa byanze bikunze kandi itangwe ukoresheje `Md` inyandikorugero.

Kurugero, niba usuye `/test` kandi `nav:` igashyirwaho idafite iyi nzira, kandi ururimi rwurupapuro ni icyongereza (code `en` ), inyandikorugero izaremerwa `/en/test.md` kandi ihindurwe ukoresheje `Md` .

Niba `/en/test.md` dosiye idahari, urupapuro `404` rusanzwe ruzerekanwa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### Inyandikorugero `use: Doc`

Muri dosiye iboneza:

```
  - i18n: blog
    use: Doc
```

Yerekana gukoresha `Doc`

`Doc` ishyigikira guhuza `MarkDown` nyinshi kugirango itange inyandiko zerekana imishinga imwe cyangwa myinshi.

#### Umushinga Umwe (Dosiye Nyinshi)

`blog` hejuru yavuzwe haruguru nuburyo bumwe bwumushinga wa `Doc` !

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Iyo url Irimo Ubusa, Isanzwe Ku Gaciro Ka i18n

Niba utanditse `url` `url` ku gaciro ka `i18n` .

Uburyo bwo kwandika hejuru buhwanye no kugira `url: blog` Kandi dosiye ihuye ni `en/blog/TOC` .

#### Imishinga Myinshi

`.i18n/conf.yml` muri `i18n:doc` nuburyo bwimishinga myinshi.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hano `menu: NB demo1,demo2` bivuze gukoresha `NB` kugirango utange menu yamanutse!

`NB` ni impfunyapfunyo ya `Name Breif` , yerekana ko menu yamanutse ishobora kwerekana izina na slogan y'umushinga.

`NB` ikurikirwa na parameter `demo1,demo2` yayigejejeho.
Menya ko hatagomba kubaho umwanya ** mbere na nyuma `demo1,demo2` koma `,` : **

Kubipimo byavuzwe haruguru, dosiye yerekana ububiko bwa dosiye ni:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Imbonerahamwe Ya TOC Indangagaciro

`i18n.site` Uzakora `js` plugin `.i18n/hook/after.tran/TOC.js` mububiko bwa demo kugirango usome ububiko bwububiko bwa dosiye `doc` bihuye nibishusho byerekana `TOC` kugirango ubyare `json` urutonde rwububiko.

Niba ukoresha `doc` , ugomba kugira iyi plug-in!

Niba utangije `i18n.site` kuva mububiko bwubusa, ibuka kwigana `.i18n` mumushinga wa demo mububiko bwawe.

`Doc` izatanga imbonerahamwe y'ibirimo urutonde rushingiye kuri `json` .

##### Ibisobanuro Birambuye

Ibirimo : ibi bikurikira `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Koresha Indentation Kugirango Werekane Urwego

Hejuru `en/blog/TOC` `README.md` kumurongo wambere uhuye na `i18n.site` mwishusho hepfo, nizina ryumushinga.

Imirongo ibiri ikurikira nkuko bigaragara mumashusho hepfo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

bihuye na `News` , `news/README.md`
bihuye na `Our Product is Online !` `news/begin.md`

`TOC` yatanzwe kugirango yerekane isano iri hagati yurutonde kandi ishyigikira indentation nyinshi.

##### Urwego Rwababyeyi Rwandika Gusa Umutwe, Ntabwo Ibirimo.

Iyo hari urwego rwinshi rwo kwerekana, urwego rwababyeyi rwandika umutwe gusa ntabwo ari ibirimo. Bitabaye ibyo, imyandikire izarangirika.

##### Umushinga README.md 

`README.md` , kurugero, urashobora kwandika ibiri muri `en/demo2/README.md` .

Menya ko ibikubiye muri iyi dosiye biterekana imbonerahamwe yibirimo, bityo birasabwa kugabanya uburebure no kwandika intangiriro ngufi.

###### Icivugo C'umushinga

Nkuko mubibona , `Deme Two` Hasi ya menu yamanutse na catalog yerekana izina ryumushinga, hariho interuro yumushinga `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: bihuye numurongo wambere `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` Ibirimo nyuma yinyuguti ya mbere `:` murwego rwambere urwego ruzafatwa nkigikorwa cyumushinga.

Abakoresha baturutse mu Bushinwa, Ubuyapani na Koreya, nyamuneka menya ko ugomba gukoresha igice cya kabiri cy'ubugari aho gukoresha ubugari bwuzuye `:`

##### Nigute Ushobora Kwimura TOC Kubwinshi?

`TOC` igomba gushyirwa mububiko bwururimi rwinkomoko.

Kurugero, niba ururimi rwinkomoko ari Igishinwa, noneho `zh/blog/TOC` `TOC`

Niba ururimi rwinkomoko rwahinduwe, ugomba guhuza `TOC` yimuka mururimi runaka mumushinga kurundi rurimi.

Urashobora kwifashisha amategeko akurikira:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Nyamuneka uhindure na `zh/` mumabwiriza yavuzwe haruguru kode y'ururimi `en/`



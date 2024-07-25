# .i18n/conf.yml Ye

Labɛnni filen ye `.i18n/conf.yml` ye `i18n.site`

N’a `ignore:` `i18n:` [`i18`](/i18)

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

Olu cɛma, `ext:` configuration item `.md` ye `upload`

## Sanfɛ Navigatiɔn nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`en/i18n.yml` cɛma `home: Home` `i18n: home`

a bɛna baara kɛ kan caman na, i n'a fɔ `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

`yml` baarakɛcogo bannen kɔfɛ, i bɛ se ka `yml`

### `use: Toc`

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` `Markdown`

`TOC` `Table of Contents` `Markdown`

`url:` bɛ `Markdown` ka dosiye sira jira ( `/` bɛ bɛn jusigilan ma `/README.md` , nin dosiye tɔgɔ in bɛ dakunba ni kɔfɛta fitinin de wajibiya).

### `use: Md`

`Md` Template ni `Toc` ye kelen ye , u fila bɛɛ bɛ kɛ ka `Markdown` file kelen jira . Nka `Md` ja in tɛ ɲɛfɔli kɛ kɛrɛfɛyɔrɔ la.

`md` `i18n.site` se `use: Md` `use: Toc`

### Default Loading Ni Configuration Sira Tɛ

Ni sira dɔ min bɛ don a la, o sira daminɛ ma labɛn `nav:` `MarkDown` file min bɛ bɛn sira ma, o bɛna doni ka kɛɲɛ ni `Md` template ye.

Misali `Md` `/en/test.md` `nav:` `en` `/test`

Ni `/en/test.md` nin filen in tɛ yen, `404` ɲɛ fɔlɔ bɛna jira.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`

Labɛnni dosiye kɔnɔ:

```
  - i18n: blog
    use: Doc
```

A b’a jira ko baara bɛ kɛ ni `Doc`

`Doc` bɛ dɛmɛ don ka `MarkDown` caman fara ɲɔgɔn kan walasa ka sɛbɛnw labɛncogo dilan porozɛ kelen walima porozɛ caman kama.

#### Porozɛ Kelen (Dosiyɛri Caman) .

sanfɛla la `blog` o ye poroze kelen cogoya ye `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ni url Lankolon Don, a Bɛ Daminɛ Ka Kɛ i18n Nafa Ye

`url` ' `i18n` ma sɛbɛn `url`

Sanfɛ sɛbɛnni kɛcogo bɛ bɛn `url: blog` wa a filen bɛnnin ye `en/blog/TOC` ye.

#### Porozɛ Caman Bɛ Kɛ

`.i18n/conf.yml` Labɛn min bɛ `i18n:doc` kɔnɔ o ye poroze caman cogoya ye.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Yan, `menu: NB demo1,demo2` kɔrɔ ye ka baara kɛ ni `NB` walasa ka fɛnw jira minnu bɛ jigin.

`NB` `Name Breif`

`NB` `demo1,demo2`
Aw k' a kɔlɔsi ko yɔrɔ ** man kan ka kɛ ka `demo1,demo2` koma `,` in ɲɛ ani a kɔfɛ : **

Sanfɛla paramɛtiriw kama, ɲɛbilasɛbɛn index file min bɛ bɛn o ma, o ye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Kɔnɔkow Jatebɔsɛbɛn

`i18n.site` `js` `.i18n/hook/after.tran/TOC.js` `doc` `TOC` `json`

Ni i bɛ baara kɛ ni `doc`

N'i `.i18n` `i18n.site`

Jatebla bɛna kɔnɔkow labɛncogo jira ka da `json` sɔrɔlen kan `Doc`

##### Kɔnɔkow Ɲɛfɔli Dafalen

A kɔnɔkow bɛ nin cogo : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Baara Kɛ Ni Indentation Ye Walasa Ka Nivow Jira

`README.md` `en/blog/TOC` `i18n.site`

Zana fila nataw bɛ i n’a fɔ a jiralen bɛ cogo min na ja in na.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

bɛ bɛn `News` , ma `news/README.md`
bɛ bɛn `Our Product is Online !` ma `news/begin.md`

`TOC` Dosiyɛri in bɛ don a kɔnɔ walasa ka outline ka hierarchical relationship jira ani a bɛ indentation multi-level dɛmɛ.

##### Bangebagaw Nivo Bɛ Tɔgɔ Dɔrɔn De Sɛbɛn, a Kɔnɔkow Tɛ.

Ni indentation (daɲɛw) hakɛ caman bɛ yen, bangebagaw nivo (dakun) bɛ tɔgɔ dɔrɔn de sɛbɛn, a tɛ kɔnɔkow sɛbɛn. N’o tɛ, sɛbɛnnikɛcogo bɛna ɲagami.

##### Porozɛ README.md 

poroze in `README.md` , misali la, i bɛ se ka kɔnɔkow sɛbɛn `en/demo2/README.md` kɔnɔ.

A kɔlɔsi ko nin dosiye in kɔnɔkow tɛ kɔnɔkow labɛncogo jira, o la a ka ɲi ka dan sigi a janya la ani ka daminɛkuma surun sɛbɛn.

###### Porozɛ Ka Kumasen

I n’a fɔ aw b’a ye cogo min `Your Project slogan` : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: bɛ bɛn zana fɔlɔ ma `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Baarakɛlaw minnu bɛ bɔ Sinuwa, Japon ani Kore, aw k’a kɔlɔsi ko aw ka kan ka baara kɛ ni kolotuguda tilancɛ ye sanni ka baara kɛ ni kolotuguda ye min bonya bɛɛ ye `:`

##### TOC Bɛ Se Ka Wuli Cogo Di Ka Caya?

`TOC`

Misali la, ni sɔrɔyɔrɔkan ye Sinuwakan ye, o tuma na `TOC` sanfɛ ye `zh/blog/TOC` ye.

Ni source kan bεε bεε bεε bε bεn, i ka kan ka batch move `TOC` dosiyɛriw) Lamaga kan dɔ la poroze kɔnɔ ka Taa kan wɛrɛ la.

Aw bɛ se ka nin cikan ninnu lajɛ:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Aw `zh/` `en/`



# .i18n/conf.yml

`i18n.site` ka labɛn filen ye `.i18n/conf.yml` ye wa a kɔnɔkow ye nin ye :

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

Olu 'cɛ, `upload` ka Se `ext:` , o kɔrɔ ye ko `.md` dɔrɔn de bɛna Blà 'kɔnɔ ni a bɛ Bɔ.

## Sanfɛ Navigatiɔn nav

`nav:` labɛncogo suganditaw, minnu bɛ bɛn navigatiɔn menu ma min bɛ dakun fɔlɔ sanfɛ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Olu 'cɛ, `i18n: home` bɛ Bɛn ni `home: Home` ye `en/i18n.yml` la ( `en` ye poroze bamanankan bamanankan-kan ye).

`en/i18n.yml` kɔnɔkow ye sɛbɛnni ye min bɛ jira navigatiɔn menu kɔnɔ, min bɛna baara kɛ ka kɛɲɛ ni `fromTo` ye labɛncogo la, misali la, a bamanankanna ka kɛ `zh/i18n.yml` ye.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Bamanankan baarakɛcogo bannen kɔfɛ, i bɛ se ka bamanankan baarakɛcogo `yml` nafa sɛmɛntiya, nka i kana bamanankan baarakɛcogo `yml` ka kilisi fara a kan walima k’a bɔ yen.

### `use: Toc` Misali Ni a Labɛncogo

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` kɔrɔ ye ka jatebɔ kɛ ni `Toc` jatebɔlan ye, o min ye `Markdown` jatebɔlan kelen jirali ye.

`TOC` ye `Table of Contents` ka surunya ye.Ni nin jatebɔ in kɛra, nin `Markdown` filen in labɛncogo bɛna jira kɛrɛfɛyɔrɔ la.

`url:` bɛ `Markdown` ka dosiye sira jira ( `/` bɛ bɛn jusigilan `/README.md` ma, o dosiye tɔgɔ in bɛ dakunba ni dakun fitinin de wajibiya).

### `use: Md` Jatebɔlan Min Tɛ Ɲɛfɔli Kɛ

`Md` jatebla ni `Toc` jatebla ye kelen ye wa u fla bɛɛ bɛ Kɛ ka `Markdown` filen kelen Jira. Nka `Md` template tɛ outline jira kɛrɛfɛla la.

I bɛ se ka `use: Toc` sɛmɛntiya sanfɛla labɛncogo la ka kɛ `use: Md` , ka `i18n.site` boli `md` ɲɛbilasɛbɛn kɔnɔ tugun, ka sɔrɔ ka taa yiriwali ɲɛjirali URL la walasa ka fɛn caman sɛgɛsɛgɛ fɛn minnu bɛ fɛn fɔlɔ kan.

### `use: Blog` Blog Ka Misaliw

Bulɔgu jatebɔsɛbɛn bɛ barokunw lisɛli jira (kumasenw ni kumasenw) ka kɛɲɛ ni u bɔli waati ye.

[→ I ka nin yɔrɔ digi walasa ka kunnafoni sɔrɔ a labɛncogo kɛrɛnkɛrɛnnen kan](/i18n.site/conf/blog)

### 0Filen Sɛbɛnw Misali `use: Doc`

Labɛnni dosiye kɔnɔ:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

A b’a jira ko baara bɛ kɛ ni `Doc` ye misali jirali kama.

`Doc` template bɛ dɛmɛ don ka `MarkDown` caman fara ɲɔgɔn kan walasa ka sɛbɛnw labɛncogo dilan porozɛ kelen walima porozɛ caman kama.

#### Porozɛ Caman Ani Dosiye Caman

`.i18n/conf.yml` in `i18n:doc` labɛncogo ye poroze caman-dosiyɛri caman jiracogo ye.

Yan, `menu: NB demo1,demo2` , kɔrɔ ye ka baara Kɛ ni `NB` jatebɔlan ye walasa ka 'yɔrɔ jira.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , n’o ye `Name Breif` surunyalen ye, o kɔrɔ ye ko fɛn min bɛ jigin, o bɛ se ka porozɛ tɔgɔ n’a kumasen jira.

`NB` bɛ tugu paramɛtiri `demo1,demo2` kɔ min tɛmɛna a fɛ.

`demo1,demo2` : ** `,` **

Sanfɛla paramɛtiriw ka ɲɛbilasɛbɛn index file min bɛ bɛn o ma, o ye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Porozɛ Kelen Ka Dosiye Caman

Ni porozɛ kelen dɔrɔn de b’i bolo, i bɛ se k’a labɛn nin cogo la.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Porozɛ kelen min bɛ ni dosiye caman ye, o tɛ `url` labɛn i n’a fɔ jusigi sira `/`
> nav:__ __conf.yml `nav:`
> Nin dilan in ye walasa ka poroze sɛbɛnw, bulɔguw ani kɔnɔko wɛrɛw danfara ka ɲɛ kunnafonisɛbɛnw sababu fɛ.
> A ka ɲi ka baara kɛ ni dosiye kelen ye ani ɲɛ kelen ye i n’a fɔ ɲɛ fɔlɔ.

> [!TIP]
> Ni `url` ma sɛbɛn, `url` bɛ daminɛ ka kɛ `i18n` nafa ye.O sariya in bɛ baara kɛ fana jatebɔlan wɛrɛw la.

#### TOC Kɔnɔkow Jatebɔsɛbɛn

Ni template `use: Doc` bɛ se ka baara kɛ cogoya la, aw bɛ se ka plug-in `i18n.addon/toc` daminɛ `.i18n/conf.yml` kɔnɔ.Labɛncogo bɛ nin cogo la :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` bɛna nin plugin in sigi a yɛrɛma ani k’a kɛ, ka `TOC` ɲɛbilasɛbɛn index file kalan, ka `json` ɲɛbilasɛbɛn labɛn.

Ni porozɛ kelen don ni dosiye caman ye, root directory `TOC` ye directory ye min bɛ bɛn `url:` ma source language directory kɔnɔ Misali la, ni source kan ye Sinuwakan ye: file min bɛ bɛn `url: flashduty` ma, o ye `zh/flashduty/TOC` ye.

Ni porozɛ caman ni dosiye caman don, kun t’a la ka `url:` labɛn.1 jusigilan ye `TOC` ye min bɛ bɛn `i18n` nafa ma.

##### Kɔnɔkow Ɲɛfɔli Dafalen

`en/blog/TOC` kɔnɔkow bɛ nin cogo la :

```
README.md

news/README.md
  news/begin.md
```

##### Baara Kɛ Ni Indentation Ye Walasa Ka Nivow Jira

`README.md` min bɛ `en/blog/TOC` sinsinni fɔlɔ la sanfɛ, o bɛ bɛn `i18n.site` ma ja min bɛ duguma, o ye porozɛ tɔgɔ ye.

Zana fila nataw bɛ i n’a fɔ a jiralen bɛ cogo min na ja in na.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` bɛ bɛn `News` ma , .
`news/begin.md` bɛ bɛn `Our Product is Online !` ma

`TOC` dosiyew bɛ Dòn 'kɔnɔ walasa ka 'sènfɛjuru-yɔrɔ-ko-ɲɔgɔndan Jira, ka 'sèn caman Dòn 'kɔnɔ, ani 'sènfɛ-fɔli minnu bɛ Daminɛ ni `# ` ye.

##### Bangebagaw Nivo Bɛ Tɔgɔ Dɔrɔn De Sɛbɛn, a Kɔnɔkow Tɛ.

Ni indentation (daɲɛw) hakɛ caman bɛ yen, bangebagaw nivo (dakun) bɛ tɔgɔ dɔrɔn de sɛbɛn, a tɛ kɔnɔkow sɛbɛn. N’o tɛ, sɛbɛnnikɛcogo bɛna ɲagami.

##### Porozɛ README.md

kɔnɔkow bɛ se ka sɛbɛn fɛn `README.md` kɔnɔ , i n' a fɔ `en/demo2/README.md` .

A kɔlɔsi ko nin dosiye in kɔnɔkow tɛ kɔnɔkow labɛncogo jira, o la a ka ɲi ka dan sigi a janya la ani ka daminɛkuma surun sɛbɛn.

###### Porozɛ Ka Kumasen

Aw bɛ se k' a ye ko `Deme Two` b' a ka poroze tɔgɔla sɛbɛn jukɔrɔla la ani katalogu ɲɛfɔli porozɛ tɔgɔ `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

O bɛ bɛn `en/demo2/README.md` sinsinni fɔlɔ ma :

```
# Demo Two : Your Project slogan
```

Porozɛ `README.md` tɔgɔ fɔlɔ `:` kɔnɔkow bɛna jate porozɛ kumasen ye.

Baarakɛlaw minnu bɛ bɔ Sinuwa, Zapɔn ani Kore, aw k’a kɔlɔsi ko aw ka kan ka baara kɛ ni kolotuguda tilancɛ `:` sanni ka baara kɛ ni kolotuguda dafalen ye.

##### TOC Bɛ Se Ka Wuli Cogo Di Ka Caya?

`TOC` filenw ka kan ka bila sɔrɔyɔrɔkan ɲɛbilasɛbɛn kɔnɔ.

Misali la, ni bɔyɔrɔkan ye Sinuwakan ye, o tuma na, `TOC` sanfɛ ye `zh/blog/TOC` ye.

Ni source kan bεε bεε bε bεn, i ka kan ka batch move kan dɔ ka file `TOC` minnu bɛ poroze kɔnɔ ka taa kan wɛrɛ la.

Aw bɛ se ka nin cikan ninnu lajɛ:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Aw ye `en/` ni `zh/` sɛmɛntiya sanfɛ cikan na ka kɛ aw ka kanko kode ye.

### Default Loading Ni Configuration Sira Tɛ

Ni sira dɔ bɛ Se ka Sɔrɔ, ni sira daminɛ ma Labɛn `nav:` la, filen `MarkDown` min bɛ Bɛn sira ma, o bɛna Lasegin ka Dabɔ a kan, ka Jira ni `Md` jatebɔlan ye.

Misali la, ni `/test` Sɔrɔla ani `nav:` Labɛnna ni nin sira in daminɛ tɛ, ni sisan ɲininikan ye tubabukan ye (kode `en` ), `/en/test.md` bɛ doni ka Da a kan k’a Jira ni jatebɔlan `Md` ye.

Ni `/en/test.md` nin filen in tɛ yen, ɲɛ `404` dafalen bɛna jira.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
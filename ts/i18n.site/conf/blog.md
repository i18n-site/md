# Xifaniso Xa Blog

`i18n/conf.yml` eka `use: Blog` swi vula ku tirhisa xifaniso xa blog ku hundzuluxela.

Fayili ya `markdown` ya hungu ra blog yi lava ku lulamisa vuxokoxoko bya meta.

Vuxokoxoko bya meta byi fanele ku va eku sunguleni ka fayili, ku sungula hi `---` na ku hela hi `---` Xivumbeko xa vuxokoxoko bya vuhlanganisi exikarhi i `YAML` .

Ku lulamisiwa ka fayili ya demo hi ndlela leyi landzelaka:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` yi kombisa nkatsakanyo wa nhundzu, lowu nga ta kombisiwa eka tluka ra xikombo xa blog.

Hi ku pfuniwa hi `YMAL` ' . | `Xivumbeko xa marito, u nga tsala switlhokovetselo swa mitila yo tala.

Ku lulamisiwa ka murhi wa vukorhokeri eka tlhelo ra xinene ra blog na swona i `TOC` wa tifayela (vona ndzima leyi hundzeke I tiatikili leti xaxametiweke eka `TOC` ntsena leti nga ta humelela eka xikombo xa pheji ya le kaya ya blog.

Swihloko leswi nga riki na vuxokoxoko bya meta a swi nge humeleli eka pheji ya le kaya ya blog, kambe swi nga humelela eka murhi wa vukorhokeri hi tlhelo ra xinene.

## Vuxokoxoko Bya Mutsari

Vuxokoxoko bya mutsari byi nga tsariwa eka mahungu ya meta ya xitsalwana, ku fana na:

```yml
author: marlowe
```

Kutani hlela `author.yml` eka xikombo xa ririmi ra xihlovo ivi u engetela vuxokoxoko bya mutsari, byo tanihi :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` na `title` hinkwaswo i swa ku tihlawulela. Loko `name` yi nga vekiwanga, vito ra xilotlelo (laha `marlowe` ) ri ta tirhisiwa tanihi `name` .

Vona phurojeke ya demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) na [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Xihloko Lexi Pinned

Loko u lava ku pin xitsalwana ehenhla, hi kombela u tsutsuma `i18n.site` ivi u hlela tifayela ta `xxx.yml` leti nga ehansi ka `.i18n/data/blog` , naswona u cinca xitempe xa nkarhi ku ya eka nomboro ya negative (tinomboro to tala ta negative ti ta hleriwe ku suka eka letikulu ku ya eka letitsongo).
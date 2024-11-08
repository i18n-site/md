# Kiolezo Cha Blogi

`i18n/conf.yml` kati ya `use: Blog` inamaanisha kutumia kiolezo cha blogi kwa uwasilishaji.

Faili `markdown` ya chapisho la blogi inahitaji kusanidi maelezo ya meta.

Taarifa ya Meta lazima iwe mwanzoni mwa faili, kuanzia `---` na kuishia na `---` Muundo wa maelezo ya usanidi katikati ni `YAML` .

Mpangilio wa faili ya onyesho ni kama ifuatavyo:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` inaonyesha muhtasari wa maudhui, ambao utaonyeshwa kwenye ukurasa wa faharasa wa blogu.

Kwa msaada wa `YMAL` ' | `Sintaksia, unaweza kuandika muhtasari wa mistari mingi.

Usanidi wa mti wa saraka kwenye upande wa kulia wa blogu pia ni faili `TOC` (tazama sura iliyotangulia) Ni makala zilizoorodheshwa katika `TOC` pekee ndizo zitakazoonekana kwenye faharasa ya ukurasa wa nyumbani wa blogu.

Nakala ambazo hazina maelezo ya meta hazitaonekana kwenye ukurasa wa nyumbani wa blogu, lakini zinaweza kuonekana kwenye saraka ya mti upande wa kulia.

## Habari Za Mwandishi

Habari ya mwandishi inaweza kuandikwa katika meta habari ya makala, kama vile:

```yml
author: marlowe
```

Kisha hariri `author.yml` katika saraka ya lugha chanzi na uongeze habari ya mwandishi, kama vile :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` na `title` zote ni za hiari. Ikiwa `name` haijawekwa, jina la ufunguo ( hapa `marlowe` ) litatumika kama `name` .

Tazama mradi wa onyesho [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) na [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Makala Yaliyobandikwa

Iwapo unahitaji kubandika makala juu, tafadhali endesha `i18n.site` na uhariri faili `xxx.yml` chini ya `.i18n/data/blog` , na ubadilishe muhuri wa muda hadi nambari hasi (nambari nyingi hasi zitapangwa kutoka kubwa hadi ndogo zaidi).
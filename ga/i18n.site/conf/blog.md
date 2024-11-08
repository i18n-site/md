# Teimpléad Blag

Ciallaíonn `i18n/conf.yml` as `use: Blog` teimpléad an bhlag a úsáid le haghaidh rindreála.

Ní mór don chomhad `markdown` den bhlagphost meiteafhaisnéis a chumrú.

Caithfidh meiteaisnéis a bheith ag tús an chomhaid, ag tosú le `---` agus ag críochnú le `---` Is é `YAML` formáid na faisnéise cumraíochta sa lár.

Seo a leanas cumraíocht an chomhaid taispeána:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

Léiríonn `brief` achoimre an ábhair, a thaispeánfar ar leathanach innéacs na blag.

Le cabhair ó `YMAL` ' | `Comhréir, is féidir leat achoimrí illíne a scríobh.

Tá cumraíocht an chrainn eolaire ar thaobh na `TOC` deise den bhlag freisin `TOC` comhad (féach an chaibidil roimhe seo).

Ní bheidh ailt nach bhfuil meiteaisnéis iontu le feiceáil ar leathanach baile an bhlag, ach féadann siad a bheith le feiceáil sa chrann eolaire ar dheis.

## Eolas Faoin Údar

Is féidir faisnéis údair a scríobh i meitefhaisnéis an ailt, mar:

```yml
author: marlowe
```

Ansin cuir `author.yml` in eagar san eolaire teanga foinse agus cuir faisnéis údair, mar :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

Tá `name` , `url` agus `title` roghnach. Mura bhfuil `name` socraithe, úsáidfear an t-ainm eochrach (anseo `marlowe` ) mar `name` .

Féach tionscadal taispeána [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) agus [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Alt Pinned

Más gá duit an t-alt a phionnáil go dtí an barr, rith `i18n.site` le do thoil agus cuir an `xxx.yml` chomhad in eagar faoi `.i18n/data/blog` , agus athraigh an stampa ama go uimhir dhiúltach (sórtálfar uimhreacha diúltacha iolracha ón líon is mó go dtí an ceann is lú).
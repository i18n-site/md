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

Kwa msaada wa `YMAL` '|`Sintaksia, unaweza kuandika muhtasari wa mistari mingi.

Usanidi wa mti wa saraka kwenye upande wa kulia wa blogu pia ni faili `TOC` (tazama sura iliyotangulia) Ni makala zilizoorodheshwa katika `TOC` pekee ndizo zitakazoonekana kwenye faharasa ya ukurasa wa nyumbani wa blogu.

Nakala ambazo hazina maelezo ya meta hazitaonekana kwenye ukurasa wa nyumbani wa blogu, lakini zinaweza kuonekana kwenye saraka ya mti upande wa kulia.

Iwapo unahitaji kubandika makala juu, tafadhali endesha `i18n.site` na uhariri faili `xxx.yml` chini ya `.i18n/data/blog` , na ubadilishe muhuri wa muda hadi nambari hasi (nambari nyingi hasi zitapangwa kutoka ndogo hadi kubwa kwa thamani kamili).
# Viðbót

Hægt er að stilla viðbætur í `.i18n/conf.yml` , svo sem:

```yml
addon:
  - i18n.addon/toc
```

## Opinber Viðbót

* `i18n.addon/toc` :
  Búðu til skráarvísitölu `json` byggt á `TOC` , sjálfgefið virkt

* `i18n.addon/mouse` : Músaráhrif

## Skráarnafnasamkomulag

Viðbætur eru allar `npm` pakkar.

Pakkinn sem samsvarar `i18n.addon/toc` hér að ofan er [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Viðbótin notar nýjustu útgáfuna sjálfgefið og leitar að uppfærslum vikulega.

Ef þú vilt laga útgáfuna geturðu skrifað `i18n.addon/toc@0.1.3` .

Þýðingarskipanalína `i18n.site` mun setja upp hefðbundna skrá viðbótapakkans og keyra hana síðan.

Samþykkt skráarnöfn eru eftirfarandi

### htmIndex.js

`htmIndex.js` verður sprautað í lok `.i18n/htm/index.js` .

Þar sem `__CONF__` verður skipt út fyrir nafn núverandi stillingar (eins og `dev` eða `ol` ).

### afterTran.js

Það verður kallað eftir að þýðingunni er lokið og færibreyturnar sem sendar eru inn eru sem hér segir.

* `lang_li` : Tungumálalisti, fyrsta tungumálið er frummálið
* `changed` : Breyttar skrár
* `root` : Rótarskrá verkefnisins

Skilagildið er orðabók, svo sem

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` er úttaksskráalisti, `path` er skráarslóð og `txt` er innihald skráarinnar.

## Innbyggðar Aðgerðir

Innbyggði `js` keyrslutíminn er byggður á aukaþróun á [boa](https://github.com/boa-dev/boa) og innbyggðu aðgerðirnar eru sem hér segir :

* `wPath(path, txt)` : Skrifaðu í skrá
* `rTxt(path)` : Lestu textaskrá
* `rBin(path)` : Lestu tvöfalda skrá
* `rDir(dirpath)` : Lestu möppuna, skilagildið er fylki : skráarlisti, skráarlisti

## Þróunarleiðbeiningar

Viðbótarþróun getur verið tilvísun [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
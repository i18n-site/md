# Plug-In

Plug-in-urile pot fi configurate în `.i18n/conf.yml` , cum ar fi:

```yml
addon:
  - i18n.addon/toc
```

## Plugin Oficial

* `i18n.addon/toc` : Indexul directorului
  Generați index de director de `json` pe baza `TOC` , activat implicit

* `i18n.addon/mouse` : Efecte mouse

## Convenția De Nume De Fișier

Plug-in-urile sunt toate `npm` pachete.

Pachetul corespunzător cu `i18n.addon/toc` de mai sus este [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pluginul folosește cea mai recentă versiune în mod implicit și verifică săptămânal dacă există actualizări.

Dacă doriți să remediați versiunea, puteți scrie `i18n.addon/toc@0.1.3` .

Linia de comandă de traducere `i18n.site` va instala fișierul convenție al pachetului de plug-in și apoi îl va executa.

Numele de fișiere convenite sunt după cum urmează

### htmIndex.js

`htmIndex.js` va fi injectat până la sfârșitul lui `.i18n/htm/index.js` .

Unde `__CONF__` va fi înlocuit cu numele configurației curente (cum ar fi `dev` sau `ol` ).

### afterTran.js

Acesta va fi apelat după finalizarea traducerii, iar parametrii trecuți sunt după cum urmează.

* `lang_li` : Lista de limbi, prima limbă este limba sursă
* `changed` : Fișiere modificate
* `root` : Directorul rădăcină al proiectului

Valoarea returnată este un dicționar, cum ar fi

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` este lista de fișiere de ieșire, `path` este calea fișierului și `txt` este conținutul fișierului.

## Funcții Încorporate

Timpul de rulare `js` încorporat se bazează pe dezvoltarea secundară a [boa](https://github.com/boa-dev/boa) , iar funcțiile încorporate sunt după cum urmează :

* `wPath(path, txt)` : Scrieți în fișier
* `rTxt(path)` : Citiți fișierul text
* `rBin(path)` : Citiți fișierul binar
* `rDir(dirpath)` : Citiți directorul, valoarea returnată este un tablou : list, listă de fișiere

## Ghid De Dezvoltare

Dezvoltarea plug-in-urilor poate fi o referință [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
# Plug-in

Plug-in-urile pot fi configurate în `.i18n/conf.yml`, cum ar fi:

```yml
addon:
  - i18n.addon/toc
```

## Plugin-uri oficiale

* `i18n.addon/toc` : Indexul cuprinsului
  Generarea unui index de cuprins `json` pe baza `TOC`, activat implicit

* `i18n.addon/mouse` : Efecte pentru mouse

## Convenție pentru numele fișierelor

Pluginurile sunt toate pachete `npm`.

Pachetul corespunzător pentru `i18n.addon/toc` este [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Pluginul folosește implicit cea mai recentă versiune și verifică săptămânal pentru actualizări.

Dacă doriți să fixați o versiune, puteți scrie `i18n.addon/toc@0.1.3`.

Comanda de traducere `i18n.site` va instala fișierul convențional al pachetului de plugin și apoi îl va executa.

Numele fișierelor convenționale sunt după cum urmează

### htmIndex.js

`htmIndex.js` va fi injectat la sfârșitul fișierului `.i18n/htm/index.js`.

În care `__CONF__` va fi înlocuit cu numele configurației actuale (de exemplu, `dev` sau `ol`).

### afterTran.js

Acesta va fi apelat după finalizarea traducerii, iar parametrii transmiși sunt următorii.

* `lang_li` : Lista de limbi, prima limbă fiind limba sursă
* `changed` : Fișierele modificate
* `root` : Directorul rădăcină al proiectului

Valoarea de returnat este un dicționar, cum ar fi

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` pentru lista de fișiere de ieșire, `path` pentru calea fișierului și `txt` pentru conținutul fișierului.

## Funcții integrate

Timpul de rulare încorporat pentru `js` este dezvoltat pe baza unei二次开发 a [boa](https://github.com/boa-dev/boa), iar funcțiile integrate sunt după cum urmează:

* `wPath(path, txt)` : Scrie în fișier
* `rTxt(path)` : Citește fișierul text
* `rBin(path)` : Citește fișierul binar
* `rDir(dirpath)` : Citește directorul, valoarea returnată fiind un array: listă de directoare, listă de fișiere

## Ghid pentru dezvoltare

Dezvoltarea pluginurilor poate fi consultată la [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
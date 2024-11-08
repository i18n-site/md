# Vtičnik

Vtičnike je mogoče konfigurirati v `.i18n/conf.yml` , kot so:

```yml
addon:
  - i18n.addon/toc
```

## Uradni Vtičnik

* `i18n.addon/toc` : Indeks imenika
  Ustvari indeks imenika `json` na podlagi `TOC` , privzeto omogočeno

* `i18n.addon/mouse` : Učinki miške

## Dogovor O Imenih Datotek

Vsi vtičniki so `npm` paketov.

Paket, ki ustreza `i18n.addon/toc` zgoraj, je [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Vtičnik privzeto uporablja najnovejšo različico in tedensko preverja, ali so na voljo posodobitve.

Če želite popraviti različico, lahko napišete `i18n.addon/toc@0.1.3` .

Ukazna vrstica prevajanja `i18n.site` bo namestila datoteko konvencije paketa vtičnikov in jo nato izvedla.

Dogovorjena imena datotek so naslednja

### htmIndex.js

`htmIndex.js` bo vbrizgan do konca `.i18n/htm/index.js` .

Kjer bo `__CONF__` nadomeščena z imenom trenutne konfiguracije (na primer `dev` ali `ol` ).

### afterTran.js

Poklican bo po končanem prevodu in posredovani parametri so naslednji.

* `lang_li` : Seznam jezikov, prvi jezik je izvorni jezik
* `changed` : Spremenjene datoteke
* `root` : Korenski imenik projekta

Povratna vrednost je slovar, kot npr

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` je seznam izhodnih datotek, `path` je pot do datoteke in `txt` je vsebina datoteke.

## Vgrajene Funkcije

Vgrajeno izvajalno okolje `js` temelji na sekundarnem razvoju [boa](https://github.com/boa-dev/boa) , vgrajene funkcije pa so naslednje :

* `wPath(path, txt)` : Zapiši v datoteko
* `rTxt(path)` : Preberi besedilno datoteko
* `rBin(path)` : Preberi binarno datoteko
* `rDir(dirpath)` : Preberite imenik, vrnjena vrednost je matrika : imenikov, seznam datotek

## Vodnik Za Razvoj

Razvoj vtičnikov je lahko referenca [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
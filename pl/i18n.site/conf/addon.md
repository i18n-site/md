# Wtyczka

Wtyczki można skonfigurować w `.i18n/conf.yml` , takie jak:

```yml
addon:
  - i18n.addon/toc
```

## Oficjalna Wtyczka

* `i18n.addon/toc` : Indeks katalogu
  Generuj indeks katalogu `json` na podstawie `TOC` , domyślnie włączony

* `i18n.addon/mouse` : Efekty myszy

## Konwencja Nazw Plików

Wszystkie wtyczki to `npm` pakietów.

Pakiet odpowiadający `i18n.addon/toc` powyżej to [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Wtyczka domyślnie korzysta z najnowszej wersji i co tydzień sprawdza dostępność aktualizacji.

Jeśli chcesz naprawić wersję, możesz napisać `i18n.addon/toc@0.1.3` .

Linia poleceń tłumaczenia `i18n.site` zainstaluje plik konwencji pakietu wtyczek, a następnie go wykona.

Uzgodnione nazwy plików są następujące

### htmIndex.js

`htmIndex.js` zostanie wstrzyknięte na koniec `.i18n/htm/index.js` .

Gdzie `__CONF__` zostanie zastąpione nazwą bieżącej konfiguracji (np. `dev` lub `ol` ).

### afterTran.js

Zostanie wywołany po zakończeniu tłumaczenia, a przekazane parametry są następujące.

* `lang_li` : Lista języków, pierwszym językiem jest język źródłowy
* `changed` : Zmodyfikowane pliki
* `root` : główny projektu

Zwracaną wartością jest słownik, np

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` to lista plików wyjściowych, `path` to ścieżka do pliku, a `txt` to zawartość pliku.

## Wbudowane Funkcje

Wbudowane środowisko wykonawcze `js` opiera się na wtórnym rozwoju [boa](https://github.com/boa-dev/boa) , a wbudowane funkcje są następujące :

* `wPath(path, txt)` : Zapisz do pliku
* `rTxt(path)` : Przeczytaj plik tekstowy
* `rBin(path)` : Przeczytaj plik binarny
* `rDir(dirpath)` : Przeczytaj katalog, zwracaną wartością jest tablica : , lista plików

## Przewodnik Rozwoju

Rozwój wtyczek może być punktem odniesienia [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
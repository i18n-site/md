# Wtyczka

Wtyczki można skonfigurować w `.i18n/conf.yml`, takie jak:

```yml
addon:
  - i18n.addon/toc
```

## Wtyczki officialne

* `i18n.addon/toc`: Indeks spisu treści
  Generowanie indeksu spisu treści `json` na podstawie `TOC`, domyślnie włączone

* `i18n.addon/mouse`: Efekty myszy

## Konwencje nazewnictwa plików

Wszystkie wtyczki są pakietami `npm`.

Powyższy `i18n.addon/toc` odpowiada pakietowi [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Wtyczki domyślnie używają najnowszej wersji i sprawdzają aktualizacje raz w tygodniu.

Jeśli chcesz ustawić stałą wersję, możesz napisać `i18n.addon/toc@0.1.3`.

Polecenie tłumaczenia `i18n.site` zainstaluje umówione pliki pakietu wtyczki, a następnie je uruchomi.

Umówione nazwy plików to:

### htmIndex.js

`htmIndex.js` zostanie wstrzyknięty na koniec `.i18n/htm/index.js`.

W `__CONF__` zostanie zastąpione nazwą bieżącej konfiguracji (np. `dev` lub `ol`).

### afterTran.js

Zostanie wywołane po zakończeniu tłumaczenia, a przekazane argumenty to:

* `lang_li`: Lista języków, pierwszy język to język źródłowy
* `changed`: Zmodyfikowane pliki
* `root`: Katalog główny projektu

Wartość zwracana to słownik, np.:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` to lista plików wyjściowych, `path` to ścieżka do pliku, a `txt` to zawartość pliku.

## Wbudowane funkcje

Wbudowane środowisko wykonawcze `js` jest oparte na wtórnym rozwoju [boa](https://github.com/boa-dev/boa), z wbudowanymi funkcjami takimi jak:

* `wPath(path, txt)`: Zapisz do pliku
* `rTxt(path)`: Przeczytaj tekst z pliku
* `rBin(path)`: Przeczytaj plik binarny
* `rDir(dirpath)`: Przeczytaj katalog, zwraca tablicę: lista katalogów, lista plików

## Przewodnik po tworzeniu wtyczek

Tworzenie wtyczek można przeglądać pod adresem [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
# Wtyczka

Wtyczki można skonfigurować w `.i18n/conf.yml`, np.:

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

Pakiet odpowiadający `i18n.addon/toc` to [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Wtyczki domyślnie używają najnowszej wersji i sprawdzają aktualizacje每周 raz.

Jeśli chcesz ustalić wersję, użyj `i18n.addon/toc@0.1.3`.

Polecenie tłumaczenia `i18n.site` zainstaluje umówione pliki pakietu wtyczki, a następnie je uruchomi.

Umówione nazwy plików są następujące:

### htmIndex.js

`htmIndex.js` zostanie wstrzyknięty na koniec `.i18n/htm/index.js`.

Gdzie `__CONF__` zostanie zastąpione nazwą bieżącej konfiguracji (np. `dev` lub `ol`).

### afterTran.js

Zostanie wywołane po zakończeniu tłumaczenia, z następującymi parametrami:

* `lang_li`: Lista języków, pierwszy język to język źródłowy
* `changed`: Zmienione pliki
* `root`: Główny katalog projektu

Wartość zwracana to słownik, np.:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` to lista plików wyjściowych, `path` to ścieżka do pliku, `txt` to zawartość pliku.

## Wbudowane funkcje

Wbudowane środowisko uruchomieniowe `js` jest oparte na drugim etapie rozwoju [boa](https://github.com/boa-dev/boa) i zawiera następujące wbudowane funkcje:

* `wPath(path, txt)`: Zapisz do pliku
* `rTxt(path)`: Przeczytaj plik tekstowy
* `rBin(path)`: Przeczytaj plik binarny
* `rDir(dirpath)`: Przeczytaj katalog, zwraca tablicę: lista katalogów, lista plików

## Przewodnik po development

Rozwój wtyczek można przeglądać pod [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
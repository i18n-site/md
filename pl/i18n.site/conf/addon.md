# Wtyczka

Wtyczki można skonfigurować w `.i18n/conf.yml`, np.:

```yml
addon:
  - i18n.addon/toc
```

## Wtyczki oficjalne

* `i18n.addon/toc` : Indeks spisu treści
  Generowanie indeksu spisu treści `json` na podstawie `TOC`, domyślnie włączone

* `i18n.addon/mouse` : Efekty myszy

## Konwencje nazewnictwa plików

Wtyczki są pakietami `npm`.

Pakiet odpowiadający `i18n.addon/toc` to [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Wtyczki domyślnie używają najnowszej wersji i sprawdzają aktualizacje raz w tygodniu.

Jeśli chcesz ustawić stałą wersję, użyj `i18n.addon/toc@0.1.3`.

Polecenie tłumaczenia `i18n.site` zainstaluje umówione pliki pakietu wtyczki, a następnie je uruchomi.

Nazwy umówionych plików są następujące

### htmIndex.js

`htmIndex.js` zostanie wstrzyknięty na koniec `.i18n/htm/index.js`.

W którym `__CONF__` zostanie zastąpiony nazwą bieżącej konfiguracji (np. `dev` lub `ol`).

### afterTran.js

Zostanie wywołane po zakończeniu tłumaczenia, a przekazywane argumenty są następujące.

* `lang_li` : Lista języków, pierwszy język to język źródłowy
* `changed` : Zmienione pliki
* `root` : Główny katalog projektu

Wartość zwracana jest słownikiem, np

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` to lista plików wyjściowych, `path` to ścieżka do pliku, `txt` to zawartość pliku.

## Funkcje wbudowane

Wbudowane środowisko uruchomieniowe `js` zostało opracowane na podstawie wtórnego rozwoju [boa](https://github.com/boa-dev/boa), a wbudowane funkcje obejmują:

* `wPath(path, txt)` : Zapisz do ścieżki
* `rTxt(path)` : Przeczytaj tekst z ścieżki
* `rBin(path)` : Przeczytaj plik binarny z ścieżki
* `rDir(dirpath)` : Przeczytaj katalog, zwraca tablicę: lista katalogów, lista plików

## Przewodnik po developmentzie

Rozwój wtyczek może być oparty na [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)
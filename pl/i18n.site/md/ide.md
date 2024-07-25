# Rekomendacja Redaktora

Każdy ma swojego ulubionego edytora. Podzielmy się tutaj naszymi najlepszymi praktykami `Markdown`

Używamy [vscode](https://code.visualstudio.com/) Write `MarkDown` i instalujemy wtyczkę [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) , aby podglądać w czasie rzeczywistym podczas pisania.

Jak pokazano poniżej, kliknij prawym przyciskiem myszy w edytorze, aby otworzyć okno podglądu.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

Wpisz `code xxx.md` w wierszu poleceń, aby wywołać `vscode` open `Markdown` file.

Użyj [PicList](https://github.com/Kuingsmile/PicList) , aby przesłać zdjęcia, pamiętaj o ustawieniu klawisza skrótu przesyłania i prześlij zrzut ekranu jednym kliknięciem.

Obsługuje automatyczne kopiowanie formatu nazwy `Markdown` po przesłaniu, co znacznie poprawia wydajność.

Jednocześnie możesz skorzystać z poniższej konfiguracji, zmodyfikować plik i skonfigurować przesyłany plik tak, aby był automatycznie kompresowany do `avif` w celu zmniejszenia rozmiaru obrazu.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```

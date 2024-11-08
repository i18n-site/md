# Rekomendacja Redaktora

Każdy ma swojego ulubionego edytora. Tutaj dzielimy się naszymi `Markdown` najlepszymi praktykami.

Używamy [vscode](https://code.visualstudio.com/) aby zapisać `MarkDown` i zainstalować wtyczkę [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) , aby podglądać w czasie rzeczywistym podczas pisania.

Jak pokazano poniżej, kliknij prawym przyciskiem myszy w edytorze, aby otworzyć okno podglądu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Wpisz `code xxx.md` w wierszu poleceń, aby wywołać `vscode` i otworzyć plik `Markdown` .

Użyj [PicList](https://github.com/Kuingsmile/PicList) , aby przesłać zdjęcia, pamiętaj o ustawieniu klawisza skrótu przesyłania i prześlij zrzut ekranu jednym kliknięciem.

Obsługuje automatyczne kopiowanie nazwy pliku do formatu `Markdown` po przesłaniu, co znacznie poprawia wydajność.

Jednocześnie możesz skorzystać z poniższej konfiguracji, zmodyfikować plik i skonfigurować przesyłany plik tak, aby był automatycznie kompresowany do `avif` , aby zmniejszyć rozmiar obrazu.

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
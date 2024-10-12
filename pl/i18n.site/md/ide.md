# Rekomendacja Edytora

Każdy ma swój ulubiony edytor; tutaj dzielimy się naszymi najlepszymi praktykami w zakresie `Markdown`.

Używamy [vscode](https://code.visualstudio.com/) do pisania `Markdown`, a także instalujemy wtyczkę [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced), aby móc podglądać tekst w czasie rzeczywistym.

Jak na rysunku poniżej, kliknięcie prawym przyciskiem myszy w edytorze umożliwia otwarcie okna podglądu.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Wprowadzenie `code xxx.md` w wierszu poleceń uruchamia `vscode` i otwiera plik `Markdown`.

Wysyłanie obrazów za pomocą [PicList](https://github.com/Kuingsmile/PicList); nie zapomnij skonfigurować skrótu do wysyłania, aby móc jednym kliknięciem wysłać zrzut ekranu.

Po wysłaniu automatycznie kopiujemy nazwę pliku do formatu `Markdown`, co znacznie zwiększa efektywność.

Możesz również参考 poniższą konfigurację, zmodyfikować plik, aby automatycznie kompresować wysyłane pliki do formatu `avif`, co zmniejsza ich rozmiar.

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
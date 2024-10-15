# Często zadawane pytania

## Przypadkowo usunięcie `.i18n/v` spowodowało, że pakiet `npm` nie może zostać opublikowany

W `.i18n/v/ol/v.hash` przechowywana jest historia wersji opublikowanych pakietów `npm`.

Jeśli przypadkowo usuniesz `.i18n/v/ol`, pakiet `npm` nie będzie mógł zostać opublikowany.

W takim przypadku najpierw znajdź numer wersji ostatniego wydania swojego projektu na [npmjs.com](//npmjs.com), na przykład `0.1.9`.

Następnie użyj poniższego `bash`, aby utworzyć plik.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Zwróć uwagę, że naprawa w ten sposób spowoduje utratę historii plików, co uniemożliwi inkrementalną aktualizację przy kolejnym wydaniu, a cała zawartość zostanie ponownie spakowana i przesłana.
# Powszechny Problem

## Przypadkowo Usunięty `.i18n/V` , Co Powoduje, Że `Npm` Pakiet Nie Może Zostać Opublikowany

`.i18n/v/ol/v.hash` Historyczna wersja `npm` wydania pakietu została zapisana w !

Jeśli przypadkowo usuniesz `.i18n/v/ol` pakiet `npm` nie zostanie opublikowany.

W tym momencie najpierw znajdź numer wersji ostatniego wydania swojego projektu, na przykład w [npmjs.com](//npmjs.com) `0.1.9`

Następnie zapoznaj się z plikiem `bash` Create poniżej.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Należy pamiętać, że naprawa w ten sposób spowoduje utratę historii plików, uniemożliwiając stopniową aktualizację kolejnej wersji, a cała zawartość zostanie ponownie spakowana i przesłana raz.


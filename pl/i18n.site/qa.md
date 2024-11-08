# Często Zadawane Pytania

## Przypadkowo Usunięto `.i18n/v` , Co Spowodowało, Że Pakiet `npm` Nie Został Opublikowany

Wersja historyczna wydana przez pakiet `npm` jest zapisana w `.i18n/v/ol/v.hash` .

Jeśli przypadkowo usuniesz `.i18n/v/ol` pakiet `npm` nie zostanie zwolniony.

W tym momencie najpierw znajdź numer wersji ostatniego wydania swojego projektu w [npmjs.com](//npmjs.com) na przykład `0.1.9` .

Następnie odwołaj się do `bash` poniżej, aby utworzyć plik.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Należy pamiętać, że naprawa w ten sposób spowoduje utratę historii plików, uniemożliwiając stopniową aktualizację kolejnej wersji, a cała zawartość zostanie ponownie spakowana i przesłana raz.
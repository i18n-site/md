# Levinud Probleem

## Kogemata Kustutatud `.i18n/V` Mistõttu Paketi `Npm` Avaldamine Nurjus

`npm` paketi väljalaske ajalooline versioon on salvestatud `.i18n/v/ol/v.hash`

Kui kustutate kogemata `.i18n/v/ol` siis paketti `npm` ei avaldata.

Praegu leidke esmalt oma projekti viimase väljalase versiooni number, näiteks [npmjs.com](//npmjs.com) `0.1.9`

Seejärel vaadake allolevat `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Pange tähele, et sellisel viisil parandamisel kaob failiajalugu, mistõttu ei ole võimalik järgmise versiooni järk-järgult värskendada ning kogu sisu pakitakse ümber ja laaditakse üles üks kord.


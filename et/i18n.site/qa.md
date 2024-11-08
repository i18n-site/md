# Kkk

## Kogemata Kustutati `.i18n/v` , Mistõttu Pakett `npm` Ei Õnnestunud Avaldada

Paketi `npm` poolt välja antud ajalooline versioon salvestatakse `.i18n/v/ol/v.hash` .

Kui kustutate kogemata `.i18n/v/ol` siis paketti `npm` ei vabastata.

Praegu leidke esmalt oma projekti viimase väljalaskeversiooni versiooni number [npmjs.com](//npmjs.com) näiteks `0.1.9` .

Seejärel vaadake faili loomiseks allolevat punkti `bash` .

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Pange tähele, et sellisel viisil parandamisel kaob failiajalugu, mistõttu ei ole võimalik järgmise versiooni järk-järgult värskendada ning kogu sisu pakitakse ümber ja laaditakse üles üks kord.
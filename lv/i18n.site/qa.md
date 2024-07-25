# Izplatīta Problēma

## Nejauši Izdzēsts `.i18n/V` Kā Rezultātā `Npm` Pakotne Netika Publicēta

`npm` pakotnes laidiena vēsturiskā versija ir saglabāta `.i18n/v/ol/v.hash`

Ja nejauši izdzēsīsit `.i18n/v/ol` `npm` pakotne netiks publicēta.

Šobrīd vispirms atrodiet sava projekta pēdējās laidiena versijas numuru, piemēram, [npmjs.com](//npmjs.com) `0.1.9`

Pēc tam skatiet tālāk esošo `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Ņemiet vērā, ka, veicot labošanu šādā veidā, tiks zaudēta failu vēsture, padarot neiespējamu pakāpenisku nākamā laidiena atjaunināšanu, un viss saturs tiks pārsaiņots un augšupielādēts vienu reizi.


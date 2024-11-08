# Faq

## Nejauši Izdzēsts `.i18n/v` , Kā Rezultātā `npm` Pakotne Netika Publicēta

`npm` pakotnes izdotā vēsturiskā versija tiek saglabāta `.i18n/v/ol/v.hash` .

Ja nejauši izdzēsīsit `.i18n/v/ol` pakotne `npm` netiks izlaista.

Šobrīd vispirms atrodiet sava projekta pēdējās laidiena versijas versijas numuru [npmjs.com](//npmjs.com) piemēram, `0.1.9` .

Pēc tam skatiet tālāk norādīto `bash` lai izveidotu failu.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Ņemiet vērā, ka, veicot labošanu šādā veidā, tiks zaudēta failu vēsture, padarot neiespējamu pakāpenisku nākamā laidiena atjaunināšanu, un viss saturs tiks pārsaiņots un augšupielādēts vienu reizi.
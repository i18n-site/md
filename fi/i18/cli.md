# Yksityiskohtainen Selitys Komentoriviparametreista

## `-p` Tiedostot

`-p` tai `--purge` tyhjentää tiedostot, jotka ovat jokaisessa käännöshakemistossa, mutta joita ei ole lähdekielen hakemistossa.

Koska asiakirjoja kirjoitettaessa Markdown-tiedostojen nimiä muutetaan usein, mikä johtaa moniin vanhoihin ja hylättyihin tiedostoihin käännöshakemistoon.

Käytä tätä parametria puhdistaaksesi tiedostot, jotka on poistettava muiden kielten hakemistoista.

## `-d` Määrittää Käännöshakemiston

Käännetty hakemisto on oletuksena hakemisto, jossa nykyinen tiedosto sijaitsee.

`-d` tai `--workdir` voi määrittää käännöshakemiston, kuten:

```
i18 -d ~/i18n/md
```

## `-h` Näytä Ohje

`-h` tai `--help` nähdäksesi komentorivin ohjeen.
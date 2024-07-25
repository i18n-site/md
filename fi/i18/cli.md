# Yksityiskohtainen Selitys Komentoriviparametreista

## `-P` Tiedostot

`-p` `--purge` puhdistaa tiedostot, jotka ovat jokaisessa käännöshakemistossa, mutta joita ei ole lähdekielen hakemistossa.

Koska asiakirjoja kirjoitettaessa Markdown-tiedostojen nimiä muutetaan usein, jolloin käännöshakemistoon jää monia vanhoja ja hylättyjä tiedostoja.

Käytä tätä parametria puhdistaaksesi tiedostot, jotka on poistettava muiden kielten hakemistoista.

## `-D` Käännöshakemisto

Käännetty hakemisto on oletuksena hakemisto, jossa nykyinen tiedosto sijaitsee.

`-d` `--workdir` voi määrittää käännöshakemiston, kuten:

```
i18 -d ~/i18n/md
```

## Katso `-H`

`-h` `--help` tarkastella komentorivin ohjetta.
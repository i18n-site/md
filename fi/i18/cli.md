# Yksityiskohtainen selitys komentoriviparametreista

## `-p` siivoaa tiedostot

`-p` tai `--purge` poistaa tiedostot, jotka ovat käännöshakemistoissa mutta eivät lähdetiedostossa.

Koska asiakirjojen kirjoittamisen aikana Markdown-tiedostojen nimiä muutetaan usein, mikä voi aiheuttaa vanhojen ja käyttämättömien tiedostojen kertymistä käännöshakemistoihin.

Tämän parametrin avulla voit poistaa tiedostot, jotka tulisi poistaa muiden kielten hakemistoista.

## `-d` määrittää käännöshakemiston

Käännöshakemisto on oletuksena nykyisen tiedoston sijainti.

`-d` tai `--workdir` voi määrittää käännöshakemiston, esimerkiksi:

```
i18 -d ~/i18n/md
```

## `-h` näytä ohje

`-h` tai `--help` näyttää komentorivin ohjeen.
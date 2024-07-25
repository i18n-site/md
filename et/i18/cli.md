# Käsurea Parameetrite Üksikasjalik Selgitus

## `-P` Failid

`-p` `--purge` puhastab failid, mis on olemas igas tõlkekataloogis, kuid mida pole lähtekeele kataloogis.

Sest dokumentide kirjutamisel korrigeeritakse sageli Markdowni failinimesid, mille tulemusena on tõlkekataloogis palju vanu ja mahajäetud faile.

Kasutage seda parameetrit failide puhastamiseks, mis tuleks muudes keeltes kataloogides kustutada.

## `-D` Tõlkekataloog

Tõlgitud kataloog on vaikimisi kataloog, kus praegune fail asub.

`-d` `--workdir` saab määrata tõlkekataloogi, näiteks:

```
i18 -d ~/i18n/md
```

## Vaata `-H`

`-h` `--help` vaadata käsurea abi.
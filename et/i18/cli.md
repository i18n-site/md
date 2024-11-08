# Käsurea Parameetrite Üksikasjalik Selgitus

## `-p` Failid

`-p` või `--purge` kustutab failid, mis on olemas igas tõlkekataloogis, kuid mida pole lähtekeele kataloogis.

Sest dokumentide kirjutamisel korrigeeritakse sageli Markdowni failinimesid, mis toob kaasa palju vanu ja mahajäetud faile tõlkekataloogis.

Kasutage seda parameetrit failide puhastamiseks, mis tuleks muudes keeltes kataloogides kustutada.

## `-d` Määrab Tõlkekataloogi

Tõlgitud kataloog on vaikimisi kataloog, kus praegune fail asub.

`-d` või `--workdir` võib määrata tõlkekataloogi, näiteks:

```
i18 -d ~/i18n/md
```

## `-h` Vaata Abi

`-h` või `--help` käsurea abi vaatamiseks.
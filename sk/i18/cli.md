# Podrobné Vysvetlenie Parametrov Príkazového Riadku

## `-P` Súbory

`-p` Alebo `--purge` vyčistí súbory, ktoré existujú v každom adresári prekladu, ale neexistujú v adresári zdrojového jazyka.

Pretože pri písaní dokumentov sa názvy súborov Markdown často upravujú, výsledkom čoho je veľa starých a opustených súborov v adresári prekladu.

Tento parameter použite na vyčistenie súborov, ktoré by mali byť vymazané v iných jazykových adresároch.

## `-D` Adresár Prekladu

Preložený adresár je štandardne nastavený na adresár, v ktorom sa nachádza aktuálny súbor.

`-d` Alebo `--workdir` môže určiť adresár prekladu, ako napríklad:

```
i18 -d ~/i18n/md
```

## `-H` Pomoc

`-h` Alebo `--help` Môžete zobraziť pomocníka pre príkazový riadok.
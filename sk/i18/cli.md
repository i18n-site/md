# Podrobné Vysvetlenie Parametrov Príkazového Riadku

## `-p` Súbory

`-p` alebo `--purge` vymaže súbory, ktoré existujú v každom prekladovom adresári, ale neexistujú v adresári zdrojového jazyka.

Pretože pri písaní dokumentov sa názvy súborov Markdown často upravujú, čo vedie k mnohým starým a opusteným súborom v adresári prekladu.

Tento parameter použite na vyčistenie súborov, ktoré by mali byť vymazané v iných jazykových adresároch.

## `-d` Určuje Prekladový Adresár

Preložený adresár je štandardne nastavený na adresár, v ktorom sa nachádza aktuálny súbor.

`-d` alebo `--workdir` môže určiť adresár prekladu, ako napríklad:

```
i18 -d ~/i18n/md
```

## `-h` Zobraziť Pomocníka

`-h` alebo `--help` na zobrazenie pomocníka príkazového riadka.
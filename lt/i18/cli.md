# Išsamus Komandinės Eilutės Parametrų Paaiškinimas

## `-p` Failus

`-p` arba `--purge` išvalys failus, kurie yra kiekviename vertimo kataloge, bet neegzistuoja šaltinio kalbos kataloge.

Mat rašant dokumentus Markdown failų pavadinimai dažnai koreguojami, todėl vertimo kataloge atsiranda daug senų ir apleistų failų.

Naudokite šį parametrą, kad išvalytumėte failus, kurie turėtų būti ištrinti iš kitų kalbų katalogų.

## `-d` Nurodo Vertimo Katalogą

Pagal numatytuosius nustatymus išverstas katalogas yra katalogas, kuriame yra dabartinis failas.

`-d` arba `--workdir` gali nurodyti vertimo katalogą, pvz.:

```
i18 -d ~/i18n/md
```

## `-h` Žiūrėti Žinyną

`-h` arba `--help` kad peržiūrėtumėte komandinės eilutės žinyną.
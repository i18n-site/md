# Išsamus Komandinės Eilutės Parametrų Paaiškinimas

## `-P` Failus

`-p` `--purge` išvalys failus, kurie yra kiekviename vertimo kataloge, bet neegzistuoja šaltinio kalbos kataloge.

Kadangi rašant dokumentus Markdown failų pavadinimai dažnai koreguojami, todėl vertimo kataloge yra daug senų ir apleistų failų.

Naudokite šį parametrą, kad išvalytumėte failus, kurie turėtų būti ištrinti iš kitų kalbų katalogų.

## `-D` Vertimo Katalogą

Pagal numatytuosius nustatymus išverstas katalogas yra katalogas, kuriame yra dabartinis failas.

`-d` `--workdir` gali nurodyti vertimo katalogą, pvz.:

```
i18 -d ~/i18n/md
```

## `-H` Pagalbą

`-h` `--help` peržiūrėti komandinės eilutės žinyną.
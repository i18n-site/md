# Įdiegti &

## Įdiegti

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigūracijos Prieigos Raktas

`i18n.site` turi integruotą `i18` vertimo įrankį. [Spustelėkite čia, kad peržiūrėtumėte `i18` dokumentą, kad sukonfigūruotumėte prieigos raktą](/i18/use) .

## Demo Projektas

Pradėkime nuo demonstracinio projekto, kad išmoktume naudoti `i18n.site` .

Pirmiausia klonuojame demonstracinę saugyklą ir paleidžiame komandą taip:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Naudotojai žemyninėje Kinijoje gali:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` kodo bazinio klono katalogo pavadinimas turi būti `md` kad būtų palengvinta vietinė peržiūra naudojant `docker` .

### Išversti

Pirmiausia įveskite `md` katalogą ir paleiskite `i18n.site` , kuris išvers iš `en` į `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Paleidus bus sugeneruoti vertimo ir talpyklos failai. Nepamirškite jų pridėti prie saugyklos `md` `git add . ` .

### Vietinė Peržiūra

Įdiekite ir paleiskite `docker` ( `MAC` vartotojas rekomenduoja naudoti [orbstack](https://orbstack.dev) kaip `docker` vykdymo laiką).

Tada įveskite `docker` katalogą ir paleiskite `./up.sh` , tada apsilankykite [https://127.0.0.1](https://127.0.0.1) kad peržiūrėtumėte vietoje.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
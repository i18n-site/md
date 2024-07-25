# Dažna Problema

## Netyčia Ištrinta `.i18n/V` Todėl Nepavyko Paskelbti `Npm` Paketo

`npm` paketo leidimo istorinė versija išsaugota `.i18n/v/ol/v.hash`

Jei netyčia ištrinsite `.i18n/v/ol` `npm` paketas nebus paskelbtas.

Šiuo metu pirmiausia suraskite savo projekto paskutinės leidimo versijos numerį, pavyzdžiui, [npmjs.com](//npmjs.com) `0.1.9`

Tada žr. toliau pateiktą `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Atminkite, kad taisant tokiu būdu prarasite failų istoriją, todėl bus neįmanoma laipsniškai atnaujinti kito leidimo, o visas turinys bus perpakuotas ir įkeltas vieną kartą.


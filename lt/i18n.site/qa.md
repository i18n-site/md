# Duk

## Netyčia Ištrinta `.i18n/v` , Todėl Nepavyko Paskelbti `npm` Paketo

Istorinė versija, išleista `npm` paketu, išsaugoma `.i18n/v/ol/v.hash` .

Jei netyčia ištrinsite `.i18n/v/ol` `npm` paketas nebus išleistas.

Šiuo metu pirmiausia suraskite paskutinės projekto leidimo versijos numerį [npmjs.com](//npmjs.com) pavyzdžiui, `0.1.9` .

Tada žr. `bash` žemiau, kad sukurtumėte failą.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Atminkite, kad taisant tokiu būdu prarasite failų istoriją, todėl bus neįmanoma laipsniškai atnaujinti kito leidimo, o visas turinys bus perpakuotas ir įkeltas vieną kartą.
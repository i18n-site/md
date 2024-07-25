# Komuna Problemo

## Hazarde Forigita `.i18n/V` Kaŭzante La Malsukceson De Eldonado De La `Npm` Pako

La historia versio de `npm` paka eldono estas konservita en `.i18n/v/ol/v.hash`

Se vi hazarde forigas `.i18n/v/ol` la `npm` pako ne estos publikigita.

Nuntempe, unue trovu la numeron de versio de la lasta eldono de via projekto en [npmjs.com](//npmjs.com) ekzemple `0.1.9`

Poste raportu al la ĉi-suba dosiero `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Notu, ke ripari tiamaniere perdos la dosierhistorion, ebligante pliiĝe ĝisdatigi la sekvan eldonon, kaj la tuta enhavo estos repakita kaj alŝutita unufoje.


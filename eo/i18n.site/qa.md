# Oftaj Demandoj

## Hazarde Forigis `.i18n/v` , Igante Pakaĵon `npm` Malsukcesi Esti Publikigita

La historia versio publikigita de pako `npm` estas konservita en `.i18n/v/ol/v.hash` .

Se vi hazarde forigas `.i18n/v/ol` pako `npm` ne estos liberigita.

Nuntempe, unue trovu la numeron de versio de la lasta eldono de via projekto en [npmjs.com](//npmjs.com) ekzemple, `0.1.9` .

Tiam raportu al `bash` sube por krei la dosieron.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Notu, ke ripari tiamaniere perdos la dosierhistorion, ebligante pliiĝe ĝisdatigi la sekvan eldonon, kaj la tuta enhavo estos repakita kaj alŝutita unufoje.
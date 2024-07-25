# Vanligt Problem

## Raderade Av Misstag `.i18n/V` Vilket Gör Att `Npm` Paketet Misslyckas Med Att Publiceras

Den historiska versionen av `npm` paketutgåvan är sparad i `.i18n/v/ol/v.hash`

Om du av misstag tar bort `.i18n/v/ol` kommer `npm` -paketet inte att publiceras.

Hitta först versionsnumret för den senaste versionen av ditt projekt i till exempel [npmjs.com](//npmjs.com) `0.1.9`

Se sedan `bash` Skapa filen nedan.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Observera att reparation på detta sätt kommer att förlora filhistoriken, vilket gör det omöjligt att stegvis uppdatera nästa utgåva, och allt innehåll kommer att packas om och laddas upp en gång.


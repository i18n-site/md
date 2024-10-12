# Faq

## Raderade `.i18n/v` Av Misstag, Vilket Gör Att Paket `npm` Inte Kan Publiceras

Den historiska versionen som släpptes av paket `npm` sparas i `.i18n/v/ol/v.hash` .

Om du av misstag raderar `.i18n/v/ol` kommer paket `npm` inte att släppas.

Hitta först versionsnumret för den senaste versionen av ditt projekt i [npmjs.com](//npmjs.com) till exempel `0.1.9` .

Se sedan `bash` nedan för att skapa filen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Observera att reparation på detta sätt kommer att förlora filhistoriken, vilket gör det omöjligt att stegvis uppdatera nästa utgåva, och allt innehåll kommer att packas om och laddas upp en gång.
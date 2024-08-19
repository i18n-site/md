# Faq

## Av misstag raderade `.i18n/v`, vilket gör att `npm`-paketet inte kan publiceras

`.i18n/v/ol/v.hash` innehåller historiken för publiceringar av `npm`-paketet.

Om du av misstag raderar `.i18n/v/ol` kommer `npm`-paketet inte att kunna publiceras.

Först hitta versionsnumret för den senaste publicerade versionen av ditt projekt på [npmjs.com](//npmjs.com), till exempel `0.1.9`.

Använd sedan följande `bash`-kommando för att skapa filen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Observera att detta sätt att åtgärda problemet kommer att förlora filhistoriken, vilket gör det omöjligt att utföra inkrementella uppdateringar vid nästa publicering, och allt innehåll kommer att packas om och laddas upp igen.
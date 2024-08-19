# Frecvente întrebări

## Ștergerea accidentală a `.i18n/v` a făcut ca pachetul `npm` să nu poată fi publicat

Istoricul versiunilor publicate ale pachetului `npm` este salvat în `.i18n/v/ol/v.hash`.

Dacă ștergeți accidental `.i18n/v/ol`, pachetul `npm` nu va putea fi publicat.

În acest moment, mai întâi găsiți numărul versiunii celei mai recente lansări a proiectului dvs. pe [npmjs.com](//npmjs.com), de exemplu, `0.1.9`.

Apoi urmați instrucțiunile de mai jos în `bash` pentru a crea fișierul.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Rețineți că repararea în acest mod va pierde istoricul fișierelor, ceea ce face imposibilă actualizarea incrementată pentru următoarea versiune, iar tot conținutul va fi repackat și încărcat din nou.
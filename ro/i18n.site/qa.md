# Faq

## S-a Șters Accidental `.i18n/v` , Ceea Ce a Făcut Ca Pachetul `npm` Să Nu Fie Publicat

Versiunea istorică lansată de pachetul `npm` este salvată în `.i18n/v/ol/v.hash` .

Dacă ștergeți accidental `.i18n/v/ol` pachetul `npm` nu va fi eliberat.

În acest moment, găsiți mai întâi numărul versiunii ultimei versiuni a proiectului dvs. în [npmjs.com](//npmjs.com) de exemplu, `0.1.9` .

Apoi consultați `bash` de mai jos pentru a crea fișierul.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Rețineți că repararea în acest mod va pierde istoricul fișierelor, făcând imposibilă actualizarea progresivă a următoarei ediții, iar tot conținutul va fi reambalat și încărcat o dată.
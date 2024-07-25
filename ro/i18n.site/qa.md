# Problemă Comună

## S-a Șters Accidental `.i18n/V` Ceea Ce Face Ca Pachetul `Npm` Să Nu Fie Publicat

Versiunea istorică a lansării `npm` pachetului este salvată în `.i18n/v/ol/v.hash`

Dacă ștergeți din greșeală `.i18n/v/ol` pachetul `npm` nu va fi publicat.

În acest moment, găsiți mai întâi numărul versiunii ultimei versiuni a proiectului dvs. în [npmjs.com](//npmjs.com) de exemplu `0.1.9`

Apoi consultați fișierul `bash` Create de mai jos.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Rețineți că repararea în acest fel va pierde istoricul fișierelor, făcând imposibilă actualizarea progresivă a următoarei ediții, iar tot conținutul va fi reambalat și încărcat o dată.


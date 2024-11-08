# Faq

## Zoufälleg `.i18n/v` Geläscht, Doduerch Datt De Package `npm` Net Publizéiert Gëtt

Déi historesch Versioun verëffentlecht vum Package `npm` gëtt an `.i18n/v/ol/v.hash` gespäichert.

Wann Dir zoufälleg `.i18n/v/ol` gëtt de Package `npm` net verëffentlecht.

Zu dëser Zäit, fanne fir d'éischt d'Versiounsnummer vun der leschter Verëffentlechungsversioun vun Ärem Projet an [npmjs.com](//npmjs.com) zum Beispill, `0.1.9` .

Da kuckt op `bash` hei ënnen fir d'Datei ze kreéieren.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Bedenkt datt d'Reparatur op dës Manéier d'Dateigeschicht verléiert, sou datt et onméiglech ass déi nächst Verëffentlechung inkrementell ze aktualiséieren, an all Inhalt gëtt ëmgepackt an eemol eropgelueden.
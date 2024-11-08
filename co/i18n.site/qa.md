# Faq

## Accidentalmente Sguassatu `.i18n/v` , Facendu Chì U Pacchettu `npm` Ùn Sia Micca Publicatu

A versione storica liberata da u pacchettu `npm` hè salvatu in `.i18n/v/ol/v.hash` .

Se sguassate accidentalmente `.i18n/v/ol` u pacchettu `npm` ùn serà micca liberatu.

À questu tempu, truvate prima u numeru di versione di l'ultima versione di u vostru prughjettu in [npmjs.com](//npmjs.com) per esempiu, `0.1.9` .

Allora riferite à `bash` sottu per creà u schedariu.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Innota chì a riparazione in questu modu perderà a storia di u schedariu, facendu impussibile di aghjurnà gradualmente a prossima liberazione, è tuttu u cuntenutu serà repackaged è caricatu una volta.
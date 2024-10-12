# Faq

## Tafallich Wiske `.i18n/v` , Wêrtroch Pakket `npm` Net Publisearre Wurdt

De histoaryske ferzje útbrocht troch pakket `npm` wurdt bewarre yn `.i18n/v/ol/v.hash` .

As jo per ongeluk `.i18n/v/ol` sil pakket `npm` net frijjûn wurde.

Fyn op dit stuit earst it ferzjenûmer fan de lêste releaseferzje fan jo projekt yn [npmjs.com](//npmjs.com) bygelyks `0.1.9` .

Ferwize dan nei `bash` hjirûnder om it bestân te meitsjen.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Tink derom dat reparaasje op dizze manier de bestânskiednis ferliest, wêrtroch it ûnmooglik is om de folgjende release ynkrementeel te aktualisearjen, en alle ynhâld sil ien kear opnij ynpakt en upload wurde.
# Glossari

Es pot crear el fitxer de glossari `.i18n/term.yml` El següent és un exemple d'un glossari l'idioma del qual és el xinès :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Entre ells, `zh:` representa el glossari xinès predeterminat de l'idioma d'origen : És a dir, no importa a quin idioma es tradueix, el xinès `快猫星云` es tradueix al `Flashcat` .

`zh>en:` significa que quan es tradueix del xinès a l'anglès, `告警` es tradueix a `alert` i `故障` es tradueix a `incident` .

Aquí, es poden escriure diversos idiomes de destinació després de `zh>` , cosa que pot simplificar la configuració de termes en idiomes similars.

Per exemple, `zh>sk>cs` significa que quan el xinès es tradueix a l'eslovac i al txec, aquesta llista de terminologia es comparteix.

> [!TIP]
> Els glossaris de terminologia multiobjectiu i els glossaris de terminologia d'una sola objecció admeten l'ús combinat. Per exemple, es poden definir tres glossaris de terminologia `zh>sk>cs` , `zh>sk` i `zh>cs` al mateix temps.
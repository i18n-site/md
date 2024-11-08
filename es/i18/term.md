# Glosario

Se puede crear el archivo de glosario `.i18n/term.yml` ¡El siguiente es un ejemplo de un glosario cuyo idioma de origen es el chino :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Entre ellos, `zh:` representa el glosario chino predeterminado del idioma de origen : Es decir, no importa a qué idioma se traduzca, el chino `快猫星云` se traduce al `Flashcat` .

`zh>en:` significa que al traducir del chino al inglés, `告警` se traduce a `alert` y `故障` se traduce a `incident` .

Aquí, se pueden escribir varios idiomas de destino después de `zh>` , lo que puede simplificar la configuración de términos en idiomas similares.

Por ejemplo, `zh>sk>cs` significa que cuando se traduce el chino al eslovaco y al checo, esta lista de terminología se comparte.

> [!TIP]
> Los glosarios de terminología de objetivos múltiples y los glosarios de terminología de objeción única admiten el uso combinado. Por ejemplo, se pueden definir tres glosarios de terminología `zh>sk>cs` , `zh>sk` y `zh>cs` al mismo tiempo.
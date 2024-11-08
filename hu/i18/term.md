# Szójegyzék

Létrehozható `.i18n/term.yml` szószedet. A következő példa egy szószedetre, amelynek forrásnyelve a kínai :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Közülük `zh:` a forrásnyelv alapértelmezett `快猫星云` szószedetét `Flashcat` :

`zh>en:` azt jelenti, hogy kínairól angolra fordítva `告警` `alert` -re, `故障` pedig `incident` -re fordítják.

Itt több célnyelv is írható `zh>` után, ami leegyszerűsítheti a hasonló nyelvű kifejezések konfigurálását.

Például `zh>sk>cs` azt jelenti, hogy amikor a kínait szlovákra és csehre fordítják, akkor ez a terminológiai lista meg van osztva.

> [!TIP]
> A többcélú terminológiai szószedetek és az egycélú terminológiai szójegyzékek támogatják a kombinált használatot. Például három terminológiai szószedet `zh>sk>cs` , `zh>sk` és `zh>cs` definiálható egyszerre.
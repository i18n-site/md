# Terminaro

Glosaro-dosiero `.i18n/term.yml` povas esti kreita La sekvanta estas ekzemplo de glosaro kies fontlingvo estas la ĉina :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Inter ili, `zh:` reprezentas la defaŭltan ĉinan glosaron de la : Tio estas, ne gravas en kiun lingvon ĝi estas tradukita, la ĉina `快猫星云` estas tradukita en `Flashcat` .

`zh>en:` signifas, ke kiam oni tradukas de la ĉina al la angla, `告警` estas tradukita en `alert` kaj `故障` estas tradukita en `incident` .

Ĉi tie, pluraj cellingvoj povas esti skribitaj post `zh>` , kio povas simpligi la agordon de terminoj en similaj lingvoj.

Ekzemple, `zh>sk>cs` signifas ke kiam la ĉina estas tradukita en la slovakan kaj la ĉeĥan, ĉi tiu terminologia listo estas kunhavata.

> [!TIP]
> Multobjektivaj terminologiaj terminaroj kaj unuobjektaj terminologiaj glosaro subtenas kombinitan uzon. Ekzemple, tri terminologiaj terminaroj `zh>sk>cs` , `zh>sk` kaj `zh>cs` povas esti difinitaj samtempe.
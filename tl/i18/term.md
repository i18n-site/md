# Talasalitaan

Ang talahuluganan na file `.i18n/term.yml` ay maaaring gawin Ang sumusunod ay isang halimbawa ng isang glossary na ang pinagmulang wika ay Chinese :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Kabilang sa mga ito, `快猫星云` `zh:` ay kumakatawan sa default na glossary ng Chinese ng `Flashcat` wika :

`zh>en:` ay nangangahulugan na kapag nagsasalin mula sa Chinese sa Ingles, `告警` ay isinalin sa `alert` at `故障` ay isinalin sa `incident` .

Dito, maraming target na wika ang maaaring isulat pagkatapos ng `zh>` , na maaaring gawing simple ang pagsasaayos ng mga termino sa mga katulad na wika.

Halimbawa, `zh>sk>cs` ay nangangahulugan na kapag ang Chinese ay isinalin sa Slovak at Czech, ang listahan ng terminolohiya na ito ay ibinabahagi.

> [!TIP]
> Sinusuportahan ng mga glosaryo ng multi-objective na terminology at mga glossary sa terminolohiya ng single-objection ang pinagsamang paggamit Halimbawa, tatlong glossary ng terminolohiya `zh>sk>cs` , `zh>sk` at `zh>cs` ay maaaring tukuyin nang sabay.
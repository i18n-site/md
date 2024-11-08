# Fjalorth

Skedari i fjalorit `.i18n/term.yml` mund të krijohet Më poshtë është një shembull i një fjalori, gjuha burimore e të cilit është kinezisht :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Midis tyre, `zh:` përfaqëson fjalorin e `Flashcat` kinez `快猫星云` gjuhës burimore :

`zh>en:` do të thotë që kur përkthehet nga kinezishtja në anglisht, `告警` përkthehet në `alert` dhe `故障` përkthehet në `incident` .

Këtu, disa gjuhë të synuara mund të shkruhen pas `zh>` , gjë që mund të thjeshtojë konfigurimin e termave në gjuhë të ngjashme.

Për shembull, `zh>sk>cs` do të thotë që kur kinezishtja përkthehet në sllovakisht dhe çekisht, kjo listë terminologjike ndahet.

> [!TIP]
> Fjalorët e terminologjisë me shumë objektiva dhe fjalorët e terminologjisë me një kundërshtim të vetëm mbështesin përdorimin e kombinuar Për shembull, tre fjalorë terminologjikë `zh>sk>cs` , `zh>sk` dhe `zh>cs` mund të përcaktohen në të njëjtën kohë.
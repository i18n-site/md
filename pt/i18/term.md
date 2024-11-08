# Glossário

O arquivo de glossário `.i18n/term.yml` pode ser criado. A seguir está um exemplo de um glossário cujo idioma de origem é o chinês :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Entre eles, `zh:` representa o glossário chinês padrão do idioma de origem : Ou seja, não importa para qual idioma seja traduzido, o chinês `快猫星云` é traduzido para `Flashcat` !

`zh>en:` significa que ao traduzir do chinês para o inglês, `告警` é traduzido para `alert` e `故障` é traduzido para `incident` .

Aqui, vários idiomas de destino podem ser escritos após `zh>` , o que pode simplificar a configuração de termos em idiomas semelhantes.

Por exemplo, `zh>sk>cs` significa que quando o chinês é traduzido para o eslovaco e o checo, esta lista terminológica é partilhada.

> [!TIP]
> Glossários de terminologia multiobjetivo e glossários de terminologia de objeto único suportam o uso combinado. Por exemplo, três glossários de terminologia `zh>sk>cs` , `zh>sk` e `zh>cs` podem ser definidos ao mesmo tempo.
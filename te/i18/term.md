# పదకోశం

పదకోశం ఫైల్ `.i18n/term.yml` ని సృష్టించవచ్చు, దీని మూలం చైనీస్ పదకోశం యొక్క ఉదాహరణ :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

వాటిలో, `zh:` అనేది మూల భాష యొక్క డిఫాల్ట్ చైనీస్ గ్లాసరీని సూచిస్తుంది : అంటే, అది ఏ భాషలోకి అనువదించబడినా, చైనీస్ `快猫星云` `Flashcat` లోకి అనువదించబడింది.

`zh>en:` అంటే చైనీస్ నుండి ఆంగ్లంలోకి అనువదించేటప్పుడు, `告警` `alert` లోకి అనువదించబడుతుంది మరియు `故障` `incident` లోకి అనువదించబడింది.

ఇక్కడ, బహుళ లక్ష్య భాషలను `zh>` తర్వాత వ్రాయవచ్చు, ఇది సారూప్య భాషలలోని నిబంధనల కాన్ఫిగరేషన్ను సులభతరం చేస్తుంది.

ఉదాహరణకు, `zh>sk>cs` అంటే చైనీస్ని స్లోవాక్ మరియు చెక్లోకి అనువదించినప్పుడు, ఈ పరిభాష జాబితా భాగస్వామ్యం చేయబడుతుంది.

> [!TIP]
> బహుళ-ఆబ్జెక్టివ్ పదజాలం పదకోశం మరియు సింగిల్-ఆబ్జెక్షన్ పదజాలం పదకోశములు సంయుక్త వినియోగానికి మద్దతు ఇస్తాయి, ఉదాహరణకు, `zh>sk>cs` , `zh>sk` మరియు `zh>cs` పదజాలం ఒకే సమయంలో నిర్వచించబడతాయి.
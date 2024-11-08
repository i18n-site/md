# Glossary

Glossary file `.i18n/term.yml` can be created. Below is an example of a glossary with Chinese as the source language:

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Among them, `zh:` represents the default Chinese glossary: That is, no matter what language it is translated into, the Chinese term `快猫星云` is always translated as `Flashcat`.

`zh>en:` indicates that when translating from Chinese to English, `告警` is translated to `alert` and `故障` is translated to `incident`.

Here, multiple target languages can be specified after `zh>`, which simplifies the configuration of terms for similar languages.

For example, `zh>sk>cs` means that when Chinese is translated into Slovak and Czech, this single glossary is shared.

> [!TIP]
> Multi-target and single-target glossaries can be used in combination. For example, you can define three glossaries: `zh>sk>cs`, `zh>sk`, and `zh>cs` simultaneously.
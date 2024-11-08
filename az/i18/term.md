# Lüğət

Lüğət faylı `.i18n/term.yml` yaradıla bilər. Aşağıdakılar mənbə dili Çin dili olan lüğətə nümunədir :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Onların arasında `zh:` , mənbə dilin standart Çin lüğətini `Flashcat` `快猫星云` :

`zh>en:` o deməkdir ki, Çin dilindən ingilis dilinə tərcümə edilərkən `告警` in `alert` yə, `故障` isə `incident` -ə çevrilməsi deməkdir.

Burada `zh>` sonra çoxlu hədəf dillər yazıla bilər ki, bu da oxşar dillərdə terminlərin konfiqurasiyasını sadələşdirə bilər.

Məsələn, `zh>sk>cs` o deməkdir ki, Çin Slovak və Çex dillərinə tərcümə edildikdə bu terminologiya siyahısı paylaşılır.

> [!TIP]
> Çoxməqsədli terminologiya lüğətləri və tək etirazlı terminologiya lüğətləri birləşmiş istifadəni dəstəkləyir. Məsələn, eyni zamanda üç terminologiya lüğəti `zh>sk>cs` , `zh>sk` və `zh>cs` müəyyən edilə bilər.
# கட்டளை வரி அளவுருக்கள் பற்றிய விரிவான விளக்கம்

## 0 கோப்புகளை `-p`

`-p` அல்லது `--purge` ஒவ்வொரு மொழிபெயர்ப்பு கோப்பகத்திலும் இருக்கும் ஆனால் மூல மொழி கோப்பகத்தில் இல்லாத கோப்புகளை அழிக்கும்.

ஏனெனில் ஆவணங்களை எழுதும் போது, Markdown கோப்பு பெயர்கள் அடிக்கடி சரிசெய்யப்படுகின்றன, இது மொழிபெயர்ப்பு கோப்பகத்தில் பல பழைய மற்றும் கைவிடப்பட்ட கோப்புகளுக்கு வழிவகுக்கிறது.

பிற மொழி கோப்பகங்களில் நீக்கப்பட வேண்டிய கோப்புகளை சுத்தம் செய்ய இந்த அளவுருவைப் பயன்படுத்தவும்.

## `-d` மொழிபெயர்ப்பு கோப்பகத்தைக் குறிப்பிடுகிறது

மொழிபெயர்க்கப்பட்ட கோப்பகம் தற்போதைய கோப்பு இருக்கும் கோப்பகத்திற்கு இயல்புநிலையாக இருக்கும்.

`-d` அல்லது `--workdir` போன்ற மொழிபெயர்ப்பு கோப்பகத்தைக் குறிப்பிடலாம்:

```
i18 -d ~/i18n/md
```

## `-h` உதவியைப் பார்க்கவும்

கட்டளை வரி உதவியைப் பார்க்க `-h` அல்லது `--help` .
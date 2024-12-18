# .i18n/conf.yml

`i18n.site` க்கான உள்ளமைவு கோப்பு `.i18n/conf.yml` மற்றும் உள்ளடக்கம் பின்வருமாறு :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

அவற்றில், `upload` முதல் `ext:` உள்ளமைவு உருப்படியை வெளியிடும் போது `.md` மட்டுமே பதிவேற்றப்படும்.

## மேல் வழிசெலுத்தல் nav

`nav:` உள்ளமைவு விருப்பங்கள், முகப்புப்பக்கத்தின் மேலே உள்ள வழிசெலுத்தல் மெனுவுடன் தொடர்புடையது.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

அவற்றில், `i18n: home` `en/i18n.yml` இல் `home: Home` ஐ ஒத்துள்ளது (இங்கு `en` என்பது திட்ட மொழிபெயர்ப்பின் மூல மொழியாகும்).

`en/i18n.yml` உள்ளடக்கம் என்பது வழிசெலுத்தல் மெனுவில் காட்டப்படும் உரை, இது உள்ளமைவில் `fromTo` இன் படி மொழிபெயர்க்கப்படும், எடுத்துக்காட்டாக, `zh/i18n.yml` க்கு மொழிபெயர்க்கப்படும்.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

மொழிபெயர்ப்பு முடிந்ததும், நீங்கள் மொழிபெயர்ப்பு `yml` இன் மதிப்பை மாற்றலாம், ஆனால் மொழிபெயர்ப்பு `yml` இன் விசையைச் சேர்க்கவோ நீக்கவோ வேண்டாம்.

### 0 அவுட்லைன் கொண்ட `use: Toc` ஆவண டெம்ப்ளேட்

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` என்பது `Toc` டெம்ப்ளேட்டைப் பயன்படுத்தி ரெண்டரிங் செய்வதைக் குறிக்கிறது, இது ஒற்றை `Markdown` டெம்ப்ளேட்டை ரெண்டரிங் செய்கிறது.

`TOC` என்பது `Table of Contents` என்பதன் சுருக்கமாகும். இந்த டெம்ப்ளேட் ரெண்டர் செய்யப்படும் போது, இந்த `Markdown` கோப்பின் அவுட்லைன் பக்கப்பட்டியில் காட்டப்படும்.

`url:` என்பது `Markdown` இன் கோப்பு பாதையை குறிக்கிறது ( `/` ரூட் டைரக்டரி `/README.md` க்கு ஒத்திருக்கிறது, இந்த கோப்பு பெயருக்கு ஒரு பெரிய முன்னொட்டு மற்றும் சிறிய பின்னொட்டு தேவை).

### 0 அவுட்லைன் இல்லாத `use: Md` ஆவண டெம்ப்ளேட்

`Md` டெம்ப்ளேட் மற்றும் `Toc` டெம்ப்ளேட் ஒரே மாதிரியானவை மற்றும் இரண்டும் ஒற்றை `Markdown` கோப்பை வழங்கப் பயன்படுத்தப்படுகின்றன. ஆனால் `Md` டெம்ப்ளேட் பக்கப்பட்டியில் அவுட்லைனைக் காட்டவில்லை.

மேலே உள்ள கட்டமைப்பில் உள்ள `use: Toc` `use: Md` ஆக மாற்றலாம், `md` கோப்பகத்தில் `i18n.site` மீண்டும் இயக்கலாம், பின்னர் முகப்புப்பக்கத்தில் உள்ள மாற்றங்களைக் காண மேம்பாட்டு மாதிரிக்காட்சி URL ஐப் பார்வையிடவும்.

### `use: Blog` வலைப்பதிவு டெம்ப்ளேட்கள்

வலைப்பதிவு டெம்ப்ளேட் கட்டுரைகளின் பட்டியலை (தலைப்புகள் மற்றும் சுருக்கங்கள்) வெளியீட்டு நேரத்தின் வரிசையில் காட்டுகிறது.

[→ குறிப்பிட்ட உள்ளமைவைப் பற்றி அறிய இங்கே கிளிக் செய்யவும்](/i18n.site/conf/blog)

### `use: Doc` கோப்பு ஆவண வார்ப்புருக்கள்

உள்ளமைவு கோப்பில்:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

டெம்ப்ளேட் ரெண்டரிங்கிற்கு `Doc` பயன்படுத்துவதைக் குறிக்கிறது.

`Doc` டெம்ப்ளேட் ஒற்றை அல்லது பல திட்டங்களுக்கான ஆவணக் குறிப்புகளை உருவாக்க பல `MarkDown` ஒருங்கிணைப்பதை ஆதரிக்கிறது.

#### பல திட்டங்கள் மற்றும் பல கோப்புகள்

`.i18n/conf.yml` இன் `i18n:doc` இன் உள்ளமைவு பல திட்ட பல கோப்பு ரெண்டரிங் பயன்முறையாகும்.

இங்கே, `menu: NB demo1,demo2` , என்பது கீழ்தோன்றும் மெனுவை வழங்க `NB` டெம்ப்ளேட்டைப் பயன்படுத்துவதாகும்.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , இது `Name Breif` இன் சுருக்கமாகும், கீழ்தோன்றும் மெனு திட்டத்தின் பெயரையும் கோஷத்தையும் காண்பிக்கும்.

`NB` தொடர்ந்து அதற்கு அனுப்பப்பட்ட அளவுரு `demo1,demo2` .

`demo1,demo2` : ** `,` **

மேலே உள்ள அளவுருக்களுக்கான தொடர்புடைய அடைவு குறியீட்டு கோப்பு:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### ஒற்றை திட்ட பல கோப்புகள்

உங்களிடம் ஒரே ஒரு திட்டம் இருந்தால், அதை பின்வருமாறு கட்டமைக்கலாம்.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> பல கோப்புகளைக் கொண்ட ஒற்றைத் திட்டம் `url` ரூட் பாதை `/` ஆக உள்ளமைப்பதை ஆதரிக்காது
> __conf.yml nav:__ `nav:`
> இந்த வடிவமைப்பு திட்ட ஆவணங்கள், வலைப்பதிவுகள் மற்றும் பிற உள்ளடக்கங்களை அடைவுகள் மூலம் சிறப்பாக வேறுபடுத்துவதாகும்.
> ஒரு கோப்பு மற்றும் ஒரு பக்கத்தை முகப்புப் பக்கமாகப் பயன்படுத்த பரிந்துரைக்கப்படுகிறது.

> [!TIP]
> `url` எழுதப்படாவிட்டால், `i18n` இன் மதிப்புக்கு `url` இயல்புநிலையாக இருக்கும். மற்ற டெம்ப்ளேட்களுக்கும் இந்த விதி அமலுக்கு வரும்.

#### TOC உள்ளடக்க அட்டவணை

உள்ளமைவில் வார்ப்புரு `use: Doc` இயக்கப்பட்டிருந்தால், `.i18n/conf.yml` இல் செருகுநிரல் `i18n.addon/toc` இயக்கவும். கட்டமைப்பு பின்வருமாறு :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` தானாகவே இந்த செருகுநிரலை நிறுவி செயல்படுத்தும், `TOC` அடைவு குறியீட்டு கோப்பைப் படித்து, `json` கோப்பக அவுட்லைனை உருவாக்கும்.

இது பல கோப்புகளைக் கொண்ட ஒரு திட்டமாக இருந்தால், மூல மொழி கோப்பகத்தில் உள்ள `url:` உடன் தொடர்புடைய கோப்பகம் `TOC` ஆகும், எடுத்துக்காட்டாக, மூல மொழி சீனமாக இருந்தால்: `url: flashduty` உடன் தொடர்புடைய கோப்பு `zh/flashduty/TOC` ஆகும்.

இது பல திட்டங்கள் மற்றும் பல கோப்புகள் எனில், `url:` உள்ளமைக்க வேண்டிய அவசியமில்லை. `TOC` இன் ரூட் கோப்பகம் `i18n` இன் மதிப்புக்கு தொடர்புடைய கோப்பகமாகும்.

##### விரிவான உள்ளடக்க விளக்கம்

`en/blog/TOC` உள்ளடக்கம் பின்வருமாறு :

```
README.md

news/README.md
  news/begin.md
```

##### நிலைகளைக் குறிக்க உள்தள்ளலைப் பயன்படுத்தவும்

மேலே உள்ள `en/blog/TOC` இன் முதல் வரிசையில் உள்ள `README.md` கீழே உள்ள படத்தில் உள்ள `i18n.site` உடன் ஒத்துள்ளது, இது திட்டப் பெயராகும்.

அடுத்த இரண்டு வரிகள் கீழே உள்ள ஸ்கிரீன்ஷாட்டில் காட்டப்பட்டுள்ளது.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` க்கு ஒத்திருக்கிறது,
`news/begin.md` `Our Product is Online !` உடன் ஒத்துள்ளது

`TOC` கோப்புகள் அவுட்லைனின் படிநிலை உறவைக் குறிக்க உள்தள்ளப்பட்டுள்ளன, பல-நிலை உள்தள்ளலை ஆதரிக்கின்றன மற்றும் `# ` இல் தொடங்கும் வரி கருத்துகள்.

##### பெற்றோர் நிலை தலைப்பை மட்டுமே எழுதுகிறது, உள்ளடக்கத்தை அல்ல.

உள்தள்ளலின் பல நிலைகள் இருக்கும்போது, பெற்றோர் நிலை தலைப்பை மட்டுமே எழுதுகிறது மற்றும் உள்ளடக்கத்தை அல்ல. இல்லையெனில், அச்சுக்கலை குழப்பமடையும்.

##### திட்டம் README.md

`en/demo2/README.md` போன்ற உருப்படி `README.md` இல் உள்ளடக்கத்தை எழுதலாம்.

இந்தக் கோப்பின் உள்ளடக்கம் உள்ளடக்க அட்டவணையைக் காட்டவில்லை என்பதை நினைவில் கொள்ளவும், எனவே நீளத்தைக் குறைத்து ஒரு சிறிய அறிமுகத்தை எழுத பரிந்துரைக்கப்படுகிறது.

###### திட்ட முழக்கம்

கீழ்தோன்றும் மெனுவுக்குக் கீழே `Deme Two` திட்டக் கோஷம் இருப்பதையும், திட்டப் பெயரின் பட்டியல் அவுட்லைன் `Your Project slogan` என்பதையும் நீங்கள் பார்க்கலாம் :

![](https://p.3ti.site/1721276842.avif)

இது `en/demo2/README.md` இன் முதல் வரிசைக்கு ஒத்திருக்கிறது :

```
# Demo Two : Your Project slogan
```

ப்ராஜெக்ட் `README.md` இன் முதல் நிலை தலைப்பின் முதல் பெருங்குடல் `:` க்குப் பிறகு உள்ள உள்ளடக்கம் திட்ட முழக்கமாகக் கருதப்படும்.

சீனா, ஜப்பான் மற்றும் கொரியாவைச் சேர்ந்த பயனர்கள், முழு அகலப் பெருங்குடலுக்குப் பதிலாக அரை அகல பெருங்குடல் `:` பயன்படுத்த வேண்டும் என்பதை நினைவில் கொள்ளவும்.

##### TOC ஐ மொத்தமாக நகர்த்துவது எப்படி?

`TOC` கோப்புகள் மூல மொழியின் கோப்பகத்தில் வைக்கப்பட வேண்டும்.

எடுத்துக்காட்டாக, மூல மொழி சீனமாக இருந்தால், மேலே உள்ள `TOC` `zh/blog/TOC` ஆகும்.

மூல மொழி மாற்றப்பட்டால், திட்டத்தில் உள்ள ஒரு குறிப்பிட்ட மொழியின் `TOC` கோப்புகளை வேறொரு மொழிக்கு நீங்கள் தொகுதியாக நகர்த்த வேண்டும்.

பின்வரும் கட்டளைகளை நீங்கள் குறிப்பிடலாம்:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

மேலே உள்ள கட்டளையில் `en/` மற்றும் `zh/` உங்கள் மொழிக் குறியீட்டில் மாற்றவும்.

### உள்ளமைவு பாதை இல்லாமல் இயல்புநிலை ஏற்றுதல்

ஒரு குறிப்பிட்ட பாதையை அணுகுவதற்கு, பாதை முன்னொட்டு `nav:` இல் கட்டமைக்கப்படவில்லை என்றால், பாதையுடன் தொடர்புடைய `MarkDown` கோப்பு இயல்பாக ஏற்றப்பட்டு `Md` டெம்ப்ளேட்டைப் பயன்படுத்தி ரெண்டர் செய்யப்படும்.

எடுத்துக்காட்டாக, இந்த பாதையின் முன்னொட்டு இல்லாமல் `/test` அணுகப்பட்டு `nav:` கட்டமைக்கப்பட்டிருந்தால், தற்போதைய உலாவல் மொழி ஆங்கிலம் (குறியீடு `en` ), `/en/test.md` இயல்புநிலையாக ஏற்றப்பட்டு டெம்ப்ளேட் `Md` பயன்படுத்தி ரெண்டர் செய்யப்படும்.

`/en/test.md` இந்த கோப்பு இல்லை என்றால், இயல்புநிலை `404` பக்கம் காட்டப்படும்.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
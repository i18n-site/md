# ස්ථාපනය කර භාවිතා කරන්න

## වින්ඩෝස් මුලින්ම git bash ස්ථාපනය කරන්න

windows පද්ධතිය, කරුණාකර [`git bash` බාගත කර ස්ථාපනය කිරීමට මෙතැන ක්ලික් කරන්න](https://git-scm.com/download/win) .

`git bash` හි පසු මෙහෙයුම් ධාවනය කරන්න.

## ස්ථාපනය කරන්න

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### පරිවර්තන ටෝකනය වින්යාස කරන්න

ටෝකනය පිටපත් කිරීමට පිවිසෙන්න [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` සාදන්න, පිටපත් කළ අන්තර්ගතය එයට අලවන්න, අන්තර්ගතය පහත පරිදි වේ:

```
token: YOUR_API_TOKEN
```

ඊට අමතරව, ඔබට [i18n.site/payBill](//i18n.site/payBill) ක්රෙඩිට් කාඩ්පතක් බැඳීමට අවශ්ය වේ (නැවත ආරෝපණය කිරීම අවශ්ය නොවේ, වෙබ් අඩවිය භාවිතය අනුව ස්වයංක්රීයව ගාස්තු අඩු කරයි, [මිල නියම කිරීම සඳහා මුල් පිටුව බලන්න](/#price) ).

## භාවිතා කරන්න

### Demo ව්යාපෘතිය

`i18` පරිවර්තනයේ වින්යාසය ඉගෙන ගැනීමට කරුණාකර demo ව්යාපෘතිය වෙත යොමු වන්න [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

චීනයේ පරිශීලකයින්ට ක්ලෝන කළ හැක [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

ක්ලෝන කිරීමෙන් පසු, පරිවර්තනය සම්පූර්ණ කිරීම සඳහා නාමාවලිය ඇතුළු කර `i18` ධාවනය කරන්න.

### නාමාවලි ව්යුහය

සැකිලි ගබඩා නාමාවලි ව්යුහය පහත පරිදි වේ

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` නාමාවලියෙහි පරිවර්තිත ආදර්ශන ගොනු උදාහරණයක් පමණක් වන අතර ඒවා මකා දැමිය හැක.

### පරිවර්තනය ධාවනය කරන්න

බහලුම ඇතුල් කර පරිවර්තනය කිරීමට `i18` ධාවනය කරන්න.

පරිවර්තනයට අමතරව, වැඩසටහන මඟින් `.i18n/data` ෆෝල්ඩරය ද ජනනය කරනු ඇත, කරුණාකර එය ගබඩාවට එක් කරන්න.

නව ගොනුව පරිවර්තනය කිරීමෙන් පසු, මෙම නාමාවලිය තුළ නව දත්ත ගොනුවක් ජනනය වනු ඇත `git add . ` එකතු කිරීමට මතක තබා ගන්න.

## මානකරන ගොනුව

`.i18n/conf.yml` යනු `i18` විධාන රේඛා පරිවර්තන මෙවලමෙහි වින්යාස ගොනුවයි

අන්තර්ගතය පහත පරිදි වේ:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### මූලාශ්ර & පරිවර්තන භාෂාව

වින්යාස ගොනුවේ, `fromTo` හි යටත්:

`en` යනු මූලාශ්ර භාෂාවයි, `zh ja ko de fr` යනු පරිවර්තනයේ ඉලක්ක භාෂාවයි.

භාෂා කේතය බලන්න [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

උදාහරණයක් ලෙස, ඔබට චීන භාෂාව ඉංග්රීසි භාෂාවට පරිවර්තනය කිරීමට අවශ්ය නම්, මෙම පේළිය `zh: en` නැවත ලියන්න.

ඔබට සහාය දක්වන සියලුම භාෂාවලට පරිවර්තනය කිරීමට අවශ්ය නම්, කරුණාකර `:` පසුව හිස්ව තබන්න. උදාහරණ වශයෙන්

```
i18n:
  fromTo:
    en:
```

ඔබට විවිධ උප බහලුම් සඳහා විවිධ `fromTo` වින්යාසගත කළ : /

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

මෙම වින්යාස වගුවේ, නාමාවලිය `blog` පරිවර්තනයේ මූලාශ්ර භාෂාව `zh` වන අතර, නාමාවලිය `blog/your_file_name.md` පරිවර්තනයේ මූලාශ්ර භාෂාව `ja` වේ.

### බහුභාෂා රූප/සබැඳි

`replace:` සහ `MarkDown` හි ඇති පින්තූර සහ සබැඳි වල URL (සහ කාවැද්දූ `HTML` හි `src` සහ `href` ගුණාංග) මෙම උපසර්ගය සමඟ `.i18n/conf.yml` හි වින්යාස කළ විට, URL හි ඇති මූල භාෂා කේතය පරිවර්තනයේ භාෂා කේතය මගින් ප්රතිස්ථාපනය වේ ( [භාෂාව කේත ලැයිස්තුව](/i18/LANG_CODE) ).

උදාහරණයක් ලෙස, ඔබගේ වින්යාසය පහත පරිදි වේ:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` යනු ශබ්දකෝෂයකි, යතුර ප්රතිස්ථාපනය කළ යුතු URL උපසර්ගය වන අතර අගය ප්රතිස්ථාපන රීතියයි.

ඉහත රීතිය `ko de uk>ru zh-TW>zh >en` ප්රතිස්ථාපනය කිරීමේ තේරුම නම්, `ko de` ඔවුන්ගේම භාෂා කේතයේ පින්තූරය භාවිතා කරයි, `zh-TW` සහ `zh` `zh` හි පින්තූරය භාවිතා කරයි, `uk` `ru` හි පින්තූරය භාවිතා කරයි, සහ වෙනත් භාෂා ( `ja` වැනි) පින්තූරය භාවිතා කරයි. පෙරනිමියෙන් `en` න්.

උදාහරණයක් ලෙස, `MarkDown` හි ප්රංශ ( `fr` ) මූලාශ්ර ගොනුව පහත පරිදි වේ :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

පරිවර්තනය කර ජනනය කරන ලද ඉංග්රීසි ( `en` ) ගොනුව පහත පරිදි වේ :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

මෙහිදී, මූලාශ්ර භාෂා කේතයේ `/en/` ඉලක්ක භාෂාවේ `/zh/` සමඟ ප්රතිස්ථාපනය වේ.

: URL හි ප්රතිස්ථාපනය කරන ලද පෙළෙහි භාෂා කේතයට පෙර සහ පසු `/` තිබිය යුතුය.

> [!TIP]
> `- /` `url:` හි වින්යාස කර ඇත්නම්, සාපේක්ෂ මාර්ග පමණක් ගැලපේ, නමුත් `//` න් ආරම්භ වන URL නොගැලපේ.
>
> ඩොමේන් නාමයක සමහර සබැඳි ප්රතිස්ථාපනය කිරීමට අවශ්ය නම් සහ සමහර ඒවා ප්රතිස්ථාපනය කිරීමට අවශ්ය නැතිනම්, ඔබට ඒවා වෙන්කර හඳුනා ගැනීමට `[x](//x.com/en/)` සහ `[x](https://x.com/en/)` වැනි විවිධ උපසර්ග භාවිතා කළ හැක.

### ගොනුව නොසලකා හරින්න

පෙරනිමියෙන්, මූලාශ්ර භාෂා නාමාවලියෙහි `.md` සහ `.yml` න් ආරම්භ වන සියලුම ගොනු පරිවර්තනය කරනු ලැබේ.

ඔබට ඇතැම් ගොනු නොසලකා හැරීමට සහ ඒවා පරිවර්තනය නොකිරීමට අවශ්ය නම් (නිම නොකළ කෙටුම්පත් වැනි), ඔබට එය `ignore` ක්ෂේත්රය සමඟ වින්යාස කළ හැක.

`ignore` `.gitignore` ගොනුවේ [globset](https://docs.rs/globset/latest/globset/#syntax) ඛණ්ඩය භාවිතා කරයි.

උදාහරණයක් ලෙස, ඉහත වින්යාස ගොනුවේ `_* ` යන්නෙන් අදහස් වන්නේ `_` න් ආරම්භ වන ගොනු පරිවර්තනය නොකරන බවයි.

## පරිවර්තන නීති

### පරිවර්තන සංස්කාරකවරුන් රේඛා එකතු කිරීම හෝ මකා දැමීම නොකළ යුතුය

පරිවර්තනය සංස්කරණය කළ හැකි ය. මුල් පෙළ වෙනස් කර එය නැවත යන්ත්රයෙන් පරිවර්තනය කරන්න, පරිවර්තනයේ අතින් සිදු කරන ලද වෙනස් කිරීම් නැවත ලියන්නේ නැත (මුල් පෙළෙහි මෙම ඡේදය වෙනස් කර නොමැති නම්).

> [!WARN]
> පරිවර්තනයේ පේළි සහ මුල් පිටපත අතර එකින් එක ලිපි හුවමාරුවක් තිබිය යුතුය. එනම්, පරිවර්තනය සම්පාදනය කිරීමේදී රේඛා එකතු කිරීම හෝ මකා දැමීම නොකළ යුතුය. එසේ නොමැති නම්, එය පරිවර්තන සංස්කරණ හැඹිලියේ ව්යාකූලත්වය ඇති කරයි.

යමක් වැරදී ඇත්නම්, කරුණාකර [විසඳුම් සඳහා නිතර අසන පැන වෙත යොමු වන්න.](/i18/qa#H1)

### පරිවර්තන `YAML`

විධාන රේඛා මෙවලම මූලාශ්ර භාෂා ගොනු නාමාවලියෙහි `.yml` න් අවසන් වන සියලුම ගොනු සොයාගෙන ඒවා පරිවර්තනය කරයි.

* ගොනු නාමයේ උපසර්ගය `.yml` ( `.yaml` නොවේ) විය යුතු බව සලකන්න.

මෙවලම ශබ්දකෝෂ යතුරු පරිවර්තනය කරන්නේ `.yml` හි ඇති ශබ්දකෝෂ අගයන් මිස ශබ්දකෝෂ යතුරු නොවේ.

උදාහරණයක් ලෙස `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` ලෙස පරිවර්තනය වනු ඇත

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` හි පරිවර්තනය අතින්ද වෙනස් කළ හැක (නමුත් පරිවර්තනයේ යතුරු හෝ රේඛා එකතු කිරීම හෝ මකා දැමීම නොකරන්න).

`YAML` පරිවර්තනය මත පදනම්ව, ඔබට විවිධ ක්රමලේඛන භාෂා සඳහා ජාත්යන්තර විසඳුම් පහසුවෙන් ගොඩනගා ගත හැකිය.

## උසස් භාවිතය

### පරිවර්තන උප බහලුම

`.i18n/conf.yml` නිර්මාණය කරන තාක් කල් (සෑම විටම demo project template වලින් ආරම්භ කිරීමට අවශ්ය නැත), `i18` හොඳින් ක්රියා කරයි.

විධාන රේඛා මෙවලම සියලුම උප බහලුම්වල වින්යාසයන් `.i18n/conf.yml` සොයාගෙන ඒවා පරිවර්තනය කරයි.

[monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### අභිරුචි ස්ථාපන නාමාවලිය

එය පෙරනිමියෙන් `/usr/local/bin` ට ස්ථාපනය කෙරේ.

`/usr/local/bin` ලිවීමේ අවසරය නොමැති නම් එය `~/.bin` ට ස්ථාපනය කෙරේ.

පරිසර විචල්ය `TO` සැකසීම මඟින් ස්ථාපන නාමාවලිය අර්ථ දැක්විය හැක, උදාහරණයක් ලෙස :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
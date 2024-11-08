# & ස්ථාපනය කරන්න

## ස්ථාපනය කරන්න

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## මානකරන ටෝකනය

ප්රවේශ ටෝකනය වින්යාස කිරීම `i18` [`i18` ලේඛනය වෙත යොමු කිරීමට කරුණාකර මෙහි](/i18/use) `i18n.site` පරිවර්තන මෙවලමක් ඇත.

## Demo ව්යාපෘතිය

`i18n.site` භාවිතා කරන ආකාරය ඉගෙන ගැනීමට demo project එකකින් පටන් ගනිමු.

අපි මුලින්ම demo repository ක්ලෝන කර පහත පරිදි විධානය ක්රියාත්මක කරමු:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

චීනයේ ප්රධාන භූමියේ පරිශීලකයින්ට කළ හැක්කේ:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` සමඟ දේශීය පෙරදසුන පහසු කිරීමට `demo.i18n.site` කේත පාදක ක්ලෝනයේ නාමාවලියේ නම `md` විය යුතුය.

### පරිවර්තනය කරන්න

පළමුව, `md` නාමාවලිය ඇතුළු කර `i18n.site` ධාවනය කරන්න, එය `en` සිට `zh` දක්වා පරිවර්තනය කරයි.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ධාවනය කිරීමෙන් පසු, පරිවර්තන සහ හැඹිලි ගොනු උත්පාදනය වනු ඇත, කරුණාකර ඒවා `md` `git add . ` එක් කිරීමට මතක තබා ගන්න.

### දේශීය පෙරදසුන

`docker` ස්ථාපනය කර ආරම්භ කරන්න ( `MAC` පරිශීලකයෙකු නිර්දේශ කරන්නේ [orbstack](https://orbstack.dev) `docker` සඳහා ධාවන කාලය ලෙස භාවිතා කිරීමයි).

ඉන්පසු, `docker` නාමාවලිය ඇතුළත් කර `./up.sh` ධාවනය කරන්න, ඉන්පසු දේශීයව පෙරදසුන් කිරීමට [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
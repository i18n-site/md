# අභිරුචි කළ සංචාලනය

සංචාලනය අභිරුචිකරණය කරන්නේ කෙසේද යන්න පැහැදිලි කිරීම සඳහා උදාහරණයක් ලෙස අපි ආදර්ශන අඩවිය ගනිමු [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

ඉහත රූපයේ අංකිත ප්රදේශ වලට අනුරූප ගොනු පහත පරිදි වේ:

1. වම් [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. දකුණ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) යනු `HTML` 's ජනනය කරන අච්චු භාෂාවකි.

[➔ ව්යාකරණ ඉගෙන ගැනීමට මෙතන ක්ලික් කරන්න pug](https://pugjs.org)

ජාත්යන්තරකරණය ක්රියාත්මක කිරීම සඳහා ගොනුවේ `${I18N.sponsor}` ආකෘතිය භාවිතා කරන අතර එහි අන්තර්ගතය ප්රභව භාෂා නාමාවලියෙහි [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) පෙළ සමඟ ප්රතිස්ථාපනය වේ.

**`pug` හි `css` සහ `js` ලියන්න එපා** , එසේ නොමැතිනම් දෝෂයක් ඇති වේ.

ශෛලීන් `css` ට ලියා ඇති අතර, අන්තර්ක්රියා වෙබ් සංරචක නිර්මාණය කිරීම මගින් සාක්ෂාත් කරගනු ලැබේ.

මෙන්න, [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) තීරුවේ ශෛලියට අනුරූප වන ගොනුව :
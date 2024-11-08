# i18n.site MarkDown ಬರವಣಿಗೆ ಸಮಾವೇಶ

## ಆಂಕರ್ ಪಾಯಿಂಟ್

ಸಾಂಪ್ರದಾಯಿಕ `MarkDown` ಆಂಕರ್ ಪಾಯಿಂಟ್ಗಳನ್ನು ಪಠ್ಯ ವಿಷಯದ ಆಧಾರದ ಮೇಲೆ ರಚಿಸಲಾಗಿದೆ, ಈ ಪರಿಹಾರವು ಕಾರ್ಯಸಾಧ್ಯವಲ್ಲ.

ಸ್ಥಾನಿಕ ಆಂಕರ್ ಪಾಯಿಂಟ್ ಅನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ರಚಿಸಲು `MarkDown` ರಲ್ಲಿ `<a rel=id href="#xxx" id="xxx"></a>` ಕ್ಕೆ ಹೋಲುವ ಪಠ್ಯವನ್ನು ಸೇರಿಸುವುದು `i18n.site` ನೊಂದಿಗೆ ಒಪ್ಪಿದ ಆಂಕರ್ ಪಾಯಿಂಟ್ ಪರಿಹಾರವಾಗಿದೆ.

`<a rel=id href="#xxx" id="xxx"></a>` , ಇಲ್ಲಿ `rel=id` ಆಂಕರ್ ಪಾಯಿಂಟ್ನ ಪುಟ ಶೈಲಿಯನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ, ದಯವಿಟ್ಟು `xxx` ನಿಮ್ಮ ನಿಜವಾದ ಆಂಕರ್ ಇಂಗ್ಲಿಷ್ ಸಂಕ್ಷೇಪಣದೊಂದಿಗೆ ಬದಲಾಯಿಸಿ.

ಆಂಕರ್ಗಳನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಶೀರ್ಷಿಕೆಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ, ಅವುಗಳೆಂದರೆ:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ಪ್ರದರ್ಶನದ ಪರಿಣಾಮವು ಈ ಕೆಳಗಿನಂತಿರುತ್ತದೆ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` ರಲ್ಲಿ `HTML` ಬರೆಯಿರಿ

`HTML` `pug` ಕೋಡ್ನಲ್ಲಿ ಎಂಬೆಡ್ ಮಾಡಬಹುದು.

`<pre>` ಅಂಶಗಳಲ್ಲಿನ ವಿಷಯವನ್ನು ಅನುವಾದಿಸಲಾಗುವುದಿಲ್ಲ.

ಈ ಎರಡು ಅಂಶಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ, ವಿವಿಧ ಪ್ರದರ್ಶನ ಪರಿಣಾಮಗಳನ್ನು ಸಾಧಿಸಲು ನೀವು `MarkDown` ರಲ್ಲಿ `HTML` ಸುಲಭವಾಗಿ ಬರೆಯಬಹುದು.

[i18n.site ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ HTML ಮುಖಪುಟದಲ್ಲಿ ಭಾಷಾ ಕೋಡ್ ಪಟ್ಟಿಯನ್ನು ಬರೆಯಲಾಗಿದೆ](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) ಮತ್ತು ಕೋಡ್ ಈ ಕೆಳಗಿನಂತಿರುತ್ತದೆ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ಮೇಲಿನ `<pre>` ರಲ್ಲಿ `<style>` ಅನ್ನು ಸಹ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ ಎಂಬುದನ್ನು ಗಮನಿಸಿ.
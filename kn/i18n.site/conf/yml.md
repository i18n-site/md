# .i18n/conf.yml

`i18n.site` ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ `.i18n/conf.yml` ಆಗಿದೆ.

[`i18`](/i18) ನ `ignore:` ಮತ್ತು `i18n:` ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಹೊರತುಪಡಿಸಿ, ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ ಈ ಕೆಳಗಿನಂತಿರುತ್ತದೆ:

```yaml
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
    use: Doc
```

ಅವುಗಳಲ್ಲಿ, `upload` `ext:` ಕಾನ್ಫಿಗರೇಶನ್ ಐಟಂ ಅನ್ನು ಪ್ರಕಟಿಸುವಾಗ ಕೇವಲ `.md` ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗುತ್ತದೆ ಎಂದರ್ಥ.

## ಉನ್ನತ ನ್ಯಾವಿಗೇಷನ್ ನ್ಯಾವಿಗೇಷನ್

`nav:` ಕಾನ್ಫಿಗರೇಶನ್ ಆಯ್ಕೆಗಳು, ಮುಖಪುಟದ ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ ನ್ಯಾವಿಗೇಷನ್ ಮೆನುಗೆ ಅನುಗುಣವಾಗಿರುತ್ತವೆ.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

ಅವುಗಳಲ್ಲಿ, `en/i18n.yml`中`home: Home` ಗೆ ಅನುರೂಪವಾಗಿದೆ `i18n: home`

`en/i18n.yml` `zh/i18n.yml` ಬಹು ಭಾಷೆಗಳಿಗೆ ಅನುವಾದಿಸಲಾಗುತ್ತದೆ.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

ಅನುವಾದ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ನೀವು ಅನುವಾದದಲ್ಲಿ `yml` ಮಾರ್ಪಡಿಸಬಹುದು, ಆದರೆ `yml` ಕೀಲಿಯನ್ನು ಸೇರಿಸಬೇಡಿ ಅಥವಾ ಅಳಿಸಬೇಡಿ.

### `use: Toc` , ಏಕ ಫೈಲ್ ಟೆಂಪ್ಲೇಟ್ (ಔಟ್‌ಲೈನ್‌ನೊಂದಿಗೆ)

ಕಾನ್ಫಿಗರ್ : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ಎಂದರೆ `Toc` ರೆಂಡರಿಂಗ್ ಅನ್ನು ಬಳಸುವುದು, ಇದು ಒಂದೇ `Markdown` ಟೆಂಪ್ಲೇಟ್ ಅನ್ನು ರೆಂಡರಿಂಗ್ ಮಾಡುತ್ತದೆ.

`TOC` ಈ ಟೆಂಪ್ಲೇಟ್ `Table of Contents` ಪ್ರದರ್ಶಿಸಿದಾಗ, ಈ `Markdown` ಫೈಲ್‌ನ ಬಾಹ್ಯರೇಖೆಯನ್ನು ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.

`url:` `Markdown` ಫೈಲ್ ಪಥವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ ( `/` ಮೂಲ ಡೈರೆಕ್ಟರಿಗೆ ಅನುರೂಪವಾಗಿದೆ `/README.md` , ಈ ಫೈಲ್ ಹೆಸರಿಗೆ ದೊಡ್ಡಕ್ಷರ ಪೂರ್ವಪ್ರತ್ಯಯ ಮತ್ತು ಸಣ್ಣ ಪ್ರತ್ಯಯ ಅಗತ್ಯವಿರುತ್ತದೆ).

### `use: Md` , ಏಕ ಫೈಲ್ ಟೆಂಪ್ಲೇಟ್ (ಯಾವುದೇ ರೂಪರೇಖೆಯಿಲ್ಲ)

`Md` `Toc` `Markdown` ಆದಾಗ್ಯೂ `Md` ಟೆಂಪ್ಲೇಟ್ ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿ ಬಾಹ್ಯರೇಖೆಯನ್ನು ತೋರಿಸುವುದಿಲ್ಲ.

ನೀವು ಮೇಲಿನ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ `use: Md` `use: Toc` ಮಾರ್ಪಡಿಸಬಹುದು, `i18n.site` `md` ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಮತ್ತೊಮ್ಮೆ, ತದನಂತರ ಮುಖಪುಟದಲ್ಲಿನ ಬದಲಾವಣೆಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಅಭಿವೃದ್ಧಿ ಪೂರ್ವವೀಕ್ಷಣೆ URL ಗೆ ಭೇಟಿ ನೀಡಿ.

### ಸಂರಚನಾ ಮಾರ್ಗವಿಲ್ಲದೆ ಡೀಫಾಲ್ಟ್ ಲೋಡಿಂಗ್

ಒಂದು ನಿರ್ದಿಷ್ಟ ಮಾರ್ಗವನ್ನು ಪ್ರವೇಶಿಸುವ ಮಾರ್ಗದ ಪೂರ್ವಪ್ರತ್ಯಯವನ್ನು `nav:` ಮಾರ್ಗಕ್ಕೆ ಅನುಗುಣವಾದ `MarkDown` ಫೈಲ್ ಅನ್ನು ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ ಲೋಡ್ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು `Md` ಟೆಂಪ್ಲೇಟ್ ಅನ್ನು ಬಳಸಿಕೊಂಡು ಸಲ್ಲಿಸಲಾಗುತ್ತದೆ.

`en` `nav:` `/test` `/en/test.md` `Md`

`/en/test.md` ಫೈಲ್ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲದಿದ್ದರೆ, ಡೀಫಾಲ್ಟ್ `404` ಪುಟವನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , ಬಹು-ಫೈಲ್ ಟೆಂಪ್ಲೇಟ್

ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್‌ನಲ್ಲಿ:

```
  - i18n: blog
    use: Doc
```

ಟೆಂಪ್ಲೇಟ್ ರೆಂಡರಿಂಗ್‌ಗಾಗಿ ಬಳಸುವುದನ್ನು ಸೂಚಿಸುತ್ತದೆ `Doc`

`Doc` ಟೆಂಪ್ಲೇಟ್ ಏಕ ಅಥವಾ ಬಹು ಯೋಜನೆಗಳಿಗೆ ಡಾಕ್ಯುಮೆಂಟ್ ಔಟ್‌ಲೈನ್‌ಗಳನ್ನು ರಚಿಸಲು ಬಹು `MarkDown` ಸಂಯೋಜಿಸುವುದನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

#### ಏಕ ಯೋಜನೆ (ಬಹು ಕಡತಗಳು)

`blog` ಮೇಲಿನವು `Doc` ನ ಏಕ-ಪ್ರಾಜೆಕ್ಟ್ ಮೋಡ್ ಆಗಿದೆ.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url ಖಾಲಿಯಾದಾಗ, ಅದು i18n ನ ಮೌಲ್ಯಕ್ಕೆ ಡಿಫಾಲ್ಟ್ ಆಗುತ್ತದೆ

`url` `i18n` ನ ಮೌಲ್ಯಕ್ಕೆ `url`

ಮೇಲಿನ ಬರವಣಿಗೆಯ ವಿಧಾನವು ಹೊಂದುವುದಕ್ಕೆ ಸಮನಾಗಿರುತ್ತದೆ `url: blog` ಮತ್ತು ಅದರ ಅನುಗುಣವಾದ ಫೈಲ್ `en/blog/TOC` ಆಗಿದೆ.

#### ಬಹು ಯೋಜನೆಗಳು

`.i18n/conf.yml` `i18n:doc` ನಲ್ಲಿನ ಕಾನ್ಫಿಗರೇಶನ್ ಬಹು-ಯೋಜನಾ ಮೋಡ್ ಆಗಿದೆ.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

ಇಲ್ಲಿ, `menu: NB demo1,demo2` ಎಂದರೆ ಡ್ರಾಪ್-ಡೌನ್ ಮೆನುವನ್ನು ನಿರೂಪಿಸಲು `NB` ಬಳಸುವುದು.

`NB` , ಇದು `Name Breif` ನ ಸಂಕ್ಷೇಪಣವಾಗಿದೆ, ಡ್ರಾಪ್-ಡೌನ್ ಮೆನುವು ಯೋಜನೆಯ ಹೆಸರು ಮತ್ತು ಘೋಷಣೆಯನ್ನು ಪ್ರದರ್ಶಿಸಬಹುದು ಎಂದು ಸೂಚಿಸುತ್ತದೆ.

`NB` ಪ್ಯಾರಾಮೀಟರ್ ಅನ್ನು ಅನುಸರಿಸುತ್ತದೆ `demo1,demo2` ಅದಕ್ಕೆ ರವಾನಿಸಲಾಗಿದೆ.
`demo1,demo2` ರಲ್ಲಿ ಅಲ್ಪವಿರಾಮ `,` ಮೊದಲು ಮತ್ತು ನಂತರ ** ಖಾಲಿ ಇರಬಾರದು ಎಂಬುದನ್ನು ಗಮನಿಸಿ : **

ಮೇಲಿನ ನಿಯತಾಂಕಗಳಿಗಾಗಿ, ಅನುಗುಣವಾದ ಡೈರೆಕ್ಟರಿ ಸೂಚ್ಯಂಕ ಫೈಲ್:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC ಪರಿವಿಡಿ ಸೂಚ್ಯಂಕ

ಡೈರೆಕ್ಟರಿ ಔಟ್‌ಲೈನ್‌ನ `json` ರಚಿಸಲು ಡೈರೆಕ್ಟರಿ ಸೂಚ್ಯಂಕ ಫೈಲ್ `doc` ಟೆಂಪ್ಲೇಟ್ ಕಾನ್ಫಿಗರೇಶನ್‌ಗೆ ಅನುಗುಣವಾಗಿ `TOC` ಓದಲು ಡೆಮೊ ವೇರ್‌ಹೌಸ್‌ನಲ್ಲಿ `js` ಪ್ಲಗಿನ್ `.i18n/hook/after.tran/TOC.js` ಕಾರ್ಯಗತಗೊಳಿಸುತ್ತದೆ `i18n.site`

ನೀವು ಟೆಂಪ್ಲೇಟ್ `doc` ಬಳಸಿದರೆ, ನೀವು ಈ ಪ್ಲಗ್-ಇನ್ ಅನ್ನು ಹೊಂದಿರಬೇಕು.

`.i18n` `i18n.site`

`Doc` `json`

##### ವಿವರವಾದ ವಿಷಯ ವಿವರಣೆ

ವಿಷಯ : ಕೆಳಗಿನಂತಿದೆ `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### ಮಟ್ಟವನ್ನು ಸೂಚಿಸಲು ಇಂಡೆಂಟೇಶನ್ ಬಳಸಿ

ಮೇಲಿನ `en/blog/TOC` ಮೊದಲ ಸಾಲಿನಲ್ಲಿನ `README.md` ಕೆಳಗಿನ ಚಿತ್ರದಲ್ಲಿನ `i18n.site` ಗೆ ಅನುರೂಪವಾಗಿದೆ, ಅದು ಯೋಜನೆಯ ಹೆಸರಾಗಿದೆ.

ಕೆಳಗಿನ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ನಲ್ಲಿ ತೋರಿಸಿರುವಂತೆ ಮುಂದಿನ ಎರಡು ಸಾಲುಗಳು.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` ಅನುರೂಪವಾಗಿದೆ
`news/begin.md` `Our Product is Online !`

`TOC` ಔಟ್‌ಲೈನ್‌ನ ಕ್ರಮಾನುಗತ ಸಂಬಂಧವನ್ನು ಸೂಚಿಸಲು ಫೈಲ್ ಅನ್ನು ಇಂಡೆಂಟ್ ಮಾಡಲಾಗಿದೆ ಮತ್ತು ಬಹು-ಹಂತದ ಇಂಡೆಂಟೇಶನ್ ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

##### ಪೋಷಕ ಮಟ್ಟವು ಶೀರ್ಷಿಕೆಯನ್ನು ಮಾತ್ರ ಬರೆಯುತ್ತದೆ, ವಿಷಯವಲ್ಲ.

ಇಂಡೆಂಟೇಶನ್‌ನ ಬಹು ಹಂತಗಳು ಇದ್ದಾಗ, ಪೋಷಕ ಮಟ್ಟವು ಶೀರ್ಷಿಕೆಯನ್ನು ಮಾತ್ರ ಬರೆಯುತ್ತದೆ ಮತ್ತು ವಿಷಯವಲ್ಲ. ಇಲ್ಲದಿದ್ದರೆ, ಮುದ್ರಣಕಲೆಯು ಗೊಂದಲಕ್ಕೊಳಗಾಗುತ್ತದೆ.

##### ಪ್ರಾಜೆಕ್ಟ್ README.md 

ಯೋಜನೆಯ `README.md` , ಉದಾಹರಣೆಗೆ, ನೀವು ವಿಷಯವನ್ನು ಬರೆಯಬಹುದು `en/demo2/README.md` .

ಈ ಫೈಲ್‌ನ ವಿಷಯವು ಪರಿವಿಡಿ ರೂಪರೇಖೆಯನ್ನು ತೋರಿಸುವುದಿಲ್ಲ ಎಂಬುದನ್ನು ಗಮನಿಸಿ, ಆದ್ದರಿಂದ ಉದ್ದವನ್ನು ಮಿತಿಗೊಳಿಸಲು ಮತ್ತು ಸಣ್ಣ ಪರಿಚಯವನ್ನು ಬರೆಯಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.

###### ಯೋಜನೆಯ ಘೋಷಣೆ

`Your Project slogan` ನೋಡುವಂತೆ : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ಮೊದಲ ಸಾಲಿಗೆ ಅನುರೂಪವಾಗಿದೆ `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

ಪ್ರಾಜೆಕ್ಟ್ `README.md` ಮೊದಲ ಹಂತದ ಶೀರ್ಷಿಕೆಯಲ್ಲಿ ಮೊದಲ ಅಂಕಣ `:` ನಂತರದ ವಿಷಯವನ್ನು ಪ್ರಾಜೆಕ್ಟ್ ಸ್ಲೋಗನ್ ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.

ಚೀನಾ, ಜಪಾನ್ ಮತ್ತು ಕೊರಿಯಾದ ಬಳಕೆದಾರರು, ನೀವು ಪೂರ್ಣ ಅಗಲದ ಕೊಲೊನ್ ಬದಲಿಗೆ ಅರ್ಧ ಅಗಲದ ಕೊಲೊನ್ ಅನ್ನು ಬಳಸಬೇಕು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನಿಸಿ `:`

##### TOC ಅನ್ನು ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಸರಿಸುವುದು ಹೇಗೆ?

`TOC` ಫೈಲ್ ಅನ್ನು ಮೂಲ ಭಾಷೆಯ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಇರಿಸಬೇಕಾಗುತ್ತದೆ.

ಉದಾಹರಣೆಗೆ, ಮೂಲ ಭಾಷೆ ಚೈನೀಸ್ ಆಗಿದ್ದರೆ, ನಂತರ `zh/blog/TOC` `TOC`

ಮೂಲ ಭಾಷೆಯನ್ನು ಮಾರ್ಪಡಿಸಿದರೆ, ನೀವು ಯೋಜನೆಯಲ್ಲಿ ಒಂದು ನಿರ್ದಿಷ್ಟ ಭಾಷೆಯಲ್ಲಿ ಬೇರೊಂದು ಭಾಷೆಗೆ `TOC` ಚಲಿಸುವ ಬ್ಯಾಚ್ ಮಾಡಬೇಕಾಗುತ್ತದೆ.

ನೀವು ಈ ಕೆಳಗಿನ ಆಜ್ಞೆಗಳನ್ನು ಉಲ್ಲೇಖಿಸಬಹುದು:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

ದಯವಿಟ್ಟು ನಿಮ್ಮ ಭಾಷೆಯ ಕೋಡ್‌ಗೆ ಮೇಲಿನ ಆಜ್ಞೆಯಲ್ಲಿ `en/` ಮತ್ತು `zh/` ಮಾರ್ಪಡಿಸಿ.



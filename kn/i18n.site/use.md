# ಸ್ಥಾಪಿಸಿ &

## ಕಾನ್ಫಿಗರೇಶನ್ ಟೋಕನ್

`i18n.site` `i18` ಅನುವಾದ ಪರಿಕರವನ್ನು ಎಂಬೆಡ್ ಮಾಡಲಾಗಿದೆ, [ಪ್ರವೇಶ ಟೋಕನ್ ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಲು `i18` ಡಾಕ್ಯುಮೆಂಟ್ ಅನ್ನು ಉಲ್ಲೇಖಿಸಲು ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ](/i18/use) .

## ಸ್ಥಾಪಿಸಿ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ಡೆಮೊ ಯೋಜನೆ

ಡೆಮೊ ಯೋಜನೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸೋಣ ಮತ್ತು ಹೇಗೆ ಬಳಸುವುದು ಎಂದು ತಿಳಿಯೋಣ `i18n.site`

ನಾವು ಮೊದಲು ಡೆಮೊ ರೆಪೊಸಿಟರಿಯನ್ನು ಕ್ಲೋನ್ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಈ ಕೆಳಗಿನಂತೆ ಆಜ್ಞೆಯನ್ನು ಚಲಾಯಿಸುತ್ತೇವೆ:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗದಲ್ಲಿರುವ ಬಳಕೆದಾರರು ಹೀಗೆ ಮಾಡಬಹುದು:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` ನೊಂದಿಗೆ ಸ್ಥಳೀಯ ಪೂರ್ವವೀಕ್ಷಣೆಯನ್ನು ಸುಲಭಗೊಳಿಸಲು ಕೋಡ್ ಬೇಸ್ ಕ್ಲೋನ್‌ನ ಡೈರೆಕ್ಟರಿ ಹೆಸರು `md` ಆಗಿರಬೇಕು `demo.i18n.site`

### ಅನುವಾದಿಸು

ಮೊದಲು, `md` ಡೈರೆಕ್ಟರಿಯನ್ನು ನಮೂದಿಸಿ ಮತ್ತು `i18n.site` ರನ್ ಮಾಡಿ, ಅದು `en` ಗೆ `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ಚಾಲನೆಯಾದ ನಂತರ, ಅನುವಾದ ಮತ್ತು ಕ್ಯಾಶ್ ಫೈಲ್‌ಗಳನ್ನು `md` `git add . ` ಗೆ ಸೇರಿಸಲು ಮರೆಯದಿರಿ.

### ಸ್ಥಳೀಯ ಪೂರ್ವವೀಕ್ಷಣೆ

ಸ್ಥಾಪಿಸಿ ಮತ್ತು `docker` ( `MAC` `docker` ನ ರನ್ಟೈಮ್ ಆಗಿ [orbstack](https://orbstack.dev) ಶಿಫಾರಸು ಮಾಡುತ್ತಾರೆ).

ನಂತರ, `docker` ನಮೂದಿಸಿ ಮತ್ತು `./up.sh` ರನ್ ಮಾಡಿ, ತದನಂತರ ಸ್ಥಳೀಯವಾಗಿ ಪೂರ್ವವೀಕ್ಷಣೆ ಮಾಡಲು ಭೇಟಿ ನೀಡಿ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ವಿಷಯವನ್ನು ಪೋಸ್ಟ್ ಮಾಡಿ

`i18n.site` [ಒಂದೇ ಪುಟದ ಅಪ್ಲಿಕೇಶನ್](https://developer.mozilla.org/docs/Glossary/SPA) ಆರ್ಕಿಟೆಕ್ಚರ್ ಅನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುತ್ತದೆ ಮತ್ತು ವೆಬ್‌ಸೈಟ್ ಪ್ರವೇಶ ಪುಟ ಮತ್ತು ವೆಬ್‌ಸೈಟ್ ವಿಷಯವನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ನಿಯೋಜಿಸಲಾಗಿದೆ.

ಮೇಲಿನ ಅನುವಾದವನ್ನು ಚಲಾಯಿಸಿದ ನಂತರ, `htm` ಮತ್ತು `v` ಡೈರೆಕ್ಟರಿಗಳು `md/out/dev`

ಇಲ್ಲಿ, `dev` ಇದು `.i18n/htm/dev.yml` ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ ಅನ್ನು ಆಧರಿಸಿ ನಿರ್ಮಿಸಲಾಗಿದೆ ಎಂದು ಸೂಚಿಸುತ್ತದೆ.

ವಿಷಯದ : `dev`

`htm` ಡೈರೆಕ್ಟರಿ ಅಡಿಯಲ್ಲಿ ವೆಬ್‌ಸೈಟ್ ಪ್ರವೇಶ ಪುಟವಿದೆ.

`v` ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯೊಂದಿಗೆ ವೆಬ್‌ಸೈಟ್ ವಿಷಯವನ್ನು ಒಳಗೊಂಡಿದೆ.

ಸ್ಥಳೀಯ ಪೂರ್ವವೀಕ್ಷಣೆ ಆವೃತ್ತಿಯ ಸಂಖ್ಯೆಯನ್ನು ಲೆಕ್ಕಿಸದೆ ಎಲ್ಲಾ ಫೈಲ್‌ಗಳನ್ನು `out/dev/v/0.1.0` ನಕಲಿಸುತ್ತದೆ.

ಅಧಿಕೃತ ಬಿಡುಗಡೆಗಾಗಿ, ಬದಲಾದ ಫೈಲ್‌ಗಳನ್ನು ಹೊಸ ಆವೃತ್ತಿ ಸಂಖ್ಯೆಯ ಡೈರೆಕ್ಟರಿಗೆ ನಕಲಿಸಲಾಗುತ್ತದೆ.

#### ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ ಅನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಲು -c ಅನ್ನು ಬಳಸಿ

`out` ಅಡಿಯಲ್ಲಿ ವಿಭಿನ್ನ ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್‌ಗಳು ಅನುಗುಣವಾದ ಡೈರೆಕ್ಟರಿಗಳನ್ನು ರಚಿಸುತ್ತವೆ.

ಉದಾಹರಣೆಗೆ, `.i18n/htm/ol.yml` `out/ol` ಡೈರೆಕ್ಟರಿಯನ್ನು ರಚಿಸುತ್ತದೆ.

`dev.yml` ಮತ್ತು `ol.yml` ಡೀಫಾಲ್ಟ್ ಕಾನ್ಫಿಗರೇಶನ್‌ಗಳಾಗಿವೆ.

`dev` ಎಂಬುದು ಅಭಿವೃದ್ಧಿಯ ಪರಿಸರವನ್ನು ಪ್ರತಿನಿಧಿಸುವ `development` ನ ಸಂಕ್ಷೇಪಣವಾಗಿದೆ, ಇದು ಸ್ಥಳೀಯ ಪೂರ್ವವೀಕ್ಷಣೆಗಾಗಿ ಬಳಸಲ್ಪಡುತ್ತದೆ ಮತ್ತು ಡೀಫಾಲ್ಟ್ ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ ಆಗಿದೆ.
`ol` ಎಂಬುದು `online` ನ ಸಂಕ್ಷೇಪಣವಾಗಿದೆ, ಇದು ಆನ್‌ಲೈನ್ ಪರಿಸರವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಇದು ಅಧಿಕೃತ ಬಿಡುಗಡೆಗೆ ಬಳಸಲ್ಪಡುತ್ತದೆ ಮತ್ತು `npm` ಆಜ್ಞಾ ಸಾಲಿನ ನಿಯತಾಂಕವನ್ನು ಬಳಸಿಕೊಂಡು `-n` ಗೆ ಪ್ರಕಟಿಸುವಾಗ ಡೀಫಾಲ್ಟ್ ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ ಆಗಿದೆ.

ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್ ಹೆಸರನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಲು ನೀವು ಇತರ ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್‌ಗಳನ್ನು ಸಹ ರಚಿಸಬಹುದು `--htm_conf`

ಉದಾಹರಣೆಗೆ:
```
i18n.site --htm_conf yourConfig --save
```

`--save` ಅಪ್‌ಡೇಟ್ ಬಿಡುಗಡೆಯ ಆವೃತ್ತಿಯ ಸಂಖ್ಯೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ.

#### <a rel=id href="#npm" id="npm"></a> ವಿಷಯವನ್ನು npmjs.com ಗೆ ಪ್ರಕಟಿಸಿ

[npmjs.com](//npmjs.com) ವಿಷಯವನ್ನು ಪ್ರಕಟಿಸುವುದು ಶಿಫಾರಸು ಮಾಡಿದ ಡೀಫಾಲ್ಟ್ ಪರಿಹಾರವಾಗಿದೆ ( [ಮುಂಭಾಗದ ಹೆಚ್ಚಿನ ಲಭ್ಯತೆ](/i18n.site/feature#ha) ನೋಡಿ).

##### npm login &

ಸ್ಥಾಪಿಸಿ `nodejs` ಲಾಗ್ ಇನ್ ಮಾಡಲು `npm login` ಬಳಸಿ.

ಸಂಪಾದಿಸು `md/.i18n/htm/ol.yml` `i18n.site` ನಲ್ಲಿನ `v: //unpkg.com/i18n.site` ಅನ್ನು ನಿಮ್ಮದೇ ಆಗಿ ಬದಲಾಯಿಸಿ `npm` ಪ್ಯಾಕೇಜ್ ಹೆಸರು.

ಕೇವಲ ಆಕ್ರಮಿಸದ ಪ್ಯಾಕೇಜ್ ಹೆಸರನ್ನು ಬಳಸಿ [npmjs.com](//npmjs.com)

`npm` ಪ್ಯಾಕೇಜ್ ಅನ್ನು ಆಧರಿಸಿ ಪ್ರಕಟಿಸುವಾಗ, `v:` ಮೌಲ್ಯದ ಪೂರ್ವಪ್ರತ್ಯಯವಾಗಿ **`//unpkg.com/` ಬಳಸಲು ಮರೆಯದಿರಿ** `i18n.site` ಈ ಪೂರ್ವಪ್ರತ್ಯಯ ಮಾರ್ಗದ ಅಡಿಯಲ್ಲಿ `/.v` ಹೊಸ ಬಿಡುಗಡೆಗಳ ಸಕಾಲಿಕ ವೀಕ್ಷಣೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ವಿಶೇಷವಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡಲಾಗಿದೆ.

ಅನುವಾದಿಸಲು ಮತ್ತು ಪ್ರಕಟಿಸಲು `md` `i18n.site --npm` ಅಥವಾ `i18n.site -n` ರನ್ ಮಾಡಿ.

ನೀವು ಪ್ರಕಟಿಸಲು ನಿರಂತರ ಏಕೀಕರಣ ಪರಿಸರವನ್ನು ಬಳಸಿದರೆ, ಅದನ್ನು ಸ್ಥಾಪಿಸುವ `nodejs` ಲಾಗಿನ್ ಮಾಡಿದ ಮತ್ತು ಪ್ರಕಟಿಸಿದ ಅನುಮತಿಯನ್ನು `~/.npmrc` ಪರಿಸರಕ್ಕೆ ನಕಲಿಸಿ.

ನೀವು ಪ್ಯಾಕೇಜ್ ಹೆಸರನ್ನು `v:` `ol.yml` ಮಾರ್ಪಡಿಸಿದರೆ, ದಯವಿಟ್ಟು **ಮೊದಲು `.i18n/v/ol` ಅಳಿಸಲು ಮತ್ತು ನಂತರ ಅದನ್ನು ಪ್ರಕಟಿಸಲು ಮರೆಯದಿರಿ** .

##### npm ನಿಂದ ಪ್ರಾಕ್ಸಿ ಸರ್ವರ್ ಪ್ರಕಟಿಸಲಾಗಿದೆ

ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗದಲ್ಲಿರುವ ಬಳಕೆದಾರರು ನೆಟ್‌ವರ್ಕ್ ಸಮಸ್ಯೆಗಳನ್ನು ಎದುರಿಸಿದರೆ ಮತ್ತು ಪ್ಯಾಕೇಜ್ `npm` ಪ್ರಕಟಿಸಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ, ಅವರು ಪ್ರಾಕ್ಸಿ ಸರ್ವರ್ ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಲು ಪರಿಸರ ವೇರಿಯಬಲ್ `https_proxy` ಹೊಂದಿಸಬಹುದು.

ನಿಮ್ಮ ಪ್ರಾಕ್ಸಿ ಸರ್ವರ್ ಪೋರ್ಟ್ `7890` ನೀವು ಬರೆಯಬಹುದು:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### ಸ್ವಯಂ ಹೋಸ್ಟ್ ಮಾಡಿದ ವಿಷಯ

ನೀವು ವಿಷಯವನ್ನು ಸ್ವಯಂ-ಹೋಸ್ಟ್ ಮಾಡಲು ಬಯಸಿದರೆ, ಮೊದಲು ಸಂಪಾದಿಸಿ `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` ನಿಮ್ಮ URL ಪೂರ್ವಪ್ರತ್ಯಯಕ್ಕೆ ಬದಲಾಯಿಸಿ, ಉದಾಹರಣೆಗೆ `v: //i18n-v.xxx.com` .

`md` ನಮೂದಿಸಿ ಮತ್ತು ರನ್ ಮಾಡಿ

```
i18n.site --htm_conf ol --save
```

ಅಥವಾ ಸಂಕ್ಷೇಪಣ

```
i18n.site -c ol -s
```

ನಂತರ, `v:` ನಲ್ಲಿ ಹೊಂದಿಸಲಾದ URL ಪೂರ್ವಪ್ರತ್ಯಯಕ್ಕೆ `md/out/ol/v` ವಿಷಯವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ.

ಅಂತಿಮವಾಗಿ, **`1s` `/.v` ಕೊನೆಗೊಳ್ಳುವ ಮಾರ್ಗದ ಸಂಗ್ರಹ ಸಮಯವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ** , ಇಲ್ಲದಿದ್ದರೆ ಹೊಸದಾಗಿ ಬಿಡುಗಡೆಯಾದ ವಿಷಯವನ್ನು ತಕ್ಷಣವೇ ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ.

ಅನಗತ್ಯ ವಿನಂತಿಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಇತರ ಮಾರ್ಗಗಳ ಸಂಗ್ರಹ ಸಮಯವನ್ನು ಒಂದು ವರ್ಷ ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಮಯಕ್ಕೆ ಹೊಂದಿಸಬಹುದು.

##### s3 ಗೆ ವಿಷಯವನ್ನು ಹೋಸ್ಟ್ ಮಾಡಿ

ಸ್ವಯಂ ಹೋಸ್ಟ್ ಮಾಡಲು, ನಿಮ್ಮ ಸ್ವಂತ ಸರ್ವರ್ + ಬಳಸುವುದರ ಜೊತೆಗೆ, ಮತ್ತೊಂದು ಸಾಮಾನ್ಯ `CDN` `S3`

`S3` [rclone](https://rclone.org) `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

ಕಾನ್ಫಿಗರ್ ಮಾಡಲು ಮರೆಯದಿರಿ `CDN` ಆದ್ದರಿಂದ `/.v` ನಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುವ ಮಾರ್ಗದ ಸಂಗ್ರಹ ಸಮಯ `1s` ಆಗಿದೆ, ಇಲ್ಲದಿದ್ದರೆ ನೀವು ಹೊಸದಾಗಿ ಬಿಡುಗಡೆಯಾದ ವಿಷಯವನ್ನು ತಕ್ಷಣವೇ ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ.

### ವೆಬ್‌ಸೈಟ್ ಪ್ರಕಟಿಸಿ

ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ಎಲ್ಲಿ ಬೇಕಾದರೂ ನಿಯೋಜಿಸಬಹುದು [github page](https://pages.github.com) ಮತ್ತು [cloudflare page](https://pages.cloudflare.com) ಉತ್ತಮ ಆಯ್ಕೆಗಳು.

ವೆಬ್‌ಸೈಟ್ [ಒಂದೇ ಪುಟದ ಅಪ್ಲಿಕೇಶನ್‌ನ](https://developer.mozilla.org/docs/Glossary/SPA) ಆರ್ಕಿಟೆಕ್ಚರ್ ಅನ್ನು ಅಳವಡಿಸಿಕೊಂಡಿರುವುದರಿಂದ, `index.html` `. ` ಹೊಂದಿರದ URL ಮಾರ್ಗವನ್ನು ಪುನಃ ಬರೆಯಲು ಮರೆಯದಿರಿ.

ವೆಬ್‌ಸೈಟ್ ಪ್ರವೇಶ ಪುಟವನ್ನು ಒಮ್ಮೆ ಮಾತ್ರ ನಿಯೋಜಿಸಬೇಕಾಗುತ್ತದೆ ಮತ್ತು ನಂತರದ ವಿಷಯ ನವೀಕರಣಗಳಿಗಾಗಿ ವೆಬ್‌ಸೈಟ್ ಪ್ರವೇಶ ಪುಟವನ್ನು ಮರುಹಂಚಿಕೆ ಮಾಡುವ ಅಗತ್ಯವಿಲ್ಲ.

#### ಗಿಥಬ್ ಪುಟದಲ್ಲಿ ನಿಯೋಜಿಸಿ

[ಒಂದು ಸಂಸ್ಥೆಯನ್ನು ರಚಿಸಲು ಮೊದಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

ನಂತರ ಈ `i18n-demo.github.io` ಅಡಿಯಲ್ಲಿ ಗೋದಾಮನ್ನು ರಚಿಸಿ (ದಯವಿಟ್ಟು `i18n-demo` ನೀವು ರಚಿಸಿದ ಸಂಸ್ಥೆಯ ಹೆಸರಿನೊಂದಿಗೆ ಬದಲಾಯಿಸಿ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

ಹಿಂದಿನ ಲೇಖನದಲ್ಲಿ ವಿಷಯವನ್ನು ಪ್ರಕಟಿಸುವಾಗ, `out/ol/htm` ರಚಿಸಲಾಗಿದೆ ದಯವಿಟ್ಟು ಈ ಡೈರೆಕ್ಟರಿಯನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ರನ್ ಮಾಡಿ :

```
ln -s index.html 404.html
```


`404.html` `github page`

ನಂತರ ಈ ಕೆಳಗಿನ ಆಜ್ಞೆಯನ್ನು `htm` ಚಲಾಯಿಸಿ ( `i18n-demo/i18n-demo.github.io.git` ನಿಮ್ಮ ಸ್ವಂತ ಗೋದಾಮಿನ ವಿಳಾಸದೊಂದಿಗೆ ಬದಲಾಯಿಸಲು ಮರೆಯದಿರಿ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ಕೋಡ್ ಅನ್ನು ತಳ್ಳಿದ ನಂತರ, `github page` ನ ನಿಯೋಜನೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಚಲಾಯಿಸಲು ನಿರೀಕ್ಷಿಸಿ (ಕೆಳಗೆ ತೋರಿಸಿರುವಂತೆ), ಮತ್ತು ನಂತರ ನೀವು ಅದನ್ನು ಪ್ರವೇಶಿಸಬಹುದು.

<img src="//p.3ti.site/1721116586.avif" width="350px">

ಡೆಮೊ ಪುಟಕ್ಕಾಗಿ ದಯವಿಟ್ಟು ನೋಡಿ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ಕ್ಲೌಡ್‌ಫ್ಲೇರ್ ಪುಟದಲ್ಲಿ ನಿಯೋಜಿಸಿ

[cloudflare page](//pages.cloudflare.com) `github page` ಹೋಲಿಸಿದರೆ, ಇದು ಚೀನಾದ ಮುಖ್ಯ ಭೂಮಿಗೆ ಹೆಚ್ಚು ಸ್ನೇಹಿಯಾಗಿದೆ ಮತ್ತು ಅದನ್ನು ಬಳಸಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.

`cloudflare page` ನಿಯೋಜನೆಯು ಸಾಮಾನ್ಯವಾಗಿ ಮೇಲಿನ `github page` ನಿಯೋಜನೆಯನ್ನು ಆಧರಿಸಿದೆ.

ಯೋಜನೆಯನ್ನು ರಚಿಸಿ ಮತ್ತು ಮೇಲಿನ ಗೋದಾಮಿನಲ್ಲಿ ಬಂಧಿಸಿ `i18n-demo.github.io`

ಪ್ರಕ್ರಿಯೆಯನ್ನು ಕೆಳಗಿನ ಚಿತ್ರದಲ್ಲಿ ತೋರಿಸಲಾಗಿದೆ:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` ಸಂಸ್ಥೆಗೆ ಪ್ರವೇಶವನ್ನು ನೀಡಲು ದಯವಿಟ್ಟು ಕ್ಲಿಕ್ ಮಾಡಿ `Add Account`

ನೀವು ಇನ್ನೊಂದು ಸಂಸ್ಥೆಯ ಗೋದಾಮನ್ನು ಬಂಧಿಸಿದ್ದರೆ, ಹೊಸ ಸಂಸ್ಥೆಯನ್ನು ಪ್ರದರ್ಶಿಸುವ ಮೊದಲು ಅದನ್ನು ಎರಡು ಬಾರಿ ದೃಢೀಕರಿಸಲು ನೀವು ಎರಡು ಬಾರಿ ಕ್ಲಿಕ್ ಮಾಡಬೇಕಾಗಬಹುದು `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

ಮುಂದೆ ವೇರ್ಹೌಸ್ `i18n-demo.github.io` ಆಯ್ಕೆ ಮಾಡಿ, ನಂತರ `Begin setup` ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ನಂತರದ ಹಂತಗಳಿಗಾಗಿ ಡೀಫಾಲ್ಟ್ ಮೌಲ್ಯಗಳನ್ನು ಬಳಸಿ.

<img alt="" src="https://p.3ti.site/1721118490.avif">

ಮೊದಲ ಬಾರಿಗೆ ಬೈಂಡಿಂಗ್ ಮಾಡಿದ ನಂತರ, ನೀವು ಅದನ್ನು ಪ್ರವೇಶಿಸುವ ಮೊದಲು ನೀವು ಕೆಲವು ನಿಮಿಷಗಳ ಕಾಲ ಕಾಯಬೇಕಾಗುತ್ತದೆ.

ನಿಯೋಜನೆಯ ನಂತರ, ನೀವು ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಬೈಂಡ್ ಮಾಡಬಹುದು.

<img alt="" src="https://p.3ti.site/1721119459.avif">

ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಬೈಂಡ್ ಮಾಡಿದ ನಂತರ, ಕೆಳಗೆ ತೋರಿಸಿರುವಂತೆ ಏಕ-ಪುಟ ಅಪ್ಲಿಕೇಶನ್‌ನ ಮಾರ್ಗವನ್ನು ಪುನಃ ಬರೆಯುವುದನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಲು ದಯವಿಟ್ಟು ಡೊಮೇನ್ ಹೆಸರಿಗೆ ಹೋಗಿ:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ಮೇಲಿನ ಚಿತ್ರದಲ್ಲಿನ ನಿಯಮಗಳು ಕೆಳಕಂಡಂತಿರುವ ಮೊದಲ ಸಾಲಿನಲ್ಲಿ ಡೊಮೇನ್ ಹೆಸರಿನೊಂದಿಗೆ `i18n.site` .

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

ಹೆಚ್ಚುವರಿಯಾಗಿ, ದಯವಿಟ್ಟು ಕೆಳಗೆ ತೋರಿಸಿರುವಂತೆ ಸಂಗ್ರಹ ನಿಯಮಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ ಮತ್ತು ಸಂಗ್ರಹ ಅವಧಿಯನ್ನು ಒಂದು ತಿಂಗಳಿಗೆ ಹೊಂದಿಸಿ.

<img alt="" src="https://p.3ti.site/1721125111.avif">

ಮೇಲಿನ ಚಿತ್ರದಲ್ಲಿ ಎರಡನೇ ಹಂತದಲ್ಲಿ ಹೊಂದಾಣಿಕೆಯಾಗುವ ಡೊಮೇನ್ ಹೆಸರನ್ನು ನೀವು ಬೌಂಡ್ ಮಾಡಿದ ಡೊಮೇನ್ ಹೆಸರಿಗೆ ಬದಲಾಯಿಸಿ.

#### ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗದಲ್ಲಿ ವೆಬ್‌ಸೈಟ್ ನಿಯೋಜನೆಯನ್ನು ಉತ್ತಮಗೊಳಿಸುವುದು

ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗದ ನೆಟ್‌ವರ್ಕ್ ಪರಿಸರದಲ್ಲಿ ನೀವು ಉತ್ತಮ ಪ್ರವೇಶದ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಪಡೆಯಲು ಬಯಸಿದರೆ, ದಯವಿಟ್ಟು ಮೊದಲು [ಡೊಮೇನ್ ಹೆಸರನ್ನು ನೋಂದಾಯಿಸಿ](//beian.aliyun.com) .

`out/ol/htm` `CDN` ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗದಲ್ಲಿರುವ ಕ್ಲೌಡ್ ಮಾರಾಟಗಾರರ ವಸ್ತು ಸಂಗ್ರಹಣೆಯನ್ನು ಬಳಸಿ +

[Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) ನಂತಹ ಏಕ-ಪುಟದ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಮಾರ್ಗವನ್ನು ಪುನಃ ಬರೆಯಲು ನೀವು ಎಡ್ಜ್ ಕಂಪ್ಯೂಟಿಂಗ್ ಅನ್ನು ಬಳಸಬಹುದು:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

`CNAME` `MX` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `A`

ಹೆಚ್ಚುವರಿಯಾಗಿ, ಚೀನಾದ ಮುಖ್ಯ ಭೂಭಾಗದಲ್ಲಿರುವ ಕ್ಲೌಡ್ ಮಾರಾಟಗಾರರ ಸಾಗರೋತ್ತರ ಟ್ರಾಫಿಕ್ ಶುಲ್ಕಗಳು ತುಲನಾತ್ಮಕವಾಗಿ ದುಬಾರಿಯಾಗಿರುವುದರಿಂದ, ನೀವು ವೆಚ್ಚವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಬಯಸಿದರೆ, ನೀವು ಸಾಧಿಸಲು [Huawei DNS ನ ಉಚಿತ ಭೌಗೋಳಿಕ ರೆಸಲ್ಯೂಶನ್](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ಮತ್ತು [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ನ ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರನ್ನು (ಕೆಳಗೆ ತೋರಿಸಿರುವಂತೆ) ಬಳಸಬಹುದು ಟ್ರಾಫಿಕ್ ಡೈವರ್ಶನ್──ಚೀನಾ ಬೈದು ಕ್ಲೌಡ್ ಮುಖ್ಯ ಭೂಭಾಗದಲ್ಲಿ ಸಂಚಾರ `CDN` ಅಂತರಾಷ್ಟ್ರೀಯ ಸಂಚಾರ cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

ಈ ನಿಯೋಜನೆ ಆಪ್ಟಿಮೈಸೇಶನ್ ಪರಿಹಾರಗಳು ಹೆಚ್ಚು ಸಂಕೀರ್ಣವಾಗಿವೆ ಮತ್ತು ಭವಿಷ್ಯದಲ್ಲಿ ಪ್ರತ್ಯೇಕ ಅಧ್ಯಾಯಗಳಲ್ಲಿ ಪರಿಚಯಿಸಲಾಗುವುದು.

#### ಜೆನೆರಿಕ್ ಡೊಮೇನ್ ಹೆಸರು ಮರುನಿರ್ದೇಶನ

ನಿಮ್ಮ ಮುಖ್ಯ ವೆಬ್‌ಸೈಟ್‌ನಂತೆ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ರಚಿಸಲು ನೀವು `i18n.site` , ನೀವು ಸಾಮಾನ್ಯವಾಗಿ ಪ್ಯಾನ್-ಡೊಮೇನ್ ಮರುನಿರ್ದೇಶನವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಬೇಕಾಗುತ್ತದೆ, ಅಂದರೆ, ( `www.xxx.com` ಸೇರಿದಂತೆ) `xxx.com` `*.xxx.com` .

ಅಲಿಬಾಬಾ ಕ್ಲೌಡ್‌ನ `EdgeScript` ( [ಇಂಗ್ಲಿಷ್ ಡಾಕ್ಯುಮೆಂಟ್](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ಚೈನೀಸ್ ಡಾಕ್ಯುಮೆಂಟ್](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ಸಹಾಯದಿಂದ ಈ ಅವಶ್ಯಕತೆಯನ್ನು ಸಾಧಿಸಬಹುದು `CDN`

[ಅಲಿಬಾಬಾ CDN](https://cdn.console.aliyun.com/domain/list) ಡೊಮೇನ್ ಹೆಸರನ್ನು ಸೇರಿಸಿ ಮತ್ತು `*.xxx.com` ಹೆಸರನ್ನು ಅಲಿಬಾಬಾ ಕ್ಲೌಡ್ `CDN` ನ `CNAME` ಗೆ ಸೂಚಿಸಿ.

<img alt="" src="https://p.3ti.site/1721122000.avif">

ಉದಾಹರಣೆಗೆ, ಮೇಲಿನ ಚಿತ್ರದಲ್ಲಿ `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx ನೊಂದಿಗೆ ನಿಯೋಜಿಸಿ

nginx `server` `/root/i18n/md/out/ol/htm` `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ಡೈರೆಕ್ಟರಿ ರಚನೆ

#### ಸಾರ್ವಜನಿಕ

ವೆಬ್‌ಸೈಟ್‌ನ ಸ್ಥಿರ ಫೈಲ್‌ಗಳು, ಉದಾಹರಣೆಗೆ `favicon.ico` `robots.txt` , ಇತ್ಯಾದಿ.

ಇಲ್ಲಿರುವ ಐಕಾನ್ ಫೈಲ್‌ಗಳನ್ನು ಇದರೊಂದಿಗೆ ರಚಿಸಬಹುದು [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` ಡೈರೆಕ್ಟರಿಯ ಅಡಿಯಲ್ಲಿ `i18n.site` ನ ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್‌ಗಳು, ಅನುವಾದ ಸಂಗ್ರಹ, ಇತ್ಯಾದಿ. ವಿವರಗಳಿಗಾಗಿ ಮುಂದಿನ ಅಧ್ಯಾಯ ["ಕಾನ್ಫಿಗರೇಶನ್" ಅನ್ನು](/i18n.site/conf) ನೋಡಿ.

#### en

ಮೂಲ ಭಾಷಾ ಡೈರೆಕ್ಟರಿ, ಕಾನ್ಫಿಗರೇಶನ್ ಫೈಲ್‌ನಲ್ಲಿ `fromTo` `en` `.i18n/conf.yml` ಅನುರೂಪವಾಗಿದೆ

```yaml
i18n:
  fromTo:
    en: zh
```

ದಯವಿಟ್ಟು ಅನುವಾದದ ಸಂರಚನೆಯನ್ನು ನೋಡಿ [i18](/i18/use)


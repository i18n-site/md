# רעקאָמענדאַציע פון רעדאַקטאָר

אַלעמען האט זייער באַליבט רעדאַקטאָר דאָ מיר טיילן אונדזער `Markdown` בעסטער פּראַקטיסיז.

מיר [vscode](https://code.visualstudio.com/) צו שרייַבן `MarkDown` און ינסטאַלירן די פּלוג-אין [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) צו פאָרויסיקע ווייַזונג אין פאַקטיש צייט בשעת שרייבן.

ווי געוויזן אונטן, רעכט גיט אין די רעדאַקטאָר צו עפֿענען די פאָרויסיקע ווייַזונג פֿענצטער.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

אַרייַן `code xxx.md` אין די באַפֿעלן שורה צו רופן `vscode` צו עפענען טעקע `Markdown` .

ניצן [PicList](https://github.com/Kuingsmile/PicList) צו ופּלאָאַד בילדער, געדענקען צו שטעלן די ופּלאָאַד דורכוועג שליסל און צופֿעליקער די סקרעענשאָט מיט איין גיט.

עס שטיצט אויטאָמאַטיש קאַפּיינג די טעקע נאָמען צו `Markdown` פֿאָרמאַט נאָך ופּלאָאַדינג, וואָס ימפּרוווז עפעקטיווקייַט.

אין דער זעלביקער צייט, איר קענט אָפּשיקן צו די פאלגענדע קאַנפיגיעריישאַן, מאָדיפיצירן די טעקע און קאַנפיגיער די ופּלאָאַדעד טעקע צו זיין אויטאָמאַטיש קאַמפּרעסט צו `avif` צו רעדוצירן די בילד גרייס.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```
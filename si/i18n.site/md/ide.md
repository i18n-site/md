# සංස්කාරක නිර්දේශය

සෑම `Markdown` ඔවුන්ගේම ප්රියතම සංස්කාරකයක් ඇත.

අපි `MarkDown` ලිවීමට සහ ප්ලග්-ඉන් [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ස්ථාපනය කිරීම සඳහා තථ්ය කාලීනව පෙරදසුන් කිරීමට [vscode](https://code.visualstudio.com/) කරමු.

පහත දැක්වෙන පරිදි, පෙරදසුන් කවුළුව විවෘත කිරීමට සංස්කාරකයේ දකුණු-ක්ලික් කරන්න.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ගොනුව `Markdown` විවෘත කිරීමට `vscode` ඇමතීමට විධාන රේඛාවේ `code xxx.md` ඇතුළත් කරන්න.

පින්තූර උඩුගත කිරීමට [PicList](https://github.com/Kuingsmile/PicList) භාවිතා කරන්න, උඩුගත කිරීමේ කෙටිමං යතුර සැකසීමට මතක තබා ගන්න, සහ එක් ක්ලික් කිරීමකින් තිර රුව උඩුගත කරන්න.

උඩුගත කිරීමෙන් පසු ගොනු නාමය `Markdown` ආකෘතියට ස්වයංක්රීයව පිටපත් කිරීමට එය සහය දක්වයි, එය කාර්යක්ෂමතාව බෙහෙවින් වැඩි කරයි.

ඒ සමඟම, ඔබට පහත වින්යාසය වෙත යොමු වී, ගොනුව වෙනස් කර, උඩුගත කළ ගොනුව රූපයේ ප්රමාණය අඩු කිරීම සඳහා ස්වයංක්රීයව `avif` ට සම්පීඩනය කිරීමට වින්යාසගත කළ හැකිය.

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
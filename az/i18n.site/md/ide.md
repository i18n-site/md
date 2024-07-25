# Redaktor Tövsiyəsi

Hər kəsin öz sevimli redaktoru var, gəlin burada ən yaxşı təcrübələrimizi paylaşaq `Markdown`

Yazı zamanı önizləmə üçün [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) [vscode](https://code.visualstudio.com/) `MarkDown` quraşdırırıq.

Aşağıda göstərildiyi kimi, önizləmə pəncərəsini açmaq üçün redaktorda sağ klikləyin.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` açıq `Markdown` faylına zəng etmək üçün əmr satırına daxil `code xxx.md` .

Şəkilləri yükləmək üçün istifadə [PicList](https://github.com/Kuingsmile/PicList) , yükləmə qısayolunu təyin etməyi unutmayın və bir kliklə ekran görüntüsünü yükləyin.

Yüklədikdən sonra fayl adının avtomatik `Markdown` çıxarılmasını dəstəkləyir, bu da səmərəliliyi xeyli artırır.

Eyni zamanda, siz aşağıdakı konfiqurasiyaya müraciət edə, faylı dəyişdirə və şəkil ölçüsünü azaltmaq `avif` yüklənmiş faylı avtomatik olaraq sıxışdırmaq üçün konfiqurasiya edə bilərsiniz.

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

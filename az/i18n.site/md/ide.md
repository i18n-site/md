# Redaktor Tövsiyəsi

Hər kəsin öz sevimli redaktoru var. Burada `Markdown` ən yaxşı təcrübəmizi paylaşırıq.

Biz `MarkDown` yazmaq üçün istifadə [vscode](https://code.visualstudio.com/) və yazarkən real vaxtda önizləmə üçün [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) plug-in quraşdırırıq.

Aşağıda göstərildiyi kimi, önizləmə pəncərəsini açmaq üçün redaktorda sağ klikləyin.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

`Markdown` faylı açmaq üçün `vscode` zəng etmək üçün əmr satırına `code xxx.md` daxil edin.

Şəkilləri yükləmək üçün [PicList](https://github.com/Kuingsmile/PicList) edin, yükləmə qısayolunu təyin etməyi unutmayın və bir kliklə ekran görüntüsünü yükləyin.

Yüklədikdən sonra fayl adının avtomatik olaraq `Markdown` formatına kopyalanmasını dəstəkləyir, bu da səmərəliliyi xeyli artırır.

Eyni zamanda, aşağıdakı konfiqurasiyaya müraciət edə, faylı dəyişdirə və yüklənmiş faylı şəkil ölçüsünü azaltmaq üçün avtomatik olaraq `avif` a sıxılmaq üçün konfiqurasiya edə bilərsiniz.

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
# Editör Önerisi

Herkesin kendi alışkanlık editörü var; işte bizim `Markdown` en iyi uygulamalarımızı paylaşmak istiyoruz.

`Markdown` yazmak için [vscode](https://code.visualstudio.com/) kullanıyoruz ve gerçek zamanlı önizleme için [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) eklentisini yüklüyoruz.

Aşağıdaki görselde olduğu gibi, editörde sağ tıklayarak önizleme penceresini açabilirsiniz.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Komut satırına `code xxx.md` yazarak `vscode` ile `Markdown` dosyasını açabilirsiniz.

Resim yüklemek için [PicList](https://github.com/Kuingsmile/PicList) kullanın, yükleme kısayolunu ayarlamayı unutmayın, ekran görüntüsünü aldıktan sonra tek tuşla yükleyin.

Yükleme sonrası dosya adını otomatik olarak `Markdown` formatında kopyalamayı destekler, bu da verimliliği oldukça artırır.

Aşağıdaki yapılandırmaları inceleyerek, yüklenen dosyaların otomatik olarak `avif` formatında sıkıştırılmasını sağlayabilirsiniz, böylece görüntü boyutunu küçültebilirsiniz.

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
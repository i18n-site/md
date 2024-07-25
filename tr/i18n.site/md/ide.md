# Editör Önerisi

Herkesin kendi favori editörü vardır. En iyi uygulamalarımızı burada paylaşalım `Markdown`

Yazarken gerçek zamanlı önizleme yapmak için ! Write [vscode](https://code.visualstudio.com/) kullanıyoruz ve eklentiyi [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) yüklüyoruz `MarkDown`

Aşağıda gösterildiği gibi, önizleme penceresini açmak için düzenleyiciye sağ tıklayın.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`vscode` open `Markdown` dosyasını çağırmak için komut satırına `code xxx.md` girin.

Resimleri yüklemek için [PicList](https://github.com/Kuingsmile/PicList) i kullanın, yükleme kısayol tuşunu ayarlamayı unutmayın ve ekran görüntüsünü tek tıklamayla yükleyin.

Yüklemeden sonra dosya adı `Markdown` biçiminin otomatik olarak kopyalanmasını destekler, bu da verimliliği büyük ölçüde artırır.

Aynı zamanda, aşağıdaki yapılandırmaya başvurabilir, dosyayı değiştirebilir ve yüklenen dosyayı, görüntü boyutunu küçültmek için otomatik olarak `avif` olarak sıkıştırılacak şekilde yapılandırabilirsiniz.

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

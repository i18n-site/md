# Editör Önerisi

Herkesin kendi favori editörü vardır. Burada en iyi `Markdown` uygulamamızı paylaşıyoruz.

`MarkDown` yazmak için [vscode](https://code.visualstudio.com/) kullanıyoruz ve yazarken gerçek zamanlı önizleme yapmak için [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) eklentisini yüklüyoruz.

Aşağıda gösterildiği gibi, önizleme penceresini açmak için düzenleyiciye sağ tıklayın.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Dosya `Markdown` açmak üzere `vscode` çağırmak için komut satırına `code xxx.md` girin.

Resimleri yüklemek için [PicList](https://github.com/Kuingsmile/PicList) kullanın, yükleme kısayol tuşunu ayarlamayı unutmayın ve ekran görüntüsünü tek tıklamayla yükleyin.

Yüklemeden sonra dosya adının otomatik olarak `Markdown` formatına kopyalanmasını destekler, bu da verimliliği büyük ölçüde artırır.

Aynı zamanda, aşağıdaki yapılandırmaya başvurabilir, dosyayı değiştirebilir ve yüklenen dosyayı, görüntü boyutunu azaltmak için otomatik olarak `avif` sıkıştırılacak şekilde yapılandırabilirsiniz.

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
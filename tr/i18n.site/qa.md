# Sss

## Yanlışlıkla `.i18n/v` Silindi Ve Paket `npm` Yayınlanamamasına Neden Oldu

Paket `npm` tarafından yayımlanan tarihsel sürüm `.i18n/v/ol/v.hash` kaydedilir.

Yanlışlıkla `.i18n/v/ol` silerseniz paket `npm` yayınlanmayacaktır.

Şu anda öncelikle projenizin son yayın sürümünün sürüm numarasını [npmjs.com](//npmjs.com) örneğin `0.1.9` .

Daha sonra dosyayı oluşturmak için aşağıdaki `bash` bakın.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Bu şekilde onarımın dosya geçmişini kaybedeceğini, bir sonraki sürümün aşamalı olarak güncellenmesini imkansız hale getireceğini ve tüm içeriğin bir kez yeniden paketlenip yükleneceğini unutmayın.
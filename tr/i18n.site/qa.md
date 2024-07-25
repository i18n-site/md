# Ortak Sorun

## Yanlışlıkla Silindi `.i18n/V` `Npm` Paketin Yayınlanamamasına Neden Oldu

`npm` Paket sürümünün geçmiş versiyonu `.i18n/v/ol/v.hash`

Yanlışlıkla `.i18n/v/ol` yi silerseniz `npm` paketi yayınlanmayacaktır.

Şu anda öncelikle projenizin son yayın sürümünün sürüm numarasını bulun [npmjs.com](//npmjs.com) örneğin `0.1.9`

Daha sonra aşağıdaki `bash` Create dosyasına bakın.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Bu şekilde onarımın dosya geçmişini kaybedeceğini, bir sonraki sürümün aşamalı olarak güncellenmesini imkansız hale getireceğini ve tüm içeriğin bir kez yeniden paketlenip yükleneceğini unutmayın.


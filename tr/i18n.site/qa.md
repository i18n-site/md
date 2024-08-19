# Sıkça Sorulan Sorular

## Yanlışlıkla `.i18n/v` silindi, bu da `npm` paketinin yayınlanamamasına neden oldu

`.i18n/v/ol/v.hash` dosyası, `npm` paketinin yayınlanma geçmişini saklar.

Eğer yanlışlıkla `.i18n/v/ol` dosyasını silerseniz, `npm` paketiniz yayınlanamaz.

Şu anda öncelikle, projenizin son yayın sürümünün sürüm numarasını [npmjs.com](//npmjs.com) adresinde bulun. Örneğin, bu numara `0.1.9` olabilir.

Sonra aşağıdaki `bash` komutlarını kullanarak dosya oluşturun.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Unutmayın, bu şekilde onarım, dosya geçmişini kaybeder ve bir sonraki yayında artımlı güncellemeyi imkansız kılar; tüm içerik yeniden paketlenir ve yüklenir.
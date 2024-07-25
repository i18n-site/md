# Komut Satırı Parametrelerinin Ayrıntılı Açıklaması

## `-P` Dosyaları Temizle

`-p` Veya `--purge` her çeviri dizininde bulunan ancak kaynak dil dizininde bulunmayan dosyaları temizler.

Çünkü belgeleri yazarken Markdown dosya adları sıklıkla ayarlanır ve bu da çeviri dizininde birçok eski ve terk edilmiş dosyanın oluşmasına neden olur.

Diğer dil dizinlerinde silinmesi gereken dosyaları temizlemek için bu parametreyi kullanın.

## Çeviri Dizinini Belirtin `-D`

Çevrilen dizin varsayılan olarak geçerli dosyanın bulunduğu dizine ayarlanır.

`-d` Veya `--workdir` gibi çeviri dizinini belirtebilirsiniz:

```
i18 -d ~/i18n/md
```

## `-H` Yardımı Görüntüle

`-h` Veya `--help` satırı yardımını görüntüleyebilirsiniz.
# Komut Satırı Parametrelerinin Ayrıntılı Açıklaması

## `-p` ile Dosyaları Temizleme

`-p` veya `--purge`, çeviri dizinlerinde bulunan ancak kaynak dil dizininde bulunmayan dosyaları temizler.

Çünkü belgeleri yazarken Markdown dosya adları sıkça değiştirilir, bu da çeviri dizinlerinde birçok eski ve kullanılmayan dosya birikimine yol açar.

Bu parametre ile, diğer dil dizinlerinde silinmesi gereken dosyaları temizleyebilirsiniz.

## `-d` ile Çeviri Dizinini Belirleme

Çeviri dizini, varsayılan olarak mevcut dosyanın bulunduğu dizindir.

`-d` veya `--workdir`, çeviri dizinini şu şekilde belirtebilirsiniz:

```
i18 -d ~/i18n/md
```

## `-h` ile Yardımı Görüntüleme

`-h` veya `--help` ile komut satırı yardımını görüntüleyebilirsiniz.
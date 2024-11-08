# Komut Satırı Parametrelerinin Ayrıntılı Açıklaması

## 0Dosyaları `-p`

`-p` veya `--purge` her çeviri dizininde bulunan ancak kaynak dil dizininde bulunmayan dosyaları temizler.

Çünkü belgeleri yazarken Markdown dosya adları sıklıkla ayarlanır ve bu da çeviri dizininde birçok eski ve terk edilmiş dosyaya yol açar.

Diğer dil dizinlerinde silinmesi gereken dosyaları temizlemek için bu parametreyi kullanın.

## `-d` Çeviri Dizinini Belirtir

Çevrilen dizin varsayılan olarak geçerli dosyanın bulunduğu dizine ayarlanır.

`-d` veya `--workdir` , çeviri dizinini aşağıdaki gibi belirtebilir:

```
i18 -d ~/i18n/md
```

## `-h` Yardımı Görüntüle

Komut satırı yardımını görüntülemek için `-h` veya `--help` .
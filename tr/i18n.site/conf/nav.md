# Özelleştirilmiş Navigasyon

Gezinmenin nasıl özelleştirileceğini açıklamak için örnek olarak demo sitesini ele alalım [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

Yukarıdaki şekilde numaralandırılmış alanlara karşılık gelen dosyalar aşağıdaki gibidir:

1. Sol [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Sağ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) `HTML` üreten bir şablon dilidir.

[➔ ! gramerini öğrenmek için buraya tıklayın pug](https://pugjs.org)

Uluslararasılaştırmayı uygulamak için dosyada `${I18N.sponsor}` format dizisi kullanılır ve içeriği, kaynak dil dizinindeki karşılık gelen [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) değiştirilecektir.

**`pug` `css` ve `js` yazmayın** yoksa hata olur.

Stiller `css` yazılır ve web bileşenleri oluşturularak etkileşim sağlanır.

Burada gezinme çubuğunun stiline karşılık gelen dosya : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)
# i18n.site MarkDown Yazma Kuralı

## Bağlantı Noktası

Geleneksel `MarkDown` bağlantı noktaları metin içeriğine göre oluşturulur. Çoklu dil durumunda bu çözüm mümkün değildir.

`i18n.site` ile kabul edilen bağlantı noktası çözümü, konumlandırma bağlantı noktasını manuel olarak oluşturmak için `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` arada'ya benzer bir metin eklemektir.

`<a rel=id href="#xxx" id="xxx"></a>` , burada `rel=id` bağlantı noktasının sayfa stilini tanımlar, lütfen `xxx` gerçek bağlantı İngilizce kısaltmanızla değiştirin.

Çapalar genellikle başlığa eklenir, örneğin:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ekran efekti aşağıdaki gibidir:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` `HTML` Yaz

`HTML` `pug` koduna gömülebilir.

`<pre>` öğedeki içerik çevrilmeyecektir.

Bu iki noktayı birleştirerek çeşitli görüntü efektleri elde etmek için `MarkDown` `HTML` kolayca yazabilirsiniz.

[Referans için buraya tıklayın i18n.site Ana sayfadaki dil kodu listesi HTML yazılı olup](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) kod şu şekildedir: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` yukarıda `<pre>` da tanımlandığını unutmayın.
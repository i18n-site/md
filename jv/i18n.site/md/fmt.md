# i18n.site MarkDown Nulis Konvènsi

## Titik Jangkar

`MarkDown` titik anchor tradisional digawe adhedhasar isi teks Ing kasus multi-basa, solusi iki ora bisa ditindakake.

Solusi titik jangkar sing disepakati karo `i18n.site` yaiku nglebokake teks sing padha karo `<a rel=id href="#xxx" id="xxx"></a>` ing `MarkDown` kanggo nggawe titik jangkar posisi kanthi manual.

`<a rel=id href="#xxx" id="xxx"></a>` , ing kene `rel=id` nemtokake gaya kaca titik jangkar, ganti `xxx` nganggo singkatan Inggris jangkar sing asli.

Jangkar biasane ditambahake ing judhul, kayata:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efek tampilan kaya ing ngisor iki:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Nulis `HTML` Ing `MarkDown`

`HTML` bisa ditempelake ing `pug` kode.

Isi ing `<pre>` unsur ora bakal diterjemahake.

Nggabungake rong titik iki, sampeyan bisa kanthi gampang nulis `HTML` ing `MarkDown` kanggo entuk macem-macem efek tampilan.

Sampeyan bisa ngrujuk implementasine ing [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) kode kasebut kaya ing ngisor iki :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Elinga yen `<style>` uga ditetepake ing `<pre>` ndhuwur.


## Gambar/Video/Pranala Ing Pirang-Pirang Basa

Sawise `MarkDown` diowahi dadi `HTML` , `$LANG` ing atribut `src` lan `href` bakal diganti karo [kode basa](/i18/LANG_CODE) saiki.

Kanthi variabel iki, sampeyan bisa entuk multibahasa gambar / video / tautan.
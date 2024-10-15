# Pengoptimuman Enjin Carian (Seo)

## Prinsip

`i18n.site` mengguna pakai seni bina halaman tunggal tanpa muat semula Untuk memudahkan pengindeksan carian, halaman statik yang berasingan dan `sitemap.xml` akan dijana untuk perangkak.

Apabila `User-Agent` permintaan akses digunakan oleh perangkak enjin carian, permintaan akan diubah hala ke halaman statik melalui `302` .

Pada halaman statik, gunakan `link` untuk menunjukkan pautan ke versi bahasa yang berbeza halaman ini, seperti :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfigurasikan Storan Objek Untuk Memuat Naik Fail Statik

Fail statik boleh dijana secara tempatan, tetapi pendekatan yang lebih biasa ialah memuat naiknya ke storan objek.

Ambil fail konfigurasi `.i18n/htm/ol.yml` dalam projek demo sebagai contoh

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Sila ubah suai nilai `host:` di atas dahulu kepada nama domain anda, seperti `i18n.site` .

Kemudian, edit `~/.config/i18n.site.yml` dan tambah konfigurasi berikut :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Dalam konfigurasi, sila tukar `i18n.site` kepada nilai `host:` dalam `.i18n/htm/ol.yml` , pelbagai stor objek boleh dikonfigurasikan di bawah `s3` , dan medan `region` adalah pilihan (banyak kedai objek tidak perlu menetapkan medan ini).

Kemudian jalankan `i18n.site -n` untuk menerbitkan semula projek.

Jika anda telah mengubah suai `~/.config/i18n.site.yml` dan ingin memuat naik semula, sila gunakan arahan berikut dalam direktori akar projek untuk mengosongkan cache muat naik :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Konfigurasi cloudflare

Nama domain dihoskan kepada [cloudflare](//www.cloudflare.com)

### Peraturan Penukaran

Tambahkan peraturan penukaran seperti yang ditunjukkan di bawah:

![](//p.3ti.site/1725436822.avif)

Kod peraturan adalah seperti berikut, sila ubah suai kod "i18n.site" kepada nama domain anda:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Peraturan Caching

Tambahkan peraturan cache seperti berikut:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Peraturan Ubah Hala

Tetapkan peraturan ubah hala seperti berikut, sila ubah suai kod "i18n.site" kepada nama domain anda

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` Pilih ubah hala dinamik, sila ubah suai `/en` dalam laluan ubah hala `concat("/en",http.request.uri.path,".htm")` kepada bahasa lalai yang anda mahu enjin carian disertakan.

## Konfigurasi Awan Pintar Baidu

Jika anda perlu menyediakan perkhidmatan ke tanah besar China, anda boleh menggunakan [Baidu Smart Cloud](//cloud.baidu.com) .

Data dimuat naik ke Penyimpanan Objek Baidu dan terikat kepada Rangkaian Pengedaran Kandungan Baidu.

Kemudian buat skrip dalam [perkhidmatan EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) seperti berikut

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
}

r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})

})
```

Klik `Debug` , kemudian klik Terbitkan ke seluruh rangkaian.

![](//p.3ti.site/1725437754.avif)

## Penggunaan Lanjutan: Edarkan Trafik Berdasarkan Resolusi Serantau

Jika anda ingin menyediakan perkhidmatan di tanah besar China dan juga mahukan `cloudflare` trafik antarabangsa percuma, anda boleh menggunakan `DNS` dengan resolusi serantau.

Sebagai contoh, [Huawei Cloud DNS](https://www.huaweicloud.com) menyediakan analisis serantau percuma, yang mana trafik tanah besar China boleh melalui Baidu Smart Cloud, dan trafik antarabangsa boleh melalui `cloudflare` .

Terdapat banyak perangkap dalam konfigurasi `cloudflare` Berikut adalah beberapa perkara yang perlu diperhatikan :

### Nama Domain Dihoskan Dalam `DNS` Lain, Cara Menggunakan `cloudflare`

Pertama, ikat nama domain sewenang-wenangnya kepada `cloudflare` , dan kemudian gunakan `SSL/TLS` → nama domain tersuai untuk mengaitkan nama domain utama dengan nama domain ini.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Tidak Boleh Diakses Melalui Nama Domain Tersuai

Oleh kerana storan objek `cloudflare` dalam `R2` tidak boleh diakses oleh nama domain tersuai, storan objek pihak ketiga perlu digunakan untuk meletakkan fail statik.

Di sini kami mengambil [backblaze.com](https://www.backblaze.com) sebagai contoh untuk menunjukkan cara mengikat objek pihak ketiga untuk disimpan pada `cloudflare` .

Buat baldi pada `backblaze.com` , muat naik mana-mana fail, klik untuk menyemak imbas fail dan dapatkan nama domain `Friendly URL` , iaitu `f003.backblazeb2.com` di sini.

![](//p.3ti.site/1725440783.avif)

Tukar nama domain daripada `CNAME` kepada `f003.backblazeb2.com` pada `cloudflare` dan dayakan proksi.

![](//p.3ti.site/1725440896.avif)

Ubah suai `cloudflare` daripada `SSL` → mod penyulitan, tetapkan kepada `Full`

![](//p.3ti.site/1725438572.avif)

Tambahkan peraturan penukaran seperti yang ditunjukkan di bawah, letakkan dahulu (yang pertama mempunyai keutamaan paling rendah):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` pilih dinamik dan ubah suai `your_bucketname` dalam `concat("/file/your_bucketname",http.request.uri.path)` kepada nama baldi anda.

Selain itu, dalam peraturan penukaran `cloudflare` di atas, `index.html` ditukar kepada `file/your_bucketname/index.html` dan konfigurasi lain kekal sama.

![](//p.3ti.site/1725441384.avif)
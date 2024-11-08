# Pengoptimalan Mesin Pencari (Seo)

## Prinsip

`i18n.site` mengadopsi arsitektur halaman tunggal non-refresh. Untuk memfasilitasi pengindeksan pencarian, halaman statis terpisah dan `sitemap.xml` akan dibuat untuk dirayapi oleh crawler.

Ketika `User-Agent` permintaan akses digunakan oleh crawler mesin pencari, permintaan tersebut akan dialihkan ke halaman statis melalui `302` .

Pada halaman statis, gunakan `link` untuk menunjukkan link ke versi bahasa berbeda pada halaman ini, seperti :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Konfigurasi nginx Lokal

Ambil file konfigurasi `.i18n/htm/main.yml` di proyek demo sebagai contoh

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Silakan ubah terlebih dahulu nilai `host:` di atas ke nama domain Anda, misalnya `xxx.com` .

Kemudian, `i18n.site -n` , halaman statis akan dibuat di direktori `out/main/htm` .

Tentu saja, Anda juga dapat mengaktifkan file konfigurasi lainnya, seperti merujuk terlebih dahulu ke konfigurasi `main` untuk membuat `.i18n/htm/dist.package.json` dan `.i18n/htm/dist.yml` .

Kemudian jalankan `i18n.site -n -c dist` sehingga halaman statis akan dihasilkan menjadi `out/dist/htm` .

`nginx` dapat diatur dengan mengacu pada konfigurasi di bawah ini.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Jangan menyimpan skrip pekerja server dalam cache terlalu lama
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Tetapkan waktu cache yang lebih lama untuk sumber daya statis lainnya
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Tetapkan file statis mana yang digunakan perayap sebagai entri beranda
location = / {
  # Jika $botLang tidak kosong, berarti akses crawler dan pengalihan sesuai dengan jalur bahasa yang ditetapkan
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfigurasi aplikasi satu halaman
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigurasikan Penyimpanan Objek Untuk Mengunggah File Statis

File statis dapat dibuat secara lokal, namun pendekatan yang lebih umum adalah mengunggahnya ke penyimpanan objek.

Ubah `out` yang dikonfigurasi di atas menjadi :

```
out:
  - s3
```

Kemudian, edit `~/.config/i18n.site.yml` dan tambahkan konfigurasi berikut :

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

Dalam konfigurasi, harap ubah `i18n.site` ke nilai `host:` di `.i18n/htm/main.yml` , beberapa penyimpanan objek dapat dikonfigurasi di bawah `s3` , dan bidang `region` bersifat opsional (banyak penyimpanan objek tidak perlu menyetel bidang ini).

Kemudian jalankan `i18n.site -n` untuk menerbitkan ulang proyek.

Jika Anda telah memodifikasi `~/.config/i18n.site.yml` dan ingin mengunggah ulang, silakan gunakan perintah berikut di direktori root proyek untuk menghapus cache unggahan :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Konfigurasi cloudflare

Nama domain dihosting ke [cloudflare](//www.cloudflare.com)

### Aturan Konversi

Tambahkan aturan konversi seperti yang ditunjukkan di bawah ini:

![](//p.3ti.site/1725436822.avif)

Kode aturannya adalah sebagai berikut, silakan ubah kode "i18n.site" menjadi nama domain Anda:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Aturan Cache

Tambahkan aturan cache sebagai berikut:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Aturan Pengalihan

Tetapkan aturan pengalihan sebagai berikut, silakan ubah kode "i18n.site" menjadi nama domain Anda

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

`URL redirect` Pilih pengalihan dinamis, harap ubah `/en` di jalur pengalihan `concat("/en",http.request.uri.path,".htm")` ke bahasa default yang Anda ingin sertakan oleh mesin pencari.

## Konfigurasi Cloud Cerdas Baidu

Jika Anda perlu menyediakan layanan ke daratan Tiongkok, Anda dapat menggunakan [Baidu Smart Cloud](//cloud.baidu.com) .

Data diunggah ke Baidu Object Storage dan terikat ke Jaringan Distribusi Konten Baidu.

Kemudian buat script di [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) seperti berikut

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Header respons dapat diatur untuk men-debug output, seperti out.XXX = 'MSG';
})
```

Klik `Debug` , lalu klik Publikasikan ke seluruh jaringan.

![](//p.3ti.site/1725437754.avif)

## Penggunaan Lanjutan: Mendistribusikan Lalu Lintas Berdasarkan Resolusi Regional

Jika Anda ingin menyediakan layanan di Tiongkok daratan dan juga ingin `cloudflare` lalu lintas internasional gratis, Anda dapat menggunakan `DNS` dengan resolusi regional.

Misalnya, [Huawei Cloud DNS](https://www.huaweicloud.com) menyediakan analisis regional gratis, yang dengannya lalu lintas Tiongkok daratan dapat melewati Baidu Smart Cloud, dan lalu lintas internasional dapat melewati `cloudflare` .

Ada banyak kendala dalam konfigurasi `cloudflare` Berikut beberapa hal yang perlu diperhatikan :

### Nama Domain Dihosting Di `DNS` Lainnya, Cara Menggunakan `cloudflare`

Pertama, ikat nama domain arbitrer ke `cloudflare` , lalu gunakan `SSL/TLS` → nama domain khusus untuk mengaitkan nama domain utama ke nama domain ini.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Tidak Dapat Diakses Melalui Nama Domain Khusus

Karena penyimpanan objek `cloudflare` `R2` tidak dapat diakses dengan nama domain yang disesuaikan, penyimpanan objek pihak ketiga perlu digunakan untuk menempatkan file statis.

Di sini kita mengambil [backblaze.com](https://www.backblaze.com) sebagai contoh untuk mendemonstrasikan cara mengikat objek pihak ketiga untuk disimpan di `cloudflare` .

Buat keranjang di `backblaze.com` , unggah file apa pun, klik untuk menelusuri file, dan dapatkan nama domain `Friendly URL` , yaitu `f003.backblazeb2.com` di sini.

![](//p.3ti.site/1725440783.avif)

Ubah nama domain dari `CNAME` menjadi `f003.backblazeb2.com` pada `cloudflare` dan aktifkan proxy.

![](//p.3ti.site/1725440896.avif)

Ubah `cloudflare` dari `SSL` → mode enkripsi, atur ke `Full`

![](//p.3ti.site/1725438572.avif)

Tambahkan aturan konversi seperti yang ditunjukkan di bawah ini, letakkan di urutan pertama (yang pertama memiliki prioritas terendah):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` pilih dinamis dan ubah `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` ke nama bucket Anda.

Selain itu, pada aturan konversi `cloudflare` di atas, `index.html` diubah menjadi `file/your_bucketname/index.html` , dan konfigurasi lainnya tetap sama.

![](//p.3ti.site/1725441384.avif)
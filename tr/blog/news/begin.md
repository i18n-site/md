---

brief: |
  Şu anda iki açık kaynaklı komut satırı aracı uygulanmıştır: i18 (MarkDown komut satırı çeviri aracı) ve i18n.site (çok dilli statik belge sitesi oluşturucu)

---


# i18n.site · MarkDown Çeviri Ve Web Sitesi Oluşturma Aracı Artık Çevrimiçi!

Yarım yılı aşkın bir geliştirme sürecinden sonra [https://i18n.site](//i18n.site)

Şu anda iki açık kaynaklı komut satırı aracı uygulanmaktadır:

* `i18` : MarkDown Komut satırı çeviri aracı
* `i18n.site` : **Okuma deneyimi için optimize edilmiş** çok dilli statik belge sitesi oluşturucu

Çeviri, `Markdown` formatını mükemmel bir şekilde koruyabilir. Dosya değişikliklerini tanımlayabilir ve yalnızca değişiklik içeren dosyaları çevirebilir.

Çeviri düzenlenebilir; orijinal metni değiştirirseniz ve makineyle tekrar çevirirseniz, çeviride yapılan manuel değişikliklerin üzerine yazılmaz (orijinal metnin bu paragrafı değiştirilmemişse).

[➤ github Kütüphanesini yetkilendirip otomatik olarak takip i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ve **bonus $50 almak** için buraya tıklayın.

## Menşei

İnternet çağında tüm dünya bir pazardır ve çok dillilik ve yerellik temel becerilerdir.

Mevcut çeviri yönetimi araçları çok ağırdır. Sürüm `git` yönetimine güvenen programcılar hala komut satırını tercih etmektedir.

Bu nedenle bir çeviri aracı `i18` geliştirdim ve çeviri aracını temel alan çok dilli bir statik site oluşturucu `i18n.site` oluşturdum.

![](https://p.3ti.site/1723777556.avif)

Bu sadece başlangıç, yapılacak daha çok şey var.

Örneğin, statik belge sitesini sosyal medya ve e-posta aboneliklerine bağlayarak, güncellemeler yayınlandığında kullanıcılara zamanında ulaşılabilir.

Örneğin, çok dilli forumlar ve iş emri sistemleri herhangi bir web sayfasına yerleştirilebilir ve böylece kullanıcıların engeller olmadan iletişim kurmasına olanak sağlanır.

## Açık Kaynak

Ön uç, arka uç ve komut satırı [kodlarının tümü açık kaynaktır](https://i18n.site/i18n.site/c/src) (çeviri modeli henüz açık kaynak değildir).

Kullanılan teknoloji yığını aşağıdaki gibidir:

Ön uç [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Komut satırı ve arka uç pas temel alınarak geliştirildi.

arka uç [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Komut satırı [gömülü js Motor boa_engine](https://docs.rs/boa_engine) , [gömülü veritabanı fjall](https://github.com/fjall-rs/fjall) .

sunucu VPS [contabo](https://my.contabo.com)

veritabanı [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Kendi kendine oluşturulmuş olana posta gönder [chasquid](https://github.com/albertito/chasquid) SMTP

## Bize Ulaşın

Yeni ürünler piyasaya sürüldüğünde sorunlar kaçınılmazdır.

Google Forum aracılığıyla bizimle iletişime geçmekten çekinmeyin : [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
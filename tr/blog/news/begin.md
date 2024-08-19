# i18n.site · MarkDown Çeviri ve Web Sitesi Oluşturma Aracı, Şimdi Çevrimiçi!

[https://i18n.site](//i18n.site) sitesi, yarım yılı aşkın bir geliştirme sürecinin ardından hizmete sunuldu.

Şu anda iki adet açık kaynaklı komut satırı aracı hayata geçirilmiştir:

* `i18` : MarkDown komut satırı çeviri aracı
* `i18n.site` : **Okuma deneyimi için optimize edilmiş** çok dilli statik belge sitesi oluşturucu

Çeviri, `Markdown` formatını mükemmel bir şekilde koruyabilir. Dosya değişikliklerini tanımlayabilir ve yalnızca değişiklik içeren dosyaları çevirebilir.

Çeviri düzenlenebilir; orijinal metni değiştirirseniz ve makineyle tekrar çevirirseniz, çeviride yapılan manuel değişikliklerin üzerine yazılmaz (orijinal metnin bu paragrafı değiştirilmemişse).

[i18n.site 'in github yetkilendirmek ve otomatik olarak takip etmek](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ve **bonus $50 almak** için burayı tıklayın.

## Köken

İnternet çağında dünya geneli bir pazar haline geldi ve çok dillilik, yerelleştirme temel beceriler arasında yer alır.

Mevcut çeviri yönetim araçları oldukça ağır. Sürüm yönetimi `git`'e dayalı programcılar genellikle komut satırını tercih eder.

Bu nedenle, `i18` adlı bir çeviri aracı geliştirdim ve bu aracın temelinde çok dilli statik belge sitesi oluşturucu `i18n.site`'yi kurdum.

![](https://p.3ti.site/1723777556.avif)

Bu sadece başlangıç, yapmayı planladığımız çok şey var.

Örneğin, statik belge sitesini sosyal medya ve e-posta bültenleriyle entegre ederek, güncellemeleri kullanıcıya zamanında ulaştırabiliriz.

Örneğin, çok dilli forumlar ve destek talepleri sistemleri herhangi bir web sayfasına yerleştirilebilir, kullanıcıların engelsiz iletişim kurmasını sağlayabiliriz.

## Açık Kaynak

Ön uç, arka uç ve komut satırı kodları [hepsi açık kaynaktır](https://i18n.site/i18n.site/c/src) (çeviri modeli henüz açık kaynak değildir).

Kullandığımız teknoloji yığını şöyledir:

Ön uç: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Komut satırı ve arka uç: Rust tabanlı geliştirme

Arka uç: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases)

Komut satırı: [gömülü JavaScript motoru boa_engine](https://docs.rs/boa_engine), [gömülü veritabanı fjall](https://github.com/fjall-rs/fjall)

Sunucu VPS: [contabo](https://my.contabo.com)

Veritabanı: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org)

E-posta gönderme: Kendi kendine oluşturulmuş SMTP [chasquid](https://github.com/albertito/chasquid)

## Bize Ulaşın

Yeni ürünlerin piyasaya sürülmesiyle birlikte sorunlar kaçınılmazdır.

Google Grupları üzerinden bizimle iletişime geçmekten çekinmeyin: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
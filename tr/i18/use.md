# Kurulum Ve Kullanım

## windows Ilk Önce git Bash'ı Kuruyor

windows Sistem, [önce `git bash` indirip yüklemek için lütfen buraya tıklayın](https://git-scm.com/download/win) .

Sonraki işlemleri `git bash` çalıştırın.

## Düzenlemek

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Çeviri Belirtecini Yapılandırın

Ziyaret edin [i18n.site/token](//i18n.site/token) Belirteci kopyalamak için tıklayın

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` oluşturun, kopyalanan içeriği içine yapıştırın, içerik aşağıdaki gibidir:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , ödeme için bir kredi kartı bağlamanız gerekmektedir (yeniden yükleme gerekmez, web sitesi kullanıma göre ücretleri otomatik olarak kesecektir, [fiyatlandırma için ana sayfaya bakın](/#price) ).

## Kullanmak

### Demo Projesi

`i18` çevirinin yapılandırmasını öğrenmek için lütfen demo projeye bakın [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Çin'deki kullanıcılar klonlayabilir [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonlamadan sonra dizine girin ve çeviriyi tamamlamak için `i18` çalıştırın.

### Dizin Yapısı

Şablon ambar dizin yapısı aşağıdaki gibidir

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` dizinindeki çevrilmiş demo dosyaları yalnızca örnektir ve silinebilir.

### Çeviriyi Çalıştır

Dizine girin ve çevirmek için `i18` çalıştırın.

Program, çeviriye ek olarak `.i18n/data` klasörünü de oluşturacaktır, lütfen bunu depoya ekleyin.

Yeni dosyayı çevirdikten sonra bu dizinde yeni bir veri dosyası oluşturulacaktır. `git add . ` eklemeyi unutmayın.

## Yapılandırma Dosyası

`.i18n/conf.yml` `i18` komut satırı çeviri aracının yapılandırma dosyasıdır

İçeriği aşağıdaki gibidir:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Kaynak Dil Çeviri Dili &

Yapılandırma dosyasında `fromTo` alt değeri:

`en` kaynak dil, `zh ja ko de fr` çevirinin hedef dilidir.

Dil kodu [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) .

Örneğin Çinceyi İngilizceye çevirmek istiyorsanız bu satırı `zh: en` yeniden yazın.

Desteklenen tüm dillere çeviri yapmak istiyorsanız lütfen `:` sonra boş bırakın. Örneğin

```
i18n:
  fromTo:
    en:
```

/ alt dizinler için farklı `fromTo` yapılandırılabilir Dosyalar aşağıdaki gibi yazılmıştır :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Bu yapılandırma tablosunda, dizin `blog` çevirisinin kaynak dili `zh` ve dizin `blog/your_file_name.md` çevirisinin kaynak dili `ja` .

### Dosyayı Yoksay

Varsayılan olarak kaynak dil dizininde `.md` ve `.yml` ile başlayan tüm dosyalar çevrilecektir.

Belirli dosyaları yok saymak ve bunları çevirmek istemiyorsanız (tamamlanmamış taslaklar gibi), `ignore` alan yapılandırmasını kullanabilirsiniz.

`ignore` `.gitignore` dosyasıyla aynı [globset](https://docs.rs/globset/latest/globset/#syntax) kullanır.

Örneğin yukarıdaki yapılandırma dosyasındaki `_* ` , `_` ile başlayan dosyaların çevrilmeyeceği anlamına gelir.

## Çeviri Kuralları

### Çeviri Editörleri Satır Eklememeli Veya Silmemelidir

Çeviri düzenlenebilir. Orijinal metni değiştirin ve makineyle tekrar çevirin; çeviride yapılan manüel değişikliklerin üzerine yazılmayacaktır (eğer orijinal metnin bu paragrafı değiştirilmemişse).

Ancak çevirideki satırların ve orijinal metnin bire bir örtüşmesi gerektiğini lütfen unutmayın. Yani çeviriyi derlerken satır eklemeyin veya silmeyin. Aksi takdirde çeviri düzenleme önbelleğinde karışıklığa neden olur.

Bir şeyler ters giderse [çözümler için lütfen SSS'ye bakın.](/i18/qa#H1)

### `YAML` Çeviri

Komut satırı aracı, kaynak dil dosya dizininde sonu `.yml` ile biten tüm dosyaları bulacak ve çevirecektir.

* Dosya adı son ekinin `.yml` ( `.yaml` değil) olması gerektiğini unutmayın.

Araç, sözlük anahtarlarını değil, yalnızca `.yml` içindeki sözlük değerlerini çevirir.

Örneğin `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` olarak çevrilecek

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` çevirisi manuel olarak da değiştirilebilir (ancak çeviriye anahtar veya satır eklemeyin veya silmeyin).

`YAML` çeviriye dayanarak, çeşitli programlama dilleri için kolayca uluslararası çözümler oluşturabilirsiniz.

## Gelişmiş Kullanım

### Çeviri Alt Dizini

`.i18n/conf.yml` oluşturulduğu sürece (her seferinde demo proje şablonundan başlamaya gerek yoktur), `i18` düzgün çalışacaktır.

Komut satırı aracı tüm alt dizinlerde `.i18n/conf.yml` konfigürasyon bulacak ve bunları çevirecektir.

[monorepo](//monorepo.tools) mimarisini kullanan projeler dil dosyalarını alt dizinlere bölebilir.

![](https://p.3ti.site/1719910016.avif)

### Özel Kurulum Dizini

Varsayılan olarak `/usr/local/bin` kurulacaktır.

`/usr/local/bin` yazma izni yoksa `~/.bin` yüklenecektir.

Ortam değişkeni `TO` ayarlanması kurulum dizinini tanımlayabilir, örneğin :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
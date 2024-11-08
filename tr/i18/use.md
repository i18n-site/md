# Kurulum Ve Kullanım

## windows Ilk Önce git Bash'ı Yükleyin

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

Ayrıca, ödeme için bir kredi kartını [i18n.site/payBill](//i18n.site/payBill) e bağlamanız gerekir (Yeniden yükleme gerekmez, web sitesi kullanıma göre ücretleri otomatik olarak kesecektir, [fiyatlandırma için ana sayfaya bakın](/#price) ).

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

Farklı alt dizinler için farklı `fromTo` yapılandırabilirsiniz / Bir gösteri aşağıdaki gibi yazılmıştır :

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

Bu yapılandırma tablosunda katalog `blog` çevirisinin kaynak dili `zh` ve katalog `blog/your_file_name.md` çevirisinin kaynak dili `ja` .

### Çok Dilli Görseller/Bağlantılar

Resimlerdeki URL'ler ve `replace:` ve `MarkDown` bağlantılar (ve gömülü `HTML` `src` ve `href` nitelikleri) bu önekle `.i18n/conf.yml` yapılandırıldığında, URL'deki kaynak dil kodunun yerini çevirinin dil kodu alacaktır ( [language kod listesi](/i18/LANG_CODE) ).

Örneğin konfigürasyonunuz aşağıdaki gibidir:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` bir sözlüktür, anahtar değiştirilecek URL önekidir ve değer de değiştirme kuralıdır.

Yukarıdaki kural `ko de uk>ru zh-TW>zh >en` değiştirilmesinin anlamı, `ko de` kendi dil kodlarının resmini kullanması, `zh-TW` ve `zh` `zh` resmini kullanması, `uk` `ru` resmini kullanması ve diğer dillerin ( `ja` gibi) resmi kullanmasıdır. varsayılan olarak `en` .

Örneğin `MarkDown` Fransızca ( `fr` ) kaynak dosyası aşağıdaki gibidir :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Çevrilen ve oluşturulan İngilizce ( `en` ) dosyası aşağıdaki gibidir :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Burada kaynak dil kodundaki `/en/` , hedef dildeki `/zh/` değiştirilir.

Not : URL'de değiştirilen metnin dil kodundan önce ve sonra `/` olmalıdır.

> [!TIP]
> `url:` `- /` yapılandırılmışsa yalnızca göreli yollar eşleştirilir ancak `//` ile başlayan URL'ler eşleşmez.
>
> Bir alan adının bazı bağlantıları değiştirilmek istiyor, bazıları değiştirilmek istemiyorsa bunları ayırt etmek için `[x](//x.com/en/)` , `[x](https://x.com/en/)` gibi farklı önekler kullanabilirsiniz.

### Dosyayı Yoksay

Varsayılan olarak kaynak dil dizininde `.md` ve `.yml` ile başlayan tüm dosyalar çevrilecektir.

Belirli dosyaları yok saymak ve çevirmemek istiyorsanız (tamamlanmamış taslaklar gibi), bunu `ignore` alanıyla yapılandırabilirsiniz.

`ignore` `.gitignore` dosyasıyla aynı [globset](https://docs.rs/globset/latest/globset/#syntax) kullanır.

Örneğin yukarıdaki yapılandırma dosyasındaki `_* ` , `_` ile başlayan dosyaların çevrilmeyeceği anlamına gelir.

## Çeviri Kuralları

### Çeviri Editörleri Satır Eklememeli Veya Silmemelidir

Çeviri düzenlenebilir. Orijinal metni değiştirin ve makineyle tekrar çevirin; çeviride yapılan manuel değişikliklerin üzerine yazılmayacaktır (orijinal metnin bu paragrafı değiştirilmemişse).

> [!WARN]
> Çevirinin satırları ile orijinal metin arasında birebir örtüşme olmalıdır. Yani çeviriyi derlerken satır eklemeyin veya silmeyin. Aksi takdirde çeviri düzenleme önbelleğinde karışıklığa neden olur.

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
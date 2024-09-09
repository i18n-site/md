# Kurulum ve Kullanım

## Windows'ta Öncelikle Git Bash Yükleyin

Windows sisteminde, önce [`git bash` indirip yüklemek için buraya tıklayın](https://git-scm.com/download/win).

`git bash` içinde sonraki işlemleri gerçekleştirin.

## Kurulum

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Çeviri Token'ı Yapılandırma

[i18n.site/token](//i18n.site/token) adresini ziyaret edin ve token'ı kopyalayın

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` dosyasını oluşturun ve kopyalanan içeriği buraya yapıştırın, içerik şu şekilde olmalıdır:

```
token: YOUR_API_TOKEN
```

Ayrıca, [i18n.site/payBill](//i18n.site/payBill) adresinde ödeme kartınızı bağlayın (yükleme gerekmez, site kullanıma göre otomatik olarak ücret keser, [fiyatlandırma için ana sayfaya bakın](/#price)).

## Kullanım

### Demo Projesi

Gösteri projesine bakarak `i18` çevirisinin yapılandırmasını öğrenin [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18).

Çin kullanıcıları [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18) dosyasını klonlayabilir

Klonladıktan sonra dizine girin ve `i18` komutunu çalıştırarak çeviriyi tamamlayın.

### Dizin Yapısı

Şablon depo dizin yapısı aşağıdaki gibi olmalıdır:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` dizinindeki çeviri örnek dosyaları sadece bir örnek olup, silinebilir.

### Çeviriyi Çalıştırma

Dizine girin ve `i18` komutunu çalıştırarak çeviriyi gerçekleştirin.

Program, çeviriye ek olarak `.i18n/data` dizinini de oluşturacaktır; lütfen bu dizini depoya ekleyin.

Yeni bir dosya çevrildiğinde bu dizin altında yeni bir veri dosyası oluşturulacaktır. `git add .` komutunu eklemeyi unutmayın.

## Yapılandırma Dosyası

`.i18n/conf.yml` dosyası, `i18` komut satırı çeviri aracının yapılandırma dosyasıdır

İçeriği şu şekildedir:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Kaynak Dil ve Çeviri Dili

Yapılandırma dosyasında `fromTo` alanı:

`en` kaynak dil, `zh ja ko de fr` ise çeviri dilleridir.

Dil kodlarına [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) adresinden bakabilirsiniz.

Örneğin, Çince'yi İngilizceye çevirmek için bu satırı `zh: en` olarak değiştirin.

Eğer tüm desteklenen dillere çeviri yapmak istiyorsanız, `:` sonrasını boş bırakın. Örneğin:

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

Bu yapılandırma tablosunda, `blog` dizininin kaynak dili `zh`, `blog/your_file_name.md` dosyasının kaynak dili ise `ja`dır.

### Dosyaları Yoksayma

Varsayılan olarak, kaynak dil dizininde `.md` ve `.yml` ile biten tüm dosyalar çevrilecektir.

Eğer belirli dosyaları çevirmek istemiyorsanız (örneğin, tamamlanmamış taslaklar), `ignore` alanını yapılandırabilirsiniz.

`ignore` alanı, `.gitignore` dosyasına benzer [globset](https://docs.rs/globset/latest/globset/#syntax) sintaksini kullanır.

Örneğin, yukarıdaki yapılandırma dosyasındaki `_*` ifadesi, `_` ile başlayan tüm dosyaların çevrilmeyeceği anlamına gelir.

## Çeviri Kuralları

### Çeviri düzenlenirken satır eklemeyin veya silmeyin

Çeviri düzenlenebilir. Orijinal metni değiştirin ve makineyle tekrar çevirin; çeviride yapılan manuel değişikliklerin üzerine yazılmayacaktır (orijinal metnin bu paragrafı değiştirilmemişse).

Ancak, çeviri ve orijinal metin satırlarının bire bir eşleşmesi gerektiğini unutmayın. Yani, çeviride satır eklemeyin veya silmeyin, aksi takdirde çeviri düzenleme önbelleğinde karışıklığa neden olur.

Eğer bir sorun yaşarsanız, [SSS'deki çözümlere](/i18/qa#H1) bakabilirsiniz

### `YAML` çevirisi

Komut satırı aracı, kaynak dil dosya dizininde `.yml` ile biten tüm dosyaları bulur ve çevirir.

* Dosya adı son ekinin `.yml` (`.yaml` değil) olduğuna dikkat edin.

Araç, `.yml` dosyasındaki sözlük değerlerini çevirir, sözlük anahtarlarını değil.

Örneğin, `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` olarak çevrilecek

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` çevirisini manuel olarak değiştirebilirsiniz (ancak çeviriye anahtar veya satır eklemeyin veya silmeyin).

`YAML` çeviriye dayanarak, çeşitli programlama dilleri için kolayca uluslararası çözümler oluşturabilirsiniz.

## Gelişmiş Kullanım

### Alt Dizin Çevirisi

`.i18n/conf.yml` dosyasını oluşturduğunuz sürece, `i18` sorunsuz çalışır (demo proje şablonundan başlamanıza gerek yok).

Komut satırı aracı, tüm alt dizinlerdeki `.i18n/conf.yml` yapılandırmalarını bulur ve bunları çevirir.

[Monorepo](//monorepo.tools) mimarisini kullanan projeler, dil dosyalarını alt dizinlere bölebilir.

![](https://p.3ti.site/1719910016.avif)

### Özel Kurulum Dizini

Varsayılan olarak `/usr/local/bin` dizinine kurulur.

`/usr/local/bin` dizinine yazma izniniz yoksa, `~/.bin` dizinine kurulur.

Ortam değişkeni `TO` ile kurulum dizinini tanımlayabilirsiniz, örneğin:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
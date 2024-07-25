# Kurulum Ve Kullanım

## windows Ilk Önce git Bash'ı Yükleyin

windows Sistem, [önce indirmek ve yüklemek için lütfen buraya tıklayın `git bash`](https://git-scm.com/download/win)

Sonraki işlemleri `git bash`

## Düzenlemek

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Çeviri Belirtecini Yapılandırın

Ziyaret edin [i18n.site/token](//i18n.site/token) Belirteci kopyalamak için tıklayın

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Oluşturun `~/.config/i18n.site.yml` kopyalanan içeriği içine yapıştırın, içerik aşağıdaki gibidir:

```
token: YOUR_API_TOKEN
```

Ayrıca, ödeme için bir kredi kartı bağlamanız [i18n.site/payBill](//i18n.site/payBill) (yeniden yükleme gerekmez, web sitesi kullanıma göre ücretleri otomatik olarak kesecektir, [fiyatlandırma için ana sayfaya bakın](/#price) ).

## Kullanmak

### Demo Projesi

`i18` yapılandırmasını öğrenmek için lütfen demo projeye bakın [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Çin'deki kullanıcılar klonlayabilir [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonlamadan sonra dizine girin ve çeviriyi tamamlamak için `i18`

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

`en` dizini, yalnızca örnek niteliğinde olan ve silinebilen çevrilmiş demo dosyalarını içerir.

### Çeviriyi Çalıştır

Dizine girin ve çevirmek için `i18` komutunu çalıştırın.

### Depoya Dosya Ekleyin

Program, çeviriye ek olarak aşağıdaki dosyaları da oluşturacaktır; lütfen bunları depoya ekleyin.

```
.i18n/hash
.i18n/cache/.gitignore
```

Bunlar arasında `.i18n/cache/.gitignore` in içeriği aşağıdaki gibidir :

```
**/*
!**/.gitignore
```

Bu `.i18n/cache/` dizinindeki tüm dosyaların göz ardı edilmesi anlamına gelir ( `.i18n/cache/.gitignore` hariç).

Sürüm kontrol yazılımınız `git` değilse, lütfen bu yapılandırmaya göre dikkate almayın.

## Yapılandırma Dosyası

`i18` satırı çeviri aracının yapılandırma dosyasıdır `.i18n/conf.yml`

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

Yapılandırma dosyasında `fromTo` nin astları:

`en` kaynak dil, `zh ja ko de fr` ise çevirinin hedef dilidir.

Dil kodu bkz [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Örneğin Çinceyi İngilizceye çevirmek istiyorsanız bu satırı yeniden yazın `zh: en`

Desteklenen tüm dillere çeviri yapmak istiyorsanız lütfen `:` 'den sonra boş bırakın. Örneğin

```
i18n:
  fromTo:
    en:
```

### Dosyayı Yoksay

Varsayılan olarak kaynak dil dizininde `.md` ve `.yml` ile başlayan tüm dosyalar çevrilecektir.

Belirli dosyaları yok saymak ve çevirmemek istiyorsanız (tamamlanmamış taslaklar gibi), `ignore` alan yapılandırmasını kullanabilirsiniz.

`ignore` `.gitignore` file'a benzer bir sözdizimi kullanır [globset](https://docs.rs/globset/latest/globset/#syntax)

Örneğin yukarıdaki yapılandırma dosyasında `_* ` , `_` ile başlayan dosyaların çevrilmeyeceği anlamına gelir.

## Çeviri Kuralları

### Çeviri Editörleri Satır Eklememeli Veya Silmemelidir

Çeviri düzenlenebilir. Orijinal metni değiştirin ve makineyle tekrar çevirin; çeviride yapılan manuel değişikliklerin üzerine yazılmayacaktır (orijinal metnin bu paragrafı değiştirilmemişse).

Ancak çevirideki satırların ve orijinal metnin bire bir örtüşmesi gerektiğini lütfen unutmayın. Yani çeviriyi derlerken satır eklemeyin veya silmeyin. Aksi takdirde çeviri düzenleme önbelleğinde karışıklığa neden olur.

Bir şeyler ters giderse [çözümler için lütfen SSS'ye bakın.](/i18/qa#H1)

### `YAML` Çevirmek

Komut satırı aracı, kaynak dildeki dosya dizininde `.yml` ile biten tüm dosyaları bulacak ve bunları çevirecektir.

* Dosya adı son ekinin `.yml` ( `.yaml` değil) olması gerektiğini unutmayın.

Araç, sözlük anahtarlarını değil, yalnızca `.yml` içindeki sözlük değerlerini çevirir.

Örneğin `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

olarak tercüme edilecektir `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` nin çevirisi manuel olarak da değiştirilebilir (ancak çeviriye anahtar veya satır eklemeyin veya silmeyin).

`YAML` Translation'ı temel alarak çeşitli programlama dilleri için kolayca uluslararası çözümler oluşturabilirsiniz.

## Gelişmiş Kullanım

### Çeviri Alt Dizini

`.i18n/conf.yml` yarattığınız sürece (her seferinde demo proje şablonundan başlamanıza gerek yoktur), `i18` düzgün çalışacaktır.

Komut satırı aracı `.i18n/conf.yml` yapılandırmasını tüm alt dizinlerde bulacak ve çevirecektir.

[monorepo](//monorepo.tools) mimarisini kullanan projeler dil dosyalarını alt dizinlere bölebilir.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Özel Kurulum Dizini

Varsayılan olarak `/usr/local/bin` e yüklenecektir.

`/usr/local/bin` yazma iznine sahip değilse `~/.bin` konumuna yüklenecektir.

Ortam değişkenlerini ayarlayın `TO` kurulum dizinini tanımlayabilirsiniz :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

# .i18n/conf.yml

`i18n.site` konfigürasyon dosyası `.i18n/conf.yml` dir.

[`i18`](/i18) ve `ignore:` ile `i18n:` ayarları dışında, konfigürasyon dosyası aşağıdaki gibi olacaktır:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
addon:
  - i18n.addon/toc
```

`upload`un `ext:` konfigürasyonu, sadece `.md` dosyalarını yükleyeceğiniz anlamına gelir.

## Üst Kısımdaki Gezinme Menüsü

Ana sayfanın üst kısmındaki gezinme menüsünü tanımlayan `nav:` konfigürasyon seçeneği.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`i18n: home` ile `en/i18n.yml` deki `home: Home` eşleşir.

`en/i18n.yml` birden fazla dile çevrilecektir, örneğin `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Çeviri tamamlandıktan sonra, çevirinin `yml` değerlerini değiştirebilirsiniz, ancak `yml` anahtarlarını eklemeyin veya silmeyin.

### `use: Toc`, tek dosya şablonu (içindekilerli)

`nav` konfigürasyonunda:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc`, tek bir `Markdown` dosyasını oluşturan `Toc` şablonunu kullanır.

`TOC` , `Table of Contents` kısaltmasıdır. Bu şablon oluşturulduğunda, bu `Markdown` dosyanın ana hatları kenar çubuğunda görüntülenecektir.

`url:`, `Markdown` dosyasının yolunu belirtir (`/` kök dizine `/README.md` karşılık gelir, dosya adı büyük harf ile başlamalı ve küçük harf ile devam etmelidir).

### `use: Md`, tek dosya şablonu (içindekilersız)

`Md` şablonu `Toc` şablonuyla aynıdır ve her ikisi de tek bir `Markdown` dosyasını oluşturmak için kullanılır. Ancak `Md` şablonu kenar çubuğunda içindekileri göstermez.

Yukarıdaki konfigürasyonda `use: Toc`u `use: Md` ile değiştirebilir, `md` dizininde `i18n.site`yi yeniden çalıştırabilir ve ardından geliştirme önizleme URL'sini ziyaret ederek ana sayfadaki değişiklikleri gözlemleyebilirsiniz.

### Yapılandırma yolu olmayan varsayılan yükleme

Belirli bir yola erişildiğinde ve bu yol `nav:` konfigürasyonunda tanımlanmamışsa, bu yola karşılık gelen `Markdown` dosyası varsayılan olarak yüklenecek ve `Md` şablonu kullanılarak oluşturulacaktır.

Örneğin, `/test` erişildiğinde ve `nav:` bu yolu yapılandırmamışsa, dil İngilizce (kod `en`) olan sayfa, varsayılan olarak `/en/test.md` dosyasını yükleyecek ve `Md` şablonu kullanılarak oluşturulacaktır.

Eğer `/en/test.md` dosyası mevcut değilse, varsayılan `404` sayfası görüntülenecektir.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, çoklu dosya şablonu

Konfigürasyon dosyasında:

```
  - i18n: blog
    use: Doc
```

`Doc` şablonunu kullanarak şablon oluşturulacağını belirtir.

`Doc` şablonu, tek veya birden fazla proje için belge içindekilerini oluşturmak üzere birden fazla `Markdown` dosyasını entegre etmeyi destekler.

#### Tek proje (birden fazla dosya)

Yukarıdaki `blog`, `Doc` şablonunun tek proje modudur.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Boş Olduğunda Varsayılan Olarak i18n Değerine Ayarlanır

`url` belirtilmemişse `url` varsayılan olarak `i18n` değerini alır. Bu kural diğer şablonlar için de geçerlidir.

Yukarıdaki yazım, `url: blog` ile eşdeğerdir ve karşılık gelen dosya `en/blog/TOC` dir.

#### Birden fazla proje

`.i18n/conf.yml` deki `i18n:doc` konfigürasyonu birden fazla proje modudur.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

`menu: NB demo1,demo2`, `NB` şablonunu kullanarak açılır menü oluşturur.

`Name Brief` kısaltması olan `NB`, açılır menüde projenin adını ve sloganını görüntülemeyi sağlar.

`NB` ardından `demo1,demo2` parametrelerini alır.
Not : ** `demo1,demo2` `,` önce ve sonra ** boşluk olmamalıdır.

Yukarıdaki parametreler için karşılık gelen dizin indeks dosyası:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC İçindekiler Dizini

`i18n.site`, `TOC` şablon yapılandırmasına karşılık gelen `doc` dizin indeks dosyasını okumak için demo deposundaki `js` eklentisi `.i18n/hook/after.tran/TOC.js` yi çalıştırır ve `json` içindekiler tablosunu oluşturur.

`doc` şablonu kullanıyorsanız bu eklentiye sahip olmanız gerekir.

Proje `i18n.site` boş bir klasörden başlatıldığında, demo projesindeki `.i18n` dizinini kopyalamanızı unutmayın.

`Doc` şablonu, oluşturulan `json` temelinde içindekiler tablosunu oluşturur.

##### İçerik Ayrıntılı Açıklaması

`en/blog/TOC` aşağıdaki gibi olacaktır:

```
README.md

news/README.md
  news/begin.md
```

##### Düzeyleri belirtmek için girinti kullanın

`en/blog/TOC` nun ilk satırı `README.md`, yani proje adı olan `i18n.site` ye karşılık gelir.

Sonraki iki satır aşağıdaki ekran görüntüsünde gösterildiği gibi olacaktır.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md`, `News` a karşılık gelir,
`news/begin.md`, `Our Product is Online !` a karşılık gelir

`TOC` dosyaları, içindekilerin hiyerarşik ilişkisini belirtmek için girintili olup, çok düzeyli girintiyi ve `#` ile başlayan satırların yorum olarak kabul edilmesini destekler.

##### Ebeveyn düzeyi yalnızca başlığı içerir, içerik içermez

Birden fazla girinti düzeyi olduğunda, ebeveyn düzeyi yalnızca başlığı içerir, içerik içermez. Aksi takdirde düzen bozulabilir.

##### README.md Projesi

`en/demo2/README.md` gibi `README.md` dosyasına içerik yazılabilir.

Bu dosyanın içeriği bir içindekiler tablosu taslağı göstermez, bu nedenle kısa ve öz bir giriş yazmanız önerilir.

###### Proje Sloganı

`Deme Two` açılır menünün altında ve katalog taslağı proje adının altında, `Your Project slogan` sloganını görüntüler.

![](https://p.3ti.site/1721276842.avif)

Bu `en/demo2/README.md` nun ilk satırına karşılık gelir

```
# Demo Two : Your Project slogan
```

Proje `README.md` nun birinci düzey başlığının ilk kolonu `:` ile ayrılan içerik, proje sloganı olarak kabul edilir.

Çin, Japonya ve Kore'deki kullanıcılar, tam genişlikte iki nokta üst üste yerine yarım genişlikte iki nokta üst üste `:` kullanmanız gerektiğini lütfen unutmayın.

##### TOC'yi Toplu Olarak Nasıl Taşıyabilirsiniz?

Kaynak dilin dizinine `TOC` dosyanın yerleştirilmesi gerekiyor.

Örneğin, kaynak dil Çince ise yukarıdaki `TOC`, `zh/blog/TOC` dir.

Kaynak dil değiştirilirse projedeki belirli bir dilin `TOC` dosyasını toplu olarak başka bir dile taşımanız gerekir.

Aşağıdaki komutlara bakabilirsiniz:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Lütfen yukarıdaki komuttaki `en/` ve `zh/` dil kodlarını kendi dil kodlarınızla değiştirin.
# .i18n/conf.yml

`i18n.site` için konfigürasyon dosyası `.i18n/conf.yml` olup içeriği aşağıdaki gibidir :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Bunlardan `upload` `ext:` kadar konfigürasyon öğesi, yayınlanırken yalnızca `.md` yükleneceği anlamına gelir.

## Üst Gezinme Gezintisi

Ana sayfanın üst kısmındaki gezinme menüsüne karşılık gelen `nav:` yapılandırma seçeneği.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Bunlar arasında `i18n: home` , `en/i18n.yml` `home: Home` karşılık gelir (burada `en` proje çevirisinin kaynak dilidir).

`en/i18n.yml` içeriği, gezinme menüsünde görüntülenen ve yapılandırmadaki `fromTo` göre çevrilecek olan metindir, örneğin `zh/i18n.yml` çevrilecektir.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Çeviri tamamlandıktan sonra, çevirinin `yml` değerini değiştirebilirsiniz ancak çevirinin `yml` anahtarını eklemeyin veya silmeyin.

### `use: Toc` Belge Şablonu

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tek bir `Markdown` şablonunu oluşturan `Toc` şablonunu kullanarak oluşturma anlamına gelir.

`TOC` `Table of Contents` kısaltmasıdır. Bu şablon oluşturulduğunda, bu `Markdown` dosyanın ana hatları kenar çubuğunda görüntülenecektir.

`url:` `Markdown` dosya yolunu temsil eder ( `/` `/README.md` kök dizinine karşılık gelir, bu dosya adı bir büyük harf öneki ve bir küçük harf son eki gerektirir).

### `use: Md` Belge Şablonu

`Md` şablonu ve `Toc` şablonu aynıdır ve her ikisi de tek bir `Markdown` dosyasını oluşturmak için kullanılır. Ancak `Md` şablonu kenar çubuğundaki taslağı göstermiyor.

Yukarıdaki yapılandırmada `use: Toc` `use: Md` olarak değiştirebilir, `md` dizininde `i18n.site` tekrar çalıştırabilir ve ardından ana sayfadaki değişiklikleri gözlemlemek için geliştirme önizleme URL'sini ziyaret edebilirsiniz.

### `use: Blog` Blog Şablonu

Blog şablonu, yayınlanma zamanına göre makalelerin (başlıklar ve özetler) bir listesini görüntüler.

[→ Özel konfigürasyon hakkında bilgi edinmek için buraya tıklayın](/i18n.site/conf/blog)

### `use: Doc` Dosya Belge Şablonları

Yapılandırma dosyasında:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Şablon oluşturma için `Doc` kullanıldığını gösterir.

`Doc` şablonu, tek veya birden fazla proje için belge ana hatları oluşturmak üzere birden fazla `MarkDown` entegre edilmesini destekler.

#### Birden Fazla Proje Ve Birden Fazla Dosya

0'da `.i18n/conf.yml` yapılandırması `i18n:doc` çoklu proje çoklu dosya oluşturma modudur.

Burada `menu: NB demo1,demo2` , açılır menüyü oluşturmak için `NB` şablonunu kullanmak anlamına gelir.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`Name Breif` kısaltması olan `NB` , açılır menüde projenin adını ve sloganını görüntüleyebileceği anlamına gelir.

`NB` sonra kendisine iletilen `demo1,demo2` parametresi gelir.

Not : ** `demo1,demo2` `,` önce ve sonra ** boşluk olmamalıdır.

Yukarıdaki parametrelere karşılık gelen dizin indeks dosyası:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Tek Proje Birden Fazla Dosya

Yalnızca bir projeniz varsa, aşağıdaki gibi yapılandırabilirsiniz.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Birden fazla dosya içeren tek proje, `url` kök yol `/` olarak yapılandırılmasını desteklemez
> __conf.yml → nav:__ Hiçbir kök yolu yapılandırılmamışsa, web sitesinin ana sayfasına erişildiğinde, `nav:` yapılandırması altındaki ilk URL'ye otomatik olarak yeniden yazılacaktır.
> Bu tasarım, proje belgelerini, blogları ve diğer içerikleri dizinler aracılığıyla daha iyi ayırt etmeyi amaçlamaktadır.
> Ana sayfa olarak tek bir dosya ve tek bir sayfa kullanılması tavsiye edilir.

> [!TIP]
> `url` yazılmazsa `url` varsayılan olarak `i18n` değerini alır. Bu kural diğer şablonlar için de geçerlidir.

#### TOC Içindekiler Dizini

Yapılandırmada şablon `use: Doc` etkinse, lütfen eklenti `i18n.addon/toc` `.i18n/conf.yml` arada etkinleştirin. Yapılandırma aşağıdaki gibidir :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` bu eklentiyi otomatik olarak yükleyip çalıştıracak, `TOC` dizin indeks dosyasını okuyacak ve `json` dizin taslağını oluşturacaktır.

Birden fazla dosya içeren tek bir projeyse, kök dizin `TOC` kaynak dil dizininde `url:` karşılık gelen dizindir. Örneğin, kaynak dil Çince ise: `url: flashduty` karşılık gelen dosya `zh/flashduty/TOC` .

Birden fazla proje ve birden fazla dosya varsa, `url:` yapılandırmasına gerek yoktur. `TOC` kök dizini, `i18n` değerine karşılık gelen dizindir.

##### Detaylı Içerik Açıklaması

`en/blog/TOC` aşağıdaki gibidir :

```
README.md

news/README.md
  news/begin.md
```

##### Düzeyleri Belirtmek Için Girinti Kullanın

Yukarıdaki `en/blog/TOC` ilk satırındaki `README.md` , aşağıdaki resimde proje adı olan `i18n.site` karşılık gelmektedir.

Sonraki iki satır aşağıdaki ekran görüntüsünde gösterildiği gibidir.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` karşılık gelir,
`news/begin.md` `Our Product is Online !` karşılık gelir

`TOC` dosyaları, anahattın hiyerarşik ilişkisini belirtmek, çok düzeyli girintiyi desteklemek ve `# ` ile başlayan satır yorumlarını desteklemek için girintilidir.

##### Ebeveyn Düzeyi Içeriği Değil Yalnızca Başlığı Yazar.

Birden fazla girinti düzeyi olduğunda, üst düzey içeriği değil yalnızca başlığı yazar. Aksi takdirde tipografi bozulur.

##### README.md Projesi

İçerik `README.md` gibi `en/demo2/README.md` maddesine yazılabilir.

Bu dosyanın içeriğinin bir içindekiler tablosu taslağı göstermediğini unutmayın, bu nedenle uzunluğun sınırlandırılması ve kısa bir giriş yazılması önerilir.

###### Proje Sloganı

Açılır menünün altında `Deme Two` proje sloganının ve katalog taslağı proje adının `Your Project slogan` olduğunu görebilirsiniz :

![](https://p.3ti.site/1721276842.avif)

Bu, `en/demo2/README.md` ilk satırına karşılık gelir :

```
# Demo Two : Your Project slogan
```

Proje `README.md` birinci düzey başlığının ilk kolonu `:` sonraki içerik proje sloganı olarak kabul edilecektir.

Çin, Japonya ve Kore'deki kullanıcılar, tam genişlikte iki nokta üst üste yerine yarım genişlikte iki nokta üst üste `:` kullanmanız gerektiğini lütfen unutmayın.

##### TOC Toplu Olarak Nasıl Taşınır?

Kaynak dilin dizinine `TOC` dosyanın yerleştirilmesi gerekiyor.

Örneğin kaynak dil Çince ise yukarıdaki `TOC` , `zh/blog/TOC` .

Kaynak dil değiştirilirse projedeki belirli bir dilin `TOC` dosyasını toplu olarak başka bir dile taşımanız gerekir.

Aşağıdaki komutlara başvurabilirsiniz:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Lütfen yukarıdaki komuttaki `en/` ve `zh/` dil kodunuza göre değiştirin.

### Yapılandırma Yolu Olmadan Varsayılan Yükleme

Erişilen belirli bir yol için, yol öneki `nav:` yapılandırılmamışsa, yola karşılık gelen `MarkDown` dosyası varsayılan olarak yüklenecek ve `Md` şablonu kullanılarak oluşturulacaktır.

Örneğin, `/test` erişilirse ve `nav:` , bu yolun öneki olmadan yapılandırılmışsa ve mevcut tarama dili İngilizce ise (kod `en` ), varsayılan olarak `/en/test.md` yüklenecek ve şablon `Md` kullanılarak oluşturulacaktır.

Bu dosya `/en/test.md` yoksa, varsayılan `404` sayfa görüntülenecektir.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">
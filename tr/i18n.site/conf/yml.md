# .i18n/conf.yml

`i18n.site` Yapılandırma dosyası `.i18n/conf.yml` .

[`i18`](/i18) öğesinin `ignore:` ve `i18n:` ayarları dışında, yapılandırma dosyası aşağıdaki gibidir:

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
```

Bunlar arasında `upload` 'nin `ext:` yapılandırma öğesi, yayınlanırken yalnızca `.md` ın yükleneceği anlamına gelir.

## Üst Gezinme Gezintisi

`nav:` Ana sayfanın üst kısmındaki gezinme menüsüne karşılık gelen yapılandırma seçenekleri.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Bunların arasında `i18n: home` `en/i18n.yml`中`home: Home` a karşılık gelir.

`en/i18n.yml` gibi `zh/i18n.yml` çok dile çevrilecek.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Çeviri tamamlandıktan sonra çevirideki `yml` değerini değiştirebilirsiniz ancak çeviri `yml` eklemeyin veya silmeyin.

### `use: Toc` , Tek Dosya Şablonu (Anahatlı)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` , tek bir `Markdown` şablonu oluşturan `Toc` oluşturmanın kullanılması anlamına gelir.

`TOC` `Table of Contents` kelimesinin kısaltmasıdır. Bu şablon oluşturulduğunda, bu `Markdown` dosyasının ana hatları kenar çubuğunda görüntülenecektir.

`url:` dosya yolunu temsil eder `Markdown` ( `/` kök dizine karşılık gelir `/README.md` , bu dosya adı bir büyük harf öneki ve bir küçük harf son eki gerektirir).

### `use: Md` , Tek Dosya Şablonu (Anahat Yok)

`Md` Şablon `Toc` ile aynıdır, her ikisi de tek bir `Markdown` dosyasını oluşturmak için kullanılır. Ancak `Md` şablon kenar çubuğunda ana hatları göstermiyor.

Yukarıdaki yapılandırmada `use: Toc` dosyasını `use: Md` olarak değiştirebilir, `i18n.site` dosyasını tekrar `md` dizininde çalıştırabilir ve ardından ana sayfadaki değişiklikleri gözlemlemek için geliştirme önizleme URL'sini ziyaret edebilirsiniz.

### Yapılandırma Yolu Olmadan Varsayılan Yükleme

Erişilen belirli bir yolun yol öneki `nav:` yola karşılık gelen `MarkDown` dosyası varsayılan olarak yüklenecek ve `Md` şablonu kullanılarak işlenecektir.

Örneğin, `/test` adresini ziyaret ederseniz ve `nav:` bu yol olmadan yapılandırılmışsa ve sayfa dili İngilizce ise (kod `en` ), şablon varsayılan olarak yüklenecek `/en/test.md` ve kullanılarak oluşturulacaktır `Md` .

Bu dosya mevcut `/en/test.md` , varsayılan `404` sayfa görüntülenecektir.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Çoklu Dosya Şablonu

Yapılandırma dosyasında:

```
  - i18n: blog
    use: Doc
```

Şablon oluşturma için `Doc` kullanıldığını gösterir.

`Doc` Şablon, tek veya birden fazla proje için belge ana hatları oluşturmak üzere birden fazla `MarkDown` entegre edilmesini destekler.

#### Tek Proje (Birden Fazla Dosya)

`blog` yukarıdaki tek proje modudur `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Boş Olduğunda Varsayılan Olarak i18n Değerine Ayarlanır

`url` yazmazsanız, `i18n` değerine `url` . Bu kural diğer şablonlar için de geçerli olur.

Yukarıdaki yazma yöntemi `url: blog` ye sahip olmaya eşdeğerdir ve karşılık gelen dosya `en/blog/TOC` 'dır.

#### Birden Fazla Proje

`.i18n/conf.yml` `i18n:doc` deki konfigürasyon çoklu proje modudur.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Burada `menu: NB demo1,demo2` açılır menüyü oluşturmak için `NB` kullanılması anlamına gelir.

`NB` , `Name Breif` kelimesinin kısaltmasıdır ve açılır menünün projenin adını ve sloganını görüntüleyebileceğini belirtir.

`NB` ardından `demo1,demo2` parametresi kendisine aktarılır.
: ** `,` daki virgülden önce ve sonra ** boşluk olmaması gerektiğini unutmayın `demo1,demo2`

Yukarıdaki parametreler için karşılık gelen dizin indeks dosyası:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Içindekiler Dizini

`i18n.site` Dizin taslağının `json` oluşturmak için dizin indeks dosyasını `doc` şablon konfigürasyonuna karşılık gelen `TOC` okumak için demo deposunda `js` `.i18n/hook/after.tran/TOC.js` çalıştıracaktır.

`doc` şablonunu kullanıyorsanız bu eklentiye sahip olmanız gerekir.

`i18n.site` projesini boş bir klasörden başlatırsanız, demo projedeki `.i18n` dizininize kopyalamayı unutmayın.

`Doc` Şablon, oluşturulan `json` dosyasına göre içindekiler tablosunun ana hatlarını oluşturacaktır.

##### Detaylı Içerik Açıklaması

İçerik aşağıdaki : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Düzeyleri Belirtmek Için Girinti Kullanın

Yukarıda `en/blog/TOC` İlk satırdaki `README.md` , aşağıdaki resimde proje adı olan `i18n.site` a karşılık gelir.

Sonraki iki satır aşağıdaki ekran görüntüsünde gösterildiği gibidir.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` ye karşılık gelir,
`news/begin.md` `Our Product is Online !` ye karşılık gelir

`TOC` Dosya, anahattın hiyerarşik ilişkisini gösterecek şekilde girintilidir ve çok düzeyli girintiyi destekler.

##### Ebeveyn Düzeyi Içeriği Değil Yalnızca Başlığı Yazar.

Birden fazla girinti düzeyi olduğunda, üst düzey içeriği değil yalnızca başlığı yazar. Aksi takdirde tipografi bozulur.

##### README.md Projesi 

`README.md` örneğin, projenin içeriğini `en/demo2/README.md` yazabilirsiniz.

Bu dosyanın içeriğinin bir içindekiler tablosu taslağı göstermediğini unutmayın, bu nedenle uzunluğun sınırlandırılması ve kısa bir giriş yazılması önerilir.

###### Proje Sloganı

Gördüğünüz gibi `Deme Two` Açılır menünün ve katalog taslağının proje adının altında proje sloganı : var `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ilk satıra karşılık gelir `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proje `README.md` Birinci düzey başlıkta ilk iki nokta üst üste `:` den sonraki içerik proje sloganı olarak kabul edilecektir.

Çin, Japonya ve Kore'deki kullanıcılar, tam genişlikte iki nokta üst üste yerine yarım genişlikte iki nokta üst üste kullanmanız gerektiğini lütfen unutmayın `:`

##### TOC Toplu Olarak Nasıl Taşınır?

`TOC` Dosyanın kaynak dilin dizinine yerleştirilmesi gerekiyor.

Örneğin kaynak dil Çince ise `zh/blog/TOC` `TOC` olur.

Kaynak dil değiştirilirse, projedeki belirli bir dildeki `TOC` toplu olarak başka bir dile taşımanız gerekir.

Aşağıdaki komutlara başvurabilirsiniz:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Lütfen yukarıdaki komuttaki `en/` ve `zh/` işaretlerini dil kodunuza göre değiştirin.



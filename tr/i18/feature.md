# Ürün Özellikleri

`i18` çeviri için bir komut satırı aracıdır Markdown & Yaml

## Markdown Formatını Mükemmel Şekilde Koruyabilir

Formata zarar vermeden Markdown tablolarının çevirisini destekler; matematiksel formüllerdeki veya bağlantılardaki sözcükleri çevirmez.

Karışık HTML HTML Markdown çevirisini ve `MarkDown` içindeki `<pre>` `<code>` çevrilmesini destekler

## Matematiksel Formülleri Tanıyabilir Ve Çeviriyi Atlayabilir

Matematiksel formüller tanınır ve çeviri atlanır.

Matematiksel formüllerin nasıl yazılacağı konusunda lütfen [" Github Matematiksel İfadelerin Yazılması Hakkında"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) bölümüne bakınız.

## Kod Parçacıklarındaki Yorumları Çevirebilme Yeteneği

Satır içi kod ve kod parçacıkları çevrilmez ancak koddaki yorumlar çevrilebilir.

Çeviri yorumlarının ` ``` ` : ` ```rust ` dilden sonra belirtilmesi gerekir.

Şu anda `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` , `python` , `bash` , `php` [ve diğer dillerdeki](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) yorumların çevirisini desteklemektedir.

İhtiyacınız olan programlama dili mevcut değilse lütfen [bizimle iletişime geçin](https://groups.google.com/g/i18n-site) .

## Komut Satırı Dostu

Çeviri belgelerini yönetmek için pek çok [ağır araç](https://www.capterra.com/translation-management-software) mevcuttur.

`git` , `vim` , `vscode` programlarına aşina olan programcılar için, belgeleri düzenlemek ve sürümleri yönetmek için bu araçları kullanmak şüphesiz öğrenme maliyetini artıracaktır.

`KISS` ( `Keep It Simple, Stupid` ) Bu ilkeye inananlar arasında kurumsal düzeydeki çözümler hantal, verimsiz ve kullanımı zor olmakla eş anlamlıdır.

Çeviri, komutlar girilerek ve tek tıkla tamamlanarak yapılmalı. Karmaşık ortam bağımlılıkları olmamalıdır.

Gerekmedikçe varlık eklemeyin.

## Değişiklik Yok, Çeviri Yok

Ayrıca [translate-shell](https://github.com/soimort/translate-shell) gibi bazı komut satırı çeviri araçları da vardır.

Ancak dosya değişikliklerinin tanımlanmasını desteklemezler ve yalnızca değiştirilen dosyaları çevirerek maliyetleri düşürür ve verimliliği artırırlar.

## Çeviri Düzenlenebilir Ve Makine Çevirisi Mevcut Değişikliklerin Üzerine Yazılmaz.

Çeviri düzenlenebilir.

Orijinal metni değiştirin ve makineyle tekrar çevirin; çeviride yapılan manuel değişikliklerin üzerine yazılmayacaktır (orijinal metnin bu paragrafı değiştirilmemişse).

## Xindaya'nın Yüksek Kaliteli Çevirisi

Çevirilerin doğru, sorunsuz ve zarif olmasını sağlamak için geleneksel makine çevirisi modellerinin teknik avantajlarını ve büyük dil modellerini birleştiren yeni nesil bir çeviri teknolojisi geliştirdik.

Kör testler, çeviri kalitemizin benzer hizmetlere kıyasla önemli ölçüde daha iyi olduğunu göstermektedir.

Aynı kaliteyi elde etmek için, Google Çeviri ve `ChatGPT` nin gerektirdiği manuel düzenleme miktarı bizimkinin sırasıyla `2.67` katı ve `3.15` katıdır.

## <a rel=id href="#price" id="price"></a> Son derece rekabetçi fiyatlandırma

|                                                                                   | ABD Doları/milyon kelime |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Not: Faturalandırılabilir karakter sayısı = kaynak dosyadaki [unicode sayısı](https://en.wikipedia.org/wiki/Unicode) × çevirideki dil sayısı

## Çeviriyi Destekleyin `YAML`

Araç, sözlük anahtarlarını değil, yalnızca `YAML` içindeki sözlük değerlerini çevirir.

`YAML` Translation'ı temel alarak çeşitli programlama dilleri için kolayca uluslararası çözümler oluşturabilirsiniz.

## Çeviriyi Destekleyin `HOGO` Başlık Yapılandırması

[HOGO](https://github.com/gohugoio/hugo) tipi statik blogun başlık yapılandırmasını destekler; yalnızca `title` , `summary` ve `description` alanları çevrilir.

## Değişken Adlarını Çevirmeyin

`Markdown` E-posta şablonu olarak kullanılır, `YAML` dil dosyası yapılandırması olarak kullanılır, değişken parametreler olacaktır (örneğin: yeniden yükleme `${amount}` alındı).

`${varname}` Bu tür değişken adları İngilizce çeviri olarak kabul edilmeyecektir.

## Çin, Japonya Ve Kore Için Çeviri Optimizasyonu

### İngilizceye Çevrildiğinde Başlığın Ilk Harfi Otomatik Olarak Büyük Yazılır.

Çin, Japonya ve Kore'de büyük veya küçük harf yoktur, ancak İngilizce başlıklarda genellikle ilk harf büyük yazılır.

`i18` `MarkDown` içindeki başlıkları tanıyabilir ve büyük/küçük harfe duyarlı bir dile çeviri yaparken ilk harfi otomatik olarak büyük harfe çevirir.

Örneğin `为阅读体验而优化` `Optimized for Reading Experience` çevrilecektir.

### Çince, Japonca, Korece Ve Çince Dillerindeki İngilizce Terimler Çevrilmiyor

Çin, Japonya ve Kore'den gelen belgeler genellikle birçok İngilizce terim içerir.

Çince, Japonca ve Kore dillerinin makine çevirisi İngilizce dışında bir dil haline gelmiştir ve aşağıdaki Çince cümle gibi terimler sıklıkla birlikte çevrilmektedir:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google veya DeepL kullanıyorsanız, her ikisi de orijinal kalması gereken İngilizce terimleri yanlış tercüme eder (örnek olarak Japonca ve Fransızca'yı alın).

### Google Çeviri

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` çevrildi :

<img alt="" src="//p.3ti.site/1720199391.avif">

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` çevrildi :

`Falcon` `faucon` olarak çevrilir ve `Llama` `lama` olarak çevrilir. Özel isimler olarak çevrilmemeleri gerekir.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Çevirisi

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` çevrildi :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Yukarıdakilerin Fransızcaya çevirisi (ayrıca özel adların yeniden yazılması ve tek sayıların eklenmesi `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Çevirisi

`i18` 'nin çevirisi Çince, Japonca ve Korece belgelerdeki İngilizce terimleri tanıyacak ve terimleri olduğu gibi bırakacaktır.

Örneğin yukarıdaki Japonca çeviri sonucu şöyledir:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Fransızca tercümesi şöyledir:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Yalnızca İngilizce kelime ile Çince, Japonca ve Korece metin arasında boşluk olduğunda veya İngilizce uzunluğu 1'den büyük olduğunda kelime terim olarak kabul edilecektir.

Örneğin: `C罗` `Cristiano Ronaldo` olarak çevrilecektir.

## Çok Dilli Web Sitesi `i18n.site`

`i18` Çok dilli web sitesi oluşturmak için komut satırı aracına entegre edilmiştir [`i18n.site`](/i18n.site) .

Ayrıntılar için [`i18n.site`](/i18n.site) belgelerine bakın.

## Kod Açık Kaynak

İstemci tamamen açık kaynaktır ve kodun sunucu tarafı açık kaynaktır 90 [Kaynak kodunu görüntülemek için buraya tıklayın](/i18n.site/src) .

Açık kaynak kod geliştirme ve tercüme edilmiş metinlerin redaksiyon çalışmalarına katılacak gönüllüler arıyoruz.

İlgileniyorsanız lütfen [→ Profilinizi doldurmak için buraya tıklayın](https://ggl.link/i18n) ve ardından iletişim için [e-posta listesine](https://groups.google.com/u/2/g/i18n-site) katılın.

## Iletişimi Koparmamak

<button onclick="mailsub()">Ürün güncellemelerine abone olmak</button> ve <button onclick="webpush()">tarayıcı push'u etkinleştirmek</button> için lütfen bu e-postayı tıklayın. Ürün güncellemeleri yapıldığında sizi bilgilendireceğiz.

Ayrıca sosyal hesaplarımızı takip etmeye / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)

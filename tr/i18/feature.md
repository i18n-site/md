# Ürün Özellikleri

`i18` çeviri için komut satırı aracıdır Markdown & Yaml

## Markdown Formatını Mükemmel Şekilde Koruyabilir

Formata zarar vermeden Markdown tablolarının çevirisini destekler; matematiksel formüllerdeki veya bağlantılardaki sözcükleri çevirmez.

Karışık HTML Markdown çevirisini destekler, HTML `MarkDown` gömülü `<pre>` ve `<code>` etiketlerindeki içerik çevrilmez

## Matematiksel Formülleri Tanıyabilir Ve Çeviriyi Atlayabilir

Matematiksel formüller tanınır ve çeviri atlanır.

Matematiksel formüllerin nasıl yazılacağı konusunda lütfen [" Github Matematiksel İfadelerin Yazılması Hakkında"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) bölümüne bakınız.

## Kod Parçacıklarındaki Yorumları Çevirebilme Yeteneği

Satır içi kod ve kod parçacıkları çevrilmez ancak koddaki yorumlar çevrilebilir.

Çeviri yorumlarının ` ``` ` sonra dili belirtmesi gerekir; örneğin : ` ```rust ` .

Şu anda `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [ve diğer dillerde](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) ek açıklama çevirisini desteklemektedir.

Koddaki İngilizce olmayan tüm karakterleri çevirmek istiyorsanız kod bölümünü ` ```i18n ` ile işaretleyin.

İhtiyacınız olan programlama dili mevcut değilse lütfen [bizimle iletişime geçin](https://groups.google.com/g/i18n-site) .

## Komut Satırı Dostu

Çeviri belgelerini yönetmek için pek çok [ağır araç](https://www.capterra.com/translation-management-software) mevcuttur.

`git` , `vim` ve `vscode` aşina olan programcılar için belgeleri düzenlemek ve sürümleri yönetmek için bu araçları kullanmak şüphesiz öğrenme maliyetini artıracaktır.

`KISS` ( `Keep It Simple, Stupid` ) İlke inananlar arasında, kurumsal düzeydeki çözümler hantal, verimsiz ve kullanımı zor olmakla eş anlamlıdır.

Çeviri, komutlar girilerek ve tek tıkla tamamlanarak yapılmalı. Karmaşık ortam bağımlılıkları olmamalıdır.

Gerekmedikçe varlık eklemeyin.

## Değişiklik Yok, Çeviri Yok

Ayrıca [translate-shell](https://github.com/soimort/translate-shell) gibi bazı komut satırı çeviri araçları da vardır.

Ancak dosya değişikliklerinin tanımlanmasını desteklemezler ve yalnızca değiştirilen dosyaları çevirerek maliyetleri düşürür ve verimliliği artırırlar.

## Çeviri Düzenlenebilir Ve Makine Çevirisi Mevcut Değişikliklerin Üzerine Yazılmaz.

Çeviri düzenlenebilir.

Orijinal metni değiştirin ve makineyle tekrar çevirin; çeviride yapılan manuel değişikliklerin üzerine yazılmayacaktır (orijinal metnin bu paragrafı değiştirilmemişse).

## En Iyi Kalitede Makine Çevirisi

Çevirilerin doğru, sorunsuz ve zarif olmasını sağlamak için geleneksel makine çevirisi modellerinin teknik avantajlarını ve büyük dil modellerini birleştiren yeni nesil bir çeviri teknolojisi geliştirdik.

Kör testler, çeviri kalitemizin benzer hizmetlerle karşılaştırıldığında önemli ölçüde daha iyi olduğunu göstermektedir.

Aynı kaliteyi elde etmek için Google Translate ve `ChatGPT` gerektirdiği manuel düzenleme miktarı sırasıyla bizimkinin `2.67` katı ve `3.15` katıdır.

## <a rel=id href="#price" id="price"></a> Son derece rekabetçi fiyatlandırma

|                                                                                   | ABD Doları/milyon kelime |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ github Kütüphanesini yetkilendirip otomatik olarak takip i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ve **bonus $50 almak** için buraya tıklayın.

Not: Faturalandırılabilir karakter sayısı = kaynak dosyadaki [unicode sayısı](https://en.wikipedia.org/wiki/Unicode) × çevirideki dil sayısı

## Destek Çevirisi `YAML`

Araç, sözlük anahtarlarını değil, yalnızca `YAML` içindeki sözlük değerlerini çevirir.

`YAML` çeviriye dayanarak, çeşitli programlama dilleri için kolayca uluslararası çözümler oluşturabilirsiniz.

## Çeviri `HOGO` Başlık Yapılandırmasını Destekleyin

[HOGO](https://github.com/gohugoio/hugo) tipi statik blogun başlık yapılandırmasını destekler ve yalnızca `title` , `summary` , `brief` ve `description` alanlarını çevirir.

## Değişken Adlarını Çevirmeyin

`Markdown` bir e-posta şablonu olarak kullanılır, `YAML` bir dil dosyası yapılandırması olarak kullanılır ve değişken parametreler olacaktır (örneğin: yeniden yükleme `${amount}` alındı).

`${varname}` gibi değişken adları İngilizce çeviri olarak kabul edilmeyecektir.

## Çin, Japonya Ve Kore Için Çeviri Optimizasyonu

### İngilizceye Çevrildiğinde Başlığın Ilk Harfi Otomatik Olarak Büyük Yazılır.

Çin, Japonya ve Kore'de büyük ve küçük harfler yoktur, ancak İngilizce başlıklarda kural olarak ilk harf büyük harfle yazılır.

`i18` , `MarkDown` başlığı tanıyabilir ve büyük/küçük harfe duyarlı bir dile çevirirken ilk harfi otomatik olarak büyük harfe çevirir.

Örneğin `为阅读体验而优化` , `Optimized for Reading Experience` çevrilecektir.

### Çince, Japonca, Korece Ve Çince Dillerindeki İngilizce Terimler Çevrilmiyor

Çin, Japonya ve Kore'den gelen belgeler genellikle birçok İngilizce terim içerir.

Çince, Japonca ve Kore dillerinin makine çevirisi İngilizce dışında bir dil haline gelmiştir ve aşağıdaki Çince cümle gibi terimler sıklıkla birlikte çevrilmektedir:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google veya DeepL kullanıyorsanız, her ikisi de orijinal kalması gereken İngilizce terimleri yanlış tercüme eder (örnek olarak Japonca ve Fransızca'yı alın).

### Google Çeviri

Japoncaya `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Fransızcaya `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` , `faucon` ve `Llama` , `lama` olarak çevrilir. Özel isimler olduğundan tercüme edilmemelidirler.

![](//p.3ti.site/1720199451.avif)

### DeepL Çevirisi

Japoncaya `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Yukarıdakilerin Fransızcaya çevirisi (ayrıca özel adların yeniden yazılması ve tek sayının `... ` eklenmesi):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Çevirisi

`i18` çevirisi Çince, Japonca ve Korece belgelerdeki İngilizce terimleri tanıyacak ve terimleri olduğu gibi bırakacaktır.

Örneğin yukarıdaki Japonca çeviri sonucu şöyledir:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Fransızca tercümesi şöyledir:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Yalnızca İngilizce kelime ile Çince, Japonca ve Korece metin arasında boşluk olduğunda veya İngilizce uzunluğu 1'den büyük olduğunda kelime terim olarak kabul edilecektir.

Örneğin: `C罗` `Cristiano Ronaldo` olarak çevrilecektir.

## Bir Web Sitesi Oluşturmak Için `i18n.site` Fazla Dille Birleştirilebilir

`i18` çok dilli web sitesi oluşturma komut satırı aracına [`i18n.site`](/i18n.site) entegre edilmiştir.

Ayrıntılar için [`i18n.site`](/i18n.site) belgelerine bakın.

## Kod Açık Kaynak

İstemci tamamen açık kaynaktır ve kodun sunucu tarafı açık kaynaktır 90 [Kaynak kodunu görüntülemek için buraya tıklayın](/i18n.site/c/src) .

Açık kaynak kodunun geliştirilmesine ve çevrilmiş metinlerin redaksiyonuna katılacak gönüllüler arıyoruz.

İlgileniyorsanız lütfen [→ Profilinizi doldurmak için buraya tıklayın](https://ggl.link/i18n) ve ardından iletişim için [e-posta listesine](https://groups.google.com/u/2/g/i18n-site) katılın.

## Iletişimi Koparmamak

<button onclick="mailsub()">Ürün güncellemelerine abone olmak</button> ve <button onclick="webpush()">tarayıcı push'u etkinleştirmek</button> için lütfen bu e-postayı tıklayın. Ürün güncellemeleri yapıldığında sizi bilgilendireceğiz.

/ sosyal hesaplarımızı takip etmeye hoş [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)
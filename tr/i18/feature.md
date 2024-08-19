# Ürün Özellikleri

`i18`, Markdown ve Yaml için çeviri komut satırı aracıdır.

## Markdown formatını mükemmel şekilde korur

Markdown tablolarının formatını bozmadan çevirisini destekler; matematiksel formüller ve bağlantılardaki kelimeleri çevirmez.

Karışık HTML Markdown çevirisini destekler, `MarkDown` içinde gömülü HTML'in `<pre>` ve `<code>` etiketlerindeki içerik çevrilmez

## Matematiksel formülleri tanıyabilir ve çeviriyi atlayabilir

Matematiksel formüller tanınır ve çeviri atlanır.

Matematiksel formüllerin yazımı hakkında bilgi almak için [Github'un Matematiksel İfadeler Hakkında Kılavuzuna](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) bakabilirsiniz.

## Kod parçacıklarındaki yorumları çevirebilir

Satır içi kod ve kod parçacıkları çevrilmez, ancak kod içindeki yorumlar çevrilebilir.

Yorumları çevirirken ` ``` ` sonrası dil belirtimi gerekir, örneğin: ` ```rust ` .

Şu anda `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [ve diğer diller](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) için yorum çevirisini destekler.

Gerekli olan bir programlama dili desteklenmiyorsa, lütfen [bizimle iletişime geçin](https://groups.google.com/g/i18n-site).

## Komut satırı dostu

Belirli çeviri belgelerini yönetmek için birçok [ağır araç](https://www.capterra.com/translation-management-software) mevcuttur.

`git`, `vim`, `vscode` gibi araçlara aşina olan programcılar için belgeleri düzenlemek ve sürümleri yönetmek öğrenme maliyetini artırabilir.

`KISS` (`Keep It Simple, Stupid`) ilkesine inananlar için, kurumsal çözümler genellikle hantal, verimsiz ve kullanımı zor olarak bilinir.

Çeviri, komutları girerek ve tek tıkla tamamlanmalıdır; karmaşık ortam bağımlılıkları olmamalıdır.

Gerekmedikçe yeni varlıklar eklenmemelidir.

## Değişiklik yoksa çeviri de olmamalıdır

Diğer komut satırı çeviri araçları da mevcuttur, örneğin [translate-shell](https://github.com/soimort/translate-shell).

Bu araçlar dosya değişikliklerini tanımaz ve yalnızca değiştirilen dosyaları çevirerek maliyetleri düşürür ve verimliliği artırır.

## Çevrilen metin düzenlenebilir ve mevcut manuel değişiklikler üzerine yazılmaz

Çeviri düzenlenebilir.

Özgün metni değiştirirseniz ve tekrar makine çevirisi yaparsanız, metinde yapılmış manuel değişiklikler (örzgün metin paragrafı değiştirilmemişse) üzerine yazılmaz.

## En İyi Kalitede Makine Çevirisi

Geleneksel makine çevirisi modellerinin ve büyük dil modellerinin teknik avantajlarını birleştiren yeni nesil bir çeviri teknolojisi geliştirdik, çevirilerinizi doğru, akıcı ve zarif yapmak için.

Kör testler, çeviri kalitemizin benzer hizmetlere kıyasla önemli ölçüde daha iyi olduğunu göstermiştir.

Aynı kaliteyi elde etmek için Google Translate ve `ChatGPT`'nin gerektirdiği manuel düzenleme miktarı, bizimkinin `2.67` ve `3.15` katıdır.

## <a rel=id href="#price" id="price"></a> Çok rekabetçi fiyatlandırma

|                                                                                   | Dolar / 100.000 kelime |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[i18n.site 'in github yetkilendirmek ve otomatik olarak takip etmek](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ve **bonus $50 almak** için burayı tıklayın.

Not: Faturalandırılabilir karakter sayısı = [kaynak dosyadaki unicode karakter sayısı](https://en.wikipedia.org/wiki/Unicode) × çevirideki dil sayısı

## Destek Çevirisi `YAML`

Aracın çevirisi, sözlük anahtarlarını değil, sadece `YAML` içindeki sözlük değerlerini içerir.

`YAML` çeviriye dayanarak, çeşitli programlama dilleri için kolayca uluslararası çözümler oluşturabilirsiniz.

## `HOGO` başlık yapılandırmasını çeviriye destekler

[Hugo](https://github.com/gohugoio/hugo) tipi statik blogların başlık yapılandırmasını destekler, yalnızca `title`, `summary` ve `description` alanlarını çevirir.

## Değişken isimlerini çevirmez

`Markdown` bir e-posta şablonu olarak kullanılırken, `YAML` bir dil dosyası yapılandırması olarak kullanılır ve değişken parametreler bulunacaktır (örneğin: yükleme `${amount}` başarılı).

`${varname}` gibi değişken isimleri İngilizce olarak çevrilmez.

## Çin, Japonya ve Kore dillerine çeviride optimize

### İngilizceye çevirirken başlıkların ilk harfi otomatik olarak büyük yazılır

Çin, Japonya ve Kore'de büyük ve küçük harf farkı yoktur; ancak İngilizce başlıklarda genellikle ilk harfin büyük yazılması gereklidir.

`i18` `MarkDown` başlığı tanıyabilir ve büyük/küçük harfe duyarlı bir dile çevirirken ilk harfi otomatik olarak büyük harfe çevirir.

Örneğin, `为阅读体验而优化` `Optimized for Reading Experience` olarak çevrilebilir.

### Çin, Japonya ve Kore dillerindeki İngilizce terimler çevrilmez

Bu dillerdeki belgeler genellikle birçok İngilizce terim içerir.

Çin, Japonya ve Kore dillerinin makine çevirisi İngilizce dışında bir dile çevrildiğinde, terimler genellikle birlikte çevrilir:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google veya DeepL kullanıldığında, her ikisi de orijinal kalması gereken İngilizce terimleri yanlış çevirir (Japonca ve Fransızca örnek olarak alın).

### Google Çevirisi:

Japoncaya `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`:

![](//p.3ti.site/1720199391.avif)

Fransızcaya `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`:

`Falcon` `faucon` olarak, `Llama` `lama` olarak çevrildi. Özel isimler olduğundan çevrilmemelidirler.

![](//p.3ti.site/1720199451.avif)

### DeepL Çevirisi:

Japoncaya `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`:

![](//p.3ti.site/1720199550.avif)

DeepL'nin Fransızca çevirisi (özel isimlerin yeniden yazılması ve garip bir `...` eklenmesi):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Çevirisi:

`i18` çevirisi Çin, Japonca ve Korece belgelerdeki İngilizce terimleri tanıyabilir ve terimleri olduğu gibi bırakabilir.

Örneğin, yukarıdaki Japonca çeviri sonucu:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Fransızca çeviri sonucu:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Yalnızca İngilizce kelime ile Çin, Japonca ve Korece metin arasında boşluk olduğunda veya İngilizce kelime uzunluğu 1'den büyük olduğunda kelime terim olarak kabul edilir.

Örneğin: `C罗` `Cristiano Ronaldo` olarak çevrilebilir.

## Web sitesi oluşturmak için `i18n.site` ile çok dilli entegrasyon sağlanabilir

`i18`, çok dilli web sitesi oluşturma komut satırı aracı [`i18n.site`](/i18n.site) ile entegre edilmiştir.

Ayrıntılar için [`i18n.site`](/i18n.site) belgelerine bakabilirsiniz.

## Kod açık kaynak

İstemci tamamen açık kaynaktır ve sunucu tarafı kodunun %90'ı açık kaynaktır; [kaynak kodunu görüntülemek için buraya tıklayın](/i18n.site/src).

Açık kaynak kod geliştirme ve çeviri metinlerinin gözden geçirilmesi için gönüllüler arıyoruz.

İlgileniyorsanız, [→ profilinizi doldurmak için buraya tıklayın](https://ggl.link/i18n) ve ardından [e-posta listemize katılın](https://groups.google.com/u/2/g/i18n-site).

## Iletişimi Kesmeyin

<button onclick="mailsub()">Ürün güncellemelerine abone olun</button> ve <button onclick="webpush()">tarayıcı bildirimlerini etkinleştirin</button>, güncellemeleri güncellediğimizde sizi bilgilendireceğiz.

Ayrıca sosyal hesaplarımızı takip edin: [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).
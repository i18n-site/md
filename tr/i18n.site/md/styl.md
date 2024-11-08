# Stil Listesi

Aşağıdaki stillerde `MarkDown` nasıl yazıldığını görmek için [bu sayfanın kaynak dosyasına göz atmak için burayı tıklayın](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) .

## Katlanmış Blok

|+| MarkDown nedir?

    MarkDown, kullanıcıların okunması ve yazılması kolay, düz metin biçiminde biçimlendirilmiş belgeler oluşturmasına olanak tanıyan hafif bir biçimlendirme dilidir.

    Genellikle dokümantasyon, blog makaleleri, e-kitaplar, forum gönderileri vb. yazmak için kullanılır.

    Aşağıdaki avantajlara sahiptir:

    1. Öğrenmesi kolay
    1. Son derece okunabilir
    1. Sürüm kontrolü dostu

       `MarkDown` belge düz metin biçiminde olduğundan, programcılar bunları kolayca sürüm kontrol sistemlerine ( `git` gibi) dahil edebilir.

       Bu, özellikle ekip geliştirmede değişiklikleri izlemeyi ve işbirliği yapmayı çok daha basit hale getirir.

|-| I18N nedir?

    "I18N", "Uluslararasılaşma"nın kısaltmasıdır.

    "Uluslararasılaştırma" sözcüğünde "I" ile "N" arasında 18 harf bulunduğundan gösterimi basitleştirmek amacıyla "I18N" kullanılmıştır.

    Meslekten olmayanların ifadesiyle bu, birden fazla dili desteklemek anlamına gelir.


Katlama bloğu `i18n.site` `MarkDown` kadar genişletilmiş bir sözdizimidir ve aşağıdaki gibi yazılmıştır :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

' ile|+| `或`|-| ' ile başlayan satır bir bölme bloğu oluşturacaktır ve bölme bloğunun içeriği aynı girinti düzeyine sahip sonraki satırlardır (paragraflar boş satırlarla ayrılmıştır).

Geçiş'|-| `标记的折叠块默认展开，`|+| `Etiketlenen daraltılmış bloklar varsayılan olarak daraltılır.

## Altı Çizili & Kalın &

Bu __ Alt çizgi __ ,~~ üstü çizili~~ ve **kalın** sunum metni.

Aşağıdaki şekilde yazılmıştır:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` web sitesi oluşturma aracının `MarkDown` ayrıştırıcısı, altı çizili, üstü çizili ve kalın sözdizimini optimize etmiştir. İşaretten önce ve sonra boşluk olmadan etkili olabilir, bu da Çin, Japonya ve Kore gibi dillerde belge yazmayı kolaylaştırır. ayırıcı olarak boşluk kullanmayın.

Genişletilmiş okuma : [Nuggets'ın Markdown sözdizimi ( `**……**` ) neden bazen etkili olmuyor?](//juejin.cn/post/7064565848421171213)

## Alıntı

### Tek Satırlık Alıntı

> Yeteneklerimin işe yaraması benim doğamda var ve tüm param harcandıktan sonra geri döneceğim.
<p style="text-align:right">─ Li Bai</p>

### Çok Satırlı Alıntılar

> Bilim kurgunun bir diğer benzersiz avantajı da kapsamının son derece geniş olmasıdır.
> Milyonlarca kelimelik bir "Savaş ve Barış", bir bölgenin yalnızca birkaç on yıllık tarihini anlatır;
> Asimov'un "Son Yanıt"ı gibi bilim kurgu romanları da, insanlar da dahil olmak üzere tüm evrenin milyarlarca yıllık tarihini sadece birkaç bin kelimeyle canlı bir şekilde anlatıyor.
> Geleneksel edebiyatta böyle bir kapsayıcılık ve cesarete ulaşmak imkansızdır.
<p style="text-align:right">── Liu Cixin</p>

### İpucu `> [!TIP]`

> [!TIP]
> Pasaportunuzun ve vizenizin geçerliliğini kontrol etmeyi unutmayın. Süresi dolan belgeler ülkeye giriş çıkış yapamaz.

Aşağıdaki gibi yazılmıştır

```
> [!TIP]
> YOUR CONTENT
```

### Açıklama `> [!NOTE]`

> [!NOTE]
> Bana bir mesaj gönderirsen ve anında cevap verirsem, bu ne anlama geliyor?
> Bu, cep telefonlarıyla oynamayı gerçekten sevdiğimi gösteriyor.


### Uyarı `> [!WARN]`

> [!WARN]
> Vahşi bir maceraya çıkarken güvende kalmak önemlidir. İşte bazı önemli güvenlik ipuçları:
>
> - **Hava tahminini kontrol edin** : Geçen hafta bir grup dağcı, hava durumunu kontrol etmedikleri için dağın yarısına gelindiğinde fırtınayla karşılaştı ve acilen bölgeyi terk etmek zorunda kaldı.
> - **Gerekli malzemeleri yanınızda bulundurun** : Yeterli yiyecek, su ve ilk yardım malzemelerini getirdiğinizden emin olun.
> - **Araziyi anlayın** : Kaybolmamak için macera alanının arazisini ve rotalarını önceden öğrenin.
> - **Bağlantıda Kalın** : Dış dünyayla bağlantıda kalın ve herkesin güvenli bir şekilde geri dönebilmesini sağlayın.
>
> Unutmayın, güvenlik her zaman önce gelir!

## Yapılacaklar Listesi

- [x] Ürün prototipi ve özellik listesi tasarlayın
- [ ] Teknoloji yığınını ve geliştirme araçlarını belirleyin
- [ ] Ürün geliştirme zaman çizelgelerini ve kilometre taşlarını geliştirin

## Liste

### Sıralı Liste

1. koşma
   1. Haftada üç kez, her seferinde 5 kilometre
   1. Yarı maraton koş
1. spor salonu eğitimi
   1. Haftada iki kez, her seferinde 1 saat
   1. Çekirdek kaslara odaklanın

### Sırasız Liste

* sosyal etkinlikler
  - Sektör değişim toplantılarına katılın
    + Teknoloji paylaşım oturumu
    + Girişimcilik Değişim Toplantısı
  - Arkadaşlarla bir toplantı düzenleyin
    + Açık Barbekü
    + film gecesi

## Çarşaf

| düşünür       | Ana katkılar                           |
|--------------|------------------------------------|
| Konfüçyüs         | Konfüçyüsçülüğün kurucusu |
| Sokrates     | Batı felsefesinin babası  |
| Nietzsche         | Geleneksel ahlak ve dini eleştiren Süpermen felsefesi       |
| Marx       | komünizm |

### Büyük Tablo Ekranı Optimizasyonu

Nispeten büyük tablolar için görüntüleme efektini optimize etmek amacıyla aşağıdaki yöntemler kullanılabilir:

1. Daha küçük yazı tipi kullan

   Örneğin, tabloyu `<div style="font-size:14px">` ve `</div>` sarın.

   `div` etiketinin kendi satırında yer alması ve öncesinde ve sonrasında boş satırlar bırakması gerektiğini unutmayın.
1. Hücredeki daha uzun metin için satırı kaydırmak amacıyla `<br>` ekleyin
1. Bir sütun çok kısa sıkıştırılmışsa genişliği genişletmek için başlığa `<div style="width:100px">xxx</div>` ekleyebilir, ayrıca satır sonu konumunu kontrol etmek için [başlığa `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) ekleyebilirsiniz.

Bir gösteri örneği aşağıdaki gibidir:

<div style="font-size:14px">

| ulus       | <div style="width:70px;margin:auto">düşünür adı</div> | Çağ | Ana ideolojik katkılar                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Çin       | Konfüçyüs                                           | MÖ 551-479   | Konfüçyüsçülüğün kurucusu "iyilikseverlik" ve "adalet" gibi temel kavramları önerdi ve ahlaki ekimi ve sosyal düzeni vurguladı. |
| antik yunan     | Sokrates                                       | MÖ 469-399   | Gerçeği diyalog ve diyalektik yoluyla keşfetmek, "kendini tanımayı" önerir ve rasyonel düşünmeyi vurgular.         |
| Fransa       | Voltaire                                         | 1694-1778       | Aydınlanma'nın temsili figürleri rasyonelliği, özgürlüğü ve eşitliği savundu ve dini batıl inançları ve otoriter yönetimi eleştirdi.   |
| Almanya       | Kant                                           | 1724-1804       | "Saf Aklın Eleştirisi"ni ortaya koyun<br> Pratik aklı vurgulayarak ahlakın, özgürlüğün ve bilginin temellerini araştırır     |

</div>

Yukarıdaki örneğin sözde kodu aşağıdaki gibidir:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kod

### Satır Içi Kod

Programlama dillerinin geniş dünyasında `Rust` , `Python` , `JavaScript` ve `Go` her biri benzersiz bir konuma sahiptir.

### Birden Fazla Kod Satırı

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Paragraf Içinde Satır Sonu

Paragraflardaki satır sonları, satırlar arasına boş satırlar eklenmeden elde edilebilir.
Paragraflardaki satır sonları arasındaki boşluk, paragraflar arasındaki boşluktan daha küçüktür.

Örneğin:

> Harika bir insan olarak yaşa,
> Ölüm aynı zamanda hayalet bir kahramandır.
> Hala Xiang Yu'yu özlüyorum.
> Jiangdong'u geçmek konusunda isteksiz.
>
> Li Qingzhao, Song Hanedanlığı'nın beceriksizliğine işaret etmek için Xiang Yu'nun trajik hikayesini kullandı.
> İmparatorluk sarayının savaşmadan teslim olmasından duyduğu memnuniyetsizliği ifade etmek.
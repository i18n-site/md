# Stil Listesi

Aşağıdaki stillerde `MarkDown` nasıl yazıldığını görmek için [bu sayfanın kaynak dosyasına göz atmak için burayı tıklayın](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) .

## Altı Çizili & Kalın &

Bu __ Alt çizgi __ ,~~ üstü çizili~~ ve **kalın** sunum metni.

Aşağıdaki şekilde yazılmıştır:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` web sitesi oluşturma aracının `MarkDown` ayrıştırıcısı, altı çizili, üstü çizili ve kalın sözdizimini optimize etmiştir. İşaretten önce ve sonra boşluk olmadan etkili olabilir, böylece Çin, Japonya ve Kore gibi dillerde belge yazmayı kolaylaştırır. ayırıcı olarak boşluk kullanmayanlar.

Genişletilmiş okuma : [Nuggets'ın Markdown sözdizimi ( `**……**` ) neden bazen etkili olmuyor?](//juejin.cn/post/7064565848421171213)

## Alıntı

### Tek Satırlık Alıntı

> Yeteneklerimin işe yaraması benim doğamda var ve tüm param harcandıktan sonra geri döneceğim.
<p style="text-align:right">─ Li Bai</p>

### Çok Satırlı Alıntılar

> Bilim kurgunun bir diğer benzersiz avantajı da kapsamının son derece geniş olmasıdır.
> Milyonlarca kelimelik bir "Savaş ve Barış", bir bölgenin yalnızca birkaç on yıllık tarihini anlatır;
> Ve Asimov'un "Son Yanıt"ı gibi bilim kurgu romanları, insanlar da dahil olmak üzere tüm evrenin milyarlarca yıllık tarihini sadece birkaç bin kelimeyle canlı bir şekilde anlatıyor.
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
> Vahşi bir maceraya çıkarken güvende kalmak önemlidir.
> Geçtiğimiz hafta bir grup dağcı, dağın yarısında fırtınayla karşılaştı ve hava durumunu kontrol edemedikleri için bölgeyi terk etmek zorunda kaldı.
> Herhangi bir açık hava etkinliğinin yeterli hazırlık ve hava durumuna dikkat edilmesi gerektiğini unutmayın.

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
    + Girişimcilik değişim toplantısı
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

## kod

### Satır Içi Kod

Programlama dillerinin geniş dünyasında `Rust` , `Python` , `JavaScript` ve `Go` her biri benzersiz bir konuma sahiptir.

### Birden Fazla Kod Satırı

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```
---

brief: |
  i18n.site artık sunucusuz tam metin aramasını destekliyor.

  Bu makale, IndexedDB tarafından oluşturulan ters çevrilmiş dizin, önek araması, kelime segmentasyonu optimizasyonu ve çoklu dil desteği de dahil olmak üzere saf ön uç tam metin arama teknolojisinin uygulanmasını tanıtmaktadır.

  Mevcut çözümlerle karşılaştırıldığında, i18n.site'nin saf ön uç tam metin araması küçük boyutlu ve hızlıdır, belgeler ve bloglar gibi küçük ve orta ölçekli web siteleri için uygundur ve çevrimdışı olarak kullanılabilir.

---

# Saf Ön Uç Tersine Çevrilmiş Tam Metin Araması

## Sekans

Birkaç haftalık geliştirme sürecinin ardından [i18n.site](//i18n.site) (tamamen statik markdown çok dilli çeviri & web sitesi oluşturma aracı) artık saf ön uç tam metin aramasını destekliyor.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Bu makale [i18n.site](//i18n.site) arama efektini deneyimlemek için `i18n.site` saf ön uç tam metin aramasının teknik uygulamasını paylaşacaktır.

Açık kaynak kodunu arayın : [Çekirdek](//github.com/i18n-site/ie/tree/main/qy) / [etkileşimli arayüzde](//github.com/i18n-site/plugin/tree/main/qy) arama yapın

## Sunucusuz Tam Metin Arama Çözümlerine Genel Bakış

Belgeler/kişisel bloglar gibi küçük ve orta ölçekli tamamen statik web siteleri için, kendi kendine oluşturulmuş bir tam metin arama arka ucu oluşturmak çok ağırdır ve hizmet gerektirmeyen tam metin araması daha yaygın bir seçimdir.

Sunucusuz tam metin arama çözümleri iki geniş kategoriye ayrılır:

İlk olarak, benzer [algolia.com](//algolia.com) Üçüncü taraf arama hizmeti sağlayıcıları, tam metin araması için ön uç bileşenler sağlar.

Bu tür hizmetler, arama hacmine göre ödeme yapılmasını gerektirir ve web sitesi uyumluluğu gibi sorunlar nedeniyle genellikle Çin ana karasındaki kullanıcılar tarafından kullanılamaz.

Çevrimdışı kullanılamaz, intranette kullanılamaz ve büyük sınırlamalara sahiptir. Bu makale çok fazla tartışmıyor.

İkincisi, saf ön uç tam metin aramasıdır.

Şu anda yaygın olarak kullanılan ön uç tam metin aramaları arasında [lunrjs](//lunrjs.com) ve [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs` ikincil geliştirmeye dayalı) bulunmaktadır.

`lunrjs` Dizin oluşturmanın iki yolu vardır ve her ikisinin de kendi sorunları vardır.

1. Önceden oluşturulmuş dizin dosyaları

   Dizin tüm belgelerden sözcükler içerdiğinden boyutu büyüktür.
   Bir belge eklendiğinde veya değiştirildiğinde yeni bir dizin dosyası yüklenmelidir.
   Kullanıcının bekleme süresini artıracak ve çok fazla bant genişliği tüketecektir.

2. Belgeleri anında yükleyin ve dizinler oluşturun

   Dizin oluşturmak, hesaplama açısından yoğun bir iştir. Dizine her eriştiğinizde dizini yeniden oluşturmak, belirgin gecikmelere ve kötü kullanıcı deneyimine neden olur.

---

`lunrjs` ek olarak, : gibi başka tam metin arama çözümleri de vardır.

[fusejs](//www.fusejs.io) , aranacak dizeler arasındaki benzerliği hesaplayın.

Bu çözümün performansı son derece düşük ve tam metin araması için kullanılamaz (bkz [Fuse.js Uzun sorgu 10 saniyeden fazla sürüyor, nasıl optimize edilir?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , arama yapmak için Bloom filtresini kullanın, önek araması için kullanılamaz (örneğin, `goo` girin, `good` , `google` arayın) ve benzer otomatik tamamlama efekti elde edilemez.

Mevcut çözümlerin eksiklikleri nedeniyle `i18n.site` , aşağıdaki özelliklere sahip yeni bir saf ön uç tam metin arama çözümü geliştirdi :

1. Çoklu dil aramayı destekler ve boyutu küçüktür. `gzip` paketlendikten sonra arama çekirdeğinin boyutu `6.9KB` (karşılaştırma için `lunrjs` boyutu `25KB` ).
1. Daha az bellek kaplayan ve hızlı olan, `indexedb` dayalı ters çevrilmiş bir dizin oluşturun.
1. Belgeler eklendiğinde/değiştirildiğinde, yalnızca eklenen veya değiştirilen belgeler yeniden indekslenerek hesaplama miktarı azaltılır.
1. Önek aramayı destekler ve kullanıcı yazarken arama sonuçlarını gerçek zamanlı olarak görüntüleyebilir.
1. Çevrimdışı kullanılabilir

Aşağıda `i18n.site` teknik uygulama detayı detaylı olarak tanıtılacaktır.

## Çok Dilli Kelime Segmentasyonu

Kelime bölümlendirme, tarayıcının yerel kelime bölümlendirmesini `Intl.Segmenter` kullanır ve tüm genel tarayıcılar bu arayüzü destekler.

![](//p.3ti.site/1727667759.avif)

Word segmentation `coffeescript` kodu aşağıdaki gibidir

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

içinde:

* `/\p{P}/` noktalama işaretleriyle eşleşen bir normal ifadedir. Belirli eşleşen simgeler şunları içerir: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } . '.</p><ul><li> `split('.')` `Firefox` tarayıcı sözcüğü bölümlemesinin `. ` bölümlememesidir.</li>


## Dizin Oluşturma

`IndexedDB` 5 nesne depolama tablosu oluşturuldu :

* `word` : id -
* `doc` : id - Belge url - Belge sürüm numarası
* `docWord` : Belge dizisi id - kelime id
* `prefix` : Önek dizisi - kelime id
* `rindex` : Word id - Belge id : Satır numaraları dizisi

Belge `url` ve sürüm numarası `ver` dizisini iletin ve belgenin tablo `doc` bulunup bulunmadığını arayın. Mevcut değilse, ters çevrilmiş bir dizin oluşturun. Aynı zamanda, aktarılmayan belgeler için ters çevrilmiş dizini de kaldırın.

Bu sayede artımlı indeksleme sağlanabilmekte ve hesaplama miktarı azaltılabilmektedir.

Ön uç etkileşiminde, ilk kez yükleme yaparken gecikmeyi önlemek için dizinin yükleme ilerleme çubuğu görüntülenebilir. Bkz. "Tek Bir progress + Pure css Uygulamasına Dayalı Animasyonlu İlerleme Çubuğu" [İngilizce](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Çince](//juejin.cn/post/7413586285954154522) .

### IndexedDB Yüksek Eşzamanlı Yazma

Proje, IndexedDB nin asenkron kapsüllenmesine dayalı olarak [idb](//www.npmjs.com/package/idb) .

IndexedDB okuma ve yazma işlemleri eşzamansızdır. Dizin oluştururken, dizini oluşturmak için belgeler aynı anda yüklenecektir.

Rekabetçi yazmanın neden olduğu kısmi veri kaybını önlemek için aşağıdaki `coffeescript` koduna başvurabilir ve rakip yazma işlemlerini engellemek için okuma ve yazma arasına `ing` önbellek ekleyebilirsiniz.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Hassasiyet Ve Geri Çağırma

Arama öncelikle kullanıcı tarafından girilen anahtar kelimeleri bölümlere ayıracaktır.

Kelime segmentasyonundan sonra `N` kelime olduğunu varsayalım. Sonuçları döndürürken, önce tüm anahtar kelimeleri içeren sonuçlar döndürülecek, ardından `N-1` , `N-2` ,..., `1` anahtar kelimeyi içeren sonuçlar döndürülecektir.

İlk olarak görüntülenen arama sonuçları sorgunun doğruluğunu sağlar ve daha sonra yüklenen sonuçlar (daha fazla yükle düğmesine tıklayın) hatırlama oranını sağlar.

![](//p.3ti.site/1727684564.avif)

## Talep Üzerine Yükleme

Yanıt hızını artırmak amacıyla, arama isteğe bağlı yüklemeyi uygulamak için `yield` oluşturucuyu kullanır ve `limit` sonuç sorgulandığında geri döner.

`yield` sonra her arama yaptığınızda, `IndexedDB` sorgu işlemini yeniden açmanız gerektiğini unutmayın.

## Önek Gerçek Zamanlı Arama

Kullanıcı yazarken arama sonuçlarını görüntülemek için örneğin `wor` girildiğinde `words` , `work` gibi önüne `wor` gelen kelimeler görüntülenir.

![](//p.3ti.site/1727684944.avif)

Arama çekirdeği, sözcük segmentasyonundan sonra son sözcük için `prefix` tablosunu kullanarak, önüne eklenmiş tüm sözcükleri bulur ve sırayla arama yapar.

Sarsıntı önleme işlevi `debounce` aramaları tetikleyen kullanıcı girdisinin sıklığını azaltmak ve hesaplama miktarını azaltmak için ön uç etkileşiminde de kullanılır (aşağıdaki gibi uygulanır).

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Çevrimdışı Kullanılabilir

Dizin tablosu orijinal metni saklamaz, yalnızca sözcükleri saklar, bu da depolama miktarını azaltır.

Arama sonuçlarının vurgulanması, orijinal metnin yeniden yüklenmesini gerektirir ve `service worker` eşleştirilmesi, tekrarlanan ağ isteklerini önleyebilir.

Aynı zamanda, `service worker` tüm makaleleri önbelleğe aldığından, kullanıcı bir arama yaptığında, arama dahil tüm web sitesi çevrimdışı olarak kullanılabilir.

## MarkDown Belgelerinin Görüntü Optimizasyonu

`i18n.site` saf ön uç arama çözümü `MarkDown` belge için optimize edilmiştir.

Arama sonuçları görüntülenirken bölüm adı görüntülenecek ve tıklandığında bölüme gidilecektir.

![](//p.3ti.site/1727686552.avif)

## Özetle

Tersine çevrilmiş tam metin araması yalnızca ön uçta uygulanır, sunucu gerekmez. Dokümanlar ve kişisel bloglar gibi küçük ve orta ölçekli web siteleri için oldukça uygundur.

`i18n.site` Açık kaynaklı, kendi geliştirdiği saf ön uç arama, küçük boyutlu ve hızlı yanıt, mevcut saf ön uç tam metin aramanın eksikliklerini çözer ve daha iyi bir kullanıcı deneyimi sağlar.
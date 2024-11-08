---

brief: |
  i18n.site indi serversiz tam mətn axtarışını dəstəkləyir.

  Bu məqalə, IndexedDB tərəfindən qurulmuş ters çevrilmiş indeks, prefiks axtarışı, söz seqmentasiyasının optimallaşdırılması və çoxdilli dəstək daxil olmaqla, təmiz ön tam mətn axtarış texnologiyasının tətbiqini təqdim edir.

  Mövcud həllər ilə müqayisədə, i18n.site-nin təmiz front-end tam mətn axtarışı kiçik ölçülü və sürətlidir, sənədlər və bloqlar kimi kiçik və orta ölçülü vebsaytlar üçün uyğundur və oflayn rejimdə mövcuddur.

---

# Təmiz Ön Tərəfə Çevrilmiş Tam Mətn Axtarışı

## Ardıcıllıq

Bir neçə həftəlik inkişafdan sonra [i18n.site](//i18n.site) (sırf statik markdown çoxdilli tərcümə & vebsaytı qurma aləti) indi tam mətnli axtarışı dəstəkləyir.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Bu məqalə, axtarış effektini [i18n.site](//i18n.site) üçün `i18n.site` tam mətnli axtarışın texniki tətbiqini paylaşacaq.

Kod açıq mənbə : [Axtarış nüvəsi](//github.com/i18n-site/ie/tree/main/qy) / [interaktiv interfeys](//github.com/i18n-site/plugin/tree/main/qy)

## Serversiz Tam Mətnli Axtarış Həllərinin Nəzərdən Keçirilməsi

Sənədlər/şəxsi bloqlar kimi kiçik və orta ölçülü sırf statik veb-saytlar üçün öz-özünə qurulmuş tam mətnli axtarış backendinin yaradılması çox ağırdır və xidmətsiz tam mətn axtarışı daha çox yayılmış seçimdir.

Serversiz tam mətnli axtarış həlləri iki geniş kateqoriyaya bölünür:

Birincisi, oxşar [algolia.com](//algolia.com)

Bu cür xidmətlər axtarış həcminə görə ödəniş tələb edir və vebsaytın uyğunluğu kimi problemlərə görə materik Çindəki istifadəçilər üçün çox vaxt əlçatmaz olur.

O, oflayn istifadə edilə bilməz, intranetdə istifadə edilə bilməz və böyük məhdudiyyətlərə malikdir. Bu məqalə çox müzakirə etmir.

İkincisi, sırf front-end tam mətn axtarışıdır.

Hal-hazırda, ümumi təmiz ön tam mətn axtarışlarına [lunrjs](//lunrjs.com) və [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) daxildir ( `lunrjs` ikinci inkişaf əsasında).

`lunrjs` İndekslərin qurulmasının iki yolu var və hər ikisinin öz problemləri var.

1. Əvvəlcədən qurulmuş indeks faylları

   İndeksdə bütün sənədlərdən sözlər olduğu üçün onun ölçüsü böyükdür.
   Hər hansı bir sənəd əlavə edildikdə və ya dəyişdirildikdə, yeni bir indeks faylı yüklənməlidir.
   Bu, istifadəçinin gözləmə müddətini artıracaq və çoxlu bant genişliyi sərf edəcək.

2. Sənədləri yükləyin və tez indekslər qurun

   İndeksin yaradılması hesablama baxımından intensiv bir işdir, ona hər dəfə daxil olduqda onu yenidən qurmaq aşkar gecikmələrə və zəif istifadəçi təcrübəsinə səbəb olacaq.

---

`lunrjs` -dan əlavə, bir neçə tam mətnli axtarış həlləri var, məsələn :

[fusejs](//www.fusejs.io) axtarış üçün sətirlər arasındakı oxşarlığı hesablayın.

Bu həllin performansı son dərəcə zəifdir və tam mətn axtarışı üçün istifadə edilə bilməz (bax [Fuse.js Uzun sorğu 10 saniyədən çox çəkir, onu necə optimallaşdırmaq olar?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) axtarış üçün Bloom filtrindən istifadə edin, prefiks axtarışı üçün istifadə edilə bilməz (məsələn, `goo` daxil edin, axtarış `good` , `google` ) və oxşar avtomatik tamamlama effekti əldə edə bilməz.

Mövcud həllərin çatışmazlıqlarına görə, `i18n.site` aşağıdakı xüsusiyyətlərə malik olan yeni təmiz ön tam mətnli axtarış həlli hazırladı :

1. Çoxdilli axtarışı dəstəkləyir və ölçüsü kiçikdir `gzip` qablaşdırmadan sonra axtarış nüvəsinin ölçüsü `6.9KB` dir (müqayisə üçün `lunrjs` nin ölçüsü `25KB` dür).
1. Daha az yaddaş tutan və sürətli olan `indexedb` a əsaslanan ters çevrilmiş indeks yaradın.
1. Sənədlər əlavə edildikdə/dəyişdirildikdə, yalnız əlavə edilmiş və ya dəyişdirilmiş sənədlər yenidən indeksləşdirilir və hesablamaların həcmi azalır.
1. Prefiks axtarışını dəstəkləyir və istifadəçi yazarkən axtarış nəticələrini real vaxtda göstərə bilər.
1. Oflayn mövcuddur

Aşağıda `i18n.site` texniki icra detalları ətraflı şəkildə təqdim olunacaq.

## Çoxdilli Sözlərin Seqmentasiyası

Word seqmentasiyası brauzerin yerli söz seqmentasiyası `Intl.Segmenter` istifadə edir və bütün əsas brauzerlər bu interfeysi dəstəkləyir.

![](//p.3ti.site/1727667759.avif)

Söz seqmentasiyası `coffeescript` kodu aşağıdakı kimidir

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

in:

* `/\p{P}/` durğu işarələrinə uyğun gələn müntəzəm ifadədir. Xüsusi uyğun simvollara aşağıdakılar daxildir: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` , çünki `Firefox` brauzer sözünün seqmentasiyası `. ` bölünmür.</li>


## İndeks Qurulması

`IndexedDB` -da 5 obyekt saxlama cədvəli yaradılmışdır :

* `word` : id -
* `doc` : id - Sənəd url - Sənədin versiya nömrəsi
* `docWord` : Sənədin id - sözü id
* `prefix` - id prefiks :
* `rindex` : Word id - Document id : Sətir nömrələri massivi

Sənəd `url` və versiya nömrəsi `ver` massivinə keçin və sənədin cədvəl `doc` də olub-olmadığını axtarın. Əgər o, mövcud deyilsə, ters çevrilmiş indeks yaradın. Eyni zamanda, daxil edilməmiş sənədlər üçün ters çevrilmiş indeksi çıxarın.

Bu yolla, artımlı indeksləşdirmə əldə edilə bilər və hesablama miqdarı azalır.

İlk dəfə css progress + / almaq [üçün](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) ön tərəfdə qarşılıqlı əlaqədə indeksin [yüklənmə](//juejin.cn/post/7413586285954154522) tərəqqi çubuğu göstərilə bilər.

### IndexedDB Yüksək Paralel Yazı

Layihə asinxron inkapsulyasiya əsasında [idb](//www.npmjs.com/package/idb) IndexedDB

IndexedDB oxuyur və yazır asinxrondur. İndeks yaratarkən, indeks yaratmaq üçün sənədlər eyni vaxtda yüklənəcəkdir.

Rəqabətli yazının səbəb olduğu qismən məlumat itkisinin qarşısını almaq üçün aşağıdakı `coffeescript` koduna müraciət edə və rəqabətli yazıların qarşısını almaq üçün oxu və yazma arasında `ing` keş əlavə edə bilərsiniz.

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

## Dəqiqlik Və Geri Çağırma

Axtarış əvvəlcə istifadəçinin daxil etdiyi açar sözləri seqmentləşdirəcək.

Fərz edək ki, söz seqmentindən sonra `N` söz var. Nəticələri qaytararkən, əvvəlcə bütün açar sözlərdən ibarət nəticələr qaytarılacaq, sonra isə `N-1` , `N-2` ,..., `1` açar sözdən ibarət nəticələr qaytarılacaq.

Göstərilən axtarış nəticələri əvvəlcə sorğunun düzgünlüyünü təmin edir və sonradan yüklənən nəticələr (daha çox yükləmə düyməsini klikləyin) geri çağırma dərəcəsini təmin edir.

![](//p.3ti.site/1727684564.avif)

## Tələb Üzrə Yükləyin

Cavab sürətini yaxşılaşdırmaq üçün axtarış, tələb üzrə yükləməni həyata keçirmək üçün `yield` generatorundan istifadə edir və `limit` dəfə bir nəticə sorğulandıqda qaytarılır.

Nəzərə alın ki, hər dəfə `yield` sonra yenidən axtarış etdiyiniz zaman `IndexedDB` sorğu əməliyyatını yenidən açmalısınız.

## Prefiks Real Vaxt Axtarışı

İstifadəçi yazarkən axtarış nəticələrini göstərmək üçün, məsələn, `wor` daxil edildikdə, `words` və `work` kimi `wor` ilə prefiksli sözlər göstərilir.

![](//p.3ti.site/1727684944.avif)

Axtarış nüvəsi söz seqmentindən sonra sonuncu söz üçün `prefix` cədvəlindən onunla prefiks edilmiş bütün sözləri tapmaq və ardıcıllıqla axtaracaq.

Anti-silkələnmə funksiyası `debounce` həmçinin istifadəçi girişinin axtarışlarını tetiklemesinin tezliyini azaltmaq və hesablamanın həcmini azaltmaq üçün front-end qarşılıqlı əlaqədə istifadə olunur (aşağıdakı kimi həyata keçirilir).

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Oflayn Mövcuddur

İndeks cədvəli orijinal mətni saxlamır, yalnız sözləri saxlayır, bu da yaddaşın həcmini azaldır.

Axtarış nəticələrinin vurğulanması orijinal mətnin yenidən yüklənməsini tələb edir və `service worker` uyğun gəlmək təkrarlanan şəbəkə sorğularının qarşısını ala bilər.

Eyni zamanda, `service worker` bütün məqalələri yaddaşda saxladığı üçün istifadəçi axtarış apardıqdan sonra axtarış da daxil olmaqla bütün vebsayt oflayn rejimdə əlçatan olur.

## MarkDown Sənədlərinin Optimallaşdırılması

`i18n.site` -ın təmiz qabaqcıl axtarış həlli `MarkDown` sənəd üçün optimallaşdırılıb.

Axtarış nəticələrini göstərərkən, fəsil adı göstəriləcək və kliklədikdə bölmə naviqasiya ediləcək.

![](//p.3ti.site/1727686552.avif)

## Ümumiləşdirin

Ters çevrilmiş tam mətn axtarışı sırf ön hissədə həyata keçirilir, server tələb olunmur. Sənədlər və şəxsi bloqlar kimi kiçik və orta ölçülü vebsaytlar üçün çox uyğundur.

`i18n.site` Açıq mənbə özü inkişaf etdirdiyi təmiz ön axtarış, kiçik ölçülü və sürətli cavab, hazırkı saf front-end tam mətn axtarışının çatışmazlıqlarını həll edir və daha yaxşı istifadəçi təcrübəsi təmin edir.
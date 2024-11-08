# Stil Siyahısı

Aşağıdakı üslublarda `MarkDown` necə yazılacağını görmək üçün [bu səhifənin mənbə faylına baxmaq üçün bura klikləyin](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) .

## Qatlanmış Blok

|+| MarkDown nədir?

    MarkDown, istifadəçilərə oxumaq və yazmaq üçün asan olan düz mətn formatında formatlanmış sənədlər yaratmağa imkan verən yüngül işarələmə dilidir.

    Adətən sənədlər, blog məqalələri, elektron kitablar, forum yazıları və s. yazmaq üçün istifadə olunur.

    Onun aşağıdakı üstünlükləri var:

    1. Öyrənmək asandır
    1. Yüksək oxunaqlı
    1. Versiyaya nəzarət dostudur

       `MarkDown` sənəd düz mətn formatında olduğundan, proqramçılar onları asanlıqla versiyaya nəzarət sistemlərinə (məsələn, `git` ) daxil edə bilərlər.

       Bu, dəyişiklikləri izləməyi və əməkdaşlığı, xüsusən komandanın inkişafında daha sadə edir.

|-| I18N nədir?

    “I18N” “Beynəlxalqlaşma”nın qısaltmasıdır.

    “Beynəlxalqlaşma” sözü “I” və “N” arasında 18 hərf olduğundan təmsili sadələşdirmək üçün “I18N” istifadə olunur.

    Layman dilində desək, bu, birdən çox dili dəstəkləmək deməkdir.


Qatlanan blok aşağıdakı kimi yazılmış `i18n.site` dan `MarkDown` ə qədər uzadılmış sintaksisdir :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

` ilə|+| `或`|-| ` ilə başlayan sətir qatlama bloku yaradacaq və qatlama blokunun məzmunu eyni səviyyəli girintiyə malik sonrakı sətirlərdir (paraqraflar boş sətirlərlə ayrılır).

Pass`|-| `标记的折叠块默认展开，`|+| `Etiketlənmiş yıxılmış bloklar defolt olaraq yığışdırılır.

## Altını Xətt & Qalın &

__ __~~ cızıq~~ və **qalın** təqdimat mətni.

Aşağıdakı kimi yazılır:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` veb-sayt qurma alətinin `MarkDown` təhlilçisi işarədən əvvəl və sonra boşluq olmadan qüvvəyə minir, məsələn, Çin, Yaponiya və Koreya kimi dillərdə yazı yazmağı asanlaşdırır. boşluqları ayırıcı kimi istifadə etməyin.

[Markdown `**……**`](//juejin.cn/post/7064565848421171213) :

## Sitat

### Tək Sətirli Sitat

> Təbiətim budur ki, istedadlarım faydalı olacaq və bütün pullarımı xərcləyəndən sonra qayıdacağam.
<p style="text-align:right">─ Li Bai</p>

### Çoxlu Sətirli Sitatlar

> Elmi fantastikanın digər unikal üstünlüyü onun son dərəcə geniş əhatə dairəsidir.
> Bir milyon sözdən ibarət "Müharibə və Sülh" yalnız bir bölgənin bir neçə onilliklər tarixini təsvir edir;
> Asimovun “Son cavab” kimi elmi fantastika romanları isə bütün kainatın, o cümlədən insanların milyardlarla illik tarixini cəmi bir neçə min sözlə aydın şəkildə təsvir edir.
> Ənənəvi ədəbiyyatda belə əhatəliliyə və cəsarətə nail olmaq mümkün deyil.
<p style="text-align:right">── Liu Cixin</p>

### İpucu `> [!TIP]`

> [!TIP]
> Pasportunuzun və vizanın etibarlılığını yoxlamağı unutmayın, müddəti bitmiş sənədlər ölkəyə daxil ola və ya çıxa bilməz.

Aşağıdakı kimi yazılır

```
> [!TIP]
> YOUR CONTENT
```

### Qeyd `> [!NOTE]`

> [!NOTE]
> Əgər mənə mesaj göndərsəniz və mən dərhal cavab versəniz, bu nə deməkdir?
> Bu onu göstərir ki, mən mobil telefonlarla oynamağı çox sevirəm.


### Xəbərdarlıq `> [!WARN]`

> [!WARN]
> Vəhşi bir macəraya gedərkən təhlükəsiz qalmaq vacibdir. Burada bəzi əsas təhlükəsizlik məsləhətləri var:
>
> - **Hava proqnozunu yoxlayın** : Keçən həftə bir qrup alpinist hava proqnozunu yoxlamadıqları üçün dağın yarısında fırtına ilə qarşılaşdılar və təcili təxliyə etməli oldular.
> - **Lazımi ləvazimatları daşıyın** : Kifayət qədər qida, su və ilk yardım ləvazimatları gətirdiyinizə əmin olun.
> - **Ərazini anlayın** : İtirilməmək üçün əvvəlcədən macəra zonasının ərazisi və marşrutları ilə tanış olun.
> - **Əlaqədə qalın** : Xarici dünya ilə əlaqədə qalın və hər kəsin təhlükəsiz şəkildə geri qayıda bilməsinə əmin olun.
>
> Unutmayın, təhlükəsizlik həmişə birinci yerdədir!

## Görüləcək Işlər Siyahısı

- [x] Dizayn məhsulunun prototipi və xüsusiyyətləri siyahısı
- [ ] Texnologiya yığınını və inkişaf alətlərini müəyyənləşdirin
- [ ] Məhsulun inkişaf qrafiklərini və mərhələlərini hazırlayın

## Siyahı

### Sifariş Siyahısı

1. qaçış
   1. Həftədə üç dəfə, hər dəfə 5 kilometr
   1. Yarım marafon qaçın
1. idman zalı məşqi
   1. Həftədə iki dəfə, hər dəfə 1 saat
   1. Əsas əzələlərə diqqət yetirin

### Sıralanmamış Siyahı

* sosial hadisələr
  - Sənaye mübadilə görüşlərində iştirak edin
    + Texnologiya mübadiləsi sessiyası
    + Sahibkarlıq Mübadilə Görüşü
  - Dostların toplantısını təşkil edin
    + Açıq havada barbekü
    + kino gecəsi

## Vərəq

| mütəfəkkir       | Əsas töhfələr                           |
|--------------|------------------------------------|
| Konfutsi         | Konfutsiçiliyin banisi |
| Sokrat     | qərb fəlsəfəsinin atası  |
| Nitsşe         | Ənənəvi əxlaqı və dini tənqid edən supermen fəlsəfəsi       |
| marks       | kommunizm |

### Böyük Masa Ekranının Optimallaşdırılması

Nisbətən böyük cədvəllər üçün ekran effektini optimallaşdırmaq üçün aşağıdakı üsullardan istifadə edilə bilər:

1. Daha kiçik şriftdən istifadə edin

   Məsələn, cədvəli `<div style="font-size:14px">` və `</div>` ilə sarın.

   Qeyd edək ki, `div` etiketi öz sətrini tutmalı və ondan əvvəl və sonra boş sətirlər qoymalıdır.
1. Xanadakı daha uzun mətn üçün xətti bükmək üçün `<br>` daxil edin
1. Sütun çox qısa şəkildə sıxılırsa, eni genişləndirmək üçün başlığa `<div style="width:100px">xxx</div>` əlavə edə bilərsiniz və sətir kəsilməsi mövqeyini idarə etmək üçün [başlığa `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) əlavə edə bilərsiniz.

Nümayiş nümunəsi aşağıdakı kimidir:

<div style="font-size:14px">

| millət       | <div style="width:70px;margin:auto">mütəfəkkir adı</div> | Era | Əsas ideoloji töhfələr                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Çin       | Konfutsi                                           | 551-479-cu illər   | Konfutsiçiliyin banisi "xeyirxahlıq" və "nəzakət" kimi əsas anlayışları təklif etdi və əxlaqi tərbiyəni və sosial nizamı vurğuladı. |
| qədim yunan     | Sokrat                                       | 469-399-cu illər   | Dialoq və dialektika vasitəsilə həqiqəti araşdırmaq “özünü tanı” təklif edir və rasional düşüncəni vurğulayır.         |
| Fransa       | Volter                                         | 1694-1778       | Maarifçiliyin təmsilçiləri rasionallığı, azadlıq və bərabərliyi müdafiə edir, dini xurafat və avtoritar idarəçiliyi tənqid edirdilər.   |
| Almaniya       | Kant                                           | 1724-1804       | “Saf zəkanın tənqidi”ni irəli sürün<br> Əxlaqın, azadlığın və biliyin əsaslarını tədqiq edir, praktiki ağlı vurğulayır     |

</div>

Yuxarıdakı nümunə üçün psevdokod aşağıdakı kimidir:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kod

### Daxili Kod

Proqramlaşdırma dillərinin geniş dünyasında `Rust` , `Python` , `JavaScript` və `Go` hər biri özünəməxsus yer tutur.

### Çoxlu Kod Sətirləri

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Paraqraf Daxilində Sətir Sonu

Paraqraflar daxilində sətir fasilələri sətirlər arasında boş sətirlər əlavə etmədən əldə edilə bilər.
Paraqraflardakı sətir kəsimləri arasındakı məsafə paraqraflar arasındakı intervaldan kiçikdir.

məsələn:

> Böyük insan kimi yaşa,
> Ölüm həm də xəyal qəhrəmanıdır.
> Mən hələ də Xiang Yu üçün darıxıram,
> Jiangdong'u keçmək istəmir.
>
> Li Qingzhao, Sonq sülaləsinin səriştəsizliyinə işarə etmək üçün Xiang Yu-nun faciəli hekayəsindən istifadə etdi.
> Döyüşsüz təslim olduğuna görə imperator məhkəməsindən narazılığını bildirərək.
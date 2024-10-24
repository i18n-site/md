# Stil Siyahısı

Aşağıdakı üslublarda `MarkDown` necə yazılacağını görmək üçün [bu səhifənin mənbə faylına baxmaq üçün bura klikləyin](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) .

## Altını Xətt & Qalın &

__ __~~ cızıq~~ və **qalın** təqdimat mətni.

Aşağıdakı kimi yazılır:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` veb-sayt qurma alətinin `MarkDown` təhlilçisi işarədən əvvəl və sonra boşluq olmadan qüvvəyə minir, Çin, Yaponiya və Koreya kimi dillərdə sənədlərin yazılmasını asanlaşdırır. boşluqları ayırıcı kimi istifadə etməyən.

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
> your content
```

### Qeyd `> [!NOTE]`

> [!NOTE]
> Əgər mənə mesaj göndərsəniz və mən dərhal cavab versəniz, bu nə deməkdir?
> Bu onu göstərir ki, mən mobil telefonlarla oynamağı çox sevirəm.


### Xəbərdarlıq `> [!WARN]`

> [!WARN]
> Vəhşi bir macəraya gedərkən təhlükəsiz qalmaq vacibdir.
> Ötən həftə bir qrup alpinist dağın yarısında fırtına ilə qarşılaşıb və hava proqnozunu yoxlaya bilmədiklərinə görə təxliyyə etməli olublar.
> Unutmayın ki, hər hansı açıq fəaliyyət havaya adekvat hazırlıq və diqqət tələb edir.

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
    + Sahibkarlıq mübadiləsi toplantısı
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

## kod

### Daxili Kod

Proqramlaşdırma dillərinin geniş dünyasında `Rust` , `Python` , `JavaScript` və `Go` hər biri özünəməxsus yer tutur.

### Çoxlu Kod Sətirləri

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```
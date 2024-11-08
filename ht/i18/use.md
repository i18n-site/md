# Enstale Epi Sèvi Ak

## windows Premye Enstale git bash

windows Sistèm, tanpri [klike isit la pou telechaje ak enstale `git bash` an premye](https://git-scm.com/download/win) .

Kouri operasyon ki vin apre yo nan `git bash` .

## Enstale

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigure Siy Tradiksyon

Vizite [i18n.site/token](//i18n.site/token) Klike pou kopye jeton

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Kreye `~/.config/i18n.site.yml` , kole kontni an kopye nan li, kontni an se jan sa a:

```
token: YOUR_API_TOKEN
```

Anplis de sa, ou bezwen mare [yon](/#price) kat kredi peman nan [i18n.site/payBill](//i18n.site/payBill)

## Itilize

### Pwojè Demo

Tanpri gade nan pwojè [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) a pou aprann konfigirasyon `i18` tradiksyon.

Itilizatè yo nan Lachin ka klonaj [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Apre klonaj, antre nan anyè a epi kouri `i18` pou konplete tradiksyon an.

### Estrikti Anyè

Estrikti anyè depo modèl la se jan sa a

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Fichye Demo yo tradui nan anyè `en` a se jis yon egzanp epi yo ka efase.

### Kouri Tradiksyon

Antre nan anyè a epi kouri `i18` pou tradui.

Anplis tradiksyon an, pwogram nan pral jenere katab `.i18n/data` a tou, tanpri ajoute li nan depo a.

Apre ou fin tradui nouvo fichye a, yo pral jenere yon nouvo fichye done nan anyè sa a. Sonje ajoute `git add . ` .

## Fichye Konfigirasyon

`.i18n/conf.yml` se fichye konfigirasyon zouti tradiksyon liy kòmand `i18`

Kontni an se jan sa a:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lang Sous &

Nan dosye konfigirasyon an, sibòdone nan `fromTo` :

`en` se lang sous la, `zh ja ko de fr` se lang sib tradiksyon an.

Kòd lang wè [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pa egzanp, si ou vle tradui Chinwa an Angle, reekri liy sa a `zh: en` .

Si ou vle tradui nan tout lang yo sipòte, tanpri kite vid apre `:` . pou egzanp

```
i18n:
  fromTo:
    en:
```

Ou kapab configure diferan `fromTo` pou diferan sous- / Fichye yon demonstrasyon ekri jan sa a :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Nan tablo konfigirasyon sa a, lang sous tradiksyon katalòg `blog` se `zh` , ak lang sous tradiksyon katalòg `blog/your_file_name.md` se `ja` .

### Imaj/Lyen Plizyè Lang

Lè URL yo nan foto yo ak lyen ki nan `replace:` ak `MarkDown` (ak `src` ak `href` atribi yo nan embedded `HTML` ) yo configuré nan `.i18n/conf.yml` ak prefiks sa a, kòd lang sous la nan URL la pral ranplase pa kòd lang nan tradiksyon an ( [lang lis kòd](/i18/LANG_CODE) ).

Pou egzanp, konfigirasyon ou a se jan sa a:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` se yon diksyonè, kle a se prefiks URL yo dwe ranplase, ak valè a se règ ranplasman an.

Siyifikasyon ranplase règ `ko de uk>ru zh-TW>zh >en` pi wo a se ke `ko de` sèvi ak foto pwòp kòd lang pa yo, `zh-TW` ak `zh` sèvi ak foto a nan `zh` , `uk` sèvi ak foto a nan `ru` , ak lòt lang (tankou `ja` ) sèvi ak foto a. nan `en` pa default.

Pa egzanp, dosye sous franse ( `fr` ) `MarkDown` se jan sa a :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Fichye angle ( `en` ) tradui ak pwodwi a se jan sa a :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Isit la, `/en/` nan kòd lang sous la ranplase ak `/zh/` nan lang sib la.

Remake byen : Fòk genyen `/` anvan ak apre kòd lang tèks ranplase a nan URL la.

> [!TIP]
> Si `- /` konfigirasyon nan `url:` , se sèlman chemen relatif yo pral matche, men URL ki kòmanse ak `//` pa pral matche.
>
> Si kèk lyen nan yon non domèn vle ranplase epi kèk pa vle ranplase, ou ka itilize diferan prefiks tankou `[x](//x.com/en/)` ak `[x](https://x.com/en/)` pou distenge yo.

### Inyore Dosye

Pa default, yo pral tradui tout fichye ki kòmanse ak `.md` ak `.yml` nan anyè lang sous la.

Si ou vle inyore sèten fichye epi ou pa tradui yo (tankou bouyon ki pa fini), ou ka konfigirasyon li ak jaden an `ignore` .

`ignore` itilize [globset](https://docs.rs/globset/latest/globset/#syntax) sentaks ak `.gitignore` fichye a.

Pou egzanp, `_* ` nan fichye konfigirasyon ki anwo a vle di ke dosye ki kòmanse ak `_` pa pral tradui.

## Règ Tradiksyon

### Editè Tradiksyon Pa Ta Dwe Ajoute Oswa Efase Liy

Tradiksyon an ka modifye. Modifye tèks orijinal la epi tradwi machin lan ankò, modifikasyon manyèl yo nan tradiksyon an pa pral ranplase (si paragraf sa a nan tèks orijinal la pa te modifye).

> [!WARN]
> Dwe gen yon korespondans youn a youn ant liy tradiksyon an ak tèks orijinal la. Sa vle di, pa ajoute oswa efase liy lè w ap konpile tradiksyon an. Sinon, li pral lakòz konfizyon nan kachèt koreksyon tradiksyon an.

Si yon bagay ale mal, tanpri al gade [FAQ pou solisyon yo.](/i18/qa#H1)

### `YAML` Tradiksyon

Zouti liy kòmand la pral jwenn tout fichye ki fini ak `.yml` nan anyè fichye lang sous la epi tradui yo.

* Remake byen ke sifiks non fichye a dwe `.yml` (pa `.yaml` ).

Zouti a sèlman tradui valè diksyonè yo nan `.yml` , pa kle diksyonè yo.

Pou egzanp `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

pral tradui kòm `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Tradiksyon `YAML` a kapab tou modifye manyèlman (men pa ajoute oswa efase kle oswa liy nan tradiksyon an).

Ki baze sou `YAML` tradiksyon, ou ka fasilman bati solisyon entènasyonal pou divès lang pwogramasyon.

## Itilizasyon Avanse

### Sou-Anyè Tradiksyon

Osi lontan ke `.i18n/conf.yml` kreye (pa bezwen kòmanse nan modèl pwojè Demo chak fwa), `i18` ap travay byen.

Zouti liy lòd la ap jwenn `.i18n/conf.yml` konfigirasyon nan tout sous-répertoires epi tradui yo.

Pwojè ki itilize achitekti [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Anyè Enstalasyon Koutim

Li pral enstale nan `/usr/local/bin` pa default.

Si `/usr/local/bin` pa gen pèmisyon ekri, li pral enstale nan `~/.bin` .

Anviwònman anviwònman varyab `TO` ka defini anyè enstalasyon an, pou egzanp :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
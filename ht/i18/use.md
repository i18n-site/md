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

[i18n.site/payBill](//i18n.site/payBill) , ou bezwen mare yon kat kredi pou peman (pa gen okenn rechaje obligatwa, sit entènèt la pral otomatikman dedwi frè dapre itilizasyon, [gade paj dakèy la pou pri](/#price) ).

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

Apre ou fin tradui nouvo fichye a, yo pral jenere yon nouvo fichye done nan anyè sa a. Sonje ajoute `git add .` .

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

### Inyore Dosye

Pa default, yo pral tradui tout fichye ki kòmanse ak `.md` ak `.yml` nan anyè lang sous la.

Si ou vle inyore sèten fichye epi ou pa tradui yo (tankou bouyon ki pa fini), ou ka itilize konfigirasyon jaden `ignore` a.

`ignore` itilize [globset](https://docs.rs/globset/latest/globset/#syntax) sentaks ak `.gitignore` fichye a.

Pou egzanp, `_* ` nan fichye konfigirasyon ki anwo a vle di ke dosye ki kòmanse ak `_` pa pral tradui.

## Règ Tradiksyon

### Editè Tradiksyon Pa Ta Dwe Ajoute Oswa Efase Liy

Tradiksyon an ka modifye. Modifye tèks orijinal la epi tradwi machin lan ankò, modifikasyon manyèl nan tradiksyon an pa pral ranplase (si paragraf tèks orijinal la pa te modifye).

Men, tanpri sonje ke liy tradiksyon an ak tèks orijinal la dwe koresponn youn ak youn. Sa vle di, pa ajoute oswa efase liy lè w ap konpile tradiksyon an. Sinon, li pral lakòz konfizyon nan kachèt koreksyon tradiksyon an.

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
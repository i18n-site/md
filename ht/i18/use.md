# Enstale Epi Sèvi Ak

## windows Premye Enstale git bash

windows Sistèm, tanpri [klike isit la pou telechaje ak enstale `git bash`](https://git-scm.com/download/win)

Kouri operasyon ki vin apre yo nan `git bash`

## Enstale

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigure Siy Tradiksyon

Vizite [i18n.site/token](//i18n.site/token) Klike pou kopye jeton

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Kreye `~/.config/i18n.site.yml` kole kontni an kopye nan li, kontni an se jan sa a:

```
token: YOUR_API_TOKEN
```

Anplis de sa, ou bezwen [i18n.site/payBill](//i18n.site/payBill) yon kat kredi pou peman (pa gen okenn rechaje obligatwa, sit entènèt la pral otomatikman dedwi frè dapre itilizasyon, [gade paj dakèy la pou pri](/#price) ).

## Itilize

### Pwojè Demo

Tanpri gade nan pwojè Demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) pou aprann konfigirasyon tradiksyon an `i18`

Itilizatè yo nan Lachin ka klonaj [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Apre klonaj, antre nan anyè a epi `i18` pou konplete tradiksyon an.

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

Anyè `en` gen dosye yo tradui tradui, ki se jis yon egzanp epi yo ka efase.

### Kouri Tradiksyon

Antre nan anyè a epi kouri pou tradui `i18`

### Ajoute Dosye Nan Repozitwa A

Anplis tradiksyon, pwogram nan pral jenere tou dosye sa yo, tanpri ajoute yo nan depo a.

```
.i18n/hash
.i18n/cache/.gitignore
```

Pami yo, kontni an : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Sa vle di inyore tout dosye ki nan `.i18n/cache/` a (eksepte `.i18n/cache/.gitignore` ).

Si lojisyèl kontwòl vèsyon ou a pa `git` tanpri inyore li dapre konfigirasyon sa a.

## Fichye Konfigirasyon

`.i18n/conf.yml` fichye konfigirasyon zouti tradiksyon liy `i18` la

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

Nan dosye konfigirasyon an, sibòdone yo nan `fromTo`

`en` se lang sous la, `zh ja ko de fr` se lang sib tradiksyon an.

Kòd lang wè [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Pa egzanp, si ou vle tradui Chinwa an Angle, reekri liy sa a `zh: en`

Si ou vle tradui nan tout lang ki sipòte, tanpri kite vid apre `:` pa egzanp

```
i18n:
  fromTo:
    en:
```

### Inyore Dosye

Pa default, tout fichye k ap kòmanse `.md` `.yml` nan anyè lang sous la pral tradui.

Si ou vle inyore sèten dosye epi ou pa tradui yo (tankou bouyon ki pa fini), ou ka itilize konfigirasyon jaden `ignore` .

`ignore` Itilize yon sentaks ki sanble ak `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Pou egzanp, nan fichye konfigirasyon ki anwo a vle `_* ` ke dosye ki kòmanse ak `_` pa pral tradui.

## Règ Tradiksyon

### Editè Tradiksyon Pa Ta Dwe Ajoute Oswa Efase Liy

Tradiksyon an ka modifye. Modifye tèks orijinal la epi tradwi machin lan ankò, modifikasyon manyèl yo nan tradiksyon an pa pral ranplase (si paragraf sa a nan tèks orijinal la pa te modifye).

Men, tanpri sonje ke liy tradiksyon an ak tèks orijinal la dwe koresponn youn ak youn. Sa vle di, pa ajoute oswa efase liy lè w ap konpile tradiksyon an. Sinon, li pral lakòz konfizyon nan kachèt koreksyon tradiksyon an.

Si yon bagay ale mal, tanpri al gade [FAQ pou solisyon yo.](/i18/qa#H1)

### `YAML` Tradui

Zouti liy kòmand la ap jwenn tout fichye ki fini ak `.yml` nan anyè fichye lang sous la epi tradui yo.

* Remake byen ke sifiks non fichye a dwe `.yml` (pa `.yaml` ).

Zouti a sèlman tradui valè diksyonè yo nan `.yml` pa kle diksyonè yo.

pa egzanp `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

pral tradui kòm `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ou ka modifye tradiksyon `YAML` tou manyèlman (men pa ajoute oswa efase kle oswa liy nan tradiksyon an).

Dapre `YAML` Tradiksyon, ou ka fasilman bati solisyon entènasyonal pou divès langaj pwogramasyon.

## Itilizasyon Avanse

### Sou-Anyè Tradiksyon

Osi lontan ke ou `.i18n/conf.yml` (pa bezwen kòmanse nan modèl pwojè Demo chak fwa), `i18` ap travay byen.

Zouti liy kòmand la ap jwenn konfigirasyon `.i18n/conf.yml` nan tout sous-répertoires epi tradui li.

Pwojè ki itilize achitekti [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Anyè Enstalasyon Koutim

Li pral enstale nan `/usr/local/bin`

`/usr/local/bin` pa gen pèmisyon ekri, li pral enstale nan `~/.bin` .

Mete varyab anviwònman an `TO` Ou ka defini anyè enstalasyon an, pa egzanp :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

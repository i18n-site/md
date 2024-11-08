# Nghenisa Ni Ku Tirhisa

## windows Yi Sungula Ku Nghenisa git bash

windows , hi kombela [u tikhoma laha ku dawuniloda no nghenisa `git bash` ku sungula](https://git-scm.com/download/win) .

Fambisa matirhelo lama landzelaka eka `git bash` .

## Nghenisa

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Hlela Xikombiso Xa Vuhundzuluxeri

Endzela [i18n.site/token](//i18n.site/token) Click ku kopa token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Endla `~/.config/i18n.site.yml` , namarheta nhundzu leyi kopiweke eka yona, nhundzu yi hi ndlela leyi landzelaka:

```
token: YOUR_API_TOKEN
```

Ku engetela kwalaho, u fanele ku boha khadi ra xikweleti ro hakela eka [i18n.site/payBill](//i18n.site/payBill) (A ku laveki ku hakela nakambe, webusayiti yi ta susa tihakelo hi ku tisungulela hi ku ya hi matirhiselo, [vona tluka ra le kaya ku kuma nxavo](/#price) ).

## Tirhisa

### Phurojeke Ya Demo

Hi kombela u languta eka phurojeke ya demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) dyondza ku lulamisiwa ka vuhundzuluxeri bya `i18` .

Vatirhisi va le China va nga endla clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Endzhaku ko cloning, nghenisa directory u tsutsuma `i18` ku hetisa vuhundzuluxi.

### Xivumbeko Xa Xikombo

Xivumbeko xa vukorhokeri bya vuhlayiselo bya thempleyi hi lexi landzelaka

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Tifayili ta demo leti hundzuluxeriweke eka `en` directory i xikombiso ntsena naswona ti nga susiwa.

### Tsutsuma Vuhundzuluxeri

Nghenisa eka xikombo u tsutsuma `i18` ku hundzuluxela.

Ku engetela eka vuhundzuluxeri, nongonoko wu ta tlhela wu humesa folda ya `.i18n/data` , hi kombela u yi engetela eka vuhlayiselo.

Endzhaku ko hundzuluxela fayili leyintshwa, fayili leyintshwa ya datha yi ta endliwa eka xikombo lexi Tsundzuka ku engetela `git add . ` .

## Fayili Ya Vuhlanganisi

`.i18n/conf.yml` i fayili ya vuhlanganisi ya xitirhisiwa xa vuhundzuluxi bya layini ya swileriso `i18`

Leswi nga endzeni ka yona hi leswi landzelaka:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ririmi Ra Xihlovo &

Eka fayili ya vuhlanganisi, ehansi ka `fromTo` :

`en` i ririmi ra xihlovo, `zh ja ko de fr` i ririmi leri kongomisiweke eka vuhundzuluxi.

Khodi ya ririmi vona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Hi xikombiso, loko u lava ku hundzuluxela Xichayina hi Xinghezi, tsala layini leyi nakambe `zh: en` .

Loko u lava ku hundzuluxela eka tindzimi hinkwato leti seketeriwaka, hi kombela u siya xi nga ri na nchumu endzhaku ka `:` . Xikombiso

```
i18n:
  fromTo:
    en:
```

U nga lulamisa `fromTo` yo hambana ya tifayili letitsongo to / Nkombiso wu tsariwile hi ndlela leyi landzelaka :

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

Eka tafula leri ra vuhlanganisi, ririmi ra xihlovo xa vuhundzuluxeri bya khathalogi `blog` i `zh` , naswona ririmi ra xihlovo xa vuhundzuluxeri bya khathalogi `blog/your_file_name.md` i `ja` .

### Swifaniso/Swihlanganisi Swa Tindzimi to Tala

Loko ti-URL eka swifaniso na swihlanganisi eka `replace:` na `MarkDown` (na swihlawulekisi swa `src` na `href` swa embedded `HTML` ) swi lulamisiwile eka `.i18n/conf.yml` hi xirhangi lexi, khodi ya ririmi ra xihlovo eka URL yi ta siviwa hi khodi ya ririmi ra vuhundzuluxi ( [ririmi nxaxamelo wa tikhodi](/i18/LANG_CODE) ).

Hi xikombiso, xivumbeko xa wena xi le ka xiyimo lexi landzelaka:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` i xihlamusela-marito, xilotlelo i xirhangi xa URL lexi nga ta siviwa, naswona nkoka i nawu wo siviwa.

Nhlamuselo yo siva nawu `ko de uk>ru zh-TW>zh >en` laha henhla hileswaku `ko de` u tirhisa xifaniso xa khodi ya ririmi ra vona, `zh-TW` na `zh` va tirhisa xifaniso xa `zh` , `uk` va tirhisa xifaniso xa `ru` , naswona tindzimi tin’wana (ku fana na `ja` ) ti tirhisa xifaniso ya `en` hi ku tiyimisela.

Xikombiso, fayili ya xihlovo ya Xifurwa ( `fr` ) ya `MarkDown` yi le ka xiyimo lexi landzelaka :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Fayili ya Xinghezi ( `en` ) leyi hundzuluxeriweke no tumbuluxiwa hi leyi landzelaka :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Laha, `/en/` eka khodi ya ririmi ra xihlovo ti siviwa hi `/zh/` eka ririmi leri kongomisiweke.

Xiya : Ku fanele ku va na `/` emahlweni na le ndzhaku ka khodi ya ririmi ya tsalwa leri siviweke eka URL.

> [!TIP]
> Loko `- /` yi lulamisiwile eka `url:` , ku ta fambelanisiwa ntsena tindlela ta le kusuhi, kambe ti-URL leti sungulaka hi `//` a ti nge ringanisiwi.
>
> Loko swihlanganisi swin’wana swa vito ra domain swi lava ku siviwa kasi swin’wana swi nga lavi ku siviwa, u nga tirhisa swirhangi swo hambana swo fana na `[x](//x.com/en/)` na `[x](https://x.com/en/)` ku swi hambanisa.

### Honisa Fayili

Hi ku tiyimisela, tifayela hinkwato leti sungulaka hi `.md` na `.yml` eka xikombo xa ririmi ra xihlovo ti ta hundzuluxeriwa.

Loko u lava ku honisa tifayela to karhi naswona u nga ti hundzuluxeli (ku fana na switshuriwa leswi nga hetiwangiki), u nga swi lulamisa hi nsimu ya `ignore` .

`ignore` yi tirhisa xivumbeko lexi [globset](https://docs.rs/globset/latest/globset/#syntax) xa `.gitignore`

Xikombiso, `_* ` eka fayili ya vuhlanganisi leyi nga laha henhla swi vula leswaku tifayela leti sungulaka hi `_` a ti nge hundzuluxeriwi.

## Milawu Ya Vuhundzuluxeri

### Vahleri Va Vuhundzuluxeri a Va Fanelanga Ku Engetela Kumbe Ku Susa Mitila

Vuhundzuluxeri bya kona bya hleriwa. Cinca tsalwa ro sungula ivi u ri hundzuluxela hi muchini nakambe, ku cinca loku endliweke hi voko eka vuhundzuluxeri a ku nge tsariwi ehenhla (loko ndzimana leyi ya tsalwa ro sungula yi nga cinciwanga).

> [!WARN]
> Ku fanele ku va ni ku yelana ka munhu hi xiyexe exikarhi ka mitila ya vuhundzuluxeri ni tsalwa ro sungula. Hi leswaku, u nga engeteli kumbe ku susa mitila loko u hlengeleta vuhundzuluxeri. Handle ka sweswo, swi ta vanga mpfilumpfilu eka cache yo hlela vuhundzuluxeri.

Loko ku ri na leswi nga famba kahle, hi kombela u languta eka [FAQ ku kuma swintshuxo.](/i18/qa#H1)

### `YAML` Vuhundzuluxeri

Xitirhisiwa xa layini ya swileriso xi ta kuma tifayela hinkwato leti helelaka hi `.yml` eka xikombo xa tifayela ta ririmi ra xihlovo ivi xi ti hundzuluxela.

* Xiya leswaku xilandzi xa vito ra fayili xi fanele ku va `.yml` (hayi `.yaml` ).

Xitirhisiwa xi hundzuluxela ntsena mimpimo ya xihlamusela-marito eka `.yml` , ku nga ri swilotlelo swa xihlamusela-marito.

Xikombiso `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

yi ta hundzuluxeriwa tanihi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Vuhundzuluxi bya `YAML` byi nga tlhela byi cinciwa hi voko (kambe u nga engeteli kumbe ku susa swilotlelo kumbe milayeni eka vuhundzuluxeri).

Hi ku ya hi vuhundzuluxeri `YAML` , u nga aka swintshuxo swa matiko ya misava hi ku olova eka tindzimi to hambana ta minongonoko.

## Ku Tirhisiwa Ka Xiyimo Xa Le Henhla

### Xikombo-Ntsongo Xa Vuhundzuluxi

Loko ntsena `.i18n/conf.yml` yi endliwile (a swi bohi ku sungula eka xifaniso xa phurojeke ya demo nkarhi wun’wana na wun’wana), `i18` yi ta tirha kahle.

Xitirhisiwa xa layini ya swileriso xi ta kuma `.i18n/conf.yml` wa swivumbeko eka tidayirekitara letitsongo hinkwato ivi xi swi hundzuluxela.

Tiphurojeke leti tirhisaka [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Xikombo Xa Ku Nghenisa Xa Ntolovelo

Yi ta nghenisiwa eka `/usr/local/bin` hi ku tiyimisela.

Loko `/usr/local/bin` yi nga ri na mpfumelelo wo tsala yi ta nghenisiwa eka `~/.bin` .

Ku veka xihlawulekisi xa mbango `TO` swi nga hlamusela xikombo xa ku nghenisa, xikombiso :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
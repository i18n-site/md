# Faka Kwaye Usebenzise

## IiWindows Kuqala Faka I-Git bash

windows , nceda [ucofe apha ukukhuphela kwaye ufake `git bash` kuqala](https://git-scm.com/download/win) .

Yenza imisebenzi elandelayo kwi `git bash` .

## Faka

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Qwalasela Uphawu Loguqulelo

Ndwendwela [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Yenza `~/.config/i18n.site.yml` , uncamathisele umxholo okhutshelweyo kuyo, umxholo umi ngolu hlobo lulandelayo:

```
token: YOUR_API_TOKEN
```

Ukongeza, kufuneka ubophe ikhadi lekhredithi yentlawulo [i18n.site/payBill](//i18n.site/payBill) (Akukho ntlawulo efunekayo, i-website iya kukhupha iintlawulo ngokuzenzekelayo ngokusetyenziswa, [jonga iphepha lasekhaya ngexabiso](/#price) ).

## Sebenzisa

### Iprojekthi Yedemo

Nceda ujonge iprojekthi yedemo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ufunde ubumbeko lwe `i18` translation.

Abasebenzisi baseTshayina banokufana [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Emva kokudibanisa, ngenisa uvimba weefayili kwaye usebenzise `i18` ukugqiba uguqulelo.

### Ubume Boluhlu

Ulwakhiwo lwesikhokelo sogcino lwethemplethi lulolu hlobo lulandelayo

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Iifayile zedemo eziguqulelweyo kulawulo lwe `en` ngumzekelo nje kwaye zinokucinywa.

### Qhuba Uguqulelo

Ngenisa uvimba weefayili kwaye usebenzise `i18` ukuguqulela.

Ukongeza kwinguqulelo, inkqubo iya kuvelisa kwakhona ifolda `.i18n/data` , nceda uyifake kwindawo yokugcina.

Emva kokuguqulela ifayile entsha, ifayile entsha yedatha iya kuveliswa kolu luhlu Khumbula ukufaka `git add . ` .

## Ifayile Yoqwalaselo

`.i18n/conf.yml` yifayile yoqwalaselo yesixhobo sokuguqulela somgca womyalelo `i18`

Umxholo umi ngolu hlobo lulandelayo:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Ulwimi lweNguqulelo &

Kwifayile yoqwalaselo, ongaphantsi kwe `fromTo` :

`en` lulwimi lwentsusa, `zh ja ko de fr` lulwimi ekujoliswe kulo kuguqulelo.

Ikhowudi yolwimi bona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Umzekelo, ukuba ufuna ukuguqulela isiTshayina kwisiNgesi, phinda ubhale lo mgca `zh: en` .

Ukuba ufuna ukuguqulela kuzo zonke iilwimi ezixhaswayo, nceda ushiye kungenanto emva kwe `:` . umzekelo

```
i18n:
  fromTo:
    en:
```

Ungaqwalasela okwahlukileyo `fromTo` kwiifayile ezingaphantsi / Umboniso ubhalwe ngolu hlobo lulandelayo :

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

Kule theyibhile yoqwalaselo, ulwimi lomthombo lwekhathalogu `blog` inguqulelo yi `zh` , kunye nolwimi lwentsusa lwekhathalogu `blog/your_file_name.md` inguqulelo sisi- `ja` .

### Imifanekiso/Amakhonkco Eelwimi Ezininzi

Xa ii-URL kwimifanekiso kunye namakhonkco kwi `replace:` kunye ne `MarkDown` (kunye ne- `src` kunye ne `href` iimpawu ze-embedded `HTML` ) zicwangciswe kwi `.i18n/conf.yml` kunye nesi simaphambili, ikhowudi yolwimi lwemvelaphi kwi-URL iya kutshintshwa yikhowudi yolwimi yoguqulelo ( [ulwimi uluhlu lwekhowudi](/i18/LANG_CODE) ).

Umzekelo, uqwalaselo lwakho luhamba ngolu hlobo lulandelayo:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` sisichazi-magama, isitshixo sisimaphambili se-URL esiza kutshintshwa, kwaye ixabiso ngumgaqo wokubuyisela.

Intsingiselo yokutshintsha umgaqo ongu `ko de uk>ru zh-TW>zh >en` ngasentla kukuba, `ko de` usebenzisa umfanekiso wekhowudi yolwimi lwakhe, `zh-TW` no `zh` usebenzisa umfanekiso ka `zh` , `uk` usebenzisa umfanekiso ka `ru` , nezinye iilwimi (ezifana no `ja` ) sebenzisa umfanekiso. ye `en` ngokungagqibekanga.

Umzekelo, ifayile yemvelaphi yesiFrentshi ( `fr` ) ka `MarkDown` imi ngolu hlobo lulandelayo :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Ifayile yesiNgesi eguqulelwe kunye neveliswe ( `en` ) imi ngolu hlobo lulandelayo :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Apha, `/en/` kwikhowudi yolwimi lwentsusa zitshintshwa ngo `/zh/` kulwimi ekujoliswe kulo.

Qaphela : Kufuneka kubekho `/` phambi nasemva kwekhowudi yolwimi yokubhaliweyo endaweni ye-URL.

> [!TIP]
> Ukuba `- /` iqwalaselwe ngo `url:` , kuphela iindlela ezizalanayo ziyakudityaniswa, kodwa ii-URL eziqala ngo `//` aziyi kuthelekiswa.
>
> Ukuba amanye amakhonkco egama lesizinda afuna ukutshintshwa kwaye amanye akafuni ukutshintshwa, ungasebenzisa izimaphambili ezahlukeneyo ezifana no `[x](//x.com/en/)` no `[x](https://x.com/en/)` ukuzohlula.

### Ungayihoyi Ifayile

Ngokungagqibekanga, zonke iifayile eziqala ngo `.md` kunye no `.yml` kulawulo lolwimi lwemvelaphi ziya kuguqulelwa.

Ukuba ufuna ukuzihoya iifayile ezithile kwaye ungaziguquleli (ezifana neidrafti ezingagqitywanga), ungayiqwalasela ngo- `ignore` umhlaba.

`ignore` usebenzisa `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Umzekelo, `_* ` kwifayile yoqwalaselo engentla ithetha ukuba iifayile eziqala ngo `_` aziyi kuguqulelwa.

## Imithetho Yokuguqulela

### Abahleli Benguqulelo Akufuneki Bongeze Okanye Bacime Imigca

Inguqulelo iyahlelwa. Guqula isicatshulwa soqobo kwaye uguqulelwe ngomatshini kwakhona, ukuguqulwa kwesandla kwinguqulelo akusayi kubhalwa ngaphezulu (ukuba lo mhlathi wombhalo wokuqala awulungiswanga).

> [!WARN]
> Kufuneka kubekho unxibelelwano phakathi kwemigca yenguqulelo nombhalo wokuqala. Oko kukuthi, musa ukongeza okanye ukucima imigca xa uqulunqa inguqulelo. Ngaphandle koko, iya kubangela ukubhideka kwi-cache yokuhlela inguqulelo.

Ukuba kukho into engahambi kakuhle, nceda ubhekisele kwi [-FAQ ngezisombululo.](/i18/qa#H1)

### `YAML` Iinguqulelo

Isixhobo somgca womyalelo siya kufumana zonke iifayile eziphela ngo `.yml` kuluhlu lwefayile yemvelaphi yolwimi kwaye uziguqulele.

* Qaphela ukuba isimamva segama lefayile kufuneka sibe `.yml` (hayi `.yaml` ).

Isixhobo siguqulela kuphela ixabiso lesichazi-magama ngo `.yml` , hayi izitshixo zesichazi-magama.

Umzekelo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

iza kuguqulelwa njengo `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Ukuguqulelwa kwe `YAML` kunokuguqulwa ngesandla (kodwa ungafaki okanye ucime izitshixo okanye imigca kwinguqulelo).

Ngokusekwe kuguqulelo `YAML` , unokwakha ngokulula izisombululo zamazwe ngamazwe kwiilwimi ezahlukeneyo zokucwangcisa.

## Ukusetyenziswa Okuphezulu

### Uluhlu Olungaphantsi Lwenguqulelo

Ngethuba nje `.i18n/conf.yml` yenziwe (akukho mfuneko yokuqalisa kwi-template yeprojekthi yedemo rhoqo), `i18` iya kusebenza kakuhle.

Isixhobo somgca womyalelo siya kufumana ulungelelwaniso `.i18n/conf.yml` kuwo onke ama-subdirectories kwaye uwaguqulele.

Iiprojekthi ezisebenzisa i [monorepo](//monorepo.tools) architecture zinokwahlula iifayile zolwimi zibe ngabalawuli abangaphantsi.

![](https://p.3ti.site/1719910016.avif)

### Uluhlu Lofakelo Oluqhelekileyo

Izakufakwa ku `/usr/local/bin` ngokungagqibekanga.

Ukuba `/usr/local/bin` ayinayo imvume yokubhala iya kufakwa kwi `~/.bin` .

Ukucwangcisa imo eguquguqukayo `TO` kunokuchaza uvimba wofakelo, umzekelo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
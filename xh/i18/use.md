# Faka Kwaye Usebenzise

## windows Kuqala Faka I-Git bash

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

[i18n.site/payBill](//i18n.site/payBill) , kufuneka ubophe ikhadi lekhredithi kwintlawulo (akukho ntlawulo efunekayo, i-website iya kukhupha iifizi ngokuzenzekelayo ngokusetyenziswa, [jonga iphepha lasekhaya ngexabiso](/#price) ).

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

### Ulwimi Lwentsusa &

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

### Ungayihoyi Ifayile

Ngokungagqibekanga, zonke iifayile eziqala ngo `.md` kunye no `.yml` kulawulo lolwimi lwemvelaphi ziya kuguqulelwa.

Ukuba ufuna ukuzihoya iifayile ezithile kwaye ungaziguquleli (ezifana neidrafti ezingagqitywanga), ungasebenzisa u `ignore` ubumbeko bomhlaba.

`ignore` usebenzisa `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Umzekelo, `_* ` kwifayile yoqwalaselo engentla ithetha ukuba iifayile eziqala ngo `_` aziyi kuguqulelwa.

## Imithetho Yokuguqulela

### Abahleli Benguqulelo Akufuneki Bongeze Okanye Bacime Imigca

Inguqulelo iyahlelwa. Guqula isicatshulwa soqobo kwaye uguqulelwe ngomatshini kwakhona, ukuguqulwa kwesandla kwinguqulelo akusayi kubhalwa ngaphezulu (ukuba lo mhlathi wombhalo wokuqala awulungiswanga).

> [!WARN]
> Imigca yenguqulelo kunye nombhalo wokuqala kufuneka ungqamane omnye nomnye. Oko kukuthi, musa ukongeza okanye ukucima imigca xa uqulunqa inguqulelo. Ngaphandle koko, iya kubangela ukubhideka kwi-cache yokuhlela inguqulelo.

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

### Uvimba Weefayili Wenguqulelo

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
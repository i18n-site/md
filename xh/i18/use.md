# Faka Kwaye Usebenzise

## IiWindows Kuqala Faka I-Git bash

windows , nceda [ucofe apha ukuze ukhuphele kwaye ufake kuqala `git bash`](https://git-scm.com/download/win)

Yenza imisebenzi elandelayo kwi `git bash`

## Faka

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Qwalasela Uphawu Loguqulelo

Ndwendwela [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Yenza `~/.config/i18n.site.yml` Ncamathisela umxholo okhutshelweyo kuyo, umxholo umi ngolu hlobo lulandelayo:

```
token: YOUR_API_TOKEN
```

Ukongezelela, kufuneka [i18n.site/payBill](//i18n.site/payBill) ikhadi lekhredithi kwintlawulo (akukho ntlawulo efunekayo, i-website iya kukhupha ngokuzenzekelayo imirhumo ngokusetyenziswa, [jonga iphepha lasekhaya ngexabiso](/#price) ).

## Sebenzisa

### Iprojekthi Yedemo

Nceda ujonge iprojekthi [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ukuze ufunde uqwalaselo loguqulo `i18`

Abasebenzisi baseTshayina banokufana [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Emva kokudibanisa, ngenisa uluhlu kwaye `i18` ukugqiba uguqulelo.

### Ulwakhiwo Lukavimba Weefayili

Ulwakhiwo lwesikhokelo sogcino lwethemplethi lulolu hlobo lulandelayo

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

I- `en`

### Qhuba Uguqulelo

Ngenisa uvimba weefayili kwaye ubaleke `i18`

### Yongeza Iifayile Kwindawo Yokugcina

Ukongeza kwinguqulelo, inkqubo iya kuvelisa ezi fayile zilandelayo, nceda uzifake kwindawo yokugcina.

```
.i18n/hash
.i18n/cache/.gitignore
```

Phakathi kwazo, umxholo : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Oku kuthetha ukuba ungazihoyi zonke iifayile `.i18n/cache/` (ngaphandle kwe `.i18n/cache/.gitignore` ).

Ukuba isoftware yolawulo lwakho ayilulo `git` nceda ungayihoyi ngokwalo qwalaselo.

## Ifayile Yoqwalaselo

`.i18n/conf.yml` Yifayile yoqwalaselo yesixhobo sokuguqulela umgca `i18`

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

Kwifayile yoqwalaselo, abaphantsi be `fromTo`

`en` lulwimi lwentsusa, `zh ja ko de fr` lulwimi ekujoliswe kulo loguqulelo.

Ikhowudi yolwimi bona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Umzekelo, ukuba ufuna ukuguqulela isiTshayina kwisiNgesi, phinda ubhale lo mgca `zh: en`

Ukuba ufuna ukuguqulela kuzo zonke iilwimi ezixhaswayo, nceda ushiye kungenanto emva `:` umzekelo

```
i18n:
  fromTo:
    en:
```

### Ungayihoyi Ifayile

Ngokungagqibekanga, zonke iifayile `.yml` nge `.md`

Ukuba ufuna ukuzihoya iifayile ezithile kwaye ungaziguquleli (ezifana neidrafti ezingagqitywanga), ungasebenzisa uqwalaselo lomhlaba `ignore`

`ignore` isivakalisi esifana ne `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Umzekelo, kule fayile yoqwalaselo `_* ` ithetha ukuba iifayile eziqala ngo `_` aziyi kuguqulelwa.

## Imithetho Yokuguqulela

### Abahleli Benguqulelo Akufuneki Bongeze Okanye Bacime Imigca

Inguqulelo iyahlelwa. Guqula umbhalo wentsusa kwaye uguqulelwe ngoomatshini kwakhona, ukuguqulwa kwesandla kwinguqulelo akusayi kubhalwa ngaphezulu (ukuba lo mhlathi wombhalo wokuqala awulungiswanga).

Kodwa nceda uqaphele ukuba imigca yenguqulelo kunye nombhalo wokuqala kufuneka uhambelane nomnye. Oko kukuthi, musa ukongeza okanye ukucima imigca xa uqulunqa inguqulelo. Kungenjalo, iya kubangela ukubhideka kwicache yokuhlela inguqulelo.

Ukuba kukho into engahambi kakuhle, nceda ubhekisele kwi [-FAQ ngezisombululo.](/i18/qa#H1)

### Guqulela `YAML`

Isixhobo somgca womyalelo siya kufumana zonke iifayile `.yml` kuluhlu lwefayile yemvelaphi kwaye uziguqulele.

* Qaphela ukuba isimamva segama lefayile `.yaml` sibe `.yml`

Isixhobo siguqulela kuphela ixabiso lesichazi-magama `.yml` , hayi izitshixo zesichazi-magama.

umzekelo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

iya kuguqulelwa njenge `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Uguqulo lwe `YAML`

Ngokusekwe `YAML` , unokwakha ngokulula izisombululo zamazwe ngamazwe kwiilwimi ezahlukeneyo zokucwangcisa

## Ukusetyenziswa Okuphezulu

### Uvimba Weefayili Wenguqulelo

Logama usenza `.i18n/conf.yml` (akukho mfuneko yokuba uqalise kwitemplate yeprojekthi ngalo lonke ixesha), `i18` iya kusebenza kakuhle.

Isixhobo somgca womyalelo siya kufumana `.i18n/conf.yml` kuwo onke amacandelo angaphantsi kwaye uyiguqulele.

Iiprojekthi ezisebenzisa i [monorepo](//monorepo.tools) architecture zinokwahlula iifayile zolwimi zibe ngabalawuli abangaphantsi.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Uluhlu Lofakelo Oluqhelekileyo

Izakufakwa kwi `/usr/local/bin`

`/usr/local/bin` ayinamvume yokubhala `~/.bin`

Cwangcisa izinto eziguquguqukayo : `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

# Ku Rakib Oo Isticmaal

## Daaqadaha Marka Hore Rakib git bash

windows , fadlan [halkan guji si aad marka hore u soo `git bash`](https://git-scm.com/download/win) .

Ku socodsii hawlgallada xiga gudaha `git bash`

## Ku Rakib

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Habee Calaamada Turjumaada

Booqo [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Samee `~/.config/i18n.site.yml` ku dheji nuxurka la koobiyay, nuxurku waa sida soo socota

```
token: YOUR_API_TOKEN
```

Intaa waxaa dheer, waxaad u baahan tahay [i18n.site/payBill](//i18n.site/payBill) ku xidho kaarka deynta lacag bixinta (wax lacag ah looma baahna, website-ka ayaa si toos ah uga jari doona khidmadaha sida isticmaalka, [eeg bogga hore ee qiimaha](/#price) ).

## Isticmaal

### Mashruuca Demo

Fadlan tixraac mashruuca demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) aad u barato habaynta tarjumaada `i18`

Isticmaalayaasha Shiinaha way xidhi karaan [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ka dib cloning, geli tusaha oo `i18` si aad u dhammaystirto tarjumaada.

### Qaab Dhismeedka Hagaha

Qaab dhismeedka hagaha bakhaarka template waa sida soo socota

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Hagaha `en`

### Orod Turjumaada

Geli tusaha oo orod si aad u turjunto `i18`

### Kudar Faylasha Kaydka

Turjumaada ka sokow, barnaamijku waxa kale oo uu soo saari doonaa faylasha soo socda, fadlan ku dar meelaha kaydka ah.

```
.i18n/hash
.i18n/cache/.gitignore
```

: ka mid ah, nuxurka `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Tani waxay la macno tahay iska illow dhammaan faylasha ku jira `.i18n/cache/` (marka laga reebo `.i18n/cache/.gitignore` ).

Haddii software-ka kontoroolka noocaagu aanu ahayn `git` fadlan iska illow si waafaqsan qaabayntan.

## Faylka Qaabaynta

`.i18n/conf.yml` faylka qaabeynta ee aaladda tarjumaadda `i18`

Nuxurku waa sida soo socota:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Luuqadda Laga Soo Xigtay &

Faylka qaabeynta, maamulayaasha hoos yimaada `fromTo`

waa luqadda asalka `en` , `zh ja ko de fr` waa luqadda la tarjumo.

Koodhka luqadda eeg [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Tusaale ahaan, haddii aad rabto inaad Shiinees u tarjunto Ingiriis, dib u qor khadkan `zh: en`

Haddii aad rabto in aad u turjunto dhammaan luqadaha la taageeray, fadlan ka tag maran ka dib `:` tusaale ahaan

```
i18n:
  fromTo:
    en:
```

### Iska Dhaaf Faylka

Sida caadiga ah, dhammaan faylasha ka bilaabma `.md` iyo `.yml` ku jira hagaha luqadda waa la tarjumi doonaa

Haddii aad rabto in aad iska indho tirto faylal gaar ah oo aanad turjun (sida qabyo-qoraalka aan dhammayn), waxaad isticmaali kartaa qaabaynta `ignore` .

`ignore` adeegsadaa eray isku mid ah `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Tusaale ahaan, faylka qaabeynta ee kore `_* ` ka dhigan tahay in faylasha ku bilaabma `_` aan la tarjumi doonin.

## Xeerarka Tarjumaada

### Tafatirayaasha Turjumaada Waa Inaysan Ku Darin Ama Tirtirin Khadadka

Turjumaada waa la tafatiri karaa Wax ka beddel qoraalka asalka ah oo mashiinka-tarjum mar kale, wax ka beddelka buug-gacmeedka ee tarjumaada dib looma qori doono (haddii cutubkan qoraalka asalka ah aan wax laga beddelin).

Laakin fadlan ogow in xarriiqda tarjumaada iyo qoraalka asalka ahi waa in ay u dhigmaan mid iyo mid. Taasi waa, ha ku darin hana tirtirin khadadka marka aad ururinayso tarjumaada. Haddii kale, waxay keeni doontaa jahawareer ku jira kaydka tafatirka tarjumaada.

Haddii ay wax qaldamaan, fadlan tixraac [FAQ si aad u xalliso.](/i18/qa#H1)

### `Yaml`

Qalabka khadka talisku wuxuu heli doonaa dhammaan faylasha ku dhamaanaya `.yml`

* Ogsoonow in magaca faylka uu ku `.yml` (ma aha `.yaml` ).

Qalabku waxa uu tarjumaa qiyamka qaamuuska gudaha `.yml` ee maaha furayaasha qaamuuska.

tusaale ahaan `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

waxaa loo turjumayaa `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Turjumaada `YAML` sidoo kale gacanta ayaa lagu beddeli karaa

Iyada oo `YAML` saleysan Turjumaada, waxaad si fudud u dhisi kartaa xalal caalami ah oo loogu talagalay luqadaha barnaamijyada kala duwan.

## Isticmaalka Horumarsan

### Hage-Hoosaadka Turjumaada

Ilaa iyo inta aad `.i18n/conf.yml` (looma baahna in laga bilaabo qaabka mashruuca demo mar kasta), `i18` si fiican ayuu u shaqayn doonaa.

Qalabka khadka amarku wuxuu ka heli doonaa qaabeynta `.i18n/conf.yml`

Mashruucyada adeegsada qaab-dhismeedka [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Hagaha Rakibaadda Gaarka Ah

Waxaa lagu rakibi doonaa si default `/usr/local/bin` .

Haddii `/usr/local/bin` haysan ogolaansho qoraal ah waxa lagu rakibi doonaa `~/.bin` .

Deji doorsoomayaasha : `TO`

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

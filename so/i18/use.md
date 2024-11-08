# Ku Rakib Oo Isticmaal

## Daaqadaha Marka Hore Rakib git bash

windows , fadlan halkan [guji si aad u soo dejiso oo u rakibto `git bash` marka hore](https://git-scm.com/download/win) .

Ku socodsii hawlgallada xiga `git bash` .

## Ku Rakib

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Habee Calaamada Turjumaada

Booqo [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Samee `~/.config/i18n.site.yml` , ku dheji nuxurka la koobiyay, nuxurku waa sida soo socota:

```
token: YOUR_API_TOKEN
```

Intaa waxaa dheer [,](/#price) waxaad u baahan tahay inaad ku xidho kaarka deynta gudaha [i18n.site/payBill](//i18n.site/payBill)

## Isticmaal

### Mashruuca Demo

Fadlan tixraac mashruuca demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) aad u barato habaynta `i18` .

Isticmaalayaasha Shiinaha way xidhi karaan [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Kadib cloning, geli hagaha oo orod `i18` si aad u dhamaystirto tarjumaada.

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

Faylasha demo ee la turjumay ee ku jira hagaha `en` waa tusaale uun waana la tirtiri karaa.

### Orod Turjumaada

Geli tusaha oo orod `i18` si aad u turjunto.

Marka lagu daro tarjumaada, barnaamijku wuxuu sidoo kale soo saari doonaa galka `.i18n/data` , fadlan ku dar kaydka.

Kadib tarjumaada faylka cusub `git add . ` fayl xog cusub ayaa laga soo saari doonaa tusahan.

## Faylka Qaabaynta

`.i18n/conf.yml` waa faylka qaabeynta ee `i18` aaladda tarjumaadda khadka taliska

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

Faylka qaabeynta, maamulaha `fromTo` :

`en` waa luqadda isha, `zh ja ko de fr` waa luqadda bartilmaameedka ee tarjumaadda.

Koodhka luqadda eeg [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Tusaale ahaan, haddii aad rabto inaad Shiinees u tarjunto Ingiriis, dib u qor khadkan `zh: en` .

Haddii aad rabto inaad u turjunto dhammaan luqadaha la taageeray, fadlan bann ku dhaaf `:` ka dib. tusaale ahaan

```
i18n:
  fromTo:
    en:
```

Waxaad u habayn : `fromTo` kala duwan faylal-hoosaadyo kala / .

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

Jadwalka qaabeynta, luqadda isha `ja` tarjumaada buugaagta `blog` waa `zh` , luqadda isha ee turjumaada `blog/your_file_name.md` .

### Sawirro/Links-Luqado Badan

Marka URL-yada sawirada iyo isku xidhka `replace:` iyo `MarkDown` (iyo `src` iyo `href` sifaadka `HTML` ) lagu habeeyo `.i18n/conf.yml` oo leh horgalahan, koodhka afka isha ee URL-ka waxa lagu bedeli doonaa koodka luqadda ee [tarjumaada liiska code](/i18/LANG_CODE) ).

Tusaale ahaan, qaabayntaadu waa sida soo socota:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` waa qaamuus, furuhu waa horgalaha URL ee la beddelayo, qiimuhuna waa xeerka beddelka.

Macnaha beddelka qaanuunka `ko de uk>ru zh-TW>zh >en` ee sare waa in `ko de` ay adeegsadaan sawirka koodka afkooda, `zh-TW` iyo `zh` waxay adeegsadaan sawirka `zh` , `uk` waxay adeegsadaan sawirka `ru` , luqadaha kale (sida `ja` ) waxay adeegsadaan sawirka ee `en` sida caadiga ah.

Tusaale ahaan, Faylka isha ee Faransiiska ( `fr` ) ee `MarkDown` waa sida soo socota :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Faylka Ingiriisi ee la `en` oo la soo saaray waa sida soo socota :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Halkan, `/en/` ee koodhka luqadda isha waxaa lagu bedelay `/zh/` luqadda bartilmaameedka ah.

Xusuusin : Waa inuu jiraa `/` ka hor iyo ka dib lambarka luqadda qoraalka la beddelay ee URL.

> [!TIP]
> Haddii `- /` lagu habeeyo `url:` , kaliya wadooyin qaraabo ah ayaa la isbarbar dhigayaa, laakiin URL-yada ka bilaabma `//` lama mid noqon doono.
>
> Haddii qaar ka mid ah xiriiriyeyaasha magaca domainka ay rabaan in la beddelo qaarna aysan rabin in la beddelo, waxaad isticmaali kartaa horgalayaasha kala duwan sida `[x](//x.com/en/)` iyo `[x](https://x.com/en/)` si aad u kala soocdo.

### Iska Dhaaf Faylka

Sida caadiga ah, dhammaan faylasha ka bilaabma `.md` iyo `.yml` ee ku jira tusaha luqadda isha waa la tarjumi doonaa.

Haddii aad rabto inaad iska indhotirto faylal gaar ah oo aadan turjumin (sida qabyo-qoraalka aan dhammayn), waxaad ku habeyn kartaa goobta `ignore` .

`ignore` wuxuu isticmaalaa isku mid [globset](https://docs.rs/globset/latest/globset/#syntax) sida faylka `.gitignore` .

Tusaale ahaan, `_* ` ee faylka qaabeynta sare waxay ka dhigan tahay in faylasha ka bilaabma `_` aan la tarjumi doonin.

## Xeerarka Tarjumaada

### Tafatirayaasha Turjumaada Waa Inaysan Ku Darin Ama Tirtirin Khadadka

Turjumaada waa la tafatiri karaa Wax ka beddel qoraalka asalka ah oo mashiinka-turjumi mar kale, wax ka beddelka buug-gacmeedka ee tarjumaada dib looma qori doono (haddii cutubkan qoraalka asalka ah aan wax laga beddelin).

> [!WARN]
> Waa in uu jiro xiriir hal-hal ah oo u dhexeeya xariiqyada tarjumaada iyo qoraalka asalka ah. Taasi waa, ha ku darin hana tirtirin khadadka marka aad ururinayso tarjumaada. Haddii kale, waxay keeni doontaa jahawareer ku jira kaydka tafatirka tarjumaada.

Haddii ay wax qaldamaan, fadlan tixraac [FAQ si aad u xalliso.](/i18/qa#H1)

### `YAML` Tarjumaad

Qalabka khadka talisku wuxuu heli doonaa dhammaan faylasha ku dhammaanaya `.yml` ee tusaha faylka luqadda isha oo turjumi doona.

* Ogsoonow in lifaaqa faylalka magaciisu yahay `.yml` (ma aha `.yaml` ).

Qalabku wuxuu kaliya u turjumayaa qiyamka qaamuuska `.yml` , ma aha furayaasha qaamuuska.

Tusaale ahaan `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

waxaa loo turjumi doonaa `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Turjumaada `YAML` sidoo kale gacanta ayaa wax looga beddeli karaa (laakin ha ku darin ama ha tirtirin furayaasha ama khadadka tarjumaada).

Iyada oo ku saleysan turjumaada `YAML` , waxaad si fudud u dhisi kartaa xalal caalami ah oo loogu talagalay luqadaha barnaamijyada kala duwan.

## Isticmaalka Horumarsan

### Hage-Hoosaadka Turjumaada

Ilaa iyo inta `.i18n/conf.yml` la abuuray (looma baahna in laga bilaabo qaabka mashruuca demo mar kasta), `i18` si fiican ayuu u shaqayn doonaa.

Qalabka khadka talisku wuxuu ka heli doonaa qaabeynta `.i18n/conf.yml` dhammaan haga-hoosaadyada oo turjumi doona.

Mashruucyada adeegsada qaab-dhismeedka [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Hagaha Rakibaadda Gaarka Ah

Waxaa lagu rakibi doonaa `/usr/local/bin` si caadi ah.

Haddii `/usr/local/bin` uusan haysan ogolaansho qoraal ah waxaa lagu rakibi doonaa `~/.bin` .

Dejinta doorsoomaha deegaanka `TO` waxay qeexi kartaa hagaha rakibaadda, tusaale ahaan :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
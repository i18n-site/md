# Kenya Le Ho Sebelisa

## windows E Qala Ho Kenya git bash

windows , ka kopo [tlanya mona ho jarolla le ho kenya `git bash` pele](https://git-scm.com/download/win) .

Etsa ts'ebetso e latelang ho `git bash` .

## Kenya

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Lokisa Tokene Ea Phetolelo

Etela [i18n.site/token](//i18n.site/token) Tobetsa ho kopitsa letšoao

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Theha `~/.config/i18n.site.yml` , beha litaba tse kopilitsoeng ho eona, litaba li tjena:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , o hloka ho tlama karete ea mokoloto bakeng sa tefo (ha ho hlokahale recharge, sebaka sa marang-rang se tla ntša litefiso ho latela ts'ebeliso, [sheba leqephe la lehae bakeng sa litheko](/#price) ).

## Tshebediso

### Morero Oa Demo

Ka kopo sheba morero oa demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) ithuta ho hlophisa `i18` phetolelo.

Basebelisi ba Chaena ba ka kopanya [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ka mor'a ho kopanya, kenya bukana 'me u tsamaise `i18` ho qetela phetolelo.

### Sebopeho Sa Bukana

Sebopeho sa buka ea polokelo ea template se tjena

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Lifaele tsa demo tse fetoletsoeng bukeng ea `en` ke mohlala feela 'me li ka hlakoloa.

### Etsa Phetolelo

Kenya bukana 'me u tsamaise `i18` ho fetolela.

Ntle le phetolelo, lenaneo le tla hlahisa foldara ea `.i18n/data` , ka kopo e kenye sebakeng sa polokelo.

Kamora ho fetolela faele e ncha, faele e ncha ea data e tla hlahisoa bukeng ena Hopola ho kenyelletsa `git add .` .

## Faele Ea Tlhophiso

`.i18n/conf.yml` ke faele ea tlhophiso ea sesebelisoa sa `i18` sa ho fetolela mola oa taelo

Litaba ke tse latelang:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Puo Ea Mohloli &

Ho faele ea tlhophiso, e ka tlase ho `fromTo` :

`en` ke puo ya motswedi, `zh ja ko de fr` ke puo e e fetolelwang mo thanolong.

Khoutu ea puo bona [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Mohlala, haeba u batla ho fetolela Sechaena ho Sekhooa, ngola mola ona bocha `zh: en` .

Haeba u batla ho fetolela lipuong tsohle tse tšehetsoeng, ka kopo tlohela letho ka mor'a `:` . ka mohlala

```
i18n:
  fromTo:
    en:
```

O ka hlophisa `fromTo` e fapaneng bakeng sa li-subdirectories tse / Pontšo e ngotsoe ka tsela e latelang :

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

Lethathamong lena la litlhophiso, puo ea mohloli oa lethathamo la phetolelo `blog` ke `zh` , 'me puo ea mohloli oa phetolelo ea lethathamo `blog/your_file_name.md` ke `ja` .

### Hlokomoloha Faele

Ka linako tsohle, lifaele tsohle tse qalang ka `.md` le `.yml` bukeng ea puo ea mohloli li tla fetoleloa.

Haeba u batla ho hlokomoloha lifaele tse itseng 'me u se ke ua li fetolela (joalo ka lingoloa tse sa phethoang), u ka sebelisa `ignore` sebopeho sa lebala.

`ignore` e sebelisa mantsoe a [globset](https://docs.rs/globset/latest/globset/#syntax) le a faele e `.gitignore` .

Ka mohlala, `_* ` faeleng ea tlhophiso e ka holimo e bolela hore lifaele tse qalang ka `_` li ke ke tsa fetoleloa.

## Melao Ea Phetolelo

### Bahlophisi Ba Liphetolelo Ha Baa Lokela Ho Kenya Kapa Ho Hlakola Mela

Phetolelo e ka fetoloa. Fetosa mongolo oa mantlha, 'me u o fetolele ka mochini hape, liphetoho tse fetoletsoeng ka letsoho li ke ke tsa hlakoloa (haeba serapa sena sa mongolo oa mantlha se sa fetoloa).

Empa ka kopo hlokomela hore mela ea phetolelo le mongolo oa pele li tlameha ho lumellana le o le mong. Ke hore, u se ke ua eketsa kapa ua hlakola mela ha u hlophisa phetolelo. Ho seng joalo, e tla baka pherekano ho cache ea ho fetola phetolelo.

Haeba ho na le ho hong ho sa tsamaeeng hantle, ka kopo sheba [FAQ bakeng sa tharollo.](/i18/qa#H1)

### `YAML` Liphetolelo

Sesebelisoa sa mola oa taelo se tla fumana lifaele tsohle tse qetellang ka `.yml` bukeng ea faele ea puo ea mohloli ebe oa li fetolela.

* Hlokomela hore suffix ea lebitso la faele e tlameha ho ba `.yml` (eseng `.yaml` ).

Sesebelisoa se fetolela feela boleng ba dikishinari ho `.yml` , eseng linotlolo tsa dikishinari.

Ka mohlala `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

e tla fetoleloa e le `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Phetolelo ea `YAML` e ka boela ea fetoloa ka letsoho (empa u se ke ua kenya kapa ua hlakola linotlolo kapa mela ea phetolelo).

Ho ipapisitsoe le `YAML` phetolelo, o ka haha habonolo tharollo ea machaba bakeng sa lipuo tse fapaneng tsa mananeo.

## Tšebeliso E Tsoetseng Pele

### Bukana Ea Phetolelo

Hafeela `.i18n/conf.yml` e ntse e bōptjoa (ha ho hlokahale ho qala ho tloha template ea morero oa demo nako le nako), `i18` e tla sebetsa hantle.

Sesebelisoa sa mola oa taelo se tla fumana litlhophiso tsa `.i18n/conf.yml` ho li-subdirectories tsohle ebe li li fetolela.

Merero e sebelisang boqapi ba [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Sengoliloeng Sa Ho Kenya

E tla kenngoa ho `/usr/local/bin` ka ho sa feleng.

Haeba `/usr/local/bin` e sena tumello ea ho ngola e tla kenngoa ho `~/.bin` .

Ho beha phapang ea tikoloho `TO` ho ka hlalosa buka ea ho kenya, mohlala :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
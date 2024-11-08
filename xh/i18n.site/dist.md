# Ukusasazwa Kunye Ne-Intanethi

`i18n.site` ithatha uyilo [lwesicelo sephepha elinye](https://developer.mozilla.org/docs/Glossary/SPA) , kwaye iphepha lokungena kwiwebhusayithi kunye nomxholo wewebhusayithi zihanjiswa ngokuzimeleyo.

Emva kokwenza olu guqulelo lungentla, abalawuli `htm` kunye `v` baya kwenziwa phantsi kwe `md/out/dev` directory.

Apha, `dev` uthetha ukuba yakhiwe ngokusekelwe kwifayile yoqwalaselo `.i18n/htm/dev.yml` .

`dev` ulawulo :

Uvimba we `htm` kwiphepha lokungena kwiwebhusayithi.

I `v` iqulathe umxholo wewebhusayithi enamanani oguqulelo.

Imboniso yasekuhlaleni ayikhathali ngenani loguqulelo kwaye iya kukopa zonke iifayile kulawulo `out/dev/v/0.1.0` .

Ukukhutshwa ngokusemthethweni, iifayile ezitshintshileyo ziya kukhutshelwa kuluhlu lwenombolo entsha.

## Chaza Ifayile Yoqwalaselo Ngo `-c`

Iifayile zoqwalaselo ezahlukeneyo ziyakudala abalawuli abahambelanayo kulawulo lwe `out` .

Umzekelo, `.i18n/htm/main.yml` uya kudala uluhlu `out/main` .

`dev.yml` kunye ne `main.yml` lulungelelwaniso olungagqibekanga.

`dev` sisishunqulelo sika `development` , ebonisa imeko-bume yophuhliso, esetyenziselwa imboniso yobulali, kwaye ikwayifayile yoqwalaselo engagqibekanga.
`ol` sisishunqulelo se- `online` , ebonisa indawo ye-intanethi, esetyenziselwa ukukhululwa ngokusemthethweni Ikwayifayile yoqwalaselo engagqibekanga xa usebenzisa iparamitha zomgca womyalelo `-n` ukuya ku `npm` ukukhulula.

Unokwenza ezinye iifayile zoqwalaselo Sebenzisa u `--htm_conf` kumgca womyalelo ukucacisa igama lefayile yoqwalaselo oza kulisebenzisa.

umzekelo:
```
i18n.site --htm_conf dist --save
```

Apha `--save` imele inombolo yenguqulo yohlaziyo.

## <a rel=id href="#npm" id="npm"></a> Papasha umxholo ku-npmjs.com

Ukupapasha umxholo [npmjs.com](//npmjs.com) esicetyiswayo (bona [i-Front-end High Availability](/i18n.site/feature#ha) ).

### npm & Thumela

Faka i- `nodejs` , ngena nge `npm login` .

Hlela u `md/.i18n/htm/main.yml` kwaye utshintshe ixabiso lesi [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` njengegama lakho lepakethe `npm` Naliphi na igama lephakheji [npmjs.com](//npmjs.com) liyakwenza.

Emva koko lungisa `md/.i18n/htm/main.package.json`

Sebenzisa `i18n.site --npm` okanye `i18n.site -n` kuluhlu lwe `md` ukuguqulela kunye nokupapasha.

Ukuba usebenzisa imeko-bume yokudibanisa eqhubekayo ukupapasha, akukho mfuneko yokufaka `nodejs` Khuphela nje i-logged-in kunye neemvume zokupapasha `~/.npmrc` kwindawo.

Ukuba ulungisa igama lepakethe ka `v:` ku `main.yml` , nceda **qiniseka ukuba ucima `.i18n/v/main` kuqala** kwaye emva koko uyipapashe.

#### Iseva Engummeli Epapashwe Ngu-Npm

Ukuba abasebenzisi kwilizwe laseTshayina badibana neengxaki zenethiwekhi kwaye abakwazi ukupapasha iipakethe `npm` , banokuseta ukuguquguquka kokusingqongileyo `https_proxy` ukuqwalasela umncedisi weproxy.

Ucinga ukuba i-port ye-proxy yakho ngu `7890` , ungabhala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Umxholo Ozibambeleyo

Ukuba ufuna ukuzibamba ngokwakho umxholo, hlela kuqala `md/.i18n/htm/main.yml` kwaye utshintshe `v: //unpkg.com/i18n.site` kwisimaphambili sakho se-URL, njenge- `v: //i18n-v.xxx.com` .

Ngenisa u `md` uvimba weefayili kwaye uqhube

```
i18n.site --htm_conf ol --save
```

okanye isifinyezo

```
i18n.site -c ol -s
```

Emva koko, qwalasela umxholo kuluhlu lwe `md/out/main/v` kwi-URL yesimaphambili sendlela ebekwe kwi `v:` .

Ekugqibeleni, **qwalasela ixesha le-cache yendlela ephela ngo `/.v` ukuya ku `1s`** , ngaphandle koko umxholo osanda kukhutshwa awukwazi ukufikelela ngokukhawuleza.

Ixesha le-cache lezinye iindlela lingamiselwa unyaka okanye ngaphezulu ukunciphisa izicelo ezingeyomfuneko.

## Umxholo Wokusingatha Kwi-S3

Ukuzibamba umxholo, ukongeza ekusebenziseni iseva yakho, enye inketho eqhelekileyo kukusebenzisa `S3` + `CDN`

Ungasebenzisa [rclone](https://rclone.org) ukungena kwi-server `S3` , emva koko ubhekisele kwaye ulungise le script ilandelayo, kwaye ukhuphele kuphela utshintsho olunyukayo ku `S3` kukhupho ngalunye.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Khumbula ukuqwalasela `CDN` ukwenzela ukuba ixesha le-cache yendlela ephela kwi `/.v` yi- `1s` , ngaphandle koko umxholo osanda kukhutshwa awukwazi ukufikelela ngokukhawuleza.

## Ukupapasha Iwebhusayithi

Iwebhusayithi inokuthunyelwa naphi na [github page](https://pages.github.com) kwaye [cloudflare page](https://pages.cloudflare.com) zikhetho ezilungileyo.

Ngenxa yokuba iwebhusayithi isebenzisa i-architecture [yesicelo sephepha elinye](https://developer.mozilla.org/docs/Glossary/SPA) , khumbula ukubhala kwakhona iindlela ze-URL ezingenayo `. ` ukuya kwi `index.html` .

Iphepha lokungena kwiwebhusayithi lifuna ukuthunyelwa kube kanye kuphela, kwaye akukho mfuneko yokuphinda usebenzise iphepha lokungena kwiwebhusayithi ukuze kuhlaziywe umxholo olandelayo.

### Sebenzisa Kwiphepha Le-Github

Okokuqala [nqakraza apha ukwenza github](https://github.com/account/organizations/new?plan=free) Eli gama lilandelayo ngu `i18n-demo` njengomzekelo.

Emva koko udale indawo yokugcina `i18n-demo.github.io` phantsi kwalo mbutho (nceda ubuyisele `i18n-demo` ngegama lombutho olenzileyo):

![](https://p.3ti.site/1721098657.avif)

Xa upapasha umxholo kwinqaku elidlulileyo, i : `out/main/htm` yenziwe.

```
ln -s index.html 404.html
```


Kuba `github page` akakuxhasi ukubhalwa kwakhona kwendlela ye-URL, `404.html` kusetyenziswa endaweni yoko.

Emva koko sebenzisa lo myalelo ulandelayo kulawulo `htm` (khumbula ukutshintsha `i18n-demo/i18n-demo.github.io.git` ngedilesi yakho yokugcina) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Emva kokutyhala ikhowudi, linda ukuthunyelwa kwe- `github page` ukuba iqhube ngempumelelo (njengoko kubonisiwe ngezantsi) ngaphambi kokuba ufikelele kuyo.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ngephepha ledemo nceda ubone:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Sebenzisa Kwiphepha Lecloudflare

Xa [cloudflare page](//pages.cloudflare.com) no `github page` , ibonelela ngokuphinda kubhalwe indlela kwaye inobubele kwilizwe laseTshayina kwaye iyafikeleleka ngakumbi.

Ukusasazwa kwe `cloudflare page` ngokuqhelekileyo kusekelwe ekuhanjisweni kwe `github page` ngasentla.

Yenza iprojekthi kwaye ubophe i `i18n-demo.github.io` warehouse ngasentla.

Inkqubo iboniswe kumzobo ongezantsi:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Nceda ucofe `Add Account` ukunika imvume yokufikelela kumbutho we- `i18n-demo` .

Ukuba ubophe i-warehouse yomnye umbutho, unokufuna ukucofa `Add Account` kabini ukugunyazisa kabini ngaphambi kokuba umbutho omtsha uboniswe.

![](https://p.3ti.site/1721118306.avif)

Okulandelayo, khetha indawo yokugcina `i18n-demo.github.io` , emva koko ucofe u `Begin setup` , kwaye usebenzise amaxabiso angagqibekanga kumanyathelo alandelayo.

![](https://p.3ti.site/1721118490.avif)

Emva kokubophelela okokuqala, kufuneka ulinde imizuzu embalwa ngaphambi kokuba ufikelele kuyo.

Emva kokuthunyelwa, unokubophelela igama lesizinda esiqhelekileyo.

![](https://p.3ti.site/1721119459.avif)

Emva kokubophelela igama le-domain yesiko, nceda uye kwigama lesizinda ukuze uqwalasele indlela yokubhala kwakhona isicelo sephepha elinye, njengoko kubonisiwe ngezantsi:

![](https://p.3ti.site/1721119320.avif)

Imithetho ekulo mfanekiso ungentla `i18n.site` hlobo lulandelayo.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ukongeza, nceda uqwalasele imithetho ye-cache, njengoko kuboniswe ngezantsi, kwaye usete ubude be-cache kwinyanga enye.

![](https://p.3ti.site/1721125111.avif)

Nceda utshintshe igama lesizinda elihambelanayo kwinqanaba lesibini kumfanekiso ongentla kwigama lesizinda olibopheyo.

### Ukuphucula Ukuhanjiswa Kwewebhusayithi Kwilizwe laseTshayina

Ukuba ufuna ukufumana ufikelelo olungcono kwimo yenethiwekhi yelizwe laseTshayina, nceda [ubhalise igama lesizinda](//beian.aliyun.com) kuqala.

Emva koko, sebenzisa into yokugcina abathengisi bamafu kwilizwe laseChina + Sebenzisa umxholo olandelayo `CDN` `out/main/htm`

Unokusebenzisa i-edge computing ukuze ubhale kwakhona umendo wokuziqhelanisa nezicelo zephepha elinye Umzekelo, [i-Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) inokuqwalasela ngolu hlobo:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Iiheader zempendulo zinokusetwa kwimveliso yolungiso lweempazamo, ezinje ngaphandle.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Ngenxa yokuba irekhodi ye `MX` kunye nerekhodi ye `CNAME` ayikwazi ukuhlalisana, ukuba ufuna ukufumana i-imeyile yegama lesizinda ngexesha elifanayo, kufuneka usebenzisane [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) kwinqanaba le `CNAME` kwirekhodi ye `A` .

Ukongeza, kuba iintlawulo zetrafikhi zaphesheya zabathengisi bamafu kwilizwe lase China zibiza kakhulu, ukuba ufuna ukwandisa iindleko, ungasebenzisa [DNS sasimahla sendawo](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kunye negama lesizinda se [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (njengoko kubonisiwe ngezantsi) ukuphumeza ukuphambuka kwetrafikhi──Ukuhamba kweTrafikhi kwilizwe laseTshayina iBaidu Cloud `CDN` , ukugcwala kwamanye amazwe kuya cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ezi zisombululo zokusasazwa kakuhle zinzima kwaye ziya kwaziswa kwizahluko ezahlukeneyo kwixesha elizayo.

### Ukwalathisa Kwakhona Igama Lesizinda seGeneric

Ukuba usebenzisa `i18n.site` ukuvelisa iwebhusayithi njengewebhusayithi yakho ephambili, ngokuqhelekileyo kufuneka uqwalasele i-pan-domain redirection, oko kukuthi, ukuqondisa kwakhona ukufikelela kwi `*.xxx.com` (kuquka `www.xxx.com` ) ukuya kwi `xxx.com` .

Le mfuno inokufezekiswa ngoncedo lwe Alibaba Cloud `CDN` `EdgeScript` ( [uxwebhu lwesiNgesi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Uxwebhu lwesiTshayina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Yongeza igama lesizinda kwi [- CDN Cloud](https://cdn.console.aliyun.com/domain/list) kwaye ubonise igama lesizinda kwi `*.xxx.com` `CNAME` kwi-Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Umzekelo, ulungelelwaniso lwe-pan-domain ye-redirection ye- `*.i18n.site` emfanekisweni ongentla ngolu hlobo lulandelayo:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Sebenzisa Nge nginx

`out/main/htm` wongeze uqwalaselo olufana noku kulandelayo kumhlathi we `/root/i18n/md/out/main/htm` `server` nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Ngokusekwe Kwi `github action` Indibaniselwano Eqhubekayo

Ungabhekisa koku kulandelayo ukuqwalasela `github action` yakho:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Njengoko kunokubonwa kuqwalaselo, oku kuhamba komsebenzi kuqalwa xa utyhalela kwisebe `main` kunye nesebe `dist` .

Ukuhamba komsebenzi kuya kusebenzisa ifayile yoqwalaselo ehambelana negama lesebe ukupapasha uxwebhu Apha, `.i18n/htm/main.yml` kunye ne `.i18n/htm/dist.yml` iya kusetyenziswa njengokucwangciswa kokushicilela.

Sicebisa ezi ndlela zilandelayo zenkqubo yokukhutshwa koxwebhu:

Xa utshintsho lutyhalelwa kwisebe `main` , uxwebhu luvuselelwe ukuba lwakhiwe kwaye lubekwe kwisikhululo sokujonga kwangaphambili (isikhululo sokujonga kwangaphambili siyafumaneka [github page](//pages.github.com) ).

Emva kokuqinisekisa ukuba uxwebhu luchanekile kwindawo yokujonga kwangaphambili, ikhowudi iya kudibaniswa kwaye iqhutywe kwi-branch `dist` , kwaye ukwakhiwa ngokusemthethweni kunye nokuthunyelwa kuya ku-intanethi.

Ngokuqinisekileyo, ukuphumeza le nkqubo ingentla kufuna ukubhala ulungelelwaniso oluninzi.

Ungabhekisa kweyona projekthi yokuhanjiswa komsebenzi [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` kunye ne `secrets.NPM_TOKEN` kuqwalaselo ifuna ukuba uqwalasele iinguqu eziyimfihlo kwisiseko sekhowudi.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` Fumana [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` luphawu lokupapasha lwephakheji `npm` [npmjs.com](//npmjs.com) kwaye wenze ithokheni eneemvume zokupapasha (njengoko kubonisiwe ngezantsi).

![](//p.3ti.site/1730969906.avif)


## Ubume Boluhlu

### `public`

Iifayile ezimileyo zewebhusayithi, ezifana ne `favicon.ico` , `robots.txt` , njl.

Iifayile ze icon apha zingenziwa nge [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Ngaphantsi kwe- `.i18n` directory kukho iifayile zoqwalaselo, i [-](/i18n.site/conf) cache yokuguqulela, `i18n.site` .

### `en`

Uvimba weefayili wolwimi lwentsusa, ohambelana ne `en` yesi `fromTo` ku `.i18n/conf.yml` ifayile yoqwalaselo

```yaml
i18n:
  fromTo:
    en: zh
```

Nceda ujonge kuqwalaselo loguqulo [i18](/i18/use)
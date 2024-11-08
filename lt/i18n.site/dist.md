# Diegimas Ir Internete

`i18n.site` naudoja [vieno puslapio programos](https://developer.mozilla.org/docs/Glossary/SPA) architektūrą, o svetainės įėjimo puslapis ir svetainės turinys yra diegiami atskirai.

Paleidus aukščiau pateiktą vertimą, `htm` ir `v` katalogai bus sugeneruoti `md/out/dev` kataloge.

Čia `dev` reiškia, kad jis sukurtas remiantis `.i18n/htm/dev.yml` konfigūracijos failu.

`dev` katalogas :

`htm` katalogas yra svetainės įėjimo puslapis.

`v` kataloge yra svetainės turinys su versijų numeriais.

Vietinei peržiūrai nerūpi versijos numeris ir visi failai nukopijuos į `out/dev/v/0.1.0` katalogą.

Oficialiai išleisti pakeisti failai bus nukopijuoti į naujos versijos numerių katalogą.

## Nurodykite Konfigūracijos Failą Su `-c`

Skirtingi konfigūracijos failai sukurs atitinkamus katalogus `out` kataloge.

Pavyzdžiui, `.i18n/htm/main.yml` sukurs `out/main` katalogą.

`dev.yml` ir `main.yml` yra numatytosios konfigūracijos.

`dev` yra `development` santrumpa, nurodanti kūrimo aplinką, naudojama vietinei peržiūrai, taip pat yra numatytasis konfigūracijos failas.
`ol` yra `online` santrumpa, nurodanti internetinę aplinką, kuri naudojama oficialiam leidimui. Tai taip pat yra numatytasis konfigūracijos failas, kai išleidžiant naudojami komandų eilutės parametrai `-n` iki `npm` .

Taip pat galite sukurti kitus konfigūracijos failus. Komandinėje eilutėje `--htm_conf` konfigūracijos failo pavadinimą:

pavyzdžiui:
```
i18n.site --htm_conf dist --save
```

Čia `--save` reiškia naujinimo leidimo versijos numerį.

## <a rel=id href="#npm" id="npm"></a> Paskelbkite turinį npmjs.com

Rekomenduojamas numatytasis sprendimas [yra](/i18n.site/feature#ha) paskelbti turinį [npmjs.com](//npmjs.com)

### npm & Įrašas

Įdiekite `nodejs` , prisijunkite naudodami `npm login` .

Redaguokite `md/.i18n/htm/main.yml` ir pakeiskite reikšmę [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) savo `npm` paketo pavadinimą.

Tada pakeiskite `md/.i18n/htm/main.package.json`

Paleiskite `i18n.site --npm` arba `i18n.site -n` `md` kataloge, kad išverstumėte ir paskelbtumėte.

Jei publikuodami naudojate nuolatinio integravimo aplinką, nereikia diegti `nodejs` Tiesiog nukopijuokite prisijungimo ir publikavimo teises `~/.npmrc` į aplinką.

Jei pakeisite paketo pavadinimą `v:` iš `main.yml` , **pirmiausia ištrinkite `.i18n/v/main`** ir tada paskelbkite.

#### Tarpinį Serverį Paskelbė npm

Jei žemyninės Kinijos vartotojai susiduria su tinklo problemomis ir negali paskelbti `npm` paketų, jie gali nustatyti `https_proxy` aplinkos kintamąjį, kad sukonfigūruotų tarpinį serverį.

Darant prielaidą, kad jūsų tarpinio serverio prievadas yra `7890` , galite rašyti:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Savarankiškai Priglobtas Turinys

Jei norite patys priglobti turinį, pirmiausia redaguokite `md/.i18n/htm/main.yml` ir pakeiskite `v: //unpkg.com/i18n.site` į URL priešdėlį, pvz., `v: //i18n-v.xxx.com` .

Įveskite `md` katalogą ir paleiskite

```
i18n.site --htm_conf ol --save
```

arba santrumpa

```
i18n.site -c ol -s
```

Tada sukonfigūruokite `md/out/main/v` katalogo turinį į URL priešdėlio kelią, nustatytą `v:` .

Galiausiai **sukonfigūruokite kelio, kuris baigiasi nuo `/.v` iki `1s` , talpyklos laiką** , kitaip naujai išleistas turinys nebus pasiekiamas iš karto.

Kitų kelių talpyklos laikas gali būti nustatytas iki vienerių metų ar daugiau, kad būtų sumažintas nereikalingų užklausų skaičius.

## Priglobti Turinį Į s3

Jei norite savarankiškai priglobti turinį, ne tik naudojate savo serverį, `CDN` ir dar viena įprasta parinktis yra naudoti `S3` +

Norėdami prisijungti prie `S3` serverio `S3` galite naudoti [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Nepamirškite sukonfigūruoti `CDN` taip, kad kelio, kuris baigiasi skaičiumi `/.v` talpyklos laikas būtų `1s` , kitaip naujai išleisto turinio negalima iš karto pasiekti.

## Paskelbti Svetainę

Svetainę galima įdiegti bet kur, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) yra geras pasirinkimas.

Kadangi svetainėje naudojama [vieno puslapio programos](https://developer.mozilla.org/docs/Glossary/SPA) architektūra, nepamirškite perrašyti URL kelių, kuriuose nėra nuo `. ` iki `index.html` .

Svetainės įvesties puslapį reikia įdiegti tik vieną kartą ir nereikia iš naujo įdiegti svetainės įvesties puslapio, kad būtų galima atnaujinti turinį.

### Įdiegti github Puslapyje

Pirmiausia [spustelėkite čia github kad sukurtumėte organizaciją](https://github.com/account/organizations/new?plan=free) . Pavyzdžiui, šis organizacijos pavadinimas yra `i18n-demo` .

Tada sukurkite šios organizacijos sandėlį `i18n-demo.github.io` (pakeiskite `i18n-demo` savo sukurtu organizacijos pavadinimu):

![](https://p.3ti.site/1721098657.avif)

Skelbiant ankstesnio straipsnio turinį, buvo sugeneruotas `out/main/htm` Įveskite šį katalogą ir paleiskite :

```
ln -s index.html 404.html
```


Kadangi `github page` nepalaiko URL kelio perrašymo, vietoj jo naudojamas `404.html` .

Tada paleiskite šią komandą `htm` kataloge (nepamirškite pakeisti `i18n-demo/i18n-demo.github.io.git` savo sandėlio adresu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Paspaudę kodą, palaukite, kol `github page` diegimas bus sėkmingai paleistas (kaip parodyta toliau), kad galėtumėte jį pasiekti.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demonstracinį puslapį rasite:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Įdiegti „Cloudflare“ Puslapyje

[cloudflare page](//pages.cloudflare.com) su `github page` , jis suteikia galimybę perrašyti kelią ir yra palankesnis žemyninei Kinijai ir yra labiau prieinamas.

`cloudflare page` diegimas paprastai grindžiamas anksčiau pateiktu `github page` diegimu.

Sukurkite projektą ir susiekite aukščiau esantį `i18n-demo.github.io` sandėlį.

Procesas parodytas paveikslėlyje žemiau:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Spustelėkite `Add Account` kad suteiktumėte prieigą prie organizacijos `i18n-demo` .

Jei susiejote kitos organizacijos sandėlį, gali tekti du kartus spustelėti `Add Account` , kad patvirtintumėte du kartus, kad būtų rodoma nauja organizacija.

![](https://p.3ti.site/1721118306.avif)

Tada pasirinkite sandėlį `i18n-demo.github.io` , tada spustelėkite `Begin setup` ir tolesniems veiksmams naudokite numatytąsias reikšmes.

![](https://p.3ti.site/1721118490.avif)

Surišę pirmą kartą, turite palaukti kelias minutes, kol galėsite jį pasiekti.

Įdiegę galite susieti pasirinktinį domeno pavadinimą.

![](https://p.3ti.site/1721119459.avif)

Susieję tinkintą domeno pavadinimą, eikite į domeno pavadinimą, kad sukonfigūruotumėte vieno puslapio programos kelio perrašymą, kaip parodyta toliau:

![](https://p.3ti.site/1721119320.avif)

Aukščiau esančiame paveikslėlyje nurodytos taisyklės. Pakeiskite `i18n.site` pirmoje eilutėje, kurią susiejote.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Be to, sukonfigūruokite talpyklos taisykles, kaip parodyta toliau, ir nustatykite talpyklos trukmę iki vieno mėnesio.

![](https://p.3ti.site/1721125111.avif)

Pakeiskite domeno vardą, atitinkantį antrajame žingsnyje aukščiau esančiame paveikslėlyje, į susietą domeno vardą.

### Svetainės Diegimo Žemyninėje Kinijoje Optimizavimas

Jei norite pasiekti geresnį pasiekiamumo našumą žemyninės Kinijos tinklo aplinkoje, pirmiausia [užregistruokite domeno vardą](//beian.aliyun.com) .

Tada naudokite žemyninės Kinijos debesies tiekėjų objektų saugyklą + Įdiekite šį turinį `CDN` `out/main/htm`

Galite naudoti krašto skaičiavimą, kad perrašytumėte kelią ir pritaikytumėte vieno puslapio programas. Pavyzdžiui, [„Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) galima sukonfigūruoti taip:

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
  // Atsakymų antraštėse galima nustatyti derinimo išvestį, pvz., out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Kadangi `MX` įrašas ir `CNAME` įrašas negali egzistuoti kartu, jei norite gauti domeno vardo el. laiškus vienu metu, turite bendradarbiauti su [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` lygiu į `A` įrašą.

Be to, kadangi debesų tiekėjų užjūrio srauto mokesčiai žemyninėje Kinijoje yra gana brangūs, jei norite optimizuoti išlaidas, galite naudoti [DNS „Huawei Cloud“ geografinę skiriamąją gebą](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ir [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) tinkintą domeno pavadinimą (kaip parodyta toliau). eismo nukreipimas──Eismo maršrutas žemyninėje Kinijoje Baidu Cloud `CDN` , tarptautinis eismas kainuoja cloudflare .

![](https://p.3ti.site/1721119788.avif)

Šie diegimo optimizavimo sprendimai yra sudėtingesni ir ateityje bus pristatyti atskiruose skyriuose.

### Bendrasis Domeno Vardo Peradresavimas

Jei naudojate `i18n.site` kad sukurtumėte svetainę kaip pagrindinę svetainę, paprastai turite sukonfigūruoti viso domeno peradresavimą, ty nukreipti prieigą prie `*.xxx.com` (įskaitant `www.xxx.com` ) į `xxx.com` .

Šis reikalavimas gali būti įvykdytas naudojant Alibaba Cloud `CDN` `EdgeScript` ( [angliškas dokumentas](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinų dokumentas](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Pridėkite domeno pavadinimą [„Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) ir nurodykite domeno pavadinimą nuo `*.xxx.com` `CNAME` „Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Pavyzdžiui, aukščiau esančiame paveikslėlyje viso domeno pavadinimo peradresavimo konfigūracija `*.i18n.site` yra tokia:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Diegti Su nginx

Pridėkite konfigūraciją, panašią į toliau pateiktą nginx `server` pastraipoje. Pakeiskite `/root/i18n/md/out/main/htm` į savo projekto kelią `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Remiantis `github action` Nuolatine Integracija

Norėdami sukonfigūruoti savo `github action` , galite vadovautis šiais nurodymais:

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

Kaip matyti konfigūracijoje, ši darbo eiga suaktyvinama, kai stumiama į `main` ir `dist` šaką.

Darbo eiga naudos konfigūracijos failą, atitinkantį šakos pavadinimą, kad paskelbtų dokumentą. Čia bus atitinkamai paskelbta `.i18n/htm/main.yml` ir `.i18n/htm/dist.yml` .

Rekomenduojame laikytis šios geriausios dokumento išleidimo proceso praktikos:

Kai pakeitimai perkeliami į šaką `main` , dokumentas suaktyvinamas, kad būtų sukurtas ir įdiegtas peržiūros stotyje (peržiūros stotis yra [github page](//pages.github.com) ).

Peržiūros svetainėje patvirtinus, kad dokumentas yra teisingas, kodas bus sujungtas ir perkeltas į `dist` šaką, o oficialus kūrimas ir diegimas bus prisijungę.

Žinoma, norint įgyvendinti aukščiau pateiktą procesą, reikia parašyti daugiau konfigūracijų.

Norėdami sukurti darbo eigos scenarijus, galite kreiptis į tikrąjį projektą [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` ir `secrets.NPM_TOKEN` konfigūracijoje reikalauja sukonfigūruoti slaptus kintamuosius kodo bazėje.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` yra konfigūracijos `npm` paketo paskelbimo [npmjs.com](//npmjs.com) raktas.

![](//p.3ti.site/1730969906.avif)


## Katalogo Struktūra

### `public`

Statiniai svetainės failai, pvz., `favicon.ico` , `robots.txt` ir kt.

Čia esančius piktogramų failus galima sugeneruoti naudojant [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Po `.i18n` katalogu yra `i18n.site` konfigūracijos failai, vertimo talpykla ir kt. Išsamesnės informacijos ieškokite kitame skyriuje [„Konfigūracija“](/i18n.site/conf) .

### `en`

Pirminės kalbos katalogas, atitinkantis `en` iš `fromTo` iš `.i18n/conf.yml` konfigūracijos failą

```yaml
i18n:
  fromTo:
    en: zh
```

Žr. vertimo konfigūraciją [i18](/i18/use)
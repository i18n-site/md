# Įdiegti &

## Konfigūracijos Prieigos Raktas

`i18n.site` turi integruotą `i18` vertimo įrankį. [Spustelėkite čia, kad peržiūrėtumėte `i18` dokumentą, kad sukonfigūruotumėte prieigos raktą](/i18/use) .

## Įdiegti

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projektas

Pradėkime nuo demonstracinio projekto, kad išmoktume naudoti `i18n.site` .

Pirmiausia klonuojame demonstracinę saugyklą ir paleidžiame komandą taip:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Naudotojai žemyninėje Kinijoje gali:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` kodo bazinio klono katalogo pavadinimas turi būti `md` kad būtų palengvinta vietinė peržiūra naudojant `docker` .

### Išversti

Pirmiausia įveskite `md` katalogą ir paleiskite `i18n.site` , kuris išvers iš `en` į `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Paleidus bus sugeneruoti vertimo ir talpyklos failai. Nepamirškite jų pridėti prie saugyklos `md` `git add . ` .

### Vietinė Peržiūra

Įdiekite ir paleiskite `docker` ( `MAC` vartotojas rekomenduoja naudoti [orbstack](https://orbstack.dev) kaip `docker` vykdymo laiką).

Tada įveskite `docker` katalogą ir paleiskite `./up.sh` , tada apsilankykite [https://127.0.0.1](https://127.0.0.1) kad peržiūrėtumėte vietoje.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Paskelbkite Turinį

`i18n.site` naudoja [vieno puslapio programos](https://developer.mozilla.org/docs/Glossary/SPA) architektūrą, o svetainės įėjimo puslapis ir svetainės turinys yra diegiami atskirai.

Paleidus aukščiau pateiktą vertimą, `htm` ir `v` katalogai bus sugeneruoti `md/out/dev` kataloge.

Čia `dev` reiškia, kad jis sukurtas remiantis `.i18n/htm/dev.yml` konfigūracijos failu.

`dev` katalogas :

`htm` katalogas yra svetainės įėjimo puslapis.

`v` kataloge yra svetainės turinys su versijų numeriais.

Vietinei peržiūrai nerūpi versijos numeris ir visi failai nukopijuos į `out/dev/v/0.1.0` katalogą.

Oficialiai išleisti pakeisti failai bus nukopijuoti į naujos versijos numerių katalogą.

#### Norėdami Nurodyti Konfigūracijos Failą, Naudokite -c

Skirtingi konfigūracijos failai sukurs atitinkamus katalogus `out` kataloge.

Pavyzdžiui, `.i18n/htm/ol.yml` sukurs `out/ol` katalogą.

`dev.yml` ir `ol.yml` yra numatytosios konfigūracijos.

`dev` yra `development` santrumpa, nurodanti kūrimo aplinką, naudojama vietinei peržiūrai, taip pat yra numatytasis konfigūracijos failas.
`ol` yra `online` santrumpa, nurodanti internetinę aplinką, kuri naudojama oficialiam leidimui. Tai taip pat yra numatytasis konfigūracijos failas, kai išleidžiant naudojami komandų eilutės parametrai `-n` iki `npm` .

Taip pat galite sukurti kitus konfigūracijos failus. Komandinėje eilutėje `--htm_conf` konfigūracijos failo pavadinimą:

pavyzdžiui:
```
i18n.site --htm_conf yourConfig --save
```

Čia `--save` reiškia naujinimo leidimo versijos numerį.

#### <a rel=id href="#npm" id="npm"></a> Paskelbkite turinį npmjs.com

Rekomenduojamas numatytasis sprendimas [yra](/i18n.site/feature#ha) paskelbti turinį [npmjs.com](//npmjs.com)

##### npm login &

Įdiekite `nodejs` , prisijunkite naudodami `npm login` .

Redaguokite `md/.i18n/htm/ol.yml` ir pakeiskite `i18n.site` in `v: //unpkg.com/i18n.site` į savo `npm` paketo pavadinimą.

Tiesiog naudokite neužimtą paketo pavadinimą [npmjs.com](//npmjs.com) Geras pasirinkimas yra svetainės domeno pavadinimas.

Skelbdami pagal paketą `npm` , **būtinai naudokite `//unpkg.com/`** kaip `v:` vertės priešdėlį, `i18n.site` specialiai optimizavo talpyklos laiką `/.v` pagal šį priešdėlio kelią, kad būtų galima laiku peržiūrėti naujus leidimus.

Paleiskite `i18n.site --npm` arba `i18n.site -n` `md` kataloge, kad išverstumėte ir paskelbtumėte.

Jei publikavimui naudojate nuolatinio integravimo aplinką, nereikia diegti `nodejs` , tiesiog nukopijuokite prisijungusį ir publikavimo leidimą `~/.npmrc` į aplinką.

Jei pakeisite paketo pavadinimą `v:` iš `ol.yml` , **pirmiausia ištrinkite `.i18n/v/ol`** ir tada paskelbkite.

##### Tarpinį Serverį Paskelbė npm

Jei žemyninės Kinijos vartotojai susiduria su tinklo problemomis ir negali paskelbti `npm` paketų, jie gali nustatyti `https_proxy` aplinkos kintamąjį, kad sukonfigūruotų tarpinį serverį.

Darant prielaidą, kad jūsų tarpinio serverio prievadas yra `7890` , galite rašyti:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Savarankiškai Priglobtas Turinys

Jei norite patys priglobti turinį, pirmiausia redaguokite `md/.i18n/htm/ol.yml` ir pakeiskite `v: //unpkg.com/i18n.site` į URL priešdėlį, pvz., `v: //i18n-v.xxx.com` .

Įveskite `md` katalogą ir paleiskite

```
i18n.site --htm_conf ol --save
```

arba santrumpa

```
i18n.site -c ol -s
```

Tada sukonfigūruokite `md/out/ol/v` katalogo turinį į URL priešdėlio kelią, nustatytą `v:` .

Galiausiai **sukonfigūruokite kelio, kuris baigiasi nuo `/.v` iki `1s` , talpyklos laiką** , kitaip naujai išleistas turinys nebus pasiekiamas iš karto.

Kitų kelių talpyklos laikas gali būti nustatytas iki vienerių metų ar daugiau, kad būtų sumažintas nereikalingų užklausų skaičius.

##### Priglobti Turinį Į s3

Jei norite savarankiškai priglobti turinį, ne tik naudojate savo serverį, `CDN` ir dar viena įprasta parinktis yra naudoti `S3` +

Norėdami prisijungti prie `S3` serverio `S3` galite naudoti [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nepamirškite sukonfigūruoti `CDN` taip, kad kelio, kuris baigiasi skaičiumi `/.v` talpyklos laikas būtų `1s` , kitaip naujai išleisto turinio negalima iš karto pasiekti.

### Paskelbti Svetainę

Svetainę galima įdiegti bet kur, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) yra geras pasirinkimas.

Kadangi svetainėje naudojama [vieno puslapio programos](https://developer.mozilla.org/docs/Glossary/SPA) architektūra, nepamirškite perrašyti URL kelių, kuriuose nėra nuo `. ` iki `index.html` .

Svetainės įvesties puslapį reikia įdiegti tik vieną kartą ir nereikia iš naujo įdiegti svetainės įvesties puslapio, kad būtų galima atnaujinti turinį.

#### Įdiegti github Puslapyje

Pirmiausia [spustelėkite čia github kad sukurtumėte organizaciją](https://github.com/account/organizations/new?plan=free) . Pavyzdžiui, šis organizacijos pavadinimas yra `i18n-demo` .

Tada sukurkite šios organizacijos sandėlį `i18n-demo.github.io` (pakeiskite `i18n-demo` savo sukurtu organizacijos pavadinimu):

![](https://p.3ti.site/1721098657.avif)

Skelbiant ankstesnio straipsnio turinį, buvo sugeneruotas `out/ol/htm` Įveskite šį katalogą ir paleiskite :

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

#### Įdiegti „Cloudflare“ Puslapyje

[cloudflare page](//pages.cloudflare.com) su `github page` , jis suteikia kelių perrašymą ir yra palankesnis žemyninei Kinijai ir yra labiau prieinamas.

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

Aukščiau esančiame paveikslėlyje pateiktos taisyklės. Pakeiskite `i18n.site` pirmoje eilutėje, kurią susiejote.

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

#### Svetainės Diegimo Žemyninėje Kinijoje Optimizavimas

Jei norite pasiekti geresnį pasiekiamumo našumą žemyninės Kinijos tinklo aplinkoje, pirmiausia [užregistruokite domeno vardą](//beian.aliyun.com) .

Tada naudokite žemyninės Kinijos debesies tiekėjų objektų saugyklą + Įdiekite šį turinį `CDN` `out/ol/htm`

Galite naudoti krašto skaičiavimą, kad perrašytumėte kelią ir pritaikytumėte vieno puslapio programas. Pavyzdžiui, [„Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) galima sukonfigūruoti taip:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
![](https://p.3ti.site/1721121273.avif)

Kadangi `MX` įrašas ir `CNAME` įrašas negali egzistuoti kartu, jei norite gauti domeno vardo el. laiškus vienu metu, turite bendradarbiauti su [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` lygiu į `A` įrašą.

Be to, kadangi debesų tiekėjų užjūrio srauto mokesčiai žemyninėje Kinijoje yra gana brangūs, jei norite optimizuoti išlaidas, galite naudoti [DNS „Huawei Cloud“ geografinę skiriamąją gebą](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ir [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) tinkintą domeno pavadinimą (kaip parodyta toliau). eismo nukreipimas──Eismas žemyninėje Kinijoje Baidu Cloud `CDN` , tarptautinis eismas kainuoja cloudflare .

![](https://p.3ti.site/1721119788.avif)

Šie diegimo optimizavimo sprendimai yra sudėtingesni ir ateityje bus pristatyti atskiruose skyriuose.

#### Bendrasis Domeno Vardo Peradresavimas

Jei naudojate `i18n.site` kad sukurtumėte svetainę kaip pagrindinę svetainę, paprastai turite sukonfigūruoti viso domeno peradresavimą, ty nukreipti prieigą prie `*.xxx.com` (įskaitant `www.xxx.com` ) į `xxx.com` .

Šis reikalavimas gali būti įvykdytas naudojant Alibaba Cloud `CDN` `EdgeScript` ( [angliškas dokumentas](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinų dokumentas](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Pridėkite domeno pavadinimą [„Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) ir nurodykite domeno pavadinimą nuo `*.xxx.com` `CNAME` „Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Pavyzdžiui, aukščiau esančiame paveikslėlyje viso domeno pavadinimo peradresavimo konfigūracija `*.i18n.site` yra tokia:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Diegti Su nginx

Pridėkite konfigūraciją, panašią į toliau pateiktą nginx `server` pastraipoje. Pakeiskite `/root/i18n/md/out/ol/htm` į savo projekto kelią `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Katalogo Struktūra

#### `public`

Statiniai svetainės failai, pvz., `favicon.ico` , `robots.txt` ir kt.

Čia esančius piktogramų failus galima sugeneruoti naudojant [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Po `.i18n` katalogu yra `i18n.site` konfigūracijos failai, vertimo talpykla ir tt. Daugiau informacijos rasite kitame skyriuje [„Konfigūracija“](/i18n.site/conf) .

#### `en`

Pirminės kalbos katalogas, atitinkantis `en` iš `fromTo` iš `.i18n/conf.yml` konfigūracijos failą

```yaml
i18n:
  fromTo:
    en: zh
```

Žr. vertimo konfigūraciją [i18](/i18/use)
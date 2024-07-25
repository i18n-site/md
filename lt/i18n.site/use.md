# Įdiegti &

## Konfigūracijos Prieigos Raktas

`i18n.site` `i18` [`i18`](/i18/use)

## Diegti

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projektas

Pradėkime nuo demonstracinio projekto ir išmokime naudotis `i18n.site`

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

Kodo bazinio klono katalogo pavadinimas turi būti `md` `demo.i18n.site` kad būtų lengviau peržiūrėti vietinę peržiūrą naudojant `docker` .

### Išversti

Pirmiausia įveskite `md` katalogą ir paleiskite `i18n.site` , kuris išvers `en` į `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Paleidus, bus sugeneruoti vertimo ir talpyklos failai. Nepamirškite juos įtraukti į saugyklą `git add . ` `md` .

### Vietinė Peržiūra

Įdiekite ir `docker` ( `MAC` rekomenduoja naudoti [orbstack](https://orbstack.dev) kaip `docker` vykdymo laiką).

Tada įveskite `docker` ir paleiskite `./up.sh` , tada apsilankykite [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Paskelbkite Turinį

`i18n.site` [vieno puslapio taikomosios programos](https://developer.mozilla.org/docs/Glossary/SPA) architektūrą, o svetainės įėjimo puslapis ir svetainės turinys diegiami atskirai.

Atlikus aukščiau pateiktą vertimą, `md/out/dev` bus sugeneruoti `htm` ir `v` katalogai.

Čia `dev` rodo, kad jis sukurtas remiantis `.i18n/htm/dev.yml` failu.

Pagal : `dev`

`htm` katalogu yra svetainės įėjimo puslapis.

`v` yra svetainės turinys su versijos numeriu.

Vietinė peržiūra nukopijuos visus failus į `out/dev/v/0.1.0` , neatsižvelgiant į versijos numerį.

Oficialiai išleisti pakeisti failai bus nukopijuoti į naujos versijos numerių katalogą.

#### Norėdami Nurodyti Konfigūracijos Failą, Naudokite -c

Įvairūs konfigūracijos failai sukurs atitinkamus katalogus kataloge `out`

Pavyzdžiui, `.i18n/htm/ol.yml` sukurs `out/ol` katalogą.

`dev.yml` ir `ol.yml` yra numatytosios konfigūracijos.

`dev` yra `development` santrumpa, kuri reiškia kūrimo aplinką, naudojama vietinei peržiūrai ir yra numatytasis konfigūracijos failas.
`ol` yra `online` santrumpa, reiškianti internetinę aplinką, naudojama oficialiai išleisti, taip pat yra numatytasis konfigūracijos failas publikuojant `npm` naudojant komandinės eilutės parametrą `-n` .

Taip `--htm_conf` galite sukurti kitus konfigūracijos failus, norėdami nurodyti konfigūracijos failo pavadinimą.

pavyzdžiui:
```
i18n.site --htm_conf yourConfig --save
```

`--save` nurodo atnaujinimo versijos numerį.

#### <a rel=id href="#npm" id="npm"></a> Paskelbkite turinį npmjs.com

Rekomenduojamas numatytasis sprendimas yra paskelbti [turinį](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login &

Įdiekite `nodejs` naudokite `npm login` norėdami prisijungti.

Redaguoti `md/.i18n/htm/ol.yml` pakeiskite `i18n.site` in `v: //unpkg.com/i18n.site` į savo `npm` paketo pavadinimas.

Tiesiog naudokite neužimtą paketo pavadinimą [npmjs.com](//npmjs.com) Geras pasirinkimas yra svetainės domeno pavadinimas.

Skelbdami pagal `npm` , **būtinai naudokite `//unpkg.com/`** kaip `v:` reikšmės priešdėlį. Talpyklos laikas `i18n.site` pagal šį priešdėlio kelią `/.v` buvo specialiai optimizuotas, kad būtų galima laiku peržiūrėti naujus leidimus.

Paleiskite `i18n.site --npm` arba `i18n.site -n` `md` , kad išverstumėte ir paskelbtumėte.

Jei publikuodami naudojate nuolatinės integracijos aplinką, jos diegti nereikia `nodejs` Tiesiog nukopijuokite prisijungusį ir paskelbtą leidimą `~/.npmrc` į aplinką.

Jei pakeisite paketo pavadinimą `v:` `ol.yml` , **pirmiausia ištrinkite `.i18n/v/ol`** ir tada paskelbkite.

##### Tarpinį Serverį Paskelbė npm

Jei vartotojai žemyninėje Kinijoje susiduria su tinklo problemomis ir negali paskelbti `npm` , jie gali nustatyti aplinkos kintamąjį `https_proxy` kad sukonfigūruotų tarpinį serverį.

Darant prielaidą, kad jūsų tarpinio serverio prievadas yra `7890` galite rašyti:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Savarankiškai Priglobtas Turinys

Jei norite patys priglobti turinį, pirmiausia redaguokite `md/.i18n/htm/ol.yml` pakeiskite `v: //unpkg.com/i18n.site` į savo URL priešdėlį, pvz., `v: //i18n-v.xxx.com` !

Įveskite `md` ir paleiskite

```
i18n.site --htm_conf ol --save
```

arba santrumpa

```
i18n.site -c ol -s
```

Tada sukonfigūruokite turinį `md/out/ol/v` pagal URL priešdėlio kelią, nustatytą `v:` .

Galiausiai **sukonfigūruokite kelio, kuris baigiasi `/.v` `1s` talpyklos laiką** , kitaip naujai išleistas turinys nebus pasiekiamas iš karto.

Kitų kelių talpyklos laikas gali būti nustatytas iki vienerių metų ar daugiau, kad būtų sumažintas nereikalingų užklausų skaičius.

##### Priglobti Turinį Į s3

Norėdami savarankiškai priglobti turinį, galite naudoti ne tik savo serverį, bet `CDN` + `S3`

Galite naudoti [rclone](https://rclone.org) `S3` , tada peržiūrėti ir modifikuoti toliau pateiktą scenarijų ir `S3` kartą paskelbdami nukopijuoti tik laipsniškus pakeitimus.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Nepamirškite sukonfigūruoti `CDN` kad kelio, kuris baigiasi `/.v` , talpyklos laikas būtų `1s` , kitaip negalėsite iš karto pasiekti naujai išleisto turinio.

### Paskelbti Svetainę

Svetainę galima įdiegti bet kur [github page](https://pages.github.com) ir [cloudflare page](https://pages.cloudflare.com) yra geras pasirinkimas.

Kadangi svetainė naudoja [vieno puslapio programos](https://developer.mozilla.org/docs/Glossary/SPA) architektūrą, `index.html` perrašyti URL kelio, kuriame nėra `. `

Svetainės įvesties puslapį reikia įdiegti tik vieną kartą ir nereikia iš naujo įdiegti svetainės įvesties puslapio, kad būtų galima atnaujinti turinį.

#### Įdiegti github Puslapyje

Pirmiausia [spustelėkite čia github kad sukurtumėte organizaciją](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Tada sukurkite šios `i18n-demo.github.io` sandėlį (pakeiskite `i18n-demo` savo sukurtu organizacijos pavadinimu):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Skelbiant ankstesnio straipsnio turinį, jis buvo : Įveskite šį katalogą ir paleiskite `out/ol/htm`

```
ln -s index.html 404.html
```


`github page` nepalaiko URL kelio perrašymo, todėl vietoj jo naudojamas `404.html` .

Tada paleiskite šią komandą `htm` (nepamirškite pakeisti `i18n-demo/i18n-demo.github.io.git` savo sandėlio adresu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Paspaudę kodą palaukite, `github page` bus sėkmingai įdiegtas (kaip parodyta toliau), tada galėsite jį pasiekti.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demonstracinį puslapį rasite:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Įdiegti „Cloudflare“ Puslapyje

Palyginti `github page` [cloudflare page](//pages.cloudflare.com)

Diegimas paprastai grindžiamas aukščiau pateiktu `github page` diegimu `cloudflare page`

Sukurkite projektą ir susiekite aukščiau pateiktą sandėlį `i18n-demo.github.io`

Procesas parodytas paveikslėlyje žemiau:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Spustelėkite `Add Account` kad suteiktumėte prieigą prie `i18n-demo` .

Jei susiejote kitos organizacijos sandėlį, gali tekti du kartus spustelėti `Add Account` kad jį patvirtintumėte, kol bus rodoma nauja organizacija.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Tada `i18n-demo.github.io` Sandėlis, tada spustelėkite `Begin setup` ir tolesniems veiksmams naudokite numatytąsias reikšmes.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Surišę pirmą kartą, turite palaukti kelias minutes, kol galėsite jį pasiekti.

Įdiegę galite susieti pasirinktinį domeno pavadinimą.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Susieję tinkintą domeno pavadinimą, eikite į domeno pavadinimą, kad sukonfigūruotumėte vieno puslapio programos kelio perrašymą, kaip parodyta toliau:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Aukščiau esančioje nuotraukoje pateiktos taisyklės, pirmoje eilutėje `i18n.site` jums susietu domeno vardu.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Be to, sukonfigūruokite talpyklos taisykles, kaip parodyta toliau, ir nustatykite talpyklos trukmę iki vieno mėnesio.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Pakeiskite domeno vardą, atitinkantį antrajame žingsnyje aukščiau esančiame paveikslėlyje, į susietą domeno vardą.

#### Svetainės Diegimo Žemyninėje Kinijoje Optimizavimas

Jei norite pasiekti geresnį pasiekiamumo našumą žemyninės Kinijos tinklo aplinkoje, pirmiausia [užregistruokite domeno vardą](//beian.aliyun.com) .

Tada naudokite `out/ol/htm` tiekėjų objektų saugyklą žemyninėje `CDN` +

Galite naudoti krašto skaičiavimą, kad perrašytumėte kelią, kad prisitaikytumėte prie vieno puslapio programų, pvz. [, Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Jį galima sukonfigūruoti taip:

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

`MX` įrašai ir `CNAME` įrašai negali `A` kartu, jei norite gauti `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Be to, kadangi debesų tiekėjų užjūrio srauto mokesčiai žemyninėje Kinijoje yra gana brangūs, jei norite optimizuoti išlaidas, galite naudoti [nemokamą DNS Huawei Cloud“ geografinę skiriamąją gebą](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ir [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) tinkintą domeno pavadinimą (kaip parodyta toliau). eismo nukreipimas──Eismo maršrutas žemyninėje Kinijoje Baidu Cloud `CDN` tarptautinis eismas vyksta cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Šie diegimo optimizavimo sprendimai yra sudėtingesni ir ateityje bus pristatyti atskiruose skyriuose.

#### Bendrasis Domeno Vardo Peradresavimas

`*.xxx.com` `www.xxx.com` pagrindinę `xxx.com` naudojate `i18n.site`

Šis reikalavimas gali būti įvykdytas naudojant Alibaba Cloud `CDN` `EdgeScript` ( [angliškas dokumentas](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kinų dokumentas](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )!

Pridėkite domeno pavadinimą [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ir nukreipkite domeno `*.xxx.com` į Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Pavyzdžiui, aukščiau esančiame paveikslėlyje `*.i18n.site` viso domeno vardo peradresavimo konfigūracija yra tokia:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Diegti Su nginx

Pridėkite konfigūraciją, panašią į toliau pateiktą `server` nginx kur `/root/i18n/md/out/ol/htm` pakeiskite ją į savo projekto `out/ol/htm` kelią:

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

#### Viešas

Statiniai svetainės failai, pvz `favicon.ico` `robots.txt` ir kt.

Čia esančius piktogramų failus galima sugeneruoti naudojant [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Po `.i18n` yra `i18n.site` konfigūracijos failai, vertimo [talpykla](/i18n.site/conf) ir t.

#### Lt

Pirminės kalbos katalogas, `.i18n/conf.yml` `fromTo` `en` konfigūracijos faile

```yaml
i18n:
  fromTo:
    en: zh
```

Žr. vertimo konfigūraciją [i18](/i18/use)


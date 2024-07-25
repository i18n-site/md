# Დააინსტალირეთ &

## Კონფიგურაციის Ჟეტონი

თარგმანის `i18` ინსტრუმენტი ჩაშენებულია, გთხოვთ `i18n.site` [დააწკაპუნოთ აქ `i18` დოკუმენტზე წვდომის ნიშნის კონფიგურაციისთვის](/i18/use) .

## Დაინსტალირება

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Დემო Პროექტი

დავიწყოთ დემო პროექტით და ვისწავლოთ როგორ გამოვიყენოთ `i18n.site`

ჩვენ ჯერ კლონირებთ დემო საცავს და ვასრულებთ ბრძანებას შემდეგნაირად:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

მომხმარებლებს მატერიკულ ჩინეთში შეუძლიათ:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

კოდის ბაზის კლონის დირექტორიას სახელი უნდა იყოს `md` `demo.i18n.site` რათა ხელი შეუწყოს ლოკალურ გადახედვას `docker` .

### Თარგმნა

პირველ რიგში, შეიყვანეთ `md` და გაუშვით `i18n.site` , რომელიც გადაითარგმნება `en` -ზე `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

გაშვების შემდეგ შეიქმნება თარგმანი და ქეში ფაილები, გთხოვთ, დაამატოთ ისინი `md` `git add . ` .

### Ადგილობრივი Გადახედვა

დააინსტალირეთ და `docker` ( `MAC` გვირჩევენ გამოიყენონ [orbstack](https://orbstack.dev) როგორც `docker` დრო).

შემდეგ [https://127.0.0.1](https://127.0.0.1) შეიყვანეთ `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Განათავსეთ Შინაარსი

`i18n.site` [ერთგვერდიანი აპლიკაციის](https://developer.mozilla.org/docs/Glossary/SPA) არქიტექტურას და ვებსაიტის შესასვლელი გვერდი და ვებსაიტის შინაარსი დამოუკიდებლად არის განლაგებული.

ზემოაღნიშნული თარგმანის გაშვების შემდეგ, `md/out/dev` `htm` და `v` გამომუშავდება.

აქ, `dev` მიუთითებს, რომ ის აგებულია `.i18n/htm/dev.yml` ფაილის საფუძველზე.

: ქვეშ `dev`

`htm` არის ვებსაიტის შესასვლელი გვერდი.

`v` შეიცავს ვებსაიტის შინაარსს ვერსიის ნომრით.

ადგილობრივი გადახედვა დააკოპირებს ყველა ფაილს `out/dev/v/0.1.0` , ვერსიის ნომრის მიუხედავად.

ოფიციალური გამოშვებისთვის, შეცვლილი ფაილები დაკოპირდება ახალი ვერსიის ნომრების დირექტორიაში.

#### Გამოიყენეთ -c Კონფიგურაციის Ფაილის Დასაზუსტებლად

სხვადასხვა კონფიგურაციის ფაილი შექმნის შესაბამის დირექტორიას `out` .

მაგალითად, `.i18n/htm/ol.yml` შექმნის `out/ol` დირექტორიას.

`dev.yml` და `ol.yml` არის ნაგულისხმევი კონფიგურაციები.

`dev` არის აბრევიატურა `development` , რომელიც წარმოადგენს განვითარების გარემოს, გამოიყენება ლოკალური გადახედვისთვის და ასევე არის ნაგულისხმევი კონფიგურაციის ფაილი.
`ol` აბრევიატურა `online` , რომელიც წარმოადგენს ონლაინ გარემოს, გამოიყენება ოფიციალური გამოქვეყნებისთვის `npm` `-n` ხაზის პარამეტრის გამოყენებით.

თქვენ `--htm_conf` შეგიძლიათ შექმნათ სხვა კონფიგურაციის ფაილები.

მაგალითად:
```
i18n.site --htm_conf yourConfig --save
```

`--save` მიუთითებს განახლების გამოშვების ვერსიის ნომერი.

#### <a rel=id href="#npm" id="npm"></a> შინაარსის გამოქვეყნება npmjs.com-ზე

[npmjs.com](//npmjs.com) გამოქვეყნება არის რეკომენდებული ნაგულისხმევი გადაწყვეტა (იხ [. მაღალი ხელმისაწვდომობა](/i18n.site/feature#ha) ).

##### npm login &

დააინსტალირეთ `nodejs` გამოიყენეთ `npm login` შესასვლელად.

შეცვალეთ `md/.i18n/htm/ol.yml` შეცვალეთ `i18n.site` -ში `v: //unpkg.com/i18n.site` -ში თქვენი `npm` პაკეტის სახელი.

უბრალოდ გამოიყენეთ დაუკავებელი პაკეტის სახელი [npmjs.com](//npmjs.com)

`npm` დაფუძნებული გამოქვეყნებისას `/.v` **დარწმუნდით, რომ გამოიყენეთ `//unpkg.com/` ,** `i18n.site` `v:` მნიშვნელობის პრეფიქსი.

გაუშვით `i18n.site --npm` ან `i18n.site -n` `md` , რომ თარგმნოთ და გამოაქვეყნოთ.

თუ თქვენ იყენებთ უწყვეტი ინტეგრაციის გარემოს გამოქვეყნებისთვის, არ არის საჭირო მისი ინსტალაცია `nodejs` უბრალოდ დააკოპირეთ შესული და გამოქვეყნებული `~/.npmrc` გარემოში.

თუ შეცვლით პაკეტის სახელს `v:` `ol.yml` , გთხოვთ **, ჯერ წაშალოთ `.i18n/v/ol`** და შემდეგ გამოაქვეყნოთ.

##### Პროქსი Სერვერი Გამოქვეყნებულია Npm-Ის Მიერ

თუ ჩინეთში მომხმარებლები აწყდებიან ქსელის პრობლემებს და არ შეუძლიათ `npm` გამოქვეყნება, მათ შეუძლიათ დააყენონ გარემოს ცვლადი `https_proxy` პროქსი სერვერის კონფიგურაციისთვის.

თუ ვივარაუდებთ, რომ თქვენი პროქსი სერვერის პორტი არის `7890` შეგიძლიათ დაწეროთ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Თვითმმართველობის Მასპინძლობს Კონტენტი

თუ გსურთ კონტენტის თვითმასპინძლობა, პირველ რიგში `md/.i18n/htm/ol.yml` შეცვალეთ `v: //unpkg.com/i18n.site` და შეცვალეთ თქვენი URL პრეფიქსი, როგორიცაა `v: //i18n-v.xxx.com` .

შეიყვანეთ `md` და გაუშვით

```
i18n.site --htm_conf ol --save
```

ან აბრევიატურა

```
i18n.site -c ol -s
```

შემდეგ, დააკონფიგურირეთ შიგთავსი `md/out/ol/v` `v:` ში მითითებული URL პრეფიქსის ბილიკზე.

დაბოლოს, **`1s` ქეშის დრო, რომელიც მთავრდება `/.v`**

ქეშის დრო სხვა ბილიკებისთვის შეიძლება დაყენდეს ერთ წელზე ან მეტზე, რათა შემცირდეს არასაჭირო მოთხოვნები.

##### Კონტენტის Მასპინძლობა S3-Ზე

კონტენტის თვითმასპინძლობისთვის, საკუთარი სერვერის გამოყენების გარდა, `CDN` ერთი გავრცელებული ვარიანტია + `S3`

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

დაიმახსოვრე `CDN` რომ `/.v` -ით დამთავრებული გზის ქეშის დრო იყოს `1s` , წინააღმდეგ შემთხვევაში თქვენ ვერ შეძლებთ ახლად გამოშვებულ კონტენტზე დაუყოვნებლივ წვდომას.

### Ვებგვერდის Გამოქვეყნება

ვებსაიტის განთავსება შესაძლებელია ყველგან [github page](https://pages.github.com) და [cloudflare page](https://pages.cloudflare.com) კარგი არჩევანია.

იმის გამო, რომ ვებსაიტი იყენებს [ერთგვერდიანი აპლიკაციის](https://developer.mozilla.org/docs/Glossary/SPA) არქიტექტურას, არ `index.html` დაგვავიწყდეს, რომ გადაწეროთ URL-ის ბილიკი, რომელიც არ შეიცავს `. `

ვებსაიტის შესვლის გვერდი მხოლოდ ერთხელ უნდა განთავსდეს და არ არის საჭირო ვებსაიტის შესვლის გვერდის ხელახლა განთავსება შინაარსის შემდგომი განახლებისთვის.

#### Განთავსება github Გვერდზე

ჯერ [დააწკაპუნეთ აქ github რომ შექმნათ ორგანიზაციის](https://github.com/account/organizations/new?plan=free) მაგალითი `i18n-demo`

შემდეგ შექმენით საწყობი ამ `i18n-demo.github.io` ქვეშ (გთხოვთ შეცვალოთ `i18n-demo` თქვენს მიერ შექმნილი ორგანიზაციის სახელით):

<img alt="" src="https://p.3ti.site/1721098657.avif">

წინა სტატიაში შიგთავსის გამოქვეყნებისას ის გენერირებულია `out/ol/htm` გთხოვთ შეიყვანოთ ეს დირექტორია და გაუშვით :

```
ln -s index.html 404.html
```


იმის გამო, რომ `github page` არ უჭერს მხარს URL ბილიკის გადაწერას, ამიტომ გამოიყენება `404.html` .

შემდეგ გაუშვით შემდეგი ბრძანება `htm` (გახსოვდეთ შეცვალოთ `i18n-demo/i18n-demo.github.io.git` თქვენი საწყობის მისამართით) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

კოდის დაჭერის შემდეგ, დაელოდეთ `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

დემო გვერდისთვის იხილეთ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Განთავსება cloudflare Გვერდზე

`github page` [cloudflare page](//pages.cloudflare.com)

განლაგება `cloudflare page` ეფუძნება `github page` ზემოთ მოყვანილ განლაგებას.

შექმენით პროექტი და დააკავშირეთ `i18n-demo.github.io` საწყობი.

პროცესი ნაჩვენებია ქვემოთ მოცემულ ფიგურაში:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

გთხოვთ `Add Account` `i18n-demo` ორგანიზაციაზე წვდომის მისაცემად.

თუ თქვენ გაქვთ შეკრული სხვა ორგანიზაციის საწყობი, შეიძლება დაგჭირდეთ ორჯერ `Add Account` მის ავტორიზაციაზე, სანამ ახალი ორგანიზაცია გამოჩნდება.

<img alt="" src="https://p.3ti.site/1721118306.avif">

შემდეგ აირჩიეთ `i18n-demo.github.io` , შემდეგ დააჭირეთ `Begin setup` და გამოიყენეთ ნაგულისხმევი მნიშვნელობები შემდგომი ნაბიჯებისთვის.

<img alt="" src="https://p.3ti.site/1721118490.avif">

პირველად შეკვრის შემდეგ, თქვენ უნდა დაელოდოთ რამდენიმე წუთს, სანამ შეძლებთ მასზე წვდომას.

განლაგების შემდეგ, შეგიძლიათ დააკავშიროთ საკუთარი დომენის სახელი.

<img alt="" src="https://p.3ti.site/1721119459.avif">

მორგებული დომენის სახელის დაკავშირების შემდეგ, გთხოვთ, გადახვიდეთ დომენის სახელზე, რათა დააკონფიგურიროთ ერთგვერდიანი აპლიკაციის გადაწერის გზა, როგორც ეს ნაჩვენებია ქვემოთ:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ზემოთ მოცემულ სურათზე მოცემული წესები შემდეგია `i18n.site`

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

გარდა ამისა, გთხოვთ, დააკონფიგურიროთ ქეშის წესები, როგორც ნაჩვენებია ქვემოთ, და დააყენოთ ქეშის ხანგრძლივობა ერთ თვეზე.

<img alt="" src="https://p.3ti.site/1721125111.avif">

გთხოვთ, შეცვალოთ დომენის სახელი, რომელიც შეესაბამება მეორე საფეხურს ზემოთ მოცემულ სურათზე, თქვენ მიერ შეკრულ დომენის სახელზე.

#### Ვებსაიტების Განლაგების Ოპტიმიზაცია Მატერიკულ Ჩინეთში

თუ გსურთ მიიღოთ უკეთესი ხელმისაწვდომობის შესრულება კონტინენტური ჩინეთის ქსელურ გარემოში, გთხოვთ, ჯერ [დაარეგისტრიროთ დომენის სახელი](//beian.aliyun.com) .

შემდეგ `CDN` ღრუბლოვანი გამყიდველების `out/ol/htm` ჩინეთში +

თქვენ შეგიძლიათ გამოიყენოთ edge computing, რათა გადაწეროთ გზა ერთგვერდიან აპლიკაციებთან, როგორიცაა [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`A` `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `MX`

გარდა ამისა, იმის გამო, რომ ჩინეთში ღრუბლოვანი მოვაჭრეების საზღვარგარეთული ტრაფიკის გადასახადი შედარებით ძვირია, თუ გსურთ ხარჯების ოპტიმიზაცია, შეგიძლიათ გამოიყენოთ [Huawei Cloud-ის უფასო გეოგრაფიული DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) და [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) -ის მორგებული დომენის სახელი (როგორც ნაჩვენებია ქვემოთ). მოძრაობის გადამისამართება──ტრაფიკი მატერიკულ ჩინეთში Baidu Cloud `CDN` საერთაშორისო ტრაფიკი მიდის cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

განლაგების ოპტიმიზაციის ეს გადაწყვეტილებები უფრო რთულია და მომავალში ცალკე თავებში იქნება წარმოდგენილი.

#### Ზოგადი Დომენის Სახელის Გადამისამართება

თუ თქვენ იყენებთ `i18n.site` -ს ვებსაიტის გენერირებისთვის თქვენს მთავარ ვებსაიტად, თქვენ ჩვეულებრივ უნდა დააკონფიგურიროთ პან-დომენის გადამისამართება, ანუ გადამისამართოთ `*.xxx.com` (მათ შორის `www.xxx.com` ) წვდომაზე `xxx.com` .

ამ მოთხოვნის მიღწევა შესაძლებელია Alibaba Cloud-ის `EdgeScript` ( [ინგლისური დოკუმენტი](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ჩინური დოკუმენტის](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) დახმარებით `CDN`

დაამატეთ დომენის სახელი [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ში და მიუთითეთ `*.xxx.com` სახელი Alibaba Cloud `CDN` -ის `CNAME` -ზე.

<img alt="" src="https://p.3ti.site/1721122000.avif">

მაგალითად, პან-დომენის სახელის გადამისამართების `*.i18n.site` სურათზე არის შემდეგი:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Განათავსეთ Nginx-Ით

გთხოვთ, დაამატოთ შემდეგი კონფიგურაცია `server` nginx სადაც `/root/i18n/md/out/ol/htm` გთხოვთ შეცვალოთ იგი თქვენი საკუთარი პროექტის გზაზე `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Დირექტორია Სტრუქტურა

#### Საჯარო

ვებსაიტის სტატიკური ფაილები, როგორიცაა `favicon.ico` `robots.txt` და ა.შ.

ხატულა ფაილების გენერირება შესაძლებელია [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

საწყისი ენის დირექტორია, რომელიც შეესაბამება `fromTo` `en` `.i18n/conf.yml` ფაილში

```yaml
i18n:
  fromTo:
    en: zh
```

გთხოვთ, გაეცნოთ თარგმანის კონფიგურაციას [i18](/i18/use)


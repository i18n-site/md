# E Hoʻouka &

## Hōʻailona Hoʻonohonoho

`i18n.site` `i18` [`i18`](/i18/use)

## Hoʻokomo

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Papahana Demo

E hoʻomaka me kahi papahana demo a aʻo pehea e hoʻohana ai `i18n.site`

Hoʻopili mua mākou i ka waihona demo a holo i ke kauoha penei:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Hiki i nā mea hoʻohana ma ka ʻāina nui Kina ke:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` ka inoa papa kuhikuhi o ka code base clone he `md` no ka hoʻomaʻamaʻa ʻana i ka nānā ʻana me `docker` .

### Unuhi

ʻO ka mua, e `en` `zh` ka papa `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ma hope o ka holo ʻana, e hana ʻia nā waihona unuhi a me nā waihona huna e hoʻohui iā lākou i ka waihona `git add . ` ma ka papa `md` .

### Nāmua Kūloko

`MAC` `docker` a [orbstack](https://orbstack.dev) `docker`

A laila, e [https://127.0.0.1](https://127.0.0.1) `./up.sh` ka `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Hoʻouna Maʻiʻo

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Ma hope o ka holo ʻana i ka unuhi ma luna, e hana ʻia nā papa kuhikuhi `htm` a me `v` ma ka papa kuhikuhi `md/out/dev`

Eia `dev` hōʻike ʻia ua kūkulu ʻia ma muli o ka faila `.i18n/htm/dev.yml` .

`dev` :

Ma lalo o ka papa kuhikuhi ka ʻaoʻao komo pūnaewele `htm`

`v`

E kope ʻia nā faila āpau i ka papa `out/dev/v/0.1.0` me ka nānā ʻole i ka helu mana.

No ka hoʻokuʻu kūhelu, e kope ʻia nā faila i hoʻololi ʻia i ka papa kuhikuhi helu mana hou.

#### E Hoʻohana I -c E Kuhikuhi I Ka Faila Hoʻonohonoho

E hana nā waihona hoʻonohonoho like ʻole i nā papa kuhikuhi ma lalo o ka papa kuhikuhi `out`

No ka laʻana, e hana `out/ol` `.i18n/htm/ol.yml`

`dev.yml` a me `ol.yml` nā hoʻonohonoho paʻamau.

`dev` ʻo ia ka pōkole o `development` , e hōʻike ana i ke kaiapuni hoʻomohala, hoʻohana ʻia no ka nānā mua ʻana, a ʻo ia hoʻi ka faila hoʻonohonoho paʻamau.
`ol` ʻo ia ka pōkole o `online` , e hōʻike ana i ke kaiapuni pūnaewele, hoʻohana ʻia no ka hoʻokuʻu kūhelu, a ʻo ia hoʻi ka faila hoʻonohonoho paʻamau i ka wā e paʻi ana i `npm` me ka hoʻohana ʻana i ka palena laina kauoha `-n` .

Hiki iā ʻoe ke hana i nā faila hoʻonohonoho ʻē aʻe `--htm_conf` hoʻohana i ka laina kauoha e kuhikuhi i ka inoa file hoʻonohonoho.

ʻo kahi laʻana:
```
i18n.site --htm_conf yourConfig --save
```

Eia `--save`

#### <a rel=id href="#npm" id="npm"></a> Hoʻopuka i ka ʻike ma npmjs.com

ʻO ka hoʻopuka ʻana i [ka](/i18n.site/feature#ha) ʻike i ka [npmjs.com](//npmjs.com)

##### npm login &

E hoʻouka `nodejs` e hoʻohana i `npm login` e komo.

Hoʻoponopono `md/.i18n/htm/ol.yml` hoʻololi `i18n.site` i `v: //unpkg.com/i18n.site` i kāu iho `npm` inoa pūʻolo.

E hoʻohana wale i ka inoa pūʻolo i hoʻohana ʻole ʻia ma [npmjs.com](//npmjs.com)

I ka `i18n.site` ʻana ma `/.v` o `v:` **`//unpkg.com/`** `npm`

E holo `i18n.site --npm` a i ʻole `i18n.site -n` ma ka papa kuhikuhi `md`

Inā hoʻohana ʻoe i kahi kaiapuni hoʻohui hoʻomau e paʻi, ʻaʻohe pono e hoʻokomo `~/.npmrc` ia `nodejs`

Inā hoʻololi ʻoe **`.i18n/v/ol`** ka inoa pūʻolo ma `v:` i ka `ol.yml`

##### Paʻi ʻia Ke Kikowaena Proxy E npm

Inā pilikia nā mea hoʻohana ma ka ʻāina nui o Kina a ʻaʻole `https_proxy` iā lākou ke hoʻopuka i ka pūʻolo `npm`

Ke manaʻo nei ʻo kāu port server proxy ʻo `7890` hiki iā ʻoe ke kākau:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Maʻiʻo Hoʻokipa Ponoʻī

Inā makemake ʻoe e hoʻokipa iā ʻoe iho i ka ʻike, `md/.i18n/htm/ol.yml` hoʻoponopono mua a hoʻololi i `v: //unpkg.com/i18n.site` i kāu prefix URL, e like me `v: //i18n-v.xxx.com` .

E komo i ka papa kuhikuhi `md`

```
i18n.site --htm_conf ol --save
```

a i ʻole ka pōkole

```
i18n.site -c ol -s
```

A laila, hoʻonohonoho i ka ʻike ma ka `v:` kuhikuhi `md/out/ol/v`

ʻO ka hope, **e hoʻonohonoho i ka manawa huna o ke ala e pau `/.v` i ka `1s`** , inā ʻaʻole hiki ke kiʻi koke ʻia nā mea hou i hoʻokuʻu ʻia.

Hiki ke hoʻonohonoho ʻia ka manawa hūnā no nā ala ʻē aʻe i hoʻokahi makahiki a ʻoi aku paha e hōʻemi i nā noi pono ʻole.

##### E Hoʻokipa Ma s3

No ka mea hoʻokipa ponoʻī, ma waho aʻe o ka hoʻohana ʻana `CDN` kāu kikowaena ponoʻī, ʻo kekahi koho maʻamau e hoʻohana i + `S3`

`S3` iā ʻoe ke hoʻohana i ka server [rclone](https://rclone.org) Login `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

E hoʻomanaʻo i ka hoʻonohonoho ʻana `CDN` no laila ʻo ka manawa huna o ke ala e pau ana i `/.v` he `1s` , inā ʻaʻole hiki iā ʻoe ke komo koke i ka ʻike i hoʻokuʻu ʻia.

### Hoʻolaha Pūnaewele

Hiki ke kau ʻia ka punaewele ma nā wahi a pau [github page](https://pages.github.com) a ʻo [cloudflare page](https://pages.cloudflare.com) nā koho maikaʻi.

Ma muli o ka hoʻohana ʻana o ka pūnaewele i ka hoʻolālā ʻana o [kahi noi ʻaoʻao hoʻokahi](https://developer.mozilla.org/docs/Glossary/SPA) , e hoʻomanaʻo e kākau hou i ke ala URL ʻaʻole i `. ` i ka `index.html` .

Hoʻokahi wale nō mea e pono ai ka ʻaoʻao komo pūnaewele, a ʻaʻohe pono e hoʻihoʻi hou i ka ʻaoʻao komo pūnaewele no ka hoʻonui ʻana i nā ʻike ma hope.

#### E Hoʻolālā Ma Ka ʻaoʻao github

E [kaomi mua github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

A laila, e hana i hale `i18n-demo` ma lalo o kēia hui `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

I ka hoʻopuka ʻana i ka ʻatikala ma mua, ua hana : `out/ol/htm`

```
ln -s index.html 404.html
```


No ka mea, ʻaʻole kākoʻo `404.html` `github page`

A laila e holo `i18n-demo/i18n-demo.github.io.git` kēia kauoha : ka papa kuhikuhi `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ma hope o ke kaomi ʻana i ke code, e kali i ka holo ʻana o ka `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

No ka ʻaoʻao demo e ʻoluʻolu e ʻike:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### E Hoʻolālā Ma Ka ʻaoʻao cloudflare

Hoʻohālikelike ʻia [cloudflare page](//pages.cloudflare.com) `github page` , hāʻawi ia i ke kākau hou ʻana a ʻoi aku ka maikaʻi o ka ʻāina ʻo Kina a ʻoi aku ka maʻalahi o ka hoʻohana.

`cloudflare page` `github page`

Hana i kahi papahana a hoʻopaʻa i ka hale kūʻai ma luna `i18n-demo.github.io`

Hōʻike ʻia ke kaʻina hana ma ke kiʻi ma lalo.
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

E ʻoluʻolu e kaomi i ka `Add Account` no ka hāʻawi ʻana aku i ka `i18n-demo` .

Inā ua hoʻopaʻa ʻoe i ka hale kūʻai o kahi hui ʻē aʻe, pono ʻoe e kaomi `Add Account` ʻelua manawa e ʻae iā ia ʻelua ma mua o ka hōʻike ʻia ʻana o ka hui hou.

<img alt="" src="https://p.3ti.site/1721118306.avif">

A laila koho `i18n-demo.github.io` ka hale kūʻai, a laila kaomi i `Begin setup` , a hoʻohana i nā koina paʻamau no nā pae aʻe.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Ma hope o ka hoʻopaʻa ʻana no ka manawa mua, pono ʻoe e kali i kekahi mau minuke ma mua o ke komo ʻana iā ia.

Ma hope o ka hoʻolaha ʻana, hiki iā ʻoe ke hoʻopaʻa i kahi inoa inoa maʻamau.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Ma hope o ka hoʻopaʻa ʻana i ka inoa kikowaena maʻamau, e ʻoluʻolu e hele i ka inoa domain e hoʻonohonoho i ke ala kākau hou ʻana o ka palapala noi ʻaoʻao hoʻokahi, e like me ka mea i hōʻike ʻia ma lalo nei:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ʻO nā lula ma ke kiʻi ma luna nei, e ʻoluʻolu e hoʻololi `i18n.site` ka laina mua ma lalo me ka inoa inoa i hoʻopaʻa ʻia iā ʻoe.

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

Eia hou, e ʻoluʻolu e hoʻonohonoho i nā lula cache, e like me ka mea i hōʻike ʻia ma lalo nei, a hoʻonohonoho i ka lōʻihi o ka cache i hoʻokahi mahina.

<img alt="" src="https://p.3ti.site/1721125111.avif">

E ʻoluʻolu e hoʻololi i ka inoa kikowaena e pili ana i ka ʻanuʻu ʻelua o ke kiʻi ma luna nei i ka inoa domain āu i hoʻopaʻa ai.

#### Hoʻonui I Ka Hoʻolaha Pūnaewele Ma Ka ʻāina Nui O Kina

Inā makemake ʻoe e ʻoi aku ka maikaʻi o ka hoʻokō ʻana i ka ʻoihana pūnaewele o ka ʻāina nui o Kina, e ʻoluʻolu [e hoʻopaʻa inoa mua i kahi inoa kikowaena](//beian.aliyun.com) .

A laila, e hoʻohana `out/ol/htm` ka waiho ʻana o nā mea kūʻai kapua ma ka ʻāina nui `CDN` Kina +

Hiki iā ʻoe ke hoʻohana i ka helu ʻaoʻao e kākau hou i ke ala e hoʻololi ai i nā noi ʻaoʻao hoʻokahi, e like me [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Hiki ke hoʻonohonoho ʻia e like me kēia:

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

`CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `MX` `CNAME` `A`

Eia kekahi, no ka nui o ke kumukūʻai o nā kaʻa kūʻai ma waho o ka ʻāina ʻo Kina, inā makemake ʻoe e hoʻonui i nā kumukūʻai, hiki iā ʻoe ke hoʻohana i [ka hoʻonā ʻāina manuahi DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) a me ka inoa inoa maʻamau o [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (e like me ka mea i hōʻike ʻia ma lalo nei). kaʻahele kaʻahele──Kaa kaʻa ma ka ʻāina nui ʻo Kina Baidu Cloud `CDN` hele ka huakaʻi honua cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

ʻOi aku ka paʻakikī o kēia mau hoʻonā hoʻolālā hoʻolaha a hoʻokomo ʻia i nā mokuna kaʻawale i ka wā e hiki mai ana.

#### Hoʻihoʻi Hou I Ka Inoa Puni Honua

Inā hoʻohana ʻoe i ka `i18n.site` no ka hoʻokumu ʻana i kahi pūnaewele ma ke ʻano he pūnaewele nui, pono ʻoe e hoʻonohonoho i ka hoʻohuli ʻana i ka pan-domain, ʻo ia hoʻi, hoʻihoʻi hou i `*.xxx.com` (me `www.xxx.com` ) ke komo i `xxx.com` .

Hiki ke hoʻokō ʻia kēia koi me ke kōkua ʻana o ka Alibaba `CDN` 's `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Hoʻohui i kahi inoa kikowaena ma [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a kuhikuhi i `*.xxx.com` inoa kikowaena iā Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

No ka laʻana, ʻo ka hoʻonohonoho hoʻonohonoho hou ʻana o ka inoa pan-domain o `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### E Hoʻouka Me Ka nginx

E `/root/i18n/md/out/ol/htm` e hoʻohui `out/ol/htm` kahi hoʻonohonoho e like me kēia ma `server` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Papa Kuhikuhi

#### Lehulehu

Nā waihona kikoo o ka pūnaewele, e like me `favicon.ico` `robots.txt` , etc.

Hiki ke hana ʻia nā faila ikona me ka [realfavicongenerator.net](https://realfavicongenerator.net) .

#### .i18n

Aia ma lalo o ka papa kuhikuhi `i18n.site` faila hoʻonohonoho, kahi huna unuhi, a pēlā aku `.i18n` E nānā i ka mokuna ["Configuration"](/i18n.site/conf) no nā kikoʻī.

#### en

Papa kuhikuhi ʻōlelo kumu, e pili ana `.i18n/conf.yml` `fromTo` `en` ma ka waihona hoʻonohonoho

```yaml
i18n:
  fromTo:
    en: zh
```

E ʻoluʻolu e nānā i ka hoʻonohonoho ʻana o ka unuhi [i18](/i18/use)


# Hoʻolaha a Me Ka Pūnaewele

`i18n.site` i ka hoʻolālā [palapala noi ʻaoʻao hoʻokahi](https://developer.mozilla.org/docs/Glossary/SPA) , a ua hoʻonohonoho kūʻokoʻa ka ʻaoʻao komo pūnaewele a me ka ʻike pūnaewele.

Ma hope o ka holo ʻana i ka unuhi ma luna, e hana ʻia nā papa kuhikuhi `htm` a me `v` ma lalo o ka papa kuhikuhi `md/out/dev` .

Maʻaneʻi,ʻo `dev` ka mea i kūkuluʻia ma muli o ka waihona hoʻonohonoho `.i18n/htm/dev.yml` .

`dev` papa kuhikuhi :

ʻO ka papa kuhikuhi `htm` ka ʻaoʻao komo pūnaewele.

Aia ma ka papa kuhikuhi `v` ka ʻike pūnaewele me nā helu mana.

ʻAʻole mālama ka nānā ʻana i ka helu mana a e kope i nā faila āpau i ka papa kuhikuhi `out/dev/v/0.1.0` .

No ka hoʻokuʻu kūhelu, e kope ʻia nā faila i hoʻololi ʻia i ka papa kuhikuhi helu mana hou.

## E Wehewehe I Ka Faila Hoʻonohonoho Me `-c`

E hana nā faila hoʻonohonoho ʻokoʻa i nā papa kuhikuhi pili i ka papa kuhikuhi `out` .

No ka laʻana, e hana ʻo `.i18n/htm/main.yml` i ka papa kuhikuhi `out/main` .

ʻO `dev.yml` a me `main.yml` nā hoʻonohonoho paʻamau.

ʻO `dev` ka pōkole o `development` , e hōʻike ana i ke kaiapuni hoʻomohala, i hoʻohana ʻia no ka ʻike maka kūloko, a ʻo ia hoʻi ka faila hoʻonohonoho paʻamau.
ʻO `ol` ka pōkole o `online` , e hōʻike ana i ke kaiapuni pūnaewele, i hoʻohana ʻia no ka hoʻokuʻu kūhelu ʻana ʻo ia hoʻi ka faila hoʻonohonoho paʻamau i ka wā e hoʻohana ai i nā palena laina kauoha `-n` a `npm` e hoʻokuʻu.

Hiki iā ʻoe ke hana i nā faila hoʻonohonoho ʻē aʻe E hoʻohana i `--htm_conf` ma ka laina kauoha e kuhikuhi i ka inoa file hoʻonohonoho e hoʻohana ai.

ʻo kahi laʻana:
```
i18n.site --htm_conf dist --save
```

Ma ʻaneʻi, hōʻike ʻo `--save` i ka helu mana hoʻokuʻu hou.

## <a rel=id href="#npm" id="npm"></a> Hoʻopuka i ka ʻike ma npmjs.com

ʻO ka hoʻopuka ʻana i ka ʻike i [ka](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

### npm &

E hoʻouka i `nodejs` , e komo me `npm login` .

Hoʻoponopono i `md/.i18n/htm/main.yml` a hoʻololi i ka waiwai o [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` e like [npmjs.com](//npmjs.com) kāu inoa pūʻolo `npm` ponoʻī.

A laila hoʻololi i `md/.i18n/htm/main.package.json`

Holo i `i18n.site --npm` a i ʻole `i18n.site -n` ma ka papa kuhikuhi `md` e unuhi a hoʻolaha.

Inā hoʻohana ʻoe i kahi kaiapuni hoʻohui hoʻomau no ka hoʻolaha ʻana, ʻaʻohe pono e hoʻokomo i `nodejs` E kope wale i ka ʻae ʻia a me ka hoʻopuka ʻana i ka ʻae `~/.npmrc` i ke kaiapuni.

Inā hoʻololi ʻoe i ka inoa pūʻolo o `v:` i `main.yml` , **e ʻoluʻolu e holoi mua i `.i18n/v/main`** a laila hoʻolaha.

#### Paʻi ʻia Ke Kikowaena Proxy E npm

Inā pilikia nā mea hoʻohana ma ka ʻāina nui o Kina a hiki ʻole ke hoʻopuka i nā pūʻolo `npm` , hiki iā lākou ke hoʻonohonoho i ka ʻano hoʻololi kaiapuni `https_proxy` e hoʻonohonoho i ka server proxy.

Ke manaʻo nei ʻo `7890` kāu port server port, hiki iā ʻoe ke kākau:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Maʻiʻo Hoʻokipa Ponoʻī

Inā makemake ʻoe e hoʻokipa iā ʻoe iho i ka ʻike, hoʻoponopono mua i `md/.i18n/htm/main.yml` a hoʻololi i `v: //unpkg.com/i18n.site` i kāu prefix URL, e like me `v: //i18n-v.xxx.com` .

E komo i ka papa kuhikuhi `md` a holo

```
i18n.site --htm_conf ol --save
```

a i ʻole ka pōkole

```
i18n.site -c ol -s
```

A laila, hoʻonohonoho i ka ʻike ma ka papa kuhikuhi `md/out/main/v` i ke ala prefix URL i hoʻonohonoho ʻia ma `v:` .

ʻO ka hope, **e hoʻonohonoho i ka manawa huna o ke ala e pau ana i `/.v` a i `1s`** , inā ʻaʻole hiki ke komo koke i nā mea hou i hoʻokuʻu ʻia.

Hiki ke hoʻonohonoho ʻia ka manawa hūnā no nā ala ʻē aʻe i hoʻokahi makahiki a ʻoi aku paha e hōʻemi i nā noi pono ʻole.

## E Hoʻokipa Ma s3

No ka mea hoʻokipa ponoʻī, ma kahi o ka hoʻohana ʻana i kāu kikowaena ponoʻī, `CDN` kahi koho maʻamau e hoʻohana i `S3` +

Hiki iā ʻoe ke hoʻohana i [rclone](https://rclone.org) no ke komo ʻana i ka server `S3` , a laila e nānā a hoʻololi i ka palapala ma lalo nei, a kope wale i nā hoʻololi hoʻonui i ka `S3` no kēlā me kēia hoʻokuʻu.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

E hoʻomanaʻo i ka hoʻonohonoho ʻana i `CDN` no laila ʻo ka manawa huna o ke ala e pau ai i `/.v` ʻo `1s` , inā ʻaʻole hiki ke komo koke i nā mea hou i hoʻokuʻu ʻia.

## Hoʻolaha Pūnaewele

Hiki ke kau ʻia ka punaewele ma nā wahi a pau [github page](https://pages.github.com) a ʻo [cloudflare page](https://pages.cloudflare.com) nā koho maikaʻi.

Ma muli o ka hoʻohana ʻana o ka pūnaewele i kahi hoʻolālā [noiʻi ʻaoʻao hoʻokahi](https://developer.mozilla.org/docs/Glossary/SPA) , e hoʻomanaʻo e kākau hou i nā ala URL ʻaʻohe `. ` a `index.html` .

Hoʻokahi wale nō mea e pono ai ka ʻaoʻao komo pūnaewele, a ʻaʻohe pono e hoʻihoʻi hou i ka ʻaoʻao komo pūnaewele no ka hoʻonui ʻana i nā ʻike ma hope.

### E Hoʻolālā Ma Ka ʻaoʻao github

[E kaomi mua github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

A laila e hana i kahi hale kūʻai `i18n-demo.github.io` ma lalo o kēia hui (e ʻoluʻolu e hoʻololi i `i18n-demo` me ka inoa o ka hui āu i hana ai):

![](https://p.3ti.site/1721098657.avif)

I ka paʻi ʻana i ka ʻatikala ma mua, ua hana ʻia `out/main/htm` e ʻoluʻolu e komo i kēia papa kuhikuhi a holo :

```
ln -s index.html 404.html
```


No ka mea ʻaʻole kākoʻo ʻo `github page` i ke kākau hou ʻana i ke ala URL, hoʻohana ʻia ʻo `404.html` ma kahi.

A laila e holo i kēia kauoha ma ka papa kuhikuhi `htm` (e hoʻomanaʻo e hoʻololi i `i18n-demo/i18n-demo.github.io.git` me kāu helu hale kūʻai ponoʻī) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ma hope o ka paʻi ʻana i ke code, e kali i ka holo ʻana o `github page` e holo kūleʻa (e like me ka hōʻike ʻana ma lalo) ma mua o kou hiki ke komo.

<img src="//p.3ti.site/1721116586.avif" width="350px">

No ka ʻaoʻao demo e ʻoluʻolu e ʻike:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### E Hoʻolālā Ma Ka ʻaoʻao cloudflare

[cloudflare page](//pages.cloudflare.com) ʻia me `github page` , hāʻawi ia i ke kākau hou ʻana i ke ala a ʻoi aku ka maikaʻi o ka ʻāina nui o Kina a ʻoi aku ka maʻalahi o ka hoʻohana.

Hoʻokumu pinepine ʻia ka hoʻolaha ʻana o `cloudflare page` i ka hoʻolaha ʻana o `github page` ma luna.

E hana i kahi papahana a hoʻopaʻa i ka hale kūʻai `i18n-demo.github.io` ma luna.

Hōʻike ʻia ke kaʻina hana ma ke kiʻi ma lalo.
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

E kaomi i `Add Account` no ka hāʻawi ʻana i ke komo i ka hui `i18n-demo` .

Inā ua hoʻopaʻa ʻoe i ka hale kūʻai o kahi hui ʻē aʻe, pono ʻoe e kaomi ʻelua i `Add Account` e ʻae i ʻelua manawa ma mua o ka hōʻike ʻia ʻana o ka hui hou.

![](https://p.3ti.site/1721118306.avif)

A laila, koho i ka hale kūʻai `i18n-demo.github.io` , a laila kaomi i `Begin setup` , a hoʻohana i nā koina paʻamau no nā pae aʻe.

![](https://p.3ti.site/1721118490.avif)

Ma hope o ka hoʻopaʻa ʻana no ka manawa mua, pono ʻoe e kali i kekahi mau minuke ma mua o kou hiki ʻana iā ia.

Ma hope o ka hoʻolaha ʻana, hiki iā ʻoe ke hoʻopaʻa i kahi inoa inoa maʻamau.

![](https://p.3ti.site/1721119459.avif)

Ma hope o ka hoʻopaʻa ʻana i ka inoa kikowaena maʻamau, e ʻoluʻolu e hele i ka inoa domain e hoʻonohonoho i ke ala kākau hou ʻana o ka palapala noi ʻaoʻao hoʻokahi, e like me ka hōʻike ʻana ma lalo nei:

![](https://p.3ti.site/1721119320.avif)

ʻO nā lula ma ke kiʻi ma luna nei, e ʻoluʻolu e hoʻololi i `i18n.site` ma ka laina mua ma lalo me ka inoa inoa āu i hoʻopaʻa ai.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Eia hou, e ʻoluʻolu e hoʻonohonoho i nā lula cache, e like me ka mea i hōʻike ʻia ma lalo nei, a hoʻonohonoho i ka lōʻihi o ka cache i hoʻokahi mahina.

![](https://p.3ti.site/1721125111.avif)

E ʻoluʻolu e hoʻololi i ka inoa kikowaena e pili ana i ka ʻanuʻu ʻelua o ke kiʻi ma luna nei i ka inoa domain āu i hoʻopaʻa ai.

### Hoʻonui I Ka Hoʻolaha Pūnaewele Ma Ka ʻāina Nui O Kina

Inā makemake ʻoe e ʻoi aku ka maikaʻi o ka hoʻokō ʻana i ka ʻoihana pūnaewele o ka ʻāina nui o Kina, e ʻoluʻolu [e hoʻopaʻa inoa mua i kahi inoa kikowaena](//beian.aliyun.com) .

A laila, e hoʻohana i ka waiho ʻana o nā mea kūʻai ao ma `out/main/htm` ʻāina nui o Kina + E hoʻohana i kēia ʻike `CDN` .

Hiki iā ʻoe ke hoʻohana i ka helu ʻaoʻao e kākau hou i ke ala e hoʻololi ai i nā noi ʻaoʻao hoʻokahi No ka laʻana, hiki ke hoʻonohonoho ʻia [ʻo Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) e like me kēia.

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
  // Hiki iā ʻoe ke hoʻonohonoho i ke poʻo pane e hoʻopau i ka hoʻopuka, e like me out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

No ka mea ʻaʻole hiki ke noho pū ka moʻolelo `MX` a me ka moʻolelo `CNAME` , inā makemake ʻoe e loaʻa nā leka uila i ka manawa like, pono ʻoe e hui pū me ka [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) i ka pae `CNAME` i ka moʻolelo `A` .

Eia kekahi, no ka nui o ke kumukūʻai o nā kaʻa kūʻai ma waho o ka ʻāina ʻo Kina, inā makemake ʻoe e hoʻonui i nā kumukūʻai, hiki iā ʻoe ke hoʻohana i [DNS hoʻonā ʻāina manuahi ʻole](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) a me ka inoa inoa maʻamau o [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (e like me ka mea i hōʻike ʻia ma lalo nei). kaʻahele kaʻahele──Ka hele ʻana ma ka ʻāina nui ʻo Kina Baidu Cloud `CDN` , holo kaʻahele honua cloudflare .

![](https://p.3ti.site/1721119788.avif)

ʻOi aku ka paʻakikī o kēia mau hoʻonā hoʻolālā hoʻolaha a hoʻokomo ʻia i nā mokuna kaʻawale i ka wā e hiki mai ana.

### Hoʻihoʻi Hou I Ka Inoa Puni Honua

Inā hoʻohana ʻoe i `i18n.site` e hana i kahi pūnaewele e like me kāu pūnaewele nui, pono ʻoe e hoʻonohonoho i ka pan-domain redirection, ʻo ia hoʻi, hoʻihoʻi hou i ke komo ʻana i `*.xxx.com` (me ka `www.xxx.com` ) i ka `xxx.com` .

Hiki ke hoʻokō ʻia kēia koi me ke kōkua o Alibaba Cloud `CDN` `EdgeScript` ( [palapala Pelekane](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Palapala Kina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

E hoʻohui i ka inoa kikowaena ma [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) a kuhikuhi i ka inoa kikowaena `*.xxx.com` `CNAME` ma Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

No ka laʻana, ʻo ka hoʻonohonoho hoʻohuli ʻana i ka inoa pan-domain o `*.i18n.site` ma ke kiʻi ma luna nei penei:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### E Hoʻouka Me Ka nginx

E ʻoluʻolu e hoʻohui i kahi hoʻonohonoho like me `/root/i18n/md/out/main/htm` ma ka paukū `server` o nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Ma Muli O Ka `github action` Hoʻohui Mau

Hiki iā ʻoe ke kuhikuhi i kēia e hoʻonohonoho i kāu `github action` :

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

E like me ka mea i ʻike ʻia ma ka hoʻonohonoho hoʻonohonoho, hoʻomaka ʻia kēia kaʻina hana i ka wā e pana ana i ka lālā `main` a me ka lālā `dist` .

E hoʻohana ke kaʻina hana i ka faila hoʻonohonoho e pili ana i ka inoa lālā e paʻi i ka palapala ma ʻaneʻi, e hoʻohana ʻia `.i18n/htm/main.yml` a me `.i18n/htm/dist.yml` ma ke ʻano he hoʻonohonoho hoʻopuka.

Paipai mākou i nā hana maikaʻi loa no ka hoʻokuʻu palapala:

Ke hoʻoneʻe ʻia nā hoʻololi i ka lālā `main` , hoʻomaka ka palapala e kūkulu ʻia a hoʻoili ʻia i ke kahua ʻike (loaʻa ke kahua nānā [github page](//pages.github.com) ).

Ma hope o ka hōʻoia ʻana i ka pololei o ka palapala ma ka pūnaewele ʻike, e hoʻohui ʻia ke code a hoʻokuʻu ʻia i ka lālā `dist` , a e hele ka hale kūhelu a me ka hoʻolaha ʻana ma ka pūnaewele.

ʻOiaʻiʻo, pono ka hoʻokō ʻana i ke kaʻina hana i luna e kākau i nā hoʻonohonoho hou aʻe.

Hiki iā ʻoe ke kuhikuhi i ka papahana maoli [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` a me `secrets.NPM_TOKEN` i ka hoʻonohonoho hoʻonohonoho pono iā ʻoe e hoʻonohonoho i nā ʻano huna ma ka waihona code.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

ʻO `NPM_TOKEN` ka hōʻailona hoʻopuka o ka pūʻolo `npm` i ka hoʻonohonoho ʻana e kipa i [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Papa Kuhikuhi

### `public`

Nā waihona kikoo o ka pūnaewele, e like me `favicon.ico` , `robots.txt` , etc.

Hiki ke hana ʻia nā faila ikona me [realfavicongenerator.net](https://realfavicongenerator.net) .

### `.i18n`

Ma lalo o ka papa kuhikuhi `.i18n` nā faila hoʻonohonoho, kahi unuhi unuhi, etc. o `i18n.site` E nānā i ka mokuna aʻe ["Configuration"](/i18n.site/conf) no nā kikoʻī.

### `en`

Papa kuhikuhi ʻōlelo kumu, e pili ana i ka waihona hoʻonohonoho `en` o `fromTo` i `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

E ʻoluʻolu e nānā i ka hoʻonohonoho ʻana o ka unuhi [i18](/i18/use)
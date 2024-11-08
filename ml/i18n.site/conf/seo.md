# സെർച്ച് എഞ്ചിൻ ഒപ്റ്റിമൈസേഷൻ (SEO)

## തത്വം

`i18n.site` ഒരു നോൺ-റിഫ്രഷ് സിംഗിൾ പേജ് ആർക്കിടെക്ചർ സ്വീകരിക്കുന്നു, തിരയൽ ഇൻഡക്സിംഗ് സുഗമമാക്കുന്നതിന്, ക്രാളറുകൾക്ക് ക്രാൾ ചെയ്യുന്നതിനായി ഒരു പ്രത്യേക സ്റ്റാറ്റിക് പേജും `sitemap.xml` സൃഷ്ടിക്കും.

സെർച്ച് എഞ്ചിൻ ക്രാളർ ആക്സസ് അഭ്യർത്ഥനയുടെ `User-Agent` ഉപയോഗിക്കുമ്പോൾ, അഭ്യർത്ഥന `302` വഴി സ്റ്റാറ്റിക് പേജിലേക്ക് റീഡയറക്ടുചെയ്യും.

സ്റ്റാറ്റിക് പേജുകളിൽ, ഈ പേജിൻ്റെ വ്യത്യസ്ത ഭാഷാ പതിപ്പുകളിലേക്കുള്ള ലിങ്കുകൾ സൂചിപ്പിക്കാൻ `link` ഉപയോഗിക്കുക, ഉദാഹരണത്തിന് :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## പ്രാദേശിക nginx കോൺഫിഗറേഷൻ

ഡെമോ പ്രോജക്റ്റിലെ `.i18n/htm/main.yml` കോൺഫിഗറേഷൻ ഫയൽ ഉദാഹരണമായി എടുക്കുക

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

ദയവായി ആദ്യം മുകളിലുള്ള `host:` യുടെ മൂല്യം `xxx.com` പോലെ നിങ്ങളുടെ ഡൊമെയ്ൻ നാമത്തിലേക്ക് പരിഷ്ക്കരിക്കുക.

തുടർന്ന്, `i18n.site -n` , `out/main/htm` ഡയറക്ടറിയിൽ സ്റ്റാറ്റിക് പേജ് ജനറേറ്റുചെയ്യും.

തീർച്ചയായും, നിങ്ങൾക്ക് മറ്റ് കോൺഫിഗറേഷൻ ഫയലുകളും പ്രവർത്തനക്ഷമമാക്കാം, `.i18n/htm/dist.package.json` ഉം `.i18n/htm/dist.yml` സൃഷ്ടിക്കാൻ `main` ൻ്റെ കോൺഫിഗറേഷൻ ആദ്യം പരാമർശിക്കുന്നത് പോലെ.

തുടർന്ന് `i18n.site -n -c dist` പ്രവർത്തിപ്പിക്കുക, അങ്ങനെ സ്റ്റാറ്റിക് പേജ് `out/dist/htm` ആയി ജനറേറ്റുചെയ്യും.

ചുവടെയുള്ള കോൺഫിഗറേഷൻ പരാമർശിച്ചുകൊണ്ട് `nginx` സജ്ജമാക്കാൻ കഴിയും.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# സെർവർ വർക്കർ സ്ക്രിപ്റ്റുകൾ വളരെ നേരം കാഷെ ചെയ്യരുത്
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# മറ്റ് സ്റ്റാറ്റിക് ഉറവിടങ്ങൾക്കായി ദൈർഘ്യമേറിയ കാഷെ സമയം സജ്ജമാക്കുക
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# ഹോംപേജ് എൻട്രിയായി ക്രാളർ ഉപയോഗിക്കുന്ന സ്റ്റാറ്റിക് ഫയൽ സജ്ജീകരിക്കുക
location = / {
  # $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# സിംഗിൾ പേജ് ആപ്ലിക്കേഷൻ കോൺഫിഗറേഷൻ
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## സ്റ്റാറ്റിക് ഫയലുകൾ അപ്ലോഡ് ചെയ്യുന്നതിനായി ഒബ്ജക്റ്റ് സ്റ്റോറേജ് കോൺഫിഗർ ചെയ്യുക

സ്റ്റാറ്റിക് ഫയലുകൾ പ്രാദേശികമായി സൃഷ്ടിക്കാൻ കഴിയും, എന്നാൽ ഒബ്ജക്റ്റ് സ്റ്റോറേജിലേക്ക് അപ്ലോഡ് ചെയ്യുക എന്നതാണ് ഒരു സാധാരണ സമീപനം.

മുകളിൽ കോൺഫിഗർ ചെയ്തിരിക്കുന്ന `out` ലേക്ക് പരിഷ്ക്കരിക്കുക :

```
out:
  - s3
```

തുടർന്ന്, `~/.config/i18n.site.yml` എഡിറ്റ് ചെയ്ത് ഇനിപ്പറയുന്ന കോൺഫിഗറേഷൻ ചേർക്കുക :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

കോൺഫിഗറേഷനിൽ, ദയവായി `i18n.site` `.i18n/htm/main.yml` ലെ `host:` ൻ്റെ മൂല്യത്തിലേക്ക് മാറ്റുക, ഒന്നിലധികം ഒബ്ജക്റ്റ് സ്റ്റോറുകൾ `s3` കീഴിൽ കോൺഫിഗർ ചെയ്യാം, കൂടാതെ `region` ഫീൽഡ് ഓപ്ഷണലാണ് (പല ഒബ്ജക്റ്റ് സ്റ്റോറുകൾക്കും ഈ ഫീൽഡ് സജ്ജീകരിക്കേണ്ടതില്ല).

തുടർന്ന് പ്രോജക്റ്റ് വീണ്ടും പ്രസിദ്ധീകരിക്കാൻ `i18n.site -n` പ്രവർത്തിപ്പിക്കുക.

നിങ്ങൾ `~/.config/i18n.site.yml` പരിഷ്കരിച്ച് വീണ്ടും അപ്ലോഡ് ചെയ്യാൻ ആഗ്രഹിക്കുന്നുവെങ്കിൽ, അപ്ലോഡ് കാഷെ മായ്ക്കുന്നതിന് പ്രോജക്റ്റ് റൂട്ട് ഡയറക്ടറിയിൽ ഇനിപ്പറയുന്ന കമാൻഡ് ഉപയോഗിക്കുക :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## ക്ലൗഡ്ഫ്ലെയർ കോൺഫിഗറേഷൻ

ഡൊമെയ്ൻ നാമം ഹോസ്റ്റ് ചെയ്തു [cloudflare](//www.cloudflare.com)

### പരിവർത്തന നിയമങ്ങൾ

ചുവടെ കാണിച്ചിരിക്കുന്നതുപോലെ പരിവർത്തന നിയമങ്ങൾ ചേർക്കുക:

![](//p.3ti.site/1725436822.avif)

റൂൾ കോഡ് ഇപ്രകാരമാണ്, ദയവായി "i18n.site" എന്ന കോഡ് നിങ്ങളുടെ ഡൊമെയ്ൻ നാമത്തിലേക്ക് പരിഷ്ക്കരിക്കുക:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### കാഷിംഗ് നിയമങ്ങൾ

ഇനിപ്പറയുന്ന രീതിയിൽ കാഷെ നിയമങ്ങൾ ചേർക്കുക:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### വഴിതിരിച്ചുവിടൽ നിയമങ്ങൾ

റീഡയറക്ഷൻ നിയമങ്ങൾ ഇനിപ്പറയുന്ന രീതിയിൽ സജ്ജമാക്കുക, ദയവായി "i18n.site" എന്ന കോഡ് നിങ്ങളുടെ ഡൊമെയ്ൻ നാമത്തിലേക്ക് പരിഷ്ക്കരിക്കുക

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` ഡൈനാമിക് റീഡയറക്ഷൻ തിരഞ്ഞെടുക്കുക, റീഡയറക്ഷൻ പാത്ത് `concat("/en",http.request.uri.path,".htm")` ലെ `/en` , സെർച്ച് എഞ്ചിനുകൾ ഉൾപ്പെടുത്താൻ നിങ്ങൾ ആഗ്രഹിക്കുന്ന സ്ഥിരസ്ഥിതി ഭാഷയിലേക്ക് ദയവായി പരിഷ്ക്കരിക്കുക.

## Baidu ഇൻ്റലിജൻ്റ് ക്ലൗഡ് കോൺഫിഗറേഷൻ

ചൈനയിലെ മെയിൻലാൻ്റിലേക്ക് നിങ്ങൾക്ക് സേവനങ്ങൾ നൽകണമെങ്കിൽ, നിങ്ങൾക്ക് [Baidu സ്മാർട്ട് ക്ലൗഡ്](//cloud.baidu.com) ഉപയോഗിക്കാം.

Baidu ഒബ്ജക്റ്റ് സ്റ്റോറേജിലേക്ക് ഡാറ്റ അപ്ലോഡ് ചെയ്യുകയും Baidu ഉള്ളടക്ക വിതരണ ശൃംഖലയിലേക്ക് ബന്ധിപ്പിക്കുകയും ചെയ്യുന്നു.

തുടർന്ന് [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) രീതിയിൽ സ്ക്രിപ്റ്റ് സൃഷ്ടിക്കുക

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
  // out.XXX = 'MSG';
})
```

`Debug` ക്ലിക്കുചെയ്യുക, തുടർന്ന് മുഴുവൻ നെറ്റ്വർക്കിലേക്കും പ്രസിദ്ധീകരിക്കുക ക്ലിക്കുചെയ്യുക.

![](//p.3ti.site/1725437754.avif)

## വിപുലമായ ഉപയോഗം: പ്രാദേശിക റെസല്യൂഷൻ അടിസ്ഥാനമാക്കി ട്രാഫിക് വിതരണം ചെയ്യുക

നിങ്ങൾക്ക് ചൈനയിലെ മെയിൻലാൻഡിൽ സേവനങ്ങൾ നൽകാനും കൂടാതെ `cloudflare` സൗജന്യ അന്താരാഷ്ട്ര ട്രാഫിക്കും വേണമെങ്കിൽ, നിങ്ങൾക്ക് പ്രാദേശിക റെസല്യൂഷനോട് കൂടി `DNS` ഉപയോഗിക്കാം.

ഉദാഹരണത്തിന് `cloudflare` [Huawei ക്ലൗഡ് DNS](https://www.huaweicloud.com)

`cloudflare` യുടെ കോൺഫിഗറേഷനിൽ നിരവധി പോരായ്മകൾ ഉണ്ട്. ഇവിടെ ശ്രദ്ധിക്കേണ്ട ചില പോയിൻ്റുകൾ ഉണ്ട് :

### ഡൊമെയ്ൻ നാമം മറ്റ് `DNS` -ൽ ഹോസ്റ്റ് ചെയ്തിരിക്കുന്നു, എങ്ങനെ ഉപയോഗിക്കാം `cloudflare`

ആദ്യം ഒരു അനിയന്ത്രിതമായ ഡൊമെയ്ൻ നാമം `cloudflare` ലേക്ക് ബന്ധിപ്പിക്കുക, തുടർന്ന് ഈ ഡൊമെയ്ൻ നാമവുമായി പ്രധാന ഡൊമെയ്ൻ നാമം ബന്ധപ്പെടുത്തുന്നതിന് `SSL/TLS` → ഇഷ്ടാനുസൃത ഡൊമെയ്ൻ നാമം ഉപയോഗിക്കുക.

![](https://p.3ti.site/1725438658.avif)

### ഒരു ഇഷ്ടാനുസൃത ഡൊമെയ്ൻ നാമത്തിലൂടെ `cloudflare R2` ആക്സസ് ചെയ്യാൻ കഴിയില്ല

ബിൽറ്റ് `cloudflare` ഇൻ ഒബ്ജക്റ്റ് സ്റ്റോറേജ് `R2` ഇഷ്ടാനുസൃതമാക്കിയ ഡൊമെയ്ൻ നാമം ഉപയോഗിച്ച് ആക്സസ് ചെയ്യാൻ കഴിയാത്തതിനാൽ, സ്റ്റാറ്റിക് ഫയലുകൾ സ്ഥാപിക്കാൻ ഒരു മൂന്നാം-കക്ഷി ഒബ്ജക്റ്റ് സ്റ്റോറേജ് ഉപയോഗിക്കേണ്ടതുണ്ട്.

മൂന്നാം കക്ഷി ഒബ്ജക്റ്റുകൾ `cloudflare` -ൽ സംഭരിക്കുന്നതെങ്ങനെയെന്ന് കാണിക്കാൻ ഞങ്ങൾ ഇവിടെ ഒരു ഉദാഹരണമായി എടുക്കുന്നു [backblaze.com](https://www.backblaze.com)

`backblaze.com` -ൽ ഒരു ബക്കറ്റ് സൃഷ്ടിക്കുക, ഏതെങ്കിലും ഫയൽ അപ്ലോഡ് ചെയ്യുക, ഫയൽ ബ്രൗസ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക, `Friendly URL` ൻ്റെ ഡൊമെയ്ൻ നാമം ഇവിടെ നേടുക, അത് `f003.backblazeb2.com` ആണ്.

![](//p.3ti.site/1725440783.avif)

`cloudflare` -ൽ ഡൊമെയ്ൻ നാമം `CNAME` ൽ നിന്ന് `f003.backblazeb2.com` ലേക്ക് മാറ്റി പ്രോക്സി പ്രവർത്തനക്ഷമമാക്കുക.

![](//p.3ti.site/1725440896.avif)

`cloudflare` / `SSL` → എൻക്രിപ്ഷൻ മോഡ് പരിഷ്ക്കരിക്കുക, `Full` ആയി സജ്ജമാക്കുക

![](//p.3ti.site/1725438572.avif)

ചുവടെ കാണിച്ചിരിക്കുന്നതുപോലെ പരിവർത്തന നിയമം ചേർക്കുക, ആദ്യം വയ്ക്കുക (ആദ്യത്തേതിന് ഏറ്റവും കുറഞ്ഞ മുൻഗണനയുണ്ട്):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` ഡൈനാമിക് തിരഞ്ഞെടുത്ത് `your_bucketname` ഇൻ `concat("/file/your_bucketname",http.request.uri.path)` നിങ്ങളുടെ ബക്കറ്റ് നാമത്തിലേക്ക് പരിഷ്ക്കരിക്കുക.

കൂടാതെ, മുകളിലുള്ള `cloudflare` കൺവേർഷൻ റൂളിൽ, `index.html` `file/your_bucketname/index.html` ആയി മാറ്റുകയും മറ്റ് കോൺഫിഗറേഷനുകൾ അതേപടി തുടരുകയും ചെയ്യുന്നു.

![](//p.3ti.site/1725441384.avif)
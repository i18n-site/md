# ਤੈਨਾਤੀ ਅਤੇ ਔਨਲਾਈਨ

`i18n.site` ਇੱਕ [ਸਿੰਗਲ-ਪੇਜ ਐਪਲੀਕੇਸ਼ਨ](https://developer.mozilla.org/docs/Glossary/SPA) ਆਰਕੀਟੈਕਚਰ ਨੂੰ ਅਪਣਾਉਂਦਾ ਹੈ, ਅਤੇ ਵੈਬਸਾਈਟ ਪ੍ਰਵੇਸ਼ ਪੰਨਾ ਅਤੇ ਵੈਬਸਾਈਟ ਸਮੱਗਰੀ ਸੁਤੰਤਰ ਤੌਰ 'ਤੇ ਤਾਇਨਾਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।

ਉਪਰੋਕਤ ਅਨੁਵਾਦ ਨੂੰ ਚਲਾਉਣ ਤੋਂ ਬਾਅਦ, ਡਾਇਰੈਕਟਰੀਆਂ `htm` ਅਤੇ `v` `md/out/dev` ਡਾਇਰੈਕਟਰੀ ਦੇ ਅਧੀਨ ਤਿਆਰ ਕੀਤੀਆਂ ਜਾਣਗੀਆਂ।

ਇੱਥੇ, `dev` ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਇਹ `.i18n/htm/dev.yml` ਸੰਰਚਨਾ ਫਾਈਲ ਦੇ ਅਧਾਰ ਤੇ ਬਣਾਇਆ ਗਿਆ ਹੈ।

`dev` ਡਾਇਰੈਕਟਰੀ :

`htm` ਡਾਇਰੈਕਟਰੀ ਵੈੱਬਸਾਈਟ ਦਾ ਪ੍ਰਵੇਸ਼ ਪੰਨਾ ਹੈ।

`v` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਵਰਜਨ ਨੰਬਰਾਂ ਵਾਲੀ ਵੈੱਬਸਾਈਟ ਸਮੱਗਰੀ ਸ਼ਾਮਲ ਹੈ।

ਸਥਾਨਕ ਪ੍ਰੀਵਿਊ ਵਰਜਨ ਨੰਬਰ ਦੀ ਪਰਵਾਹ ਨਹੀਂ ਕਰਦਾ ਹੈ ਅਤੇ ਸਾਰੀਆਂ ਫਾਈਲਾਂ ਨੂੰ `out/dev/v/0.1.0` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਕਾਪੀ ਕਰੇਗਾ।

ਅਧਿਕਾਰਤ ਰੀਲੀਜ਼ ਲਈ, ਬਦਲੀਆਂ ਗਈਆਂ ਫਾਈਲਾਂ ਨੂੰ ਨਵੇਂ ਸੰਸਕਰਣ ਨੰਬਰ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਕਾਪੀ ਕੀਤਾ ਜਾਵੇਗਾ।

## `-c` ਨਾਲ ਸੰਰਚਨਾ ਫਾਇਲ ਦਿਓ

ਵੱਖ-ਵੱਖ ਸੰਰਚਨਾ ਫਾਈਲਾਂ `out` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਸੰਬੰਧਿਤ ਡਾਇਰੈਕਟਰੀਆਂ ਬਣਾਉਣਗੀਆਂ।

ਉਦਾਹਰਨ ਲਈ, `.i18n/htm/main.yml` `out/main` ਡਾਇਰੈਕਟਰੀ ਬਣਾਏਗਾ।

`dev.yml` ਅਤੇ `main.yml` ਡਿਫੌਲਟ ਸੰਰਚਨਾ ਹਨ।

`dev` `development` ਦਾ ਸੰਖੇਪ ਰੂਪ ਹੈ, ਵਿਕਾਸ ਵਾਤਾਵਰਣ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ, ਸਥਾਨਕ ਪ੍ਰੀਵਿਊ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਇਹ ਡਿਫੌਲਟ ਸੰਰਚਨਾ ਫਾਈਲ ਵੀ ਹੈ।
`ol` `online` ਦਾ ਸੰਖੇਪ ਰੂਪ ਹੈ, ਜੋ ਕਿ ਔਨਲਾਈਨ ਵਾਤਾਵਰਣ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ, ਜੋ ਕਿ ਅਧਿਕਾਰਤ ਰੀਲੀਜ਼ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਜਦੋਂ ਇਹ ਕਮਾਂਡ ਲਾਈਨ ਪੈਰਾਮੀਟਰ `-n` ਤੋਂ `npm` ਨੂੰ ਜਾਰੀ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

ਤੁਸੀਂ ਦੂਜੀਆਂ ਸੰਰਚਨਾ ਫਾਈਲਾਂ ਵੀ ਬਣਾ ਸਕਦੇ ਹੋ ਜਿਸਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਸੰਰਚਨਾ ਫਾਈਲ ਨਾਮ ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ ਕਮਾਂਡ ਲਾਈਨ 'ਤੇ `--htm_conf` ਵਰਤੋਂ ਕਰੋ:

ਉਦਾਹਰਣ ਲਈ:
```
i18n.site --htm_conf dist --save
```

ਇੱਥੇ `--save` ਅਪਡੇਟ ਰੀਲੀਜ਼ ਸੰਸਕਰਣ ਨੰਬਰ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।

## <a rel=id href="#npm" id="npm"></a> ਸਮੱਗਰੀ ਨੂੰ npmjs.com 'ਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ

[npmjs.com](//npmjs.com) ਤੇ ਸਮੱਗਰੀ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨਾ ਸਿਫ਼ਾਰਸ਼ ਕੀਤਾ ਡਿਫੌਲਟ ਹੱਲ ਹੈ (ਦੇਖੋ [ਫਰੰਟ-ਐਂਡ ਉੱਚ ਉਪਲਬਧਤਾ](/i18n.site/feature#ha) )।

### npm & ਪੋਸਟ

`nodejs` ਇੰਸਟਾਲ ਕਰੋ, `npm login` ਨਾਲ ਲਾਗਇਨ ਕਰੋ।

`md/.i18n/htm/main.yml` ਸੰਪਾਦਿਤ ਕਰੋ ਅਤੇ ਤੁਹਾਡੇ ਆਪਣੇ `npm` ਪੈਕੇਜ ਨਾਮ ਦੇ ਰੂਪ [npmjs.com](//npmjs.com) [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` ਬਦਲੋ!

ਫਿਰ `md/.i18n/htm/main.package.json` ਸੋਧੋ

ਅਨੁਵਾਦ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਲਈ `md` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ `i18n.site --npm` ਜਾਂ `i18n.site -n` ਚਲਾਓ।

ਜੇਕਰ ਤੁਸੀਂ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਲਈ ਇੱਕ ਨਿਰੰਤਰ ਏਕੀਕਰਣ ਵਾਤਾਵਰਣ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ, ਤਾਂ `nodejs` ਸਥਾਪਿਤ ਕਰਨ ਦੀ ਕੋਈ ਲੋੜ ਨਹੀਂ ਹੈ। ਬਸ ਲੌਗ-ਇਨ ਅਤੇ ਪ੍ਰਕਾਸ਼ਨ ਅਨੁਮਤੀਆਂ `~/.npmrc` ਵਾਤਾਵਰਣ ਵਿੱਚ ਕਾਪੀ ਕਰੋ।

ਜੇਕਰ ਤੁਸੀਂ `main.yml` ਵਿੱਚ `v:` ਦੇ ਪੈਕੇਜ ਨਾਮ ਨੂੰ ਸੋਧਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ **ਪਹਿਲਾਂ `.i18n/v/main` ਮਿਟਾਉਣਾ ਯਕੀਨੀ ਬਣਾਓ** ਅਤੇ ਫਿਰ ਇਸਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ।

#### npm ਦੁਆਰਾ ਪ੍ਰਕਾਸ਼ਿਤ ਪ੍ਰੌਕਸੀ ਸਰਵਰ

ਜੇਕਰ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਨੈਟਵਰਕ ਸਮੱਸਿਆਵਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ ਪੈਂਦਾ ਹੈ ਅਤੇ ਉਹ `npm` ਪੈਕੇਜ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਵਿੱਚ ਅਸਮਰੱਥ ਹਨ, ਤਾਂ ਉਹ ਪ੍ਰੌਕਸੀ ਸਰਵਰ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰਨ ਲਈ ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲ `https_proxy` ਸੈਟ ਕਰ ਸਕਦੇ ਹਨ।

ਇਹ ਮੰਨ ਕੇ ਕਿ ਤੁਹਾਡਾ ਪ੍ਰੌਕਸੀ ਸਰਵਰ ਪੋਰਟ `7890` ਹੈ, ਤੁਸੀਂ ਲਿਖ ਸਕਦੇ ਹੋ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## ਸਵੈ-ਹੋਸਟ ਕੀਤੀ ਸਮੱਗਰੀ

ਜੇਕਰ ਤੁਸੀਂ ਸਮੱਗਰੀ ਨੂੰ ਸਵੈ-ਹੋਸਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਪਹਿਲਾਂ `md/.i18n/htm/main.yml` ਸੰਪਾਦਿਤ ਕਰੋ ਅਤੇ `v: //unpkg.com/i18n.site` ਆਪਣੇ URL ਅਗੇਤਰ ਵਿੱਚ ਬਦਲੋ, ਜਿਵੇਂ ਕਿ `v: //i18n-v.xxx.com` ।

`md` ਡਾਇਰੈਕਟਰੀ ਦਰਜ ਕਰੋ ਅਤੇ ਚਲਾਓ

```
i18n.site --htm_conf ol --save
```

ਜਾਂ ਸੰਖੇਪ

```
i18n.site -c ol -s
```

ਫਿਰ, `md/out/main/v` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਸਮੱਗਰੀ ਨੂੰ `v:` ਵਿੱਚ ਸੈੱਟ ਕੀਤੇ URL ਪ੍ਰੀਫਿਕਸ ਪਾਥ ਲਈ ਕੌਂਫਿਗਰ ਕਰੋ।

ਅੰਤ ਵਿੱਚ, **`/.v` ਤੋਂ `1s` ਵਿੱਚ ਖਤਮ ਹੋਣ ਵਾਲੇ ਮਾਰਗ ਦਾ ਕੈਸ਼ ਸਮਾਂ ਕੌਂਫਿਗਰ ਕਰੋ** , ਨਹੀਂ ਤਾਂ ਨਵੀਂ ਜਾਰੀ ਕੀਤੀ ਸਮੱਗਰੀ ਨੂੰ ਤੁਰੰਤ ਐਕਸੈਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

ਬੇਲੋੜੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਘਟਾਉਣ ਲਈ ਹੋਰ ਮਾਰਗਾਂ ਲਈ ਕੈਸ਼ ਸਮਾਂ ਇੱਕ ਸਾਲ ਜਾਂ ਵੱਧ ਸੈੱਟ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

## s3 ਲਈ ਸਮੱਗਰੀ ਦੀ ਮੇਜ਼ਬਾਨੀ ਕਰੋ

ਸਵੈ-ਹੋਸਟ ਸਮੱਗਰੀ ਲਈ, ਤੁਹਾਡੇ ਆਪਣੇ ਸਰਵਰ ਦੀ ਵਰਤੋਂ ਕਰਨ ਤੋਂ ਇਲਾਵਾ, `S3` + `CDN` ਵਰਤੋਂ ਕਰਨਾ ਇੱਕ ਹੋਰ ਆਮ ਵਿਕਲਪ ਹੈ।

ਤੁਸੀਂ `S3` ਸਰਵਰ ਵਿੱਚ ਲੌਗਇਨ ਕਰਨ [rclone](https://rclone.org) ਵਰਤ ਸਕਦੇ ਹੋ, ਫਿਰ ਹੇਠਾਂ ਦਿੱਤੀ ਸਕ੍ਰਿਪਟ ਨੂੰ ਵੇਖੋ ਅਤੇ ਸੋਧੋ, ਅਤੇ ਹਰੇਕ ਰੀਲੀਜ਼ ਲਈ ਸਿਰਫ `S3` ਵਿੱਚ ਵਾਧੇ ਵਾਲੇ ਬਦਲਾਅ ਦੀ ਨਕਲ ਕਰੋ।

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`CDN` ਨੂੰ ਕੌਂਫਿਗਰ ਕਰਨਾ ਯਾਦ ਰੱਖੋ ਤਾਂ ਕਿ `/.v` ਵਿੱਚ ਖਤਮ ਹੋਣ ਵਾਲੇ ਮਾਰਗ ਦਾ ਕੈਸ਼ ਸਮਾਂ `1s` ਹੋਵੇ, ਨਹੀਂ ਤਾਂ ਨਵੀਂ ਜਾਰੀ ਕੀਤੀ ਸਮੱਗਰੀ ਨੂੰ ਤੁਰੰਤ ਐਕਸੈਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।

## ਵੈੱਬਸਾਈਟ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ

ਵੈੱਬਸਾਈਟ ਨੂੰ ਕਿਤੇ ਵੀ ਲਗਾਇਆ ਜਾ ਸਕਦਾ ਹੈ [github page](https://pages.github.com) ਅਤੇ [cloudflare page](https://pages.cloudflare.com) ਵਧੀਆ ਵਿਕਲਪ ਹਨ।

ਕਿਉਂਕਿ ਵੈੱਬਸਾਈਟ ਇੱਕ [ਸਿੰਗਲ-ਪੰਨੇ ਐਪਲੀਕੇਸ਼ਨ](https://developer.mozilla.org/docs/Glossary/SPA) ਆਰਕੀਟੈਕਚਰ ਦੀ ਵਰਤੋਂ ਕਰਦੀ ਹੈ, ਯਾਦ ਰੱਖੋ ਕਿ URL ਪਾਥਾਂ ਨੂੰ ਮੁੜ ਲਿਖਣਾ ਹੈ ਜਿਸ ਵਿੱਚ `. ` ਤੋਂ `index.html` ਸ਼ਾਮਲ ਨਹੀਂ ਹਨ।

ਵੈੱਬਸਾਈਟ ਐਂਟਰੀ ਪੇਜ ਨੂੰ ਸਿਰਫ਼ ਇੱਕ ਵਾਰ ਤੈਨਾਤ ਕਰਨ ਦੀ ਲੋੜ ਹੈ, ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਸਮੱਗਰੀ ਅੱਪਡੇਟ ਲਈ ਵੈੱਬਸਾਈਟ ਐਂਟਰੀ ਪੰਨੇ ਨੂੰ ਮੁੜ ਤੈਨਾਤ ਕਰਨ ਦੀ ਕੋਈ ਲੋੜ ਨਹੀਂ ਹੈ।

### github ਪੰਨੇ 'ਤੇ ਤੈਨਾਤ ਕਰੋ

ਇੱਕ ਸੰਗਠਨ ਬਣਾਉਣ `i18n-demo` ਪਹਿਲਾਂ [ਇੱਥੇ ਕਲਿੱਕ github](https://github.com/account/organizations/new?plan=free) ।

ਫਿਰ ਇਸ ਸੰਗਠਨ ਦੇ ਅਧੀਨ ਵੇਅਰਹਾਊਸ `i18n-demo.github.io` ਬਣਾਓ (ਕਿਰਪਾ ਕਰਕੇ `i18n-demo` ਤੁਹਾਡੇ ਦੁਆਰਾ ਬਣਾਏ ਗਏ ਸੰਗਠਨ ਦੇ ਨਾਮ ਨਾਲ ਬਦਲੋ):

![](https://p.3ti.site/1721098657.avif)

ਪਿਛਲੇ ਲੇਖ ਵਿੱਚ ਸਮੱਗਰੀ ਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਦੇ ਸਮੇਂ, `out/main/htm` ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਡਾਇਰੈਕਟਰੀ ਨੂੰ ਦਾਖਲ ਕਰੋ ਅਤੇ ਚਲਾਓ :

```
ln -s index.html 404.html
```


ਕਿਉਂਕਿ `github page` URL ਪਾਥ ਰੀਰਾਈਟਿੰਗ ਦਾ ਸਮਰਥਨ ਨਹੀਂ ਕਰਦਾ, ਇਸਦੀ ਬਜਾਏ `404.html` ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

ਫਿਰ `htm` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਹੇਠ ਲਿਖੀ ਕਮਾਂਡ ਚਲਾਓ ( `i18n-demo/i18n-demo.github.io.git` ਆਪਣੇ ਖੁਦ ਦੇ ਵੇਅਰਹਾਊਸ ਐਡਰੈੱਸ ਨਾਲ ਬਦਲਣਾ ਯਾਦ ਰੱਖੋ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ਕੋਡ ਨੂੰ ਪੁਸ਼ ਕਰਨ ਤੋਂ ਬਾਅਦ, `github page` ਦੀ ਤੈਨਾਤੀ ਦੇ ਸਫਲਤਾਪੂਰਵਕ ਚੱਲਣ ਦੀ ਉਡੀਕ ਕਰੋ (ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ) ਇਸ ਤੋਂ ਪਹਿਲਾਂ ਕਿ ਤੁਸੀਂ ਇਸ ਤੱਕ ਪਹੁੰਚ ਕਰ ਸਕੋ।

<img src="//p.3ti.site/1721116586.avif" width="350px">

ਡੈਮੋ ਪੇਜ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਵੇਖੋ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### ਕਲਾਉਡਫਲੇਅਰ ਪੰਨੇ 'ਤੇ ਤੈਨਾਤ ਕਰੋ

`github page` ਦੇ [cloudflare page](//pages.cloudflare.com) , ਇਹ ਪਾਥ ਰੀਰਾਈਟਿੰਗ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਲਈ ਵਧੇਰੇ ਅਨੁਕੂਲ ਹੈ ਅਤੇ ਇਸਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।

`cloudflare page` ਦੀ ਤੈਨਾਤੀ ਆਮ ਤੌਰ 'ਤੇ ਉਪਰੋਕਤ `github page` ਦੀ ਤੈਨਾਤੀ 'ਤੇ ਅਧਾਰਤ ਹੁੰਦੀ ਹੈ।

ਇੱਕ ਪ੍ਰੋਜੈਕਟ ਬਣਾਓ ਅਤੇ ਉੱਪਰ ਦਿੱਤੇ `i18n-demo.github.io` ਵੇਅਰਹਾਊਸ ਨੂੰ ਬੰਨ੍ਹੋ।

ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਹੇਠਾਂ ਦਿੱਤੇ ਚਿੱਤਰ ਵਿੱਚ ਦਿਖਾਇਆ ਗਿਆ ਹੈ:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

ਕਿਰਪਾ ਕਰਕੇ ਸੰਗਠਨ `i18n-demo` ਤੱਕ ਪਹੁੰਚ ਦੇਣ ਲਈ `Add Account` ਤੇ ਕਲਿੱਕ ਕਰੋ।

ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਹੋਰ ਸੰਸਥਾ ਦੇ ਵੇਅਰਹਾਊਸ ਨੂੰ ਬੰਨ੍ਹਿਆ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਨਵੀਂ ਸੰਸਥਾ ਦੇ ਪ੍ਰਦਰਸ਼ਿਤ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਦੋ ਵਾਰ ਅਧਿਕਾਰਤ ਕਰਨ ਲਈ ਦੋ ਵਾਰ `Add Account` ਤੇ ਕਲਿੱਕ ਕਰਨ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ।

![](https://p.3ti.site/1721118306.avif)

ਅੱਗੇ, ਵੇਅਰਹਾਊਸ `i18n-demo.github.io` ਚੋਣ ਕਰੋ, ਫਿਰ `Begin setup` ਤੇ ਕਲਿੱਕ ਕਰੋ, ਅਤੇ ਅਗਲੇ ਕਦਮਾਂ ਲਈ ਡਿਫੌਲਟ ਮੁੱਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।

![](https://p.3ti.site/1721118490.avif)

ਪਹਿਲੀ ਵਾਰ ਬਾਈਡਿੰਗ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ ਇਸ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੁਝ ਮਿੰਟਾਂ ਦੀ ਉਡੀਕ ਕਰਨੀ ਪਵੇਗੀ।

ਤੈਨਾਤੀ ਤੋਂ ਬਾਅਦ, ਤੁਸੀਂ ਇੱਕ ਕਸਟਮ ਡੋਮੇਨ ਨਾਮ ਨੂੰ ਬੰਨ੍ਹ ਸਕਦੇ ਹੋ।

![](https://p.3ti.site/1721119459.avif)

ਕਸਟਮ ਡੋਮੇਨ ਨਾਮ ਨੂੰ ਬੰਨ੍ਹਣ ਤੋਂ ਬਾਅਦ, ਕਿਰਪਾ ਕਰਕੇ ਸਿੰਗਲ-ਪੇਜ ਐਪਲੀਕੇਸ਼ਨ ਦੇ ਪਾਥ ਰੀਰਾਈਟਿੰਗ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰਨ ਲਈ ਡੋਮੇਨ ਨਾਮ 'ਤੇ ਜਾਓ, ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ:

![](https://p.3ti.site/1721119320.avif)

ਉਪਰੋਕਤ ਤਸਵੀਰ ਵਿੱਚ ਨਿਯਮ ਹੇਠ ਲਿਖੇ ਅਨੁਸਾਰ ਹਨ ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੀ ਪਹਿਲੀ ਲਾਈਨ ਵਿੱਚ `i18n.site` ਤੁਹਾਡੇ ਦੁਆਰਾ ਬੰਨ੍ਹੇ ਹੋਏ ਡੋਮੇਨ ਨਾਮ ਨਾਲ ਬਦਲੋ।

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

ਇਸ ਤੋਂ ਇਲਾਵਾ, ਕਿਰਪਾ ਕਰਕੇ ਕੈਸ਼ ਨਿਯਮਾਂ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰੋ, ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ, ਅਤੇ ਕੈਸ਼ ਦੀ ਮਿਆਦ ਨੂੰ ਇੱਕ ਮਹੀਨੇ 'ਤੇ ਸੈੱਟ ਕਰੋ।

![](https://p.3ti.site/1721125111.avif)

ਕਿਰਪਾ ਕਰਕੇ ਉਪਰੋਕਤ ਤਸਵੀਰ ਵਿੱਚ ਦੂਜੇ ਪੜਾਅ ਵਿੱਚ ਮੇਲ ਖਾਂਦੇ ਡੋਮੇਨ ਨਾਮ ਨੂੰ ਤੁਹਾਡੇ ਦੁਆਰਾ ਬੰਨ੍ਹੇ ਹੋਏ ਡੋਮੇਨ ਨਾਮ ਵਿੱਚ ਬਦਲੋ।

### ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਵੈੱਬਸਾਈਟ ਤੈਨਾਤੀ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣਾ

ਜੇਕਰ ਤੁਸੀਂ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਦੇ ਨੈੱਟਵਰਕ ਵਾਤਾਵਰਨ ਵਿੱਚ ਬਿਹਤਰ ਪਹੁੰਚਯੋਗਤਾ ਪ੍ਰਦਰਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ [ਇੱਕ ਡੋਮੇਨ ਨਾਮ ਰਜਿਸਟਰ ਕਰੋ](//beian.aliyun.com) ।

ਫਿਰ, ਮੇਨਲੈਂਡ + ਵਿੱਚ ਕਲਾਉਡ ਵਿਕਰੇਤਾਵਾਂ ਦੇ ਆਬਜੈਕਟ ਸਟੋਰੇਜ ਦੀ ਵਰਤੋਂ ਕਰੋ `CDN` ਹੇਠਾਂ ਦਿੱਤੀ ਸਮੱਗਰੀ ਨੂੰ ਲਾਗੂ ਕਰੋ `out/main/htm` !

ਤੁਸੀਂ ਏਜ ਕੰਪਿਊਟਿੰਗ ਦੀ ਵਰਤੋਂ ਸਿੰਗਲ-ਪੇਜ ਐਪਲੀਕੇਸ਼ਨਾਂ ਦੇ ਅਨੁਕੂਲ ਹੋਣ ਲਈ ਮਾਰਗ ਨੂੰ ਦੁਬਾਰਾ ਲਿਖਣ ਲਈ ਕਰ ਸਕਦੇ ਹੋ, ਉਦਾਹਰਨ ਲਈ, [Baidu Smart Cloud `CDN` ਨੂੰ](//cloud.baidu.com/product/cdn.html) ਇਸ ਤਰ੍ਹਾਂ ਸੰਰਚਿਤ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ:

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
  // ਤੁਸੀਂ ਆਉਟਪੁੱਟ ਨੂੰ ਡੀਬੱਗ ਕਰਨ ਲਈ ਜਵਾਬ ਸਿਰਲੇਖ ਸੈੱਟ ਕਰ ਸਕਦੇ ਹੋ, ਜਿਵੇਂ ਕਿ out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

ਕਿਉਂਕਿ ਰਿਕਾਰਡ `MX` ਅਤੇ ਰਿਕਾਰਡ `CNAME` ਇਕੱਠੇ ਨਹੀਂ ਹੋ ਸਕਦੇ, ਜੇਕਰ ਤੁਸੀਂ ਇੱਕੋ ਸਮੇਂ 'ਤੇ ਡੋਮੇਨ ਨਾਮ ਈਮੇਲ ਪ੍ਰਾਪਤ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ਰਿਕਾਰਡ `A` ਵਿੱਚ ਲੈਵਲ `CNAME` ਲਈ ਸਕ੍ਰਿਪਟ ਨਾਲ ਸਹਿਯੋਗ ਕਰਨ ਦੀ ਲੋੜ ਹੈ।

ਇਸ ਤੋਂ ਇਲਾਵਾ, ਕਿਉਂਕਿ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਕਲਾਉਡ ਵਿਕਰੇਤਾਵਾਂ ਦੇ ਵਿਦੇਸ਼ੀ ਟ੍ਰੈਫਿਕ ਖਰਚੇ ਮੁਕਾਬਲਤਨ ਮਹਿੰਗੇ ਹਨ, ਜੇਕਰ ਤੁਸੀਂ ਲਾਗਤਾਂ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ [DNS Cloud ਦੇ ਮੁਫ਼ਤ ਭੂਗੋਲਿਕ ਰੈਜ਼ੋਲਿਊਸ਼ਨ](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ਅਤੇ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ਦੇ ਕਸਟਮ ਡੋਮੇਨ ਨਾਮ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ ਟ੍ਰੈਫਿਕ ਡਾਇਵਰਸ਼ਨ──ਮੁੱਖ ਭੂਮੀ ਚੀਨ Baidu Cloud `CDN` ਵਿੱਚ ਟ੍ਰੈਫਿਕ ਰੂਟਿੰਗ , ਅੰਤਰਰਾਸ਼ਟਰੀ ਟ੍ਰੈਫਿਕ cloudflare ਜਾਂਦਾ ਹੈ।

![](https://p.3ti.site/1721119788.avif)

ਇਹ ਡਿਪਲਾਇਮੈਂਟ ਓਪਟੀਮਾਈਜੇਸ਼ਨ ਹੱਲ ਵਧੇਰੇ ਗੁੰਝਲਦਾਰ ਹਨ ਅਤੇ ਭਵਿੱਖ ਵਿੱਚ ਵੱਖਰੇ ਅਧਿਆਵਾਂ ਵਿੱਚ ਪੇਸ਼ ਕੀਤੇ ਜਾਣਗੇ।

### ਆਮ ਡੋਮੇਨ ਨਾਮ ਰੀਡਾਇਰੈਕਸ਼ਨ

ਜੇਕਰ ਤੁਸੀਂ ਆਪਣੀ ਮੁੱਖ ਵੈੱਬਸਾਈਟ ਦੇ ਤੌਰ 'ਤੇ ਇੱਕ ਵੈੱਬਸਾਈਟ ਬਣਾਉਣ ਲਈ `i18n.site` ਵਰਤੋਂ ਕਰਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ ਆਮ ਤੌਰ 'ਤੇ ਪੈਨ-ਡੋਮੇਨ ਰੀਡਾਇਰੈਕਸ਼ਨ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਯਾਨੀ, `*.xxx.com` ( `www.xxx.com` ਸਮੇਤ) ਤੋਂ `xxx.com` ਤੱਕ ਪਹੁੰਚ ਨੂੰ ਰੀਡਾਇਰੈਕਟ ਕਰਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।

ਇਹ ਲੋੜ ਅਲੀਬਾਬਾ ਕਲਾਊਡ `CDN` `EdgeScript` ( [ਅੰਗਰੇਜ਼ੀ ਦਸਤਾਵੇਜ਼](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ਚੀਨੀ ਦਸਤਾਵੇਜ਼](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ਦੀ ਮਦਦ ਨਾਲ ਪ੍ਰਾਪਤ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।

[ਅਲੀਬਾਬਾ CDN](https://cdn.console.aliyun.com/domain/list) ਵਿੱਚ ਡੋਮੇਨ ਨਾਮ ਸ਼ਾਮਲ ਕਰੋ ਅਤੇ ਅਲੀਬਾਬਾ ਕਲਾਉਡ `CDN` ਵਿੱਚ ਡੋਮੇਨ ਨਾਮ `*.xxx.com` `CNAME` ਪੁਆਇੰਟ ਕਰੋ।

![](https://p.3ti.site/1721122000.avif)

ਉਦਾਹਰਨ ਲਈ, ਉਪਰੋਕਤ ਤਸਵੀਰ ਵਿੱਚ `*.i18n.site` ਦੀ ਪੈਨ-ਡੋਮੇਨ ਨਾਮ ਰੀਡਾਇਰੈਕਸ਼ਨ ਕੌਂਫਿਗਰੇਸ਼ਨ ਇਸ ਤਰ੍ਹਾਂ ਹੈ:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx ਨਾਲ ਤੈਨਾਤ ਕਰੋ

ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਖੁਦ ਦੇ ਪ੍ਰੋਜੈਕਟ `out/main/htm` ਦੇ ਮਾਰਗ ਵਿੱਚ `server` `/root/i18n/md/out/main/htm` ਬਦਲੋ nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` ਨਿਰੰਤਰ ਏਕੀਕਰਣ 'ਤੇ ਅਧਾਰਤ

ਤੁਸੀਂ ਆਪਣੇ `github action` ਕੌਂਫਿਗਰ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਦਾ ਹਵਾਲਾ ਦੇ ਸਕਦੇ ਹੋ:

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

ਜਿਵੇਂ ਕਿ ਸੰਰਚਨਾ ਵਿੱਚ ਦੇਖਿਆ ਜਾ ਸਕਦਾ ਹੈ, ਇਹ ਵਰਕਫਲੋ ਬ੍ਰਾਂਚ `main` ਅਤੇ ਬ੍ਰਾਂਚ `dist` ਵੱਲ ਧੱਕਣ ਵੇਲੇ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।

ਵਰਕਫਲੋ ਇੱਥੇ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਲਈ ਬ੍ਰਾਂਚ ਦੇ ਨਾਮ ਨਾਲ ਸੰਬੰਧਿਤ ਸੰਰਚਨਾ ਫਾਈਲ ਦੀ ਵਰਤੋਂ ਕਰੇਗਾ, ਕ੍ਰਮਵਾਰ ਪ੍ਰਕਾਸ਼ਨ ਸੰਰਚਨਾ ਦੇ ਤੌਰ 'ਤੇ `.i18n/htm/main.yml` ਅਤੇ `.i18n/htm/dist.yml` ਵਰਤੋਂ ਕੀਤੀ ਜਾਵੇਗੀ।

ਅਸੀਂ ਦਸਤਾਵੇਜ਼ ਜਾਰੀ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਸਭ ਤੋਂ ਵਧੀਆ ਅਭਿਆਸਾਂ ਦੀ ਸਿਫ਼ਾਰਿਸ਼ ਕਰਦੇ ਹਾਂ:

ਜਦੋਂ ਤਬਦੀਲੀਆਂ ਨੂੰ ਸ਼ਾਖਾ `main` ਵਿੱਚ ਧੱਕਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਪੂਰਵਦਰਸ਼ਨ ਸਟੇਸ਼ਨ (ਪੂਰਵਦਰਸ਼ਨ ਸਟੇਸ਼ਨ ਉਪਲਬਧ ਹੈ [github page](//pages.github.com) ) ਵਿੱਚ ਬਣਾਉਣ ਅਤੇ ਤੈਨਾਤ ਕਰਨ ਲਈ ਚਾਲੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

ਪੂਰਵਦਰਸ਼ਨ ਸਾਈਟ 'ਤੇ ਦਸਤਾਵੇਜ਼ ਦੇ ਸਹੀ ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਕੋਡ ਨੂੰ ਮਿਲਾ ਦਿੱਤਾ ਜਾਵੇਗਾ ਅਤੇ ਬ੍ਰਾਂਚ `dist` ਵਿੱਚ ਧੱਕ ਦਿੱਤਾ ਜਾਵੇਗਾ, ਅਤੇ ਅਧਿਕਾਰਤ ਬਿਲਡ ਅਤੇ ਤੈਨਾਤੀ ਆਨਲਾਈਨ ਹੋ ਜਾਵੇਗੀ।

ਬੇਸ਼ੱਕ, ਉਪਰੋਕਤ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਹੋਰ ਸੰਰਚਨਾ ਲਿਖਣ ਦੀ ਲੋੜ ਹੈ.

ਤੁਸੀਂ ਵਰਕਫਲੋ ਸਕ੍ਰਿਪਟਿੰਗ ਲਈ ਅਸਲ ਪ੍ਰੋਜੈਕਟ ਦਾ ਹਵਾਲਾ ਦੇ ਸਕਦੇ ਹੋ [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

ਸੰਰਚਨਾ ਵਿੱਚ `secrets.I18N_SITE_TOKEN` ਅਤੇ `secrets.NPM_TOKEN` ਲਈ ਤੁਹਾਨੂੰ ਕੋਡ ਬੇਸ ਵਿੱਚ ਗੁਪਤ ਵੇਰੀਏਬਲਾਂ ਦੀ ਸੰਰਚਨਾ ਕਰਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` ਸੰਰਚਨਾ ਵਿੱਚ ਪੈਕੇਜ `npm` ਦਾ ਪ੍ਰਕਾਸ਼ਨ ਟੋਕਨ ਹੈ ਅਤੇ ਪ੍ਰਕਾਸ਼ਨ ਅਨੁਮਤੀਆਂ ਦੇ ਨਾਲ ਇੱਕ ਟੋਕਨ ਬਣਾਓ [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## ਡਾਇਰੈਕਟਰੀ ਬਣਤਰ

### `public`

ਵੈੱਬਸਾਈਟ ਦੀਆਂ ਸਥਿਰ ਫਾਈਲਾਂ, ਜਿਵੇਂ ਕਿ `favicon.ico` , `robots.txt` , ਆਦਿ।

ਇੱਥੇ ਆਈਕਨ ਫਾਈਲਾਂ ਨੂੰ ਨਾਲ ਤਿਆਰ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` ਡਾਇਰੈਕਟਰੀ ਦੇ ਹੇਠਾਂ `i18n.site` ਦੀਆਂ ਸੰਰਚਨਾ ਫਾਈਲਾਂ, ਅਨੁਵਾਦ ਕੈਸ਼ ਆਦਿ ਹਨ। ਵੇਰਵਿਆਂ ਲਈ ਅਗਲਾ ਅਧਿਆਇ ["ਸੰਰਚਨਾ"](/i18n.site/conf) ਵੇਖੋ।

### `en`

ਸਰੋਤ ਭਾਸ਼ਾ ਡਾਇਰੈਕਟਰੀ, `.i18n/conf.yml` ਕੌਂਫਿਗਰੇਸ਼ਨ ਫਾਈਲ ਵਿੱਚ `fromTo` ਵਿੱਚੋਂ `en` ਦੇ ਅਨੁਸਾਰੀ

```yaml
i18n:
  fromTo:
    en: zh
```

ਕਿਰਪਾ ਕਰਕੇ ਅਨੁਵਾਦ ਦੀ ਸੰਰਚਨਾ ਨੂੰ ਵੇਖੋ [i18](/i18/use)
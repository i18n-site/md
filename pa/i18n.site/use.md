# ਇੰਸਟਾਲ ਕਰੋ &

## ਸੰਰਚਨਾ ਟੋਕਨ

`i18` ਅਨੁਵਾਦ ਟੂਲ ਏਮਬੇਡ ਕੀਤਾ ਗਿਆ ਹੈ, ਕਿਰਪਾ `i18n.site` [ਐਕਸੈਸ ਟੋਕਨ ਦੀ ਸੰਰਚਨਾ ਕਰਨ ਲਈ `i18` ਦਸਤਾਵੇਜ਼ ਦਾ ਹਵਾਲਾ ਦੇਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ](/i18/use) ।

## ਇੰਸਟਾਲ ਕਰੋ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ

ਆਉ ਇੱਕ ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ ਨਾਲ ਸ਼ੁਰੂ ਕਰੀਏ ਅਤੇ ਸਿੱਖੀਏ ਕਿ ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ `i18n.site`

ਅਸੀਂ ਪਹਿਲਾਂ ਡੈਮੋ ਰਿਪੋਜ਼ਟਰੀ ਨੂੰ ਕਲੋਨ ਕਰਦੇ ਹਾਂ ਅਤੇ ਹੇਠ ਲਿਖੇ ਅਨੁਸਾਰ ਕਮਾਂਡ ਚਲਾਉਂਦੇ ਹਾਂ:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਉਪਭੋਗਤਾ ਇਹ ਕਰ ਸਕਦੇ ਹਨ:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` ਦੇ ਨਾਲ ਸਥਾਨਕ ਪ੍ਰੀਵਿਊ ਦੀ ਸਹੂਲਤ ਲਈ ਕੋਡ ਬੇਸ ਕਲੋਨ ਦਾ ਡਾਇਰੈਕਟਰੀ ਨਾਮ `md` ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ `demo.i18n.site`

### ਅਨੁਵਾਦ

ਪਹਿਲਾਂ, ਡਾਇਰੈਕਟਰੀ `md` ਕਰੋ ਅਤੇ `i18n.site` ਚਲਾਓ, ਜੋ ਕਿ `en` `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ਚੱਲਣ ਤੋਂ ਬਾਅਦ, ਅਨੁਵਾਦ ਅਤੇ ਕੈਸ਼ ਫਾਈਲਾਂ ਤਿਆਰ ਕੀਤੀਆਂ ਜਾਣਗੀਆਂ, ਕਿਰਪਾ ਕਰਕੇ ਉਹਨਾਂ ਨੂੰ `md` ਵਿੱਚ ਸ਼ਾਮਲ `git add . ` ਯਾਦ ਰੱਖੋ।

### ਸਥਾਨਕ ਝਲਕ

ਸਥਾਪਿਤ ਕਰੋ ਅਤੇ ਸ਼ੁਰੂ `docker` ( `MAC` `docker` ਦੇ ਰਨਟਾਈਮ ਵਜੋਂ ਵਰਤਣ [orbstack](https://orbstack.dev) ਸਿਫਾਰਸ਼ ਕਰਦੇ ਹਨ)।

ਫਿਰ, `docker` ਦਰਜ ਕਰੋ ਅਤੇ `./up.sh` ਚਲਾਓ, ਅਤੇ ਫਿਰ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਝਲਕ ਲਈ ਜਾਓ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ਸਮੱਗਰੀ ਪੋਸਟ ਕਰੋ

ਇੱਕ [ਸਿੰਗਲ-ਪੇਜ ਐਪਲੀਕੇਸ਼ਨ](https://developer.mozilla.org/docs/Glossary/SPA) ਆਰਕੀਟੈਕਚਰ ਨੂੰ ਅਪਣਾਉਂਦਾ ਹੈ, ਅਤੇ ਵੈਬਸਾਈਟ ਪ੍ਰਵੇਸ਼ ਪੰਨਾ ਅਤੇ ਵੈਬਸਾਈਟ ਸਮੱਗਰੀ ਸੁਤੰਤਰ ਤੌਰ 'ਤੇ ਤਾਇਨਾਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ `i18n.site`

ਉਪਰੋਕਤ ਅਨੁਵਾਦ ਨੂੰ ਚਲਾਉਣ ਤੋਂ ਬਾਅਦ, `md/out/dev` ਵਿੱਚ `htm` ਅਤੇ `v` ਡਾਇਰੈਕਟਰੀਆਂ ਤਿਆਰ ਕੀਤੀਆਂ ਜਾਣਗੀਆਂ।

ਇੱਥੇ, `dev` ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਇਹ `.i18n/htm/dev.yml` ਫਾਇਲ ਦੇ ਅਧਾਰ ਤੇ ਬਣਾਇਆ ਗਿਆ ਹੈ।

ਸਮੱਗਰੀ : ਅਧੀਨ `dev`

ਡਾਇਰੈਕਟਰੀ ਦੇ ਹੇਠਾਂ ਵੈੱਬਸਾਈਟ ਦਾ ਪ੍ਰਵੇਸ਼ ਪੰਨਾ ਹੈ `htm`

ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਵਰਜਨ ਨੰਬਰ ਦੇ ਨਾਲ ਵੈੱਬਸਾਈਟ ਸਮੱਗਰੀ ਸ਼ਾਮਲ ਹੈ `v`

ਸਥਾਨਕ ਪੂਰਵਦਰਸ਼ਨ ਸੰਸਕਰਣ ਨੰਬਰ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ ਸਾਰੀਆਂ ਫਾਈਲਾਂ ਨੂੰ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਕਾਪੀ ਕਰੇਗਾ `out/dev/v/0.1.0`

ਅਧਿਕਾਰਤ ਰੀਲੀਜ਼ ਲਈ, ਬਦਲੀਆਂ ਗਈਆਂ ਫਾਈਲਾਂ ਨੂੰ ਨਵੇਂ ਸੰਸਕਰਣ ਨੰਬਰ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਕਾਪੀ ਕੀਤਾ ਜਾਵੇਗਾ।

#### ਸੰਰਚਨਾ ਫਾਇਲ ਦੇਣ ਲਈ -c ਦੀ ਵਰਤੋਂ ਕਰੋ

ਵੱਖ-ਵੱਖ ਸੰਰਚਨਾ ਫਾਇਲਾਂ ਡਾਇਰੈਕਟਰੀ ਦੇ ਅਧੀਨ ਸੰਬੰਧਿਤ ਡਾਇਰੈਕਟਰੀਆਂ ਬਣਾਉਣਗੀਆਂ `out`

ਉਦਾਹਰਨ ਲਈ, ਇੱਕ `out/ol` ਡਾਇਰੈਕਟਰੀ ਬਣਾਏਗੀ `.i18n/htm/ol.yml`

ਅਤੇ `ol.yml` ਮੂਲ ਸੰਰਚਨਾ ਹਨ `dev.yml`

`development` ਦਾ ਸੰਖੇਪ ਰੂਪ ਹੈ `dev` ਜੋ ਕਿ ਵਿਕਾਸ ਵਾਤਾਵਰਣ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ, ਸਥਾਨਕ ਪ੍ਰੀਵਿਊ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਇਹ ਡਿਫਾਲਟ ਸੰਰਚਨਾ ਫਾਇਲ ਵੀ ਹੈ।
`online` ਦਾ ਸੰਖੇਪ ਰੂਪ ਹੈ, ਜੋ ਕਿ ਔਨਲਾਈਨ ਵਾਤਾਵਰਣ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ, ਅਧਿਕਾਰਤ ਰੀਲੀਜ਼ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ `npm` ਕਮਾਂਡ ਲਾਈਨ ਪੈਰਾਮੀਟਰ `-n` ਦੀ ਵਰਤੋਂ ਕਰਕੇ) ਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਵੇਲੇ ਡਿਫਾਲਟ ਸੰਰਚਨਾ ਫਾਇਲ ਵੀ ਹੁੰਦੀ ਹੈ `ol`

ਤੁਸੀਂ ਹੋਰ ਸੰਰਚਨਾ ਫਾਈਲਾਂ ਵੀ ਬਣਾ ਸਕਦੇ ਹੋ, ਸੰਰਚਨਾ ਫਾਈਲ ਦਾ ਨਾਮ ਦੇਣ ਲਈ ਕਮਾਂਡ ਲਾਈਨ 'ਤੇ `--htm_conf` :

ਉਦਾਹਰਣ ਲਈ:
```
i18n.site --htm_conf yourConfig --save
```

ਇੱਥੇ ਅੱਪਡੇਟ ਰੀਲਿਜ਼ ਸੰਸਕਰਣ ਨੰਬਰ ਦਰਸਾਉਂਦਾ ਹੈ `--save`

#### <a rel=id href="#npm" id="npm"></a> ਸਮੱਗਰੀ ਨੂੰ npmjs.com 'ਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ

[npmjs.com](//npmjs.com) ਤੇ ਸਮੱਗਰੀ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨਾ ਸਿਫ਼ਾਰਸ਼ ਕੀਤਾ ਡਿਫੌਲਟ ਹੱਲ ਹੈ (ਦੇਖੋ [ਫਰੰਟ-ਐਂਡ ਉੱਚ ਉਪਲਬਧਤਾ](/i18n.site/feature#ha) )।

##### ਜਾਰੀ npm login &

ਇੰਸਟਾਲ ਕਰੋ `nodejs` ਲਾਗ ਇਨ ਕਰਨ ਲਈ `npm login` ਦੀ ਵਰਤੋਂ ਕਰੋ।

ਸੰਪਾਦਿਤ ਕਰੋ `md/.i18n/htm/ol.yml` `i18n.site` ਵਿੱਚ `v: //unpkg.com/i18n.site` ਆਪਣੇ ਖੁਦ ਦੇ `npm` ਪੈਕੇਜ ਨਾਮ) ਵਿੱਚ ਬਦਲੋ।

ਬਸ 'ਤੇ ਖਾਲੀ ਪੈਕੇਜ ਨਾਮ ਦੀ ਵਰਤੋਂ ਕਰੋ [npmjs.com](//npmjs.com)

ਪੈਕੇਜ `npm` ਤੇ ਆਧਾਰਿਤ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਦੇ ਸਮੇਂ, $ ਨੂੰ `v:` ਮੁੱਲ ਦੇ ਅਗੇਤਰ ਵਜੋਂ **`//unpkg.com/` ਯਕੀਨੀ ਬਣਾਓ** `i18n.site` ਇਸ ਅਗੇਤਰ ਮਾਰਗ ਦੇ ਅਧੀਨ `/.v` ਨਵੇਂ ਰੀਲੀਜ਼ਾਂ ਨੂੰ ਸਮੇਂ ਸਿਰ ਦੇਖਣ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਣ ਲਈ ਵਿਸ਼ੇਸ਼ ਤੌਰ 'ਤੇ ਅਨੁਕੂਲਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।

ਅਨੁਵਾਦ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਲਈ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ `i18n.site --npm` ਜਾਂ `i18n.site -n` ਚਲਾਓ `md`

ਜੇਕਰ ਤੁਸੀਂ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਲਈ ਇੱਕ ਨਿਰੰਤਰ ਏਕੀਕਰਣ ਵਾਤਾਵਰਣ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ, ਤਾਂ ਇਸਨੂੰ ਸਥਾਪਤ ਕਰਨ ਦੀ ਕੋਈ ਲੋੜ ਨਹੀਂ ਹੈ `nodejs` ਬਸ ਲੌਗ-ਇਨ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਅਨੁਮਤੀ ਨੂੰ `~/.npmrc` ਵਾਤਾਵਰਣ ਵਿੱਚ ਕਾਪੀ ਕਰੋ।

ਜੇਕਰ ਤੁਸੀਂ `v:` in `ol.yml` ਵਿੱਚ ਪੈਕੇਜ ਨਾਮ ਨੂੰ ਸੋਧਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ **ਪਹਿਲਾਂ `.i18n/v/ol` ਮਿਟਾਉਣਾ ਯਕੀਨੀ ਬਣਾਓ** ਅਤੇ ਫਿਰ ਇਸਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ।

##### npm ਦੁਆਰਾ ਪ੍ਰਕਾਸ਼ਿਤ ਪ੍ਰੌਕਸੀ ਸਰਵਰ

ਜੇਕਰ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਨੈੱਟਵਰਕ ਸਮੱਸਿਆਵਾਂ ਆਉਂਦੀਆਂ ਹਨ ਅਤੇ `npm` ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਵਿੱਚ ਅਸਮਰੱਥ ਹਨ, ਤਾਂ ਉਹ ਪ੍ਰੌਕਸੀ ਸਰਵਰ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰਨ ਲਈ ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲ `https_proxy` ਸੈੱਟ ਕਰ ਸਕਦੇ ਹਨ।

ਇਹ ਮੰਨ ਕੇ ਕਿ ਤੁਹਾਡਾ ਪ੍ਰੌਕਸੀ ਸਰਵਰ ਪੋਰਟ ਹੈ `7890` ਤੁਸੀਂ ਲਿਖ ਸਕਦੇ ਹੋ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### ਸਵੈ-ਹੋਸਟ ਕੀਤੀ ਸਮੱਗਰੀ

ਜੇਕਰ ਤੁਸੀਂ ਸਮੱਗਰੀ ਨੂੰ ਸਵੈ-ਮੇਜ਼ਬਾਨੀ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, `md/.i18n/htm/ol.yml` ਪਹਿਲਾਂ, ਸੰਪਾਦਿਤ ਕਰੋ ਅਤੇ `v: //unpkg.com/i18n.site` ਆਪਣੇ URL ਪ੍ਰੀਫਿਕਸ ਵਿੱਚ ਬਦਲੋ, ਜਿਵੇਂ ਕਿ `v: //i18n-v.xxx.com` ।

`md` ਦਰਜ ਕਰੋ ਅਤੇ ਚਲਾਓ

```
i18n.site --htm_conf ol --save
```

ਜਾਂ ਸੰਖੇਪ

```
i18n.site -c ol -s
```

ਫਿਰ, `md/out/ol/v` ਵਿੱਚ ਸਮੱਗਰੀ ਨੂੰ `v:` ਵਿੱਚ ਸੈੱਟ ਕੀਤੇ URL ਪ੍ਰੀਫਿਕਸ ਪਾਥ ਲਈ ਸੰਰਚਿਤ ਕਰੋ।

ਅੰਤ ਵਿੱਚ, **ਪਾਥ ਦੇ ਕੈਸ਼ ਸਮੇਂ ਨੂੰ `/.v` `1s` ਖਤਮ ਕਰੋ** , ਨਹੀਂ ਤਾਂ ਨਵੀਂ ਜਾਰੀ ਕੀਤੀ ਸਮੱਗਰੀ ਨੂੰ ਤੁਰੰਤ ਐਕਸੈਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

ਬੇਲੋੜੀਆਂ ਬੇਨਤੀਆਂ ਨੂੰ ਘਟਾਉਣ ਲਈ ਹੋਰ ਮਾਰਗਾਂ ਲਈ ਕੈਸ਼ ਸਮਾਂ ਇੱਕ ਸਾਲ ਜਾਂ ਵੱਧ ਸੈੱਟ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

##### s3 ਲਈ ਸਮੱਗਰੀ ਦੀ ਮੇਜ਼ਬਾਨੀ ਕਰੋ

ਸਵੈ-ਹੋਸਟ ਸਮੱਗਰੀ ਲਈ, ਤੁਹਾਡੇ ਆਪਣੇ ਸਰਵਰ `CDN` ਵਰਤੋਂ ਕਰਨ ਤੋਂ ਇਲਾਵਾ, ਇੱਕ ਹੋਰ ਆਮ ਵਿਕਲਪ ਹੈ `S3` +

ਤੁਸੀਂ `S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

ਕੌਂਫਿਗਰ ਕਰਨਾ ਯਾਦ ਰੱਖੋ `CDN` ਤਾਂ ਕਿ `/.v` ਵਿੱਚ ਖਤਮ ਹੋਣ ਵਾਲੇ ਮਾਰਗ ਦਾ ਕੈਸ਼ ਸਮਾਂ `1s` ਹੋਵੇ, ਨਹੀਂ ਤਾਂ ਤੁਸੀਂ ਤੁਰੰਤ ਜਾਰੀ ਕੀਤੀ ਸਮੱਗਰੀ ਤੱਕ ਪਹੁੰਚ ਨਹੀਂ ਕਰ ਸਕੋਗੇ।

### ਵੈੱਬਸਾਈਟ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ

ਵੈੱਬਸਾਈਟ ਨੂੰ ਕਿਤੇ ਵੀ ਲਗਾਇਆ ਜਾ ਸਕਦਾ ਹੈ [github page](https://pages.github.com) ਅਤੇ [cloudflare page](https://pages.cloudflare.com) ਵਧੀਆ ਵਿਕਲਪ ਹਨ।

ਕਿਉਂਕਿ ਵੈੱਬਸਾਈਟ [ਇੱਕ ਸਿੰਗਲ-ਪੰਨੇ ਐਪਲੀਕੇਸ਼ਨ](https://developer.mozilla.org/docs/Glossary/SPA) ਦੇ ਆਰਕੀਟੈਕਚਰ ਨੂੰ ਅਪਣਾਉਂਦੀ ਹੈ, ਇਸ ਲਈ URL ਮਾਰਗ ਨੂੰ ਮੁੜ ਲਿਖਣਾ ਯਾਦ ਰੱਖੋ ਜਿਸ ਵਿੱਚ `index.html` `. `

ਵੈੱਬਸਾਈਟ ਐਂਟਰੀ ਪੇਜ ਨੂੰ ਸਿਰਫ਼ ਇੱਕ ਵਾਰ ਤੈਨਾਤ ਕਰਨ ਦੀ ਲੋੜ ਹੈ, ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਸਮੱਗਰੀ ਅੱਪਡੇਟ ਲਈ ਵੈੱਬਸਾਈਟ ਐਂਟਰੀ ਪੰਨੇ ਨੂੰ ਮੁੜ ਤੈਨਾਤ ਕਰਨ ਦੀ ਕੋਈ ਲੋੜ ਨਹੀਂ ਹੈ।

#### github ਪੰਨੇ 'ਤੇ ਤੈਨਾਤ ਕਰੋ

[ਇੱਕ ਸੰਸਥਾ ਬਣਾਉਣ ਲਈ ਪਹਿਲਾਂ ਇੱਥੇ ਕਲਿੱਕ github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

ਫਿਰ ਇਸ `i18n-demo.github.io` ਦੇ ਅਧੀਨ ਇੱਕ ਵੇਅਰਹਾਊਸ ਬਣਾਓ (ਕਿਰਪਾ ਕਰਕੇ `i18n-demo` ਤੁਹਾਡੇ ਦੁਆਰਾ ਬਣਾਏ ਗਏ ਸੰਗਠਨ ਦੇ ਨਾਮ ਨਾਲ ਬਦਲੋ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

ਪਿਛਲੇ ਲੇਖ ਵਿੱਚ ਸਮੱਗਰੀ ਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਦੇ ਸਮੇਂ, ਇਹ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ `out/ol/htm` ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਡਾਇਰੈਕਟਰੀ ਨੂੰ ਦਰਜ ਕਰੋ ਅਤੇ ਚਲਾਓ :

```
ln -s index.html 404.html
```


`github page` URL ਪਾਥ ਰੀਰਾਈਟਿੰਗ ਦਾ ਸਮਰਥਨ ਨਹੀਂ ਕਰਦਾ ਹੈ, ਇਸਲਈ `404.html` ਦੀ ਬਜਾਏ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

ਫਿਰ `htm` ਵਿੱਚ ਹੇਠ ਲਿਖੀ ਕਮਾਂਡ ਚਲਾਓ ( `i18n-demo/i18n-demo.github.io.git` ਆਪਣੇ ਖੁਦ ਦੇ ਵੇਅਰਹਾਊਸ ਐਡਰੈੱਸ ਨਾਲ ਬਦਲਣਾ ਯਾਦ ਰੱਖੋ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

ਕੋਡ ਨੂੰ ਦਬਾਉਣ ਤੋਂ ਬਾਅਦ, `github page` ਤੈਨਾਤੀ ਦੇ ਸਫਲਤਾਪੂਰਵਕ ਚੱਲਣ ਦੀ ਉਡੀਕ ਕਰੋ (ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ), ਅਤੇ ਫਿਰ ਤੁਸੀਂ ਇਸ ਤੱਕ ਪਹੁੰਚ ਕਰ ਸਕਦੇ ਹੋ।

<img src="//p.3ti.site/1721116586.avif" width="350px">

ਡੈਮੋ ਪੇਜ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਵੇਖੋ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ਕਲਾਉਡਫਲੇਅਰ ਪੰਨੇ 'ਤੇ ਤੈਨਾਤ ਕਰੋ

[cloudflare page](//pages.cloudflare.com) ਤੁਲਨਾ ਵਿੱਚ `github page` ਇਹ ਪਾਥ ਰੀਰਾਈਟਿੰਗ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਲਈ ਵਧੇਰੇ ਅਨੁਕੂਲ ਹੈ ਅਤੇ ਇਸਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।

ਤੈਨਾਤੀ ਆਮ ਤੌਰ 'ਤੇ ਉਪਰੋਕਤ `github page` ਦੀ ਤੈਨਾਤੀ 'ਤੇ ਅਧਾਰਤ ਹੁੰਦੀ ਹੈ `cloudflare page`

ਇੱਕ ਪ੍ਰੋਜੈਕਟ ਬਣਾਓ ਅਤੇ ਉਪਰੋਕਤ ਵੇਅਰਹਾਊਸ ਨੂੰ ਬੰਨ੍ਹੋ `i18n-demo.github.io`

ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਹੇਠਾਂ ਦਿੱਤੇ ਚਿੱਤਰ ਵਿੱਚ ਦਿਖਾਇਆ ਗਿਆ ਹੈ:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

ਕਿਰਪਾ ਕਰਕੇ `i18n-demo` ਸੰਗਠਨ ਤੱਕ ਪਹੁੰਚ ਦੇਣ ਲਈ ਕਲਿੱਕ ਕਰੋ `Add Account`

ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਹੋਰ ਸੰਸਥਾ ਦੇ ਵੇਅਰਹਾਊਸ ਨੂੰ ਬੰਨ੍ਹਿਆ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਨਵੀਂ ਸੰਸਥਾ ਦੇ ਪ੍ਰਦਰਸ਼ਿਤ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਇਸਨੂੰ ਦੋ ਵਾਰ ਅਧਿਕਾਰਤ ਕਰਨ ਲਈ ਦੋ ਵਾਰ ਕਲਿੱਕ ਕਰਨ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

ਅੱਗੇ ਵੇਅਰਹਾਊਸ `i18n-demo.github.io` ਚੋਣ ਕਰੋ, ਫਿਰ `Begin setup` ਕਲਿੱਕ ਕਰੋ, ਅਤੇ ਅਗਲੇ ਕਦਮਾਂ ਲਈ ਡਿਫੌਲਟ ਮੁੱਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।

<img alt="" src="https://p.3ti.site/1721118490.avif">

ਪਹਿਲੀ ਵਾਰ ਬਾਈਡਿੰਗ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ ਇਸ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੁਝ ਮਿੰਟ ਉਡੀਕ ਕਰਨ ਦੀ ਲੋੜ ਹੈ।

ਤੈਨਾਤੀ ਤੋਂ ਬਾਅਦ, ਤੁਸੀਂ ਇੱਕ ਕਸਟਮ ਡੋਮੇਨ ਨਾਮ ਨੂੰ ਬੰਨ੍ਹ ਸਕਦੇ ਹੋ।

<img alt="" src="https://p.3ti.site/1721119459.avif">

ਕਸਟਮ ਡੋਮੇਨ ਨਾਮ ਨੂੰ ਬੰਨ੍ਹਣ ਤੋਂ ਬਾਅਦ, ਕਿਰਪਾ ਕਰਕੇ ਸਿੰਗਲ-ਪੇਜ ਐਪਲੀਕੇਸ਼ਨ ਦੇ ਪਾਥ ਰੀਰਾਈਟਿੰਗ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰਨ ਲਈ ਡੋਮੇਨ ਨਾਮ 'ਤੇ ਜਾਓ, ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ:

<img alt="" src="https://p.3ti.site/1721119320.avif">

ਉਪਰੋਕਤ ਤਸਵੀਰ ਵਿੱਚ ਨਿਯਮ ਹੇਠਾਂ ਦਿੱਤੇ ਗਏ ਹਨ, ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੀ ਗਈ ਡੋਮੇਨ ਨਾਮ ਨਾਲ ਬਦਲੋ `i18n.site`

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

ਇਸ ਤੋਂ ਇਲਾਵਾ, ਕਿਰਪਾ ਕਰਕੇ ਕੈਸ਼ ਨਿਯਮਾਂ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰੋ, ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਦਿਖਾਇਆ ਗਿਆ ਹੈ, ਅਤੇ ਕੈਸ਼ ਦੀ ਮਿਆਦ ਨੂੰ ਇੱਕ ਮਹੀਨੇ 'ਤੇ ਸੈੱਟ ਕਰੋ।

<img alt="" src="https://p.3ti.site/1721125111.avif">

ਕਿਰਪਾ ਕਰਕੇ ਉਪਰੋਕਤ ਤਸਵੀਰ ਵਿੱਚ ਦੂਜੇ ਪੜਾਅ ਵਿੱਚ ਮੇਲ ਖਾਂਦੇ ਡੋਮੇਨ ਨਾਮ ਨੂੰ ਤੁਹਾਡੇ ਦੁਆਰਾ ਬੰਨ੍ਹੇ ਹੋਏ ਡੋਮੇਨ ਨਾਮ ਵਿੱਚ ਬਦਲੋ।

#### ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਵੈੱਬਸਾਈਟ ਤੈਨਾਤੀ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣਾ

ਜੇਕਰ ਤੁਸੀਂ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਦੇ ਨੈੱਟਵਰਕ ਵਾਤਾਵਰਨ ਵਿੱਚ ਬਿਹਤਰ ਪਹੁੰਚਯੋਗਤਾ ਪ੍ਰਦਰਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ [ਇੱਕ ਡੋਮੇਨ ਨਾਮ ਰਜਿਸਟਰ ਕਰੋ](//beian.aliyun.com) ।

ਫਿਰ, ਮੇਨਲੈਂਡ ਚੀਨ ਵਿੱਚ ਕਲਾਉਡ ਵਿਕਰੇਤਾਵਾਂ ਦੀ `out/ol/htm` ਸਟੋਰੇਜ ਦੀ ਵਰਤੋਂ `CDN` +

ਤੁਸੀਂ ਏਜ ਕੰਪਿਊਟਿੰਗ ਦੀ ਵਰਤੋਂ ਸਿੰਗਲ-ਪੇਜ ਐਪਲੀਕੇਸ਼ਨਾਂ ਦੇ ਅਨੁਕੂਲ ਹੋਣ ਲਈ ਮਾਰਗ ਨੂੰ ਮੁੜ ਲਿਖਣ ਲਈ ਕਰ ਸਕਦੇ ਹੋ, ਜਿਵੇਂ ਕਿ [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ਇਸਨੂੰ ਇਸ ਤਰ੍ਹਾਂ ਸੰਰਚਿਤ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ:

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

ਕਿਉਂਕਿ `MX` ਅਤੇ `CNAME` ਰਿਕਾਰਡ ਇਕੱਠੇ ਨਹੀਂ ਹੋ ਸਕਦੇ, ਜੇਕਰ ਤੁਸੀਂ ਇੱਕੋ ਸਮੇਂ 'ਤੇ ਡੋਮੇਨ ਨਾਮ ਦੀਆਂ ਈਮੇਲਾਂ ਪ੍ਰਾਪਤ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ `CNAME` `A` ਰਿਕਾਰਡ) ਵਿੱਚ ਸਮਤਲ ਕਰਨ ਲਈ ਸਕ੍ਰਿਪਟ ਨਾਲ ਸਹਿਯੋਗ ਕਰਨ ਦੀ ਲੋੜ ਹੈ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

ਇਸ ਤੋਂ ਇਲਾਵਾ, ਕਿਉਂਕਿ ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਕਲਾਉਡ ਵਿਕਰੇਤਾਵਾਂ ਦੇ ਵਿਦੇਸ਼ੀ ਟ੍ਰੈਫਿਕ ਖਰਚੇ ਮੁਕਾਬਲਤਨ ਮਹਿੰਗੇ ਹਨ, ਜੇਕਰ ਤੁਸੀਂ ਲਾਗਤਾਂ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ [Huawei DNS ਦੇ ਮੁਫ਼ਤ ਭੂਗੋਲਿਕ ਰੈਜ਼ੋਲਿਊਸ਼ਨ](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ਅਤੇ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ਦੇ ਕਸਟਮ ਡੋਮੇਨ ਨਾਮ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ ਟ੍ਰੈਫਿਕ ਡਾਇਵਰਸ਼ਨ──ਮੁੱਖ ਭੂਮੀ ਚੀਨ ਵਿੱਚ ਟ੍ਰੈਫਿਕ Baidu Cloud `CDN` ਅੰਤਰਰਾਸ਼ਟਰੀ ਟ੍ਰੈਫਿਕ cloudflare ਜਾਂਦਾ ਹੈ।

<img alt="" src="https://p.3ti.site/1721119788.avif">

ਇਹ ਡਿਪਲਾਇਮੈਂਟ ਓਪਟੀਮਾਈਜੇਸ਼ਨ ਹੱਲ ਵਧੇਰੇ ਗੁੰਝਲਦਾਰ ਹਨ ਅਤੇ ਭਵਿੱਖ ਵਿੱਚ ਵੱਖਰੇ ਅਧਿਆਵਾਂ ਵਿੱਚ ਪੇਸ਼ ਕੀਤੇ ਜਾਣਗੇ।

#### ਆਮ ਡੋਮੇਨ ਨਾਮ ਰੀਡਾਇਰੈਕਸ਼ਨ

ਜੇਕਰ ਤੁਸੀਂ ਇੱਕ ਵੈਬਸਾਈਟ ਨੂੰ ਆਪਣੀ ਮੁੱਖ ਵੈੱਬਸਾਈਟ ਬਣਾਉਣ ਲਈ ਵਰਤਦੇ `i18n.site` , ਤਾਂ ਤੁਹਾਨੂੰ ਆਮ ਤੌਰ 'ਤੇ ਪੈਨ-ਡੋਮੇਨ ਰੀਡਾਇਰੈਕਸ਼ਨ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਯਾਨੀ ਕਿ, `*.xxx.com` ( `www.xxx.com` ਸਮੇਤ) ਤੱਕ ਪਹੁੰਚ `xxx.com`

ਇਹ ਲੋੜ ਅਲੀਬਾਬਾ ਕਲਾਊਡ ਦੇ `EdgeScript` ( [ਅੰਗਰੇਜ਼ੀ ਦਸਤਾਵੇਜ਼](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ਚੀਨੀ ਦਸਤਾਵੇਜ਼](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ਦੀ ਮਦਦ ਨਾਲ ਪ੍ਰਾਪਤ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ `CDN`

[ਅਲੀਬਾਬਾ CDN](https://cdn.console.aliyun.com/domain/list) ਵਿੱਚ ਇੱਕ ਡੋਮੇਨ ਨਾਮ ਸ਼ਾਮਲ ਕਰੋ ਅਤੇ `*.xxx.com` ਨਾਮ ਨੂੰ ਅਲੀਬਾਬਾ ਕਲਾਉਡ `CDN` 's `CNAME` ਵੱਲ ਪੁਆਇੰਟ ਕਰੋ।

<img alt="" src="https://p.3ti.site/1721122000.avif">

ਉਦਾਹਰਨ ਲਈ, ਉਪਰੋਕਤ ਤਸਵੀਰ ਵਿੱਚ ਪੈਨ-ਡੋਮੇਨ ਨਾਮ ਰੀਡਾਇਰੈਕਸ਼ਨ ਕੌਂਫਿਗਰੇਸ਼ਨ ਇਸ `*.i18n.site` ਹੈ:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx ਨਾਲ ਤੈਨਾਤ ਕਰੋ

ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੇ `server` ਸਮਾਨ ਸੰਰਚਨਾ ਸ਼ਾਮਲ ਕਰੋ nginx ਜਿੱਥੇ `/root/i18n/md/out/ol/htm` ਕਿਰਪਾ ਕਰਕੇ ਇਸਨੂੰ ਆਪਣੇ ਖੁਦ ਦੇ ਪ੍ਰੋਜੈਕਟ `out/ol/htm` ਦੇ ਮਾਰਗ ਵਿੱਚ ਬਦਲੋ:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ਡਾਇਰੈਕਟਰੀ ਬਣਤਰ

#### ਜਨਤਕ

ਵੈੱਬਸਾਈਟ ਦੀਆਂ ਸਥਿਰ ਫਾਈਲਾਂ, ਜਿਵੇਂ ਕਿ `favicon.ico` `robots.txt` , ਆਦਿ।

ਇੱਥੇ ਆਈਕਨ ਫਾਈਲਾਂ ਨੂੰ ਨਾਲ ਤਿਆਰ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

ਡਾਇਰੈਕਟਰੀ ਦੇ ਹੇਠਾਂ `i18n.site` ਦੀਆਂ ਸੰਰਚਨਾ ਫਾਈਲਾਂ, ਅਨੁਵਾਦ ਕੈਸ਼, ਆਦਿ ਹਨ `.i18n` ਵੇਰਵਿਆਂ ਲਈ ਅਗਲਾ ਅਧਿਆਇ ["ਸੰਰਚਨਾ"](/i18n.site/conf) ਵੇਖੋ।

#### en

ਸਰੋਤ ਭਾਸ਼ਾ ਡਾਇਰੈਕਟਰੀ, ਸੰਰਚਨਾ ਫਾਇਲ ਵਿੱਚ `fromTo` `en` `.i18n/conf.yml` ਸੰਬੰਧਿਤ ਹੈ

```yaml
i18n:
  fromTo:
    en: zh
```

ਕਿਰਪਾ ਕਰਕੇ ਅਨੁਵਾਦ ਦੀ ਸੰਰਚਨਾ ਨੂੰ ਵੇਖੋ [i18](/i18/use)


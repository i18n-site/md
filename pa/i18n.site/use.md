# ਇੰਸਟਾਲ ਕਰੋ &

## ਇੰਸਟਾਲ ਕਰੋ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ਸੰਰਚਨਾ ਟੋਕਨ

`i18n.site` ਕੋਲ ਇੱਕ ਬਿਲਟ-ਇਨ `i18` ਅਨੁਵਾਦ ਟੂਲ ਹੈ ਕਿਰਪਾ ਕਰਕੇ [ਐਕਸੈਸ ਟੋਕਨ ਨੂੰ ਕੌਂਫਿਗਰ ਕਰਨ ਲਈ `i18` ਦਸਤਾਵੇਜ਼ ਦਾ ਹਵਾਲਾ ਦੇਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ](/i18/use) ।

## ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ

ਆਉ `i18n.site` ਵਰਤੋਂ ਕਰਨ ਬਾਰੇ ਸਿੱਖਣ ਲਈ ਇੱਕ ਡੈਮੋ ਪ੍ਰੋਜੈਕਟ ਨਾਲ ਸ਼ੁਰੂ ਕਰੀਏ।

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

`demo.i18n.site` ਕੋਡ ਬੇਸ ਕਲੋਨ ਦਾ ਡਾਇਰੈਕਟਰੀ ਨਾਮ `docker` ਨਾਲ ਸਥਾਨਕ ਪੂਰਵਦਰਸ਼ਨ ਦੀ ਸਹੂਲਤ ਲਈ `md` ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।

### ਅਨੁਵਾਦ ਕਰੋ

ਪਹਿਲਾਂ, `md` ਡਾਇਰੈਕਟਰੀ ਦਿਓ ਅਤੇ `i18n.site` ਚਲਾਓ, ਜੋ `en` ਤੋਂ `zh` ਅਨੁਵਾਦ ਕਰੇਗਾ।

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ਚੱਲਣ ਤੋਂ ਬਾਅਦ, ਅਨੁਵਾਦ ਅਤੇ ਕੈਸ਼ ਫਾਈਲਾਂ ਤਿਆਰ ਕੀਤੀਆਂ ਜਾਣਗੀਆਂ, ਕਿਰਪਾ ਕਰਕੇ ਉਹਨਾਂ ਨੂੰ `md` `git add . ` ਵਿੱਚ ਰਿਪੋਜ਼ਟਰੀ ਵਿੱਚ ਜੋੜਨਾ ਯਾਦ ਰੱਖੋ।

### ਸਥਾਨਕ ਝਲਕ

`docker` ਸਥਾਪਿਤ ਕਰੋ ਅਤੇ ਸ਼ੁਰੂ ਕਰੋ ( `MAC` ਉਪਭੋਗਤਾ `docker` ਲਈ ਰਨਟਾਈਮ ਵਜੋਂ ਵਰਤਣ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹੈ) [orbstack](https://orbstack.dev)

ਫਿਰ, `docker` ਡਾਇਰੈਕਟਰੀ ਦਾਖਲ ਕਰੋ ਅਤੇ `./up.sh` ਚਲਾਓ, ਅਤੇ ਫਿਰ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਪੂਰਵਦਰਸ਼ਨ ਕਰਨ ਲਈ ਵੇਖੋ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
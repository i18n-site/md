# ਅਨੁਕੂਲਿਤ ਨੈਵੀਗੇਸ਼ਨ

ਆਉ ਨੈਵੀਗੇਸ਼ਨ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰਨ ਲਈ ਇੱਕ ਉਦਾਹਰਣ ਦੇ ਤੌਰ 'ਤੇ ਲੈਂਦੇ ਹਾਂ [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

ਉਪਰੋਕਤ ਚਿੱਤਰ ਵਿੱਚ ਅੰਕਿਤ ਖੇਤਰਾਂ ਨਾਲ ਸੰਬੰਧਿਤ ਫਾਈਲਾਂ ਇਸ ਪ੍ਰਕਾਰ ਹਨ:

1. ਖੱਬੇ [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. ਸੱਜਾ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ਇੱਕ ਟੈਂਪਲੇਟ ਭਾਸ਼ਾ ਹੈ ਜੋ `HTML` 's ਤਿਆਰ ਕਰਦੀ ਹੈ।

[➔ ਦੀ ਵਿਆਕਰਣ ਸਿੱਖਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ pug](https://pugjs.org)

ਫਾਰਮੈਟ ਸਤਰ `${I18N.sponsor}` ਦੀ ਵਰਤੋਂ ਅੰਤਰਰਾਸ਼ਟਰੀਕਰਨ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਅਤੇ ਇਸਦੀ ਸਮੱਗਰੀ ਨੂੰ ਸਰੋਤ ਭਾਸ਼ਾ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਸੰਬੰਧਿਤ ਟੈਕਸਟ ਨਾਲ ਬਦਲਿਆ ਜਾਵੇਗਾ [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`pug` ਵਿੱਚ `css` ਅਤੇ `js` ਨਾ ਲਿਖੋ** , ਨਹੀਂ ਤਾਂ ਇੱਕ ਗਲਤੀ ਹੋਵੇਗੀ।

ਸ਼ੈਲੀਆਂ `css` ਵਿੱਚ ਲਿਖੀਆਂ ਜਾਂਦੀਆਂ ਹਨ, ਅਤੇ ਵੈਬ ਕੰਪੋਨੈਂਟ ਬਣਾ ਕੇ ਇੰਟਰਐਕਸ਼ਨ ਪ੍ਰਾਪਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

ਇੱਥੇ, ਨੇਵੀਗੇਸ਼ਨ ਪੱਟੀ ਦੀ ਸ਼ੈਲੀ ਨਾਲ ਸੰਬੰਧਿਤ ਫਾਇਲ : ਹੈ [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)
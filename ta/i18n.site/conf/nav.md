# தனிப்பயனாக்கப்பட்ட வழிசெலுத்தல்

வழிசெலுத்தலை எவ்வாறு தனிப்பயனாக்குவது என்பதை விளக்க டெமோ தளத்தை எடுத்துக் கொள்வோம் [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

மேலே உள்ள படத்தில் எண்ணிடப்பட்ட பகுதிகளுடன் தொடர்புடைய கோப்புகள் பின்வருமாறு:

1. இடது [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. வலது [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) என்பது `HTML` ஐ உருவாக்கும் டெம்ப்ளேட் மொழி.

[➔ இலக்கணத்தை அறிய இங்கே கிளிக் செய்யவும் pug](https://pugjs.org)

சர்வதேசமயமாக்கலை செயல்படுத்த கோப்பில் சரம் `${I18N.sponsor}` பயன்படுத்தப்படுகிறது, மேலும் அதன் உள்ளடக்கமானது மூல மொழி அடைவில் உள்ள [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) மாற்றப்படும்.

**`pug` இல் `css` மற்றும் `js` எழுத வேண்டாம்** , இல்லையெனில் பிழை ஏற்படும்.

பாணிகள் `css` இல் எழுதப்படுகின்றன, மேலும் இணைய கூறுகளை உருவாக்குவதன் மூலம் தொடர்பு அடையப்படுகிறது.

[i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) , வழிசெலுத்தல் பட்டியின் பாணியுடன் தொடர்புடைய கோப்பு :
# Přizpůsobená Navigace

Vezměme si [i18n-demo.github.io](//i18n-demo.github.io) web jako příklad pro vysvětlení, jak přizpůsobit navigaci.

![](https://p.3ti.site/1731036697.avif)

Soubory odpovídající číslovaným oblastem na výše uvedeném obrázku jsou následující:

1. Vlevo [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Správně [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) je jazyk šablony, který generuje `HTML` .

[➔ Kliknutím sem se naučíte gramatiku pug](https://pugjs.org)

Formátový řetězec `${I18N.sponsor}` se v souboru používá k implementaci internacionalizace a jeho obsah bude nahrazen [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) textem v adresáři zdrojového jazyka.

**Nepište `css` a `js` v `pug`** , jinak dojde k chybě.

Styly se zapisují do `css` a interakce je dosaženo vytvořením webových komponent.

Zde je soubor odpovídající stylu navigační lišty : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)
# Személyre Szabott Navigáció

Vegyük a bemutató oldalt példaként a navigáció testreszabásához [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

A fenti ábra számozott területeinek megfelelő fájlok a következők:

1. Balra [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Jobb [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

A [`pug`](https://pugjs.org) egy sablonnyelv, amely `HTML` -eket generál.

[➔ Kattintson ide a nyelvtan megtanulásához pug](https://pugjs.org)

A `${I18N.sponsor}` formátumú karakterláncot használjuk a fájlban a nemzetköziesítés megvalósításához, és a tartalma a megfelelő szöveggel lesz helyettesítve a forrásnyelvi könyvtárban [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**Ne írjon `css` és `js` t `pug` -ba** , különben hiba lép fel.

A stílusok `css` ba vannak írva, és az interakció webes összetevők létrehozásával érhető el.

Itt a navigációs sáv stílusának megfelelő fájl : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) .
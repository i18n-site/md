# Dostosowana Nawigacja

Weźmy jako przykład witrynę demonstracyjną [i18n-demo.github.io](//i18n-demo.github.io) aby wyjaśnić, jak dostosować nawigację.

![](https://p.3ti.site/1731036697.avif)

Pliki odpowiadające ponumerowanym obszarom na powyższym rysunku są następujące:

1. Lewe [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Prawo [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) to język szablonów, który generuje `HTML` .

[➔ Kliknij tutaj, aby poznać gramatykę pug](https://pugjs.org)

Ciąg formatujący `${I18N.sponsor}` jest używany w pliku do implementacji internacjonalizacji, a jego zawartość zostanie zastąpiona [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) tekstem w katalogu języka źródłowego.

**Nie zapisuj `css` i `js` w `pug`** , w przeciwnym razie wystąpi błąd.

Style są zapisywane w `css` , a interakcję osiąga się poprzez tworzenie komponentów sieciowych.

Tutaj plik odpowiadający stylowi paska nawigacyjnego to : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)
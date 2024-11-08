# Custom Navigation

Let's take the demo site [i18n-demo.github.io](//i18n-demo.github.io) as an example to explain how to customize the navigation.

![](https://p.3ti.site/1731036697.avif)

The files corresponding to the numbered areas in the above figure are as follows:

1. Left [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Right [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) is a template language used to generate `HTML`.

[➔ Click here to learn the syntax of Pug](https://pugjs.org)

The format string `${I18N.sponsor}` is used in the file to implement internationalization. Its content will be replaced with the corresponding text from [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) in the source language directory.

**Do not write `CSS` or `JavaScript` in `Pug` files**, as this will cause errors.

Styles should be written in `CSS` files, and interactions should be implemented through web components.

Here, the file corresponding to the style of the navigation bar is: [.i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css).
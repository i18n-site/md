# Product Features

## Integrated with `i18` translation

The program has built-in `i18` translation, and for specific usage, please refer to [➔ `i18` document](/i18).

## Automatically match the browser language

The default language of the website will automatically match the browser's language.

After the user manually switches the language, the user's choice will be remembered.

Related code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobile-terminal adaptation

There is also a perfect reading experience on the mobile phone.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end high availability

By default, `i18n.site` will publish the site content to `npmjs.com`, with the assistance of [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) and other multiple `CDN`s to load the content on `npm`.

On this basis, mirror sources from the Chinese mainland were added to enable Chinese users to have stable access and achieve **high front-end availability**.

The principle is: intercept requests with [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API), retry failed requests on other `CDN`s, and adaptively enable the fastest-responding origin site as the default loading source.

Related code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Single-page application, extremely fast loading

The website adopts a single-page application architecture, with no refresh when switching pages and extremely fast loading.

## Optimized for the reading experience

### Well-designed style

> The beauty of simplicity is perfectly interpreted in the web design of this site.
> It abandons superfluous decorations and presents the content in its purest form.
> Like a beautiful poem, although it is short, it touches people's hearts.

<p style="text-align:right">── I18N.SITE Author</p>

[➔ Click here to see a list of styles](/i18n.site/md/styl).

### Multi-language `RSS` subscription

![](//p.3ti.site/1725541085.avif)

The above picture shows the multi-language `RSS` subscription of `i18n.site` using [inoreader.com](//inoreader.com).

### Load online fonts and support Chinese

The webpage defaults to enabling [Alimama dual-axis variable square fonts](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) and other online fonts to unify the reading experience of users on different platforms.

At the same time, in order to improve the loading speed, the fonts are sliced according to word frequency statistics.

Related code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Top navigation automatically hides

When scrolling down, the top navigation will automatically hide.

When scrolling up, the hidden navigation will reappear.

It will fade out when the mouse is not moving.

There is a full-screen button in the upper right corner of the navigation bar to create an immersive document reading experience.

### Synchronized highlighting of the current chapter in the outline

When scrolling the content on the right side, the outline on the left will synchronously highlight the currently read chapter.

## Cool details

### Mouse effects

Hover the mouse over the button on the right side of the top navigation to see cool special effects.

### The `404` little ghost

The `404` page has a cute little floating ghost, and its eyes will move with the mouse. [➔ Click here to view](/404)

## Code open source

[Code is open source](/i18n.site/src). If you are interested in participating in development, please introduce yourself on [the mailing list](//groups.google.com/u/2/g/i18n-site).

There are many small requirements that are important but not urgent. The development team will assign hands-on tasks based on the technologies you are good at, and improve the development documents while assigning the requirements.
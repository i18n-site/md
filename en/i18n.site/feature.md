# Feature of Product

## Integrated `I18` Translation

The program has built-in `i18` translation, please see [➔ `i18`](/i18) for specific usage.

## Automatically Match Browser Language

The website default language will automatically match the browser's language.

After the user manually switches languages, the user's choice will be remembered.

Related code : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) .

## Mobile Terminal Adaptation

There is also a perfect reading experience on the mobile phone.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end high availability

`i18n.site` By default, site content will be published to `npmjs.com` , with the help of [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) and multiple `CDN` content loaded on `npm` .

On this basis, mirror sources from mainland China were added to allow Chinese users to have stable access and achieve **high front-end availability** .

The principle is: intercept the request with the help of [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , if the request fails, retry it on other `CDN` , and adaptively enable the fastest responding origin station as the default loading source.

Related code : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) .

## Single Page Application, Extremely Fast Loading

The website adopts a single-page application architecture, with no refresh when switching pages and extremely fast loading.

## Optimized for Reading Experience

### Well Designed Style

> The beauty of simplicity is perfectly interpreted in the web design of this website.
> It abandons unnecessary decoration and presents content in its purest form.
> Like a beautiful poem, although it is short, it touches people's hearts.

<p style="text-align:right">── I18N.SITE Author</p>

[➔ Click here to see a list of styles](/i18n.site/md/styl) .

### Load Online Fonts, Support Chinese

By default, [Alimama dual-axis variable rectangular fonts](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) and other online fonts are enabled on the webpage to unify the reading experience of users on different platforms.

At the same time, in order to improve loading speed, fonts are sliced ​​according to word frequency statistics.

Related code : [github.com/i18n-site/font](https://github.com/i18n-site/font) .

### Top Navigation Automatically Hidden

Scroll down and the top navigation will automatically hide.

Scroll up and the hidden navigation will appear again.

It will fade out when the mouse is not moving.

There is a full-screen button in the upper right corner of the navigation bar to create an immersive document reading experience.

### Synchronized Outline Highlighting of the Current Chapter

When scrolling the content on the right, the outline on the left will simultaneously highlight the currently reading chapter.

## Cool Details

### Mouse Effects

Hover your mouse over the button on the right side of the top navigation to see cool special effects.

### `404` the Little Ghost

`404` There is a cute little floating ghost on the page, its eyes will move with the mouse, [➔ Click here to view](/404) ,

## Code Open Source

[The code is open source](/i18n.site/src) . If you are interested in participating in development, please introduce yourself to [the mailing list](//groups.google.com/u/2/g/i18n-site) .

There are many small requirements that are important but not urgent. The development team will assign practice tasks according to the technology you are good at, and improve the development documents while assigning the requirements.


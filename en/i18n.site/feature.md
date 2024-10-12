# Product Features

## Integrated with `i18` Translations

The program has built - in `i18` translation. For specific usage, please refer to [➔ `i18` document](/i18).

## Automatically Match the Browser Language

The default language of the website will automatically match that of the browser.

Once the user manually switches the language, the user's choice will be remembered.

Related code: [github.com/i18n - site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobile - end Adaptation

There is also a perfect reading experience on mobile devices.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> High Front - end Availability

`i18n.site` will automatically publish the site content to `npmjs.com` by default, leveraging [jsdelivr.com](//jsdelivr.com) and [unpkg.com](//unpkg.com) among other `CDN` services to load content hosted on `npm`.

On this basis, mirror sources in mainland China are added, enabling Chinese users to access stably and achieving **high front - end availability**.

The underlying principle is: by utilizing a [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) to intercept requests, it retries failed requests on alternative `CDN` services and adaptively selects the fastest responding source as the default loading origin.

Related code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Single - Page Application, Lightning - fast Loading

The website adopts a single - page application architecture. When switching pages, there is no refresh and the loading is extremely fast.

## Optimized for Reading Experience

### Exquisitely Designed Styles

> The beauty of simplicity is perfectly illustrated in the web design of this website.
> It discards redundant adornments and presents content in the purest form.
> Just like a beautiful poem, though short, it touches people's hearts.

<p style="text-align:right">── I18N.SITE Author</p>

[➔ Click here to view the styles](/i18n.site/md/styl).

### Multilingual `RSS` subscriptions

![](//p.3ti.site/1725541085.avif)

The image above illustrates the multilingual `RSS` subscription for `i18n.site` using [inoreader.com](//inoreader.com).

### Load Online Fonts and Support Chinese

By default, online fonts such as [Alimama Dual - axis Variable Fangyuan Font](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) and [MiSans](https://hyperos.mi.com/font/zh/download/) are enabled on the webpage to unify the reading experience of users on different platforms.

Meanwhile, in order to improve the loading speed, the fonts are sliced according to word - frequency statistics.

Related code: [github.com/i18n - site/font](https://github.com/i18n-site/font).

### Top Navigation Automatically Hides

When scrolling down, the top navigation will automatically hide.

When scrolling up, the hidden navigation will reappear.

When the mouse is stationary, it will fade out.

There is a full - screen button in the upper - right corner of the navigation bar, creating an immersive document - reading experience.

### Outline Synchronously Highlights the Current Chapter

When scrolling the content on the right side, the outline on the left side will synchronously highlight the currently reading chapter.

## Cool Details

### Mouse Effects

Hover the mouse over the button on the right side of the top navigation to see cool special effects.

### `404` Little Ghost

There is a cute floating little ghost on the `404` page. Its eyes will move with the mouse. [➔ Click here to view](/404)

## Open - source Code

[The code is open - source](/i18n.site/src). If you are interested in participating in the development, you are welcomed to introduce yourself in [the mailing list](//groups.google.com/u/2/g/i18n-site).

There are quite a few small requirements that are important but not urgent. The development team will assign practice tasks according to the technologies you are good at and improve the development documents while assigning the requirements.
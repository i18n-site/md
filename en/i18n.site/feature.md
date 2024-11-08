# Product Features

## `i18` Translation Integration

The program includes built-in `i18` translation. For specific usage, see [➔ `i18` documentation](/i18).

## Automatic Browser Language Matching

The website's default language will automatically match the browser's language.

After the user manually switches languages, their choice will be remembered.

Related code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobile Adaptation

The website provides a perfect reading experience on mobile devices.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end High Availability

`i18n.site` publishes site content to `npmjs.com` by default, leveraging multiple `CDN` services such as [jsdelivr.com](//jsdelivr.com) and [unpkg.com](//unpkg.com) to load content from `npm`.

In addition, mirror sources from mainland China have been added to ensure stable access for Chinese users, achieving **front-end high availability**.

The principle is: using a [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) to intercept requests, retry failed requests on other `CDN` services, and adaptively select the fastest responding source as the default loading source.

Related code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Single Page Application, Ultra-fast Loading

The website uses a single-page application architecture, ensuring smooth and ultra-fast page transitions without refresh.

## Optimized for Reading Experience

### Elegantly Designed Styles

> The beauty of simplicity is perfectly embodied in the web design of this site.
> It eschews unnecessary embellishments and presents content in its purest form.
> Like a beautiful poem, though brief, it touches the heart.

<p style="text-align:right">── I18N.SITE Author</p>

[➔ Click here to view a style overview](/i18n.site/md/styl).

### Multi-language `RSS` Subscription

![](//p.3ti.site/1725541085.avif)

The image above shows the multi-language `RSS` subscription for `i18n.site` using [inoreader.com](//inoreader.com).

### Online Font Loading, Chinese Support

The website defaults to using online fonts such as [Alimama Dual-axis Variable Fangyuan](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) and [MiSans](https://hyperos.mi.com/font/zh/download/) to unify the reading experience across different platforms.

To improve loading speed, fonts are sliced based on character frequency.

Related code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Auto-hiding Top Navigation

When scrolling down, the top navigation will automatically hide.

When scrolling up, the hidden navigation will reappear.

When the mouse is not moving, it will fade out.

The navigation bar also features a full-screen button in the upper right corner, enhancing the immersive document reading experience.

### Synchronized Highlighting of Current Chapter

When scrolling the content on the right, the left-side outline will highlight the current chapter being read.

## Cool Details

### Mouse Effects

Hover over the button on the right side of the top navigation to see cool effects.

### `404` Little Ghost

The `404` page features a cute floating ghost whose eyes follow the mouse. [➔ Click here to view](/404)

## Code Open Source

[The code is open source](/i18n.site/c/src). If you are interested in contributing to the development, please introduce yourself on the [mailing list](//groups.google.com/u/2/g/i18n-site).

There are many important but non-urgent small tasks. The development team will assign tasks based on your skills and improve the development documentation while assigning tasks.
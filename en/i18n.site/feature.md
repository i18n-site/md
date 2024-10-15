# Product Features

## `i18` Translations Integrated

The program incorporates `i18` translation functionality; for specific usage instructions, refer to the [➔ `i18` documentation](/i18).

## Automatically Matches Browser Language

The website's default language will automatically correspond to the browser's language settings.

After manually switching languages, the user's selection will be remembered for subsequent visits.

Related code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Responsive Mobile Design

The site offers a seamless reading experience on mobile devices.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-End High Availability

`i18n.site` defaults to publishing content to `npmjs.com`, leveraging [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com), and other `CDN` services to load content from `npm`.

Based on this, additional mirror sources in mainland China have been introduced to ensure stable access for Chinese users, achieving **front-end high availability**.

The underlying principle is: using [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) to intercept requests, retry failed requests on alternative `CDN` services, and adaptively select the fastest responding origin as the default loading source.

Related code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Single-Page Application with Rapid Loading

The website utilizes a single-page application architecture, allowing for instantaneous page transitions and swift loading.

## Optimized for Reading

### Carefully crafted design aesthetics

> The essence of simplicity is perfectly realized in the design of this site's web pages.
> It eschews unnecessary ornamentation, presenting content in its most pristine form.
> Like a concise poem, it moves the heart despite its brevity.

<p style="text-align:right">── I18N.SITE Author</p>

[➔ Click here to view a style overview](/i18n.site/md/styl).

### `Multilingual RSS Feeds`

![](//p.3ti.site/1725541085.avif)

The image above illustrates the subscription to the multilingual `RSS` feed of `i18n.site` using [inoreader.com](//inoreader.com).

### Online Font Loading with Chinese Support

The website defaults to using [Alimama's Dual-Axis Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) and [MiSans](https://hyperos.mi.com/font/zh/download/) online fonts to provide a consistent reading experience across different platforms.

Moreover, to enhance loading speed, the fonts are segmented based on word frequency statistics.

Related code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatic Hide of Top Navigation

Scrolling down will automatically hide the top navigation bar.

Scrolling up will reveal the hidden navigation bar once again.

The navigation will fade out when the mouse remains stationary.

The top navigation bar also features a full-screen button for an immersive reading experience.

### Synchronized Highlighting of Current Chapter in Outline

As the content on the right is scrolled, the outline on the left will highlight the current chapter being read.

## Cool Details

### Mouse Effects

When hovering over the button on the right side of the top navigation, cool effects are displayed.

### Little Ghost on `404` Page

The `404` page features a charming floating ghost whose eyes follow the mouse movement; [➔ Click here to see](/404)

## Open-source code

[The code is open source](/i18n.site/src). If you are interested in contributing to the development, we welcome your introduction on the [mailing list](//groups.google.com/u/2/g/i18n-site).

There are numerous important but not urgent feature requests. The development team will assign tasks based on your technical expertise and simultaneously refine the development documentation while distributing these requests.
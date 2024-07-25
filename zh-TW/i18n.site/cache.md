# 前端緩存

## 前端緩存的更新延時

根據 [MDN](https://developer.mozilla.org/docs/Web/API/Service_Worker_API)，`service worker`的更新頻率最大為 24 小時。

i18n.site 在`service worker`緩存了CDN域名。所以如果修改了配置中的`cdn`，老用戶需要等待24小時才能看到更新。

## 本地調試如何清理前端緩存

TODO chrome

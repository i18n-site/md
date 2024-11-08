# 產品特色

## 集成了`i18`翻譯

程序內置了`i18`翻譯，具體用法見[➔`i18`文檔](/i18)。

## 自動匹配瀏覽器語言

網站默認語言將自動匹配瀏覽器的語言。

用戶手動切換語言后，將記住用戶的選擇。

相關代碼: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)。

## 移動端適配

在手機端同樣有完美的閱讀體驗。

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> 前端高可用

`i18n.site`默認會发布站點內容到`npmjs.com`，借助 [jsdelivr.com](//jsdelivr.com) 、[unpkg.com](//unpkg.com) 等多個`CDN`加載在`npm`上的內容。

在此基礎上，添加了中國大陸的鏡像源，讓中國用戶也能穩定訪問，實現了**前端高可用**。

原理是：借助 [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) 攔截請求，請求失敗在其他`CDN`上重試，并自適應地啟用響應最快的源站作為默認加載源。

相關代碼: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)。

## 單頁應用，極速加載

網站采用了單頁應用的架構，切換頁面時無刷新，極速加載。

## 為閱讀體驗而優化

### 精心設計的樣式

> 簡約之美，在本站網頁設計中得到了完美的詮釋。
> 它摒棄了多余的裝飾，以最純粹的形式呈現內容。
> 就像一首優美的詩，雖短小，卻觸動人心。

<p style="text-align:right">── I18N.SITE 作者</p>

[➔ 點此查看樣式一覽](/i18n.site/md/styl)。

### 多語言`RSS`訂閱

![](//p.3ti.site/1725541085.avif)

上圖為使用 [inoreader.com](//inoreader.com) 訂閱`i18n.site`的多語言`RSS`。

### 加載在线字體，支持中文

網頁默認啟用了 [阿里媽媽雙軸可變方圓體](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR)，[MiSans](https://hyperos.mi.com/font/zh/download/) 等在线字體，統一不同平台用戶的閱讀體驗。

同時，為了提高加載速度，按字頻統計對字體進行了切片。

相關代碼: [github.com/i18n-site/font](https://github.com/i18n-site/font)。

### 頂部導航自動隱藏

向下滾動，頂部導航會自動隱藏。

向上滾動，隱藏的導航會再次顯示。

当鼠標不移動時，會淡出。

導航欄右上角更有全屏按鈕，打造沉浸式的文檔閱讀體驗。

### 大綱同步高亮当前章節

当年滾動右側內容時，左側大綱會同步地高亮当前閱讀章節。

## 酷炫細節

### 鼠標特效

把鼠標懸浮到頂部導航右側的按鈕上，可以看到酷炫特效。

### `404`的小幽靈

`404`頁面有一只可愛懸浮小幽靈，眼睛會隨着鼠標移動，[➔ 點此查看](/404)，

## 代碼開源

[代碼開源](/i18n.site/c/src)，如有興趣參與開发，歡迎在 [郵件列表](//groups.google.com/u/2/g/i18n-site) 自我介紹。

有不少重要不緊急的小需求，開发團隊將根據您所擅長的技術來分派練手任務，并分派需求的同時完善開发文檔。
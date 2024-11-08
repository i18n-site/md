# 定制導航

我們以演示站點 [i18n-demo.github.io](//i18n-demo.github.io) 為例，講解如何定制導航。

![](https://p.3ti.site/1731036697.avif)

上圖數字編號的區域對應的文件如下 :

1. 左側 [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. 右側 [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org)是一種生成`HTML`的模板語言。

[➔ 點此學習 pug 的語法](https://pugjs.org)

文件中用 `${I18N.sponsor}` 這種格式字符串來實現國際化，其內容會被替換為源語言目錄下 [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) 中對應的文本。

**不要在`pug`中寫`css`和`js`**，否則會有錯誤。

樣式寫到`css`中去，交互通過創建網頁組件來實現。

這里，導航欄的樣式對應的文件是: [.i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)。
# 安裝 & 預覽

## 安裝

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## 配置令牌

`i18n.site`內嵌了`i18`翻譯工具，請先[點此參考`i18`的文檔配置訪問令牌](/i18/use)。

## 演示項目

讓我們從演示項目開始，學習如何使用`i18n.site`。

我們先克隆演示倉庫，運行命令如下：

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

中國大陸用戶可以：

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site`代碼庫克隆的目錄名請務必為`md`，方便配合`docker`實現本地預覽。

### 翻譯

首先，進入`md`目錄運行`i18n.site`，會翻譯`en`到`zh`。

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

運行后，會生成譯文和緩存文件，請記得在`md`目錄下`git add . `，把它們添加到版本庫。

### 本地預覽

安裝并啟動`docker`（`MAC`用戶建議用 [orbstack](https://orbstack.dev) 作為`docker`的運行時 ）。

然后，進入`docker`目錄運行`./up.sh`，然后訪問 [https://127.0.0.1](https://127.0.0.1) 即可在本地預覽。

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
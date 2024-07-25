# 安装 & 部署

## 配置令牌

`i18n.site`内嵌了`i18`翻译工具，请先[点此参考`i18`的文档配置访问令牌](/i18/use)。

## 安装

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## 演示项目

让我们从演示项目开始，学习如何使用`i18n.site`。

我们先克隆演示仓库，运行命令如下：

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

中国大陆用户可以：

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site`代码库克隆的目录名请务必为`md`，方便配合`docker`实现本地预览。

### 翻译

首先，进入`md`目录运行`i18n.site`，会翻译`en`到`zh`。

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

运行后，会生成译文和缓存文件，请记得在`md`目录下`git add . `，把它们添加到版本库。

### 本地预览

安装并启动`docker`（`MAC`用户建议用 [orbstack](https://orbstack.dev) 作为`docker`的运行时 ）。

然后，进入`docker`目录运行`./up.sh`，然后访问 [https://127.0.0.1](https://127.0.0.1) 即可在本地预览。

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### 发布内容

`i18n.site`采用了[单页应用](https://developer.mozilla.org/docs/Glossary/SPA)的架构，网站入口页面 和 网站内容 分别独立部署。

运行上面翻译后，会在`md/out/dev`目录下生成`htm`和`v`目录。

这里，`dev`表示是基于`.i18n/htm/dev.yml`配置文件来构建。

`dev`目录下:

`htm`目录下是网站入口页。

`v`目录下是带版本号网站内容。

本地预览不用管版本号，会把文件都复制到`out/dev/v/0.1.0`目录下。

正式发布，会复制有改动的文件到新的版本号目录下。

#### 用 -c 指定配置文件

不同的配置文件，会创建对应的目录到`out`目录下。

比如，`.i18n/htm/ol.yml`会创建`out/ol`目录。

`dev.yml`和`ol.yml`是默认自带的配置。

`dev`是`development`的缩写，表示开发环境，用于本地预览，也是默认的配置文件。
`ol`是`online`的缩写，表示线上环境，用于正式发布，也是使用命令行参数`-n`发布到`npm`时的默认配置文件。

您也可以创建其他配置文件，命令行中使用`--htm_conf`可以指定使用配置文件名：

比如：
```
i18n.site --htm_conf yourConfig --save
```

这里`--save`表示更新发布版本号。

#### <a rel=id href="#npm" id="npm"></a> 发布内容到 npmjs.com

发布内容到 [npmjs.com](//npmjs.com) 是推荐的默认方案 ( 参见[前端高可用](/i18n.site/feature#ha) )。

##### npm login & 发布

安装`nodejs`，使用`npm login`登录。

编辑`md/.i18n/htm/ol.yml`，修改`v: //unpkg.com/i18n.site`中的`i18n.site`为你自己的`npm`包名。

使用 [npmjs.com](//npmjs.com) 上未被占用的包名即可，用网站域名作为包名是个不错的选择。

基于`npm`包来发布时，`v:`值的前缀请**务必使用`//unpkg.com/`**，`i18n.site`对此前缀路径下的`/.v`的缓存时间做了特别的优化，以实现及时看到新的发布。

在`md`目录下运行`i18n.site --npm`或`i18n.site -n`即可翻译并发布。

如您使用持续集成环境来发布，无需安装`nodejs`，复制已登录并有发布权限`~/.npmrc`到该环境下即可。

如果修改了`ol.yml`中`v:`的包名，请**务必先删除`.i18n/v/ol`**，然后再发布。

##### npm 发布的代理服务器

中国大陆用户会如果遇到网络问题导致无法发布`npm`包，可以设置环境变量`https_proxy`来配置代理服务器。

假设你的代理服务器端口是`7890`，可以这么写：

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### 自托管内容

若想自托管内容，首先，编辑`md/.i18n/htm/ol.yml`，修改`v: //unpkg.com/i18n.site`为您的网址前缀，比如`v: //i18n-v.xxx.com`。

进入`md`目录运行

```
i18n.site --htm_conf ol --save
```

或者简写

```
i18n.site -c ol -s
```

然后，配置`md/out/ol/v`目录下的内容到`v:`中设置的网址前缀路径。

最后，**配置`/.v`结尾的路径缓存时间为`1s`**，否则无法即时访问到新发布的内容。

其他路径的缓存时间可设置为一年或更多，以减少不必要的请求。

##### 托管内容到 s3

自托管内容，除了使用自己的服务器，另一个常见的选择是用`S3`+`CDN`。

可以使用 [rclone](https://rclone.org) 登录`S3`服务器，然后参考并修改下面的脚本，每次发布只复制增量的改动到`S3`。

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

记得配置`CDN`，让`/.v`结尾的路径缓存时间为`1s`，否则无法即时访问到新发布的内容。

### 发布网站

网站可以部署到任何地方，[github page](https://pages.github.com)、[cloudflare page](https://pages.cloudflare.com) 都是不错的选择。

因为网站采用了[单页应用](https://developer.mozilla.org/docs/Glossary/SPA)的架构，所以记得重写不包含`. `的网址路径到`index.html`。

网站入口页只需部署一次，后续内容更新，也无需重新部署网页入口页。

#### 在 github page 上部署

首先 [点此在 github 创建组织](https://github.com/account/organizations/new?plan=free)，下文组织名以`i18n-demo`为例。

然后在此组织下面创建仓库`i18n-demo.github.io`（请替换`i18n-demo`为您创建的组织名）：

![](https://p.3ti.site/1721098657.avif)

在前文发布内容时，已经生成`out/ol/htm`，这里请进入此目录，然后运行:

```
ln -s index.html 404.html
```


因为`github page`不支持网址路径重写，所以上面用`404.html`作为代替。

接着在`htm`目录下运行下面的命令（记得替换`i18n-demo/i18n-demo.github.io.git`为您自己的仓库地址）:

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

推送代码后，等`github page`的部署运行成功（如下图），即可访问。

<img src="//p.3ti.site/1721116586.avif" width="350px">

演示页面请参见:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### 在 cloudflare page 上部署

[cloudflare page](//pages.cloudflare.com)相比`github page`，提供了路径重写，以及对中国大陆更友好的可访问性，推荐使用。

`cloudflare page`的部署，通常会基于上面`github page`的部署。

创建项目，绑定上面的`i18n-demo.github.io`仓库。

流程如下图所示:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

请点击`Add Account`，授权访问`i18n-demo`组织的权限。

如绑定过其他组织的仓库，可能需要点两次`Add Account`来授权两次，才会显示新的组织。

![](https://p.3ti.site/1721118306.avif)

接下来选择`i18n-demo.github.io`仓库，然后点击`Begin setup`，后续步骤都用默认值即可。

![](https://p.3ti.site/1721118490.avif)

首次绑定，需要等待几分钟才可以访问。

部署之后，可以绑定自定义域名。

![](https://p.3ti.site/1721119459.avif)

绑定自定义域名后，请到域名下面配置单页应用的路径重写，如下图:

![](https://p.3ti.site/1721119320.avif)

上图的规则如下，请替换下面第一行的`i18n.site`为您绑定的域名。

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

此外，请配置缓存规则，如下图，配置缓存时长为一个月。

![](https://p.3ti.site/1721125111.avif)

上图中第二步的域名匹配请改为您绑定的域名。

#### 对中国大陆的网站部署优化

想在中国大陆的网络环境下获得更好可访问性能，请先[备案域名](//beian.aliyun.com)。

然后，利用中国大陆云厂商的对象存储+`CDN`部署`out/ol/htm`下面的内容即可。

可以用边缘计算重写路径来适配单页应用，比如[百度智能云`CDN`](//cloud.baidu.com/product/cdn.html)可这样配置：

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
![](https://p.3ti.site/1721121273.avif)

因为`MX`记录和`CNAME`记录不能共存，若想同时收取域名邮件，还需要配合[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)脚本，把`CNAME`拉平为`A`记录。

此外，因为中国大陆的云厂商海外流量的费用较贵，想优化成本，可以配合[华为云DNS的免费地域解析](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html)，以及 [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 的自定义域名（如下图），实现流量分流 ── 中国大陆的流量走百度云`CDN`，国际流量走cloudflare。

![](https://p.3ti.site/1721119788.avif)

这些部署优化方案较复杂，将在未来撰写单独的章节介绍。

#### 泛域名的重定向

如果使用`i18n.site`生成网站作为您的主网站，通常还需配置泛域名重定向，也就是把`*.xxx.com`（包含了`www.xxx.com`）的访问重定向到`xxx.com`。

此需求可以借助阿里云`CDN`的`EdgeScript`来实现 ( [英文文档](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [中文文档](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

在[阿里云的CDN](https://cdn.console.aliyun.com/domain/list)添加域名，将`*.xxx.com`域名指向阿里云`CDN`的`CNAME`。

![](https://p.3ti.site/1721122000.avif)

比如上图的`*.i18n.site`的泛域名重定向配置如下：

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### 用 nginx 部署

请在nginx的`server`段落中添加类似如下的配置，其中`/root/i18n/md/out/ol/htm`请改为你自己项目`out/ol/htm`的路径：

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### 目录结构

#### public

网站的静态文件，比如`favicon.ico`,`robots.txt`等等。

这里的图标文件可以用 [realfavicongenerator.net](https://realfavicongenerator.net) 生成。

#### .i18n

`.i18n`目录下是`i18n.site`的配置文件、翻译缓存等，详见下一章[『配置』](/i18n.site/conf)。

#### en

源语言目录，对应`.i18n/conf.yml`配置文件中`fromTo`的`en`

```yaml
i18n:
  fromTo:
    en: zh
```

翻译的配置请参考[i18](/i18/use)。


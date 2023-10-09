# I18N.SITE · Wikang Walang Hangganan<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

Ang I18N.SITE, isang multi-language static na site generator, ay maaaring awtomatikong isalin ang Markdown sa [higit sa isang daang iba&#39;t ibang wika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Maaaring gustong magtanong ng ilang tao, ngayong may mga built-in na function sa pagsasalin ang mga browser, hindi na ba kailangang i-internationalize ang website?

Gusto kong sabihin na **sa pamamagitan lamang ng pag-internationalize ng buong site maaari naming suportahan ang multi-lingual in-site na full-text na paghahanap at search engine optimization** .

## Pagtuturo

## Panimula Ng Function

### Panatilihin Ang Markdown Format

### Baguhin Ang Pagsasalin

Pagkatapos baguhin ang pagsasalin, kailangan mong muling patakbuhin `./i18n.sh` upang i-update ang cache.

### Mga Tala Sa Pagsasalin

Kailangang ipahiwatig ng mga komento sa pagsasalin ang wika pagkatapos ng \```, gaya ng ` ```rust` .

Kasalukuyang sumusuporta sa pagsasalin ng komento para sa kalawang, c, cpp, java, js, kape, python, at bash.

I-edit [ang tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) upang magdagdag ng suporta sa pagsasalin para sa mga komento sa higit pang mga wika.

### I-Configure Ang Proxy

Ang pagtatakda ng mga sumusunod na variable ng kapaligiran ay nagbibigay-daan sa mga tawag sa Google Translate API na dumaan sa proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Alisan Ng Laman Ang Cache

```bash
rm -rf .i18n/.cache
```

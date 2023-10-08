# I18N.SITE · Wikang Walang Hangganan<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, isang static na site generator na sumusuporta sa awtomatikong pagsasalin sa [100 iba&#39;t ibang wika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

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
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Alisan Ng Laman Ang Cache

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```

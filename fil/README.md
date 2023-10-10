<h1 style="justify-content:space-between">3Ti.Site · Isipin ang Borderless<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Ang 3Ti.Site, isang static na site generator, ay maaaring awtomatikong isalin ang Markdown sa [higit sa isang daang iba&#39;t ibang wika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Maaaring magtanong ang ilang tao, dahil ang lahat ng mga browser ay may mga function ng pagsasalin, hindi ba kailangang i-internationalize ang website?

Gusto kong sabihin na **ang mga website lamang na bumubuo ng mga static na pagsasalin ang makakasuporta sa multilinggwal na in-site na full-text na paghahanap at pag-optimize ng search engine** .

## Panimula

Bibliya · Genesis :

> Noong sinaunang panahon, noong iisa ang mga wika, ang sangkatauhan ay nagtayo ng isang tore na umaabot hanggang sa langit, isang portal patungo sa nasasakupan ng Diyos, na naghahayag ng kapangyarihan ng sangkatauhan.
>
> Ipinahayag ng Diyos, "Ang mga tao ay nagkakaisa bilang isang lipi, na may iisang wika, at ang tore na ito ay pasimula lamang.
>
> Kaya, bumaba ang Diyos, pinangalat ang mga tao sa iba't ibang sulok, gumamit ng iba't ibang wika.
>
> Mula noon, naging mahirap ang komunikasyon ng tao, walang katapusan ang mga pagtatalo, at wala nang tore na umabot sa langit.

Ang nobelang science fiction na &quot;Three-Body&quot; (pagbigkas ng Tsino: `3Ti` ) ay gawa-gawa ang isang dayuhan na sibilisasyon na nakikipag-usap sa pamamagitan ng mga electromagnetic wave, walang mga hadlang sa wika, at maunlad sa teknolohiya.

Umaasa akong lumikha ng isang kasangkapan na magbibigay-daan sa mga tao sa mundo na maging tulad ng tatlong-katawan na mga tao, makipag-usap nang hindi nakagapos sa wika, at muling magkaisa ang buong sangkatauhan.

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

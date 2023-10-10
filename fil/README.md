<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Ang 3Ti.Site, isang multi-language na static na site generator, ay maaaring awtomatikong isalin ang Markdown sa [higit sa isang daang iba't ibang wika](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Maaaring gustong magtanong ng ilang tao, ngayong may mga built-in na function sa pagsasalin ang mga browser, hindi na ba kailangang i-internationalize ang website?

Gusto kong sabihin na **sa pamamagitan lamang ng pag-internationalize ng buong site maaari naming suportahan ang multi-lingual in-site na full-text na paghahanap at search engine optimization** .

## Pagkakasunod-Sunod

"Bibliya·Genesis":

> Ang mga sinaunang tao ay hindi nagtatangi sa pagitan ng mga wika. Nagtayo sila ng mga tore na umaabot sa langit upang maabot ang pintuan ng Diyos upang itaguyod ang prestihiyo ng sangkatauhan.
>
> Sinabi ng Diyos na ang mga tao ay sariling tribo, na may parehong kultura at uri. Ang pagtatayo ng tore ay panimula lamang. Ngayon ay magagawa mo na ang anumang gusto mo, at wala kang dapat ikatakot.
>
> Pagkatapos ay dumating ang Diyos at ikinalat ang mga tao sa iba't ibang lugar, na hindi nagkakaintindihan.
>
> Mula noon, ang sangkatauhan ay nagpupumilit na makipag-usap, ang mga salungatan ay lumitaw nang walang katapusan, at ang mundo ay wala nang nakitang isang tore na umabot sa kalangitan.

Ang nobelang science fiction na &quot;Three-Body&quot; (pagbigkas ng Tsino: `3Ti` ) ay gawa-gawa ang isang dayuhan na sibilisasyon na nakikipag-usap sa pamamagitan ng mga electromagnetic wave, walang mga hadlang sa wika, at maunlad sa teknolohiya.

Umaasa ako na sa tulong ng kasangkapang ito, ang mga tao sa daigdig ay magiging tulad ng mga taong may tatlong katawan, ang komunikasyon ay hindi mapipigilan ng wika, at ang buong sangkatauhan ay muling magkakaisa.

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

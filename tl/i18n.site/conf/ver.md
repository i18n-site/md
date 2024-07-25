# Bersyon Ng Proyekto

Kunin ang demo project bilang isang halimbawa:

`en/demo2/v` ay ang kasalukuyang numero ng bersyon ng proyekto, na ipapakita sa kanan ng pangalan ng proyekto sa balangkas ng sidebar.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Narito `en/` ay ang code ng wika na naaayon sa `.i18n/conf.yml` na pinagmumulan ng wika.

Kung ang iyong pinagmulang wika ay hindi Ingles, dapat ilagay ang `v` 

Ang kakayahang mag-browse ng mga makasaysayang bersyon ng mga dokumento ay nasa ilalim ng pag-unlad.

Inirerekomenda na baguhin lamang ang numero ng bersyon ng dokumento kapag naglalabas ng mga pangunahing update (tulad ng `v1` , `v2` ) upang maiwasan ang pagkalat ng mga pahinang na-index ng mga search engine dahil sa napakaraming numero ng bersyon.

## Gumamit Ng Mga Walang Laman Na `v` File Upang Hatiin Ang Mga Index Ng File Para Sa Iba't Ibang Mga Proyekto

Sa proyekto ng demo, bilang karagdagan sa `en/demo2/v` , makikita mo rin na ang mga nilalaman ng `en/blog` at `en/demo1` na mga direktoryo ay walang laman `v` file.

Ang Empty `v` ay hindi ipapakita sa sidebar outline, ngunit hangga't ang `v` file ay umiiral, isang independiyenteng index ay bubuo para sa mga file sa direktoryo at mga subdirectory.

Sa pamamagitan ng paghahati sa mga index ng iba't ibang mga proyekto, maiiwasan mo ang mabagal na pag-access na dulot ng paglo-load ng index ng lahat ng mga file sa buong site nang sabay-sabay.

Halimbawa, sa demo `blog` ang kaukulang index file ay [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :


# Bersyon Ng Proyekto

Kunin ang demo project bilang isang halimbawa:

`en/demo2/v` ay ang kasalukuyang numero ng bersyon ng proyekto, na ipapakita sa kanan ng pangalan ng proyekto sa balangkas ng sidebar.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Narito ang `en/` ay ang language code na naaayon sa translation source language na na-configure ng `.i18n/conf.yml` .

Kung ang iyong pinagmulang wika ay hindi Ingles, ang `v` file ay dapat na ilagay sa direktoryo ng proyekto ng iyong pinagmulang wika.

Ang kakayahang mag-browse ng mga makasaysayang bersyon ng mga dokumento ay nasa ilalim ng pag-unlad.

Inirerekomenda na baguhin lamang ang numero ng bersyon ng dokumento kapag inilabas ang mga pangunahing update (tulad ng `v1` , `v2` ) upang maiwasan ang napakaraming numero ng bersyon na nagdudulot ng kalat sa mga pahinang na-index ng mga search engine.

## Gumamit Ng Walang Laman `v` File Para Hatiin Ang Mga File Index Ng Iba't Ibang Proyekto

Sa demo project, bilang karagdagan sa `en/demo2/v` , makikita mo rin na mayroong walang laman na `v` file sa `en/blog` at `en/demo1` na mga direktoryo.

Ang isang walang laman `v` ay hindi ipapakita sa sidebar outline, ngunit hangga't mayroong isang `v` file, isang independiyenteng index ay bubuo para sa mga file sa direktoryo at mga subdirectory.

Sa pamamagitan ng paghahati sa mga index ng iba't ibang mga proyekto, maiiwasan mo ang mabagal na pag-access na dulot ng paglo-load ng index ng lahat ng mga file sa buong site nang sabay-sabay.

Halimbawa, ang index file na katumbas ng `blog` sa demo project ay [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
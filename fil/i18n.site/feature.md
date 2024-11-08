# Mga Tampok Ng Produkto

## `i18` Pagsasalin Na Isinama

Ang programa ay may built-in na `i18` na pagsasalin, mangyaring tingnan ang [➔ `i18` dokumento](/i18) para sa partikular na paggamit.

## Awtomatikong Tumugma Sa Wika Ng Browser

Ang default na wika ng website ay awtomatikong tutugma sa wika ng browser.

Matapos manu-manong magpalit ng wika ang user, maaalala ang pinili ng user.

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) na code :

## Pagbagay Sa Mobile Terminal

Mayroon ding perpektong karanasan sa pagbabasa sa mobile phone.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Mataas na kakayahang magamit sa harap

`i18n.site` ay i-publish ang nilalaman ng site sa `npmjs.com` bilang default, sa tulong ng [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) at iba pang `CDN` nilalaman na na-load sa `npm` .

Sa batayan na ito, idinagdag ang mga mirror source mula sa mainland China upang payagan ang mga Chinese na user na magkaroon ng stable na access at magkaroon **ng mataas na front-end availability** .

Ang prinsipyo ay: harangin ang mga kahilingan gamit ang [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , subukang muli ang mga nabigong kahilingan sa iba pang `CDN` , at adaptive na paganahin ang pinakamabilis na tumutugon na pinanggalingang site bilang default na pinagmulan ng pag-load.

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) na code :

## Isang Application Na Isang Pahina, Napakabilis Na Naglo-Load

Ang website ay gumagamit ng isang solong-pahinang arkitektura ng application, na walang pag-refresh kapag lumilipat ng mga pahina at napakabilis na naglo-load.

## Na-Optimize Para Sa Karanasan Sa Pagbabasa

### Mahusay Na Dinisenyo Na Istilo

> Ang kagandahan ng pagiging simple ay perpektong binibigyang kahulugan sa disenyo ng web ng website na ito.
> Iniiwan nito ang labis na dekorasyon at nagpapakita ng nilalaman sa pinakadalisay nitong anyo.
> Tulad ng isang magandang tula, kahit na ito ay maikli, ito ay umaantig sa puso ng mga tao.

<p style="text-align:right">── I18N.SITE</p>

[➔ Mag-click dito upang makita ang isang listahan ng mga istilo](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Ipinapakita ng larawan sa itaas `RSS` `i18n.site` ang [inoreader.com](//inoreader.com)

### Mag-Load Ng Mga Online Na Font, Suportahan Ang Chinese

Bilang default [, ang Alimama dual-axis variable rectangular](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) font, [MiSans](https://hyperos.mi.com/font/zh/download/) at iba pang mga online na font ay pinagana sa webpage upang mapag-isa ang karanasan sa pagbabasa ng mga user sa iba't ibang platform.

Kasabay nito, upang mapabuti ang bilis ng paglo-load, ang mga font ay hinihiwa ayon sa mga istatistika ng dalas ng salita.

[github.com/i18n-site/font](https://github.com/i18n-site/font) na code :

### Awtomatikong Nakatago Ang Nangungunang Nabigasyon

Mag-scroll pababa at awtomatikong magtatago ang tuktok na nabigasyon.

Mag-scroll pataas at lilitaw muli ang nakatagong nabigasyon.

Ito ay maglalaho kapag ang mouse ay hindi gumagalaw.

Mayroong full-screen na button sa kanang sulok sa itaas ng navigation bar upang lumikha ng nakaka-engganyong karanasan sa pagbabasa ng dokumento.

### Naka-Synchronize Na Pag-Highlight Ng Outline Ng Kasalukuyang Kabanata

Kapag nag-i-scroll sa nilalaman sa kanan, ang balangkas sa kaliwa ay sabay-sabay na i-highlight ang kasalukuyang binabasa na kabanata.

## Cool Na Mga Detalye

### Mga Epekto Ng Mouse

I-hover ang iyong mouse sa button sa kanang bahagi ng tuktok na nabigasyon upang makita ang mga cool na special effect.

### `404` Munting Multo

Mayroong cute na maliit na lumulutang na multo sa `404` page, na ang mga mata ay gumagalaw gamit ang mouse, [➔ Mag-click dito upang tingnan](/404) ,

## Code Open Source

[Ang code ay open source](/i18n.site/c/src) . Kung interesado kang lumahok sa development, mangyaring ipakilala ang iyong sarili sa [mailing list](//groups.google.com/u/2/g/i18n-site) .

Maraming maliliit na kinakailangan na mahalaga ngunit hindi apurahan Ang development team ay magtatalaga ng mga hands-on na gawain batay sa mga teknolohiyang mahusay ka, at pagbutihin ang mga dokumento sa pag-develop habang nagtatalaga ng mga kinakailangan.
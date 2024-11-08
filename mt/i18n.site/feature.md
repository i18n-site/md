# Karatteristiċi Tal-Prodott

## `i18` Traduzzjoni Integrata

Il-programm fih `i18` traduzzjoni, jekk jogħġbok ara [➔ dokument `i18`](/i18) għal użu speċifiku.

## Qabbel Awtomatikament Bil-Lingwa Tal-Browser

Il-lingwa default tal-websajt awtomatikament taqbel mal-lingwa tal-browser.

Wara li l-utent jaqleb il-lingwi manwalment, l-għażla tal-utent tibqa' mfakkar.

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) relatat :

## Adattament Tat-Terminal Mobbli

Hemm ukoll esperjenza ta 'qari perfetta fuq il-mowbajl.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Disponibbiltà għolja ta 'quddiem

`i18n.site` se jippubblika l-kontenut tas-sit għal `npmjs.com` b'mod awtomatiku, bl-għajnuna ta [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) u `CDN` kontenut ieħor mgħobbi fuq `npm` .

Fuq din il-bażi, ġew miżjuda sorsi tal-mera miċ-Ċina kontinentali biex jippermettu lill-utenti Ċiniżi li jkollhom aċċess stabbli u jiksbu **disponibbiltà għolja ta 'quddiem** .

Il-prinċipju huwa: interċetta talbiet [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , erġa' pprova talbiet falluti fuq `CDN` oħra , u jippermetti b'mod adattiv is-sit tal-oriġini li jwieġeb malajr bħala s-sors tat-tagħbija default.

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) relatat :

## Applikazzjoni Ta 'paġna Waħda, Tagħbija Estremament Veloċi

Il-websajt jadotta arkitettura ta' applikazzjoni ta' paġna waħda, mingħajr aġġornament meta taqleb il-paġni u tagħbija estremament veloċi.

## Ottimizzat Għall-Esperjenza Tal-Qari

### Stil Iddisinjat Tajjeb

> Is-sbuħija tas-sempliċità hija interpretata perfettament fid-disinn tal-web ta 'din il-websajt.
> Tabbanduna dekorazzjoni superfluwa u tippreżenta kontenut fil-forma l-aktar pura tagħha.
> Bħal poeżija sabiħa, għalkemm hija qasira, tmiss qalb in-nies.

<p style="text-align:right">── I18N.SITE</p>

[➔ Ikklikkja hawn biex tara lista ta' stili](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

L-istampa ta' hawn fuq turi multi-lingwa `RSS` bl-użu ta [inoreader.com](//inoreader.com) abbonament `i18n.site` .

### Tagħbija Fonts Online, Appoġġ Ċiniż

B'mod awtomatiku [, fonts rettangolari varjabbli ta' assi doppju Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) u fonts oħra onlajn huma attivati fuq il-paġna web biex jgħaqqdu l-esperjenza tal-qari tal-utenti fuq pjattaformi differenti.

Fl-istess ħin, sabiex titjieb il-veloċità tat-tagħbija, il-fonts jitqattgħu skont l-istatistika tal-frekwenza tal-kliem.

[github.com/i18n-site/font](https://github.com/i18n-site/font) relatat :

### Top Navigazzjoni Awtomatikament Moħbija

Skrollja 'l isfel u n-navigazzjoni ta' fuq tinħeba awtomatikament.

Skrollja 'l fuq u n-navigazzjoni moħbija terġa' tidher.

Se jisparixxi meta l-maws ma jkunx miexi.

Hemm buttuna ta 'skrin sħiħ fir-rokna ta' fuq tal-lemin tal-bar tan-navigazzjoni biex toħloq esperjenza ta 'qari ta' dokumenti immersiva.

### L-Enfasi Sinkronizzata Fil-Qosor Tal-Kapitolu Attwali

Meta tiskrollja l-kontenut fuq il-lemin, il-kontorn fuq ix-xellug simultanjament jenfasizza l-kapitolu li qed qari bħalissa.

## Dettalji Jibred

### Effetti Tal-Ġurdien

Passa l-maws fuq il-buttuna fuq in-naħa tal-lemin tan-navigazzjoni ta 'fuq biex tara effetti speċjali friski.

### `404` Fantat Żgħir

Hemm fantat żgħir ħelu f'wiċċ l-ilma fuq il-paġna `404` , li għajnejh se jimxu bil-maws, [➔ Ikklikkja hawn biex tara](/404) ,

## Kodiċi Sors Miftuħ

[Il-kodiċi huwa open source](/i18n.site/c/src) Jekk inti interessat li tipparteċipa fl-iżvilupp, jekk jogħġbok daħħal lilek innifsek fil [-lista tal-posta](//groups.google.com/u/2/g/i18n-site) .

Hemm ħafna rekwiżiti żgħar li huma importanti iżda mhux urġenti It-tim tal-iżvilupp se jassenja kompiti prattiċi bbażati fuq it-teknoloġiji li int tajjeb fihom, u jtejjeb id-dokumenti tal-iżvilupp filwaqt li jassenja r-rekwiżiti.
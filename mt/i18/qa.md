# Faq

## Iż-Żieda Jew It-Tħassir Ta' Linji Tat-Traduzzjoni, Li Tirriżulta F'konfużjoni Fit-Traduzzjoni

> [!WARN]
> Ftakar, **in-numru ta' linji fit-traduzzjoni għandu jikkorrispondi mal-linji fit-test oriġinali** .
> Jiġifieri, meta taġġusta t-traduzzjoni manwalment, **iżżidx jew tħassarx linji tat-traduzzjoni** , inkella r-relazzjoni tal-mapping bejn it-traduzzjoni u t-test oriġinali tkun diżordinata.

Jekk aċċidentalment iżżid jew tħassar linja, li tikkawża konfużjoni, jekk jogħġbok restawra t-traduzzjoni għall-verżjoni qabel il-modifika, erġa' ħaddem `i18` traduzzjoni, u erġa' daħħal fil-cache l-immappjar korrett.

L-immappjar bejn it-traduzzjoni u t-test oriġinali huwa marbut mat-token Oħloq token ġdid fi [i18n.site/token](//i18n.site/token) ħassar `.i18h/hash` , u erġa' ittraduċi biex tneħħi l-immappjar konfuż (iżda dan jikkawża li jintilfu l-aġġustamenti manwali kollha tat-traduzzjoni).

## `YAML` : Kif Tevita Li L-Link `HTML` Tiġi Kkonvertita Għal `Markdown`

Valur ta' `YAML` huwa ttrattat bħala `MarkDown` għat-traduzzjoni.

Xi drabi l-konverżjoni minn `HTML` → `MarkDown` mhix dak li rridu, bħal `<a href="/">Home</a>` li jiġi kkonvertit għal `[Home](/)` .

Iż-żieda ta 'kwalunkwe attribut minbarra `href` mat-tikketta `a` , bħal `<a class="A" href="/">Home</a>` , tista' tevita din il-konverżjoni.

## `./i18n/hash` Fajl Konflitti Hawn Taħt

Ħassar il-fajls konfliġġenti u erġa' wettaq `i18` traduzzjoni.
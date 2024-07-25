# Problema Komuni

## Iż-Żieda Jew It-Tħassir Ta' Linji Tat-Traduzzjoni, Li Tirriżulta F'konfużjoni Fit-Traduzzjoni

Ftakar, **in-numru ta' linji fit-traduzzjoni għandu jikkorrispondi mal-linji fit-test oriġinali** .

Jiġifieri, meta taġġusta t-traduzzjoni manwalment, **iżżidx jew tħassarx linji tat-traduzzjoni** , inkella r-relazzjoni tal-mapping bejn it-traduzzjoni u t-test oriġinali tkun diżordinata.

Jekk aċċidentalment iżżid jew tħassar linja, li tikkawża konfużjoni, jekk jogħġbok restawra t-traduzzjoni għall-verżjoni qabel il-modifika, `i18` ' ħaddem it-traduzzjoni , u erġa' daħħal fil-cache l-immappjar korrett.

L-immappjar bejn it-traduzzjoni u t-test oriġinali huwa marbut mat-token Oħloq token ġdid f' [i18n.site/token](//i18n.site/token) ħassar `.i18h/hash` u erġa' ttraduċi biex tneħħi l-immappjar konfuż (iżda dan jikkawża li jintilfu l-aġġustamenti manwali kollha tat-traduzzjoni).

## `YAML` : Tipprevjeni `HTML` Tal-Link Jiġi Kkonvertit Għal `Markdown`

Il-valur ta' `YAML` se jiġi ttrattat bħala `MarkDown` għat-traduzzjoni.

Xi drabi l-konverżjoni ta’ `HTML` → `MarkDown` mhix dak li rridu, bħal `<a href="/">Home</a>` li jiġu kkonvertiti għal `[Home](/)` .

Żid kwalunkwe attribut minbarra `href` mat-tikketta `a` , bħal `<a class="A" href="/">Home</a>` , biex tevita din il-konverżjoni.

## `./I18n/Hash` Il-Fajls Li Ġejjin Huma Konfliġġenti

Ħassar il-fajls konfliġġenti u erġa' ħaddem it-Traduzzjoni `i18`

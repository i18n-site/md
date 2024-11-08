---

brief: |
  Bħalissa, ġew implimentati żewġ għodod tal-linja tal-kmand ta' sors miftuħ: i18 (għodda tat-traduzzjoni tal-linja tal-kmand MarkDown) u i18n.site (ġeneratur ta' sit ta' dokumenti statiċi b'ħafna lingwi)

---


# i18n.site · It-Traduzzjoni MarkDown U L-Għodda Tal-Bini Tal-Websajt Issa Hija Online!

Wara aktar minn nofs sena ta 'żvilupp, [https://i18n.site](//i18n.site) online.

Bħalissa, żewġ għodod tal-linja tal-kmand sors miftuħ huma implimentati:

* `i18` : MarkDown Għodda tat-traduzzjoni tal-linja tal-kmand
* `i18n.site` : Ġeneratur ta 'sit ta' dokumenti statiċi b'ħafna lingwi, **ottimizzat għall-esperjenza tal-qari**

It-traduzzjoni tista' perfettament iżżomm il-format ta' `Markdown` . Jista 'jidentifika modifiki tal-fajls u jittraduċi biss fajls b'bidliet.

It-traduzzjoni tista' tiġi editjata; jekk timmodifika t-test oriġinali u terġa' tittraduċih bil-magna, il-modifiki manwali għat-traduzzjoni ma jinkitbux fuqhom (jekk dan il-paragrafu tat-test oriġinali ma jkunx ġie modifikat).

[➤ Ikklikkja hawn biex tawtorizza u ssegwi i18n.site il-Librerija github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) u **tirċievi bonus $50** !

## Oriġini

Fl-era tal-Internet, id-dinja kollha hija suq, u l-multilingwiżmu u l-lokalizzazzjoni huma ħiliet bażiċi.

L-għodod eżistenti tal-ġestjoni tat-traduzzjoni huma wisq tqal Għal programmaturi li jiddependu fuq il-ġestjoni tal-verżjoni `git` , xorta jippreferu l-linja tal-kmand.

Allura, żviluppajt għodda ta 'traduzzjoni `i18` u bnejt ġeneratur ta' sit statiku b'ħafna lingwi `i18n.site` ibbażat fuq l-għodda tat-traduzzjoni.

![](https://p.3ti.site/1723777556.avif)

Dan huwa biss il-bidu, hemm ħafna aktar x'tagħmel.

Pereżempju, billi tgħaqqad is-sit tad-dokument statiku mal-midja soċjali u l-abbonamenti tal-email, l-utenti jistgħu jintlaħqu fil-ħin meta jiġu rilaxxati l-aġġornamenti.

Pereżempju, forums b'ħafna lingwi u sistemi ta' ordni tax-xogħol jistgħu jiġu inkorporati fi kwalunkwe paġna tal-web, li jippermettu lill-utenti jikkomunikaw mingħajr ostakli.

## Sors Miftuħ

Il [-kodiċi front-end, back-end, u tal-linja tal-kmand huma kollha sors miftuħ](https://i18n.site/i18n.site/c/src) (il-mudell tat-traduzzjoni għadu mhux open source).

Il-munzell tat-teknoloġija użat huwa kif ġej:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Il-linja tal-kmand u backend huma żviluppati bbażati fuq sadid.

tarf ta' [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Linja tal-kmand [js Magna boa_engine](https://docs.rs/boa_engine) , [database inkorporata fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

database [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Ibgħat posta [chasquid](https://github.com/albertito/chasquid) SMTP

## Ikkuntattjana

Meta jiġu mnedija prodotti ġodda, il-problemi huma inevitabbli.

Ħossok liberu li tikkuntattjana permezz tal-Google Forum [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
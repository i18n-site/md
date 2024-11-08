---

brief: |
  Pašlaik ir ieviesti divi atvērtā pirmkoda komandrindas rīki: i18 (MarkDown komandrindas tulkošanas rīks) un i18n.site (vairāku valodu statisko dokumentu vietņu ģenerators)

---


# i18n.site · MarkDown Tulkošanas Un Vietņu Veidošanas Rīks Tagad Ir Tiešsaistē!

Pēc vairāk nekā pusgada izstrādes ir tiešsaistē [https://i18n.site](//i18n.site)

Pašlaik ir ieviesti divi atvērtā pirmkoda komandrindas rīki:

* `i18` Komandrindas tulkošanas : MarkDown
* `i18n.site` : valodu statisko dokumentu vietņu ģenerators, **kas optimizēts lasīšanas pieredzei**

Tulkošanā var lieliski saglabāt formātu `Markdown` . Var identificēt failu modifikācijas un tulkot tikai failus ar izmaiņām.

Tulkojums ir rediģējams, ja jūs pārveidojat oriģinālo tekstu un mašīntulkojat to vēlreiz, manuāli veiktās tulkojuma izmaiņas netiks pārrakstītas (ja šī oriģinālā teksta rindkopa nav mainīta).

[➤ Noklikšķiniet šeit, lai autorizētu un automātiski sekotu github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) un **saņemtu bonusu $50** !

## Izcelsme

Interneta laikmetā visa pasaule ir tirgus, un daudzvalodība un lokalizācija ir pamatprasmes.

Esošie tulkošanas pārvaldības rīki ir pārāk smagi. Programmētājiem, kuri paļaujas uz `git` versijas pārvaldību, viņi joprojām dod priekšroku komandrindai.

Tāpēc es izstrādāju tulkošanas rīku `i18` un izveidoju vairāku valodu statisko vietņu ģeneratoru `i18n.site` pamatojoties uz tulkošanas rīku.

![](https://p.3ti.site/1723777556.avif)

Tas ir tikai sākums, ir vēl daudz darāmā.

Piemēram, savienojot statisko dokumentu vietni ar sociālo mediju un e-pasta abonementiem, lietotājus var sasniegt savlaicīgi, kad tiek izlaisti atjauninājumi.

Piemēram, daudzvalodu forumus un darba pasūtījumu sistēmas var iegult jebkurā tīmekļa lapā, ļaujot lietotājiem sazināties bez šķēršļiem.

## Atvērtais Avots

Priekšgala, aizmugures un komandrindas [kodi ir visi atvērtā koda kodi](https://i18n.site/i18n.site/c/src) (tulkošanas modelis vēl nav atvērts avots).

Izmantotā tehnoloģiju kaudze ir šāda:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Komandrinda un aizmugursistēma ir izstrādāta, pamatojoties uz rūsu.

aizmugure [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Komandrinda [js Dzinējs boa_engine](https://docs.rs/boa_engine) , [iegulta datu bāze fjall](https://github.com/fjall-rs/fjall) .

serveris [contabo](https://my.contabo.com) VPS

datu [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Sūtīt pastu uz self-built [chasquid](https://github.com/albertito/chasquid) SMTP

## Sazinieties Ar Mums

Kad tiek ieviesti jauni produkti, problēmas ir neizbēgamas.

Sazinieties ar mums, izmantojot Google forumu [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
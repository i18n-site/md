# i18n.site · MarkDown Oversættelses- og Webstedsopbygningsværktøj er nu online!

Efter mere end et halvt års udvikling er [https://i18n.site](//i18n.site) gået i luften.

I øjeblikket er to open source kommandolinjeværktøjer blevet implementeret:

* `i18` : MarkDown kommandolinjeoversættelsesværktøj
* `i18n.site` : Flersproget statisk dokumentationswebsteds generator, **optimeret til læseoplevelse**

1	Oversættelse kan perfekt opretholde `Markdown`-formatet. Kan identificere filændringer og kun oversætte filer med ændringer.

Translationer kan redigeres; hvis originalteksten ændres, og oversættelsen maskinoversættes igen, vil menneskelige ændringer ikke blive overskrevet (hvis originalteksten ikke er ændret).

[Klik her for at godkende og automatisk i18n.site 's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **modtage bonus $50** .

## Opståen

I internettiden er hele verden markedet, og flersprogethed og lokalisering er grundlæggende færdigheder.

De nuværende oversættelsesstyringsværktøjer er for tunge; programmører, der er afhængige af `git` til versionstyring, foretrækker stadig kommandolinjen.

Derfor udviklede jeg oversættelsesværktøjet `i18` og byggede på basis af dette værktøj den flersprogede statiske dokumentationswebsteds generator `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Dette er kun begyndelsen; der er stadig meget, jeg vil opnå.

F.eks. at integrere det statiske dokumentationswebsted med sociale medier og e-mail-abonnementer, så brugere kan kontaktes øjeblikkeligt, når opdateringer udrulles.

F.eks. at integrere flersprogede fora og supportsystemer i enhver hjemmeside, så brugerne kan kommunikere uden barrierer.

## Åben kildekode

2	Front-end, back-end og [kommandolinjekoder](https://i18n.site/i18n.site/c/src) er alle åbne kilder (oversættelsesmodellen er endnu ikke åben kilde).

Den anvendte teknologistak er som følger:

Frontend: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Kommandolinje og backend er udviklet baseret på Rust.

Backend: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Kommandolinje: [indbygget JavaScript-motor boa_engine](https://docs.rs/boa_engine), [indbygget database fjall](https://github.com/fjall-rs/fjall).

[contabo](https://my.contabo.com) VPS

Database: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Email sendes via selvbygget SMTP [chasquid](https://github.com/albertito/chasquid).

## Kontakt os

Når nye produkter lanceres, er det uundgåeligt, at der opstår problemer.

[Kontakt os via Google Forum: groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
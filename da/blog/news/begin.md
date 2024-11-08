---

brief: |
  I øjeblikket er der implementeret to open source-kommandolinjeværktøjer: i18 (MarkDown-kommandolinje-oversættelsesværktøj) og i18n.site (multi-sprog statisk dokumentwebstedsgenerator)

---


# i18n.site · MarkDown Oversættelses- Og Webstedsopbygningsværktøj Er Nu Online!

Efter mere end et halvt års udvikling er [https://i18n.site](//i18n.site)

I øjeblikket er to open source kommandolinjeværktøjer implementeret:

* `i18` : MarkDown Kommandolinje oversættelsesværktøj
* `i18n.site` : Flersproget statisk dokumentwebstedsgenerator, **optimeret til læseoplevelse**

Oversættelse kan perfekt opretholde formatet `Markdown` . Kan identificere filændringer og kun oversætte filer med ændringer.

Oversættelsen kan redigeres; hvis du ændrer den originale tekst og maskinoversætter den igen, vil de manuelle ændringer af oversættelsen ikke blive overskrevet (hvis dette afsnit i den originale tekst ikke er blevet ændret).

[➤ Klik her for at godkende og automatisk i18n.site 's github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **modtage bonus $50** .

## Oprindelse

I internettiden er hele verden et marked, og flersprogethed og lokalisering er grundlæggende færdigheder.

De eksisterende oversættelsesstyringsværktøjer er for tunge For programmører, der er afhængige af version `git` -styring, foretrækker de stadig kommandolinjen.

Så jeg udviklede et oversættelsesværktøj `i18` og byggede en flersproget statisk webstedsgenerator `i18n.site` baseret på oversættelsesværktøjet.

![](https://p.3ti.site/1723777556.avif)

Dette er kun begyndelsen, der er meget mere at gøre.

For eksempel ved at forbinde det statiske dokumentwebsted med sociale medier og e-mail-abonnementer, kan brugere nås i tide, når opdateringer frigives.

For eksempel kan flersprogede fora og arbejdsordresystemer indlejres i enhver webside, hvilket giver brugerne mulighed for at kommunikere uden barrierer.

## Open Source

Front-end, back-end og [kommandolinjekoder er alle open source](https://i18n.site/i18n.site/c/src) (oversættelsesmodellen er endnu ikke open source).

Den anvendte teknologistack er som følger:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Kommandolinjen og backend er udviklet baseret på rust.

bagende [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Kommandolinje [js Engine boa_engine](https://docs.rs/boa_engine) , [indlejret database fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

[mariadb](https://mariadb.org) [kvrocks](https://kvrocks.apache.org)

[chasquid](https://github.com/albertito/chasquid) SMTP

## Kontakt Os

Når nye produkter lanceres, er problemer uundgåelige.

Du er [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) til at kontakte os via Google Forum :
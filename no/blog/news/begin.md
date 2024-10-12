---

brief: |
  For øyeblikket har to åpen kildekode-kommandolinjeverktøy blitt implementert: i18 (Markdown-kommandolinje-oversettelsesverktøy) og i18n.site (generator for statiske dokumenter med flere språk)

---


# i18n.site · Oversettelses- og nettstedbyggingsverktøy for Markdown er nå tilgjengelig!

Etter omtrent halvt år med utvikling, har [https://i18n.site](//i18n.site) blitt lansert.

For øyeblikket er to åpne kildekode-kommandolinjeverktøy implementert:

* `i18` : MarkDown-kommandolinje-oversettelsesverktøy
* `i18n.site` : Flerspråklig statisk dokumentasjonsgenerator, **optimalisert for leseopplevelse**

Oversettelsen kan perfekt bevare `Markdown`-formatet. Den kan identifisere filendringer og oversette kun filer med endringer.

Oversettelsen er redigerbar; hvis originalteksten endres, vil ikke tidligere manuelle justeringer bli overskrevet (med mindre originalavsnittet er endret).

[Klikk her for å autorisere og automatisk følge i18n.site github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **motta bonus $50** .

## Opprinnelse

I internett-tiden er hele verden markedet, og flerspråklighet og lokalisering er grunnleggende ferdigheter.

De eksisterende oversettelsesadministrasjonsverktøyene er for tunge; for utviklere som er avhengige av `git`-versjonskontroll, foretrekker de kommandolinjen.

Derfor utviklet jeg oversettelsesverktøyet `i18`, og bygde deretter `i18n.site`, en flerspråklig statisk dokumentasjonsgenerator, basert på dette verktøyet.

![](https://p.3ti.site/1723777556.avif)

Dette er bare begynnelsen; det er fortsatt mye mer jeg ønsker å oppnå.

For eksempel, å koble en statisk dokumentasjonsside til sosiale medier og e-postabonnementer, slik at oppdateringer kan nå brukerne i tide.

For eksempel å integrere flerspråklige fora og arbeidsordresystemer i hvilken som helst nettside, slik at brukerne kan kommunisere uten hinder.

## Åpen kildekode

Frontend-, backend- og [kommandolinjekodene er alle åpne kildekode](https://i18n.site/i18n.site/c/src) (oversettelsesmodellen er foreløpig ikke åpen kildekode).

De teknologiene som brukes inkluderer:

[svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Kommandolinje og backend er utviklet basert på Rust.

Backend bruker [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Kommandolinje bruker [boa_engine](https://docs.rs/boa_engine), en innebygd JavaScript-motor, og [fjall](https://github.com/fjall-rs/fjall), en innebygd database.

[contabo](https://my.contabo.com) VPS

[kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

[chasquid](https://github.com/albertito/chasquid) SMTP

## Kontakt oss

Når nye produkter lanseres, er det uunngåelig at det oppstår problemer.

Velkommen til å kontakte oss via Google Forum: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
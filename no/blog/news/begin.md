# i18n.site · MarkDown-oversettelses- og nettstedbyggingsverktøy er nå lansert!

Etter omtrent halvannet års utvikling, er [https://i18n.site](//i18n.site) endelig lansert.

For øyeblikket er to åpen kildekode-kommandolinjeverktøy implementert:

* `i18`: MarkDown-kommandolinjeoversettelsesverktøy
* `i18n.site`: Flerspråklig statisk dokumentasjonsgenerator, **optimalisert for leseopplevelse**

Oversettelse kan perfekt bevare `Markdown`-formatet. Kan gjenkjenne filendringer og kun oversette filer med endringer.

Translationer kan redigeres; hvis originalteksten endres, vil ikke maskinoversettelsen overskrive manuelle endringer (med mindre originalavsnittet er endret).

[Klikk her for å autorisere automatisk oppfølging av i18n.site sin GitHub-depot](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **og få en bonus på $50**.

## Origin

I den globale internett-epoken er hele verden et marked, og flerspråklighet og lokalisering er grunnleggende ferdigheter.

De eksisterende oversettelsesadministrasjonsverktøyene er for tunge; for utviklere som er avhengige av `git`-versjonskontroll, foretrekkes kommandolinjen.

Derfor utviklet jeg oversettelsesverktøyet `i18`, og bygde deretter en flerspråklig statisk dokumentasjonsgenerator `i18n.site` basert på dette verktøyet.

![](https://p.3ti.site/1723777556.avif)

Dette er bare begynnelsen; det er fortsatt mye mer å gjøre.

For eksempel, å koble den statiske dokumentasjonssiden til sosiale medier og e-postabonnementer, slik at oppdateringer kan nå brukerne i tide.

For eksempel, å integrere flerspråklige fora og arbeidsordresystemer i hvilken som helst nettside, slik at brukerne kan kommunisere uten hinder.

## Åpen kildekode

Frontend-, backend- og kommandolinjekoden er [alle åpen kildekode](https://i18n.site/i18n.site/c/src) (oversettelsesmodellen er for øyeblikket ikke åpen kildekode).

De teknologiene som brukes er som følger:

Frontend: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Kommandolinje- og backendutvikling er basert på Rust.

Backend: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases)

Kommandolinje: [innbakt JavaScript-motor boa_engine](https://docs.rs/boa_engine), [innbakt database fjall](https://github.com/fjall-rs/fjall)

[contabo](https://my.contabo.com) VPS

Database: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org)

E-postserver: [chasquid](https://github.com/albertito/chasquid)

## Kontakt oss

Når nye produkter lanseres, er det uunngåelig å møte problemer.

Kontakt oss gjerne via Google Forum: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
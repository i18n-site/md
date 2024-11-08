---

brief: |
  For øyeblikket har to åpen kildekode-kommandolinjeverktøy blitt implementert: i18 (MarkDown-kommandolinje-oversettelsesverktøy) og i18n.site (multi-language static document site generator)

---


# i18n.site · MarkDown Oversettelses- Og Nettstedbyggingsverktøy Er Nå Online!

Etter mer enn et halvt år med utvikling er [https://i18n.site](//i18n.site)

For øyeblikket er to åpen kildekode-kommandolinjeverktøy implementert:

* `i18` : MarkDown Kommandolinje oversettelsesverktøy
* `i18n.site` : Flerspråklig statisk dokumentsidegenerator, **optimalisert for leseopplevelse**

Oversettelse kan perfekt opprettholde formatet `Markdown` . Kan identifisere filendringer og bare oversette filer med endringer.

Oversettelsen kan redigeres; hvis du endrer originalteksten og maskinoversetter den på nytt, vil de manuelle endringene av oversettelsen ikke bli overskrevet (hvis dette avsnittet i originalteksten ikke er endret).

[➤ Klikk her for å autorisere og automatisk i18n.site github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **motta bonus $50** .

## Opprinnelse

I internetttiden er hele verden et marked, og flerspråklighet og lokalisering er grunnleggende ferdigheter.

De eksisterende oversettelsesadministrasjonsverktøyene er for tunge For programmerere som er avhengige av versjon `git` -administrasjon, foretrekker de fortsatt kommandolinjen.

Så jeg utviklet et oversettelsesverktøy `i18` og bygde en flerspråklig statisk nettstedgenerator `i18n.site` basert på oversettelsesverktøyet.

![](https://p.3ti.site/1723777556.avif)

Dette er bare begynnelsen, det er mye mer å gjøre.

For eksempel, ved å koble den statiske dokumentsiden til sosiale medier og e-postabonnementer, kan brukere nås i tide når oppdateringer slippes.

For eksempel kan flerspråklige fora og arbeidsordresystemer bygges inn i hvilken som helst nettside, slik at brukere kan kommunisere uten hindringer.

## Åpen Kildekode

Frontend-, backend- og [kommandolinjekodene er alle åpen kildekode](https://i18n.site/i18n.site/c/src) (oversettelsesmodellen er ikke åpen kildekode ennå).

Teknologistabelen som brukes er som følger:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Kommandolinjen og backend er utviklet basert på rust.

bakenden [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Kommandolinje [js Engine boa_engine](https://docs.rs/boa_engine) , [innebygd database fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

[kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

[chasquid](https://github.com/albertito/chasquid) SMTP

## Kontakt Oss

Når nye produkter lanseres, er problemer uunngåelige.

Ta gjerne kontakt med oss via Google Forum [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
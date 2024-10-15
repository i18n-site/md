---

brief: |
  Momenteel zijn er twee open source opdrachtregelhulpmiddelen geïmplementeerd: i18 (MarkDown opdrachtregelvertaalhulpmiddel) en i18n.site (meertalige statische documentenwebsitegenerator)

---


# i18n.site · MarkDown vertaal- en websitebouwtool, nu gelanceerd!

Na bijna een half jaar ontwikkeling, [https://i18n.site](//i18n.site) is nu live.

Momenteel zijn er twee open source opdrachtregelhulpmiddelen geïmplementeerd:

* `i18` : Opdrachtregelvertaalhulpmiddel voor Markdown
* `i18n.site` : Meertalige statische documentensitegenerator, **geoptimaliseerd voor leeservaring**

De vertaling kan perfect het formaat `Markdown` behouden. Kan bestandswijzigingen identificeren en alleen bestanden met wijzigingen vertalen.

De vertaling is bewerkbaar; als de oorspronkelijke tekst wordt aangepast, blijven handmatige wijzigingen in de vertaling behouden (tenzij de betreffende passage in de oorspronkelijke tekst is aangepast).

[Klik hier om de github te autoriseren en automatisch i18n.site te volgen](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **en een bonus van $50 te ontvangen**.

## Oorsprong

In het tijdperk van het internet is de hele wereld de markt, en meertaligheid en localisatie zijn basisvaardigheden.

De huidige vertaalbeheertools zijn te zwaar voor programmeurs die afhankelijk zijn van `git`-versiebeheer, zij geven de voorkeur aan opdrachtregelhulpmiddelen.

Daarom heb ik het vertaalhulpmiddel `i18` ontwikkeld en op basis daarvan de meertalige statische documentenwebsitegenerator `i18n.site` gebouwd.

![](https://p.3ti.site/1723777556.avif)

Dit is pas het begin, er is nog veel meer dat ik wil doen.

Bijvoorbeeld, het integreren van statische documentenwebsites met sociale media en e-mailnieuwsbrieven, zodat gebruikers direct worden geïnformeerd bij updates.

Of het toevoegen van meertalige forums en ticketingssystemen die in elke willekeurige webpagina kunnen worden ingebed, zodat gebruikers zonder barrières kunnen communiceren.

## Open Source

De front-end-, back-end- en [opdrachtregelcodes zijn allemaal open source](https://i18n.site/i18n.site/c/src) (het vertaalmodel is nog niet open source).

De gebruikte technologieën zijn:

Front-end: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Opdrachtregel en back-end zijn ontwikkeld op basis van Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower HTTP](https://github.com/tower-rs/tower-http/releases).

Opdrachtregel: [ingebedde JavaScript-engine Boa Engine](https://docs.rs/boa_engine), [ingebedde database Fjall](https://github.com/fjall-rs/fjall).

VPS-server: [Contabo](https://my.contabo.com)

Databases: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

E-mailverzending via zelfgehoste SMTP: [Chasquid](https://github.com/albertito/chasquid).

## Contacteer ons

Bij de lancering van nieuwe producten zijn problemen onvermijdelijk.

We heten u van harte welkom om contact met ons op te nemen via Google Groups: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
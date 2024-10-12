---

brief: |
  Momenteel zijn er twee open source opdrachtregelhulpmiddelen geïmplementeerd: i18 (MarkDown opdrachtregelvertaalhulpmiddel) en i18n.site (meertalige statische documentenwebsitegenerator)

---


# i18n.site · MarkDown vertaal- en websitebouwtool, nu gelanceerd!

Na bijna halfjaar ontwikkeling, [https://i18n.site](//i18n.site) is nu live.

Momenteel zijn er twee open source opdrachtregelhulpmiddelen geïmplementeerd:

* `i18` : MarkDown opdrachtregelvertaalhulpmiddel
* `i18n.site` : Meertalige statische documenten site-generator, **geoptimaliseerd voor het leesplezier**

De vertaling kan perfect het `Markdown`-formaat behouden. Ze kan bestandswijzigingen herkennen en alleen bestanden met wijzigingen vertalen.

De vertaling is bewerkbaar; als de oorspronkelijke tekst wordt aangepast en opnieuw machinaal wordt vertaald, blijven handmatige wijzigingen in de vertaling behouden (tenzij de betreffende passage in de oorspronkelijke tekst is aangepast).

[Klik hier om de github te autoriseren en automatisch i18n.site volgen](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) en **bonus $50 te ontvangen** .

## Oorsprong

In het tijdperk van het internet is de hele wereld de markt en zijn meertaligheid en localisatie basisvaardigheden.

De huidige vertaalbeheertools zijn te zwaar voor programmeurs die afhankelijk zijn van `git`-versiebeheer; zij geven de voorkeur aan opdrachtregelhulpmiddelen.

Daarom heb ik het vertaalhulpmiddel `i18` ontwikkeld en heb ik op basis van dit vertaalhulpmiddel een meertalige statische websitegenerator `i18n.site` opgebouwd.

![](https://p.3ti.site/1723777556.avif)

Dit is pas het begin, er is nog veel meer dat ik wil doen.

Bijvoorbeeld, het koppelen van een statische documentenwebsite aan sociale media en e-mailnieuwsbrieven zodat gebruikers direct worden geïnformeerd bij updates.

Of het integreren van meertalige forums en ticketingssystemen in elke willekeurige webpagina, zodat gebruikers zonder barrières kunnen communiceren.

## Open Source

De front-end-, back-end- en [opdrachtregelcodes zijn allemaal open source](https://i18n.site/i18n.site/c/src) (het vertaalmodel is nog niet open source).

De gebruikte technologieën zijn:

[svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

De opdrachtregel- en backend-ontwikkeling zijn uitgevoerd in Rust.

achterkant [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Commandoregel [ingebed js Engine boa_engine](https://docs.rs/boa_engine) , [ingebedde database fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

- Back-end: [Axum](https://kvrocks.apache.org), [Tower HTTP](https://mariadb.org).

Stuur mail [chasquid](https://github.com/albertito/chasquid) SMTP

## Neem contact met ons op

Wanneer nieuwe producten worden gelanceerd, zijn problemen onvermijdelijk.

Neem gerust contact met ons op via het Google Forum [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
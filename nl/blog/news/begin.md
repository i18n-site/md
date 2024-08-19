# i18n.site · MarkDown Vertaal- en Websitebouwtool is nu gelanceerd!

Nadat meer dan half jaar aan ontwikkeling, [https://i18n.site](//i18n.site) is gelanceerd.

Momenteel zijn er twee open source opdrachtregelhulpmiddelen geïmplementeerd:

* `i18` : MarkDown opdrachtregelvertaalhulpmiddel
* `i18n.site` : Meertalige statische documenten site-generator, **geoptimaliseerd voor het leesplezier**

De vertaling kan het `Markdown`-formaat perfect behouden. Ze kan bestandswijzigingen herkennen en alleen bestanden met wijzigingen vertalen.

De vertaling is bewerkbaar; als de oorspronkelijke tekst wordt aangepast en opnieuw machinaal wordt vertaald, zullen handmatige wijzigingen in de vertaling niet worden overschreven (tenzij de betreffende passage in de oorspronkelijke tekst is aangepast).

[Klik hier om de github te autoriseren en automatisch te i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) en **bonus $50 te ontvangen** .

## Oorsprong

In het tijdperk van het internet is de hele wereld een markt, en meertaligheid en lokalisatie zijn basisvaardigheden.

Bestaande vertaalbeheertools zijn te zwaar voor programmeurs die afhankelijk zijn van `git`-versiebeheer, ze geven de voorkeur aan de opdrachtregel.

Daarom heb ik de vertaaltool `i18` ontwikkeld en op basis daarvan de meertalige statische sitegenerator `i18n.site` opgezet.

![](https://p.3ti.site/1723777556.avif)

Dit is pas het begin, er is nog veel meer dat ik wil doen.

Bijvoorbeeld, het koppelen van een statische documentensite aan sociale media en e-mailabonnementen, zodat gebruikers tijdig worden geïnformeerd bij updates.

Bijvoorbeeld, het integreren van meertalige forums en ticketingssystemen in elke willekeurige webpagina, zodat gebruikers zonder barrières kunnen communiceren.

## Open Source

De front-end-, back-end- en [opdrachtregelcodes zijn allemaal open source](https://i18n.site/i18n.site/c/src) (het vertaalmodel is nog niet open source).

De gebruikte technologiestapels zijn als volgt:

Frontend [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Opdrachtregel en back-end zijn ontwikkeld op basis van Rust.

Back-end [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Opdrachtregel [ingebedde js-engine boa_engine](https://docs.rs/boa_engine), [ingebedde database fjall](https://github.com/fjall-rs/fjall).

VPS-server [contabo](https://my.contabo.com)

Database [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Emailverzendienst via zelfgehoste SMTP [chasquid](https://github.com/albertito/chasquid).

## Neem contact met ons op

Bij de lancering van nieuwe producten zijn problemen onvermijdelijk.

We heten u van harte welkom om contact met ons op te nemen via Google Groups [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
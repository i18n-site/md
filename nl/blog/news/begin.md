---

brief: |
  Momenteel zijn er twee open source opdrachtregelprogramma's geïmplementeerd: i18 (MarkDown opdrachtregelvertaalprogramma) en i18n.site (meertalige statische documentsitegenerator)

---


# i18n.site · MarkDown Vertaal- en Websitebouwtool Is Nu Online!

Na ruim een half jaar ontwikkeling, [https://i18n.site](//i18n.site)

Momenteel zijn er twee open source opdrachtregelprogramma's geïmplementeerd:

* `i18` : MarkDown Opdrachtregelvertaalhulpmiddel
* `i18n.site` : Meertalige statische documentsitegenerator, **geoptimaliseerd voor leeservaring**

De vertaling kan perfect het formaat `Markdown` behouden. Kan bestandswijzigingen identificeren en alleen bestanden met wijzigingen vertalen.

De vertaling is bewerkbaar; als u de originele tekst wijzigt en deze opnieuw machinaal vertaalt, worden de handmatige wijzigingen aan de vertaling niet overschreven (als deze paragraaf van de originele tekst niet is gewijzigd).

[➤ Klik hier om de github bibliotheek te autoriseren en automatisch i18n.site volgen](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) en **bonus $50 te ontvangen** .

## Oorsprong

In het internettijdperk is de hele wereld een markt en zijn meertaligheid en lokalisatie basisvaardigheden.

De bestaande tools voor vertaalbeheer zijn te zwaar voor programmeurs die afhankelijk zijn van versie `git` -beheer, ze geven nog steeds de voorkeur aan de opdrachtregel.

Daarom heb ik een vertaaltool `i18` ontwikkeld en een meertalige statische sitegenerator `i18n.site` gebouwd op basis van de vertaaltool.

![](https://p.3ti.site/1723777556.avif)

Dit is nog maar het begin, er is nog veel meer te doen.

Door de statische documentensite bijvoorbeeld te koppelen aan sociale media en e-mailabonnementen, kunnen gebruikers op tijd worden bereikt als er updates verschijnen.

Meertalige forums en werkordersystemen kunnen bijvoorbeeld in elke webpagina worden ingebed, waardoor gebruikers zonder barrières kunnen communiceren.

## Open-Source

De front-end-, back-end- en [opdrachtregelcodes zijn allemaal open source](https://i18n.site/i18n.site/c/src) (het vertaalmodel is nog niet open source).

De gebruikte technologiestapel is als volgt:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

De opdrachtregel en backend zijn ontwikkeld op basis van roest.

achterkant [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Commandoregel [ingebed js Engine boa_engine](https://docs.rs/boa_engine) , [ingebedde database fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

databank [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Stuur mail [chasquid](https://github.com/albertito/chasquid) SMTP

## Neem Contact Met Ons Op

Wanneer er nieuwe producten worden gelanceerd, zijn problemen onvermijdelijk.

Neem gerust contact met ons op via Google Forum [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
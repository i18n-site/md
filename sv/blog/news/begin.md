---

brief: |
  För närvarande har två kommandoradsverktyg med öppen källkod implementerats: i18 (MarkDown kommandoradsöversättningsverktyg) och i18n.site (multi-language static document site generator)

---


# i18n.site · MarkDowns Översättnings- Och Webbverktyg Är Nu Online!

Efter mer än ett halvt års utveckling är [https://i18n.site](//i18n.site)

För närvarande är två kommandoradsverktyg med öppen källkod implementerade:

* `i18` : MarkDown Kommandoradsöversättningsverktyg
* `i18n.site` : Flerspråkig statisk dokumentwebbplatsgenerator, **optimerad för läsupplevelse**

Översättning kan perfekt behålla formatet `Markdown` . Kan identifiera filändringar och endast översätta filer med ändringar.

Översättningen är redigerbar; om du ändrar originaltexten och maskinöversätter den igen, kommer de manuella ändringarna av översättningen inte att skrivas över (om detta stycke i originaltexten inte har ändrats).

[➤ Klicka här för att auktorisera och automatiskt i18n.site github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) och **få bonus $50** .

## Ursprung

I internettiden är hela världen en marknad och flerspråkighet och lokalisering är grundläggande färdigheter.

De befintliga verktygen för översättningshantering är för tunga För programmerare som förlitar sig på version `git` -hantering föredrar de fortfarande kommandoraden.

Så jag utvecklade ett översättningsverktyg `i18` och byggde en flerspråkig statisk webbplatsgenerator `i18n.site` baserad på översättningsverktyget.

![](https://p.3ti.site/1723777556.avif)

Det här är bara början, det finns mycket mer att göra.

Genom att till exempel koppla samman den statiska dokumentsidan med sociala medier och e-postprenumerationer kan användare nås i tid när uppdateringar släpps.

Flerspråkiga forum och arbetsordersystem kan till exempel bäddas in på vilken webbsida som helst, så att användare kan kommunicera utan hinder.

## Öppen Källkod

Front-end, back-end och [kommandoradskoder är alla öppen källkod](https://i18n.site/i18n.site/c/src) (översättningsmodellen är inte öppen källkod ännu).

Teknikstapeln som används är följande:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Kommandoraden och backend är utvecklade baserat på rost.

baksidan [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Kommandorad [js motor boa_engine](https://docs.rs/boa_engine) , [inbäddad databas fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

[kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

[chasquid](https://github.com/albertito/chasquid) SMTP

## Kontakta Oss

När nya produkter lanseras är problem oundvikliga.

Kontakta [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) gärna via Google Forum :
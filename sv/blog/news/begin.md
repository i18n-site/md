# i18n.site · MarkDown-översättnings- och webbsättningsverktyg är nu lanserade!

Efter nästan ett halvår av utveckling är [https://i18n.site](//i18n.site) nu live.

För närvarande har två öppna källkodskommandoradsverktyg implementerats:

* `i18` : MarkDown-kommandoradsöversättningsverktyg
* `i18n.site` : Flerspråkig statisk dokumentwebbplatsgenerator, **optimerad för läsning**

Översättningen kan perfekt behålla `Markdown`-formatet. Den kan identifiera filändringar och översätta endast ändrade filer.

Översättningen är redigerbar; om originaltexten ändras och översätts igen, kommer inte de manuella ändringarna att skrivas över (om originaltexten inte har ändrats).

[Klicka här för att auktorisera och automatiskt följa i18n.site på GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **och få $50 i bonus**.

## Ursprung

I dagens internet era är hela världen en marknad, och flerspråkighet och lokalisering är grundläggande färdigheter.

Befintliga översättningshanteringsverktyg är för tunga; för utvecklare som förlitar sig på `git`-hantering föredrar de kommandoraden.

Så jag utvecklade översättningsverktyget `i18` och byggde vidare med flerspråkig statisk webbplatsgenerator `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Detta är bara början, det finns mycket mer att göra.

Till exempel att koppla samman den statiska dokumentwebbplatsen med sociala medier och e-postprenumerationer, så att uppdateringar kan nå användarna i tid.

och att integrera flerspråkiga forum och supportsystem på vilken webbsida som helst, vilket gör det möjligt för användare att kommunicera utan hinder.

## Öppen källkod

Frontend, backend och kommandoradscode är alla öppen källkod [här](https://i18n.site/i18n.site/c/src) (översättningsmodellen är för närvarande inte öppen källkod).

Teknikstacken som används är:

Frontend: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Kommandorad och backend är utvecklade i Rust.

Backend: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Kommandorad: [inbyggd JavaScript-motor boa_engine](https://docs.rs/boa_engine), [inbyggd databas fjall](https://github.com/fjall-rs/fjall).

VPS-server: [contabo](https://my.contabo.com)

Databas: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

E-postserver: [chasquid](https://github.com/albertito/chasquid)

## Kontakta oss

Nya produkter kan ha problem vid lansering.

Välkommen att kontakta oss via Google Groups: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
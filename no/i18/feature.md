# Produktfunksjoner

`i18` er kommandolinjeverktøyet for oversettelse Markdown & Yaml

## Kan Perfekt Opprettholde Formatet Til Markdown

Støtter oversettelse av Markdown-tabeller uten å skade formatet; oversetter ikke ord i matematiske formler eller lenker.

Markdown `<pre>` HTML `MarkDown` HTML `<code>`

## Kan Gjenkjenne Matematiske Formler Og Hoppe Over Oversettelse

Matematiske formler gjenkjennes og oversettelse hoppes over.

For hvordan du skriver matematiske formler, se [" Github Om å skrive matematiske uttrykk"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Evne Til Å Oversette Kommentarer I Kodebiter

Innebygd kode og kodebiter oversettes ikke, men kommentarer i koden kan oversettes.

Oversettelseskommentarer må angi språket etter ` ``` ` , : eksempel ` ```rust ` .

For øyeblikket støtter den annoteringsoversettelse på `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [og andre språk](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Hvis du ønsker å oversette alle ikke-engelske tegn i koden, merk kodesegmentet med ` ```i18n ` .

Hvis programmeringsspråket du trenger ikke er tilgjengelig, vennligst [kontakt oss](https://groups.google.com/g/i18n-site) .

## Kommandolinjevennlig

Det er mange [tunge verktøy](https://www.capterra.com/translation-management-software) tilgjengelig for å administrere oversettelsesdokumenter.

For programmerere som er kjent med `git` , `vim` og `vscode` , vil bruk av disse verktøyene til å redigere dokumenter og administrere versjoner uten tvil øke læringskostnadene.

`KISS` ( `Keep It Simple, Stupid` ) Blant prinsipptroende er løsninger på bedriftsnivå synonymt med å være tungvinte, ineffektive og vanskelige å bruke.

Oversettelse bør gjøres ved å legge inn kommandoer og fullføre den med ett klikk. Det skal ikke være noen komplekse miljøavhengigheter.

Ikke legg til enheter med mindre det er nødvendig.

## Ingen Endring, Ingen Oversettelse

Det finnes også noen kommandolinje-oversettelsesverktøy, for eksempel [translate-shell](https://github.com/soimort/translate-shell)

De støtter imidlertid ikke identifisering av filendringer og oversetter bare modifiserte filer for å redusere kostnadene og øke effektiviteten.

## Oversettelsen Kan Redigeres, Og Maskinoversettelse Vil Ikke Overskrive Eksisterende Modifikasjoner.

Oversettelsen er redigerbar.

Endre den originale teksten og maskinoversett den igjen, manuelle modifikasjoner av oversettelsen vil ikke bli overskrevet (hvis dette avsnittet i originalteksten ikke er endret).

## Maskinoversettelse Av Beste Kvalitet

Vi har utviklet en ny generasjon oversettelsesteknologi som kombinerer de tekniske fordelene til tradisjonelle maskinoversettelsesmodeller og store språkmodeller for å gjøre oversettelser nøyaktige, jevne og elegante.

Blindtester viser at vår oversettelseskvalitet er betydelig bedre sammenlignet med lignende tjenester.

For å oppnå samme kvalitet er mengden manuell redigering som kreves av Google Translate og `ChatGPT` henholdsvis `2.67` ganger og `3.15` ganger større enn vår.

## <a rel=id href="#price" id="price"></a> Ekstremt konkurransedyktige priser

|                                                                                   | USD/million ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klikk her for å autorisere og automatisk i18n.site github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **motta bonus $50** .

Merk: Antall fakturerbare tegn = [antall unicode](https://en.wikipedia.org/wiki/Unicode) i kildefilen × antall språk i oversettelsen

## Støtte Oversettelse `YAML`

Verktøyet oversetter bare ordbokverdiene til `YAML` , ikke ordboknøklene.

Basert på `YAML` oversettelse kan du enkelt bygge internasjonale løsninger for ulike programmeringsspråk.

## Støtte Oversettelse `HOGO` Header Konfigurasjon

Støtter headerkonfigurasjonen av statisk blogg av typen [HOGO](https://github.com/gohugoio/hugo) og oversetter bare felt `title` , `summary` , `brief` og `description` .

## Ikke Oversett Variabelnavn

`Markdown` brukes som e-postmal, `YAML` brukes som språkfilkonfigurasjon, og det vil være variable parametere (for eksempel: recharge `${amount}` er mottatt).

Variabelnavn som `${varname}` vil ikke bli sett på som engelske oversettelser.

## Oversettelsesoptimalisering for Kina, Japan Og Korea

### Når Den Oversettes Til Engelsk, Blir Den Første Bokstaven I Tittelen Automatisk Stor.

Kina, Japan og Korea har ikke store og små bokstaver, men konvensjonen for engelske titler er å bruke stor bokstav.

`i18` kan gjenkjenne tittelen i `MarkDown` , og vil automatisk skrive den første bokstaven med stor bokstav når du oversetter til et språk som skiller mellom store og små bokstaver.

For eksempel vil `为阅读体验而优化` bli oversatt til `Optimized for Reading Experience` .

### Engelske Termer På Kinesisk, Japansk, Koreansk Og Kinesisk Oversettes Ikke

Dokumenter fra Kina, Japan og Korea inneholder ofte mange engelske termer.

Maskinoversettelse av kinesisk, japansk og koreansk språk har blitt et ikke-engelsk språk, og termer blir ofte oversatt sammen, for eksempel følgende kinesiske setning:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Hvis du bruker Google eller DeepL, oversetter de begge feil engelske termer som skal forbli originale (ta japansk og fransk som eksempler).

### Google Translate

Oversatt `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japansk :

![](//p.3ti.site/1720199391.avif)

Oversatt `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` fransk :

`Falcon` er oversatt til `faucon` og `Llama` er oversatt til `lama` . Som egennavn bør de ikke oversettes.

![](//p.3ti.site/1720199451.avif)

### DeepL Oversettelse

Oversatt `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japansk :

![](//p.3ti.site/1720199550.avif)

DeepL Oversettelse av ovenstående til fransk (omskriver også de riktige navnene og legger til oddetall `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Oversettelse

`i18` oversettelse vil gjenkjenne engelske termer i kinesiske, japanske og koreanske dokumenter og la termene være intakte.

For eksempel er det japanske oversettelsesresultatet ovenfor:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Den franske oversettelsen er:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Bare når det er et mellomrom mellom det engelske ordet og den kinesiske, japanske og koreanske teksten eller den engelske lengden er større enn 1, vil ordet bli sett på som et begrep.

For eksempel: `C罗` vil bli oversatt til `Cristiano Ronaldo` .

## Kan Kombineres Med Mer Enn `i18n.site` Språk for Å Bygge en Nettside

`i18` er integrert i kommandolinjeverktøyet for flerspråklig nettstedbygging [`i18n.site`](/i18n.site) .

Se dokumentasjonen til [`i18n.site`](/i18n.site) for detaljer.

## Kode Åpen Kildekode

Klienten er fullstendig åpen kildekode, og 90 % av koden er åpen [kildekode](/i18n.site/c/src) .

Vi søker frivillige til å delta i utvikling av åpen kildekode og korrekturlesing av oversatte tekster.

Hvis du er interessert, vennligst [→ Klikk her for å fylle ut profilen din](https://ggl.link/i18n) og bli med på [e-postlisten](https://groups.google.com/u/2/g/i18n-site) for kommunikasjon.

## Holde Kontakten

<button onclick="mailsub()">Klikk på denne e-posten for å abonnere på produktoppdateringer</button> og <button onclick="webpush()">aktivere nettleser-push</button> . Vi vil varsle deg når produktoppdateringer gjøres.

/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) å følge våre sosiale kontoer [X.COM: @i18nSite](https://x.com/i18nSite)
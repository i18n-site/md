# Produktfunksjoner

`i18` er et kommandolinjeverktøy for å oversette Markdown- og YAML-filer.

## Kan bevare Markdown-formatet perfekt

Støtter oversettelse av Markdown-tabeller uten å ødelegge formatet; oversetter ikke ord i matematiske formler eller lenker.

`<pre>` HTML Markdown `MarkDown` HTML `<code>`

## Kan gjenkjenne matematiske formler og hoppe over oversettelsen

Matematiske formler gjenkjennes og oversettelsen hopper over.

For hvordan du skriver matematiske formler, se [Github om å skrive matematiske uttrykk](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Kan oversette kommentarer i kodeblokker

Innebygd kode og kodeblokker oversettes ikke, men kommentarer i koden kan oversettes.

Oversettelseskommentarer må spesifisere språket etter ` ``` `, for eksempel: ` ```rust `.

Støtter for øyeblikket kommentaroversettelse for `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [og andre språk](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Hvis du trenger et annet programmeringsspråk, vennligst [kontakt oss](https://groups.google.com/g/i18n-site).

## Kommandolinjevennlig

Mange [tunge verktøy](https://www.capterra.com/translation-management-software) kan administrere oversettelsesdokumenter.

For utviklere som er vant til `git`, `vim`, `vscode`, vil bruk av disse verktøyene til å redigere dokumenter og administrere versjoner øke læringskostnadene.

Blant tilhengere av `KISS` (`Keep It Simple, Stupid`) er løsninger på bedriftsnivå synonymt med å være tunge, ineffektive og vanskelige å bruke.

Oversettelse bør være enkel, med kommandoer og fullføres med ett klikk, uten komplekse miljøavhengigheter.

Ikke legg til enheter med mindre det er nødvendig.

## Ingen endring, ingen oversettelse

Det finnes også andre kommandolinjeoversettelsesverktøy, som [translate-shell](https://github.com/soimort/translate-shell).

Disse støtter ikke gjenkjenning av filendringer, og oversetter kun endrede filer for å redusere kostnader og øke effektiviteten.

## Oversettelsen kan redigeres, og maskinoversettelse vil ikke overskrive eksisterende manuelle modifikasjoner

Oversettelsen er redigerbar.

Ved endring av originalteksten vil maskinoversettelse ikke overskrive manuelle modifikasjoner (dersom originalavsnittet ikke er endret).

## Beste maskinoversettelse kvalitet

Vi har utviklet en ny generasjon oversettelsesteknologi som kombinerer tradisjonelle maskinoversettelsesmodeller og store språkmodeller for å gi nøyaktige, jevne og elegante oversettelser.

Blindtester viser at vår oversettelseskvalitet er betydelig bedre sammenlignet med lignende tjenester.

For å oppnå samme kvalitet krever Google Translate og `ChatGPT` henholdsvis `2.67` og `3.15` ganger så mye manuell redigering som vår.

## <a rel=id href="#price" id="price"></a> Ekstremt konkurransedyktige priser

|                                                                                   | USD/million ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klikk her for å autorisere automatisk oppfølging av i18n.site sin GitHub-depot](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **og få en bonus på $50**.

Merk: Fakturerbare tegn = kildefilens [unicode-tegn](https://en.wikipedia.org/wiki/Unicode) × antall språk i oversettelsen

## Støtter oversettelse av `YAML`

Verktøyet oversetter kun verdier i ordbøker i `YAML`, ikke nøklene.

Basert på `YAML`-oversettelse kan du enkelt bygge internasjonale løsninger for ulike programmeringsspråk.

## Støtter oversettelse av `HOGO`-header-konfigurasjon

Støtter oversettelse av [HOGO](https://github.com/gohugoio/hugo) type statisk blogg header-konfigurasjon, kun oversetter `title`, `summary` og `description` feltene.

## Ikke oversett variabelnavn

`Markdown` brukes til e-postmaler, `YAML` som språkfilkonfigurasjon, og vil inneholde variabelparametere (f.eks.:充值`${amount}`已到账).

Variabelnavn som `${varname}` oversettes ikke som engelske ord.

## Oversettelsesoptimalisering for Kina, Japan og Korea

### Når oversatt til engelsk, settes den første bokstaven i tittelen automatisk til stor

Kina, Japan og Korea har ikke store og små bokstaver, men engelske titler følger vanligvis konvensjonen med stor bokstav.

`i18` kan gjenkjenne titler i `Markdown`, og vil automatisk sette første bokstav med stor bokstav når det oversettes til språk som skiller mellom store og små bokstaver.

For eksempel vil `为阅读体验而优化` bli oversatt til `Optimized for Reading Experience`.

### Ikke oversett engelske termer i kinesisk, japansk og koreansk tekst

Dokumenter fra Kina, Japan og Korea inneholder ofte mange engelske termer.

Maskinoversettelse av kinesisk, japansk og koreansk tekst til ikke-engelske språk vil ofte oversette termer sammen

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Hvis du bruker Google eller DeepL, vil de begge feilaktig oversette engelske termer som burde vært opprettholdt i originalen (for eksempel på japansk og fransk).

### Google Translate

Oversatt til `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Oversatt til `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` oversettes til `faucon`, `Llama` oversettes til `lama`. Som egennavn bør de ikke oversettes.

![](//p.3ti.site/1720199451.avif)

### DeepL Oversettelse

Oversatt til `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL oversetter ovenstående til fransk (og endrer også de riktige navnene, legger til mystiske `...`)

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Oversettelse

`i18` vil gjenkjenne engelske termer i kinesisk, japansk og koreansk tekst og la dem være intakte.

For eksempel er det japanske oversettelsesresultatet:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Den franske oversettelsen er:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Bare når det er et mellomrom mellom det engelske ordet og den kinesiske, japanske eller koreanske teksten, eller når det engelske ordet er lengre enn én bokstav, vil det bli sett på som et begrep.

For eksempel: `C罗` vil bli oversatt til `Cristiano Ronaldo`.

## Kan kombineres med mer enn `i18n.site` for å bygge et flerspråklig nettsted

`i18` er integrert i kommandolinjeverktøyet for flerspråklig nettstedbygging [`i18n.site`](/i18n.site) .

Se dokumentasjonen til [`i18n.site`](/i18n.site) for detaljer.

## Kode er åpen kildekode

Klienten er fullstendig åpen kildekode, og 90 % av serverkoden er åpen [kildekode](/i18n.site/src).

Vi søker frivillige til å delta i utvikling av åpen kildekode og korrekturlesing av oversatte tekster.

Hvis du er interessert, vennligst [→ Klikk her for å fylle ut profilen din](https://ggl.link/i18n) og bli med på [e-postlisten](https://groups.google.com/u/2/g/i18n-site) for kommunikasjon.

## Hold kontakten

<button onclick="mailsub()">Klikk på denne e-posten for å abonnere på produktoppdateringer</button> og <button onclick="webpush()">aktivere nettleser-push</button>. Vi vil varsle deg når produktoppdateringer gjøres.

Følg våre sosiale medier [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).
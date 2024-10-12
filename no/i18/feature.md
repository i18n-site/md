# Produktfunksjoner

`i18` er et kommandolinjeverktøy for å oversette Markdown- og YAML-filer.

## Kan bevare Markdown-formatet perfekt

Støtter oversettelse av Markdown-tabeller uten å ødelegge formatet; oversetter ikke ord i matematiske formler eller lenker.

Markdown `<pre>` HTML `MarkDown` HTML `<code>`

## Kan gjenkjenne matematiske formler og hoppe over oversettelsen

Matematiske formler gjenkjennes og oversettelsen hopper over.

For hvordan du skriver matematiske formler, se [Github om å skrive matematiske uttrykk](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Kan oversette kommentarer i kodeblokker

Innebygd kode og kodeblokker oversettes ikke, men kommentarer i koden kan oversettes.

Oversettelseskommentarer må angi språket etter ` ``` `, for eksempel: ` ```rust `.

Støtter for øyeblikket oversettelse av kommentarer i `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [og andre språk](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Hvis du trenger et annet programmeringsspråk, vennligst [kontakt oss](https://groups.google.com/g/i18n-site).

## Kommandolinjevennlig

Mange [tunge verktøy](https://www.capterra.com/translation-management-software) kan administrere oversettelsesdokumenter.

For utviklere som er vant til `git`, `vim`, `vscode`, vil bruk av disse verktøyene til å redigere dokumenter og administrere versjoner øke læringskostnadene.

Blant tilhengere av `KISS` (`Keep It Simple, Stupid`) er enterprise-løsninger synonymt med tunge, ineffektive og vanskelige å bruke

Oversettelse bør være enkel, med kommandoer og fullføres med ett klikk, uten komplekse miljøavhengigheter.

Ikke legg til enheter med mindre det er nødvendig.

## Ingen endring, ingen oversettelse

Det finnes også andre kommandolinjeoversettelsesverktøy, som [translate-shell](https://github.com/soimort/translate-shell).

Disse støtter ikke gjenkjenning av filendringer og oversetter kun endrede filer for å redusere kostnader og øke effektiviteten.

## Oversettelsen kan redigeres, og maskinoversettelse vil ikke overskrive eksisterende manuelle modifikasjoner

Oversettelsen er redigerbar.

Ved å endre originalteksten og deretter oversette den igjen, vil ikke de manuelle endringene i oversettelsen bli overskrevet (med mindre originalteksten er endret).

## Beste maskinoversettelse

Vi har utviklet en ny generasjon oversettelsesteknologi som kombinerer fordelene ved tradisjonelle maskinoversettelsesmodeller og store språkmodeller, noe som gir nøyaktige, flytende og elegante oversettelser.

Blindtester viser at vår oversettelseskvalitet er betydelig bedre enn konkurrentene.

For å oppnå samme kvalitet er mengden manuell redigering som kreves av Google Translate og `ChatGPT` henholdsvis `2.67` ganger og `3.15` ganger større enn vår.

## <a rel=id href="#price" id="price"></a> High Yield Pricing

|                                                                                   | USD/million ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klikk her for å autorisere og automatisk følge i18n.site github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **motta bonus $50** .

Merk: Fakturerbare tegn = [Unicode-tegn i kildefilen](https://en.wikipedia.org/wiki/Unicode) × antall oversettelsesspråk

## Støtte Oversettelse `YAML`

Verktøyet oversetter bare ordbokverdiene til `YAML` , ikke ordboknøklene.

Basert på `YAML` oversettelse kan du enkelt bygge internasjonale løsninger for ulike programmeringsspråk.

## Støtte Oversettelse `HOGO` Header Konfigurasjon

Støtter header-konfigurasjon for [HOGO](https://github.com/gohugoio/hugo) type statisk blogg, og oversetter kun feltene `title`, `summary`, `brief` og `description`.

## Ikke oversett variabelnavn

`Markdown` brukes til e-postmaler, `YAML` som språkfilkonfigurasjon, med variable parametere (f.eks: `recharge ${amount}` er mottatt)

Variabelnavn som `${varname}` oversettes ikke som engelske ord.

## Optimalisert oversettelse for Kina, Japan og Korea

### Når oversatt til engelsk, settes den første bokstaven i tittelen automatisk til stor

Kina, Japan og Korea har ingen store eller små bokstaver, mens engelske titler vanligvis setter første bokstav i stor bokstav

`i18` kan gjenkjenne tittelen i `MarkDown` , og vil automatisk skrive den første bokstaven med stor bokstav når du oversetter til et språk som skiller mellom store og små bokstaver.

For eksempel vil `为阅读体验而优化` bli oversatt til `Optimized for Reading Experience`.

### Ikke oversett engelske termer i kinesisk, japansk eller koreansk tekst

Dokumenter fra Kina, Japan og Korea inneholder ofte mange engelske termer.

Maskinoversettelse av kinesisk, japansk eller koreansk til et annet språk oversetter ofte termer sammen med teksten

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Hvis du bruker Google eller DeepL, oversetter de ofte feil engelske termer som skulle vært uendret (for eksempel på japansk og fransk).

### Google Translate

Oversatt til japansk: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Oversatt til fransk: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` oversettes til `faucon`, `Llama` oversettes til `lama`. Som egennavn bør de ikke oversettes.

![](//p.3ti.site/1720199451.avif)

### DeepL Oversettelse

Oversatt til japansk: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL Oversettelse av ovenstående til fransk (også endrer riktige navn og legger til merkelige `...`):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Oversettelse

`i18`'s oversettelse vil gjenkjenne engelske termer i kinesisk, japansk eller koreansk tekst og la dem være uendret.

For eksempel er det japanske oversettelsesresultatet:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Den franske oversettelsen er:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Bare når det er et mellomrom mellom det engelske ordet og den kinesiske, japanske eller koreanske teksten, eller når det engelske ordet er lengre enn én bokstav, vil det bli sett på som et begrep.

For eksempel: `C罗` vil bli oversatt til `Cristiano Ronaldo`.

## Kan kombineres med `i18n.site` for å bygge flerspråklige nettsteder

`i18` er integrert i kommandolinjeverktøyet for flerspråklig nettstedbygging [`i18n.site`](/i18n.site) .

Se dokumentasjonen til [`i18n.site`](/i18n.site) for detaljer.

## Kode er åpen kildekode

Klienten er fullstendig åpen kildekode, og 90 % av serverkoden er åpen [kildekode](/i18n.site/src).

Vi søker frivillige til å bidra med åpen kildekode-utvikling og korrekturlesing av oversettelser.

Hvis du er interessert, [→ fyll ut profilen din her](https://ggl.link/i18n) og bli med i [e-postlisten](https://groups.google.com/u/2/g/i18n-site) for kommunikasjon.

## Hold kontakten

<button onclick="mailsub()">Abonner på e-postvarsler for produktoppdateringer her</button> og <button onclick="webpush()">aktiver nettleser-varsler</button>, vi vil informere deg om produktoppdateringer.

Følg våre sosiale kontoer [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).
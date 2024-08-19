# Produktegenskaber

`i18` er et kommandolinjeværktøj til oversættelse af Markdown & Yaml.

## Kan bevare Markdown-formatet perfekt

Støtter oversættelse af Markdown-tabeller uden at beskadige formatet; oversætter ikke ord i matematiske formler eller links.

`<pre>` HTML Markdown `MarkDown` HTML `<code>`

## Kan genkende matematiske formler og springe oversættelsen over

Matematiske formler genkendes og springes over for oversættelse.

For hvordan man skriver matematiske formler, se venligst [Github om at skrive matematiske udtryk](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Kan oversætte kommentarer i kodestykker

Inline kode og kodestykker oversættes ikke, men kommentarer i koden kan oversættes.

Oversættelseskommentarer skal angive sproget efter ` ``` `, f.eks.: ` ```rust `.

I øjeblikket understøtter den oversættelse af kommentarer i `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [og andre sprog](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Hvis du har brug for et sprog, der ikke er understøttet, bedes du [kontakte os](https://groups.google.com/g/i18n-site).

## Kommandolinjefrendlig

Der findes mange [tunge værktøjer](https://www.capterra.com/translation-management-software), der kan håndtere oversættelsesdokumenter.

For programmører, der er fortrolige med `git`, `vim` og `vscode`, vil brugen af disse værktøjer til at redigere dokumenter og administrere versioner øge læringsomkostningerne.

`KISS` (`Keep It Simple, Stupid`) principets tilhængere ser virksomhedsløsninger som synonymt med at være komplekse, ineffektive og svære at bruge.

Oversættelse bør være som at indtaste en kommando og udføre den med et enkelt klik, uden komplekse miljøafhængigheder.

Undlad at tilføje enheder, medmindre det er nødvendigt.

## Ingen ændringer, ingen oversættelse

Der findes også andre kommandolinjeoversættelsesværktøjer, såsom [translate-shell](https://github.com/soimort/translate-shell).

Disse værktøjer understøtter dog ikke genkendelse af filændringer og oversætter kun ændrede filer for at reducere omkostninger og øge effektiviteten.

## Oversættelsen kan redigeres, og maskinoversættelse vil ikke overskrive eksisterende ændringer

Oversættelsen kan redigeres.

Rediger den originale tekst og maskinoversæt den igen; de manuelle ændringer af oversættelsen vil ikke blive overskrevet (hvis den oprindelige tekst ikke er ændret).

## Den bedste maskinoversættelseskvalitet

Vi har udviklet en ny generation af oversættelsesteknologi, der kombinerer traditionelle maskinoversættelsesmodeller og store sprogmodeller for at skabe præcise, glatte og elegante oversættelser.

Blindtestresultater viser, at vores oversættelseskvalitet er væsentligt bedre sammenlignet med lignende tjenester.

For at opnå samme kvalitet kræver Google Translate og `ChatGPT` henholdsvis `2.67` og `3.15` gange så meget manuel redigering som vores løsning.

## <a rel=id href="#price" id="price"></a> Meget konkurrencedygtige priser

|                                                                                   | USD/million ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Klik her for at godkende og automatisk i18n.site 's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **modtage bonus $50** .

Bemærk: Fakturerbare tegn = kildefilens [unicode-tegn](https://en.wikipedia.org/wiki/Unicode) × antallet af oversættelsessprog

## Støtter oversættelse af `YAML`

Værktøjet oversætter kun værdierne i `YAML`-ordbøgerne, ikke nøglerne.

Baseret på `YAML` oversættelse kan du nemt bygge internationale løsninger til forskellige programmeringssprog.

## Understøtter oversættelse af `HOGO`'s header-konfigurationer

Støtter oversættelse af header-konfiguration for [HOGO](https://github.com/gohugoio/hugo) statiske blogs, kun oversætter `title`, `summary` og `description` felterne.

## Oversætter ikke variabelnavne

`Markdown` bruges som e-mail-skabelon, `YAML` som sprogfilkonfiguration, og der vil være variable parametre (f.eks. genopladning `${amount}` er modtaget).

`${varname}`-lignende variabelnavne oversættes ikke.

## Optimeret oversættelse for Kina, Japan og Korea

### Når oversat til engelsk, skrives titelens første bogstav automatisk med stort

Kina, Japan og Korea har ikke store og små bogstaver, men engelske titler følger konventionen med stort første bogstav.

`i18` kan genkende titler i `Markdown` og vil automatisk skrive det første bogstav med stort ved oversættelse til sprog, der skelner mellem store og små bogstaver.

For eksempel vil `为阅读体验而优化` blive oversat til `Optimized for Reading Experience`.

### Oversætter ikke engelske termer i kinesisk, japansk og koreansk tekst

Dokumenter fra Kina, Japan og Korea indeholder ofte mange engelske termer.

Maskinoversættelse af kinesisk, japansk og koreansk tekst til ikke-engelske sprog vil ofte oversætte termer sammen

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Hvis du bruger Google eller DeepL, vil de begge forkert oversætte engelske termer, der skulle forblive uændrede (tag japansk og fransk som eksempler).

### Google Translate

Oversat til japansk: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Oversat til fransk: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` oversat til `faucon`, `Llama` oversat til `lama`. Som egennavne bør de ikke oversættes.

![](//p.3ti.site/1720199451.avif)

### DeepL Translate

Oversat til japansk: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL oversættelse af ovenstående til fransk (også omskriver de korrekte navne og tilføjer ulige `... `)

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Translate

`i18`'s oversættelse genkender engelske termer i kinesisk, japansk og koreansk tekst og efterlader dem uændrede.

For eksempel er det japanske oversættelsesresultat:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Den franske oversættelse er:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Kun når det engelske ord og den kinesiske, japanske eller koreanske tekst er adskilt af et mellemrum eller det engelske ord er længere end 1 tegn, vil ordet blive betragtet som et udtryk.

For eksempel: `C罗` vil blive oversat til `Cristiano Ronaldo`.

## Kan kombineres med `i18n.site` for at bygge et flersproget websted

`i18` er integreret i kommandolinjeværktøjet til opbygning af flere sprog til websteder [`i18n.site`](/i18n.site) .

Se dokumentationen til [`i18n.site`](/i18n.site) for detaljer.

## Kode er开源

Klienten er fuldstændig开源, og 90 % af serverkoden er开源. [Klik her for at se koden](/i18n.site/src).

Vi søger frivillige til at deltage i udviklingen af开源 kode og korrekturlæsning af oversatte tekster.

Hvis du er interesseret, så [→ Klik her for at udfylde din profil](https://ggl.link/i18n) og tilmeld dig [mailinglisten](https://groups.google.com/u/2/g/i18n-site) for kommunikation.

## Hold kontakten

<button onclick="mailsub()">Klik her for at abonnere på produktupdates via e-mail</button> og <button onclick="webpush()">aktiver browser-push</button>. Vi vil informere dig, når der er produktupdates.

Følg også vores sociale konti [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).
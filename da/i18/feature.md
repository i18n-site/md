# Produktegenskaber

`i18` er kommandolinjeværktøjet til oversættelse Markdown & Yaml

## Kan Perfekt Opretholde Formatet Af Markdown

Understøtter oversættelse af Markdown-tabeller uden at beskadige formatet; oversætter ikke ord i matematiske formler eller links.

Understøtter oversættelse af mixed HTML , indholdet i tags `<pre>` og `<code>` indlejret i HTML `MarkDown` er Markdown oversat

## Kan Genkende Matematiske Formler Og Springe Oversættelse Over

Matematiske formler genkendes, og oversættelse springes over.

For hvordan man skriver matematiske formler, se venligst [" Github Om at skrive matematiske udtryk"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Evne Til at Oversætte Kommentarer I Kodestykker

Inline kode og kodestykker oversættes ikke, men kommentarer i koden kan oversættes.

Oversættelseskommentarer skal angive sproget efter ` ``` ` , f.eks : ` ```rust ` .

I øjeblikket understøtter den annotationsoversættelse på `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [og andre sprog](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Hvis du vil oversætte alle ikke-engelske tegn i koden, skal du markere kodesegmentet med ` ```i18n ` .

Hvis det programmeringssprog, du har brug for, ikke er tilgængeligt, bedes du [kontakte os](https://groups.google.com/g/i18n-site) .

## Kommandolinje Venlig

Der er mange [tunge værktøjer](https://www.capterra.com/translation-management-software) til rådighed til at administrere oversættelsesdokumenter.

For programmører, der er fortrolige med `git` , `vim` og `vscode` , vil brugen af disse værktøjer til at redigere dokumenter og administrere versioner uden tvivl øge læringsomkostningerne.

`KISS` ( `Keep It Simple, Stupid` ) Blandt principtroende er løsninger på virksomhedsniveau synonyme med at være besværlige, ineffektive og svære at bruge.

Oversættelse skal udføres ved at indtaste kommandoer og fuldføre den med et enkelt klik. Der bør ikke være nogen komplekse miljøafhængigheder.

Tilføj ikke enheder, medmindre det er nødvendigt.

## Ingen Ændring, Ingen Oversættelse

Der er også nogle kommandolinje-oversættelsesværktøjer, såsom [translate-shell](https://github.com/soimort/translate-shell)

De understøtter dog ikke identifikation af filændringer og oversætter kun ændrede filer for at reducere omkostningerne og øge effektiviteten.

## Oversættelsen Kan Redigeres, Og Maskinoversættelse Vil Ikke Overskrive Eksisterende Ændringer.

Oversættelsen kan redigeres.

Rediger den originale tekst og maskinoversæt den igen, de manuelle ændringer af oversættelsen vil ikke blive overskrevet (hvis dette afsnit i den originale tekst ikke er blevet ændret).

## Maskinoversættelse I Bedste Kvalitet

Vi har udviklet en ny generation af oversættelsesteknologi, der kombinerer de tekniske fordele ved traditionelle maskinoversættelsesmodeller og store sprogmodeller for at gøre oversættelser nøjagtige, glatte og elegante.

Blindtest viser, at vores oversættelseskvalitet er væsentligt bedre sammenlignet med lignende tjenester.

For at opnå samme kvalitet er mængden af manuel redigering, der kræves af Google Translate og `ChatGPT` henholdsvis `2.67` og `3.15` gange vores.

## <a rel=id href="#price" id="price"></a> Yderst konkurrencedygtige priser

|                                                                                   | USD/million ord |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klik her for at godkende og automatisk i18n.site 's github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **modtage bonus $50** .

Bemærk: Antallet af fakturerbare tegn = [antallet af unicode](https://en.wikipedia.org/wiki/Unicode) i kildefilen × antallet af sprog i oversættelsen

## Støtte Oversættelse `YAML`

Værktøjet oversætter kun ordbogsværdierne til `YAML` , ikke ordbogsnøglerne.

Baseret på `YAML` oversættelse kan du nemt bygge internationale løsninger til forskellige programmeringssprog.

## Understøtter Oversættelse `HOGO` Header-Konfiguration

Understøtter header-konfigurationen af [HOGO](https://github.com/gohugoio/hugo) statisk blog og oversætter kun felterne `title` , `summary` , `brief` og `description` .

## Oversæt Ikke Variabelnavne

`Markdown` bruges som e-mail-skabelon, `YAML` bruges som sprogfilkonfiguration, og der vil være variable parametre (for eksempel: genopladning `${amount}` er modtaget).

Variablenavne som `${varname}` vil ikke blive betragtet som engelske oversættelser.

## Oversættelsesoptimering Til Kina, Japan Og Korea

### Når Det Oversættes Til Engelsk, Skrives Det Første Bogstav I Titlen Automatisk Med Stort.

Kina, Japan og Korea har ikke store og små bogstaver, men konventionen for engelske titler er at skrive det første bogstav med stort.

`i18` kan genkende titlen i `MarkDown` og vil automatisk skrive det første bogstav med stort ved oversættelse til et sprog, der skelner mellem store og små bogstaver.

For eksempel vil `为阅读体验而优化` blive oversat til `Optimized for Reading Experience` .

### Engelske Termer På Kinesisk, Japansk, Koreansk Og Kinesisk Oversættes Ikke

Dokumenter fra Kina, Japan og Korea indeholder ofte mange engelske termer.

Maskinoversættelse af kinesiske, japanske og koreanske sprog er blevet et ikke-engelsk sprog, og termer oversættes ofte sammen, såsom følgende kinesiske sætning:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Hvis du bruger Google eller DeepL, oversætter de begge forkert engelske termer, der skal forblive originale (tag japansk og fransk som eksempler).

### Google Oversæt

Oversat `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japansk :

![](//p.3ti.site/1720199391.avif)

Oversat `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` fransk :

`Falcon` er oversat til `faucon` og `Llama` er oversat til `lama` . Som egennavne bør de ikke oversættes.

![](//p.3ti.site/1720199451.avif)

### DeepL Oversættelse

Oversat `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japansk :

![](//p.3ti.site/1720199550.avif)

DeepL Oversættelse af ovenstående til fransk (omskriver også de rigtige navne og tilføjer ulige `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Oversættelse

`i18` 's oversættelse genkender engelske termer i kinesiske, japanske og koreanske dokumenter og efterlader termerne intakte.

For eksempel er det japanske oversættelsesresultat ovenfor:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Den franske oversættelse er:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Kun når der er et mellemrum mellem det engelske ord og den kinesiske, japanske og koreanske tekst eller den engelske længde er større end 1, vil ordet blive betragtet som et udtryk.

For eksempel: `C罗` vil blive oversat til `Cristiano Ronaldo` .

## Kan Kombineres Med Mere End `i18n.site` Sprog for at Bygge en Hjemmeside

`i18` er integreret i kommandolinjeværktøjet til opbygning af flere sprog til websteder [`i18n.site`](/i18n.site) .

Se dokumentationen til [`i18n.site`](/i18n.site) for detaljer.

## Kode Open Source

Klienten er fuldstændig åben kilde, og 90 % af koden er åben kilde. [Klik her for at se kildekoden](/i18n.site/c/src) .

Vi søger frivillige til at deltage i udviklingen af open source-kode og korrekturlæsning af oversatte tekster.

Hvis du er interesseret, så [→ Klik her for at udfylde din profil](https://ggl.link/i18n) og tilmeld dig [mailinglisten](https://groups.google.com/u/2/g/i18n-site) for kommunikation.

## Holde Kontakten

<button onclick="mailsub()">Klik venligst på denne e-mail for at abonnere på produktopdateringer</button> og <button onclick="webpush()">aktivere browser-push</button> . Vi giver dig besked, når der foretages produktopdateringer.

/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) til at følge vores sociale konti [X.COM: @i18nSite](https://x.com/i18nSite)
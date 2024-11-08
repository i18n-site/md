# Faq

## Tulkojuma Rindu Pievienošana Vai Dzēšana, Kā Rezultātā Rodas Neskaidrības Tulkojumā

> [!WARN]
> Atcerieties, **ka rindu skaitam tulkojumā ir jāatbilst oriģinālā teksta rindiņām** .
> Tas nozīmē, ka manuāli pielāgojot tulkojumu, **nepievienojiet un nedzēsiet tulkojuma rindiņas** , pretējā gadījumā tiks izjauktas kartēšanas attiecības starp tulkojumu un oriģinālo tekstu.

Ja nejauši pievienojat vai izdzēšat rindiņu, radot neskaidrības, lūdzu, pirms modifikācijas atjaunojiet tulkojumu versijā, vēlreiz palaidiet `i18` tulkojumu un atkārtoti saglabājiet pareizo kartējumu kešatmiņā.

Tulkojuma un oriģinālā teksta kartēšana ir saistīta ar pilnvaru. Izveidojiet jaunu marķieri [i18n.site/token](//i18n.site/token) izdzēsiet `.i18h/hash` un tulkojiet vēlreiz, lai notīrītu mulsinošo kartējumu (taču tādējādi tiks zaudēti visi tulkojuma manuālie pielāgojumi).

## `YAML` Kā Izvairīties : `HTML` Saites Pārvēršanas Par `Markdown`

Vērtība `YAML` tulkošanai tiek uzskatīta par `MarkDown` .

Dažreiz konvertēšana no `HTML` → `MarkDown` nav tā, ko mēs vēlamies, piemēram, `<a href="/">Home</a>` tiek pārveidots par `[Home](/)` .

Pievienojot atzīmei `a` jebkuru atribūtu, kas nav `href` , piemēram `<a class="A" href="/">Home</a>` , var izvairīties no šīs konversijas.

## `./i18n/hash` Failu Konflikti Tālāk

Izdzēsiet konfliktējošos failus un atkārtoti palaidiet `i18` tulkojumu.
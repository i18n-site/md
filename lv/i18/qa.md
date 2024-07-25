# Izplatīta Problēma

## Tulkojuma Rindu Pievienošana Vai Dzēšana, Kā Rezultātā Rodas Neskaidrības Tulkojumā

Atcerieties, **ka rindu skaitam tulkojumā ir jāatbilst oriģinālā teksta rindiņām** .

Tas nozīmē, ka manuāli pielāgojot tulkojumu, **nepievienojiet un nedzēsiet tulkojuma rindiņas** , pretējā gadījumā tiks izjauktas kartēšanas attiecības starp tulkojumu un oriģinālo tekstu.

Ja nejauši pievienojat vai izdzēšat rindiņu, radot neskaidrības, lūdzu, atjaunojiet tulkojumu tajā versijā, kas bija pirms modifikācijas, palaidiet tulkojumu `i18` un atkārtoti saglabājiet pareizo kartējumu kešatmiņā.

Kartēšana starp tulkojumu un oriģinālo tekstu ir saistīta ar marķieri. Izveidojiet jaunu `.i18h/hash` [i18n.site/token](//i18n.site/token)

## : Novērst Saites `HTML` Konvertēšanu `Markdown` `YAML`

Vērtība `YAML` tulkošanai tiks uzskatīta par `MarkDown` .

Dažreiz `HTML` → `MarkDown` konvertēšana nav tas, ko mēs vēlamies, piemēram, `<a href="/">Home</a>` tiek pārveidots par `[Home](/)` .

Pievienojiet `a` jebkuru atribūtu, izņemot `href` , piemēram, `<a class="A" href="/">Home</a>` , lai izvairītos no šīs konversijas.

## `./I18n/Hash` Šie Faili Ir Pretrunā

Izdzēsiet konfliktējos failus un palaidiet vēlreiz `i18`

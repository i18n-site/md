# Faq

## Att lägga till eller ta bort rader i översättningen, vilket leder till förvirring i översättningen

Kom ihåg, **översättningens rader måste matcha originaltextens rader**.

Det innebär att vid manuell justering av översättningen, **försök inte lägga till eller ta bort rader** i översättningen, annars kommer översättningens och originaltextens mappningsförhållande att förvirras.

Om du av misstag lägger till eller tar bort en rad, vilket leder till förvirring, återställ översättningen till den tidigare versionen, kör `i18`-översättningen igen och cachar den korrekta mappningen.

Översättningens och originaltextens mappning är bunden till en token. Skapa en ny token på [i18n.site/token](//i18n.site/token), ta bort `.i18h/hash`, och översätt igen för att rensa bort den förvirrade mappningen (men detta kommer att innebära att alla manuella justeringar av översättningen förloras).

## `YAML`: Hur man undviker att länkar i `HTML` konverteras till `Markdown`

`YAML`-värden behandlas som `Markdown` vid översättning.

Ibland är konverteringen från `HTML` till `Markdown` inte önskvärd, till exempel om `<a href="/">Home</a>` konverteras till `[Home](/)`.

Lägg till vilket som helst annat attribut än `href` till `a`-taggen, till exempel `<a class="A" href="/">Home</a>`, för att undvika denna konvertering.

## Filkonflikter under `./i18n/hash`

Ta bort de konflikterande filerna och kör `i18`-översättningen igen.
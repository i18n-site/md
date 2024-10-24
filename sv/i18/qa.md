# Faq

## Lägga Till Eller Ta Bort Rader I Översättningen, Vilket Resulterar I Förvirring I Översättningen

> [!WARN]
> Kom ihåg **att antalet rader i översättningen måste motsvara raderna i originaltexten** .
> Det vill säga, när du manuellt justerar översättningen, **lägg inte till eller ta bort rader i översättningen** , annars kommer mappningsförhållandet mellan översättningen och originaltexten att störas.

Om du av misstag lägger till eller tar bort en rad, vilket skapar förvirring, vänligen återställ översättningen till versionen före ändring, kör `i18` översättning igen och cachelagra den korrekta mappningen igen.

Mappningen mellan översättningen och originaltexten är bunden till token. Skapa en ny token i [i18n.site/token](//i18n.site/token) ta bort `.i18h/hash` , och översätt igen för att rensa den förvirrande mappningen (men detta kommer att göra att alla manuella justeringar av översättningen går förlorade).

## `YAML` : Hur Man Undviker Att Länk `HTML` Konverteras Till `Markdown`

Ett värde på `YAML` behandlas som `MarkDown` för översättning.

Ibland är omvandlingen från `HTML` → `MarkDown` inte vad vi vill, som att `<a href="/">Home</a>` konverteras till `[Home](/)` .

Om du lägger till något annat attribut än `href` till `a` -taggen, till exempel `<a class="A" href="/">Home</a>` , kan denna omvandling undvikas.

## `./i18n/hash` Filkonflikter Nedan

Ta bort de motstridiga filerna och kör `i18` översättningen igen.
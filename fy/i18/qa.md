# Faq

## It Tafoegjen of Wiskjen Fan Rigels Fan 'e Oersetting, Wat Resulteart Yn Betizing Yn 'e Oersetting

> [!WARN]
> Unthâld, **it oantal rigels yn 'e oersetting moat oerienkomme mei de rigels yn 'e oarspronklike tekst** .
> Dat wol sizze, by it manuell oanpassen fan de oersetting, **foegje gjin rigels fan de oersetting ta of wiskje** , oars wurdt de mappingsrelaasje tusken de oersetting en de oarspronklike tekst steurd.

As jo per ongeluk in rigel tafoegje of wiskje, wêrtroch betizing ûntstiet, asjebleaft de oersetting weromsette nei de ferzje foar wiziging, útfiere `i18` oersetting nochris, en de juste mapping opnij cache.

De mapping tusken de oersetting en de orizjinele tekst is bûn oan it token Meitsje in nij token yn [i18n.site/token](//i18n.site/token) wiskje `.i18h/hash` , en oersette nochris om de betiizjende mapping te wiskjen (mar dit sil derfoar soargje dat alle hânmjittige oanpassingen fan 'e oersetting ferlern gean).

## `YAML` : Hoe Kinne Jo Foarkomme Dat Keppeling `HTML` Wurdt Omboud Nei `Markdown`

In wearde fan `YAML` wurdt behannele as `MarkDown` foar oersetting.

Soms is de konverzje fan `HTML` → `MarkDown` net wat wy wolle, lykas `<a href="/">Home</a>` wurdt omsetten nei `[Home](/)` .

It tafoegjen fan in oare attribút dan `href` oan 'e `a` tag, lykas `<a class="A" href="/">Home</a>` , kin dizze konverzje foarkomme.

## `./i18n/hash` Triem Konflikten Hjirûnder

Wiskje de tsjinstridige bestannen en fiere `i18` oersetting wer út.
# Faq

## Pagdaragdag O Pagtanggal Ng Mga Linya Ng Pagsasalin, Na Nagreresulta Sa Pagkalito Sa Pagsasalin

> [!WARN]
> Tandaan, **ang bilang ng mga linya sa pagsasalin ay dapat na tumutugma sa mga linya sa orihinal na teksto** .
> Ibig sabihin, kapag manu-manong inaayos ang pagsasalin, **huwag magdagdag o magtanggal ng mga linya ng pagsasalin** , kung hindi ay magugulo ang relasyon sa pagmamapa sa pagitan ng pagsasalin at ng orihinal na teksto.

Kung hindi mo sinasadyang magdagdag o magtanggal ng linya, na nagdudulot ng kalituhan, mangyaring ibalik ang pagsasalin sa bersyon bago ang pagbabago, patakbuhin muli `i18` pagsasalin, at muling i-cache ang tamang pagmamapa.

Ang pagmamapa sa pagitan ng pagsasalin at orihinal na teksto ay nakatali sa token Lumikha ng bagong token sa [i18n.site/token](//i18n.site/token) tanggalin `.i18h/hash` , at isalin muli upang i-clear ang nakakalito na pagmamapa (ngunit ito ay magiging sanhi ng pagkawala ng lahat ng manu-manong pagsasaayos sa pagsasalin).

## `YAML` : Paano Maiiwasan Ang Link `HTML` Na Ma-Convert Sa `Markdown`

Ang isang halaga ng `YAML` ay itinuturing bilang `MarkDown` para sa pagsasalin.

Minsan ang conversion mula sa `HTML` → `MarkDown` ay hindi ang gusto natin, tulad ng `<a href="/">Home</a>` na na-convert sa `[Home](/)` .

Ang pagdaragdag ng anumang attribute maliban sa `href` sa `a` tag, gaya ng `<a class="A" href="/">Home</a>` , ay maaaring maiwasan ang conversion na ito.

## `./i18n/hash` File Sa Ibaba

Tanggalin ang mga magkasalungat na file at muling patakbuhin ang `i18` pagsasalin.
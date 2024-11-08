# Versió Del Projecte

Preneu com a exemple el projecte de demostració:

`en/demo2/v` és el número de versió actual del projecte, que es mostrarà a la dreta del nom del projecte al contorn de la barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aquí `en/` és el codi d'idioma corresponent a l'idioma font de la traducció configurat per `.i18n/conf.yml` .

Si la vostra llengua d'origen no és l'anglès, el fitxer `v` s'ha de col·locar al directori del projecte de la vostra llengua d'origen.

La possibilitat de navegar per versions històriques de documents està en desenvolupament.

Es recomana modificar el número de versió del document només quan es publiquin actualitzacions importants (com ara `v1` , `v2` ) per evitar que massa números de versió provoquin desordres a les pàgines indexades pels motors de cerca.

## Utilitzeu Fitxers `v` Buits Per Dividir Els Índexs De Fitxers De Diferents Projectes

Al projecte de demostració, a més de `en/demo2/v` , també podeu veure que hi ha `v` fitxers buits als directoris `en/blog` i `en/demo1` .

No es mostrarà un `v` buit al contorn de la barra lateral, però sempre que hi hagi un fitxer `v` , es generarà un índex independent per als fitxers del directori i subdirectoris.

En dividir els índexs de diferents projectes, podeu evitar l'accés lent causat per la càrrega de l'índex de tots els fitxers de tot el lloc alhora.

Per exemple, el fitxer d'índex corresponent a `blog` al projecte de demostració és [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
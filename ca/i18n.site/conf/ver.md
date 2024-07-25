# Versió Del Projecte

Preneu com a exemple el projecte de demostració:

`en/demo2/v` és el número de versió actual del projecte, que es mostrarà a la dreta del nom del projecte al contorn de la barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aquí `en/` el codi d'idioma corresponent a l'idioma font de la traducció `.i18n/conf.yml` .

Si la vostra llengua d'origen no és l'anglès, el fitxer `v` s'ha de col·locar al directori del projecte de la vostra llengua d'origen. 

La possibilitat de navegar per versions històriques de documents està en desenvolupament.

Es recomana modificar només el número de versió del document quan es publiquen actualitzacions importants (com ara `v1` , `v2` ) per evitar desordenar les pàgines indexades pels motors de cerca a causa de massa números de versió.

## Utilitzeu Fitxers `v` Per Dividir Índexs De Fitxers Per a Diferents Projectes

Al projecte de demostració, a més de `en/demo2/v` , també podeu veure que els continguts dels directoris `en/blog` i `en/demo1` estan buits `v` fitxers.

Buit `v` no es mostrarà a l'esquema de la barra lateral, però mentre el fitxer `v` existeixi, es generarà un índex independent per als fitxers del directori i subdirectoris.

En dividir els índexs de diferents projectes, podeu evitar l'accés lent causat per la càrrega de l'índex de tots els fitxers de tot el lloc alhora.

Per exemple, al projecte de demostració `blog` el fitxer d'índex corresponent [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :


# Característica Del Producte

## Traducció `I18`

El programa té una traducció `i18` , consulteu [➔ `i18`](/i18) per a un ús específic.

## Coincideix Automàticament Amb L'idioma Del Navegador

L'idioma predeterminat del lloc web coincidirà automàticament amb l'idioma del navegador.

Després que l'usuari canviï d'idioma manualment, es recordarà l'elecció de l'usuari.

Codi relacionat : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Adaptació Del Terminal Mòbil

També hi ha una experiència de lectura perfecta al telèfon mòbil.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta disponibilitat frontal

`i18n.site` De manera predeterminada, el contingut del lloc es publicarà a `npmjs.com` , amb l'ajuda de [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) i diversos continguts `CDN` carregats a `npm` .

Sobre aquesta base, es van afegir fonts miralls de la Xina continental per permetre als usuaris xinesos tenir un accés estable i aconseguir **una alta disponibilitat frontal** .

El principi és: interceptar la sol·licitud amb l'ajuda de [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , si la sol·licitud falla, torneu-la a provar en un altre `CDN` i habiliteu de manera adaptativa l'estació d'origen de resposta més ràpida com a font de càrrega predeterminada.

Codi relacionat : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Aplicació D'una Sola Pàgina, Càrrega Extremadament Ràpida

El lloc web adopta una arquitectura d'aplicació d'una sola pàgina, sense actualització quan es canvia de pàgina i amb una càrrega extremadament ràpida.

## Optimitzat Per a L'experiència Lectora

### Estil Ben Dissenyat

> La bellesa de la senzillesa s'interpreta perfectament en el disseny web d'aquest lloc web.
> Abandona la decoració innecessària i presenta el contingut en estat pur.
> Com un poema preciós, tot i que és breu, toca el cor de la gent.

<p style="text-align:right">── I18N.SITE</p>

[➔ Feu clic aquí per veure una llista d'estils](/i18n.site/md/styl) .

### Carregueu Tipus De Lletra en Línia, Admet El Xinès

De manera predeterminada, [les fonts rectangulars variables d'Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) altres fonts en línia estan habilitades a la pàgina web per unificar l'experiència de lectura dels usuaris en diferents plataformes.

Al mateix temps, per millorar la velocitat de càrrega, els tipus de lletra es tallen segons les estadístiques de freqüència de paraules.

Codi relacionat : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### La Navegació Superior S'amaga Automàticament

Desplaceu-vos cap avall i la navegació superior s'amagarà automàticament.

Desplaceu-vos cap amunt i tornarà a aparèixer la navegació oculta.

S'esvairà quan el ratolí no es mogui.

Hi ha un botó de pantalla completa a l'extrem superior dret de la barra de navegació per crear una experiència de lectura de documents immersiva.

### Esquema Sincronitzat Destacat Del Capítol Actual

Quan us desplaceu pel contingut de la dreta, el contorn de l'esquerra ressaltarà simultàniament el capítol que s'està llegint.

## Detalls Genials

### Efectes Del Ratolí

Passeu el ratolí per sobre del botó de la part dreta de la navegació superior per veure efectes especials fantàstics.

### El Petit `404`

`404` ha un petit fantasma flotant a la pàgina, els seus ulls es mouran amb el ratolí, [➔ Feu clic aquí per veure](/404) ,

## Codi De Codi Obert

[El codi és de codi obert](/i18n.site/src) Si esteu interessats a participar en el desenvolupament, si us plau, presenteu-vos a [la llista de correu](//groups.google.com/u/2/g/i18n-site) .

Hi ha molts petits requisits que són importants però no urgents. L'equip de desenvolupament assignarà tasques de pràctica segons la tecnologia en què us conegueu i millorarà els documents de desenvolupament mentre assigna els requisits.


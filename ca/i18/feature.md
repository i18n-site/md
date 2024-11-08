# Característiques Del Producte

`i18` és l'eina de línia d'ordres per a la traducció Markdown & Yaml

## Pot Mantenir Perfectament El Format De Markdown

Admet la traducció de taules de Markdown sense danyar el format, no tradueix paraules en fórmules matemàtiques o enllaços.

Admet la traducció de mixed HTML , el contingut de les etiquetes `<pre>` i `<code>` incrustat a HTML `MarkDown` no Markdown tradueix

## Pot Reconèixer Fórmules Matemàtiques I Saltar La Traducció

Es reconeixen les fórmules matemàtiques i s'omet la traducció.

Per saber com escriure fórmules matemàtiques, consulteu [" Github Sobre l'escriptura d'expressions matemàtiques"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Possibilitat De Traduir Comentaris en Fragments De Codi

El codi en línia i els fragments de codi no es tradueixen, però els comentaris del codi es poden traduir.

Els comentaris de traducció han d'indicar l'idioma després de ` ``` ` , com : ` ```rust ` .

Actualment, admet la traducció d'anotacions en `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [i altres idiomes](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Si voleu traduir tots els caràcters no anglesos del codi, marqueu el segment de codi amb ` ```i18n ` .

Si el llenguatge de programació que necessiteu no està disponible, poseu-vos [en contacte amb nosaltres](https://groups.google.com/g/i18n-site) .

## Línia D'ordres Amigable

Hi ha moltes [eines pesades](https://www.capterra.com/translation-management-software) disponibles per gestionar documents de traducció.

Per als programadors familiaritzats amb `git` , `vim` i `vscode` , l'ús d'aquestes eines per editar documents i gestionar versions, sens dubte, augmentarà el cost de l'aprenentatge.

`KISS` ( `Keep It Simple, Stupid` ) Entre els principals creients, les solucions a nivell empresarial són sinònim de ser feixugues, ineficients i difícils d'utilitzar.

La traducció s'ha de fer introduint ordres i completant-la amb un sol clic. No hi hauria d'haver dependències complexes de l'entorn.

No afegiu entitats tret que sigui necessari.

## Sense Modificació, Sense Traducció

També hi ha algunes eines de traducció de línia d'ordres, com ara [translate-shell](https://github.com/soimort/translate-shell)

Tanmateix, no admeten la identificació de modificacions de fitxers i només tradueixen fitxers modificats per reduir costos i augmentar l'eficiència.

## La Traducció Es Pot Editar I La Traducció Automàtica No Sobreescriurà Les Modificacions Existents.

La traducció és editable.

Modifiqueu el text original i torneu a traduir-lo automàticament, les modificacions manuals a la traducció no seran sobreescrites (si aquest paràgraf del text original no s'ha modificat).

## Traducció Automàtica De Millor Qualitat

Hem desenvolupat una nova generació de tecnologia de traducció que combina els avantatges tècnics dels models tradicionals de traducció automàtica i els grans models d'idiomes per fer que les traduccions siguin precises, suaus i elegants.

Les proves a cegues mostren que la nostra qualitat de traducció és significativament millor en comparació amb serveis similars.

Per aconseguir la mateixa qualitat, la quantitat d'edició manual requerida per Google Translate i `ChatGPT` és `2.67` i `3.15` vegades la nostra, respectivament.

## <a rel=id href="#price" id="price"></a> Preus extremadament competitius

|                                                                                   | USD/milió de paraules |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Feu clic aquí per autoritzar i seguir i18n.site la biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **rebre una bonificació $50** .

Nota: el nombre de caràcters facturables = [el nombre de unicode](https://en.wikipedia.org/wiki/Unicode) del fitxer font × el nombre d'idiomes a la traducció

## Suport a La Traducció `YAML`

L'eina només tradueix els valors del diccionari en `YAML` , no les claus del diccionari.

Basat en la traducció `YAML` , podeu crear fàcilment solucions internacionals per a diversos llenguatges de programació.

## Admet La Configuració De La Capçalera De Traducció `HOGO`

Admet la configuració de capçalera de bloc estàtic de tipus [HOGO](https://github.com/gohugoio/hugo) i només tradueix els camps `title` , `summary` , `brief` i `description` .

## No Traduïu Noms De Variables

`Markdown` s'utilitza com a plantilla de correu electrònic, `YAML` s'utilitza com a configuració de fitxer d'idioma i hi haurà paràmetres variables (per exemple: s'ha rebut la recàrrega `${amount}` ).

Els noms de variables com `${varname}` no es consideraran traduccions a l'anglès.

## Optimització De Traduccions Per a La Xina, Japó I Corea

### Quan Es Tradueix a L'anglès, La Primera Lletra Del Títol Es Posa Automàticament en Majúscula.

La Xina, el Japó i Corea no tenen lletres majúscules i minúscules, però la convenció per als títols en anglès és posar la primera lletra en majúscula.

`i18` pot reconèixer el títol en `MarkDown` i posarà automàticament en majúscula la primera lletra quan es tradueixi a un idioma que distingeix entre majúscules i minúscules.

Per exemple, `为阅读体验而优化` es traduirà en `Optimized for Reading Experience` .

### Els Termes Anglesos en Xinès, Japonès, Coreà I Xinès No Es Tradueixen

Els documents de la Xina, el Japó i Corea sovint contenen molts termes en anglès.

La traducció automàtica dels idiomes xinès, japonès i coreà s'ha convertit en una llengua no anglesa, i els termes sovint es tradueixen junts, com ara la següent frase xinesa:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Si feu servir Google o DeepL, tots dos tradueixen incorrectament termes en anglès que haurien de romandre originals (preneu com a exemples el japonès i el francès).

### Traductor De Google

Traduït al `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Traduït `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` francès :

`Falcon` es tradueix com `faucon` i `Llama` es tradueix com `lama` . Com a noms propis, no s'han de traduir.

![](//p.3ti.site/1720199451.avif)

### Traducció DeepL

Traduït al `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL de l'anterior al francès (també reescrivint els noms propis i afegint el `... ` senar):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traducció i18n.site

La traducció de `i18` reconeixerà els termes anglesos en documents xinès, japonès i coreà i deixarà els termes intactes.

Per exemple, el resultat de la traducció al japonès anterior és:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traducció francesa és:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Només quan hi hagi un espai entre la paraula anglesa i el text xinès, japonès i coreà o la longitud en anglès sigui superior a 1, la paraula es considerarà un terme.

Per exemple: `C罗` es traduirà com `Cristiano Ronaldo` .

## Es Pot Combinar Amb Més De `i18n.site` Idiomes Per Crear Un Lloc Web

`i18` està integrat a l'eina de línia d'ordres de creació de llocs web multiidioma [`i18n.site`](/i18n.site) .

Consulteu la documentació de [`i18n.site`](/i18n.site) per obtenir més informació.

## Codi De Codi Obert

El client és de codi obert 90 el % del codi és de codi obert. [Feu clic aquí per veure el codi font](/i18n.site/c/src) .

Busquem voluntaris per participar en el desenvolupament del codi font obert i la correcció de textos traduïts.

Si estàs interessat, si us plau [→ Fes clic aquí per omplir el teu perfil](https://ggl.link/i18n) i després uneix-te [a la llista de correu](https://groups.google.com/u/2/g/i18n-site) per comunicar-te.

## Mantenir El Contacte

Si us plau, feu <button onclick="mailsub()">clic a aquest correu electrònic per subscriure's a les actualitzacions del producte</button> i <button onclick="webpush()">activar el push del navegador</button> . Us avisarem quan es facin actualitzacions del producte.

Benvingut també a seguir els nostres comptes [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .
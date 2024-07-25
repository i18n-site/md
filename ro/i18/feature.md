# Caracteristicile Produsului

`i18` este un instrument de linie de comandă pentru traducere Markdown & Yaml

## Poate Menține Perfect Formatul Markdown

Acceptă traducerea tabelelor Markdown fără a deteriora formatul nu traduce cuvinte în formule matematice sau link-uri.

Acceptă traducerea `<code>` Markdown în HTML `<pre>` HTML în `MarkDown`

## Poate Recunoaște Formule Matematice Și Poate Sări Peste Traducere

Formulele matematice sunt recunoscute și traducerea este omisă.

Pentru cum să scrieți formule matematice, consultați [„ Github Despre scrierea expresiilor matematice”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Abilitatea De a Traduce Comentarii În Fragmente De Cod

Codul inline și fragmentele de cod nu sunt traduse, dar comentariile din cod pot fi traduse.

Comentariile de traducere trebuie să indice : ` ```rust ` ` ``` `

`json5` `rust` `yaml` `java` `cpp` `go` `toml` `c` `js` `coffee` `python` `bash` `php`[](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14)

Dacă limbajul de programare de care aveți nevoie nu este disponibil, vă rugăm [să ne contactați](https://groups.google.com/g/i18n-site) .

## Linia De Comandă Prietenoasă

Există multe [instrumente grele](https://www.capterra.com/translation-management-software) disponibile pentru gestionarea documentelor de traducere.

Pentru programatorii care sunt familiarizați cu `git` `vim` , `vscode` , utilizarea acestor instrumente pentru a edita documente și a gestiona versiuni va crește fără îndoială costul de învățare.

( `Keep It Simple, Stupid` ) Printre cei care cred în principiu, soluțiile la nivel `KISS` întreprindere sunt sinonime cu a fi greoaie, ineficiente și dificil de utilizat.

Traducerea trebuie făcută prin introducerea comenzilor și completând-o cu un singur clic. Nu ar trebui să existe dependențe complexe de mediu.

Nu adăugați entități decât dacă este necesar.

## Fără Modificare, Fără Traducere

Există, de asemenea, unele instrumente de traducere în linia de comandă, cum ar fi [translate-shell](https://github.com/soimort/translate-shell)

Cu toate acestea, nu acceptă identificarea modificărilor fișierelor și doar traduc fișierele modificate pentru a reduce costurile și a crește eficiența.

## Traducerea Poate Fi Editată, Iar Traducerea Automată Nu Va Suprascrie Modificările Existente.

Traducerea este editabilă.

Modificați textul original și traduceți-l din nou automat, modificările manuale ale traducerii nu vor fi suprascrise (dacă acest paragraf al textului original nu a fost modificat).

## Traducerea De Înaltă Calitate a Xindaya

Am dezvoltat o nouă generație de tehnologie de traducere care integrează avantajele tehnice ale modelelor tradiționale de traducere automată și ale modelelor de limbi mari pentru a face traducerile precise, fluide și elegante.

Testele oarbe arată că calitatea traducerii noastre este semnificativ mai bună în comparație cu serviciile similare.

Pentru a obține aceeași calitate, cantitatea de editare manuală `3.15` de Google Translate și `2.67` `ChatGPT`

## <a rel=id href="#price" id="price"></a> Prețuri extrem de competitive

|                                                                                   | USD/milion de cuvinte |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Notă: numărul de caractere facturabile = [numărul de unicode](https://en.wikipedia.org/wiki/Unicode) din fișierul sursă × numărul de limbi din traducere

## Susține Traducerea `YAML`

Instrumentul traduce doar valorile de dicționar în `YAML` nu cheile de dicționar.

Pe baza `YAML` , puteți construi cu ușurință soluții internaționale pentru diferite limbaje de programare.

## Suportă Traducere `HOGO`

[HOGO](https://github.com/gohugoio/hugo) configurația antetului blogului static, numai câmpurile `title` , `summary` și `description` sunt traduse.

## Nu Traduceți Numele Variabilelor

`Markdown` ca șablon de e-mail, `YAML` ca configurație de fișier de limbă, vor exista parametri variabili (de exemplu: a fost primit reîncărcare `${amount}` ).

`${varname}` Acest tip de nume de variabilă nu va fi considerat traducere în limba engleză.

## Optimizare Traducere Pentru China, Japonia Și Coreea

### Când Este Tradusă În Engleză, Prima Literă a Titlului Este Scrisă Automat Cu Majuscule.

China, Japonia și Coreea nu au litere mari sau mici, dar titlurile în limba engleză scriu în general prima literă cu majuscule.

`i18` poate recunoaște titlurile în `MarkDown` și va scrie automat prima literă atunci când traduceți într-o limbă sensibilă la majuscule.

De exemplu `为阅读体验而优化` va fi tradus ca `Optimized for Reading Experience` .

### Termenii Englezi În Chineză, Japoneză, Coreeană Și Chineză Nu Sunt Traduși

Documentele din China, Japonia și Coreea conțin adesea mulți termeni englezi.

Traducerea automată a limbilor chineză, japoneză și coreeană a devenit o limbă non-engleză, iar termenii sunt adesea traduși împreună, cum ar fi următoarea propoziție chineză:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Dacă utilizați Google sau DeepL, ambele traduc incorect termeni englezi care ar trebui să rămână originali (luați ca exemple japoneză și franceză).

### Google Translate

Tradus în `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Tradus in `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` este tradus ca `faucon` și `Llama` este tradus ca `lama` . Ca nume proprii, ele nu trebuie traduse.

<img alt="" src="//p.3ti.site/1720199451.avif">

### Traducere DeepL

Tradus în `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Traducerea celor de mai sus în franceză (rescriind și numele proprii și adăugând ciudat `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### Traducere i18n.site

Traducerea lui va recunoaște termenii englezi în documentele chineze `i18` japoneze și coreene și va lăsa intacți termenii.

De exemplu, rezultatul traducerii în japoneză de mai sus este:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Traducerea în franceză este:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Numai când există un spațiu între cuvântul englez și textul chineză, japoneză și coreeană sau lungimea engleză este mai mare de 1, cuvântul va fi considerat un termen.

De exemplu: `C罗` va fi tradus ca `Cristiano Ronaldo` .

## Poate Fi Combinat `i18n.site`

`i18` Este integrat în instrumentul de linie de comandă pentru crearea de site-uri în mai multe limbi [`i18n.site`](/i18n.site) .

Pentru detalii, consultați documentația [`i18n.site`](/i18n.site)

## Cod Open Source

Clientul este complet open source, iar partea de server este open source 90 [Faceți clic aici pentru a vizualiza codul sursă](/i18n.site/src) .

Căutăm voluntari care să participe la dezvoltarea codului open source și la corectarea textelor traduse.

Dacă sunteți interesat, vă rugăm [→ Faceți clic aici pentru a vă completa profilul](https://ggl.link/i18n) și apoi alăturați-vă [listei de corespondență](https://groups.google.com/u/2/g/i18n-site) pentru comunicare.

## Păstrăm Legătura

Vă rugăm <button onclick="mailsub()">să faceți clic pe acest e-mail pentru a vă abona la actualizările de produs</button> și <button onclick="webpush()">pentru a activa browser push</button> . Vă vom anunța când se fac actualizări ale produsului.

De asemenea [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) bineveniți să urmăriți conturile noastre de / [X.COM: @i18nSite](https://x.com/i18nSite)

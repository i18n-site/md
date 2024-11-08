# Caracteristicile Produsului

`i18` este instrumentul de linie de comandă pentru traducere Markdown & Yaml

## Poate Menține Perfect Formatul Markdown

Acceptă traducerea tabelelor Markdown fără a deteriora formatul nu traduce cuvinte în formule matematice sau link-uri.

Acceptă traducerea HTML Markdown , conținutul din etichetele `<pre>` și `<code>` încorporate în HTML `MarkDown` nu este tradus

## Poate Recunoaște Formule Matematice Și Poate Sări Peste Traducere

Formulele matematice sunt recunoscute și traducerea este omisă.

Pentru cum să scrieți formule matematice, consultați [„ Github Despre scrierea expresiilor matematice”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Abilitatea De a Traduce Comentarii În Fragmente De Cod

Codul inline și fragmentele de cod nu sunt traduse, dar comentariile din cod pot fi traduse.

Comentariile de traducere trebuie să indice limba după ` ``` ` , cum : fi ` ```rust ` .

În prezent, acceptă traducerea adnotărilor în `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [și în alte limbi](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Dacă doriți să traduceți toate caracterele non-engleze din cod, marcați segmentul de cod cu ` ```i18n ` .

Dacă limbajul de programare de care aveți nevoie nu este disponibil, vă rugăm [să ne contactați](https://groups.google.com/g/i18n-site) .

## Linia De Comandă Prietenoasă

Există multe [instrumente grele](https://www.capterra.com/translation-management-software) disponibile pentru gestionarea documentelor de traducere.

Pentru programatorii care sunt familiarizați cu `git` , `vim` și `vscode` , utilizarea acestor instrumente pentru a edita documente și a gestiona versiunile va crește fără îndoială costul de învățare.

`KISS` ( `Keep It Simple, Stupid` ) Printre credincioșii principiilor, soluțiile la nivel de întreprindere sunt sinonime cu a fi greoaie, ineficiente și dificil de utilizat.

Traducerea trebuie făcută prin introducerea comenzilor și completând-o cu un singur clic. Nu ar trebui să existe dependențe complexe de mediu.

Nu adăugați entități decât dacă este necesar.

## Fără Modificare, Fără Traducere

Există, de asemenea, unele instrumente de traducere în linia de comandă, cum ar fi [translate-shell](https://github.com/soimort/translate-shell)

Cu toate acestea, nu acceptă identificarea modificărilor fișierelor și doar traduc fișierele modificate pentru a reduce costurile și a crește eficiența.

## Traducerea Poate Fi Editată, Iar Traducerea Automată Nu Va Suprascrie Modificările Existente.

Traducerea este editabilă.

Modificați textul original și traduceți-l din nou automat, modificările manuale ale traducerii nu vor fi suprascrise (dacă acest paragraf al textului original nu a fost modificat).

## Traducere Automată De Cea Mai Bună Calitate

Am dezvoltat o nouă generație de tehnologie de traducere care combină avantajele tehnice ale modelelor tradiționale de traducere automată și ale modelelor de limbi mari pentru a face traducerile precise, fluide și elegante.

Testele oarbe arată că calitatea traducerii noastre este semnificativ mai bună în comparație cu serviciile similare.

Pentru a obține aceeași calitate, cantitatea de editare manuală necesară de Google Translate și `ChatGPT` este `2.67` ori, respectiv `3.15` ori mai mare decât a noastră.

## <a rel=id href="#price" id="price"></a> Prețuri extrem de competitive

|                                                                                   | USD/milion de cuvinte |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Faceți clic aici pentru a autoriza și pentru a urmări automat github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) și **pentru a primi bonus $50** !

Notă: numărul de caractere facturabile = [numărul de unicode](https://en.wikipedia.org/wiki/Unicode) din fișierul sursă × numărul de limbi din traducere

## Suport Traducere `YAML`

Instrumentul traduce doar valorile de dicționar în `YAML` , nu cheile de dicționar.

Pe baza `YAML` traducere, puteți construi cu ușurință soluții internaționale pentru diferite limbaje de programare.

## Acceptă Configurația Antetului Traducerii `HOGO`

Acceptă configurația antetului de tip blog [HOGO](https://github.com/gohugoio/hugo) și traduce numai câmpurile `title` , `summary` , `brief` și `description` .

## Nu Traduceți Numele Variabilelor

`Markdown` este folosit ca șablon de e-mail, `YAML` este folosit ca configurație de fișier de limbă și vor exista parametri variabili (de exemplu: reîncărcare `${amount}` a fost primită).

Numele de variabile precum `${varname}` nu vor fi considerate traduceri în limba engleză.

## Optimizare Traducere Pentru China, Japonia Și Coreea

### Când Este Tradusă În Engleză, Prima Literă a Titlului Este Scrisă Automat Cu Majuscule.

China, Japonia și Coreea nu au litere mari și mici, dar convenția pentru titlurile în limba engleză este de a scrie prima literă cu majuscule.

`i18` poate recunoaște titlul în `MarkDown` și va scrie automat prima literă cu majuscule atunci când traduce într-o limbă care face distincția între majuscule și minuscule.

De exemplu, `为阅读体验而优化` va fi tradus în `Optimized for Reading Experience` .

### Termenii Englezi În Chineză, Japoneză, Coreeană Și Chineză Nu Sunt Traduși

Documentele din China, Japonia și Coreea conțin adesea mulți termeni englezi.

Traducerea automată a limbilor chineză, japoneză și coreeană a devenit o limbă non-engleză, iar termenii sunt adesea traduși împreună, cum ar fi următoarea propoziție chineză:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Dacă utilizați Google sau DeepL, ambele traduc incorect termeni englezi care ar trebui să rămână originali (luați ca exemple japoneză și franceză).

### Google Translate

Tradus `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japoneză :

![](//p.3ti.site/1720199391.avif)

Tradus `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` franceză :

`Falcon` este tradus cu `faucon` și `Llama` este tradus cu `lama` . Ca nume proprii, ele nu trebuie traduse.

![](//p.3ti.site/1720199451.avif)

### Traducere DeepL

Tradus `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japoneză :

![](//p.3ti.site/1720199550.avif)

Traducerea DeepL de mai sus în franceză (rescriind și numele proprii și adăugând `... ` impar):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traducere i18n.site

Traducerea lui `i18` va recunoaște termenii englezi din documentele chineze, japoneze și coreene și va lăsa termenii intacți.

De exemplu, rezultatul traducerii în japoneză de mai sus este:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Traducerea în franceză este:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Numai când există un spațiu între cuvântul englez și textul chineză, japoneză și coreeană sau lungimea engleză este mai mare de 1, cuvântul va fi considerat un termen.

De exemplu: `C罗` va fi tradus ca `Cristiano Ronaldo` .

## Poate Fi Combinat Cu Mai Mult De `i18n.site` Limbi Pentru a Construi Un site Web

`i18` este integrat în instrumentul de linie de comandă pentru crearea site-ului web în mai multe limbi [`i18n.site`](/i18n.site) .

Consultați documentația [`i18n.site`](/i18n.site) pentru detalii.

## Cod Open Source

Clientul este complet open source, iar partea de server este open source 90 [Faceți clic aici pentru a vizualiza codul sursă](/i18n.site/c/src) .

Căutăm voluntari care să participe la dezvoltarea codului open source și la corectarea textelor traduse.

Dacă sunteți interesat, vă rugăm [→ Faceți clic aici pentru a vă completa profilul](https://ggl.link/i18n) și apoi alăturați-vă [listei de corespondență](https://groups.google.com/u/2/g/i18n-site) pentru comunicare.

## Păstrăm Legătura

Vă rugăm <button onclick="mailsub()">să faceți clic pe acest e-mail pentru a vă abona la actualizările de produs</button> și <button onclick="webpush()">pentru a activa browser push</button> . Vă vom anunța când se fac actualizări ale produsului.

De asemenea / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) să urmăriți conturile noastre de socializare [X.COM: @i18nSite](https://x.com/i18nSite)
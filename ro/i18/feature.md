# Caracteristicile Produsului

`i18` este instrumentul de linie de comandă pentru traducerea Markdown & Yaml.

## Poate menține perfect formatul Markdown

Acceptă traducerea tabelelor Markdown fără a deteriora formatul; nu traduce cuvinte din formule matematice sau link-uri.

Acceptă traducerea HTML Markdown, conținutul din etichetele `<pre>` și `<code>` din HTML încorporat în `MarkDown` nu este tradus

## Poate recunoaște formule matematice și sări peste traducere

Formulele matematice sunt recunoscute și traducerea este omisă.

Pentru cum să scrieți formule matematice, consultați [„Github Despre scrierea expresiilor matematice”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Poate traduce comentariile din fragmentele de cod

Codul inline și fragmentele de cod nu sunt traduse, dar comentariile din cod pot fi traduse.

Traducerea comentariilor necesită specificarea limbajului după ` ``` `, de exemplu: ` ```rust `.

În prezent, acceptă traducerea adnotărilor în `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [și alte limbi](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Dacă limbajul de programare de care aveți nevoie nu este disponibil, vă rugăm [să ne contactați](https://groups.google.com/g/i18n-site).

## Linia de comandă este prietenoasă

Există multe [instrumente grele](https://www.capterra.com/translation-management-software) disponibile pentru gestionarea documentelor de traducere.

Pentru programatorii familiarizați cu `git`, `vim` și `vscode`, utilizarea acestor instrumente pentru a edita documente și a gestiona versiunile va crește costul de învățare.

Prin credincioșii principiului `KISS` ( `Keep It Simple, Stupid` ), soluțiile la nivel de întreprindere sunt considerate greoaie, ineficiente și dificil de utilizat.

Traducerea ar trebui să fie simplă: introduceți comanda și faceți clic pentru a finaliza; nu ar trebui să existe dependențe complexe de mediu.

Nu adăugați entități decât dacă este necesar.

## Fără modificare, fără traducere

Există, de asemenea, alte instrumente de traducere în linia de comandă, cum ar fi [translate-shell](https://github.com/soimort/translate-shell).

Cu toate acestea, ele nu identifică modificările în fișiere și traduc doar fișierele modificate pentru a reduce costurile și a crește eficiența.

## Traducerea poate fi editată, iar traducerea automată nu va suprascrie modificările existente

Traducerile sunt editabile.

Modificând textul original și traducându-l din nou automat, traducerile manuale nu vor fi suprascrise (dacă textul original nu a fost modificat).

## Cea mai bună calitate a traducerii automate

Am dezvoltat o nouă generație de tehnologie de traducere, combinând modelele tradiționale de traducere automată cu modelele de limbaj mari, pentru a oferi traduceri precise, fluide și elegante.

Blind testele arată că calitatea traducerilor noastre este semnificativ mai bună decât a serviciilor concurente.

Pentru a atinge aceeași calitate, cantitatea de editare manuală necesară de Google Translate și `ChatGPT` este de `2.67` ori, respectiv de `3.15` ori mai mare decât cea a noastră.

## <a rel=id href="#price" id="price"></a> Prețuri extrem de competitive

|                                                                                   | USD/100.000 de cuvinte |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Accesați aici pentru a autoriza urmărirea automată a depozitului github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo) și **primiți un bonus de $50**.

Notă: Numărul de caractere facturabile = [numărul de caractere Unicode](https://en.wikipedia.org/wiki/Unicode) din fișierul sursă × numărul de limbi traduse

## Suportă traducerea `YAML`

Instrumentul traduce doar valorile de dicționar în `YAML`, nu cheile de dicționar.

Pe baza traducerii `YAML`, puteți construi cu ușurință soluții internaționale pentru diferite limbaje de programare.

## Acceptă configurația antetului pentru `HOGO`

Acceptă configurația antetului pentru bloguri statice de tip [HOGO](https://github.com/gohugoio/hugo), traducând doar câmpurile `title`, `summary` și `description`.

## Nu traduceți numele variabilelor

`Markdown` este folosit ca șablon de e-mail, `YAML` este folosit ca fișier de configurație de limbaj și vor exista parametri variabili (de exemplu: reîncărcare `${amount}` a fost primită).

Numele variabilelor precum `${varname}` nu vor fi considerate traduceri în limba engleză.

## Optimizare pentru traducerea în China, Japonia și Coreea

### Când este tradusă în engleză, prima literă a titlului este scrisă automat cu majuscule

China, Japonia și Coreea nu au litere mari și mici, dar convenția pentru titlurile în engleză este de a scrie prima literă cu majuscule.

`i18` poate recunoaște titlul în `Markdown` și va scrie automat prima literă cu majuscule atunci când traduce într-o limbă sensibilă la majuscule.

De exemplu, `为阅读体验而优化` va fi tradus în `Optimized for Reading Experience`.

### Termenii englezi în China, Japonia și Coreea nu sunt traduși

Documentele din China, Japonia și Coreea conțin adesea mulți termeni englezi.

Traducerea automată a limbilor chineză, japoneză și coreeană într-o limbă non-engleză adesea traduce și termenii

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Dacă utilizați Google sau DeepL, ambele traduc incorect termeni englezi care ar trebui să rămână originali (luați ca exemple japoneză și franceză).

### Google Translate

Tradus în `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Tradus în `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` este tradus cu `faucon` și `Llama` este tradus cu `lama`. Ca nume proprii, ele nu trebuie traduse.

![](//p.3ti.site/1720199451.avif)

### DeepL Translate

Tradus în `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL traduce mai sus în franceză (rescriind și numele proprii și adăugând `... ` impar)

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traducere i18n.site

Traducerea `i18` va recunoaște termenii englezi din documentele chineze, japoneze și coreene și va lăsa termenii intacti.

De exemplu, rezultatul traducerii în japoneză de mai sus este:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Traducerea în franceză este:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Numai când există un spațiu între cuvântul englez și textul chineză, japoneză și coreeană sau lungimea engleză este mai mare de 1, cuvântul va fi considerat un termen.

De exemplu: `C罗` va fi tradus ca `Cristiano Ronaldo`.

## Poate fi combinat cu `i18n.site` pentru a crea site-uri web multilingve

`i18` este integrat în instrumentul de linie de comandă pentru crearea site-ului web multilingv `i18n.site` [i18n.site](/i18n.site).

Consultați documentația de pe [`i18n.site`](/i18n.site) pentru detalii.

## Cod open source

Clientul este complet open source, iar partea de server este open source 90% [Faceți clic aici pentru a vizualiza codul sursă](/i18n.site/src).

Căutăm voluntari pentru a participa la dezvoltarea codului open source și la verificarea textelor traduse.

Dacă sunteți interesat, completați [→ profilul dvs. aici](https://ggl.link/i18n) și alăturați-vă [listei de corespondență](https://groups.google.com/u/2/g/i18n-site).

## Păstrăm legătura

Vă rugăm <button onclick="mailsub()">să faceți clic pe acest e-mail pentru a vă abona la actualizările de produs</button> și <button onclick="webpush()">pentru a activa notificările browserului</button>, vă vom anunța la actualizările produsului.

De asemenea, bine / venit să urmăriți conturile noastre de [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)
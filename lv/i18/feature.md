# Produkta Īpašības

`i18` ir komandrindas rīks tulkošanai Markdown & Yaml

## Var Lieliski Uzturēt Markdown Formātu

Atbalsta Markdown tabulu tulkošanu, nesabojājot formātu, netulko vārdus matemātiskās formulās vai saitēs.

Atbalsta HTML Markdown tulkojumu, `<pre>` un `<code>` attēlu saturs, kas iegults `MarkDown` HTML , netiek tulkots

## Prot Atpazīt Matemātiskās Formulas Un Izlaist Tulkošanu

Matemātiskās formulas tiek atpazītas un tulkošana tiek izlaista.

Lai uzzinātu, kā rakstīt matemātiskās formulas, lūdzu, skatiet sadaļu [" Github Par matemātisko izteiksmju rakstīšanu"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Iespēja Tulkot Komentārus Koda Fragmentos

Iekļauts kods un koda fragmenti netiek tulkoti, bet komentāri kodā var tikt tulkoti.

Tulkojuma komentāros jānorāda valoda pēc ` ``` ` , piemēram : ` ```rust ` .

Pašlaik tas atbalsta anotāciju tulkošanu `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [un citās valodās](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ja vēlaties tulkot visas kodā esošās rakstzīmes, kas nav angļu valodā, atzīmējiet koda segmentu ar ` ```i18n ` .

Ja vajadzīgā programmēšanas valoda nav pieejama, lūdzu, [sazinieties ar mums](https://groups.google.com/g/i18n-site) .

## Komandrindai Draudzīgs

Tulkošanas dokumentu pārvaldībai ir pieejami daudzi [smagie rīki](https://www.capterra.com/translation-management-software) .

Programmētājiem, kuri pārzina `git` , `vim` un `vscode` , šo rīku izmantošana dokumentu rediģēšanai un versiju pārvaldībai neapšaubāmi palielinās mācību izmaksas.

`KISS` ( `Keep It Simple, Stupid` ) Principiāli ticīgo vidū uzņēmuma līmeņa risinājumi ir apgrūtinoši, neefektīvi un grūti lietojami.

Tulkošana jāveic, ievadot komandas un pabeidzot to ar vienu klikšķi. Nevajadzētu būt sarežģītām vides atkarībām.

Nepievienojiet entītijas, ja vien tas nav nepieciešams.

## Bez Izmaiņām, Bez Tulkojuma

Ir arī daži komandrindas tulkošanas rīki, piemēram, [translate-shell](https://github.com/soimort/translate-shell)

Tomēr tie neatbalsta failu modifikāciju identificēšanu un tikai tulko modificētos failus, lai samazinātu izmaksas un palielinātu efektivitāti.

## Tulkojumu Var Rediģēt, Un Mašīntulkošana Nepārrakstīs Esošās Izmaiņas.

Tulkojums ir rediģējams.

Pārveidojiet oriģinālo tekstu un mašīntulkojiet to vēlreiz, manuālās tulkojuma izmaiņas netiks pārrakstītas (ja šī oriģinālā teksta rindkopa nav mainīta).

## Labākās Kvalitātes Mašīntulkošana

Mēs esam izstrādājuši jaunas paaudzes tulkošanas tehnoloģiju, kas apvieno tradicionālo mašīntulkošanas modeļu un lielo valodu modeļu tehniskās priekšrocības, lai tulkojumi būtu precīzi, gludi un eleganti.

Aklās pārbaudes liecina, ka mūsu tulkojumu kvalitāte ir ievērojami labāka salīdzinājumā ar līdzīgiem pakalpojumiem.

Lai sasniegtu tādu pašu kvalitāti, manuālās rediģēšanas apjoms, kas nepieciešams Google tulkotājam un `ChatGPT` ir attiecīgi `2.67` reizi un `3.15` reizes lielāks nekā mums.

## <a rel=id href="#price" id="price"></a> Īpaši konkurētspējīgas cenas

|                                                                                   | USD/miljons vārdu |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Noklikšķiniet šeit, lai autorizētu un automātiski sekotu github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) un **saņemtu bonusu $50** !

Piezīme: apmaksājamo rakstzīmju skaits = [unicode skaits](https://en.wikipedia.org/wiki/Unicode) avota failā × valodu skaits tulkojumā

## Atbalstīt Tulkošanu `YAML`

Šis rīks tulko tikai vārdnīcas vērtības `YAML` , nevis vārdnīcas taustiņus.

Balstoties uz `YAML` tulkojumu, jūs varat viegli izveidot starptautiskus risinājumus dažādām programmēšanas valodām.

## Atbalstiet Tulkošanas `HOGO` Galvenes Konfigurāciju

Atbalsta statiskā [HOGO](https://github.com/gohugoio/hugo) galvenes konfigurāciju un tulko tikai laukus `title` , `summary` , `brief` un `description` .

## Netulko Mainīgo Nosaukumus

`Markdown` tiek izmantots kā e-pasta veidne, `YAML` tiek izmantots kā valodas faila konfigurācija, un būs mainīgi parametri (piemēram: ir saņemta recharge `${amount}` ).

Mainīgo nosaukumi, piemēram `${varname}` netiks uzskatīti par tulkojumiem angļu valodā.

## Tulkošanas Optimizācija Ķīnai, Japānai Un Korejai

### Tulkojot Angļu Valodā, Virsraksta Pirmais Burts Tiek Automātiski Rakstīts Ar Lielo Burtu.

Ķīnā, Japānā un Korejā nav lielo un mazo burtu, taču angļu valodas virsrakstiem parasti ir jāraksta pirmais burts.

`i18` var atpazīt virsrakstu `MarkDown` un automātiski liks pirmo burtu ar lielo burtu, tulkojot reģistrjutīgā valodā.

Piemēram, `为阅读体验而优化` tiks tulkots `Optimized for Reading Experience` .

### Angļu Valodas Termini Ķīniešu, Japāņu, Korejiešu Un Ķīniešu Valodās Netiek Tulkoti

Ķīnas, Japānas un Korejas dokumentos bieži ir daudz angļu valodas terminu.

Ķīniešu, japāņu un korejiešu valodu mašīntulkošana ir kļuvusi par valodu, kas nav angļu valoda, un termini bieži tiek tulkoti kopā, piemēram, šāds ķīniešu teikums:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ja izmantojat Google vai DeepL, tie abi nepareizi tulko angļu valodas terminus, kuriem vajadzētu palikt oriģināliem (kā piemērus ņemiet japāņu un franču valodu).

### Google Tulkotājs

Tulkots japāņu `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Tulkots franču `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` tiek tulkots kā `faucon` un `Llama` tiek tulkots kā `lama` . Kā īpašvārdus tos nevajadzētu tulkot.

![](//p.3ti.site/1720199451.avif)

### DeepL Tulkojums

Tulkots japāņu `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL minētā tulkojums franču valodā (arī pārrakstot īpašvārdus un pievienojot nepāra `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Tulkojums

`i18` tulkojums atpazīs angļu valodas terminus ķīniešu, japāņu un korejiešu dokumentos un atstās terminus neskartus.

Piemēram, japāņu valodas tulkojuma rezultāts iepriekš ir šāds:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Franču tulkojums ir:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Tikai tad, ja starp angļu vārdu un tekstu ķīniešu, japāņu un korejiešu valodā ir atstarpe vai angļu valodas garums ir lielāks par 1, vārds tiks uzskatīts par terminu.

Piemēram: `C罗` tiks tulkots kā `Cristiano Ronaldo` .

## Var Apvienot Ar Vairāk Nekā `i18n.site` Valodām, Lai Izveidotu Vietni

`i18` ir integrēts vairāku valodu vietņu veidošanas komandrindas rīkā [`i18n.site`](/i18n.site) .

Sīkāku informāciju skatiet [`i18n.site`](/i18n.site) dokumentācijā.

## Atvērtā Koda Kods

Klients ir pilnībā atvērts, un servera puse ir atvērtā koda daļa 90 [Noklikšķiniet šeit, lai skatītu avota kodu](/i18n.site/c/src) .

Meklējam brīvprātīgos dalībai atvērtā pirmkoda izstrādē un tulkoto tekstu korektūrās.

Ja jūs interesē, lūdzu [→ Noklikšķiniet šeit, lai aizpildītu savu profilu](https://ggl.link/i18n) un pēc tam pievienotos [adresātu sarakstam](https://groups.google.com/u/2/g/i18n-site) saziņai.

## Uzturēt Kontaktus

Lūdzu <button onclick="mailsub()">, noklikšķiniet uz šī e-pasta, lai abonētu produktu atjauninājumus</button> un <button onclick="webpush()">iespējotu pārlūkprogrammas push</button> . Mēs jūs informēsim, kad tiks veikti produktu atjauninājumi.

Laipni [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) sekot arī mūsu / kontiem [X.COM: @i18nSite](https://x.com/i18nSite)
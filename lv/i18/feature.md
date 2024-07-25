# Produkta Īpašības

`i18` komandrindas rīks tulkošanai Markdown & Yaml

## Var Lieliski Uzturēt Markdown Formātu

Atbalsta Markdown tabulu tulkošanu, nesabojājot formātu, netulko vārdus matemātiskās formulās vai saitēs.

Atbalsta Markdown tulkojumu jauktā HTML `<pre>` HTML `MarkDown` saturu `<code>` tagos netiek tulkoti

## Prot Atpazīt Matemātiskās Formulas Un Izlaist Tulkošanu

Matemātiskās formulas tiek atpazītas un tulkošana tiek izlaista.

Lai uzzinātu, kā rakstīt matemātiskās formulas, lūdzu, skatiet sadaļu [" Github Par matemātisko izteiksmju rakstīšanu"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Iespēja Tulkot Komentārus Koda Fragmentos

Iekļauts kods un koda fragmenti netiek tulkoti, bet komentāri kodā var tikt tulkoti.

Tulkojuma komentāros jānorāda valoda pēc ` ``` ` ` ```rust ` :

Pašlaik atbalsta komentāru tulkošanu `toml` `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` `python` , `bash` , `php` [un citās valodās](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ja vajadzīgā programmēšanas valoda nav pieejama, lūdzu, [sazinieties ar mums](https://groups.google.com/g/i18n-site) .

## Komandrindai Draudzīgs

Tulkošanas dokumentu pārvaldībai ir pieejami daudzi [smagie rīki](https://www.capterra.com/translation-management-software) .

Programmētājiem, kuri pārzina `git` `vim` , `vscode` , šo rīku izmantošana dokumentu rediģēšanai un versiju pārvaldībai neapšaubāmi palielinās mācību izmaksas.

( `Keep It Simple, Stupid` ) `KISS` ticīgo vidū uzņēmuma līmeņa risinājumi ir apgrūtinoši, neefektīvi un grūti lietojami.

Tulkošana jāveic, ievadot komandas un pabeidzot to ar vienu klikšķi. Nevajadzētu būt sarežģītām vides atkarībām.

Nepievienojiet entītijas, ja vien tas nav nepieciešams.

## Bez Izmaiņām, Bez Tulkojuma

Ir arī daži komandrindas tulkošanas rīki, piemēram, [translate-shell](https://github.com/soimort/translate-shell)

Tomēr tie neatbalsta failu modifikāciju identificēšanu un tikai tulko modificētos failus, lai samazinātu izmaksas un palielinātu efektivitāti.

## Tulkojumu Var Rediģēt, Un Mašīntulkošana Nepārrakstīs Esošās Izmaiņas.

Tulkojums ir rediģējams.

Pārveidojiet oriģinālo tekstu un mašīntulkojiet to vēlreiz, manuālās tulkojuma izmaiņas netiks pārrakstītas (ja šī oriģinālā teksta rindkopa nav mainīta).

## Xindaya Augstas Kvalitātes Tulkojums

Mēs esam izstrādājuši jaunas paaudzes tulkošanas tehnoloģiju, kas apvieno tradicionālo mašīntulkošanas modeļu un lielo valodu modeļu tehniskās priekšrocības, lai tulkojumi būtu precīzi, gludi un eleganti.

Aklās pārbaudes liecina, ka mūsu tulkojumu kvalitāte ir ievērojami labāka salīdzinājumā ar līdzīgiem pakalpojumiem.

Lai sasniegtu tādu pašu kvalitāti, manuālās rediģēšanas apjoms `2.67` `3.15` nepieciešams Google tulkotājam un `ChatGPT`

## <a rel=id href="#price" id="price"></a> Īpaši konkurētspējīgas cenas

|                                                                                   | USD/miljons vārdu |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Piezīme: apmaksājamo rakstzīmju skaits = [unicode skaits](https://en.wikipedia.org/wiki/Unicode) avota failā × valodu skaits tulkojumā

## Atbalsti Tulkošanu `YAML`

Šis rīks tulko tikai vārdnīcas vērtības `YAML` nevis vārdnīcas taustiņus.

Pamatojoties `YAML` tulkojumu, varat viegli izveidot starptautiskus risinājumus dažādām programmēšanas valodām.

## `HOGO` Galvenes Konfigurāciju

Atbalsta statiskā [HOGO](https://github.com/gohugoio/hugo) galvenes konfigurāciju, tiek tulkoti tikai `title` , `summary` un `description` .

## Netulko Mainīgo Nosaukumus

`Markdown` Izmanto kā e-pasta veidni, `YAML` kā valodas faila konfigurāciju, būs mainīgi parametri (piemēram: ir saņemta recharge `${amount}` ).

Šāds mainīgā nosaukums netiks uzskatīts par tulkojumu angļu valodā `${varname}`

## Tulkošanas Optimizācija Ķīnai, Japānai Un Korejai

### Tulkojot Angļu Valodā, Virsraksta Pirmais Burts Tiek Automātiski Rakstīts Ar Lielo Burtu.

Ķīnā, Japānā un Korejā nav lielo vai mazo burtu, taču angļu valodas nosaukumos pirmo burtu parasti raksta ar lielo burtu.

`i18` var atpazīt nosaukumus `MarkDown` un automātiski rakstīt pirmo burtu, kad tiek tulkots reģistrjutīgā valodā.

Piemēram `为阅读体验而优化` tiks tulkots kā `Optimized for Reading Experience` .

### Angļu Valodas Termini Ķīniešu, Japāņu, Korejiešu Un Ķīniešu Valodās Netiek Tulkoti

Ķīnas, Japānas un Korejas dokumentos bieži ir daudz angļu valodas terminu.

Ķīniešu, japāņu un korejiešu valodu mašīntulkošana ir kļuvusi par valodu, kas nav angļu valoda, un termini bieži tiek tulkoti kopā, piemēram, šāds ķīniešu teikums:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ja izmantojat Google vai DeepL, tie abi nepareizi tulko angļu valodas terminus, kuriem vajadzētu palikt oriģināliem (kā piemērus ņemiet japāņu un franču valodu).

### Google Tulkotājs

Tulkots `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` valodā :

<img alt="" src="//p.3ti.site/1720199391.avif">

Tulkots `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` valodā :

`Falcon` `faucon` `Llama` `lama`

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Tulkojums

Tulkots `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` valodā :

<img alt="" src="//p.3ti.site/1720199550.avif">

Iepriekš minētā DeepL franču valodā (arī pārrakstot īpašvārdus un pievienojot nepāra `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Tulkojums

`i18`

Piemēram, japāņu valodas tulkojuma rezultāts iepriekš ir šāds:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Franču tulkojums ir:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Tikai tad, ja starp angļu vārdu un tekstu ķīniešu, japāņu un korejiešu valodā ir atstarpe vai angļu valodas garums ir lielāks par 1, vārds tiks uzskatīts par terminu.

Piemēram: `C罗` tiks tulkots kā `Cristiano Ronaldo` .

## Var `i18n.site` Vairāku Valodu Tīmekļa Vietnes Izveidi

Ir `i18` komandrindas rīkā vairāku valodu vietņu izveidei [`i18n.site`](/i18n.site) .

Sīkāku informāciju skatiet dokumentācijā [`i18n.site`](/i18n.site)

## Atvērtā Koda Kods

Klients ir pilnībā atvērts, un servera puse ir atvērtā koda daļa 90 [Noklikšķiniet šeit, lai skatītu avota kodu](/i18n.site/src) .

Meklējam brīvprātīgos dalībai atvērtā pirmkoda izstrādē un tulkoto tekstu korektūrās.

Ja jūs interesē, lūdzu [→ Noklikšķiniet šeit, lai aizpildītu savu profilu](https://ggl.link/i18n) un pēc tam pievienotos [adresātu sarakstam](https://groups.google.com/u/2/g/i18n-site) saziņai.

## Sazināsimies

Lūdzu, <button onclick="mailsub()">noklikšķiniet uz šī e-pasta, lai abonētu produktu atjauninājumus</button> un <button onclick="webpush()">iespējotu pārlūkprogrammas push</button> . Mēs jūs informēsim, kad tiks veikti produktu atjauninājumi.

/ lūdzam sekot [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) mūsu sociālajiem kontiem [X.COM: @i18nSite](https://x.com/i18nSite)

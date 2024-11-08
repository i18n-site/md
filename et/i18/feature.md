# Toote Omadused

`i18` on tõlkimise käsurea tööriist Markdown & Yaml

## Saab Suurepäraselt Säilitada Markdowni Vormingu

Toetab Markdowni tabelite tõlkimist ilma vormingut kahjustamata;

`MarkDown` Markdown HTML HTML `<pre>` `<code>`

## Tunneb Ära Matemaatilisi Valemeid Ja Jätab Tõlkimise Vahele

Matemaatilised valemid tuvastatakse ja tõlkimine jäetakse vahele.

Matemaatiliste valemite kirjutamise kohta vaadake jaotist [" Github Teave matemaatiliste avaldiste kirjutamise kohta"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Võimalus Tõlkida Kommentaare Koodijuppidena

Tekstisisest koodi ja koodijuppe ei tõlgita, kuid koodis olevaid kommentaare saab tõlkida.

Tõlke kommentaarides tuleb ` ```rust ` keel pärast ` ``` ` , näiteks : .

Praegu toetab see annotatsioonide tõlkimist `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [ja teistes keeltes](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Kui soovite tõlkida kõik koodis olevad mitteingliskeelsed märgid, märkige koodilõik ` ```i18n ` ga.

Kui vajalik programmeerimiskeel pole saadaval, võtke [meiega ühendust](https://groups.google.com/g/i18n-site) .

## Käsurea Sõbralik

Tõlkedokumentide haldamiseks on saadaval palju [raskeid tööriistu](https://www.capterra.com/translation-management-software) .

Programmeerijate jaoks, kes tunnevad `git` , `vim` ja `vscode` , suurendab nende tööriistade kasutamine dokumentide redigeerimiseks ja versioonide haldamiseks kahtlemata õppekulusid.

`KISS` ( `Keep It Simple, Stupid` ) Põhimõtteliselt uskujate seas on ettevõtte tasemel lahendused tülikad, ebaefektiivsed ja raskesti kasutatavad.

Tõlge tuleks teha käskude sisestamisega ja ühe klõpsuga lõpetades. Keerulisi keskkonnasõltuvusi ei tohiks olla.

Ärge lisage üksusi, kui see pole vajalik.

## Ei Mingit Muudatust Ega Tõlget

Samuti on olemas mõned käsurea tõlketööriistad, näiteks [translate-shell](https://github.com/soimort/translate-shell)

Kuid need ei toeta failimuudatuste tuvastamist ja tõlgivad muudetud faile ainult kulude vähendamiseks ja tõhususe suurendamiseks.

## Tõlget Saab Redigeerida Ja Masintõlge Ei Kirjuta Olemasolevaid Muudatusi Üle.

Tõlge on redigeeritav.

Muuda originaalteksti ja tõlgi see uuesti, käsitsi tehtud tõlkemuudatusi üle ei kirjutata (kui seda originaalteksti lõiku pole muudetud).

## Parima Kvaliteediga Masintõlge

Oleme välja töötanud uue põlvkonna tõlketehnoloogia, mis ühendab traditsiooniliste masintõlkemudelite ja suurte keelemudelite tehnilised eelised, et muuta tõlked täpseks, sujuvaks ja elegantseks.

Pimedestid näitavad, et meie tõlke kvaliteet on sarnaste teenustega võrreldes oluliselt parem.

Sama kvaliteedi saavutamiseks on Google'i tõlke ja `ChatGPT` nõutav käsitsi muutmise maht vastavalt `2.67` ja `3.15` korda suurem kui meie oma.

## <a rel=id href="#price" id="price"></a> Äärmiselt konkurentsivõimeline hind

|                                                                                   | USD/miljon sõna |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klõpsake siin, et autoriseerida ja automaatselt jälgida github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ning **saada boonus $50** .

Märkus: arveldatavate märkide arv = [unicode arv](https://en.wikipedia.org/wiki/Unicode) lähtefailis × keelte arv tõlkes

## Toetage Tõlget `YAML`

Tööriist tõlgib ainult sõnastiku väärtused `YAML` s, mitte sõnastiku võtmed.

`YAML` tõlke põhjal saate hõlpsasti luua rahvusvahelisi lahendusi erinevatele programmeerimiskeeltele.

## Toetage Tõlke `HOGO` Päise Konfiguratsiooni

Toetab staatilise [HOGO](https://github.com/gohugoio/hugo) päise konfiguratsiooni ja tõlgib ainult välju `title` , `summary` , `brief` ja `description` .

## Ärge Tõlkige Muutujate Nimesid

`Markdown` kasutatakse meilimallina, `YAML` kasutatakse keelefaili konfiguratsioonina ja seal on muutuvad parameetrid (näiteks: laekus `${amount}` ).

Muutujate nimesid nagu `${varname}` ei loeta ingliskeelseteks tõlgeteks.

## Tõlke Optimeerimine Hiina, Jaapani Ja Korea Jaoks

### Inglise Keelde Tõlkimisel Kirjutatakse Pealkirja Esimene Täht Automaatselt Suurtähtedega.

Hiinas, Jaapanis ja Koreas ei ole suur- ja väiketähti, kuid ingliskeelsete pealkirjade puhul kasutatakse esimest tähte suurtähtedega.

`i18` tunneb pealkirja `MarkDown` s ära ja kasutab tõstutundlikku keelde tõlkides esimest tähte automaatselt.

Näiteks `为阅读体验而优化` tõlgitakse `Optimized for Reading Experience` .

### Ingliskeelseid Termineid Hiina, Jaapani, Korea Ja Hiina Keeles Ei Tõlgita

Hiinast, Jaapanist ja Koreast pärit dokumendid sisaldavad sageli palju ingliskeelseid termineid.

Hiina, jaapani ja korea keelte masintõlge on muutunud mitte-inglise keeleks ja termineid tõlgitakse sageli koos, näiteks järgmine hiina keele lause:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Kui kasutate Google'it või DeepL-i, tõlgivad nad mõlemad valesti ingliskeelseid termineid, mis peaksid jääma originaaliks (näiteks jaapani ja prantsuse keel).

### Google'i Tõlge

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` keelde tõlgitud :

![](//p.3ti.site/1720199391.avif)

Prantsuse keelde `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` tõlgitakse kui `faucon` ja `Llama` tõlgitakse kui `lama` . Pärisnimisõnadena ei tohiks neid tõlkida.

![](//p.3ti.site/1720199451.avif)

### DeepL Tõlge

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` keelde tõlgitud :

![](//p.3ti.site/1720199550.avif)

Ülaltoodud DeepL prantsuse keelde (ka pärisnimede ümberkirjutamine ja paaritu `... ` lisamine):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.saidi Tõlge

`i18` tõlge tunneb ära ingliskeelsed terminid hiina, jaapani ja korea dokumentides ning jätab terminid puutumata.

Näiteks ülaltoodud jaapanikeelse tõlke tulemus on järgmine:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Prantsuse tõlge on järgmine:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Ainult siis, kui ingliskeelse sõna ja hiina-, jaapani- ja koreakeelse teksti vahel on tühik või ingliskeelne pikkus on suurem kui 1, loetakse sõna terminiks.

Näiteks: `C罗` tõlgitakse kui `Cristiano Ronaldo` .

## Veebisaidi Loomiseks Saab Kombineerida Rohkem Kui `i18n.site` Keelega

`i18` on integreeritud mitmekeelse veebisaidi loomise käsurea tööriista [`i18n.site`](/i18n.site) .

Vaadake üksikasju [`i18n.site`](/i18n.site) dokumentatsioonist.

## Kood Avatud Lähtekoodiga

Klient on täielikult avatud lähtekoodiga ja serveri 90 on [avatud](/i18n.site/c/src) lähtekoodiga.

Otsime vabatahtlikke osalema avatud lähtekoodi väljatöötamises ja tõlgitud tekstide korrektuuris.

Kui olete huvitatud, palun [→ Klõpsake siin, et täita oma profiil](https://ggl.link/i18n) ja seejärel liituda [meililistiga](https://groups.google.com/u/2/g/i18n-site) suhtlemiseks.

## Ühendust Pidama

<button onclick="mailsub()">Tootevärskenduste tellimiseks</button> ja <button onclick="webpush()">brauseri tõuke lubamiseks</button> klõpsake sellel meilil. Teavitame teid, kui tootevärskendusi tehakse.

Tere / jälgima ka meie [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)
# Značilnosti Izdelka

`i18` je orodje ukazne vrstice za prevajanje Markdown & Yaml

## Lahko Popolnoma Vzdržuje Format Markdown

Podpira prevajanje tabel Markdown, ne da bi poškodoval format; ne prevaja besed v matematičnih formulah ali povezavah.

Podpira prevajanje mešanih HTML Markdown , vsebina v oznakah `<pre>` in `<code>` , vdelanih v HTML `MarkDown` ni prevedena

## Zna Prepoznati Matematične Formule in Preskočiti Prevod

Matematične formule so prepoznane in prevod je preskočen.

Za pisanje matematičnih formul glejte [" Github O pisanju matematičnih izrazov"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Sposobnost Prevajanja Komentarjev v Delčkih Kode

Vgrajena koda in izrezki kode niso prevedeni, lahko pa se prevedejo komentarji v kodi.

Komentarji prevoda morajo navesti jezik za ` ``` ` , na ` ```rust ` :

Trenutno podpira prevajanje pripisov v `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [in druge jezike](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Če želite prevesti vse neangleške znake v kodi, označite segment kode z ` ```i18n ` .

Če programski jezik, ki ga potrebujete, ni na voljo, se [obrnite na nas](https://groups.google.com/g/i18n-site) .

## Prijazen Do Ukazne Vrstice

Za upravljanje prevajalskih dokumentov je na voljo veliko [težkih orodij](https://www.capterra.com/translation-management-software) .

Za programerje, ki poznajo `git` , `vim` in `vscode` , bo uporaba teh orodij za urejanje dokumentov in upravljanje različic nedvomno povečala stroške učenja.

`KISS` ( `Keep It Simple, Stupid` ) Med načelnimi verniki so rešitve na ravni podjetij sinonim za okorne, neučinkovite in težke za uporabo.

Prevod je treba opraviti z vnosom ukazov in dokončanjem z enim klikom. Ne sme biti zapletenih odvisnosti od okolja.

Ne dodajajte entitet, razen če je to potrebno.

## Brez Spreminjanja, Brez Prevoda

Obstaja tudi nekaj orodij za prevajanje ukazne vrstice, kot je [translate-shell](https://github.com/soimort/translate-shell)

Vendar pa ne podpirajo prepoznavanja sprememb datotek in prevajajo samo spremenjene datoteke, da zmanjšajo stroške in povečajo učinkovitost.

## Prevod Je Mogoče Urejati in Strojno Prevajanje Ne Bo Prepisalo Obstoječih Sprememb.

Prevod je mogoče urejati.

Spremenite izvirno besedilo in ga znova strojno prevedite, ročne spremembe prevoda ne bodo prepisane (če ta odstavek izvirnega besedila ni bil spremenjen).

## Strojno Prevajanje Najboljše Kakovosti

Razvili smo novo generacijo prevajalske tehnologije, ki združuje tehnične prednosti tradicionalnih modelov strojnega prevajanja in velikih jezikovnih modelov, da so prevodi natančni, tekoči in elegantni.

Slepi testi kažejo, da je naša kakovost prevodov bistveno boljša v primerjavi s podobnimi storitvami.

Da bi dosegli enako kakovost, je količina ročnega urejanja, ki jo zahtevata Google Translate in `ChatGPT` , `2.67` -krat oziroma `3.15` -krat večja od naše.

## <a rel=id href="#price" id="price"></a> Izjemno konkurenčne cene

|                                                                                   | USD/milijon besed |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kliknite tukaj, da avtorizirate in i18n.site sledite knjižnici github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) in **prejmete bonus $50** .

Opomba: Število zaračunljivih znakov = [število unicode](https://en.wikipedia.org/wiki/Unicode) v izvorni datoteki × število jezikov v prevodu

## Podpora Prevodu `YAML`

Orodje prevaja samo slovarske vrednosti v `YAML` , ne slovarskih ključev.

Na podlagi prevoda `YAML` lahko preprosto zgradite mednarodne rešitve za različne programske jezike.

## Podprite Konfiguracijo Glave Prevoda `HOGO`

Podpira konfiguracijo glave statičnega bloga tipa [HOGO](https://github.com/gohugoio/hugo) in prevaja samo polja `title` , `summary` , `brief` in `description` .

## Ne Prevajajte Imen Spremenljivk

`Markdown` se uporablja kot e-poštna predloga, `YAML` se uporablja kot konfiguracija jezikovne datoteke in na voljo bodo spremenljivi parametri (na primer: ponovno polnjenje `${amount}` je bilo prejeto).

Imena spremenljivk, kot je `${varname}` ne bodo obravnavana kot angleški prevodi.

## Optimizacija Prevajanja Za Kitajsko, Japonsko in Korejo

### Pri Prevodu v Angleščino Je Prva Črka Naslova Samodejno Velika.

Kitajska, Japonska in Koreja nimajo velikih in malih črk, vendar je po dogovoru za angleške naslove prva črka velika.

`i18` lahko prepozna naslov v `MarkDown` in bo pri prevajanju v jezik, ki razlikuje med velikimi in malimi črkami, prvo črko samodejno napisal z veliko začetnico.

Na primer, `为阅读体验而优化` bo prevedeno v `Optimized for Reading Experience` .

### Angleški Izrazi v Kitajščini, Japonščini, Korejščini in Kitajščini Niso Prevedeni

Dokumenti iz Kitajske, Japonske in Koreje pogosto vsebujejo veliko angleških izrazov.

Strojno prevajanje kitajskega, japonskega in korejskega jezika je postalo neangleški jezik, izrazi pa se pogosto prevajajo skupaj, kot je naslednji kitajski stavek:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Če uporabljate Google ali DeepL, oba nepravilno prevajata angleške izraze, ki bi morali ostati izvirni (za primer vzemite japonščino in francoščino).

### Google Translate

Prevedeno v `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Prevedeno v `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` se prevede kot `faucon` , `Llama` pa kot `lama` . Kot lastnih imen jih ne bi smeli prevajati.

![](//p.3ti.site/1720199451.avif)

### DeepL Prevod

Prevedeno v `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Prevod zgornjega v francoščino (tudi prepisovanje lastnih imen in dodajanje lihe `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Prevod

Prevod `i18` bo prepoznal angleške izraze v kitajskih, japonskih in korejskih dokumentih in jih pustil nedotaknjene.

Na primer, zgornji rezultat japonskega prevoda je:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Francoski prevod je:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Le če je med angleško besedo ter kitajskim, japonskim in korejskim besedilom presledek ali če je angleška dolžina večja od 1, bo beseda obravnavana kot izraz.

Na primer: `C罗` bo prevedeno kot `Cristiano Ronaldo` .

## Lahko Se Kombinira Z Več Kot `i18n.site` Jeziki Za Izdelavo Spletne Strani

`i18` je integriran v orodje ukazne vrstice [`i18n.site`](/i18n.site) za gradnjo večjezičnega spletnega mesta.

Za podrobnosti glejte dokumentacijo [`i18n.site`](/i18n.site) .

## Odprta Koda

Odjemalec je popolnoma odprtokoden, strežniška stran pa je odprtokodna 90 [Kliknite tukaj za ogled izvorne kode](/i18n.site/c/src) .

Iščemo prostovoljce za sodelovanje pri razvoju odprtokodne kode in lektoriranju prevedenih besedil.

Če vas zanima, [→ kliknite tukaj, da izpolnite svoj profil](https://ggl.link/i18n) in se nato pridružite [poštnemu seznamu](https://groups.google.com/u/2/g/i18n-site) za komunikacijo.

## Ostati v Stiku

Prosimo <button onclick="mailsub()">, kliknite to e-pošto, da se naročite na posodobitve izdelkov</button> in <button onclick="webpush()">omogočite push brskalnik</button> . Obvestili vas bomo, ko bodo izvedene posodobitve izdelkov.

/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) k spremljanju naših socialnih računov [X.COM: @i18nSite](https://x.com/i18nSite)
# Karakteristike Proizvoda

`i18` je alatka komandne linije za prevođenje Markdown & Yaml

## Može Savršeno Održavati Format Markdowna

Podržava prevođenje Markdown tabela bez oštećenja formata ne prevodi riječi u matematičkim formulama ili vezama.

Podržava prijevod Markdown u mješovitom HTML `<pre>` HTML u `<code>` `MarkDown`

## Može Prepoznati Matematičke Formule I Preskočiti Prijevod

Matematičke formule se prepoznaju i prijevod se preskače.

Za kako napisati matematičke formule, pogledajte [" Github O pisanju matematičkih izraza"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Mogućnost Prevođenja Komentara U Isječcima Koda

Inline kod i isječci koda se ne prevode, ali komentari u kodu se mogu prevesti.

` ```rust ` prijevoda moraju navesti jezik : ` ``` `

Trenutno podržava prevođenje komentara `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` , `python` , `bash` , `php` [i druge jezike](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ako programski jezik koji vam je potreban nije dostupan, [kontaktirajte nas](https://groups.google.com/g/i18n-site) .

## Pogodan Za Komandnu Liniju

Postoji mnogo [teških alata](https://www.capterra.com/translation-management-software) dostupnih za upravljanje prijevodnim dokumentima.

Za programere koji su upoznati sa `git` `vim` , `vscode` , korištenje ovih alata za uređivanje dokumenata i upravljanje verzijama će nesumnjivo povećati troškove učenja.

( `Keep It Simple, Stupid` ) Među onima koji vjeruju u princip `KISS` rješenja na nivou preduzeća su sinonim za glomaznost, neefikasnost i tešku upotrebu.

Prevod bi trebalo da se uradi unošenjem komandi i dovršavanjem jednim klikom. Ne bi trebalo biti složenih zavisnosti od okruženja.

Nemojte dodavati entitete osim ako je potrebno.

## Bez Modifikacija, Bez Prijevoda

Postoje i neki alati za prevođenje komandne linije, kao što je [translate-shell](https://github.com/soimort/translate-shell)

Međutim, oni ne podržavaju identifikaciju izmjena datoteka i samo prevode izmijenjene datoteke kako bi smanjili troškove i povećali efikasnost.

## Prijevod Se Može Uređivati, a Strojni Prijevod Neće Prepisati Postojeće Izmjene.

Prijevod se može uređivati.

Izmenite originalni tekst i ponovo ga mašinski prevedite, ručne izmene prevoda neće biti prepisane (ako ovaj paragraf originalnog teksta nije izmenjen).

## Xindayin Visokokvalitetni Prijevod

Razvili smo novu generaciju prevodilačke tehnologije koja kombinuje tehničke prednosti tradicionalnih modela mašinskog prevođenja i velikih jezičkih modela kako bi prevode učinili preciznim, glatkim i elegantnim.

Slijepi testovi pokazuju da je kvalitet našeg prijevoda znatno bolji u odnosu na slične usluge.

Da bi se postigao isti kvalitet, količina ručnog uređivanja `ChatGPT` zahtijeva Google Translate je `2.67` puta i `3.15` puta naša.

## <a rel=id href="#price" id="price"></a> Izuzetno konkurentne cijene

|                                                                                   | USD/milion riječi |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Napomena: Broj znakova za naplatu = [broj unicode](https://en.wikipedia.org/wiki/Unicode) u izvornoj datoteci × broj jezika u prijevodu

## Podrška Prijevodu `YAML`

Alat prevodi samo vrijednosti rječnika `YAML` , ne i ključeve rječnika.

Na osnovu `YAML` , možete lako izgraditi međunarodna rješenja za različite programske jezike.

## Podrška Za Prijevod `HOGO`

Podržava konfiguraciju [HOGO](https://github.com/gohugoio/hugo) statičnog bloga, prevedena su `summary` `description` `title`

## Nemojte Prevoditi Imena Varijabli

`Markdown` se kao predložak e-pošte, `YAML` kao konfiguracija jezičke datoteke, bit će promjenjivi parametri (na primjer: primljeno je `${amount}` punjenje).

Ova vrsta imena varijable neće se smatrati prijevodom na engleski `${varname}`

## Optimizacija Prijevoda Za Kinu, Japan I Koreju

### Kada Se Prevede Na Engleski, Prvo Slovo Naslova Je Automatski Veliko.

Kina, Japan i Koreja nemaju velika ili mala slova, ali engleski naslovi uglavnom pišu veliko slovo.

`i18` može prepoznati naslove u `MarkDown` i automatski će pisati veliko slovo kada se prevodi na jezik koji razlikuje velika i mala slova.

Na primjer `为阅读体验而优化` biće prevedeno kao `Optimized for Reading Experience` .

### Engleski Izrazi Na Kineskom, Japanskom, Korejskom I Kineskom Se Ne Prevode

Dokumenti iz Kine, Japana i Koreje često sadrže mnogo engleskih termina.

Mašinsko prevođenje kineskog, japanskog i korejskog jezika postalo je neengleski jezik, a termini se često prevode zajedno, kao što je sljedeća kineska rečenica:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ako koristite Google ili DeepL, oboje pogrešno prevode engleski termine koji bi trebali ostati originalni (uzmite japanski i francuski kao primjere).

### Google Prevodilac

Prevedeno na `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Prevedeno na `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` se prevodi kao `faucon` , a `Llama` se prevodi kao `lama` . Kao vlastite imenice, ne treba ih prevoditi.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Prevod

Prevedeno na `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL gore navedenog na francuski (također prepisivanjem vlastitih imena i dodavanjem neparnih `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Prevod

`i18` s prijevod će prepoznati engleske termine u kineskim, japanskim i korejskim dokumentima i ostaviti ih netaknutim.

Na primjer, gornji rezultat prijevoda na japanski je:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Francuski prijevod je:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Samo kada postoji razmak između engleske riječi i kineskog, japanskog i korejskog teksta ili je engleska dužina veća od 1, riječ će se smatrati pojmom.

`Cristiano Ronaldo` primjer: `C罗`

## Može Se `i18n.site` Višejezična Izrada Web Stranice

Integrisano je u alatku komandne linije za višejezičnu izgradnju veb sajta [`i18n.site`](/i18n.site) `i18`

Za detalje pogledajte dokumentaciju [`i18n.site`](/i18n.site)

## Kod Otvorenog Koda

Klijent je potpuno otvorenog koda, a 90 strani servera je otvoren [izvorni kod](/i18n.site/src) .

Tražimo volontere za učešće u razvoju otvorenog koda i lekturi prevedenih tekstova.

Ako ste zainteresovani, molimo vas [→ Kliknite ovdje da popunite svoj profil](https://ggl.link/i18n) , a zatim se pridružite [mailing listi](https://groups.google.com/u/2/g/i18n-site) za komunikaciju.

## Ostati U Kontaktu

Molimo <button onclick="mailsub()">kliknite na ovu e-poštu da biste se pretplatili na ažuriranja proizvoda</button> i <button onclick="webpush()">omogućili push preglednika</button> . Obavijestit ćemo vas kada budu napravljena ažuriranja proizvoda.

Takođe / da pratite naše društvene [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)

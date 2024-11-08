# Značajke Proizvoda

`i18` je alat naredbenog retka za prijevod Markdown & Yaml

## Može Savršeno Održavati Format Markdown-A

Podržava prijevod Markdown tablica bez oštećenja formata; ne prevodi riječi u matematičkim formulama ili vezama.

Podržava prijevod mješovitih HTML Markdown , sadržaj u oznakama `<pre>` i `<code>` ugrađen u HTML `MarkDown` nije preveden

## Može Prepoznati Matematičke Formule I Preskočiti Prijevod

Matematičke formule se prepoznaju, a prijevod se preskače.

Za pisanje matematičkih formula pogledajte [" Github O pisanju matematičkih izraza"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Mogućnost Prevođenja Komentara U Isječcima Koda

Inline kod i isječci koda se ne prevode, ali se komentari u kodu mogu prevesti.

Komentari prijevoda moraju navesti jezik nakon ` ``` ` , kao što ` ```rust ` :

Trenutno podržava prijevod komentara na `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [i druge jezike](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ako želite prevesti sve znakove koji nisu engleski u kodu, označite segment koda s ` ```i18n ` .

Ako programski jezik koji vam je potreban nije dostupan, [kontaktirajte nas](https://groups.google.com/g/i18n-site) .

## Pogodan Za Naredbenu Liniju

Dostupni su mnogi [teški alati](https://www.capterra.com/translation-management-software) za upravljanje dokumentima za prijevod.

Za programere koji su upoznati s `git` , `vim` i `vscode` , korištenje ovih alata za uređivanje dokumenata i upravljanje verzijama nedvojbeno će povećati troškove učenja.

`KISS` ( `Keep It Simple, Stupid` ) Među načelnim vjernicima, rješenja na razini poduzeća sinonim su za glomazna, neučinkovita i teška za korištenje.

Prijevod bi se trebao izvršiti unosom naredbi i njihovim dovršavanjem jednim klikom. Ne bi trebalo biti složenih ovisnosti o okruženju.

Nemojte dodavati entitete ako nije potrebno.

## Nema Izmjena, Nema Prijevoda

Postoje i neki alati za prevođenje naredbenog retka, kao što je [translate-shell](https://github.com/soimort/translate-shell)

Međutim, oni ne podržavaju prepoznavanje izmjena datoteka i samo prevode modificirane datoteke kako bi smanjili troškove i povećali učinkovitost.

## Prijevod Se Može Uređivati, a Strojno Prevođenje Neće Prebrisati Postojeće Izmjene.

Prijevod je moguće uređivati.

Izmijenite izvorni tekst i ponovno ga strojno prevedite, ručne izmjene prijevoda neće biti prebrisane (ako ovaj odlomak izvornog teksta nije izmijenjen).

## Najkvalitetniji Strojni Prijevod

Razvili smo novu generaciju tehnologije prevođenja koja kombinira tehničke prednosti tradicionalnih modela strojnog prevođenja i velikih jezičnih modela kako bi prijevodi bili točni, glatki i elegantni.

Slijepi testovi pokazuju da je naša kvaliteta prijevoda znatno bolja u usporedbi sa sličnim uslugama.

Kako bi se postigla ista kvaliteta, količina ručnog uređivanja koju zahtijevaju Google Translate i `ChatGPT` je `2.67` puta i `3.15` puta veća od naše.

## <a rel=id href="#price" id="price"></a> Izuzetno konkurentne cijene

|                                                                                   | USD/milijun riječi |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kliknite ovdje za autorizaciju i automatsko i18n.site knjižnice github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **primite bonus $50** .

Napomena: Broj naplativih znakova = [broj unicode](https://en.wikipedia.org/wiki/Unicode) u izvornoj datoteci × broj jezika u prijevodu

## Podrška Za Prijevod `YAML`

Alat samo prevodi vrijednosti rječnika u `YAML` , a ne ključeve rječnika.

Na temelju `YAML` prijevoda možete jednostavno izgraditi međunarodna rješenja za različite programske jezike.

## Podržava Konfiguraciju Zaglavlja Prijevoda `HOGO`

Podržava konfiguraciju zaglavlja statičnog bloga tipa [HOGO](https://github.com/gohugoio/hugo) i prevodi samo polja `title` , `summary` , `brief` i `description` .

## Nemojte Prevoditi Nazive Varijabli

`Markdown` se koristi kao predložak e-pošte, `YAML` se koristi kao konfiguracija jezične datoteke i postojat će promjenjivi parametri (na primjer: nadoplata `${amount}` je primljena).

Nazivi varijabli poput `${varname}` neće se smatrati engleskim prijevodima.

## Optimizacija Prijevoda Za Kinu, Japan I Koreju

### Kada Se Prevodi Na Engleski, Prvo Slovo Naslova Automatski Se Piše Velikim Slovom.

Kina, Japan i Koreja nemaju velika i mala slova, ali je konvencija za engleske naslove da se prvo slovo piše velikim.

`i18` može prepoznati naslov u `MarkDown` i automatski će početno slovo biti veliko pri prevođenju na jezik koji razlikuje velika i mala slova.

Na primjer, `为阅读体验而优化` će se prevesti u `Optimized for Reading Experience` .

### Engleski Termini Na Kineskom, Japanskom, Korejskom I Kineskom Se Ne Prevode

Dokumenti iz Kine, Japana i Koreje često sadrže mnogo engleskih izraza.

Strojno prevođenje kineskog, japanskog i korejskog jezika postalo je ne-engleski jezik, a pojmovi se često prevode zajedno, poput sljedeće kineske rečenice:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ako koristite Google ili DeepL, oba netočno prevode engleske izraze koji bi trebali ostati izvorni (uzmite japanski i francuski kao primjere).

### Google Prevoditelj

Prevedeno na `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Prevedeno na `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` se prevodi kao `faucon` , a `Llama` kao `lama` . Kao vlastite imenice, ne bi ih trebalo prevoditi.

![](//p.3ti.site/1720199451.avif)

### DeepL Prijevod

Prevedeno na `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Prijevod navedenog na francuski (također prepisivanje vlastitih imena i dodavanje neparne `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Prijevod Stranice i18n

`i18` -ov prijevod će prepoznati engleske termine u kineskim, japanskim i korejskim dokumentima i ostaviti termine netaknutima.

Na primjer, gornji rezultat prijevoda na japanski je:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Francuski prijevod je:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Samo kada postoji razmak između engleske riječi i kineskog, japanskog i korejskog teksta ili ako je duljina na engleskom veća od 1, riječ će se smatrati pojmom.

Na primjer: `C罗` će se prevesti kao `Cristiano Ronaldo` .

## Može Se Kombinirati S Više Od `i18n.site` Jezika Za Izradu Web Stranice

`i18` integriran je u višejezični alat naredbenog retka za izradu web stranica [`i18n.site`](/i18n.site) .

Pogledajte dokumentaciju [`i18n.site`](/i18n.site) za detalje.

## Kod Otvorenog Koda

Klijent je potpuno otvorenog koda, a poslužiteljska strana je otvorenog koda 90 [Kliknite ovdje da vidite izvorni kod](/i18n.site/c/src) .

Tražimo volontere za sudjelovanje u razvoju open source koda i lektoriranju prevedenih tekstova.

Ako ste zainteresirani, molimo [→ Kliknite ovdje da ispunite svoj profil](https://ggl.link/i18n) , a zatim se pridružite [mailing listi](https://groups.google.com/u/2/g/i18n-site) za komunikaciju.

## Ostati U Kontaktu

<button onclick="mailsub()">Kliknite ovu e-poštu da biste se pretplatili na ažuriranja proizvoda</button> i <button onclick="webpush()">omogućili push preglednik</button> . Obavijestit ćemo vas kada se ažuriraju proizvodi.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) / da pratite naše društvene račune [X.COM: @i18nSite](https://x.com/i18nSite)
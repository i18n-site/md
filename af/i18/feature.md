# Produk Kenmerke

`i18` is die opdragreëlinstrument vir vertaling Markdown & Yaml

## Kan Die Formaat Van Markdown Perfek Handhaaf

Ondersteun vertaling van Markdown-tabelle sonder om die formaat te beskadig, vertaal nie woorde in wiskundige formules of skakels nie.

Ondersteun vertaling van HTML Markdown , die inhoud in etikette `<pre>` en `<code>` ingebed in HTML `MarkDown` is nie vertaal nie

## Kan Wiskundige Formules Herken en Vertaling Oorslaan

Wiskundige formules word herken en vertaling word oorgeslaan.

Vir hoe om wiskundige formules te skryf, verwys asseblief na [" Github Oor die skryf van wiskundige uitdrukkings"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Vermoë Om Opmerkings in Kodebrokkies Te Vertaal

Inlyn-kode en kodebrokkies word nie vertaal nie, maar opmerkings in die kode kan vertaal word.

Vertaalkommentaar moet die taal na ` ``` ` ` ```rust ` , soos :

Tans ondersteun dit annotasievertaling in `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [en ander tale](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

As jy alle nie-Engelse karakters in die kode wil vertaal, merk die kodesegment met ` ```i18n ` .

As die programmeertaal wat jy benodig nie beskikbaar is nie, [kontak ons](https://groups.google.com/g/i18n-site) asseblief.

## Command Line Vriendelik

Daar is baie [swaargewig gereedskap](https://www.capterra.com/translation-management-software) beskikbaar vir die bestuur van vertaaldokumente.

Vir programmeerders wat vertroud is met `git` , `vim` en `vscode` , sal die gebruik van hierdie instrumente om dokumente te redigeer en weergawes te bestuur ongetwyfeld die leerkoste verhoog.

`KISS` ( `Keep It Simple, Stupid` ) Onder beginselgelowiges is oplossings op ondernemingsvlak sinoniem met omslagtig, ondoeltreffend en moeilik om te gebruik.

Vertaling moet gedoen word deur opdragte in te voer en dit met een klik te voltooi. Daar behoort geen komplekse omgewingsafhanklikhede te wees nie.

Moenie entiteite byvoeg nie, tensy dit nodig is.

## Geen Wysiging, Geen Vertaling

Daar is ook 'n paar opdragreëlvertaalinstrumente, soos [translate-shell](https://github.com/soimort/translate-shell)

Hulle ondersteun egter nie die identifisering van lêerwysigings nie en vertaal slegs gewysigde lêers om koste te verminder en doeltreffendheid te verhoog.

## Die Vertaling Kan Geredigeer Word, en Masjienvertaling Sal Nie Bestaande Wysigings Oorskryf Nie.

Die vertaling is redigeerbaar.

Verander die oorspronklike teks en masjienvertaal dit weer, die handmatige wysigings aan die vertaling sal nie oorskryf word nie (indien hierdie paragraaf van die oorspronklike teks nie gewysig is nie).

## Beste Kwaliteit Masjienvertaling

Ons het 'n nuwe generasie vertaaltegnologie ontwikkel wat die tegniese voordele van tradisionele masjienvertalingsmodelle en groot taalmodelle kombineer om vertalings akkuraat, glad en elegant te maak.

Blinde toetse toon dat ons vertalingskwaliteit aansienlik beter is in vergelyking met soortgelyke dienste.

Om dieselfde kwaliteit te bereik, is die hoeveelheid handmatige redigering wat deur Google Translate en `ChatGPT` vereis word, onderskeidelik `2.67` keer en `3.15` keer dié van ons s'n.

## <a rel=id href="#price" id="price"></a> Uiters mededingende pryse

|                                                                                   | USD/miljoen woorde |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klik hier om die github biblioteek te magtig en outomaties i18n.site volg](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) en **bonus $50 te ontvang** .

Let wel: Die aantal faktuurbare karakters = [die aantal unicode](https://en.wikipedia.org/wiki/Unicode) in die bronlêer × die aantal tale in die vertaling

## Ondersteun Vertaling `YAML`

Die instrument vertaal slegs die woordeboekwaardes in `YAML` , nie die woordeboeksleutels nie.

Op grond van `YAML` vertaling, kan jy maklik internasionale oplossings vir verskeie programmeertale bou.

## Ondersteun Vertaling `HOGO` Kopkonfigurasie

Ondersteun die kopkonfigurasie van tipe [HOGO](https://github.com/gohugoio/hugo) blog, en vertaal slegs velde `title` , `summary` , `brief` en `description` .

## Moenie Veranderlike Name Vertaal Nie

`Markdown` word gebruik as 'n e-possjabloon, `YAML` word gebruik as 'n taallêerkonfigurasie, en daar sal veranderlike parameters wees (byvoorbeeld: herlaai `${amount}` is ontvang).

Veranderlike name soos `${varname}` sal nie as Engelse vertalings beskou word nie.

## Vertaling Optimalisering Vir China, Japan en Korea

### Wanneer Dit in Engels Vertaal Word, Word Die Eerste Letter Van Die Titel Outomaties Gekapitaliseer.

China, Japan en Korea het nie hoofletters en kleinletters nie, maar die konvensie vir Engelse titels is om die eerste letter met hoofletters te gebruik.

`i18` kan die titel in `MarkDown` herken en sal die eerste letter outomaties hoofletters gebruik wanneer dit in 'n hooflettersensitiewe taal vertaal word.

Byvoorbeeld, `为阅读体验而优化` sal in `Optimized for Reading Experience` vertaal word.

### Engelse Terme in Chinees, Japannees, Koreaans en Chinees Word Nie Vertaal Nie

Dokumente uit China, Japan en Korea bevat dikwels baie Engelse terme.

Masjienvertaling van Chinese, Japannese en Koreaanse tale het 'n nie-Engelse taal geword, en terme word dikwels saam vertaal, soos die volgende Chinese sin:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

As jy Google of DeepL gebruik, vertaal hulle albei Engelse terme wat oorspronklik moet bly (neem Japannees en Frans as voorbeelde).

### Google Translate

Vertaal `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` Japannees :

![](//p.3ti.site/1720199391.avif)

Vertaal `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` Frans :

`Falcon` word as `faucon` vertaal en `Llama` word as `lama` vertaal. As eiename moet hulle nie vertaal word nie.

![](//p.3ti.site/1720199451.avif)

### DeepL Vertaling

Vertaal `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` Japannees :

![](//p.3ti.site/1720199550.avif)

DeepL van bogenoemde in Frans (herskryf ook die eiename en voeg die vreemde `... ` by):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.webwerf Vertaling

`i18` se vertaling sal Engelse terme in Chinese, Japannese en Koreaanse dokumente herken en die terme ongeskonde laat.

Byvoorbeeld, die Japannese vertalingsresultaat hierbo is:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Die Franse vertaling is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Slegs wanneer daar 'n spasie tussen die Engelse woord en die Chinese, Japannese en Koreaanse teks is of die Engelse lengte groter as 1 is, sal die woord as 'n term beskou word.

Byvoorbeeld: `C罗` sal as `Cristiano Ronaldo` vertaal word.

## Kan Gekombineer Word Met Meer as `i18n.site` Tale Om 'n Webwerf Te Bou

`i18` is geïntegreer in die veeltalige webwerfbou-opdragreëlhulpmiddel [`i18n.site`](/i18n.site) .

Sien die dokumentasie van [`i18n.site`](/i18n.site) vir besonderhede.

## Kode Oopbron

Die kliënt is heeltemal oopbron, en die 90 % van die kode is oopbron. [Klik hier om die bronkode te sien](/i18n.site/c/src) .

Ons is op soek na vrywilligers om deel te neem aan die ontwikkeling van oopbronkode en proeflees van vertaalde tekste.

As jy belangstel, asseblief [→ Klik hier om jou profiel in te vul](https://ggl.link/i18n) en sluit dan aan by [die poslys](https://groups.google.com/u/2/g/i18n-site) vir kommunikasie.

## Hou Kontak

<button onclick="mailsub()">Klik asseblief hierdie e-pos om in te teken op produkopdaterings</button> en <button onclick="webpush()">aktiveer blaaierstoot</button> . Ons sal jou in kennis stel wanneer produkopdaterings gemaak word.

Ook / om ons [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) rekeninge te volg [X.COM: @i18nSite](https://x.com/i18nSite)
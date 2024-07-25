# Mga Feature Sa Produkto

usa `i18` himan sa command line para sa paghubad Markdown & Yaml

## Mahimo Nga Hingpit Nga Mapadayon Ang Format Sa Markdown

Nagsuporta sa paghubad sa mga lamesa sa Markdown nga dili makadaot sa pormat; wala maghubad sa mga pulong sa mga pormula sa matematika o mga link.

Nagsuporta `<code>` paghubad sa Markdown sa mixed HTML `<pre>` HTML sa `MarkDown`

## Makaila Sa Mga Pormula Sa Matematika Ug Makalaktaw Sa Paghubad

Giila ang mga pormula sa matematika ug gilaktawan ang paghubad.

Para unsaon pagsulat ang mga pormula sa matematika, palihog tan-awa ang [" Github Bahin sa Pagsulat sa mga Ekspresyong Matematika"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kaarang Sa Paghubad Sa Mga Komento Sa Mga Snippet Sa Code

Ang inline nga code ug code snippet wala gihubad, apan ang mga komento sa code mahimong hubaron.

: mga komentaryo sa paghubad kinahanglang magpakita sa pinulongan human ` ```rust ` ` ``` `

`yaml` `java` `js` `json5` `go` `c` `cpp` `rust` `toml` `coffee` `python` `bash` `php`[](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14)

Kung wala ang programming language nga imong gikinahanglan, palihog [kontaka mi](https://groups.google.com/g/i18n-site) .

## Mahigalaon Ang Command Line

Adunay daghang [bug-at nga mga himan](https://www.capterra.com/translation-management-software) nga magamit alang sa pagdumala sa mga dokumento sa paghubad.

Para sa mga programmer nga pamilyar sa `git` , `vim` , `vscode` , ang paggamit niini nga mga himan sa pag-edit sa mga dokumento ug pagdumala sa mga bersyon sa walay duhaduha makadugang sa gasto sa pagkat-on.

`KISS` `Keep It Simple, Stupid`

Ang paghubad kinahanglan buhaton pinaagi sa pag-input sa mga mando ug pagkompleto niini sa usa ka pag-klik.

Ayaw pagdugang og mga entidad gawas kung gikinahanglan.

## Walay Kausaban, Walay Hubad

Adunay usab pipila ka mga himan sa paghubad sa linya sa mando, sama sa [translate-shell](https://github.com/soimort/translate-shell)

Bisan pa, wala nila gisuportahan ang pag-ila sa mga pagbag-o sa file ug gihubad lamang ang gibag-o nga mga file aron makunhuran ang gasto ug madugangan ang kahusayan.

## Mahimong I-Edit Ang Paghubad, Ug Ang Paghubad Sa Makina Dili Mag-Overwrite Sa Mga Naglungtad Nga Pagbag-O.

Ang hubad ma-edit.

Usba ang orihinal nga teksto ug i-machine-translate kini pag-usab, ang manwal nga mga pagbag-o sa paghubad dili ma-overwrite (kung kini nga parapo sa orihinal nga teksto wala giusab).

## Ang Taas Nga Kalidad Nga Paghubad Sa Xindaya

Nakahimo kami og bag-ong henerasyon sa teknolohiya sa paghubad nga naghiusa sa mga teknikal nga bentaha sa tradisyonal nga mga modelo sa paghubad sa makina ug dagkong mga modelo sa pinulongan aron sa paghimo sa mga paghubad nga tukma, hapsay ug elegante.

Gipakita sa mga buta nga pagsulay nga ang kalidad sa among paghubad labi ka maayo kung itandi sa parehas nga mga serbisyo.

Aron makab-ot ang parehas nga kalidad, ang kantidad sa manual `3.15` pag-edit nga gikinahanglan sa Google `2.67` ug `ChatGPT`

## <a rel=id href="#price" id="price"></a> Labi nga kompetisyon nga presyo

|                                                                                   | USD/million nga mga pulong |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Mubo nga sulat: Ang gidaghanon sa mabayran nga mga karakter = [ang gidaghanon sa unicode](https://en.wikipedia.org/wiki/Unicode) sa tinubdan nga file × ang gidaghanon sa mga pinulongan sa paghubad

## Suportahi Ang Paghubad `YAML`

Ang himan naghubad lamang sa mga bili sa diksyonaryo sa `YAML` , dili ang mga yawe sa diksyonaryo.

Base sa `YAML` Translation, dali ka makabuhat ug internasyonal nga mga solusyon alang sa lain-laing mga programming language.

## Suportahi Ang Paghubad `HOGO`

Nagsuporta sa configuration sa header sa [HOGO](https://github.com/gohugoio/hugo) type nga static nga blog, ang `title` , `summary` ug `description` field lang ang gihubad.

## Ayaw Paghubad Sa Lain-Laing Mga Ngalan

`Markdown` Gigamit isip template sa email, `YAML` isip configuration sa file sa pinulongan, adunay mga variable nga parameter (pananglitan: ang recharge `${amount}` nadawat).

`${varname}` Kini nga matang sa variable nga ngalan dili isipon nga English translation.

## Pag-Optimize Sa Paghubad Alang Sa China, Japan Ug Korea

### Kung Gihubad Sa English, Ang Unang Letra Sa Titulo Awtomatik Nga Gi-Capital.

Ang China, Japan, ug Korea walay uppercase o lowercase nga mga letra, apan ang English nga mga titulo sa kasagaran nag-capital sa unang letra.

`i18` makaila sa mga titulo sa `MarkDown` , ug awtomatik nga mag-capital sa unang letra kon maghubad ngadto sa case-sensitive nga pinulongan.

`Optimized for Reading Experience` `为阅读体验而优化`

### Ang Mga Termino Sa English Sa Chinese, Japanese, Korean Ug Chinese Wala Gihubad

Ang mga dokumento gikan sa China, Japan ug Korea sagad adunay daghang English nga termino.

Ang paghubad sa makina sa Chinese, Japanese ug Korean nga mga pinulongan nahimong dili Iningles nga pinulongan, ug ang mga termino sagad gihubad nga magkauban, sama sa mosunod nga Chinese sentence:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Kung mogamit ka sa Google o DeepL, silang duha sayop nga naghubad sa English nga mga termino nga kinahanglan magpabilin nga orihinal (kuhaa ang Japanese ug French nga mga pananglitan).

### Google Translate

Gihubad sa `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Gihubad sa `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` gihubad nga `faucon` ug `Llama` gihubad nga `lama` . Isip tukma nga mga nombre, dili sila kinahanglan hubaron.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Nga Paghubad

Gihubad sa `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Nga Paghubad

`i18`

Pananglitan, ang resulta sa paghubad sa Hapon sa ibabaw mao ang:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Ang Pranses nga hubad mao ang:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Sa diha lamang nga adunay usa ka luna tali sa English nga pulong ug sa Chinese, Japanese ug Korean nga teksto o ang English nga gitas-on labaw pa sa 1, ang pulong pagaisipon nga usa ka termino.

`Cristiano Ronaldo` `C罗`

## Mahimong Ikombinar `i18n.site`

`i18` Gi-integrate sa command line tool para sa multi-language nga website building [`i18n.site`](/i18n.site) .

Tan-awa ang dokumentasyon sa [`i18n.site`](/i18n.site)

## Code Open Source

Ang kliyente bug-os nga open source, ug ang server 90 % sa code kay open source [I-klik dinhi aron makita ang source code](/i18n.site/src) .

Nangita mig mga boluntaryo nga moapil sa paghimo sa open source code ug pag-proofread sa mga gihubad nga teksto.

Kung interesado ka, palihug [→ Pag-klik dinhi aron pun-on ang imong profile](https://ggl.link/i18n) ug dayon pag-apil [sa mailing list](https://groups.google.com/u/2/g/i18n-site) alang sa komunikasyon.

## Padayon Sa Pagkontak

Palihug <button onclick="mailsub()">i-klik kini nga email aron mag-subscribe sa mga update sa produkto</button> ug <button onclick="webpush()">mahimo ang pagduso sa browser</button> .

Welcome / sa pag-follow sa among social [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)

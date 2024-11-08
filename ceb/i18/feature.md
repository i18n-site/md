# Mga Bahin Sa Produkto

`i18` mao ang command line tool para sa paghubad Markdown & Yaml

## Mahimo Nga Hingpit Nga Mapadayon Ang Format Sa Markdown

Nagsuporta sa paghubad sa mga lamesa sa Markdown nga dili makadaot sa pormat; wala maghubad sa mga pulong sa mga pormula sa matematika o mga link.

Markdown HTML `<pre>` `<code>` `MarkDown` HTML

## Makaila Sa Mga Pormula Sa Matematika Ug Makalaktaw Sa Paghubad

Giila ang mga pormula sa matematika ug gilaktawan ang paghubad.

Para unsaon pagsulat ang mga pormula sa matematika, palihog tan-awa ang [" Github Bahin sa Pagsulat sa mga Ekspresyong Matematika"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kaarang Sa Paghubad Sa Mga Komento Sa Mga Snippet Sa Code

Ang inline nga code ug code snippet wala gihubad, apan ang mga komento sa code mahimong hubaron.

` ```rust ` mga komento sa paghubad kinahanglang magpakita sa pinulongan human sa ` ``` ` , sama sa :

Sa pagkakaron, gisuportahan niini ang paghubad sa anotasyon sa `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [ug uban pang mga pinulongan](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Kung gusto nimong hubaron ang tanan nga dili Ingles nga mga karakter sa code, markahi ang bahin sa code nga adunay ` ```i18n ` .

Kung wala ang programming language nga imong gikinahanglan, palihog [kontaka mi](https://groups.google.com/g/i18n-site) .

## Mahigalaon Ang Command Line

Adunay daghang [bug-at nga mga himan](https://www.capterra.com/translation-management-software) nga magamit alang sa pagdumala sa mga dokumento sa paghubad.

Para sa mga programmer nga pamilyar sa `git` , `vim` , ug `vscode` , ang paggamit niini nga mga himan sa pag-edit sa mga dokumento ug pagdumala sa mga bersyon sa walay duhaduha makadugang sa gasto sa pagkat-on.

`KISS` ( `Keep It Simple, Stupid` ) Taliwala sa mga magtotoo sa prinsipyo, ang mga solusyon sa lebel sa negosyo susama sa pagka hago, dili episyente, ug lisud gamiton.

Ang paghubad kinahanglan buhaton pinaagi sa pag-input sa mga mando ug pagkompleto niini sa usa ka pag-klik.

Ayaw pagdugang og mga entidad gawas kung gikinahanglan.

## Walay Kausaban, Walay Hubad

Adunay usab pipila ka mga himan sa paghubad sa linya sa mando, sama sa [translate-shell](https://github.com/soimort/translate-shell)

Bisan pa, wala nila gisuportahan ang pag-ila sa mga pagbag-o sa file ug gihubad lamang ang gibag-o nga mga file aron makunhuran ang gasto ug madugangan ang kahusayan.

## Mahimong I-Edit Ang Paghubad, Ug Ang Paghubad Sa Makina Dili Mag-Overwrite Sa Mga Naglungtad Nga Pagbag-O.

Ang hubad ma-edit.

Usba ang orihinal nga teksto ug i-machine-translate kini pag-usab, ang manwal nga mga pagbag-o sa paghubad dili ma-overwrite (kung kini nga parapo sa orihinal nga teksto wala giusab).

## Labing Maayo Nga Kalidad Nga Paghubad Sa Makina

Nakahimo kami og bag-ong henerasyon sa teknolohiya sa paghubad nga naghiusa sa mga teknikal nga bentaha sa tradisyonal nga mga modelo sa paghubad sa makina ug dagkong mga modelo sa pinulongan aron sa paghimo sa mga paghubad nga tukma, hapsay ug elegante.

Gipakita sa mga buta nga pagsulay nga ang kalidad sa among paghubad labi ka maayo kung itandi sa parehas nga mga serbisyo.

Aron makab-ot ang samang kalidad, ang gidaghanon sa manwal nga pag-edit nga gikinahanglan sa Google Translate ug `ChatGPT` maoy `2.67` ka beses ug `3.15` ka pilo sa atoa.

## <a rel=id href="#price" id="price"></a> Labi nga kompetisyon nga presyo

|                                                                                   | USD/million nga mga pulong |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ I-klik dinhi aron motugot ug awtomatik i18n.site mosunod sa github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ug **makadawat ug bonus $50** .

Mubo nga sulat: Ang gidaghanon sa mabayran nga mga karakter = [ang gidaghanon sa unicode](https://en.wikipedia.org/wiki/Unicode) sa tinubdan nga file × ang gidaghanon sa mga pinulongan sa paghubad

## Suportahi Ang Paghubad `YAML`

Ang himan naghubad lamang sa mga bili sa diksyonaryo sa `YAML` , dili ang mga yawe sa diksyonaryo.

Pinasukad sa `YAML` nga paghubad, dali ka makahimo og internasyonal nga mga solusyon alang sa lainlaing mga sinultian sa programming.

## Suportahi Ang Paghubad `HOGO` Nga Configuration Sa Header

Nagsuporta sa configuration sa header sa [HOGO](https://github.com/gohugoio/hugo) type static nga blog, ug naghubad lang sa field `title` , `summary` , `brief` , ug `description` .

## Ayaw Paghubad Sa Lain-Laing Mga Ngalan

`Markdown` gigamit isip template sa email, `YAML` gigamit isip configuration sa file sa pinulongan, ug adunay mga variable nga parameter (pananglitan: ang recharge `${amount}` nadawat).

Ang variable nga mga ngalan sama sa `${varname}` dili isipon nga English translations.

## Pag-Optimize Sa Paghubad Alang Sa China, Japan Ug Korea

### Kung Gihubad Sa English, Ang Unang Letra Sa Titulo Awtomatik Nga Gi-Capital.

Ang China, Japan, ug Korea walay dagkong letra ug gamay nga letra, apan ang kombensiyon alang sa Ingles nga mga titulo mao ang pag-capital sa unang letra.

`i18` makaila sa titulo sa `MarkDown` , ug awtomatik nga i-capitalize ang unang letra sa dihang maghubad ngadto sa case-sensitive nga pinulongan.

Pananglitan, `为阅读体验而优化` mahubad ngadto sa `Optimized for Reading Experience` .

### Ang Mga Termino Sa English Sa Chinese, Japanese, Korean Ug Chinese Wala Gihubad

Ang mga dokumento gikan sa China, Japan ug Korea sagad adunay daghang English nga termino.

Ang paghubad sa makina sa Chinese, Japanese ug Korean nga mga pinulongan nahimong dili Iningles nga pinulongan, ug ang mga termino sagad gihubad nga magkauban, sama sa mosunod nga Chinese sentence:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Kung mogamit ka sa Google o DeepL, silang duha sayop nga naghubad sa English nga mga termino nga kinahanglan magpabilin nga orihinal (kuhaa ang Japanese ug French nga mga pananglitan).

### Google Translate

Gihubad `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` Hapon :

![](//p.3ti.site/1720199391.avif)

Gihubad `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` Pranses :

`Falcon` gihubad nga `faucon` ug `Llama` gihubad nga `lama` . Isip proper nouns, dili kini angay hubaron.

![](//p.3ti.site/1720199451.avif)

### DeepL Nga Paghubad

Gihubad `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` Hapon :

![](//p.3ti.site/1720199550.avif)

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Nga Paghubad

Ang hubad ni `i18` makaila sa English nga mga termino sa Chinese, Japanese ug Korean nga mga dokumento ug ibilin ang mga termino nga wala'y labot.

Pananglitan, ang resulta sa paghubad sa Hapon sa ibabaw mao ang:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Ang Pranses nga hubad mao ang:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Sa diha lamang nga adunay usa ka luna tali sa English nga pulong ug sa Chinese, Japanese ug Korean nga teksto o ang English nga gitas-on labaw pa sa 1, ang pulong pagaisipon nga usa ka termino.

Pananglitan: `C罗` ang hubaron nga `Cristiano Ronaldo` .

## Mahimong Ikombinar Sa Labaw Pa Sa `i18n.site` Nga Mga Pinulongan Aron Makahimo Og Website

`i18` gisagol sa multi-language website building command line tool [`i18n.site`](/i18n.site) .

Tan-awa ang dokumentasyon sa [`i18n.site`](/i18n.site) para sa mga detalye.

## Code Open Source

Ang kliyente bug-os nga open source, ug ang server 90 % sa code kay open source [I-klik dinhi aron makita ang source code](/i18n.site/c/src) .

Nangita mig mga boluntaryo nga moapil sa paghimo sa open source code ug pag-proofread sa mga gihubad nga teksto.

Kung interesado ka, palihug [→ Pag-klik dinhi aron pun-on ang imong profile](https://ggl.link/i18n) ug dayon pag-apil [sa mailing list](https://groups.google.com/u/2/g/i18n-site) alang sa komunikasyon.

## Padayon Sa Pagkontak

Palihug <button onclick="mailsub()">i-klik kini nga email aron mag-subscribe sa mga update sa produkto</button> ug <button onclick="webpush()">mahimo ang pagduso sa browser</button> .

/ usab [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) pag-follow sa among social accounts [X.COM: @i18nSite](https://x.com/i18nSite)
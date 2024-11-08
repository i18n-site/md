# Mga Tampok Ng Produkto

`i18` ay ang command line tool para sa pagsasalin Markdown & Yaml

## Maaaring Ganap Na Mapanatili Ang Format Ng Markdown

Sinusuportahan ang pagsasalin ng mga talahanayan ng Markdown nang hindi nakakasira sa format;

Sinusuportahan ang pagsasalin ng mixed HTML Markdown ang nilalaman sa mga tag `<pre>` at `<code>` na naka-embed sa HTML `MarkDown` ay hindi isinalin

## Maaaring Makilala Ang Mga Mathematical Formula at Laktawan Ang Pagsasalin

Kinikilala ang mga pormula sa matematika at nilaktawan ang pagsasalin.

Para sa kung paano sumulat ng mga mathematical formula, mangyaring sumangguni sa [" Github Tungkol sa Pagsulat ng Mga Ekspresyon sa Matematika"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kakayahang Magsalin Ng Mga Komento Sa Mga Snippet Ng Code

Hindi isinasalin ang inline na code at mga snippet ng code, ngunit maaaring isalin ang mga komento sa code.

Kailangang ipahiwatig ng mga komento sa pagsasalin ang wika pagkatapos ng ` ``` ` , tulad : ` ```rust ` .

Sa kasalukuyan, sinusuportahan nito ang pagsasalin ng anotasyon sa `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [at iba pang mga wika](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Kung gusto mong isalin ang lahat ng hindi English na character sa code, markahan ang code segment ng ` ```i18n ` .

Kung hindi available ang programming language na kailangan mo, mangyaring [makipag-ugnayan sa amin](https://groups.google.com/g/i18n-site) .

## Magiliw Sa Command Line

Mayroong maraming [mabibigat na tool](https://www.capterra.com/translation-management-software) na magagamit para sa pamamahala ng mga dokumento ng pagsasalin.

Para sa mga programmer na pamilyar sa `git` , `vim` , at `vscode` , ang paggamit ng mga tool na ito upang i-edit ang mga dokumento at pamahalaan ang mga bersyon ay walang alinlangan na tataas ang gastos sa pag-aaral.

`KISS` ( `Keep It Simple, Stupid` ) Sa mga mananampalataya sa prinsipyo, ang mga solusyon sa antas ng negosyo ay kasingkahulugan ng pagiging mahirap, hindi mahusay, at mahirap gamitin.

Dapat gawin ang pagsasalin sa pamamagitan ng pag-input ng mga utos at pagkumpleto nito sa isang pag-click.

Huwag magdagdag ng mga entity maliban kung kinakailangan.

## Walang Pagbabago, Walang Pagsasalin

Mayroon ding ilang tool sa pagsasalin ng command line, tulad ng [translate-shell](https://github.com/soimort/translate-shell)

Gayunpaman, hindi nila sinusuportahan ang pagtukoy ng mga pagbabago sa file at nagsasalin lamang ng mga binagong file upang mabawasan ang mga gastos at mapataas ang kahusayan.

## Maaaring I-Edit Ang Pagsasalin, at Hindi I-Overwrite Ng Machine Translation Ang Mga Kasalukuyang Pagbabago.

Maaaring i-edit ang pagsasalin.

Baguhin ang orihinal na teksto at i-machine-translate itong muli, ang mga manu-manong pagbabago sa pagsasalin ay hindi mapapatungan (kung ang talatang ito ng orihinal na teksto ay hindi pa nabago).

## Pinakamahusay Na Kalidad Ng Pagsasalin Ng Makina

Nakabuo kami ng bagong henerasyon ng teknolohiya sa pagsasalin na pinagsasama ang mga teknikal na bentahe ng tradisyonal na mga modelo ng pagsasalin ng makina at mga modelo ng malalaking wika upang gawing tumpak, maayos at elegante ang mga pagsasalin.

Ipinapakita ng mga blind test na mas mahusay ang kalidad ng aming pagsasalin kumpara sa mga katulad na serbisyo.

Upang makamit ang parehong kalidad, ang dami ng manu-manong pag-edit na kinakailangan ng Google Translate at `ChatGPT` ay `2.67` beses at `3.15` beses ng sa amin, ayon sa pagkakabanggit.

## <a rel=id href="#price" id="price"></a> Lubhang mapagkumpitensyang pagpepresyo

|                                                                                   | USD/milyong salita |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Mag-click dito upang pahintulutan at awtomatikong i18n.site ang github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) at **makatanggap ng bonus $50** .

Tandaan: Ang bilang ng mga masisingil na character = [ang bilang ng unicode](https://en.wikipedia.org/wiki/Unicode) sa source file × ang bilang ng mga wika sa pagsasalin

## Suportahan Ang Pagsasalin `YAML`

Isinasalin lamang ng tool ang mga halaga ng diksyunaryo sa `YAML` , hindi ang mga key ng diksyunaryo.

Batay sa `YAML` na pagsasalin, madali kang makakagawa ng mga internasyonal na solusyon para sa iba't ibang mga programming language.

## Suportahan Ang Pagsasalin `HOGO` Configuration Ng Header

Sinusuportahan ang configuration ng header ng [HOGO](https://github.com/gohugoio/hugo) na blog na uri, at isinasalin lamang ang mga field `title` , `summary` , `brief` , at `description` .

## Huwag Isalin Ang Mga Variable Na Pangalan

`Markdown` ay ginagamit bilang template ng email, `YAML` ay ginagamit bilang configuration ng file ng wika, at magkakaroon ng mga variable na parameter (halimbawa: natanggap ang recharge `${amount}` ).

Ang mga variable na pangalan tulad ng `${varname}` ay hindi ituturing na mga pagsasalin sa Ingles.

## Pag-Optimize Ng Pagsasalin Para Sa China, Japan at Korea

### Kapag Isinalin Sa Ingles, Ang Unang Titik Ng Pamagat Ay Awtomatikong Naka-Capitalize.

Ang Tsina, Japan, at Korea ay walang malalaking titik at maliliit na titik, ngunit ang kumbensyon para sa mga pamagat sa Ingles ay gawing malaking titik ang unang titik.

Makikilala `i18` ang pamagat sa `MarkDown` , at awtomatikong i-capitalize ang unang titik kapag nagsasalin sa isang case-sensitive na wika.

Halimbawa, `为阅读体验而优化` ay isasalin sa `Optimized for Reading Experience` .

### Hindi Isinalin Ang Mga Terminong Ingles Sa Chinese, Japanese, Korean at Chinese

Ang mga dokumento mula sa China, Japan at Korea ay kadalasang naglalaman ng maraming mga terminong Ingles.

Ang pagsasalin sa makina ng mga wikang Tsino, Hapones at Koreano ay naging isang wikang hindi Ingles, at ang mga termino ay madalas na isinalin nang magkasama, gaya ng sumusunod na pangungusap na Tsino:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Kung gumagamit ka ng Google o DeepL, pareho silang mali ang pagsasalin ng mga terminong Ingles na dapat manatiling orihinal (kunin ang Japanese at French bilang mga halimbawa).

### Google Translate

Isinalin `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` Japanese :

![](//p.3ti.site/1720199391.avif)

Isinalin `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` Pranses :

`Falcon` ay isinalin bilang `faucon` at `Llama` ay isinalin bilang `lama` . Bilang mga pangngalang pantangi, hindi sila dapat isalin.

![](//p.3ti.site/1720199451.avif)

### DeepL Pagsasalin

Isinalin `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` Japanese :

![](//p.3ti.site/1720199550.avif)

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Pagsasalin Ng i18n.site

Makikilala ng pagsasalin ni `i18` ang mga terminong Ingles sa mga dokumentong Chinese, Japanese at Korean at iiwang buo ang mga termino.

Halimbawa, ang resulta ng pagsasalin sa Japanese sa itaas ay:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Ang pagsasalin sa Pranses ay:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Kapag may puwang lamang sa pagitan ng salitang Ingles at ng tekstong Tsino, Hapon at Koreano o ang haba ng Ingles ay higit sa 1, ang salita ay ituturing na isang termino.

Halimbawa: `C罗` ay isasalin bilang `Cristiano Ronaldo` .

## Maaaring Pagsamahin Sa Higit Sa `i18n.site` Wika Upang Makabuo Ng Isang Website

`i18` ay isinama sa multi-language website building command line tool [`i18n.site`](/i18n.site) .

Tingnan ang dokumentasyon ng [`i18n.site`](/i18n.site) para sa mga detalye.

## Code Open Source

Ang kliyente ay ganap na open source, at ang server 90 % ng code ay open source [Mag-click dito upang tingnan ang source code](/i18n.site/c/src) .

Naghahanap kami ng mga boluntaryong lalahok sa pagbuo ng open source code at pag-proofread ng mga isinaling teksto.

Kung interesado ka, mangyaring [→ Mag-click dito upang punan ang iyong profile](https://ggl.link/i18n) at pagkatapos ay sumali [sa mailing list](https://groups.google.com/u/2/g/i18n-site) para sa komunikasyon.

## Makipag-Ugnayan

Paki <button onclick="mailsub()">-click ang email na ito upang mag-subscribe sa mga update ng produkto</button> at <button onclick="webpush()">paganahin ang browser push</button> .

/ ding i-follow ang aming [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) social account [X.COM: @i18nSite](https://x.com/i18nSite)
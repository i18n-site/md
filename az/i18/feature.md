# Məhsul Xüsusiyyətləri

Tərcümə Markdown & Yaml üçün əmr xətti alətidir `i18`

## Markdown Formatını Mükəmməl Şəkildə Saxlaya Bilir

Formaya zərər vermədən Markdown cədvəllərinin tərcüməsini dəstəkləyir, riyazi düsturlar və ya bağlantılardakı sözləri tərcümə etmir;

`<code>` `<pre>` Markdown HTML HTML `MarkDown`

## Riyazi Düsturları Tanıya Və Tərcüməni Atlaya Bilər

Riyazi düsturlar tanınır və tərcümə atlanır.

Riyazi düsturları necə yazmaq üçün [" Github Riyazi ifadələrin yazılması haqqında"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) bölməsinə baxın.

## Kod Fraqmentlərində Şərhləri Tərcümə Etmək Imkanı

Daxili kod və kod parçaları tərcümə edilmir, lakin koddakı şərhlər tərcümə edilə bilər.

Tərcümə şərhlərindən sonra dil göstərilməlidir ` ``` ` ` ```rust ` :

Hal-hazırda , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` , `coffee` `python` , `bash` , `php` [və digər dillərdə](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) `toml` tərcüməsini dəstəkləyir .

Əgər sizə lazım olan proqramlaşdırma dili mövcud deyilsə, [bizimlə əlaqə saxlayın](https://groups.google.com/g/i18n-site) .

## Komanda Xətti Dostudur

Tərcümə sənədlərini idarə etmək üçün bir çox [ağır alətlər](https://www.capterra.com/translation-management-software) mövcuddur.

, `vim` , `vscode` ilə tanış `git` proqramçılar üçün bu vasitələrdən sənədləri redaktə etmək və versiyaları idarə etmək, şübhəsiz ki, öyrənmə xərclərini artıracaq.

`KISS` ( `Keep It Simple, Stupid` ) Prinsipə inananlar arasında müəssisə səviyyəli həllər çətin, səmərəsiz və istifadəsi çətin olması ilə sinonimdir.

Tərcümə əmrləri daxil etməklə və onu bir kliklə tamamlamaqla aparılmalıdır. Mürəkkəb mühitdən asılılıqlar olmamalıdır.

Lazım olmadıqca obyektləri əlavə etməyin.

## Dəyişiklik Yoxdur, Tərcümə Yoxdur

[translate-shell](https://github.com/soimort/translate-shell) bəzi komanda xətti tərcümə alətləri də var.

Bununla belə, onlar fayl dəyişikliklərinin müəyyən edilməsini dəstəkləmir və yalnız xərcləri azaltmaq və səmərəliliyi artırmaq üçün dəyişdirilmiş faylları tərcümə edirlər.

## Tərcümə Redaktə Edilə Bilər Və Maşın Tərcüməsi Mövcud Dəyişikliklərin Üzərinə Yazmayacaq.

Tərcümə redaktə edilə bilər.

Orijinal mətni dəyişdirin və onu yenidən maşınla tərcümə edin, tərcümədə əl ilə edilən dəyişikliklərin üzərinə yazılmayacaq (əgər orijinal mətnin bu paraqrafı dəyişdirilməyibsə).

## Xindayanın Yüksək Keyfiyyətli Tərcüməsi

Biz tərcümələri dəqiq, hamar və zərif etmək üçün ənənəvi maşın tərcüməsi modellərinin və böyük dil modellərinin texniki üstünlüklərini birləşdirən yeni nəsil tərcümə texnologiyasını işləyib hazırlamışıq.

Kor-koranə testlər göstərir ki, bizim tərcümə keyfiyyətimiz oxşar xidmətlərlə müqayisədə xeyli yaxşıdır.

Eyni keyfiyyətə nail olmaq üçün Google Translate və `ChatGPT` tərəfindən tələb olunan əl ilə redaktə miqdarı müvafiq olaraq bizimkilərdən `2.67` dəfə və `3.15` dəfədir.

## <a rel=id href="#price" id="price"></a> Son dərəcə rəqabətli qiymət

|                                                                                   | USD/milyon söz |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Qeyd: Hesablana bilən simvolların sayı = mənbə faylındakı [unicode sayı](https://en.wikipedia.org/wiki/Unicode) × tərcümədəki dillərin sayı

## Tərcüməni Dəstəkləyin `YAML`

Alət lüğət açarlarını deyil, yalnız lüğət dəyərlərini tərcümə edir `YAML`

`YAML` əsasında siz müxtəlif proqramlaşdırma dilləri üçün asanlıqla beynəlxalq həllər yarada bilərsiniz.

## Başlıq Konfiqurasiyasını Dəstəkləyin `HOGO`

[HOGO](https://github.com/gohugoio/hugo) tipli statik blogun başlıq konfiqurasiyasını dəstəkləyir, `title` , `summary` və `description` sahələri tərcümə olunur.

## Dəyişən Adlarını Tərcümə Etməyin

`Markdown` E-poçt şablonu kimi, `YAML` dil faylı konfiqurasiyası kimi istifadə ediləndə dəyişən parametrlər olacaq (məsələn: doldurma `${amount}` alındı).

`${varname}` Bu cür dəyişən ad ingiliscə tərcümə kimi qəbul edilməyəcək.

## Çin, Yaponiya Və Koreya Üçün Tərcümə Optimallaşdırılması

### İngilis Dilinə Tərcümə Edildikdə, Başlığın Ilk Hərfi Avtomatik Olaraq Böyük Hərflə Yazılır.

Çin, Yaponiya və Koreyada böyük və ya kiçik hərf yoxdur, lakin ingilis başlıqları ümumiyyətlə ilk hərfi böyük edir.

`i18` `MarkDown` ilə başlıqları tanıya bilər və hərf-həssas dilə tərcümə edərkən ilk hərfi avtomatik olaraq böyük hərflə yazacaq.

Məsələn `为阅读体验而优化` `Optimized for Reading Experience` kimi tərcümə olunacaq.

### Çin, Yapon, Koreya Və Çin Dillərindəki Ingilis Terminləri Tərcümə Edilmir

Çin, Yaponiya və Koreya sənədlərində tez-tez bir çox ingilis terminləri var.

Çin, Yapon və Koreya dillərinin maşın tərcüməsi qeyri-ingilis dilinə çevrildi və terminlər tez-tez aşağıdakı Çin cümləsi kimi birlikdə tərcümə olunur:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google və ya DeepL istifadə edirsinizsə, onların hər ikisi orijinal olaraq qalmalı olan ingiliscə terminləri səhv tərcümə edir (nümunə olaraq Yapon və Fransız dillərini götürün).

### Google Tərcümə

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` dilinə tərcümə olunub :

<img alt="" src="//p.3ti.site/1720199391.avif">

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` dilinə tərcümə :

`Falcon` `faucon` kimi, `Llama` isə `lama` kimi tərcümə olunur. Xüsusi isimlər kimi tərcümə edilməməlidir.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Tərcüməsi

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` dilinə tərcümə olunub :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Yuxarıdakıların fransız dilinə tərcüməsi (həmçinin uyğun adları yenidən yazaraq və tək əlavə etməklə `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Tərcüməsi

's tərcüməsi Çin `i18` Yapon və Koreya sənədlərində ingilis terminlərini tanıyacaq və terminləri toxunulmaz qoyacaqdır.

Məsələn, yuxarıdakı Yapon tərcüməsinin nəticəsi:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Fransızca tərcüməsi belədir:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Yalnız ingilis sözü ilə Çin, Yapon və Koreya mətnləri arasında boşluq olduqda və ya ingilis dilinin uzunluğu 1-dən çox olduqda, söz termin kimi qəbul ediləcək.

Məsələn: `C罗` `Cristiano Ronaldo` kimi tərcümə olunacaq.

## Çoxdilli Veb Sayt Qurulması Birləşdirilə Bilər `i18n.site`

`i18` Çoxdilli vebsayt yaratmaq üçün komanda xətti alətinə inteqrasiya olunub [`i18n.site`](/i18n.site)

Təfərrüatlar üçün [`i18n.site`](/i18n.site) baxın.

## Açıq Mənbə Kodu

Müştəri tamamilə açıq mənbədir və kodun 90 server tərəfi [mənbə koduna baxmaq üçün bura klikləyin](/i18n.site/src) .

Biz açıq mənbə kodunun hazırlanmasında və tərcümə edilmiş mətnlərin korreksiyasında iştirak etmək üçün könüllülər axtarırıq.

Əgər maraqlanırsınızsa, zəhmət olmasa [→ Profilinizi doldurmaq üçün bura klikləyin](https://ggl.link/i18n) və sonra ünsiyyət üçün [poçt siyahısına](https://groups.google.com/u/2/g/i18n-site) qoşulun.

## Əlaqə Saxlayın

<button onclick="mailsub()">Məhsul yeniləmələrinə abunə olmaq</button> və <button onclick="webpush()">brauzeri aktivləşdirmək üçün</button> bu e-poçtu klikləyin.

Həmçinin / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) sosial hesablarımızı izləməyə xoş gəlmisiniz [X.COM: @i18nSite](https://x.com/i18nSite)

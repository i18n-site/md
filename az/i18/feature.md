# Məhsul Xüsusiyyətləri

`i18` tərcümə üçün əmr xətti alətidir Markdown & Yaml

## Markdown Formatını Mükəmməl Saxlaya Bilir

Formaya zərər vermədən Markdown cədvəllərinin tərcüməsini dəstəkləyir, riyazi düsturlar və ya bağlantılardakı sözləri tərcümə etmir;

Qarışıq HTML tərcüməsini dəstəkləyir, HTML `MarkDown` a daxil Markdown `<pre>` və `<code>` teqlərindəki məzmun tərcümə edilmir

## Riyazi Düsturları Tanıya Və Tərcüməni Atlaya Bilər

Riyazi düsturlar tanınır və tərcümə atlanır.

Riyazi düsturları necə yazmaq üçün [" Github Riyazi ifadələrin yazılması haqqında"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) bölməsinə baxın.

## Kod Fraqmentlərində Şərhləri Tərcümə Etmək Imkanı

Daxili kod və kod parçaları tərcümə edilmir, lakin koddakı şərhlər tərcümə edilə bilər.

Tərcümə şərhləri ` ``` ` sonra dili göstərməlidir, ` ```rust ` :

Hazırda o, `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [və digər dillərdə](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) annotasiya tərcüməsini dəstəkləyir.

Koddakı bütün qeyri-ingilis simvollarını tərcümə etmək istəyirsinizsə, kod seqmentini ` ```i18n ` ilə qeyd edin.

Əgər sizə lazım olan proqramlaşdırma dili mövcud deyilsə, [bizimlə əlaqə saxlayın](https://groups.google.com/g/i18n-site) .

## Komanda Xətti Dostudur

Tərcümə sənədlərini idarə etmək üçün bir çox [ağır alətlər](https://www.capterra.com/translation-management-software) mövcuddur.

`git` , `vim` və `vscode` ilə tanış olan proqramçılar üçün sənədləri redaktə etmək və versiyaları idarə etmək üçün bu vasitələrdən istifadə etmək, şübhəsiz ki, öyrənmə xərclərini artıracaq.

`KISS` ( `Keep It Simple, Stupid` ) Prinsipcə inananlar arasında müəssisə səviyyəli həllər çətin, səmərəsiz və istifadəsi çətin olması ilə sinonimdir.

Tərcümə əmrləri daxil etməklə və onu bir kliklə tamamlamaqla aparılmalıdır. Mürəkkəb mühitdən asılılıqlar olmamalıdır.

Lazım olmadıqca obyektləri əlavə etməyin.

## Dəyişiklik Yoxdur, Tərcümə Yoxdur

[translate-shell](https://github.com/soimort/translate-shell) bəzi komanda xətti tərcümə alətləri də var.

Bununla belə, onlar fayl dəyişikliklərinin müəyyən edilməsini dəstəkləmir və yalnız xərcləri azaltmaq və səmərəliliyi artırmaq üçün dəyişdirilmiş faylları tərcümə edirlər.

## Tərcümə Redaktə Edilə Bilər Və Maşın Tərcüməsi Mövcud Dəyişikliklərin Üzərinə Yazmayacaq.

Tərcümə redaktə edilə bilər.

Orijinal mətni dəyişdirin və onu yenidən maşınla tərcümə edin, tərcümədə əl ilə edilən dəyişikliklərin üzərinə yazılmayacaq (əgər orijinal mətnin bu paraqrafı dəyişdirilməyibsə).

## Ən Keyfiyyətli Maşın Tərcüməsi

Biz tərcümələri dəqiq, hamar və zərif etmək üçün ənənəvi maşın tərcüməsi modellərinin və böyük dil modellərinin texniki üstünlüklərini birləşdirən yeni nəsil tərcümə texnologiyasını işləyib hazırlamışıq.

Kor-koranə testlər göstərir ki, bizim tərcümə keyfiyyətimiz oxşar xidmətlərlə müqayisədə xeyli yaxşıdır.

Eyni keyfiyyətə nail olmaq üçün Google Translate və `ChatGPT` tərəfindən tələb olunan əl ilə redaktə miqdarı bizimkindən müvafiq olaraq `2.67` dəfə və `3.15` dəfədir.

## <a rel=id href="#price" id="price"></a> Son dərəcə rəqabətli qiymət

|                                                                                   | USD/milyon söz |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ github Kitabxanasına icazə vermək və avtomatik i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) və **$50 bonus almaq** üçün bura klikləyin!

Qeyd: Hesablana bilən simvolların sayı = mənbə faylındakı [unicode sayı](https://en.wikipedia.org/wiki/Unicode) × tərcümədəki dillərin sayı

## Tərcüməni Dəstəkləyin `YAML`

Alət lüğət açarlarını deyil, yalnız lüğət dəyərlərini `YAML` -da tərcümə edir.

`YAML` tərcüməyə əsaslanaraq, müxtəlif proqramlaşdırma dilləri üçün asanlıqla beynəlxalq həllər qura bilərsiniz.

## Tərcümə `HOGO` Başlıq Konfiqurasiyasını Dəstəkləyin

[HOGO](https://github.com/gohugoio/hugo) tipli statik blogun başlıq konfiqurasiyasını dəstəkləyir və yalnız `title` , `summary` , `brief` və `description` sahələrini tərcümə edir.

## Dəyişən Adlarını Tərcümə Etməyin

`Markdown` e-poçt şablonu kimi istifadə olunur, `YAML` dil faylı konfiqurasiyası kimi istifadə olunur və dəyişən parametrlər olacaq (məsələn: doldurma `${amount}` alındı).

`${varname}` kimi dəyişən adları ingilis dilinə tərcümə kimi qəbul edilməyəcək.

## Çin, Yaponiya Və Koreya Üçün Tərcümə Optimallaşdırılması

### İngilis Dilinə Tərcümə Edildikdə, Başlığın Ilk Hərfi Avtomatik Olaraq Böyük Hərflə Yazılır.

Çin, Yaponiya və Koreyada böyük və kiçik hərf yoxdur, lakin ingilis adları üçün konvensiya ilk hərfi böyük hərflə yazmaqdır.

`i18` başlığı `MarkDown` hərfində tanıya bilər və hərf-həssas dilə tərcümə edərkən avtomatik olaraq ilk hərfi böyük hərflə yazacaq.

Məsələn, `为阅读体验而优化` `Optimized for Reading Experience` -ə çevriləcək.

### Çin, Yapon, Koreya Və Çin Dillərindəki Ingilis Terminləri Tərcümə Edilmir

Çin, Yaponiya və Koreya sənədlərində tez-tez bir çox ingilis terminləri var.

Çin, Yapon və Koreya dillərinin maşın tərcüməsi qeyri-ingilis dilinə çevrildi və terminlər tez-tez aşağıdakı Çin cümləsi kimi birlikdə tərcümə olunur:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google və ya DeepL istifadə edirsinizsə, onların hər ikisi orijinal olaraq qalmalı olan ingiliscə terminləri səhv tərcümə edir (nümunə olaraq Yapon və Fransız dillərini götürün).

### Google Tərcümə

Yapon `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` tərcümə :

![](//p.3ti.site/1720199391.avif)

Fransız dilinə `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` `faucon` kimi, `Llama` isə `lama` kimi tərcümə olunur. Xüsusi isimlər kimi tərcümə edilməməlidir.

![](//p.3ti.site/1720199451.avif)

### DeepL Tərcüməsi

Yapon `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` tərcümə :

![](//p.3ti.site/1720199550.avif)

Yuxarıdakıların fransız dilinə DeepL (həmçinin xüsusi adları yenidən yazaraq və tək `... ` əlavə etməklə):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Tərcüməsi

`i18` -ın tərcüməsi Çin, Yapon və Koreya sənədlərində ingilis terminlərini tanıyacaq və terminləri toxunulmaz qoyacaq.

Məsələn, yuxarıdakı Yapon tərcüməsinin nəticəsi:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Fransızca tərcüməsi belədir:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Yalnız ingilis sözü ilə Çin, Yapon və Koreya mətnləri arasında boşluq olduqda və ya ingilis dilinin uzunluğu 1-dən çox olduqda, söz termin kimi qəbul ediləcək.

Məsələn: `C罗` `Cristiano Ronaldo` kimi tərcümə olunacaq.

## Veb Sayt Yaratmaq Üçün `i18n.site` Dan Çox Dillə Birləşdirilə Bilər

`i18` çoxdilli veb sayt qurma əmr xətti alətinə inteqrasiya olunub [`i18n.site`](/i18n.site) .

Ətraflı məlumat üçün [`i18n.site`](/i18n.site) sənədlərinə baxın.

## Açıq Mənbə Kodu

Müştəri tamamilə açıq mənbədir və kodun % server 90 [mənbə koduna baxmaq üçün bura klikləyin](/i18n.site/c/src) .

Biz açıq mənbə kodunun hazırlanmasında və tərcümə edilmiş mətnlərin korreksiyasında iştirak etmək üçün könüllülər axtarırıq.

Əgər maraqlanırsınızsa, zəhmət olmasa [→ Profilinizi doldurmaq üçün bura klikləyin](https://ggl.link/i18n) və sonra ünsiyyət üçün [poçt siyahısına](https://groups.google.com/u/2/g/i18n-site) qoşulun.

## Əlaqə Saxlayın

<button onclick="mailsub()">Məhsul yeniləmələrinə abunə olmaq üçün bu e-poçtu klikləyin</button> və məhsul yeniləmələri edildiyi zaman sizə xəbər <button onclick="webpush()">verəcəyik</button> .

Həmçinin / hesablarımızı izləməyə [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) gəlmisiniz [X.COM: @i18nSite](https://x.com/i18nSite)
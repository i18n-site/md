# Особливості Продукту

`i18` — інструмент командного рядка для перекладу Markdown & Yaml

## Може Ідеально Підтримувати Формат Markdown

Підтримує переклад таблиць Markdown без пошкодження формату; не перекладає слова в математичних формулах або посиланнях.

Підтримується переклад змішаних HTML Markdown , вміст у тегах `<pre>` і `<code>` вбудованих у HTML `MarkDown` не перекладається

## Може Розпізнавати Математичні Формули Та Пропускати Переклад

Математичні формули розпізнаються, а переклад пропускається.

Щоб дізнатися, як писати математичні формули, зверніться до [" Github Про написання математичних виразів"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Можливість Перекладу Коментарів У Фрагментах Коду

Вбудований код і його фрагменти не перекладаються, але коментарі в коді можна перекладати.

У коментарях до перекладу потрібно вказувати мову після ` ``` ` , ` ```rust ` :

Наразі він підтримує переклад анотацій мовами `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [та іншими мовами](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Якщо ви хочете перекласти всі неанглійські символи в коді, позначте сегмент коду ` ```i18n ` .

Якщо потрібна вам мова програмування недоступна, [зв’яжіться з нами](https://groups.google.com/g/i18n-site) .

## Дружній До Командного Рядка

Існує багато [важких інструментів](https://www.capterra.com/translation-management-software) для керування документами перекладу.

Для програмістів, які знайомі з `git` , `vim` і `vscode` , використання цих інструментів для редагування документів і керування версіями, безсумнівно, збільшить вартість навчання.

`KISS` ( `Keep It Simple, Stupid` ) Серед принципових віруючих рішення корпоративного рівня є синонімом того, що вони громіздкі, неефективні та складні у використанні.

Переклад має здійснюватися шляхом введення команд і завершення їх одним клацанням. Не повинно бути складних залежностей середовища.

Не додавайте сутності без необхідності.

## Без Змін, Без Перекладу

Є також деякі інструменти перекладу командного рядка, наприклад [translate-shell](https://github.com/soimort/translate-shell)

Однак вони не підтримують ідентифікацію модифікацій файлів і лише перекладають змінені файли, щоб зменшити витрати та підвищити ефективність.

## Переклад Можна Редагувати, І Машинний Переклад Не Перезапише Наявні Зміни.

Переклад доступний для редагування.

Змініть оригінальний текст і машинно перекладіть його ще раз, ручні зміни до перекладу не будуть перезаписані (якщо цей абзац оригінального тексту не було змінено).

## Машинний Переклад Найкращої Якості

Ми розробили нове покоління технології перекладу, яка поєднує в собі технічні переваги традиційних моделей машинного перекладу та великих мовних моделей, щоб зробити переклад точним, гладким і елегантним.

Сліпі тести показують, що якість нашого перекладу значно краща порівняно з аналогічними службами.

Щоб досягти такої самої якості, обсяг ручного редагування, який вимагає Google Translate і `ChatGPT` в `2.67` і `3.15` рази перевищує наш відповідно.

## <a rel=id href="#price" id="price"></a> Надзвичайно конкурентоспроможна ціна

|                                                                                   | USD/млн слів |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Натисніть тут, щоб авторизуватися та автоматично i18n.site на бібліотеку github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) і **отримати бонус $50** .

Примітка: кількість оплачуваних символів = [кількість unicode](https://en.wikipedia.org/wiki/Unicode) у вихідному файлі × кількість мов у перекладі

## Підтримка Перекладу `YAML`

Інструмент перекладає лише значення словника в `YAML` , а не ключі словника.

На основі перекладу `YAML` ви можете легко створювати міжнародні рішення для різних мов програмування.

## Підтримка Конфігурації Заголовка Перекладу `HOGO`

Підтримує конфігурацію [HOGO](https://github.com/gohugoio/hugo) типу static blog і перекладає лише поля `title` , `summary` , `brief` та `description` .

## Не Перекладайте Назви Змінних

`Markdown` використовується як шаблон електронної пошти, `YAML` використовується як конфігурація мовного файлу, а також будуть змінні параметри (наприклад: поповнення `${amount}` отримано).

Назви змінних, наприклад `${varname}` не вважатимуться перекладом англійською мовою.

## Оптимізація Перекладу Для Китаю, Японії Та Кореї

### При Перекладі На Англійську Першу Літеру Назви Автоматично Вводять З Великої Літери.

У Китаї, Японії та Кореї немає великих і малих літер, але для назв англійською мовою першу літеру роблять великою.

`i18` може розпізнавати назву в `MarkDown` і автоматично робитиме першу літеру великою під час перекладу на мову, чутливу до регістру.

Наприклад, `为阅读体验而优化` буде переведено в `Optimized for Reading Experience` .

### Англійські Терміни Китайською, Японською, Корейською Та Китайською Не Перекладаються

Документи з Китаю, Японії та Кореї часто містять багато англійських термінів.

Машинний переклад китайської, японської та корейської мов став неанглійською мовою, і терміни часто перекладаються разом, наприклад таке китайське речення:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Якщо ви використовуєте Google або DeepL, вони обидва неправильно перекладають англійські терміни, які повинні залишатися оригінальними (взяти як приклад японську та французьку мови).

### Перекладач Google

Перекладено на `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` мову :

![](//p.3ti.site/1720199391.avif)

Перекладено на `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` перекладається як `faucon` , а `Llama` - як `lama` . Як власні іменники, їх не слід перекладати.

![](//p.3ti.site/1720199451.avif)

### Переклад DeepL

Перекладено на `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` мову :

![](//p.3ti.site/1720199550.avif)

DeepL Переклад наведеного вище на французьку (також переписуючи власні імена та додаючи непарний `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Переклад

Переклад `i18` розпізнає англійські терміни в китайських, японських і корейських документах і залишить терміни без змін.

Наприклад, результат перекладу з японської мови вище:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Французький переклад:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Лише якщо між англійським словом і китайським, японським і корейським текстом є пробіл або англійська довжина перевищує 1, слово буде розглядатися як термін.

Наприклад: `C罗` буде перекладено як `Cristiano Ronaldo` .

## Можна Поєднувати З Більш Ніж `i18n.site` Мовами Для Створення Веб-Сайту

`i18` інтегровано в інструмент командного рядка створення багатомовного веб-сайту [`i18n.site`](/i18n.site) .

Подробиці див. у документації [`i18n.site`](/i18n.site) .

## Код З Відкритим Кодом

Клієнт повністю відкритий, а серверна частина коду є відкритою 90 [Натисніть тут, щоб переглянути вихідний код](/i18n.site/c/src) .

Шукаємо волонтерів для участі в розробці відкритого коду та вичитку перекладених текстів.

Якщо ви зацікавлені, будь ласка [, → Натисніть тут, щоб заповнити свій профіль](https://ggl.link/i18n) , а потім приєднайтеся до [списку розсилки](https://groups.google.com/u/2/g/i18n-site) для спілкування.

## Підтримувати Зв'язок

<button onclick="mailsub()">Клацніть цей електронний лист, щоб підписатися на оновлення продукту</button> та <button onclick="webpush()">ввімкнути функцію push у веб-переглядачі</button> . Ми повідомимо вас, коли будуть зроблені оновлення продукту.

Також просимо стежити за / акаунтами в соціальних [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)
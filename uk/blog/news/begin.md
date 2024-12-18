---

brief: |
  Наразі реалізовано два інструменти командного рядка з відкритим кодом: i18 (інструмент перекладу командного рядка MarkDown) та i18n.site (генератор сайтів багатомовних статичних документів)

---


# i18n.site · Інструмент Для Перекладу Та Створення Веб-Сайтів MarkDown Тепер Онлайн!

Після більш ніж півроку розробки, [https://i18n.site](//i18n.site)

Наразі реалізовано два інструменти командного рядка з відкритим кодом:

* `i18` : MarkDown Інструмент перекладу командного рядка
* `i18n.site` : Багатомовний генератор статичних документів, **оптимізований для читання**

Переклад може ідеально підтримувати формат `Markdown` . Може ідентифікувати модифікації файлів і перекладати лише файли зі змінами.

Переклад можна редагувати; якщо ви зміните оригінальний текст і здійсните його повторний машинний переклад, зміни перекладу, внесені вручну, не будуть перезаписані (якщо цей абзац оригінального тексту не було змінено).

[➤ Натисніть тут, щоб авторизуватися та автоматично i18n.site на бібліотеку github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) і **отримати бонус $50** .

## Походження

В епоху Інтернету весь світ є ринком, а багатомовність і локалізація є основними навичками.

Існуючі інструменти керування перекладами занадто важкі. Для програмістів, які покладаються на керування версією `git` , вони все ще віддають перевагу командному рядку.

Отже, я розробив інструмент перекладу `i18` і створив багатомовний статичний генератор сайтів `i18n.site` на основі інструменту перекладу.

![](https://p.3ti.site/1723777556.avif)

Це тільки початок, попереду ще багато чого.

Наприклад, зв’язавши сайт зі статичними документами з соціальними мережами та підписками на електронну пошту, користувачі можуть бути доступні вчасно, коли випускаються оновлення.

Наприклад, багатомовні форуми та системи робочих наказів можуть бути вбудовані в будь-яку веб-сторінку, дозволяючи користувачам спілкуватися без бар’єрів.

## Відкритий Код

Інтерфейсний і внутрішній коди, а також [коди командного рядка є відкритими](https://i18n.site/i18n.site/c/src) (модель перекладу ще не є відкритою).

Використовується такий стек технологій:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Командний рядок і бекенд розроблено на основі Rust.

задній кінець [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

[Вбудований командний рядок js Engine boa_engine](https://docs.rs/boa_engine) , [вбудована база даних fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

база даних [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Надішліть лист на адресу self- [chasquid](https://github.com/albertito/chasquid) SMTP

## Зв'яжіться З Нами

Коли з’являються нові продукти, проблеми неминучі.

Не соромтеся звертатися до [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) через форум Google :
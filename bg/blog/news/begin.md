---

brief: |
  Понастоящем са внедрени два инструмента за команден ред с отворен код: i18 (инструмент за превод на команден ред MarkDown) и i18n.site (генератор на многоезичен сайт за статичен документ)

---


# i18n.site · Инструментът За Превод И Изграждане На Уебсайт MarkDown Вече Е Онлайн!

След повече от половин година разработка, [https://i18n.site](//i18n.site)

В момента са внедрени два инструмента за команден ред с отворен код:

* `i18` : MarkDown Инструмент за превод на команден ред
* `i18n.site` : Многоезичен генератор на статични документи, **оптимизиран за четене**

Преводът може перфектно да поддържа формата на `Markdown` . Може да идентифицира файлови модификации и да превежда само файлове с промени.

Преводът може да се редактира; ако промените оригиналния текст и го преведете машинно отново, ръчните модификации на превода няма да бъдат презаписани (ако този параграф от оригиналния текст не е бил променен).

[➤ Щракнете тук i18n.site за да авторизирате и автоматично да следвате github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) и **да получите бонус $50** .

## Произход

В ерата на Интернет целият свят е пазар, а многоезичието и локализацията са основни умения.

Съществуващите инструменти за управление на превода са твърде тежки за програмисти, които разчитат на управление на версия `git` , те все още предпочитат командния ред.

И така, разработих инструмент за превод `i18` и създадох генератор на многоезичен статичен сайт `i18n.site` базиран на инструмента за превод.

![](https://p.3ti.site/1723777556.avif)

Това е само началото, има още много работа.

Например, чрез свързване на сайта за статични документи със социални медии и имейл абонаменти, потребителите могат да бъдат достигнати навреме, когато се пуснат актуализации.

Например, многоезични форуми и системи за работни поръчки могат да бъдат вградени във всяка уеб страница, което позволява на потребителите да комуникират без бариери.

## Отворен Код

[Кодовете на предния, задния и командния ред са с отворен код](https://i18n.site/i18n.site/c/src) (моделът за превод все още не е с отворен код).

Използваният технологичен стек е както следва:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Командният ред и бекендът са разработени на базата на rust.

заден край [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

[Вграден команден ред js Engine boa_engine](https://docs.rs/boa_engine) , [вградена база данни fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

база данни [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Изпратете имейл до self- [chasquid](https://github.com/albertito/chasquid) SMTP

## Свържете Се С Нас

Когато се пускат нови продукти, проблемите са неизбежни.

Чувствайте се свободни да се свържете с нас чрез форума на [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
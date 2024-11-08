# Најчесто Поставувани Прашања

## Додавање Или Бришење Линии На Преводот, Што Резултира Со Конфузија Во Преводот

> [!WARN]
> Запомнете, **бројот на редови во преводот мора да одговара на линиите во оригиналниот текст** .
> Односно, при рачно прилагодување на преводот, **не додавајте или бришете линии од преводот** , инаку односот на мапирањето помеѓу преводот и оригиналниот текст ќе биде нарушен.

Ако случајно додадете или избришете линија, предизвикувајќи збунетост, вратете го преводот на верзијата пред модификацијата, повторно извршете `i18` превод и повторно кеширајте го правилното мапирање.

Мапирањето помеѓу преводот и оригиналниот текст е врзано за [i18n.site/token](//i18n.site/token) `.i18h/hash`

## `YAML` : `HTML` `Markdown`

Вредноста `YAML` се третира како `MarkDown` за превод.

Понекогаш конверзијата од `HTML` → `MarkDown` не е она што го сакаме, како на пример `<a href="/">Home</a>` да се претвори во `[Home](/)` .

Додавањето на кој било атрибут освен `href` на ознаката `a` , како што е `<a class="A" href="/">Home</a>` , може да ја избегне оваа конверзија.

## `./i18n/hash` Конфликти На Датотеки Подолу

Избришете ги спротивставените датотеки и повторно извршете `i18` превод.
# Список Стилей

[Нажмите здесь, чтобы просмотреть исходный файл этой страницы](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) и узнать, как написать `MarkDown` в следующих стилях.

## Сложенный Блок

|+| Что такое Маркдаун?

    MarkDown — это легкий язык разметки, который позволяет пользователям создавать форматированные документы в текстовом формате, который легко читать и писать.

    Обычно используется для написания документации, статей в блогах, электронных книг, сообщений на форумах и т. д.

    Он имеет следующие преимущества:

    1. Легко учиться
    1. Легко читаемый
    1. Удобный контроль версий

       Поскольку документы `MarkDown` представлены в текстовом формате, программисты могут легко включать их в системы контроля версий (например, `git` ).

       Это значительно упрощает отслеживание изменений и совместную работу, особенно при командной разработке.

|-| Что такое I18N?

    «I18N» — это аббревиатура от «Интернационализация».

    Поскольку в слове «Интернационализация» между «I» и «N» 18 букв, для упрощения представления используется «I18N».

    С точки зрения непрофессионала это означает поддержку нескольких языков.


Сворачивающийся блок — это расширенный синтаксис от `i18n.site` до `MarkDown` , записанный следующим образом :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

с `|+| `或`|-| Строка, начинающаяся с `, создаст блок сгиба, а содержимым блока сгиба будут последующие строки с тем же уровнем отступа (абзацы разделяются пустыми строками).

Пас`|-| `标记的折叠块默认展开，`|+| `Свернутые блоки с тегами свернуты по умолчанию.

## & &

Это __ Подчеркивание __ ,~~ зачеркивание~~ и **жирный** текст презентации.

Написано следующее:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

В синтаксическом анализаторе `MarkDown` инструмента для создания веб-сайтов `i18n.site` оптимизирован синтаксис подчеркивания, зачеркивания и жирного шрифта. Он может действовать без пробелов до и после знака, что упрощает написание документов на таких языках, как Китай, Япония и Корея. не используйте пробелы в качестве разделителей.

Расширенное чтение : [Почему синтаксис Markdown Nuggets ( `**……**` ) иногда не действует?](//juejin.cn/post/7064565848421171213)

## Цитировать

### Однострочная Цитата

> Такова моя природа: мои таланты будут полезны, и я вернусь после того, как все мои деньги будут потрачены.
<p style="text-align:right">─ Ли Бай</p>

### Многострочные Кавычки

> Еще одним уникальным преимуществом научной фантастики является ее чрезвычайно широкий охват.
> «Война и мир», состоящая из миллиона слов, описывает историю региона всего за несколько десятилетий;
> А научно-фантастические романы, такие как «Последний ответ» Азимова, всего в нескольких тысячах слов ярко описывают миллиарды лет истории всей Вселенной, включая человека.
> Такой инклюзивности и смелости невозможно достичь в традиционной литературе.
<p style="text-align:right">── Лю Цысинь</p>

### Совет `> [!TIP]`

> [!TIP]
> Не забудьте проверить срок действия вашего паспорта и визы. Просроченные документы не позволяют въехать в страну или выехать из нее.

Это написано следующим образом

```
> [!TIP]
> YOUR CONTENT
```

### Примечание `> [!NOTE]`

> [!NOTE]
> Если вы отправите мне сообщение, и я сразу же отвечу, что это значит?
> Это показывает, что я действительно люблю играть с мобильными телефонами.


### Предупреждение `> [!WARN]`

> [!WARN]
> Отправляясь в дикое приключение, важно оставаться в безопасности. Вот несколько основных советов по безопасности:
>
> - **Проверьте прогноз погоды** : на прошлой неделе группа альпинистов столкнулась с штормом на полпути к горе, потому что они не проверили прогноз погоды и были вынуждены срочно эвакуироваться.
> - **Возьмите с собой необходимое снаряжение** : убедитесь, что вы взяли с собой достаточно еды, воды и средств первой помощи.
> - **Изучите местность** : заранее ознакомьтесь с местностью и маршрутами зоны приключений, чтобы не заблудиться.
> - **Оставайтесь на связи** : оставайтесь на связи с внешним миром и убедитесь, что каждый может безопасно вернуться.
>
> Помните, безопасность всегда на первом месте!

## Список Дел

- [x] Разработать прототип продукта и список функций.
- [ ] Определить технологический стек и инструменты разработки
- [ ] Разработка сроков и этапов разработки продукта

## Список

### Упорядоченный Список

1. бег
   1. Три раза в неделю по 5 километров каждый раз
   1. Пробежать полумарафон
1. тренировка в тренажерном зале
   1. Два раза в неделю по 1 часу каждый раз
   1. Сосредоточьтесь на основных мышцах

### Неупорядоченный Список

* общественные мероприятия
  - Участвуйте в отраслевых обменах
    + Сессия по обмену технологиями
    + Встреча по предпринимательскому обмену
  - Организуйте встречу друзей
    + Барбекю на открытом воздухе
    + ночь кино

## Лист

| мыслитель       | Основные вклады                           |
|--------------|------------------------------------|
| Конфуций         | Основатель конфуцианства |
| Сократ     | отец западной философии  |
| Ницше         | Философия Супермена, критикующая традиционную мораль и религию       |
| Маркс       | коммунизм |

### Оптимизация Отображения Больших Таблиц

Для относительно больших таблиц можно использовать следующие методы для оптимизации эффекта отображения:

1. Используйте меньший шрифт

   Например, оберните таблицу `<div style="font-size:14px">` и `</div>` .

   Обратите внимание, что тег `div` должен занимать отдельную строку, а до и после него оставлять пустые строки.
1. Для более длинного текста в ячейке вставьте `<br>` , чтобы перенести строку.
1. Если столбец сжат слишком коротко, вы можете добавить `<div style="width:100px">xxx</div>` к заголовку, чтобы увеличить ширину, а также добавить [`<wbr>` к заголовку,](//developer.mozilla.org/docs/Web/HTML/Element/wbr) чтобы контролировать положение разрыва строки.

Демонстрационный пример выглядит следующим образом:

<div style="font-size:14px">

| нация       | <div style="width:70px;margin:auto">имя мыслителя</div> | Эра | Основной идеологический вклад                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Китай       | Конфуций                                           | 551–479 гг. до н. э.   | Основатель конфуцианства предложил такие основные концепции, как «благожелательность» и «приличие», и подчеркнул моральное развитие и социальный порядок. |
| Древняя Греция     | Сократ                                       | 469-399 гг. до н. э.   | Исследование истины посредством диалога и диалектики предлагает «познать себя» и подчеркивает рациональное мышление.         |
| Франция       | Вольтер                                         | 1694-1778       | Представительные деятели Просвещения выступали за рациональность, свободу и равенство и критиковали религиозные суеверия и авторитарное правление.   |
| Германия       | Кант                                           | 1724-1804       | Выдвинул «Критику чистого разума».<br> Исследует основы морали, свободы и знаний, уделяя особое внимание практическому разуму.     |

</div>

Псевдокод для приведенного выше примера выглядит следующим образом:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Код

### Встроенный Код

В огромном мире языков программирования `Rust` , `Python` , `JavaScript` и `Go` занимают уникальную позицию.

### Несколько Строк Кода

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Разрыв Строки Внутри Абзаца

Разрывы строк внутри абзацев могут быть достигнуты без добавления пустых строк между строками.
Расстояние между разрывами строк внутри абзацев меньше, чем расстояние между абзацами.

например:

> Живи как великий человек,
> Смерть также является героем-призраком.
> Я все еще скучаю по Сян Юю,
> Не хочет пересекать Цзяндун.
>
> Ли Цинчжао использовал трагическую историю Сян Юя, чтобы намекнуть на некомпетентность династии Сун.
> Выражение недовольства императорским двором за сдачу без боя.
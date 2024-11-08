# Style List

[Click here to browse the source file of this page](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) to see the `MarkDown` syntax for the following styles.

## Folded Block

|+| What is MarkDown?

    MarkDown is a lightweight markup language that allows users to create formatted documents using a plain text format that is easy to read and write.

    It is commonly used for writing documentation, blog articles, e-books, forum posts, etc.

    It has the following advantages:

    1. Easy to learn
    1. Highly readable
    1. Version control friendly

       Since `MarkDown` documents are in plain text format, programmers can easily integrate them into version control systems (such as `git`).

       This makes tracking changes and collaboration much simpler, especially in team development.

|-| What is I18N?

    "I18N" is the abbreviation of "Internationalization".

    Since the word "Internationalization" has 18 letters between "I" and "N," "I18N" is used to simplify the representation.

    In layman's terms, it means supporting multiple languages.


The folded block is an extension of `MarkDown` syntax provided by `i18n.site`, written as follows:

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

With `|+| `或`|-| The line starting with ` will generate a folded block, and the content of the folded block is the subsequent lines with the same level of indentation (paragraphs are separated by blank lines).

By using `|-| `标记的折叠块默认展开，`|+| `-marked folded blocks are collapsed by default.

## Underline & Strikethrough & Bold

This is __underline__, ~~strikethrough~~, and **bold** demonstration text.

The syntax is as follows:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

The `MarkDown` parser of the `i18n.site` website building tool has optimized the syntax for underline, strikethrough, and bold. It can take effect without spaces before and after the mark, making it easier to write documents in languages such as Chinese, Japanese, and Korean, which do not use spaces as separators.

Extended reading: [Why does the Markdown bold syntax ( `**……**` ) sometimes not take effect on Juejin?](//juejin.cn/post/7064565848421171213)

## Quote

### Single Line Quote

> Talents are given to be used, and wealth spent will return.
<p style="text-align:right">─ Li Bai</p>

### Multiple Line Quotes

> One unique advantage of science fiction is its extremely broad scope.
> A "War and Peace," with a million words, only describes the history of a region for several decades;
> While a science fiction novel like Asimov's "The Final Answer" vividly describes the billions of years of history of the entire universe, including humans, in just a few thousand words.
> Such inclusiveness and boldness are impossible to achieve in traditional literature.
<p style="text-align:right">─ Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Remember to check the validity of your passport and visa. Expired documents cannot be used for entry or exit.

The syntax is as follows:

```
> [!TIP]
> YOUR CONTENT
```

### Note `> [!NOTE]`

> [!NOTE]
> If I reply to your messages instantly, what does that mean?
> It means I really love playing with my phone.


### Warning `> [!WARN]`

> [!WARN]
> When going on a wild adventure, it’s important to stay safe. Here are some key safety tips:
>
> - **Check the weather forecast**: Last week, a group of climbers encountered a storm halfway up the mountain because they did not check the weather forecast and had to evacuate urgently.
> - **Carry necessary gear**: Make sure you bring enough food, water, and first aid supplies.
> - **Understand the terrain**: Familiarize yourself with the terrain and routes of the adventure area in advance to avoid getting lost.
> - **Stay connected**: Stay connected to the outside world and ensure everyone can return safely.
>
> Remember, safety always comes first!

## To-Do List

- [x] Design product prototype and feature list
- [ ] Determine technology stack and development tools
- [ ] Develop product development timelines and milestones

## List

### Ordered List

1. Running
   1. Three times a week, 5 kilometers each time
   1. Participate in a half marathon
1. Gym training
   1. Twice a week, 1 hour each time
   1. Focus on core muscles

### Unordered List

* Social activities
  - Attend industry exchange meetings
    + Technical sharing sessions
    + Entrepreneurship exchange meetings
  - Organize a gathering of friends
    + Outdoor BBQ
    + Movie night

## Table

| Thinker       | Main contributions                           |
|--------------|------------------------------------|
| Confucius         | Founder of Confucianism |
| Socrates     | Father of Western philosophy  |
| Nietzsche         | Superman philosophy, criticizing traditional morality and religion       |
| Marx       | Communism |

### Large Table Display Optimization

For relatively large tables, the following methods can be used to optimize the display effect:

1. Use a smaller font

   For example, wrap the table with `<div style="font-size:14px">` and `</div>`.

   Note that the `div` tag must occupy its own line, and leave blank lines before and after it.
1. For longer text in a cell, insert `<br>` to wrap the line
1. If a column is squeezed too short, you can add `<div style="width:100px">xxx</div>` to the header to expand the width, and you can also add [`<wbr>` to the header](//developer.mozilla.org/docs/Web/HTML/Element/wbr) to control the line break position

A demonstration example is as follows:

<div style="font-size:14px">

| Country       | <div id="!">thinker name</div> | Era | Main ideological contributions                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | 551-479 BC   | The founder of Confucianism proposed core concepts such as "benevolence" and "propriety" and emphasized moral cultivation and social order. |
| Ancient Greece     | Socrates                                       | 469-399 BC   | Exploring the truth through dialogue and dialectics proposes "know yourself" and emphasizes rational thinking         |
| France       | Voltaire                                         | 1694-1778       | Representative figures of the Enlightenment advocated rationality, freedom and equality, and criticized religious superstition and authoritarian rule.   |
| Germany       | Kant                                           | 1724-1804       | Put forward the "Critique of Pure Reason"<br> Explores the foundations of morality, freedom, and knowledge, emphasizing practical reason     |

</div>

The pseudocode for the above example is as follows:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Inline Code

In the vast world of programming languages, `Rust`, `Python`, `JavaScript`, and `Go` each occupy a unique position.

### Multiple Lines of Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Line Break Within Paragraph

Line breaks within paragraphs can be achieved without adding blank lines between lines.
The spacing between line breaks within paragraphs is smaller than the spacing between paragraphs.

For example:

> Live as a great person,
> Death is also a ghost hero.
> I still miss Xiang Yu,
> Reluctant to cross Jiangdong.
>
> Li Qingzhao used Xiang Yu's tragic story to hint at the incompetence of the Southern Song Dynasty
> Expressing dissatisfaction with the imperial court for surrendering without a fight.
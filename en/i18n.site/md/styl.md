# Style Overview

[Click here to view the source file of this page](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) to see the `Markdown` formatting in action.

## Underline & Strikethrough & Bold

This is a demonstration text with __underscores__, ~~strikethroughs~~, and **bold formatting**.

The format is as follows:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

The `Markdown` parser in the `i18n.site` website building tool has been enhanced to support underline, strikethrough, and bold formatting without the need for spaces before or after the syntax, facilitating document creation in languages such as Chinese, Japanese, and Korean, which do not use spaces as separators.

Extended reading: [Why doesn't the Markdown bold syntax (`**...**`) on GoldMine sometimes work?](//juejin.cn/post/7064565848421171213)

## Quotation

### Single-line Quotation

> My nature dictates that my talents will find use; even after squandering a fortune, I will recover.
<p style="text-align:right">─ Li Bai</p>

### Multi-line Quotation

> Another distinctive advantage of science fiction is its immensely wide perspective.
> "War and Peace," spanning a million words, describes merely the history of a region over several decades;
> Yet a science fiction work like Asimov's "The Last Answer" vividly portrays the history of several billion years of the entire universe, including humanity, within a mere few thousand words.
> Such capacity and ambition are beyond the reach of traditional literature.
<p style="text-align:right">─ Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Remember to inspect the validity of your passport and visa, as expired documents will not allow entry or exit from the country.

Written as follows

```
> [!TIP]
> your content
```

### Note `> [!NOTE]`

> [!NOTE]
> If I respond to your messages instantaneously, what does it imply?
> It indicates that I am truly fond of using my mobile phone.


### Caution `> [!WARN]`

> [!WARN]
> When engaging in wilderness exploration, be sure to prioritize safety.
> Last week, a group of climbers was caught in a storm halfway up the mountain because they neglected to check the weather forecast, forcing an emergency evacuation.
> Keep in mind that any outdoor activity necessitates thorough preparation and a vigilant watch on the weather conditions.

## To-Do List

- [x] Design product prototype and feature list
- [ ] Establish the technology stack and development tools
- [ ] Develop a product development timeline and milestones

## List

### Ordered List

1. Running
   1. Three times a week, 5 kilometers each time
   1. Participate in a half marathon
1. Gym training
   1. Twice a week, 1 hour each session
   1. Emphasize core muscle training

### Unordered List

* Social activities
  - Attend industry exchange meetings
    + Technical sharing sessions
    + Entrepreneurship exchange meetings
  - Organize friend gatherings
    + Outdoor barbecue
    + Movie night

## Table

| Thinker       | Principal contributions                           |
|--------------|------------------------------------|
| Confucius         | Founder of Confucianism |
| Socrates     | Father of Western philosophy  |
| Nietzsche         | Superman philosophy, critiquing traditional morality and religion       |
| Marx       | Communism |

## code

### Inline Code

In the expansive realm of programming languages, `Rust`, `Python`, `JavaScript`, and `Go` each hold a distinctive position.

### Multiple lines of code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```
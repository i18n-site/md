# 样式一览

[点此浏览本页面源文件](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md)，即可查看以下样式的`MarkDown`写法。

## 折叠块

|+| MarkDown 是什么?

    MarkDown 是一种轻量级的标记语言，允许用户使用易于阅读和编写的纯文本格式来创建格式化的文档。

    常用于编写说明文档、博客文章、电子书、论坛帖子等。

    它有以下优点：

    1. 简单易学
    1. 可读性强
    1. 对版本控制友好

       由于 `MarkDown` 文档是纯文本格式，程序员可以轻松地将其纳入版本控制系统（如 `git`）。

       这使得跟踪更改和协作变得更加简单，特别是在团队开发中。

|-| I18N 是什么?

    "I18N" 是 "Internationalization"（国际化）的缩写。

    由于 "Internationalization" 这个词有 18 个字母在 "I" 和 "N" 之间，所以用 "I18N" 来简化表示。

    通俗地说，就是支持多语言。


折叠块是`i18n.site`对`MarkDown`的扩展语法，写法如下:

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

以`|+| `或`|-| `开头的行，会生成一个折叠块，折叠块的内容是随后具有同级缩进的行(段落用空行区隔)。

通过`|-| `标记的折叠块默认展开，`|+| `标记的折叠块默认是折叠状态。

## 下划线 & 删除线 & 加粗

这是__下划线__、~~删除线~~和**加粗**的演示文本。

写法如下:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site`建站工具的`MarkDown`解析器对下划线、删除线、加粗语法做了优化，标记前后无需空格亦可生效，让中日韩等不以空格作为分隔符的语种，撰写文档更加容易。

拓展阅读: [为什么掘金的Markdown加粗语法(`**……**`)有时候不生效?](//juejin.cn/post/7064565848421171213)

## 引用

### 单行引用

> 天生我材必有用，千金散尽还复来。
<p style="text-align:right">── 李白</p>

### 多行引用

> 科幻小说的另一个独有的优势是它极其广阔的视野。
> 一部《战争与和平》，洋洋百万字，也只是描写了一个地区的几十年的历史；
> 而象阿西莫夫的《最后答案》这样的科幻小说，在短短的几千字内生动地描述了包括人类在内的整个宇宙几十亿年的历史。
> 如此的包容量和气魄，是传统文学不可能达到的。
<p style="text-align:right">── 刘慈欣</p>

### 提示 `> [!TIP]`

> [!TIP]
> 记得检查护照和签证的有效期，过期的证件无法入境或出境。

写法如下

```
> [!TIP]
> YOUR CONTENT
```

### 备注 `> [!NOTE]`

> [!NOTE]
> 如果你给我发信息我都秒回，这说明什么？
> 这说明我真的爱玩手机。


### 警告 `> [!WARN]`

> [!WARN]
> 在进行野外探险时，请务必注意安全。以下是一些关键的安全提示：
>
> - **查看天气预报**：上周有一队登山者因为没有查看天气预报，在半山腰遇到了暴风雨，不得不紧急撤离。
> - **携带必要装备**：确保携带足够的食物、水和急救用品。
> - **了解地形**：提前熟悉探险区域的地形和路线，避免迷路。
> - **保持联系**：与外界保持联系，确保每个人都能安全返回。
>
> 记住，安全永远是第一位的！

## 待办事项

- [x] 设计产品原型和功能列表
- [ ] 确定技术栈和开发工具
- [ ] 制定产品开发时间表和里程碑

## 列表

### 有序列表

1. 跑步
   1. 每周三次，每次5公里
   1. 参加半程马拉松
1. 健身房训练
   1. 每周两次，每次1小时
   1. 重点锻炼核心肌群

### 无序列表

* 社交活动
  - 参加行业交流会
    + 技术分享会
    + 创业交流会
  - 组织朋友聚会
    + 户外烧烤
    + 电影之夜

## 表格

| 思想家       | 主要贡献                           |
|--------------|------------------------------------|
| 孔子         | 儒家学派的创始人 |
| 苏格拉底     | 西方哲学之父  |
| 尼采         | 超人哲学，批判传统道德和宗教       |
| 马克思       | 共产主义 |

### 大表格显示优化

对于比较大的表格，可采用以下方式优化显示效果:

1. 使用更小的字体

   比如，使用 `<div style="font-size:14px">` 和 `</div>` 包裹表格。

   注意`div`标签请单独占据一行，并且前后都留有空行。
1. 单元格中较长的文本，插入`<br>`来换行
1. 如某列被挤压得过短，可在表头加入`<div style="width:100px">xxx</div>`来扩增宽度，表头中亦可加入[`<wbr>`软换行](//developer.mozilla.org/docs/Web/HTML/Element/wbr)来控制换行位置

一个演示的例子如下:

<div style="font-size:14px">

| 国家       | <div style="width:70px;margin:auto">思想家<wbr>姓名</div> | 年代 | 主要思想贡献                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| 中国       | 孔子                                           | 公元前551-479   | 儒家学派创始人<br>提出“仁”、“礼”等核心概念，强调道德修养和社会秩序 |
| 古希腊     | 苏格拉底                                       | 公元前469-399   | 通过对话和辩证法探讨真理<br>提出“认识你自己”，强调理性思考         |
| 法国       | 伏尔泰                                         | 1694-1778       | 启蒙运动代表人物<br>主张理性、自由和平等，批判宗教迷信和专制统治   |
| 德国       | 康德                                           | 1724-1804       | 提出“纯粹理性批判”<br>探讨道德、自由和知识的基础，强调实践理性     |

</div>

上面例子的伪代码如下:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## 代码

### 行内代码

在编程语言的广阔天地中，`Rust`、`Python`、`JavaScript`和`Go`各自占据着独特的位置。

### 多行代码

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## 段内换行

行与行之间，不加空行，就可以实现段内换行。
段内换行的间距，比段与段之间的间距要更小。

比如:

> 生当作人杰，
> 死亦为鬼雄。
> 至今思项羽，
> 不肯过江东。
>
> 李清照以项羽的悲壮故事暗指南宋的无能，
> 抒发了对朝廷不战而降的不满。

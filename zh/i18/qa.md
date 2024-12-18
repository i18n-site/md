# 常见问题

## 增删译文的行，导致译文错乱

> [!WARN]
> 切记，**译文的行数要和原文的行一一对应**。
> 也就是人工调整译文时，**不要增加或删除译文的行**，否则会导致译文和原文的映射关系错乱。

如果不小心增加或删除行，导致了错乱，请将译文恢复到修改之前的版本，再次运行`i18`翻译，重新缓存正确的映射即可。

译文和原文的映射是与令牌绑定的，在 [i18n.site/token](//i18n.site/token) 创建新的令牌  ，删除`.i18h/hash`，再次翻译也可以清空错乱的映射（但是会导致人工对译文的调整全部丢失）。

## `YAML`: 如何避免链接的`HTML`被转为`Markdown`

`YAML`的值会被视为`MarkDown`来进行翻译。

有时候`HTML`→`MarkDown`的转换并不是我们想要的，比如`<a href="/">Home</a>`被转为了`[Home](/)`。

给`a`标签加上`href`之外的任意属性，比如`<a class="A" href="/">Home</a>`，即可避免这种转换。

## `./i18n/hash`下面的文件冲突

删除冲突文件，重新运行`i18`翻译即可。

<h1 style="justify-content:space-between">3Ti.Site · Thoughts without borders<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, a multi-language static site generator, can automatically translate Markdown into [more than a hundred different languages](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Some people may want to ask, now that browsers have built-in translation functions, is it unnecessary to internationalize the website?

I want to say that **only by internationalizing the entire site can we support multi-lingual in-site full-text search and search engine optimization** .

## Sequence

"Bible·Genesis":

> The ancients did not distinguish between languages. They were born with pride and wanted to build a tall tower with the top reaching to the sky.
> > God was displeased with man's arrogance, so he scattered all living beings in various places, unable to understand each other.
> > Since then, it has been difficult for humans to communicate, disputes have continued, and there is no Tower of Babel in the world.

The science fiction novel &quot;Three-Body&quot; (Chinese pronunciation: `3Ti` ) fictionalizes an alien civilization that communicates through electromagnetic waves, has no language barriers, and is technologically prosperous.

I hope that with the help of this tool, the people of the earth will be like three-body people, communication will not be restricted by language, and all mankind will be united again.

## Tutorial

## Function Introduction

### Keep Markdown Format

### Modify Translation

After modifying the translation, you need to re-run `./i18n.sh` to update the cache.

### Translation Notes

Translation comments need to indicate the language after \```, such as ` ```rust` .

Currently supports comment translation for rust, c, cpp, java, js, coffee, python, and bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) to add translation support for comments in more languages.

### Configure Proxy

Setting the following environment variables allows Google Translate API calls to go through the proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Empty The Cache

```bash
rm -rf .i18n/.cache
```

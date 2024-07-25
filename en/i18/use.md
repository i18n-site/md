# Install and Use

## windows First Install git bash

windows System, please [click here to download and install first `git bash`](https://git-scm.com/download/win) .

Run subsequent operations in `git bash`

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure Translation Token

Visit [i18n.site/token](//i18n.site/token) Click to copy token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Create `~/.config/i18n.site.yml` paste the copied content into it, the content is as follows:

```
token: YOUR_API_TOKEN
```

In addition, you need [i18n.site/payBill](//i18n.site/payBill) bind a credit card for payment (no recharge is required, the website will automatically deduct fees according to usage, [see the homepage for pricing](/#price) ).

## Use

### Demo Project

Please refer to the demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) to learn the configuration of translation `i18`

Users in China can clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

After cloning, enter the directory and run `i18` to complete the translation.

### Directory Structure

The template warehouse directory structure is as follows

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

The `en` directory contains the translated demo files, which are just an example and can be deleted.

### Run Translation

Enter the directory and run `i18` to translate.

### Add Files to the Repository

In addition to translation, the program will also generate the following files, please add them to the repository.

```
.i18n/hash
.i18n/cache/.gitignore
```

Among them, the content of `.i18n/cache/.gitignore` is as follows :

```
**/*
!**/.gitignore
```

This means ignore all files in the `.i18n/cache/` directory (except `.i18n/cache/.gitignore` ).

If your version control software is not `git` , please ignore it according to this configuration.

## Configuration File

`.i18n/conf.yml` It is the configuration file of the `i18` line translation tool

The content is as follows:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Source Language & Translation Language

In the configuration file, the subordinates of `fromTo` :

`en` is the source language, `zh ja ko de fr` is the target language of translation.

Language code see [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) .

For example, if you want to translate Chinese into English, rewrite this line `zh: en`

If you want to translate to all supported languages, please leave blank after `:` . for example

```
i18n:
  fromTo:
    en:
```

### Ignore File

By default, all files starting with `.md` and `.yml` in the source language directory will be translated.

If you want to ignore certain files and not translate them (such as unfinished drafts), you can use the `ignore` field configuration.

`ignore` Uses a syntax similar to `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

For example, in the above configuration file `_* ` means that files starting with `_` will not be translated.

## Translation Rules

### Translation Editors Should Not Add or Delete Lines

The translation is editable. Modify the original text and machine-translate it again, the manual modifications to the translation will not be overwritten (if this paragraph of the original text has not been modified).

But please note that the lines of the translation and the original text must correspond one to one. That is, do not add or delete lines when compiling the translation. Otherwise, it will cause confusion in the translation editing cache.

If something goes wrong, please refer to [the FAQ for solutions.](/i18/qa#H1)

### `YAML` Translate

The command line tool will find all files ending with `.yml` in the source language file directory and translate them.

* Note that the file name suffix must be `.yml` (not `.yaml` ).

The tool only translates the dictionary values ​​in `.yml` , not the dictionary keys.

for example `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

will be translated as `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

The translation of `YAML` can also be modified manually (but do not add or delete keys or lines in the translation).

Based on `YAML` Translation, you can easily build international solutions for various programming languages.

## Advanced Usage

### Translation Subdirectory

As long as you create `.i18n/conf.yml` (no need to start from demo project template every time), `i18` will work fine.

The command line tool will find the `.i18n/conf.yml` configuration in all subdirectories and translate it.

Projects that use the [monorepo](//monorepo.tools) architecture can split language files into subdirectories.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Custom Installation Directory

It will be installed to `/usr/local/bin` by default.

If `/usr/local/bin` does not have write permission it will be installed to `~/.bin` .

Set environment variables `TO` You can define the installation directory, for example :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

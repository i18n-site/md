# Install and Utilize

## For windows, first install git bash

In the windows system, please [click here to download and install `git bash`](https://git-scm.com/download/win) first.

Conduct subsequent operations in `git bash`.

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure the Translation Token

Visit [i18n.site/token](//i18n.site/token), and click to copy the token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Create `~/.config/i18n.site.yml`, and paste the copied content into it. The content is as follows:

```
token: YOUR_API_TOKEN
```

In addition, it is also necessary to bind a credit card for payment at [i18n.site/payBill](//i18n.site/payBill) (no recharge is required, and the website will automatically deduct fees according to usage. [See the homepage for pricing](/#price)).

## Use

### Demo Project

Please refer to the demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) to learn the configuration of `i18` translation.

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

The translated demo files in the `en` directory are just an example and can be deleted.

### Run Translation

Enter the directory and run `i18` to translate.

### Add Files to the Repository

In addition to the translation, the program will also generate the following files. Please add them to the repository.

```
.i18n/hash
.i18n/cache/.gitignore
```

Among them, the content of `.i18n/cache/.gitignore` is as follows:

```
**/*
!**/.gitignore
```

This means that all files in the `.i18n/cache/` directory (except `.i18n/cache/.gitignore`) are ignored.

If your version control software is not `git`, please ignore it according to this configuration.

## Configuration File

`.i18n/conf.yml` is the configuration file of the `i18` command line translation tool

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

In the configuration file, the subordinate of `fromTo`:

`en` is the source language, and `zh ja ko de fr` are the target languages of the translation.

The language code can be seen at [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

For example, if you want to translate Chinese into English, rewrite this line as `zh: en`.

If you want to translate to all supported languages, please leave it blank after `:`. For example

```
i18n:
  fromTo:
    en:
```

You can configure different `fromTo` for different subdirectories/files. A demonstration is written as follows:

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

In this configuration table, the source language for the translation of the `blog` directory is `zh`, and the source language for the translation of `blog/your_file_name.md` is `ja`.

### Ignore File

By default, all files starting with `.md` and `.yml` in the source language directory will be translated.

If you want to ignore certain files and not translate them (such as unfinished drafts), you can configure it with the `ignore` field.

`ignore` uses the same [globset](https://docs.rs/globset/latest/globset/#syntax) syntax as the `.gitignore` file.

For example, `_* ` in the above configuration file means that files starting with `_` will not be translated.

## Translation Rules

### Translation Editors Should Not Add or Delete Lines

The translation is editable. When modifying the original text and performing machine translation again, the manual modifications to the translation will not be overwritten (if this paragraph of the original text has not been modified).

But please note that the lines of the translation and the original text must correspond one to one. That is, do not add or delete lines when compiling the translation. Otherwise, it will cause confusion in the translation editing cache.

If there is a problem, please refer to [the solutions in the FAQ](/i18/qa#H1)

### `YAML` Translations

The command line tool will find all files ending with `.yml` in the source language file directory and translate them.

* Note that the filename suffix must be `.yml` (not `.yaml`).

The tool only translates the values of the dictionary in `.yml`, not the dictionary keys.

For example, `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

will be translated as `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

The translation of `YAML` can also be manually modified (but do not add or delete keys or lines in the translation).

Based on `YAML` translation, you can easily build international solutions for various programming languages.

## Advanced Usage

### Translation of Subdirectories

As long as `.i18n/conf.yml` is created (no need to start from the demo project template every time), `i18` will work properly.

The command line tool will find the `.i18n/conf.yml` configurations in all subdirectories and translate them.

Projects using the [monorepo](//monorepo.tools) architecture can split language files into subdirectories.

![](https://p.3ti.site/1719910016.avif)

### Custom Installation Directory

It will be installed to `/usr/local/bin` by default.

If `/usr/local/bin` does not have write permission, it will be installed to `~/.bin`.

Setting the environment variable `TO` can define the installation directory, for example:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
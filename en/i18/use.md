# Install and Use

## For Windows, install Git Bash first

For Windows systems, please [click here to download and install `git bash` first](https://git-scm.com/download/win).

Run subsequent operations in `git bash`.

## Installation

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure Translation Token

Visit [i18n.site/token](//i18n.site/token) and click to copy the token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Create `~/.config/i18n.site.yml` and paste the copied content into it. The content is as follows:

```
token: YOUR_API_TOKEN
```

Additionally, you need to bind a payment credit card at [i18n.site/payBill](//i18n.site/payBill) (no need to recharge, the website will automatically deduct fees according to usage, [see the homepage for pricing](/#price)).

## Usage

### Demo Project

Please refer to the demo project [github.com/i18n - site/demo.i18](//github.com/i18n-site/demo.i18) to learn the configuration of `i18` translation.

Chinese users can clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

After cloning, enter the directory and run `i18` to complete the translation.

### Directory Structure

The directory structure of the template repository is as follows:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

The demo files for translation in the `en` directory are just examples and can be deleted.

### Run Translation

Enter the directory and run `i18` to perform the translation.

Besides the translation, the program will also generate the `.i18n/data` folder. Please add it to the repository.

After translating a new file, a new data file will be generated in this directory. Remember to use `git add.` to append.

## Configuration File

`.i18n/conf.yml` is the configuration file of the `i18` command - line translation tool

The content is as follows:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Source Language & Target Language

In the configuration file, under `fromTo`:

`en` is the source language, and `zh, ja, ko, de, fr` are the target languages for translation.

For language codes, see [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

For example, if you want to translate Chinese into English, rewrite this line as `zh: en`.

If you want to translate into all supported languages, leave it blank after `:`. For example:

```
i18n:
  fromTo:
    en:
```

You can configure different `fromTo` for different sub - directories/files. A demonstration is written as follows:

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

In this configuration table, the source language for translating the `blog` directory is `zh`, and the source language for translating `blog/your_file_name.md` is `ja`.

### Ignored Files

By default, all files ending with `.md` and `.yml` in the source language directory will be translated.

If you want to ignore certain files from being translated (such as unfinished drafts), you can use the `ignore` field for configuration.

`ignore` uses a [globset](https://docs.rs/globset/latest/globset/#syntax) - like syntax similar to the `.gitignore` file.

For example, in the above configuration file, `_*` means that files starting with `_` will not be translated.

## Translation Rules

### Do Not Add or Delete Lines in the Translation

The translation is editable. When you modify the original text and perform machine translation again, the manual modifications to the translation will not be overwritten (if this part of the original text has not been modified).

However, please note that the lines in the translation and the original text must be in one - to - one correspondence. That is, do not add or delete lines when compiling the translation. Otherwise, it will cause confusion in the translation editing cache.

If there are any problems, please refer to [the solutions in the FAQ](/i18/qa#H1)

### `YAML` Translations

The command - line tool will find all files ending with `.yml` in the source language file directory and translate them.

* Note that the file name suffix must be `.yml` (not `.yaml`).

The tool only translates the values in the `.yml` dictionary, not the keys.

For example, `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

will be translated to `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

The `YAML` translation can also be manually modified (but do not add or delete keys or lines in the translation).

Based on `YAML` translation, you can easily build internationalization solutions for various programming languages.

## Advanced Usage

### Translating Sub - directories

As long as `.i18n/conf.yml` is created (no need to start from the demo project template every time), `i18` will work properly.

The command - line tool will find all `.i18n/conf.yml` configurations in sub - directories and translate them.

Projects using the [monorepo](//monorepo.tools) architecture can split language files into sub - directories.

![](https://p.3ti.site/1719910016.avif)

### Custom Installation Directory

By default, it will be installed in `/usr/local/bin`.

If `/usr/local/bin` does not have write permission, it will be installed in `~/.bin`.

Setting the environment variable `TO` can define the installation directory, for example:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
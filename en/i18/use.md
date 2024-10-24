# Installation and Usage

## First, install Git Bash on Windows

1	windows System, please [click here to download and install `git bash` first](https://git-scm.com/download/win) .

Run subsequent operations in `git bash`.

## Installation

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure Translation Token

Visit [i18n.site/token](//i18n.site/token) and click to copy the token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Create a file named `~/.config/i18n.site.yml` and paste the copied content into it, as follows:

```
token: YOUR_API_TOKEN
```

Also, you need to bind a credit card for payment at [i18n.site/payBill](//i18n.site/payBill) (no need to recharge; the site will automatically deduct fees based on usage, [view pricing on the homepage](/#price)).

## Use

### Demo Project

Refer to the demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) to learn how to configure `i18` for translation.

Chinese users can clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

After cloning, navigate to the directory and run `i18` to complete the translation.

### Directory Structure

The structure of the template repository directory is as follows:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

The files in the `en` directory are sample translation files; you can delete them all.

### Run Translation

4	Perform subsequent operations within the `git bash` environment.

Besides the translation output, the program will also generate the `.i18n/data` folder. Please add it to your version control system.

After translating the new file, a new data file will be created in this directory. Don't forget to stage the changes with `git add .`.

## Configuration File

`.i18n/conf.yml` is the configuration file for the `i18` command-line translation tool

Source Language & Target Languages

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

`en` is the source language, and `zh ja ko de fr` are the target languages for translation.

See [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) for a list of language codes.

For example, if you want to translate Chinese into English, change this line to `zh: en`.

If you want to translate to all supported languages, leave the field after `:` blank. For example:

```
i18n:
  fromTo:
    en:
```

Different `fromTo` mappings can be set up for various subdirectories/files. An illustrative example is as follows:

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

In this configuration table, the source language for the `blog` directory is set to `zh`, while the source language for `blog/your_file_name.md` is specified as `ja`.

### Ignore Files

By default, the tool will translate all files with the `.md` and `.yml` extensions in the source language directory.

If you want to exclude certain files from translation (e.g., unfinished drafts), you can use the `ignore` field for configuration.

`ignore` uses a similar [globset](https://docs.rs/globset/latest/globset/#syntax) syntax to `.gitignore` files.

For example, `_* ` in the above configuration means that files starting with `_` will not be translated.

## Translation Rules

### Translation editors should not add or delete lines

The translation is editable. Modifying the original text and re-translating it will not overwrite manual edits to the translation (unless the original text in that section has been changed).

> [!WARN]
> The translation and the original text must align line by line. That is, when translating, do not add or omit any lines. Otherwise, it may lead to discrepancies in the translation editing cache.

If you encounter any problems, please refer to the [FAQ for solutions.](/i18/qa#H1)

### `YAML` Translations

27	You may configure distinct `fromTo` settings for various subdirectories or files. An illustrative example is as follows:

* Note that the filename suffix must be `.yml` (not `.yaml`).

The tool only translates the values within dictionaries in `.yml` files; it does not translate the dictionary keys.

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

You can also manually edit `YAML` translations (but avoid adding or deleting keys or lines).

10	Based on `YAML` translations, you can conveniently construct internationalization solutions for various programming languages.

## Advanced Usage

### Translating Subdirectories

As long as `.i18n/conf.yml` is created (no need to start from the demo project template each time), `i18` will function correctly.

The command-line tool will locate all `.i18n/conf.yml` configurations within subdirectories and translate them.

Projects using a [monorepo](//monorepo.tools) architecture can split language files into subdirectories.

![](https://p.3ti.site/1719910016.avif)

### Custom Installation Directory

The tool will be installed to `/usr/local/bin` by default.

If `/usr/local/bin` lacks write permissions, it will be installed to `~/.bin`.

Setting the environment variable `TO` allows you to define the installation directory, for example:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
# Install and Use

## Windows: First Install Git Bash

For Windows systems, please [click here to download and install `git bash` first](https://git-scm.com/download/win).

Run subsequent operations in `git bash`.

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configure Translation Token

Visit [i18n.site/token](//i18n.site/token) and click to copy the token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Create `~/.config/i18n.site.yml`, paste the copied content into it. The content should look like this:

```
token: YOUR_API_TOKEN
```

In addition, you need to bind a payment credit card at [i18n.site/payBill](//i18n.site/payBill) (no recharge is required; the website will automatically deduct fees based on usage. [See the homepage for pricing](/#price)).

## Use

### Demo Project

Please refer to the demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) to learn the configuration of `i18` translation.

Users in China can clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

After cloning, enter the directory and run `i18` to complete the translation.

### Directory Structure

The template repository directory structure is as follows:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

The translated demo files in the `en` directory are just examples and can be deleted.

### Run Translation

Enter the directory and run `i18` to translate.

In addition to the translated files, the program will also generate the `.i18n/data` folder. Please add it to the repository.

After translating new files, new data files will be generated in this directory. Remember to run `git add .` to add them.

## Configuration File

`.i18n/conf.yml` is the configuration file for the `i18` command-line translation tool

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

`en` is the source language, and `zh ja ko de fr` are the target languages for translation.

See [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) for language codes.

For example, if you want to translate Chinese to English, change this line to `zh: en`.

If you want to translate to all supported languages, leave the space after `:` blank. For example:

```
i18n:
  fromTo:
    en:
```

You can configure different `fromTo` for different subdirectories / Files. A demonstration is written as follows :

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

In this configuration, the source language for the `blog` directory is `zh`, and the source language for `blog/your_file_name.md` is `ja`.

### Multilingual Images/Links

In `.i18n/conf.yml`, configure `replace:`. When URLs in images, links (and the `src` and `href` attributes of embedded `HTML`) in `Markdown` have this prefix, the source language code in the URL will be replaced with the target language code ([see the list of language codes](/i18/LANG_CODE)).

For example, your configuration might look like this:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace:` is a dictionary where the key is the URL prefix to be replaced, and the value is the replacement rule.

The meaning of replacing rule `ko de uk>ru zh-TW>zh >en` above is that `ko de` uses the picture of their own language code, `zh-TW` and `zh` use the picture of `zh` , `uk` uses the picture of `ru` , and other languages (such as `ja` ) use the picture of `en` by default.

For example, the French (`fr`) source file in `Markdown` might look like this:

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

The translated and generated English (`en`) file would look like this:

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Here, the `/en/` in the source language code is replaced with `/zh/` in the target language.

Note: The language code in the replaced text in the URL must be surrounded by `/`.

> [!TIP]
> If `- /` is configured in `url:`, only relative paths will be matched, not URLs starting with `//`.
>
> If some links on a domain name should be replaced and others should not, you can use different prefixes such as `[x](//x.com/en/)` and `[x](https://x.com/en/)` to distinguish them.

### Ignore Files

By default, all files with the extensions `.md` and `.yml` in the source language directory will be translated.

If you want to ignore certain files and not translate them (such as unfinished drafts), you can configure this using the `ignore` field.

The `ignore` field uses the same [globset](https://docs.rs/globset/latest/globset/#syntax) syntax as the `.gitignore` file.

For example, `_*` in the configuration file means that files starting with `_` will not be translated.

## Translation Rules

### Do Not Add or Delete Lines in Translations

The translations are editable. If you modify the original text and run the machine translation again, the manual modifications to the translations will not be overwritten (if the original text has not been modified).

> [!WARN]
> The lines in the translations must correspond one-to-one with the lines in the original text. Do not add or delete lines when editing the translations. Otherwise, it will cause confusion in the translation editing cache.

If something goes wrong, please refer to [the FAQ for solutions](/i18/qa#H1)

### `YAML` Translations

The command-line tool will find all files ending with `.yml` in the source language file directory and translate them.

* Note that the filename extension must be `.yml` (not `.yaml`).

The tool only translates the values in the `.yml` dictionaries, not the keys.

For example, `i18n/en/i18n.yml`:

```
apiToken: API Token
defaultToken: Default Token
```

will be translated to `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

The translations of `YAML` files can also be manually modified (but do not add or delete keys or lines in the translations).

Based on `YAML` translations, you can easily build internationalization solutions for various programming languages.

## Advanced Usage

### Translate Subdirectories

As long as `.i18n/conf.yml` is created (no need to start from the demo project template every time), `i18` will work fine.

The command-line tool will find `.i18n/conf.yml` configurations in all subdirectories and translate them.

Projects that use the [monorepo](//monorepo.tools) architecture can split language files into subdirectories.

![](https://p.3ti.site/1719910016.avif)

### Custom Installation Directory

The default installation directory is `/usr/local/bin`.

If `/usr/local/bin` does not have write permissions, it will be installed to `~/.bin`.

Setting the environment variable `TO` can define the installation directory, for example:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
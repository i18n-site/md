# Install & Preview

## Installation

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Configure Token

`i18n.site` has a built-in `i18` translation tool. Please [click here to refer to the `i18` documentation to configure the access token](/i18/use).

## Demo Project

Let's start with a demo project to learn how to use `i18n.site`.

We first clone the demo repository and run the command as follows:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Users in mainland China can:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

The directory name of the `demo.i18n.site` code base clone must be `md` to facilitate local preview with `docker`.

### Translation

First, enter the `md` directory and run `i18n.site`, which will translate `en` to `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

After running, translation and cache files will be generated. Please remember to add them to the repository in the `md` directory using `git add .`.

### Local Preview

Install and start `docker` (`MAC` users are recommended to use [orbstack](https://orbstack.dev) as the runtime for `docker`).

Then, enter the `docker` directory and run `./up.sh`, and then visit [https://127.0.0.1](https://127.0.0.1) to preview locally.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
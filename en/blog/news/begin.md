---

brief: |
  Currently, two open-source command line tools have been developed: i18 (a MarkDown command line translation tool) and i18n.site (a multi-language static document site generator)

---


# i18n.site · MarkDown Translation and Website Building Tool is now live!

After nearly half a year of development, [https://i18n.site](//i18n.site) has been launched.

Currently, two open-source command line tools have been developed:

* `i18`: Markdown command-line translation utility
* `i18n.site`: Multilingual static documentation site generator, **optimized for the reading experience**

Translation maintains the `Markdown` format perfectly. It can detect file changes and translate only the modified files.

Translations are editable; if the original text is modified, subsequent machine translations will not overwrite manual changes to the translation (unless the original paragraph has been modified).

[Click here to authorize automatically follow i18n.site's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) and will **receive bonus $50** .

## Origin

In the Internet age, the global market is at our doorstep, and multilingualism and localization are fundamental skills.

Existing translation management tools are too heavy-duty for programmers who depend on `git` for version control, who prefer command line tools.

Thus, I developed the translation tool `i18` and built the multi-language static site generator `i18n.site` based on it.

![](https://p.3ti.site/1723777556.avif)

This is just the beginning; there is still much to be done.

For instance, integrating static document sites with social media and email subscriptions to reach users promptly with updates.

Or, creating forums and ticketing systems that can be embedded in any webpage, enabling seamless communication for users in multiple languages.

## Open Source

The front-end, back-end, and command line [code is all open source](https://i18n.site/i18n.site/c/src) (the translation model is not open source yet).

The technology stack used includes:

Frontend: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Command line and back-end are developed using Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower-HTTP](https://github.com/tower-rs/tower-http/releases)

Command line: [Embedded JS engine Boa_Engine](https://docs.rs/boa_engine), [Embedded database Fjall](https://github.com/fjall-rs/fjall)

Server VPS: [Contabo](https://my.contabo.com)

Database: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org)

Email sending with self-hosted SMTP: [Chasquid](https://github.com/albertito/chasquid)

## Contact Us

With the launch of a new product, issues are bound to arise.

We welcome you to contact us via Google Groups: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
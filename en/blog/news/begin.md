# i18n.site · MarkDown Translation and Website Building Tool, Now Online!

After more than half a year of development, [https://i18n.site](//i18n.site) has come online.

Currently, two open source command-line tools have been implemented:

* `i18`: MarkDown Command-line translation tool
* `i18n.site`: Multi-language static document site generator, **optimized for the reading experience**

Translation can perfectly maintain the format of `Markdown`. It can identify file modifications and only translate files with changes.

The translation is editable; if you modify the original text and machine-translate it again, the manual modifications to the translation will not be overwritten (if this paragraph of the original text has not been modified).

[Click here to authorize automatically follow i18n.site's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) and will **receive bonus $50** .

## Origin

In the Internet era, the whole world is a market, and multilingualism and localization are basic skills.

The existing translation management tools are too heavyweight. For programmers who rely on `git` for version management, they still prefer the command-line.

So, I developed a translation tool `i18` and built a multi-language static site generator `i18n.site` based on the translation tool.

![](https://p.3ti.site/1723777556.avif)

This is just the beginning, and there is much more to do.

For example, by connecting the static document site with social media and email subscriptions, users can be reached in a timely manner when updates are released.

For example, multi-language forums and work order systems can be embedded in any webpage, allowing users to communicate without barriers.

## Open Source

The front-end, back-end, and command-line [codes are all open source](https://i18n.site/i18n.site/c/src) (the translation model is not open source yet).

The technology stack used is as follows:

Front-end [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

The command-line and back-end are developed based on rust.

Back-end [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Command-line [embedded js engine boa_engine](https://docs.rs/boa_engine), [embedded database fjall](https://github.com/fjall-rs/fjall).

Server VPS [contabo](https://my.contabo.com)

Database [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Mail sending self-built SMTP [chasquid](https://github.com/albertito/chasquid).

## Contact Us

When new products are launched, problems are inevitable.

Feel free to contact us via the Google Forum: [groups.google.com/u/2/g/i18n.site](https://groups.google.com/u/2/g/i18n-site)
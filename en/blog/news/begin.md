---

brief: |
  Currently, two open - source command - line tools have been developed: i18 (a MarkDown command - line translation tool) and i18n.site (a multi - language static document site generator)

---


# i18n.site · MarkDown Translation and Website - Building Tool, Launched!

After over half a year of development, [https://i18n.site](//i18n.site) has been launched.

Currently, two open - source command - line tools have been developed:

* `i18`: MarkDown command - line translation tool
* `i18n.site`: Multi - language static document site generator, **optimized for reading experience**

Translation can perfectly preserve the format of `Markdown`. It can identify file modifications and only translate the files that have been changed.

The translations are editable; when the original text is modified and machine - translated again, the manual modifications to the translations will not be overwritten (if this part of the original text has not been modified).

[Click here to authorize automatically follow i18n.site's github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) and will **receive bonus $50** .

## Origin

In the Internet age, the whole world is a market, and multilingualism and localization are fundamental requirements.

The existing translation management tools are too heavy - weighted. For programmers who rely on `git` for version management, they still prefer the command line.

Thus, I developed the translation tool `i18`, and on the basis of this translation tool, I built a multi - language static site generator `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

This is just the beginning; there is still a lot more to be done.

For example, by integrating the static document site with social media and email subscriptions, users can be reached in a timely manner when updates are released.

For example, multi - language forums and work - order systems that can be embedded in any web page can be created, allowing users to communicate without barriers.

## Open Source

The front - end, back - end, and command - line [codes are all open - sourced](https://i18n.site/i18n.site/c/src) (the translation model is not open - sourced yet).

The technology stack used is as follows:

Front - end: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

The command line and back - end are developed based on Rust.

Back - end: [axum](https://github.com/tokio-rs/axum), [tower - http](https://github.com/tower-rs/tower-http/releases).

Command line: [embedded js Engine boa_engine](https://docs.rs/boa_engine), [embedded database fjall](https://github.com/fjall-rs/fjall).

Server VPS: [contabo](https://my.contabo.com)

Database: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Mail is sent via self - built SMTP [chasquid](https://github.com/albertito/chasquid).

## Contact Us

When new products are launched, problems are inevitable.

Please feel free to contact us via Google Forum: [groups.google.com/u/2/g/i18n - site](https://groups.google.com/u/2/g/i18n-site)
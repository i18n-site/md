---

brief: |
  Currently, two open-source command-line tools have been implemented: i18 (Markdown command-line translation tool) and i18n.site (multi-language static document site generator)

---


# i18n.site · Markdown Translation and Website Building Tool Is Now Live!

After more than half a year of development, [https://i18n.site](//i18n.site) is now live.

Currently, two open-source command-line tools have been implemented:

* `i18`: Markdown command-line translation tool
* `i18n.site`: Multi-language static document site generator, **optimized for reading experience**

The translation can perfectly maintain the `Markdown` format and can identify file modifications, translating only the changed files.

The translated text is editable; if you modify the original text and run the machine translation again, the manual edits to the translation will not be overwritten (if the original text in that paragraph has not been modified).

[➤ Click here to authorize and automatically follow i18n.site's GitHub repository](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), and **receive a $50 bonus**.

## Origin

In the internet era, the global market demands multilingual and localized content as a fundamental skill.

Existing translation management tools are too cumbersome. For programmers who rely on `git` for version control, a command-line interface is still preferred.

Thus, I developed the translation tool `i18` and built the multi-language static site generator `i18n.site` on top of it.

![](https://p.3ti.site/1723777556.avif)

This is just the beginning; there is much more to come.

For example, integrating the static document site with social media and email subscriptions to promptly notify users of updates.

Another example is embedding multi-language forums and ticket systems into any webpage, allowing users to communicate seamlessly.

## Open Source

The front-end, back-end, and command-line [code are all open source](https://i18n.site/i18n.site/c/src) (the translation model is not yet open source).

The technology stack used is as follows:

Frontend: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Command line and backend: developed using Rust.

Backend: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Command line: [embedded JS engine boa_engine](https://docs.rs/boa_engine), [embedded database fjall](https://github.com/fjall-rs/fjall).

Server VPS: [contabo](https://my.contabo.com)

Database: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Email sending: self-hosted SMTP [chasquid](https://github.com/albertito/chasquid).

## Contact Us

When launching new products, issues are inevitable.

Please feel free to contact us via the Google Forum: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
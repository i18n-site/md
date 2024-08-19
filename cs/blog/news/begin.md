# i18n.site · Nástroj pro překlad a tvorbu stránek MarkDown je nyní spuštěn!

Po více než půl roce vývoje je [https://i18n.site](//i18n.site) spuštěn.

V současné době jsme implementovali dva open-source nástroje pro příkazovou řádku:

* `i18` : MarkDown
* `i18n.site` : generátor vícejazyčných statických dokumentů, **optimalizovaný pro čtenářský zážitek**

Překlad dokáže perfektně zachovat formát `Markdown`. Dokáže rozpoznat změny v souborech a překládat pouze upravené soubory.

Překlady jsou editovatelné; pokud upravíte originální text a znovu jej strojově přeložíte, ruční úpravy nebudou přepsány (pokud originální text nebyl změněn).

[Klikněte zde pro autorizaci a automatické i18n.site github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) a **získejte bonus $50** .

## Původ

V éře internetu je celý svět trhem, a mnohojazyčnost a lokalizace jsou základní dovednosti.

Stávající nástroje pro správu překladů jsou příliš těžkopádné. Pro programátory, kteří se spoléhají na správu verzí pomocí `git`, je příkazový řádek stále preferovaný.

Tak jsem vyvinul překladatelský nástroj `i18` a na jeho základě vytvořil vícejazyčný generátor statických stránek `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Toto je teprve začátek, plánujeme toho ještě mnohem více.

Například propojení statických dokumentů se sociálními médii a e-mailovým předplatným, aby uživatelé byli okamžitě informováni o aktualizacích.

Například vícejazyčná fóra a systémy pro práci s požadavky, které lze vložit do jakékoli webové stránky, aby uživatelé mohli bez překážek komunikovat.

## Open Source

Všechny kódy pro front-end, back-end a příkazový řádek jsou [open source](https://i18n.site/i18n.site/c/src) (překladový model zatím není open source).

Použitý technologický stack je následující:

Frontend: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Příkazový řádek a back-end jsou vyvinuty na základě jazyka Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower-HTTP](https://github.com/tower-rs/tower-http/releases)

Příkazový řádek: [嵌入式JS engine Boa_engine](https://docs.rs/boa_engine), [嵌入式数据库 Fjall](https://github.com/fjall-rs/fjall)

Řešení VPS: [Contabo](https://my.contabo.com)

Databáze: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org)

Odesílání e-mailů pomocí vlastního SMTP: [Chasquid](https://github.com/albertito/chasquid)

## Kontaktujte nás

Při uvedení nových produktů na trh jsou problémy nevyhnutelné.

Vítáme vás, abyste nás kontaktovali prostřednictvím Google fóra: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
---

brief: |
  V současné době byly implementovány dva nástroje příkazového řádku s otevřeným zdrojovým kódem: i18 (nástroj pro překlad příkazového řádku MarkDown) a i18n.site (generátor vícejazyčných statických stránek pro dokumenty)

---


# i18n.site · Nástroj Pro Překlad a Tvorbu Webových Stránek MarkDown Je Nyní Online!

Po více než půl roce vývoje je [https://i18n.site](//i18n.site)

V současné době jsou implementovány dva open source nástroje příkazového řádku:

* `i18` : MarkDown
* `i18n.site` : generátor statických dokumentů, **optimalizovaný pro čtení**

Překlad dokáže perfektně zachovat formát `Markdown` . Dokáže identifikovat úpravy souborů a překládat pouze soubory se změnami.

Překlad je upravitelný, pokud upravíte původní text a znovu jej strojově přeložíte, ruční úpravy překladu nebudou přepsány (pokud tento odstavec původního textu nebyl upraven).

[➤ Klikněte zde pro autorizaci a automatické i18n.site knihovny github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) a **získejte bonus $50** .

## Původ

V době internetu je celý svět trhem a mnohojazyčnost a lokalizace jsou základní dovednosti.

Stávající nástroje pro správu překladů jsou příliš těžké Pro programátory, kteří se spoléhají na správu verze `git` , stále preferují příkazový řádek.

Vyvinul jsem tedy překladatelský nástroj `i18` a vytvořil vícejazyčný generátor statických stránek `i18n.site` založený na překladatelském nástroji.

![](https://p.3ti.site/1723777556.avif)

Toto je jen začátek, zbývá toho ještě hodně udělat.

Například propojením statického webu s dokumenty se sociálními médii a předplatným e-mailů mohou být uživatelé zastiženi včas, když jsou vydány aktualizace.

Například vícejazyčná fóra a systémy pracovních příkazů mohou být zabudovány do jakékoli webové stránky, což uživatelům umožňuje komunikovat bez překážek.

## Open Source

[Všechny kódy front-endu, back-endu a příkazového řádku jsou open source](https://i18n.site/i18n.site/c/src) (model překladu ještě není open source).

Použitý technologický zásobník je následující:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Příkazový řádek a backend jsou vyvinuty na bázi rzi.

zadní konec [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Příkazový řádek [embedded js Engine boa_engine](https://docs.rs/boa_engine) , [vložená databáze fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

databáze [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Odešlete poštu vlastnímu SMTP [chasquid](https://github.com/albertito/chasquid)

## Kontaktujte Nás

Při uvedení nových produktů na trh jsou nevyhnutelné problémy.

Neváhejte nás kontaktovat prostřednictvím fóra Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
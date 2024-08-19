# i18n.site · a MarkDown Fordító és Webhelyépítő Eszköz Már Elérhető!

Több mint fél éves fejlesztés után [https://i18n.site](//i18n.site) elindult.

Jelenleg két nyílt forráskódú parancssori eszköz valósult meg:

* `i18` : MarkDown parancssori fordító eszköz
* `i18n.site` : Többnyelvű statikus dokumentumoldal-generátor, **az olvasási élmény optimalizálására**

A fordítás tökéletesen megőrzi a `Markdown` formátumot. Képes felismerni a fájlmódosításokat, és csak a módosított fájlokat fordítja le.

A fordítás szerkeszthető; ha az eredeti szöveget módosítják, és újra lefordítják, a kézi módosítások nem lesznek felülírva (ha az eredeti szöveg adott része nem változott).

[Kattintson ide, hogy engedélyezze és automatikusan i18n.site github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) és **bónusz $50 kapjon** .

## Származás

Az internet korszakában a globális piac, a többnyelvűség és a lokalizáció alapvető készségek.

A meglévő fordításkezelő eszközök túl bonyolultak, a `git` verziókezelést használó fejlesztők számára a parancssor a kedvelt megoldás.

Tehát kifejlesztettem az `i18` fordítóeszközt, és a 그 alapján a `i18n.site` többnyelvű statikus webhelygenerátort.

![](https://p.3ti.site/1723777556.avif)

Ez csak a kezdet, sok minden még előttünk áll.

Például, a statikus dokumentumoldalakat összekapcsolhatjuk a közösségi médiával és e-mail feliratkozásokkal, hogy a frissítéseket időben elérjük a felhasználók.

Például, többnyelvű fórumok és támogatási rendszerek beágyazhatók bármely weboldalba, hogy a felhasználók akadálymentesen kommunikálhassanak.

## Nyílt forráskód

A front-end, back-end és parancssori kódok [mind nyílt forráskódúak](https://i18n.site/i18n.site/c/src) (a fordítási modell kivételével).

A használt technológiai stack a következő:

Frontend: [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Parancssor és back-end: Rust alapú fejlesztés.

Back-end: [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Parancssor: [beágyazott JavaScript motor: boa_engine](https://docs.rs/boa_engine), [beágyazott adatbázis: fjall](https://github.com/fjall-rs/fjall).

Szerver: [contabo](https://my.contabo.com) VPS

Adatbázis: [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

E-mail küldés: Saját SMTP szerver: [chasquid](https://github.com/albertito/chasquid).

## Kapcsolatfelvétel

Új termékek bevezetésekor problémák elkerülhetetlenek.

Kapcsolatba léphet velünk a Google Fórumon: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
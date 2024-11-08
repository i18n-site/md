---

brief: |
  Jelenleg két nyílt forráskódú parancssori eszköz került bevezetésre: az i18 (MarkDown parancssori fordítóeszköz) és az i18n.site (többnyelvű statikus dokumentumoldal-generátor)

---


# i18n.site · a MarkDown Fordító És Webhelyépítő Eszköz Már Elérhető!

Több mint fél éves fejlesztés után elérhető [https://i18n.site](//i18n.site)

Jelenleg két nyílt forráskódú parancssori eszköz van megvalósítva:

* `i18` : MarkDown fordító eszköz
* `i18n.site` Többnyelvű statikus dokumentumoldal-generátor : **olvasási élményre optimalizálva**

A fordítás tökéletesen meg tudja tartani a `Markdown` formátumát. Képes azonosítani a fájlmódosításokat, és csak a módosított fájlokat tudja lefordítani.

A fordítás szerkeszthető, ha az eredeti szöveget módosítja és újra lefordítja, a fordításon végrehajtott manuális módosítások nem kerülnek felülírásra (ha az eredeti szöveg ezen bekezdését nem módosították).

[➤ Kattintson ide, hogy engedélyezze és automatikusan kövesse github könyvtárat i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) és **bónusz $50 kapjon** !

## Származás

Az internet korszakában az egész világ piac, a többnyelvűség és a lokalizáció alapkészségek.

A meglévő fordításkezelő eszközök túlságosan nehézkesek Azok a programozók, akik a `git` ás verzió kezelését használják, továbbra is a parancssort részesítik előnyben.

Tehát kifejlesztettem egy fordítóeszközt `i18` és egy többnyelvű statikus webhelygenerátort `i18n.site` a fordítóeszköz alapján.

![](https://p.3ti.site/1723777556.avif)

Ez még csak a kezdet, még sok a tennivaló.

Például a statikus dokumentumoldal közösségi médiával és e-mail-előfizetésekkel való összekapcsolásával a felhasználók időben elérhetők a frissítések megjelenésekor.

Például a többnyelvű fórumok és munkarend-rendszerek bármely weboldalba beágyazhatók, így a felhasználók akadályok nélkül kommunikálhatnak.

## Nyílt Forráskódú

A front-end, back-end és parancssori [kódok mind nyílt forráskódúak](https://i18n.site/i18n.site/c/src) (a fordítási modell még nem nyílt forráskódú).

A használt technológiai halom a következő:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

A parancssort és a háttérrendszert a rozsda alapján fejlesztették ki.

[axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Parancssor [js Engine boa_engine](https://docs.rs/boa_engine) , [beágyazott adatbázis fjall](https://github.com/fjall-rs/fjall) .

szerver [contabo](https://my.contabo.com) VPS

adatbázis [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Küldj levelet a saját építésű [chasquid](https://github.com/albertito/chasquid) SMTP

## Vegye Fel Velünk a Kapcsolatot

Amikor új termékek kerülnek piacra, elkerülhetetlenek a problémák.

Forduljon hozzánk [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) a Google Fórumon keresztül :
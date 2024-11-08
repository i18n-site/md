---

brief: |
  Actualment, s'han implementat dues eines de línia d'ordres de codi obert: i18 (eina de traducció de línia d'ordres de MarkDown) i i18n.site (generador de llocs de documents estàtics en diversos idiomes)

---


# i18n.site · L'eina De Traducció I Creació De Llocs Web MarkDown Ja Està en Línia!

Després de més de mig any de desenvolupament, [https://i18n.site](//i18n.site) està en línia.

Actualment, s'implementen dues eines de línia d'ordres de codi obert:

* `i18` : MarkDown Eina de traducció de la línia d'ordres
* `i18n.site` : Generador de llocs de documents estàtics multi-idioma, **optimitzat per a l'experiència de lectura**

La traducció pot mantenir perfectament el format de `Markdown` . Pot identificar modificacions de fitxers i només traduir fitxers amb canvis.

La traducció és editable; si modifiqueu el text original i el torneu a traduir automàticament, les modificacions manuals a la traducció no es sobreescriuran (si aquest paràgraf del text original no s'ha modificat).

[➤ Feu clic aquí per autoritzar i seguir i18n.site la biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **rebre una bonificació $50** .

## Origen

A l'era d'Internet, el món sencer és un mercat, i el multilingüisme i la localització són competències bàsiques.

Les eines de gestió de traduccions existents són massa pesades Per als programadors que confien en la gestió de la versió `git` , encara prefereixen la línia d'ordres.

Així doncs, vaig desenvolupar una eina de traducció `i18` i vaig crear un generador de llocs estàtic multi-idioma `i18n.site` basat en l'eina de traducció.

![](https://p.3ti.site/1723777556.avif)

Això és només el principi, hi ha molt més per fer.

Per exemple, connectant el lloc de documents estàtics amb les xarxes socials i les subscripcions de correu electrònic, es pot arribar als usuaris a temps quan es publiquin les actualitzacions.

Per exemple, els fòrums multilingües i els sistemes d'ordres de treball es poden incrustar a qualsevol pàgina web, permetent als usuaris comunicar-se sense barreres.

## Codi Obert

Els [codis del front-end, el back-end i la línia d'ordres són tots de codi obert](https://i18n.site/i18n.site/c/src) (el model de traducció encara no és de codi obert).

La pila tecnològica utilitzada és la següent:

Frontend [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

La línia d'ordres i el backend es desenvolupen basant-se en l'òxid.

[axum](https://github.com/tokio-rs/axum) posterior, [tower-http](https://github.com/tower-rs/tower-http/releases) .

Línia d'ordres [js boa_engine](https://docs.rs/boa_engine) , [base de dades incrustada fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

base de dades [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Envieu [chasquid](https://github.com/albertito/chasquid) SMTP

## Contacta Amb Nosaltres

Quan es llancen nous productes, els problemes són inevitables.

No dubteu a contactar amb nosaltres a través del Fòrum de Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
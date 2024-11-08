---

brief: |
  Šiuo metu yra įdiegti du atvirojo kodo komandinės eilutės įrankiai: i18 (komandinės eilutės vertimo įrankis MarkDown) ir i18n.site (kelių kalbų statinių dokumentų svetainių generatorius)

---


# i18n.site · MarkDown Vertimo Ir Svetainių Kūrimo Įrankis Dabar Yra Internete!

Po daugiau nei pusės metų kūrimo prisijungė [https://i18n.site](//i18n.site)

Šiuo metu yra įdiegti du atvirojo kodo komandinės eilutės įrankiai:

* `i18` Komandinės eilutės vertimo : MarkDown
* `i18n.site` : statinių dokumentų svetainių generatorius, **optimizuotas skaitymo patirčiai**

Vertimas gali puikiai išlaikyti `Markdown` formatą. Gali nustatyti failų modifikacijas ir išversti tik tuos failus su pakeitimais.

Vertimas yra redaguojamas, jei pakeisite originalų tekstą ir jį išverssite mašininiu būdu, rankiniai vertimo pakeitimai nebus perrašyti (jei ši originalaus teksto pastraipa nebuvo pakeista).

[➤ Spustelėkite čia, kad patvirtintumėte ir automatiškai i18n.site github biblioteką](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) ir **gautumėte premiją $50** !

## Kilmė

Interneto eroje visas pasaulis yra rinka, o daugiakalbystė ir lokalizavimas yra pagrindiniai įgūdžiai.

Esamos vertimo valdymo priemonės yra per sunkios. Programuotojams, kurie naudojasi `git` versijos valdymu, jie vis tiek teikia pirmenybę komandinei eilutei.

Taigi, sukūriau vertimo įrankį `i18` ir sukūriau daugiakalbį statinės svetainės generatorių `i18n.site` , pagrįstą vertimo įrankiu.

![](https://p.3ti.site/1723777556.avif)

Tai tik pradžia, dar daug ką reikia nuveikti.

Pavyzdžiui, sujungus statinę dokumentų svetainę su socialine žiniasklaida ir el. pašto prenumerata, vartotojus galima pasiekti laiku, kai bus išleisti naujinimai.

Pavyzdžiui, kelių kalbų forumai ir darbo užsakymų sistemos gali būti įterpti į bet kurį tinklalapį, todėl vartotojai gali bendrauti be kliūčių.

## Atviras Šaltinis

Priekinis, galinis ir komandinės eilutės [kodai yra atvirojo kodo](https://i18n.site/i18n.site/c/src) (vertimo modelis dar nėra atvirojo kodo).

Naudojama ši technologija:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Komandų eilutė ir užpakalinė programa yra sukurti remiantis rūdimis.

galinė dalis [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Komandų eilutė [js Variklio boa_engine](https://docs.rs/boa_engine) , [įterptoji duomenų bazė fjall](https://github.com/fjall-rs/fjall) .

serveris [contabo](https://my.contabo.com) VPS

duomenų bazė [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Siųsti paštą į savarankiškai pastatytą SMTP [chasquid](https://github.com/albertito/chasquid)

## Susisiekite Su Mumis

Kai pristatomi nauji produktai, problemos neišvengiamos.

Nedvejodami susisiekite su mumis per Google forumą [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
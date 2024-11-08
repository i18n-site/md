---

brief: |
  Eins og er, hafa tvö opinn uppspretta skipanalínuverkfæri verið innleidd: i18 (MarkDown skipanalínuþýðingartól) og i18n.site (fjöltunga kyrrstæður skjalasíðuframleiðandi)

---


# i18n.site · MarkDown Þýðingar- Og Vefsíðugerðarverkfæri Er Nú Á Netinu!

Eftir meira en hálfs árs þróun er [https://i18n.site](//i18n.site)

Eins og er eru tvö opinn uppspretta skipanalínuverkfæri útfærð:

* `i18` : MarkDown Skipanalínuþýðingartól
* `i18n.site` : Multi-tunguage static document site generator, **fínstillt fyrir lestrarupplifun**

Þýðing getur fullkomlega haldið sniðinu `Markdown` . Getur greint breytingar á skrám og aðeins þýtt skrár með breytingum.

Þýðingin er breytanleg; ef þú breytir upprunalega textanum og vélþýðir hann aftur, verður handvirkum breytingum á þýðingunni ekki skrifað yfir (ef þessari málsgrein upprunalega textans hefur ekki verið breytt).

[➤ Smelltu hér til að heimila og fylgja i18n.site github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **fá bónus $50** .

## Uppruni

Á tímum internetsins er allur heimurinn markaður og fjöltyngi og staðfærsla eru grunnfærni.

Núverandi þýðingarstjórnunarverkfæri eru of þung. Fyrir forritara sem treysta á útgáfu `git` stjórnun kjósa þeir samt skipanalínuna.

Svo, ég þróaði þýðingartól `i18` og smíðaði margra tungumála kyrrstæða síðugenerator `i18n.site` byggt á þýðingartólinu.

![](https://p.3ti.site/1723777556.avif)

Þetta er bara byrjunin, það er miklu meira að gera.

Til dæmis, með því að tengja kyrrstæða skjalasíðuna við samfélagsmiðla og tölvupóstáskriftir, er hægt að ná í notendur í tíma þegar uppfærslur eru gefnar út.

Til dæmis er hægt að fella fjöltungumálþing og verkbeiðnakerfi inn á hvaða vefsíðu sem er, sem gerir notendum kleift að eiga samskipti án hindrana.

## Opinn Uppspretta

Framhlið, bakhlið og [skipanalínukóðar eru allir opinn uppspretta](https://i18n.site/i18n.site/c/src) (þýðingarlíkanið er ekki enn opið).

Tæknistaflan sem notuð er er sem hér segir:

Frontend [svelte](https://svelte.dev) [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Skipanalínan og bakendinn eru þróuð út frá ryði.

afturenda [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Skipanalína [js vél boa_engine](https://docs.rs/boa_engine) , [innbyggður gagnagrunnur fjall](https://github.com/fjall-rs/fjall) .

þjónn [contabo](https://my.contabo.com) VPS

[kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

[chasquid](https://github.com/albertito/chasquid) SMTP

## Hafðu Samband Við Okkur

Þegar nýjar vörur eru settar á markað eru vandamál óumflýjanleg.

Ekki hika [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) að hafa samband við okkur í gegnum Google Forum :
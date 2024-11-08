---

brief: |
  Aktualisht, janë zbatuar dy mjete të linjës së komandës me burim të hapur: i18 (mjet përkthimi i linjës së komandës MarkDown) dhe i18n.site (gjenerues i faqeve të dokumenteve statike me shumë gjuhë)

---


# i18n.site · Mjeti I Përkthimit Dhe Krijimit Të Faqes Në Internet MarkDown Tani Është Online!

Pas më shumë se gjysmë viti zhvillimi, [https://i18n.site](//i18n.site)

Aktualisht, dy mjete të linjës së komandës me burim të hapur janë implementuar:

* `i18` : MarkDown
* `i18n.site` : Gjenerator i faqeve të dokumenteve statike me shumë gjuhë, **i optimizuar për përvojën e leximit**

Përkthimi mund të ruajë në mënyrë të përkryer formatin `Markdown` . Mund të identifikojë modifikimet e skedarëve dhe të përkthejë skedarët vetëm me ndryshime.

Përkthimi është i modifikueshëm nëse modifikoni tekstin origjinal dhe e përktheni përsëri me makinë, modifikimet manuale të përkthimit nuk do të mbishkruhen (nëse ky paragraf i tekstit origjinal nuk është modifikuar).

[➤ Klikoni këtu për të autorizuar dhe ndjekur i18n.site Bibliotekën github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) dhe **për të marrë bonus $50** .

## Origjina

Në epokën e internetit, e gjithë bota është një treg, dhe shumëgjuhësia dhe lokalizimi janë aftësi themelore.

Mjetet ekzistuese të menaxhimit të përkthimit janë shumë të rënda Për programuesit që mbështeten në menaxhimin e versionit `git` , ata ende preferojnë linjën e komandës.

Kështu, unë zhvillova një mjet përkthimi `i18` dhe ndërtova një gjenerator të faqeve statike shumëgjuhëshe `i18n.site` bazuar në mjetin e përkthimit.

![](https://p.3ti.site/1723777556.avif)

Ky është vetëm fillimi, ka shumë më tepër për të bërë.

Për shembull, duke lidhur faqen e dokumenteve statike me mediat sociale dhe abonimet me email, përdoruesit mund të arrihen në kohë kur përditësimet lëshohen.

Për shembull, forumet shumëgjuhëshe dhe sistemet e porosive të punës mund të futen në çdo faqe interneti, duke i lejuar përdoruesit të komunikojnë pa pengesa.

## Burim I Hapur

[Kodet e pjesës së përparme, të pasme dhe të linjës së komandës janë të gjitha me burim të hapur](https://i18n.site/i18n.site/c/src) (modeli i përkthimit nuk është ende me burim të hapur).

Skema e teknologjisë e përdorur është si më poshtë:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Linja e komandës dhe mbështetja janë zhvilluar në bazë të ndryshkut.

fundi i pasmë [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Linja komanduese [e js Motorri boa_engine](https://docs.rs/boa_engine) , [baza e të dhënave e integruar fjall](https://github.com/fjall-rs/fjall) .

server [contabo](https://my.contabo.com) VPS

bazën e të dhënave [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Dërgo postë në [chasquid](https://github.com/albertito/chasquid) të vetë-ndërtuar SMTP

## Na Kontaktoni

Kur lansohen produkte të reja, problemet janë të pashmangshme.

Mos ngurroni të na kontaktoni përmes Forumit të Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
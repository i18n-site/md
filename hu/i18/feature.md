# A Termék Jellemzői

`i18` a fordítás parancssori eszköze Markdown & Yaml

## Tökéletesen Képes Fenntartani a Markdown Formátumát

Támogatja a Markdown táblák fordítását a formátum károsodása nélkül, nem fordítja le a matematikai képletekben vagy hivatkozásokban lévő szavakat.

Támogatja Markdown HTML , a `MarkDown` HTML ágyazott `<pre>` és `<code>` címkék tartalma nem fordítható le

## Fel Tudja Ismerni a Matematikai Képleteket És Kihagyja a Fordítást

A rendszer felismeri a matematikai képleteket, és kihagyja a fordítást.

A matematikai képletek írásával kapcsolatban olvassa el a [" Github A matematikai kifejezések írásáról" című részt](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Lehetőség a Megjegyzések Kódrészletekben Történő Fordítására

A soron belüli kód és a kódrészletek nem fordíthatók le, de a kódban található megjegyzések lefordíthatók.

A fordítási megjegyzésekben a ` ``` ` után ` ```rust ` :

Jelenleg támogatja a megjegyzések fordítását `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [és más nyelveken](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ha a kódban szereplő összes nem angol karaktert le szeretné fordítani, jelölje meg a kódrészletet ` ```i18n ` val.

Ha a kívánt programozási nyelv nem elérhető, kérjük, [lépjen kapcsolatba velünk](https://groups.google.com/g/i18n-site) .

## Parancssorbarát

Számos [nehéz eszköz](https://www.capterra.com/translation-management-software) áll rendelkezésre a fordítási dokumentumok kezelésére.

Azon programozók számára, akik ismerik `git` , `vim` et és `vscode` , ezeknek az eszközöknek a használata dokumentumok szerkesztéséhez és verziók kezeléséhez kétségtelenül növeli a tanulási költségeket.

`KISS` ( `Keep It Simple, Stupid` ) Az elvi hívők körében a vállalati szintű megoldások egyet jelentenek azzal, hogy nehézkesek, nem hatékonyak és nehezen használhatók.

A fordítást parancsok bevitelével és egy kattintással történő befejezésével kell elvégezni. Nem lehetnek bonyolult környezeti függőségek.

Ne adjon hozzá entitásokat, hacsak nem szükséges.

## Nincs Módosítás, Nincs Fordítás

Vannak olyan parancssori fordítóeszközök is, mint [translate-shell](https://github.com/soimort/translate-shell)

Azonban nem támogatják a fájlmódosítások azonosítását, és csak a módosított fájlokat fordítják le a költségek csökkentése és a hatékonyság növelése érdekében.

## A Fordítás Szerkeszthető, És a Gépi Fordítás Nem Írja Felül a Meglévő Módosításokat.

A fordítás szerkeszthető.

Módosítsa az eredeti szöveget, és fordítsa le ismét géppel, a fordításon végrehajtott manuális módosítások nem kerülnek felülírásra (ha az eredeti szöveg ezen bekezdését nem módosították).

## A Legjobb Minőségű Gépi Fordítás

A fordítási technológia új generációját fejlesztettük ki, amely egyesíti a hagyományos gépi fordítási modellek és a nagy nyelvi modellek technikai előnyeit, hogy a fordítások pontosak, gördülékenyek és elegánsak legyenek.

A vaktesztek azt mutatják, hogy a fordítási minőségünk lényegesen jobb a hasonló szolgáltatásokhoz képest.

Ugyanezen minőség elérése érdekében a Google Fordító által igényelt kézi szerkesztés mennyisége `ChatGPT` `2.67` szerese, illetve `3.15` -szorosa a miénknek.

## <a rel=id href="#price" id="price"></a> Rendkívül versenyképes árképzés

|                                                                                   | USD/millió szó |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kattintson ide, hogy engedélyezze és automatikusan kövesse github könyvtárat i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) és **bónusz $50 kapjon** !

Megjegyzés: A számlázható karakterek száma = [a unicode száma](https://en.wikipedia.org/wiki/Unicode) a forrásfájlban × a nyelvek száma a fordításban

## Fordítás Támogatása `YAML`

Az eszköz csak a szótári értékeket fordítja le `YAML` -ban, a szótár kulcsait nem.

`YAML` fordítás alapján könnyedén építhet nemzetközi megoldásokat különféle programozási nyelvekre.

## Támogatja a Fordítás `HOGO` Fejléc Konfigurációját

Támogatja a static blog [HOGO](https://github.com/gohugoio/hugo) , és csak a `title` , `summary` , `brief` és `description` mezőket fordítja le.

## Ne Fordítsa Le a Változóneveket

`Markdown` e-mail-sablonként, `YAML` nyelvi fájlkonfigurációként használjuk, és lesznek változó paraméterek (például: `${amount}` újratöltés érkezett).

Az olyan változóneveket, mint `${varname}` nem tekintjük angol fordításnak.

## Fordításoptimalizálás Kínára, Japánra És Koreára

### Ha Angolra Fordítják, a Cím Első Betűje Automatikusan Nagybetűs Lesz.

Kínában, Japánban és Koreában nincsenek kis- és nagybetűk, de az angol címeknél az a konvenció, hogy az első betűt nagybetűvel írják.

`i18` fel tudja ismerni a címet `MarkDown` -ben, és automatikusan nagybetűt ír, ha kis- és nagybetűket érzékeny nyelvre fordít.

Például `为阅读体验而优化` `Optimized for Reading Experience` -re lesz fordítva.

### A Kínai, Japán, Koreai És Kínai Angol Kifejezéseket Nem Fordítjuk Le

A Kínából, Japánból és Koreából származó dokumentumok gyakran sok angol kifejezést tartalmaznak.

A kínai, japán és koreai nyelvek gépi fordítása nem angol nyelvvé vált, és a kifejezéseket gyakran együtt fordítják, például a következő kínai mondatot:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ha a Google-t vagy a DeepL-t használja, akkor mindkettő helytelenül fordítja le az angol kifejezéseket, amelyeknek eredetinek kell maradniuk (például japán és francia).

### Google Fordító

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` fordítva :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` fordítva :

`Falcon` t `faucon` nek, `Llama` `lama` -nak fordítják. Tulajdonnévként ezeket nem szabad lefordítani.

![](//p.3ti.site/1720199451.avif)

### DeepL Fordítás

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` fordítva :

![](//p.3ti.site/1720199550.avif)

A fentiek DeepL franciára (a tulajdonnevek átírása és a páratlan `... ` hozzáadása):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Fordítás

A `i18` fordítása felismeri az angol kifejezéseket a kínai, japán és koreai dokumentumokban, és érintetlenül hagyja a kifejezéseket.

Például a fenti japán fordítás eredménye:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

A francia fordítás a következő:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Csak ha szóköz van az angol szó és a kínai, japán és koreai szöveg között, vagy az angol nyelv hossza nagyobb 1-nél, a szó kifejezésnek minősül.

Például: `C罗` t `Cristiano Ronaldo` nek fordítjuk.

## Több Mint `i18n.site` Nyelvvel Kombinálható a Webhely Elkészítéséhez

`i18` beépül a többnyelvű webhely-készítő parancssori eszközbe [`i18n.site`](/i18n.site) .

A részletekért lásd a [`i18n.site`](/i18n.site) dokumentációját.

## Nyílt Forráskódú Kód

A kliens teljesen nyílt forráskódú, 90 kód %-a pedig nyílt forráskódú. [Kattintson ide a forráskód megtekintéséhez](/i18n.site/c/src) .

Önkénteseket keresünk nyílt forráskód fejlesztésében és lefordított szövegek lektorálásában.

Ha felkeltettük érdeklődését, kérjük [→ Kattintson ide a profil kitöltéséhez](https://ggl.link/i18n) , majd csatlakozzon [a levelezési listához](https://groups.google.com/u/2/g/i18n-site) .

## Tartsa a Kapcsolatot

Kérjük <button onclick="mailsub()">, kattintson erre az e-mailre a termékfrissítésekre való feliratkozáshoz</button> és <button onclick="webpush()">a böngésző leküldésének engedélyezéséhez</button> . Értesítést küldünk a termékfrissítésekről.

Kövesse / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) is [X.COM: @i18nSite](https://x.com/i18nSite)
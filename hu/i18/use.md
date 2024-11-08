# Telepítse És Használja

## A windows Először Telepíti a git Bash-T

windows , [kattintson ide `git bash` letöltéséhez és telepítéséhez](https://git-scm.com/download/win) .

Futtassa a következő műveleteket `git bash` ban.

## Telepítés

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Fordítási Token Konfigurálása

Látogassa meg a [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Hozzon létre `~/.config/i18n.site.yml` , illessze be a másolt tartalmat, a tartalom a következő:

```
token: YOUR_API_TOKEN
```

Ezen kívül be kell kötni egy fizetési hitelkártyát [i18n.site/payBill](//i18n.site/payBill) (nem kell feltölteni, a weboldal a használattól függően automatikusan levonja a díjakat, [lásd a honlapot](/#price) ).

## Használat

### Demo Projekt

A `i18` fordítás konfigurációjának megismeréséhez tekintse meg a demo projektet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

A kínai felhasználók klónozhatnak [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

A klónozás után lépjen be a könyvtárba, és futtassa `i18` a fordítás befejezéséhez.

### Címtárszerkezet

A sablonraktár-könyvtár szerkezete a következő

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

A `en` könyvtárban található lefordított demófájlok csak példaként szolgálnak, és törölhetők.

### Futtassa a Fordítást

Lépjen be a könyvtárba, és futtassa `i18` a fordításhoz.

A fordítás mellett a program a `.i18n/data` mappát is legenerálja, kérjük, adja hozzá a tárhoz.

Az új fájl fordítása után egy új adatfájl jön létre ebben a könyvtárban. Ne felejtse el hozzáfűzni `git add . ` .

## Konfigurációs Fájl

`.i18n/conf.yml` az `i18` parancssori fordítóeszköz konfigurációs fájlja

A tartalom a következő:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Forrás Nyelve &

A konfigurációs fájlban a `fromTo` alárendeltje:

`en` a forrásnyelv, `zh ja ko de fr` a fordítás célnyelve.

Nyelvkód lásd [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Például, ha le akarja fordítani a kínait angolra, írja át ezt a sort `zh: en` .

Ha az összes támogatott nyelvre le szeretné fordítani, kérjük, hagyja üresen `:` után. például

```
i18n:
  fromTo:
    en:
```

Különféle `fromTo` : a különböző fájlok számára /

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Ebben a konfigurációs táblázatban a `blog` katalógus fordításának forrásnyelve `zh` , a `blog/your_file_name.md` katalógus fordításának forrásnyelve pedig `ja` .

### Többnyelvű Képek/Linkek

Ha a képekben és `replace:` és `MarkDown` linkekben található URL-ek (és a beágyazott `HTML` `src` és `href` attribútumai) `.i18n/conf.yml` -ra vannak konfigurálva ezzel az előtaggal, az URL-ben szereplő forrásnyelvi kód helyére a fordítás nyelvi kódja ( [nyelv kódlista](/i18/LANG_CODE) ).

Például a konfiguráció a következő:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` egy szótár, a kulcs a lecserélendő URL előtag, az érték pedig a helyettesítési szabály.

A fenti `ko de uk>ru zh-TW>zh >en` szabály lecserélésének jelentése az, hogy `ko de` a saját nyelvkódjának képét használja, `zh-TW` és `zh` a `zh` képét, `uk` a `ru` képét, és más nyelvek (például `ja` ) a képet használják. alapértelmezés szerint `en` ból.

Például a `MarkDown` francia ( `fr` ) forrásfájlja a következő :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

A lefordított és generált angol ( `en` ) fájl a következő :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Itt a forrásnyelvi kódban szereplő `/en/` a célnyelv `/zh/` jei helyettesítik.

: Az URL-ben a helyettesített szöveg nyelvi kódja előtt és után `/` kell lennie.

> [!TIP]
> Ha `- /` értéke `url:` , akkor csak a relatív elérési utak lesznek egyeztetve, de `//` vel kezdődő URL-ek nem.
>
> Ha egy tartománynév egyes hivatkozásait le akarják cserélni, mások pedig nem, akkor különböző előtagokkal, például `[x](//x.com/en/)` és `[x](https://x.com/en/)` el lehet megkülönböztetni őket.

### Fájl Figyelmen Kívül Hagyása

Alapértelmezés szerint a forrásnyelvi könyvtárban található összes `.md` val és `.yml` kezdődő fájl le lesz fordítva.

Ha figyelmen kívül szeretne hagyni bizonyos fájlokat, és nem szeretné lefordítani őket (például a befejezetlen piszkozatokat), konfigurálhatja a `ignore` mezővel.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) a szintaxist használja, mint az `.gitignore` fájl.

Például a fenti konfigurációs fájlban `_* ` azt jelenti, hogy `_` gyel kezdődő fájlok nem lesznek lefordítva.

## Fordítási Szabályok

### A Fordításszerkesztőknek Nem Szabad Sorokat Hozzáadniuk Vagy Törölniük

A fordítás szerkeszthető. Módosítsa az eredeti szöveget, és fordítsa le ismét géppel, a fordításon végrehajtott manuális módosítások nem kerülnek felülírásra (ha az eredeti szöveg ezen bekezdését nem módosították).

> [!WARN]
> A fordítás és az eredeti szöveg sorai között egy az egyhez egyezésnek kell lennie. Azaz ne adjunk hozzá és ne töröljünk sorokat a fordítás összeállításakor. Ellenkező esetben zavart okoz a fordításszerkesztő gyorsítótárban.

Ha valami elromlik, kérjük, olvassa el [a GYIK-et a megoldásokért.](/i18/qa#H1)

### `YAML` Fordítás

A parancssori eszköz minden `.yml` -ra végződő fájlt megkeres a forrásnyelvi fájlkönyvtárban, és lefordítja őket.

* Vegye figyelembe, hogy a fájlnév utótagjának `.yml` nak (nem `.yaml` ) kell lennie.

Az eszköz csak a szótári értékeket fordítja le `.yml` -ban, a szótár kulcsait nem.

Például `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` -nak lesz fordítva

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

A `YAML` fordítása manuálisan is módosítható (de ne adjon hozzá vagy töröljön kulcsokat vagy sorokat a fordításban).

`YAML` fordítás alapján könnyedén építhet nemzetközi megoldásokat különféle programozási nyelvekre.

## Haladó Használat

### Fordítási Alkönyvtár

Amíg létrejön `.i18n/conf.yml` (nem kell minden alkalommal a demóprojekt sablonból indulni), `i18` jól fog működni.

A parancssori eszköz `.i18n/conf.yml` konfigurációt talál az összes alkönyvtárban, és lefordítja azokat.

A [monorepo](//monorepo.tools) architektúrát használó projektek alkönyvtárakba oszthatják a nyelvi fájlokat.

![](https://p.3ti.site/1719910016.avif)

### Egyedi Telepítési Könyvtár

Alapértelmezés szerint `/usr/local/bin` -ra lesz telepítve.

Ha `/usr/local/bin` nincs írási jogosultsága, akkor `~/.bin` re lesz telepítve.

A `TO` beállítási környezeti változó megadhatja a telepítési könyvtárat, például :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
# Telepítse És Használja

## A windows Először Telepíti a git Bash-T

windows , [kattintson ide a letöltéshez és telepítéshez `git bash`](https://git-scm.com/download/win)

Futtassa a következő műveleteket `git bash`

## Telepítés

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Fordítási Token Konfigurálása

Látogassa meg a [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Hozzon létre `~/.config/i18n.site.yml` illessze be a másolt tartalmat, a tartalom a következő:

```
token: YOUR_API_TOKEN
```

Ezenkívül a fizetéshez bankkártyát is le [i18n.site/payBill](//i18n.site/payBill) kötni (nem szükséges feltöltés, a weboldal a használatnak megfelelően automatikusan levonja a díjakat, [az árakat lásd a honlapon](/#price) ).

## Használat

### Demo Projekt

A `i18` konfigurációjának megismeréséhez tekintse meg a bemutató projektet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

A kínai felhasználók klónozhatnak [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

A klónozás után lépjen be a könyvtárba, és `i18` a fordítást.

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

A `en` könyvtár tartalmazza a lefordított demó fájlokat, amelyek csak egy példa, és törölhetők.

### Futtassa a Fordítást

Lépjen be a könyvtárba, és futtassa a fordítást `i18`

### Fájlok Hozzáadása a Tárolóhoz

A fordításon kívül a program a következő fájlokat is generálja, kérjük, add hozzá a tárhoz.

```
.i18n/hash
.i18n/cache/.gitignore
```

Ezek közül a tartalma : következő `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ez azt jelenti `.i18n/cache/.gitignore` hogy figyelmen kívül hagyja az összes fájlt a `.i18n/cache/`

Ha az Ön verzióvezérlő szoftvere nem `git` akkor ennek a konfigurációnak megfelelően hagyja figyelmen kívül.

## Konfigurációs Fájl

`.i18n/conf.yml` a `i18` fordítóeszköz konfigurációs fájlja

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

A konfigurációs fájlban a `fromTo`

`en` a forrásnyelv, `zh ja ko de fr` a fordítás célnyelve.

Nyelvkód lásd [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Például, ha le akarja fordítani a kínait angolra, írja át ezt a sort `zh: en`

Ha az összes támogatott nyelvre le szeretné fordítani, kérjük, hagyja üresen a mezőt `:` például

```
i18n:
  fromTo:
    en:
```

### Fájl Figyelmen Kívül Hagyása

Alapértelmezés szerint a forrásnyelvi könyvtárban található összes `.md` és `.yml` karakterrel kezdődő fájl le lesz fordítva.

Ha figyelmen kívül szeretne hagyni bizonyos fájlokat, és nem szeretné lefordítani azokat (például a befejezetlen piszkozatokat), használhatja a `ignore`

[globset](https://docs.rs/globset/latest/globset/#syntax) `.gitignore` -hoz hasonló szintaxist használ `ignore`

Például a fenti konfigurációs fájlban azt jelenti `_* ` hogy `_` karakterrel kezdődő fájlok nem lesznek lefordítva.

## Fordítási Szabályok

### A Fordításszerkesztőknek Nem Szabad Sorokat Hozzáadniuk Vagy Törölniük

A fordítás szerkeszthető. Módosítsa az eredeti szöveget, és fordítsa le ismét géppel, a fordításon végrehajtott manuális módosítások nem kerülnek felülírásra (ha az eredeti szöveg ezen bekezdését nem módosították).

De vegye figyelembe, hogy a fordítás és az eredeti szöveg sorainak egynek kell lenniük. Azaz ne adjunk hozzá és ne töröljünk sorokat a fordítás összeállításakor. Ellenkező esetben zavart okoz a fordításszerkesztő gyorsítótárban.

Ha valami elromlik, kérjük, olvassa el [a GYIK-et a megoldásokért.](/i18/qa#H1)

### `YAML` Fordít

A parancssori eszköz megkeresi a forrásnyelvi fájlkönyvtárban az összes `.yml`

* Ne feledje, hogy a fájlnév utótagja `.yml` (nem `.yaml` ).

Az eszköz csak a szótár értékeit fordítja le `.yml` a szótár kulcsait nem.

például `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

így lesz lefordítva `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

A `YAML`

`YAML` Translation alapján könnyedén készíthet nemzetközi megoldásokat különféle programozási nyelvekhez.

## Haladó Használat

### Fordítási Alkönyvtár

Mindaddig, amíg létrehozza `i18` `.i18n/conf.yml`

A parancssori eszköz megtalálja a `.i18n/conf.yml` konfigurációt az összes alkönyvtárban, és lefordítja azt.

A [monorepo](//monorepo.tools) architektúrát használó projektek alkönyvtárakba oszthatják a nyelvi fájlokat.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Egyedi Telepítési Könyvtár

Alapértelmezés szerint a `/usr/local/bin`

`~/.bin` a `/usr/local/bin`

Környezeti változók beállítása Megadhatja `TO` a telepítési könyvtárat :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

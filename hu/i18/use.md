# Telepítés És Használat

## windows Először Telepítse a git Bash-T

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

[i18n.site/payBill](//i18n.site/payBill) a fizetéshez hitelkártyát is le kell kötni (nem szükséges újratölteni, a webhely a használatnak megfelelően automatikusan levonja a díjakat, [az árakat lásd a honlapon](/#price) ).

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

Különféle `fromTo` konfigurálható a / alkönyvtárak számára A bemutató a következőképpen írható :

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

Ebben a konfigurációs táblázatban a `blog` könyvtár fordításának forrásnyelve `zh` , a `blog/your_file_name.md` könyvtár fordításának forrásnyelve pedig `ja` .

### Fájl Figyelmen Kívül Hagyása

Alapértelmezés szerint a forrásnyelvi könyvtárban található összes `.md` val és `.yml` kezdődő fájl le lesz fordítva.

Ha figyelmen kívül szeretne hagyni bizonyos fájlokat, és nem szeretné lefordítani őket (például a befejezetlen piszkozatokat), használhatja a `ignore` mezőkonfigurációt.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) a szintaxist használja, mint az `.gitignore` fájl.

Például a fenti konfigurációs fájlban `_* ` azt jelenti, hogy `_` gyel kezdődő fájlok nem lesznek lefordítva.

## Fordítási Szabályok

### A Fordításszerkesztőknek Nem Szabad Sorokat Hozzáadniuk Vagy Törölniük

A fordítás szerkeszthető. Módosítsa az eredeti szöveget, és fordítsa le ismét géppel, a fordításon végrehajtott manuális módosítások nem kerülnek felülírásra (ha az eredeti szöveg ezen bekezdését nem módosították).

> [!WARN]
> A fordítás és az eredeti szöveg sorainak egynek kell lenniük. Azaz ne adjunk hozzá és ne töröljünk sorokat a fordítás összeállításakor. Ellenkező esetben zavart okoz a fordításszerkesztő gyorsítótárban.

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
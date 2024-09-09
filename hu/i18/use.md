# Telepítés és használat

## Windows rendszeren először telepítse a Git Bash-t

windows , [kattintson ide `git bash` letöltéséhez és telepítéséhez](https://git-scm.com/download/win) .

Futtassa a következő műveleteket `git bash` ban.

## Telepítés

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Fordítási token konfigurálása

Látogasson el a [i18n.site/token](//i18n.site/token) oldalra, és másolja ki a tokent

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Hozzon létre egy `~/.config/i18n.site.yml` fájlt, és illessze be a másolt tartalmat, például:

```
token: YOUR_API_TOKEN
```

Ezenkívül kössön be egy fizetési bankkártyát a [i18n.site/payBill](//i18n.site/payBill) oldalon (nincs szükség feltöltésre, a weboldal a használatnak megfelelően automatikusan levonja a díjakat, [az árakat lásd a főoldalon](/#price)).

## Használat

### Demo projekt

Tekintse meg a demo projektet [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18), hogy megtanulja az `i18` fordítás konfigurálását.

A kínai felhasználók klónozhatják a [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18) projektet

A klónozás után lépjen be a könyvtárba, és futtassa az `i18` parancsot a fordítás befejezéséhez.

### Címtárszerkezet

A sablonraktár könyvtár struktúrája a következő:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

A `en` könyvtárban található fordítási demófájlok csak példaként szolgálnak, törölhetők.

### Futtassa a fordítást

Lépjen be a könyvtárba, és futtassa az `i18` parancsot a fordítás elvégzéséhez.

A program fordításon kívül a `.i18n/data` mappát is létrehozza, kérem, adják hozzá azt a verziókönyvtárhoz.

Új fájl fordítása után új adatfájl keletkezik ebben a könyvtárban. Ne felejtsék el hozzáadni a `git add .` parancsot.

## Konfigurációs fájl

A `.i18n/conf.yml` fájl az `i18` parancssori fordítóeszköz konfigurációs fájlja

A tartalom a következő:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Forrás nyelv & célnyelv

A konfigurációs fájlban a `fromTo` alárendeltje:

`en` a forrásnyelv, `zh ja ko de fr` a célnyelvek.

Nyelvi kódokat lásd [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Például, ha kínai nyelvet akar angolra fordítani, írja át a sort `zh: en`-re.

Ha az összes támogatott nyelvre szeretné fordítani, hagyja üresen a `:` utáni részt. Például:

```
i18n:
  fromTo:
    en:
```

Különböző `fromTo` konfigurálása különböző alkönyvtárakhoz/fájlokhoz:

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

Ebben a konfigurációs táblázatban a `blog` könyvtár forrásnyelve `zh`, a `blog/your_file_name.md` forrásnyelve pedig `ja`.

### Fájlok figyelmen kívül hagyása

Alapértelmezés szerint a forrás nyelvi könyvtárban található összes `.md` és `.yml` kiterjesztésű fájl le lesz fordítva.

Ha bizonyos fájlokat figyelmen kívül szeretne hagyni (például befejezetlen piszkozatokat), konfigurálhatja az `ignore` mezővel.

Az `ignore` mező a `.gitignore` fájlhoz hasonló [globset](https://docs.rs/globset/latest/globset/#syntax) szintaxist használ.

Például a fenti konfigurációs fájlban `_*` azt jelenti, hogy az `_` karakterrel kezdődő fájlok nem lesznek lefordítva.

## Fordítási szabályok

### A fordítási szerkesztőknek nem szabad sorokat hozzáadniuk vagy törölniük

A fordítás szerkeszthető. Ha módosítja az eredeti szöveget, és újra lefordítja géppel, a fordításban végrehajtott manuális módosítások nem kerülnek felülírásra (ha az eredeti szöveg ezen része nem változott).

De vegye figyelembe, hogy a fordítás és az eredeti szöveg sorainak egynek kell lenniük. Ne adjon hozzá vagy töröljön sorokat a fordítás összeállításakor, különben a fordításszerkesztő gyorsítótárban zavarokat okozhat.

Ha problémák merülnek fel, tekintse meg a [GYIK-et a megoldásokért](/i18/qa#H1)

### `YAML` Fordítás

A parancssori eszköz megkeresi a forrás nyelvi könyvtárban található összes `.yml` kiterjesztésű fájlt, és lefordítja azokat.

* Ne feledje, hogy a fájlnév utótagjának `.yml`-nak kell lennie (nem `.yaml`-nak).

Az eszköz csak a szótári értékeket fordítja le a `.yml` fájlokban, a szótár kulcsait nem.

Például az `i18n/en/i18n.yml` fájl

```
apiToken: API Token
defaultToken: Default Token
```

le lesz fordítva `i18n/zh/i18n.yml`-ra

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

A `YAML` fordítása manuálisan is módosítható (de ne adjon hozzá vagy töröljön kulcsokat vagy sorokat a fordításban).

`YAML` fordítás alapján könnyedén építhet nemzetközi megoldásokat különféle programozási nyelvekre.

## Haladó használat

### Alkönyvtárak fordítása

Amíg létrehoz egy `.i18n/conf.yml` fájlt (nincs szükség a demo projekt sablonjából indulni), az `i18` eszköz jól fog működni.

A parancssori eszköz megkeresi az összes alkönyvtárban található `.i18n/conf.yml` konfigurációt, és lefordítja azokat.

A [monorepo](//monorepo.tools) architektúrájú projektekben a nyelvi fájlokat az alkönyvtárakba lehet osztani.

![](https://p.3ti.site/1719910016.avif)

### Egyedi telepítési könyvtár

Alapértelmezés szerint a `/usr/local/bin` könyvtárba települ.

Ha a `/usr/local/bin` könyvtárhoz nincs írási jogosultság, akkor a `~/.bin` könyvtárba települ.

A `TO` környezeti változó megadhatja a telepítési könyvtárat, például:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
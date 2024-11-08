# &

## Telepítés

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurációs Token

`i18n.site` beépített `i18` fordítóeszközzel rendelkezik. [Kattintson ide a `i18` dokumentum megtekintéséhez a hozzáférési token konfigurálásához](/i18/use) .

## Demo Projekt

Kezdjük egy demóprojekttel, hogy megtanuljuk `i18n.site` használatát.

Először klónozzuk a demótárat, és futtassuk a parancsot a következőképpen:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

A szárazföldi kínai felhasználók:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

A `demo.i18n.site` kód alapklónjának könyvtárnevének `md` kell lennie, hogy megkönnyítse a helyi előnézetet `docker` vel.

### Lefordítani

Először írja be a `md` könyvtárat, és futtassa `i18n.site` , amely lefordítja `en` t `zh` ra.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

A futás után a fordítás és a gyorsítótár fájlok generálódnak. Ne felejtse el hozzáadni őket a `md` `git add . ` .

### Helyi Előnézet

Telepítse és indítsa el `docker` ( `MAC` felhasználó javasolja [orbstack](https://orbstack.dev) használatát `docker` futási környezeteként).

Ezután lépjen be a `docker` könyvtárba, és futtassa `./up.sh` , majd látogasson el [https://127.0.0.1](https://127.0.0.1) a helyi előnézethez.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
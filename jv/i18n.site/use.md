# Instal &

## Instal

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Konfigurasi

`i18n.site` duwe alat terjemahan `i18` sing dibangun Mangga [klik ing kene kanggo ngrujuk menyang dokumen `i18` kanggo ngatur token akses](/i18/use) .

## Proyek Demo

Ayo dadi miwiti karo proyek demo kanggo sinau carane nggunakake `i18n.site` .

Pisanan kita tiron repositori demo lan nglakokake perintah kaya ing ngisor iki:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pangguna ing daratan China bisa:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Jeneng direktori klon basis kode `demo.i18n.site` kudu `md` kanggo nggampangake pratinjau lokal kanthi `docker` .

### Nerjemahake

Pisanan, ketik direktori `md` lan mbukak `i18n.site` , sing bakal nerjemahake `en` dadi `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Sawise mlaku, file terjemahan lan cache bakal digawe Mangga elinga nambahake menyang repositori ing `git add . ` `md` .

### Pratinjau Lokal

Instal lan miwiti `docker` ( `MAC` pangguna nyaranake nggunakake [orbstack](https://orbstack.dev) minangka runtime kanggo `docker` ).

Banjur, ketik direktori `docker` lan mbukak `./up.sh` , banjur bukak [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
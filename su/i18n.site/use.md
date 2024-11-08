# Pasang &

## Pasang

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Konfigurasi

`i18n.site` gaduh alat tarjamah `i18` anu diwangun Mangga [klik di dieu pikeun ngarujuk kana dokumén `i18` pikeun ngonpigurasikeun token aksés](/i18/use) .

## Proyék Demo

Hayu urang mimitian ku proyék demo pikeun diajar kumaha ngagunakeun `i18n.site` .

Urang clone heula gudang demo sareng ngajalankeun paréntah sapertos kieu:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pamaké di daratan Cina tiasa:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ngaran diréktori tina `demo.i18n.site` basis kode clone kudu `md` pikeun mempermudah sawangan lokal kalawan `docker` .

### Narjamahkeun

Kahiji, asupkeun diréktori `md` tur ngajalankeun `i18n.site` , nu bakal narjamahkeun `en` ka `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Saatos ngajalankeun, tarjamahan sareng file cache bakal dibangkitkeun Mangga émut pikeun nambihanana kana gudang dina `git add . ` `md` .

### Sawangan Lokal

Pasang sareng mimitian `docker` ( `MAC` pangguna nyarankeun ngagunakeun [orbstack](https://orbstack.dev) salaku runtime pikeun `docker` ).

Teras, lebetkeun diréktori `docker` sareng jalankeun `./up.sh` , teras buka [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
# Instal·Leu La Vista &

## Instal·Lar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Fitxa De Configuració

`i18n.site` té una eina de traducció integrada `i18` Feu [clic aquí per consultar el document `i18` per configurar el testimoni d'accés](/i18/use) .

## Projecte De Demostració

Comencem amb un projecte de demostració per aprendre a utilitzar `i18n.site` .

Primer clonem el dipòsit de demostració i executem l'ordre de la següent manera:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Els usuaris de la Xina continental poden:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

El nom del directori del clon de base de codi `demo.i18n.site` ha de ser `md` per facilitar la previsualització local amb `docker` .

### Traduir

Primer, introduïu el directori `md` i executeu `i18n.site` , que es traduirà `en` a `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Després d'executar-se, es generaran fitxers de traducció i memòria cau, recordeu afegir-los al repositori al `git add . ` `md` .

### Vista Prèvia Local

Instal·leu i inicieu `docker` ( `MAC` usuari recomana utilitzar [orbstack](https://orbstack.dev) com a temps d'execució per a `docker` ).

A continuació, introduïu el directori `docker` i executeu `./up.sh` i, a continuació, visiteu [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
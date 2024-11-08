# Settu Upp &

## Settu Upp

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Stillingartákn

`i18n.site` er með innbyggt `i18` þýðingartól Vinsamlega [smelltu hér til að vísa í `i18` skjalið til að stilla aðgangslykilinn](/i18/use) .

## Demo Verkefni

Byrjum á kynningarverkefni til að læra hvernig á að nota `i18n.site` .

Við klónum fyrst kynningargeymsluna og keyrum skipunina sem hér segir:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Notendur á meginlandi Kína geta:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Möppuheiti `demo.i18n.site` kóða grunnklónsins verður að vera `md` til að auðvelda staðbundna forskoðun með `docker` .

### Þýða

Fyrst skaltu slá inn `md` möppuna og keyra `i18n.site` , sem mun þýða `en` til `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Eftir keyrslu verða þýðingar- og skyndiminni skrár búnar til. Mundu að bæta þeim við geymsluna í `md` `git add . ` .

### Staðbundin Forskoðun

Settu upp og byrjaðu `docker` ( `MAC` notandi mælir með að nota [orbstack](https://orbstack.dev) sem keyrslutíma fyrir `docker` ).

Sláðu síðan inn `docker` möppuna og keyrðu `./up.sh` og farðu síðan á [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
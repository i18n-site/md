# Nainstalovat &

## Instalovat

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurační Token

`i18n.site` má vestavěný nástroj pro překlad `i18` [Kliknutím sem zobrazíte dokument `i18` pro konfiguraci přístupového tokenu](/i18/use) .

## Demo Projekt

Začněme s demo projektem, abychom se naučili používat `i18n.site` .

Nejprve naklonujeme demo úložiště a spustíme příkaz následovně:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Uživatelé v pevninské Číně mohou:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Název adresáře základního klonu kódu `demo.i18n.site` musí být `md` aby se usnadnil místní náhled s `docker` .

### Přeložit

Nejprve zadejte adresář `md` a spusťte `i18n.site` , což přeloží `en` na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po spuštění se vygenerují soubory překladu a mezipaměti, nezapomeňte je přidat do úložiště v `git add . ` `md` .

### Místní Náhled

Nainstalujte a spusťte `docker` ( `MAC` uživatel doporučuje použít [orbstack](https://orbstack.dev) jako runtime pro `docker` ).

Poté zadejte adresář `docker` a spusťte `./up.sh` a poté navštivte [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
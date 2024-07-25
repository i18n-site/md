# Installa È Aduprà

## windows Prima Installate git bash

windows System, [cliccate quì per scaricà è installà prima `git bash`](https://git-scm.com/download/win)

Eseguite operazioni successive in `git bash`

## Installa

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurate U Token Di Traduzzione

Visita [i18n.site/token](//i18n.site/token) Clicca per copià u token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Crea `~/.config/i18n.site.yml` incolla u cuntenutu copiatu in questu, u cuntenutu hè cusì:

```
token: YOUR_API_TOKEN
```

Inoltre, avete bisognu [i18n.site/payBill](//i18n.site/payBill) ligà una carta di creditu per u pagamentu (ùn hè micca necessariu ricaricamentu, u situ web deducerà automaticamente i tariffi secondu l'usu, [vede a homepage per i prezzi](/#price) ).

## Usu

### Prughjettu Demo

Per piacè riferite à u prughjettu demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) amparà a cunfigurazione di a traduzzione `i18`

L'utilizatori in Cina ponu clonà [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Dopu a clonazione, entre in u cartulare è `i18` per compie a traduzzione.

### Struttura Di U Repertoriu

A struttura di u cartulare di u magazzinu di mudelli hè a siguenti

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

U repertoriu `en` cuntene i schedarii demo tradotti, chì sò solu un esempiu è ponu esse eliminati.

### Eseguite a Traduzzione

Entre in u cartulare è `i18` per traduce.

### Aghjunghjite I Schedari À U Repository

In più di a traduzzione, u prugramma generarà ancu i seguenti schedarii, per piacè aghjunghje à u repository.

```
.i18n/hash
.i18n/cache/.gitignore
```

Frà elli : u cuntenutu di `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Questu significa ignurà tutti i fugliali in u `.i18n/cache/` (eccettu `.i18n/cache/.gitignore` ).

Se u vostru software di cuntrollu di versione ùn hè micca `git` per piacè ignurà secondu sta cunfigurazione.

## File Di Cunfigurazione

`.i18n/conf.yml` u schedariu di cunfigurazione di l'uttellu di traduzzione di linea `i18`

U cuntenutu hè cusì:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lingua Di Origine &

In u schedariu di cunfigurazione, i subordinati di `fromTo`

`en` hè a lingua fonte, `zh ja ko de fr` hè a lingua di destinazione di a traduzzione.

Codici di lingua vede [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Per esempiu, sè vo vulete traduce u Cinese in Inglese, scrivite sta linea `zh: en`

Se vulete traduce in tutte e lingue supportate, lasciate in biancu dopu `:` per esempiu

```
i18n:
  fromTo:
    en:
```

### Ignore U Schedariu

Per automaticamente, tutti i schedari `.yml` cumincianu cù `.md`

Se vulete ignurà certi schedari è ùn li traduce micca (cum'è bozze unfinished), pudete aduprà a cunfigurazione di u campu `ignore`

Utiliza una sintassi simile [globset](https://docs.rs/globset/latest/globset/#syntax) `.gitignore` `ignore`

Per esempiu, in u schedariu di cunfigurazione sopra `_* ` chì i schedari chì cumincianu cù `_` ùn saranu micca tradutti.

## Reguli Di Traduzzione

### L'editori Di Traduzzione Ùn Deve Micca Aghjunghje O Sguassà Linee

A traduzzione hè editabile. Mudificà u testu uriginale è traduzzione in macchina di novu, e mudificazioni manuali di a traduzzione ùn saranu micca soprascritti (se stu paràgrafu di u testu originale ùn hè micca statu mudificatu).

Ma per piacè nutate chì e linee di a traduzzione è u testu originale deve currispondenu unu à unu. Vale à dì, ùn aghjunghje micca o sguassate e linee quandu compilate a traduzzione. Altrimenti, pruvucarà cunfusione in a cache di edizione di traduzzione.

Se qualcosa va male, per piacè riferite à [e FAQ per suluzioni.](/i18/qa#H1)

### `YAML` Traduce

L'uttellu di a linea di cummanda truverà tutti i fugliali chì finiscinu cù `.yml`

* Nota chì u suffissu di u nome di u schedariu deve esse `.yml` (micca `.yaml` ).

L'uttellu traduce solu i valori di u dizziunariu `.yml` micca e chjave di u dizziunariu.

per esempiu `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

serà traduttu cum'è `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

A traduzzione di `YAML` pò ancu esse mudificata manualmente (ma ùn aghjunghje micca o sguassate chjavi o linee in a traduzzione).

Basatu nantu à `YAML` traduzzione, pudete facilmente custruisce suluzioni internaziunali per diverse lingue di prugrammazione.

## Usu Avanzatu

### Sottodirectory Di Traduzzione

Sempre chì `.i18n/conf.yml` (ùn hè bisognu di inizià da u mudellu di prughjettu demo ogni volta), `i18` funziona bè.

L'uttellu di linea di cumanda truverà `.i18n/conf.yml` cunfigurazione in tutti i subdirectorii è traduce.

I prughjetti chì utilizanu l'architettura [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Directory D'installazione Persunalizata

Serà installatu à `/usr/local/bin`

Se ùn hà micca permessu di scrittura `/usr/local/bin` serà installatu à `~/.bin` .

Definite e variabili di l' `TO` Pudete definisce u cartulare di installazione, per esempiu :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

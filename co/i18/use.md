# Installa È Aduprà

## windows Prima Installate git bash

windows System, [cliccate quì per scaricà è installà `git bash` prima](https://git-scm.com/download/win) .

Eseguite operazioni successive in `git bash` .

## Installa

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurate U Token Di Traduzzione

Visita [i18n.site/token](//i18n.site/token) Clicca per copià u token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Crea `~/.config/i18n.site.yml` , incollà u cuntenutu copiatu in questu, u cuntenutu hè cusì:

```
token: YOUR_API_TOKEN
```

Inoltre, avete bisognu di [vince](/#price) una carta di creditu di pagamentu in [i18n.site/payBill](//i18n.site/payBill)

## Usu

### Prughjettu Demo

Per piacè riferite à u prughjettu demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) amparà a cunfigurazione di `i18` traduzzione.

L'utilizatori in Cina ponu clonà [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Dopu a clonazione, entre in u cartulare è eseguite `i18` per compie a traduzzione.

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

I schedarii demo tradutti in u cartulare `en` sò solu un esempiu è ponu esse sguassati.

### Eseguite a Traduzzione

Entre in u cartulare è eseguite `i18` per traduce.

In più di a traduzzione, u prugramma generarà ancu u cartulare `.i18n/data` , per piacè aghjunghje à u repository.

Dopu avè traduttu u novu schedariu, `git add . ` novu schedariu di dati serà generatu in questu repertoriu.

## File Di Cunfigurazione

`.i18n/conf.yml` hè u schedariu di cunfigurazione di l'uttellu di traduzzione in linea di cumanda `i18`

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

In u schedariu di cunfigurazione, u subordinatu di `fromTo` :

`en` hè a lingua fonte, `zh ja ko de fr` hè a lingua di destinazione di a traduzzione.

Codici di lingua vede [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Per esempiu, sè vo vulete traduzzione cinese in inglese, scrivite sta linea `zh: en` .

Se vulete traduce in tutte e lingue supportate, lasciate u biancu dopu à `:` . per esempiu

```
i18n:
  fromTo:
    en:
```

Pudete cunfigurà `fromTo` differenti per i schedarii / Una dimostrazione hè scritta cum'è :

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

In questa tavula di cunfigurazione, a lingua fonte di a traduzzione di u catalogu `blog` hè `zh` , è a lingua fonte di a traduzzione di u catalogu `blog/your_file_name.md` hè `ja` .

### Imàgini Multilingue / Ligami

Quandu l'URL in l'imaghjini è i ligami in `replace:` è `MarkDown` (è l'attributi `src` è `href` di embedded `HTML` ) sò cunfigurati in `.i18n/conf.yml` cù stu prefissu, u codice di lingua fonte in l'URL serà rimpiazzatu da u codice di lingua di a traduzzione ( [lingua). lista di codici](/i18/LANG_CODE) ).

Per esempiu, a vostra cunfigurazione hè a siguenti:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` hè un dizziunariu, a chjave hè u prefissu URL per esse rimpiazzatu, è u valore hè a regula di sustituzione.

U significatu di rimpiazzà a regula `ko de uk>ru zh-TW>zh >en` sopra hè chì `ko de` usa a stampa di u so propiu codice di lingua, `zh-TW` è `zh` usanu a stampa di `zh` , `uk` usa a stampa di `ru` , è altre lingue (cum'è `ja` ) usanu a stampa di `en` per difettu.

Per esempiu, u schedariu di fonte francese ( `fr` ) di `MarkDown` hè a siguenti :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

U schedariu traduttu è generatu in inglese ( `en` ) hè u seguitu :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Quì, `/en/` in u codice di a lingua fonte sò rimpiazzati cù `/zh/` in a lingua di destinazione.

Nota : Ci deve esse `/` prima è dopu à u codice di lingua di u testu rimpiazzatu in l'URL.

> [!TIP]
> Se `- /` hè cunfiguratu in `url:` , solu i percorsi parenti seranu currispondenti, ma l'URL chì cumincianu cù `//` ùn saranu micca currispondenti.
>
> Se certi ligami di un nome di duminiu volenu esse rimpiazzati è certi ùn volenu micca esse rimpiazzati, pudete aduprà prefissi diffirenti cum'è `[x](//x.com/en/)` è `[x](https://x.com/en/)` per distinguelli.

### Ignore U Schedariu

Per automaticamente, tutti i fugliali chì cumincianu cù `.md` è `.yml` in u cartulare di a lingua fonte seranu tradutti.

Se vulete ignurà certi schedari è ùn li traduce micca (cum'è bozze unfinished), pudete cunfigurà cù u campu `ignore` .

`ignore` usa a [globset](https://docs.rs/globset/latest/globset/#syntax) sintassi cum'è u schedariu `.gitignore` .

Per esempiu, `_* ` in u schedariu di cunfigurazione sopra significa chì i schedari chì cumincianu cù `_` ùn saranu micca tradutti.

## Reguli Di Traduzzione

### L'editori Di Traduzzione Ùn Deve Micca Aghjunghje O Sguassà Linee

A traduzzione hè editabile. Mudificà u testu uriginale è traduzzione in macchina di novu, e mudificazioni manuali di a traduzzione ùn saranu micca soprascritti (se stu paràgrafu di u testu originale ùn hè micca statu mudificatu).

> [!WARN]
> Ci deve esse una currispundenza unu à unu trà e linee di a traduzzione è u testu originale. Vale à dì, ùn aghjunghje micca o sguassate e linee quandu compilate a traduzzione. Altrimenti, pruvucarà cunfusione in a cache di edizione di traduzzione.

Se qualcosa va male, per piacè riferite à [e FAQ per suluzioni.](/i18/qa#H1)

### `YAML` Traduzzioni

L'uttellu di linea di cumanda truverà tutti i schedari chì finiscinu cù `.yml` in u cartulare di u schedariu di a lingua fonte è li traduce.

* Nota chì u suffissu di u filename deve esse `.yml` (micca `.yaml` ).

L'uttellu traduce solu i valori di u dizziunariu in `.yml` , micca e chjave di u dizziunariu.

Per esempiu `i18n/en/i18n.yml`

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

Sempre chì `.i18n/conf.yml` hè creatu (ùn hè bisognu di principià da u mudellu di prughjettu demo ogni volta), `i18` hà da travaglià bè.

L'uttellu di linea di cumanda truverà `.i18n/conf.yml` cunfigurazioni in tutti i subdirectorii è li traduce.

I prughjetti chì utilizanu l'architettura [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Directory D'installazione Persunalizata

Serà installatu à `/usr/local/bin` per difettu.

Se `/usr/local/bin` ùn hà micca permessu di scrittura, serà installatu à `~/.bin` .

L'impostazione di a variabile d'ambiente `TO` pò definisce u cartulare di installazione, per esempiu :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
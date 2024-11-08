# Installare E Utilizzare

## windows Installa Prima git bash

windows , fare [clic qui per scaricare e installare prima `git bash`](https://git-scm.com/download/win) .

Esegui le operazioni successive in `git bash` .

## Installare

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configura Token Di Traduzione

Visita [i18n.site/token](//i18n.site/token) Fai clic per copiare il token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Crea `~/.config/i18n.site.yml` , incolla il contenuto copiato al suo interno, il contenuto è il seguente:

```
token: YOUR_API_TOKEN
```

Inoltre, è necessario vincolare una carta di credito per il pagamento in [i18n.site/payBill](//i18n.site/payBill) (Non è richiesta alcuna ricarica, il sito detrarrà automaticamente le commissioni in base all'utilizzo, [vedere la home page per i prezzi](/#price) ).

## Utilizzo

### Progetto Dimostrativo

Fare riferimento al progetto demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) apprendere la configurazione di `i18` traduzione.

Gli utenti in Cina possono clonare [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Dopo la clonazione, entra nella directory ed esegui `i18` per completare la traduzione.

### Struttura Delle Directory

La struttura della directory del magazzino modello è la seguente

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

I file demo tradotti nella directory `en` sono solo un esempio e possono essere cancellati.

### Esegui La Traduzione

Inserisci la directory ed esegui `i18` per tradurre.

Oltre alla traduzione, il programma genererà anche la cartella `.i18n/data` , aggiungila al repository.

Dopo aver tradotto il nuovo file, verrà generato un nuovo file di dati in questa directory. Ricordarsi di aggiungere `git add . ` .

## File Di Configurazione

`.i18n/conf.yml` è il file di configurazione dello strumento di traduzione della riga di comando `i18`

Il contenuto è il seguente:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Lingua Di Partenza & Lingua Di Traduzione

Nel file di configurazione, il subordinato di `fromTo` :

`en` è la lingua di partenza, `zh ja ko de fr` è la lingua di destinazione della traduzione.

Codice della lingua vedere [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ad esempio, se vuoi tradurre il cinese in inglese, riscrivi questa riga `zh: en` .

Se desideri tradurre in tutte le lingue supportate, lascia vuoto dopo `:` . Per esempio

```
i18n:
  fromTo:
    en:
```

È possibile configurare diversi `fromTo` per / sottodirectory Files. Una dimostrazione è scritta come segue :

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

In questa tabella di configurazione, la lingua di origine della traduzione del catalogo `blog` è `zh` e la lingua di origine della traduzione del catalogo `blog/your_file_name.md` è `ja` .

### Immagini/Link Multilingue

Quando gli URL nelle immagini e nei collegamenti in `replace:` e `MarkDown` (e gli attributi `src` e `href` dell'embedded `HTML` ) sono configurati su `.i18n/conf.yml` con questo prefisso, il codice della lingua di origine nell'URL verrà sostituito dal codice della lingua della traduzione ( [lingua elenco codici](/i18/LANG_CODE) ).

Ad esempio, la tua configurazione è la seguente:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` è un dizionario, la chiave è il prefisso URL da sostituire e il valore è la regola di sostituzione.

Il significato della sostituzione della regola `ko de uk>ru zh-TW>zh >en` sopra è che `ko de` usa l'immagine del codice della propria lingua, `zh-TW` e `zh` usano l'immagine di `zh` , `uk` usa l'immagine di `ru` e altre lingue (come `ja` ) usano l'immagine di `en` per impostazione predefinita.

Ad esempio, il file sorgente francese ( `fr` ) di `MarkDown` è il seguente :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Il file inglese ( `en` ) tradotto e generato è il seguente :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Qui `/en/` nel codice della lingua di origine vengono sostituiti con `/zh/` nella lingua di destinazione.

Nota : Ci deve essere `/` prima e dopo il codice della lingua del testo sostituito nell'URL.

> [!TIP]
> Se `- /` è configurato in `url:` , verranno abbinati solo i percorsi relativi, ma gli URL che iniziano con `//` non verranno abbinati.
>
> Se alcuni link di un nome di dominio vogliono essere sostituiti e altri non vogliono essere sostituiti, puoi utilizzare diversi prefissi come `[x](//x.com/en/)` e `[x](https://x.com/en/)` per distinguerli.

### Ignorare Il File

Per impostazione predefinita, verranno tradotti tutti i file che iniziano con `.md` e `.yml` nella directory della lingua di origine.

Se vuoi ignorare alcuni file e non tradurli (come le bozze non finite), puoi configurarlo con il campo `ignore` .

`ignore` utilizza la stessa sintassi [globset](https://docs.rs/globset/latest/globset/#syntax) del file `.gitignore` .

Ad esempio, `_* ` nel file di configurazione sopra significa che i file che iniziano con `_` non verranno tradotti.

## Regole Di Traduzione

### I Redattori Della Traduzione Non Dovrebbero Aggiungere O Eliminare Righe

La traduzione è modificabile. Modifica il testo originale e traducilo nuovamente automaticamente, le modifiche manuali alla traduzione non verranno sovrascritte (se questo paragrafo del testo originale non è stato modificato).

> [!WARN]
> Deve esserci una corrispondenza biunivoca tra le righe della traduzione e il testo originale. Cioè non aggiungere o eliminare righe durante la compilazione della traduzione. Altrimenti, si creerà confusione nella cache di modifica della traduzione.

Se qualcosa va storto, fai riferimento [alle domande frequenti per le soluzioni.](/i18/qa#H1)

### `YAML` Traduzioni

Lo strumento da riga di comando troverà tutti i file che terminano con `.yml` nella directory dei file della lingua di origine e li tradurrà.

* Tieni presente che il suffisso del nome file deve essere `.yml` (non `.yaml` ).

Lo strumento traduce solo i valori del dizionario in `.yml` , non le chiavi del dizionario.

Ad esempio `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

verrà tradotto come `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

La traduzione di `YAML` può essere modificata anche manualmente (ma non aggiungere o eliminare chiavi o righe nella traduzione).

Basandosi su `YAML` traduzioni, puoi facilmente creare soluzioni internazionali per vari linguaggi di programmazione.

## Utilizzo Avanzato

### Sottodirectory Di Traduzione

Finché viene creato `.i18n/conf.yml` (non è necessario iniziare ogni volta dal modello di progetto demo), `i18` funzionerà correttamente.

Lo strumento da riga di comando troverà `.i18n/conf.yml` configurazioni in tutte le sottodirectory e le tradurrà.

I progetti che utilizzano l'architettura [monorepo](//monorepo.tools) possono dividere i file di lingua in sottodirectory.

![](https://p.3ti.site/1719910016.avif)

### Directory Di Installazione Personalizzata

Verrà installato su `/usr/local/bin` per impostazione predefinita.

Se `/usr/local/bin` non dispone dell'autorizzazione di scrittura, verrà installato su `~/.bin` .

L'impostazione della variabile d'ambiente `TO` può definire la directory di installazione, ad esempio :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
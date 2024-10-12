# Installazione e utilizzo

## Prima installare Git Bash su Windows

windows , fare [clic qui per scaricare e installare prima `git bash`](https://git-scm.com/download/win) .

Esegui le operazioni successive in `git bash` .

## Installazione

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### CONFIGURAZIONE DEL TOKEN DI TRADUZIONE

Accedi a [i18n.site/token](//i18n.site/token) e clicca per copiare il token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Crea `~/.config/i18n.site.yml` e incolla il contenuto copiato al suo interno, come segue:

```
token: YOUR_API_TOKEN
```

Inoltre, è necessario associare una carta di credito per il pagamento su [i18n.site/payBill](//i18n.site/payBill) (nessuna ricarica richiesta, il sito addebiterà automaticamente in base all'uso, [vedi i prezzi sulla pagina iniziale](/#price)).

## USO

### Progetto dimostrativo

Consultare il progetto dimostrativo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) per imparare la configurazione della traduzione con `i18`.

Gli utenti della Cina possono clonare [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Dopo aver clonato, entra nella directory ed esegui `i18` per completare la traduzione.

### Struttura delle directory

La struttura delle directory del repository modello è la seguente:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Nella directory `en` ci sono file dimostrativi di traduzione, che sono solo esempi e possono essere eliminati.

### Esegui La Traduzione

Inserisci la directory ed esegui `i18` per tradurre.

Oltre alla traduzione, il programma genererà anche la cartella `.i18n/data` , aggiungila al repository.

Dopo aver tradotto il nuovo file, verrà generato un nuovo file di dati in questa directory. Ricordarsi di aggiungere `git add .` .

## File Di Configurazione

`.i18n/conf.yml` è il file di configurazione dello strumento di traduzione della riga di comando `i18`

LINGUA DI PARTENZA E LINGUA DI TRADUZIONE

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

`en` è la lingua di partenza, `zh ja ko de fr` sono le lingue di destinazione della traduzione.

Codice della lingua vedere [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Se si desidera tradurre in tutte le lingue supportate, lasciare vuoto dopo `:`. Ad esempio:

È possibile configurare `fromTo` diversi per sottodirectory o file. Un esempio di scrittura è il seguente:

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

In questa tabella di configurazione, la lingua di origine della traduzione del catalogo `blog` è `zh` e la lingua di origine della traduzione del file `blog/your_file_name.md` è `ja` .

### Ignorare Il File

Per impostazione predefinita, verranno tradotti tutti i file che iniziano con `.md` e `.yml` nella directory della lingua di origine.

Se vuoi ignorare alcuni file e non tradurli (come le bozze non finite), puoi configurarlo con il campo `ignore` .

`ignore` utilizza la stessa sintassi [globset](https://docs.rs/globset/latest/globset/#syntax) del file `.gitignore` .

Ad esempio, `_* ` nel file di configurazione sopra significa che i file che iniziano con `_` non verranno tradotti.

## Regole Di Traduzione

### I Redattori Della Traduzione Non Dovrebbero Aggiungere O Eliminare Righe

La traduzione è modificabile. Modifica il testo originale e traducilo nuovamente automaticamente, le modifiche manuali alla traduzione non verranno sovrascritte (se questo paragrafo del testo originale non è stato modificato).

Ma tieni presente che le righe della traduzione e del testo originale devono corrispondere una a una. Cioè non aggiungere o eliminare righe durante la compilazione della traduzione. Altrimenti, si creerà confusione nella cache di modifica della traduzione.

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

Se `/usr/local/bin` non dispose dell'autorizzazione di scrittura, verrà installato su `~/.bin` .

L'impostazione della variabile d'ambiente `TO` può definire la directory di installazione, ad esempio :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
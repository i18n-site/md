# Installare E Utilizzare

## windows Installa Prima git bash

windows , fare [prima clic qui per scaricarlo e installarlo `git bash`](https://git-scm.com/download/win)

Eseguire le operazioni successive in `git bash`

## Installare

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configura Token Di Traduzione

Visita [i18n.site/token](//i18n.site/token) Fai clic per copiare il token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Crea `~/.config/i18n.site.yml` incolla il contenuto copiato al suo interno, il contenuto è il seguente:

```
token: YOUR_API_TOKEN
```

Inoltre, è necessario [i18n.site/payBill](//i18n.site/payBill) una carta di credito per il pagamento (non è richiesta alcuna ricarica, il sito detrarrà automaticamente le commissioni in base all'utilizzo, [vedere la home page per i prezzi](/#price) ).

## Utilizzo

### Progetto Dimostrativo

Fare riferimento al progetto demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) apprendere la configurazione della traduzione `i18`

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

La directory `en` contiene i file demo tradotti, che sono solo un esempio e possono essere cancellati.

### Esegui La Traduzione

Inserisci la directory ed esegui `i18`

### Aggiungi File Al Repository

Oltre alla traduzione, il programma genererà anche i seguenti file, aggiungili al repository.

```
.i18n/hash
.i18n/cache/.gitignore
```

Tra questi, il contenuto : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ciò significa ignorare tutti i file nella directory `.i18n/cache/` (eccetto `.i18n/cache/.gitignore` ).

Se il tuo software di controllo della versione non è `git` , ignoralo in base a questa configurazione.

## File Di Configurazione

`.i18n/conf.yml` È il file di configurazione dello strumento di traduzione della riga `i18`

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

Nel file di configurazione, i subordinati di `fromTo`

`en` è la lingua di origine, `zh ja ko de fr` è la lingua di destinazione della traduzione.

Codice della lingua vedere [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ad esempio, se vuoi tradurre il cinese in inglese, riscrivi questa riga `zh: en`

Se desideri tradurre in tutte le lingue supportate, lascia vuoto dopo `:` Per esempio

```
i18n:
  fromTo:
    en:
```

### Ignorare Il File

Per impostazione predefinita, tutti i file che iniziano con `.md` e `.yml` nella directory della lingua di origine verranno tradotti.

Se desideri ignorare determinati file e non tradurli (come le bozze non completate), puoi utilizzare la configurazione del campo `ignore`

`ignore` Utilizza una sintassi simile a `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Ad esempio, nel file di configurazione precedente `_* ` significa che i file che iniziano con `_` non verranno tradotti.

## Regole Di Traduzione

### I Redattori Della Traduzione Non Dovrebbero Aggiungere O Eliminare Righe

La traduzione è modificabile. Modifica il testo originale e traducilo nuovamente automaticamente, le modifiche manuali alla traduzione non verranno sovrascritte (se questo paragrafo del testo originale non è stato modificato).

Ma tieni presente che le righe della traduzione e del testo originale devono corrispondere una a una. Cioè non aggiungere o eliminare righe durante la compilazione della traduzione. Altrimenti, si creerà confusione nella cache di modifica della traduzione.

Se qualcosa va storto, fai riferimento [alle domande frequenti per le soluzioni.](/i18/qa#H1)

### `YAML` Traduci

Lo strumento da riga di comando troverà tutti i file che terminano con `.yml` nella directory dei file della lingua di origine e li tradurrà.

* Tieni presente che il suffisso del nome file deve essere `.yml` (non `.yaml` ).

Lo strumento traduce solo i valori del dizionario in `.yml` , non le chiavi del dizionario.

Per esempio `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

verrà tradotto come `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

La traduzione di `YAML` può anche essere modificata manualmente (ma non aggiungere o eliminare chiavi o righe nella traduzione).

Basandoti su `YAML` Translation, puoi creare facilmente soluzioni internazionali per vari linguaggi di programmazione.

## Utilizzo Avanzato

### Sottodirectory Di Traduzione

Finché crei `.i18n/conf.yml` (non è necessario iniziare ogni volta dal modello di progetto demo), `i18` funzionerà correttamente.

Lo strumento da riga di comando troverà la configurazione `.i18n/conf.yml` in tutte le sottodirectory e la tradurrà.

I progetti che utilizzano l'architettura [monorepo](//monorepo.tools) possono dividere i file di lingua in sottodirectory.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Directory Di Installazione Personalizzata

Verrà installato su `/usr/local/bin`

Se `/usr/local/bin` non dispone dell'autorizzazione di scrittura verrà installato in `~/.bin` .

Impostare le variabili d'ambiente `TO` È possibile definire la directory di installazione, ad esempio :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```

# Modello di blog

`i18n/conf.yml` con `use: Blog` indica l'uso del modello di blog per il rendering.

Il file `markdown` degli articoli di blog deve essere configurato con metadati.

I metadati devono essere all'inizio del file, iniziando con `---` e terminando con `---`. Il formato delle informazioni di configurazione nel mezzo è `YAML`.

Un esempio di configurazione del file è il seguente:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indica un riassunto del contenuto, che verrà visualizzato nella pagina dell'indice del blog.

Con l'aiuto di `YMAL` '|`Sintassi, puoi scrivere riassunti su più righe.

Anche la configurazione dell'albero delle directory sul lato destro del blog è basata su un file `TOC` (vedi il capitolo precedente). Solo gli articoli elencati nel `TOC` appariranno nell'indice della home page del blog.

Gli articoli che non contengono metainformazioni non verranno visualizzati nella home page del blog, ma potranno apparire nell'albero delle directory a destra.

Per fissare un articolo in alto, eseguire `i18n.site`, quindi editare il file `xxx.yml` nella cartella `.i18n/data/blog` e impostare il timestamp su un numero negativo (più numeri negativi saranno ordinati per valore assoluto,从小到大排序).
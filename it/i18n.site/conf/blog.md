# Modello di Blog

`i18n/conf.yml` con `use: Blog` indica l'uso del template di blog per il rendering.

Il file `markdown` degli articoli di blog deve essere configurato con meta-informazioni.

Le meta-informazioni devono essere all'inizio del file, iniziando con `---` e terminando con `---`. Il formato delle informazioni di configurazione nel mezzo è `YAML`.

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

`brief` rappresenta un riassunto del contenuto, che verrà visualizzato nella pagina di indice del blog.

Con l'aiuto di `YMAL` ' | 译文: `sintassi, è possibile scrivere riassunti su più righe.

La configurazione dell'albero delle directory sul lato destro del blog è anch'essa un file `TOC` (vedi il capitolo precedente); solo gli articoli elencati nel `TOC` appariranno nell'indice della pagina iniziale del blog.

Gli articoli senza meta-informazioni non appariranno nella pagina iniziale del blog, ma possono comparire nell'albero delle directory a destra.

## Informazioni sull'autore

Le informazioni sull'autore possono essere inserite nelle meta-informazioni dell'articolo, come ad esempio:

```yml
author: marlowe
```

Poi, modifica il file `author.yml` nella directory della lingua di origine e aggiungi le informazioni sull'autore, come:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`, `url` e `title` sono opzionali. Se `name` non è impostato, verrà utilizzato il nome della chiave (in questo caso `marlowe`) come `name`.

Consultare il progetto dimostrativo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) e [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Articolo in evidenza

Per mantenere un articolo in evidenza, eseguire `i18n.site` e successivamente modificare il file `xxx.yml` situato sotto `.i18n/data/blog`, cambiando il timestamp in un numero negativo (i numeri negativi saranno ordinati in ordine decrescente).
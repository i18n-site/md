# Modello Di Blog

`i18n/conf.yml` su `use: Blog` significa utilizzare il modello di blog per il rendering.

Il file `markdown` del post del blog deve configurare le meta informazioni.

Le meta informazioni devono trovarsi all'inizio del file, iniziando con `---` e terminando con `---` Il formato delle informazioni di configurazione al centro è `YAML` .

La configurazione di un file demo è la seguente:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indica il riepilogo del contenuto, che verrà visualizzato nella pagina dell'indice del blog.

Con l'aiuto di `YMAL` ' | `Sintassi, puoi scrivere riassunti su più righe.

Anche la configurazione dell'albero delle directory sul lato destro del blog è `TOC` file (vedi il capitolo precedente Solo gli articoli elencati in `TOC` appariranno nell'indice della home page del blog).

Gli articoli che non contengono metainformazioni non verranno visualizzati nella home page del blog, ma potranno apparire nell'albero delle directory a destra.

## Informazioni Sull'autore

Le informazioni sull'autore possono essere scritte nelle meta informazioni dell'articolo, come ad esempio:

```yml
author: marlowe
```

Quindi modifica `author.yml` nella directory della lingua di origine e aggiungi le informazioni sull'autore, come :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` e `title` sono tutti facoltativi. Se `name` non è impostato, il nome della chiave (qui `marlowe` ) verrà utilizzato come `name` .

Vedi progetto demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) e [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Articolo Appuntato

Se è necessario fissare l'articolo in alto, eseguire `i18n.site` e modificare i `xxx.yml` file sotto `.i18n/data/blog` e modificare il timestamp in un numero negativo (più numeri negativi verranno ordinati dal più grande al più piccolo).
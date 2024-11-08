# Şablona Blogê

`i18n/conf.yml` ji `use: Blog` tê wateya bikaranîna şablonê blogê ji bo pêşkêşkirinê.

Pelê `markdown` ya posta blogê pêdivî ye ku agahdariya meta mîheng bike.

Divê agahdariya meta di destpêka pelê de be, bi `---` dest pê dike û bi `---` diqede. Formata agahdariya vesazkirinê ya navîn `YAML` ye.

Veavakirina pelê demo wiha ye:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` kurteya naverokê nîşan dide, ku dê li ser rûpela navnîşa blogê were xuyang kirin.

Bi alîkariya `YMAL` ' | `Sîntaks, hûn dikarin kurteyên pir-xêz binivîsin.

Veavakirina dara pelrêça li milê rastê yê blogê jî `TOC` pel e (li beşa `TOC` binêre.

Gotarên ku agahdariya meta tune ne dê li ser malpera blogê xuya nebin, lê dikarin di dara pelrêça li milê rastê de xuya bibin.

## Agahdariya Nivîskarê

Agahdariya nivîskar dikare di agahdariya meta ya gotarê de were nivîsandin, wekî:

```yml
author: marlowe
```

Dûv re `author.yml` di pelrêça zimanê çavkaniyê de biguherînin û agahdariya nivîskarê lê zêde bikin, wek :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` û `title` hemî vebijarkî ne. Ger `name` neyê danîn, navê mifteyê (li vir `marlowe` ) dê wekî `name` were bikar anîn.

Projeya demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) û [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) bibînin

## Gotara Pêça

Heke hûn hewce ne ku gotarê li jorê bixin, ji kerema xwe `i18n.site` bişopînin û `xxx.yml` pelên li jêr `.i18n/data/blog` biguherînin, û mohra demjimêrê bi jimareyek neyînî biguhezînin (gelek hejmarên neyînî dê ji mezintirîn berbi piçûktir werin rêz kirin).
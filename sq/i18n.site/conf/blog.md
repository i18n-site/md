# Modeli I Blogut

`i18n/conf.yml` nga `use: Blog` do të thotë të përdorni shabllonin e blogut për paraqitje.

Skedari `markdown` i postimit në blog duhet të konfigurojë informacionin meta.

Informacioni meta duhet të jetë në fillim të skedarit, duke filluar me `---` dhe duke përfunduar me `---` Formati i informacionit të konfigurimit në mes është `YAML` .

Konfigurimi i një skedari demo është si më poshtë:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` tregon përmbledhjen e përmbajtjes, e cila do të shfaqet në faqen e indeksit të blogut.

Me ndihmën e `YMAL` ' | `Sintaksë, ju mund të shkruani përmbledhje me shumë rreshta.

Konfigurimi i pemës së drejtorisë në anën e djathtë të blogut është gjithashtu `TOC` skedarë (shih kapitullin e mëparshëm Vetëm artikujt e listuar në `TOC` do të shfaqen në indeksin e faqes kryesore të blogut).

Artikujt që nuk përmbajnë informacione meta nuk do të shfaqen në faqen kryesore të blogut, por mund të shfaqen në pemën e drejtorisë në të djathtë.

## Informacione Për Autorin

Informacioni i autorit mund të shkruhet në meta informacionin e artikullit, si p.sh.

```yml
author: marlowe
```

Më pas modifikoni `author.yml` në drejtorinë e gjuhës burimore dhe shtoni informacionin e autorit, si p.sh. :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` dhe `title` janë të gjitha opsionale. Nëse `name` nuk është caktuar, emri i çelësit (këtu `marlowe` ) do të përdoret si `name` .

Shiko projektin demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) dhe [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artikull I Gozhduar

Nëse ju duhet ta vendosni artikullin në krye, ju lutemi ekzekutoni `i18n.site` dhe modifikoni `xxx.yml` skedarët nën `.i18n/data/blog` dhe ndryshoni vulën kohore në një numër negativ (numrat e shumtë negativë do të renditen nga më i madhi tek më i vogli).
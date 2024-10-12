# Modeli I Blogut

`i18n/conf.yml` nga `use: Blog` do të thotë të përdorni shabllonin e blogut për paraqitje.

Skedari `markdown` i postimit në blog duhet të konfigurojë informacionin meta.

Informacioni meta duhet të jetë në fillim të skedarit, duke filluar me `---` dhe duke përfunduar me `---` Formati i informacionit të konfigurimit në mes është `YAML` .

Një skedar demo është konfiguruar si më poshtë:

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

Me ndihmën e `YMAL` '|`Sintaksë, ju mund të shkruani përmbledhje me shumë rreshta.

Konfigurimi i pemës së drejtorisë në anën e djathtë të blogut është gjithashtu `TOC` skedarë (shih kapitullin e mëparshëm Vetëm artikujt e listuar në `TOC` do të shfaqen në indeksin e faqes kryesore të blogut).

Artikujt që nuk përmbajnë informacione meta nuk do të shfaqen në faqen kryesore të blogut, por mund të shfaqen në pemën e drejtorisë në të djathtë.

Nëse ju duhet ta vendosni artikullin në krye, ju lutemi ekzekutoni `i18n.site` dhe modifikoni `xxx.yml` skedarët nën `.i18n/data/blog` dhe ndryshoni vulën kohore në një numër negativ (numrat e shumtë negativë do të renditen nga i vogël në i madh në vlerë absolute).
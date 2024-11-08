# Modelo De Blog

`i18n/conf.yml` de `use: Blog` significa usar o modelo de blog para renderizar.

O ficheiro `markdown` da publicación do blog necesita configurar a metainformación.

A meta información debe estar ao principio do ficheiro, comezando por `---` e rematando con `---` O formato da información de configuración no medio é `YAML` .

A configuración dun ficheiro de demostración é a seguinte:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indica o resumo do contido, que se mostrará na páxina do índice do blog.

Coa axuda de `YMAL` ' | `Sintaxe, pode escribir resumos de varias liñas.

A configuración da árbore de directorios no lado dereito do blog `TOC` é `TOC` ficheiros (consulta o capítulo anterior).

Os artigos que non conteñan metainformación non aparecerán na páxina de inicio do blog, pero poden aparecer na árbore de directorios da dereita.

## Información Do Autor

A información do autor pódese escribir na metainformación do artigo, como:

```yml
author: marlowe
```

A continuación, edite `author.yml` no directorio da lingua de orixe e engada información do autor, como :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` e `title` son todos opcionais. Se non se define `name` , o nome da chave (aquí `marlowe` ) empregarase como `name` .

Vexa o proxecto de demostración [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) e [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artigo Fixado

Se precisas fixar o artigo na parte superior, executa `i18n.site` e edita os `xxx.yml` ficheiros debaixo de `.i18n/data/blog` e cambia a marca de tempo a un número negativo (varias números negativos ordenaranse de maior a menor).
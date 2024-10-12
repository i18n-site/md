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

Coa axuda de `YMAL` '|`Sintaxe, pode escribir resumos de varias liñas.

A configuración da árbore de directorios no lado dereito do blog `TOC` é `TOC` ficheiros (consulta o capítulo anterior).

Os artigos que non conteñan metainformación non aparecerán na páxina de inicio do blog, pero poden aparecer na árbore de directorios da dereita.

Se precisa fixar o artigo na parte superior, execute `i18n.site` e edite os `xxx.yml` ficheiros debaixo de `.i18n/data/blog` e cambie a marca de tempo a un número negativo (varias números negativos ordenaranse de pequeno a grande en valor absoluto).
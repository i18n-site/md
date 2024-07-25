# Versión Do Proxecto

Tome o proxecto de demostración como exemplo:

`en/demo2/v` é o número de versión actual do proxecto, que se mostrará á dereita do nome do proxecto no contorno da barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aquí `en/` o código da lingua correspondente á lingua fonte da tradución `.i18n/conf.yml` .

Se o seu idioma de orixe non é o inglés, entón o ficheiro `v` 

A capacidade de buscar versións históricas de documentos está en desenvolvemento.

Recoméndase modificar só o número de versión do documento cando se publiquen actualizacións importantes (como `v1` , `v2` ) para evitar desordenar as páxinas indexadas polos buscadores debido a demasiados números de versión.

## Use Ficheiros `v` Para Dividir Os Índices De Ficheiros Para Diferentes Proxectos

No proxecto de demostración, ademais de `en/demo2/v` , tamén podes ver que os contidos dos directorios `en/blog` e `en/demo1` están baleiros `v` ficheiros.

Non se mostrará `v` no contorno da barra lateral, pero mentres exista o ficheiro `v` , xerarase un índice independente para os ficheiros do directorio e dos subdirectorios.

Ao dividir os índices de diferentes proxectos, pode evitar o acceso lento causado ao cargar o índice de todos os ficheiros de todo o sitio á vez.

Por exemplo, no proxecto de `blog` o ficheiro de índice correspondente [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :


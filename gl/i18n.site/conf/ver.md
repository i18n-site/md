# Versión Do Proxecto

Tome o proxecto de demostración como exemplo:

`en/demo2/v` é o número de versión actual do proxecto, que se mostrará á dereita do nome do proxecto no contorno da barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aquí `en/` é o código de idioma correspondente á lingua fonte da tradución configurada por `.i18n/conf.yml` .

Se o teu idioma de orixe non é o inglés, entón o ficheiro `v` debería colocarse no directorio do proxecto do teu idioma de orixe.

A capacidade de buscar versións históricas de documentos está en desenvolvemento.

Recoméndase modificar só o número de versión do documento cando se publiquen actualizacións importantes (como `v1` , `v2` ) para evitar que demasiados números de versión causen desorde nas páxinas indexadas polos buscadores.

## Usa Ficheiros `v` Baleiros Para Dividir Os Índices De Ficheiros De Diferentes Proxectos

No proxecto de demostración, ademais de `en/demo2/v` , tamén podes ver que hai `v` ficheiros baleiros nos directorios `en/blog` e `en/demo1` .

Non se mostrará un `v` baleiro no contorno da barra lateral, pero mentres haxa un ficheiro `v` , xerarase un índice independente para os ficheiros do directorio e subdirectorios.

Ao dividir os índices de diferentes proxectos, pode evitar o acceso lento causado ao cargar o índice de todos os ficheiros de todo o sitio á vez.

Por exemplo, o ficheiro de índice correspondente a `blog` no proxecto de demostración é [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :
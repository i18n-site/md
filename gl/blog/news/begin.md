---

brief: |
  Actualmente, implementáronse dúas ferramentas de liña de comandos de código aberto: i18 (ferramenta de tradución da liña de comandos de MarkDown) e i18n.site (xerador de sitios de documentos estáticos multilingüe)

---


# i18n.site · a Ferramenta De Tradución E Creación De Sitios Web De MarkDown Xa Está en Liña!

Despois de máis de medio ano de desenvolvemento, está en liña [https://i18n.site](//i18n.site)

Actualmente, están implementadas dúas ferramentas de liña de comandos de código aberto:

* `i18` : MarkDown Ferramenta de tradución da liña de comandos
* `i18n.site` Xerador de sitios de documentos estáticos : , **optimizado para a experiencia de lectura**

A tradución pode manter perfectamente o formato de `Markdown` . Pode identificar modificacións de ficheiros e só traducir ficheiros con cambios.

A tradución é editable; se modificas o texto orixinal e volves traducilo, as modificacións manuais da tradución non se sobrescribirán (se non se modificou este parágrafo do texto orixinal).

[➤ Fai clic aquí para autorizar e seguir i18n.site a biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **recibir unha bonificación $50** .

## Orixe

Na era de Internet, o mundo enteiro é un mercado, e o multilingüismo e a localización son habilidades básicas.

As ferramentas de xestión de tradución existentes son demasiado pesadas Para os programadores que confían na xestión da versión `git` , aínda prefiren a liña de comandos.

Entón, desenvolvín unha ferramenta de tradución `i18` e creei un xerador de sitios estáticos multilingüe `i18n.site` baseado na ferramenta de tradución.

![](https://p.3ti.site/1723777556.avif)

Isto é só o comezo, queda moito máis por facer.

Por exemplo, ao conectar o sitio de documentos estáticos coas subscricións de redes sociais e correo electrónico, pódese contactar aos usuarios a tempo cando se publiquen as actualizacións.

Por exemplo, os foros multilingües e os sistemas de orde de traballo pódense incorporar en calquera páxina web, o que permite aos usuarios comunicarse sen barreiras.

## Código Aberto

Os [códigos front-end, back-end e liña de comandos son todos de código aberto](https://i18n.site/i18n.site/c/src) (o modelo de tradución aínda non é de código aberto).

A pila tecnolóxica utilizada é a seguinte:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

A liña de comandos e o back-end desenvólvense baseándose na ferruxe.

parte traseira [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

Liña de comandos [js Motor boa_engine](https://docs.rs/boa_engine) , [base de datos incorporada fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

base de datos [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Enviar correo a auto-construído SMTP [chasquid](https://github.com/albertito/chasquid)

## Contacta Connosco

Cando se lanzan novos produtos, os problemas son inevitables.

Non dubide en contactar connosco a través do foro de Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
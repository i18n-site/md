---

brief: |
  Atualmente, duas ferramentas de linha de comando de código aberto foram implementadas: i18 (ferramenta de tradução de linha de comando MarkDown) e i18n.site (gerador de sites de documentos estáticos multilíngues)

---


# i18n.site · a Ferramenta De Tradução E Construção De Sites MarkDown Já Está Online!

Depois de mais de meio ano de desenvolvimento, [https://i18n.site](//i18n.site)

Atualmente, duas ferramentas de linha de comando de código aberto estão implementadas:

* `i18` : MarkDown Ferramenta de tradução de linha de comando
* `i18n.site` : Gerador de sites de documentos estáticos em vários idiomas, **otimizado para experiência de leitura**

A tradução pode manter perfeitamente o formato de `Markdown` . Pode identificar modificações de arquivos e traduzir apenas arquivos com alterações.

A tradução é editável; se você modificar o texto original e traduzi-lo novamente, as modificações manuais na tradução não serão substituídas (se este parágrafo do texto original não tiver sido modificado).

[➤ Clique aqui para autorizar e seguir automaticamente a github i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **receber bônus $50** !

## Origem

Na era da Internet, o mundo inteiro é um mercado e o multilinguismo e a localização são competências básicas.

As ferramentas de gerenciamento de tradução existentes são muito pesadas. Para os programadores que dependem do gerenciamento da versão `git` , eles ainda preferem a linha de comando.

Então, desenvolvi uma ferramenta de tradução `i18` e construí um gerador de site estático multilíngue `i18n.site` baseado na ferramenta de tradução.

![](https://p.3ti.site/1723777556.avif)

Este é apenas o começo, há muito mais a fazer.

Por exemplo, ao conectar o site de documentos estáticos com mídias sociais e assinaturas de e-mail, os usuários podem ser contatados a tempo quando as atualizações forem lançadas.

Por exemplo, fóruns multilíngues e sistemas de ordens de serviço podem ser incorporados em qualquer página da web, permitindo que os usuários se comuniquem sem barreiras.

## Código Aberto

Os [códigos de front-end, back-end e linha de comando são todos de código aberto](https://i18n.site/i18n.site/c/src) (o modelo de tradução ainda não é de código aberto).

A pilha de tecnologia usada é a seguinte:

Interface [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

A linha de comando e o backend são desenvolvidos com base em ferrugem.

extremidade traseira [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Linha de comando [incorporada js Engine boa_engine](https://docs.rs/boa_engine) , [banco de dados incorporado fjall](https://github.com/fjall-rs/fjall) .

VPS [contabo](https://my.contabo.com)

banco de [mariadb](https://mariadb.org) [kvrocks](https://kvrocks.apache.org)

Envie e-mail para autoconstrução [chasquid](https://github.com/albertito/chasquid) SMTP

## Contate-Nos

Quando novos produtos são lançados, os problemas são inevitáveis.

Sinta-se à vontade para nos contatar através do Fórum do Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
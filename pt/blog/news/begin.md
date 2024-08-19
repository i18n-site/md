# i18n.site · Ferramenta de Tradução e Construção de Sites MarkDown, Agora Online!

Após mais de meio ano de desenvolvimento, [https://i18n.site](//i18n.site) foi lançado.

Atualmente, duas ferramentas de linha de comando de código aberto foram implementadas:

* `i18` : Ferramenta de tradução de linha de comando para MarkDown
* `i18n.site` : Gerador de sites estáticos multilíngues, **otimizado para experiência de leitura**

A tradução mantém perfeitamente o formato `Markdown`. Consegue identificar alterações em arquivos e traduzir apenas os arquivos modificados.

As traduções são editáveis; ao modificar o original e traduzir novamente, as alterações manuais não são sobrescritas (se o trecho original não foi alterado).

[Clique aqui para autorizar o acompanhamento automático do repositório GitHub de i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e receba $50**.

## Origem

Na era da internet, o mundo todo é um mercado, e o multilinguismo e a localização são habilidades essenciais.

As ferramentas de gerenciamento de tradução disponíveis são muito pesadas. Para programadores que dependem do `git` para gerenciar versões, a linha de comando ainda é a preferida.

Então, desenvolvi a ferramenta de tradução `i18` e construí o gerador de sites multilíngues `i18n.site` a partir dessa ferramenta.

![](https://p.3ti.site/1723777556.avif)

Isso é apenas o começo, há muito mais a ser feito.

Por exemplo, integrar o site estático de documentos com mídias sociais e assinaturas de e-mail, para que os usuários sejam notificados em tempo real quando houver atualizações.

Por exemplo, fóruns multilíngues e sistemas de tickets que podem ser incorporados em qualquer página da web, permitindo comunicação sem barreiras.

## Código Aberto

O [código do front-end, back-end e da linha de comando está todos abertos](https://i18n.site/i18n.site/c/src) (o modelo de tradução ainda não está aberto).

A pilha de tecnologia utilizada é a seguinte:

Front-end [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Linha de comando e back-end baseados em Rust.

Back-end [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Linha de comando [motor JS embutido boa_engine](https://docs.rs/boa_engine), [banco de dados embutido fjall](https://github.com/fjall-rs/fjall).

Servidor VPS [contabo](https://my.contabo.com)

Banco de dados [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Envio de e-mail com SMTP próprio [chasquid](https://github.com/albertito/chasquid).

## Contato

Quando novos produtos são lançados, problemas são inevitáveis.

Fique à vontade para nos contatar pelo Fórum do Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
---

brief: |
  Atualmente, duas ferramentas de linha de comando de código aberto foram implementadas: i18 (ferramenta de tradução de linha de comando para Markdown) e i18n.site (gerador de sites estáticos multilíngues)

---


# i18n.site · Ferramenta de tradução e criação de sites Markdown, agora online!

Após mais de meio ano de desenvolvimento, [https://i18n.site](//i18n.site) foi lançado.

Atualmente, duas ferramentas de linha de comando de código aberto estão implementadas:

* `i18`: Ferramenta de tradução de linha de comando para Markdown
* `i18n.site`: Gerador de sites estáticos multilíngues, **otimizado para a experiência de leitura**

A tradução consegue manter perfeitamente o formato `Markdown`. Ela é capaz de identificar as modificações nos arquivos e traduzir apenas aqueles que foram alterados.

A tradução é editável; ao modificar o texto original, uma nova tradução não substituirá as edições manuais (se o trecho original não foi alterado).

[Clique aqui para autorizar o acompanhamento automático do repositório GitHub de i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo) e **ganhe $50**.

## Origem

Na era da internet, o mundo todo é um mercado, e o multilinguismo e a localização são habilidades essenciais.

As ferramentas de gerenciamento de tradução existentes são muito pesadas, e os programadores que dependem do gerenciamento de versões via `git` preferem ainda a linha de comando.

Então, desenvolvi a ferramenta de tradução `i18` e construí o gerador de sites estáticos multilíngues `i18n.site` com base nessa ferramenta.

![](https://p.3ti.site/1723777556.avif)

Isso é apenas o começo, há muito mais a ser feito.

Por exemplo, integrar o site estático com redes sociais e assinaturas de e-mail, para que as atualizações alcancem os usuários de forma rápida.

Por exemplo, permitir que fóruns e sistemas de tickets multilíngues sejam incorporados em qualquer página da web, facilitando a comunicação dos usuários.

## Código Aberto

O código-fonte do front-end, back-end e da linha de comando [está todos abertos](https://i18n.site/i18n.site/c/src) (o modelo de tradução ainda não está aberto).

A pilha de tecnologia utilizada é a seguinte:

Front-end: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Linha de comando e back-end são desenvolvidos em Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower-HTTP](https://github.com/tower-rs/tower-http/releases).

Linha de comando: [Motor JavaScript embutido boa_engine](https://docs.rs/boa_engine), [Banco de dados embutido fjall](https://github.com/fjall-rs/fjall).

Servidor VPS: [Contabo](https://my.contabo.com)

Banco de dados: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

Envio de e-mail via SMTP próprio: [Chasquid](https://github.com/albertito/chasquid).

## Contato

Com o lançamento de novos produtos, problemas são inevitáveis.

Estamos à disposição para contatos através do Fórum do Google: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
---

brief: |
  Atualmente, duas ferramentas de linha de comando de código aberto foram implementadas: i18 (ferramenta de tradução de linha de comando para Markdown) e i18n.site (gerador de sites estáticos multilíngues)

---


# i18n.site · Ferramenta de tradução e criação de sites Markdown, agora online!

Após mais de meio ano de desenvolvimento, [https://i18n.site](//i18n.site) está no ar.

Atualmente, duas ferramentas de linha de comando de código aberto foram desenvolvidas:

* `i18`: Ferramenta de tradução em linha de comando para Markdown
* `i18n.site`: Gerador de sites estáticos multilíngues, **otimizado para uma melhor experiência de leitura**

1	A tradução pode manter perfeitamente o formato do `Markdown`. Pode identificar as modificações nos arquivos e traduzir apenas os arquivos que foram alterados.

2	A tradução é editável; ao modificar o texto original, caso seja traduzida automaticamente, as edições feitas na tradução não serão substituídas (a menos que este parágrafo do texto original tenha sido modificado).

[Clique aqui para autorizar automaticamente o acompanhamento do repositório开源 do i18n.site no GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e receba $50 de bônus**.

## Origem

Na era da Internet, o mundo todo é um mercado, e a capacidade de multilinguismo e localização é fundamental.

As ferramentas de gerenciamento de tradução existentes são muito robustas. Para programadores que utilizam o gerenciamento de versões via `git`, a linha de comando ainda é a preferência.

Assim, desenvolvi a ferramenta de tradução `i18` e, a partir dela, construí o gerador de sites estáticos multilíngues `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Isso é apenas o começo, há muito mais a ser feito.

Por exemplo, integrar sites estáticos com redes sociais e assinaturas de e-mail, para que as atualizações alcancem os usuários de forma eficiente.

Por exemplo, permitir que fóruns e sistemas de tickets multilíngues sejam incorporados em qualquer página web, facilitando a comunicação sem barreiras.

## Código Aberto

O código-fonte do front-end, back-end e da linha de comando [está todos abertos](https://i18n.site/i18n.site/c/src) (o modelo de tradução ainda não está aberto).

A pilha de tecnologia utilizada inclui:

Front-end: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Linha de comando e back-end são desenvolvidos com base em Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower HTTP](https://github.com/tower-rs/tower-http/releases).

Linha de comando: [Motor JS embutido boa_engine](https://docs.rs/boa_engine), [Banco de dados embutido fjall](https://github.com/fjall-rs/fjall).

Servidor VPS: [Contabo](https://my.contabo.com)

Banco de dados: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

Envio de e-mail via SMTP próprio: [Chasquid](https://github.com/albertito/chasquid).

## Contato

Com o lançamento de novos produtos, problemas são inevitáveis.

Estamos à disposição para contatos através do Fórum do Google: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
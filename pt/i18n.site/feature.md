# Recursos do Produto

## Traduções Integradas com `i18`

O programa integra a tradução `i18`; veja como usá-lo no [➔ documento `i18`](/i18).

## Matching Automático do Idioma do Navegador

O idioma padrão do site será automaticamente correspondido ao idioma do navegador.

Após a mudança manual de idioma pelo usuário, a escolha será lembrada.

Código relacionado: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptação para Dispositivos Móveis

Experiência de leitura perfeita também em dispositivos móveis.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta Disponibilidade do Front-End

`i18n.site` publica o conteúdo do site no `npmjs.com` por padrão, utilizando [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) e outros `CDN` para carregar o conteúdo no `npm`.

Com isso, foram adicionadas fontes espelho na China continental, garantindo acesso estável aos usuários chineses e alcançando **alta disponibilidade do front-end**.

O princípio é: usar o [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) para interceptar solicitações, reenviar solicitações com falhas em outros `CDN` e ativar automaticamente a origem de resposta mais rápida como a fonte padrão de carregamento.

Código relacionado: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Aplicativo de Página Única com Carregamento Rápido

O site utiliza uma arquitetura de aplicativo de página única, sem recarregar ao mudar de página, proporcionando um carregamento extremamente rápido.

## Optimizado para Experiência de Leitura

### Estilo cuidadosamente projetado

> A beleza da simplicidade é perfeitamente expressa no design do site.
> Abandona ornamentos desnecessários e presents o conteúdo em sua forma mais pura.
> Como um poema belo, embora curto, que toca o coração.

<p style="text-align:right">── Autor de I18N.SITE</p>

[➔ Clique aqui para ver uma visão geral dos estilos](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

A imagem acima ilustra a assinatura do feed `RSS` multilíngue em [inoreader.com](//inoreader.com) para `i18n.site`.

### Carregamento de Fontes Online, com Suporte a Chinês

Por padrão, o site utiliza [Alimama Dupla Eixo Variável Retangular](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) e outras fontes online para uniformizar a experiência de leitura dos usuários em diferentes plataformas.

Além disso, para melhorar a velocidade de carregamento, as fontes são fragmentadas com base em estatísticas de frequência de uso.

Código relacionado: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Navegação Superior Oculta Automaticamente

AO rolar para baixo, a navegação superior é ocultada automaticamente.

AO rolar para cima, a navegação oculta é exibida novamente.

Quando o mouse não se move, a navegaçãosome gradualmente.

No canto superior direito da barra de navegação, há um botão de tela cheia para proporcionar uma experiência de leitura imersiva.

### Destaque Sincronizado do Tópico Atual no Sumário

AO rolar o conteúdo à direita, o sumário à esquerda destaca automaticamente o tópico atual.

## Detalhes Incríveis

### Efeitos de Mouse

Passe o mouse sobre o botão no lado direito da navegação superior para ver efeitos especiais impressionantes.

### Pequeño Fantasma no `404`

A página `404` possui um pequeno fantasma flutuante, cujos olhos seguem o movimento do mouse; [➔ Clique aqui para ver](/404)

## Código aberto

O código é aberto-source [aqui](/i18n.site/src); se você estiver interessado em participar do desenvolvimento, seja bem-vindo a se apresentar na [lista de discussão](//groups.google.com/u/2/g/i18n-site).

Há muitos requisitos pequenos, mas importantes e não urgentes. A equipe de desenvolvimento atribuirá tarefas práticas com base nas tecnologias que você domina e melhorará a documentação de desenvolvimento ao atribuir esses requisitos.
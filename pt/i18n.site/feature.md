# Recursos do Produto

## Traduções Integradas `i18`

O programa integra tradução `i18`; para saber como utilizá-la, consulte [➔ Documentação `i18`](/i18).

## Matching Automático do Idioma do Navegador

O idioma padrão do site será automaticamente correspondido ao idioma do navegador.

Após a troca manual de idioma pelo usuário, a escolha será lembrada.

Código relacionado: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptação para Dispositivos Móveis

Oferece uma experiência de leitura perfeita em dispositivos móveis.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta Disponibilidade do Front-end

`i18n.site` publicará o conteúdo do site em `npmjs.com` por padrão, utilizando [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) e outros `CDN` para carregar o conteúdo em `npm`.

Com isso, foram adicionadas fontes espelho na China continental, permitindo acesso estável aos usuários chineses, alcançando **Alta Disponibilidade do Front-end**.

O princípio é: usar o [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) para interceptar solicitações, tentar novamente em outros `CDN` em caso de falha e ativar automaticamente a origem de resposta mais rápida como fonte padrão de carregamento.

Código relacionado: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Aplicativo de Página Única com Carregamento Rápido

O site utiliza uma arquitetura de aplicativo de página única, carregando páginas sem recarregar e com extremo rapidez.

## Optimizado para Experiência de Leitura

### Estilo cuidadosamente projetado

> A beleza da simplicidade é perfeitamente expressa no design das páginas deste site.
> Abandona ornamentos desnecessários, apresentando o conteúdo na sua forma mais pura.
> Como um belo poema, embora curto, emociona o coração.

<p style="text-align:right">── Autor de I18N.SITE</p>

[➔ Clique aqui para ver uma visão geral dos estilos](/i18n.site/md/styl).

### Carregamento de Fontes Online com Suporte a Chinês

Por padrão, o site utiliza [Alimama Dupla Axe Variable Round Font](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) e outras fontes online para uniformizar a experiência de leitura dos usuários em diferentes plataformas.

Além disso, para melhorar a velocidade de carregamento, as fontes são fragmentadas com base em estatísticas de frequência de uso.

Código relacionado: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Navegação Superior Oculta Automaticamente

AO rolar para baixo, a navegação superior será ocultada automaticamente.

AO rolar para cima, a navegação oculta será exibida novamente.

Quando o mouse não se move, a navegação superior ficará invisível.

Na barra de navegação superior, há um botão de tela inteira no canto direito, proporcionando uma experiência de leitura imersiva.

### Destaque Sincronizado do Esboço do Capítulo Atual

AO rolar o conteúdo à direita, o esboço à esquerda destacará o capítulo atual.

## Detalhes Incríveis

### Efeitos de Mouse

Passe o mouse sobre o botão no lado direito da navegação superior para ver efeitos especiais impressionantes.

### Pequeño Fantasma no `404`

A página `404` apresenta um pequeno fantasma flutuante, cujos olhos seguem o movimento do mouse; [➔ Clique aqui para ver](/404)

## Código aberto

O código é aberto [Código Aberto](/i18n.site/src); se você estiver interessado em participar do desenvolvimento, seja bem-vindo a se apresentar na [lista de discussão](//groups.google.com/u/2/g/i18n-site).

Existem muitos requisitos pequenos, mas importantes e não urgentes. A equipe de desenvolvimento distribuirá tarefas práticas com base na tecnologia em que você é proficiente e melhorará a documentação de desenvolvimento ao atribuir esses requisitos.
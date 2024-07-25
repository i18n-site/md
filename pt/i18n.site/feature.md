# Característica Do Produto

## Tradução Integrada `I18`

O programa possui tradução `i18` , consulte [➔ `i18`](/i18) para uso específico.

## Corresponder Automaticamente Ao Idioma Do Navegador

O idioma padrão do site corresponderá automaticamente ao idioma do navegador.

Após o usuário alternar o idioma manualmente, a escolha do usuário será lembrada.

Código relacionado [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Adaptação De Terminal Móvel

Também existe uma experiência de leitura perfeita no celular.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta disponibilidade de front-end

`i18n.site` Por padrão, o conteúdo do site será publicado em `npmjs.com` , com a ajuda de [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) e vários conteúdos `CDN` carregados em `npm` !

Com base nisso, foram adicionadas fontes espelho da China continental para permitir que os usuários chineses tenham acesso estável e obtenham **alta disponibilidade de front-end** .

O princípio é: interceptar a solicitação com a ajuda de [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , se a solicitação falhar, tente novamente em outro `CDN` e habilite de forma adaptativa a estação de origem de resposta mais rápida como fonte de carregamento padrão.

Código relacionado [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Aplicativo De Página Única, Carregamento Extremamente Rápido

O site adota uma arquitetura de aplicação de página única, sem atualização na troca de página e carregamento extremamente rápido.

## Otimizado Para Experiência De Leitura

### Estilo Bem Desenhado

> A beleza da simplicidade é perfeitamente interpretada no web design deste site.
> Abandona a decoração desnecessária e apresenta o conteúdo na sua forma mais pura.
> Como um belo poema, embora curto, toca o coração das pessoas.

<p style="text-align:right">── I18N.SITE Autor</p>

[➔ Clique aqui para ver uma lista de estilos](/i18n.site/md/styl) .

### Carregue Fontes Online, Suporte Chinês

Por padrão, [as fontes retangulares variáveis ​​de eixo duplo Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) e outras fontes online são habilitadas na página da web para unificar a experiência de leitura dos usuários em diferentes plataformas.

Ao mesmo tempo, para melhorar a velocidade de carregamento, as fontes são divididas de acordo com estatísticas de frequência de palavras.

Código relacionado [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Navegação Superior Ocultada Automaticamente

Role para baixo e a navegação superior será ocultada automaticamente.

Role para cima e a navegação oculta aparecerá novamente.

Ele desaparecerá quando o mouse não estiver se movendo.

Há um botão de tela inteira no canto superior direito da barra de navegação para criar uma experiência envolvente de leitura de documentos.

### Destaque De Esboço Sincronizado Do Capítulo Atual

Ao rolar o conteúdo à direita, o contorno à esquerda destacará simultaneamente o capítulo que está sendo lido.

## Detalhes Legais

### Efeitos Do Mouse

Passe o mouse sobre o botão no lado direito da navegação superior para ver efeitos especiais interessantes.

### `404` O Pequeno Fantasma!

`404` Há um fantasma bonitinho flutuando na página, seus olhos se moverão com o mouse, [➔ Clique aqui para ver](/404) ,

## Código De Código Aberto

[O código é de código aberto](/i18n.site/src) . Se você estiver interessado em participar do desenvolvimento, apresente-se [à lista de discussão](//groups.google.com/u/2/g/i18n-site) .

Existem muitos pequenos requisitos que são importantes, mas não urgentes. A equipe de desenvolvimento atribuirá tarefas práticas de acordo com a tecnologia em que você é bom e melhorará os documentos de desenvolvimento ao atribuir os requisitos.


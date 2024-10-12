# 1 Recursos do Produto

## 2 Traduções Integradas com `i18`

3 O programa integra tradução com `i18`; para detalhes de uso, consulte [➔ Documentação do `i18`](/i18).

## 4 Correspondência Automática do Idioma do Navegador

5 O idioma padrão do site será automaticamente correspondido ao idioma do navegador.

6 Após a mudança manual de idioma pelo usuário, a escolha será lembrada.

7 Código relacionado: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## 8 Adaptação para Dispositivos Móveis

9 Experiência de leitura perfeita também em dispositivos móveis.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> 10 Alta Disponibilidade do Front-End

11 `i18n.site` publicará o conteúdo do site em `npmjs.com` por padrão, utilizando [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) e outros `CDN` para carregar o conteúdo em `npm`.

12 Adicionalmente, foram incluídas fontes de réplica na China continental, permitindo acesso estável para usuários chineses, alcançando **alta disponibilidade do front-end**.

13 O princípio é: usar [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) para interceptar solicitações, reintentar solicitações com falha em outros `CDN` e ativar automaticamente a origem de resposta mais rápida como a fonte padrão de carregamento.

14 Código relacionado: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## 15 Aplicativo de Página Única com Carregamento Rápido

16 O site utiliza uma arquitetura de aplicativo de página única, sem recarregar ao mudar de página, proporcionando um carregamento extremamente rápido.

## 17 Otimização para Experiência de Leitura

### 18 Estilo cuidadosamente projetado

> 19 A beleza da simplicidade é perfeitamente expressa no design das páginas deste site.
> 20 Ele abandona ornamentos desnecessários e presents o conteúdo na sua forma mais pura.
> 21 Como um poema belo e curto, que toca o coração.

22 <p style="text-align:right">── Autor de I18N.SITE</p>

23 [➔ Clique aqui para ver uma visão geral dos estilos](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

25 A imagem acima mostra a assinatura multilíngue `RSS` de `i18n.site` usando [inoreader.com](//inoreader.com).

### 26 Carregamento de Fontes Online com Suporte a Chinês

27 Por padrão, o site utiliza [Alimama Dupla Eixo Variável Fangsong](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) e outras fontes online para unificar a experiência de leitura dos usuários em diferentes plataformas.

28 Além disso, para melhorar a velocidade de carregamento, as fontes são divididas com base em estatísticas de frequência de uso.

29 Código relacionado: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### 30 Navegação Superior Oculta Automaticamente

31 Ao rolar para baixo, a navegação superior é ocultada automaticamente.

32 Ao rolar para cima, a navegação oculta é exibida novamente.

33 Quando o mouse não se move, a navegaçãosome gradualmente.

34 No canto superior direito da barra de navegação, há um botão de tela cheia para proporcionar uma experiência de leitura imersiva.

### 35 Sincronização de Destaque do Esboço com o Capítulo Atual

36 Ao rolar o conteúdo à direita, o esboço à esquerda destaca simultaneamente o capítulo atual de leitura.

## 37 Detalhes Incríveis

### 38 Efeitos de Mouse

39 Passe o mouse sobre o botão no lado direito da navegação superior para ver efeitos especiais impressionantes.

### 40 Pequeno Fantasma no `404`

41 A página `404` possui um pequeno fantasma flutuante, cujos olhos seguem o movimento do mouse; [➔ Clique aqui para ver](/404)

## 42 Código Aberto

43 [O código está aberto](/i18n.site/src). Se você estiver interessado em participar do desenvolvimento, dê uma olhada na [lista de discussão](//groups.google.com/u/2/g/i18n-site).

44 Existem muitos requisitos pequenos, mas importantes e não urgentes. A equipe de desenvolvimento distribuirá tarefas práticas com base nas tecnologias que você domina e, ao mesmo tempo, melhorará a documentação de desenvolvimento ao atribuir esses requisitos.
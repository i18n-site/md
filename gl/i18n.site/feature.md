# Características Do Produto

## `i18` Traducións Integradas

O programa ten `i18` tradución integrada, consulta [➔ `i18` documento](/i18) para un uso específico.

## Coincidir Automaticamente Co Idioma Do Navegador

O idioma predeterminado do sitio web coincidirá automaticamente co idioma do navegador.

Despois de que o usuario cambie manualmente o idioma, lembrarase a elección do usuario.

Código relacionado : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Adaptación De Terminal Móbil

Tamén hai unha experiencia de lectura perfecta no teléfono móbil.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta dispoñibilidade front-end

`i18n.site` publicará o contido do sitio a `npmjs.com` por defecto, coa axuda de [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) e outros `CDN` contidos cargados en `npm` .

Sobre esta base, engadíronse fontes espello da China continental para permitir que os usuarios chineses teñan un acceso estable e acadar **unha alta dispoñibilidade de front-end** .

O principio é: interceptar as solicitudes con [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , tentar de novo as solicitudes erradas noutros `CDN` e habilitar de forma adaptativa o sitio de orixe que responde máis rápido como fonte de carga predeterminada.

Código relacionado : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Aplicación Dunha Soa Páxina, Carga Extremadamente Rápida

O sitio web adopta unha arquitectura de aplicación dunha soa páxina, sen actualización ao cambiar de páxina e carga extremadamente rápida.

## Optimizado Para a Experiencia Lectora

### Estilo Ben Deseñado

> A beleza da sinxeleza está perfectamente interpretada no deseño web deste sitio web.
> Abandona a decoración superflua e presenta o contido en estado puro.
> Como un fermoso poema, aínda que é breve, toca o corazón da xente.

<p style="text-align:right">── I18N.SITE</p>

[➔ Fai clic aquí para ver unha lista de estilos](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

A imaxe de arriba mostra `RSS` multilingüe usando [inoreader.com](//inoreader.com) subscrición `i18n.site` .

### Carga Fontes en Liña, Admite O Chinés

De forma predeterminada [, as fontes rectangulares variables de dobre eixe Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) outras fontes en liña están habilitadas na páxina web para unificar a experiencia de lectura dos usuarios en diferentes plataformas.

Ao mesmo tempo, para mellorar a velocidade de carga, as fontes son cortadas segundo as estatísticas de frecuencia de palabras.

Código relacionado : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### A Navegación Superior Ocultouse Automaticamente

Desprázate cara abaixo e a navegación superior ocultarase automaticamente.

Desprázate cara arriba e aparecerá de novo a navegación oculta.

Desaparecerá cando o rato non se mova.

Hai un botón de pantalla completa na esquina superior dereita da barra de navegación para crear unha experiencia de lectura de documentos envolvente.

### Esquema Sincronizado Destacado Do Capítulo Actual

Ao desprazarse polo contido á dereita, o contorno da esquerda resaltará ao mesmo tempo o capítulo que se está a lindo.

## Detalles Interesantes

### Efectos Do Rato

Pasa o rato sobre o botón da parte dereita da navegación superior para ver efectos especiais interesantes.

### `404` Pequena Pantasma

Hai unha pequena pantasma flotante na páxina `404` , cuxos ollos se moverán co rato, [➔ Fai clic aquí para ver](/404) ,

## Código De Código Aberto

[O código é de código aberto](/i18n.site/c/src) Se estás interesado en participar no desenvolvemento, preséntate [á lista de correo](//groups.google.com/u/2/g/i18n-site) .

Hai moitos pequenos requisitos que son importantes pero non urxentes. O equipo de desenvolvemento asignará tarefas prácticas en función das tecnoloxías nas que é bo e mellorará os documentos de desenvolvemento mentres asigna os requisitos.
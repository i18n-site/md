# Característica Do Produto

## Tradución `I18`

O programa ten tradución `i18` , consulte [➔ `i18`](/i18) para un uso específico.

## Coincidir Automaticamente Co Idioma Do Navegador

O idioma predeterminado do sitio web coincidirá automaticamente co idioma do navegador.

Despois de que o usuario cambie manualmente o idioma, lembrarase a elección do usuario.

Código relacionado : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Adaptación De Terminal Móbil

Tamén hai unha experiencia de lectura perfecta no teléfono móbil.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta dispoñibilidade front-end

`i18n.site` De xeito predeterminado, [unpkg.com](//unpkg.com) contido do sitio publicarase en `npmjs.com` , coa axuda de [jsdelivr.com](//jsdelivr.com) e varios contidos `CDN` cargados en `npm` .

Sobre esta base, engadíronse fontes espello da China continental para permitir que os usuarios chineses teñan un acceso estable e acadar **unha alta dispoñibilidade de front-end** .

O principio é: interceptar a solicitude coa axuda de [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , se a solicitude falla, téntao de novo noutro `CDN` e habilite de forma adaptativa a estación de orixe que responde máis rápido como fonte de carga predeterminada.

Código relacionado : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Aplicación Dunha Soa Páxina, Carga Extremadamente Rápida

O sitio web adopta unha arquitectura de aplicación dunha soa páxina, sen actualización ao cambiar de páxina e carga extremadamente rápida.

## Optimizado Para a Experiencia Lectora

### Estilo Ben Deseñado

> A beleza da sinxeleza está perfectamente interpretada no deseño web deste sitio web.
> Abandona a decoración innecesaria e presenta o contido en estado puro.
> Como un poema fermoso, aínda que é breve, toca o corazón da xente.

<p style="text-align:right">── I18N.SITE</p>

[➔ Fai clic aquí para ver unha lista de estilos](/i18n.site/md/styl) .

### Carga Fontes en Liña, Admite O Chinés

De xeito predeterminado, [as fontes rectangulares variables de eixe dobre de Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) outras fontes en liña están habilitadas na páxina web para unificar a experiencia de lectura dos usuarios en diferentes plataformas.

Ao mesmo tempo, para mellorar a velocidade de carga, as fontes son cortadas segundo as estatísticas de frecuencia de palabras.

Código relacionado : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### A Navegación Superior Ocultouse Automaticamente

Desprázate cara abaixo e a navegación superior ocultarase automaticamente.

Desprázate cara arriba e aparecerá de novo a navegación oculta.

Desaparecerá cando o rato non se mova.

Hai un botón de pantalla completa na esquina superior dereita da barra de navegación para crear unha experiencia de lectura de documentos envolvente.

### Esquema Sincronizado Destacado Do Capítulo Actual

Ao desprazarse polo contido á dereita, o contorno da esquerda resaltará simultaneamente o capítulo que se está a lindo.

## Detalles Interesantes

### Efectos Do Rato

Pasa o rato sobre o botón da parte dereita da navegación superior para ver efectos especiais interesantes.

### `404` Pequena Pantasma

Hai unha pequena pantasma flotante na páxina `404` os seus ollos moveranse co rato, [➔ Fai clic aquí para ver](/404) ,

## Código De Código Aberto

[O código é de código aberto](/i18n.site/src) Se estás interesado en participar no desenvolvemento, preséntate á [lista de correo](//groups.google.com/u/2/g/i18n-site) .

Hai moitos pequenos requisitos que son importantes pero non urxentes. O equipo de desenvolvemento asignará tarefas de práctica segundo a tecnoloxía na que é bo e mellorará os documentos de desenvolvemento mentres asigna os requisitos.


# Lista De Estilos

[Fai clic aquí para buscar o ficheiro fonte desta páxina](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) para ver como escribir `MarkDown` nos seguintes estilos.

## Bloque Dobrado

|+| Que é MarkDown?

    MarkDown é unha linguaxe de marcado lixeira que permite aos usuarios crear documentos con formato nun formato de texto sinxelo que é fácil de ler e escribir.

    Úsase habitualmente para escribir documentación, artigos de blog, libros electrónicos, publicacións en foros, etc.

    Ten as seguintes vantaxes:

    1. Fácil de aprender
    1. Moi lexible
    1. Control de versión amigable

       Dado que `MarkDown` documentos están en formato de texto plano, os programadores poden incorporalos facilmente nos sistemas de control de versións (como `git` ).

       Isto fai que o seguimento dos cambios e a colaboración sexan moito máis sinxelos, especialmente no desenvolvemento do equipo.

|-| O que é I18N?

    "I18N" é a abreviatura de "Internacionalización".

    Dado que a palabra "Internacionalización" ten 18 letras entre "I" e "N", úsase "I18N" para simplificar a representación.

    En termos simples, significa admitir varios idiomas.


O bloque dobrador é unha sintaxe estendida de `i18n.site` a `MarkDown` , escrita como segue :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

con `|+| `或`|-| A liña que comeza con ` xerará un bloque de dobramento e o contido do bloque de dobramento son as liñas posteriores co mesmo nivel de sangría (os parágrafos están separados por liñas en branco).

Pase'|-| `标记的折叠块默认展开，`|+| `Os bloques contraídos etiquetados están contraídos por defecto.

## Subliña & Tachado &

Este é __ subliñado __ ,~~ tachado~~ e texto de presentación **en negrita** .

Escríbese do seguinte xeito:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

O analizador `MarkDown` da ferramenta de creación de sitios web `i18n.site` optimizou a sintaxe de subliñado, tachado e negriña. Pode ter efecto sen espazos antes e despois da marca, o que facilita a escritura de documentos en idiomas como China, Xapón e Corea. non use espazos como separadores.

Lectura : [Por que a sintaxe Markdown de Nuggets ( `**……**` ) ás veces non ten efecto?](//juejin.cn/post/7064565848421171213)

## Cita

### Cita Dunha Liña

> É a miña natureza que os meus talentos sexan útiles, e volverei despois de gastar todo o meu diñeiro.
<p style="text-align:right">─ Li Bai</p>

### Citas De Varias Liñas

> Outra vantaxe única da ciencia ficción é o seu alcance extremadamente amplo.
> Unha “Guerra e Paz”, cun millón de palabras, só describe a historia dunha rexión durante varias décadas;
> E novelas de ciencia ficción como "A resposta final" de Asimov describen vívidamente os miles de millóns de anos de historia de todo o universo, incluídos os seres humanos, en só uns poucos miles de palabras.
> Tal inclusión e ousadía son imposibles de conseguir na literatura tradicional.
<p style="text-align:right">── Liu Cixin</p>

### Consello `> [!TIP]`

> [!TIP]
> Lembra comprobar a validez do teu pasaporte e visado. Os documentos caducados non poden entrar nin saír do país.

Escríbese do seguinte xeito

```
> [!TIP]
> YOUR CONTENT
```

### Observación `> [!NOTE]`

> [!NOTE]
> Se me envías unha mensaxe e contesto ao instante, que significa iso?
> Isto demostra que me encanta xogar cos teléfonos móbiles.


### Aviso `> [!WARN]`

> [!WARN]
> Cando vai nunha aventura salvaxe, é importante estar seguro. Aquí tes algúns consellos clave de seguridade:
>
> - **Consulta a previsión meteorolóxica** : a semana pasada un grupo de alpinistas atopouse cunha tormenta na metade da montaña porque non consultaron a previsión meteorolóxica e tiveron que evacuar urxente.
> - **Levar o material necesario** : asegúrese de levar comida, auga e material de primeiros auxilios suficientes.
> - **Comprender o terreo** : familiarízase co terreo e as rutas da zona de aventura con antelación para evitar perderse.
> - **Mantéñase conectado** : Mantente conectado co mundo exterior e asegúrate de que todos poidan regresar con seguridade.
>
> Lembra que a seguridade sempre é o primeiro!

## Lista De Tarefas Pendentes

- [x] Deseña un prototipo de produto e unha lista de características
- [ ] Determinar a pila tecnolóxica e as ferramentas de desenvolvemento
- [ ] Desenvolver cronogramas e fitos de desenvolvemento de produtos

## Lista

### Lista Ordenada

1. correndo
   1. Tres veces por semana, 5 quilómetros cada vez
   1. Corre unha media maratón
1. adestramento ximnasio
   1. Dúas veces por semana, 1 hora cada vez
   1. Concéntrase nos músculos do núcleo

### Lista Non Ordenada

* eventos sociais
  - Participar en reunións de intercambio do sector
    + Sesión de intercambio de tecnoloxía
    + Encontro de Intercambio de Emprendedores
  - Organizar unha reunión de amigos
    + Grellada ao aire libre
    + noite de cine

## Folla

| pensador       | Principais achegas                           |
|--------------|------------------------------------|
| Confucio         | Fundador do confucianismo |
| Sócrates     | pai da filosofía occidental  |
| Nietzsche         | Filosofía de Superman, criticando a moral e a relixión tradicional       |
| marx       | comunismo |

### Optimización De Visualización De Mesas Grandes

Para táboas relativamente grandes, pódense utilizar os seguintes métodos para optimizar o efecto de visualización:

1. Usa unha fonte máis pequena

   Por exemplo, envolve a táboa con `<div style="font-size:14px">` e `</div>` .

   Teña en conta que a etiqueta `div` debe ocupar a súa propia liña e deixar liñas en branco antes e despois dela.
1. Para texto máis longo nunha cela, insira `<br>` para envolver a liña
1. Se unha columna se aperta demasiado curta, pode engadir `<div style="width:100px">xxx</div>` á cabeceira para ampliar o ancho e tamén pode engadir [`<wbr>` á cabeceira](//developer.mozilla.org/docs/Web/HTML/Element/wbr) para controlar a posición do salto de liña.

Un exemplo de demostración é o seguinte:

<div style="font-size:14px">

| nación       | <div style="width:70px;margin:auto">nome do pensador</div> | Era | Principais achegas ideolóxicas                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucio                                           | 551-479 a.C   | O fundador do confucianismo propuxo conceptos fundamentais como "benevolencia" e "propiedade" e fixo fincapé no cultivo moral e a orde social. |
| grecia antiga     | Sócrates                                       | 469-399 a.C   | Explorar a verdade a través do diálogo e a dialéctica propón "coñécete a ti mesmo" e fai fincapé no pensamento racional         |
| Francia       | Voltaire                                         | 1694-1778       | Figuras representativas da Ilustración defenderon a racionalidade, a liberdade e a igualdade, e criticaron a superstición relixiosa e o goberno autoritario.   |
| Alemaña       | Kant                                           | 1724-1804       | Presentar a "Crítica da Razón Pura"<br> Explora os fundamentos da moral, a liberdade e o coñecemento, facendo fincapé na razón práctica     |

</div>

O pseudocódigo para o exemplo anterior é o seguinte:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Código

### Código en Liña

No vasto mundo das linguaxes de programación, `Rust` , `Python` , `JavaScript` e `Go` ocupan cada un unha posición única.

### Varias Liñas De Código

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Salto De Liña Dentro Do Parágrafo

Os saltos de liña dentro dos parágrafos pódense conseguir sen engadir liñas en branco entre liñas.
O espazo entre saltos de liña dentro dos parágrafos é menor que o espazo entre parágrafos.

por exemplo:

> Vive como unha gran persoa,
> A morte tamén é un heroe pantasma.
> Aínda boto de menos a Xiang Yu,
> Reticente a cruzar Jiangdong.
>
> Li Qingzhao usou a tráxica historia de Xiang Yu para insinuar a incompetencia da dinastía Song.
> Expresar descontento coa corte imperial por renderse sen loitar.
# Lista De Estilos

[Haga clic aquí para explorar el archivo fuente de esta página](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) y ver cómo escribir `MarkDown` en los siguientes estilos.

## Bloque Plegado

|+| ¿Qué es MarkDown?

    MarkDown es un lenguaje de marcado liviano que permite a los usuarios crear documentos formateados en un formato de texto sin formato que es fácil de leer y escribir.

    Comúnmente utilizado para escribir documentación, artículos de blogs, libros electrónicos, publicaciones en foros, etc.

    Tiene las siguientes ventajas:

    1. fácil de aprender
    1. Altamente legible
    1. Control de versiones amigable

       Dado que `MarkDown` documentos están en formato de texto sin formato, los programadores pueden incorporarlos fácilmente en sistemas de control de versiones (como `git` ).

       Esto simplifica mucho el seguimiento de los cambios y la colaboración, especialmente en el desarrollo de equipos.

|-| ¿Qué es I18N?

    "I18N" es la abreviatura de "Internacionalización".

    Dado que la palabra "Internacionalización" tiene 18 letras entre "I" y "N", se utiliza "I18N" para simplificar la representación.

    En términos sencillos, significa admitir múltiples idiomas.


El bloque plegable es una sintaxis extendida de `i18n.site` a `MarkDown` , escrita de la siguiente manera :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

con `|+| `或`|-| La línea que comienza con ` generará un bloque plegable, y el contenido del bloque plegable son las líneas posteriores con el mismo nivel de sangría (los párrafos están separados por líneas en blanco).

Pase`|-| `标记的折叠块默认展开，`|+| `Los bloques colapsados etiquetados están colapsados de forma predeterminada.

## ¡Subrayado & Tachado &

¡Esto es __ Subrayado __ ,~~ tachado~~ y texto de presentación **en negrita** .

Está escrito de la siguiente manera:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

El analizador `MarkDown` de la herramienta de creación de sitios web `i18n.site` tiene una sintaxis optimizada de subrayado, tachado y negrita. Puede tener efecto sin espacios antes y después de la marca, lo que facilita la redacción de documentos en idiomas como China, Japón y Corea. no utilice espacios como separadores.

Lectura ampliada : [¿Por qué la sintaxis Markdown ( `**……**` ) de los Nuggets a veces no surte efecto?](//juejin.cn/post/7064565848421171213)

## Cita

### Cita De Una Sola Línea

> Es mi naturaleza que mis talentos sean útiles y volveré después de haber gastado todo mi dinero.
<p style="text-align:right">─ Li Bai</p>

### Cotizaciones De Varias Líneas

> Otra ventaja única de la ciencia ficción es su alcance extremadamente amplio.
> Una “Guerra y Paz”, con un millón de palabras, sólo describe la historia de una región durante varias décadas;
> Y las novelas de ciencia ficción como "La respuesta final" de Asimov describen vívidamente los miles de millones de años de historia del universo entero, incluidos los seres humanos, en sólo unos pocos miles de palabras.
> Tal inclusión y audacia son imposibles de lograr en la literatura tradicional.
<p style="text-align:right">── Liu Cixin</p>

### Consejo `> [!TIP]`

> [!TIP]
> Recuerde verificar la vigencia de su pasaporte y visa. Los documentos vencidos no pueden ingresar ni salir del país.

Está escrito de la siguiente manera

```
> [!TIP]
> YOUR CONTENT
```

### Observación `> [!NOTE]`

> [!NOTE]
> Si me envías un mensaje y te respondo al instante, ¿qué significa eso?
> Esto demuestra que realmente me encanta jugar con teléfonos móviles.


### Advertencia `> [!WARN]`

> [!WARN]
> Al emprender una aventura salvaje, es importante mantenerse a salvo. A continuación se ofrecen algunos consejos clave de seguridad:
>
> - **Consulta la previsión meteorológica** : La semana pasada, un grupo de escaladores se encontró con una tormenta a mitad de la montaña porque no consultaron la previsión meteorológica y tuvieron que evacuar urgentemente.
> - **Lleve el equipo necesario** : asegúrese de llevar suficiente comida, agua y suministros de primeros auxilios.
> - **Comprenda el terreno** : familiarícese con el terreno y las rutas del área de aventuras de antemano para evitar perderse.
> - **Manténgase conectado** : Manténgase conectado con el mundo exterior y asegúrese de que todos puedan regresar de manera segura.
>
> Recuerde, ¡la seguridad siempre es lo primero!

## Lista De Tareas Pendientes

- [x] Diseñar prototipo de producto y lista de características.
- [ ] Determinar la pila de tecnología y las herramientas de desarrollo.
- [ ] Desarrollar cronogramas e hitos de desarrollo de productos.

## Lista

### Lista Ordenada

1. correr
   1. Tres veces por semana, 5 kilómetros cada vez.
   1. Corre una media maratón
1. entrenamiento de gimnasio
   1. Dos veces por semana, 1 hora cada vez.
   1. Centrarse en los músculos centrales

### Lista Desordenada

* eventos sociales
  - Participar en reuniones de intercambio de la industria.
    + Sesión de intercambio de tecnología
    + Encuentro de Intercambio de Emprendimiento
  - Organiza una reunión de amigos
    + Barbacoa al aire libre
    + noche de cine

## Hoja

| pensador       | Principales contribuciones                           |
|--------------|------------------------------------|
| Confucio         | Fundador del confucianismo |
| Sócrates     | padre de la filosofía occidental  |
| Nietzsche         | Filosofía de Superman, crítica de la moral y la religión tradicionales.       |
| marx       | comunismo |

### Optimización De Visualización De Tablas Grandes

Para tablas relativamente grandes, se pueden utilizar los siguientes métodos para optimizar el efecto de visualización:

1. Utilice una fuente más pequeña

   Por ejemplo, envuelva la tabla con `<div style="font-size:14px">` y `</div>` .

   Tenga en cuenta que la etiqueta `div` debe ocupar su propia línea y dejar líneas en blanco antes y después.
1. Para texto más largo en una celda, inserte `<br>` para ajustar la línea
1. Si una columna se reduce demasiado, puede agregar `<div style="width:100px">xxx</div>` al encabezado para expandir el ancho y también puede agregar [`<wbr>` al encabezado](//developer.mozilla.org/docs/Web/HTML/Element/wbr) para controlar la posición del salto de línea.

Un ejemplo de demostración es el siguiente:

<div style="font-size:14px">

| nación       | <div style="width:70px;margin:auto">nombre del pensador</div> | Era | Principales aportes ideológicos                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Porcelana       | Confucio                                           | 551-479 a.C.   | El fundador del confucianismo propuso conceptos centrales como "benevolencia" y "propiedad" y enfatizó el cultivo moral y el orden social. |
| Grecia antigua     | Sócrates                                       | 469-399 a.C.   | Explorar la verdad a través del diálogo y la dialéctica propone "conócete a ti mismo" y enfatiza el pensamiento racional         |
| Francia       | Voltaire                                         | 1694-1778       | Figuras representativas de la Ilustración defendieron la racionalidad, la libertad y la igualdad, y criticaron la superstición religiosa y los gobiernos autoritarios.   |
| Alemania       | Kant                                           | 1724-1804       | Plantear la "Crítica de la Razón Pura"<br> Explora los fundamentos de la moralidad, la libertad y el conocimiento, enfatizando la razón práctica.     |

</div>

El pseudocódigo para el ejemplo anterior es el siguiente:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Código

### Código en Línea

En el vasto mundo de los lenguajes de programación, `Rust` , `Python` , `JavaScript` y `Go` ocupan cada uno una posición única.

### Múltiples Líneas De Código

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Salto De Línea Dentro Del Párrafo

Los saltos de línea dentro de los párrafos se pueden lograr sin agregar líneas en blanco entre líneas.
El espacio entre saltos de línea dentro de los párrafos es menor que el espacio entre párrafos.

Por ejemplo:

> Vive como una gran persona,
> La muerte también es un héroe fantasma.
> Todavía extraño a Xiang Yu.
> Reacio a cruzar Jiangdong.
>
> Li Qingzhao utilizó la trágica historia de Xiang Yu para insinuar la incompetencia de la dinastía Song.
> Expresando descontento con la corte imperial por rendirse sin luchar.
# Lista de estilos

[Haga clic aquí para ver el archivo fuente de esta página](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md), lo cual le permitirá observar el siguiente formato en `MarkDown`.

## Subrayado & Tachado & Negrita

Esto es __subrayado__, ~~tachado~~ y **texto en negrita** en演示 de formato.

Se escribe de la siguiente manera:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

El analizador de `Markdown` de la herramienta de creación de sitios `i18n.site` ha optimizado la sintaxis de subrayado, tachado y negrita, permitiendo que éstas se activen sin necesidad de espacios antes o después de las marcas. Esto facilita la redacción de documentos en idiomas como chino, japonés y coreano, que no utilizan espacios como separadores.

Lectura complementaria: [¿Por qué a veces el syntax de resaltado en negrita (`**…**`) de Markdown en Juejin no funciona?](//juejin.cn/post/7064565848421171213)

## Cita

### Cita de una sola línea

> Nací con un talento que seguro será útil, y tras dilapidar mis millonadas, regresaré.
<p style="text-align:right">─ Li Bai</p>

### Citas de múltiples líneas

> Otra ventaja exclusiva de la ciencia ficción es su horizonte extremadamente amplio.
> Una "Guerra y paz", con millón y medio de caracteres, apenas describe la historia de una región durante varias décadas;
> Y novelas de ciencia ficción como "La última respuesta" de Asimov, en apenas unos miles de caracteres, describen vívidamente la historia de decenas de miles de millones de años del universo entero, incluyendo a los humanos.
> Tal capacidad y ambición son inalcanzables para la literatura tradicional.
<p style="text-align:right">─ Liu Cixin</p>

### Sugerencia `> [!TIP]`

> [!TIP]
> Recuerde revisar la vigencia de su pasaporte y visa. Los documentos caducados no permiten ingresar ni salir del país.

Se escribe de la siguiente manera

```
> [!TIP]
> YOUR CONTENT
```

### Nota `> [!NOTE]`

> [!NOTE]
> Si me envías un mensaje y te respondo de inmediato, ¿qué significa eso?
> Esto indica que realmente amo mucho mi teléfono móvil.


### Advertencia `> [!WARN]`

> [!WARN]
> Al realizar una excursión en la naturaleza, asegúrese de prestar atención a la seguridad.
> La semana pasada, un equipo de escaladores se encontró con una tormenta en la mitad de la montaña debido a que no consultaron el pronóstico del tiempo, por lo que tuvieron que evacuar de emergencia.
> Recuerde, cualquier actividad al aire libre requiere una preparación adecuada y una vigilancia constante del clima.

## Tareas pendientes

- [x] Diseñar prototipo de producto y lista de funcionalidades
- [ ] Determinar el stack tecnológico y las herramientas de desarrollo
- [ ] Establecer cronograma y hitos para el desarrollo del producto

## Lista

### Lista ordenada

1. Correr
   1. tres veces por semana, 5 kilómetros cada vez
   1. Participar en una media maratón
1. Entrenamiento en el gimnasio
   1. dos veces por semana, una hora cada vez
   1. Enfocarse en el entrenamiento de los músculos del core

### Lista desordenada

* Actividades sociales
  - Asistir a reuniones de intercambio de la industria
    + Sesiones de intercambio técnico
    + Reuniones de intercambio para emprendedores
  - Organizar reuniones con amigos
    + Barbacoa al aire libre
    + Noche de cine

## Tabla

| Pensador       | Contribuciones principales                           |
|--------------|------------------------------------|
| Confucio         | Fundador de la escuela confuciana |
| Sócrates     | Padre de la filosofía occidental  |
| Nietzsche         | Filosofía del superhombre, crítica a la moral y religión tradicionales       |
| Marx       | Comunismo |

## Código

### Código en línea

En el vasto mundo de los lenguajes de programación, `Rust`, `Python`, `JavaScript` y `Go` ocupan cada uno una posición única.

### Múltiples líneas de código

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```
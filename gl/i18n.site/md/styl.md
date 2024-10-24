# Lista De Estilos

[Fai clic aquí para buscar o ficheiro fonte desta páxina](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) para ver como escribir `MarkDown` nos seguintes estilos.

## Subliña & Tachado &

Este é __ subliñado __ ,~~ tachado~~ e texto de presentación **en negrita** .

Escríbese do seguinte xeito:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

O analizador `MarkDown` da ferramenta de creación de sitios web `i18n.site` optimizou o subliñado, o tachado e a sintaxe en negra. Pode ter efecto sen espazos antes e despois da marca, facilitando a escritura de documentos en idiomas como China, Xapón e Corea. que non utilizan espazos como separadores.

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
> Cando vai nunha aventura salvaxe, é importante estar seguro.
> A semana pasada, un grupo de alpinistas atopouse cunha tormenta na metade da montaña e tivo que evacuar porque non comprobaron a previsión meteorolóxica.
> Lembra que calquera actividade ao aire libre require unha preparación adecuada e atención ao tempo.

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
    + Reunión de intercambio de emprendedores
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
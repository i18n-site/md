# Lista de Estilos

[Clique aqui para visualizar o arquivo-fonte desta página](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md), para ver o seguinte estilo de escrita em `MarkDown`.

## & &

Isso é uma demonstração de __sublinhado__, ~~tachado~~ e **negrito** no texto.

Escrito da seguinte forma:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

O analisador de `Markdown` da ferramenta de criação de sites `i18n.site` foi otimizado para sublinhado, riscado e negrito, não exigindo espaços antes e depois das marcações, o que facilita a escrita de documentos em idiomas como o chinês, japonês e coreano, que não utilizam espaços como separadores.

Leitura complementar: [Por que a sintaxe de negrito em Markdown (`**…**`) às vezes não funciona?](//juejin.cn/post/7064565848421171213)

## Citação

### Citação em linha única

> Nasci com um talento que certamente será útil; mesmo que todo o meu dinheiro se esgote, ainda assim voltarei.
<p style="text-align:right">─ Li Bai</p>

### Citação em múltiplas linhas

> Outra vantagem exclusiva da ficção científica é a sua visão extremamente ampla.
> Um romance como "Guerra e Paz", com um milhão de palavras, apenas descreve a história de uma região ao longo de algumas décadas;
> Já uma obra de ficção científica como "A Última Resposta" de Asimov, em poucas milhares de palavras, descreve de forma vívida a história de bilhões de anos do universo, incluindo a humanidade.
> Tal capacidade de abrangência e coragem é algo que a literatura tradicional não pode alcançar.
<p style="text-align:right">─ Liu Cixin</p>

### Dica `> [!DICA]`

> [!TIP]
> Lembre-se de verificar a validade do passaporte e do visto; documentos expirados não permitem a entrada ou saída do país.

Escrita da seguinte forma

```
> [!TIP]
> YOUR CONTENT
```

### Nota `> [!NOTA]`

> [!NOTE]
> Se você me enviar uma mensagem e eu responder imediatamente, o que isso indica?
> Isso mostra que eu realmente gosto de usar o meu celular.


### Aviso `> [!AVISO]`

> [!WARN]
> Ao realizar expedições no campo, certifique-se de prestar atenção à segurança.
> Na semana passada, um grupo de montanhistas foi surpreendido por uma tempestade na metade da montanha porque não consultaram a previsão do tempo.
> Lembre-se de que qualquer atividade ao ar livre requer preparação adequada e atenção às condições climáticas.

## Tarefas a Fazer

- [x] Desenhar protótipo de produto e lista de funcionalidades
- [ ] Definir stack tecnológico e ferramentas de desenvolvimento
- [ ] Estabelecer cronograma e marcos do desenvolvimento do produto

## Lista

### Lista ordenada

1. Correr
   1. Três vezes por semana, 5 km cada vez
   1. Participar de uma meia maratona
1. Treino em academia
   1. Duas vezes por semana, 1 hora cada vez
   1. Foco no treino de músculos do core

### Lista não ordenada

* Atividades sociais
  - Participar de encontros de troca do setor
    + Sessões de compartilhamento de tecnologia
    + Encontros de troca de empreendedorismo
  - Organizar encontros de amigos
    + Churrasco ao ar livre
    + Noite de cinema

## Tabela

| Pensador       | Contribuições principais                           |
|--------------|------------------------------------|
| Confúcio         | Fundador da Escola Confucionista |
| Sócrates     | Pai da filosofia ocidental  |
| Nietzsche         | Filosofia do Superman, crítico da moralidade e da religião tradicionais       |
| Marx       | Comunismo |

## Código

### Código inline

No vasto mundo das linguagens de programação, `Rust`, `Python`, `JavaScript` e `Go` ocupam cada um uma posição única.

### Código em múltiplas linhas

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```
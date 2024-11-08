# Lista De Estilos

[Clique aqui para navegar no arquivo fonte desta página](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) e ver como escrever `MarkDown` nos seguintes estilos.

## Bloco Dobrado

|+| O que é Markdown?

    MarkDown é uma linguagem de marcação leve que permite aos usuários criar documentos formatados em formato de texto simples, fácil de ler e escrever.

    Comumente usado para escrever documentação, artigos de blog, e-books, postagens em fóruns, etc.

    Tem as seguintes vantagens:

    1. Fácil de aprender
    1. Altamente legível
    1. Controle de versão amigável

       Como os documentos `MarkDown` estão em formato de texto simples, os programadores podem incorporá-los facilmente em sistemas de controle de versão (como `git` ).

       Isso torna o rastreamento de alterações e a colaboração muito mais simples, especialmente no desenvolvimento da equipe.

|-| O que é I18N?

    "I18N" é a abreviatura de "Internacionalização".

    Como a palavra “Internacionalização” possui 18 letras entre “I” e “N”, utiliza-se “I18N” para simplificar a representação.

    Em termos leigos, significa oferecer suporte a vários idiomas.


O bloco dobrável é uma sintaxe estendida de `i18n.site` a `MarkDown` , escrita da seguinte forma :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

com `|+| `或`|-| A linha que começa com `irá gerar um bloco dobrável, e o conteúdo do bloco dobrável são as linhas subsequentes com o mesmo nível de recuo (os parágrafos são separados por linhas em branco).

Passe`|-| `标记的折叠块默认展开，`|+| `Blocos recolhidos marcados são recolhidos por padrão.

## & &

__ é __~~ tachado~~ e texto de apresentação **em negrito** .

Está escrito da seguinte forma:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

O analisador `MarkDown` da ferramenta de construção de sites `i18n.site` otimizou sublinhado, tachado e sintaxe em negrito. Ele pode entrar em vigor sem espaços antes e depois da marca, tornando mais fácil escrever documentos em idiomas como China, Japão e Coréia. não use espaços como separadores.

Leitura estendida : [Por que a sintaxe Markdown do Nuggets ( `**……**` ) às vezes não entra em vigor?](//juejin.cn/post/7064565848421171213)

## Citar

### Cotação De Linha Única

> É da minha natureza que meus talentos sejam úteis e voltarei depois que todo o meu dinheiro tiver sido gasto.
<p style="text-align:right">─Li Bai</p>

### Citações De Múltiplas Linhas

> Outra vantagem única da ficção científica é o seu escopo extremamente amplo.
> Uma “Guerra e Paz”, com um milhão de palavras, apenas descreve a história de uma região durante várias décadas;
> E romances de ficção científica como “A Resposta Final” de Asimov descrevem vividamente os bilhões de anos de história de todo o universo, incluindo os seres humanos, em apenas alguns milhares de palavras.
> Tal inclusão e ousadia são impossíveis de alcançar na literatura tradicional.
<p style="text-align:right">──Liu Cixin</p>

### Dica `> [!TIP]`

> [!TIP]
> Lembre-se de verificar a validade do seu passaporte e documentos vencidos não podem entrar ou sair do país.

Está escrito da seguinte forma

```
> [!TIP]
> YOUR CONTENT
```

### Observação `> [!NOTE]`

> [!NOTE]
> Se você me enviar uma mensagem e eu responder instantaneamente, o que isso significa?
> Isso mostra que adoro brincar com celulares.


### Aviso `> [!WARN]`

> [!WARN]
> Ao embarcar em uma aventura selvagem, é importante permanecer seguro. Aqui estão algumas dicas importantes de segurança:
>
> - **Verifique a previsão do tempo** : Na semana passada, um grupo de alpinistas enfrentou uma tempestade no meio da montanha porque não verificaram a previsão do tempo e tiveram que evacuar com urgência.
> - **Leve o equipamento necessário** : certifique-se de trazer comida, água e suprimentos de primeiros socorros suficientes.
> - **Entenda o terreno** : Familiarize-se com o terreno e as rotas da área de aventura com antecedência para evitar se perder.
> - **Fique conectado** : fique conectado ao mundo exterior e garanta que todos possam retornar com segurança.
>
> Lembre-se, a segurança sempre vem em primeiro lugar!

## Lista De Tarefas

- [x] Projetar protótipo de produto e lista de recursos
- [ ] Determine a pilha de tecnologia e as ferramentas de desenvolvimento
- [ ] Desenvolva cronogramas e marcos de desenvolvimento de produtos

## Lista

### Lista Ordenada

1. correndo
   1. Três vezes por semana, 5 quilômetros de cada vez
   1. Corra uma meia maratona
1. treino de ginástica
   1. Duas vezes por semana, 1 hora de cada vez
   1. Concentre-se nos músculos centrais

### Lista Não Ordenada

* eventos sociais
  - Participe de reuniões de intercâmbio do setor
    + Sessão de compartilhamento de tecnologia
    + Encontro de Intercâmbio de Empreendedorismo
  - Organize uma reunião de amigos
    + Churrasco ao ar livre
    + noite de cinema

## Folha

| pensador       | Principais contribuições                           |
|--------------|------------------------------------|
| Confúcio         | Fundador do Confucionismo |
| Sócrates     | pai da filosofia ocidental  |
| Nietzsche         | Filosofia do Superman, criticando a moralidade e a religião tradicionais       |
| Marcos       | comunismo |

### Otimização De Exibição De Mesa Grande

Para tabelas relativamente grandes, os seguintes métodos podem ser usados para otimizar o efeito de exibição:

1. Use fonte menor

   Por exemplo, envolva a tabela com `<div style="font-size:14px">` e `</div>` .

   Observe que a tag `div` deve ocupar uma linha própria e deixar linhas em branco antes e depois dela.
1. Para texto mais longo em uma célula, insira `<br>` para quebrar a linha
1. Se uma coluna estiver muito curta, você poderá adicionar `<div style="width:100px">xxx</div>` ao cabeçalho para expandir a largura e também adicionar [`<wbr>` ao cabeçalho](//developer.mozilla.org/docs/Web/HTML/Element/wbr) para controlar a posição da quebra de linha.

Um exemplo de demonstração é o seguinte:

<div style="font-size:14px">

| nação       | <div style="width:70px;margin:auto">nome do pensador</div> | Era | Principais contribuições ideológicas                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confúcio                                           | 551-479 AC   | O fundador do confucionismo propôs conceitos fundamentais como “benevolência” e “propriedade” e enfatizou o cultivo moral e a ordem social. |
| Grécia antiga     | Sócrates                                       | 469-399 AC   | Explorar a verdade por meio do diálogo e da dialética propõe o “conhecer a si mesmo” e enfatiza o pensamento racional         |
| França       | Voltaire                                         | 1694-1778       | Figuras representativas do Iluminismo defenderam a racionalidade, a liberdade e a igualdade, e criticaram a superstição religiosa e o regime autoritário.   |
| Alemanha       | Kant                                           | 1724-1804       | Apresentar a "Crítica da Razão Pura"<br> Explora os fundamentos da moralidade, liberdade e conhecimento, enfatizando a razão prática     |

</div>

O pseudocódigo do exemplo acima é o seguinte:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Código

### Código Embutido

No vasto mundo das linguagens de programação, `Rust` , `Python` , `JavaScript` e `Go` ocupam cada uma uma posição única.

### Múltiplas Linhas De Código

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Quebra De Linha Dentro Do Parágrafo

As quebras de linha nos parágrafos podem ser obtidas sem adicionar linhas em branco entre as linhas.
O espaçamento entre quebras de linha nos parágrafos é menor que o espaçamento entre parágrafos.

por exemplo:

> Viva como uma grande pessoa,
> A morte também é um herói fantasma.
> Ainda sinto falta de Xiang Yu,
> Relutante em cruzar Jiangdong.
>
> Li Qingzhao usou a trágica história de Xiang Yu para sugerir a incompetência da Dinastia Song.
> Expressando insatisfação com a corte imperial por se render sem luta.
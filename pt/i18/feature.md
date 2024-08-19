# Recursos do Produto

`i18` é uma ferramenta de linha de comando para traduzir Markdown & Yaml

## Pode manter perfeitamente o formato do Markdown

Suporta a tradução de tabelas Markdown, sem danificar o formato; não traduz palavras em fórmulas matemáticas ou links.

Suporta tradução de mixed HTML Markdown , o conteúdo nas tags `<pre>` e `<code>` de HTML incorporadas em `MarkDown` não é traduzido

## Pode identificar fórmulas matemáticas e pular a tradução

As fórmulas matemáticas são reconhecidas e ignoradas na tradução.

Para saber como escrever fórmulas matemáticas, consulte [a documentação do Github sobre como escrever expressões matemáticas](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Pode traduzir comentários em trechos de código

O código embutido e os trechos de código não são traduzidos, mas os comentários no código podem ser traduzidos.

Para traduzir comentários, é necessário indicar o idioma após ` ``` `, por exemplo: ` ```rust `.

Atualmente, suporta a tradução de anotações em `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [e outros idiomas](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Se a linguagem de programação que você precisa não estiver disponível, entre [em contato conosco](https://groups.google.com/g/i18n-site).

## Linha de comando amigável

Existem muitas [ferramentas robustas](https://www.capterra.com/translation-management-software) disponíveis para gerenciar documentos de tradução.

Para programadores familiarizados com `git`, `vim` e `vscode`, usar essas ferramentas para editar documentos e gerenciar versões pode aumentar o custo de aprendizado.

Os adeptos do princípio `KISS` (`Keep It Simple, Stupid`) consideram que as soluções empresariais são sinônimos de complicadas, ineficientes e difíceis de usar.

A tradução deve ser simples: inserir comandos e pronto, sem dependências de ambiente complexas.

Se não for necessário, não adicione entidades.

## Sem modificação, sem tradução

Existem também algumas ferramentas de tradução de linha de comando, como [translate-shell](https://github.com/soimort/translate-shell).

No entanto, elas não suportam a identificação de modificações em arquivos e apenas traduzem arquivos modificados para reduzir custos e aumentar a eficiência.

## A tradução pode ser editada e a tradução automática não substituirá as modificações manuais, se o texto original não foi modificado

A tradução é editável.

Modifique o texto original e, ao traduzir automaticamente novamente, as edições manuais na tradução não serão substituídas (se este parágrafo do texto original não tiver sido alterado).

## Qualidade de tradução机器 de melhor

Desenvolvemos uma nova geração de tecnologia de tradução que combina os benefícios dos modelos tradicionais de tradução automática e dos grandes modelos de linguagem, resultando em traduções precisas, suaves e elegantes.

Os testes cegos mostram que a qualidade da nossa tradução é significativamente melhor em comparação com serviços concorrentes.

Para alcançar a mesma qualidade, a quantidade de edição manual exigida pelo Google Translate e `ChatGPT` é de `2.67` e `3.15` vezes maior que a nossa, respectivamente.

## <a rel=id href="#price" id="price"></a> Preços altamente competitivos

|                                                                                   | USD/milhão de palavras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clique aqui para autorizar o acompanhamento automático do repositório GitHub de i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e receba $50**.

Nota: O número de caracteres cobrados = [número de caracteres Unicode](https://en.wikipedia.org/wiki/Unicode) do arquivo de origem × número de idiomas da tradução

## Suporte para tradução de `YAML`

A ferramenta traduz apenas os valores dos dictionaries em `YAML`, não as chaves.

Com base nas traduções de `YAML`, você pode construir facilmente soluções internacionais para diversas linguagens de programação.

## Suporta configuração de cabeçalhos de tradução `HOGO`

Suporta a configuração de cabeçalho para blogs estáticos do tipo [HOGO](https://github.com/gohugoio/hugo), traduzindo apenas os campos `title`, `summary` e `description`.

## Não traduzir nomes de variáveis

`Markdown` é usado para modelos de e-mail e `YAML` como configuração de arquivo de idioma, onde há parâmetros de variáveis (por exemplo: recarga `${amount}` foi recebida).

Nomes de variáveis como `${varname}` não serão traduzidos.

## Optimização de tradução para China, Japão e Coreia

### Quando traduzido para o inglês, o título é automaticamente capitalizado na primeira letra

China, Japão e Coreia não têm distinção entre maiúsculas e minúsculas, mas a convenção para títulos em inglês é capitalizar a primeira letra.

`i18` pode identificar títulos em `Markdown` e capitalizar automaticamente a primeira letra ao traduzir para idiomas que distinguem maiúsculas de minúsculas.

Por exemplo, `为阅读体验而优化` será traduzido para `Optimized for Reading Experience`.

### Não traduzir termos em inglês em documentos de China, Japão e Coreia

os documentos da China, Japão e Coreia frequentemente contêm muitos termos em inglês.

A tradução automática de documentos em chinês, japonês e coreano para outros idiomas que não o inglês frequentemente traduz os termos junto com o texto

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Se usar o Google ou o DeepL, eles traduzirão incorretamente termos em inglês que deveriam permanecer intactos (por exemplo, em japonês e francês).

### Google Tradutor

Traduzido para o japonês: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Traduzido para o francês: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` traduzido para `faucon` e `Llama` para `lama`. Como nomes próprios, não devem ser traduzidos.

![](//p.3ti.site/1720199451.avif)

### DeepL Tradutor

Traduzido para o japonês: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL traduz o texto acima para o francês (também alterando os nomes próprios e adicionando `... ` estranho):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Tradução i18n.site

A tradução do `i18` reconhece termos em inglês em documentos chineses, japoneses e coreanos e mantém os termos intactos.

Por exemplo, o resultado da tradução para o japonês é:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

A tradução para o francês é:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when an English word and Chinese, Japanese, or Korean text are separated by a space or the English word is longer than one character will it be considered a term.

Por exemplo: `C罗` será traduzido para `Cristiano Ronaldo`.

## Combinar com `i18n.site` para criar sites multilíngues

`i18` está integrado à ferramenta de linha de comando para criação de sites multilíngues [`i18n.site`](/i18n.site).

Consulte a documentação de [`i18n.site`](/i18n.site) para mais detalhes.

## Código aberto

O cliente é entirely open-source e 90% do código do servidor é open-source. [Clique aqui para ver o código-fonte](/i18n.site/src).

Estamos procurando voluntários para participar do desenvolvimento do código-fonte aberto e na revisão de textos traduzidos.

Se você estiver interessado, preencha primeiro [seu perfil aqui](https://ggl.link/i18n) e, em seguida, participe [da lista de discussão](https://groups.google.com/u/2/g/i18n-site).

## Mantenha o contato

<button onclick="mailsub()">Clique aqui para assinar o boletim por e-mail</button> e <button onclick="webpush()">ative as notificações do navegador</button>, para ser notificado sobre atualizações de produtos.

Siga também nossas contas sociais [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).
# Recursos do Produto

`i18` é uma ferramenta de linha de comando para traduzir Markdown & Yaml.

## Pode manter perfeitamente o formato do Markdown

Suporta a tradução de tabelas Markdown sem danificar o formato; não traduz palavras em fórmulas matemáticas ou links.

Suporta tradução de mixed HTML Markdown , o conteúdo nas tags `<pre>` e `<code>` incorporadas em HTML `MarkDown` não é traduzido

## Pode identificar fórmulas matemáticas e pular a tradução

As fórmulas matemáticas são identificadas e a tradução é ignorada.

Para saber como escrever fórmulas matemáticas, consulte [Github sobre como escrever expressões matemáticas](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Possui capacidade de traduzir comentários em trechos de código

O código embutido e os trechos de código não são traduzidos, mas os comentários no código podem ser traduzidos.

Para traduzir comentários, é necessário indicar o idioma após ` ``` `, como: ` ```rust `.

Atualmente, suporta a tradução de anotações em `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [e outros idiomas](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Se a linguagem de programação que você precisa não estiver disponível, entre [em contato conosco](https://groups.google.com/g/i18n-site).

## Interface de linha de comando amigável

Existem muitas [ferramentas robustas](https://www.capterra.com/translation-management-software) disponíveis para gerenciar documentos de tradução.

Para programadores familiarizados com `git`, `vim` e `vscode`, usar essas ferramentas para editar documentos e gerenciar versões pode aumentar o custo de aprendizado.

Os adeptos do princípio `KISS` (`Keep It Simple, Stupid`) consideram que as soluções empresariais são sinônimos de complexas, ineficientes e difíceis de usar.

A tradução deve ser simples, bastando inserir comandos e concluir com um clique, sem dependências de ambiente complexas.

Se não for necessário, não adicione entidades.

## Sem modificação, sem tradução

Existem também algumas ferramentas de tradução de linha de comando, como [translate-shell](https://github.com/soimort/translate-shell).

Porém, elas não suportam a identificação de modificações em arquivos, traduzindo apenas os arquivos modificados para reduzir custos e aumentar a eficiência.

## A tradução pode ser editada e a tradução automática não substituirá as modificações existentes

A tradução é editável.

Se modificar o texto original e traduzi-lo automaticamente novamente, as modificações manuais na tradução não serão substituídas (se este parágrafo do texto original não tiver sido modificado).

## Oferece a melhor qualidade de tradução automática

Desenvolvemos uma nova geração de tecnologia de tradução, integrando as vantagens dos modelos tradicionais de tradução automática e dos grandes modelos de idiomas, para fornecer traduções precisas, suaves e elegantes.

Os testes cegos indicam que a qualidade da nossa tradução é significativamente melhor em comparação com serviços similares.

Para alcançar a mesma qualidade, a quantidade de edição manual exigida pelo Google Translate e `ChatGPT` é de `2.67` vezes e `3.15` vezes maior que a nossa, respectivamente.

## <a rel=id href="#price" id="price"></a> Preços altamente competitivos

|                                                                                   | USD/milhão de palavras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clique aqui para autorizar automaticamente o acompanhamento do repositório开源 do i18n.site no GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e receba $50 de bônus**.

Nota: O número de caracteres cobrados = [número de caracteres Unicode](https://en.wikipedia.org/wiki/Unicode) do arquivo de origem × número de idiomas na tradução

## Suporte para tradução de `YAML`

A ferramenta traduz apenas os valores dos dictionaries em `YAML`, não as chaves.

Com base na tradução `YAML` , você pode construir facilmente soluções internacionais para diversas linguagens de programação.

## Suporta Configuração De Cabeçalho De Tradução `HOGO`

Suporta a tradução de configurações de cabeçalho para blogs estáticos do tipo [HUGO](https://github.com/gohugoio/hugo), traduzindo apenas os campos `title`, `summary`, `brief` e `description`.

## Não traduz nomes de variáveis

`Markdown` é usado como modelo de e-mail, `YAML` como arquivo de configuração de idioma, e haverá parâmetros variáveis (por exemplo: recarga `${amount}` foi recebida).

Nomes de variáveis como `${varname}` não serão traduzidos.

## Optimização de tradução para China, Japão e Coreia

### Quando traduzido para o inglês, o título é automaticamente capitalizado na primeira letra

China, Japão e Coreia não têm distinção entre maiúsculas e minúsculas, mas os títulos em inglês geralmente começam com a primeira letra maiúscula.

`i18` consegue identificar títulos em `Markdown` e automaticamente capitaliza a primeira letra ao traduzir para idiomas que diferenciam maiúsculas de minúsculas.

Por exemplo, `为阅读体验而优化` será traduzido para `Optimized for Reading Experience`.

### Nomes em inglês em documentos de China, Japão e Coreia não são traduzidos

Documentos da China, Japão e Coreia frequentemente contêm muitos termos em inglês.

A tradução automática de documentos chineses, japoneses e coreanos para idiomas não ingleses frequentemente traduz os termos juntos, como a seguinte frase em chinês:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Se usar o Google ou o DeepL, ambos traduzem incorretamente termos em inglês que deveriam permanecer originais (tomando o japonês e o francês como exemplos).

### Google Tradutor

Traduzido para o japonês: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Traduzido para o francês: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` é traduzido para `faucon` e `Llama` para `lama`. Como nomes próprios, não devem ser traduzidos.

![](//p.3ti.site/1720199451.avif)

### Tradução DeepL

Traduzido para o japonês: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL traduz o texto acima para o francês (também alterando os nomes próprios e adicionando `...` estranho):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Tradução i18n.site

A tradução do `i18` reconhece termos em inglês em documentos chineses, japoneses e coreanos e mantém os termos intactos.

Por exemplo, o resultado da tradução para o japonês é:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

A tradução para o francês é:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when an English word and a Chinese, Japanese, or Korean text have a space or the English word is longer than 1 character will the word be considered a term.

For example: `C罗` will be translated as `Cristiano Ronaldo`.

## Pode ser combinado com `i18n.site` para construção de sites multilíngues

`i18` está integrado à ferramenta de linha de comando para construção de sites multilíngues [`i18n.site`](/i18n.site).

Consulte a documentação de [`i18n.site`](/i18n.site) para mais detalhes.

## Código aberto

O cliente é entirely open-source e o servidor tem 90% do código aberto, [clique aqui para ver o código-fonte](/i18n.site/src).

Estamos procurando voluntários para participar do desenvolvimento do código-fonte aberto e na revisão de textos traduzidos.

Se você estiver interessado, por favor [clique aqui para preencher seu perfil](https://ggl.link/i18n) e depois se inscreva [na lista de discussão](https://groups.google.com/u/2/g/i18n-site) para comunicação.

## Mantenha o contato

<button onclick="mailsub()">Clique aqui para assinar atualizações de produtos por e-mail</button> e <button onclick="webpush()">ative as notificações do navegador</button>, e seremos notificados quando os produtos forem atualizados.

Também siga nossas contas em [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).
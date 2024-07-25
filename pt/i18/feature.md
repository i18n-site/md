# Características Do Produto

`i18` é uma ferramenta de linha de comando para traduzir Markdown & Yaml

## Pode Manter Perfeitamente O Formato Do Markdown

Suporta tradução de tabelas Markdown sem danificar o formato; não traduz palavras em fórmulas matemáticas ou links;

Suporta tradução de Markdown em `<code>` mistas HTML `<pre>` HTML em `MarkDown`

## Pode Reconhecer Fórmulas Matemáticas E Pular a Tradução

As fórmulas matemáticas são reconhecidas e a tradução é ignorada.

Para saber como escrever fórmulas matemáticas, consulte [" Github Sobre como escrever expressões matemáticas"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Capacidade De Traduzir Comentários Em Trechos De Código

O código embutido e os trechos de código não são traduzidos, mas os comentários no código podem ser traduzidos.

Os comentários de tradução precisam indicar o idioma depois de ` ``` ` ` ```rust ` :

`php` suporta tradução de comentários `toml` , `yaml` , `json5` [,](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) `go` `python` `rust` `bash` `c` , `cpp` , `java` `js` , `coffee`

Se a linguagem de programação que você precisa não estiver disponível, entre [em contato conosco](https://groups.google.com/g/i18n-site) .

## Linha De Comando Amigável

Existem muitas [ferramentas pesadas](https://www.capterra.com/translation-management-software) disponíveis para gerenciar documentos de tradução.

Para programadores familiarizados com `git` `vim` , `vscode` , usar essas ferramentas para editar documentos e gerenciar versões sem dúvida aumentará o custo de aprendizado.

`KISS` ( `Keep It Simple, Stupid` ) Entre os que acreditam neste princípio, as soluções de nível empresarial são sinónimo de incómodas, ineficientes e difíceis de utilizar.

A tradução deve ser feita inserindo comandos e completando-a com um clique. Não deve haver dependências de ambiente complexas.

Não adicione entidades, a menos que seja necessário.

## Sem Modificação, Sem Tradução

Existem também algumas ferramentas de tradução de linha de comando, como [translate-shell](https://github.com/soimort/translate-shell)

No entanto, eles não suportam a identificação de modificações de arquivos e apenas traduzem arquivos modificados para reduzir custos e aumentar a eficiência.

## A Tradução Pode Ser Editada E a Tradução Automática Não Substituirá as Modificações Existentes.

A tradução é editável.

Modifique o texto original e traduza-o automaticamente novamente, as modificações manuais na tradução não serão substituídas (se este parágrafo do texto original não tiver sido modificado).

## Tradução De Alta Qualidade De Xindaya

Desenvolvemos uma nova geração de tecnologia de tradução que integra as vantagens técnicas dos modelos tradicionais de tradução automática e dos grandes modelos de idiomas para tornar as traduções precisas, suaves e elegantes.

Testes cegos mostram que a qualidade da nossa tradução é significativamente melhor em comparação com serviços similares.

Para alcançar a mesma qualidade, a quantidade de edição manual exigida pelo Google Translate e `ChatGPT` é `2.67` vezes e `3.15` vezes a nossa, respectivamente.

## <a rel=id href="#price" id="price"></a> Preços extremamente competitivos

|                                                                                   | USD/milhão de palavras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonas](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Nota: O número de caracteres faturáveis = [o número de unicode](https://en.wikipedia.org/wiki/Unicode) no arquivo de origem × o número de idiomas na tradução

## Apoie a Tradução `YAML`

A ferramenta traduz apenas os valores do dicionário `YAML` não as chaves do dicionário.

Com base no `YAML` Translation, você pode criar facilmente soluções internacionais para diversas linguagens de programação.

## Tradução De Suporte `HOGO`

Suporta a configuração de cabeçalho do blog estático do tipo [HOGO](https://github.com/gohugoio/hugo) , apenas os campos `title` , `summary` e `description` são traduzidos.

## Não Traduza Nomes De Variáveis

`Markdown` Usado como modelo de e-mail, `YAML` como configuração de arquivo de idioma, haverá parâmetros variáveis (por exemplo: recarga `${amount}` foi recebida).

`${varname}` Este tipo de nome de variável não será considerado como tradução para o inglês.

## Otimização De Tradução Para China, Japão E Coreia

### Quando Traduzido Para O Inglês, a Primeira Letra Do Título É Automaticamente Maiúscula.

China, Japão e Coreia não possuem letras maiúsculas ou minúsculas, mas os títulos em inglês geralmente colocam a primeira letra em maiúscula.

`i18` pode reconhecer títulos em `MarkDown` e colocará automaticamente a primeira letra em maiúscula ao traduzir para um idioma que diferencia maiúsculas de minúsculas.

Por exemplo `为阅读体验而优化` será traduzido como `Optimized for Reading Experience` .

### Termos Em Inglês Em Chinês, Japonês, Coreano E Chinês Não São Traduzidos

Documentos da China, Japão e Coreia contêm frequentemente muitos termos em inglês.

A tradução automática dos idiomas chinês, japonês e coreano tornou-se um idioma diferente do inglês, e os termos são frequentemente traduzidos juntos, como a seguinte frase em chinês:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Se você usa o Google ou o DeepL, ambos traduzem incorretamente termos em inglês que deveriam permanecer originais (tome o japonês e o francês como exemplos).

### Google Tradutor

Traduzido para `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Traduzido para `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` é traduzido como `faucon` e `Llama` é traduzido como `lama` . Como nomes próprios, eles não devem ser traduzidos.

<img alt="" src="//p.3ti.site/1720199451.avif">

### Tradução DeepL

Traduzido para `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Tradução do texto acima para o francês (também reescrevendo os nomes próprios e adicionando os ímpares `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### Tradução i18n.site

A tradução do `i18` reconhecerá termos em inglês em documentos chineses, japoneses e coreanos e deixará os termos intactos.

Por exemplo, o resultado da tradução para o japonês acima é:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

A tradução francesa é:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Somente quando houver um espaço entre a palavra em inglês e o texto em chinês, japonês e coreano ou o comprimento em inglês for maior que 1, a palavra será considerada um termo.

Por exemplo: `C罗` será traduzido como `Cristiano Ronaldo` .

## Pode Ser Combinado `i18n.site` Construção De Sites Em Vários Idiomas!

`i18` Está integrado à ferramenta de linha de comando para construção de sites multilíngues [`i18n.site`](/i18n.site) .

Veja a documentação de [`i18n.site`](/i18n.site)

## Código De Código Aberto

O cliente é totalmente de código aberto e o lado do servidor 90 do código é [de](/i18n.site/src) código aberto.

Procuramos voluntários para participar no desenvolvimento de código-fonte aberto e na revisão de textos traduzidos.

Se você estiver interessado, por favor [→ Clique aqui para preencher seu perfil](https://ggl.link/i18n) e depois entrar [na lista de discussão](https://groups.google.com/u/2/g/i18n-site) para comunicação.

## Mantenha Contato

<button onclick="mailsub()">Clique neste e-mail para assinar atualizações de produtos</button> e <button onclick="webpush()">ativar o push do navegador</button> . Iremos notificá-lo quando atualizações de produtos forem feitas.

Também / bem-vindo para seguir nossas [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) sociais [X.COM: @i18nSite](https://x.com/i18nSite)

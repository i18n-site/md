<h1 style="justify-content:space-between">3Ti.Site · Pensamentos sem fronteiras<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, um gerador de sites estáticos multilíngues, pode traduzir automaticamente o Markdown para [mais de cem idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Algumas pessoas podem querer perguntar: agora que os navegadores possuem funções de tradução integradas, é desnecessário internacionalizar o site?

Quero dizer que **somente internacionalizando todo o site poderemos oferecer suporte à pesquisa de texto completo multilíngue no site e à otimização de mecanismos de pesquisa** .

## Seqüência

"Bíblia · Gênesis":

> Os antigos não faziam distinção entre línguas. Eles nasceram com orgulho e queriam construir uma torre alta com o topo alcançando o céu.
> <blockquote><p>Deus ficou descontente com a arrogância do homem, por isso espalhou todos os seres vivos em vários lugares, incapazes de se entenderem.</p></blockquote>
> <blockquote><p>Desde então, tem sido difícil para os humanos se comunicarem, as disputas continuaram e não existe Torre de Babel no mundo.</p></blockquote>

O romance de ficção científica &quot;Três Corpos&quot; (pronúncia chinesa: `3Ti` ) ficcionaliza uma civilização alienígena que se comunica por meio de ondas eletromagnéticas, não tem barreiras linguísticas e é tecnologicamente próspera.

Espero que, com a ajuda desta ferramenta, as pessoas da terra sejam como pessoas de três corpos, a comunicação não seja restringida pela linguagem e toda a humanidade esteja novamente unida.

## Tutorial

## Introdução À Função

### Manter O Formato Markdown

### Modificar Tradução

Depois de modificar a tradução, você precisa executar novamente `./i18n.sh` para atualizar o cache.

### Notas De Tradução

Os comentários de tradução precisam indicar o idioma após \```, como ` ```rust` .

Atualmente oferece suporte à tradução de comentários para ferrugem, c, cpp, java, js, café, python e bash.

Edite [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) para adicionar suporte de tradução para comentários em mais idiomas.

### Configurar Proxy

Definir as seguintes variáveis ​​de ambiente permite que as chamadas da API do Google Tradutor passem pelo proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incorporação De Variável

```
test: 测试变量<br 0>嵌入
```

### Esvaziar O Cache

```bash
rm -rf .i18n/.cache
```

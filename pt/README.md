<h1 style="justify-content:space-between">3Ti.Site · Pensando sem Fronteiras<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, um gerador de sites estáticos, pode traduzir automaticamente o Markdown para [mais de cem idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Algumas pessoas podem perguntar, como todos os navegadores possuem funções de tradução, é desnecessário internacionalizar o site?

Gostaria de dizer que **apenas sites que geram traduções estáticas podem oferecer suporte à pesquisa multilíngue de texto completo no site e à otimização de mecanismos de pesquisa** .

## Introdução

Bíblia · Gênesis :

> Nos tempos antigos, quando as línguas eram uma só, a humanidade construiu uma torre que chegava aos céus, um portal para o domínio de Deus, proclamando o poder da humanidade.
>
> Deus declarou: "Os homens se unem como uma tribo, com uma língua compartilhada, e esta torre é apenas um prólogo. Agora eles realizam seu desejo e não haverá mais medo."
>
> Assim, Deus desceu, espalhando as pessoas em diferentes cantos, usando diferentes línguas.
>
> A partir daí, a comunicação humana tornou-se desafiadora, as disputas intermináveis ​​e não houve mais uma torre que tocasse o céu.

O romance de ficção científica &quot;Três Corpos&quot; (pronúncia chinesa: `3Ti` ) ficcionaliza uma civilização alienígena que se comunica por meio de ondas eletromagnéticas, não tem barreiras linguísticas e é tecnologicamente próspera.

Espero criar uma ferramenta que permita que as pessoas da Terra sejam como pessoas de três corpos, comuniquem-se sem estarem limitadas pela linguagem e unam novamente toda a humanidade.

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

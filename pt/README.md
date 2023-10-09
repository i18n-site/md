# I18N.SITE · Idioma Sem Fronteiras<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, um gerador de sites estáticos multilíngues, pode traduzir automaticamente o Markdown para [mais de cem idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Algumas pessoas podem querer perguntar: agora que os navegadores possuem funções de tradução integradas, é desnecessário internacionalizar o site?

Quero dizer que **somente internacionalizando todo o site poderemos oferecer suporte à pesquisa de texto completo multilíngue no site e à otimização de mecanismos de pesquisa** .

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

# I18N.SITE · Documentos Sem Fronteiras<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, um gerador de sites estáticos que suporta tradução automática para [133 idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

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
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### Incorporação De Variável

```
test: 测试变量<br 0>嵌入
```

### Esvaziar O Cache

```bash
```bash
```bash
rm -rf .i18n/.cache
```

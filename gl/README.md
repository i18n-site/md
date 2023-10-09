# I18N.SITE · Lingua Sen Fronteiras<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, un xerador de sitios estáticos multilingüe, pode traducir automaticamente Markdown a [máis de cen idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Algunhas persoas poden querer preguntar, agora que os navegadores teñen funcións de tradución integradas, é innecesario internacionalizar o sitio web?

Quero dicir que **só internacionalizando todo o sitio podemos admitir a busca de texto completo multilingüe e a optimización de motores de busca no sitio** .

## Titoría

## Introdución Á Función

### Manter O Formato Markdown

### Modificar A Tradución

Despois de modificar a tradución, cómpre volver executar `./i18n.sh` para actualizar a caché.

### Notas De Tradución

Os comentarios de tradución deben indicar o idioma despois de \```, como ` ```rust` .

Actualmente admite a tradución de comentarios para rust, c, cpp, java, js, coffee, python e bash.

Edita [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) para engadir compatibilidade de tradución para comentarios en máis idiomas.

### Configurar Proxy

Establecer as seguintes variables de ambiente permite que as chamadas da API de Google Translate pasen polo proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incorporación Variable

```
test: 测试变量<br 0>嵌入
```

### Baleirar A Caché

```bash
rm -rf .i18n/.cache
```

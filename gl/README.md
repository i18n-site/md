<h1 style="justify-content:space-between">3Ti.Site · Pensa sen fronteiras<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un xerador de sitios estáticos, pode traducir automaticamente Markdown a [máis de cen idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Algunhas persoas poden preguntar, xa que todos os navegadores teñen funcións de tradución, é innecesario internacionalizar o sitio web?

Gustaríame dicir que **só os sitios web que xeran traducións estáticas poden admitir a busca multilingüe de texto completo no sitio e a optimización dos motores de busca** .

## Introdución

Biblia · Xénese :

> Nos tempos antigos, cando as linguas eran unha soa, a humanidade construíu unha torre que chegaba ata o ceo, un portal ao dominio de Deus, proclamando o poder da humanidade.
>
> Deus declarou: "Os homes únense como unha soa tribo, cunha lingua compartida, e esta torre non é máis que un prólogo. Agora conseguen o seu desexo e xa non haberá máis medo".
>
> Así, Deus descendeu, espallando a xente a diferentes recunchos, usa diferentes linguas.
>
> A partir de entón, a comunicación humana tornouse desafiante, as disputas sen fin, e xa non había unha torre que tocara o ceo.

A novela de ciencia ficción &quot;Three-Body&quot; (pronuncia chinesa: `3Ti` ) ficciona unha civilización alieníxena que se comunica a través de ondas electromagnéticas, non ten barreiras lingüísticas e é tecnoloxicamente próspera.

Espero crear unha ferramenta que permita aos pobos da terra ser como persoas de tres corpos, comunicarse sen estar ligados pola linguaxe e unir de novo a toda a humanidade.

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

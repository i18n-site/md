# Recomendação do Editor

Cada pessoa tem seu editor de preferência; aqui compartilhamos nossas melhores práticas com `Markdown`.

Utilizamos [vscode](https://code.visualstudio.com/) para escrever `Markdown`, instalando também o plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para visualizar em tempo real enquanto escrevemos.

Como mostrado na figura abaixo, ao clicar com o botão direito no editor, é possível abrir a janela de pré-visualização.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Digitando `code xxx.md` no terminal, é possível abrir o arquivo `Markdown` com `vscode`.

Para o upload de imagens, utilizamos [PicList](https://github.com/Kuingsmile/PicList); não se esqueça de configurar o atalho de upload para carregar instantaneamente após capturar a tela.

Ele suporta a cópia automática do nome do arquivo no formato `Markdown` após o upload, o que é extremamente eficiente.

Além disso, pode-se consultar a configuração abaixo para modificar o arquivo e configurar o upload automático de arquivos para compressão em `avif`, reduzindo o tamanho das imagens.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```
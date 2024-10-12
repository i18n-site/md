# Recomendação do Editor

Cada pessoa tem seu editor de costume, aqui compartilhamos nossas melhores práticas com `Markdown`.

Nós utilizamos [vscode](https://code.visualstudio.com/) para escrever `Markdown`, ao mesmo tempo em que instalamos o plugin [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced), permitindo visualizar em tempo real enquanto escrevemos.

Como mostrado na figura abaixo, ao clicar com o botão direito no editor, é possível abrir a janela de pré-visualização.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Digitando `code xxx.md` no terminal, é possível chamar o `vscode` para abrir o arquivo `Markdown`.

Para upload de imagens, utilizamos [PicList](https://github.com/Kuingsmile/PicList); não se esqueça de configurar o atalho de upload, e após capturar a tela, faça o upload com um único clique.

Ele suporta a cópia automática do nome do arquivo no formato `Markdown` após o upload, o que é extremamente eficiente.

Além disso, você pode referir-se às configurações abaixo para modificar o arquivo e configurar o upload automático de arquivos para compressão em `avif`, reduzindo assim o tamanho das imagens.

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
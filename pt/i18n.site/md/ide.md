# Recomendação Do Editor

Todo mundo tem seu editor favorito. Aqui compartilhamos nossas `Markdown` melhores práticas.

Usamos [vscode](https://code.visualstudio.com/) para escrever `MarkDown` e instalar o plug-in [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para visualizar em tempo real enquanto escreve.

Conforme mostrado abaixo, clique com o botão direito no editor para abrir a janela de visualização.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

Digite `code xxx.md` na linha de comando para chamar `vscode` para abrir o arquivo `Markdown` .

Use [PicList](https://github.com/Kuingsmile/PicList) para fazer upload de fotos, lembre-se de definir a tecla de atalho de upload e carregue a captura de tela com um clique.

Ele suporta a cópia automática do nome do arquivo para o formato `Markdown` após o upload, o que melhora muito a eficiência.

Ao mesmo tempo, você pode consultar a configuração a seguir, modificar o arquivo e configurar o arquivo carregado para ser compactado automaticamente em `avif` para reduzir o tamanho da imagem.

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
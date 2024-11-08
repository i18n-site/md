# Implantação E on-Line

`i18n.site` adota uma arquitetura [de aplicativo de página única](https://developer.mozilla.org/docs/Glossary/SPA) , e a página de entrada do site e o conteúdo do site são implantados de forma independente.

Após executar a tradução acima, os diretórios `htm` e `v` serão gerados no diretório `md/out/dev` .

Aqui, `dev` significa que foi construído com base no arquivo de configuração `.i18n/htm/dev.yml` .

`dev` diretório :

O diretório `htm` é a página de entrada do site.

O diretório `v` contém conteúdo do site com números de versão.

A visualização local não se importa com o número da versão e copiará todos os arquivos para o diretório `out/dev/v/0.1.0` .

Para lançamento oficial, os arquivos alterados serão copiados para o diretório do novo número de versão.

## Especifique O Arquivo De Configuração Com `-c`

Diferentes arquivos de configuração criarão diretórios correspondentes no diretório `out` .

Por exemplo, `.i18n/htm/main.yml` criará o diretório `out/main` .

`dev.yml` e `main.yml` são as configurações padrão.

`dev` é a abreviatura de `development` , indicando o ambiente de desenvolvimento, usado para visualização local, e também é o arquivo de configuração padrão.
`ol` é a abreviatura de `online` , indicando o ambiente online, que é usado para lançamento oficial. É também o arquivo de configuração padrão ao usar os parâmetros de linha de comando `-n` a `npm` para lançamento.

Você também pode criar outros arquivos de configuração Use `--htm_conf` na linha de comando para especificar o nome do arquivo de configuração a ser usado:

por exemplo:
```
i18n.site --htm_conf dist --save
```

Aqui `--save` representa o número da versão do lançamento da atualização.

## <a rel=id href="#npm" id="npm"></a> Publique conteúdo em npmjs.com

Publicar conteúdo em [npmjs.com](//npmjs.com) é a solução padrão recomendada (consulte [Alta disponibilidade de front-end](/i18n.site/feature#ha) ).

### npm &

Instale `nodejs` , faça login com `npm login` .

Edite `md/.i18n/htm/main.yml` e altere o valor de [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` como seu próprio nome de pacote `npm` [npmjs.com](//npmjs.com) .

Então modifique `md/.i18n/htm/main.package.json`

Execute `i18n.site --npm` ou `i18n.site -n` no diretório `md` para traduzir e publicar.

Se você usa um ambiente de integração contínua para publicar, não há necessidade de instalar `nodejs` Basta copiar as permissões de login e publicação `~/.npmrc` para o ambiente.

Se você modificar o nome do pacote de `v:` em `main.yml` , **certifique-se de excluir `.i18n/v/main` primeiro** e depois publicá-lo.

#### Servidor Proxy Publicado Por npm

Se os usuários na China continental encontrarem problemas de rede e não conseguirem publicar pacotes `npm` , eles poderão definir a variável de ambiente `https_proxy` para configurar o servidor proxy.

Supondo que a porta do seu servidor proxy seja `7890` , você pode escrever:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Conteúdo Auto-Hospedado

Se você deseja auto-hospedar o conteúdo, primeiro edite `md/.i18n/htm/main.yml` e altere `v: //unpkg.com/i18n.site` para o seu prefixo de URL, como `v: //i18n-v.xxx.com` .

Entre no diretório `md` e execute

```
i18n.site --htm_conf ol --save
```

ou abreviatura

```
i18n.site -c ol -s
```

Em seguida, configure o conteúdo do diretório `md/out/main/v` para o caminho do prefixo de URL definido em `v:` .

Por fim, **configure o tempo de cache do caminho que termina em `/.v` a `1s`** , caso contrário o conteúdo recém-lançado não poderá ser acessado imediatamente.

O tempo de cache para outros caminhos pode ser definido para um ano ou mais para reduzir solicitações desnecessárias.

## Hospedar Conteúdo No s3

Para auto-hospedar conteúdo, além de usar seu próprio servidor, outra opção comum é usar `S3` `CDN` +

Você pode usar [rclone](https://rclone.org) para fazer login no servidor `S3` , consultar e modificar o script a seguir e copiar apenas as alterações incrementais para `S3` para cada versão.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Lembre-se de configurar `CDN` para que o tempo de cache do caminho que termina em `/.v` seja `1s` , caso contrário o conteúdo recém-lançado não poderá ser acessado imediatamente.

## Publicar Site

O site pode ser implantado em qualquer lugar [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) são boas escolhas.

Como o site usa uma arquitetura [de aplicativo de página única](https://developer.mozilla.org/docs/Glossary/SPA) , lembre-se de reescrever os caminhos de URL que não contenham `. ` a `index.html` .

A página de entrada do site só precisa ser implantada uma vez e não há necessidade de reimplantar a página de entrada do site para atualizações de conteúdo subsequentes.

### Implantar Na Página Do github

Primeiro [clique github para criar uma organização](https://github.com/account/organizations/new?plan=free) . O nome da organização a seguir é `i18n-demo` como exemplo.

Em seguida, crie o armazém `i18n-demo.github.io` nesta organização (substitua `i18n-demo` pelo nome da organização que você criou):

![](https://p.3ti.site/1721098657.avif)

Ao publicar o conteúdo do artigo anterior, `out/main/htm` foi gerado. Por favor, entre neste diretório e execute :

```
ln -s index.html 404.html
```


Como `github page` não oferece suporte à reescrita de caminho de URL, `404.html` é usado em seu lugar.

Em seguida, execute o seguinte comando no diretório `htm` (lembre-se de substituir `i18n-demo/i18n-demo.github.io.git` pelo seu próprio endereço de armazém) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Depois de enviar o código, aguarde até que a implantação de `github page` seja executada com êxito (conforme mostrado abaixo) antes de poder acessá-lo.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para página de demonstração, consulte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Implantar Na Página cloudflare

[cloudflare page](//pages.cloudflare.com) Comparado com `github page` , fornece reescrita de caminho e é mais amigável para a China continental e é mais acessível.

A implantação de `cloudflare page` geralmente é baseada na implantação de `github page` acima.

Crie um projeto e vincule o armazém `i18n-demo.github.io` acima.

O processo é mostrado na figura abaixo:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Clique em `Add Account` para conceder acesso à organização `i18n-demo` .

Se você vinculou o armazém de outra organização, talvez seja necessário clicar duas vezes em `Add Account` para autorizar duas vezes antes que a nova organização seja exibida.

![](https://p.3ti.site/1721118306.avif)

Em seguida, selecione warehouse `i18n-demo.github.io` , clique em `Begin setup` e use os valores padrão para as etapas subsequentes.

![](https://p.3ti.site/1721118490.avif)

Após vincular pela primeira vez, você precisa aguardar alguns minutos antes de poder acessá-lo.

Após a implantação, você pode vincular um nome de domínio personalizado.

![](https://p.3ti.site/1721119459.avif)

Após vincular o nome de domínio personalizado, acesse o nome de domínio para configurar a reescrita do caminho do aplicativo de página única, conforme mostrado abaixo:

![](https://p.3ti.site/1721119320.avif)

As regras na imagem acima são as seguintes. Substitua `i18n.site` na primeira linha abaixo pelo nome de domínio que você vinculou.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Além disso, configure as regras de cache conforme mostrado abaixo e defina a duração do cache para um mês.

![](https://p.3ti.site/1721125111.avif)

Altere a correspondência do nome de domínio na segunda etapa da imagem acima para o nome de domínio que você vinculou.

### Otimizando a Implantação De Sites Na China Continental

Se você deseja obter um melhor desempenho de acessibilidade no ambiente de rede da China continental, [registre primeiro um nome de domínio](//beian.aliyun.com) .

Em seguida, use o armazenamento de objetos dos fornecedores de nuvem na China continental `CDN` Implante o seguinte conteúdo `out/main/htm` +

Você pode usar a computação de ponta para reescrever o caminho para se adaptar a aplicativos de página única. Por exemplo, [o Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) pode ser configurado assim:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Os cabeçalhos de resposta podem ser configurados para saída de depuração, como out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Como o registro `MX` e o registro `CNAME` não podem coexistir, se você quiser receber e-mails de nomes de domínio ao mesmo tempo, precisará [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) com o script do nível `CNAME` no registro `A` .

Além disso, como as taxas de tráfego estrangeiro dos fornecedores de nuvem na China continental são relativamente caras, se você quiser otimizar custos, você pode usar [DNS resolução geográfica gratuita da Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) e o nome de domínio personalizado [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (conforme mostrado abaixo) para alcançar! desvio de tráfego──Roteamento de tráfego na China continental Baidu Cloud `CDN` , o tráfego internacional vai para cloudflare .

![](https://p.3ti.site/1721119788.avif)

Essas soluções de otimização de implantação são mais complexas e serão apresentadas em capítulos separados no futuro.

### Redirecionamento De Nome De Domínio Genérico

Se você usar `i18n.site` para gerar um site como seu site principal, geralmente precisará configurar o redirecionamento pan-domínio, ou seja, redirecionar o acesso de `*.xxx.com` (incluindo `www.xxx.com` ) para `xxx.com` .

Este requisito pode ser alcançado com a ajuda do Alibaba Cloud `CDN` `EdgeScript` ( [documento em inglês](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documento chinês](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Adicione o nome de domínio no [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) e aponte o nome de domínio de `*.xxx.com` `CNAME` no Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Por exemplo, a configuração de redirecionamento de nome de domínio pan de `*.i18n.site` na imagem acima é a seguinte:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Implantar Com nginx

Adicione uma configuração semelhante à seguinte no parágrafo `server` de nginx Por favor, altere `/root/i18n/md/out/main/htm` para o caminho do seu próprio projeto `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Baseado Em `github action` Integração Contínua

Você pode consultar o seguinte para configurar seu `github action` :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Como pode ser visto na configuração, este fluxo de trabalho é acionado ao enviar para a filial `main` e filial `dist` .

O fluxo de trabalho usará o arquivo de configuração correspondente ao nome da filial para publicar o documento. Aqui, `.i18n/htm/main.yml` e `.i18n/htm/dist.yml` serão usados como configuração de publicação, respectivamente.

Recomendamos as seguintes práticas recomendadas para o processo de liberação de documentos:

Quando as alterações são enviadas para a ramificação `main` , o documento é acionado para ser construído e implantado na estação de visualização (a estação de visualização está disponível [github page](//pages.github.com) ).

Depois de confirmar que o documento está correto no site de visualização, o código será mesclado e enviado para a ramificação `dist` , e a construção e implantação oficiais ficarão online.

É claro que a implementação do processo acima requer a gravação de mais configurações.

Você pode consultar o projeto real para scripts de fluxo de [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) .

`secrets.I18N_SITE_TOKEN` e `secrets.NPM_TOKEN` na configuração exigem que você configure variáveis secretas na base de código.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` é o token de publicação do pacote `npm` na configuração. [npmjs.com](//npmjs.com) e crie um token com permissões de publicação (conforme mostrado abaixo).

![](//p.3ti.site/1730969906.avif)


## Estrutura De Diretório

### `public`

Arquivos estáticos do site, como `favicon.ico` , `robots.txt` , etc.

Os arquivos de ícone aqui podem ser gerados com [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

No diretório `.i18n` estão os arquivos de configuração, cache de tradução, etc. de `i18n.site` Consulte o próximo capítulo ["Configuração"](/i18n.site/conf) para obter detalhes.

### `en`

Diretório do idioma de origem, correspondente a `en` de `fromTo` em `.i18n/conf.yml` arquivo de configuração

```yaml
i18n:
  fromTo:
    en: zh
```

Consulte a configuração da tradução [i18](/i18/use)
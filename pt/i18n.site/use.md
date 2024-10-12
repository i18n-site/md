# Instalar &

## Configuração do Token

`i18n.site` possui uma ferramenta de tradução integrada `i18` [Clique aqui para consultar o documento `i18` para configurar o token de acesso](/i18/use) .

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projeto de Demonstração

Vamos começar com um projeto de demonstração para aprender como usar `i18n.site` .

Primeiro clonamos o repositório de demonstração e executamos o comando da seguinte forma:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Os usuários na China continental podem:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

O nome do diretório do clone da base de código `demo.i18n.site` deve ser `md` para facilitar a visualização local com `docker` .

### Tradução

Primeiro, entre no diretório `md` e execute `i18n.site` , que traduzirá `en` para `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Após a execução, os arquivos de tradução e cache serão gerados. Lembre-se de adicioná-los ao repositório com `git add . ` em `md` .

### Visualização Local

Instale e inicie `docker` (usuários de `MAC` recomendam usar [orbstack](https://orbstack.dev) como runtime para `docker` ).

Em seguida, entre no diretório `docker` e execute `./up.sh` e acesse [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publicar Conteúdo

`i18n.site` adota uma arquitetura [de aplicativo de página única](https://developer.mozilla.org/docs/Glossary/SPA) , e a página de entrada do site e o conteúdo do site são implantados de forma independente.

Após executar a tradução acima, os diretórios `htm` e `v` serão gerados no diretório `md/out/dev` .

Aqui, `dev` significa que foi construído com base no arquivo de configuração `.i18n/htm/dev.yml` .

No diretório `dev` :

O diretório `htm` é a página de entrada do site.

O diretório `v` contém conteúdo do site com números de versão.

A visualização local não se importa com o número da versão e copiará todos os arquivos para o diretório `out/dev/v/0.1.0` .

Para lançamento oficial, os arquivos alterados serão copiados para o diretório do novo número de versão.

#### Use -c Para Especificar O Arquivo De Configuração

Diferentes arquivos de configuração criarão diretórios correspondentes no diretório `out` .

Por exemplo, `.i18n/htm/ol.yml` criará o diretório `out/ol` .

`dev.yml` e `ol.yml` são as configurações padrão.

`dev` é a abreviatura de `development` , indicando o ambiente de desenvolvimento, usado para visualização local, e também é o arquivo de configuração padrão.
`ol` é a abreviatura de `online` , indicando o ambiente online, que é usado para lançamento oficial. É também o arquivo de configuração padrão ao usar os parâmetros de linha de comando `-n` a `npm` para lançamento.

Você também pode criar outros arquivos de configuração. Use `--htm_conf` na linha de comando para especificar o nome do arquivo de configuração a ser usado:

por exemplo:
```
i18n.site --htm_conf yourConfig --save
```

Aqui `--save` representa o número da versão do lançamento da atualização.

#### <a rel=id href="#npm" id="npm"></a> Publicar conteúdo no npmjs.com

Publicar conteúdo em [npmjs.com](//npmjs.com) é a solução padrão recomendada (ver [Alta disponibilidade de front-end](/i18n.site/feature#ha) ).

##### npm login & Publicar

Instale `nodejs` , faça login com `npm login` .

Edite `md/.i18n/htm/ol.yml` e altere `i18n.site` em `v: //unpkg.com/i18n.site` para o seu próprio nome de pacote `npm` .

Basta usar o nome do pacote desocupado em [npmjs.com](//npmjs.com) . Usar o nome de domínio do site como nome do pacote é uma boa escolha.

Ao publicar com base no pacote `npm` , **certifique-se de usar `//unpkg.com/`** para o prefixo de `v:` valor `i18n.site` que otimizou especialmente o tempo de cache de `/.v` sob este caminho de prefixo para obter a visualização oportuna de novos lançamentos.

Execute `i18n.site --npm` ou `i18n.site -n` no diretório `md` para traduzir e publicar.

Se você usar um ambiente de integração contínua para publicar, não há necessidade de instalar `nodejs` . Basta copiar as permissões de login e publicação `~/.npmrc` para o ambiente.

Se você modificar o nome do pacote de `v:` em `ol.yml` , **certifique-se de excluir `.i18n/v/ol` primeiro** e depois publicá-lo.

##### Servidor Proxy de Publicação do npm

Se os usuários na China continental encontrarem problemas de rede e não conseguirem publicar pacotes `npm` , eles poderão definir a variável de ambiente `https_proxy` para configurar o servidor proxy.

Supondo que a porta do seu servidor proxy seja `7890` , você pode escrever:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Conteúdo Auto-Hospedado

Se você deseja auto-hospedar o conteúdo, primeiro edite `md/.i18n/htm/ol.yml` e altere `v: //unpkg.com/i18n.site` para o seu prefixo de URL, como `v: //i18n-v.xxx.com` .

Entre no diretório `md` e execute

```
i18n.site --htm_conf ol --save
```

ou abreviatura

```
i18n.site -c ol -s
```

Em seguida, configure o conteúdo do diretório `md/out/ol/v` para o caminho do prefixo de URL definido em `v:` .

Por fim, **configure o tempo de cache do caminho que termina em `/.v` a `1s`** , caso contrário o conteúdo recém-lançado não poderá ser acessado imediatamente.

O tempo de cache para outros caminhos pode ser definido para um ano ou mais para reduzir solicitações desnecessárias.

##### Hospedar Conteúdo no S3

Para auto-hospedar conteúdo, além de usar seu próprio servidor, outra opção comum é usar `S3` + `CDN`.

Você pode usar [rclone](https://rclone.org) para fazer login no servidor `S3` , consultar e modificar o script a seguir e copiar apenas as alterações incrementais para `S3` para cada versão.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Lembre-se de configurar `CDN` para que o tempo de cache do caminho que termina em `/.v` seja `1s` , caso contrário o conteúdo recém-lançado não poderá ser acessado imediatamente.

### Publicar Site

O site pode ser implantado em qualquer lugar [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) são boas escolhas.

Como o site usa uma arquitetura [de aplicativo de página única](https://developer.mozilla.org/docs/Glossary/SPA) , lembre-se de reescrever os caminhos de URL que não contenham `. ` a `index.html` .

A página de entrada do site só precisa ser implantada uma vez e não há necessidade de reimplantar a página de entrada do site para atualizações de conteúdo subsequentes.

#### Implantar no GitHub Page

Primeiro [clique no GitHub para criar uma organização](https://github.com/account/organizations/new?plan=free) . O nome da organização a seguir é `i18n-demo` como exemplo.

Em seguida, crie o repositório `i18n-demo.github.io` nesta organização (substitua `i18n-demo` pelo nome da organização que você criou):

![](https://p.3ti.site/1721098657.avif)

Ao publicar o conteúdo do artigo anterior, `out/ol/htm` foi gerado. Por favor, entre neste diretório e execute :

```
ln -s index.html 404.html
```


Como `github page` não oferece suporte à reescrita de caminho de URL, `404.html` é usado em seu lugar.

Em seguida, execute o seguinte comando no diretório `htm` (lembre-se de substituir `i18n-demo/i18n-demo.github.io.git` pelo seu próprio endereço de repositório) :

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

#### Implantar no Cloudflare Page

[cloudflare page](//pages.cloudflare.com) Comparado com `github page` , fornece reescrita de caminho e é mais amigável para a China continental e é mais acessível.

A implantação de `cloudflare page` geralmente é baseada na implantação de `github page` acima.

Crie um projeto e vincule o repositório `i18n-demo.github.io` acima.

O processo é mostrado na figura abaixo:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Clique em `Add Account` para conceder acesso à organização `i18n-demo` .

Se você vinculou o repositório de outra organização, talvez seja necessário clicar duas vezes em `Add Account` para autorizar duas vezes antes que a nova organização seja exibida.

![](https://p.3ti.site/1721118306.avif)

Em seguida, selecione o repositório `i18n-demo.github.io` , clique em `Begin setup` e use os valores padrão para as etapas subsequentes.

![](https://p.3ti.site/1721118490.avif)

Após vincular pela primeira vez, você precisa aguardar alguns minutos antes de poder acessá-lo.

Após a implantação, você pode vincular um domínio personalizado.

![](https://p.3ti.site/1721119459.avif)

Após vincular o domínio personalizado, acesse o domínio para configurar a reescrita do caminho do aplicativo de página única, conforme mostrado abaixo:

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

#### Otimizando a Implantação de Sites na China Continental

Se você deseja obter um melhor desempenho de acessibilidade no ambiente de rede da China continental, [registre primeiro um nome de domínio](//beian.aliyun.com) .

Em seguida, use o armazenamento de objetos dos fornecedores de nuvem na China continental `CDN` para implantar o conteúdo `out/ol/htm` .

Você pode usar a computação de ponta para reescrever o caminho para se adaptar a aplicativos de página única. Por exemplo, [o Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) pode ser configurado assim:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
![](https://p.3ti.site/1721121273.avif)

Como o registro `MX` e o registro `CNAME` não podem coexistir, se você quiser receber e-mails de nomes de domínio ao mesmo tempo, precisará cooperar com o script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) para o nível `CNAME` no registro `A` .

Além disso, como as taxas de tráfego estrangeiro dos fornecedores de nuvem na China continental são relativamente caras, se você quiser otimizar custos, você pode usar [DNS resolução geográfica gratuita da Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) e o nome de domínio personalizado [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (conforme mostrado abaixo) para alcançar! desvio de tráfego ── Roteamento de tráfego na China continental Baidu Cloud `CDN` , o tráfego internacional vai para cloudflare .

![](https://p.3ti.site/1721119788.avif)

Essas soluções de otimização de implantação são mais complexas e serão apresentadas em capítulos separados no futuro.

#### Redirecionamento de Nome de Domínio Genérico

Se você usar `i18n.site` para gerar um site como seu site principal, geralmente precisará configurar o redirecionamento pan-domínio, ou seja, redirecionar o acesso de `*.xxx.com` (incluindo `www.xxx.com` ) para `xxx.com` .

Este requisito pode ser alcançado com a ajuda do Alibaba Cloud `CDN` `EdgeScript` ( [documento em inglês](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documento chinês](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Adicione um nome de domínio no [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) e aponte o nome de domínio de `*.xxx.com` `CNAME` no Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Por exemplo, a configuração de redirecionamento de nome de domínio pan de `*.i18n.site` na imagem acima é a seguinte:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Implantar com nginx

Adicione uma configuração semelhante à seguinte no parágrafo `server` do nginx. Por favor, altere `/root/i18n/md/out/ol/htm` para o caminho do seu próprio projeto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Estrutura de Diretório

#### `public`

Arquivos estáticos do site, como `favicon.ico` , `robots.txt` , etc.

Os arquivos de ícone aqui podem ser gerados com [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

No diretório `.i18n` estão os arquivos de configuração, cache de tradução, etc. do `i18n.site` . Consulte o próximo capítulo ["Configuração"](/i18n.site/conf) para obter detalhes.

#### `en`

Diretório do idioma de origem, correspondente a `en` de `fromTo` no arquivo de configuração `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Consulte a configuração da tradução [i18](/i18/use)
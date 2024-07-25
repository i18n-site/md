# Instalar &

## Token De Configuração

`i18n.site` A ferramenta de tradução `i18` está incorporada, [clique aqui para consultar o documento `i18` para configurar o token de acesso](/i18/use) .

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projeto De Demonstração

Vamos começar com um projeto de demonstração e aprender como usar `i18n.site` .

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

`demo.i18n.site` O nome do diretório do clone da base de código deve ser `md` para facilitar a visualização local com `docker` .

### Traduzir

Primeiro, entre no diretório `md` e execute `i18n.site` , que traduzirá `en` para `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Após a execução, os arquivos de tradução e cache serão gerados. Lembre-se de adicioná-los ao repositório `git add . ` no diretório `md`

### Visualização Local

Instale e inicie `docker` ( `MAC` recomendam usar [orbstack](https://orbstack.dev) como tempo de execução de `docker` ).

Em seguida, entre no diretório `docker` e execute `./up.sh` e visite [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publicar Conteúdo

`i18n.site` Adota uma arquitetura [de aplicativo de página única](https://developer.mozilla.org/docs/Glossary/SPA) , e a página de entrada do site e o conteúdo do site são implantados de forma independente.

Após executar a tradução acima, os diretórios `htm` e `v` serão gerados no diretório `md/out/dev`

Aqui, `dev` indica que ele foi construído com base no arquivo `.i18n/htm/dev.yml` .

`dev` Em conteúdo :

`htm` Abaixo do diretório está a página de entrada do site.

`v` O diretório contém o conteúdo do site com o número da versão.

A visualização local copiará todos os arquivos para o diretório `out/dev/v/0.1.0`

Para lançamento oficial, os arquivos alterados serão copiados para o diretório do novo número de versão.

#### Use -c Para Especificar O Arquivo De Configuração

Diferentes arquivos de configuração criarão diretórios correspondentes no diretório `out`

Por exemplo, `.i18n/htm/ol.yml` criará um diretório `out/ol` .

`dev.yml` e `ol.yml` são as configurações padrão.

`dev` é a abreviatura de `development` , que representa o ambiente de desenvolvimento, é usado para visualização local e também é o arquivo de configuração padrão.
`ol` é a abreviatura de `online` , que representa o ambiente online, é usado para lançamento oficial e também é o arquivo de configuração padrão ao publicar em `npm` usando o parâmetro de linha de comando `-n` .

Você também pode criar outros arquivos de configuração Use `--htm_conf` na linha de comando para especificar o nome do arquivo de configuração:

por exemplo:
```
i18n.site --htm_conf yourConfig --save
```

Aqui `--save` indica o número da versão do lançamento da atualização.

#### <a rel=id href="#npm" id="npm"></a> Publique conteúdo em npmjs.com

Publicar conteúdo em [npmjs.com](//npmjs.com) é a solução padrão recomendada (consulte [Alta disponibilidade de front-end](/i18n.site/feature#ha) ).

##### npm login & Liberar

Instale `nodejs` use `npm login` para fazer login.

Edite `md/.i18n/htm/ol.yml` altere `i18n.site` em `v: //unpkg.com/i18n.site` para o seu próprio `npm` nome do pacote.

Basta usar o nome do pacote desocupado em [npmjs.com](//npmjs.com) Usar o nome de domínio do site como nome do pacote é uma boa escolha.

Ao publicar com base no pacote `npm` , **certifique-se de usar `//unpkg.com/`** como prefixo do valor `v:` . O tempo de cache `i18n.site` sob este caminho de prefixo `/.v` foi especialmente otimizado para permitir a visualização oportuna de novos lançamentos.

Execute `i18n.site --npm` ou `i18n.site -n` no diretório `md`

Se você usa um ambiente de integração contínua para publicar, não há necessidade de instalá-lo `nodejs` Basta copiar o `~/.npmrc` de permissão logado e publicado para o ambiente!

Se você modificar o nome do pacote em `v:` `ol.yml` , **certifique-se de excluir `.i18n/v/ol` primeiro** e depois publicá-lo.

##### Servidor Proxy Publicado Por npm

Se os usuários na China continental encontrarem problemas de rede e não conseguirem publicar o pacote `npm` , eles poderão definir a variável de ambiente `https_proxy` para configurar o servidor proxy.

Supondo que a porta do seu servidor proxy seja `7890` você pode escrever:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Conteúdo Auto-Hospedado

Se você deseja auto-hospedar o conteúdo, primeiro edite `md/.i18n/htm/ol.yml` e altere `v: //unpkg.com/i18n.site` para o seu prefixo de URL, como `v: //i18n-v.xxx.com` .

Entre no diretório `md`

```
i18n.site --htm_conf ol --save
```

ou abreviatura

```
i18n.site -c ol -s
```

Em seguida, configure o conteúdo no diretório `md/out/ol/v` para o caminho do prefixo de URL definido em `v:` .

Por fim, **configure o tempo de cache do caminho que termina em `/.v` para `1s`** , caso contrário o conteúdo recém-lançado não poderá ser acessado imediatamente.

O tempo de cache para outros caminhos pode ser definido para um ano ou mais para reduzir solicitações desnecessárias.

##### Hospedar Conteúdo No s3

Para auto-hospedar conteúdo, além de usar seu próprio `CDN` , outra opção comum é + `S3`

Você pode usar o servidor [rclone](https://rclone.org) Login `S3` , consultar e modificar o script abaixo e copiar apenas as alterações incrementais para `S3` cada vez que publicar.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Lembre-se de configurar `CDN` para que o tempo de cache do caminho que termina em `/.v` seja `1s` , caso contrário você não conseguirá acessar imediatamente o conteúdo recém-lançado.

### Publicar Site

O site pode ser implantado em qualquer [github page](https://pages.github.com) e [cloudflare page](https://pages.cloudflare.com) são boas escolhas.

Como o site adota a arquitetura de [um aplicativo de página única](https://developer.mozilla.org/docs/Glossary/SPA) , lembre-se de reescrever o caminho da URL que não contém para `index.html` `. `

A página de entrada do site só precisa ser implantada uma vez e não há necessidade de reimplantar a página de entrada do site para atualizações de conteúdo subsequentes.

#### Implantar Na Página Do github

Primeiro [clique github para criar uma organização](https://github.com/account/organizations/new?plan=free) . O nome da organização a seguir é `i18n-demo`

Em seguida, crie um armazém nesta `i18n-demo.github.io` (substitua `i18n-demo` pelo nome da organização que você criou):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ao publicar o conteúdo do artigo anterior, ele foi gerado `out/ol/htm` Por favor, entre neste diretório e execute :

```
ln -s index.html 404.html
```


Como `github page` não suporta reescrita de caminho de URL, `404.html` é usado.

Em seguida, execute o seguinte comando no diretório `htm` (lembre-se de substituir `i18n-demo/i18n-demo.github.io.git` pelo seu próprio endereço de armazém) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Depois de enviar o código, espere que a implantação de `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Para página de demonstração, consulte:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implantar Na Página cloudflare

[cloudflare page](//pages.cloudflare.com) Comparado com `github page` , ele fornece reescrita de caminho e é mais amigável para a China continental e é mais acessível.

`cloudflare page` A implantação geralmente é baseada na implantação de `github page` acima.

Crie um projeto e vincule o armazém acima `i18n-demo.github.io`

O processo é mostrado na figura abaixo:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Clique em `Add Account` para conceder acesso à `i18n-demo` .

Se você vinculou o armazém de outra organização, pode ser necessário clicar duas vezes em `Add Account` para autorizá-lo antes que a nova organização seja exibida.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Em seguida, selecione `i18n-demo.github.io` Warehouse, clique em `Begin setup` e use os valores padrão para as etapas subsequentes.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Após vincular pela primeira vez, você precisa aguardar alguns minutos antes de poder acessá-lo.

Após a implantação, você pode vincular um nome de domínio personalizado.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Após vincular o nome de domínio personalizado, acesse o nome de domínio para configurar a reescrita do caminho do aplicativo de página única, conforme mostrado abaixo:

<img alt="" src="https://p.3ti.site/1721119320.avif">

As regras na imagem acima são as seguintes. Substitua `i18n.site` na primeira linha abaixo pelo nome de domínio vinculado a você.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Além disso, configure as regras de cache conforme mostrado abaixo e defina a duração do cache para um mês.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Altere o nome de domínio correspondente na segunda etapa da imagem acima para o nome de domínio que você vinculou.

#### Otimizando a Implantação De Sites Na China Continental

Se você deseja obter um melhor desempenho de acessibilidade no ambiente de rede da China continental, [registre primeiro um nome de domínio](//beian.aliyun.com) .

`out/ol/htm` seguida, use o armazenamento `CDN` objetos dos fornecedores de nuvem na China continental +

Você pode usar a computação de ponta para reescrever o caminho para se adaptar a aplicativos de página única, como [o Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Ele pode ser configurado assim:

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

Como os registros `MX` e os registros `CNAME` não podem coexistir, se você `CNAME` receber e-mails de nomes de domínio ao mesmo tempo, precisará cooperar com o `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Além disso, como as taxas de tráfego estrangeiro dos fornecedores de nuvem na China continental são relativamente caras, se você quiser otimizar custos, você pode usar [a resolução geográfica gratuita da Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) e o nome de domínio personalizado [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (conforme mostrado abaixo) para alcançar! desvio de tráfego──Tráfego na China continental Baidu Cloud `CDN` O tráfego internacional vai para cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Essas soluções de otimização de implantação são mais complexas e serão apresentadas em capítulos separados no futuro.

#### Redirecionamento De Nome De Domínio Genérico

Se você usar `i18n.site` para gerar um site como seu site principal, geralmente precisará configurar o redirecionamento pan-domínio, ou seja, redirecionar `*.xxx.com` (incluindo `www.xxx.com` ) o acesso para `xxx.com` .

Este requisito pode ser alcançado com a ajuda do `EdgeScript` ( [documento em inglês](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documento chinês](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) do Alibaba Cloud `CDN`

Adicione um nome de domínio no [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) e aponte `*.xxx.com` nome de domínio para `CNAME` do Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Por exemplo, a configuração de redirecionamento de `*.i18n.site` de domínio pan na imagem acima é a seguinte:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Implantar Com nginx

Por favor, adicione uma configuração semelhante à seguinte no `server` nginx onde `/root/i18n/md/out/ol/htm` altere-a para o caminho do seu próprio projeto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Estrutura De Diretório

#### Público

Arquivos estáticos do site, como `favicon.ico` `robots.txt` , etc.

Os arquivos de ícone aqui podem ser gerados com [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` No diretório estão os arquivos de configuração `i18n.site` , cache de tradução, etc. Veja o próximo capítulo ["Configuração"](/i18n.site/conf) para detalhes.

#### Pt

Diretório do idioma de origem, correspondente `.i18n/conf.yml` `fromTo` `en` no arquivo de configuração

```yaml
i18n:
  fromTo:
    en: zh
```

Consulte a configuração da tradução [i18](/i18/use)


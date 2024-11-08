# Instalar &

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token De Configuração

`i18n.site` possui uma ferramenta de tradução integrada `i18` [Clique aqui para consultar o documento `i18` para configurar o token de acesso](/i18/use) .

## Projeto De Demonstração

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

O nome do diretório do clone base de código `demo.i18n.site` deve ser `md` para facilitar a visualização local com `docker` .

### Traduzir

Primeiro, entre no diretório `md` e execute `i18n.site` , que traduzirá `en` para `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Após a execução, os arquivos de tradução e cache serão gerados. Lembre-se de adicioná-los ao repositório no `git add . ` `md` .

### Visualização Local

Instale e inicie `docker` ( `MAC` usuário recomenda usar [orbstack](https://orbstack.dev) como tempo de execução para `docker` ).

Em seguida, entre no diretório `docker` e execute `./up.sh` e visite [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
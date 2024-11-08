# I-Install &

## I-Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Ng Configuration

`i18n.site` ay may built-in na `i18` translation tool Mangyaring [mag-click dito upang sumangguni sa `i18` dokumento upang i-configure ang access token](/i18/use) .

## Demo Na Proyekto

Magsimula tayo sa isang demo project para matutunan kung paano gamitin `i18n.site` .

I-clone muna namin ang demo repository at patakbuhin ang command tulad ng sumusunod:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ang mga gumagamit sa mainland China ay maaaring:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ang pangalan ng direktoryo ng `demo.i18n.site` code base clone ay dapat na `md` upang mapadali ang lokal na preview na may `docker` .

### Isalin

Una, ipasok ang `md` na direktoryo at patakbuhin `i18n.site` , na isasalin ang `en` hanggang `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Pagkatapos tumakbo, bubuo ng mga file ng pagsasalin at cache Mangyaring tandaan na idagdag ang mga ito sa repositoryo sa `md` `git add . ` .

### Lokal Na Preview

I-install at simulan `docker` ( `MAC` user ang nagrerekomenda na gamitin ang [orbstack](https://orbstack.dev) bilang runtime para sa `docker` ).

Pagkatapos, ipasok ang `docker` na direktoryo at patakbuhin `./up.sh` , at pagkatapos ay bisitahin ang [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
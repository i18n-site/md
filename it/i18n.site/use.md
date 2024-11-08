# Installa & Anteprima

## Installare

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Di Configurazione

`i18n.site` ha uno strumento di traduzione integrato `i18` Fare [clic qui per fare riferimento al documento `i18` per configurare il token di accesso](/i18/use) .

## Progetto Dimostrativo

Iniziamo con un progetto demo per imparare a utilizzare `i18n.site` .

Per prima cosa cloniamo il repository demo ed eseguiamo il comando come segue:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gli utenti nella Cina continentale possono:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Il nome della directory del clone della base di codice `demo.i18n.site` deve essere `md` per facilitare l'anteprima locale con `docker` .

### Tradurre

Innanzitutto, inserisci la directory `md` ed esegui `i18n.site` , che tradurrà `en` in `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Dopo l'esecuzione, verranno generati i file di traduzione e di cache. Ricordati di aggiungerli al repository nella `git add . ` `md` .

### Anteprima Locale

Installa e avvia `docker` ( `MAC` utente consiglia di utilizzare [orbstack](https://orbstack.dev) come runtime per `docker` ).

Quindi, inserisci la directory `docker` ed esegui `./up.sh` , quindi visita [https://127.0.0.1](https://127.0.0.1) per visualizzare l'anteprima localmente.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
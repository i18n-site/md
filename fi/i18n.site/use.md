# Asenna &

## Asentaa

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Määritystunnus

`i18n.site` ssa on sisäänrakennettu `i18` käännöstyökalu. [Napsauta tästä nähdäksesi `i18` asiakirjan käyttötunnuksen määrittämiseksi](/i18/use) .

## Demo Projekti

Aloitetaan esittelyprojektilla, jossa opitaan käyttämään `i18n.site` .

Kloonamme ensin esittelyvaraston ja suoritamme komennon seuraavasti:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Manner-Kiinan käyttäjät voivat:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` koodin peruskloonin hakemistonimen on oltava `md` paikallisen esikatselun helpottamiseksi koodilla `docker` .

### Kääntää

Syötä ensin `md` -hakemisto ja suorita `i18n.site` , joka kääntää `en` sta `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Suorituksen jälkeen luodaan käännös- ja välimuistitiedostot. Muista lisätä ne arkistoon `md` `git add . ` .

### Paikallinen Esikatselu

Asenna ja aloita `docker` ( `MAC` käyttäjä suosittelee [orbstack](https://orbstack.dev) n käyttöä `docker` :n suoritusaikana).

Syötä sitten `docker` -hakemisto ja suorita `./up.sh` ja esikatsele sitten paikallisesti osoitteessa [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">
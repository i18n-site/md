# Alusta palvelin (käytä BTRFS-osiot, Snapper ajastettuja tilannekuvia)

## Osta palvelin Contabosta

Contabo on Saksan halpa VPS-palveluntarjoaja, jolla on pitkä historia (yli 20 vuotta) ja paljon käyttäjiä (yli 200 000), joten sinun ei tarvitse huolehtia yrityksen katoamisesta.

Osta VPS [contabo.com](//contabo.com) ja muista valita eurohinnoittelu, joka on halvempi.

![](https://i-01.eu.org/1718285782.avif)

Contabosta peritään kertaluonteinen asennusmaksu.
Joka kuukausi on kuitenkin muutamia päiviä, jolloin asennusmaksu on ilmaista. Rekisteröidy ja kiinnitä huomiota mainossähköpostiin.

Ilmaisen aluemaksun lisäksi Euroopassa muilla alueilla on eritasoisia hinnankorotuksia.

Valitsin eurooppalaisen palvelimen. Joka tapauksessa cloudflaren käytön jälkeen palvelimien välillä ei ole paljon eroa.

Lopullinen kokoonpano on seuraava, 16 Gt muistia, 6 CPU, 200 Gt NVMe, 9,50 euroa kuukaudessa, mikä vastaa 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Tämä hinta on lähes kymmenesosa Alibaba Cloudin ja Amazonin hinnasta**.

![](https://i-01.eu.org/1718356956.avif)

Käytin [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) suorituskyvyn ja parametrien testaamiseen:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Näytetään CPU-malli `AMD EPYC 9224 24-Core Processor`, yhden ytimen suorituskykypisteet 1285
, moniytiminen pisteet 4277. Lisätuloksia [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ostin kolme palvelinta kerralla ja aktivoitin ne samaan aikaan. Tämä varmistaa, että palvelimet ovat samassa tietokonehuoneessa, mikä helpottaa korkean käytettävyyden rakentamista tulevaisuudessa.

Sen palvelimet katkaisevat toisinaan puhelun, mikä varmistaa verkkosivustojen saavutettavuuden korkean käytettävyyden ansiosta.

Uusien käyttäjien tulee lähettää henkilökorttinsa oikean nimen todentamista varten ostoa tehdessään.

## Määritä salasanaton kirjautuminen

Muutaman minuutin kuluttua kaikki palvelimet aktivoituivat

Ensimmäinen asia on muokata paikallisen koneen `~/.ssh/config` IP-osoitteen aliaksen määrittämiseksi ja sitten salasanattoman kirjautumisen määrittämiseen käyttämällä `ssh-copy-id root@c2`.

![](https://i-01.eu.org/1718287198.avif)

Voit muokata tätä [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) saadaksesi alustusmääritykset valmiiksi nopeammin.

Kun salasanaton konfigurointi on valmis, voit käyttää [pdsh](https://github.com/chaos/pdsh) erissä, mikä on kätevää.

Ensimmäinen on ottaa IPv6 käyttöön manuaalisesti ja testata

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Päivitä sitten järjestelmä Ubuntu 24:ksi yhdellä napsautuksella ja asenna yleisesti käytetty ohjelmisto.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tarkoittaa kielen vaihtamista kiinaksi ja aikavyöhykkeen vaihtamista Pekingiin.

Oletuksena asennettu ohjelmisto on konfiguroitu henkilökohtaisten käyttötapojeni mukaan, kuten [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/) jne. Voit tarvittaessa kopioida [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -varaston ja muokata sitä tarpeen mukaan.

Tämä vaihe kestää kauan. Puolen tunnin odottamisen jälkeen yleisesti käytettyjen ohjelmistojen päivitys ja asennus onnistuvat. Voit vahvistaa tämän seuraavalla komennolla:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Nopeuttaa SSH:ää

Verkko Euroopasta Kiinaan ei ole vakaa. Suositellaan käyttämään [mosh](//mosh.org) `ssh`-yhteyksien nopeuttamiseen.

Luo `c0` komentosarjaa paikalliseen hakemistoon `~/.bin` (lisätty pääasiassa ympäristömuuttujaan `PATH`) seuraavasti:

```bash
#!/usr/bin/env bash

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Luomisen jälkeen myönnä suoritettavat oikeudet ja soft-link `c1` ja `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Jatkossa voit syöttää suoraan `c0` ja `c1` käyttääksesi `mosh` nopeaa suoraa yhteyttä ja syötä [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html).

## Muunna osion muoto Ext4:stä Btrfs:ksi

[btrfs](https://wikipedia.org/wiki/Btrfs) voi ottaa levykuvia varmuuskopiointia varten.

Mene ensin pelastusjärjestelmään

![](https://i-01.eu.org/1718300448.avif)

Valitse Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Odota, että palvelin käynnistyy uudelleen

SSH:n yhteydessä ilmenee sormenjäljen muutos, käytä `ssh-keygen -R ip` puhdistaaksesi sen

Suorita sitten seuraava komentosarja osion muuntamiseksi

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skripti käynnistää järjestelmän automaattisesti uudelleen, kun muunnos on onnistunut.

### Näytä Btrfs-pakkaussuhde

Oletuksena se pakkaa automaattisesti. Pakkaussuhteen tarkistamisen komento on seuraava:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuaalinen pakkaus

Jos olet perfektionisti, voit suorittaa levypakkauksen myös manuaalisesti

```bash
btrfs filesystem defragment -r -czstd /
```

Kuten alla olevasta kuvasta näkyy, voit nähdä, että manuaalisen pakkaamisen jälkeen uudessa järjestelmässä pakattiin lähes 100 Mt lisää.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Luo Btrfs-tilannekuva varmuuskopioksi Snapperilla

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) paras kumppani Btrfs varmuuskopiointiin.

Alustusskripti luo `~/ubuntu` hakemiston, suorita vain seuraava komento:

```
~/ubuntu/snapper/init.sh
```

Nähdään käsikirjoituksen sisällössä [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Käytä `snapper list-configs` nähdäksesi alivolyymit, joille tilannekuvat on asetettu

![](https://i-01.eu.org/1718302689.avif)

Käytä `snapper -c mnt list` nähdäksesi tilannekuvan alimäärästä

`/etc/snapper/configs/mnt` voi tarkastella tämän alitaltion erityisiä varmuuskopiointiasetuksia

Lisää referenssejä:

[Pelaa helposti snapshot-toiminnolla Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Contabo-palvelimen tilannekuva

Contabo tarjoaa palvelimen tilannevedostoiminnon, mutta ei tue ajoitettuja tilannekuvia. Kirjoitin [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) päivittäisten tilannekuvien ottamista varten.

![](https://i-01.eu.org/1718304206.avif)

Palvelimen tilannevedoksen palauttamiseksi napsauta ensin hallintovalikosta Crontol

![](https://i-01.eu.org/1718304275.avif)

Napsauta sitten Snapshots palauttaaksesi.

![](https://i-01.eu.org/1718304063.avif)

Tämän tilannekuvan tarkkuus on kuitenkin liian suuri. Kun se on palautettu, uudet lisätyt tiedot menetetään kokonaan, joten käytä sitä varoen.

Yleensä on kätevämpää käyttää Btrfs-tilannekuvia.

## Pelastusjärjestelmän tiedot

Siirry 22 Kun portti on [tcping](https://github.com/paradiseduo/tcping) käytettävissä, et voi käyttää sitä asetetulla salasanalla 2-3 minuuttiin. Odota hetki.

```
tcping ip 22 -c 9999
```

Satamien saavutettavuutta voidaan valvoa.

### Kiintolevyn käyttäminen Restore Snapshot -Ohjelman &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Voit katsoa esimerkiksi tilannekuvan

```
snapper -c etc list
```

Näytä tilannekuvatiedoston muutokset

```
snapper -c etc status 5..6
```

Näytä tietty eroteksti

```
snapper -c etc diff 3..5
```

Palauta tilannekuva: esimerkiksi kumoa kaikki muutokset tilannevedoksen 5 jälkeen

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Ota lokin pysyvyys käyttöön

Lokin pysyvyyden ottaminen käyttöön pelastusjärjestelmässä edellyttää, että luot manuaalisesti vastaavan hakemiston ja suoritat joitain lisätoimenpiteitä, koska sinulla ei ehkä ole käynnissä systemd-palvelua. Voit kokeilla seuraavia vaiheita:

Sitten ensin chroot

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Käynnistä uudelleen Ubuntu-järjestelmääsi: Kun olet tehnyt yllä olevat muutokset, sinun on käynnistettävä tietokoneesi uudelleen normaalisti ja Ubuntu-järjestelmääsi pelastusjärjestelmän sijaan.

Tällä tavalla systemd-journald aloittaa uudella kokoonpanolla ja alkaa tallentaa lokeja jatkuvasti kiintolevylle.

Muista, että yllä olevat toiminnot suoritetaan pelastusjärjestelmässä, joten muutokset eivät tule voimaan ennen kuin järjestelmä käynnistetään uudelleen eikä se ole enää pelastustilassa.

Tämä tarkoittaa, että et heti näe muutoksia olemassa oleviin lokeihin, jotka muuttuvat pysyviksi, mutta kaikki sen jälkeen luodut lokit säilyvät.

Näin voit tarkastella SSH-palvelun lokeja

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Huomautuksia vaikeista ja monimutkaisista sairauksista

### Ratkaise outo ongelma: Palvelin ei voi SSH

Käytin aiemmin GitHub-toimintoa automaattisen käännös- ja käyttöönottokomentosarjan tekemiseen, mutta huomasin, että käyttöönottopalvelu ei voinut olla SSH.

Pelastusjärjestelmään siirtyminen ja lokien katsominen on lupaongelma:

`Missing privilege separation directory: /run/sshd`

Voit luoda tämän hakemiston seuraavalla komennolla

```
chown root:root /
systemd-tmpfiles --create
```

Toistuvien tutkimusten jälkeen se johtuu siitä, että GitHub Action -tar käyttäjä `uid` on `1001`

Pakkauksen purkamisen on tapahduttava tar jos parametria ei ole `--no-same-owner`, se puretaan arvoon `uid` `1001` käyttäjälle

Tämän seurauksena rsync muuttaa juurihakemiston käyttäjäryhmää, jolloin et voi kirjautua sisään SSH:hen uudelleenkäynnistyksen jälkeen.

Muokkaa pakkauskomentosarjaa seuraavasti:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
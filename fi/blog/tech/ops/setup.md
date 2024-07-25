# Alusta Palvelin (Käytä BTRFS-Osiota, Snapper Ajoitettua Tilannekuvaa)

## contabo Ostopalvelin

contabo on halpa VPS-palveluntarjoaja Saksassa, jolla on pitkä historia (yli 20 vuotta) ja paljon käyttäjiä (yli 200 000), joten sinun ei tarvitse huolehtia karkaamisesta.

VPS ostat [contabo.com](//contabo.com) muista valita eurohinnoittelu, joka on halvempi.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Contabosta peritään kertaluonteinen asennusmaksu.
Joka kuukausi on kuitenkin muutamia päiviä, jolloin asennusmaksu on ilmaista. Rekisteröidy ja kiinnitä huomiota mainossähköpostiin.

Ilmaisen aluemaksun lisäksi Euroopassa muilla alueilla on eritasoisia hinnankorotuksia.

Valitsin eurooppalaisen palvelimen. Joka tapauksessa cloudflaren käytön jälkeen palvelimien välillä ei ole paljon eroa.

Lopullinen kokoonpano on seuraava, 16 Gt muistia, 6 CPU, 200 Gt NVMe, 9,50 euroa kuukaudessa, mikä vastaa 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Tämä hinta on lähes kymmenesosa Alibaba Cloudin ja Amazonin hinnasta** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

[Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) suorituskyvyn ja parametrien suorittamiseen:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Näytä malli CPU `AMD EPYC 9224 24-Core Processor` yhden ytimen suorituskykypisteet 1285
, moniytiminen pisteet 4277 Näytä lisää tuloksia [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ostin kolme palvelinta kerralla ja aktivoin ne samaan aikaan. Tämä varmistaa, että palvelimet ovat samassa tietokonehuoneessa, mikä helpottaa korkean käytettävyyden rakentamista tulevaisuudessa.

Sen palvelimet katkaisevat toisinaan puhelun, mikä varmistaa verkkosivustojen saavutettavuuden korkean käytettävyyden ansiosta.

Uusien käyttäjien tulee lähettää henkilökorttinsa oikean nimen todentamista varten ostoa tehdessään.

## Määritä Salasanaton Kirjautuminen

Muutaman minuutin kuluttua kaikki palvelimet aktivoituivat.

Ensimmäinen asia on muokata paikallisen koneen `~/.ssh/config` :n alias IP määrittää sitten salasanaton kirjautuminen `ssh-copy-id root@c2` -näppäimellä.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Voit muokata tätä [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) saadaksesi alustusmääritykset valmiiksi nopeammin.

Kun salasanaton konfigurointi on valmis, voit käyttää [pdsh](https://github.com/chaos/pdsh) erissä, mikä on kätevää.

Ensimmäinen on ottaa ipv6 käyttöön manuaalisesti ja testata

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Päivitä sitten järjestelmä ubuntu 24:ksi yhdellä napsautuksella ja asenna yleisesti käytetty ohjelmisto.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tarkoittaa kielen vaihtamista kiinaksi ja aikavyöhykkeen vaihtamista Pekingiin.

Oletuksena asennettu ohjelmisto on konfiguroitu henkilökohtaisten käyttötapojeni mukaan, kuten [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) jne. Voit tarvittaessa kopioida [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -varaston ja muokata sitä tarpeen mukaan.

Tämä vaihe kestää kauan Puolen tunnin odottamisen jälkeen yleisesti käytettyjen ohjelmistojen päivitys ja asennus onnistuvat. Voit vahvistaa sen seuraavalla komennolla:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Nopeuttaa ssh:tä

Verkko Euroopasta Kiinaan ei ole vakaa On suositeltavaa `ssh` [mosh](//mosh.org)

Luo `c0` -skripti paikallisen koneen `~/.bin` (lisätään pääasiassa ympäristömuuttujaan `PATH` ) seuraavasti:

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

Luomisen jälkeen myönnä suoritusoikeudet ja soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Jatkossa voit syöttää suoraan `c0` , `c1` ja voit muodostaa `mosh` suoraan ja syöttää [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Muunna Osion Muoto Ext4:stä btrfs:ksi

Voi ottaa levykuvia varmuuskopiointia varten [btrfs](https://wikipedia.org/wiki/Btrfs)

Mene ensin pelastusjärjestelmään

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Valitse Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Odota, että palvelin käynnistyy uudelleen

Sormenjälki muuttuu ssh kun , puhdista se `ssh-keygen -R ip`

Suorita sitten seuraava komentosarja osion muuntamiseksi

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skripti käynnistää järjestelmän automaattisesti uudelleen, kun muunnos on onnistunut.

### Näytä Btrfs-Pakkaussuhde

Se pakkaa automaattisesti oletusarvoisesti Komennon pakkaussuhteen tarkistamiseksi on seuraava:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuaalinen Pakkaus

Jos olet perfektionisti, voit suorittaa levypakkauksen myös manuaalisesti. Komento on seuraava

```bash
btrfs filesystem defragment -r -czstd /
```

Kuten alla olevasta kuvasta näkyy, voit nähdä, että manuaalisen pakkaamisen jälkeen uudessa järjestelmässä pakattiin lähes 100 Mt lisää.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Luo Btrfs-Snapshot-Varmuuskopio Snapperilla

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) paras kumppani Btrfs varmuuskopiointiin.

Alustusskripti luo `~/ubuntu` , suorita seuraava komento:

```
~/ubuntu/snapper/init.sh
```

Nähdään käsikirjoituksen sisällössä [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Käytä `snapper list-configs` -näppäintä nähdäksesi alivolyymit, joille tilannekuvat on asetettu.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Käytä `snapper -c mnt list` -painiketta nähdäksesi tilannekuvan alilevystä

`/etc/snapper/configs/mnt` tarkastella tämän alilevyn varmuuskopiointiasetuksia

Lisää referenssejä:

[Pelaa helposti snapshot-toiminnolla Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Contabo-Palvelimen Tilannekuva

contabo palvelimen tilannevedostoiminnon, mutta ei tue ajoitettuja tilannekuvia. Kirjoitin [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) päivittäisten tilannekuvien ottamista varten.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Palauta palvelimen tilannekuva napsauttamalla ensin hallintavalikosta Crontol

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Napsauta sitten Snapshots palauttaaksesi.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Tämän tilannekuvan tarkkuus on kuitenkin liian suuri Kun se on palautettu, äskettäin lisätyt tiedot menetetään kokonaan, joten käytä sitä varoen.

Yleensä on kätevämpää käyttää btrfs-snapshots-kuvia.

## Pelastusjärjestelmän Tiedot

Siirry 22 Kun portti on [tcping](https://github.com/paradiseduo/tcping) käytettävissä, et voi käyttää sitä asetetulla salasanalla 2-3 minuuttiin. Odota hetki.

```
tcping ip 22 -c 9999
```

Satamien saavutettavuutta voidaan valvoa.

### Kiintolevyn Käyttäminen Restore Snapshot -Ohjelman &

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

### Ota Lokin Pysyvyys Käyttöön

Lokin pysyvyyden ottaminen käyttöön pelastusjärjestelmässä edellyttää, että luot manuaalisesti vastaavan hakemiston ja suoritat joitain lisätoimenpiteitä, koska sinulla ei ehkä ole käynnissä systemd-palvelua. Voit kokeilla seuraavia vaiheita:

Ensin chroot sitten

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Uudelleenkäynnistys Ubuntu-järjestelmään: Kun olet tehnyt yllä olevat muutokset, sinun on käynnistettävä tietokoneesi uudelleen normaalisti ja Ubuntu-järjestelmääsi pelastusjärjestelmän sijaan.

Tällä tavalla systemd-journald aloittaa uudella kokoonpanolla ja alkaa tallentaa lokeja jatkuvasti kiintolevylle.

Muista, että yllä olevat toiminnot suoritetaan pelastusjärjestelmässä, joten muutokset tulevat voimaan vasta, kun järjestelmä käynnistetään uudelleen, eikä se ole enää pelastustilassa.

Tämä tarkoittaa, että et heti näe muutoksia olemassa oleviin lokeihin, mutta kaikki tämän jälkeen luodut lokit säilyvät.

Näin voit tarkastella ssh-palvelun lokeja

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Huomautuksia Vaikeista Ja Monimutkaisista Sairauksista

### Ratkaise Outo Ongelma: Palvelin Ei Voi ssh

Käytin aiemmin github-toimintoa automaattisen käännös- ja käyttöönottokomentosarjan tekemiseen, mutta huomasin, että käyttöönottopalvelu ei voinut olla ssh.

Pelastusjärjestelmään siirtyminen ja lokien katsominen on lupaongelma:

`Missing privilege separation directory: /run/sshd`

Voit luoda tämän hakemiston seuraavalla komennolla

```
chown root:root /
systemd-tmpfiles --create
```

Toistuvien tutkimusten jälkeen se johtuu siitä github action että tar ladannut käyttäjä on `1001` `uid`

tar Purkaminen on tehtävä ilman parametreja `--no-same-owner` se puretaan muotoon `uid` for `1001` käyttäjä

Tämän seurauksena rsync muuttaa juurihakemiston käyttäjäryhmää, jolloin et voi kirjautua sisään ssh:hen uudelleenkäynnistyksen jälkeen.

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


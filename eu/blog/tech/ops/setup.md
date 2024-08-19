# Hasieratu Zerbitzaria (Erabili BTRFS Partizioa, Snapper Programatutako Argazkia)

## contabo Erosteko Zerbitzaria

contabo Alemaniako VPS hornitzaile merkea da, historia luzea (20 urte baino gehiago) eta erabiltzaile asko (200.000 baino gehiago), beraz, ez dago ihes egiteaz kezkatu beharrik.

VPS [contabo.com](//contabo.com) gogoratu euro prezioa aukeratzea, merkeagoa baita.

![](https://i-01.eu.org/1718285782.avif)

Instalazio-kuota bakarra dago contaborako.
Hala ere, hilabetero instalatzeko kuota doakoa da egun batzuk erregistratu eta erreparatu sustapen-mezuei.

Europan doako area kuotaz gain, beste eskualde batzuek prezio igoera maila desberdinak dituzte.

Europako zerbitzari bat aukeratu nuen Dena den, cloudflare erabili ondoren, zerbitzarien artean ez dago alde handirik.

Azken konfigurazioa honakoa da, 16GB memoria, 6CPU, 200 GB NVMe, 9,50 euro hilean, 74,43 RMBren baliokidea.

![](https://i-01.eu.org/1718286008.avif)

**Prezio hori Alibaba Cloud eta Amazonen prezioaren ia hamarren bat da** .

![](https://i-01.eu.org/1718356956.avif)

Errendimendua eta parametroak exekutatzeko erabili [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

`AMD EPYC 9224 24-Core Processor` CPU erakusten, nukleo bakarreko errendimenduaren puntuazioa 1285
, nukleo anitzeko puntuazioa 4277 Ikusi emaitza gehiago [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Hiru zerbitzari aldi berean erosi eta aldi berean aktibatu ditut Honek zerbitzariak ordenagailu gela berean daudela ziurtatzen du, etorkizunean erabilgarritasun handia eraikitzea erraztuz.

Bere zerbitzariak noizean behin zintzilikatzen dira, webgunearen eskuragarritasuna bermatuz erabilgarritasun handiaren bidez.

Erabiltzaile berriek euren NAN txartelak aurkeztu behar dituzte benetako izena autentifikatzeko erosterakoan.

## Konfiguratu Pasahitz Gabeko Saioa

Minutu batzuk igaro ondoren, zerbitzari guztiak aktibatu ziren.

Lehenik eta behin, tokiko makinaren `~/.ssh/config` editatzea IP alias bat ezartzeko, eta gero `ssh-copy-id root@c2` erabiltzea pasahitz gabeko saioa konfiguratzeko.

![](https://i-01.eu.org/1718287198.avif)

[ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) hau alda dezakezu hasierako konfigurazioa azkarrago osatzeko.

Pasahitzik gabeko konfigurazioa osatu ondoren, erabil [pdsh](https://github.com/chaos/pdsh) loteka funtziona daiteke, eta hori erosoa da.

Lehenengoa ipv6 eskuz gaitzea eta probatzea da

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Ondoren, eguneratu sistema ubuntu 24ra klik batekin eta instalatu normalean erabiltzen den softwarea.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 hizkuntza txinera eta ordu-eremua Pekinera aldatzea esan nahi du.

Lehenespenez instalatutako softwarea nire erabilera-ohituren arabera konfiguratuta dago, hala nola [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etab. Beharrezkoa izanez gero, [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) biltegia kopiatu eta behar duzun moduan alda dezakezu.

Urrats honek ordu erdi itxaron ondoren, normalean erabiltzen den softwarea berritzea eta instalatzea arrakastatsua izango da. Hau konfirmatu dezakezu komando honekin:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## Mosh-Ek ssh Bizkortzen Du

Europatik Txinara ez da egonkorra `ssh` erabiltzea gomendatzen da [mosh](//mosh.org)

Sortu `c0` script `~/.bin` direktorio lokalean (nagusiki `PATH` ingurune-aldagaian gehituta) honela:

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

Sortu ondoren, eman exekutagarriak diren baimenak eta esteka bigunak `c1` eta `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Etorkizunean, zuzenean `c0` eta `c1` sar ditzakezu `mosh` abiadura handiko konexio zuzena erabiltzeko eta sartu [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Bihurtu Partizio Formatua Ext4-Tik Btrfs-Era

[btrfs](https://wikipedia.org/wiki/Btrfs) Diskoaren argazkiak atera ditzake babeskopia erraz egiteko.

Lehenik eta behin, sartu erreskate sisteman

![](https://i-01.eu.org/1718300448.avif)

Aukeratu Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Itxaron zerbitzaria berrabiarazi arte

Hatz-marken aldaketak izango ssh , erabili `ssh-keygen -R ip` garbitzeko

Ondoren, exekutatu hurrengo script-a partizioa bihurtzeko

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Scriptak automatikoki berrabiaraziko du sistema bihurketa arrakastatsua izan ondoren.

### Ikusi btrfs Konpresio-Erlazioa

Automatikoki konprimituko da konpresio-erlazioa egiaztatzeko komandoa:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Eskuzko Konpresioa

Perfekzionista bazara, eskuz disko osoa konprimitzea ere egin dezakezu komandoa:

```bash
btrfs filesystem defragment -r -czstd /
```

Beheko irudian ikusten den bezala, sistema berrian eskuzko konpresioaren ondoren, ia 100 MB gehiago konprimitu zirela ikus dezakezu.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Sortu Btrfs Argazkien Babeskopia Snapper-Ekin

Btrfs babeskopia egiteko bazkide onena [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) .

Hasierako script-ak `~/ubuntu` direktorioa sortuko du, exekutatu komando hau:

```
~/ubuntu/snapper/init.sh
```

gidoiaren edukian ikusiko gara [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Erabili `snapper list-configs` argazki-argazkiak ezarrita dauden azpibolumenak ikusteko.

![](https://i-01.eu.org/1718302689.avif)

Erabili `snapper -c mnt list` azpibolumen baten argazkia ikusteko

`/etc/snapper/configs/mnt` azpibolumen honen babeskopia-ezarpen zehatzak ikus ditzake

Erreferentzia gehiago:

[Jolastu erraz Btrfs -ren argazki-funtzioarekin snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Zerbitzariaren Argazkia

contabo Zerbitzariaren argazki-funtzioa eskaintzen [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) , baina ez ditu programatutako argazkiak onartzen.

![](https://i-01.eu.org/1718304206.avif)

Zerbitzariaren argazki bat leheneratzeko, egin klik lehenik Crontol kudeaketa menuan

![](https://i-01.eu.org/1718304275.avif)

Ondoren, sakatu Argazkiak leheneratzeko.

![](https://i-01.eu.org/1718304063.avif)

Hala ere, argazki honen xehetasuna handiegia da berreskuratu ondoren, gehitu berri diren datuak erabat galduko dira, beraz, erabili kontu handiz.

Normalean erosoagoa da btrfs snapshots erabiltzea.

## Erreskate Sistemaren Xehetasunak

Sartu erreskate- 22 Portua [tcping](https://github.com/paradiseduo/tcping) eskuragarri izan ondoren, ezin izango duzu sartu pasahitzarekin 2-3 minutuz itxaron eta ondo egongo da.

```
tcping ip 22 -c 9999
```

Portuko irisgarritasuna kontrolatu daiteke.

### Nola Sartu Disko Gogorrean Erreskatean Sartu Ondoren &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Argazkia ikus dezakezu, adibidez

```
snapper -c etc list
```

Ikusi argazki-fitxategien aldaketak

```
snapper -c etc status 5..6
```

Ikusi ezberdinen testu zehatza

```
snapper -c etc diff 3..5
```

Leheneratu argazkia: adibidez, desegin 5. argazkiaren ondoren aldaketa guztiak

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Gaitu Erregistroaren Iraunkortasuna

Erreskate-sistema batean erregistro-iraunkortasuna gaitzeak dagokion direktorioa eskuz sortzea eta urrats gehigarri batzuk egitea eskatzen du, agian ez duzulako exekutatzen systemd zerbitzurik. Hona hemen probatu ditzakezun urratsak:

Lehenengo chroot, gero

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Berrabiarazi Ubuntu sisteman: goiko aldaketak egin ondoren, zure makina normalean berrabiarazi behar duzu eta Ubuntu sisteman erreskate sistemaren ordez.

Modu honetan, systemd-journald konfigurazio berriarekin hasiko da eta erregistroak etengabe gordetzen hasiko da disko gogorrean.

Gogoan izan goiko eragiketak erreskate-sistema batean egiten direla, beraz, aldaketa horiek ez dira eragingo izango sistema berrabiarazi eta erreskate moduan ez dagoen arte.

Horrek esan nahi du ez duzula lehendik dauden erregistroetan etengabeko aldaketarik ikusiko, baina ondoren sortutako erregistro guztiak mantendu egingo dira.

Horrela ssh zerbitzuaren erregistroak ikus ditzakezu

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Gaixotasun Zail Eta Konplikatuei Buruzko Oharrak

### Ebatzi Arazo Bitxia: Zerbitzariak Ezin Du ssh

Github ekintza erabili nuen aurretik konpilazio eta inplementazio automatikoko script bat egiteko, baina inplementazio zerbitzua ezin zela ssh izan aurkitu nuen.

Erreskate sisteman sartzea eta erregistroak ikustea baimen-arazo bat da:

`Missing privilege separation directory: /run/sshd`

Direktorio hau hurrengo komandoarekin sor dezakezu

```
chown root:root /
systemd-tmpfiles --create
```

`1001` eta berriro ikertu ondoren, tar ko erabiltzailea `uid` github action da

Deskonprimitzeak `--no-same-owner` parametrorik ez badago izan behar du, `uid` deskonprimituko da `1001` erabiltzailerentzat tar

Ondorioz, rsync-ek erro direktorioaren erabiltzaile taldea aldatuko du, eta, ondoren, ezin izango duzu ssh-n saioa hasi berrabiarazi ondoren.

Aldatu deskonpresioaren script-a honela:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
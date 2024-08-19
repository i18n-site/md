# Servidorta Qallariy (Btrfs Rakiyta Llamk'achiy, Snapper Programasqa Instantánea)

## contabo Rantiy Sirwiq

contabo huk barato VPS quq Alemania kaqpi unay historiayuq (20 watamanta aswan) chaymanta achka llamk'achiqkuna (200.000 aswan), chayrayku mana ayqiymanta llakikuna kanchu.

[contabo.com](//contabo.com) VPS , yuyariy Euro chaninkunata akllayta, chaytaq aswan barato.

![](https://i-01.eu.org/1718285782.avif)

Contabo nisqapaqqa huk kutilla churanapaq qullqim kan.
Ichaqa, sapa killa huk pisi p'unchawkuna kanku maypichus instalación qullqi mana qullqiyuqchu Inscribikuylla chaymanta promocional correo electrónicos kaqpi qhaway.

Europapi mana qullqiyuq área qullqimanta aswanta, huk suyukunapi hukniray niveles de precios yapakuyniyuq kanku.

Huk Europa servidorta akllarqani Imayna kaptinpas, cloudflare llamk'achiyta qhipaman, mana ancha chiqanchu servidorkunapura.

Qhipa ruwayqa kayhinam, 16GB yuyarina, 6CPU, 200 GB NVMe, 9.50 euros killapi, 74.43 RMB kaqwan tupaq.

![](https://i-01.eu.org/1718286008.avif)

**Kay chaninqa yaqa chunkamanta hukninmi Alibaba Cloud kaqmanta Amazon kaqmanta chaninmanta** .

![](https://i-01.eu.org/1718356956.avif)

[Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Modelo `AMD EPYC 9224 24-Core Processor` , huklla-nucleo ruway puntuación 1285 rikuchispa CPU
, achka núcleo nisqa puntuación 4277 Astawan ruwaykunata qhaway [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kimsa servidorkunata huk kutillapi rantirqani chaymanta huk kutillapi activarqani Kayqa servidorkuna huk computadora cuartollapi kasqankuta qhawan, chaymanta aswan facil hamuq pachapi hatun disponibilidad ruwayta.

Servidorninkuna wakin kuti telefonota warkunku, web kitiman yaykuyta hatun tarikuywan qhawaspa.

Musuq llamk'aqkuna rantichkaspa tarjeta de identificaciónninkuta chiqa suti chiqaqchaypaq apachinanku tiyan.

## Mana Contraseñayuq Yaykuyta Wakichiy

Iskay kinsa minuto qhepamanmi servidorkuna llapanku activasqa karqanku.

Ñawpaq kaq IP llaqta makinapa `~/.ssh/config` kaqninta llamk'achiymi huk suti churanapaq, chaymanta `ssh-copy-id root@c2` llamk'achiyta mana contraseñayuq yaykuyta wakichinapaq.

![](https://i-01.eu.org/1718287198.avif)

Kay [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) tikrayta atinki, qallariy wakichiyta aswan utqaylla tukunaykipaq.

Mana contraseñayuq ruway tukusqa kaptin, chayta llamk'achiy atikunki [pdsh](https://github.com/chaos/pdsh) Huñukunapi llamk'achiy atikun, chaytaq allin.

Ñawpaq kaqmi makiwan ipv6 atichiypaq chaymanta pruebapaq

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Chaymanta huk ñit'iywan sistemata ubuntu 24 kaqman yapay chaymanta común llamk'achisqa software churay.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 nisqaqa chino simiman simita tikraymi, pacha zona nisqataq Pekín nisqaman tikraymi.

Ñawpaqmanta churasqa software sapalla llamk'achiyniymanhina ruwasqa kachkan, kayhina [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , hukkunapas Necesario kaqtinqa, [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) almacén kaqmanta copiayta atikunki chaymanta necesitasqaykimanhina tikrayta atikunki.

Kay llamk'ayqa unay pachata hapin Kuska horata suyaspa, aswanta llamk'achisqa software yapay chaymanta churay allin kanqa. Kayta kay kamachiywan takyachiyta atinki:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Usqhaylla ssh

Europamanta Chinakama llikaqa `ssh` takyasqachu [mosh](//mosh.org)

`c0` scriptkunata llaqta directorio `~/.bin` nisqapi (aswantaqa pachamama tikraq `PATH` nisqaman yapasqa) kayhinata ruway:

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

Ruwasqamanta qhipaman, ruwanapaq atiykunata quy chaymanta llamp'u-t'inki `c1` chaymanta `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Hamuq pachapi, chiqalla `c0` chaymanta `c1` yaykuyta atikunki `mosh` hatun utqaylla chiqan tinkiyta llamk'achinaykipaq chaymanta [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Rakina Formato ext4 Kaqmanta btrfs Kaqman Tikray

[btrfs](https://wikipedia.org/wiki/Btrfs) Diskumanta instantáneas nisqakunata hurquyta atin, mana sasachakuspalla waqaychasqa kananpaq.

Ñawpaqtaqa sistema de rescate nisqaman haykuy

![](https://i-01.eu.org/1718300448.avif)

Debian Qhispichiyta akllay

![](https://i-01.eu.org/1718300753.avif)

Suyay sirwiq musuqmanta qallarinanta

ssh Dedo huella tikraykuna kanqa, `ssh-keygen -R ip` llamk'achiy chayta pichaypaq

Chaymantataq kay qatiq qillqa mayt'uta purichiy rakiyta tikranaykipaq

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Qillqa mayt'uqa kikinmanta llamk'anata musuqmanta qallarinqa tikray allin kaptin.

### Qhaway btrfs Ñit'iy Ratio

Kikinmanta ñit'inqa ñawpaqmantapacha ñit'iy ratio qhawanapaq kamachiyqa kayhinam:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manual Nisqawan Ñit’iy

Sichus huk perfeccionista kanki, huk hunt'asqa disco ñit'iytapas makiwan ruwayta atinki Kamachiyqa kayhinam:

```bash
btrfs filesystem defragment -r -czstd /
```

Uraypi siqipi rikuchisqa hina, musuq sistemapi makiwan ñit'iymanta qhipaman, yaqa 100MB aswan ñit'isqa kasqanmanta rikunki.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### snapper Kaqwan Btrfs Instantánea Waqaychasqa Ruwayta Ruway

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

Qallariy qillqa mayt'uqa `~/ubuntu` willañiqita paqarichinqa, kay kamachiyta purichiylla:

```
~/ubuntu/snapper/init.sh
```

¡Guionpa contenidonpi tupasun [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

`snapper list-configs` llamk'achiy subvolumenkuna mayqinkunapaqchus instantáneas churasqa kachkan chayta qhawanaykipaq.

![](https://i-01.eu.org/1718302689.avif)

`snapper -c mnt list` huk subvolumen nisqap instantánea nisqa siq'inta qhawanaykipaq

`/etc/snapper/configs/mnt` kay subvolumenpa sapanchasqa waqaychasqa churanakunata qhawayta atin

Astawan yachaykuna:

[Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Sirwiqpa Instantánea

contabo Servidor instantáneas ruwayta qun, ichaqa mana programasqa instantáneas nisqakunata yanapanchu Sapa p'unchaw instantáneas nisqakunata ruwanaypaq [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) nisqa qillqarqani.

![](https://i-01.eu.org/1718304206.avif)

Huk sirwiq instantánea kutichiypaq, ñawpaqta Crontol ñit'iy kamachiy menú kaqpi

![](https://i-01.eu.org/1718304275.avif)

Chaymanta, Instantáneas ñit'iy kutichiypaq.

![](https://i-01.eu.org/1718304063.avif)

Ichaqa, kay instantánea nisqap granularidadninqa ancha hatunmi, huk kuti kutichisqa, musuq yapasqa willaykunaqa tukuyninpi chinkanqa, chayrayku ama hina kaspa allinta llamk'achiy.

Aswan allin btrfs instantáneas llamk'achiyta.

## Sistema De Rescate Nisqamanta Detalles

Qhispichiy 22 yaykuy Puerto [tcping](https://github.com/paradiseduo/tcping) yaykuy atikuq kaptin, mana chayman yaykuyta atikunkichu churasqa contraseñawan 2-3 minutokunalla Suyaylla hinaspa allin kanqa.

```
tcping ip 22 -c 9999
```

Puertoman chayayta atikunman.

### Imaynatataq Qispichiyman Yaykuspa Sinchi Waqaychaqman Yaykuyta &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Chay instantánea nisqataqa qhawayta atinki, huk rikch'anapaq

```
snapper -c etc list
```

Instantánea willañiqi tikraykunata qhaway

```
snapper -c etc status 5..6
```

Específico diff qillqata qhaway

```
snapper -c etc diff 3..5
```

Instantánea kutichiy: Ejemplopaq, llapa tikraykunata kutichiy 5 instantánea kaqmanta

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Qillqap Takyayninta Atichiy

Huk qispichiy llamkana urapi registro takyachiyta atichiyqa makiwan tupaq willañiqita ruwayta munan chaymanta wakin yapasqa ruwanakunata ruwayta munan, imaraykuchus mana huk sistemad yanapakuy purichkaqyuqchu kanki. Kaypi llamkanakuna pruebayta atiwaq:

Ñawpaqtaqa chroot, chaymanta

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ubuntu sistemaykiman wakmanta qallariy: Hawa tikraykunata ruwasqaykimanta, makinaykita normalta chaymanta Ubuntu sistemaykiman wakmanta qallarinayki tiyan qispichiy sistemamanta ranti.

Kayhina, systemd-journald musuq ruwanawan qallarinqa chaymanta registrokuna sinchi diskupi mana saqispa waqaychayta qallarinqa.

Yuyaypi hap'iy kay pata ruwaykuna huk qispichiy sistemapi ruwasqa, chayrayku chay tikraykunaqa mana ruwakunqachu sistema wakmanta qallarinankama chaymanta manaña qispichiy modo kaqpi.

Kayqa niyta munan, mana chaylla ima tikraytapas rikunkichu kunan kaq registrokunapi mana tukukuqman tukuq, ichaqa chaymanta llapa registrokuna ruwasqa wiñaypaq kanqa.

Kayhinata ssh yanapakuypa registronkunata qhawayta atikunki

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Sasa, Sasachakuyniyuq Unquykunamanta Qillqasqakuna

### Raro Sasachakuy Allichay: Sirwiq Mana ssh

Ñawpaqta github ruwayta llamk'achirqani huk kikinmanta huñuyta chaymanta mast'ariy scriptta ruwanaypaq, ichaqa tarirqani mast'ariy yanapakuy mana ssh kayta atisqanmanta.

Qhispichiy sistemaman yaykuy chaymanta registrokunata qhawayqa huk permiso sasachakuymi:

`Missing privilege separation directory: /run/sshd`

Kay qillqana mayt'utaqa kay kamachiywanmi rurayta atinki

```
chown root:root /
systemd-tmpfiles --create
```

Sapa kuti investigacionkuna ruwasqa kaptinqa, tar Usuario `uid` `1001` github action

tar Despaquete kanan tiyan sichus mana parámetro `--no-same-owner` kanchu, `1001` usuariokunapaq `uid` kaqman descomprimisqa kanqa

Chayhina, rsync sapsi willañiqip llamk'achiq huñunta tikranqa, chaymanta mana ssh kaqman yaykuyta atikunkichu wakmanta qallariymanta.

Descompresión qillqa mayt'uta kayhinata tikray:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
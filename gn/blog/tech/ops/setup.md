# Emoñepyrũ Pe Servidor (Eipuru BTRFS Partición, Snapper Programada Taꞌãngamýi) .

## contabo Joguaha Servidor

contabo haꞌehína peteĩ VPS puruhára ndahepýiva Alemania-pe oguerekóva rembiasakue puku (20 ary rasami) ha heta puruhára (200.000-gui hetave), upévare natekotevẽi ojepyꞌamongeta okañývo.

VPS [contabo.com](//contabo.com) nemandu’áke reiporavo haĝua Euro repykue, ivaratovéva.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Oî peteî cuota de instalación peteî jey contabo-pe guarã.
Ha katu oĩ mbovy ára káda mes pe instalación repykue gratis reñeanota ha eñatende umi correo electrónico promocional rehe.

Omotenondévo honorario área gratuita Europa-pe, ambue región oreko nivel iñambuéva ojupívo precio.

Aiporavo peteĩ servidor europeo Tahaꞌe haꞌeháicha, aiporu rire cloudflare, ndaipóri tuicha joavy umi servidor apytépe.

Configuración paha haꞌehína kóicha, 16GB memoria, 6CPU, 200 GB NVMe, 9,50 euros peteĩ jasy pukukue, ojoajúva 74,43 RMB rehe.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ko precio haimete peteĩ décima parte Alibaba Cloud ha Amazon repygui** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Aipuru [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU Ehechauka Modelo `AMD EPYC 9224 24-Core Processor` puntuación de rendimiento peteĩ núcleo rehegua 1285
, puntuación multi-núcleo rehegua 4277 Ehechave resultado [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ajogua mbohapy servidor peteĩ jeýpe ha amombaꞌapo peteĩ jave Kóva oasegura umi servidor oĩha peteĩ computadora kotýpe, ndahasýi oñemopuꞌa hag̃ua disponibilidad yvate tenonderãme.

Iservidor-kuéra sapy’ánte oñemboty teléfono, oaseguráva accesibilidad sitio web disponibilidad yvate rupive.

Umi puruhára pyahu tekotevẽ omondo itarjeta de identidad ojehechauka hag̃ua héra añeteguáva ojoguávo.

## Emohenda Jeike Ñe’ẽñemi’ỹre

Mbovymi minuto rire, umi servidor oñeactivapaite.

Peteĩha mba’e ha’e emohenda máquina local `~/.ssh/config` Emohenda peteĩ alias IP ha upéi eipuru `ssh-copy-id root@c2` emohenda hag̃ua jeike ñe’ẽñemi’ỹre.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Ikatu emoambue ko [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) emohu’ã pya’eve hag̃ua ñepyrũrã ñemboheko.

Oñemohu’ã rire pe configuración ndorekóiva contraseña, ikatu reipuru [pdsh](https://github.com/chaos/pdsh) Ikatu ojeporu lote-pe, ha’éva conveniente.

Peteĩha ha’e emboguata manualmente ipv6 ha prueba

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Upéi embopyahu sistema ubuntu 24-pe peteĩ clic rupive ha emoĩ software ojeporúva jepi.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 heꞌise oñembohasaha ñeꞌe chino-pe ha zona horaria Pekín-pe.

Pe software oñemboguapýva por defecto oñemboheko che jepokuaa jepuru personal rupive, ha’eháicha [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , hamba’e Tekotevẽramo, ikatu ekopia [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) almacén ha emoambue tekotevẽháicha.

Ko tembiaporã ogueraha are Oñehaꞌarõ rire media aravo, oñembopyahu ha oñemboguapy porãta software ojeporúva jepi. Ikatu emoañete ko tembiapoukapy rupive:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Ombopyaꞌeve ssh

Pe red Europa guive China peve ndaha'éi estable ojeporu `ssh` [mosh](//mosh.org)

Ejapo peteĩ `c0` script máquina local `~/.bin` (oñembojoapýva principalmente variable entorno `PATH` -pe kóicha:

```bash
#!/usr/bin/env bash rehegua

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Ojejapo rire, eme’ẽ permiso ejecutable ha soft- `c2` `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Amo gotyove, ikatu reike directamente `c0` , `c1` ha ikatu reipuru `mosh` conexión directa velocidad yvate ha reike [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Ombohasa Formato Partición Rehegua ext4 Guive Btrfs-Pe

[btrfs](https://wikipedia.org/wiki/Btrfs) Ikatu ogueraha taꞌãngamýi disco rehegua ojejapo hag̃ua jekopytyjoja ndahasýiva.

Primero eike pe sistema de rescate-pe

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Eiporavo Debian Rescate rehegua

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Eha’arõ pe servidor oñepyrũ jey

`ssh-keygen -R ip` huella digital ñemoambue oikóta ssh

Upéi emongu’e ko’ã script emoambue hag̃ua pe partición

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Pe script omoñepyrũ jeýta ijeheguiete pe sistema pe conversión osẽ porã rire.

### Ojehechakuaa btrfs Compresión Rehegua

Oñembohysýita ijeheguiete por defecto, tembiapoukapy ojehecha hag̃ua pe relación compresión rehegua haꞌehína kóicha:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compresión Manual Rehegua

Nde haꞌeramo peteĩ perfeccionista, ikatu avei rejapo peteĩ compresión disco completo rehegua nde po rupive Pe tembiapoukapy haꞌehína kóicha

```bash
btrfs filesystem defragment -r -czstd /
```

Ohechaukaháicha taꞌãngamýi iguýpe, ikatu ojehecha compresión manual rire sistema pyahúpe, haimete 100MB hetave oñembohysýi.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Ejapo Peteĩ Btrfs Taꞌãngamýi Jekopytyjoja snapper Rupive

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ha'e pe socio iporãvéva Btrfs backup-pe g̃uarã.

Pe script ñepyrũrã omoheñóita pe `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

¡Rojohecha pe guión contenido-pe [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Eipuru `snapper list-configs` ehecha hag̃ua umi subvolumen oñemboguapyhápe taꞌãngamýi.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Eipuru `snapper -c mnt list` ehecha hag̃ua peteĩ taꞌãngamýi peteĩ subvolumen rehegua

`/etc/snapper/configs/mnt` Ikatu rehecha umi configuración específica de copia de seguridad ko subvolumen rehegua

Hetave referencia:

[Eñembosarái pyaꞌete pe función instantánea rehegua Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Servidor Taꞌãngamýi

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Oñemoĩjey hag̃ua peteĩ servidor taꞌãngamýi, eñemboguejy raẽ Crontol menú jesarekorãme

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Upéi, eñemboguejy Instantáneas emoĩjey hag̃ua.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Ha katu, ko taꞌãngamýi granularidad tuichaiterei Oñemoĩjey rire, umi dato oñembojoapýva pyahúva okañymbaitéta, upévare eipuru ñeñangareko reheve.

Jepivegua iporãve ojepuru hag̃ua btrfs taꞌãngamýi.

## Umi Detalle Sistema De Rescate Rehegua

Eike sistema de rescate 22 pe [tcping](https://github.com/paradiseduo/tcping) ojeike rire pe puerto-pe, ndaikatumo’ãi reike ipype ñe’ẽñemi oñemohendava’ekue reheve 2-3 minuto aja.

```
tcping ip 22 -c 9999
```

Ikatu ojesareko accesibilidad puerto-pe.

### Mba'éichapa Ikatu Ojeike Disco Duro-Pe Ojeike Rire Rescate &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ikatu rehecha taꞌãngamýi, techapyrãramo

```
snapper -c etc list
```

Ehecha umi ñemoambue vore taꞌãngamýi rehegua

```
snapper -c etc status 5..6
```

Ohecha texto diff específico rehegua

```
snapper -c etc diff 3..5
```

Emoĩjey taꞌãngamýi: Techapyrã, embogue opaite ñemoambue taꞌãngamýi 5 rire

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Emboguata Registro Jepytaso

Ojehejávo registro persistencia peteĩ sistema rescate guýpe oikotevẽ ojejapo manualmente directorio okorrespondéva ha ojejapo peteĩva umi paso ambuéva, ikatu haguére ndorekói peteĩ servicio systemd oñemboguatáva. Ko’ápe oĩ umi paso ikatúva reñeha’ã:

Primero chroot, upéicharõ

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Eñepyrũ jey nde sistema Ubuntu-pe: Ejapo rire umi ñemoambue yvategua, tekotevẽ emoñepyrũ jey ne máquina normalmente ha nde sistema Ubuntu-pe sistema de rescate rangue.

Péicha, systemd-journald oñepyrũta configuración pyahúpe ha oñepyrũta oñongatu registro persistentemente disco duro-pe.

Eñongatu ne akãme umi tembiapo yvategua ojejapoha peteĩ sistema de rescate-pe, upévare umi ñemoambue oike efecto-pe oñemboguata jeývo sistema ha noĩvéima modo de rescate-pe.

Kóva heꞌise nderehechamoꞌãiha pyaꞌete mbaꞌeveichagua ñemoambue umi registro oĩmavape oñembotapykueha, ha katu opaite registro oñembohekopyréva kóva rire ojepytasóta.

Péicha ikatu rehecha umi registro servicio ssh rehegua

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notas Umi Mba’asy Hasýva Ha Ikomplikado Rehegua

### Esoluciona Pe Problema Extraño: Pe Servidor Ndaikatúi ssh

Aipuru github acción ajapo hag̃ua peteĩ script compilación ha despliegue automático mboyve, ha katu ajuhu pe servicio despliegue ndaikatuiha ha’e ssh.

Ojeike sistema de rescate-pe ha ojesareko umi registro rehe ha’e peteĩ mba’e permiso rehegua:

`Missing privilege separation directory: /run/sshd`

Ikatu ojejapo ko kundaha ko tembiapoukapy rupive

```
chown root:root /
systemd-tmpfiles --create
```

Ojejapo jey jey rire, github action pe `1001` tar `uid`

tar Despaquete ojejapova’erã parámetro’ỹre `--no-same-owner` ojedescomprimíta `uid` for `1001` puruhárape

Upéicha rupi, rsync omoambuéta puruhára aty ryru ypykue rehegua, ha upéi ndaikatumo’ãi reike ssh-pe reñepyrũ jey rire.

Emoambue script descompresión rehegua kóicha:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


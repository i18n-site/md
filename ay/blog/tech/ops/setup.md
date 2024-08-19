# Servidor Qalltaña (Btrfs Partición Apnaqaña, Snapper Programada Instantánea)

## contabo Ukax Mä Servidor Ukhamawa

contabo ukax Alemania markanx VPS barato ukaw utji, nayra saräwipampi (20 marat jila) ukat walja apnaqirinaka (200.000 jila), ukhamax janiw t’ijt’añat llakisiñax wakiskiti.

[contabo.com](//contabo.com) VPS Euro precios ukar ajlliñ amtañamawa, ukax juk’amp jila chaniniwa.

![](https://i-01.eu.org/1718285782.avif)

Mä kutikiw contabo ukan instalación qullqix utji.
Ukampirus sapa phaxsiw mä qawqha urunakax utji kawkhantix instalación ukan qullqix inakiw qillqt’asiñama ukat correo electrónico promocional ukanakar yäqaña.

Europa uksanx área gratuita ukan qullqip churañat sipansa, yaqha suyunakax kunayman niveles de precios ukanipxi.

Nayax mä servidor europeo ajlliwayta Kunjamakitix cloudflare apnaqañ tukuyatatxa, janiw servidores ukanakax sinti mayjt’atäkiti.

Qhipa configuración ukax akhamawa, 16GB memoria, 6CPU, 200 GB NVMe, 9,50 euros phaxsit, ukax 74.43 RMB ukar uñtasitawa.

![](https://i-01.eu.org/1718286008.avif)

**Aka chanix niya tunka t’aqaw Alibaba Cloud ukat Amazon ukanakan chanipatxa** .

![](https://i-01.eu.org/1718356956.avif)

Nayax [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Uñacht’ayaña Modelo `AMD EPYC 9224 24-Core Processor` , mä sapa lurawi puntuación 1285 CPU
, walja núcleos ukan puntuación 4277 Juk'amp yatxatatanaka uñjapxañani [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Mä kutix kimsa servidor ukanakaw alasitayna ukatx pachpa pachan activata Ukhamat servidor ukanakax pachpa sala de computadoras ukankapxañapataki, jutïrinx jach’a disponibilidad lurañax juk’amp jasakiw.

Servidores ukax awisax colgar, sitio web ukar mantañax jach’a disponibilidad tuqiw uñjasi.

Machaq apnaqirinakax alañ pachanx chiqpach sutip uñt’ayañatakiw tarjetas de identificación ukanakap uñt’ayapxañapa.

## Configurar Jan Contraseña Ukamp Mantañataki

Mä qawqha minutonakatjja, servidoranakajj taqeniw activatäjjäna.

Nayraqatax local maquinan `~/.ssh/config` ukar IP mä alias ukar uñt’ayañataki, ukatx `ssh-copy-id root@c2` ukampiw jan contraseña ukamp mantañ wakicht’añataki.

![](https://i-01.eu.org/1718287198.avif)

Aka [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ukax mayjt’ayatarakiwa, ukhamat qalltañ configuración ukax juk’amp jank’ak tukuyañataki.

Uka configuración libre contraseña ukaxa tukuyatatxa, ukaxa apnaqatarakiwa [pdsh](https://github.com/chaos/pdsh) Ukaxa lotes ukanwa apnaqasispa, ukaxa wali askiwa.

Nayrïrix ipv6 ukat yant’äw manual ukar ch’amanchañawa

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Ukatxa sistema ukaxa ubuntu 24 ukaru mä clic ukampiwa machaqar tukuyaña ukatxa software común apnaqata uñstayaña.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 ukax chino arut arut mayjt’ayañ sañ muni, ukatx zona horaria ukax Pekín arut mayjt’ayañ sañ muni.

Software instalatäki ukax nayan apnaqañ costumbrenakajarjamaw wakicht’ata, kunjamakitix [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ukat juk’ampinaka Wakisispa ukhax [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) almacén ukar copiaña ukat wakisirjam mayjt’ayaña.

Aka lurawixa jaya pachanakawa chika pacha suyt’atatxa, software común apnaqata ukanaka machaqar tukuyaña ukhamaraki instalación ukaxa wali askiwa. Ukax aka kamachimpiw chiqanchasispa:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Ukax Jank’akiw ssh

Europa markat China markar red ukax janiw estable ukhamäkiti [mosh](//mosh.org) `ssh` .

`c0` scripts luraña directorio local `~/.bin` (jilapachax variable de medio ambiente `PATH` ukar yapxatatawa) akham:

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

Lurañ tukuyatatxa, permisos ejecutables ukat soft-link `c1` ukat `c2` ukanakaw churasi.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Jutïrinxa, chiqak `c0` ukat `c1` ukar mantañamawa `mosh` jach’a velocidad directa conexión apnaqañataki ukat [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Partición Formato Ukax ext4 Ukat btrfs Ukaruw Jaqukipata

[btrfs](https://wikipedia.org/wiki/Btrfs) Disco ukan instantáneas ukanakax jasakiw copia de seguridad lurañataki.

Nayraqatax sistema de rescate ukar mantañamawa

![](https://i-01.eu.org/1718300448.avif)

Debian Rescue ukax mä juk’a pachanakanwa

![](https://i-01.eu.org/1718300753.avif)

Servidor ukax wasitat qalltañapatakiw suyt’añama

ssh `ssh-keygen -R ip`

Ukatxa aka script ukax partición ukar jaqukipañatakiw apnaqasi

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script ukax sistema ukarux wasitat qalltañapawa, ukatx turkakipäwix wali askiwa.

### Uñakipt’aña btrfs Compresión Ratio

Ukax automáticamente comprimir ukhamawa.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manual Ukampi Compresión Ukampi

Jumatix perfeccionista ukhamästa ukhaxa, mä compresión de disco completo manualmente lurarakismawa Kamachix akhamawa:

```bash
btrfs filesystem defragment -r -czstd /
```

Kunjamatix aka uñacht’awix uñacht’ayaskixa, uñjaraktwa machaq sisteman manual compresión ukat qhipatx niya 100MB juk’amp comprimido.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Mä Btrfs Snapshot Backup Luraña snapper Ukampi

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

Qalltañ script ukax `~/ubuntu` directorio uñstayañapawa, ukax aka kamachimpiw phuqhañapa:

```
~/ubuntu/snapper/init.sh
```

¡Guion contenido ukan uñjasipxañäni [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

`snapper list-configs` subvolumenes uñakipañataki kunatixa instantáneas ukanakaxa utt’ayatawa.

![](https://i-01.eu.org/1718302689.avif)

Mä subvolumen ukan mä instantánea uñakipañatakix `snapper -c mnt list` apnaqañamawa

`/etc/snapper/configs/mnt` ukax aka subvolumen ukan específicos configuración de copia de seguridad uñakipt’aspawa

Juk’amp qillqatanakax akanakawa:

[Jasakiw Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Servidor Ukax Mä Jamuqawa

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

![](https://i-01.eu.org/1718304206.avif)

Mä servidor ukan instantánea ukar kutt’ayañatakix nayraqatax Crontol ukar ch’iqt’añamawa gestión menú ukanxa

![](https://i-01.eu.org/1718304275.avif)

Ukatxa, Instantáneas ukar ch’iqt’añamawa, ukhamat kutt’ayañataki.

![](https://i-01.eu.org/1718304063.avif)

Ukampirus aka instantánea ukan granularidad ukax wali jach’awa.

Jilapachax btrfs ukan jamuqanak apnaqañax juk’amp askiwa.

## Sistema De Rescate Ukax Mä Detalle Ukhamawa

Sistema de rescate 22 mantañamawa Puerto ukax [tcping](https://github.com/paradiseduo/tcping) accesible ukhamawa, janiw contraseña set ukampiw mantañax utjkaniti 2-3 juk’a suyt’añamawa ukat walikïskaniwa.

```
tcping ip 22 -c 9999
```

Puerto ukar puriñkamax uñjatäspawa.

### Kunjamas Disco Duro Ukar Mantañax Qhispiyasiñ Ukar Mantañ Tukuyatat Restaurar Instantánea &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Uka instantánea uñakipt’añamawa, sañäni

```
snapper -c etc list
```

Uñakipaña instantánea archivo mayjt’awinaka

```
snapper -c etc status 5..6
```

Uñakipt’aña específico diff qillqaña

```
snapper -c etc diff 3..5
```

Instantánea ukar kutt’ayaña: Sañäni, taqi mayjt’awinakax 5 uñacht’äwit qhiparux chhaqtayañawa

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Registro Persistencia Ukar Ch’amanchaña

Mä sistema de rescate ukan registro persistencia ukar ch’amanchañatakix manualmente directorio correspondiente ukar lurañaw wakisi ukat yaqhip yaqha lurawinakaw lurasi, kunatix inas jan mä servicio systemd apnaqañ utjkchiti. Akax kunayman lurawinakawa yant’añataki:

Nayraqatax chroot, ukhama

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ubuntu sistema ukar wasitat qalltaña: Aka pata mayjt’awinak lurañ tukuyasax, maquina ukarux normalmente ukat sistema Ubuntu ukar kutt’ayañaw wakisi, sistema de rescate ukat sipansa.

Ukhamatwa, systemd-journald ukax machaq configuración ukamp qalltasini ukatx registros ukanakax disco duro ukan jan jaytjasaw imañ qalltasini.

Amtañani, aka pata lurawinakax mä sistema de rescate ukan luratawa, ukhamax uka mayjt’awinakax janiw sistema ukax wasitat qalltañapkamax phuqhaskaniti ukatx janiw modo de rescate ukanx utjkaniti.

Ukax sañ muniw janiw jank’ak kuna mayjt’äwinaks uñjkätati kunatix utjki uka qillqatanakax jan jaytjasaw tukuwayxi, ukampis taqi qillqatanakax uka qhipat lurat ukanakax utjaskakiniwa.

Ukhamatwa ssh servicio ukan registronakap uñakipt’asma

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Ch’ama Ukat Ch’amäki Uka Usunakat Qillqatanaka

### Uka Muspharkañ Jan Walt’äw Askichaña: Servidor Ukax Janiw ssh

Nayax github action ukax mä automático compilación ukat despliegue script ukanak lurañatakiw nayraqat apnaqawayta, ukampis jikxatawayta servicio de despliegue ukax janiw ssh ukhamäkaspati.

Sistema de rescate ukar mantañax ukat registros uñakipañax mä permiso jan walt’äwiwa:

`Missing privilege separation directory: /run/sshd`

Aka directorio ukaxa aka kamachimpiwa lurasispa

```
chown root:root /
systemd-tmpfiles --create
```

Walja kuti yatxatatanakatxa, kunatix github action User `uid` de tar ukax `1001` ukhamawa

tar `--no-same-owner` `uid` `1001`

Ukhamatwa, rsync ukax saphi directorio ukan apnaqir tamap mayjt’ayani, ukatx janiw ssh ukar mantañax utjkaniti wasitat qalltañat qhipatxa.

Uka descompresión qillqataxa akhamawa mayjt’ayaña:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
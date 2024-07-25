# Inicialitzar El Servidor (Utilitzar La Partició BTRFS, La Instantània Programada Snapper)

## Servidor De Compra contabo

contabo és un proveïdor de VPS barat a Alemanya amb una llarga trajectòria (més de 20 anys) i molts usuaris (més de 200.000), així que no cal preocupar-se de fugir.

VPS compreu [contabo.com](//contabo.com) recordeu triar el preu en euros, que és més barat.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Hi ha una tarifa d'instal·lació única per a contabo.
Tanmateix, hi ha uns quants dies cada mes en què la tarifa d'instal·lació és gratuïta. Només cal registrar-se i prestar atenció als correus electrònics promocionals.

A més de la taxa d'àrea gratuïta a Europa, altres regions tenen diferents nivells d'augment de preus.

Vaig triar un servidor europeu De totes maneres, després d'utilitzar cloudflare, no hi ha molta diferència entre els servidors.

La configuració final és la següent, 16 GB de memòria, 6 CPU, 200 GB NVMe, 9,50 euros al mes, equivalent a 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Aquest preu és gairebé una desena part del preu d'Alibaba Cloud i Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Vaig utilitzar [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) per executar el rendiment i els paràmetres:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Mostra CPU Model `AMD EPYC 9224 24-Core Processor` 1285 de rendiment d'un sol nucli
, puntuació multi-core 4277 Veure més resultats [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Vaig comprar tres servidors alhora i els vaig activar alhora. Això garanteix que els servidors estiguin a la mateixa sala d'ordinadors, facilitant la creació d'alta disponibilitat en el futur.

Els seus servidors es pengen ocasionalment, garantint l'accessibilitat del lloc web mitjançant una alta disponibilitat.

Els usuaris nous han d'enviar les seves targetes d'identificació per a l'autenticació del nom real en comprar.

## Configura L'inici De Sessió Sense Contrasenya

Al cap d'uns minuts, tots els servidors estaven activats.

El primer és editar l'àlies de la màquina local `~/.ssh/config` IP després utilitzar `ssh-copy-id root@c2` per configurar l'inici de sessió sense contrasenya.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Podeu modificar aquest [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) per completar la configuració d'inicialització més ràpidament.

Un cop completada la configuració sense contrasenya, podeu utilitzar-la [pdsh](https://github.com/chaos/pdsh) Es pot utilitzar per lots, cosa que és convenient.

El primer és activar manualment ipv6 i provar

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

A continuació, actualitzeu el sistema a ubuntu 24 amb un sol clic i instal·leu el programari d'ús habitual.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 significa canviar l'idioma al xinès i la zona horària a Pequín.

El programari instal·lat per defecte està configurat segons els meus hàbits d'ús personal, com ara [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , etc. Si cal, podeu copiar el magatzem [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) i modificar-lo segons sigui necessari.

Aquest pas triga molt de temps Després d'esperar durant mitja hora, l'actualització i la instal·lació del programari d'ús habitual tindrà èxit. Podeu confirmar-ho amb l'ordre següent:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Accelera ssh

La xarxa d'Europa a la Xina no és estable Es recomana utilitzar `ssh` ho [mosh](//mosh.org)

Creeu un script `c0` al `~/.bin` de la màquina local (afegit principalment a la variable d'entorn `PATH` ) de la següent manera:

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

Després de la creació, concediu permisos executables i soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

En el futur, podeu entrar directament `c0` `c1` i podeu utilitzar `mosh` per connectar-vos directament i entrar [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Converteix El Format De Partició D'ext4 a btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Pot fer instantànies de disc per facilitar la còpia de seguretat.

Primer introduïu el sistema de rescat

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Trieu Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Espereu que el servidor es reiniciï

`ssh-keygen -R ip` canvis d'empremtes digitals es produiran quan ssh

A continuació, executeu l'script següent per convertir la partició

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

L'script reiniciarà automàticament el sistema després que la conversió tingui èxit.

### Veure La Relació De Compressió btrfs

Es comprimirà automàticament per defecte. L'ordre per comprovar la relació de compressió és la següent:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compressió Manual

Si sou un perfeccionista, també podeu realitzar una compressió de disc complet manualment. L'ordre és la següent

```bash
btrfs filesystem defragment -r -czstd /
```

Com es mostra a la figura següent, podeu veure que després de la compressió manual al nou sistema, es van comprimir gairebé 100 MB més.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Creeu Una Còpia De Seguretat De La Instantània De Btrfs Amb snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) el millor soci per a la còpia de seguretat Btrfs .

L'script d'inicialització crearà el `~/ubuntu` , només cal que executeu l'ordre següent:

```
~/ubuntu/snapper/init.sh
```

Ens veiem al contingut del guió [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Utilitzeu `snapper list-configs` per veure els subvolums per als quals s'han configurat les instantànies.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Utilitzeu `snapper -c mnt list` per veure una instantània d'un subvolum

`/etc/snapper/configs/mnt` Podeu veure la configuració de còpia de seguretat específica d'aquest subvolum

Més referències:

[Juga fàcilment amb la funció de captura d'instantània de Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Instantània Del Servidor contabo

contabo la funció d'instantànies del servidor, però no admet instantànies programades. He escrit un [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) per fer instantànies diàries.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Per restaurar una instantània del servidor, primer feu clic a Crontol al menú de gestió

<img alt="" src="https://i-01.eu.org/1718304275.avif">

A continuació, feu clic a Instàncies per restaurar.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Tanmateix, la granularitat d'aquesta instantània és massa gran Un cop restaurada, les dades afegides es perdran completament, així que si us plau, utilitzeu-les amb precaució.

Normalment és més convenient utilitzar instantànies btrfs.

## Detalls Del Sistema De Rescat

Introduïu el sistema de rescat 22 Quan el port sigui [tcping](https://github.com/paradiseduo/tcping) accessible, no podreu accedir-hi amb la contrasenya establerta durant 2-3 minuts.

```
tcping ip 22 -c 9999
```

Es pot controlar l'accessibilitat del port.

### Com Accedir Al Disc Dur Després D'entrar & La Instantània De Restauració

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Podeu veure la instantània, per exemple

```
snapper -c etc list
```

Veure els canvis dels fitxers d'instantànies

```
snapper -c etc status 5..6
```

Visualitza el text diferencial específic

```
snapper -c etc diff 3..5
```

Restaura la instantània: per exemple, desfer tots els canvis després de la instantània 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Activa La Persistència Del Registre

L'habilitació de la persistència del registre en un sistema de rescat requereix que creeu manualment el directori corresponent i realitzeu alguns passos addicionals, perquè és possible que no tingueu un servei systemd en execució. Aquí teniu els passos que podeu provar:

Primer chroot, després

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reinicieu el vostre sistema Ubuntu: després de fer els canvis anteriors, heu de reiniciar la vostra màquina amb normalitat i al vostre sistema Ubuntu en lloc del sistema de rescat.

D'aquesta manera, systemd-journald començarà amb la nova configuració i començarà a emmagatzemar els registres de manera persistent al disc dur.

Tingueu en compte que les operacions anteriors es realitzen en un sistema de rescat, de manera que aquests canvis només tindran efecte un cop es reiniciï el sistema i ja no estigui en mode de rescat.

Això vol dir que no veureu immediatament que cap canvi als registres existents es torni persistent, però tots els registres generats després d'això es mantindran.

D'aquesta manera podeu veure els registres del servei ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notes Sobre Malalties Difícils I Complicades

### Resoldre El Problema Estrany: El Servidor No Pot Fer ssh

Abans he utilitzat l'acció github per fer una compilació automàtica i un script de desplegament, però vaig trobar que el servei de desplegament no podia ser ssh.

Entrar al sistema de rescat i mirar els registres és un problema de permís:

`Missing privilege separation directory: /run/sshd`

Podeu crear aquest directori amb l'ordre següent

```
chown root:root /
systemd-tmpfiles --create
```

Després d'investigacions repetides, és github action l'usuari que `1001` penjat tar `uid`

tar desembalatge s'ha de fer sense paràmetres `--no-same-owner` es descomprimirà en `uid` per a l'usuari `1001`

Com a resultat, rsync canviarà el grup d'usuaris del directori arrel i, després de reiniciar, no podreu iniciar sessió a ssh.

Modifiqueu l'script de descompressió de la següent manera:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


# Inicializa O Servidor (Use a Partición BTRFS, a Instantánea Programada De Snapper)

## Servidor De Compra contabo

contabo é un provedor de VPS barato en Alemaña cunha longa historia (máis de 20 anos) e moitos usuarios (máis de 200.000), polo que non hai que preocuparse por fuxir.

VPS mercar [contabo.com](//contabo.com) recorda escoller o prezo en euros, que é máis barato.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Hai unha tarifa única de instalación para contabo.
Non obstante, hai uns días cada mes nos que a tarifa de instalación é gratuíta. Só tes que rexistrarte e prestar atención aos correos electrónicos promocionais.

Ademais da taxa de superficie gratuíta en Europa, outras rexións teñen diferentes niveis de aumento de prezos.

Eu escollín un servidor europeo De todos os xeitos, despois de usar cloudflare, non hai moita diferenza entre os servidores.

A configuración final é a seguinte, 16 GB de memoria, 6 CPU, 200 GB NVMe, 9,50 euros ao mes, o que equivale a 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Este prezo é case a décima parte do prezo de Alibaba Cloud e Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

[Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) para executar o rendemento e os parámetros:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Mostrar Modelo CPU `AMD EPYC 9224 24-Core Processor` puntuación de rendemento dun só núcleo 1285
, puntuación multinúcleo 4277 Ver máis resultados [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Merquei tres servidores á vez e activeinos ao mesmo tempo. Isto garante que os servidores estean na mesma sala de ordenadores, facilitando a creación de alta dispoñibilidade no futuro.

Os seus servidores colgan ocasionalmente, o que garante a accesibilidade do sitio web mediante unha alta dispoñibilidade.

Os novos usuarios deben enviar as súas tarxetas de identificación para a autenticación do seu nome real ao mercar.

## Configure O Inicio De Sesión Sen Contrasinal

Despois duns minutos, todos os servidores estaban activados.

O primeiro é editar a máquina `~/.ssh/config` Establecer un alias para IP e despois usar `ssh-copy-id root@c2` para configurar o inicio de sesión sen contrasinal.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Pode modificar este [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) para completar a configuración de inicialización máis rápido.

Despois de completar a configuración sen contrasinal, pode usalo [pdsh](https://github.com/chaos/pdsh) Pódese operar por lotes, o que é conveniente.

O primeiro é activar manualmente ipv6 e probar

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

A continuación, actualice o sistema a ubuntu 24 cun só clic e instale o software de uso habitual.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 significa cambiar o idioma ao chinés e o fuso horario a Pequín.

O software instalado por defecto está configurado segundo os meus hábitos de uso persoal, como [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. Se é necesario, pode copiar o almacén [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) e modificalo segundo sexa necesario.

Este paso leva moito tempo Despois de esperar media hora, a actualización e instalación do software de uso habitual terá éxito. Podes confirmalo co seguinte comando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Acelera ssh

A rede de Europa a `ssh` non é estable [mosh](//mosh.org)

Crea un script `c0` no `~/.bin` da máquina local (principalmente engadido á variable de ambiente `PATH` ) do seguinte xeito:

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

Despois da creación, concede permisos executables e soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

No futuro, podes entrar `c0` `c1` e podes usar `mosh` para conectar directamente e entrar [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Converter Formato De Partición De ext4 a btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Pode facer instantáneas de disco para facer unha copia de seguridade sinxela.

Primeiro entra no sistema de rescate

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Escolla Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Agarde a que o servidor se reinicie

Os cambios de pegadas `ssh-keygen -R ip` ocorrerán cando ssh

A continuación, execute o seguinte script para converter a partición

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

O script reiniciará automaticamente o sistema despois de que a conversión teña éxito.

### Ver Relación De Compresión btrfs

Comprimirase automaticamente por defecto. O comando para comprobar a relación de compresión é o seguinte:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compresión Manual

Se es un perfeccionista, tamén pode realizar unha compresión de disco completo manualmente. O comando é o seguinte

```bash
btrfs filesystem defragment -r -czstd /
```

Como se mostra na seguinte figura, podes ver que despois da compresión manual no novo sistema comprimiron case 100 MB máis.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Crea Unha Copia De Seguridade De Instantáneas De Btrfs Con snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) o mellor compañeiro para a copia de seguridade Btrfs .

O script de inicialización creará o directorio `~/ubuntu` , só tes que executar o seguinte comando:

```
~/ubuntu/snapper/init.sh
```

Vémonos no contido do guión [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Use `snapper list-configs` para ver os subvolumes para os que se definen as instantáneas.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Use `snapper -c mnt list` para ver unha instantánea dun subvolume

`/etc/snapper/configs/mnt` Podes ver a configuración específica de copia de seguridade deste subvolume

Máis referencias:

[Xoga facilmente coa función de instantánea de Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Instantánea Do Servidor contabo

contabo Ofrece a función de instantáneas do servidor, pero non admite instantáneas programadas. Escribín un [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) para facer instantáneas diarias.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Para restaurar unha instantánea do servidor, primeiro faga clic en Crontol no menú de xestión

<img alt="" src="https://i-01.eu.org/1718304275.avif">

A continuación, fai clic en Instantáneas para restaurar.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Non obstante, a granularidade desta instantánea é demasiado grande Unha vez restaurada, os datos recentemente engadidos perderanse por completo, polo que úsaos con precaución.

Normalmente é máis cómodo usar instantáneas btrfs.

## Detalles Do Sistema De Rescate

Entra no sistema de rescate 22 Despois de que o porto sexa [tcping](https://github.com/paradiseduo/tcping) , non poderás acceder a el co contrasinal definido durante 2-3 minutos.

```
tcping ip 22 -c 9999
```

Pódese controlar a accesibilidade do porto.

### Como Acceder Ao Disco Duro Despois De Entrar & Restore Snapshot

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Podes ver a instantánea, por exemplo

```
snapper -c etc list
```

Ver os cambios do ficheiro de instantáneas

```
snapper -c etc status 5..6
```

Ver texto diferencial específico

```
snapper -c etc diff 3..5
```

Restaurar instantánea: por exemplo, desface todos os cambios despois da instantánea 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Activa a Persistencia Do Rexistro

Activar a persistencia do rexistro nun sistema de rescate require que crees manualmente o directorio correspondente e realices algúns pasos adicionais, porque é posible que non teñas un servizo systemd en execución. Aquí tes os pasos que podes probar:

Primeiro chroot, despois

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reinicie no seu sistema Ubuntu: despois de facer os cambios anteriores, cómpre reiniciar a súa máquina normalmente e no seu sistema Ubuntu en lugar do sistema de rescate.

Deste xeito, systemd-journald comezará coa nova configuración e comezará a almacenar rexistros de forma persistente no disco duro.

Teña en conta que as operacións anteriores realízanse nun sistema de rescate, polo que eses cambios só terán efecto unha vez que o sistema se reinicie e xa non estea en modo de rescate.

Isto significa que non verá de inmediato que ningún cambio nos rexistros existentes se faga persistente, pero todos os rexistros xerados despois seguirán.

Deste xeito podes ver os rexistros do servizo ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notas Sobre Enfermidades Difíciles E Complicadas

### Resolve O Estraño Problema: O Servidor Non Pode Facer ssh

Antes usei a acción github para facer un script de compilación e despregue automáticos, pero descubrín que o servizo de implementación non podía ssh.

Entrar no sistema de rescate e mirar os rexistros é un problema de permisos:

`Missing privilege separation directory: /run/sshd`

Podes crear este directorio co seguinte comando

```
chown root:root /
systemd-tmpfiles --create
```

Despois de repetidas investigacións, é github action o usuario que cargou tar é `1001` `uid`

tar O desempaquetado debe facerse sen parámetros `--no-same-owner` descomprimirase en `uid` para o usuario `1001`

Como resultado, rsync cambiará o grupo de usuarios do directorio raíz e, a continuación, non poderá iniciar sesión en ssh despois de reiniciar.

Modifique o script de descompresión do seguinte xeito:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


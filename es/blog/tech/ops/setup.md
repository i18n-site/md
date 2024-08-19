# Inicialice El Servidor (Use La Partición BTRFS, Instantánea Programada Del Snapper)

## Servidor De Compra contabo

contabo es un proveedor de VPS barato en Alemania con una larga trayectoria (más de 20 años) y muchos usuarios (más de 200.000), por lo que no hay que preocuparse por huir.

VPS comprar [contabo.com](//contabo.com) recuerda elegir el precio en euros, que es más barato.

![](https://i-01.eu.org/1718285782.avif)

Hay una tarifa única de instalación para contabo.
Sin embargo, hay algunos días al mes en los que la tarifa de instalación es gratuita. Simplemente regístrese y preste atención a los correos electrónicos promocionales.

Además de la tarifa de área libre en Europa, otras regiones tienen diferentes niveles de aumento de precios.

Elegí un servidor europeo. De todos modos, después de usar Cloudflare, no hay mucha diferencia entre los servidores.

La configuración final es la siguiente, 16GB de memoria, 6CPU, 200 GB NVMe, 9,50 euros al mes, equivalente a 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Este precio es casi una décima parte del precio de Alibaba Cloud y Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Solía [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) para ejecutar el rendimiento y los parámetros:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Mostrando CPU Modelo `AMD EPYC 9224 24-Core Processor` , puntuación de rendimiento de un solo núcleo 1285
, puntuación multinúcleo 4277 Ver más resultados [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Compré tres servidores a la vez y los activé al mismo tiempo. Esto garantiza que los servidores estén en la misma sala de computadoras, lo que facilita la creación de alta disponibilidad en el futuro.

Sus servidores se cuelgan ocasionalmente, lo que garantiza la accesibilidad del sitio web gracias a su alta disponibilidad.

Los nuevos usuarios deben enviar sus tarjetas de identificación para la autenticación de nombre real al realizar la compra.

## Configurar Inicio De Sesión Sin Contraseña

Después de unos minutos, todos los servidores se activaron

Lo primero IP editar el `~/.ssh/config` de la máquina local para establecer un alias y luego usar `ssh-copy-id root@c2` para configurar el inicio de sesión sin contraseña.

![](https://i-01.eu.org/1718287198.avif)

Puede modificar este [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) para completar la configuración de inicialización más rápido.

Una vez completada la configuración sin contraseña, puede usarla [pdsh](https://github.com/chaos/pdsh) Puede operarse en lotes, lo cual es conveniente.

La primera es habilitar manualmente ipv6 y probar

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Luego actualice el sistema a ubuntu 24 con un clic e instale el software de uso común.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 significa cambiar el idioma al chino y la zona horaria a Beijing.

El software instalado de forma predeterminada está configurado de acuerdo con mis hábitos de uso personales, como [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. Si es necesario, puede copiar el almacén [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) y modificarlo según sea necesario.

Este paso lleva mucho tiempo. Después de esperar media hora, la actualización e instalación del software de uso común se realizará correctamente. Puedes confirmar esto con el siguiente comando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Acelera ssh

La red de Europa a China no es estable. Se recomienda utilizar [mosh](//mosh.org) para acelerar `ssh` .

Cree `c0` scripts en el directorio local `~/.bin` (principalmente agregados a la variable de entorno `PATH` ) de la siguiente manera:

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

Después de la creación, otorgue permisos ejecutables y establezca enlaces suaves `c1` y `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

En el futuro, puede ingresar directamente `c0` y `c1` para usar `mosh` conexiones directas de alta velocidad e ingresar [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Convertir El Formato De Partición De ext4 a btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Puede tomar instantáneas del disco para realizar copias de seguridad fácilmente.

Primero ingresa al sistema de rescate

![](https://i-01.eu.org/1718300448.avif)

Elija el rescate de Debian

![](https://i-01.eu.org/1718300753.avif)

Espere a que el servidor se reinicie

ssh Habrá cambios en las huellas digitales, use `ssh-keygen -R ip` para limpiarlo

Luego ejecute el siguiente script para convertir la partición

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

El script reiniciará automáticamente el sistema después de que la conversión sea exitosa.

### Ver Relación De Compresión btrfs

Se comprimirá automáticamente de forma predeterminada. El comando para verificar la relación de compresión es el siguiente:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compresión Manual

Si eres perfeccionista, también puedes realizar una compresión completa del disco manualmente. El comando es el siguiente:

```bash
btrfs filesystem defragment -r -czstd /
```

Como se muestra en la figura siguiente, puede ver que después de la compresión manual en el nuevo sistema, se comprimieron casi 100 MB más.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Cree Una Copia De Seguridad De Instantáneas De Btrfs Con Pargo

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) es el mejor socio para la copia de seguridad Btrfs .

El script de inicialización creará el directorio `~/ubuntu` , simplemente ejecute el siguiente comando:

```
~/ubuntu/snapper/init.sh
```

¡Nos vemos en el contenido del guión [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Utilice `snapper list-configs` para ver los subvolúmenes para los que se configuran las instantáneas

![](https://i-01.eu.org/1718302689.avif)

Utilice `snapper -c mnt list` para ver una instantánea de un subvolumen

`/etc/snapper/configs/mnt` puede ver la configuración de copia de seguridad específica de este subvolumen

Más referencias:

[¡Juega fácilmente con la función de instantáneas de Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Instantánea Del Servidor De Contacto

contabo Proporciona la función de instantáneas del servidor, pero no admite instantáneas programadas. Escribí un [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) para tomar instantáneas diarias.

![](https://i-01.eu.org/1718304206.avif)

Para restaurar una instantánea del servidor, primero haga clic en Crontol en el menú de administración

![](https://i-01.eu.org/1718304275.avif)

Luego, haga clic en Snapshots para restaurar.

![](https://i-01.eu.org/1718304063.avif)

Sin embargo, la granularidad de esta instantánea es demasiado grande. Una vez restaurada, los datos recién agregados se perderán por completo, así que utilícela con precaución.

Generalmente es más conveniente utilizar instantáneas btrfs.

## Detalles Del Sistema De Rescate

Ingrese al sistema de rescate 22 Después de que el puerto sea [tcping](https://github.com/paradiseduo/tcping) accesible, no podrá acceder a él con la contraseña establecida durante 2-3 minutos. Solo espere un momento y todo estará bien.

```
tcping ip 22 -c 9999
```

Se puede controlar la accesibilidad del puerto.

### ¡Cómo Acceder Al Disco Duro Después De Ingresar Al Rescate &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Puede ver la instantánea, por ejemplo

```
snapper -c etc list
```

Ver cambios en el archivo de instantáneas

```
snapper -c etc status 5..6
```

Ver texto de diferencias específico

```
snapper -c etc diff 3..5
```

Restaurar instantánea: por ejemplo, deshacer todos los cambios después de la instantánea 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Habilitar La Persistencia Del Registro

Habilitar la persistencia de registros en un sistema de rescate requiere que cree manualmente el directorio correspondiente y realice algunos pasos adicionales, porque es posible que no tenga un servicio systemd en ejecución. Estos son los pasos que puedes probar:

Primero chroot, luego

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reinicie su sistema Ubuntu: después de realizar los cambios anteriores, debe reiniciar su máquina normalmente y en su sistema Ubuntu en lugar del sistema de rescate.

De esta manera, systemd-journald comenzará con la nueva configuración y comenzará a almacenar registros de forma persistente en el disco duro.

Tenga en cuenta que las operaciones anteriores se realizan en un sistema de rescate, por lo que esos cambios no tendrán efecto hasta que el sistema se reinicie y ya no esté en modo de rescate.

Esto significa que no verá inmediatamente ningún cambio en los registros existentes que se vuelvan persistentes, pero todos los registros generados después persistirán.

De esta manera puede ver los registros del servicio ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notas Sobre Enfermedades Difíciles Y Complicadas

### Resuelva El Extraño Problema: El Servidor No Puede ssh

Usé la acción de github para crear un script de compilación e implementación automática antes, pero descubrí que el servicio de implementación no podía ser ssh.

Entrar al sistema de rescate y mirar los registros es una cuestión de permisos:

`Missing privilege separation directory: /run/sshd`

Puede crear este directorio utilizando el siguiente comando:

```
chown root:root /
systemd-tmpfiles --create
```

Después de repetidas investigaciones, es porque github action El usuario `uid` de tar es `1001`

tar El desembalaje debe realizarse si no hay parámetro `--no-same-owner` , se descomprimirá a `uid` para `1001` usuarios

Como resultado, rsync cambiará el grupo de usuarios del directorio raíz y luego no podrá iniciar sesión en ssh después de reiniciar.

Modifique el script de descompresión de la siguiente manera:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
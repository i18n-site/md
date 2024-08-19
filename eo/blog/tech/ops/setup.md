# Komencu La Servilon (Uzu BTRFS-Diskon, Snapper Planitan Momentfoton)

## contabo Aĉetservilo

contabo estas malmultekosta VPS-provizanto en Germanio kun longa historio (pli ol 20 jaroj) kaj multaj uzantoj (pli ol 200 000), do ne necesas zorgi pri forkuro.

VPS [contabo.com](//contabo.com) memoru elekti eŭroprezojn, kiuj estas pli malmultekostaj.

![](https://i-01.eu.org/1718285782.avif)

Estas unufoja instalkotizo por contabo.
Tamen, estas kelkaj tagoj ĉiumonate, kie la instalado-kotizo estas senpaga. Nur registriĝu kaj atentu la reklamajn retpoŝtojn.

Krom la senpaga areo-kotizo en Eŭropo, aliaj regionoj havas malsamajn nivelojn de prezaltiĝo.

Mi elektis eŭropan servilon Ĉiukaze, post uzi cloudflare, ne estas multe da diferenco inter la serviloj.

La fina agordo estas kiel sekvas, 16GB-memoro, 6CPU, 200 GB NVMe, 9,50 eŭroj monate, ekvivalenta al 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ĉi tiu prezo estas preskaŭ unu dekono de la prezo de Alibaba Cloud kaj Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Mi [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) por ruli la agadon kaj parametrojn:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU modelon `AMD EPYC 9224 24-Core Processor` , unukernan rendimentan poenton 1285
, multkerna poentaro 4277 Vidu pliajn rezultojn [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Mi aĉetis tri servilojn samtempe kaj aktivigis ilin samtempe. Ĉi tio certigas, ke la serviloj estas en la sama komputilejo, faciligante konstrui altan haveblecon en la estonteco.

Ĝiaj serviloj foje haltigas, certigante retejan alireblecon per alta havebleco.

Novaj uzantoj devas sendi siajn ID-kartojn por realnoma aŭtentigo dum aĉeto.

## Agordu Senpasvortan Ensaluton

Post kelkaj minutoj, la serviloj ĉiuj estis aktivigitaj.

La unua afero IP redakti `~/.ssh/config` de la loka maŝino por agordi kaŝnomon, kaj poste uzi `ssh-copy-id root@c2` por agordi senpasvortan ensaluton.

![](https://i-01.eu.org/1718287198.avif)

Vi povas modifi ĉi tiun [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) por kompletigi la komencan agordon pli rapide.

Post kiam la senpasvorta agordo estas kompletigita, vi povas uzi ĝin [pdsh](https://github.com/chaos/pdsh) Ĝi povas esti funkciigita en aroj, kio estas oportuna.

La unua estas mane ebligi ipv6 kaj testi

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Poste ĝisdatigu la sistemon al ubuntu 24 per unu klako kaj instalu ofte uzatan programaron.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 signifas ŝanĝi lingvon al la ĉina kaj horzonon al Pekino.

La programaro instalita defaŭlte estas agordita laŭ miaj personaj uzadokutimoj, kiel [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ktp. Se necese, vi povas kopii la [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -stokon kaj modifi ĝin laŭbezone.

Ĉi tiu paŝo prenas longan tempon Post atendado de duonhoro, la ĝisdatigo kaj instalado de kutime uzata programaro estos sukcesa. Vi povas konfirmi ĉi tion per la sekva komando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Rapidigas ssh

La reto de Eŭropo al Ĉinio ne estas stabila [mosh](//mosh.org) rekomendas uzi `ssh` .

Kreu `c0` skriptojn en la loka dosierujo `~/.bin` (ĉefe aldonita al mediovariablo `PATH` ) jene:

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

Post kreado, donu ruleblajn permesojn kaj mallaŭgajn ligojn `c1` kaj `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Estonte, vi povas rekte enigi `c0` kaj `c1` por uzi `mosh` -altrapidan rektan konekton kaj eniri [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konverti Subdiskonformaton De ext4 Al btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) preni diskojn por facila sekurkopio.

Unue eniru la savsistemon

![](https://i-01.eu.org/1718300448.avif)

Elektu Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Atendu, ke la servilo rekomencu

ssh fingrospuroj ŝanĝoj, uzu `ssh-keygen -R ip` por purigi ĝin

Poste rulu la sekvan skripton por konverti la sekcion

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

La skripto aŭtomate rekomencos la sistemon post kiam la konvertiĝo sukcesos.

### Rigardu Btrfs-Kunpremproporcion

Ĝi aŭtomate kunpremos defaŭlte La komando por kontroli la kunpremadon estas jena:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Mana Kunpremo

Se vi estas perfektisto, vi ankaŭ povas fari plenan diskon kunpremadon permane La komando estas jena:

```bash
btrfs filesystem defragment -r -czstd /
```

Kiel montrite en la suba figuro, vi povas vidi, ke post mana kunpremo en la nova sistemo, preskaŭ 100MB pli estis kunpremitaj.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Kreu Btrfs Momentan Rezervan Sekurkopion Per snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) la plej bona partnero por Btrfs rezervo.

La komenca skripto kreos la dosierujon `~/ubuntu` , nur rulu la sekvan komandon:

```
~/ubuntu/snapper/init.sh
```

Ĝis revido en la skripto enhavo [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Uzu `snapper list-configs` por vidi la subvolumojn por kiuj estas fiksitaj momentfotoj.

![](https://i-01.eu.org/1718302689.avif)

Uzu `snapper -c mnt list` por vidi momentfoton de subvolumo

`/etc/snapper/configs/mnt` povas vidi la specifajn rezervajn agordojn de ĉi tiu subvolumo

Pliaj referencoj:

[Facile ludu per la momentfoto funkcio de Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Contabo-Servila Momentfoto

contabo Disponigas servilon momentfotojn, sed ne subtenas planitajn momentfotojn Mi skribis [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) por preni ĉiutagajn momentfotojn.

![](https://i-01.eu.org/1718304206.avif)

Por restarigi servilan momentfoton, unue alklaku Crontol en la administra menuo

![](https://i-01.eu.org/1718304275.avif)

Poste, alklaku Momentfotojn por restarigi.

![](https://i-01.eu.org/1718304063.avif)

Tamen, la granulareco de ĉi tiu momentfoto estas tro granda Post restaŭrigado, la lastatempe aldonitaj datumoj estos tute perditaj, do bonvolu uzi ĝin singarde.

Estas kutime pli oportune uzi btrfs-fotojn.

## Detaloj Pri Savsistemo

Enigu la 22 Post kiam la haveno estas [tcping](https://github.com/paradiseduo/tcping) alirebla, vi ne povos aliri ĝin kun la fiksita pasvorto dum 2-3 minutoj.

```
tcping ip 22 -c 9999
```

Havena alirebleco povas esti monitorita.

### Kiel Aliri La Malmolan Diskon Post Eniro De Savo &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Vi povas vidi la momentfoton, ekzemple

```
snapper -c etc list
```

Rigardu momentajn dosierŝanĝojn

```
snapper -c etc status 5..6
```

Rigardu specifan diftekston

```
snapper -c etc diff 3..5
```

Restarigu momentfoton: Ekzemple, malfaru ĉiujn ŝanĝojn post momentfoto 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Ebligu Protokolan Persistadon

Ebligi protokolan persistadon sub savsistemo postulas vin permane krei la respondan dosierujon kaj plenumi kelkajn pliajn paŝojn, ĉar vi eble ne havas funkciantan systemd-servon. Jen paŝoj, kiujn vi povas provi:

Unue chroot, tiam

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Rekomencu en via Ubuntu-sistemo: Post fari ĉi-suprajn ŝanĝojn, vi devas rekomenci vian maŝinon normale kaj en via Ubuntu-sistemo anstataŭ la savsistemo.

Tiamaniere, systemd-journald komencos kun la nova agordo kaj komencos konservi protokolojn persiste sur la malmola disko.

Memoru, ke ĉi-supraj operacioj estas faritaj sur savsistemo, do tiuj ŝanĝoj ne efektiviĝos ĝis la sistemo estos rekomencita kaj ne plu en savreĝimo.

Ĉi tio signifas, ke vi ne tuj vidos ŝanĝojn al ekzistantaj protokoloj, kiuj iĝas konstantaj, sed ĉiuj protokoloj generitaj post tio estos konservitaj.

Tiel vi povas vidi la protokolojn de la ssh-servo

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notoj Pri Malfacilaj Kaj Komplikaj Malsanoj

### Solvu La Strangan Problemon: La Servilo Ne Povas ssh

Mi uzis github-ago por fari aŭtomatan kompilon kaj deplojan skripton antaŭe, sed trovis, ke la deploja servo ne povus esti ssh.

Eniri la savsistemon kaj rigardi la protokolojn estas permesa problemo:

`Missing privilege separation directory: /run/sshd`

Vi povas krei ĉi tiun dosierujon per la sekva komando

```
chown root:root /
systemd-tmpfiles --create
```

Post ripetaj esploroj, estas github action Uzanto `uid` de tar estas `1001`

Malpakaĵo devas esti se ne ekzistas parametro `--no-same-owner` , ĝi estos malkunpremita al `uid` por `1001` uzantoj tar

Kiel rezulto, rsync ŝanĝos la uzantgrupon de la radika dosierujo, kaj tiam vi ne povos ensaluti al ssh post rekomenco.

Modifi la malkunpreman skripton jene:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
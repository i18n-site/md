# Server Daminɛ (Baara Kɛ Ni BTRFS Tilayɔrɔba Ye, Snapper Scheduled Snapshot)

## contabo Sannifeerekɛla

contabo ye VPS dilanbaga ye min sɔngɔ man gɛlɛn Alimanjamana na, a tariku ka jan (a ka ca ni san 20 ye) ani a baarakɛla caman (ka tɛmɛ 200.000 kan), o la, kun t’a la ka hami boli la.

VPS aw bɛ sanni kɛ [contabo.com](//contabo.com) aw hakili to a la ka Euro sɔngɔ sugandi, o min sɔngɔ ka dɔgɔ.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Siɲɛ kelen sigili sara bɛ kɛ contabo la.
Nka, tile damadɔ bɛ yen kalo o kalo, installation (dadon) sara bɛ Kɛ fu ye I tɔgɔ sɛbɛn dɔrɔn k'i janto promotion emails (fɔlikan) la.

Ka fara yɔrɔ fu sara kan Erɔpu jamanaw na, mara wɛrɛw ka sɔngɔ jiginni hakɛ tɛ kelen ye.

N ye Erɔpu sèrwɛri dɔ sugandi A kɛra cogo o cogo, cloudflare baara kɔfɛ, danfaraba tɛ sèrwɛriw ni ɲɔgɔn cɛ.

Labɛn laban ye nin ye, 16GB hakilijagabɔ, 6CPU, 200 GB NVMe, 9,50 euros kalo kɔnɔ, o bɛ bɛn 74,43 RMB ma.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**O sɔngɔ bɛ se ka kɛ Alibaba Cloud ni Amazon sɔngɔ tilayɔrɔ tannan kelen ye** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

N tun bɛ baara kɛ ni [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display Model CPU `AMD EPYC 9224 24-Core Processor` baarakɛcogo kelen-kelen 1285 score !
, caman-caman-score 4277 Aw ye jaabi wɛrɛw lajɛ [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

N ye sèrwɛri saba san waati kelen na k’u baara waati kelen na O b’a to sèrwɛriw bɛ ɔridinatɛri so kelen kɔnɔ, o b’a to sɔrɔli ka nɔgɔn don nataw la.

A ka sèrwɛriw bɛ telefɔni da tuma dɔw la, ka sitiw sɔrɔli sabati ni sɔrɔba ye.

Baarakɛla kuraw ka kan k’u ka ID kartiw di walasa ka tɔgɔ yɛrɛyɛrɛw sɛgɛsɛgɛ ni u bɛ sanni kɛ.

## A’ Ye Doncogo Labɛn Min Tɛ Tɔgɔlasɛbɛn Ye

Miniti damadɔw tɛmɛnen kɔ, sèrwɛriw bɛɛ tun bɛ baara la.

`ssh-copy-id root@c2` fɔlɔ ye ka sigida masin IP `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Aw bɛ se ka nin [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) in sɛmɛntiya walasa ka daminɛko labɛnni dafa joona.

O kɔfɛ, a bɛ se ka baara kɛ n’a ye [pdsh](https://github.com/chaos/pdsh)

Fɔlɔ ye ka ipv6 ni test (sɛgɛsɛgɛli) Kɛ ni bolo ye

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

O kɔ fɛ, i bɛ sistɛmu in sɛmɛntiya ka kɛ ubuntu 24 ye ni digi kelen ye ani ka porogaramuw sigi minnu bɛ baara kɛ tuma caman na.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 kɔrɔ ye ka kan caman wuli ka taa Sinuwakan na ani ka waatibolodacogo caman wuli ka taa Pekin.

Porozɛ minnu bɛ sigi sen kan ka kɛɲɛ ni ne yɛrɛ ka baarakɛcogo ye, i n’a fɔ [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , wdfl Ni a mago bɛ a la, i bɛ se ka [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) magasin kopi kɛ k’a sɛmɛntiya i n’a fɔ i mago bɛ cogo min na.

O wale in bɛ waati jan ta Lɛrɛ tilancɛ makɔnɔni kɔfɛ, porogaramu minnu bɛ kɛ ka caya, olu sɛgɛsɛgɛli n’u sigili bɛna ɲɛ. Aw bɛ se k’a sɛmɛntiya ni nin cikan in ye:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Bɛ Teliya ssh

Réseau min bɛ bɔ Erɔpu ka taa Sinuwa jamana na, o tɛ sabati A ka ɲi ka baara kɛ ni `ssh` ye [mosh](//mosh.org)

`c0` sɛbɛnni dɔ dabɔ sigida masin `PATH` `~/.bin`

```bash
#!/usr/bin/env bash ye

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Dabɔ kɔfɛ, yamaruyaw di minnu bɛ se ka kɛ ani soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Don nataw la [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html) `c1` bɛ se ka `mosh` `c0`

## Yɛlɛma Donna Tilali Cogoya La Ka Bɔ ext4 La Ka Taa btrfs La

[btrfs](https://wikipedia.org/wiki/Btrfs) Ka se ka disiki ja ta walasa ka kɔpi nɔgɔya.

Fɔlɔ ka don kisi sira la

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Debian Rescue sugandi

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Aw bɛ a jira ko sèrwɛri ka daminɛ kokura

Bololabaara caman bɛna kɛ tuma min na ssh baara kɛ ni `ssh-keygen -R ip`

O kɔ fɛ, nin sɛbɛnni in Kɛ walasa ka tilayɔrɔ in 'kɔnɔna Yɛlɛma

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script bɛna sistɛmu daminɛ kokura a yɛrɛma fɛn caman tigɛli kɔfɛ.

### Aw Ye btrfs Compression Ratio Lajɛ

A bɛna sɛgɛsɛgɛli kɛ a yɛrɛma ka kɛɲɛ ni a daminɛ ye.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuel De Compression (Sɔgɔsɔgɔninjɛ Min Bɛ Kɛ Ni Bolo Ye).

N’i ​​ye dafalenya ɲininikɛla ye, i bɛ se fana ka disiki dafalen sɛgɛsɛgɛli kɛ i bolo la Cikan ye nin ye

```bash
btrfs filesystem defragment -r -czstd /
```

I n’a fɔ a jiralen bɛ cogo min na ja in na, i bɛ se k’a ye ko bololabaara kɛlen kɔfɛ sistɛmu kura kɔnɔ, 100MB ɲɔgɔnna wɛrɛ degunna.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Btrfs Snapshot Backup Dɔ Dabɔ Ni snapper Ye

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

Daminɛ-sɛbɛn bɛna `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Aw ka ɲɔgɔn ye script kɔnɔkow la [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Baara kɛ ni `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Baara kɛ ni `snapper -c mnt list`

`/etc/snapper/configs/mnt` Aw bɛ se ka nin subvolume in ka backup settings kɛrɛnkɛrɛnnenw lajɛ

Sɛbɛn wɛrɛw:

[Tulon nɔgɔya la ni Btrfs ka snapshot baarakɛcogo ye snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Sèrvèr Ka Jatebɔ

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Walasa ka sèrvèr snapshot lasegin, Crontol digi fɔlɔ management menu kɔnɔ

<img alt="" src="https://i-01.eu.org/1718304275.avif">

O kɔ, Snapshots digi walasa ka segin.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Nka, nin ja in granularity ka bon kojugu Ni a seginna a cogo kɔrɔ la, kunnafoni kura minnu farala a kan, olu bɛna tunun pewu, o la aw bɛ baara kɛ n’a ye ni hakilijagabɔ ye.

A ka c’a la, a ka nɔgɔn ka baara kɛ ni btrfs snapshots ye.

## Kisili Sira Kunnafoni

Aw bɛ don kisili sira kɔnɔ 22 Port [tcping](https://github.com/paradiseduo/tcping) accessible kɔfɛ, aw tɛna se ka don a la ni password set ye miniti 2-3 kɔnɔ.

```
tcping ip 22 -c 9999
```

Port sɔrɔli bɛ se ka kɔlɔsi.

### Cogo Min Na Ka Don Disque Dur Kɔnɔ Ka Don Rescue Kɔnɔ &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Aw bɛ se ka ja lajɛ, misali la

```
snapper -c etc list
```

Yɛlɛma minnu bɛ kɛ snapshot file la, olu lajɛ

```
snapper -c etc status 5..6
```

Diff text kɛrɛnkɛrɛnnenw lajɛ

```
snapper -c etc diff 3..5
```

Restore snapshot: Misali la, fɛn caman b’a la ka Changements bɛɛ kɔfɛ snapshot 5 kɔfɛ

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aw Bɛ Se Ka Log Persistence (Sɛbɛnni Sabatili) Kɛ

Ka log persistence (sɛbɛnni sabatili) kɛ kisi-sitɛmu kɔnɔ, o b’a ɲini i fɛ i ka bololabaarakɛlaw ka ɲɛbilasɛbɛn dilan ani ka fɛɛrɛ wɛrɛw kɛ, bawo n’a sɔrɔla i tɛ ni systemd baarakɛminɛn ye min bɛ baara la. Aw bɛ se ka fɛɛrɛ minnu kɛ, olu filɛ nin ye:

Fɔlɔ chroot, o kɔfɛ

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Segin ka don i ka Ubuntu sitɛmu kɔnɔ: Yɛlɛma minnu fɔra sanfɛ, i ka kan k’i ka masin daminɛ kokura cogo bɛnnen na ani ka don i ka Ubuntu sitɛmu kɔnɔ sanni ka don kisi sitɛmu kɔnɔ.

O cogo la, systemd-journald bɛna daminɛ ni labɛn kura ye ani ka sɛbɛnniw marali daminɛ tuma bɛɛ disiki gɛlɛn kan.

Aw k’a to aw hakili la ko nin baara minnu fɔra sanfɛ, olu bɛ kɛ kisi-sitɛmu kan, o la, o fɛn caman bɛna kɛ dɔrɔn ni sistɛmu daminɛna kokura, wa a tɛ kisi cogo la tugun.

O kɔrɔ ye ko i tɛna a ye o yɔrɔnin bɛɛ ko fɛn caman b’a la ka fɛn caman Changements (Yɛlɛma) kɛ logement (sɛbɛnni) kɔrɔw la, nka log (sɛbɛn) minnu bɛ sɔrɔ o kɔfɛ, olu bɛɛ bɛna to sen na.

O cogo la i bɛ se ka ssh baarakɛyɔrɔ ka sɛbɛnw lajɛ

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Kɔlɔsili Minnu Bɛ Kɛ Bana Gɛlɛnw Ni Bana Gɛlɛnw Kan

### Gɛlɛya Kabakoma in Ɲɛnabɔ: Sèrwɛri Tɛ Se Ka ssh

N ye github wale kɛ ka automatique compilation ni deployment script dilan ka kɔrɔ, nka n y’a ye ko deployment service ma se ka ssh.

Ka don kisi sira la ani ka jirisunw lajɛ, o ye yamaruya ko ye:

`Missing privilege separation directory: /run/sshd`

Aw bɛ se ka nin ɲɛbilasɛbɛn in da ni nin cikan in ye

```
chown root:root /
systemd-tmpfiles --create
```

Sɛgɛsɛgɛli segin-segin kɔfɛ, o sababu `1001` github action baarakɛla min ye tar bila `uid`

tar `--no-same-owner` `uid` `1001`

O de kosɔn, rsync bɛna root directory baarakɛla kulu Changer, o kɔfɛ i tɛna se ka don ssh kɔnɔ i daminɛni kɔfɛ.

Aw bɛ decompression script sɛmɛntiya nin cogo la:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


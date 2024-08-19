# Server Daminɛ (Baara Kɛ Ni BTRFS Tilayɔrɔba Ye, Snapper Scheduled Snapshot)

## contabo Sannifeerekɛla

contabo ye VPS dilanbaga ye min sɔngɔ man gɛlɛn Alimanjamana na, a tariku ka jan (a ka ca ni san 20 ye) ani a baarakɛla caman (ka tɛmɛ 200.000 kan), o la, kun t’a la ka hami boli la.

VPS aw bɛ san [contabo.com](//contabo.com) aw hakili to a la ka Euro sɔngɔ sugandi, o min sɔngɔ ka dɔgɔ.

![](https://i-01.eu.org/1718285782.avif)

Siɲɛ kelen sigili sara bɛ kɛ contabo la.
Nka, tile damadɔ bɛ yen kalo o kalo, installation (dadon) sara bɛ Kɛ fu ye I tɔgɔ sɛbɛn dɔrɔn k'i janto promotion emails (fɔlikan) la.

Ka fara yɔrɔ fu sara kan Erɔpu jamanaw na, mara wɛrɛw ka sɔngɔ jiginni hakɛ tɛ kelen ye.

N ye Erɔpu sèrwɛri dɔ sugandi A kɛra cogo o cogo, cloudflare baara kɔfɛ, danfaraba tɛ sèrwɛriw ni ɲɔgɔn cɛ.

Labɛn laban ye nin ye, 16GB hakilijagabɔ, 6CPU, 200 GB NVMe, 9,50 euros kalo kɔnɔ, o bɛ bɛn 74,43 RMB ma.

![](https://i-01.eu.org/1718286008.avif)

**O sɔngɔ bɛ se ka kɛ Alibaba Cloud ni Amazon sɔngɔ tilayɔrɔ tannan kelen ye** .

![](https://i-01.eu.org/1718356956.avif)

N tun bɛ baara kɛ ni [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

A jirala CPU Model `AMD EPYC 9224 24-Core Processor` , baarakɛcogo kelen-kelen bɛɛ jate 1285
, caman-caman-score 4277 Aw ye jaabi wɛrɛw lajɛ [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

N ye sèrwɛri saba san waati kelen na k’u baara waati kelen na O b’a to sèrwɛriw bɛ ɔridinatɛri so kelen kɔnɔ, o b’a to sɔrɔli ka nɔgɔn don nataw la.

A ka sèrwɛriw bɛ telefɔni da tuma dɔw la, ka sitiw sɔrɔli sabati ni sɔrɔba ye.

Baarakɛla kuraw ka kan k’u ka ID kartiw di walasa ka tɔgɔ yɛrɛyɛrɛw sɛgɛsɛgɛ ni u bɛ sanni kɛ.

## A’ Ye Doncogo Labɛn Min Tɛ Tɔgɔlasɛbɛn Ye

Miniti damadɔw tɛmɛnen kɔ, sèrwɛriw bɛɛ tun bɛ baara la.

Fɛn fɔlɔ IP ka sigida masin ka `~/.ssh/config` Labɛn walasa ka tɔgɔ wɛrɛ Sìgi, o kɔ fɛ ka `ssh-copy-id root@c2` Kɛ ka donko labɛn min tɛ daɲɛ dogolen ye.

![](https://i-01.eu.org/1718287198.avif)

Aw bɛ se ka nin [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) in sɛmɛntiya walasa ka daminɛko labɛnni dafa joona.

O kɔfɛ, a bɛ se ka baara kɛ n’a ye [pdsh](https://github.com/chaos/pdsh)

Fɔlɔ ye ka ipv6 ni test (sɛgɛsɛgɛli) Kɛ ni bolo ye

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

O kɔ fɛ, i bɛ sistɛmu in sɛmɛntiya ka kɛ ubuntu 24 ye ni digi kelen ye ani ka porogaramuw sigi sen kan minnu bɛ kɛ ka caya.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 kɔrɔ ye ka kan caman wuli ka taa Sinuwakan na ani ka waatibolodacogo caman wuli ka taa Pekin.

Porozɛ minnu bɛ sigi sen kan ka kɛɲɛ ni ne yɛrɛ ka baarakɛcogo ye, i n’a fɔ [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , wdfl Ni a mago bɛ a la, i bɛ se ka [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) magasin kopi kɛ k’a sɛmɛntiya i n’a fɔ i mago bɛ cogo min na.

O wale in bɛ waati jan ta Lɛrɛ tilancɛ makɔnɔni kɔfɛ, porogaramu minnu bɛ kɛ ka caya, olu sɛgɛsɛgɛli n’u sigili bɛna ɲɛ. Aw bɛ se k’o sɛmɛntiya ni nin cikan in ye:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Bɛ Teliya ssh

Rezo min bɛ bɔ Erɔpu ka taa Sinuwa jamana na, o tɛ sabati A ka ɲi ka baara kɛ ni `ssh` [mosh](//mosh.org) .

Sɛbɛnni `c0` dabɔ sigida ɲɛbilasɛbɛn `~/.bin` kɔnɔ (kɛrɛnkɛrɛnnenya la, a bɛ fara sigida fɛn caman sɛgɛsɛgɛli `PATH` kan) i n’a fɔ nin cogo in na:

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

Dabɔ kɔfɛ, yamaruyaw di minnu bɛ se ka kɛ ani soft-link `c1` ani `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Don nataw la, i bɛ se ka `c0` ni `c1` don tigitigi walasa ka baara kɛ ni `mosh` minnu bɛ teliya kosɛbɛ ka don [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Yɛlɛma Donna Tilali Cogoya La Ka Bɔ ext4 La Ka Taa btrfs La

[btrfs](https://wikipedia.org/wiki/Btrfs) Ka se ka disiki ja ta walasa ka kɔpi nɔgɔya.

Fɔlɔ ka don kisi sira la

![](https://i-01.eu.org/1718300448.avif)

Debian Rescue sugandi

![](https://i-01.eu.org/1718300753.avif)

Aw bɛ a jira ko sèrwɛri ka daminɛ kokura

ssh `ssh-keygen -R ip`

O kɔ fɛ, nin sɛbɛnni in kɛ walasa ka tilayɔrɔba in sɛmɛntiya

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script bɛna sistɛmu daminɛ kokura a yɛrɛma fɛn caman tigɛli kɔfɛ.

### Aw Ye btrfs Compression Ratio Lajɛ

A bɛna a yɛrɛma sɔgɔsɔgɔ ka kɛɲɛ ni a daminɛ ye.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuel De Compression (Sɔgɔsɔgɔninjɛ Min Bɛ Kɛ Ni Bolo Ye).

N’i ye dafalenya ɲininikɛla ye, i bɛ se fana ka disiki dafalen sɛgɛsɛgɛli kɛ i bolo la Cikan ye nin ye:

```bash
btrfs filesystem defragment -r -czstd /
```

I n’a fɔ a jiralen bɛ cogo min na ja in na, i bɛ se k’a ye ko bololabaara kɛlen kɔfɛ sistɛmu kura kɔnɔ, 100MB ɲɔgɔnna wɛrɛ degunna.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Btrfs Snapshot Backup Dɔ Dabɔ Ni snapper Ye

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

Daminɛ-sɛbɛn bɛna `~/ubuntu` ɲɛbilasɛbɛn Dabɔ, nin cikan in Kɛ dɔrɔn:

```
~/ubuntu/snapper/init.sh
```

Aw ka ɲɔgɔn ye script kɔnɔkow la [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Baara kɛ ni `snapper list-configs` walasa ka jatebɔsen fitininw lajɛ, ja minnu bɛ sigi sen kan.

![](https://i-01.eu.org/1718302689.avif)

Baara kɛ ni `snapper -c mnt list` walasa ka subvolume dɔ ja lajɛ

`/etc/snapper/configs/mnt` bɛ se ka nin subvolume in ka backup settings kɛrɛnkɛrɛnnenw lajɛ

Ɲɛfɔli wɛrɛw:

[Tulon nɔgɔya la ni Btrfs ka snapshot baarakɛcogo ye snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Sèrvèr Ka Jatebɔ

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

![](https://i-01.eu.org/1718304206.avif)

Walasa ka sèrvèr snapshot lasegin, Crontol digi fɔlɔ management menu kɔnɔ

![](https://i-01.eu.org/1718304275.avif)

O kɔ, Snapshots digi walasa ka segin.

![](https://i-01.eu.org/1718304063.avif)

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

Aw k’a to aw hakili la ko nin baara minnu fɔra sanfɛ, olu bɛ kɛ kisilan dɔ kan, o la, o fɛn caman Changements tɛna kɛ fo ni sistɛmu daminɛna kokura, wa a tɛ kɛ kisicogo la tugun.

O kɔrɔ ye ko i tɛna fɛn ye min bɛ fɛn caman Changements (Yɛlɛma) ye o yɔrɔnin bɛɛ la logement (sɛbɛnni) kɔrɔw la minnu bɛ kɛ persistent (dafalen) ye, nka logs (sɛbɛnni) minnu bɛ Bɔ o kɔfɛ, olu bɛɛ bɛna to sen na.

O cogo la i bɛ se ka ssh baarakɛyɔrɔ ka sɛbɛnw lajɛ

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Kɔlɔsili Minnu Bɛ Kɛ Bana Gɛlɛnw Ni Bana Gɛlɛnw Kan

### Gɛlɛya Kabakoma in Ɲɛnabɔ: Sèrwɛri Tɛ Se Ka ssh

N ye github wale Kɛ ka automatique compilation ni deployment script Kɛ ka Tɛmɛ, nka n y'a Sɔrɔ deployment service tɛ Se ka Kɛ ssh ye.

Ka don kisi sira la ani ka jirisunw lajɛ, o ye yamaruya ko ye:

`Missing privilege separation directory: /run/sshd`

Aw bɛ se ka nin ɲɛbilasɛbɛn in da ni nin cikan in ye

```
chown root:root /
systemd-tmpfiles --create
```

Sɛgɛsɛgɛli segin-segin kɔfɛ, o sababu ye github action tar ka baarakɛla `uid` ye `1001` ye

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
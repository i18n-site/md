# Hyɛ Seva No Ase (Fa BTRFS Mpaapaemu, Snapper Nhyehyɛe Snapshot Di Dwuma)

## contabo Adetɔ Somfo

contabo yɛ VPS dwumadie a ne boɔ yɛ mmerɛw wɔ Germany a ɛwɔ abakɔsɛm tenten (bɛboro mfeɛ 20) ne nnipa pii a wɔde di dwuma (bɛboro 200,000), enti ɛho nhia sɛ wohaw wo ho sɛ wobɛguan.

VPS woretɔ [contabo.com](//contabo.com) kae sɛ wobɛpaw Euro bo, a ne bo yɛ mmerɛw.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Wɔde contabo a wɔde besisi hɔ pɛnkoro ho ka wɔ hɔ.
Nanso, nna kakraa bi wɔ hɔ ɔsram biara a instɔlehyɛn ho ka no yɛ nea wontua hwee.

Wɔ beae a wotua ho ka a wontua hwee wɔ Europa akyi no, ɛsono sɛnea mmeae afoforo bo kɔ soro.

Mepaw European server Anyway, bere a mede cloudflare adi dwuma akyi no, nsonsonoe kɛse biara nni server ahorow no ntam.

Nsiesiei a etwa to no te sɛ nea edidi so yi, 16GB memory, 6CPU, 200 GB NVMe, 9.50 euros ɔsram biara, a ɛne 74.43 RMB yɛ pɛ.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ɛkame ayɛ sɛ saa bo yi yɛ Alibaba Cloud ne Amazon bo no nkyem du mu biako** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Mede [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display Model CPU `AMD EPYC 9224 24-Core Processor` adwumayɛ nkontabuo a ɛyɛ baako-core 1285
, nkontaahyɛde a ɛwɔ nsɛm pii mu 4277 Hwɛ nea afi mu aba pii [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Metɔɔ server abiɛsa bere koro mu na meyɛɛ no ​​adwuma bere koro mu Eyi hwɛ hu sɛ server ahorow no wɔ kɔmputa dan koro mu, na ɛma ɛyɛ mmerɛw sɛ mɛkyekye nea ɛwɔ hɔ a ɛkorɔn daakye.

Ɛtɔ mmere bi a ne server ahorow no to telefon so, na ɛhwɛ hu sɛ wobetumi akɔ wɛbsaet no so denam nea ɛwɔ hɔ kɛse so.

Ɛsɛ sɛ wɔn a wɔde di dwuma foforo no de wɔn ID nkrataa kɔma na ama wɔagye din ankasa atom bere a wɔretɔ ade no.

## Hyehyɛ Login a Wonni Password

Simma kakraa bi akyi no, wɔde server ahorow no nyinaa yɛɛ adwuma.

Adeɛ a ɛdi kan ne sɛ wobɛsesa local machine no `~/.ssh/config` Set alias for IP na afei fa `ssh-copy-id root@c2` hyehyɛ login a password nni mu.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Wubetumi asesa saa [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) yi na ama woawie initialization nhyehyeɛ no ntɛmntɛm.

Sɛ wɔyɛ nhyehyɛe a enni password no wie a, wubetumi de adi dwuma [pdsh](https://github.com/chaos/pdsh)

Nea edi kan ne sɛ wode nsa bɛma ipv6 ayɛ adwuma na woasɔ ahwɛ

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Afei fa click biako ma system no kɔ ubuntu 24 na fa software a wɔtaa de di dwuma no gu so.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 kyerɛ sɛ wobɛdan kasa akɔ China kasa mu na bere nhyehyɛe akɔ Beijing so.

Wɔahyehyɛ softwea a wɔde ahyɛ mu default no sɛnea m’ankasa mede di dwuma, te sɛ [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ne nea ɛkeka ho Sɛ ɛho hia a, wubetumi ayɛ [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) adekoradan no ho mfonini na woasesa no sɛnea ɛho hia.

Saa anammɔn yi gye bere tenten Sɛ wotwɛn dɔnhwerew fã wie a, softwea a wɔtaa de di dwuma no foforo na wɔde bɛhyɛ mu no bɛyɛ yiye. Wubetumi de ahyɛde a edidi so yi asi so dua:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Ma Ahoɔhare Yɛ ssh

Network a efi Europa kɔ China `ssh` ntumi nnyina pintinn Wɔkamfo kyerɛ sɛ wode bedi dwuma [mosh](//mosh.org)

Yɛ `c0` script wɔ local machine `~/.bin` (titiriw no wɔde aka environment variable `PATH` ) directory no mu sɛnea edidi so yi:

```bash
#!/usr/bin/env bash a wɔde di dwuma

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Sɛ wobɔ wie a, ma kwan a wotumi yɛ ne soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Daakye [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html) `c1` `mosh` `c0`

## Dane Mpaepaemu Format Fi ext4 Kɔ btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Ebetumi afa disk snapshots ama ayɛ mmerɛw sɛ wobɛkora so.

Di kan hyɛn ogye nhyehyɛe no mu

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Paw Debian Nkwagye

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Twɛn ma server no nsan mfi ase bio

Nsateaa nkyerɛwee nsakrae bɛba bere a ssh , fa `ssh-keygen -R ip`

Afei fa script a edidi so yi yɛ adwuma na dannan mpaapaemu no

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script no bɛsan ahyɛ nhyehyɛe no ase ankasa bere a nsakrae no adi nkonim akyi.

### Hwɛ btrfs Nhyɛso Ratio

Ɛbɛbɔ ne ho so default so.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Nsaano a Wɔde Hyɛ Mu

Sɛ woyɛ obi a wopɛ sɛ woyɛ pɛ a, wubetumi nso de nsa ayɛ disk compression a edi mũ Ahyɛde no te sɛ nea edidi so yi

```bash
btrfs filesystem defragment -r -czstd /
```

Sɛnea wɔakyerɛ wɔ mfonini a ɛwɔ aseɛ ha no mu no, wobɛtumi ahunu sɛ wɔ nsaano nhyɛsoɔ akyi wɔ nhyehyɛeɛ foforɔ no mu no, ɛkame ayɛ sɛ wɔhyɛɛ 100MB bio.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Fa snapper Yɛ Btrfs Snapshot Backup

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

Initialization script no bɛbɔ `~/ubuntu` directory no, tu ahyɛde a edidi so yi ara kwa:

```
~/ubuntu/snapper/init.sh
```

Yɛbɛhunu wo wɔ script no mu nsɛm mu [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Fa `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Fa `snapper -c mnt list`

`/etc/snapper/configs/mnt` Wubetumi ahwɛ backup nhyehyɛe pɔtee a ɛwɔ subvolume yi mu

Nsɛm foforo a wɔde gyina so:

[Ɛnyɛ den sɛ wode snapshot function a ɛwɔ Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server No Ho Mfonini

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Sɛ wopɛ sɛ wosan de server snapshot bi ba a, di kan klik Crontol so wɔ management menu no mu

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Afei, klik Snapshots so na san fa ba.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Nanso, granularity a ɛwɔ saa snapshot yi mu no sõ dodo Sɛ wɔsan de ba a, data foforo a wɔde aka ho no bɛyera koraa, enti yɛsrɛ wo fa ahwɛyiye di dwuma.

Mpɛn pii no ɛyɛ mmerɛw kɛse sɛ wode btrfs mfonini ahorow bedi dwuma.

## Nkwagye Nhyehyɛe Ho Nsɛm a Ɛkɔ Akyiri

Hyɛn rescue system no mu Sɛ port no yɛ [tcping](https://github.com/paradiseduo/tcping) accessible wie 22 , worentumi mfa password a wɔahyɛ no nkɔ mu 2-3 simma Twɛn kakra na ɛbɛyɛ yie.

```
tcping ip 22 -c 9999
```

Wobetumi ahwɛ sɛnea wobetumi akɔ hyɛn gyinabea no so.

### Sɛnea Wobɛkɔ Hard Drive No So Bere a Woahyɛn Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Sɛ nhwɛso no, wubetumi ahwɛ mfonini no

```
snapper -c etc list
```

Hwɛ snapshot fael nsakrae

```
snapper -c etc status 5..6
```

Hwɛ diff text pɔtee bi

```
snapper -c etc diff 3..5
```

San fa snapshot: Sɛ nhwɛso no, yi nsakrae nyinaa fi snapshot 5 akyi

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Ma Log Persistence Nyɛ Adwuma

Log persistence a wobɛma ayɛ adwuma wɔ rescue system ase no hwehwɛ sɛ wode nsa yɛ directory a ɛne no hyia no na woyɛ anammɔn foforo bi, efisɛ ebia wunni systemd service a ɛrekɔ so. Anamɔn a wubetumi asɔ ahwɛ ni:

Afei chroot a edi kan

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

San hyɛ wo Ubuntu nhyehyɛe no mu: Sɛ woyɛ atifi hɔ nsakrae no wie a, ɛsɛ sɛ wosan bɔ wo mfiri no sɛnea ɛte daa na wokɔ wo Ubuntu nhyehyɛe no mu sen sɛ wobɛfa nkwagye nhyehyɛe no mu.

Saa kwan yi so no, systemd-journald bɛhyɛ aseɛ de nhyehyeɛ foforɔ no na ahyɛ aseɛ akora logs so daa wɔ hard disk no so.

Ma ɛntena w’adwene mu sɛ wɔyɛ atifi hɔ dwumadi ahorow no wɔ ogye nhyehyɛe so, enti saa nsakrae no bedi dwuma bere a wɔasan ahyɛ nhyehyɛe no ase na enni nkwagye tebea mu bio nkutoo.

Wei kyerɛ sɛ worenhu ntɛm ara sɛ nsakraeɛ biara bɛba logs a ɛwɔ hɔ dada no mu a ɛbɛyɛ nea ɛbɛtena hɔ daa, nanso logs a wɔayɛ wɔ yei akyi nyinaa bɛkɔ so atra hɔ.

Saa kwan yi so no wobɛtumi ahwɛ ssh dwumadie no logs

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Nsɛm a Wɔakyerɛw Afa Nyarewa a Emu Yɛ Den Na Ɛyɛ Den Ho

### Siesie Ɔhaw a Ɛyɛ Nwonwa No: Server No Ntumi ssh

Me de github adeyɛ dii dwuma de yɛɛ automatic compilation ne deployment script kan, nanso mihui sɛ deployment service no ntumi nyɛ ssh.

Sɛ wobɛhyɛn rescue system no mu na woahwɛ logs no a, ɛyɛ kwan ho asɛm:

`Missing privilege separation directory: /run/sshd`

Wubetumi de ahyɛde a edidi so yi ayɛ saa daerekta yi

```
chown root:root /
systemd-tmpfiles --create
```

Nhwehwɛmu a wɔayɛ no mpɛn pii akyi no, ɛyɛ nea ɔde di dwuma a ɔde tar too hɔ `uid` ne `1001` github action

tar Ɛsɛ sɛ wɔyɛ Unpacking a parameters nni mu `--no-same-owner` wɔbɛ decompressed akɔ `uid` for `1001` user

Nea ɛde aba ne sɛ, rsync bɛsesa user kuw a ɛwɔ root directory no mu, na afei worentumi nkɔ ssh mu bere a woasan afi ase awie no.

Sesa decompression script no sɛnea edidi so yi:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


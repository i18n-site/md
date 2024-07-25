# ເລີ່ມຕົ້ນເຊີບເວີ (ໃຊ້ BTRFS partition, snapper ກໍານົດເວລາ snapshot)

## contabo ເຄື່ອງແມ່ຂ່າຍການຊື້

contabo ເປັນຜູ້ໃຫ້ບໍລິການ VPS ລາຄາຖືກໃນເຢຍລະມັນທີ່ມີປະຫວັດຍາວ (ຫຼາຍກວ່າ 20 ປີ) ແລະຜູ້ໃຊ້ຫຼາຍຄົນ (ຫຼາຍກວ່າ 200,000) ດັ່ງນັ້ນບໍ່ຈໍາເປັນຕ້ອງກັງວົນກ່ຽວກັບການແລ່ນຫນີ.

VPS ຊື້ [contabo.com](//contabo.com) ຢ່າລືມເລືອກລາຄາເອີໂຣ, ເຊິ່ງລາຄາຖືກກວ່າ.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

ມີຄ່າຕິດຕັ້ງຄັ້ງດຽວສໍາລັບ contabo.
ຢ່າງໃດກໍຕາມ, ມີສອງສາມມື້ທຸກໆເດືອນທີ່ຄ່າທໍານຽມການຕິດຕັ້ງແມ່ນບໍ່ເສຍຄ່າພຽງແຕ່ລົງທະບຽນແລະເອົາໃຈໃສ່ກັບອີເມວສົ່ງເສີມ.

ນອກເຫນືອໄປຈາກຄ່າທໍານຽມພື້ນທີ່ຟຣີໃນເອີຣົບ, ພາກພື້ນອື່ນໆມີລະດັບການເພີ່ມຂຶ້ນລາຄາທີ່ແຕກຕ່າງກັນ.

ຂ້ອຍເລືອກເຄື່ອງແມ່ຂ່າຍເອີຣົບຢ່າງໃດກໍ່ຕາມ, ຫຼັງຈາກໃຊ້ cloudflare, ບໍ່ມີຄວາມແຕກຕ່າງຫຼາຍລະຫວ່າງເຄື່ອງແມ່ຂ່າຍ.

ການຕັ້ງຄ່າສຸດທ້າຍແມ່ນດັ່ງຕໍ່ໄປນີ້, ຫນ່ວຍຄວາມຈໍາ 16GB, 6CPU, 200 GB NVMe, 9.50 ເອີໂຣຕໍ່ເດືອນ, ເທົ່າກັບ 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**ລາຄານີ້ແມ່ນເກືອບຫນຶ່ງສ່ວນສິບຂອງລາຄາຂອງ Alibaba Cloud ແລະ Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

ຂ້າ​ພະ​ເຈົ້າ​ໄດ້​ນໍາ​ໃຊ້ [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

ຈໍສະແດງຜົນ CPU `AMD EPYC 9224 24-Core Processor` ຄະແນນປະສິດທິພາບຫຼັກດຽວ 1285
, ຫຼາຍ​ຄະ​ແນນ 4277 ເບິ່ງຜົນໄດ້ຮັບເພີ່ມເຕີມ [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

ຂ້ອຍຊື້ສາມເຊີບເວີໃນເວລາດຽວແລະເປີດໃຊ້ພວກມັນໃນເວລາດຽວກັນ, ນີ້ຮັບປະກັນວ່າເຄື່ອງແມ່ຂ່າຍຢູ່ໃນຫ້ອງຄອມພິວເຕີດຽວກັນ, ເຮັດໃຫ້ມັນງ່າຍຕໍ່ການສ້າງຄວາມພ້ອມສູງໃນອະນາຄົດ.

ເຊີບເວີຂອງມັນວາງສາຍເປັນບາງໂອກາດ, ຮັບປະກັນການເຂົ້າເຖິງເວັບໄຊທ໌ໂດຍຜ່ານຄວາມພ້ອມສູງ.

ຜູ້ໃຊ້ໃຫມ່ຈໍາເປັນຕ້ອງສົ່ງບັດປະຈໍາຕົວຂອງເຂົາເຈົ້າສໍາລັບການຢັ້ງຢືນຊື່ທີ່ແທ້ຈິງໃນເວລາຊື້.

## ຕັ້ງຄ່າການເຂົ້າສູ່ລະບົບແບບບໍ່ມີລະຫັດຜ່ານ

ຫຼັງຈາກສອງສາມນາທີ, ເຄື່ອງແມ່ຂ່າຍທັງຫມົດໄດ້ຖືກເປີດໃຊ້.

ສິ່ງທໍາອິດແມ່ນເພື່ອແກ້ໄຂເຄື່ອງທ້ອງຖິ່ນ `~/.ssh/config` ກໍານົດນາມ `ssh-copy-id root@c2` ສໍາລັບ IP

<img alt="" src="https://i-01.eu.org/1718287198.avif">

ທ່ານສາມາດແກ້ໄຂ [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ນີ້ເພື່ອເຮັດສໍາເລັດການຕັ້ງຄ່າເບື້ອງຕົ້ນໄວຂຶ້ນ.

ຫຼັງ​ຈາກ​ການ​ຕັ້ງ​ຄ່າ​ບໍ່​ມີ​ລະ​ຫັດ​ຜ່ານ​ແມ່ນ​ສໍາ​ເລັດ​, ທ່ານ​ສາ​ມາດ​ນໍາ [pdsh](https://github.com/chaos/pdsh) ​ມັນ​ສາ​ມາດ​ໄດ້​ຮັບ​ການ​ດໍາ​ເນີນ​ການ​ໃນ batches​, ຊຶ່ງ​ເປັນ​ການ​ສະ​ດວກ​.

ທໍາອິດແມ່ນເພື່ອເປີດໃຊ້ ipv6 ດ້ວຍຕົນເອງແລະທົດສອບ

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

ຈາກນັ້ນຍົກລະດັບລະບົບເປັນ ubuntu 24 ດ້ວຍການຄລິກດຽວ ແລະຕິດຕັ້ງຊອບແວທີ່ໃຊ້ທົ່ວໄປ.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 ໝາຍເຖິງການປ່ຽນພາສາເປັນພາສາຈີນ ແລະເຂດເວລາໄປປັກກິ່ງ.

ຊອບແວທີ່ຕິດຕັ້ງໂດຍຄ່າເລີ່ມຕົ້ນແມ່ນຖືກຕັ້ງຄ່າຕາມນິໄສການໃຊ້ງານສ່ວນຕົວຂອງຂ້ອຍ, ເຊັ່ນ [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ແລະອື່ນໆ ຖ້າຈໍາເປັນ, ທ່ານສາມາດຄັດລອກ [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse ແລະດັດແປງມັນຕາມຄວາມຕ້ອງການ.

ຂັ້ນຕອນນີ້ໃຊ້ເວລາດົນຫຼັງຈາກລໍຖ້າເຄິ່ງຫນຶ່ງຊົ່ວໂມງ, ການຍົກລະດັບແລະການຕິດຕັ້ງຊອບແວທີ່ໃຊ້ທົ່ວໄປຈະປະສົບຜົນສໍາເລັດ. ທ່ານສາມາດຢືນຢັນມັນດ້ວຍຄໍາສັ່ງຕໍ່ໄປນີ້:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh ເລັ່ງ ssh

ເຄືອ​ຂ່າຍ​ຈາກ​ເອີ​ຣົບ​ໄປ​ຈີນ​ບໍ່​ມີ​ຄວາມ​ຫມັ້ນ​ຄົງ​ແນະ​ນໍາ `ssh` ​ນໍາ​ໃຊ້ [mosh](//mosh.org)

`PATH` `c0` script ໃນ local machine's `~/.bin`

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

ຫຼັງ​ຈາກ​ການ​ສ້າງ​, ໃຫ້​ອະ​ນຸ​ຍາດ​ປະ​ຕິ​ບັດ​ແລະ soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

ໃນອະນາ `c1` [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html) ທ່ານສາມາດເຂົ້າ `mosh` ກົງ `c0`

## ປ່ຽນຮູບແບບການແບ່ງປັນຈາກ ext4 ເປັນ btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) ສາ​ມາດ​ຖ່າຍ​ຮູບ​ແຜ່ນ​ສໍາ​ລັບ​ການ​ສໍາ​ຮອງ​ຂໍ້​ມູນ​ໄດ້​ງ່າຍ​.

ທໍາອິດເຂົ້າໄປໃນລະບົບກູ້ໄພ

<img alt="" src="https://i-01.eu.org/1718300448.avif">

ເລືອກ Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

ລໍຖ້າໃຫ້ເຊີບເວີຣີສະຕາດ

ການປ່ຽນແປງລາຍນິ້ວມືຈະເກີດຂຶ້ນ `ssh-keygen -R ip` ssh

ຫຼັງຈາກນັ້ນ, ດໍາເນີນການ script ດັ່ງຕໍ່ໄປນີ້ເພື່ອແປງພາທິຊັນ

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

ສະຄຣິບຈະເລີ່ມລະບົບຄືນໃໝ່ໂດຍອັດຕະໂນມັດຫຼັງຈາກການປ່ຽນແປງສຳເລັດ.

### ເບິ່ງອັດຕາສ່ວນການບີບອັດ btrfs

ມັນຈະອັດອັດຕະໂນມັດຕາມຄ່າເລີ່ມຕົ້ນ ຄໍາສັ່ງເພື່ອກວດສອບອັດຕາສ່ວນການບີບອັດແມ່ນດັ່ງນີ້:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### ການບີບອັດດ້ວຍມື

ຖ້າ​ຫາກ​ວ່າ​ທ່ານ​ເປັນ perfectionist​, ທ່ານ​ຍັງ​ສາ​ມາດ​ປະ​ຕິ​ບັດ​ການ​ບີບ​ອັດ​ແຜ່ນ​ເຕັມ​ດ້ວຍ​ຕົນ​ເອງ​ຄໍາ​ສັ່ງ​ດັ່ງ​ຕໍ່​ໄປ​ນີ້​

```bash
btrfs filesystem defragment -r -czstd /
```

ດັ່ງທີ່ສະແດງຢູ່ໃນຮູບຂ້າງລຸ່ມນີ້, ທ່ານສາມາດເຫັນໄດ້ວ່າຫຼັງຈາກການບີບອັດຄູ່ມືໃນລະບົບໃຫມ່, ເກືອບ 100MB ຖືກບີບອັດ.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### ສ້າງການສໍາຮອງຂໍ້ມູນ Btrfs snapshot ກັບ snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ເປັນຄູ່ຮ່ວມງານທີ່ດີທີ່ສຸດສໍາລັບການສໍາຮອງຂໍ້ມູນ Btrfs .

script ການເລີ່ມຕົ້ນຈະສ້າງໄດເລກະທໍລີ `~/ubuntu` , ພຽງແຕ່ດໍາເນີນການຄໍາສັ່ງຕໍ່ໄປນີ້:

```
~/ubuntu/snapper/init.sh
```

ພົບ​ກັນ​ໃນ​ເນື້ອ​ໃນ script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

ໃຊ້ `snapper list-configs` ເພື່ອເບິ່ງປະລິມານຍ່ອຍທີ່ຕັ້ງໄວ້.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

ໃຊ້ `snapper -c mnt list` ເພື່ອເບິ່ງຮູບຖ່າຍຂອງປະລິມານຍ່ອຍ

`/etc/snapper/configs/mnt` ທ່ານ​ສາ​ມາດ​ເບິ່ງ​ການ​ຕັ້ງ​ຄ່າ​ສໍາ​ຮອງ​ຂໍ້​ມູນ​ສະ​ເພາະ​ຂອງ subvolume ນີ້

ອ້າງອີງເພີ່ມເຕີມ:

[ຫຼິ້ນ​ໄດ້​ຢ່າງ​ງ່າຍ​ດາຍ​ດ້ວຍ​ການ​ທໍາ​ງານ snapshot ຂອງ Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## ພາບຖ່າຍເຊີບເວີ contabo

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

<img alt="" src="https://i-01.eu.org/1718304206.avif">

ເພື່ອຟື້ນຟູການຖ່າຍພາບຂອງເຊີບເວີ, ທໍາອິດໃຫ້ຄລິກໃສ່ Crontol ໃນເມນູການຈັດການ

<img alt="" src="https://i-01.eu.org/1718304275.avif">

ຈາກນັ້ນ, ຄລິກ Snapshots ເພື່ອຟື້ນຟູ.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

ແນວໃດກໍ່ຕາມ, ລາຍລະອຽດຂອງພາບຖ່າຍນີ້ມີຂະໜາດໃຫຍ່ເກີນໄປເມື່ອກູ້ຂໍ້ມູນຄືນມາໃໝ່ແລ້ວ, ຂໍ້ມູນທີ່ເພີ່ມເຂົ້າມາໃໝ່ຈະສູນເສຍໄປໝົດ, ສະນັ້ນ ກະລຸນາໃຊ້ມັນດ້ວຍຄວາມລະມັດລະວັງ.

ໂດຍປົກກະຕິແລ້ວມັນສະດວກກວ່າທີ່ຈະໃຊ້ພາບຖ່າຍ btrfs.

## ລາຍລະອຽດລະບົບກູ້ໄພ

ເຂົ້າໄປໃນລະບົບການກູ້ໄພ 22 ຫຼັງຈາກພອດແມ່ນ [tcping](https://github.com/paradiseduo/tcping) ເຂົ້າເຖິງ, ທ່ານຈະບໍ່ສາມາດເຂົ້າເຖິງມັນໄດ້ດ້ວຍລະຫັດຜ່ານທີ່ຕັ້ງໄວ້ສໍາລັບ 2-3 ນາທີພຽງແຕ່ລໍຖ້າແລະມັນຈະດີ.

```
tcping ip 22 -c 9999
```

ສາມາດຕິດຕາມການເຂົ້າຫາພອດໄດ້.

### ວິ​ທີ​ການ​ເຂົ້າ​ເຖິງ​ຮາດ​ດິດ​ຫຼັງ​ຈາກ​ເຂົ້າ​ໄປ​ກູ້​ໄພ &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

ທ່ານສາມາດເບິ່ງພາບຖ່າຍ, ສໍາລັບການຍົກຕົວຢ່າງ

```
snapper -c etc list
```

ເບິ່ງການປ່ຽນແປງໄຟລ໌ snapshot

```
snapper -c etc status 5..6
```

ເບິ່ງຂໍ້ຄວາມຄວາມແຕກຕ່າງສະເພາະ

```
snapper -c etc diff 3..5
```

ຟື້ນຟູພາບຖ່າຍ: ຕົວຢ່າງ, ຍົກເລີກການປ່ຽນແປງທັງໝົດຫຼັງຈາກຖ່າຍພາບ 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### ເປີດໃຊ້ການຄົງຕົວຂອງບັນທຶກ

ການເປີດໃຊ້ການຄົງຕົວຂອງບັນທຶກພາຍໃຕ້ລະບົບກູ້ໄພຮຽກຮ້ອງໃຫ້ທ່ານສ້າງໄດເລກະທໍລີທີ່ສອດຄ້ອງກັນດ້ວຍຕົນເອງແລະດໍາເນີນການບາງຂັ້ນຕອນເພີ່ມເຕີມ, ເພາະວ່າທ່ານອາດຈະບໍ່ມີບໍລິການລະບົບທີ່ເຮັດວຽກ. ນີ້ແມ່ນຂັ້ນຕອນທີ່ທ່ານສາມາດລອງໄດ້:

chroot ທໍາອິດ, ຫຼັງຈາກນັ້ນ

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot ເຂົ້າໄປໃນລະບົບ Ubuntu ຂອງທ່ານ: ຫຼັງຈາກເຮັດການປ່ຽນແປງຂ້າງເທິງ, ທ່ານຈໍາເປັນຕ້ອງ reboot ເຄື່ອງຂອງທ່ານເປັນປົກກະຕິແລະເຂົ້າໄປໃນລະບົບ Ubuntu ຂອງທ່ານແທນທີ່ຈະເປັນລະບົບການກູ້ໄພ.

ດ້ວຍວິທີນີ້, systemd-journald ຈະເລີ່ມຕົ້ນດ້ວຍການຕັ້ງຄ່າ ໃໝ່ ແລະເລີ່ມເກັບຮັກສາບັນທຶກຢ່າງຕໍ່ເນື່ອງຢູ່ໃນຮາດດິດ.

ຈົ່ງຈື່ໄວ້ວ່າການປະຕິບັດງານຂ້າງເທິງແມ່ນດໍາເນີນຢູ່ໃນລະບົບກູ້ໄພ, ດັ່ງນັ້ນການປ່ຽນແປງເຫຼົ່ານັ້ນຈະມີຜົນພຽງແຕ່ເມື່ອລະບົບຖືກປິດເປີດໃຫມ່ແລະບໍ່ຢູ່ໃນຮູບແບບການກູ້ໄພອີກຕໍ່ໄປ.

ນີ້ໝາຍຄວາມວ່າທ່ານຈະບໍ່ເຫັນການປ່ຽນແປງໃດໆຕໍ່ບັນທຶກທີ່ມີຢູ່ແລ້ວໃນທັນທີ, ແຕ່ບັນທຶກທັງໝົດທີ່ສ້າງຂຶ້ນຫຼັງຈາກນີ້ຈະຍັງຄົງຢູ່.

ວິທີນີ້ທ່ານສາມາດເບິ່ງບັນທຶກຂອງການບໍລິການ ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## ບັນທຶກກ່ຽວກັບພະຍາດທີ່ມີຄວາມຫຍຸ້ງຍາກແລະສັບສົນ

### ແກ້ໄຂບັນຫາທີ່ແປກປະຫຼາດ: ເຄື່ອງແມ່ຂ່າຍບໍ່ສາມາດ ssh

ຂ້ອຍໃຊ້ການກະ ທຳ github ເພື່ອເຮັດໃຫ້ການລວບລວມອັດຕະໂນມັດແລະສະຄິບການ ນຳ ໃຊ້ກ່ອນ, ແຕ່ພົບວ່າການບໍລິການການ ນຳ ໃຊ້ບໍ່ສາມາດເປັນ ssh.

ການ​ເຂົ້າ​ໄປ​ໃນ​ລະ​ບົບ​ກູ້​ໄພ​ແລະ​ການ​ເບິ່ງ​ບັນ​ທຶກ​ເປັນ​ບັນ​ຫາ​ການ​ອະ​ນຸ​ຍາດ​:

`Missing privilege separation directory: /run/sshd`

ທ່ານສາມາດສ້າງໄດເລກະທໍລີນີ້ດ້ວຍຄໍາສັ່ງຕໍ່ໄປນີ້

```
chown root:root /
systemd-tmpfiles --create
```

ຫຼັງ​ຈາກ​ການ​ສືບ​ສວນ​ຊ​້​ໍາ​, ມັນ​ເປັນ `1001` github action ​ຜູ້​ໃຊ້​ທີ່​ອັບ​ໂຫລດ tar `uid`

tar Unpacking ຕ້ອງເຮັດໂດຍບໍ່ມີພາລາມິເຕີ `--no-same-owner` ມັນຈະຖືກ decompressed ເປັນ `uid` ສໍາລັບ `1001` user

ດັ່ງນັ້ນ, rsync ຈະປ່ຽນກຸ່ມຜູ້ໃຊ້ຂອງໄດເລກະທໍລີຮາກ, ແລະຫຼັງຈາກນັ້ນທ່ານຈະບໍ່ສາມາດເຂົ້າສູ່ລະບົບ ssh ຫຼັງຈາກ restarting.

ແກ້ໄຂສະຄຣິບ decompression ດັ່ງນີ້:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


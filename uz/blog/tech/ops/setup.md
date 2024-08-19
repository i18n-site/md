# Serverni Ishga Tushiring (Btrfs Bo'limidan Foydalaning, Rejalashtirilgan Snapshot)

## contabo Sotib Olish Serveri

contabo uzoq tarixga (20 yildan ortiq) va ko'p foydalanuvchilarga (200 000 dan ortiq) ega bo'lgan Germaniyadagi arzon VPS provayderi bo'lib, qochib ketish haqida tashvishlanishga hojat yo'q.

Sotib VPS [contabo.com](//contabo.com) arzonroq bo'lgan evro narxini tanlashni unutmang.

![](https://i-01.eu.org/1718285782.avif)

Contabo uchun bir martalik o'rnatish to'lovi mavjud.
Biroq, har oyda bir necha kun bor, bu erda o'rnatish to'lovi bepul.

Evropada bepul hudud to'lovidan tashqari, boshqa mintaqalarda narxlarning o'sishi turli darajalarga ega.

Men Yevropa serverini tanladim, baribir, cloudflare-dan foydalangandan so'ng, serverlar o'rtasida unchalik katta farq yo'q.

Yakuniy konfiguratsiya quyidagicha, 16 GB xotira, 6 CPU, 200 GB NVMe, oyiga 9,50 evro, 74,43 RMBga teng.

![](https://i-01.eu.org/1718286008.avif)

**Bu narx Alibaba Cloud va Amazon narxining deyarli o'ndan bir qismini tashkil etadi** .

![](https://i-01.eu.org/1718356956.avif)

Ishlash va parametrlarni ishlatish uchun [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU `AMD EPYC 9224 24-Core Processor` ko'rsatilmoqda, bitta yadroli ishlash reytingi 1285
, ko'p yadroli ball 4277 Boshqa natijalarni koʻrish [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Men bir vaqtning o'zida uchta serverni sotib oldim va ularni bir vaqtning o'zida faollashtirdim.

Uning serverlari vaqti-vaqti bilan o'chirib qo'yiladi, bu esa yuqori darajadagi mavjudlik orqali veb-saytga kirishni ta'minlaydi.

Yangi foydalanuvchilar sotib olayotganda haqiqiy ism-sharifini tekshirish uchun ID kartalarini topshirishlari kerak.

## Parolsiz Kirishni Sozlang

Bir necha daqiqadan so'ng barcha serverlar faollashtirildi.

Birinchi narsa, taxallusni o'rnatish uchun mahalliy mashinaning `~/.ssh/config` tahrirlash va keyin parolsiz kirishni sozlash uchun `ssh-copy-id root@c2` dan IP .

![](https://i-01.eu.org/1718287198.avif)

Boshlash konfiguratsiyasini tezroq bajarish uchun ushbu [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) o'zgartirishingiz mumkin.

Parolsiz konfiguratsiya tugallangandan so'ng siz undan foydalanishingiz mumkin [pdsh](https://github.com/chaos/pdsh) uni to'plamlarda ishlatish mumkin, bu qulay.

Birinchisi, ipv6 ni qo'lda yoqish va sinovdan o'tkazish

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Keyin bir marta bosish bilan tizimni ubuntu 24 ga yangilang va tez-tez ishlatiladigan dasturlarni o'rnating.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tilni xitoy tiliga va vaqt mintaqasini Pekinga almashtirishni anglatadi.

Sukut bo'yicha o'rnatilgan dastur mening shaxsiy foydalanish odatlarimga ko'ra sozlangan, masalan [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) va hokazo. Agar kerak bo'lsa, [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) omboridan nusxa ko'chirishingiz va kerak bo'lganda o'zgartirishingiz mumkin.

Bu qadam uzoq vaqt talab etadi, yarim soat kutgandan so'ng, tez-tez ishlatiladigan dasturiy ta'minotni yangilash va o'rnatish muvaffaqiyatli bo'ladi. Buni quyidagi buyruq bilan tasdiqlashingiz mumkin:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh ssh Ni Tezlashtiradi

Evropadan Xitoyga tarmoq barqaror emas `ssh` tezlashtirish uchun [mosh](//mosh.org)

`~/.bin` mahalliy katalogida `c0` skript yarating (asosan `PATH` muhit o'zgaruvchisiga qo'shiladi) quyidagicha:

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

Yaratgandan so'ng, bajariladigan ruxsatlarni va `c1` va `c2` yumshoq havolalarini bering.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Kelajakda siz to'g'ridan-to'g'ri `c0` va `c1` kiritishingiz va `mosh` yuqori tezlikdagi to'g'ridan-to'g'ri ulanishdan foydalanishingiz mumkin [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Bo'lim Formatini ext4 Dan btrfs Ga O'zgartiring

[btrfs](https://wikipedia.org/wiki/Btrfs) Oson zaxiralash uchun diskdan suratga olish mumkin.

Avval qutqaruv tizimiga kiring

![](https://i-01.eu.org/1718300448.avif)

Debian Rescue-ni tanlang

![](https://i-01.eu.org/1718300753.avif)

Server qayta ishga tushishini kuting

Barmoq izi o'zgaradi, uni tozalash uchun `ssh-keygen -R ip` ssh

Keyin bo'limni aylantirish uchun quyidagi skriptni ishga tushiring

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Konvertatsiya muvaffaqiyatli bo'lgandan keyin skript tizimni avtomatik ravishda qayta ishga tushiradi.

### btrfs Siqish Nisbatini Ko'ring

U sukut bo'yicha avtomatik ravishda siqiladi. Siqish nisbatini tekshirish buyrug'i quyidagicha:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Qo'lda Siqish

Agar siz perfektsionist bo'lsangiz, diskni to'liq siqishni qo'lda ham bajarishingiz mumkin, bu buyruq quyidagicha:

```bash
btrfs filesystem defragment -r -czstd /
```

Quyidagi rasmda ko'rsatilganidek, yangi tizimda qo'lda siqishdan so'ng, deyarli 100MB ko'proq siqilganligini ko'rishingiz mumkin.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### snapper Yordamida Btrfs Snapshot Zaxira Nusxasini Yarating

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs zaxiralash uchun eng yaxshi hamkor.

Boshlash skripti `~/ubuntu` katalogini yaratadi, faqat quyidagi buyruqni bajaring:

```
~/ubuntu/snapper/init.sh
```

Skript mazmunida ko'rishguncha [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Snapshotlar o'rnatilgan pastki jildlarni ko'rish uchun `snapper list-configs` foydalaning.

![](https://i-01.eu.org/1718302689.avif)

Pastki jildning suratini ko'rish uchun `snapper -c mnt list` foydalaning

`/etc/snapper/configs/mnt` ushbu pastki jildning maxsus zaxira sozlamalarini ko'rishi mumkin

Batafsil havolalar:

[Btrfs ning suratga olish funksiyasi bilan osongina o'ynang snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo Server snapshot funksiyasini taʼminlaydi, lekin rejalashtirilgan suratlarni qoʻllab [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) quvvatlamaydi.

![](https://i-01.eu.org/1718304206.avif)

Server snapshotini tiklash uchun avval boshqaruv menyusida Cronol-ni bosing

![](https://i-01.eu.org/1718304275.avif)

Keyin tiklash uchun Snapshots tugmasini bosing.

![](https://i-01.eu.org/1718304063.avif)

Biroq, bu oniy rasmning nozikligi juda katta, qayta tiklangandan so'ng, yangi qo'shilgan ma'lumotlar butunlay yo'qoladi, shuning uchun uni ehtiyotkorlik bilan ishlating.

Odatda btrfs suratlaridan foydalanish qulayroqdir.

## Qutqaruv Tizimining Tafsilotlari

Qutqaruv tizimiga kiring 22 portga [tcping](https://github.com/paradiseduo/tcping) mumkin bo'lgandan so'ng, siz unga o'rnatilgan parol bilan kira olmaysiz, bir 2-3 kutib turing va hammasi yaxshi bo'ladi.

```
tcping ip 22 -c 9999
```

Portga kirish imkoniyatini kuzatish mumkin.

### Qayta Tiklash Snapshotiga Kirganingizdan So'ng Qattiq Diskka Qanday Kirish Mumkin &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Masalan, suratni ko'rishingiz mumkin

```
snapper -c etc list
```

Surat faylidagi oʻzgarishlarni koʻring

```
snapper -c etc status 5..6
```

Muayyan farq matnini ko'ring

```
snapper -c etc diff 3..5
```

Suratni tiklash: Masalan, 5-rasmdan keyin barcha o‘zgarishlarni bekor qiling

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Jurnalda Doimiylikni Yoqish

Qutqaruv tizimida jurnalning doimiyligini yoqish sizdan mos katalogni qo'lda yaratishingiz va ba'zi qo'shimcha amallarni bajarishingizni talab qiladi, chunki sizda ishlayotgan systemd xizmati bo'lmasligi mumkin. Bu erda siz sinab ko'rishingiz mumkin bo'lgan qadamlar:

Avval chroot, keyin

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ubuntu tizimingizni qayta ishga tushiring: Yuqoridagi o'zgarishlarni amalga oshirgandan so'ng, siz qutqaruv tizimi o'rniga mashinangizni normal va Ubuntu tizimingizga qayta ishga tushirishingiz kerak.

Shunday qilib, systemd-journald yangi konfiguratsiyadan boshlanadi va jurnallarni qattiq diskda doimiy ravishda saqlashni boshlaydi.

Shuni yodda tutingki, yuqoridagi operatsiyalar qutqaruv tizimida amalga oshiriladi, shuning uchun bu o'zgarishlar tizim qayta ishga tushirilmaguncha va endi qutqaruv rejimida bo'lmaguncha kuchga kirmaydi.

Bu shuni anglatadiki, siz doimiy bo'lib qoladigan mavjud jurnallarda hech qanday o'zgarishlarni darhol ko'rmaysiz, ammo undan keyin yaratilgan barcha jurnallar saqlanib qoladi.

Shu tarzda siz ssh xizmatining jurnallarini ko'rishingiz mumkin

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Qiyin Va Murakkab Kasalliklar Haqida Eslatmalar

### G'alati Muammoni Hal Qiling: Server Ssh-Ni Ishlata Olmaydi

Men ilgari avtomatik kompilyatsiya va joylashtirish skriptini yaratish uchun github amalidan foydalanganman, lekin joylashtirish xizmati ssh bo'lishi mumkin emasligini aniqladim.

Qutqaruv tizimiga kirish va jurnallarga qarash ruxsat masalasidir:

`Missing privilege separation directory: /run/sshd`

Ushbu katalogni quyidagi buyruq yordamida yaratishingiz mumkin

```
chown root:root /
systemd-tmpfiles --create
```

Takroriy tekshiruvlardan so'ng, tar `uid` foydalanuvchisi `1001` bo'lgani github action

Agar `--no-same-owner` parametri bo'lmasa, u `1001` foydalanuvchi uchun `uid` ga ochiladi tar

Natijada, rsync ildiz katalogining foydalanuvchi guruhini o'zgartiradi va keyin qayta ishga tushirilgandan so'ng siz ssh-ga kira olmaysiz.

Dekompressiya skriptini quyidagicha o'zgartiring:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
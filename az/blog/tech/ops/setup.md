# Serveri Işə Salın (Btrfs Bölməsindən, Planlaşdırılmış Snapshotdan Istifadə Edin)

## contabo Satın Alma Serveri

contabo Almaniyada uzun tarixə (20 ildən çox) və bir çox istifadəçiyə (200.000-dən çox) malik ucuz VPS provayderidir, ona görə də qaçmaqdan narahat olmağa ehtiyac yoxdur.

VPS [contabo.com](//contabo.com) daha ucuz olan Avro qiymətlərini seçməyi unutmayın.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Contabo üçün birdəfəlik quraşdırma haqqı var.
Bununla belə, quraşdırma haqqının pulsuz olduğu bir neçə gün var, sadəcə qeydiyyatdan keçin və tanıtım e-poçtlarına diqqət yetirin.

Avropada pulsuz ərazi haqqı ilə yanaşı, digər regionlarda qiymət artımlarının müxtəlif səviyyələri var.

Mən Avropa serverini seçdim hər halda, cloudflare istifadə etdikdən sonra serverlər arasında çox da fərq yoxdur.

Son konfiqurasiya aşağıdakı kimidir, 16 GB yaddaş, 6 CPU, 200 GB NVMe, ayda 9,50 avro, 74,43 RMB-ə bərabərdir.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Bu qiymət Alibaba Cloud və Amazon qiymətlərinin demək olar onda biri qədərdir** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Performans və parametrləri işə salmaq üçün istifadə [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Ekran CPU `AMD EPYC 9224 24-Core Processor` tək nüvəli performans 1285
, çox nüvəli hesab 4277 Daha çox nəticəyə baxın [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Mən eyni anda üç server aldım və onları eyni anda aktivləşdirdim.

Onun serverləri vaxtaşırı telefonu bağlayaraq, yüksək əlçatanlıq vasitəsilə vebsaytın əlçatanlığını təmin edir.

Yeni istifadəçilər satın alarkən şəxsiyyət vəsiqələrini həqiqi adın autentifikasiyası üçün təqdim etməlidirlər.

## Parolsuz Girişi Konfiqurasiya Edin

Bir neçə dəqiqədən sonra bütün serverlər işə salındı.

Birincisi, yerli maşının `~/.ssh/config` üçün ləqəbini redaktə etmək IP sonra parolsuz girişi konfiqurasiya etmək üçün `ssh-copy-id root@c2` istifadə etməkdir.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Siz başlatma konfiqurasiyasını daha tez başa çatdırmaq üçün bu [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) dəyişdirə bilərsiniz.

Parolsuz konfiqurasiya tamamlandıqdan sonra onu istifadə edə bilərsiniz, bu da rahatdır [pdsh](https://github.com/chaos/pdsh)

Birincisi, ipv6-nı əl ilə aktivləşdirmək və test etməkdir

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Sonra sistemi bir kliklə ubuntu 24-ə təkmilləşdirin və çox istifadə olunan proqramı quraşdırın.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 dilin Çin dilinə və saat qurşağının Pekinə keçməsi deməkdir.

Defolt olaraq quraşdırılmış [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) mənim şəxsi istifadə [direnv](https://direnv.net/) uyğun olaraq konfiqurasiya edilmişdir, məsələn [mise](https://github.com/jdx/mise)

Bu addım çox vaxt aparır, yarım saat gözlədikdən sonra tez-tez istifadə olunan proqram təminatının təkmilləşdirilməsi və quraşdırılması uğurlu olacaq. Bunu aşağıdakı əmrlə təsdiqləyə bilərsiniz:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh ssh Sürətləndirir

Avropadan Çinə qədər `ssh` şəbəkə sabit deyil. Sürətləndirmək üçün gəlin [mosh](//mosh.org)

Yerli maşının `~/.bin` (əsasən `PATH` mühit dəyişəninə əlavə olunur) qovluğunda aşağıdakı kimi `c0` skripti yaradın:

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

Yaradılandan sonra icra edilə bilən icazələr və soft-link verin `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Gələcəkdə siz birbaşa daxil edə bilərsiniz `c0` `c1` və siz `mosh` yüksək sürətli birbaşa bağlantıdan istifadə edə və daxil edə bilərsiniz [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Bölmə Formatını Ext4-Dən Btrfs-Ə Çevirin

Asan ehtiyat nüsxə üçün disk snapshotları çəkə [btrfs](https://wikipedia.org/wiki/Btrfs) .

Əvvəlcə xilasetmə sisteminə daxil olun

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Debian Rescue seçin

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Serverin yenidən başlamasını gözləyin

Barmaq izi dəyişdirildikdə ssh onu təmizləmək üçün istifadə edin `ssh-keygen -R ip`

Sonra bölməni çevirmək üçün aşağıdakı skripti işə salın

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Dönüşüm uğurlu olduqdan sonra skript avtomatik olaraq sistemi yenidən işə salacaq.

### btrfs Sıxılma Nisbətinə Baxın

Sıxılma nisbətini yoxlamaq üçün əmr aşağıdakı kimidir:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Əl Ilə Sıxılma

Mükəmməllikçisinizsə, tam disk sıxılmasını əl ilə də həyata keçirə bilərsiniz

```bash
btrfs filesystem defragment -r -czstd /
```

Aşağıdakı şəkildə göstərildiyi kimi, yeni sistemdə əl ilə sıxılmadan sonra təxminən 100MB daha sıxıldığını görə bilərsiniz.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### snapper Ilə Btrfs Snapshot Ehtiyat Nüsxəsini Yaradın

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs backup üçün ən yaxşı tərəfdaşdır.

Başlama skripti `~/ubuntu` yaradacaq, sadəcə olaraq aşağıdakı əmri yerinə yetirin:

```
~/ubuntu/snapper/init.sh
```

Ssenari məzmununda görüşənədək [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Snapshotların təyin olunduğu alt cildlərə baxmaq üçün istifadə `snapper list-configs` .

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Alt cildin şəklini görmək üçün istifadə `snapper -c mnt list`

Bu alt cildin xüsusi ehtiyat parametrlərinə baxa `/etc/snapper/configs/mnt`

Daha çox istinadlar:

[Btrfs snapshot funksiyası ilə asanlıqla oynayın snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo Server snapshot funksiyasını təmin edir, [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) planlaşdırılmış snapshotları dəstəkləmir.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Server snapshotını bərpa etmək üçün əvvəlcə idarəetmə menyusunda Crontol düyməsini klikləyin

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Sonra bərpa etmək üçün Snapshots klikləyin.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Bununla belə, bu snapshotun qranulyarlığı çox böyükdür, bərpa edildikdən sonra yeni əlavə edilmiş məlumatlar tamamilə itiriləcək, ona görə də ehtiyatla istifadə edin.

Adətən btrfs snapshotlarından istifadə etmək daha rahatdır.

## Xilasetmə Sisteminin Təfərrüatları

Xilasetmə sisteminə daxil olun 22 Port [tcping](https://github.com/paradiseduo/tcping) əlçatan olduqdan sonra siz ona təyin edilmiş parolla daxil ola bilməyəcəksiniz, sadəcə bir az gözləyin və 2-3 şey yaxşı olacaq.

```
tcping ip 22 -c 9999
```

Port əlçatanlığına nəzarət edilə bilər.

### Restore Snapshot & a Daxil Olduqdan Sonra Sabit Diskə Necə Daxil Olmaq Olar

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Məsələn, snapshota baxa bilərsiniz

```
snapper -c etc list
```

Snapshot fayl dəyişikliklərinə baxın

```
snapper -c etc status 5..6
```

Xüsusi fərq mətninə baxın

```
snapper -c etc diff 3..5
```

Snapşotu bərpa et: Məsələn, 5-ci şəkildən sonra bütün dəyişiklikləri geri qaytarın

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Giriş Davamlılığını Aktivləşdirin

Xilasetmə sistemində qeydlərin davamlılığını aktivləşdirmək sizdən müvafiq kataloqu əl ilə yaratmağı və bəzi əlavə addımları yerinə yetirməyi tələb edir, çünki sizdə işləyən sistem xidmətiniz olmaya bilər. Budur cəhd edə biləcəyiniz addımlar:

Əvvəlcə chroot, sonra

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ubuntu sisteminizə yenidən başladın: Yuxarıdakı dəyişiklikləri etdikdən sonra, xilasetmə sistemi əvəzinə maşınınızı normal və Ubuntu sisteminizə yenidən yükləməlisiniz.

Beləliklə, systemd-journald yeni konfiqurasiya ilə başlayacaq və logları sabit diskdə davamlı olaraq saxlamağa başlayacaq.

Nəzərə alın ki, yuxarıdakı əməliyyatlar xilasetmə sistemində həyata keçirilir, ona görə də bu dəyişikliklər yalnız sistem yenidən işə salındıqdan sonra qüvvəyə minəcək və artıq xilasetmə rejimində olmayacaq.

Bu o deməkdir ki, siz dərhal mövcud qeydlərdə heç bir dəyişikliyin davamlı olduğunu görməyəcəksiniz, lakin bundan sonra yaradılan bütün qeydlər davamlı olacaq.

Bu yolla siz ssh xidmətinin qeydlərinə baxa bilərsiniz

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Çətin Və Mürəkkəb Xəstəliklər Haqqında Qeydlər

### Qəribə Problemi Həll Edin: Server Ssh-Ni Işlədə Bilmir

Mən əvvəllər avtomatik kompilyasiya və yerləşdirmə skripti yaratmaq üçün github fəaliyyətindən istifadə etdim, lakin aşkar etdim ki, yerləşdirmə xidməti ssh ola bilməz.

Xilasetmə sisteminə daxil olmaq və qeydlərə baxmaq icazə məsələsidir:

`Missing privilege separation directory: /run/sshd`

Bu qovluğu aşağıdakı əmrlə yarada bilərsiniz

```
chown root:root /
systemd-tmpfiles --create
```

Təkrar araşdırmalardan sonra `uid` səbəbi tar yükləyən `1001` github action

tar Qablaşdırma parametrləri olmadan aparılmalıdır `--no-same-owner` o, `1001` üçün `uid` istifadəçisinə açılacaq

Nəticədə, rsync kök kataloqunun istifadəçi qrupunu dəyişəcək və sonra yenidən başladıqdan sonra ssh-ə daxil ola bilməyəcəksiniz.

Dekompressiya skriptini aşağıdakı kimi dəyişdirin:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


# Sunucuyu Başlatın (Btrfs Bölümünü, Snapper Zamanlanmış Anlık Görüntüsünü Kullanın)

## contabo Satın Alma Sunucusu

contabo, Almanya'da uzun bir geçmişi (20 yıldan fazla) ve çok sayıda kullanıcısı (200.000'den fazla) olan ucuz bir VPS sağlayıcısıdır, bu nedenle kaçma konusunda endişelenmenize gerek yok.

[contabo.com](//contabo.com) satın VPS daha ucuz olan Euro fiyatını seçmeyi unutmayın.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Contabo için tek seferlik kurulum ücreti vardır.
Ancak her ay kurulum ücretinin ücretsiz olduğu birkaç gün vardır. Sadece kaydolun ve promosyon e-postalarına dikkat edin.

Avrupa'da serbest alan ücretinin yanı sıra diğer bölgelerde de farklı düzeylerde fiyat artışları yaşanıyor.

Ben Avrupa sunucusunu seçtim zaten cloudflare kullandıktan sonra sunucular arasında pek bir fark olmuyor.

Nihai konfigürasyon şu şekilde: 16 GB bellek, 6 CPU, 200 GB NVMe, ayda 9,50 euro, 74,43 RMB'ye eşdeğer.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Bu fiyat Alibaba Cloud ve Amazon fiyatının neredeyse onda biri kadar** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Performansı ve parametreleri çalıştırmak için [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) kullandım:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Ekran CPU Model `AMD EPYC 9224 24-Core Processor` tek çekirdek performans puanı 1285
, çok çekirdekli puan 4277 Daha fazla sonuç görün [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Aynı anda üç sunucu satın aldım ve bunları aynı anda etkinleştirdim. Bu, sunucuların aynı bilgisayar odasında olmasını sağlayarak gelecekte yüksek kullanılabilirlik oluşturmayı kolaylaştırıyor.

Sunucuları zaman zaman kapanıyor ve yüksek kullanılabilirlik sayesinde web sitesine erişilebilirlik sağlanıyor.

Yeni kullanıcıların, satın alma sırasında gerçek adla kimlik doğrulaması için kimlik kartlarını ibraz etmeleri gerekmektedir.

## Parolasız Oturum Açmayı Yapılandırın

Birkaç dakika sonra sunucuların tümü etkinleştirildi.

İlk şey, yerel makinenin `~/.ssh/config` İçin bir takma ad ayarlayın IP ardından parolasız oturum açmayı yapılandırmak için `ssh-copy-id root@c2` tuşunu kullanın.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Başlatma yapılandırmasını daha hızlı tamamlamak için bu [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) değiştirebilirsiniz.

Parolasız yapılandırma tamamlandıktan sonra onu kullanabilirsiniz [pdsh](https://github.com/chaos/pdsh) Toplu olarak çalıştırılabilir, bu da uygundur.

Birincisi ipv6'yı manuel olarak etkinleştirmek ve test etmektir.

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Daha sonra sistemi tek tıklamayla ubuntu 24'e yükseltin ve yaygın olarak kullanılan yazılımı yükleyin.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1, dili Çince'ye ve saat dilimini Pekin'e değiştirmek anlamına gelir.

Varsayılan olarak yüklenen yazılım [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) vb. gibi kişisel kullanım alışkanlıklarıma göre yapılandırılmıştır. Gerekirse [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) deposunu kopyalayabilir ve gerektiği gibi değiştirebilirsiniz.

Bu adım uzun zaman alır. Yarım saat bekledikten sonra yaygın olarak kullanılan yazılımların yükseltilmesi ve kurulumu başarılı olacaktır. Bunu aşağıdaki komutla onaylayabilirsiniz:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Ssh'yi Hızlandırır

Avrupa'dan Çin'e giden ağ istikrarlı `ssh` Hızlanmak için gelin [mosh](//mosh.org)

Yerel makinenin `~/.bin` (temel olarak `PATH` ortam değişkenine eklenir) dizininde aşağıdaki gibi bir `c0` betiği oluşturun:

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

Oluşturduktan sonra yürütülebilir izinleri verin ve yumuşak bağlantı `c1` , `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Gelecekte doğrudan `c0` , `c1` girebilirsiniz ve `mosh` kullanarak doğrudan bağlanıp [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Bölüm Formatını Ext4'ten Btrfs'ye Dönüştürün

Kolay yedekleme için disk anlık görüntüleri [btrfs](https://wikipedia.org/wiki/Btrfs) .

İlk önce kurtarma sistemine girin

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Debian Rescue'yu seçin

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Sunucunun yeniden başlatılmasını bekleyin

Parmak izi değişiklikleri şu durumlarda meydana gelecektir ssh temizlemek için `ssh-keygen -R ip`

Ardından bölümü dönüştürmek için aşağıdaki betiği çalıştırın

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Komut dosyası, dönüştürme başarılı olduktan sonra sistemi otomatik olarak yeniden başlatacaktır.

### btrfs Sıkıştırma Oranını Görüntüle

Varsayılan olarak otomatik olarak sıkıştırılacaktır. Sıkıştırma oranını kontrol etme komutu aşağıdaki gibidir:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuel Sıkıştırma

Eğer mükemmeliyetçiyseniz manuel olarak da tam disk sıkıştırması gerçekleştirebilirsiniz.

```bash
btrfs filesystem defragment -r -czstd /
```

Aşağıdaki şekilde görüldüğü gibi yeni sistemde manuel sıkıştırma sonrasında yaklaşık 100MB daha fazla sıkıştırıldığını görebilirsiniz.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### snapper Ile Btrfs Anlık Görüntü Yedeği Oluşturma

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs yedeklemesi için en iyi ortaktır.

Başlatma betiği `~/ubuntu` dizinini oluşturacaktır, sadece aşağıdaki komutu çalıştırın:

```
~/ubuntu/snapper/init.sh
```

Senaryo içeriğinde görüşmek üzere [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Anlık görüntülerin ayarlandığı alt hacimleri görüntülemek için `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Bir alt hacmin anlık görüntüsünü görüntülemek için `snapper -c mnt list`

Bu alt birimin özel yedekleme ayarlarını görüntüleyebilirsiniz `/etc/snapper/configs/mnt`

Daha fazla referans:

[Btrfs snapper 'in anlık görüntü işleviyle kolayca oynayın](https://zhuanlan.zhihu.com/p/31082518)

## contabo Sunucusu Anlık Görüntüsü

contabo Sunucu anlık görüntüsü işlevi sağlar, ancak zamanlanmış anlık görüntüleri desteklemez Günlük anlık görüntüler almak için bir [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) yazdım.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Sunucu anlık görüntüsünü geri yüklemek için öncelikle yönetim menüsünde Crontol'a tıklayın.

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Daha sonra geri yüklemek için Anlık Görüntüler'e tıklayın.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Ancak bu anlık görüntünün ayrıntı düzeyi çok büyük. Geri yüklendikten sonra yeni eklenen veriler tamamen kaybolacak, bu nedenle lütfen onu dikkatli kullanın.

Btrfs anlık görüntülerini kullanmak genellikle daha uygundur.

## Kurtarma Sistemi Ayrıntıları

Kurtarma sistemine girin 22 Bağlantı noktası [tcping](https://github.com/paradiseduo/tcping) erişilebilir hale geldikten sonra, 2-3 dakika boyunca belirlenen şifreyle erişim sağlayamayacaksınız.

```
tcping ip 22 -c 9999
```

Bağlantı noktası erişilebilirliği izlenebilir.

### Kurtarmaya Girdikten Sonra Sabit Sürücüye Nasıl Erişilir & Anlık Görüntüyü Geri Yükle

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Anlık görüntüyü görüntüleyebilirsiniz, örneğin

```
snapper -c etc list
```

Anlık görüntü dosyası değişikliklerini görüntüle

```
snapper -c etc status 5..6
```

Belirli fark metnini görüntüle

```
snapper -c etc diff 3..5
```

Anlık görüntüyü geri yükle: Örneğin, anlık görüntü 5'ten sonra tüm değişiklikleri geri alın

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Günlük Kalıcılığını Etkinleştir

Bir kurtarma sistemi altında günlük kalıcılığını etkinleştirmek, ilgili dizini manuel olarak oluşturmanızı ve bazı ek adımları uygulamanızı gerektirir çünkü çalışan bir systemd hizmetiniz olmayabilir. İşte deneyebileceğiniz adımlar:

Önce chroot, sonra

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ubuntu sisteminizi yeniden başlatın: Yukarıdaki değişiklikleri yaptıktan sonra makinenizi kurtarma sistemi yerine normal şekilde ve Ubuntu sisteminize yeniden başlatmanız gerekir.

Bu sayede systemd-journald yeni konfigürasyonla başlayacak ve logları kalıcı olarak sabit diskte saklamaya başlayacaktır.

Yukarıdaki işlemlerin bir kurtarma sistemi üzerinde gerçekleştirildiğini unutmayın; dolayısıyla bu değişiklikler yalnızca sistem yeniden başlatıldığında ve artık kurtarma modunda olmadığında etkili olacaktır.

Bu, mevcut günlüklerde yapılan herhangi bir değişikliğin kalıcı hale geldiğini hemen görmeyeceğiniz, ancak bundan sonra oluşturulan tüm günlüklerin kalıcı olacağı anlamına gelir.

Bu şekilde ssh hizmetinin günlüklerini görüntüleyebilirsiniz.

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Zor Ve Karmaşık Hastalıklar Hakkında Notlar

### Garip Sorunu Çözün: Sunucu ssh Yapamıyor

Daha önce otomatik derleme ve dağıtım betiği oluşturmak için github eylemini kullanmıştım ancak dağıtım hizmetinin ssh olamayacağını fark ettim.

Kurtarma sistemine girmek ve günlüklere bakmak bir izin meselesidir:

`Missing privilege separation directory: /run/sshd`

Bu dizini aşağıdaki komutla oluşturabilirsiniz

```
chown root:root /
systemd-tmpfiles --create
```

Tekrarlanan araştırmalardan sonra bunun nedeni tar yükleyen kullanıcının `1001` `uid` github action

tar Paket açma parametreler olmadan yapılmalıdır `--no-same-owner` `1001` kullanıcısı için `uid` dosyasına açılacaktır.

Sonuç olarak rsync, kök dizinin kullanıcı grubunu değiştirecek ve ardından yeniden başlattıktan sonra ssh'ye giriş yapamayacaksınız.

Sıkıştırma açma komut dosyasını aşağıdaki gibi değiştirin:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


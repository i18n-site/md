# Khởi tạo máy chủ (sử dụng phân vùng BTRFS, ảnh chụp nhanh theo lịch trình của Snapper)

## Mua máy chủ contabo

contabo là nhà cung cấp VPS giá rẻ ở Đức có lịch sử lâu đời (hơn 20 năm) và nhiều người dùng (hơn 200.000 người), vì vậy bạn không cần lo lắng về việc bỏ chạy.

Khi mua VPS tại [contabo.com](//contabo.com), hãy nhớ chọn giá bằng Euro để tiết kiệm hơn.

![](https://i-01.eu.org/1718285782.avif)

contabo có phí cài đặt một lần.
Tuy nhiên, hàng tháng có một vài ngày miễn phí cài đặt. Chỉ cần đăng ký và theo dõi các email quảng cáo.

Ngoài phí khu vực miễn phí ở châu Âu, các khu vực khác có mức tăng giá khác nhau.

Dù vậy, tôi đã chọn máy chủ châu Âu, vì sau khi sử dụng Cloudflare, không có nhiều khác biệt giữa các máy chủ.

Cấu hình cuối cùng như sau, bộ nhớ 16GB, 6CPU, 200 GB NVMe, 9,50 euro một tháng, tương đương 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Mức giá này gần bằng 1/10 giá của Alibaba Cloud và Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Tôi đã sử dụng [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) để kiểm tra hiệu suất và các thông số:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Hiển thị CPU Model `AMD EPYC 9224 24-Core Processor`, điểm hiệu suất lõi đơn 1285
, điểm hiệu suất đa lõi 4277. Xem thêm kết quả tại [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Tôi đã mua ba máy chủ cùng một lúc và kích hoạt chúng cùng lúc. Điều này đảm bảo rằng các máy chủ ở trong cùng một phòng máy tính, giúp việc xây dựng tính sẵn sàng cao trong tương lai trở nên dễ dàng hơn.

Máy chủ của nó thỉnh thoảng bị treo, nhưng tính sẵn sàng cao đảm bảo khả năng truy cập trang web.

Người dùng mới cần gửi CMND để xác thực tên thật khi mua hàng.

## Định cấu hình đăng nhập không cần mật khẩu

Sau vài phút, tất cả các máy chủ đều được kích hoạt

Điều đầu tiên là chỉnh sửa tệp `~/.ssh/config` của máy cục bộ để đặt bí danh, sau đó sử dụng `ssh-copy-id root@c2` để định cấu hình đăng nhập không cần mật khẩu.

![](https://i-01.eu.org/1718287198.avif)

Bạn có thể sửa đổi [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) này để hoàn thành cấu hình khởi tạo nhanh hơn.

Sau khi hoàn tất cấu hình không cần mật khẩu, bạn có thể sử dụng nó [pdsh](https://github.com/chaos/pdsh) để thực hiện theo đợt, rất tiện lợi.

Đầu tiên là kích hoạt thủ công ipv6 và kiểm tra

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Sau đó nâng cấp hệ thống lên Ubuntu 24 chỉ bằng một cú nhấp chuột và cài đặt phần mềm thường dùng.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 có nghĩa là chuyển ngôn ngữ sang tiếng Trung và múi giờ sang Bắc Kinh.

Phần mềm được cài đặt mặc định được cấu hình theo thói quen sử dụng cá nhân của tôi, chẳng hạn như [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/) v.v. Nếu cần, bạn có thể sao chép kho [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) và sửa đổi nếu cần.

Bước này mất nhiều thời gian chờ đợi nửa giờ, quá trình nâng cấp và cài đặt phần mềm thường sử dụng sẽ thành công. Bạn có thể xác nhận điều này bằng lệnh sau:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Tăng tốc ssh

Mạng từ Châu Âu đến Trung `ssh` không ổn định. Nên sử dụng [mosh](//mosh.org)

Tạo tập lệnh `c0` trong thư mục cục bộ `~/.bin` (chủ yếu được thêm vào biến môi trường `PATH`) như sau:

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

Sau khi tạo, cấp quyền thực thi và liên kết mềm `c1` và `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Sau này bạn có thể nhập trực tiếp `c0` và `c1` để sử dụng `mosh` kết nối trực tiếp tốc độ cao và nhập [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html).

## Chuyển đổi định dạng phân vùng từ ext4 sang btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) có thể chụp ảnh đĩa để sao lưu dễ dàng.

Đầu tiên vào hệ thống cứu hộ

![](https://i-01.eu.org/1718300448.avif)

Chọn giải cứu Debian

![](https://i-01.eu.org/1718300753.avif)

Đợi máy chủ khởi động lại

Khi ssh sẽ có thay đổi về dấu vân tay, hãy sử dụng `ssh-keygen -R ip` để xóa nó

Sau đó chạy đoạn script sau để chuyển đổi phân vùng

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Tập lệnh sẽ tự động khởi động lại hệ thống sau khi chuyển đổi thành công.

### Xem tỷ lệ nén btrfs

Nó sẽ tự động nén theo mặc định. Lệnh kiểm tra tỷ lệ nén như sau:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Nén thủ công

Nếu bạn là người cầu toàn, bạn cũng có thể thực hiện nén toàn bộ đĩa theo cách thủ công. Lệnh như sau:

```bash
btrfs filesystem defragment -r -czstd /
```

Như thể hiện trong hình bên dưới, bạn có thể thấy rằng sau khi nén thủ công trong hệ thống mới, gần 100 MB đã được nén thêm.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Tạo bản sao lưu ảnh chụp nhanh bằng snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) là đối tác tốt nhất để sao lưu Btrfs.

Kịch bản khởi tạo sẽ tạo thư mục `~/ubuntu`, chỉ cần chạy lệnh sau:

```
~/ubuntu/snapper/init.sh
```

Hẹn gặp lại các bạn ở nội dung kịch bản [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Sử dụng `snapper list-configs` để xem các phân vùng được đặt ảnh chụp nhanh

![](https://i-01.eu.org/1718302689.avif)

Sử dụng `snapper -c mnt list` để xem ảnh chụp nhanh của một tập con

`/etc/snapper/configs/mnt` có thể xem các cài đặt sao lưu cụ thể của subvolume này

Tham khảo thêm:

[Dễ dàng chơi với chức năng chụp nhanh của Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Ảnh chụp nhanh máy chủ contabo

contabo cung cấp chức năng chụp nhanh máy chủ nhưng không hỗ trợ chụp nhanh theo lịch trình. Tôi đã viết [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) để chụp ảnh nhanh hàng ngày.

![](https://i-01.eu.org/1718304206.avif)

Để khôi phục ảnh chụp nhanh máy chủ, trước tiên hãy nhấp vào Crontol trong menu quản lý

![](https://i-01.eu.org/1718304275.avif)

Sau đó bấm vào Ảnh chụp nhanh để khôi phục.

![](https://i-01.eu.org/1718304063.avif)

Tuy nhiên, độ chi tiết của ảnh chụp nhanh này quá lớn. Sau khi được khôi phục, dữ liệu mới được thêm vào sẽ bị mất hoàn toàn, vì vậy hãy thận trọng khi sử dụng.

Thông thường sẽ thuận tiện hơn khi sử dụng ảnh chụp nhanh btrfs.

## Chi tiết hệ thống cứu hộ

Vào hệ thống cứu hộ, sau khi truy cập được cổng 22 bằng [tcping](https://github.com/paradiseduo/tcping), bạn sẽ không thể truy cập vào nó bằng mật khẩu đã đặt trong 2-3 phút.

```
tcping ip 22 -c 9999
```

Khả năng truy cập cổng có thể được theo dõi.

### Cách truy cập ổ cứng sau khi vào cứu hộ và khôi phục ảnh chụp nhanh

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Bạn có thể xem ảnh chụp nhanh, ví dụ

```
snapper -c etc list
```

Xem các thay đổi của tệp ảnh chụp nhanh

```
snapper -c etc status 5..6
```

Xem văn bản khác biệt cụ thể

```
snapper -c etc diff 3..5
```

Khôi phục ảnh chụp nhanh: ví dụ, hoàn tác tất cả các thay đổi sau ảnh chụp nhanh 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Kích hoạt tính năng lưu giữ nhật ký

Việc kích hoạt tính năng lưu giữ nhật ký trong hệ thống cứu hộ yêu cầu bạn phải tạo thư mục tương ứng theo cách thủ công và thực hiện một số bước bổ sung vì bạn có thể không có dịch vụ systemd đang chạy. Dưới đây là các bước bạn có thể thử:

Đầu tiên chroot, sau đó

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Khởi động lại vào hệ thống Ubuntu của bạn: Sau khi thực hiện các thay đổi trên, bạn cần khởi động lại máy bình thường và vào hệ thống Ubuntu thay vì hệ thống cứu hộ.

Bằng cách này, systemd-journald sẽ bắt đầu với cấu hình mới và bắt đầu lưu trữ nhật ký liên tục trên đĩa cứng.

Hãy nhớ rằng các thao tác trên được thực hiện trên hệ thống cứu hộ, vì vậy những thay đổi đó sẽ không có hiệu lực cho đến khi hệ thống được khởi động lại và không còn ở chế độ cứu hộ nữa.

Điều này có nghĩa là bạn sẽ không thấy ngay bất kỳ thay đổi nào đối với nhật ký hiện có mà trở nên cố định nhưng tất cả nhật ký được tạo sau đó sẽ được duy trì.

Bằng cách này bạn có thể xem nhật ký của dịch vụ ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Những lưu ý về bệnh khó, phức tạp

### Giải quyết vấn đề lạ: máy chủ không thể ssh

Trước đây tôi đã sử dụng hành động github để tạo tập lệnh biên dịch và triển khai tự động nhưng nhận thấy rằng dịch vụ triển khai không thể ssh.

Vào hệ thống cứu hộ và xem nhật ký là vấn đề về quyền:

`Missing privilege separation directory: /run/sshd`

Bạn có thể tạo thư mục này bằng lệnh sau

```
chown root:root /
systemd-tmpfiles --create
```

Sau nhiều lần điều tra, đó là vì github action Người dùng `uid` của tar là `1001`

tar giải nén nếu không có tham số `--no-same-owner` sẽ giải nén về `uid` cho `1001` user

Kết quả là rsync sẽ thay đổi nhóm người dùng của thư mục gốc và khi đó bạn sẽ không thể đăng nhập vào ssh sau khi khởi động lại.

Sửa đổi script giải nén như sau:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
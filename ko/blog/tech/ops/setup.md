# 서버 초기화(BTRFS 파티션, 스냅샷 예약 스냅샷 사용)

## 콘타보에서 서버를 구매

콘타보는 오랜 역사(20년 이상)와 많은 사용자(20만 명 이상)를 보유한 독일의 저렴한 VPS 제공업체이므로 도망갈 걱정이 없습니다.

[contabo.com](//contabo.com)에서 VPS를 구매할 때, 유로 가격을 선택하여 더 저렴하게 구매하세요.

![](https://i-01.eu.org/1718285782.avif)

콘타보는 설치비를 일회성으로 부과합니다.
하지만 매달 몇 일 동안 설치비가 무료로 제공됩니다. 등록 후 홍보 이메일을 주의 깊게 확인하세요.

유럽의 무료 지역 수수료 외에도 다른 지역에서는 가격 인상 수준이 다릅니다.

저는 유럽 서버를 선택했습니다. 어차피 Cloudflare를 사용하면 서버의 위치에 큰 차이가 없습니다.

최종 구성은 다음과 같습니다: 16GB 메모리, 6CPU, 200GB NVMe, 월 9.50유로, 74.43RMB에 해당합니다.

![](https://i-01.eu.org/1718286008.avif)

**이 가격은 알리바바 클라우드와 아마존의 가격의 거의 10분의 1 수준입니다**.

![](https://i-01.eu.org/1718356956.avif)

성능과 매개변수를 테스트하기 위해 [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)를 실행했습니다

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU 모델 `AMD EPYC 9224 24-Core Processor`의 단일 코어 성능 점수는 1285로 표시되고 있습니다
또한, 멀티 코어 점수는 4277입니다. 더 많은 결과는 [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)에서 확인하세요

서버가 가끔 중단되더라도 고가용성을 통해 웹 사이트의 접근성을 유지할 수 있습니다.

신규 사용자는 구매 시 실명 인증을 위해 신분증을 제출해야 합니다.

비밀번호 없는 로그인을 구성합니다.

## 몇 분 후 서버가 모두 활성화되었습니다

수 분 후에 서버가 모두 활성화되었습니다

첫 번째로, 로컬 시스템의 `~/.ssh/config` 파일을 편집하여 IP 주소에 별칭을 설정하고, `ssh-copy-id root@c2` 명령을 사용하여 비밀번호 없는 로그인을 구성합니다.

![](https://i-01.eu.org/1718287198.avif)

비밀번호 없는 로그인이 구성된 후, [pdsh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh)를 사용하여 일괄적으로 작업을 수행할 수 있습니다.

비밀번호 없는 설정이 완료되면, [pdsh](https://github.com/chaos/pdsh)를 통해 일괄적으로 작업할 수 있어 편리합니다.

그런 다음 한 번의 클릭으로 시스템을 Ubuntu 24로 업그레이드하고 일반적으로 사용되는 소프트웨어를 설치합니다

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

CN=1은 언어를 중국어로, 시간대를 베이징으로 설정하는 것을 의미합니다.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1은 중국어로 언어를切换하고, 베이징 시간대로 시간대를 설정합니다.

기본 설치된 소프트웨어는 개인 사용 습관에 맞게 구성되었습니다. 예를 들어 [mise](https://github.com/jdx/mise)와 [direnv](https://direnv.net/) 등이 있습니다. 필요하다면 [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) 저장소를 복사하고 필요에 따라 수정할 수 있습니다.

mosh를 사용하여 SSH 속도를 향상시킵니다

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh를 사용하여 SSH 속도를 향상시킵니다

유럽에서 중국까지의 네트워크는 안정적이지 않습니다. `ssh` 사용하는 것이 좋습니다 [mosh](//mosh.org)

로컬 디렉토리 `~/.bin` (주로 환경 변수 `PATH`에 추가됨)에 `c0` 스크립트를 생성하세요

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

스크립트를 생성한 후, 실행 권한을 부여하고 `c1`, `c2`에 소프트 링크를 추가합니다.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

이제 `c0` 또는 `c1`를 입력하여 `mosh`를 통해 고속 직접 접속하고 [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)에 접속할 수 있습니다.

## 파티션 형식을 ext4에서 btrfs로 변환하세요

[btrfs](https://wikipedia.org/wiki/Btrfs)는 디스크 스냅샷을 캡처하여 백업을 쉽게 할 수 있습니다.

서버가 다시 시작될 때까지 기다립니다

![](https://i-01.eu.org/1718300448.avif)

데비안 구조를 선택하세요

![](https://i-01.eu.org/1718300753.avif)

그런 다음 다음 스크립트를 실행하여 파티션을 변환합니다

SSH 접속 시 지문이 변경되므로, `ssh-keygen -R ip` 명령을 사용하여 지정된 IP 주소의 키를 지우세요

btrfs의 압축률을 확인합니다

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

기본적으로 자동으로 압축됩니다. 압축률을 확인하는 명령어는 다음과 같습니다:

### 수동으로 압축합니다

완벽주의자라면 전체 디스크를 수동으로 압축할 수도 있습니다. 명령어는 다음과 같습니다:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### 수동으로 압축하세요

Snapper를 사용하여 Btrfs 스냅샷 백업을 생성합니다

```bash
btrfs filesystem defragment -r -czstd /
```

아래 그림과 같이 새 시스템에서 수동으로 압축한 후 약 100MB 정도 더 압축된 것을 확인할 수 있습니다.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Snapper를 사용하여 Btrfs 스냅샷 백업 생성

Btrfs 백업을 위해서는 [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)가 최적의 파트너입니다.

초기화 스크립트는 `~/ubuntu` 디렉토리를 생성합니다. 다음 명령을 실행하세요

```
~/ubuntu/snapper/init.sh
```

스크립트 내용은 [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)에서 확인할 수 있습니다

스냅샷이 설정된 하위 볼륨을 확인하려면 `snapper list-configs`를 사용하세요

![](https://i-01.eu.org/1718302689.avif)

하위 볼륨의 스냅샷을 확인하려면 `snapper -c mnt list`를 사용하세요

`/etc/snapper/configs/mnt`에서 해당 하위 볼륨의 백업 설정을 확인할 수 있습니다

Contabo 서버 스냅샷

[Btrfs 스냅샷 기능으로 쉽게 플레이해보세요 snapper](https://zhuanlan.zhihu.com/p/31082518)

## Contabo 서버 스냅샷

contabo 서버 스냅샷 기능을 제공하지만, 예약된 스냅샷을 지원하지 않습니다. 매일 스냅샷을 찍도록 [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) 를 작성했습니다.

![](https://i-01.eu.org/1718304206.avif)

일반적으로 btrfs의 스냅샷을 사용하는 것이 더 편리합니다

![](https://i-01.eu.org/1718304275.avif)

구조 시스템 세부정보

![](https://i-01.eu.org/1718304063.avif)

구조 시스템의 세부 정보는 다음과 같습니다.

포트 접근성을 모니터링할 수 있습니다.

## 구조 시스템 세부정보

복구 시스템에 진입합니다 22 [tcping](https://github.com/paradiseduo/tcping) 포트에 액세스할 수 있게 되면 2-3 분 동안 설정된 비밀번호로 액세스할 수 없습니다.

```
tcping ip 22 -c 9999
```

스냅샷 파일의 변경 사항을 확인합니다.

### 특정 차이점 텍스트를 확인합니다

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

특정 차이점 텍스트를 확인하려면,

```
snapper -c etc list
```

로그 지속성을 활성화합니다

```
snapper -c etc status 5..6
```

로그 지속성을 활성화하려면,

```
snapper -c etc diff 3..5
```

먼저 chroot를 수행한 다음,

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### 먼저 chroot 명령을 실행하고,

이렇게 하면 systemd-journald가 새로운 구성으로 시작하고 로그를 하드 디스크에 지속적으로 저장하기 시작합니다

이렇게 하면 SSH 서비스의 로그를 확인할 수 있습니다

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

즉, 지속되는 기존 로그의 변경 사항은 즉시 확인할 수 없지만, 그 이후에 생성된 모든 로그는 지속됩니다.

이 방법으로 SSH 서비스의 로그를 확인할 수 있습니다.

문제 해결 노트

이상한 문제를 해결합니다: 서버가 SSH를 실행할 수 없습니다.

이 방법으로 SSH 서비스의 로그를 볼 수 있습니다

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## 구조 시스템에 진입하여 로그를 확인한 결과 권한 문제임을 알게 되었습니다

### 다음 명령어를 사용하여 디렉토리를 생성할 수 있습니다

구조 시스템에 진입하여 로그를 확인하면, 권한 문제로 인해 발생합니다.

다음 명령을 사용하여 해당 디렉토리를 생성하세요

`Missing privilege separation directory: /run/sshd`

다음 명령을 사용하여 이 디렉터리를 만들 수 있습니다

```
chown root:root /
systemd-tmpfiles --create
```

반복 조사 결과 tar 의 User `uid` 이 `1001` 이기 때문입니다 github action

tar 매개변수 `--no-same-owner` 이 없으면 압축을 풀어야 하며, `1001` 명의 사용자를 위해 `uid` 로 압축이 풀립니다

따라서 압축 해제 스크립트를 다음과 같이 수정하세요.

압축 해제 스크립트를 다음과 같이 수정합니다

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
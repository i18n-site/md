# 서버 초기화(BTRFS 파티션, 스내퍼 예약 스냅샷 사용)

## 콘타보 구매 서버

contabo는 오랜 역사(20년 이상)와 많은 사용자(20만 명 이상)를 보유한 독일의 저렴한 VPS 제공업체이므로 도망갈 걱정이 없습니다.

[contabo.com](//contabo.com) 을(를) 구매할 VPS 더 저렴한 유로 가격을 선택하는 것을 잊지 마세요.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

콘타보 설치비는 일회성입니다.
그러나 매달 설치비가 무료인 날이 있습니다. 등록하고 홍보 이메일에 주의를 기울이십시오.

유럽의 무료 지역 수수료 외에도 다른 지역에서는 가격 인상 수준이 다릅니다.

저는 유럽서버를 선택했습니다. 아무튼, cloudflare를 사용해본 결과 서버간 별 차이는 없습니다.

최종 구성은 다음과 같습니다. 16GB 메모리, 6CPU, 200GB NVMe, 월 9.50유로, 74.43RMB에 해당합니다.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**이 가격은 알리바바 클라우드와 아마존 가격의 거의 10분의 1 수준이다** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

나는 성능과 매개변수를 실행하기 위해 [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) 사용했습니다.

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

디스플레이 CPU 모델 `AMD EPYC 9224 24-Core Processor` 싱글 코어 성능 점수 1285
, 멀티 코어 점수 4277 더 많은 결과 보기 [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

한번에 세 대의 서버를 구입하여 동시에 활성화했습니다. 이렇게 하면 서버가 동일한 전산실에 있도록 보장되므로 향후 고가용성을 구축하기가 더 쉽습니다.

고가용성을 통해 웹 사이트 접근성을 보장하기 위해 서버가 때때로 중단되는 경우가 있습니다.

신규 이용자는 구매 시 실명인증을 위해 신분증을 제출해야 합니다.

## 비밀번호 없는 로그인 구성

몇 분 후 서버가 모두 활성화되었습니다.

첫 번째 작업은 로컬 컴퓨터의 `~/.ssh/config` 에 대한 별칭을 설정한 IP `ssh-copy-id root@c2` 사용하여 비밀번호 없는 로그인을 구성하는 것입니다.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

이 [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) 수정하여 초기화 구성을 더 빠르게 완료할 수 있습니다.

비밀번호 없는 구성이 완료된 후 사용하시면 됩니다 [pdsh](https://github.com/chaos/pdsh) 일괄적으로 운영이 가능해 편리합니다.

첫 번째는 ipv6를 수동으로 활성화하고 테스트하는 것입니다.

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

그런 다음 한 번의 클릭으로 시스템을 ubuntu 24로 업그레이드하고 일반적으로 사용되는 소프트웨어를 설치하십시오.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1은 언어를 중국어로, 시간대를 베이징으로 전환하는 것을 의미합니다.

기본으로 설치되는 소프트웨어는 [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) 등 나의 개인적인 사용 습관에 따라 구성됩니다. 필요한 경우 [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse를 복사하여 필요에 따라 수정할 수 있습니다.

이 단계는 30분 정도 기다리면 일반적으로 사용되는 소프트웨어의 업그레이드 및 설치가 완료됩니다. 다음 명령으로 확인할 수 있습니다.

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh는 SSH 속도를 향상시킵니다.

유럽에서 중국까지의 네트워크는 안정적이지 않습니다 `ssh` 속도를 높이려면 사용하는 것이 좋습니다 [mosh](//mosh.org)

다음과 같이 로컬 시스템의 `~/.bin` (주로 환경 변수 `PATH` 에 추가됨) 디렉토리에 `c0` 스크립트를 만듭니다.

```bash
#!/usr/bin/env 배쉬

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

생성 후 실행 권한을 부여하고 `c2` 링크 `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

앞으로는 `c0` , `c1` 직접 입력하실 수도 있고, `mosh` 고속직접접속을 이용하여 [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## 파티션 형식을 ext4에서 btrfs로 변환

[btrfs](https://wikipedia.org/wiki/Btrfs) 간편한 백업을 위해 디스크 스냅샷을 찍을 수 있습니다.

먼저 구조 시스템에 들어가십시오.

<img alt="" src="https://i-01.eu.org/1718300448.avif">

데비안 구조를 선택하세요

<img alt="" src="https://i-01.eu.org/1718300753.avif">

서버가 다시 시작될 때까지 기다리세요

다음과 같은 경우 지문이 변경됩니다 ssh `ssh-keygen -R ip` 사용하여 청소하세요.

그런 다음 다음 스크립트를 실행하여 파티션을 변환하십시오.

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

변환이 성공한 후 스크립트가 자동으로 시스템을 다시 시작합니다.

### btrfs 압축 비율 보기

기본적으로 자동으로 압축됩니다. 압축률을 확인하는 명령은 다음과 같습니다.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### 수동 압축

완벽주의자라면 수동으로 전체 디스크 압축을 수행할 수도 있습니다. 명령은 다음과 같습니다.

```bash
btrfs filesystem defragment -r -czstd /
```

아래 그림과 같이 새 시스템에서 수동으로 압축한 후 약 100MB 정도 더 압축된 것을 확인할 수 있습니다.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Snapper를 사용하여 Btrfs 스냅샷 백업 생성

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs 백업을 위한 최고의 파트너입니다.

초기화 스크립트는 `~/ubuntu` 디렉토리를 생성합니다. 다음 명령을 실행하세요.

```
~/ubuntu/snapper/init.sh
```

스크립트 콘텐츠에서 만나요 [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

스냅샷이 설정된 하위 볼륨을 보려면 `snapper list-configs` 사용하십시오.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

`snapper -c mnt list` 사용하여 하위 볼륨의 스냅샷을 봅니다.

`/etc/snapper/configs/mnt` 이 하위 볼륨의 특정 백업 설정을 볼 수 있습니다.

추가 참고자료:

[Btrfs 스냅샷 기능으로 쉽게 플레이해보세요 snapper](https://zhuanlan.zhihu.com/p/31082518)

## Contabo 서버 스냅샷

contabo 서버 스냅샷 기능을 제공하지만, 예약된 스냅샷을 지원하지 않습니다. 매일 스냅샷을 찍도록 [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) 를 작성했습니다.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

서버 스냅샷을 복원하려면 먼저 관리 메뉴에서 Crontol을 클릭하세요.

<img alt="" src="https://i-01.eu.org/1718304275.avif">

그런 다음 복원할 스냅샷을 클릭합니다.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

다만, 이 스냅샷의 단위가 너무 커서 복원되면 새로 추가된 데이터가 완전히 손실되므로 주의해서 사용하시기 바랍니다.

일반적으로 btrfs 스냅샷을 사용하는 것이 더 편리합니다.

## 구조 시스템 세부정보

22 복구 시스템에 진입 [tcping](https://github.com/paradiseduo/tcping) 설정된 비밀번호로는 2-3 분 동안 접속할 수 없습니다.

```
tcping ip 22 -c 9999
```

포트 접근성을 모니터링할 수 있습니다.

### 복구 진입 후 하드 드라이브에 접근하는 방법 스냅샷 복원 &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

예를 들어 스냅샷을 볼 수 있습니다.

```
snapper -c etc list
```

스냅샷 파일 변경사항 보기

```
snapper -c etc status 5..6
```

특정 차이점 텍스트 보기

```
snapper -c etc diff 3..5
```

스냅샷 복원: 예를 들어 스냅샷 5 이후의 모든 변경 사항을 실행 취소합니다.

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### 로그 지속성 활성화

복구 시스템에서 로그 지속성을 활성화하려면 실행 중인 systemd 서비스가 없을 수 있으므로 해당 디렉터리를 수동으로 만들고 몇 가지 추가 단계를 수행해야 합니다. 시도해 볼 수 있는 단계는 다음과 같습니다.

먼저 chroot 다음

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ubuntu 시스템으로 재부팅: 위의 변경을 수행한 후 복구 시스템 대신 정상적으로 Ubuntu 시스템으로 머신을 재부팅해야 합니다.

이러한 방식으로 systemd-journald는 새로운 구성으로 시작하고 로그를 하드 디스크에 지속적으로 저장하기 시작합니다.

위의 작업은 복구 시스템에서 수행되므로 이러한 변경 사항은 시스템이 재부팅된 후에만 적용되며 더 이상 복구 모드에 있지 않습니다.

즉, 기존 로그에 대한 변경 사항이 즉시 지속되는 것은 아니지만 이후에 생성된 모든 로그는 지속된다는 의미입니다.

이 방법으로 SSH 서비스의 로그를 볼 수 있습니다

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## 어렵고 복잡한 질병에 대한 참고 사항

### 이상한 문제를 해결하세요. 서버가 SSH를 실행할 수 없습니다.

이전에는 github action을 사용하여 자동 컴파일 및 배포 스크립트를 만들었으나 배포 서비스가 ssh가 될 수 없다는 것을 발견했습니다.

구조 시스템에 들어가서 로그를 보는 것은 권한 문제입니다.

`Missing privilege separation directory: /run/sshd`

다음 명령을 사용하여 이 디렉터리를 만들 수 있습니다.

```
chown root:root /
systemd-tmpfiles --create
```

거듭된 조사 끝에 tar `1001` 한 사용자는 github action `uid`

tar 압축해제는 매개변수 없이 수행되어야 합니다 `--no-same-owner` `1001` 사용자에 대해 `uid` 으로 압축이 풀립니다.

결과적으로 rsync는 루트 디렉터리의 사용자 그룹을 변경하게 되며, 다시 시작한 후에는 ssh에 로그인할 수 없게 됩니다.

압축 해제 스크립트를 다음과 같이 수정합니다.

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


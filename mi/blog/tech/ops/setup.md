# Arataki I Te Tūmau (Whakamahia Te Wehewehenga BTRFS, Te Hopu Whakaahua Kua Whakaritea)

## Tūmau Hoko contabo

Ko te contabo he kaiwhakarato VPS iti i Germany me te hitori roa (neke atu i te 20 tau) me te maha o nga kaiwhakamahi (neke atu i te 200,000), na reira kaore he take ki te manukanuka mo te rere atu.

VPS te hoko [contabo.com](//contabo.com) mahara ki te whiriwhiri i te utu Euro, he iti ake.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

He utu whakaurunga kotahi mo te contabo.
Heoi, he torutoru nga ra i ia marama kei te kore utu te utu whakaurunga Rehita noa me te aro ki nga imeera whakatairanga.

I tua atu i te utu rohe kore utu i Uropi, ko etahi atu rohe he rereke nga taumata o te pikinga utu.

I whiriwhiria e ahau he tūmau Pakeha Heoi ano, i muri i te whakamahi cloudflare, kaore he rereketanga i waenga i nga kaitoro.

Ko te whirihoranga whakamutunga e whai ake nei, 16GB te mahara, 6CPU, 200 GB NVMe, 9.50 euros ia marama, he rite ki te 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ko tenei utu he tata ki te kotahi-tekau o te utu o Alibaba Cloud me Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

I whakamahia e ahau [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) ki te whakahaere i nga mahi me nga tawhā:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

`AMD EPYC 9224 24-Core Processor` CPU 1285
, kaute maha-matua 4277 . Tirohia etahi atu kitenga [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

I hokona e ahau nga kaitoro e toru i te wa kotahi, ka whakahohehia i te wa kotahi ka whakarite kia noho nga kaitoro i roto i te ruma rorohiko kotahi, he maamaa ake te hanga i nga wa kei te heke mai.

I etahi wa ka whakairihia nga kaitoro, me te whakarite kia uru mai te paetukutuku ma te waatea nui.

Me tuku e nga kaiwhakamahi hou a ratou kaari ID mo te whakamotuhēhē ingoa tūturu ina hoko.

## Whirihorahia Te Takiuru Kore-Kupuhipa

I muri i etahi meneti, kua whakahohehia nga kaitoro katoa.

Ko te mea tuatahi ko te whakatika i te miihini o te rohe `~/.ssh/config` Whakaritea he ingoa ingoa mo IP ka whakamahi i `ssh-copy-id root@c2` hei whirihora i te takiuru kore-kupuhipa.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Ka taea e koe te whakarereke i tenei [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) kia tere ake te whakaoti i te whirihoranga arawhiti.

Ka oti te whirihoranga kore-kupuhipa, ka taea e koe te whakamahi [pdsh](https://github.com/chaos/pdsh)

Ko te tuatahi ko te whakahohe a-ringa ipv6 me te whakamatautau

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Na ka whakahou ake i te punaha ki te ubuntu 24 me te paato kotahi ka whakauru i nga rorohiko e whakamahia ana.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

Ko te tikanga CN=1 te huri i te reo ki te reo Hainamana me te rohe wa ki Beijing.

Ko te rorohiko i whakauruhia ma te taunoa kua whirihorahia kia rite ki aku tikanga whakamahi whaiaro, penei i te [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , aha atu. Ki te tika, ka taea e koe te kape i te whare putunga [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) me te whakarereke ina hiahiatia.

He roa te wa e tatari ana mo te hawhe haora, ka angitu te whakamohoatanga me te whakaurunga o nga rorohiko e whakamahia ana. Ka taea e koe te whakaū ma te whakahau e whai ake nei:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## Ka Tere Ake Te mosh ssh

Ko te whatunga mai i Uropi ki Haina kaore i te pumau E taunaki ana kia `ssh` [mosh](//mosh.org)

Waihangahia he tuhinga `c0` i roto i te raarangi o te miihini a `~/.bin` rohe (te nuinga ka taapirihia ki te taurangi taiao `PATH` ) e whai ake nei:

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

Whai muri i te waihangatanga, tukuna nga whakaaetanga me te hono ngawari `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

I te wa kei te heke mai, ka taea e koe te whakauru tika `c0` , `c1` ka taea e koe te whakamahi i te hononga tere tere `mosh` ka uru atu [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Hurihia Te Whakatakotoranga Wehewehenga Mai I Te ext4 Ki Te btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Ka taea te tango i nga whakaahua kōpae mo te whakahoki ngawari.

Tuatahi tomo ki te punaha whakaora

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Kōwhiri Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Taria kia timata ano te tūmau

Ka puta nga huringa maihao ina ssh , whakamahia `ssh-keygen -R ip`

Na ka whakahaere i te tuhinga e whai ake nei hei huri i te wehewehenga

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Ko te tuhinga ka whakaara ano i te punaha i muri i te angitu o te huringa.

### Tirohia btrfs Ōwehenga Kōpeketanga

Ka kōpeke aunoa mā te taunoa Ko te whakahau kia tirohia te ōwehenga kōpeketanga e whai ake nei.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kōpeke Ā-Ringa

Mēnā he tino tangata koe, ka taea e koe te mahi i te kōpeketanga kōpae katoa e whai ake nei

```bash
btrfs filesystem defragment -r -czstd /
```

E whakaatu ana i te ahua i raro nei, ka kite koe i muri i te kopiri a-ringa i roto i te punaha hou, tata ki te 100MB te nui atu i kopeke.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Waihangahia He Taapiri Whakaahua Btrfs Me Te Tamure

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ko te hoa pai rawa atu mo Btrfs backup.

Ko te tuhinga arataki ka hanga i te raarangi `~/ubuntu` , whakahaere noa i te whakahau e whai ake nei:

```
~/ubuntu/snapper/init.sh
```

Ka kite koe i roto i nga tuhinga tuhinga [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Whakamahia te `snapper list-configs` ki te tiro i nga riipene iti e tautuhia ana nga whakaahua.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Whakamahia te `snapper -c mnt list` ki te tiro i te whakaahua o te pukapuka iti

Ka taea e `/etc/snapper/configs/mnt` te tiro i nga tautuhinga taapiri motuhake o tenei pukapuka iti

Ētahi atu tohutoro:

[Te purei ngawari me te mahinga whakaahua o Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Whakaahua Tūmau contabo

contabo Ka whakarato [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) te mahinga whakaahua a te tūmau, engari kaore i te tautoko i nga whakaahua kua whakaritea.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Hei whakaora i te whakaahuatanga tūmau, pato tuatahi Crontol i te tahua whakahaere

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Na, paatohia nga Whakaahua hei whakaora.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Heoi, he nui rawa te maramara o tenei whakaahua Ina whakahokia mai, ka ngaro katoa nga raraunga hou, na reira me ata whakamahi.

He pai ake te whakamahi i nga whakaahua btrfs.

## Nga Korero Mo Te Punaha Whakaora

Whakauruhia te punaha whakaora I muri i te wa e uru [tcping](https://github.com/paradiseduo/tcping) te tauranga, ka kore koe e uru atu me te kupuhipa 22 whakaritea mo 2-3 meneti ka pai.

```
tcping ip 22 -c 9999
```

Ka taea te aro turuki i te urunga tauranga.

### Me Pehea Te Uru Atu Ki Te Puku Pakeke I Muri I Te Urunga Whakaora &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ka taea e koe te tiro i te whakaahua, hei tauira

```
snapper -c etc list
```

Tirohia nga huringa whakaahua whakaahua

```
snapper -c etc status 5..6
```

Tirohia nga kupu rereke rereke

```
snapper -c etc diff 3..5
```

Whakaorangia te whakaahua: Hei tauira, wetekina nga huringa katoa i muri i te whakaahua 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Whakahohe Te Tohenga Rangitaki

Ko te whakaahei i te u tonu o te raarangi i raro i te punaha whakaora ka hiahia koe ki te hanga a-ringa i te whaiaronga e pa ana me te mahi i etahi waahanga taapiri, na te mea karekau pea he ratonga punaha whakahaere. Anei nga taahiraa ka taea e koe te ngana:

Tuatahi chroot, ka

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Me whakaara ano ki to punaha Ubuntu: I muri i nga huringa o runga ake nei, me whakaara ano e koe to miihini ki roto i to punaha Ubuntu, kaua ki te punaha whakaora.

Ma tenei ara, ka tiimata te systemd-journald me te whirihoranga hou ka tiimata ki te penapena i nga raarangi i runga i te kopae pakeke.

Kia maumahara ko nga mahi i runga ake nei ka mahia i runga i te punaha whakaora, no reira ka whai mana enei huringa ina whakaara ano te punaha ka kore i te aratau whakaora.

Ko te tikanga ka kore koe e kite tonu i nga huringa o nga raarangi kua mau tonu, engari ka mau tonu nga raarangi ka mahia i muri mai.

Ma tenei ka taea e koe te tiro i nga raarangi o te ratonga ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Nga Korero Mo Nga Mate Uaua Me Te Uaua

### Whakatauhia Te Raruraru Tipua: Kaore E Taea E Te Tūmau Te ssh

I whakamahia e ahau te mahi github ki te hanga i te whakahiato aunoa me te tuhi tuhi i mua, engari i kitea e kore e taea e te ratonga tuku te ssh.

Ko te whakauru ki te punaha whakaora me te titiro ki nga raarangi he take whakaaetanga:

`Missing privilege separation directory: /run/sshd`

Ka taea e koe te hanga i tenei whaiaronga me te whakahau e whai ake nei

```
chown root:root /
systemd-tmpfiles --create
```

Whai muri i nga tirotirohanga, na te mea github action te kaiwhakamahi nana i tuku tar he `1001` `uid`

tar Me mahi te wetewete me te kore tawhā `--no-same-owner` ka whakakorehia ki te `uid` mo te kaiwhakamahi `1001`

Ko te mutunga, ka huri a rsync i te roopu kaiwhakamahi o te whaiaronga pakiaka, ka kore e taea e koe te takiuru ki te ssh i muri i te tiimata ano.

Whakarerekētia te tuhinga whakahekenga kia penei:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


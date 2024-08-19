# Bido Ihe Nkesa (Jiri Akụkụ BTRFS, Nseta Ihuenyo Ahaziri Nke Ọma)

## Ihe Nkesa Ịzụrụ contabo

contabo bụ onye na-eweta VPS dị ọnụ ala na Germany nwere ogologo akụkọ ihe mere eme (karịa afọ 20) na ọtụtụ ndị ọrụ (karịa 200,000), n'ihi ya ọ dịghị mkpa ichegbu onwe gị maka ịgbapụ.

VPS ịzụrụ [contabo.com](//contabo.com) cheta ịhọrọ ọnụahịa Euro, nke dị ọnụ ala.

![](https://i-01.eu.org/1718285782.avif)

Enwere ego ntinye otu oge maka contabo.
Agbanyeghị, enwere ụbọchị ole na ole kwa ọnwa ebe ego nrụnye bụ n'efu.

Na mgbakwunye na ụgwọ mpaghara efu na Europe, mpaghara ndị ọzọ nwere ọkwa dị iche iche nke mmụba ọnụahịa.

M họọrọ ihe nkesa Europe agbanyeghị, mgbe m jisịrị Cloudflare, ọ dịghị ihe dị iche n'etiti sava ahụ.

Nhazi ikpeazụ bụ nke a, ebe nchekwa 16GB, 6CPU, 200 GB NVMe, 9.50 euro kwa ọnwa, nke 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ọnụahịa a fọrọ nke nta ka ọ bụrụ otu ụzọ n'ụzọ iri nke ọnụahịa Alibaba Cloud na Amazon** .

![](https://i-01.eu.org/1718356956.avif)

M na-eji [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Na CPU egosi Model `AMD EPYC 9224 24-Core Processor` , otu isi arụmọrụ 1285
, Multi-isi akara 4277 Hụ rịzọlt ọzọ [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Azụtara m ihe nkesa atọ n'otu oge ma mee ka ha rụọ ọrụ n'otu oge nke a na-eme ka ndị sava dị n'otu ọnụ ụlọ kọmputa, na-eme ka ọ dịkwuo mfe ịmepụta nnweta dị elu n'ọdịnihu.

Sava ya na-akwụnye mgbe ụfọdụ, na-eme ka ịnweta weebụsaịtị site na nnweta dị elu.

Ndị ọrụ ọhụrụ kwesịrị ịnyefe kaadị ID ha maka njirimara ezigbo aha mgbe ha na-azụrụ.

## Hazie Nbanye Na-Enweghị Paswọọdụ

Mgbe nkeji ole na ole gachara, agbanyere sava ndị ahụ niile.

Ihe mbụ IP idezi `~/.ssh/config` igwe mpaghara ka ịtọ aha aha, wee jiri `ssh-copy-id root@c2` hazie nbanye na-enweghị paswọọdụ.

![](https://i-01.eu.org/1718287198.avif)

Ị nwere ike gbanwee [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) a ka ịmechaa nhazi mmalite ngwa ngwa.

Mgbe emechara nhazi nke enweghị paswọọdụ, ị nwere ike iji ya [pdsh](https://github.com/chaos/pdsh)

Nke mbụ bụ iji aka mee ipv6 wee nwalee

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Wee kwalite sistemu ahụ gaa na ubuntu 24 site na iji otu ọpịpị wee wụnye ngwanrọ a na-ejikarị.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 pụtara ịgbanwe asụsụ China na mpaghara oge na Beijing.

A na-ahazi [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) arụnyere na ndabara dị ka àgwà m [direnv](https://direnv.net/) eme ihe si dị, dị ka [mise](https://github.com/jdx/mise)

Nzọụkwụ a na-ewe ogologo oge ka echere ọkara elekere, nkwalite na ntinye nke ngwanrọ a na-ejikarị eme ihe ga-aga nke ọma. Ị nwere ike kwado nke a site na iwu a:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Na-Agba Ọsọ ssh

Netwọk sitere na Europe ruo `ssh` anaghị akwụsi [mosh](//mosh.org) .

Mepụta scripts `c0` na ndekọ ndekọ mpaghara `~/.bin` (nke etinyere na mgbanwe gburugburu `PATH` ) dị ka ndị a:

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

Mgbe emechara, nye ikike nke enwere ike ime ya yana njikọ dị nro `c1` na `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

N'ọdịnihu, ị nwere ike ịbanye ozugbo na `c0` na `c1` iji jiri njikọ ọsọ ọsọ ọsọ `mosh` wee banye [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Tụgharịa Usoro Nkebi Site Na ext4 Ka Ọ Bụrụ btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Nwere ike ịse foto diski maka nkwado ndabere dị mfe.

Buru ụzọ banye usoro nnapụta

![](https://i-01.eu.org/1718300448.avif)

Họrọ Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Chere ka ihe nkesa ahụ malitegharịa

A ga ssh enwe mgbanwe mkpịsị aka, jiri `ssh-keygen -R ip` hichaa ya

Mgbe ahụ, na-agba ọsọ na-esonụ script iji tọghata nkebi

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Edemede ahụ ga-amaliteghachi usoro ahụ na-akpaghị aka mgbe ntụgharị ga-aga nke ọma.

### Lelee Oke Mkpakọ btrfs

Ọ ga-akpakọrịta na-akpaghị aka site na ndabara iwu ịlele oke mkpakọ bụ nke a:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Mkpakọ Ntuziaka

Ọ bụrụ na ị bụ onye na-ahụ maka izu okè, ị nwekwara ike iji aka mee mkpakọ diski zuru oke.

```bash
btrfs filesystem defragment -r -czstd /
```

Dị ka egosiri na foto dị n'okpuru, ị ga-ahụ na ka ejiri aka na-arụkọ ọrụ na sistemụ ọhụrụ, ihe fọrọ nke nta ka ọ bụrụ 100MB ọzọ abịakọrọ.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Jiri snapper Mepụta Ndabere Foto Btrfs

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) bụ onye mmekọ kacha mma maka Btrfs ndabere.

Edemede mbido ga-emepụta ndekọ `~/ubuntu` , mee naanị iwu a:

```
~/ubuntu/snapper/init.sh
```

Hụ gị n'ime edemede ahụ [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Jiri `snapper list-configs` ka ilele obere mpịakọta nke edobere snapshots maka ya.

![](https://i-01.eu.org/1718302689.avif)

Jiri `snapper -c mnt list` ka ịlele nseta nke obere mpịakọta

`/etc/snapper/configs/mnt` nwere ike ịlele ntọala ndabere nke obere mpịakọta a

Ntụaka ndị ọzọ:

[Jiri ọrụ foto nke Btrfs gwuo ngwa ngwa snapper](https://zhuanlan.zhihu.com/p/31082518)

## Foto Nkesa contabo

contabo Na-enye ọrụ snapshot nke sava, mana anaghị akwado foto nke ahaziri ahazi, edere m [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) iji were foto kwa ụbọchị.

![](https://i-01.eu.org/1718304206.avif)

Ka iweghachi foto nke ihe nkesa, buru ụzọ pịa Crontol na menu njikwa

![](https://i-01.eu.org/1718304275.avif)

Mgbe ahụ, pịa Snapshots iji weghachi.

![](https://i-01.eu.org/1718304063.avif)

Agbanyeghị, granularity nke onyonyo onyonyo a buru oke ibu ozugbo eweghachitere, data agbakwunyere ga-apụ kpamkpam, yabụ jiri nlezianya were ya.

Ọ na-adịkarị mfe iji btrfs snapshots.

## Nkọwa Usoro Nnapụta

Tinye usoro 22 mgbe enwere [tcping](https://github.com/paradiseduo/tcping) ịnweta ya, ị gaghị enwe ike iji okwuntughe edobere maka nkeji 2-3 chere obere oge ma ọ ga-adị mma.

```
tcping ip 22 -c 9999
```

Enwere ike nyochaa nnweta ọdụ ụgbọ mmiri.

### Otu Esi Enweta Draịvụ Ike Mgbe Ị Banyere Nnapụta &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ị nwere ike ịlele foto, dịka ọmụmaatụ

```
snapper -c etc list
```

Lelee mgbanwe faịlụ foto foto

```
snapper -c etc status 5..6
```

Lelee ederede dị iche iche

```
snapper -c etc diff 3..5
```

Weghachite foto foto: Dịka ọmụmaatụ, megharịa mgbanwe niile ka foto 5 gachara

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Kwado Nkwụsi Ike Log

Ịkwado nnọgidesi ike log n'okpuru sistemụ nnapụta chọrọ ka iji aka mepụta ndekọ kwekọrọ wee mee ụfọdụ usoro ndị ọzọ, n'ihi na ị nweghị ọrụ sistemụ na-agba ọsọ. Nke a bụ usoro ị nwere ike ịnwale:

Mbụ chroot, mgbe ahụ

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Malitegharịa n'ime sistemụ Ubuntu gị: Mgbe ịmechara mgbanwe ndị a dị n'elu, ịkwesịrị ịmalitegharị igwe gị nke ọma yana n'ime sistemụ Ubuntu kama usoro nnapụta.

N'ụzọ dị otú a, systemd-journald ga-amalite site na nhazi ọhụrụ ahụ wee malite ịchekwa ndekọ na-adịgide adịgide na diski ike.

Buru n'uche na a na-arụ ọrụ ndị a dị n'elu na usoro nnapụta, n'ihi ya, mgbanwe ndị ahụ agaghị arụ ọrụ ruo mgbe arụgharịrị usoro ahụ ma gharazi na ọnọdụ nnapụta.

Nke a pụtara na ị gaghị ahụ ozugbo mgbanwe ọ bụla na ndekọ ndekọ nke na-adịgide adịgide, mana ndekọ niile emepụtara mgbe nke ahụ gasịrị ga-adịgide.

Otu a ị nwere ike ịlele ndekọ nke ọrụ ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Ihe Ndetu Banyere Ọrịa Siri Ike Na Mgbagwoju Anya

### Dozie Nsogbu Ahụ Dị Egwu: Ihe Nkesa Enweghị Ike ssh

Eji m github action mee nchịkọta akpaka na edemede mbugharị na mbụ, mana achọpụtara m na ọrụ nnyefe enweghị ike ịbụ ssh.

Ịbanye na sistemụ nnapụta na ilele ndekọ ndekọ bụ okwu ikike:

`Missing privilege separation directory: /run/sshd`

Ị nwere ike ịmepụta ndekọ a site na iji iwu a

```
chown root:root /
systemd-tmpfiles --create
```

Ka emechara nyocha ugboro ugboro, ọ bụ n'ihi github action onye ọrụ `uid` nke tar bụ `1001`

Nwepu ga-abụrịrị ma ọ bụrụ na enweghị oke `--no-same-owner` , a ga-ewepụ ya na `uid` maka ndị ọrụ `1001` tar

N'ihi ya, rsync ga-agbanwe otu onye ọrụ nke ndekọ ndekọ mgbọrọgwụ, mgbe ahụ ị gaghị enwe ike ịbanye na ssh mgbe ịmalitegharịa.

Gbanwee script decompression dị ka ndị a:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
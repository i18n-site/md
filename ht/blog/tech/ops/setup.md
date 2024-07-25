# Inisyalize Sèvè a (Sèvi Ak Patisyon BTRFS, Snapshot Pwograme Snapper)

## Kontabo Achte Sèvè

contabo se yon founisè VPS bon mache nan Almay ak yon istwa long (plis pase 20 ane) ak anpil itilizatè (plis pase 200,000), kidonk pa gen okenn bezwen enkyete sou kouri ale.

VPS w ap achte [contabo.com](//contabo.com) sonje chwazi Euro prix, ki pi bon mache.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Gen yon frè enstalasyon yon sèl fwa pou contabo.
Sepandan, gen kèk jou chak mwa kote frè enstalasyon an gratis.

Anplis frè zòn gratis an Ewòp, lòt rejyon yo gen diferan nivo ogmantasyon pri.

Mwen te chwazi yon sèvè Ewopeyen an de tout fason, apre yo fin itilize cloudflare, pa gen anpil diferans ant sèvè yo.

Konfigirasyon final la se jan sa a, 16GB memwa, 6CPU, 200 GB NVMe, 9.50 ero yon mwa, ekivalan a 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Pri sa a se prèske yon dizyèm nan pri Alibaba Cloud ak Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Mwen te itilize [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) kouri pèfòmans ak paramèt:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Montre CPU Modèl `AMD EPYC 9224 24-Core Processor` nòt pèfòmans yon sèl-nwayo 1285
, nòt milti-nwayo 4277 Gade plis rezilta [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Mwen te achte twa serveurs nan yon sèl fwa ak aktive yo an menm tan an Sa asire ke serveurs yo nan menm chanm òdinatè, sa ki fè li pi fasil yo bati disponiblite segondè nan lavni.

Sèvè li yo detanzantan rakwoche, asire aksè sit entènèt atravè disponiblite segondè.

Nouvo itilizatè yo bezwen soumèt kat idantite yo pou otantifikasyon non reyèl lè y ap achte.

## Konfigure Login San Modpas

Apre kèk minit, tout serveurs yo te aktive.

Premye bagay la se modifye machin lokal la `~/.ssh/config` Mete yon alyas pou IP epi sèvi ak `ssh-copy-id root@c2` pou konfigirasyon login san modpas.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Ou ka modifye [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) sa a pou konplete konfigirasyon inisyalizasyon an pi vit.

Apre yo fin ranpli konfigirasyon an san modpas, ou ka itilize [pdsh](https://github.com/chaos/pdsh) an pakèt, sa ki pratik.

Premye a se manyèlman pèmèt ipv6 ak tès

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Lè sa a, ajou sistèm nan ubuntu 24 ak yon sèl klike sou epi enstale lojisyèl souvan itilize.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 vle di chanje lang nan Chinwa ak zòn lè a Beijing.

Lojisyèl ki enstale pa defo konfigirasyon dapre abitid itilizasyon pèsonèl mwen, tankou [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , elatriye. Si sa nesesè, ou ka kopye [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) depo a epi modifye li jan sa nesesè.

Etap sa a pran yon bon bout tan Apre w fin tann yon demi èdtan, ajou ak enstalasyon lojisyèl ki souvan itilize yo pral reyisi. Ou ka konfime li ak lòd sa a:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Akselere ssh

Rezo a soti `ssh` Ewòp nan Lachin se pa ki estab [mosh](//mosh.org)

Kreye yon script `c0` nan `~/.bin` machin lokal la (sitou ajoute nan anviwònman varyab `PATH` ) jan sa a:

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

Apre kreyasyon an, bay pèmisyon ègzekutabl ak lyen ki mou `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Nan tan kap vini an, ou ka antre dirèkteman `c0` `c1` epi ou ka itilize `mosh` koneksyon dirèk ak antre [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvèti Fòma Patisyon Soti Nan ext4 Nan btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) pran snapshots disk pou backup fasil.

Premye antre nan sistèm sekou a

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Chwazi Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Tann pou sèvè a rekòmanse

Chanjman anprent yo pral rive lè ssh sèvi ak li `ssh-keygen -R ip`

Lè sa a, kouri script sa a konvèti patisyon an

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script la pral otomatikman rekòmanse sistèm lan apre konvèsyon an gen siksè.

### Gade Rapò Konpresyon btrfs

Li pral otomatikman konpresyon pa default lòd la tcheke rapò a konpresyon se jan sa a:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manyèl Konpresyon

Si ou se yon pèfeksyonis, ou kapab tou fè yon konpresyon plen disk manyèlman kòmandman an

```bash
btrfs filesystem defragment -r -czstd /
```

Jan yo montre nan figi ki anba a, ou ka wè ke apre konpresyon manyèl nan nouvo sistèm nan, prèske 100MB plis te konprese.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Kreye Yon Backup Snapshot Btrfs Ak snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) pi bon patnè pou Btrfs backup.

Script inisyalizasyon an pral kreye anyè `~/ubuntu` , jis kouri lòd sa a:

```
~/ubuntu/snapper/init.sh
```

Na wè nan kontni script la [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Sèvi ak `snapper list-configs` pou wè sou-volume pou ki snapshots yo mete.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Sèvi ak `snapper -c mnt list` pou wè yon snapshot de yon souvolume

`/etc/snapper/configs/mnt` Ou ka wè paramèt backup espesifik sa a

Plis referans:

[Fasil jwe ak fonksyon snapshot Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Kontabo Sèvè Snapshot

contabo Bay fonksyon snapshot sèvè, men pa sipòte snapshots pwograme mwen te ekri yon [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pou pran snapshots chak jou.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Pou retabli yon snapshot sèvè, premye klike sou Crontol nan meni jesyon an

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Lè sa a, klike sou Snapshots pou retabli.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Sepandan, granularite nan snapshot sa a twò gwo Yon fwa retabli, done yo ki fèk ajoute yo pral konplètman pèdi, kidonk tanpri itilize li ak prekosyon.

Anjeneral li pi pratik pou itilize btrfs snapshots.

## Detay Sistèm Sekou

Antre nan sistèm sekou 22 Apre pò a [tcping](https://github.com/paradiseduo/tcping) aksesib, ou pa pral kapab jwenn aksè a li ak modpas la fikse pou 2-3 minit.

```
tcping ip 22 -c 9999
```

Aksèbilite pò yo ka kontwole.

### Ki Jan Yo Jwenn Aksè Nan Kondwi a Difisil Apre Ou Fin Antre & Snapshot Restore

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ou ka wè snapshot la, pou egzanp

```
snapper -c etc list
```

Gade chanjman nan dosye snapshot

```
snapper -c etc status 5..6
```

Gade tèks diferan espesifik

```
snapper -c etc diff 3..5
```

Restore snapshot: Pa egzanp, defèt tout chanjman apre snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Pèmèt Pèsistans Log

Lè w pèmèt pèsistans ouvri sekou anba yon sistèm sekou, sa mande w pou w kreye anyè ki koresponn lan epi fè kèk etap adisyonèl, paske ou ka pa gen yon sèvis systemd kap kouri. Men etap ou ka eseye:

Premye chroot, lè sa a

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Rdemare nan sistèm Ubuntu ou a: Apre ou fin fè chanjman ki anwo yo, ou bezwen rdemare machin ou nòmalman ak nan sistèm Ubuntu ou olye pou yo sistèm sekou a.

Nan fason sa a, systemd-journald pral kòmanse ak nouvo konfigirasyon an epi kòmanse estoke mòso bwa ki pèsistan sou disk la.

Kenbe nan tèt ou ke operasyon ki anwo yo fèt sou yon sistèm sekou, kidonk chanjman sa yo pral sèlman pran efè yon fwa sistèm nan rekòmanse epi yo pa nan mòd sekou ankò.

Sa vle di ke ou pa pral imedyatman wè okenn chanjman nan mòso bwa ki egziste deja vin pèsistan, men tout mòso bwa ki te pwodwi apre sa a pral pèsiste.

Nan fason sa a ou ka wè mòso bwa yo nan sèvis la ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Nòt Sou Maladi Difisil Ak Konplike

### Rezoud Pwoblèm Nan Etranj: Sèvè a Pa Ka ssh

Mwen te itilize aksyon github pou fè yon konpilasyon otomatik ak script deplwaman anvan, men mwen te jwenn ke sèvis deplwaman an pa t 'kapab ssh.

Antre nan sistèm sekou a epi gade mòso bwa yo se yon pwoblèm pèmisyon:

`Missing privilege separation directory: /run/sshd`

Ou ka kreye anyè sa a ak lòd sa a

```
chown root:root /
systemd-tmpfiles --create
```

Apre envestigasyon repete, se github action itilizatè a ki te `1001` tar `uid`

tar Déballage dwe fèt san paramèt `--no-same-owner` li pral dekonprese nan `uid` pou `1001` itilizatè

Kòm yon rezilta, rsync pral chanje gwoup itilizatè a nan anyè rasin lan, ak Lè sa a, ou pa yo pral kapab konekte nan ssh apre rekòmanse.

Modifye script dekonpresyon an jan sa a:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


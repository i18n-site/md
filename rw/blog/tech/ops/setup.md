# Gutangiza Seriveri (Koresha Igice Cya BTRFS, Snapper Iteganijwe Gufata Amashusho)

## Seriveri Yo Kugura

contabo ni VPS ihendutse itanga mubudage ifite amateka maremare (imyaka irenga 20) hamwe nabakoresha benshi (barenga 200.000), kubwibyo rero nta mpamvu yo guhangayikishwa no guhunga.

VPS ugura [contabo.com](//contabo.com) Wibuke guhitamo ibiciro bya Euro, bihendutse.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Hariho inshuro imwe yo kwishyiriraho kontabo.
Ariko, hariho iminsi mike buri kwezi aho amafaranga yo kwishyiriraho ari ubuntu. Iyandikishe kandi witondere imeri yamamaza.

Usibye amafaranga yubusa yuburayi, utundi turere dufite urwego rutandukanye rwo kuzamura ibiciro.

Nahisemo seriveri yu Burayi Ibyo ari byo byose, nyuma yo gukoresha ibicu, nta tandukaniro ryinshi riri hagati ya seriveri.

Iboneza rya nyuma nuburyo bukurikira, ububiko bwa 16GB, 6CPU, 200 GB NVMe, 9.50 euro ku kwezi, bihwanye na 74.43.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Iki giciro ni kimwe cya cumi cyigiciro cya Alibaba Cloud na Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

[Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) kugirango nkore imikorere nibipimo:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Erekana Icyitegererezo CPU `AMD EPYC 9224 24-Core Processor` Imikorere imwe-amanota amanota 1285
, amanota menshi 4277 Reba ibisubizo byinshi [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Naguze seriveri eshatu icyarimwe kandi ndayikora icyarimwe.

Seriveri zayo rimwe na rimwe zimanikwa, ikemeza ko urubuga rushobora kuboneka binyuze hejuru cyane.

Abakoresha bashya bakeneye gutanga indangamuntu zabo kugirango babone izina ryukuri mugihe baguze.

## Shiraho Ijambo Ryibanga Ridafite Ijambo

Nyuma yiminota mike, seriveri zose zarakozwe.

Ikintu cya `ssh-copy-id root@c2` ni uguhindura imashini IP `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Urashobora guhindura iyi [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) kugirango urangize iboneza ryihuse.

Nyuma yimiterere idafite ijambo ryibanga irangiye, urashobora kuyikoresha Irashobora gukoreshwa mubice, byoroshye [pdsh](https://github.com/chaos/pdsh)

Icyambere nugukora intoki ipv6 no kugerageza

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Noneho uzamure sisitemu kuri ubuntu 24 ukanze rimwe hanyuma ushyire software ikoreshwa.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN = 1 bisobanura guhindura ururimi mu gishinwa nigihe cyagenwe i Beijing.

Porogaramu yashyizweho ku buryo budasanzwe yashyizweho nkurikije ingeso zanjye zo gukoresha, nka [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , n'ibindi. Nibiba ngombwa, urashobora gukoporora [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ububiko hanyuma ukabihindura uko bikenewe.

Iyi ntambwe ifata igihe kirekire Nyuma yo gutegereza igice cyisaha, kuzamura no kwishyiriraho software ikoreshwa bizagenda neza. Urashobora kubyemeza ukoresheje itegeko rikurikira:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Yihuta ssh

Umuyoboro uva i Burayi ujya mu Bushinwa ntabwo uhagaze neza Birasabwa `ssh` [mosh](//mosh.org)

Kora `c0` inyandiko mumashini `~/.bin` (cyane cyane yongewe kubidukikije bihinduka `PATH` ) muburyo bukurikira:

```bash
#! / usr / bin / env bash

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Nyuma yo kurema, tanga uruhushya rushobora gukorwa na yoroshye- `c2` `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Mugihe kizaza, urashobora kwinjira muburyo butaziguye `c0` `c1` kandi urashobora gukoresha `mosh` yihuta yihuta hanyuma ukinjira [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Hindura Imiterere Y'ibice Kuva ext4 Kuri btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) gufata disiki ya snapshots kugirango byoroshye gusubira inyuma.

Banza winjire muri sisitemu yo gutabara

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Hitamo Inkeragutabara

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Rindira seriveri itangire

Guhindura urutoki bizabaho mugihe ssh koresha `ssh-keygen -R ip`

Noneho koresha inyandiko ikurikira kugirango uhindure ibice

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Inyandiko izahita itangira sisitemu nyuma yo guhinduka.

### Reba Igipimo Cya btrfs

Bizahita byikuramo byanze bikunze Itegeko ryo kugenzura igipimo cyo kwikuramo ni ibi bikurikira:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kwikuramo Intoki

Niba uri intangarugero, urashobora kandi gukora compression yuzuye intoki

```bash
btrfs filesystem defragment -r -czstd /
```

Nkuko bigaragara ku gishushanyo gikurikira, urashobora kubona ko nyuma yo kwikuramo intoki muri sisitemu nshya, hafi 100MB zarahagaritswe.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Kora Btrfs Snapshot Backup Hamwe Na snapper

ni umufatanyabikorwa mwiza kuri Btrfs backup [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

Inyandiko yo gutangiza izakora `~/ubuntu` , koresha itegeko rikurikira:

```
~/ubuntu/snapper/init.sh
```

Reba mu bikubiye mu nyandiko [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Koresha kugirango urebe subvolume ya snapshots yashizweho `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Koresha kugirango urebe ifoto ya subvolume `snapper -c mnt list`

`/etc/snapper/configs/mnt` Urashobora kureba igenamiterere ryihariye rya backup ya subvolume

Ibindi bisobanuro:

[Byoroshye gukina numurimo wo gufata amashusho ya Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Seriveri Ya Kontabo

Gutanga contabo ifotora imikorere, ariko ntishyigikira amafoto [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) .

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Kugarura seriveri ishusho, banza ukande Crontol muri menu yubuyobozi

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Noneho, kanda Snapshots kugirango ugarure.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Ariko, granularity yiyi snapshot ni nini cyane Iyo imaze kugarurwa, amakuru mashya yongeweho azabura rwose, nyamuneka uyikoreshe witonze.

Mubisanzwe biroroshye gukoresha btrfs snapshots.

## Sisitemu Yo Gutabara Ibisobanuro Birambuye

Injira sisitemu [tcping](https://github.com/paradiseduo/tcping) 2-3 22

```
tcping ip 22 -c 9999
```

Kugera ku cyambu birashobora gukurikiranwa.

### Nigute Ushobora Kugera Kuri Disiki Nyuma Yo Kwinjira Gutabara &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Urashobora kureba ifoto, urugero

```
snapper -c etc list
```

Reba amafoto yafashwe

```
snapper -c etc status 5..6
```

Reba inyandiko yihariye

```
snapper -c etc diff 3..5
```

Kugarura ifoto: Kurugero, gusubiramo impinduka zose nyuma yo gufata amashusho 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Gushoboza Gukomera

Gushoboza gutsimbarara kuri sisitemu yo gutabara bigusaba gukora intoki gukora ububiko bujyanye no gukora izindi ntambwe zinyongera, kuko ushobora kuba udafite serivise ya sisitemu ikora. Dore intambwe ushobora kugerageza:

Banza chroot, hanyuma

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ongera usubire muri sisitemu ya Ubuntu: Nyuma yo guhindura impinduka zavuzwe haruguru, ugomba kongera gukora imashini yawe mubisanzwe no muri sisitemu ya Ubuntu aho kuba sisitemu yo gutabara.

Muri ubu buryo, systemd-journald izatangirana nuburyo bushya hanyuma itangire kubika ibiti ubudacogora kuri disiki ikomeye.

Wibuke ko ibikorwa byavuzwe haruguru bikorerwa kuri sisitemu yo gutabara, izo mpinduka rero zizatangira gukurikizwa gusa sisitemu imaze gusubirwamo kandi itakiri muburyo bwo gutabara.

Ibi bivuze ko utazahita ubona impinduka zose mubiti bihari bikomeza, ariko ibiti byose byakozwe nyuma yibi bizakomeza.

Ubu buryo urashobora kureba ibiti bya serivisi ya ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Inyandiko Ku Ndwara Zigoye Kandi Zigoye

### Gukemura Ikibazo Kidasanzwe: Seriveri Ntishobora ssh

Nakoresheje ibikorwa bya github kugirango nkore icyegeranyo cyikora kandi cyohereze inyandiko mbere, ariko nasanze serivisi yo kohereza idashobora kuba ssh.

Kwinjira muri sisitemu yo gutabara no kureba ibiti ni ikibazo cyuruhushya:

`Missing privilege separation directory: /run/sshd`

Urashobora gukora ubu bubiko hamwe nubutegetsi bukurikira

```
chown root:root /
systemd-tmpfiles --create
```

Nyuma yiperereza ryakozwe, ni `1001` github action Umukoresha washyizeho tar `uid`

tar bigomba gukorwa nta bipimo `--no-same-owner` Bizacibwa muri `uid` `1001`

Nkigisubizo, rsync izahindura abakoresha itsinda ryumuzi wububiko, hanyuma ntuzashobora kwinjira muri ssh nyuma yo gutangira.

Hindura inyandiko ya decompression kuburyo bukurikira:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


# Tandika Seva (Kozesa Ekitundu Kya BTRFS, Snapper Scheduled Snapshot)

## contabo Okugula Seva

contabo ye kampuni ya VPS eya layisi mu Germany ng’erina ebyafaayo bingi (emyaka egisukka mu 20) n’abakozesa bangi (abasukka mu 200,000), kale tekyetaagisa kweraliikirira kudduka.

VPS ​​ogula [contabo.com](//contabo.com) jjukira okulonda Euro pricing, nga ya buseere.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Waliwo ssente z’okussaako contabo omulundi gumu.
Wabula waliwo ennaku ntono buli mwezi nga ssente z’okussaako za bwereere Wewandiise era weetegereze email ezitumbula.

Ng’oggyeeko ssente z’ekitundu ez’obwereere mu Bulaaya, ebitundu ebirala birina emitendera egy’enjawulo egy’okulinnyisa emiwendo.

Nalonda server ya European Anyway, oluvanyuma lw'okukozesa cloudflare, tewali njawulo nnene wakati wa servers.

Ensengeka esembayo eri bweti, 16GB memory, 6CPU, 200 GB NVMe, 9.50 euros omwezi, nga zenkana 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Bbeeyi eno kumpi kimu kya kkumi ku bbeeyi ya Alibaba Cloud ne Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Nakozesa [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Okwolesebwa Model CPU `AMD EPYC 9224 24-Core Processor` obubonero bw'omutindo gumu 1285 core !
, obubonero obw'emisingi mingi 4277 Laba ebisingawo ebivuddemu [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Nagula seeva ssatu omulundi gumu ne nzikola mu kiseera kye kimu Kino kikakasa nti seeva ziri mu kisenge kya kompyuta kimu, ekyanguyira okuzimba okubeerawo okw’amaanyi mu biseera eby’omu maaso.

Seva zaayo oluusi n’oluusi zisiba essimu, okukakasa nti omukutu gwa yintaneeti gutuuka ku mukutu nga guyita mu kubeerawo okw’amaanyi.

Abakozesa abapya balina okuleeta endagamuntu zaabwe okukakasa amannya amatuufu nga bagula.

## Tegeka Okuyingira Okutaliiko Kigambo Kya Kuyita

Oluvannyuma lw’eddakiika ntono, seeva zonna zaatandika okukola.

`ssh-copy-id root@c2` IP kulongoosa `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Osobola okukyusa [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) eno okumaliriza ensengeka y'okutandika amangu.

Oluvannyuma lw'okusengeka okutaliimu kigambo okuggwa, osobola okugikozesa [pdsh](https://github.com/chaos/pdsh) okukolebwa mu bitundutundu, ekintu ekirungi.

Ekisooka kwe kusobozesa ipv6 mu ngalo n'okugezesa

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Oluvannyuma okulongoosa enkola eno ku ubuntu 24 ng’onyiga omulundi gumu era oteekemu pulogulaamu ezikozesebwa ennyo.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 kitegeeza okukyusa olulimi okudda mu Luchina ate ekitundu ky’obudde okudda mu Beijing.

Sofutiweya etekeddwa mu butonde etegekeddwa okusinziira ku mize gyange egy’okukozesa, gamba nga [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , n’ebirala Bwe kiba kyetaagisa, osobola okukoppa sitoowa [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) n’ogikyusa nga bwe kyetaagisa.

Omutendera guno gutwala ekiseera kiwanvu Oluvannyuma lw’okulinda ekitundu ky’essaawa, okulongoosa n’okussaako pulogulaamu ezikozesebwa ennyo kijja kuba kya buwanguzi. Osobola okukikakasa n'ekiragiro kino wammanga:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Ayanguya ssh

Omukutu okuva e Bulaaya okutuuka e `ssh` tegunywevu [mosh](//mosh.org)

Tonda `c0` script `PATH` `~/.bin`

```bash
#!/usr/bin/env bash nga bwe kiri

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Oluvannyuma lw'okutonda, waayo olukusa olukolebwa ne soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Mu maaso, osobola okuyingira butereevu `c0` , `c1` era osobola okukozesa `mosh` okuyungibwa obutereevu okw'amaanyi n'oyingira [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Okukyusa Ensengeka Y'okugabanya Okuva Ku ext4 Okudda Ku btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Asobola okukuba ebifaananyi bya disiki okusobola okwanguyirwa okutereka.

Sooka oyingire mu nkola y’okununula abantu

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Londa Debian Okununula

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Linda seva okuddamu okutandika

Enkyukakyuka mu ngalo zijja kubaawo nga ssh , kozesa `ssh-keygen -R ip`

Oluvannyuma dduka script eno wammanga okukyusa ekitundu

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script ejja kuddamu okutandika enkola mu ngeri ey'otoma oluvannyuma lw'okukyusa okutuuka ku buwanguzi.

### Laba Omugerageranyo Gw'okunyigiriza btrfs

Kijja kunyigiriza mu ngeri ey’otoma nga bwe kibadde Ekiragiro okukebera omugerageranyo gw’okunyigiriza kiri bwe kiti:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Okunyigiriza Mu Ngalo

Bw’oba ​​oli perfectionist, osobola n’okukola full disk compression mu ngalo Ekiragiro kiri bwe kiti:

```bash
btrfs filesystem defragment -r -czstd /
```

Nga bwe kiragibwa mu kifaananyi wansi, osobola okulaba nti oluvannyuma lw’okunyigiriza mu ngalo mu nkola empya, kumpi 100MB endala zaanyigirizibwa.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Tonda Btrfs Snapshot Backup Ne snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

Ekiwandiiko ky'okutandika kijja kutondawo `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Tulabe mu bigambo ebiri mu script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Kozesa `snapper list-configs` okulaba subvolumes ebifaananyi ebiteekeddwawo.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Kozesa `snapper -c mnt list` okulaba ekifaananyi ekitono eky'obuzito obutono

`/etc/snapper/configs/mnt`

Ebisingawo ku biwandiiko:

[Kyangu okuzannya n'omulimu gw'okukuba ebifaananyi ogwa Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Ekifaananyi Ekitono

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Okuzzaawo ekifaananyi kya seva, sooka onyige Crontol mu menu y'okuddukanya

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Oluvannyuma, nyweza Snapshots okuzzaawo.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Naye, obutundutundu bw'ekifaananyi kino bunene nnyo Bw'omala okuzzaawo, data empya eyongezeddwayo ejja kubula ddala, kale nsaba okikozese n'obwegendereza.

Ebiseera ebisinga kiba kyangu okukozesa ebifaananyi bya btrfs.

## Ebikwata Ku Nkola Y’okununula Abantu

22 [tcping](https://github.com/paradiseduo/tcping) 2-3 .

```
tcping ip 22 -c 9999
```

Okutuuka ku mwalo kuyinza okulondoolebwa.

### Engeri Y'okuyingira Mu Hard Drive Oluvannyuma Lw'okuyingira Mu Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Osobola okulaba ekifaananyi ekikwata, okugeza

```
snapper -c etc list
```

Laba enkyukakyuka mu fayiro y'ebifaananyi

```
snapper -c etc status 5..6
```

Laba ekiwandiiko kya diff ekitongole

```
snapper -c etc diff 3..5
```

Restore snapshot: Okugeza, zzaawo enkyukakyuka zonna oluvannyuma lw'ekifaananyi 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Ssobozesa Okunywerera Ku Log

Okusobozesa okusigala kw'ebiwandiiko wansi w'enkola y'okununula kyetaagisa okukola mu ngalo dayirekita ekwatagana n'okukola emitendera egimu egy'enjawulo, kubanga oyinza obutaba na mpeereza ya systemd ekola. Wano waliwo emitendera gy’osobola okugezaako:

Okusooka chroot, olwo

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ddamu okutandika mu nkola yo eya Ubuntu: Oluvannyuma lw’okukola enkyukakyuka ezo waggulu, olina okuddamu okutandika ekyuma kyo mu ngeri eya bulijjo ne mu nkola yo eya Ubuntu mu kifo ky’enkola y’okununula.

Mu ngeri eno, systemd-journald ejja kutandika n'ensengeka empya era etandike okutereka ebiwandiiko obutakyukakyuka ku disiki enzibu.

Kuuma mu mutima nti emirimu egyo waggulu gikolebwa ku nkola y’okutaasa, kale enkyukakyuka ezo zijja kutandika okukola ng’enkola eno ezzeemu okutandika era nga tekyali mu mbeera ya kununula.

Kino kitegeeza nti tojja kulaba mangu nkyukakyuka yonna mu biwandiiko ebiriwo nga bifuuka ebinywevu, naye ebiwandiiko byonna ebikoleddwa oluvannyuma lwa kino bijja kusigala.

Mu ngeri eno osobola okulaba ebiwandiiko by'empeereza ya ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Ebiwandiiko Ku Ndwadde Enzibu Era Enzibu

### Gonjoola Ekizibu Ekyewuunyisa: Seva Tesobola ssh

Nakozesa github action okukola automatic compilation ne deployment script emabegako, naye nakizuula nti deployment service tesobola ssh.

Okuyingira mu nkola y’okununula n’okutunuulira ebikondo nsonga ya lukusa:

`Missing privilege separation directory: /run/sshd`

Osobola okukola dayirekita eno n'ekiragiro kino wammanga

```
chown root:root /
systemd-tmpfiles --create
```

Oluvannyuma lw'okunoonyereza enfunda eziwera, kiri bwe `1001` github action Omukozesa eyateeka tar `uid`

tar Okusumulula kulina okukolebwa awatali parameters `--no-same-owner` kijja kuggyibwamu `uid` for `1001` user

N'ekyavaamu, rsync ejja kukyusa ekibinja ky'abakozesa ekya root directory, n'oluvannyuma tojja kusobola kuyingira mu ssh oluvannyuma lw'okuddamu okutandika.

Kyuusa ekiwandiiko ky'okukendeeza ku buzibu nga bwe kiri wansi:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


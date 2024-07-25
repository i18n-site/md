# Anzisha Seva (Tumia Kizigeu Cha BTRFS, Picha Iliyoratibiwa Ya Snapper)

## Seva Ya Ununuzi Ya contabo

contabo ni mtoa huduma wa bei nafuu wa VPS nchini Ujerumani na historia ndefu (zaidi ya miaka 20) na watumiaji wengi (zaidi ya 200,000), kwa hiyo hakuna haja ya kuwa na wasiwasi kuhusu kukimbia.

VPS [contabo.com](//contabo.com) kumbuka kuchagua bei ya Euro, ambayo ni nafuu.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Kuna ada ya usakinishaji ya mara moja kwa contabo.
Hata hivyo, kuna siku chache kila mwezi ambapo ada ya usakinishaji ni bure.

Mbali na ada ya eneo la bure huko Uropa, mikoa mingine ina viwango tofauti vya ongezeko la bei.

Nilichagua seva ya Uropa Hata hivyo, baada ya kutumia cloudflare, hakuna tofauti nyingi kati ya seva.

Usanidi wa mwisho ni kama ifuatavyo, kumbukumbu ya 16GB, 6CPU, 200 GB NVMe, euro 9.50 kwa mwezi, sawa na 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Bei hii ni karibu moja ya kumi ya bei ya Alibaba Cloud na Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Nilitumia [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) kuendesha utendaji na vigezo:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Onyesha CPU `AMD EPYC 9224 24-Core Processor` alama ya utendaji wa msingi mmoja 1285
, alama nyingi za msingi 4277 Angalia matokeo zaidi [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Nilinunua seva tatu kwa wakati mmoja na kuziwezesha kwa wakati mmoja. Hii inahakikisha kwamba seva ziko kwenye chumba kimoja cha kompyuta, na kuifanya iwe rahisi kujenga upatikanaji wa juu katika siku zijazo.

Seva zake huning'inia mara kwa mara, na hivyo kuhakikisha ufikiaji wa tovuti kupitia upatikanaji wa juu.

Watumiaji wapya wanahitaji kuwasilisha vitambulisho vyao kwa uthibitishaji wa jina halisi wakati wa kununua.

## Sanidi Kuingia Bila Nenosiri

Baada ya dakika chache, seva zote ziliamilishwa.

Jambo la kwanza ni kuhariri mashine ya ndani `~/.ssh/config` Weka lakabu ya IP na kisha utumie `ssh-copy-id root@c2` kusanidi kuingia bila nenosiri.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Unaweza kurekebisha [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) hii ili kukamilisha usanidi wa uanzishaji haraka.

Baada ya usanidi usio na nenosiri kukamilika, unaweza kuitumia [pdsh](https://github.com/chaos/pdsh)

Ya kwanza ni kuwezesha ipv6 kwa mikono na kujaribu

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Kisha sasisha mfumo hadi ubuntu 24 kwa mbofyo mmoja na usakinishe programu inayotumika sana.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 inamaanisha kubadili lugha hadi Kichina na saa za eneo hadi Beijing.

Programu iliyosakinishwa kwa chaguo-msingi imesanidiwa kulingana na mazoea yangu ya matumizi ya kibinafsi, kama vile [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , n.k. Ikiwa ni lazima, unaweza kunakili ghala la [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) na kuirekebisha inavyohitajika.

Hatua hii inachukua muda mrefu Baada ya kusubiri kwa nusu saa, uboreshaji na usakinishaji wa programu zinazotumiwa kawaida zitafanikiwa. Unaweza kuithibitisha kwa amri ifuatayo:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Huongeza Kasi Ya ssh

Mtandao kutoka Uropa hadi Uchina sio dhabiti Inapendekezwa `ssh` [mosh](//mosh.org)

Unda hati ya `c0` kwenye mashine ya `~/.bin` (haswa imeongezwa kwa anuwai ya mazingira `PATH` ) saraka kama ifuatavyo:

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

Baada ya uundaji, toa ruhusa zinazoweza kutekelezwa na kiunga laini `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Katika siku zijazo, unaweza kuingia moja kwa moja `c0` `c1` na unaweza kutumia `mosh` muunganisho wa moja kwa moja wa kasi ya juu na uingie [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Badilisha Umbizo La Kizigeu Kutoka ext4 Hadi btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Inaweza kuchukua picha za diski kwa chelezo rahisi.

Kwanza ingiza mfumo wa uokoaji

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Chagua Uokoaji wa Debian

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Subiri seva iwashe tena

Mabadiliko ya alama za vidole yatatokea wakati ssh tumia `ssh-keygen -R ip`

Kisha endesha hati ifuatayo ili kubadilisha kizigeu

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Hati itaanzisha upya mfumo kiotomatiki baada ya ubadilishaji kufanikiwa.

### Tazama Uwiano Wa Ukandamizaji Wa btrfs

Itapunguza kiotomatiki kwa chaguo-msingi Amri ya kuangalia uwiano wa compression ni kama ifuatavyo.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Ukandamizaji Wa Mwongozo

Ikiwa wewe ni mtu anayetaka ukamilifu, unaweza pia kufanya compression kamili ya diski kwa mikono

```bash
btrfs filesystem defragment -r -czstd /
```

Kama inavyoonyeshwa kwenye kielelezo hapa chini, unaweza kuona kwamba baada ya kubanwa kwa mikono katika mfumo mpya, karibu MB 100 zaidi zilibanwa.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Unda Nakala Rudufu Ya Muhtasari Wa Btrfs Ukitumia snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ndiye mshirika bora wa hifadhi rudufu Btrfs .

Hati ya uanzishaji itaunda `~/ubuntu` , endesha tu amri ifuatayo:

```
~/ubuntu/snapper/init.sh
```

Tuonane kwenye maandishi [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Tumia `snapper list-configs` kutazama maandishi madogo ambayo vijipicha vyake vimewekwa.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Tumia `snapper -c mnt list` kutazama taswira ya sauti ndogo

`/etc/snapper/configs/mnt` Unaweza kuona mipangilio maalum ya kuhifadhi nakala hii

Marejeleo zaidi:

[Cheza kwa urahisi utendakazi wa muhtasari wa Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo Hutoa utendakazi wa muhtasari wa seva, lakini haitumii muhtasari ulioratibiwa niliandika [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ili kupiga picha za kila siku.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Ili kurejesha muhtasari wa seva, bofya kwanza Crontol kwenye menyu ya usimamizi

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Kisha, bofya Vijipicha ili kurejesha.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Hata hivyo, uzito wa muhtasari huu ni mkubwa sana ukisharejeshwa, data mpya iliyoongezwa itapotea kabisa, kwa hivyo tafadhali itumie kwa tahadhari.

Kawaida ni rahisi zaidi kutumia vijipicha vya btrfs.

## Maelezo Ya Mfumo Wa Uokoaji

Ingiza 22 wa uokoaji Baada ya bandari [tcping](https://github.com/paradiseduo/tcping) , hutaweza kuipata kwa nenosiri lililowekwa kwa dakika 2-3 .

```
tcping ip 22 -c 9999
```

Ufikivu wa bandari unaweza kufuatiliwa.

### Jinsi Ya Kupata Gari Ngumu Baada Ya Kuingia & Rejesha Snapshot

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Unaweza kuona snapshot, kwa mfano

```
snapper -c etc list
```

Tazama mabadiliko ya faili ya muhtasari

```
snapper -c etc status 5..6
```

Tazama maandishi mahususi tofauti

```
snapper -c etc diff 3..5
```

Rejesha muhtasari: Kwa mfano, tengua mabadiliko yote baada ya muhtasari wa 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Washa Uendelevu Wa Kumbukumbu

Kuwezesha uendelevu wa kumbukumbu chini ya mfumo wa uokoaji kunahitaji uunde mwenyewe saraka inayolingana na utekeleze hatua zingine za ziada, kwa sababu huenda huna huduma ya mfumo inayoendeshwa. Hapa kuna hatua unazoweza kujaribu:

Kwanza chroot, basi

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Anzisha upya kwenye mfumo wako wa Ubuntu: Baada ya kufanya mabadiliko hapo juu, unahitaji kuwasha upya mashine yako kawaida na kwenye mfumo wako wa Ubuntu badala ya mfumo wa uokoaji.

Kwa njia hii, systemd-journald itaanza na usanidi mpya na kuanza kuhifadhi kumbukumbu kwa kuendelea kwenye diski ngumu.

Kumbuka kwamba shughuli zilizo hapo juu zinafanywa kwenye mfumo wa uokoaji, kwa hivyo mabadiliko hayo yataanza kutumika mara tu mfumo utakapowashwa upya na haupo tena katika hali ya uokoaji.

Hii inamaanisha kuwa hutaona mabadiliko yoyote kwa kumbukumbu zilizopo mara moja yakiendelea, lakini kumbukumbu zote zitakazotolewa baada ya hili zitaendelea.

Kwa njia hii unaweza kutazama magogo ya huduma ya ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Vidokezo Juu Ya Magonjwa Magumu Na Magumu

### Tatua Tatizo La Ajabu: Seva Haiwezi ssh

Nilitumia hatua ya github kutengeneza mkusanyo otomatiki na hati ya kupeleka hapo awali, lakini nikagundua kuwa huduma ya upelekaji haiwezi ssh.

Kuingia kwenye mfumo wa uokoaji na kuangalia magogo ni suala la ruhusa:

`Missing privilege separation directory: /run/sshd`

Unaweza kuunda saraka hii kwa amri ifuatayo

```
chown root:root /
systemd-tmpfiles --create
```

Baada ya uchunguzi wa mara kwa mara, ni `1001` github action Mtumiaji aliyepakia tar `uid`

tar `--no-same-owner` `uid` `1001`

Kama matokeo, rsync itabadilisha kikundi cha watumiaji wa saraka ya mizizi, na kisha hautaweza kuingia kwa ssh baada ya kuanza tena.

Rekebisha hati ya mtengano kama ifuatavyo:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


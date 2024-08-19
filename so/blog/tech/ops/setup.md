# Bilow Server-Ka (Isticmaal Qaybta BTRFS, Sawir-Qaade La Qorsheeyay)

## contabo Gadashada Server

contabo waa bixiye VPS raqiis ah gudaha Jarmalka oo leh taariikh dheer (in ka badan 20 sano) iyo isticmaaleyaal badan (in ka badan 200,000), markaa looma baahna in laga walwalo inaad cararto.

VPS iibsanayso [contabo.com](//contabo.com) xasuuso inaad doorato qiimaha Euro, kaas oo ka jaban.

![](https://i-01.eu.org/1718285782.avif)

Waxaa jira kharash rakibid oo hal mar ah ee contabo.
Si kastaba ha noqotee, waxaa jira dhowr maalmood bishiiba halkaas oo kharashka rakibaadda uu yahay bilaash.

Marka lagu daro khidmadda aagga bilaashka ah ee Yurub, gobollada kale waxay leeyihiin heerar kala duwan oo kor u kaca qiimaha.

Waxaan doortay server-ka Yurub si kastaba ha noqotee, ka dib markii la isticmaalo Cloudflare, ma jiro farqi badan oo u dhexeeya server-yada.

Qaabeynta kama dambaysta ah waa sida soo socota, 16GB xusuusta, 6CPU, 200 GB NVMe, 9.50 euro bishii, oo u dhiganta 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Qiimahani waa ku dhawaad toban meelood meel qiimaha Alibaba Cloud iyo Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Waxaan [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) si aan u socodsiiyo waxqabadka iyo cabbirrada:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU moodelka `AMD EPYC 9224 24-Core Processor` , buundada waxqabadka hal-core 1285
, dhibco badan oo udub dhexaad ah 4277 Eeg natiijooyin badan [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Waxaan soo iibsaday saddex server hal mar oo ay kiciyeen isla mar ahaantaana Tani waxay hubinaysaa in server-yadu ay ku jiraan qol isku mid ah kombuyuutar, taas oo sahlaysa in la dhiso helitaanka sare ee mustaqbalka.

Adeegayaasheeda ayaa marmar xidha, iyaga oo hubinaya gelitaanka mareegaha iyada oo loo marayo helitaan sare.

Isticmaalayaasha cusub waxay u baahan yihiin inay soo gudbiyaan kaadhadhkooda aqoonsiga si loogu xaqiijiyo magaca dhabta ah marka ay wax iibsanayaan.

## Habee Galitaanka Bilaa Sirta Ah

Dhowr daqiiqo ka dib, server-yada dhamaantood waa la damiyay.

Waxa ugu horreeya IP in la tafatiro mashiinka maxalliga ah ee `~/.ssh/config` si loo dejiyo alias, ka dibna isticmaal `ssh-copy-id root@c2` si loo habeeyo gelitaanka furaha-la'aanta.

![](https://i-01.eu.org/1718287198.avif)

Waxaad wax ka beddeli kartaa [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) si aad dhakhso ugu dhammaystirto qaabaynta bilowga.

Ka dib marka la dhammeeyo qaabeynta bilaa sirta ah, waxaad isticmaali kartaa [pdsh](https://github.com/chaos/pdsh)

Midda koowaad waa in gacanta lagu furo ipv6 oo la tijaabiyo

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Ka dib u cusboonaysii nidaamka ubuntu 24 hal gujin oo ku rakib software inta badan la isticmaalo.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 macnaheedu waa u beddelashada luqadda Shiinaha iyo wakhtiga aagga Beijing.

Software [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ka lagu rakibay sida caadiga ah waxaa loo habeeyey iyadoo loo eegayo [direnv](https://direnv.net/) isticmaalka shakhsi ahaaneed, sida [mise](https://github.com/jdx/mise)

Talaabadani waxay qaadanaysaa wakhti dheer ka dib markaad sugto nus saac, cusboonaysiinta iyo rakibida software-ka sida caadiga ah loo isticmaalo ayaa noqon doona mid guul leh. Tan waxaad ku xaqiijin kartaa amarkan:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Wuxuu Dedejiyaa ssh

Shabakadda ka socota Yurub ilaa `ssh` ma aha [mosh](//mosh.org) deggan.

Ku samee `c0` qoraal tusaha deegaanka `~/.bin` (badanaa lagu daray doorsoomaha deegaanka `PATH` ) sida soo socota:

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

Abuurista ka dib, bixi ogolaanshaha la fulin karo iyo `c1` iyo `c2` jilicsan.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Mustaqbalka, waxaad si toos ah u geli kartaa `c0` iyo `c1` si aad u isticmaasho `mosh` xidhiidh xawaarihiisa sare leh oo aad gasho [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Ka Beddel Qaabka Qaybta ext4 Una Beddel btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs)

Marka hore geli nidaamka samatabbixinta

![](https://i-01.eu.org/1718300448.avif)

Dooro Badbaadinta Debian

![](https://i-01.eu.org/1718300753.avif)

Sug inta serverku dib u bilaabo

Waxaa jiri ssh isbedelo faraha, isticmaal `ssh-keygen -R ip` si aad u nadiifiso

Kadibna orod qoraalka soo socda si aad u bedesho qaybta

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Qoraalku wuxuu si toos ah dib u bilaabi doonaa nidaamka ka dib marka beddelidda lagu guuleysto.

### Arag btrfs Saamiga Isku Xidhka

Waxay si toos ah u cadaadin doontaa amarka si loo hubiyo saamiga isku-buufintu waa sida soo socota:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Buufin Gacanta

Haddii aad tahay qof dhammaystiran, waxa kale oo aad gacanta ku samayn kartaa isku-buufinta diskka.

```bash
btrfs filesystem defragment -r -czstd /
```

Sida ku cad shaxanka hoose, waxaad arki kartaa in ka dib markii gacanta lagu cadaadiyo nidaamka cusub, ku dhawaad 100MB oo dheeraad ah ayaa la cujiyay.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Samee Sawir Sawir Btrfs Ah Oo Leh snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) waa lamaanaha ugu fiican ee Btrfs kaabta.

Qoraalka bilawga ah ayaa abuuri doona `~/ubuntu` directory, kaliya socodsii amarka soo socda:

```
~/ubuntu/snapper/init.sh
```

Kugu arag qoraalka qoraalka [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Isticmaal `snapper list-configs` si aad u aragto cod-hoosaadka kuwaas oo sawir-qaadista loo dejiyay.

![](https://i-01.eu.org/1718302689.avif)

Isticmaal `snapper -c mnt list` si aad u aragto sawir mug-hoosaad ah

`/etc/snapper/configs/mnt` waxay eegi kartaa goobaha kaydinta gaarka ah ee mugga hoose

Tixraacyo badan

[Si fudud ugu ciyaar sawirka sawirka ee Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Sawir Qaade contabo Server

contabo bixisaa shaqada sawir-qaadista, laakiin ma [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) sawir-qaadista la qorsheeyay.

![](https://i-01.eu.org/1718304206.avif)

Si loo soo celiyo sawir-gacmeedka server-ka, marka hore guji Crontol ee liiska maamulka

![](https://i-01.eu.org/1718304275.avif)

Kadib, dhagsii Snapshots si aad u soo celiso.

![](https://i-01.eu.org/1718304063.avif)

Si kastaba ha ahaatee, baaxadda sawirka sawirkani aad ayuu u weyn yahay marka la soo celiyo, xogta cusub ee lagu daray gabi ahaanba waa la waayayaa, markaa fadlan si taxadir leh u isticmaal.

Badanaa way ku habboon tahay in la isticmaalo btrfs sawir-qaadista.

## Faahfaahinta Nidaamka Samatabbixinta

Geli 22 samatabbixinta Kadib [tcping](https://github.com/paradiseduo/tcping) la heli karo, ma awoodi doontid inaad ku geliso erayga sirta ah muddo 2-3 daqiiqo ah oo kaliya sug.

```
tcping ip 22 -c 9999
```

Gelitaanka dekedda waa lala socon karaa

### Sida Loo Galo Dariiqa Adag Ka Dib Marka La Galo Samatabbixinta &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Waxaad arki kartaa sawirka sawirka, tusaale ahaan

```
snapper -c etc list
```

Eeg isbeddellada faylka sawir-qaadista

```
snapper -c etc status 5..6
```

Eeg qoraal gaar ah oo kala duwan

```
snapper -c etc diff 3..5
```

Soo celi sawirka sawirka: Tusaale ahaan, ka noqo dhammaan isbeddellada ka dib sawirka 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Daar Ku Adkaysiga Log

Awood u siinta joogteynta log marka loo eego nidaamka samatabbixinta waxay kaaga baahan tahay inaad gacanta ku sameyso hagaha u dhigma oo aad sameyso talaabooyin dheeri ah, sababtoo ah waxaa laga yaabaa inaadan haysan adeeg nidaamsan. Halkan waxaa ah tillaabooyin aad isku dayi karto:

Marka hore, ka dibna

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ku soo celi nidaamkaaga Ubuntu: Ka dib markaad sameyso isbeddelada kor ku xusan, waxaad u baahan tahay inaad dib u bilowdo mashiinkaaga si caadi ah iyo nidaamka Ubuntu beddelka nidaamka samatabbixinta.

Sidan, systemd-journald waxa uu ku bilaabi doonaa qaabaynta cusub oo waxa uu bilaabi doonaa in uu si joogto ah ugu kaydiyo diiwaanka Hard Disk-ga.

Maskaxda ku hay in hawlgallada kor ku xusan lagu sameeyo nidaamka samatabbixinta, markaa isbeddelladaasi ma dhaqan geli doonaan ilaa nidaamka dib loo bilaabo oo aanu ku jirin habka samatabbixinta.

Tani waxay ka dhigan tahay inaadan isla markiiba arki doonin wax isbedel ah oo ku yimaada diiwaannada jira ee noqda kuwa joogtada ah, laakiin dhammaan diiwaannada la sameeyay intaa ka dib way sii jiri doonaan.

Sidan waxaad ku arki kartaa diiwaanka adeegga ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Qoraallada Ku Saabsan Cudurrada Adag Iyo Kuwa Adag

### Xalliyaan Dhibaatada Yaabka Leh: Serverku Ma ssh

Waxaan isticmaalay ficilka github si aan u sameeyo qoraal toos ah iyo qoraal geynta ka hor, laakiin waxaan ogaaday in adeega geyntu aanu noqon karin ssh.

Gelida nidaamka samatabbixinta iyo fiirinta diiwaanka waa arin ogolaansho:

`Missing privilege separation directory: /run/sshd`

Waxaad ku abuuri kartaa tusahan amarka soo socda

```
chown root:root /
systemd-tmpfiles --create
```

Baaritaanno isdaba joog ah kadib, waxaa sabab u github action Isticmaalaha `uid` ee tar waa `1001`

tar waa in ay noqotaa haddii aysan jirin halbeeg `--no-same-owner` , waxaa loo dhimi doonaa `uid` `1001` isticmaale

Natiijo ahaan, rsync waxay bedeli doontaa kooxda isticmaalaha ee tusaha xididka, ka dibna ma awoodi doontid inaad gasho ssh ka dib markaad dib u bilowdo.

Wax ka beddel qoraalka depression sida soo socota:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
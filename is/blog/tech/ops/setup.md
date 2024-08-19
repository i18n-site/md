# Frumstilla Þjóninn (Notaðu BTRFS Skipting, Snapper Áætlað Skyndimynd)

## contabo Kaupþjónn

contabo er ódýr VPS veitandi í Þýskalandi með langa sögu (meira en 20 ár) og marga notendur (meira en 200.000), svo það er engin þörf á að hafa áhyggjur af því að flýja.

VPS þú kaupir [contabo.com](//contabo.com) mundu að velja evruverð, sem er ódýrara.

![](https://i-01.eu.org/1718285782.avif)

Það er eitt skipti uppsetningargjald fyrir contabo.
Hins vegar eru nokkrir dagar í hverjum mánuði þar sem uppsetningargjaldið er ókeypis. Skráðu þig bara og fylgdu kynningarpóstinum.

Til viðbótar við ókeypis svæðisgjaldið í Evrópu eru önnur svæði með mismunandi verðhækkanir.

Ég valdi evrópskan netþjón Engu að síður, eftir að hafa notað cloudflare, þá er ekki mikill munur á netþjónunum.

Endanleg uppsetning er sem hér segir, 16GB minni, 6CPU, 200 GB NVMe, 9,50 evrur á mánuði, jafnvirði 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Þetta verð er næstum einn tíundi af verði Alibaba Cloud og Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Ég [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) til að keyra frammistöðu og breytur:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Sýnir líkan `AMD EPYC 9224 24-Core Processor` , einkjarna árangursstig 1285 CPU
, fjölkjarna skor 4277 Sjá fleiri niðurstöður [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ég keypti þrjá netþjóna í einu og virkjaði þá á sama tíma. Þetta tryggir að netþjónarnir séu í sama tölvuherbergi, sem gerir það auðveldara að byggja upp mikið framboð í framtíðinni.

Netþjónar þess leggja stundum upp, sem tryggir aðgengi vefsíðunnar með miklu aðgengi.

Nýir notendur þurfa að leggja fram auðkennisskírteini sín til sannvottunar með raunverulegu nafni þegar þeir kaupa.

## Stilltu Innskráningu Án Lykilorðs

Eftir nokkrar mínútur voru netþjónarnir allir virkjaðir.

Það fyrsta IP að breyta `~/.ssh/config` staðbundnu vélarinnar til að setja samnefni og nota síðan `ssh-copy-id root@c2` til að stilla innskráningu án lykilorðs.

![](https://i-01.eu.org/1718287198.avif)

Þú getur breytt þessu [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) til að klára upphafsstillinguna hraðar.

Eftir að lykilorðslausri stillingu er lokið geturðu notað [pdsh](https://github.com/chaos/pdsh) í lotum, sem er þægilegt.

Hið fyrsta er að virkja handvirkt ipv6 og prófa

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Uppfærðu síðan kerfið í ubuntu 24 með einum smelli og settu upp algengan hugbúnað.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 þýðir að skipta yfir í kínversku og tímabelti yfir í Peking.

Hugbúnaðurinn sem er sjálfgefið er stilltur í samræmi við persónulegar notkunarvenjur mínar, svo sem [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , osfrv. Ef nauðsyn krefur geturðu afritað [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) vöruhúsið og breytt því eftir þörfum.

Þetta skref tekur langan tíma Eftir að hafa beðið í hálftíma mun uppfærsla og uppsetning á algengum hugbúnaði ganga vel. Þú getur staðfest þetta með eftirfarandi skipun:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Flýtir Fyrir ssh

Netið frá Evrópu til Kína er ekki stöðugt. `ssh` er með því að nota [mosh](//mosh.org)

Búðu til `c0` forskriftir í staðbundnu möppunni `~/.bin` (aðallega bætt við umhverfisbreytu `PATH` ) sem hér segir:

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

Eftir stofnun, veittu keyrsluheimildir og soft-link `c1` og `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Í framtíðinni geturðu beint inn `c0` og `c1` til að nota `mosh` háhraða beintengingu og sláðu inn [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Umbreyttu Skiptingarsniði Úr ext4 Í btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Getur tekið skyndimyndir af diskum til að auðvelda öryggisafrit.

Farðu fyrst inn í björgunarkerfið

![](https://i-01.eu.org/1718300448.avif)

Veldu Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Bíddu eftir að þjónninn endurræsist

ssh Það verða fingrafarabreytingar, notaðu `ssh-keygen -R ip` til að hreinsa það upp

Keyrðu síðan eftirfarandi skriftu til að umbreyta skiptingunni

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Handritið mun sjálfkrafa endurræsa kerfið eftir að umbreytingin hefur heppnast.

### Skoða btrfs Þjöppunarhlutfall

Það mun sjálfkrafa þjappa sjálfkrafa Skipunin til að athuga þjöppunarhlutfallið er sem hér segir:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Handvirk Þjöppun

Ef þú ert fullkomnunarsinni geturðu líka framkvæmt fulla diskþjöppun handvirkt: Skipunin er sem hér segir:

```bash
btrfs filesystem defragment -r -czstd /
```

Eins og sést á myndinni hér að neðan geturðu séð að eftir handvirka þjöppun í nýja kerfinu var næstum 100MB meira þjappað.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Búðu Til Afrit Af Btrfs Skyndimynd Með snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) er besti félaginn fyrir Btrfs öryggisafrit.

Frumstillingarforskriftin mun búa til `~/ubuntu` möppuna, keyrðu bara eftirfarandi skipun:

```
~/ubuntu/snapper/init.sh
```

Sjáumst í handritsinnihaldinu [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Notaðu `snapper list-configs` til að skoða undirbindin sem skyndimyndir eru stilltar fyrir.

![](https://i-01.eu.org/1718302689.avif)

Notaðu `snapper -c mnt list` til að skoða skyndimynd af undirbindi

`/etc/snapper/configs/mnt` getur skoðað sérstakar öryggisafritunarstillingar þessa undirbindi

Fleiri tilvísanir:

[Spilaðu auðveldlega með skyndimyndaaðgerðinni Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Skyndimynd Af contabo Netþjóni

contabo Býður upp á skyndimyndaaðgerð á þjóni, en styður ekki áætlaðar skyndimyndir. Ég skrifaði [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) til að taka daglegar myndir.

![](https://i-01.eu.org/1718304206.avif)

Til að endurheimta skyndimynd netþjóns, smelltu fyrst á Crontol í stjórnunarvalmyndinni

![](https://i-01.eu.org/1718304275.avif)

Smelltu síðan á Skyndimyndir til að endurheimta.

![](https://i-01.eu.org/1718304063.avif)

Hins vegar er nákvæmni þessarar skyndimyndar of stór Þegar nýlega bætt við gögnum tapast að fullu, svo vinsamlegast notaðu þau með varúð.

Það er yfirleitt þægilegra að nota btrfs skyndimyndir.

## Upplýsingar Um Björgunarkerfi

Sláðu inn í björgunarkerfið 22 Eftir að gáttin er [tcping](https://github.com/paradiseduo/tcping) aðgengileg muntu ekki fá aðgang að því með uppsettu lykilorði í 2-3 mínútur.

```
tcping ip 22 -c 9999
```

Hægt er að fylgjast með aðgengi að höfnum.

### Hvernig Á Að Fá Aðgang Að Harða Disknum Eftir Að Hafa Farið & Björgun

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Þú getur til dæmis skoðað skyndimyndina

```
snapper -c etc list
```

Skoðaðu breytingar á skyndimyndskrá

```
snapper -c etc status 5..6
```

Skoða sérstakan mismunandi texta

```
snapper -c etc diff 3..5
```

Endurheimta skyndimynd: Til dæmis, afturkalla allar breytingar eftir skyndimynd 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Virkja Viðvarandi Skráningu

Til að virkja viðvarandi skráningu undir björgunarkerfi þarf að búa til samsvarandi möppu handvirkt og framkvæma nokkur viðbótarskref, vegna þess að þú gætir ekki verið með kerfisþjónustu í gangi. Hér eru skref sem þú getur prófað:

Fyrst chroot, þá

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Endurræstu í Ubuntu kerfinu þínu: Eftir að hafa gert ofangreindar breytingar þarftu að endurræsa vélina þína venjulega og í Ubuntu kerfið þitt í stað björgunarkerfisins.

Á þennan hátt mun systemd-journald byrja með nýju stillingunum og byrja að geyma logs stöðugt á harða disknum.

Hafðu í huga að ofangreindar aðgerðir eru framkvæmdar á björgunarkerfi, þannig að þessar breytingar munu ekki taka gildi fyrr en kerfið er endurræst og ekki lengur í björgunarham.

Þetta þýðir að þú munt ekki strax sjá neinar breytingar á núverandi annálum sem verða viðvarandi, en allar skrár sem myndast eftir það verða viðvarandi.

Þannig geturðu skoðað annála ssh þjónustunnar

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Skýringar Um Erfiða Og Flókna Sjúkdóma

### Leysaðu Undarlega Vandamálið: Þjónninn Getur Ekki ssh

Ég notaði github aðgerð til að búa til sjálfvirka samantekt og dreifingarforskrift áður, en komst að því að dreifingarþjónustan gæti ekki verið ssh.

Að fara inn í björgunarkerfið og skoða annálana er leyfisvandamál:

`Missing privilege separation directory: /run/sshd`

Þú getur búið til þessa möppu með eftirfarandi skipun

```
chown root:root /
systemd-tmpfiles --create
```

Eftir endurteknar rannsóknir er það vegna þess github action notandi `uid` af tar er `1001`

tar Upptaka verður að vera ef það er engin færibreyta `--no-same-owner` , hún verður þjöppuð niður í `uid` fyrir `1001` notendur

Fyrir vikið mun rsync breyta notendahópi rótarskrárinnar og þá muntu ekki geta skráð þig inn á ssh eftir endurræsingu.

Breyttu þjöppunarforskriftinni sem hér segir:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
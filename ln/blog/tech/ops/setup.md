# Initialiser Serveur (Salela Partition BTRFS, Snapper Programmé Snapshot)

## Serveur Ya Kosomba contabo

contabo ezali fournisseur ya VPS ya talo moke na Allemagne na histoire ya kala (koleka 20 ans) mpe na ba usagers ebele (koleka 200.000), yango wana ezali na ntina te ya komitungisa mpo na kokima.

VPS ozali kosomba [contabo.com](//contabo.com) kobosana te kopona prix ya Euro, oyo ezali moins cher.

![](https://i-01.eu.org/1718285782.avif)

Ezali na mbongo ya installation ya mbala moko mpo na contabo.
Kasi, ezali na mwa mikolo na sanza epai mbongo ya installation ezali ofele Kokomisa nkombo mpe kotya likebi na ba emails ya promotion.

Longola mbongo ya esika ya ofele na Mpoto, bitúká mosusu ezali na nivo ekeseni ya bomati ya ntalo.

Naponaki serveur ya Europe Anyway, après kosalela cloudflare, différence ezali mingi te entre ba serveurs.

Configuration ya suka ezali boye, mémoire ya 16GB, 6CPU, 200 GB NVMe, 9,50 euros na sanza, ekokani na 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ntalo oyo ezali pene na ndambo moko ya zomi ya ntalo ya Alibaba Cloud mpe Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Nasalelaki [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Ezali kolakisa Modèle `AMD EPYC 9224 24-Core Processor` , score ya performance ya moboko moko 1285 CPU
, score ya ba noyaux ebele 4277 Tala ba résultats mosusu [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Nasombaki ba serveurs misato na mbala moko mpe na activer yango na mbala moko Yango esalaka ete ba serveurs ezala na salle ya ordinateur moko, kosala ete ezala pete mpo na kotonga disponibilité ya likolo na mikolo ekoya.

Ba serveurs na yango ekangamaka tango mosusu, kosala que site internet ezala accessibilité na nzela ya disponibilité ya likolo.

Ba usagers ya sika basengeli kotinda ba cartes d’identité na bango mpo na authentification ya kombo ya solo tango bazali kosomba.

## Configurer Login Sans Mot De Passe

Nsima ya mwa miniti, ba serveurs nyonso ebandaki kosala.

Eloko ya liboso IP ya ko modifier `~/.ssh/config` ya machine locale pona ko setting alias, et puis kosalela `ssh-copy-id root@c2` pona ko configurer login sans mot de passe.

![](https://i-01.eu.org/1718287198.avif)

Okoki kobongola [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) oyo mpo na kosilisa configuration ya initialisation noki.

Sima ya configuration sans mot de passe esili, okoki kosalela [pdsh](https://github.com/chaos/pdsh) Ekoki ko fonctionner na ba lots, oyo ezali convenable.

Ya liboso ezali ko activer manuellement ipv6 na test

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Na sima, améliorer système na ubuntu 24 na clic moko pe installer logiciel oyo esalemaka mingi.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 elakisi kobongola monoko na Chinois mpe fuseau horaire na Pékin.

Logiciel oyo e installé par défaut e configurer selon ba habitudes na ngai ya usage personnel, neti [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. Soki esengeli, okoki ko copier [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) entrepôt pe ko modifier yango soki esengeli.

Etape oyo ezwaka ntango molai Nsima ya kozela ndambo ya ngonga, kosala mise à niveau mpe installation ya logiciel oyo basalelaka mingi ekolonga. Okoki kondimisa yango na etinda oyo elandi:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Ezo Kende Mbangu ssh

Réseau oyo ewutaka na Europe ti na Chine eza stable te Eza recommandé kosalela [mosh](//mosh.org) ko accélérer `ssh` .

Bosala `c0` scripts na répertoire local `~/.bin` (sungi mingi ebakisami na variable ya environnement `PATH` ) ndenge elandi:

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

Sima ya création, pesa ba permissions exécutables na soft-link `c1` na `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Na mikolo ekoya, okoki kokotisa directement `c0` na `c1` pona kosalela `mosh` connexion directe ya vitesse makasi pe kokotisa [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Bobongola Format Ya Partition Depuis ext4 Na btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Ekoki kozua ba snapshots ya disque pona sauvegarde ya pete.

Ya liboso kota na système ya rescue

![](https://i-01.eu.org/1718300448.avif)

Pona Debian Kobikisa

![](https://i-01.eu.org/1718300753.avif)

Zela serveur ebanda lisusu

ssh Ekozala na ba changements ya empreintes ya misapi, salela `ssh-keygen -R ip` pona ko nettoyer yango

Na sima sala script oyo elandi pona ko convertir partition

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script ekobanda lisusu système automatiquement sima ya conversion elongi.

### Tala Ratio Ya Compression Ya btrfs

Eko compresser automatiquement par défaut Commande ya ko vérifier rapport ya compression ezali boye:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compression Manuel Ya Kosala

Soki ozali perfectionniste, okoki pe kosala compression ya disque mobimba manuellement Commande ezali boye

```bash
btrfs filesystem defragment -r -czstd /
```

Ndenge emonisami na elilingi oyo ezali awa na nse, okoki komona ete nsima ya compression manuel na système ya sika, pene na 100MB mosusu e compressé.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Bosala Sauvegarde Ya Snapshot Ya Btrfs Na snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ezali partenaire ya malamu pona Btrfs backup.

Script ya initialisation ekosala répertoire `~/ubuntu` , kosala kaka commande oyo elandi:

```
~/ubuntu/snapper/init.sh
```

Tokutana na contenus ya script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Salelá `snapper list-configs` mpo na kotala ba sous-volumes oyo ba instantané etiamaki mpo na yango.

![](https://i-01.eu.org/1718302689.avif)

Salelá `snapper -c mnt list` mpo na kotala fɔtɔ́ ya moke ya volume

`/etc/snapper/configs/mnt` ekoki kotala ba paramètres spécifiques ya sauvegarde ya sous-volume oyo

Ba références mosusu:

[Sakana na pete na fonction ya snapshot ya Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Serveur Ya Mbala Moko

contabo Epesaka fonction ya snapshot ya serveur, mais e supportaka ba instantanés programmées te Nakoma [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pona kozua ba snapshots ya mokolo na mokolo.

![](https://i-01.eu.org/1718304206.avif)

Mpo na kozongisa elilingi ya mosaleli, finá liboso Crontol na menu ya boyangeli

![](https://i-01.eu.org/1718304275.avif)

Na nsima, finá na Snapshots mpo na kozongisa.

![](https://i-01.eu.org/1718304063.avif)

Kasi, granularité ya instantané oyo ezali monene mingi Soki ezongisami, ba données oyo ebakisami sika ekobunga mobimba, yango wana tosengi osalela yango na bokebi.

Mbala mingi ezalaka malamu mingi kosalela ba snapshots ya btrfs.

## Makambo Ya Système Ya Kobikisa

Kota na système ya 22 Après port ezala [tcping](https://github.com/paradiseduo/tcping) accessible, okozala na makoki ya ko accéder na yango te na mot de passe oyo etiamaki pendant 2-3 minutes Zela kaka mua moke.

```
tcping ip 22 -c 9999
```

Accessibilité ya port ekoki kozala surveillé.

### Ndenge Nini Okoki Ko Accéder Na Disque Dur Après Kokota Na Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Okoki kotala elilingi ya mbala moko, na ndakisa

```
snapper -c etc list
```

Tala mbongwana ya fisyé ya snapshot

```
snapper -c etc status 5..6
```

Tala makomi ya diff ya sikisiki

```
snapper -c etc diff 3..5
```

Restore snapshot: Ndakisa, zongisa mbongwana nionso sima ya snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Activer Persistance Ya Journal

Kofungola bowumeli ya journal na se ya système ya kobikisa esengi yo osala manuellement répertoire oyo ekokani mpe osala mwa ba étapes ya kobakisa, mpo okoki kozala na service systemd oyo ezali kosala te. Talá matambe oyo okoki komeka:

Ya liboso chroot, bongo

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot na système na yo ya Ubuntu: Sima ya kosala ba changements oyo tolobeli likolo, esengeli o rebooter machine na yo normalement pe na système na yo ya Ubuntu au lieu ya système ya rescue.

Na ndenge wana, systemd-journald ekobanda na configuration ya sika mpe ekobanda kobomba ba journals persistentement na disque dur.

Kobosana te ete misala oyo tolobeli awa na likoló esalemaka na système ya kobikisa, yango wana mbongwana wana ekosala kaka soki système ebandi lisusu mpe ezali lisusu na mode ya kobikisa te.

Yango elingi koloba ete okomona mbala moko te mbongwana moko na ba journal oyo ezali ekomi ya kowumela, kasi ba journal nionso oyo esalemi sima ya oyo ekozala ya kowumela.

Na ndenge wana okoki kotala ba journal ya service ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Maloba Na Ntina Na Bokono Ya Mpasi Mpe Ya Mindondo

### Résoudre Problème Bizarre: Serveur Ekoki ssh Te

Nasalelaki action github mpo na kosala script ya compilation mpe déploiement automatique liboso, kasi namonaki ete service ya déploiement ekokaki kozala ssh te.

Kokota na système ya rescue mpe kotala ba logs ezali likambo ya ndingisa:

`Missing privilege separation directory: /run/sshd`

Okoki kosala répertoire oyo na commande oyo elandi

```
chown root:root /
systemd-tmpfiles --create
```

`uid` ya tar enquêtes mbala na mbala, ezali `1001` github action

tar Déballer il faut ezala soki paramètre `--no-same-owner` ezali te, ekozala décomprimé na `uid` pona `1001` usagers

Yango wana, rsync ekobongola etuluku ya basaleli ya répertoire ya misisa, mpe na nsima okozala na makoki te ya kokɔta na ssh nsima ya kobanda lisusu.

Bobongola script ya décompression ndenge elandi:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
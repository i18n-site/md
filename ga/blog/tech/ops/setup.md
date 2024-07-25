# Tosaigh an Freastalaí (Úsáid Deighilt BTRFS, Seat Sceidealta Snapper)

## Freastalaí Ceannaigh contabo

Is soláthraí VPS saor é contabo sa Ghearmáin le stair fhada (níos mó ná 20 bliain) agus go leor úsáideoirí (níos mó ná 200,000), mar sin ní gá a bheith buartha faoi reáchtáil ar shiúl.

VPS a cheannach [contabo.com](//contabo.com) cuimhnigh a roghnú Euro praghsáil, atá níos saoire.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Tá táille suiteála aonuaire i gceist le haghaidh contabo.
Mar sin féin, tá cúpla lá gach mí nuair a bhíonn an táille suiteála saor in aisce ach clárú agus aird a thabhairt ar na ríomhphoist bolscaireachta.

Chomh maith leis an táille limistéir in aisce san Eoraip, tá leibhéil éagsúla méaduithe praghais ag réigiúin eile.

Roghnaigh mé freastalaí Eorpach Ar aon nós, tar éis úsáid a bhaint as cloudflare, níl mórán difríochta idir na freastalaithe.

Is é seo a leanas an chumraíocht deiridh, cuimhne 16GB, 6CPU, 200 GB NVMe, 9.50 euro in aghaidh na míosa, comhionann le 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Tá an praghas seo beagnach aon deichiú de phraghas Alibaba Cloud agus Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Bhain mé úsáid as [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) chun an fheidhmíocht agus na paraiméadair a rith:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Taispeáin CPU Samhail `AMD EPYC 9224 24-Core Processor` scór feidhmíochta aon-lárnach 1285
, scór il-lárnach 4277 Féach ar níos mó torthaí [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Cheannaigh mé trí fhreastalaithe ag aon am amháin agus chuir mé i ngníomh iad ag an am céanna Cinntíonn sé seo go bhfuil na freastalaithe sa seomra ríomhaireachta céanna, rud a fhágann go mbeidh sé níos éasca ard-infhaighteacht a thógáil sa todhchaí.

Crochadh a fhreastalaithe suas ó am go chéile, ag cinntiú inrochtaineacht láithreáin ghréasáin trí infhaighteacht ard.

Ní mór d’úsáideoirí nua a gcártaí aitheantais a chur isteach le haghaidh fíordheimhnithe fíor-ainm agus iad ag ceannach.

## Cumraigh Logáil Isteach Gan Pasfhocal

Tar éis cúpla nóiméad, cuireadh na freastalaithe go léir i ngníomh.

Is é an chéad rud an meaisín áitiúil a chur in eagar `~/.ssh/config` Socraigh ailias do IP agus ansin úsáid a bhaint as `ssh-copy-id root@c2` chun logáil isteach gan pasfhocal a chumrú.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Is féidir leat an [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) seo a mhodhnú chun an chumraíocht tosaigh a chríochnú níos tapúla.

Tar éis an chumraíocht gan pasfhocal a bheith críochnaithe, is féidir leat é a úsáid [pdsh](https://github.com/chaos/pdsh)

Is é an chéad cheann ná ipv6 agus tástáil a chumasú de láimh

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Ansin uasghrádaigh an córas go ubuntu 24 le cliceáil amháin agus suiteáil bogearraí a úsáidtear go coitianta.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

Ciallaíonn CN=1 teanga a aistriú go Sínis agus crios ama go Beijing.

Tá na bogearraí suiteáilte de réir réamhshocraithe cumraithe de réir mo nósanna úsáide pearsanta, mar shampla [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. Más gá, is féidir leat an stóras [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) a chóipeáil agus é a mhodhnú de réir mar is gá.

Tógann an chéim seo ar feadh i bhfad Tar éis fanacht leath uair an chloig, beidh uasghrádú agus suiteáil bogearraí a úsáidtear go coitianta rathúil. Is féidir leat é a dhearbhú leis an ordú seo a leanas:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## Luasann mosh Suas ssh

`ssh` an líonra ón Eoraip go dtí an tSín cobhsaí [mosh](//mosh.org)

Cruthaigh `c0` script i gcomhadlann an mheaisín `PATH` `~/.bin`

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

Tar éis an chruthaithe, deonaigh ceadanna inrite agus nasc bog `c1` , `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Sa todhchaí, is féidir leat dul isteach go díreach `c0` , `c1` agus is féidir leat `mosh` nasc díreach ardluais a úsáid agus cuir isteach [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Tiontaigh an Fhormáid Deighilte Ó ext4 Go btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs)

Cuir isteach an córas tarrthála ar dtús

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Roghnaigh Tarrthála Debian

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Fan go n-atosóidh an freastalaí

Tarlóidh athruithe méarloirg nuair a ssh , bain úsáid as `ssh-keygen -R ip`

Ansin rith an script seo a leanas chun an deighilt a thiontú

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Atosóidh an script an córas go huathoibríoch tar éis don chomhshó rathúil.

### Féach Ar Chóimheas Comhbhrú btrfs

Déanfaidh sé comhbhrú go huathoibríoch de réir réamhshocraithe Is é an t-ordú chun an cóimheas comhbhrú a sheiceáil mar a leanas:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Comhbhrú Láimhe

Más foirfeach tú, is féidir leat comhbhrú diosca iomlán a dhéanamh de láimh freisin

```bash
btrfs filesystem defragment -r -czstd /
```

Mar a léirítear san fhigiúr thíos, is féidir leat a fheiceáil, tar éis comhbhrú láimhe sa chóras nua, go ndearnadh beagnach 100MB níos mó a chomhbhrú.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Cruthaigh Cúltaca Pictiúr Btrfs Le snapper

Is [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) an comhpháirtí is fearr le haghaidh cúltaca Btrfs .

Cruthóidh an script tosaighú an eolaire `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Féach leat san ábhar scripte [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Bain úsáid as `snapper list-configs` chun na fo-imleabhair a bhfuil na pictiúir socraithe dóibh a fheiceáil

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Bain úsáid as `snapper -c mnt list` chun léargas a fháil ar fho-imleabhar

`/etc/snapper/configs/mnt` Is féidir leat na sainshocruithe cúltaca den fho-imleabhar seo a fheiceáil

Tuilleadh tagairtí:

[Seinn go héasca leis an bhfeidhm seat de Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Pictiúr Freastalaí contabo

contabo Soláthraíonn sé feidhm ghrianghraf freastalaí, ach ní thacaíonn sé le grianghraif sceidealta Scríobh mé [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) chun pictiúir laethúla a ghlacadh.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Chun pictiúr freastalaí a chur ar ais, cliceáil ar Crontol ar dtús sa roghchlár bainistíochta

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Ansin, cliceáil Snapshots a chur ar ais.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Mar sin féin, tá gráinneacht an ailt seo ró-mhór Nuair a bheidh sé athchóirithe, caillfear na sonraí nua a cuireadh leis go hiomlán, mar sin bain úsáid as go cúramach le do thoil.

De ghnáth bíonn sé níos áisiúla pictiúir btrfs a úsáid.

## Sonraí an Chórais Tarrthála

Cuir isteach [tcping](https://github.com/paradiseduo/tcping) 2-3 tarrthála 22

```
tcping ip 22 -c 9999
```

Is féidir monatóireacht a dhéanamh ar inrochtaineacht calafoirt.

### Conas Rochtain a Fháil Ar an Tiomántán Crua Tar Éis Dul Isteach Tarrthála &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Is féidir leat an pictiúr a fheiceáil, mar shampla

```
snapper -c etc list
```

Féach ar athruithe ar chomhaid seat

```
snapper -c etc status 5..6
```

Féach ar théacs difrúil ar leith

```
snapper -c etc diff 3..5
```

Athchóirigh an pictiúr: Mar shampla, cealaigh gach athrú tar éis seat 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Cumasaigh Marthanacht Loga

Chun buanseasmhacht logála a chumasú faoi chóras tarrthála, caithfidh tú an t-eolaire comhfhreagrach a chruthú de láimh agus roinnt céimeanna breise a dhéanamh, toisc go bhféadfadh sé nach bhfuil seirbhís sistemait ag rith agat. Seo na céimeanna ar féidir leat triail a bhaint astu:

An chéad chroot, ansin

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Atosaigh isteach i do chóras Ubuntu: Tar éis duit na hathruithe thuas a dhéanamh, ní mór duit do mheaisín a atosú de ghnáth agus isteach i do chóras Ubuntu in ionad an chórais tarrthála.

Ar an mbealach seo, tosóidh systemd-journald leis an gcumraíocht nua agus tosóidh sé ag stóráil logaí go leanúnach ar an diosca crua.

Coinnigh i gcuimhne go ndéantar na hoibríochtaí thuas ar chóras tarrthála, mar sin ní thiocfaidh na hathruithe sin i bhfeidhm ach amháin nuair a bheidh an córas atosaithe agus nach mbeidh sé i mód tarrthála a thuilleadh.

Ciallaíonn sé seo nach bhfeicfidh tú láithreach go n-éireoidh aon athruithe ar logaí atá ann cheana féin, ach go leanfar le gach loga a ghintear ina dhiaidh sin.

Ar an mbealach seo is féidir leat logaí na seirbhíse ssh a fheiceáil

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Nótaí Ar Ghalair Deacra Agus Casta

### Réitigh an Fhadhb Aisteach: Ní Féidir Leis an Bhfreastalaí ssh

D'úsáid mé gníomh github chun script tiomsaithe agus imlonnaithe uathoibríoch a dhéanamh roimhe seo, ach fuair mé amach nach bhféadfadh an tseirbhís imscartha ssh.

Is ceist cheada é dul isteach sa chóras tarrthála agus féachaint ar na logaí:

`Missing privilege separation directory: /run/sshd`

Is féidir leat an t-eolaire seo a chruthú leis an ordú seo a leanas

```
chown root:root /
systemd-tmpfiles --create
```

Tar éis imscrúduithe arís agus arís eile, is é an t github action úsáideoir a d'uaslódáil tar ná `1001` `uid`

tar Ní mór díphacáil a dhéanamh gan pharaiméadair `--no-same-owner` déanfar é a dhí-chomhbhrú ina `uid` le haghaidh `1001` úsáideoir

Mar thoradh air sin, athróidh rsync grúpa úsáideoirí an fhréamh-eolaire, agus ansin ní bheidh tú in ann logáil isteach go ssh tar éis duit a atosú.

Athraigh an script dí-chomhbhrú mar seo a leanas:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


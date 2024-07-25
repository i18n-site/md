# Inicializujte Server (Použijte Oddíl BTRFS, Snapper Naplánovaný Snímek)

## Nákupní Server contabo

contabo je levný poskytovatel VPS v Německu s dlouhou historií (více než 20 let) a mnoha uživateli (více než 200 000), takže se nemusíte bát, že byste utekli.

VPS nákupu [contabo.com](//contabo.com) nezapomeňte zvolit cenu v eurech, která je levnější.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Za contabo se platí jednorázový instalační poplatek.
Existuje však několik dní v měsíci, kdy je instalační poplatek zdarma. Stačí se zaregistrovat a věnovat pozornost propagačním e-mailům.

Kromě bezplatného poplatku za oblast v Evropě mají jiné regiony různé úrovně zvýšení cen.

Vybral jsem si evropský server. Každopádně po použití cloudflare mezi servery není velký rozdíl.

Konečná konfigurace je následující, 16 GB paměti, 6 CPU, 200 GB NVMe, 9,50 eur měsíčně, což odpovídá 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Tato cena je téměř desetina ceny Alibaba Cloud a Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ke spuštění výkonu a parametrů jsem použil [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Displej CPU `AMD EPYC 9224 24-Core Processor` jednojádrové skóre výkonu 1285
, vícejádrové skóre 4277 Zobrazit další výsledky [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Koupil jsem tři servery najednou a aktivoval jsem je současně. To zajišťuje, že servery jsou ve stejné počítačové místnosti, což usnadňuje budování vysoké dostupnosti v budoucnu.

Jeho servery občas zavěsí, což zajišťuje dostupnost webových stránek díky vysoké dostupnosti.

Noví uživatelé musí při nákupu předložit své ID karty pro ověření skutečným jménem.

## Nakonfigurujte Přihlášení Bez Hesla

Po několika minutách byly všechny servery aktivovány.

První věcí je upravit `~/.ssh/config` místního počítače Nastavte alias pro IP a poté pomocí `ssh-copy-id root@c2` nakonfigurovat přihlášení bez hesla.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Tento [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) můžete upravit pro rychlejší dokončení inicializační konfigurace.

Po dokončení konfigurace bez hesla jej můžete používat [pdsh](https://github.com/chaos/pdsh) Lze jej provozovat dávkově, což je pohodlné.

První je ruční povolení ipv6 a testování

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Poté upgradujte systém na ubuntu 24 jedním kliknutím a nainstalujte běžně používaný software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 znamená přepnutí jazyka na čínštinu a časové pásmo na Peking.

Standardně nainstalovaný software je nakonfigurován podle mých osobních zvyklostí, jako je [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) atd. V případě potřeby můžete zkopírovat sklad [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) a upravit jej podle potřeby.

Tento krok trvá dlouho, po půl hodině bude upgrade a instalace běžně používaného softwaru úspěšná. Můžete to potvrdit následujícím příkazem:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Zrychluje ssh

Síť `ssh` Evropy do Číny není stabilní. Pojďte zrychlit [mosh](//mosh.org)

Vytvořte `c0` skript v adresáři `~/.bin` místního počítače (hlavně přidaný do proměnné prostředí `PATH` ) následovně:

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

Po vytvoření udělte oprávnění ke spustitelnému souboru a soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

V budoucnu můžete přímo zadat `c0` `c1` a můžete použít vysokorychlostní přímé připojení `mosh` a zadat [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Převést Formát Oddílu Z ext4 Na btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) pořizovat snímky disku pro snadné zálohování.

Nejprve vstupte do záchranného systému

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Vyberte Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Počkejte, až se server restartuje

Ke změnám otisků prstů dojde `ssh-keygen -R ip` když je ssh

Poté spusťte následující skript pro převod oddílu

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Po úspěšném převodu skript automaticky restartuje systém.

### Zobrazit Kompresní Poměr btrfs

Ve výchozím nastavení se automaticky komprimuje Příkaz pro kontrolu kompresního poměru je následující:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuální Komprese

Pokud jste perfekcionisté, můžete také provést úplnou kompresi disku ručně

```bash
btrfs filesystem defragment -r -czstd /
```

Jak je znázorněno na obrázku níže, můžete vidět, že po ruční kompresi v novém systému bylo zkomprimováno téměř o 100 MB více.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Vytvořte Zálohu Snímku Btrfs Pomocí Snapperu

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) je nejlepším partnerem pro zálohování Btrfs .

Inicializační skript vytvoří adresář `~/ubuntu` , stačí spustit následující příkaz:

```
~/ubuntu/snapper/init.sh
```

Uvidíme se v obsahu skriptu [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Pomocí `snapper list-configs` můžete zobrazit dílčí svazky, pro které jsou nastaveny snímky.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Pomocí `snapper -c mnt list` můžete zobrazit snímek dílčího svazku

`/etc/snapper/configs/mnt` Můžete zobrazit konkrétní nastavení zálohování tohoto podsvazku

Další reference:

[Snadno si hrajte s funkcí snímku Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Snímek Serveru contabo

contabo funkci snímku serveru, ale nepodporuje plánované snímky Napsal jsem [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pro pořizování denních snímků.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Chcete-li obnovit snímek serveru, nejprve klikněte na Crontol v nabídce správy

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Poté klikněte na Snímky pro obnovení.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Zrnitost tohoto snímku je však příliš velká. Po obnovení budou nově přidaná data zcela ztracena, proto je používejte opatrně.

Obvykle je pohodlnější použít snímky btrfs.

## Podrobnosti O Záchranném Systému

Vstupte do záchranného systému 22 až bude port [tcping](https://github.com/paradiseduo/tcping) přístupný, nebudete k němu moci přistupovat s nastaveným heslem po dobu 2-3 minut.

```
tcping ip 22 -c 9999
```

Přístupnost portů lze sledovat.

### Jak Získat Přístup K Pevnému Disku Po Zadání Záchranného Snímku &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Můžete si prohlédnout například snímek

```
snapper -c etc list
```

Zobrazit změny v souboru snímku

```
snapper -c etc status 5..6
```

Zobrazit konkrétní text rozdílu

```
snapper -c etc diff 3..5
```

Obnovit snímek: Například vrátit zpět všechny změny po snímku 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Povolit Trvalost Protokolu

Povolení uchování protokolů v záchranném systému vyžaduje, abyste ručně vytvořili odpovídající adresář a provedli některé další kroky, protože možná nemáte spuštěnou službu systemd. Zde jsou kroky, které můžete vyzkoušet:

Tak nejdřív chroot

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Restartujte do systému Ubuntu: Po provedení výše uvedených změn musíte počítač restartovat normálně a do systému Ubuntu místo záchranného systému.

Tímto způsobem systemd-journald začne s novou konfigurací a začne trvale ukládat protokoly na pevný disk.

Mějte na paměti, že výše uvedené operace se provádějí na záchranném systému, takže tyto změny se projeví až po restartu systému a již není v záchranném režimu.

To znamená, že okamžitě neuvidíte, že se žádné změny existujících protokolů stanou trvalými, ale všechny protokoly vygenerované poté zůstanou zachovány.

Tímto způsobem můžete zobrazit protokoly služby ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Poznámky K Těžkým a Komplikovaným Nemocem

### Vyřešte Podivný Problém: Server Nemůže ssh

Dříve jsem použil akci github k vytvoření automatické kompilace a skriptu nasazení, ale zjistil jsem, že služba nasazení nemůže ssh.

Vstup do záchranného systému a prohlížení protokolů je problém s oprávněním:

`Missing privilege separation directory: /run/sshd`

Tento adresář můžete vytvořit pomocí následujícího příkazu

```
chown root:root /
systemd-tmpfiles --create
```

Po opakovaném vyšetřování je to proto github action `1001` uživatel, který nahrál tar `uid`

tar Rozbalení musí být provedeno bez parametrů `--no-same-owner` bude dekomprimováno do `uid` pro uživatele `1001`

V důsledku toho rsync změní skupinu uživatelů kořenového adresáře a poté se po restartu nebudete moci přihlásit k ssh.

Upravte dekompresní skript následovně:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


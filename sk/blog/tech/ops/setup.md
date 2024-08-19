# Inicializujte Server (Použite Oblasť BTRFS, Plánovanú Snímku Snappera)

## Nákupný Server contabo

contabo je lacný poskytovateľ VPS v Nemecku s dlhou históriou (viac ako 20 rokov) a množstvom používateľov (viac ako 200 000), takže sa nemusíte báť, že utečiete.

VPS nákupe [contabo.com](//contabo.com) nezabudnite zvoliť cenu v eurách, ktorá je lacnejšia.

![](https://i-01.eu.org/1718285782.avif)

Za contabo sa účtuje jednorazový inštalačný poplatok.
Každý mesiac je však niekoľko dní, kedy je inštalačný poplatok zadarmo. Stačí sa zaregistrovať a venovať pozornosť propagačným e-mailom.

Okrem bezplatného poplatku za oblasť v Európe majú iné regióny rôzne úrovne zvýšenia cien.

Vybral som si európsky server. Každopádne po použití cloudflare medzi servermi nie je veľký rozdiel.

Finálna konfigurácia je nasledovná, 16GB pamäť, 6CPU, 200 GB NVMe, 9,50 eur mesačne, čo zodpovedá 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Táto cena je takmer desatinou ceny Alibaba Cloud a Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Na spustenie výkonu a parametrov som použil [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Zobrazuje CPU model `AMD EPYC 9224 24-Core Processor` , skóre výkonu s jedným jadrom 1285
, viacjadrové skóre 4277 Zobraziť ďalšie výsledky [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kúpil som si tri servery naraz a aktivoval som ich súčasne. To zaisťuje, že servery sú v rovnakej počítačovej miestnosti, čo uľahčuje budovanie vysokej dostupnosti v budúcnosti.

Jeho servery občas zavesia, čím sa zabezpečí dostupnosť webových stránok vďaka vysokej dostupnosti.

Noví používatelia musia pri nákupe predložiť svoje ID karty na overenie skutočného mena.

## Nakonfigurujte Prihlásenie Bez Hesla

Po niekoľkých minútach boli všetky servery aktivované.

Prvá vec IP upraviť `~/.ssh/config` lokálneho počítača na nastavenie aliasu a potom použiť `ssh-copy-id root@c2` na konfiguráciu prihlásenia bez hesla.

![](https://i-01.eu.org/1718287198.avif)

Tento [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) môžete upraviť, aby ste rýchlejšie dokončili inicializačnú konfiguráciu.

Po dokončení konfigurácie bez hesla ho môžete používať [pdsh](https://github.com/chaos/pdsh)

Prvým je manuálne povoliť ipv6 a testovať

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Potom jedným kliknutím inovujte systém na ubuntu 24 a nainštalujte bežne používaný softvér.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 znamená prepnutie jazyka na čínštinu a časové pásmo na Peking.

Štandardne nainštalovaný softvér je nakonfigurovaný podľa mojich osobných zvyklostí, ako napríklad [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) atď. V prípade potreby môžete skopírovať sklad [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) a upraviť ho podľa potreby.

Tento krok trvá dlho, po pol hodine bude upgrade a inštalácia bežne používaného softvéru úspešná. Môžete to potvrdiť nasledujúcim príkazom:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Zrýchľuje ssh

Sieť z Európy do Číny nie je stabilná. Na `ssh` sa odporúča použiť [mosh](//mosh.org)

Vytvorte `c0` skripty v lokálnom adresári `~/.bin` (hlavne pridané do premennej prostredia `PATH` ) takto:

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

Po vytvorení udeľte spustiteľné povolenia a soft-link `c1` a `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

V budúcnosti môžete priamo zadať `c0` a `c1` a použiť `mosh` vysokorýchlostné priame pripojenie a zadať [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Previesť Formát Oddielu Z ext4 Na btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) robiť snímky disku pre jednoduché zálohovanie.

Najprv vstúpte do záchranného systému

![](https://i-01.eu.org/1718300448.avif)

Vyberte Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Počkajte, kým sa server reštartuje

Vyskytnú ssh zmeny odtlačkov prstov, použite `ssh-keygen -R ip` na vyčistenie

Potom spustite nasledujúci skript na konverziu oddielu

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Po úspešnej konverzii skript automaticky reštartuje systém.

### Pozrite Si Kompresný Pomer btrfs

V predvolenom nastavení sa automaticky komprimuje Príkaz na kontrolu kompresného pomeru je nasledujúci:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuálna Kompresia

Ak ste perfekcionista, môžete vykonať úplnú kompresiu disku aj manuálne.

```bash
btrfs filesystem defragment -r -czstd /
```

Ako je znázornené na obrázku nižšie, môžete vidieť, že po manuálnej kompresii v novom systéme bolo komprimovaných takmer o 100 MB viac.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Vytvorte Zálohu Snímky Btrfs Pomocou Aplikácie snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) je najlepším partnerom pre zálohovanie Btrfs .

Inicializačný skript vytvorí adresár `~/ubuntu` , stačí spustiť nasledujúci príkaz:

```
~/ubuntu/snapper/init.sh
```

Uvidíme sa v obsahu scenára [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Použite `snapper list-configs` na zobrazenie čiastkových zväzkov, pre ktoré sú nastavené snímky.

![](https://i-01.eu.org/1718302689.avif)

Použite `snapper -c mnt list` na zobrazenie snímky podzväzku

`/etc/snapper/configs/mnt` môže zobraziť špecifické nastavenia zálohovania tohto podzväzku

Ďalšie referencie:

[Hrajte jednoducho s funkciou snímky Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Snímka Servera contabo

contabo Poskytuje funkciu snímky servera, ale nepodporuje plánované snímky. Napísal som [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) na vytváranie denných snímok.

![](https://i-01.eu.org/1718304206.avif)

Ak chcete obnoviť snímku servera, najskôr kliknite na Crontol v ponuke správy

![](https://i-01.eu.org/1718304275.avif)

Potom kliknite na Snímky na obnovenie.

![](https://i-01.eu.org/1718304063.avif)

Zrnitosť tejto snímky je však príliš veľká. Po obnovení sa novo pridané údaje úplne stratia, preto ich používajte opatrne.

Zvyčajne je pohodlnejšie použiť snímky btrfs.

## Podrobnosti O Záchrannom Systéme

Vstúpte do záchranného systému 22 keď [tcping](https://github.com/paradiseduo/tcping) bude port prístupný, nebudete k nemu môcť pristupovať s nastaveným heslom po dobu 2-3 minút.

```
tcping ip 22 -c 9999
```

Dostupnosť portov je možné monitorovať.

### Ako Získať Prístup K Pevnému Disku Po Zadaní Rescue Snapshot &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Snímku si môžete pozrieť napr

```
snapper -c etc list
```

Zobraziť zmeny v súbore snímky

```
snapper -c etc status 5..6
```

Zobraziť konkrétny rozdielový text

```
snapper -c etc diff 3..5
```

Obnoviť snímku: Vráťte napríklad všetky zmeny po snímke 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Povoliť Pretrvávanie Denníka

Povolenie pretrvávania protokolov v záchrannom systéme vyžaduje, aby ste manuálne vytvorili zodpovedajúci adresár a vykonali niektoré ďalšie kroky, pretože možno nemáte spustenú službu systemd. Tu sú kroky, ktoré môžete vyskúšať:

Potom najprv chroot

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reštartujte váš systém Ubuntu: Po vykonaní vyššie uvedených zmien musíte reštartovať počítač normálne a do systému Ubuntu namiesto záchranného systému.

Týmto spôsobom systemd-journald začne s novou konfiguráciou a začne nepretržite ukladať protokoly na pevný disk.

Majte na pamäti, že vyššie uvedené operácie sa vykonávajú na záchrannom systéme, takže tieto zmeny sa prejavia až po reštarte systému a v záchrannom režime.

To znamená, že okamžite neuvidíte žiadne zmeny existujúcich protokolov, ktoré sa stanú trvalými, ale všetky protokoly vygenerované potom zostanú zachované.

Týmto spôsobom môžete zobraziť protokoly služby ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Poznámky K Ťažkým a Komplikovaným Chorobám

### Vyriešte Zvláštny Problém: Server Nemôže ssh

Predtým som použil akciu github na vytvorenie automatickej kompilácie a skriptu nasadenia, ale zistil som, že služba nasadenia nemôže byť ssh.

Vstup do záchranného systému a prezeranie denníkov je problém s povolením:

`Missing privilege separation directory: /run/sshd`

Tento adresár môžete vytvoriť pomocou nasledujúceho príkazu

```
chown root:root /
systemd-tmpfiles --create
```

Po opakovanom skúmaní je to preto github action že používateľ `uid` z tar je `1001`

tar Rozbalenie musí byť, ak nie je žiadny parameter `--no-same-owner` , bude dekomprimované na `uid` pre `1001` používateľov

V dôsledku toho rsync zmení skupinu používateľov koreňového adresára a potom sa po reštarte nebudete môcť prihlásiť do ssh.

Upravte dekompresný skript takto:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
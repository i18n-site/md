# A Szerver Inicializálása (Használjon BTRFS Partíciót, Snapper Ütemezett Pillanatképet)

## contabo Vásárlási Szerver

A contabo egy olcsó VPS szolgáltató Németországban, nagy múlttal (több mint 20 éve) és sok felhasználóval (több mint 200 000), így nem kell félni a szökéstől.

VPS [contabo.com](//contabo.com) felejtse el az eurós árat választani, amely olcsóbb.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

A contabo egyszeri telepítési díjjal jár.
Azonban minden hónapban van néhány nap, amikor a telepítési díj ingyenes. Csak regisztráljon, és figyeljen a promóciós e-mailekre.

Az európai ingyenes területdíj mellett más régiókban is eltérő mértékű áremelés van.

Én egy európai szervert választottam egyébként a cloudflare használata után nem sok különbség van a szerverek között.

A végső konfiguráció a következő: 16 GB memória, 6 CPU, 200 GB NVMe, havi 9,50 euró, ami 74,43 RMB-nek felel meg.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ez az ár csaknem egytizede az Alibaba Cloud és az Amazon árának** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

A teljesítmény és a paraméterek futtatásához [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display Model CPU `AMD EPYC 9224 24-Core Processor` egymagos teljesítménypontszám 1285
, többmagos pontszám 4277 További találatok [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Egyszerre három szervert vásároltam, és egyszerre aktiváltam őket. Ez biztosítja, hogy a szerverek ugyanabban a számítógépteremben legyenek, ami megkönnyíti a magas rendelkezésre állást a jövőben.

Szerverei időnként lefagynak, így a magas rendelkezésre állás révén biztosítják a webhelyek elérhetőségét.

Az új felhasználóknak vásárláskor be kell nyújtaniuk személyi igazolványukat a valós név hitelesítéséhez.

## Jelszó Nélküli Bejelentkezés Konfigurálása

Néhány perc múlva a szerverek mindegyike aktiválódott.

Először IP módosítsa a helyi `ssh-copy-id root@c2` `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Módosíthatja ezt [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) az inicializálási konfiguráció gyorsabb befejezéséhez.

A jelszó nélküli konfiguráció befejezése után [pdsh](https://github.com/chaos/pdsh) kötegekkel, ami kényelmes.

Az első az ipv6 manuális engedélyezése és tesztelése

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Ezután egy kattintással frissítse a rendszert ubuntu 24-re, és telepítse a gyakran használt szoftvereket.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

A CN=1 azt jelenti, hogy a nyelvet kínaira, az időzónát pedig Pekingre kell váltani.

Az alapértelmezés szerint telepített szoftver a személyes használati szokásaim szerint van beállítva, mint például [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) stb. Ha szükséges, átmásolhatja a [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) raktárt és szükség szerint módosíthatja.

Ez a lépés hosszú ideig tart. Fél óra várakozás után sikeres lesz az általánosan használt szoftver frissítése és telepítése. Ezt a következő paranccsal erősítheti meg:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## A mosh Felgyorsítja Az Ssh-T

A hálózat Európából Kínába nem stabil Javasoljuk, `ssh` gyere fel [mosh](//mosh.org)

Hozzon létre egy `c0` szkriptet a helyi `~/.bin` (főleg a `PATH` környezeti változóhoz hozzáadva) könyvtárában a következőképpen:

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

Létrehozás után adja meg a végrehajtható engedélyeket és a soft-link , `c2` `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

A jövőben közvetlenül beírhatja `c0` , `c1` parancsot, és használhatja `mosh` a közvetlen csatlakozáshoz és a [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertálja a Partíció Formátumát Ext4-Ről Btrfs-Re

[btrfs](https://wikipedia.org/wiki/Btrfs) lemezről pillanatfelvételeket készíteni az egyszerű biztonsági mentés érdekében.

Először lépjen be a mentőrendszerbe

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Válassza a Debian Rescue-t

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Várja meg, amíg a szerver újraindul

Ujjlenyomat változások történnek ssh ha `ssh-keygen -R ip`

Ezután futtassa a következő szkriptet a partíció konvertálásához

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

A szkript automatikusan újraindítja a rendszert a sikeres átalakítás után.

### A btrfs Tömörítési Arány Megtekintése

Alapértelmezés szerint automatikusan tömöríti a tömörítési arányt a következőképpen:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kézi Tömörítés

Ha Ön perfekcionista, manuálisan is végrehajthat teljes lemeztömörítést. A parancs a következő

```bash
btrfs filesystem defragment -r -czstd /
```

Ahogy az alábbi ábrán is látható, látható, hogy az új rendszerben a kézi tömörítés után közel 100 MB-tal több lett tömörítve.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Hozzon Létre Egy Btrfs Pillanatfelvétel Biztonsági Másolatot a snapper Segítségével

a legjobb [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs biztonsági mentéshez.

Az inicializálási szkript létrehozza a `~/ubuntu` könyvtárat, csak futtassa a következő parancsot:

```
~/ubuntu/snapper/init.sh
```

Találkozunk a forgatókönyv tartalmában [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Használja a `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Egy részkötet pillanatképének megtekintéséhez használja `snapper -c mnt list`

`/etc/snapper/configs/mnt` ennek az alkötetnek a biztonsági mentési beállításait

További referenciák:

[Könnyen játszhat a Btrfs pillanatfelvétel funkciójával snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Szerver Pillanatképe

contabo pillanatkép funkciót biztosít, de nem támogatja az [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pillanatfelvételeket.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

A szerver pillanatképének visszaállításához először kattintson a Crontol elemre a felügyeleti menüben

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Ezután kattintson a Pillanatképek elemre a visszaállításhoz.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Ennek a pillanatképnek a részletessége azonban a visszaállítás után az újonnan hozzáadott adatok teljesen elvesznek, ezért óvatosan használja.

Általában kényelmesebb a btrfs pillanatképek használata.

## Mentőrendszer Részletei

Lépjen be a mentési rendszerbe 22 Miután a port [tcping](https://github.com/paradiseduo/tcping) elérhetővé válik, 2-3 percekig nem férhet hozzá a beállított jelszóval.

```
tcping ip 22 -c 9999
```

A kikötők elérhetősége nyomon követhető.

### Hogyan Lehet Hozzáférni a Merevlemezhez a Restore Snapshot & Való Belépés Után

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Megtekintheti például a pillanatképet

```
snapper -c etc list
```

Pillanatképfájl változásainak megtekintése

```
snapper -c etc status 5..6
```

Konkrét eltérő szöveg megtekintése

```
snapper -c etc diff 3..5
```

Pillanatkép visszaállítása: Például vonjon vissza minden módosítást az 5. pillanatkép után

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### A Naplómegmaradás Engedélyezése

A naplózás fennmaradásának engedélyezése a mentési rendszer alatt manuálisan hozza létre a megfelelő könyvtárat, és hajtson végre néhány további lépést, mert előfordulhat, hogy nem fut rendszerszolgáltatás. Íme a lépések, amelyeket kipróbálhat:

Először chroot, aztán

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Indítsa újra az Ubuntu rendszert: A fenti változtatások elvégzése után a gépet a szokásos módon és az Ubuntu rendszerben kell újraindítania a mentési rendszer helyett.

Ily módon a systemd-journald az új konfigurációval indul, és elkezdi folyamatosan tárolni a naplókat a merevlemezen.

Ne feledje, hogy a fenti műveleteket mentési rendszeren hajtják végre, így ezek a változtatások csak a rendszer újraindítása után lépnek életbe, és már nem mentő módban.

Ez azt jelenti, hogy nem fogja azonnal látni, hogy a meglévő naplók módosításai állandósulnak, de az ezt követően létrehozott naplók megmaradnak.

Így megtekintheti az ssh szolgáltatás naplóit

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Megjegyzések a Nehéz És Bonyolult Betegségekhez

### Oldja Meg a Furcsa Problémát: A Szerver Nem Tudja Ssh-T

Korábban a github műveletet használtam egy automatikus fordítási és telepítési szkript elkészítéséhez, de úgy találtam, hogy a telepítési szolgáltatás nem lehet ssh.

A mentési rendszerbe való belépés és a naplók megtekintése engedélykérdés:

`Missing privilege separation directory: /run/sshd`

Ezt a könyvtárat a következő paranccsal hozhatja létre

```
chown root:root /
systemd-tmpfiles --create
```

Ismételt vizsgálatok után azért, github action a tar feltöltő felhasználó `1001` `uid`

`1001` kicsomagolást `uid` `--no-same-owner` kell elvégezni tar

Emiatt az rsync megváltoztatja a gyökérkönyvtár felhasználói csoportját, és az újraindítás után nem fog tudni bejelentkezni az ssh-ba.

Módosítsa a kicsomagolási parancsfájlt az alábbiak szerint:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


# A Szerver Inicializálása (BTRFS partícióval, Snapper ütemezett pillanatképekkel)

## contabo szerver vásárlása

A contabo egy olcsó VPS szolgáltató Németországban, nagy múlttal (több mint 20 éve) és sok felhasználóval (több mint 200 000), így nem kell félni a szökéstől.

Válassza a [contabo.com](//contabo.com) VPS-t, és ne felejtse el az európai árat választani, amely olcsóbb.

![](https://i-01.eu.org/1718285782.avif)

A contabo egyszeri telepítési díjat számít fel.
Azonban minden hónapban néhány napban ingyenes a telepítési díj. Csak regisztráljon, és figyelje a promóciós e-maileket.

Az európai ingyenes területdíj mellett más régiókban is eltérő mértékű áremelés van.

Én egy európai szervert választottam, hiszen a Cloudflare használata után a szerverek között nem sok különbség van.

A végső konfiguráció a következő: 16 GB memória, 6 CPU, 200 GB NVMe, havi 9,50 euró, ami 74,43 RMB-nek felel meg.

![](https://i-01.eu.org/1718286008.avif)

**Ez az ár csaknem egytizede az Alibaba Cloud és az Amazon árának**.

![](https://i-01.eu.org/1718356956.avif)

A teljesítmény és a paraméterek futtatásához [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Megjelenítve a CPU típusát: `AMD EPYC 9224 24-Core Processor`, egy magos teljesítmény pontszáma 1285
, többmagos pontszám 4277. További eredmények [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Egyszerre három szervert vásároltam, és egyszerre aktiváltam őket. Ez biztosítja, hogy a szerverek ugyanabban a szerverteremben legyenek, ami megkönnyíti a jövőbeni magas rendelkezésre állást.

A szerverek időnként lefagynak, de a magas rendelkezésre állás révén biztosítják a webhelyek elérhetőségét.

Az új felhasználóknak vásárláskor be kell nyújtaniuk személyi igazolványukat a valós név hitelesítéséhez.

## Jelszó nélküli bejelentkezés konfigurálása

Néhány perc múlva a szerverek mindegyike aktiválódott

Az első lépés az, hogy módosítsa a helyi gép `~/.ssh/config` fájlt az IP cím álnév beállításához, majd használja a `ssh-copy-id root@c2` parancsot a jelszó nélküli bejelentkezés konfigurálásához.

![](https://i-01.eu.org/1718287198.avif)

Módosíthatja ezt a [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) szkriptet az inicializálási konfiguráció gyorsabb befejezéséhez.

A jelszó nélküli konfiguráció befejezése után használja a [pdsh](https://github.com/chaos/pdsh) parancsokat, ami kényelmes.

Először manuálisan engedélyezze az ipv6-t, majd tesztelje

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Ezután egy kattintással frissítse a rendszert az Ubuntu 24-re, és telepítse a gyakran használt szoftvereket.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

A CN=1 azt jelenti, hogy a nyelvet kínaira, az időzónát pedig Pekingre kell váltani.

Az alapértelmezés szerint telepített szoftverek a személyes használati szokásaim szerint vannak beállítva, például [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/) stb. Ha szükséges, átmásolhatja a [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) tárolót, és szükség szerint módosíthatja.

Ez a lépés hosszú ideig tart. Fél óra várakozás után sikeresen frissítse és telepítse az általánosan használt szoftvereket. Ezt a következő paranccsal erősítse meg:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## A mosh felgyorsítja az ssh-t

Az [mosh](//mosh.org) `ssh` tartó hálózat nem stabil.

Hozzon létre egy `c0` szkriptet a `~/.bin` helyi könyvtárban (főként az `PATH` környezeti változóhoz hozzáadva) az alábbiak szerint:

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

Létrehozás után adjon végrehajtható engedélyeket, és hozzon létre soft link `c1` és `c2` értékre.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

A jövőben közvetlenül beírhatja `c0` és `c1` `mosh` nagysebességű közvetlen kapcsolat használatához, és írja be a [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertálja a partíció formátumát ext4-ről btrfs-re

A [btrfs](https://wikipedia.org/wiki/Btrfs) lehetővé teszi a lemez pillanatképek készítését, ami egyszerű biztonsági mentést tesz lehetővé.

Először lépjen be a mentőrendszerbe

![](https://i-01.eu.org/1718300448.avif)

Válassza a Debian Rescue-t

![](https://i-01.eu.org/1718300753.avif)

Várja meg, amíg a szerver újraindul

Az ssh használatakor megjelennek az ujjlenyomat-módosítások, a tisztításhoz használja a `ssh-keygen -R ip` parancsot

Ezután futtassa a következő szkriptet a partíció konvertálásához

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

A szkript automatikusan újraindítja a rendszert a sikeres átalakítás után.

### Nézze meg a btrfs tömörítési arányt

Alapértelmezés szerint automatikusan tömöríti a tömörítési arányt a következőképpen:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kézi tömörítés

Ha Ön perfekcionista, kézi teljes lemeztömörítést is végezhet. A parancs a következő:

```bash
btrfs filesystem defragment -r -czstd /
```

Ahogy az alábbi ábrán is látható, látható, hogy az új rendszerben a kézi tömörítés után közel 100 MB-tal több lett tömörítve.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Hozzon létre egy Btrfs pillanatképet a snapper segítségével

A [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) a btrfs pillanatkép ideális kiegészítője.

Az inicializálási szkript létrehozza a `~/ubuntu` könyvtárat, csak futtassa a következő parancsot:

```
~/ubuntu/snapper/init.sh
```

A forgatókönyv tartalmát [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh) találhatja meg

A `snapper list-configs` parancs segítségével megtekintheti azokat a részköteteket, amelyekhez pillanatképek vannak beállítva

![](https://i-01.eu.org/1718302689.avif)

A `snapper -c mnt list` parancs segítségével megtekintheti egy részkötet pillanatképét

A `/etc/snapper/configs/mnt` megtekintheti ennek az alkötetnek a biztonsági mentési beállításait

További referenciák:

[Könnyen játszhat a Btrfs pillanatfelvétel funkciójával snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo szerver pillanatképe

contabo pillanatkép funkciót biztosít, de nem támogatja az [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pillanatfelvételeket.

![](https://i-01.eu.org/1718304206.avif)

A szerver pillanatképének visszaállításához először kattintson a Crontol elemre a menüben

![](https://i-01.eu.org/1718304275.avif)

Ezután kattintson a Pillanatképek elemre a visszaállításhoz.

![](https://i-01.eu.org/1718304063.avif)

Azonban ez a pillanatkép részletessége a visszaállítás után az újonnan hozzáadott adatok teljes elvesztésével jár, ezért óvatosan használja.

Általában kényelmesebb a btrfs pillanatképek használata.

## Mentőrendszer részletei

Lépjen be a mentőrendszerbe, miután a 22. port [tcping](https://github.com/paradiseduo/tcping) elérhetővé vált, 2-3 percekig nem férhet hozzá a beállított jelszóval.

```
tcping ip 22 -c 9999
```

A kikötők elérhetőségét nyomon követheti.

### Hogyan férhet hozzá a merevlemezhez és hogyan állíthat vissza pillanatképet a belépés után

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Például megtekintheti a pillanatképet

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

Pillanatkép visszaállítása: például vonja vissza az összes módosítást az 5. pillanatkép után

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### A napló megmaradásának engedélyezése

A naplózás fennmaradásának engedélyezése a mentőrendszer alatt manuálisan hozza létre a megfelelő könyvtárat, és hajtson végre néhány további lépést, mert előfordulhat, hogy nincs futó systemd szolgáltatás. Íme a lépések, amelyeket kipróbálhat:

Először chroot, aztán

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Indítsa újra az Ubuntu rendszert: A fenti módosítások elvégzése után a rendszert a szokásos módon és az Ubuntu rendszerben kell újraindítania a mentőrendszer helyett.

Így a systemd-journald az új konfigurációval indul, és elkezdi folyamatosan tárolni a naplókat a merevlemezen.

Ne feledje, hogy a fenti műveleteket egy mentőrendszeren hajtják végre, így ezek a változtatások csak akkor lépnek érvénybe, amíg a rendszert újra nem indítják, és már nincs mentőrendszerben.

Ez azt jelenti, hogy nem fogja azonnal látni a meglévő naplók változásait, amelyek állandóvá válnak, de az ezután generált összes napló megmarad.

Így megtekintheti az ssh szolgáltatás naplóit

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Megjegyzések a nehéz és bonyolult problémákhoz

### Oldja meg a furcsa problémát: a szerver nem tud ssh-t

Korábban a github műveletet használtam egy automatikus fordítási és telepítési szkript elkészítéséhez, de úgy találtam, hogy a telepítési szolgáltatás nem tud ssh-t

A mentőrendszerbe való belépés és a naplók megtekintése során engedélykérdés merül fel:

`Missing privilege separation directory: /run/sshd`

Ez a könyvtárat a következő paranccsal hozhatja létre

```
chown root:root /
systemd-tmpfiles --create
```

Ismételt vizsgálatok után azért, mert a github action tar `uid` felhasználója az `1001`

A kicsomagolásnak nem kell `--no-same-owner` paraméterrel rendelkeznie, akkor `1001` felhasználó esetén `uid` re lesz kitömörítve

Ezért az rsync megváltoztatja a gyökérkönyvtár felhasználói csoportját, és az újraindítás után nem tud bejelentkezni az ssh-be.

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
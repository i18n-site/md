# Initialisez le serveur (utilisez la partition BTRFS, les instantanés planifiés Snapper)

## Achetez un serveur contabo

contabo est un fournisseur VPS bon marché en Allemagne avec une longue histoire (plus de 20 ans) et de nombreux utilisateurs (plus de 200 000), il n'y a donc pas lieu de s'inquiéter de s'enfuir.

Achetez un VPS sur [contabo.com](//contabo.com) et n'oubliez pas de choisir le tarif en euros pour un prix plus avantageux.

![](https://i-01.eu.org/1718285782.avif)

Il y a des frais d'installation uniques pour contabo.
Cependant, il y a quelques jours chaque mois où les frais d'installation sont offerts. Inscrivez-vous et restez à l'écoute des e-mails promotionnels.

En plus des frais de zone gratuite en Europe, d'autres régions subissent des augmentations de prix variables.

J'ai opté pour un serveur européen, car, en fin de compte, après l'utilisation de Cloudflare, la localisation du serveur n'a pas vraiment d'importance.

La configuration finale est la suivante : 16 Go de mémoire, 6 CPU, 200 Go NVMe, pour 9,50 euros par mois, soit environ 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ce tarif représente à peine un dixième du prix d'Alibaba Cloud et d'Amazon**.

![](https://i-01.eu.org/1718356956.avif)

J'ai utilisé [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) pour tester les performances et les paramètres :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Le modèle CPU affiché est `AMD EPYC 9224 24-Core Processor`, avec un score de performance monocœur de 1285
et un score multicœur de 4277. Plus de résultats sur [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

J'ai acheté trois serveurs en même temps et les ai activés simultanément, ce qui garantit que les serveurs se trouvent dans la même salle informatique, facilitant ainsi la création d'une haute disponibilité à l'avenir.

Des serveurs contabo peuvent parfois tomber en panne, mais une haute disponibilité garantit l'accessibilité des sites Web.

Les nouveaux utilisateurs doivent soumettre leur carte d'identité pour une authentification par leur nom réel lors de l'achat.

## Configurer une connexion sans mot de passe

Après quelques minutes, tous les serveurs étaient activés

La première étape consiste à modifier le fichier `~/.ssh/config` de la machine locale pour définir un alias IP, puis à configurer la connexion sans mot de passe avec `ssh-copy-id root@c2`.

![](https://i-01.eu.org/1718287198.avif)

Vous pouvez modifier ce [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) pour accélérer la configuration d'initialisation.

Après la configuration sans mot de passe, vous pouvez utiliser [pdsh](https://github.com/chaos/pdsh) pour des opérations en lots, ce qui est très pratique.

Commencez par activer manuellement IPv6 et effectuez un test

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Ensuite, mettez à niveau le système en un clic vers Ubuntu 24 et installez les logiciels couramment utilisés.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 signifie passer à la langue chinoise et au fuseau horaire de Pékin.

Le logiciel installé par défaut est configuré en fonction de mes habitudes d'utilisation personnelles, comme [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/), etc. Si nécessaire, vous pouvez cloner le dépôt [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) et le modifier selon vos besoins.

Cette étape peut être longue. Après une demi-heure d'attente, la mise à niveau et l'installation des logiciels couramment utilisés seront réussies. Vous pouvez le vérifier avec la commande suivante :

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh accélère ssh

Le réseau de l'Europe vers `ssh` Chine n'est pas stable. Il est recommandé d'utiliser [mosh](//mosh.org)

Créez un script `c0` dans le répertoire local `~/.bin` (principalement ajouté à la variable d'environnement `PATH`) comme suit :

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

Après la création, accordez les permissions d'exécution et créez les liens symboliques `c1` et `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

À l'avenir, vous pourrez utiliser directement `c0` et `c1` pour vous connecter en haute vitesse avec `mosh` et accéder à [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html).

## Convertir le format de partition de ext4 en btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) peut prendre des instantanés de disque pour une sauvegarde facile.

Entrez d'abord dans le système de secours

![](https://i-01.eu.org/1718300448.avif)

Choisissez Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Attendez que le serveur redémarre

Lorsque vous utilisez ssh, vous serez confronté à un changement de empreinte digitale. Utilisez `ssh-keygen -R ip` pour le nettoyer

Ensuite, exécutez le script suivant pour convertir la partition

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Le script redémarrera automatiquement le système une fois la conversion réussie.

### Consulter le taux de compression btrfs

Il se compressera automatiquement par défaut. Voici la commande pour vérifier le taux de compression :

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compression manuelle

Si vous êtes perfectionniste, vous pouvez également effectuer une compression complète du disque manuellement. Voici la commande :

```bash
btrfs filesystem defragment -r -czstd /
```

Comme le montre la figure ci-dessous, vous pouvez voir que le système manuellement compressé a gagné près de 100 Mo.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Créer une sauvegarde d'instantané Btrfs avec snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) est le meilleur partenaire pour la sauvegarde Btrfs.

Le script d'initialisation créera le répertoire `~/ubuntu`, exécutez simplement la commande suivante :

```
~/ubuntu/snapper/init.sh
```

Consultez le contenu du script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Utilisez `snapper list-configs` pour afficher les sous-volumes pour lesquels des instantanés sont définis

![](https://i-01.eu.org/1718302689.avif)

Utilisez `snapper -c mnt list` pour afficher les instantanés d'un sous-volume

`/etc/snapper/configs/mnt` peut afficher les paramètres de sauvegarde spécifiques de ce sous-volume

Plus de références :

[Jouez facilement avec la fonction instantané de Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Instantané du serveur contabo

contabo propose une fonction d'instantané pour les serveurs, mais ne prend pas en charge les instantanés planifiés. J'ai écrit un [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pour effectuer des instantanés quotidiens.

![](https://i-01.eu.org/1718304206.avif)

Pour restaurer un instantané du serveur, cliquez d'abord sur "Crontol" dans le menu de gestion

![](https://i-01.eu.org/1718304275.avif)

Ensuite, cliquez sur "Snapshots" pour restaurer.

![](https://i-01.eu.org/1718304063.avif)

Cependant, la granularité de cet instantané est trop grande. Une fois restauré, les données nouvellement ajoutées seront complètement perdues, veuillez donc l'utiliser avec prudence.

Il est généralement plus pratique d'utiliser les instantanés btrfs.

## Détails du système de secours

Entrez dans le système de secours. Une fois le port 22 accessible via [tcping](https://github.com/paradiseduo/tcping), vous ne pourrez pas y accéder avec le mot de passe défini pendant 2-3 minutes. Attendez un instant et tout ira bien.

```
tcping ip 22 -c 9999
```

L'accessibilité des ports peut être surveillée.

### Comment accéder au disque dur après avoir entré le mode secours &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Vous pouvez visualiser l'instantané, par exemple

```
snapper -c etc list
```

Afficher les modifications apportées au fichier d'instantané

```
snapper -c etc status 5..6
```

Afficher le texte de différence spécifique

```
snapper -c etc diff 3..5
```

Restaurer l'instantané : par exemple, annuler toutes les modifications après l'instantané 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Activer la persistance des journaux

Activer la persistance des journaux sous le système de secours nécessite que vous créiez manuellement le répertoire correspondant et que vous effectuiez quelques étapes supplémentaires, car vous n'avez peut-être pas de service systemd en cours d'exécution. Voici les étapes que vous pouvez essayer :

Effectuez un chroot d'abord, puis

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Redémarrez votre système Ubuntu : Après avoir effectué les modifications ci-dessus, vous devez redémarrer votre ordinateur normalement et entrer dans votre système Ubuntu au lieu du système de secours.

De cette façon, systemd-journald démarrera avec la nouvelle configuration et commencera à stocker les journaux de manière persistante sur le disque dur.

Gardez à l'esprit que les opérations ci-dessus sont effectuées sur un système de secours, ces modifications ne prendront donc effet qu'une fois le système redémarré et plus en mode de secours.

Cela signifie que vous ne verrez pas immédiatement les modifications apportées aux journaux existants qui deviennent persistants, mais que tous les journaux générés par la suite seront conservés.

De cette façon, vous pouvez afficher les journaux du service ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notes sur les maladies difficiles et compliquées

### Résoudre le problème étrange : le serveur ne peut pas ssh

J'ai déjà utilisé l'action github pour créer un script de compilation et de déploiement automatique, mais j'ai découvert que le service de déploiement ne pouvait pas être ssh.

Entrez dans le système de secours et consultez les journaux est un problème d'autorisation :

`Missing privilege separation directory: /run/sshd`

Vous pouvez créer ce répertoire avec la commande suivante

```
chown root:root /
systemd-tmpfiles --create
```

Après des investigations répétées, c'est parce que github action L'utilisateur `uid` du tar est `1001`

tar Le déballage doit se faire s'il n'y a pas de paramètre `--no-same-owner` , il sera décompressé à `uid` pour `1001` utilisateurs

Par conséquent, rsync modifiera le groupe d'utilisateurs du répertoire racine et vous ne pourrez plus vous connecter à ssh après le redémarrage.

Modifiez le script de décompression comme suit :

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```
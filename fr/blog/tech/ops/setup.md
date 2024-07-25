# Initialisez Le Serveur (Utilisez La Partition BTRFS, L'instantané Planifié Snapper)

## Serveur D'achat contabo

contabo est un fournisseur VPS bon marché en Allemagne avec une longue histoire (plus de 20 ans) et de nombreux utilisateurs (plus de 200 000), il n'y a donc pas lieu de s'inquiéter de s'enfuir.

VPS votre achat [contabo.com](//contabo.com) pensez à choisir le tarif en euro, qui est moins cher.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Il y a des frais d'installation uniques pour contabo.
Cependant, il y a quelques jours chaque mois où les frais d'installation sont gratuits. Il suffit de vous inscrire et de prêter attention aux e-mails promotionnels.

En plus des frais de zone gratuite en Europe, d'autres régions connaissent différents niveaux d'augmentation des prix.

J'ai choisi un serveur européen. Quoi qu'il en soit, après avoir utilisé cloudflare, il n'y a pas beaucoup de différence entre les serveurs.

La configuration finale est la suivante, 16 Go de mémoire, 6CPU, 200 Go NVMe, 9,50 euros par mois, équivalent à 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ce prix représente près d'un dixième du prix d'Alibaba Cloud et d'Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

J'ai utilisé [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) pour exécuter les performances et les paramètres :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Afficher CPU Modèle `AMD EPYC 9224 24-Core Processor` score de performance monocœur 1285
, partition multicœur 4277 Voir plus de résultats [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

J'ai acheté trois serveurs en même temps et je les ai activés en même temps. Cela garantit que les serveurs se trouvent dans la même salle informatique, ce qui facilite la création d'une haute disponibilité à l'avenir.

Ses serveurs raccrochent occasionnellement, garantissant l'accessibilité des sites Web grâce à une haute disponibilité.

Les nouveaux utilisateurs doivent soumettre leur carte d'identité pour une authentification par leur nom réel lors de l'achat.

## Configurer La Connexion Sans Mot De Passe

Au bout de quelques minutes, les serveurs étaient tous activés.

La première chose est de modifier le `~/.ssh/config` de la machine locale. Définissez un alias pour IP puis utilisez `ssh-copy-id root@c2` pour configurer une connexion sans mot de passe.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Vous pouvez modifier ce [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) pour terminer la configuration d'initialisation plus rapidement.

Une fois la configuration sans mot de passe terminée, vous pouvez l'utiliser [pdsh](https://github.com/chaos/pdsh) Il peut être utilisé par lots, ce qui est pratique.

La première consiste à activer manuellement ipv6 et à tester

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Mettez ensuite à niveau le système vers Ubuntu 24 en un seul clic et installez les logiciels couramment utilisés.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 signifie changer de langue en chinois et de fuseau horaire en Pékin.

Le logiciel installé par défaut est configuré en fonction de mes habitudes d'utilisation personnelles, telles que [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. Si nécessaire, vous pouvez copier l'entrepôt [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) et le modifier selon vos besoins.

Cette étape prend beaucoup de temps. Après une demi-heure d'attente, la mise à niveau et l'installation des logiciels couramment utilisés seront réussies. Vous pouvez le confirmer avec la commande suivante :

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Accélère ssh

Le réseau de l'Europe vers la Chine n'est pas stable `ssh` Il est recommandé d'utiliser [mosh](//mosh.org)

Créez un script `c0` dans le répertoire `~/.bin` de la machine locale (principalement ajouté à la variable d'environnement `PATH` ) comme suit :

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

Après la création, accordez les autorisations exécutables et créez un lien `c2` `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

À l'avenir, vous pourrez saisir directement `c0` , `c1` et vous pourrez utiliser `mosh` une connexion directe à haut débit et saisir [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Convertir Le Format De Partition D'ext4 en btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Peut prendre des instantanés de disque pour une sauvegarde facile.

Entrez d’abord dans le système de secours

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Choisissez Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Attendez que le serveur redémarre

Les changements d'empreintes digitales se produiront quand ssh , utilisez pour le nettoyer `ssh-keygen -R ip`

Exécutez ensuite le script suivant pour convertir la partition

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Le script redémarrera automatiquement le système une fois la conversion réussie.

### Afficher Le Taux De Compression btrfs

Il se compressera automatiquement par défaut. La commande pour vérifier le taux de compression est la suivante :

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compression Manuelle

Si vous êtes perfectionniste, vous pouvez également effectuer une compression complète du disque manuellement. La commande est la suivante.

```bash
btrfs filesystem defragment -r -czstd /
```

Comme le montre la figure ci-dessous, vous pouvez voir qu'après la compression manuelle dans le nouveau système, près de 100 Mo supplémentaires ont été compressés.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Créer Une Sauvegarde D'instantané Btrfs Avec snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) est le meilleur partenaire pour la sauvegarde Btrfs .

Le script d'initialisation créera le répertoire `~/ubuntu` , exécutez simplement la commande suivante :

```
~/ubuntu/snapper/init.sh
```

Rendez-vous dans le contenu du script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Utilisez `snapper list-configs` pour afficher les sous-volumes pour lesquels des instantanés sont définis.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Utilisez `snapper -c mnt list` pour afficher un instantané d'un sous-volume

`/etc/snapper/configs/mnt` Vous pouvez afficher les paramètres de sauvegarde spécifiques de ce sous-volume.

Plus de références :

[Jouez facilement avec la fonction instantané de Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Instantané Du Serveur contabo

contabo Fournit une fonction d'instantané du serveur, mais ne prend pas en charge les instantanés planifiés. J'ai écrit un [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pour prendre des instantanés quotidiens.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Pour restaurer un instantané du serveur, cliquez d'abord sur Crontol dans le menu de gestion

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Ensuite, cliquez sur Instantanés à restaurer.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Cependant, la granularité de cet instantané est trop grande. Une fois restaurées, les données nouvellement ajoutées seront complètement perdues, veuillez donc l'utiliser avec prudence.

Il est généralement plus pratique d'utiliser des instantanés btrfs.

## Détails Du Système De Secours

Entrez dans le système de secours 22 Une fois le port [tcping](https://github.com/paradiseduo/tcping) accessible, vous ne pourrez pas y accéder avec le mot de passe défini pendant 2-3 minutes. Attendez juste un moment et tout ira bien.

```
tcping ip 22 -c 9999
```

L'accessibilité des ports peut être surveillée.

### Comment Accéder Au Disque Dur Après Avoir Entré Le Mode Rescue &

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

Restaurer l'instantané : par exemple, annuler toutes les modifications après l'instantané 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Activer La Persistance Des Journaux

L'activation de la persistance des journaux sous un système de secours nécessite que vous créiez manuellement le répertoire correspondant et que vous effectuiez quelques étapes supplémentaires, car vous n'avez peut-être pas de service systemd en cours d'exécution. Voici les étapes que vous pouvez essayer :

Chroot d'abord, puis

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Redémarrez votre système Ubuntu : Après avoir effectué les modifications ci-dessus, vous devez redémarrer votre ordinateur normalement et dans votre système Ubuntu au lieu du système de secours.

De cette façon, systemd-journald démarrera avec la nouvelle configuration et commencera à stocker les journaux de manière persistante sur le disque dur.

Gardez à l'esprit que les opérations ci-dessus sont effectuées sur un système de secours, ces modifications ne prendront donc effet qu'une fois le système redémarré et non plus en mode de secours.

Cela signifie que vous ne verrez pas immédiatement les modifications apportées aux journaux existants devenir persistantes, mais que tous les journaux générés par la suite seront conservés.

De cette façon, vous pouvez afficher les journaux du service ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notes Sur Les Maladies Difficiles Et Compliquées

### Résolvez Le Problème Étrange : Le Serveur Ne Peut Pas ssh

J'ai déjà utilisé l'action github pour créer un script de compilation et de déploiement automatique, mais j'ai découvert que le service de déploiement ne pouvait pas être ssh.

Entrer dans le système de secours et consulter les journaux est un problème d'autorisation :

`Missing privilege separation directory: /run/sshd`

Vous pouvez créer ce répertoire avec la commande suivante

```
chown root:root /
systemd-tmpfiles --create
```

Après des enquêtes répétées, c'est parce que github action L'utilisateur qui a téléchargé tar est `1001` `uid`

tar Le déballage doit se faire sans paramètres `--no-same-owner` il sera décompressé en `uid` pour `1001` user

Par conséquent, rsync modifiera le groupe d'utilisateurs du répertoire racine et vous ne pourrez plus vous connecter à ssh après le redémarrage.

Modifiez le script de décompression comme suit :

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```


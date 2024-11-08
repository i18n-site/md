---

brief: |
  Actuellement, deux outils de ligne de commande open source ont été implémentés : i18 (outil de traduction en ligne de commande MarkDown) et i18n.site (générateur de sites de documents statiques multilingues)

---


# i18n.site · L'outil De Traduction Et De Création De Sites Web MarkDown Est Maintenant en Ligne !

Après plus de six mois de développement, [https://i18n.site](//i18n.site) est en ligne.

Actuellement, deux outils de ligne de commande open source sont implémentés :

* `i18` : MarkDown Outil de traduction en ligne de commande
* `i18n.site` : Générateur de sites de documents statiques multilingues, **optimisé pour l'expérience de lecture**

La traduction peut parfaitement conserver le format `Markdown` . Peut identifier les modifications de fichiers et traduire uniquement les fichiers comportant des modifications.

La traduction est modifiable ; si vous modifiez le texte original et le traduisez automatiquement, les modifications manuelles de la traduction ne seront pas écrasées (si ce paragraphe du texte original n'a pas été modifié).

[➤ Cliquez ici pour autoriser et suivre i18n.site la bibliothèque github de](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) et **recevoir $50 de bonus** .

## Origine

À l’ère d’Internet, le monde entier est un marché, et le multilinguisme et la localisation sont des compétences de base.

Les outils de gestion de traduction existants sont trop lourds. Pour les programmeurs qui s'appuient sur la gestion de la version `git` , ils préfèrent toujours la ligne de commande.

J'ai donc développé un outil de traduction `i18` et construit un générateur de site statique multilingue `i18n.site` basé sur l'outil de traduction.

![](https://p.3ti.site/1723777556.avif)

Ce n’est qu’un début, il reste encore beaucoup à faire.

Par exemple, en connectant le site de documents statiques aux réseaux sociaux et aux abonnements par courrier électronique, les utilisateurs peuvent être contactés à temps lorsque les mises à jour sont publiées.

Par exemple, des forums multilingues et des systèmes de bons de travail peuvent être intégrés dans n'importe quelle page Web, permettant aux utilisateurs de communiquer sans barrières.

## Source Ouverte

Les [codes front-end, back-end et ligne de commande sont tous open source](https://i18n.site/i18n.site/c/src) (le modèle de traduction n'est pas encore open source).

La stack technologique utilisée est la suivante :

Front- [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

La ligne de commande et le backend sont développés sur la base de Rust.

extrémité arrière [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Ligne de commande [intégrée js Moteur boa_engine](https://docs.rs/boa_engine) , [base de données intégrée fjall](https://github.com/fjall-rs/fjall) .

serveur [contabo](https://my.contabo.com) VPS

base de données [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Envoyez un mail à auto- [chasquid](https://github.com/albertito/chasquid) SMTP

## Contactez-Nous

Lorsque de nouveaux produits sont lancés, les problèmes sont inévitables.

N'hésitez pas à nous contacter via le forum Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :
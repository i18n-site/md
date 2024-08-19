# i18n.site · Outil de traduction et de création de sites MarkDown, maintenant disponible !

Après près de six mois de développement, [https://i18n.site](//i18n.site) est lancé.

Actuellement, deux outils en ligne de commande open source sont disponibles :

* `i18` : Outil de traduction MarkDown en ligne de commande
* `i18n.site` : Générateur de sites statiques multilingues, **optimisé pour l'expérience de lecture**

La traduction conserve parfaitement le format `Markdown`. Elle peut détecter les modifications de fichiers et ne traduit que ceux qui ont été modifiés.

Les traductions sont modifiables ; si le texte original est modifié, une nouvelle traduction automatique ne remplacera pas les modifications manuelles (si le paragraphe original n'a pas été modifié).

[Cliquez ici pour autoriser le suivi automatique du dépôt GitHub de i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo) et **bénéficiez de 50 $ de bonus**.

## Origine

Dans l'ère d'Internet, le marché est mondial, et le multilinguisme et la localisation sont des compétences essentielles.

Les outils de gestion de traduction actuels sont trop complexes. Les développeurs qui utilisent `git` pour la gestion des versions préfèrent souvent la ligne de commande.

C'est pourquoi j'ai développé l'outil de traduction `i18` et construit le générateur de sites multilingues `i18n.site` à partir de cet outil.

![](https://p.3ti.site/1723777556.avif)

Ce n'est que le début, il y a encore beaucoup à faire.

Par exemple, connecter le site statique aux réseaux sociaux et aux systèmes d'abonnement par courriel pour toucher les utilisateurs en temps réel lors des mises à jour.

Par exemple, intégrer des forums et des systèmes de tickets multilingues dans n'importe quelle page web, pour permettre une communication sans obstacles.

## Open Source

Les [codes front-end, back-end et en ligne de commande sont tous open source](https://i18n.site/i18n.site/c/src) (le modèle de traduction n'est pas encore open source).

La stack technique utilisée est la suivante :

Front-end : [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Ligne de commande et back-end basés sur Rust.

Back-end : [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Ligne de commande : [moteur JavaScript intégré boa_engine](https://docs.rs/boa_engine), [base de données intégrée fjall](https://github.com/fjall-rs/fjall).

Serveur VPS : [contabo](https://my.contabo.com)

Base de données : [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Envoi de courriels avec un SMTP auto-hébergé : [chasquid](https://github.com/albertito/chasquid).

## Contactez-nous

Avec de nouveaux produits, des problèmes sont inevitables.

N'hésitez pas à nous contacter via le forum Google : [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)
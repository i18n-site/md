<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Solutions internationales <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

tool de ligne de commande Markdown et Yaml, vous aider à construire un site de documentation international, prenant en charge [plus de cent langues](/i18/LANG_CODE)…

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Préface

Internet a supprimé la distance physique, mais les différences linguistiques persistent et freinent l'unité humaine.

Bien que les navigateurs soient équipés de fonctions de traduction, les moteurs de recherche ne parviennent pas encore à effectuer des recherches interlinguistiques.

Les réseaux sociaux et les e-mails incitent le public à se concentrer sur les informations dans leur langue maternelle.

Avec l'explosion de l'information et le marché mondial, pour attirer l'attention limitée, **supporter plusieurs langues est une compétence fondamentale**.

Même pour un projet open source personnel visant à toucher un public plus large, il est essentiel de choisir dès le départ une technologie compatible avec l'internationalisation.

## <a rel=id href="#project" id="project"></a> Introduction du projet

Ce site propose actuellement deux outils open source en ligne de commande :

* [i18 : Outil de traduction Markdown en ligne de commande](/i18/feature)
* [i18n.site : Générateur de sites statiques multilingues](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18 : Outil de traduction Markdown en ligne de commande

Un outil en ligne de commande ( [code source](https://github.com/i18n-site/rust/tree/main/i18) ) permettant de traduire `Markdown` et `YAML` dans plusieurs langues.

Peut préserver parfaitement le format `Markdown` . Identifie les modifications de fichiers et ne traduit que les fichiers modifiés.

La traduction est modifiable.

En cas de modification du texte original, la traduction automatique ne remplacera pas les modifications manuelles (si le paragraphe original n'a pas été modifié).

Adhérons à la philosophie `UNIX` "Tout est un fichier" et pouvons gérer des traductions dans des centaines de langues sans recourir à des solutions complexes et onéreuses au niveau de l'entreprise.

Pouvez utiliser les outils les plus familiers pour éditer le texte `Markdown` (sans pouvoir ajouter ou supprimer de paragraphes) et recourir à la méthode la plus familière pour le contrôle de version.

Une bibliothèque de code en open source peut être créée pour les fichiers de langue, permettant ainsi, via le processus de `Pull Request`, à des utilisateurs du monde entier de contribuer à l'optimisation continue des traductions. Offre une connexion fluide avec [github](//github.com) et d'autres communautés open source.

[→ Guide d'utilisation, veuillez consulter la documentation du projet](/i18).

## La meilleure qualité de traduction automatique

Nous avons développé une nouvelle génération de technologie de traduction, combinant les avantages des modèles de traduction automatique traditionnels et des grands modèles linguistiques, pour des traductions précises, fluides et élégantes.

Les tests aveugles montrent que notre qualité de traduction est significativement meilleure que celle des services concurrents.

Pour obtenir la même qualité, la quantité d'édition manuelle requise par Google Translate et `ChatGPT` est respectivement `2.67` fois et `3.15` fois celle de la nôtre.

#### <a rel=id href="#price" id="price"></a> Prix extrêmement compétitif

|                                                                                   | USD/million de mots |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Cliquez ici pour autoriser le suivi automatique du dépôt GitHub de i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo) et **bénéficiez de 50 $ de bonus**.

Remarque : Le nombre de caractères facturables = [nombre de caractères Unicode](https://en.wikipedia.org/wiki/Unicode) du fichier source × nombre de langues de traduction

### i18n.site : Générateur de sites statiques multilingues

Outil de ligne de commande ( [source code](https://github.com/i18n-site/rust/tree/main/i18n-site) ) pour générer des sites statiques multilingues.

Purement statique, optimisé pour la lecture, intégrant la traduction par [i18](#i18), il est le choix idéal pour créer des sites de documentation de projet.

Le framework front-end utilise une architecture à base de plugins, est facile à développer secondairement et peut intégrer des fonctionnalités back-end si nécessaire.

Ce site est développé sur ce framework et inclut des fonctionnalités comme les utilisateurs et les paiements ([source code](/i18n.site/src)).

[→ Guide d'utilisation, veuillez consulter la documentation du projet](/i18n.site).

## Rester en contact

Veuillez <button onclick="mailsub()">Cliquer ici pour vous abonner aux mises à jour par email</button> et <button onclick="webpush()">Activer les notifications push du navigateur</button>, nous vous informerons lors des mises à jour du produit.

Rejoignez-nous également sur nos réseaux sociaux [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Si vous rencontrez des problèmes, [→ publiez un message sur le forum des utilisateurs](https://groups.google.com/u/1/g/i18n).

## À propos de nous

> Ils dirent : " Venez, construisons une tour qui touche le ciel et rendra la race humaine célèbre. "
>
> L'Éternel le vit et dit : " La race humaine est devenue une seule langue et une seule race. Maintenant que cela est accompli, rien ne les arrêtera. "
>
> Alors, il les fit parler d'une langue à l'autre et les dispersa sur la terre.

<p style="text-align:right">── Bible·Genèse </p>

Nous aspirons à un Internet sans barrières de communication linguistique.
Nous espérons que l'humanité se réunira autour de rêves communs.

Les traductions Markdown et les sites de documentation ne sont que le début.
Synchronisez la publication du contenu sur les réseaux sociaux ;
Soutenez les commentaires bilingues et les salons de discussion ;
Un système de billets multilingues avec primes ;
Un marché de composants front-end internationalisés ;
Il y a encore tellement de choses que nous voulons réaliser.

Nous avons hâte de rencontrer des âmes sœurs dans cette mer de monde.
Nous cherchons des bénévoles pour participer au développement du code open source et à la relecture des textes traduits.
Si vous êtes intéressé, veuillez [cliquer ici pour remplir votre profil](https://ggl.link/i18n), puis rejoignez [la liste de diffusion](https://groups.google.com/u/2/g/i18n-site) pour discuter.

Nous croyons en l'open source et aimons le partage,
Bienvenue à tous pour co-créer un avenir sans frontières.
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Solutions internationales<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Ligne de commande Markdown outil Yaml , vous aide à créer un site de documents international, prenant en charge [des centaines de langues](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Préface

Internet a éliminé la distance dans l’espace physique, mais les différences linguistiques entravent toujours l’unité humaine.

Bien que le navigateur dispose d'une traduction intégrée, les moteurs de recherche ne peuvent toujours pas interroger dans plusieurs langues.

Grâce aux réseaux sociaux et au courrier électronique, les gens ont l’habitude de se concentrer sur les sources d’information dans leur propre langue maternelle.

Dans l'explosion de l'information et le marché mondial, afin de rivaliser pour attirer une attention limitée, **la prise en charge de plusieurs langues est une compétence de base** .

Même s’il s’agit d’un projet open source personnel qui souhaite influencer un public plus large, il doit dès le départ procéder à une sélection technologique internationale.

## <a rel=id href="#project" id="project"></a> Présentation du projet

Ce site propose actuellement deux outils de ligne de commande open source :

* [i18 : MarkDown Outil de traduction en ligne de commande](/i18/feature)
* [i18n.site : Générateur de sites Web statiques multilingues](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18 : outil de traduction en ligne de commande MarkDown

Un outil de ligne de commande ( [code source](https://github.com/i18n-site/rust/tree/main/i18) ) qui traduit `Markdown` et `YAML` en plusieurs langues.

Peut parfaitement conserver le format de `Markdown` . Peut identifier les modifications de fichiers et traduire uniquement les fichiers modifiés.

La traduction est modifiable.

Modifiez le texte original et traduisez-le automatiquement, les modifications manuelles de la traduction ne seront pas écrasées (si ce paragraphe du texte original n'a pas été modifié).

Vous pouvez utiliser les outils les plus familiers pour modifier `Markdown` traduction (mais vous ne pouvez pas ajouter ou supprimer de paragraphes) et utiliser la méthode la plus familière pour effectuer le contrôle de version.

Une base de code peut être créée en open source pour les fichiers de langue, et avec l'aide de `Pull Request` processus, les utilisateurs du monde entier peuvent participer à l'optimisation continue des traductions. Connexion transparente [github](//github.com) Et d'autres communautés open source.

> [!TIP]
> Nous adhérons à la philosophie UNIX selon laquelle « tout est un fichier » et pouvons gérer des traductions dans des centaines de langues sans introduire de solutions d'entreprise complexes et lourdes.

[→ Pour les instructions d'utilisation, veuillez lire la documentation du projet](/i18) .

## Traduction Automatique De La Meilleure Qualité

Nous avons développé une nouvelle génération de technologie de traduction qui combine les avantages techniques des modèles de traduction automatique traditionnels et des grands modèles linguistiques pour rendre les traductions précises, fluides et élégantes.

Les tests aveugles montrent que la qualité de nos traductions est nettement meilleure que celle de services similaires.

Pour obtenir la même qualité, la quantité d'édition manuelle requise par Google Translate et `ChatGPT` est respectivement `2.67` fois et `3.15` fois celle de la nôtre.

#### <a rel=id href="#price" id="price"></a> Prix extrêmement compétitif

|                                                                                   | USD/million de mots |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazone](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Cliquez ici pour autoriser et suivre i18n.site la bibliothèque github de](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) et **recevoir $50 de bonus** .

Remarque : Le nombre de caractères facturables = [le nombre de unicode](https://en.wikipedia.org/wiki/Unicode) dans le fichier source × le nombre de langues dans la traduction

### i18n.site : Générateur De Sites Statiques Multilingues

Outil de ligne de commande ( [code source](https://github.com/i18n-site/rust/tree/main/i18n-site) ) pour générer des sites statiques multilingues.

Purement statique, optimisé pour l'expérience de lecture, intégré à la traduction de [i18](#i18) c'est le meilleur choix pour créer un site de documents de projet.

Le framework front-end sous-jacent adopte une architecture de plug-in complète, facile à développer secondairement. Si nécessaire, des fonctions back-end peuvent être intégrées.

Ce site Web est développé sur la base de ce framework et comprend des fonctions d'utilisation, de paiement et autres ( [code source](/i18n.site/c/src) ).

[→ Pour les instructions d'utilisation, veuillez lire la documentation du projet](/i18n.site) .

## Rester en Contact

Veuillez <button onclick="mailsub()">cliquer sur cet e-mail pour vous abonner aux mises à jour du produit</button> et <button onclick="webpush()">activer le push du navigateur</button> . Nous vous informerons lorsque des mises à jour du produit seront effectuées.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) également à suivre nos comptes / [X.COM: @i18nSite](https://x.com/i18nSite)

Si vous rencontrez des problèmes [→ veuillez poster sur le forum des utilisateurs](https://groups.google.com/u/1/g/i18n) .

## À Propos De Nous

> Ils dirent : Viens, construis une tour qui atteint le ciel et rends la race humaine célèbre.
>
> L'Éternel vit cela et dit : « Tous les êtres humains ont la même langue et la même race. Maintenant que cela est accompli, tout sera fait. »
>
> Puis cela est arrivé, rendant les êtres humains incapables de comprendre la langue des autres et dispersés dans divers endroits.

<p style="text-align:right">──Bible·Genèse</p>

Nous voulons construire un Internet sans isolement de la communication linguistique.
Nous espérons que toute l’humanité se rassemblera autour d’un rêve commun.

Les sites de traduction et de documentation Markdown ne sont qu'un début.
Synchronisez la publication de contenu sur les réseaux sociaux ;
Prise en charge des commentaires et des forums de discussion bilingues ;
Un système de tickets multilingues pouvant payer des primes ;
Un marché de vente de composants front-end internationaux ;
Nous voulons faire bien plus.

Nous croyons en l'open source et aimons le partage,
Bienvenue pour créer ensemble un avenir sans frontières.

> [!NOTE]
> Nous sommes impatients de rencontrer des personnes partageant les mêmes idées dans la vaste mer de personnes.
> Nous recherchons des bénévoles pour participer au développement de code open source et à la relecture de textes traduits.
> Si vous êtes intéressé, veuillez [→ Cliquez ici pour remplir votre profil](https://ggl.link/i18n) , puis rejoignez [la liste de diffusion](https://groups.google.com/u/2/g/i18n-site) pour communiquer.
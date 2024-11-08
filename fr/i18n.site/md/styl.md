# Liste De Styles

[Cliquez ici pour parcourir le fichier source de cette page](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) et voir comment écrire `MarkDown` dans les styles suivants.

## Bloc Plié

|+| Qu’est-ce que MarkDown ?

    MarkDown est un langage de balisage léger qui permet aux utilisateurs de créer des documents formatés dans un format de texte brut facile à lire et à écrire.

    Couramment utilisé pour rédiger de la documentation, des articles de blog, des livres électroniques, des messages de forum, etc.

    Il présente les avantages suivants :

    1. Facile à apprendre
    1. Très lisible
    1. Contrôle de version convivial

       Puisque les documents `MarkDown` sont au format texte brut, les programmeurs peuvent facilement les intégrer dans les systèmes de contrôle de version (comme `git` ).

       Cela rend le suivi des modifications et la collaboration beaucoup plus simples, en particulier dans le développement d'équipe.

|-| Qu’est-ce que l’I18N ?

    « I18N » est l'abréviation de « Internationalisation ».

    Puisque le mot « Internationalisation » comporte 18 lettres entre « I » et « N », « I18N » est utilisé pour simplifier la représentation.

    En termes simples, cela signifie prendre en charge plusieurs langues.


Le bloc pliant est une syntaxe étendue de `i18n.site` à `MarkDown` , écrite comme suit :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

avec '|+| `或`|-| La ligne commençant par ` générera un bloc pliable, et le contenu du bloc pliable sera constitué des lignes suivantes avec le même niveau d'indentation (les paragraphes sont séparés par des lignes vides).

Passer|-| `标记的折叠块默认展开，`|+| `Les blocs effondrés marqués sont effondrés par défaut.

## Souligner & Barré &

C'est __ Souligner __ ,~~ barré~~ et un texte de présentation **en gras** .

Il est écrit ainsi :

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

L'analyseur `MarkDown` de l'outil de création de sites Web `i18n.site` a optimisé la syntaxe de soulignement, de barré et de gras. Il peut prendre effet sans espaces avant et après la marque, ce qui facilite la rédaction de documents dans des langues telles que la Chine, le Japon et la Corée. n'utilisez pas d'espaces comme séparateurs.

Lecture approfondie : [Pourquoi la syntaxe Markdown de Nuggets ( `**……**` ) ne prend-elle parfois pas effet ?](//juejin.cn/post/7064565848421171213)

## Citation

### Citation Sur Une Seule Ligne

> C'est dans ma nature que mes talents seront utiles et je reviendrai une fois que tout mon argent aura été dépensé.
<p style="text-align:right">─ Li Bai</p>

### Citations Sur Plusieurs Lignes

> Un autre avantage unique de la science-fiction est sa portée extrêmement large.
> Un "Guerre et Paix", en un million de mots, ne décrit que l'histoire d'une région sur plusieurs décennies ;
> Et les romans de science-fiction comme "La réponse finale" d'Asimov décrivent de manière vivante les milliards d'années d'histoire de l'univers entier, y compris les êtres humains, en quelques milliers de mots seulement.
> Une telle inclusivité et une telle audace sont impossibles à atteindre dans la littérature traditionnelle.
<p style="text-align:right">── Liu Cixin</p>

### Astuce `> [!TIP]`

> [!TIP]
> N'oubliez pas de vérifier la validité de votre passeport et de votre visa. Les documents expirés ne peuvent ni entrer ni sortir du pays.

Il est écrit ainsi

```
> [!TIP]
> YOUR CONTENT
```

### Remarque `> [!NOTE]`

> [!NOTE]
> Si vous m'envoyez un message et que je réponds instantanément, qu'est-ce que cela signifie ?
> Cela montre que j’aime vraiment jouer avec les téléphones portables.


### Avertissement `> [!WARN]`

> [!WARN]
> Lorsque l’on part dans une aventure sauvage, il est important de rester en sécurité. Voici quelques conseils de sécurité clés :
>
> - **Consultez les prévisions météo** : La semaine dernière, un groupe d'alpinistes a rencontré une tempête à mi-hauteur de la montagne car ils n'avaient pas vérifié les prévisions météorologiques et ont dû évacuer d'urgence.
> - **Emportez le matériel nécessaire** : Assurez-vous d’apporter suffisamment de nourriture, d’eau et de matériel de premiers secours.
> - **Comprendre le terrain** : Familiarisez-vous à l'avance avec le terrain et les itinéraires du domaine aventure pour éviter de vous perdre.
> - **Restez connecté** : restez connecté au monde extérieur et assurez-vous que tout le monde peut rentrer en toute sécurité.
>
> N'oubliez pas que la sécurité passe toujours en premier !

## Liste De Choses À Faire

- [x] Concevoir un prototype de produit et une liste de fonctionnalités
- [ ] Déterminer la pile technologique et les outils de développement
- [ ] Élaborer des calendriers et des jalons de développement de produits

## Liste

### Liste Ordonnée

1. en cours d'exécution
   1. Trois fois par semaine, 5 kilomètres à chaque fois
   1. Courir un semi-marathon
1. entraînement en salle de sport
   1. Deux fois par semaine, 1 heure à chaque fois
   1. Concentrez-vous sur les muscles centraux

### Liste Non Ordonnée

* événements sociaux
  - Participer aux rencontres d'échanges de l'industrie
    + Séance de partage technologique
    + Rencontre d'échange en entrepreneuriat
  - Organiser une réunion entre amis
    + Barbecue extérieur
    + soirée cinéma

## Feuille

| penseur       | Principales contributions                           |
|--------------|------------------------------------|
| Confucius         | Fondateur du confucianisme |
| Socrate     | père de la philosophie occidentale  |
| Nietzsche         | Philosophie de Superman, critiquant la moralité et la religion traditionnelles       |
| Marx       | communisme |

### Optimisation De L'affichage Des Grandes Tables

Pour les tableaux relativement volumineux, les méthodes suivantes peuvent être utilisées pour optimiser l'effet d'affichage :

1. Utilisez une police plus petite

   Par exemple, enveloppez le tableau avec `<div style="font-size:14px">` et `</div>` .

   Notez que la balise `div` doit occuper sa propre ligne et laisser des lignes vides avant et après.
1. Pour un texte plus long dans une cellule, insérez `<br>` pour renvoyer la ligne à la ligne.
1. Si une colonne est trop courte, vous pouvez ajouter `<div style="width:100px">xxx</div>` à l’en-tête pour augmenter la largeur, et vous pouvez également ajouter [`<wbr>` à l’en-tête](//developer.mozilla.org/docs/Web/HTML/Element/wbr) pour contrôler la position du saut de ligne.

Un exemple de démonstration est le suivant :

<div style="font-size:14px">

| nation       | <div style="width:70px;margin:auto">nom du penseur</div> | Ère | Principales contributions idéologiques                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Chine       | Confucius                                           | 551-479 avant JC   | Le fondateur du confucianisme a proposé des concepts fondamentaux tels que « bienveillance » et « convenance » et a mis l'accent sur la culture morale et l'ordre social. |
| la grèce ancienne     | Socrate                                       | 469-399 avant JC   | Explorer la vérité à travers le dialogue et la dialectique propose de « se connaître soi-même » et met l'accent sur la pensée rationnelle         |
| France       | Voltaire                                         | 1694-1778       | Des personnalités représentatives du siècle des Lumières prônaient la rationalité, la liberté et l’égalité, et critiquaient la superstition religieuse et le régime autoritaire.   |
| Allemagne       | Kant                                           | 1724-1804       | Mettre en avant la « Critique de la raison pure »<br> Explorez les fondements de la moralité, de la liberté et de la connaissance, en mettant l'accent sur la raison pratique     |

</div>

Le pseudocode de l'exemple ci-dessus est le suivant :

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Code en Ligne

Dans le vaste monde des langages de programmation, `Rust` , `Python` , `JavaScript` et `Go` occupent chacun une position unique.

### Plusieurs Lignes De Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Saut De Ligne Dans Le Paragraphe

Les sauts de ligne dans les paragraphes peuvent être réalisés sans ajouter de lignes vides entre les lignes.
L'espacement entre les sauts de ligne dans les paragraphes est inférieur à l'espacement entre les paragraphes.

Par exemple:

> Vivez comme une personne formidable,
> La mort est aussi un héros fantôme.
> Xiang Yu me manque toujours,
> Réticent à traverser Jiangdong.
>
> Li Qingzhao a utilisé l'histoire tragique de Xiang Yu pour faire allusion à l'incompétence de la dynastie Song.
> Exprimant son mécontentement à l'égard de la cour impériale pour sa capitulation sans combat.
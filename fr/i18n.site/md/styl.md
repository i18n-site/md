# Liste De Styles

[Cliquez ici pour parcourir le fichier source de cette page](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) et voir comment écrire `MarkDown` dans les styles suivants.

## Souligner & Barré &

C'est __ Souligner __ ,~~ barré~~ et un texte de présentation **en gras** .

Il est écrit ainsi :

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

L'analyseur `MarkDown` de l'outil de création de sites Web `i18n.site` a optimisé la syntaxe de soulignement, de barré et de gras. Il peut prendre effet sans espaces avant et après la marque, ce qui facilite la rédaction de documents dans des langues telles que la Chine, le Japon et la Corée. qui n'utilisent pas d'espaces comme séparateurs.

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
> Lorsque l’on part dans une aventure sauvage, il est important de rester en sécurité.
> La semaine dernière, un groupe d'alpinistes a rencontré une tempête à mi-hauteur de la montagne et a dû évacuer parce qu'ils n'avaient pas vérifié les prévisions météorologiques.
> N'oubliez pas que toute activité de plein air nécessite une préparation adéquate et une attention particulière à la météo.

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
    + Rencontre d'échange d'entrepreneuriat
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
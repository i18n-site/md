# Pied de page

Toujours en prenant le projet de démonstration comme exemple, le fichier `.i18n/htm/foot.pug` dans le répertoire `md` définit le pied de page du site.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) est un langage de template qui génère du `HTML`.

[➔ Cliquez ici pour apprendre la syntaxe de pug](https://pugjs.org)

**Ne pas écrire de `css` et de `js` dans `foot.pug`**, sinon il y aura des erreurs.

Bitte consulter ci-dessous, les styles doivent être écrits dans les fichiers `.css` correspondants, et les interactions sont réalisées par la création de composants web.

## Style du pied de page

Dans le projet de démonstration, il y a trois fichiers `css` sous `md/.i18n/htm`.

* `foot.css` : style du pied de page
* `import.css` : style par défaut du site `i18n.site`
* `conf.css` : icônes et polices du pied de page

### Polices d'icônes

Les icônes du pied de page sont générées en créant une police nommée `F` sur iconfont.cn ([version anglaise](https://www.iconfont.cn/?lang=en-us) / [version chinoise](https://www.iconfont.cn/?lang=zh)).

Veuillez créer vos propres polices d'icônes selon vos besoins et remplacer la configuration suivante dans `conf.css` :

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Composants web

Il est interdit d'écrire du `js` dans `foot.pug`. Si une interaction est nécessaire, veuillez créer un composant web personnalisé.

Il est possible de définir un [composant web](https://www.freecodecamp.org/news/build-your-first-web-component/) dans `md/.i18n/htm/index.js`, puis de l'utiliser dans `foot.pug`.

Créer un composant web est simple, par exemple, un balise personnalisée `<x-img>`.

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Pied de page multilingue

Le code dans `.i18n/htm/foot.pug` est comme suit :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ci-contre, `${I18N.C}` correspond à ce qui se trouve dans `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

En utilisant une syntaxe comme `${I18N.xxx}`, en combinaison avec `i18n.yml`, vous pouvez réaliser l'internationalisation multilingue du pied de page.

Ajouter `class="a"` aux liens pour éviter qu'ils ne soient convertis en format `Markdown`, voir :
 [➔ `YAML` : Comment éviter que le `HTML` des liens ne soit converti en `Markdown`](/i18/qa#H2).
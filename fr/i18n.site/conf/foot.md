# Bas De Page

Toujours en prenant le projet de démonstration comme exemple, le pied de page du site `.i18n/htm/foot.pug` défini dans le répertoire `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) est un langage de modèle qui génère `HTML` .

[➔ Cliquez ici pour apprendre la grammaire de pug](https://pugjs.org)

**N'écrivez pas `css` et `js` dans `foot.pug`** , sinon il y aura des erreurs.

Veuillez vous référer à ce qui suit, le style est écrit dans le `.css` correspondant et l'interaction est obtenue en créant des composants Web.

## Style De Pied De Page

Dans le projet démo `md/.i18n/htm` Il y a 3 `css` fichiers ci-dessous.

* `foot.css` :
* `import.css` #Style `i18n.site` pour l'ensemble : site
* Icônes et polices de pied de : `conf.css`

### Police D'icône

L'icône de pied de page est générée par iconfont.cn ( [version anglaise](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) en créant une police nommée `F`

Veuillez créer votre propre police d'icône selon vos besoins et remplacer : configuration suivante dans `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Composants Web

`foot.pug` ne peut pas y écrire `js` . Si une interaction est requise, veuillez personnaliser le composant de la page Web.

Vous pouvez définir [un composant Web](https://www.freecodecamp.org/news/build-your-first-web-component/) dans `md/.i18n/htm/index.js` puis utiliser le composant dans `foot.pug` .

C'est facile de créer des composants web, comme des balises personnalisées `<x-img>`

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

## Pied De Page Multilingue

`.i18n/htm/foot.pug` Le code qu'il contient est le suivant :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ici `${I18N.C}` Celui correspondant est en `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

En utilisant `${I18N.xxx}` similaire à cette méthode d'écriture, combinée avec `i18n.yml` , vous pouvez réaliser une internationalisation multilingue du pied de page.

Ajoutez `class="a"` au lien pour éviter que le lien ne soit converti en `MarkDown` , voir :
 [: `YAML` empêcher la conversion `HTML` du lien en `Markdown`](/i18/qa#H2) .
# Pied De Page Personnalisé

Toujours en prenant le projet de démonstration comme exemple, `.i18n/htm/foot.pug` dans le répertoire `md` définit le pied de page du site Web.

![](https://p.3ti.site/1721286077.avif)

## Style De Pied De Page

Il y a trois fichiers `css` sous `md/.i18n/htm` dans le projet de démonstration.

* `foot.css` : Style de pied de page
* `import.css` : 1Style `i18n.site` pour l'ensemble du site
* `conf.css` : Icônes et polices de pied de page

### Police D'icône

L'icône de pied de page est générée en créant une police nommée `F` iconfont.cn ( [version anglaise](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Veuillez créer votre propre police d'icône selon vos besoins et remplacer la configuration suivante par `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

Veuillez ne pas référencer directement le fichier de police de iconfont.cn car il ne peut pas être chargé sur le navigateur Safari.

## Composants Web

Vous ne pouvez pas écrire `js` sur `foot.pug` Si une interaction est requise, veuillez personnaliser le composant Web.

[Un composant Web](https://www.freecodecamp.org/news/build-your-first-web-component/) peut être défini en `md/.i18n/htm/index.js` puis utilisé en `foot.pug` .

Il est facile de créer des composants Web, tels que `<x-img>` personnalisées0 .

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

Le code en `.i18n/htm/foot.pug` est le suivant :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Ici `${I18N.C}` correspond à `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

En utilisant `${I18N.xxx}` similaire à cette méthode d'écriture, combiné avec `i18n.yml` , vous pouvez réaliser une internationalisation multilingue du pied de page.

Ajouter `class="a"` au lien revient à empêcher la conversion du lien en `MarkDown` Voir :
 [➔ `YAML` : Comment empêcher la conversion du lien `HTML` en `Markdown`](/i18/qa#H2) .
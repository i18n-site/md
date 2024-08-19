# MarkDown-Formatkonventionen

## Ankerpunkt

Die herkömmlichen `Markdown`-Ankerpunkte basieren auf Textinhalten, sind aber in mehrsprachigen Szenarien nicht anwendbar.

Die von `i18n.site` vorgeschlagene Ankerpunktlösung sieht vor, in `Markdown` Texte wie `<a rel=id href="#xxx" id="xxx"></a>` einzufügen, um manuell Positionierungsanker zu erstellen.

`<a rel=id href="#xxx" id="xxx"></a>`, hier definiert `rel=id` den Seitengestaltungsstil des Ankerpunkts, ersetzen Sie `xxx` durch Ihre tatsächliche englische Abkürzung für den Ankerpunkt.

Ankerpunkte werden normalerweise in Überschriften platziert, wie zum Beispiel:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Die Anzeige sieht wie folgt aus:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` in `Markdown` schreiben

In `Pug`-Code kann `HTML` eingebettet werden.

Inhalte innerhalb des `<pre>`-Elements werden nicht übersetzt.

Durch die Kombination dieser beiden Aspekte können Sie problemlos `HTML` in `Markdown` einfügen, um verschiedene Anzeigeeffekte zu erzielen.

Sie können die Implementierung in [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) als Beispiel nehmen, der Code lautet wie folgt:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Beachten Sie, dass im obigen `<pre>`-Element auch ein `<style>`-Block definiert ist.